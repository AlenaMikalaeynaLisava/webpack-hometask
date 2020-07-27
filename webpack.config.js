const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
        new UglifyJsPlugin(),
    ],
    mode: "development",
    devServer:{
        https: true,
    },
    optimization: {
        minimizer: [],
      },
};