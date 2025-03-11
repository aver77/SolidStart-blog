import LoopIcon from "~/shared/assets/svg/components/loop";
import type { Component, JSX } from "solid-js";
import Cancel from "~/shared/assets/svg/components/cancel";
import cx from "classnames";

import classes from "./input.module.css";

interface IInput extends JSX.HTMLAttributes<HTMLInputElement> {
    value: string;
    valueSetter: (newValue: string) => void;
    wrapperClass?: string;
}

const Input: Component<IInput> = ({
    value,
    valueSetter,
    wrapperClass,
    ...params
}) => {
    const { class: className, ...restParams } = params;

    return (
        <div class={cx(classes.container, wrapperClass)}>
            <LoopIcon className={classes.loop} />
            <input
                {...restParams}
                class={cx(classes.input, className)}
                value={value}
                onchange={(e) => valueSetter(e.target.value)}
            />
            {true && (
                <Cancel
                    className={classes.cancel}
                    width={"20px"}
                    height={"20px"}
                    onClick={() => valueSetter("")}
                />
            )}
        </div>
    );
};

export default Input;
