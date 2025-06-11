import { type Component, type JSX, splitProps } from "solid-js";

import cx from "classnames";

export interface IChip extends JSX.HTMLAttributes<HTMLSpanElement> {
    text: string;
}

const Chip: Component<IChip> = (props) => {
    const [localProps, restProps] = splitProps(props, ["text", "class"]);

    return (
        <span class={cx(`
          bg-gray py-offset2x px-offset3x text-csm overflow-hidden rounded-full
          text-ellipsis whitespace-nowrap transition duration-300
          light:text-warmBrown light:bg-warmDWhite
          phones:!text-csm phones:!py-offsetx phones:!py-offset2x
        `, localProps.class)}
        {...restProps}>
            {localProps.text}
        </span>
    );
};

export default Chip;
