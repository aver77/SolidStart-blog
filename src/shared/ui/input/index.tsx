import LoopIcon from "~/shared/assets/svg/components/loop";
import { type Component, type JSX, splitProps } from "solid-js";
import Cancel from "~/shared/assets/svg/components/cancel";
import cx from "classnames";

import classes from "./input.module.css";

interface IInput
    extends Omit<JSX.HTMLAttributes<HTMLInputElement>, "onChange"> {
    value: string;
    handleChange: (v: string) => void;
    wrapperClass?: string;
}

const Input: Component<IInput> = (props) => {
    const [localProps, restProps] = splitProps(props, [
        "value",
        "handleChange",
        "wrapperClass",
        "class"
    ]);

    return (
        <div class={cx(classes.container, localProps.wrapperClass)}>
            <LoopIcon className={classes.loop} />
            <input
                {...restProps}
                class={cx(classes.input, localProps.class)}
                value={localProps.value}
                onInput={(e) => localProps.handleChange(e.target.value)}
            />
            {localProps.value.length > 0 && (
                <Cancel
                    className={classes.cancel}
                    width={"20px"}
                    height={"20px"}
                    onClick={() => localProps.handleChange("")}
                />
            )}
        </div>
    );
};

export default Input;
