module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:eslint-comments/recommended",
        "prettier"

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {

        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: ["@typescript-eslint", "eslint-comments", "jsx-a11y", "react"],
    rules: {
        "react/jsx-filename-extension": [1, { "allow": "as-needed" }],
        "array-callback-return": "warn",
        "default-case": "off",
        "dot-location": ["warn", "property"],
        "new-parens": "warn",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-cond-assign": ["warn", "except-parens"],
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-fallthrough": "warn",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
            "warn",
            {
                groups: [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
                allowSamePrecedence: false,
            },
        ],
        "arrow-parens": ["warn", "as-needed"],
        "brace-style": ["warn", "1tbs"],
        "comma-dangle": "off",
        curly: "warn",
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-negated-condition": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-redeclare": ["warn", { builtinGlobals: false }],
        "no-regex-spaces": "warn",
        "no-restricted-syntax": ["warn", "WithStatement"],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "warn",
        "no-this-before-super": "warn",
        "no-eval": "warn",
        "no-invalid-this": "off",
        "no-throw-literal": "warn",
        "no-undef": "off",
        "no-trailing-spaces": "warn",
        "no-unsafe-finally": "warn",
        "prefer-const": "warn",
        "spaced-comment": [
            "warn",
            "always",
            {
                markers: ["/"],
            },
        ],
        "no-unreachable": "warn",
        "no-unused-expressions": [
            "warn",
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        "no-unused-labels": "warn",
        "no-unused-vars": "off",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "off",
        "no-useless-escape": "warn",
        "no-useless-rename": [
            "warn",
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        "no-with": "warn",
        "no-whitespace-before-property": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        strict: ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "valid-typeof": "warn",
        "getter-return": "warn",
        "no-use-before-define": "off",
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",

        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/array-type": [
            "warn",
            {
                default: "array-simple",
                readonly: "generic",
            },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit",
                overrides: {
                    accessors: "explicit",
                    constructors: "explicit",
                },
            },
        ],
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/quotes": ["warn", "double"],
        "@typescript-eslint/semi": ["warn", "always"],
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "warn",
        "react/jsx-pascal-case": [
            "warn",
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/no-danger-with-children": "warn",
        // Disabled because of undesirable warnings
        // See https://github.com/facebook/create-react-app/issues/5204 for
        // blockers until its re-enabled
        // 'react/no-deprecated': 'warn',
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/no-typos": "warn",
        "react/react-in-jsx-scope": "warn",
        "react/require-render-return": "warn",
        "react/style-prop-object": "warn",

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
        "jsx-a11y/alt-text": "off",
        "jsx-a11y/anchor-has-content": "warn",
        "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/heading-has-content": "warn",
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/img-redundant-alt": "warn",
        "jsx-a11y/no-access-key": "warn",
        "jsx-a11y/no-distracting-elements": "warn",
        "jsx-a11y/no-redundant-roles": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        "jsx-a11y/scope": "warn",
        "jsx-a11y/media-has-caption": "off",
        "jsx-a11y/anchor-is-valid": "off",

        // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
        "react-hooks/rules-of-hooks": "warn",

        // https://github.com/gajus/eslint-plugin-flowtype
        "flowtype/define-flow-type": "warn",
        "flowtype/require-valid-file-annotation": "warn",
        "flowtype/use-flow-type": "warn",

        "react/jsx-key": "off",
        "react/prop-types": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/mouse-events-have-key-events": "off",
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "import/extensions": [
            "warn",
            // "ignorePackages",
            // {
            //     "ts": "never",
            //     "tsx": "never"
            // }
        ]
    },
    overrides: [{
        // enable the rule specifically for TypeScript files
        files: ["*.ts", "*.tsx"],
        rules: {
            "@typescript-eslint/explicit-function-return-type": [
                "warn",
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                },
            ],
        },
    }, ],
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
};