module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    arrowParens: "avoid",
    trailingComma: "all",
    bracketSpacing: true,
    endOfLine: "auto",
    overrides: [
        {
            files: ["*.json", "*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
    singleQuote: false,
    plugins: [require("prettier-plugin-tailwindcss")],
};
