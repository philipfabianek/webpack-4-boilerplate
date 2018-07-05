const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isProduction = env === "production";
    // const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: "./source/app.js",
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js"
        },
        node: {
            fs: "empty"
        },
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    importLoaders: 1
                                }
                            },
                            "postcss-loader",
                            "sass-loader"
                        ]
                    })
                },
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/
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
        plugins: [
            new ExtractTextPlugin({
                filename: "styles.css"
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };
}
