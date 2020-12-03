const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
  
    return config
  },
  env: {
    

  }
})
