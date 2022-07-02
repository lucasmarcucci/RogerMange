module.exports = {
    devServer: {
        // proxy: 'http://localhost:3000/'

        proxy: {
            '/orders': {
              target: 'http://localhost:3010/',
              pathRewrite: {'^/orders' : ''}
            }
        }
    }
}