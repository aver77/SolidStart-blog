import type { Component, JSX } from "solid-js";

export interface ISvg extends JSX.HTMLAttributes<SVGSVGElement> {
    height?: `${string}px`;
    width?: `${string}px`;
    style?: string;
    className?: string;
    viewBox?: string;
    fill?: string;
}

const SvgWrapper: Component<ISvg & { children: JSX.Element }> = (props) => {
    const {
        width = "28px",
        height = "28px",
        viewBox = "0 0 1024 1024",
        className = "fill-white hover:fill-gold focus:fill-gold active:fill-gold",
        style,
        children,
        ...restParams
    } = props;

    return (
        <svg
            {...restParams}
            width={width}
            height={height}
            viewBox={viewBox}
            class={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
};

export default SvgWrapper;
