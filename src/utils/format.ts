import { isNil } from "ramda";
/**
 * 格式化数字
 * @param count 数字
 * @returns 格式化后的字符串
 */
export const formatCount = (count?: number) => {
    if (isNil(count)) {
        return "0";
    }
    if (count <= 0) {
        return "0";
    }
    if (count > 100000000) {
        return Math.round(count / 100000000) + "亿";
    } else if (count > 10000) {
        return Math.round(count / 10000) + "万";
    } else {
        return count.toString();
    }
};

/**
 * 格式化时间戳为日期字符串
 * @param timestamp 时间戳
 * @param format 格式字符串的格式
 * @returns 格式完的日期字符串
 * yyyy-MM-dd HH:mm:ss
 */
export const timestampParseDate = (timestamp: number, fmt: string) => {
    let tempFmt: string = fmt;
    const date = new Date(timestamp);

    if (fmt === undefined || fmt === null || fmt === "") {
        tempFmt = "yyyy-MM-dd hh:mm:ss";
    }
    const o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
    };

    if (/(y+)/.test(tempFmt)) {
        tempFmt = tempFmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substring(4 - RegExp.$1.length),
        );
    }
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(tempFmt)) {
            tempFmt = tempFmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length),
            );
        }
    }

    return tempFmt;
};
/**
 * 格式化时间戳为mm:ss格式的时间
 * @param timestamp 时间戳
 * @returns 时间字符串
 */
export const formatToMinuteSecond = timestamp => {
    return timestampParseDate(timestamp, "mm:ss");
};
/**
 * 格式化时间戳为yyyy年MM月dd日格式的时间
 * @param timestamp 时间戳
 * @returns 时间字符串
 */
export const formatToYMS = timestamp => {
    return timestampParseDate(timestamp, "yyyy年MM月dd日");
};
