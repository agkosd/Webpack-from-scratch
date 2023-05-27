const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "none",
    entry: {
        script: { import: "./src/script.ts", dependOn: "shared" },
        page2: { import: "./src/page2.ts", dependOn: "shared" },
        shared: "lodash/join"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["script", "shared"]
        }),
        new HtmlWebpackPlugin({
            filename: "page2/index.html",
            template: "./src/index.html",
            chunks: ["page2", "shared"]
        }),
        new BundleAnalyzerPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    }
}