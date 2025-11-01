import "../css/style.css";
import "../css/home.css";

import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";


function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
   introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;



}
function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
menuButton.addEventListener("click", (ev) => {
  let target = ev.target;
  document.querySelector(".global-nav").classList.toggle("show");

  if (target.tagName != "BUTTON") {
    target = target.cloest("button");
  }
  if (document.querySelector(".global-nav").classList.contains("show")) {
    target.setAttribute("aria-expanded", true);
  } else{
    target.setAttribute("aria-expanded, false");
  }
  console.log("toggle");
});
}


async function init() {
  const parkData = await getParkData();
  const links = getinfoLinks(parkData.images);
  setHeaderFooter();
  setParkIntro(parkData);
  setParkInfoLinks(links);
  setParkInfoLinks(links);
}
init();

