export const getColorClass = (
    colorProperty: "fill" | "stroke",
    baseColor: string | undefined,
    customDarkThemeColor?: string,
    customLightThemeColor?: string
) => {
    if (baseColor) {
        return `${colorProperty}-${baseColor}`;
    }

    return `${colorProperty}-${customDarkThemeColor ?? "white"} light:${colorProperty}-${customLightThemeColor ?? "warmBrown"}`;
};
