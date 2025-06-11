/** Warning! Styles for tailwind should be fully hardcoded */
export const getColorClass = (
    colorProperty: "fill" | "stroke",
    otherClass: string = "",
    customClass: {
        darkClass?: string;
        lightClass?: string;
    } = {}
) => {
    let finalClass = "";

    if (colorProperty === "fill") {
        finalClass = `${customClass?.darkClass || "fill-white"} ${customClass.lightClass || "light:fill-warmBrown"}`;
    } else {
        finalClass = `${customClass.darkClass || "stroke-white"} ${customClass.lightClass || "light:stroke-warmBrown"}`;
    }

    finalClass += otherClass;

    return finalClass;
};
