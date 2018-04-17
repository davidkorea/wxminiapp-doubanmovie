// pages/index/index.js

var api_url = 'https://douban.uieee.com/v2/movie/top250 ';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'Loading...',
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: 'Loading',
      icon: 'loading',
      duration: 10000
    }),

      wx.request({
        url: api_url,
        data: {},
        header: {
          'content-type': 'json' // 默认值application/json是真的不能用啊...无语
        },
        success: function (res) {
          console.log(res.data);
          wx.hideToast();
          var data = res.data;
          that.setData({
            title: data.title,
            movies:data.subjects
          })
        }
      })
  
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