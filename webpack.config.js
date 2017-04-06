var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            use: ['file-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }]
        }]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
} else {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ])

}
