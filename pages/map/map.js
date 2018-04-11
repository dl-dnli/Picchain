Page({
  data: {
    latitude: 31.22352000000002,
    longitude: 121.45590999999999,
    markers: [{
      id: 1,
      latitude: 31.22352000000002,
      longitude: 121.45590999999999,
      name: 'T.I.T 创意园'
    }],
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
        latitude: 31.22352000000002,
        longitude: 121.45590999999999,
      }]
    })
  }
})