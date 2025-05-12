export const getColorClass = (
    colorProperty: "fill" | "stroke",
    baseColor: string | undefined
) => {
    if (baseColor) {
        return `${colorProperty}-${baseColor}`;
    }

    return `${colorProperty}-white light:${colorProperty}-graphite`;
};
