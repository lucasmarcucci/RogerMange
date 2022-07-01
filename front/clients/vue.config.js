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
            },
            '/three': {
              target: 'http://localhost:3011/',
              pathRewrite: {'^/three' : ''}
            },
            '/four': {
              target: 'http://localhost:3010/',
              pathRewrite: {'^/four' : ''}
            }
        }
    }
}