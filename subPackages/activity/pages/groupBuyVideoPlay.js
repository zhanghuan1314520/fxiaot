require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/groupBuyVideoPlay" ], {
    1685: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("5f2d")).default);
        }).call(this, n("543d").createPage);
    },
    "39be": function(e, t, n) {},
    "5f2d": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("c157"), a = n("9a23");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("8b4c"), n("762c");
        var s = n("f0c5"), c = Object(s.a)(a.default, i.b, i.c, !1, null, "10064444", null, !1, i.a, void 0);
        t.default = c.exports;
    },
    "762c": function(e, t, n) {
        "use strict";
        var i = n("d51c");
        n.n(i).a;
    },
    "8b4c": function(e, t, n) {
        "use strict";
        var i = n("39be");
        n.n(i).a;
    },
    "9a23": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("f7fb"), a = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = a.a;
    },
    c157: function(e, t, n) {
        "use strict";
        var i = function() {
            var e = this;
            e.$createElement, e._self._c, e._isMounted || (e.e0 = function(t) {
                return e.phoneCallHandle(t);
            });
        }, a = [];
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    d51c: function(e, t, n) {},
    f7fb: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("4ec3")), a = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        detail: {},
                        videoCover: "",
                        systemInfo: {},
                        status: "pause",
                        id: "",
                        videoContext: null,
                        isShare: !1,
                        sales_man_id: ""
                    };
                },
                onLoad: function(t) {
                    this.systemInfo = e.getSystemInfoSync(), t.id && (1 === getCurrentPages().length && (this.isShare = !0), 
                    this.id = t.id, this.loadVideoDetail(t.id)), this.$refs.busiNavHeader.setTransparentMode();
                },
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    emptyFunction: function() {},
                    loadVideoDetail: function(e) {
                        var t = this;
                        i.default.activity.activityVideoDetail({
                            id: e
                        }).then(function(e) {
                            if (0 === e.code && e.data && e.data.id) {
                                t.detail = e.data;
                                var n = e.data.video_url, i = n.indexOf("?") > -1 ? "&" : "?", a = "&imageView2/2/w/".concat(2 * t.systemInfo.windowWidth, "/format/jpg/interlace/1/q/100|imageslim");
                                t.videoCover = "".concat(n).concat(i, "vframe/jpg/offset/1").concat(a), t.$nextTick(function() {
                                    t.initVideo(), t.isShare && t.addVideoViewCount();
                                });
                            }
                        });
                    },
                    addVideoViewCount: function() {
                        var e = this;
                        i.default.isSaleMan().then(function(t) {
                            e.sales_man_id = t.sales_man_id || "", e.detail.sales_man && e.sales_man_id === e.detail.sales_man.sales_man_id || i.default.activity.playVideo({
                                id: e.id
                            });
                        });
                    },
                    initVideo: function() {
                        this.videoContext = e.createVideoContext("video");
                    },
                    handleChangeVideoStatus: function(e) {
                        this.status = e;
                    },
                    videoClick: function() {
                        "play" === this.status ? this.pauseVideo() : this.playVideo();
                    },
                    playVideo: function() {
                        this.videoContext && this.videoContext.play();
                    },
                    pauseVideo: function() {
                        this.videoContext && this.videoContext.pause();
                    },
                    handleGoDetail: function() {
                        var t = this.detail.project_id;
                        e.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(t)
                        });
                    },
                    toSalesDetail: function() {
                        var t = this.detail, n = t.sales_man, i = t.project_id, a = "/pages/salesMan/detail?user_id=".concat(n.session_id, "&project_id=").concat(i);
                        e.navigateTo({
                            url: a
                        });
                    },
                    toIMPageHandle: function() {
                        var t = this.detail, n = t.sales_man, i = t.project.name, a = t.project_id;
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(n.session_id, "&project_id=").concat(a, "&project_name=").concat(i)
                        });
                    },
                    phoneCallHandle: function(e) {
                        i.default.getPhoneNum(this.detail.sales_man.sales_man_id, 1).then(function(t) {
                            0 === t.code && e(t.data.phone);
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, n("543d").default);
    }
}, [ [ "1685", "common/runtime", "common/vendor" ] ] ]);