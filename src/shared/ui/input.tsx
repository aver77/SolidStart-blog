import { type Component, type JSX, Show, splitProps } from "solid-js";

import cx from "classnames";

import Cancel from "~/shared/assets/svg/components/cancel";
import LoopIcon from "~/shared/assets/svg/components/loop";

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
        <div class={cx("relative w-full", localProps.wrapperClass)}>
            <LoopIcon class={`
              left-offset5x absolute top-[50%] transform-[translate(0,-50%)]
              cursor-pointer
            `} />
            <input
                {...restProps}
                class={cx(`
                  bg-gray
                  pl-[calc(theme(spacing.offset10x)+theme(spacing.offset5x))]
                  pr-[calc(theme(spacing.offset10x)+theme(spacing.offset3x))]
                  py-offset3x w-full rounded-full border-1 border-black
                  transition duration-300 outline-none
                  light:border-warmDWhite light:bg-warmDWhite
                  light:hfa:border-warmBrown
                  hfa:border-lightGray
                `, localProps.class)}
                placeholder={"Search..."}
                value={localProps.value}
                onInput={(e) => localProps.handleChange(e.target.value)}
            />
            <Show when={localProps.value.length > 0}>
                <div class={`
                  p-offset4x -m-offset4x top-[calc(50%+theme(spacing.offset4x))]
                  right-offset3x absolute inline-block
                  transform-[translate(0,-50%)] cursor-pointer
                `}
                onClick={() => localProps.handleChange("")}>
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
