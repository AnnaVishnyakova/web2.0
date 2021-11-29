const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require("path");

module.exports= {
    entry:"./src/js/main.js",
    output:{
        filename:"main[contenthash].js", //имя файла сброки
        path:path.resolve(__dirname,'build'),//путь сборки
        clean:true //удаление других файлов сборки
    },
    module: {
        rules: [{
                test: /\.(png|jpg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin(
        {template: path.resolve(__dirname,'src','template.html')}
        ),
        new MiniCssExtractPlugin({}),
        //  new BundleAnalyzerPlugin()
    ],
}

