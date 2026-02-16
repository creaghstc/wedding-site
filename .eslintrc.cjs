module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: { browser: true, es2020: true },
    settings: { react: { version: "detect" } },
    rules: {
        "react/react-in-jsx-scope": "off"

    }
};