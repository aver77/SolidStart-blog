import { type Component, type JSX, splitProps } from "solid-js";

export interface ISvg extends JSX.HTMLAttributes<SVGSVGElement> {
    height?: `${string}px`;
    width?: `${string}px`;
    style?: string;
    className?: string;
    viewBox?: string;
    fill?: string;
}

const SvgWrapper: Component<ISvg & { children: JSX.Element }> = (props) => {
    const [localProps, restProps] = splitProps(props, [
        "width",
        "height",
        "viewBox",
        "className",
        "style",
        "children"
    ]);

    return (
        <svg
            {...restProps}
            width={localProps.width || "28px"}
            height={localProps.height || "28px"}
            viewBox={localProps.viewBox || "0 0 1024 1024"}
            class={
                localProps.className ??
                "fill-white hover:fill-gold focus:fill-gold active:fill-gold"
            }
            style={localProps.style}
            xmlns="http://www.w3.org/2000/svg"
        >
            {localProps.children}
        </svg>
    );
};

export default SvgWrapper;
