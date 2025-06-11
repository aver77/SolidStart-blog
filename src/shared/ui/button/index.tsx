import { type Component, type JSX, splitProps } from "solid-js";

import cx from "classnames";

import classes from "./button.module.css";

export enum ButtonTypes {
    FILLED = "FILLED",
    OUTLINED = "OUTLINED",
}

interface IButton extends JSX.HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element;
    type?: ButtonTypes;
    disabled?: boolean;
}
const Button: Component<IButton> = (props) => {
    const [localProps, restProps] = splitProps(props, [
        "children",
        "type",
        "disabled",
        "class",
    ]);

    const typeClass = ButtonTypes.FILLED
        ? classes.filled
        : classes.unfilled;

    const mediaClass = "ipadLg:!px-offset3x ipadLg:!py-offset2x ipadLg:!text-csm";

    return (
        <button
            class={cx(
                classes.btnShared,
                mediaClass,
                localProps.disabled && classes.disabled,
                typeClass,
                localProps.class,
            )}
            {...restProps}
        >
            {localProps.children}
        </button>
    );
};

export default Button;
