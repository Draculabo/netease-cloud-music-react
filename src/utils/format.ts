export const formatCount = (count: number) => {
    if (count <= 0) {
        return "0";
    }
    if (count > 100000000) {
        return Math.round(count / 100000000) + "亿";
    } else if (count > 10000) {
        return Math.round(count / 10000) + "万";
    } else {
        return count;
    }
};
