var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },

  // chooseimage: function () {
  //   var that = this;
  //   wx.showActionSheet({
  //     itemList: ['从相册中选择', '拍照'],
  //     itemColor: "#8CC152",
  //     success: function (res) {
  //       if (!res.cancel) {
  //         if (res.tapIndex == 0) {
  //           that.chooseWxImage('album')
  //         } else if (res.tapIndex == 1) {
  //           that.chooseWxImage('camera')
  //         }
  //       }
  //     }
  //   })

  // },

  // chooseWxImage: function (type) {
  //   var that = this;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'],
  //     sourceType: [type],
  //     success: function (res) {
  //       console.log(res);
  //       that.setData({
  //         tempFilePaths: res.tempFilePaths[0],
  //       })
  //     }
  //   })
  // },
  

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