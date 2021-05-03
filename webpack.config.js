module.exports = {
   entry: [
      'babel-polyfill',
      './client/main.js'
   ],
   output: {
      path: __dirname,
      filename: './public/bundle.js'
   },
   mode: 'development',
   devtool: 'source-map',
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: [
                  '@babel/preset-react',
                  '@babel/preset-env'
               ]
            }
         },
         {
            test: /\.(sass|scss|css)$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(svg|eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
               }
            }
         }
      ]
   },
}