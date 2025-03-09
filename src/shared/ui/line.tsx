import { Component, JSX } from "solid-js";
import cx from "classnames";
import content from "*.scss";

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

const Line: Component<ILine> = ({
    stroke,
    color,
    className,
    children,
    align = LineAligns.LEFT
}) => {
    const line = (
        <div
            class={cx(
                className,
                `border-b-[${stroke || 1}px]`,
                "border-solid border-lightGray w-full"
            )}
            style={color ? { "border-color": color } : {}}
        />
    );

    if (children) {
        const getContent = () => {
            switch (align) {
                case LineAligns.RIGHT: {
                    return (
                        <>
                            {line}
                            {children}
                        </>
                    );
                }
                case LineAligns.CENTER: {
                    return (
                        <>
                            {line}
                            {children}
                            {line}
                        </>
                    );
                }
                case LineAligns.LEFT:
                default: {
                    return (
                        <>
                            {children}
                            {line}
                        </>
                    );
                }
            }
        };

        return (
            <div class="flex flex-nowrap gap-offset3x items-center">
                {getContent()}
            </div>
        );
    }

    return line;
};

export default Line;
