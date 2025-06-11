import { Component, splitProps } from "solid-js";

import cx from "classnames";

import Chip, { IChip } from "~/shared/ui/chip/chip";

interface IOutlinedChip extends IChip {
    selected: boolean;
}

const OutlinedChip: Component<IOutlinedChip> = (props) => {
    const [localProps, restProps] = splitProps(props, ["text", "selected"]);

    return (
        <Chip
            text={localProps.text}
            class={cx(`
              border-lightestGray cursor-pointer rounded-md border border-solid
              light:border-warmBrown
            `, !localProps.selected && `
              hfa:text-black hfa:bg-lightestGray
              light:hfa:text-warmGold light:hfa:border-warmGold
              light:hfa:bg-warmDWhite
            `, localProps.selected && `
              !bg-gold !border-gray !text-gray
              light:!bg-warmGold light:!border-warmGold light:!text-white
            `)}
            {...restProps}
        />
    );
};

export default OutlinedChip;
