const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output:{
        path: resolve('dist'),
        filename: 'betterRegExp.js',
        library: 'BetterRegExp',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx' ]
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                include:[resolve('src')]
            },
        ]
    }
}