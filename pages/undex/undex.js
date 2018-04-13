// pages/undex/undex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 100,
    scrollLeft: 0,
    flag: true,
    hasLocation: false,
  },

  show: function () {
    this.setData({ flag: false })
  },

  hide: function () {

    this.setData({ flag: true })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: `http://picchain.herokuapp.com/api/v1/users/${options.id}`,
      method: 'GET',
      success(res) {
        const user = res.data
        const user_pins = res.data.user_pins;
        const user_locations = res.data.user_locations;
        console.log(user_locations)
        // Update local data
        page.setData({
          user: user,
          user_pins: user_pins,
          user_locations: user_locations
        });

        wx.hideToast();
      }
    });
  },

  addLocation: function () {
    wx.redirectTo({
      url: `../location/location?user_id=1`
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