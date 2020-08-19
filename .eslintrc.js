module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "react/prop-types": 0,
    },
};
