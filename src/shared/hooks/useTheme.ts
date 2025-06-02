import { createSignal, onCleanup, onMount } from "solid-js";
import { checkIsLightTheme } from "~/shared/providers/withTheme";

export const useTheme = (isInitialLightTheme: boolean) => {
    const [isLightTheme, setIsLightTheme] = createSignal(isInitialLightTheme);

    onMount(() => {
        setIsLightTheme(checkIsLightTheme());
    });

    onMount(() => {
        const observer = new MutationObserver(() => {
            setIsLightTheme(checkIsLightTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        onCleanup(() => observer.disconnect());
    });

    return { isLightTheme, setIsLightTheme };
};
