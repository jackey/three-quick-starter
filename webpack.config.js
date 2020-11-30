const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let entry = './src/index.ts';
let rules = [];
rules.push({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
});

let moduleConfig = {
    rules,
};

let plugins = [
    new CleanWebpackPlugin(),
];

module.exports = {
    entry,
    module: moduleConfig,
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins,
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
};