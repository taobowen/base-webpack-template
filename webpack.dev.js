const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

/**
 *  开发模式：
 *  1. 源码映射
 *  2. 模块热更新 
 */

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
});