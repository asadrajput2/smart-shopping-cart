'use strict'

const path = require("path");

module.exports = {
    mode: "development",
    entry: ['babel-polyfill', path.resolve(__dirname, 'frontend/src/index.js/')],
    output: {

        path: path.resolve(__dirname, 'frontend/static/frontend/public/'),
        publicPath: "/static/frontend/public/",
        filename: "main.js"

    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                }

            }
        ]
    }
}
