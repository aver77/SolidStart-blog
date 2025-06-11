import { onCleanup, onMount } from "solid-js";

export const useClickAway = (
    elementRef: () => HTMLElement,
    setIsOpened: () => (v: boolean) => void,
    isOpened?: () => boolean
) => {
    onMount(() => {
        const clickAwayListener = (event: MouseEvent | TouchEvent) => {
            if (
                /** If needed modal element is not opened already - skip it's closing */
                typeof isOpened === "function" && !isOpened() ||
                elementRef().contains(event.target as Node)
            ) {
                return;
            }

            setIsOpened()(false);
        };

        document.addEventListener("mousedown", clickAwayListener);

        onCleanup(() => {
            document.removeEventListener("mousedown", clickAwayListener);
        });
    });
};