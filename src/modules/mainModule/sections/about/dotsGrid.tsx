import { For } from "solid-js";

import classes from "./dotsGrid.module.css";
import cx from "classnames";

const dotsData = Array(500).fill(undefined);

const Dots = () => {
    const mediaClass = "ipadLg:!right-offset8x ipadSm:!left-offset3x";

    return (
        <div class={cx(classes["dots"], mediaClass)}>
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
