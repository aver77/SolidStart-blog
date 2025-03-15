import { Component, JSX } from "solid-js";
import cx from "classnames";

interface IChip extends JSX.HTMLAttributes<HTMLSpanElement> {
    text: string;
}

const Chip: Component<IChip> = ({ text, ...props }) => {
    const { class: className, ...restProps } = props;

    return (
        <span
            class={cx(
                "rounded-full bg-gray py-offset2x px-offset3x text-sm whitespace-nowrap overflow-hidden text-ellipsis",
                className
            )}
            {...restProps}
        >
            {text}
        </span>
    );
};

export default Chip;
