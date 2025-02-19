import { Component, JSX } from "solid-js";
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
const Index: Component<IButton> = ({
    children,
    type = ButtonTypes.FILLED,
    disabled = false,
    ...restProps
}) => {
    const { class: restClass, ...extractedRestProps } = restProps;

    const typeClass = ButtonTypes.FILLED ? classes.filled : classes.unfilled;

    return (
        <button
            class={cn(
                classes.btnShared,
                disabled && classes.disabled,
                typeClass,
                restClass
            )}
            {...extractedRestProps}
        >
            {children}
        </button>
    );
};

export default Index;
