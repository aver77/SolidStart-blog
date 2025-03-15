import { type Component, type JSX, splitProps } from "solid-js";
import cx from "classnames";

interface IChip extends JSX.HTMLAttributes<HTMLSpanElement> {
    text: string;
}

const Chip: Component<IChip> = (props) => {
    const [localProps, restProps] = splitProps(props, ["text", "class"]);

    return (
        <span
            class={cx(
                "rounded-full bg-gray py-offset2x px-offset3x text-sm whitespace-nowrap overflow-hidden text-ellipsis",
                localProps.class
            )}
            {...restProps}
        >
            {localProps.text}
        </span>
    );
};

export default Chip;
