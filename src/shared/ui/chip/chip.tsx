import { type Component, type JSX, splitProps } from "solid-js";

import cx from "classnames";

import classes from "./chip.module.css";

export interface IChip extends JSX.HTMLAttributes<HTMLSpanElement> {
    text: string;
}

const Chip: Component<IChip> = (props) => {
    const [localProps, restProps] = splitProps(props, ["text", "class"]);

    return (
        <span class={cx(classes.chip, localProps.class)} {...restProps}>
            {localProps.text}
        </span>
    );
};

export default Chip;
