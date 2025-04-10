import { createSignal, onMount } from "solid-js";

const useCssVarInComponent = (cssVar: string) => {
    const [cssVarValue, setCssVarValue] = createSignal("");

    onMount(() => {
        const root = document.documentElement;
        const cssColor = getComputedStyle(root).getPropertyValue(cssVar).trim();
        if (cssColor) setCssVarValue(cssColor);
    });

    return cssVarValue;
};

export default useCssVarInComponent;
