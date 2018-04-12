// pages/show/show.js
let pin;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  showVendor(e) {
    const data = e.currentTarget.dataset;
    const vendor = data.vendor;

    wx.navigateTo({
      url: `../vshow/vshow?id=${vendor.id}`
    });
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
        pin = res.data;

        console.log(res.data)

        // Update local data
        that.setData({
          pin: pin
        });

        wx.hideToast();
      }
    });
  },

  login: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          const code = res.code
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
              const user = {
                name: nickName,
                avatar: avatarUrl
              }
              wx.request({
                url: 'http://picchain.herokuapp.com/api/v1/users',
                method: 'POST',
                data: {
                  user: user,
                  code: code
                },
                success: function (res) {
                  wx.redirectTo({
                    url: `/pages/camera/camera?user_id=${res.data.id}&location_id=${pin.location_id}`
                  });
                }
              })
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg)
        }
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
