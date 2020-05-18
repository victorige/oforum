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
    TITLE: "Oforum NG",
    MONGO_URI: "mongodb://oforum:toSleNOTLI@167.172.138.133:27017/admin",
    SECURE_PASS: "YOW8P8ON36lT6gEprMgC",
    CRON_PASS: "60lYW",
    HOST: "https://oforum.ng",
    APIKEY: "Gnw5F4rwHsfefeyNmMaT",
    FLWPUBK: "FLWPUBK-2c16d1ca1250a28d8059a222132d144a-X",
    FLWSECK: "FLWSECK-e5a225ad2ed784ed8c5e8e6aee22e5ff-X",
    FLWECRT: "e5a225ad2ed73a281eb70a25",
    FBAPPID: "646240359293373",
    FBAPPSECRET: "68c0f54ee372e5941d710b960820dd9",
    FBACCESSTOKEN: "646240359293373|I0r0yX3kg_1aDHYluNOXPZic5b4",
    SHAREURL: "https://oforum.ng",
    NEWSURL: "https://content.oforum.ng/opl",
    ELASTIC_API_KEY: "6FCBDE67E4C3C57C74BDB9CCFD71E362064F603D7AD53912B98850A635F51A3F15B1F210E6408BD5CD1B73B22FBF231B",

  }
})
