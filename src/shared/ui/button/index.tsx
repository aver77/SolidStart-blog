import { type Component, type JSX, splitProps } from "solid-js";
import cn from "classnames";

import classes from "./button.module.css";

export enum ButtonTypes {
    FILLED = "FILLED",
    OUTLINED = "OUTLINED"
}

interface IButton extends JSX.HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element;
    type?: ButtonTypes;
    disabled?: boolean;
}
const Index: Component<IButton> = (props) => {
    const [localProps, restProps] = splitProps(props, [
        "children",
        "type",
        "disabled",
        "class"
    ]);

    const typeClass = ButtonTypes.FILLED ? classes.filled : classes.unfilled;

    return (
        <button
            class={cn(
                classes.btnShared,
                localProps.disabled && classes.disabled,
                typeClass,
                localProps.class
            )}
            {...restProps}
        >
            {localProps.children}
        </button>
    );
};

export default Index;
