import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";
import { splitProps } from "solid-js";
import useCssVarInComponent from "~/shared/hooks/useCssVarInComponent";

const Book = (props: ISvg) => {
    const [localProps, restProps] = splitProps(props, [
        "width",
        "height",
        "fill"
    ]);

    const fill = useCssVarInComponent("--color-lightGray");

    return (
        <SvgWrapper
            {...props}
            width={localProps.width || "20px"}
            height={localProps.height || "16px"}
            viewBox="0 0 20 16"
            fill="none"
            className=""
        >
            <path
                d="M10 2.375C10 2.375 8.65 0.5 5.5 0.5C2.35 0.5 1 2.375 1 2.375V15.5C1 15.5 2.35 14.5625 5.5 14.5625C8.65 14.5625 10 15.5 10 15.5M10 2.375V15.5M10 2.375C10 2.375 11.35 0.5 14.5 0.5C17.65 0.5 19 2.375 19 2.375V15.5C19 15.5 17.65 14.5625 14.5 14.5625C11.35 14.5625 10 15.5 10 15.5"
                stroke={localProps.fill || fill()}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </SvgWrapper>
    );
};

export default Book;
