const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "boss.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: "development",
    devServer:{
        https: true,
        hot: true,
    },
};