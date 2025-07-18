import { splitProps } from "solid-js";

import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";
import { getColorClass } from "~/shared/assets/svg/utils";

const DocumentSad = (props: ISvg) => {
    const [localProps, restProps] = splitProps(props, [
        "width",
        "height",
        "fill",
        "viewBox",
    ]);

    return (
        <SvgWrapper
            {...restProps}
            width={localProps.width || "120px"}
            height={localProps.height || "120px"}
            viewBox={localProps.viewBox || "4 0 32 32"}
        >
            <g>
                <g>
                    <path
                        d="M21.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S21.09,14.75,21.5,14.75z"
                        class={getColorClass("fill", localProps.fill)}
                    />

                    <path
                        d="M10.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S10.09,14.75,10.5,14.75z"
                        class={getColorClass("fill", localProps.fill)}
                    />
                </g>

                <g>
                    <g>
                        <polyline
                            fill="none"
                            points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <polyline
                            fill="none"
                            id="XMLID_4072_"
                            points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <g>
                            <path
                                d="M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z"
                                fill="none"
                                class={getColorClass("stroke", localProps.fill)}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                            />

                            <path
                                d="M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z"
                                fill="none"
                                class={getColorClass("stroke", localProps.fill)}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                            />
                        </g>
                    </g>

                    <g>
                        <polyline
                            fill="none"
                            points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <polyline
                            fill="none"
                            points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <path
                            d="M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5"
                            fill="none"
                            class={getColorClass("stroke", localProps.fill)}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                        />

                        <g>
                            <path
                                d="M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z"
                                fill="none"
                                class={getColorClass("stroke", localProps.fill)}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                            />

                            <path
                                d="M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z"
                                fill="none"
                                class={getColorClass("stroke", localProps.fill)}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </SvgWrapper>
    );
};

export default DocumentSad;
