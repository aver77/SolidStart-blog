import { type Component, type JSX, splitProps } from "solid-js";

import cx from "classnames";

import classes from "./chip.module.css";

export interface IChip extends JSX.HTMLAttributes<HTMLSpanElement> {
    text: string;
}

const Chip: Component<IChip> = (props) => {
    const [localProps, restProps] = splitProps(props, ["text", "class"]);

    const mediaClass = "phones:!text-csm phones:!py-offsetx phones:!py-offset2x";

    return (
        <span class={cx(classes.chip, localProps.class, mediaClass)} {...restProps}>
            {localProps.text}
        </span>
    );
};

export default Chip;
