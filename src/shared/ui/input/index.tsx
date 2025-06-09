import { type Component, type JSX, Show, splitProps } from "solid-js";

import cx from "classnames";

import Cancel from "~/shared/assets/svg/components/cancel";
import LoopIcon from "~/shared/assets/svg/components/loop";

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
        "class",
    ]);

    return (
        <div class={cx(classes.container, localProps.wrapperClass)}>
            <LoopIcon class={classes.loop} />
            <input
                {...restProps}
                class={cx(classes.input, localProps.class)}
                placeholder={"Search..."}
                value={localProps.value}
                onInput={(e) => localProps.handleChange(e.target.value)}
            />
            <Show when={localProps.value.length > 0}>
                <div class={classes.cancel} onClick={() => localProps.handleChange("")}>
                    <Cancel
                        width={"20px"}
                        height={"20px"}
                    />
                </div>
            </Show>
        </div>
    );
};

export default Input;
