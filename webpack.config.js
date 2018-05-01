const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
    const isProduction = false;
    const config = {
        context: path.resolve(__dirname, "src"),

        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js", ".jsx"]
        },

        entry: ["./index.jsx", "./index.scss"],

        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name]-[hash:8].[ext]'
                            },
                        },
                    ]
                },
                {
                    test: /\.(sass|scss)$/,
                    loader: ExtractTextPlugin.extract(['sass-loader'])
                },
            ]
        },

        plugins: [
            new ExtractTextPlugin({ // define where to save the file
                filename: 'dist/[name].bundle.css',
            }),
            new HtmlWebpackPlugin({
                title: "netflixroulette",
                hash: true,
                template: path.resolve(__dirname, "./index.html"),
                links: [{ rel: 'stylesheet', type: 'text/css', href: '/index.css' }],
            }),
        ],

        watch: true

    }
    return config;
};
