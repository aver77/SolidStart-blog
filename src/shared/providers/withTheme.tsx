import { Component, JSX, onMount } from "solid-js";

export enum Themes {
    LS_KEY = "theme",
    LIGHT = "light",
    DARK = "dark"
}

export const checkIsLightTheme = () => {
    return document.documentElement.classList.contains(Themes.LIGHT);
};

export const toggleTheme = () => {
    document.documentElement.classList.toggle(Themes.LIGHT);

    if (checkIsLightTheme()) {
        localStorage.setItem(Themes.LS_KEY, Themes.LIGHT);
    } else {
        localStorage.setItem(Themes.LS_KEY, Themes.DARK);
    }
};

const WithTheme: Component<{ children: JSX.Element }> = (props) => {
    onMount(() => {
        const shouldInitiallySetLightTheme =
            localStorage.getItem(Themes.LS_KEY) === Themes.LIGHT ||
            !localStorage.getItem(Themes.LS_KEY) &&
            window.matchMedia(`(prefers-color-scheme: ${Themes.LIGHT})`)
                .matches;

        document.documentElement.classList.toggle(
            Themes.LIGHT,
            shouldInitiallySetLightTheme
        );
    });

    return props.children;
};

export default WithTheme;
