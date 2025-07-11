import { splitProps } from "solid-js";

import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";

const ThemeMoon = (props: ISvg) => {
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
            viewBox="0 0 512 512"
            fill="none"
        >
            <g>
                <path d="m494.9,331.3c-6.1-6.1-15.3-7.8-23.2-4.2-37.1,17.1-78.3,23.2-119,17.6-117.3-16.3-199.5-125.2-183.3-242.8 3-21.4 9-42.2 18.1-61.6 3.6-7.8 2-17.1-4.1-23.2-6.1-6.1-15.3-7.7-23.2-4.2-43.7,19.4-130.3,81.1-146.5,197.9-25.8,186.5 139,284.9 218.4,289.2 55.7,3.1 189.9,8.1 266.9-145.5 3.8-7.7 2-17.1-4.1-23.2zm-257.2,127.9c-117.3-16.3-199.5-125.2-183.3-242.8 7.6-55 35.5-103.8 77.4-137.7-1.2,5.8-2.2,11.6-3,17.5-27.2,193.6 143,282.8 218.3,289.2 29,2.5 57.9,3.1 86-2.7-46.5,57.2-119.7,87-195.4,76.5z" />
            </g>
        </SvgWrapper>
    );
};

export default ThemeMoon;
