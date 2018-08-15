//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        // 获取用户信息
        wx.login({
          success: function (res) {
            if (res.code) {
              //TODO
              console.log("1111")
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        });
        // -----





    }
})