let cos_utils = require('../../utils/cos')
var config = require('../../config')
let Key = ''
let image_src = 'https://picchain-1256466747.cos.ap-chengdu.myqcloud.com/'
let params;

Page({
  data: {
    filePath: '',
  },

  onLoad: function (options) {
    params = options;
  },

  onCancelClicked() {
    wx.switchTab({
      url: '../index/index'
    });
  },

  simpleUpload: function () {
    const page = this;
    let filePath = '';
    // 选择文件
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        filePath = res.tempFilePaths[0]
        Key = filePath.substr(filePath.lastIndexOf('/') + 1); // 这里指定上传的文件名
        page.setData({
          filePath: filePath,
          Key: Key
        })
        cos_utils.cos.postObject({
          Bucket: config.Bucket,
          Region: config.Region,
          Key: Key,
          FilePath: filePath,
          onProgress: function (info) {
            console.log(JSON.stringify(info));
          },
        }, 
        cos_utils.requestCallback);
        image_src = "https://picchain-1256466747.cos.ap-chengdu.myqcloud.com/" + Key
      },
    })
  },
  postPic: function () {
    const new_pin = {
      image: 'https://picchain-1256466747.cos.ap-chengdu.myqcloud.com/' + Key,
      user_id: params.user_id,
      location_id: params.location_id
    };
    wx.request({
      url: `http://picchain.herokuapp.com/api/v1/locations/${params.location_id}/pins`,
      method: 'POST',
      data: {
        pin: new_pin
      },
      success: function (res) {
        // set data on index page and show
        console.log(res)
        wx.redirectTo({
          url: `../show/show?id=${res.data.id}`
        });
      }
    });
  }
});
