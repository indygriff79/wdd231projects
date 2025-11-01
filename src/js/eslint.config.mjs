export default [
    pluginJs.configs.recommended,
    {
        languageOptions: { globals: globals.browser},
        rules: {
            semi: "error"
        }
    }
];