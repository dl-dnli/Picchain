// pages/index/index.js
const app = getApp()
var order = ['demo1', 'demo2', 'demo3']

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
      url: "http://picchain.herokuapp.com/api/v1/pins",
      method: 'GET',
      success(res) {
        const pins_popular = res.data.pins_by_upvotes;
        const pins_new = res.data.pins_by_date;

        // Update local data
        page.setData({
          pins_new: pins_new,
          pins_popular: pins_popular
        });

        wx.hideToast();
      }
    });
  },

  onPinClicked(e) {
    const data = e.currentTarget.dataset;
    const pin = data.pin;

    wx.navigateTo({
      url: `../show/show?id=${pin.id}`
    });
  },

  onUserButtonClicked(e) {
    const data = e.currentTarget.dataset;
    const user = data.user;

    wx.navigateTo({
      url: `../undex/undex?id=${user.id}`
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
