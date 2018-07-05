const webpack = require("webpack");
const path = require("path");
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules').filter((x) => {
    return ['.bin'].indexOf(x) === -1;
}).forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = (env) => {
    return {
        entry: "./server/server.js",
        output: {
            path: path.join(__dirname, "server"),
            filename: "server-webpack.js"
        },
        target: "node",
        node: {
            global: true,
            __dirname: true
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    test: /\.js$/
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    loaders: [
                        {
                            loader: "file-loader",
                            options: {
                                hash: "sha512",
                                name: "[hash].[ext]",
                                outputPath: "../assets/compiled"
                            }
                        },
                        {
                            loader: "image-webpack-loader",
                            query: {
                                mozjpeg: {
                                  progressive: true,
                                },
                                gifsicle: {
                                  interlaced: false,
                                },
                                optipng: {
                                  optimizationLevel: 4,
                                },
                                pngquant: {
                                  quality: '75-90',
                                  speed: 3,
                                }
                            }
                        }
                    ]
                }
            ]
        },
        externals: nodeModules
    };
}
