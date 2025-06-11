import { splitProps } from "solid-js";

import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";
import {getColorClass} from "~/shared/assets/svg/utils";

const Filter = (props: ISvg) => {
    const [localProps, restProps] = splitProps(props, ["width", "height", "fill"]);

    return (
        <SvgWrapper
            {...restProps}
            width={localProps.width || "29px"}
            height={localProps.height || "19px"}
            viewBox="0 0 29 19"
        >
            <path
                d="M2.3125 1.78125H26.6875M7.00063 9.5H21.9994M11.6888 17.2188H17.3112"
                class={getColorClass("stroke", localProps.fill)}
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </SvgWrapper>
    );
};

export default Filter;
