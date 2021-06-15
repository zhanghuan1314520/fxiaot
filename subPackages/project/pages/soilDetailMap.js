require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/soilDetailMap" ], {
    "0c59": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c46d5")).default);
        }).call(this, n("543d").createPage);
    },
    "1a87": function(t, e, n) {},
    "96b8": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("a13f"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    a13f: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3")), o = n("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, a, r, o, i) {
                try {
                    var s = t[o](i), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function i(t) {
                            s(o, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            s(o, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var u = null, l = null, h = null, d = null, f = "", p = !0, g = null, m = null, w = {
                data: function() {
                    return {
                        markers: [],
                        long: 0,
                        lat: 0,
                        scale: 14,
                        markerType: 3,
                        houseType: [ {
                            name: "全部",
                            value: 1,
                            is_near: "-1",
                            status: "-1"
                        }, {
                            name: "即将拿证",
                            value: 2,
                            is_near: "1",
                            status: "-1"
                        }, {
                            name: "在售",
                            value: 3,
                            is_near: "-1",
                            status: "1"
                        } ],
                        switchIndex: 0,
                        mapHeight: 0,
                        projectInfo: {},
                        projectShow: !1,
                        show_long: "",
                        show_lat: "",
                        otherParams: {},
                        bottomFilterParams: {}
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("快来看这块拍卖土地的位置！附近楼盘估计又要稳不起了...", "/subPackages/project/pages/soilDetailMap?show_long=".concat(this.show_long, "&show_lat=").concat(this.show_lat));
                },
                onReady: function() {
                    var t = this;
                    g = o.common.throttle(c(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return p = !0, e.next = 3, t.loadWithMarkerType(!0, !1);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })), 300), m = o.common.throttle(c(a.default.mark(function e() {
                        var n;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.getScale();

                              case 2:
                                return n = e.sent, p = !0, n < 11 ? (t.markerType = 1, t.projectShow = !1) : n < 13 ? (t.markerType = 2, 
                                t.projectShow = !1) : t.markerType = 3, e.next = 7, t.loadWithMarkerType(!0, !1);

                              case 7:
                                if (!(2 === t.markerType && Array.isArray(h) && h.length < 1)) {
                                    e.next = 12;
                                    break;
                                }
                                return t.markerType = 3, t.scale = 14.00006, e.next = 12, t.paintProject();

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })), 300);
                },
                onLoad: function() {
                    var e = c(a.default.mark(function e(n) {
                        var r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showNavigationBarLoading(), r = t.getSystemInfoSync(), this.mapHeight = r.windowHeight, 
                                this.long = n.show_long, this.lat = n.show_lat, this.show_long = n.show_long, this.show_lat = n.show_lat, 
                                u = t.createMapContext("map", this), e.next = 10, this.paintProject();

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    closeProject: function() {
                        this.projectShow && (this.projectShow = !1, f = "", this.markers.forEach(function(t) {
                            t.callout && (t.callout.bgColor = "#FF7D4F", t.callout.borderColor = "#FF7D4F"), 
                            t.zIndex = 1, t.alpha = .9;
                        }));
                    },
                    followHandle: function() {
                        var t = c(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.followAttention(f);

                                  case 2:
                                    t.sent && (this.projectInfo.is_attention = !this.projectInfo.is_attention);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    gotoProjectDetail: function() {
                        t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(f)
                        });
                    },
                    backHome: function() {
                        t.switchTab({
                            url: "/pages/index"
                        });
                    },
                    switchType: function() {
                        var t = c(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.houseType[e], this.switchIndex = e, p = !0, this.bottomFilterParams = {
                                        is_near: n.is_near,
                                        status: n.status
                                    }, t.next = 6, this.loadWithMarkerType();

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    regionChange: function(t) {
                        if ("end" === t.type) switch (t.causedBy) {
                          case "drag":
                            if (this.projectShow && (this.projectShow = !1, this.markers.forEach(function(t) {
                                9999 !== Math.floor(t.id) && t.callout && (t.callout.bgColor = "#FF7D4F", t.callout.borderColor = "#F1871E");
                            })), p) {
                                p = !1;
                                break;
                            }
                            g && g().then(function() {
                                p = !1;
                            });
                            break;

                          case "scale":
                            if (p) {
                                p = !1;
                                break;
                            }
                            m && m().then(function() {
                                p = !1;
                            });
                        }
                    },
                    markerTapHandle: function() {
                        var t = c(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n = e.markerId, p = !0, t.t0 = this.markerType, t.next = 1 === t.t0 ? 5 : 2 === t.t0 ? 10 : 3 === t.t0 ? 15 : 19;
                                    break;

                                  case 5:
                                    return this.long = l[n] && l[n].lng, this.lat = l[n] && l[n].lat, this.scale = 12.00005, 
                                    this.markerType = 2, t.abrupt("break", 20);

                                  case 10:
                                    return this.long = h[n] && h[n].lng, this.lat = h[n] && h[n].lat, this.scale = 14.00005, 
                                    this.markerType = 3, t.abrupt("break", 20);

                                  case 15:
                                    return f = n, t.next = 18, this.getProjectInfo();

                                  case 18:
                                    return t.abrupt("return");

                                  case 19:
                                    return t.abrupt("break", 20);

                                  case 20:
                                    return t.next = 22, this.loadWithMarkerType();

                                  case 22:
                                    if (p = !0, !(2 === this.markerType && Array.isArray(h) && h.length < 1)) {
                                        t.next = 28;
                                        break;
                                    }
                                    return this.markerType = 3, this.scale = 14.00005, t.next = 28, this.paintProject();

                                  case 28:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadWithMarkerType: function() {
                        var t = c(a.default.mark(function t() {
                            var e, n, r = arguments;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e = !(r.length > 0 && void 0 !== r[0]) || r[0], this.otherParams = {}, this.params = o.common.merge({}, this.bottomFilterParams), 
                                    t.t0 = this.markerType, t.next = 1 === t.t0 ? 6 : 2 === t.t0 ? 9 : 3 === t.t0 ? 18 : 27;
                                    break;

                                  case 6:
                                    return t.next = 8, this.paintAreas();

                                  case 8:
                                    return t.abrupt("break", 28);

                                  case 9:
                                    if (!e) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.next = 12, this.getRectLocation();

                                  case 12:
                                    n = t.sent, this.otherParams = {
                                        top_left: "".concat(n.southwest.longitude, ",").concat(n.southwest.latitude),
                                        bottom_right: "".concat(n.northeast.longitude, ",").concat(n.northeast.latitude)
                                    };

                                  case 14:
                                    return this.params = o.common.merge(this.params, this.otherParams), t.next = 17, 
                                    this.paintCircles();

                                  case 17:
                                    return t.abrupt("break", 28);

                                  case 18:
                                    if (!e) {
                                        t.next = 23;
                                        break;
                                    }
                                    return t.next = 21, this.getRectLocation();

                                  case 21:
                                    n = t.sent, this.otherParams = {
                                        top_left: "".concat(n.southwest.longitude, ",").concat(n.southwest.latitude),
                                        bottom_right: "".concat(n.northeast.longitude, ",").concat(n.northeast.latitude)
                                    };

                                  case 23:
                                    return this.params = o.common.merge(this.params, this.otherParams), t.next = 26, 
                                    this.paintProject();

                                  case 26:
                                  case 27:
                                    return t.abrupt("break", 28);

                                  case 28:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    paintProject: function() {
                        var e = c(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showNavigationBarLoading(), e.next = 3, r.default.mapLookHouse(this.params);

                                  case 3:
                                    n = e.sent, d = n.data, this.markers = d.map(function(t) {
                                        var e = t.avg_price && 0 !== Math.floor(t.avg_price) ? "\n￥".concat(t.avg_price) : "";
                                        return {
                                            id: Number(t.id),
                                            iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191026358081.png",
                                            longitude: Number(t.x_axis),
                                            latitude: Number(t.y_axis),
                                            callout: {
                                                content: t.name + e,
                                                fontSize: 13,
                                                bgColor: "#FF7D4F",
                                                color: "#fff",
                                                borderColor: "#F1871E",
                                                borderWidth: 1,
                                                display: "ALWAYS",
                                                textAlign: "center",
                                                padding: 6,
                                                borderRadius: 6
                                            },
                                            width: 0,
                                            height: 0,
                                            zIndex: 1,
                                            alpha: .9
                                        };
                                    }), this.markers.push({
                                        iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191027248081.png",
                                        id: 9999,
                                        latitude: this.show_lat,
                                        longitude: this.show_long,
                                        width: 24,
                                        height: 22,
                                        zIndex: 4
                                    }), t.hideNavigationBarLoading();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    paintCircles: function() {
                        var e = c(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showNavigationBarLoading(), e.next = 3, r.default.bizCircles(this.params);

                                  case 3:
                                    n = e.sent, h = n.data, this.markers = h.map(function(t, e) {
                                        return {
                                            id: e,
                                            iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191026358081.png",
                                            longitude: Number(t.lng),
                                            latitude: Number(t.lat),
                                            callout: {
                                                content: "".concat(t.name, "(").concat(t.count, ")"),
                                                fontSize: 13,
                                                bgColor: "#45B787",
                                                color: "#fff",
                                                display: "ALWAYS",
                                                textAlign: "center",
                                                borderWidth: 1,
                                                borderColor: "#2EB07A",
                                                padding: 10,
                                                borderRadius: 6
                                            },
                                            width: 0,
                                            height: 0
                                        };
                                    }), this.markers.push({
                                        iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191027248081.png",
                                        id: 9999,
                                        latitude: this.show_lat,
                                        longitude: this.show_long,
                                        width: 24,
                                        height: 22,
                                        zIndex: 4
                                    }), t.hideNavigationBarLoading();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    paintAreas: function() {
                        var e = c(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showNavigationBarLoading(), e.next = 3, r.default.bizAreas(this.params);

                                  case 3:
                                    n = e.sent, l = n.data, this.markers = l.map(function(t, e) {
                                        return {
                                            id: e,
                                            iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191026358081.png",
                                            longitude: Number(t.lng),
                                            latitude: Number(t.lat),
                                            callout: {
                                                content: "".concat(t.name, "(").concat(t.count, ")"),
                                                fontSize: 13,
                                                bgColor: "#45B787",
                                                color: "#fff",
                                                display: "ALWAYS",
                                                textAlign: "center",
                                                borderWidth: 1,
                                                borderColor: "#2EB07A",
                                                padding: 10,
                                                borderRadius: 6
                                            },
                                            width: 0,
                                            height: 0
                                        };
                                    }), this.markers.push({
                                        iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191027248081.png",
                                        id: 9999,
                                        latitude: this.show_lat,
                                        longitude: this.show_long,
                                        width: 24,
                                        height: 22,
                                        zIndex: 4
                                    }), t.hideNavigationBarLoading();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    getProjectInfo: function() {
                        var t = c(a.default.mark(function t() {
                            var e, n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.mapProjectInfo(f);

                                  case 2:
                                    e = t.sent, this.projectInfo = e.data, this.projectInfo.cover = this.projectInfo.cover.replace(/\?.*$/, ""), 
                                    this.projectShow = !0, this.markers.forEach(function(t) {
                                        9999 !== Math.floor(t.id) && (t.callout && (t.callout.bgColor = "#FF7D4F", t.callout.borderColor = "#F1871E"), 
                                        t.zIndex = 1, t.alpha = .9, t.id === f && (t.callout && (t.callout.bgColor = "#EE3F4D", 
                                        t.callout.borderColor = "#EE3F4D"), t.zIndex = 99, t.alpha = 1, n.long = t.longitude, 
                                        n.lat = Number(t.latitude) - .005));
                                    });

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getLocation: function() {
                        return new Promise(function(e, n) {
                            t.getLocation({
                                type: "gcj02",
                                success: function(t) {
                                    e(t);
                                },
                                fail: function() {
                                    n(new Error("getLocation Permission defined"));
                                }
                            });
                        });
                    },
                    getScale: function() {
                        return new Promise(function(t) {
                            u && u.getScale({
                                success: function(e) {
                                    t(e.scale);
                                }
                            });
                        });
                    },
                    getRectLocation: function() {
                        return new Promise(function(t) {
                            u && u.getRegion({
                                success: function(e) {
                                    t({
                                        southwest: {
                                            latitude: e.northeast.latitude,
                                            longitude: e.southwest.longitude
                                        },
                                        northeast: {
                                            latitude: e.southwest.latitude,
                                            longitude: e.northeast.longitude
                                        }
                                    });
                                }
                            });
                        });
                    }
                }
            };
            e.default = w;
        }).call(this, n("543d").default);
    },
    b3bc: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    c46d5: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("b3bc"), r = n("96b8");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("f027");
        var i = n("f0c5"), s = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    f027: function(t, e, n) {
        "use strict";
        var a = n("1a87");
        n.n(a).a;
    }
}, [ [ "0c59", "common/runtime", "common/vendor" ] ] ]);