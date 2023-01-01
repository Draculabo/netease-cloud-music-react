import { message } from "antd";

const defaultMsg = content => {
    message.error({
        content: content,
        className: "default-msg",
        style: {
            marginTop: "20vh",
        },
        duration: 3,
    });
};
const errorMsg = {
    networkError: "网络错误，请稍后再试",
};
export { defaultMsg, errorMsg };
