export const checkStringsMatch = (targetStr: string, comparedStr: string): boolean => {
    const transformedTargetStr = targetStr.trim().toLowerCase();
    const transformedComparedStr = comparedStr.trim().toLowerCase();

    return transformedTargetStr.includes(transformedComparedStr);
};