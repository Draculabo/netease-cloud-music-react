/**
 * 处理图片大小
 * @param param 图片参数
 * @returns 图片URL
 */
export function handleImageSize({ url, width, height } = { url: "", width: 40, height: 40 }) {
    if (!url || url.length === 0) {
        return;
    }
    return `${url}?param=${width}y${height}`;
}
