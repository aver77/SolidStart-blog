import { splitProps } from "solid-js";

import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";
import { getColorClass } from "~/shared/assets/svg/utils";

const LoopSad = (props: ISvg) => {
    const [localProps, restProps] = splitProps(props, [
        "width",
        "height",
        "fill",
    ]);

    return (
        <SvgWrapper
            {...restProps}
            width={localProps.width || "120px"}
            height={localProps.height || "120px"}
            viewBox="0 0 32 32"
        >
            <g>
                <g>
                    <g>
                        <path
                            d="M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z"
                            class={getColorClass("fill", localProps.fill)}
                        />

                        <path
                            d="M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z"
                            class={getColorClass("fill", localProps.fill)}
                        />
                    </g>
                </g>

                <g>
                    <g>
                        <line
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            x1="23.43"
                            x2="21.214"
                            y1="23.401"
                            y2="21.186"
                        />

                        <path
                            d="M29.914,27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828,0C23.208,23.964,23,24.466,23,25s0.208,1.036,0.586,1.414l3.5,3.5     c0.378,0.378,0.88,0.586,1.414,0.586s1.036-0.208,1.414-0.586S30.5,29.034,30.5,28.5S30.292,27.464,29.914,27.086z"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <circle
                            cx="13"
                            cy="13"
                            fill="none"
                            r="11.5"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M12,15.521c0-0.55,0.45-1,1-1s1,0.45,1,1"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />
                    </g>

                    <g>
                        <line
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            x1="23.43"
                            x2="21.214"
                            y1="23.401"
                            y2="21.186"
                        />

                        <path
                            d="M29.914,27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828,0C23.208,23.964,23,24.466,23,25s0.208,1.036,0.586,1.414l3.5,3.5     c0.378,0.378,0.88,0.586,1.414,0.586s1.036-0.208,1.414-0.586S30.5,29.034,30.5,28.5S30.292,27.464,29.914,27.086z"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <circle
                            cx="13"
                            cy="13"
                            fill="none"
                            r="11.5"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M12,15.521c0-0.55,0.45-1,1-1s1,0.45,1,1"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />
                    </g>
                </g>
            </g>
        </SvgWrapper>
    );
};

export default LoopSad;
