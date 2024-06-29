const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.ts', // Точка входа (файл index.ts)
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'dist'), // Папка для выходных файлов
    },
    resolve: {
        extensions: ['.ts', '.js'], // Расширения файлов, которые Webpack будет искать
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // Используйте ts-loader для компиляции TypeScript
                exclude: /node_modules/, // Исключите node_modules
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Шаблон для index.html
        }),
    ],
};