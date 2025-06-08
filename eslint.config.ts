import {defineConfig, globalIgnores} from "eslint/config";
import solid from "eslint-plugin-solid";
// @ts-ignore
import tsParser from "@typescript-eslint/parser";
import stylistic from "@stylistic/eslint-plugin";
// @ts-ignore
import simpleImportSort from "eslint-plugin-simple-import-sort";
import css from "@eslint/css";
// @ts-ignore
import betterTailwind from "eslint-plugin-better-tailwindcss";

import type { ESLint } from "eslint";

export default defineConfig([
    globalIgnores([
        "node_modules/**/*",
        ".vinxi/**/*",
        ".output/**/*",
        ".husky/**/*"
    ]),
    {
        files: ["src/**/*.css"],
        ignores: ["src/**/root.css"],
        language: "css/css",
        plugins: {
            css
        },
        rules: {
            /** CSS */
            "css/no-duplicate-imports": "error",
            "css/no-empty-blocks": "error",
            /** Safe measure for display: black; cccolor: white and so on */
            "css/no-invalid-properties": "error",
            /** Use only widely available CSS features */
            "css/use-baseline": ["warn", {
                available: "widely"
            }]
        }
    },
    {
        files: ["src/**/*.{ts,tsx,js,jsx}"],
        plugins: {
            "solid": solid as unknown as ESLint.Plugin,
            "@stylistic": stylistic,
            "simple-import-sort": simpleImportSort,
            "better-tailwind": betterTailwind
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            /** Tailwind */
            "better-tailwind/sort-classes": "error",
            "better-tailwind/no-unnecessary-whitespace": "error",
            "better-tailwind/multiline": ["error", {
                group: "newLine", // New line for new groups of classes
                preferSingleLine: true, // Prefer a single line for different modifiers/variants like :hover, :active
                printWidth: 100 // Max class line length
            }],

            /** Import sort */
            'simple-import-sort/imports': ['error', {
                groups: [
                    /** 1. Imports from solid-js */
                    ['^solid-js', '^@solidjs'],
                    /** 2. Imports from rest external libs (including @tanstack-query) */
                    ['^\\w','^@\\w'],
                    /** 3. Absolute project imports (~/) and relative import */
                    ['^~/', '^\\.'],
                    /** 4. Type-imports */
                    ['^type:'],
                    /** 5. Media-files (images, fonts etc.) */
                    ['\\.(png|jpe?g|gif|svg|webp|avif|mp4|mp3|woff2?|eot|ttf|otf)$'],
                    /** 6. Styles */
                    ['\\.css$', '\\.scss$', '\\.sass$', '\\.less$'],
                ],
            }],

            /** Codestyle: */
            "@stylistic/max-len": [
                "error",
                {
                    code: 100, // Max. code line length
                    comments: 120, // Max. comment code line length
                    tabWidth: 4, // Indents
                    ignoreTemplateLiterals: true, // Ignore line length for literals
                    ignoreStrings: true, // Ignore line length for string
                    ignoreComments: true // Ignore line length for comments
                }
            ],
            /** Extra indents check */
            "@stylistic/indent": ["error", 4],
            "@stylistic/indent-binary-ops": ["error", 4],
            /** ";" in the end */
            "@stylistic/semi": ["error", "always"],
            /** Always double quotes */
            "@stylistic/quotes": ["error", "double"],
            /** Array like [1, 2] not like [ 1, 2 ] */
            "@stylistic/array-bracket-spacing": ["error", "never"],
            /** Callback param inside () */
            "@stylistic/arrow-parens": ["error", "always"],
            /** () => {} - force spacings before and after => */
            "@stylistic/arrow-spacing": [
                "error",
                { before: true, after: true }
            ],
            /** Force spacings like: { this.bar = 0; } */
            "@stylistic/block-spacing": ["error", "always"],
            /**
             * try {
             *   somethingRisky();
             * } catch(e) {
             *   handleError();
             * }
             * */
            "@stylistic/brace-style": ["error"],
            /** [1, 2, 3] - spacing only after ',' */
            "@stylistic/comma-spacing": [
                "error",
                { before: false, after: true }
            ],
            /** Force if (bool) { foo() } to be like
             * if (bool) {
             *   foo()
             * }
             * */
            "@stylistic/curly-newline": ["error", "always"],
            /** '.' on the same line with property like
             * promise
             *   .then(() => {...})
             * */
            "@stylistic/dot-location": ["error", "property"],
            "@stylistic/jsx-max-props-per-line": [1, { when: "multiline" }],
            /** JsxComponentNaming like this */
            "@stylistic/jsx-pascal-case": ["error"],
            "@stylistic/jsx-quotes": ["error", "prefer-double"],
            /** ';' in the end of ts interface fields */
            "@stylistic/member-delimiter-style": ["error"],
            "@stylistic/multiline-ternary": ["error"],
            /** Removes unnesessary wrap to () */
            "@stylistic/no-extra-parens": ["error", "all"],
            /** No more than 1 ',' in a row */
            "@stylistic/no-extra-semi": ["error"],
            /** No more than 1 space in a row */
            "@stylistic/no-multi-spaces": ["error"],
            /** Spaces in object like: var obj = { 'foo': 'bar' }; */
            "@stylistic/object-curly-spacing": ["error", "always"],
            /** Only obj properties like '0-12x' should be in commas */
            "@stylistic/quote-props": ["error", "as-needed"],
            /** No space after spread, like [...arr] */
            "@stylistic/rest-spread-spacing": ["error", "never"],
            /** Space before every {} */
            "@stylistic/space-before-blocks": ["error"],
            /** No space before functions like: function() {} except const foo = async () => {...} */
            "@stylistic/space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always"
                }
            ],
            /** Comments with spaces like in this file :) */
            "@stylistic/spaced-comment": ["error", "always"],
            /** No spaces inside template literals like `Hey, ${123}` */
            "@stylistic/template-curly-spacing": "error",
            /** Type annotation like: const a: number = 1 */
            "@stylistic/type-annotation-spacing": "error",
            /** Generics like type Foo<T, K> = T */
            "@stylistic/type-generic-spacing": ["error"],

            /** Solid-js: */
            /** Only 1 return in Solid component, otherwise it can lose reactivity */
            "solid/components-return-once": "error",
            /** Imports only from 'solid-js' lib */
            "solid/imports": "error",
            /** No URLs like <a href="javascript:alert('hacked!')" /> */
            "solid/jsx-no-script-url": "error",
            /** No destructure props, or Solid can lose reactivity */
            "solid/no-destructure": "error",
            /** No empty variables in jsx */
            "solid/jsx-no-undef": "error",
            /** Don't use array of deps [] in createEffect, like in useEffect'e */
            "solid/no-react-deps": "error",
            /** 'className' abd 'htmlFor' don't maintain in solid-js */
            "solid/no-react-specific-props": "error",
            /** Use <For/>, instead of <div>{props.arr.map(p => p)}</div> like in React */
            "solid/prefer-for": "error",
            /** Use <Show when={props.bool}/> instead of {props.bool && <div>...</div>} */
            "solid/prefer-show": "error",
            /** Self-closing empty tag */
            "solid/self-closing-comp": "error",
            /** General reactivity check */
            "solid/reactivity": "error",

            "solid/no-innerhtml": "warn",
            /** Don't create proxy manually, use signals, effects etc. */
            "solid/no-proxy-apis": "warn",
            /** Consistent names of event handlers */
            "solid/event-handlers": "warn",
            /** Event handlers should be named like in solid-js like on:click, but not onClick like in React */
            "solid/no-unknown-namespaces": "warn",
            /** In solid that is valid to write style attribute in kebab-case, not only in camelCase like in React */
            "solid/style-prop": "warn"
        }
    }
]);