import { defineConfig } from "eslint/config";
import solid from "eslint-plugin-solid";
import tsParser from "@typescript-eslint/parser";

// TODO:
// 1. Вначале - правильно линтить ts - чтобы все было строго и тд
// 2. Линтить solid (контролировать чтобы пропсы не деструктурировались,
// чтобы реактивность сохранялась и тд)
// 3. Линтить codestyle - import order, отступы и тд

export default defineConfig([
    {
        plugins: {
            solid
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "tsconfig.json",
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "solid/reactivity": "warn",
            "solid/no-destructure": "warn",
            "solid/jsx-no-undef": "error"
        }
    }
]);
