const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'source-map',
    entry: './index.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'pic', to: 'pic' }],
        }),
    ],
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
};
