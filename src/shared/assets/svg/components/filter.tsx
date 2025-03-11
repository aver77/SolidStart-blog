import SvgWrapper, { type ISvg } from "~/shared/assets/svg/svgWrapper";

const Filter = (params: ISvg) => {
    const { width, height, ...restParams } = params;

    return (
        <SvgWrapper
            {...restParams}
            width={width || "29px"}
            height={height || "19px"}
            viewBox="0 0 29 19"
        >
            <path
                d="M2.3125 1.78125H26.6875M7.00063 9.5H21.9994M11.6888 17.2188H17.3112"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </SvgWrapper>
    );
};

export default Filter;
