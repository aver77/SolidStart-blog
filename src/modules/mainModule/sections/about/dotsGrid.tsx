import { For } from "solid-js";

import classes from "./dotsGrid.module.css";

const dotsData = Array(500).fill(undefined);

const Dots = () => {
    return (
        <div class={classes["dots"]}>
            <For each={dotsData}>
                {(_) => {
                    return (
                        <div class={classes["dot-wrapper"]}>
                            <div class={classes["dot"]} />
                        </div>
                    );
                }}
            </For>
        </div>
    );
};

export default Dots;
