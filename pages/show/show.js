// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "reviews": [
      {
        "id": 1,
        "name": 'Gab',
        "upvotes": '120',
        "image": 'https://kitt.lewagon.com/placeholder/users/gabriel-dehan',
        "date": '01/13/17',
        "location": '100 St. John Rd., Shanghai',
        "tags": '#lovely'
      }
    ],
    "vendor": [
      {
        "id": 1,
        "name": "Dan Li's Coffee",
        "image": 'http://businessupperhand.com/wp-content/uploads/2013/01/coffee-shop-1.jpg',
        "location": 'St. John Rd., Shanghai',
        "description": 'The best coffee in town',
        "prize": 'A free cup of coffee for the most upvoted photo!'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this;

    // Get api data
    wx.request({
      url: `http://picchain.herokuapp.com/api/v1/pins/${options.id}`,
      method: 'GET',
      success(res) {
        const pin = res.data;

        // Update local data
        that.setData({
          pin
        });

        wx.hideToast();
      }
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