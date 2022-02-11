const path = require('path');
const {
    CleanWebPackPlugin
} = require('clean-webpack-plugin');
module.exports = {

    entry: {

        scripts: '.assets/src/js/scripts.js',
        plugin1: './assets/src/js/plugin1.js'

    },
    plugins: [
        new CleanWebPackPlugin(),
    ],
    output: {
        path: path.resolve(_dirname, 'assets/dist/js/'),
        filename: '[name].js'
    }

}