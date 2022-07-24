const path = require("path");
const compressionWebpackPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = dir => path.resolve(__dirname, dir);
const isPro = process.env.Node_Mode === "production";
const plugins = isPro
    ? [
          ...new compressionWebpackPlugin({
              filename: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
              threshold: 10240, // 只有大小大于该值的资源会被处理
              minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          }),
          new BundleAnalyzerPlugin({
              analyzerMode: "server",
              analyzerHost: "127.0.0.1",
              analyzerPort: 8888,
              openAnalyzer: true, // 构建完打开浏览器
              reportFilename: path.resolve(__dirname, `analyzer/index.html`),
          }),
      ]
    : [];
module.exports = {
    babel: {
        plugins: [
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "css",
                },
            ],
            [
                "babel-plugin-styled-components",
                {
                    displayName: false, // generate other classname
                    fileName: true, // generate other classname
                },
            ],
        ],
    },
    webpack: {
        configure: config => {
            let webpackConfig = config;
            // 修改 output
            webpackConfig.output = {
                ...webpackConfig.output,
                ...{
                    filename: "static/js/main.[contenthash].js",
                    chunkFilename: "[name].chunk.[chunkhash].js",
                    clean: true,
                },
            };
            webpackConfig.cache = {
                type: "filesystem",
            };
            webpackConfig.module.rules = [
                ...webpackConfig.module.rules,
                ...[
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules)/,
                        use: {
                            loader: "swc-loader",
                        },
                    },
                    {
                        test: /\.js$/,
                        use: [
                            {
                                loader: "thread-loader",
                                options: {
                                    workers: 8,
                                },
                            },
                            "babel-loader",
                        ],
                    },
                ],
            ];
            webpackConfig.optimization.splitChunks = {
                ...webpackConfig.optimization.splitChunks,
                cacheGroups: {
                    // base: {
                    //     // 基本框架
                    //     chunks: "all",
                    //     test: /(react|react-router)/,
                    //     name: "base",
                    //     priority: 100,
                    // },
                    vendor: {
                        test: /node_modules/,
                        chunks: "initial",
                        name: "vendor",
                        priority: 10,
                        enforce: true,
                    },
                },
            };
            return webpackConfig;
        },
        alias: {
            "@": resolve("src"),
        },
        plugins: [
            ...plugins,
            new HtmlWebpackPlugin({
                title: "网易云音乐",
                filename: "index.ejs",
                inject: "body",
                minify: {
                    caseSensitive: true,
                    collapseBooleanAttributes: true,
                    collapseInlineTagWhitespace: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    html5: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                },
            }),
        ],
    },

    style: {
        postcssOptions: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
};
