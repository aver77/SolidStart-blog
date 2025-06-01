import type { Component, JSX } from "solid-js";
import cx from "classnames";

export enum LineAligns {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}

interface ILineWithContent {
    children: JSX.Element;
    align?: LineAligns;
}

interface ILineWithoutContent {
    children?: never;
    align?: never;
}

type ILine = { stroke?: number; color?: string; className?: string } & (
    | ILineWithContent
    | ILineWithoutContent
);

const Line: Component<ILine> = (_props) => {
      const props = mergeProps({ align: LineAligns.LEFT }, _props);
const line = (
        <div
            class={cx(
                props.className,
                "border-solid border-lightGray light:border-warmBrown w-full"
            )}
            style={{
                ...(props.color ? { "border-color": props.color } : {}),
                "border-bottom-width": `${props.stroke || 1}px`
            }}
        />
    );

    if (props.children) {
        const getContent = () => {
            switch (props.align) {
                case LineAligns.RIGHT: {
                    return (
                        <>
                            {line}
                            {props.children}
                        </>
                    );
                }
                case LineAligns.CENTER: {
                    return (
                        <>
                            {line}
                            {props.children}
                            {line}
                        </>
                    );
                }
                case LineAligns.LEFT:
                default: {
                    return (
                        <>
                            {props.children}
                            {line}
                        </>
                    );
                }
            }
        };

        return (
            <div class="flex flex-nowrap gap-offset3x items-center duration-300">
                {getContent()}
            </div>
        );
    }

    return line;
};

export default Line;
