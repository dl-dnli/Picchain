Page({
  data: {
<<<<<<< HEAD
    // latitude: 28.099994,
    // longitude: 113.324520,
    // markers: [{
    //   id: 1,
    //   latitude: 28.099994,
    //   longitude: 113.324520,
    //   name: 'T.I.T 创意园',
    //   iconPath: '/images/location.png'

    // }]

  },
  onLoad: function (e) {
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
  }
  ,
  onReady: function (e) {
    let page = this
    this.mapCtx = wx.createMapContext('myMap')


=======
    covers: [{
      latitude: 31.22352000000002,
      longitude: 121.45590999999999,
      iconPath: '/images/location.png'
    }, {
        latitude: 31.22352000000002,
        longitude: 121.45590999999999,
      iconPath: '/images/location.png'
    }]
  },
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: "http://picchain.herokuapp.com/api/v1/pins",
      method: 'GET',
      success(res) {
        const pins = res.data.pins;

        // Update local data
        page.setData({
          pins: pins
        });

        wx.hideToast();
      }
    });
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap');
    this.mapCtx.moveToLocation();
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 31.22352000000002,
        longitude: 121.45590999999999,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: pin.latitude,
        longitude: pin.longitude,
      }]
    })
>>>>>>> f0edc8f758548fba23b108df921721e1e16cad34
  }
})
