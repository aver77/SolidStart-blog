import { Component, splitProps } from "solid-js";

import cx from "classnames";

import Chip, { IChip } from "~/shared/ui/chip/chip";

import classes from "./outlinedChip.module.css";

interface IOutlinedChip extends IChip {
    selected: boolean;
}

const OutlinedChip: Component<IOutlinedChip> = (props) => {
    const [localProps, restProps] = splitProps(props, ["text", "selected"]);

    return (
        <Chip
            text={localProps.text}
            class={cx(classes.base, localProps.selected && classes.selected)}
            {...restProps}
        />
    );
};

export default OutlinedChip;
