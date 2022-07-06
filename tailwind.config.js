module.exports = {
    mode: "jit",
    important: true,
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    corePlugins: {
        preflight: false, // 禁用tailwind的预设样式
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
        },
    },
    theme: {
        extend: {
            // 设置font-size，第二个数据是行高，用法：text-size12,text-base
            fontSize: {
                base: "12px",
                12: "12px",
                14: "14px",
                16: "16px",
                18: "18px",
                20: "20px",
                24: "24px",
            },
            // 设置font-family，用法 font-normal
            fontFamily: {
                normal: ["Proxima Nova", "PingFangSC", "sans-serif"],
                semibold: ["Proxima Nova Semibold", "PingFangSC", "sans-serif"],
                bold: ["Proxima Nova Bold", "PingFangSC", "sans-serif"],
            },
            // 设置line-height，用法：leading-18
            lineHeight: {
                base: "21px",
                18: "18px",
                21: "21px",
                24: "24px",
                27: "27px",
                30: "30px",
            },
            // 设置font-weight，用法：font-bold
            fontWeight: {
                regular: "400",
                semibold: "600",
                bold: "700",
            },
            // 设置颜色，用法：font-gray-20 / bg-brand / border-gray-border
            colors: {
                transparent: "transparent",
                current: "currentColor",
                black: "#000",
                white: "#fff", // 灰度/白色

                red: {
                    default: "#C20C0C",
                    10: "#9B0909",
                },
                // 这三个一般用于文字颜色
                grey: {
                    default: "#242f57",
                    10: "#191d32", // 灰度/一级文字
                    20: "#474c66", // 灰度/二级文字、次级文字按钮
                    30: "#777d99", // 灰度/三级文字、icon
                    40: "#b8bbcc",
                    50: "#d9dbe5",
                    60: "#eaecf6",
                    70: "#f6f6fb",
                    80: "#fafafd",
                    300: "#b8bbcc",
                    500: "#eaecf6",
                    700: "#fafafd",
                },
                // 品牌色
                brand: {
                    default: "#0080ff",
                    10: "#369afe",
                    20: "#67b3fe",
                    30: "#3088e0",
                    40: "#a0d0ff",
                    50: "#e6f3ff",
                    60: "#f4faff",
                    A100: "#369afe",
                },
            },
            // 用于设置边距，用法：px-2 / my-3
            spacing: {
                default: "1px",
                1: "1px",
                2: "2px",
                3: "3px",
                4: "4px",
                6: "6px",
                8: "8px",
                12: "12px",
                14: "14px",
                16: "16px",
                18: "18px",
                20: "20px",
                24: "24px",
                28: "28px",
                32: "32px",
                36: "36px",
                40: "40px",
                48: "48px",
                64: "64px",
                72: "72px",
                74: "74px",
                auto: "auto",
            },
            // borderRadius，用法：rounded, rounded-md
            borderRadius: {},
            // borderWidth,用法：
            borderWidth: {
                default: "1px",
            },
            screens: {
                default: "1280px",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
        // require("tailwind-scrollbar-hide")
    ],
};
