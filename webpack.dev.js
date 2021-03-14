const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

/**
 *  开发模式：
 *  1. 源码映射
 *  2. 模块热更新 
 */

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),

        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true,
        }),

        new webpack.ProvidePlugin({
            _: 'lodash',
        })
    ],
});