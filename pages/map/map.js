Page({
  data: {
  },
  onLoad: function (options) {
    const page = this
    wx.request({
      url: "http://picchain.herokuapp.com/api/v1/locations",
      method: 'GET',
      success(res) {
        const locations = res.data.locations;
        let markers = []
        locations.forEach(function (location) {
          markers.push({
            id: location.id,
            latitude: location.latitude,
            longitude: location.longitude,
            name: location.name,
            iconPath: '/images/location.png'
          });
        });

        page.setData({
          locations: locations,
          last_location: {
            latitude: locations[locations.length - 1].latitude,
            longitude: locations[locations.length - 1].longitude,
          },
          markers: markers
        });
        wx.hideToast();

      }
    });
  },
  onReady: function (e) {
    let page = this
    this.mapCtx = wx.createMapContext('myMap')
  }
})
