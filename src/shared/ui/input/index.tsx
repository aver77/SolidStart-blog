import LoopIcon from "~/shared/assets/svg/components/loop";
import type { Accessor, Component, JSX } from "solid-js";
import Cancel from "~/shared/assets/svg/components/cancel";
import cx from "classnames";

import classes from "./input.module.css";

interface IInput
    extends Omit<JSX.HTMLAttributes<HTMLInputElement>, "onChange"> {
    value: Accessor<string>;
    handleChange: (v: string) => void;
    wrapperClass?: string;
}

const Input: Component<IInput> = (props) => {
    const { value, handleChange, wrapperClass, ...restProps } = props;
    const { class: className, ...restParams } = restProps;

    return (
        <div class={cx(classes.container, wrapperClass)}>
            <LoopIcon className={classes.loop} />
            <input
                {...restParams}
                class={cx(classes.input, className)}
                value={value()}
                onInput={(e) => handleChange(e.target.value)}
            />
            {value().length > 0 && (
                <Cancel
                    className={classes.cancel}
                    width={"20px"}
                    height={"20px"}
                    onClick={() => handleChange("")}
                />
            )}
        </div>
    );
};

export default Input;
