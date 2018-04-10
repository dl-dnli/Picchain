Page({
  //...

  onLoad: function (options) {

    let that = this;

    // Get api data
    wx.request({
      url: `http://picchain.herokuapp.com/api/v1/pins/${options.id}`,
      method: 'GET',
      success(res) {
        const restaurant = res.data;

        // Update local data
        that.setData(
          restaurant
        );

        wx.hideToast();
      }
    });
  }
})