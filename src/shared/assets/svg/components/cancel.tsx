import { splitProps } from "solid-js";

import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";
import { getColorClass } from "~/shared/assets/svg/utils";

const Cancel = (props: ISvg) => {
    const [localProps, restProps] = splitProps(props, [
        "width",
        "height",
        "fill",
    ]);

    return (
        <SvgWrapper
            {...restProps}
            width={localProps.width || "28px"}
            height={localProps.height || "28px"}
            viewBox="0 0 64 64"
        >
            <path
                d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
                class={getColorClass("fill", localProps.fill, "lightGray")}
            />
        </SvgWrapper>
    );
};

export default Cancel;
