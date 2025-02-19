/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            screens: {
                iphones: {
                    raw: "((max-width: 500px) and (max-height: 500px))"
                },
                ipadSm: {
                    raw: "(max-width: 700px)"
                },
                ipadLg: {
                    raw: "(max-width: 1000px)"
                }
            }
        }
    },
    plugins: []
};
