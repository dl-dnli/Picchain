// pages/map/map.js
let user_id;
let lat;
let lng;
let location;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindSubmit: function(e) {

    console.log(e)
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        lat = res.latitude
        lng = res.longitude
        location = {
          name: e.detail.value.name,
          prize: e.detail.value.prize,
          longitude: lng,
          latitude: lat,
          user_id: user_id,
        }
        wx.request({
          url: `http://picchain.herokuapp.com/api/v1/users/${user_id}/locations`,
          method: 'POST',
          data: {
            location: location
          },
          success(res) {
            // set data on index page and show
            wx.switchTab({
              url: `../vindex/vindex`
            });
          }
        });
      }
    });

    // Get api data
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    user_id = options.user_id
    console.log(user_id)
  },

  onCancelClicked() {
    wx.switchTab({
      url: '../index/index'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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