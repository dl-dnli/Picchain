var app = getApp()

//index.js
var COS = require('../../lib/cos-wx-sdk-v5')
var config = require('./config')

var cos = new COS({
  getAuthorization: function (params, callback) {//获取签名 必填参数

    // 方法一（推荐）服务器提供计算签名的接口
    /*
    wx.request({
        url: 'SIGN_SERVER_URL',
        data: {
            Method: params.Method,
            Key: params.Key
        },
        dataType: 'text',
        success: function (result) {
            callback(result.data);
        }
    });
    */

    // 方法二（适用于前端调试）
    var authorization = COS.getAuthorization({
      SecretId: config.SecretId,
      SecretKey: config.SecretKey,
      Method: params.Method,
      Key: params.Key
    });
    callback(authorization);
  }
});

var requestCallback = function (err, data) {
  console.log(err || data);
  if (err && err.error) {
    wx.showModal({ title: '返回错误', content: '请求失败：' + err.error.Message + '；状态码：' + err.statusCode, showCancel: false });
  } else if (err) {
    wx.showModal({ title: '请求出错', content: '请求出错：' + err + '；状态码：' + err.statusCode, showCancel: false });
  } else {
    wx.showToast({ title: '请求成功', icon: 'success', duration: 3000 });
  }
};

var option = {
  data: {
    list: [],
  },
};

option.simpleUpload = function () {
  // 选择文件
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      var filePath = res.tempFilePaths[0]
      var Key = filePath.substr(filePath.lastIndexOf('/') + 1); // 这里指定上传的文件名

      cos.postObject({
        Bucket: config.Bucket,
        Region: config.Region,
        Key: Key,
        FilePath: filePath,
        onProgress: function (info) {
          console.log(JSON.stringify(info));
        }
      }, requestCallback);
    }
  })
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
  }, 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})