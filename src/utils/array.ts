/**
 * 根据num将一维数组分裂为二维数组
 * @param arr 被分裂的数组
 * @param num 二维数组的长度
 * @returns 分裂完的数组
 */
export function splitArray(arr: any[], num = 5) {
    if (arr === null || arr === undefined || arr.length < num) {
        throw new Error("传入了错误的参数");
    }
    const newArray: any[] = [];
    for (let i = 0; i < arr.length; i += num) {
        const tempArr: any[] = [];
        const len = i + num;
        for (let j = i; j < len && j < arr.length; j++) {
            tempArr.push(arr[j]);
        }
        newArray.push(Array.prototype.slice.apply(tempArr));
    }
    return newArray;
}
