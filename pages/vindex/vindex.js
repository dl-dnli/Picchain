// pages/vindex/vindex.js
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
    let page = this;
    wx.request({
      url: "http://picchain.herokuapp.com/api/v1/locations",
      method: 'GET',
      success(res) {
        const locations = res.data.locations;

        // Update local data
        page.setData({
          locations: locations
        });

        wx.hideToast();
      }
    });
  },


  onLocationClicked(e) {
    const data = e.currentTarget.dataset;
    const location = data.location;

    wx.navigateTo({
      url: `../vshow/vshow?id=${location.id}`
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
