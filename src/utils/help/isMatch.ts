export const isStringsMatch = (firstStr: string, secondStr: string) => {
    const regex = new RegExp(secondStr, "gi");
    const matchOfString = firstStr.match(regex);
    return matchOfString ? matchOfString.length > 0 : false;
};
export const isStringsMatchInArray = (firstStr: string[], secondStr: string) => {
    return isStringsMatch(firstStr.toString(), secondStr)
};
