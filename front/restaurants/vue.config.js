module.exports = {
  devServer: {
      // proxy: 'http://localhost:3000/'

    proxy: {
      '/orders': {
        target: 'http://localhost:3010/',
        pathRewrite: {'^/orders' : ''}
      },
      '/login': {
        target: 'http://localhost:3011/',
        pathRewrite: {'^/login' : ''}
      },
      '/restaurant': {
        target: 'http://localhost:3020/',
        pathRewrite: {'^/restaurant' : ''}
      },
    }
  }
}