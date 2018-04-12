let cos_utils = require('../../utils/cos')
var config = require('../../config')

Page({
  data: {
    list: [],
  },

  simpleUpload: function () {

    console.log("clicked")
    // 选择文件
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var filePath = res.tempFilePaths[0]
        var Key = filePath.substr(filePath.lastIndexOf('/') + 1); // 这里指定上传的文件名

        cos_utils.cos.postObject({
          Bucket: config.Bucket,
          Region: config.Region,
          Key: Key,
          FilePath: filePath,
          onProgress: function (info) {
            console.log(JSON.stringify(info));
          }
        }, cos_utils.requestCallback);
      }
    })
  }

})
