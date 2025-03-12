export const createGroupedArray = <T>(array: T[], size: number) => {
    if (!size) {
        return [array];
    }

    const groupedArray: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        groupedArray.push(array.slice(i, i + size));
    }

    return groupedArray;
};
