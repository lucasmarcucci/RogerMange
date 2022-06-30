module.exports = {
    devServer: {
        // proxy: 'http://localhost:3000/'

        proxy: {
            '/one': {
              target: 'http://localhost:3020/',
              pathRewrite: {'^/one' : ''}
            },
            '/two': {
              target: 'http://localhost:3000/',
              pathRewrite: {'^/two' : ''}
            }
        }
    }
}