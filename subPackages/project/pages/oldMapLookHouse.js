require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/oldMapLookHouse" ], {
    "0a47": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("402a")).default);
        }).call(this, n("543d").createPage);
    },
    "402a": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5795"), r = n("b80b");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("924d");
        var o = n("f0c5"), s = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    5795: function(t, e, n) {
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
    "924d": function(t, e, n) {
        "use strict";
        var a = n("fe58");
        n.n(a).a;
    },
    b80b: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d155"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    d155: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3")), i = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var a = 0, r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, o = !0, s = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t;
                    },
                    e: function(t) {
                        s = !0, i = t;
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return();
                        } finally {
                            if (s) throw i;
                        }
                    }
                };
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function u(t, e, n, a, r, i, o) {
                try {
                    var s = t[i](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function o(t) {
                            u(i, a, r, o, s, "next", t);
                        }
                        function s(t) {
                            u(i, a, r, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f, d = i.common, h = n("f4fd"), p = d.debounce(l(a.default.mark(function t() {
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return f.changeArea ? f.changeArea = !1 : (f.areaIndex = 0, f.area_id = ""), t.next = 3, 
                        f.methods.loadData.call(f);

                      case 3:
                        f.$apply();

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
            })), 400), g = {
                components: {},
                data: function() {
                    return {
                        winHeight: 0,
                        keyword: "",
                        leftBottomPoint: "",
                        rightTopPoint: "",
                        mapContext: null,
                        markers: [],
                        long: 0,
                        lat: 0,
                        scale: 14,
                        fn: null,
                        markerType: 1,
                        sendScale: 14,
                        areaIndex: 0,
                        areaList: [ {
                            name: "全部区域",
                            id: 0
                        } ],
                        areaNameList: [],
                        type: "",
                        houseType: [ {
                            name: "全部类型",
                            value: ""
                        }, {
                            name: "待售",
                            value: 1
                        }, {
                            name: "即将预售",
                            value: 2
                        }, {
                            name: "在售",
                            value: 3
                        }, {
                            name: "已清盘",
                            value: 9
                        } ],
                        houseTypeName: "全部类型",
                        houseTypeList: [ "全部类型", "待售", "即将预售", "在售", "已清盘" ],
                        mapHeight: 0,
                        authSetting: null,
                        loading: !1,
                        area_id: "",
                        changeArea: !1
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("我在用地图找房，推荐给你用");
                },
                onLoad: function() {
                    var e = l(a.default.mark(function e() {
                        var n, i, o, s = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return f = this, e.next = 3, h.getGlobalConfig();

                              case 3:
                                return n = e.sent, i = n.city_info, o = t.getSystemInfoSync(), this.winHeight = o.windowHeight, 
                                this.mapHeight = this.winHeight - 40, t.showLoading({
                                    title: "加载中"
                                }), this.loading = !1, e.next = 12, this.isOpenLocation();

                              case 12:
                                if (!e.sent) {
                                    e.next = 25;
                                    break;
                                }
                                return e.prev = 14, e.next = 17, this.getLocation();

                              case 17:
                                e.next = 23;
                                break;

                              case 19:
                                e.prev = 19, e.t0 = e.catch(14), this.long = i.x_axis, this.lat = i.y_axis;

                              case 23:
                                e.next = 27;
                                break;

                              case 25:
                                this.long = i.x_axis, this.lat = i.y_axis;

                              case 27:
                                this.loading = !0, t.hideLoading(), wx.nextTick(l(a.default.mark(function e() {
                                    var n, i, o;
                                    return a.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.next = 2, r.default.areaList();

                                          case 2:
                                            if (n = e.sent, i = [], n && n.data) {
                                                for (o in n.data.area) i.push({
                                                    name: n.data.area[o],
                                                    id: o
                                                });
                                                s.areaList = s.areaList.concat(i);
                                            }
                                            s.mapContext = t.createMapContext("map", s), s.mapContext && s.mapContext.getRegion({
                                                success: function() {
                                                    var t = l(a.default.mark(function t(e) {
                                                        return a.default.wrap(function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                              case 0:
                                                                return s.leftBottomPoint = "".concat(e.southwest.longitude, ",").concat(e.southwest.latitude), 
                                                                s.rightTopPoint = "".concat(e.northeast.longitude, ",").concat(e.northeast.latitude), 
                                                                t.next = 4, s.getScale();

                                                              case 4:
                                                                return s.sendScale = t.sent, t.next = 7, s.loadData.call(s);

                                                              case 7:
                                                              case "end":
                                                                return t.stop();
                                                            }
                                                        }, t);
                                                    }));
                                                    return function(e) {
                                                        return t.apply(this, arguments);
                                                    };
                                                }()
                                            });

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                })));

                              case 30:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 14, 19 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    backHome: function() {
                        t.switchTab({
                            url: "/pages/index"
                        });
                    },
                    __getLocation: function() {
                        var t = l(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, this.getLocation();

                                  case 3:
                                    t.next = 7;
                                    break;

                                  case 5:
                                    t.prev = 5, t.t0 = t.catch(0);

                                  case 7:
                                    this.long = parseFloat(this.long) + 1e-10, this.lat = parseFloat(this.lat) + 1e-10;

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 0, 5 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    showHouseType: function() {
                        var e = l(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n = this, t.showActionSheet({
                                        itemList: this.houseTypeList,
                                        success: function() {
                                            var t = l(a.default.mark(function t(e) {
                                                var r, i;
                                                return a.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        return r = e.tapIndex, i = n.houseType[r], n.houseTypeName = i.name, n.type = i.value, 
                                                        t.next = 5, n.getScale();

                                                      case 5:
                                                        return n.sendScale = t.sent, t.next = 8, n.loadData.call(n);

                                                      case 8:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    showHouseArea: function() {
                        var t = l(a.default.mark(function t(e) {
                            var n, i, o, s, c;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = e.detail.value, !this.areaList || !this.areaList[n]) {
                                        t.next = 17;
                                        break;
                                    }
                                    if (i = this.areaList[n], o = i ? i.id : "", this.changeArea = !0, this.areaIndex = n, 
                                    !o) {
                                        t.next = 12;
                                        break;
                                    }
                                    return t.next = 8, r.default.areaAxis(o);

                                  case 8:
                                    (s = t.sent).data && (c = s.data, this.area_id = o, this.long = c.x_axis, this.lat = c.y_axis, 
                                    this.scale = 13 + Math.random()), t.next = 17;
                                    break;

                                  case 12:
                                    return t.next = 14, this.getLocation();

                                  case 14:
                                    this.areaIndex = 0, this.area_id = "", this.scale = 13 + Math.random();

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    regChange: function() {
                        var t = l(a.default.mark(function t(e) {
                            var n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    "end" === e.type && this.mapContext && this.mapContext.getRegion({
                                        success: function() {
                                            var t = l(a.default.mark(function t(e) {
                                                return a.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        return n.leftBottomPoint = "".concat(e.southwest.longitude, ",").concat(e.southwest.latitude), 
                                                        n.rightTopPoint = "".concat(e.northeast.longitude, ",").concat(e.northeast.latitude), 
                                                        t.next = 4, n.getScale();

                                                      case 4:
                                                        n.sendScale = t.sent, p();

                                                      case 6:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadData: function() {
                        var t = l(a.default.mark(function t() {
                            var e, n, i, o, c, u, l, f;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.oldMapLookHouse(this.leftBottomPoint, this.rightTopPoint, this.sendScale, this.type, this.area_id);

                                  case 2:
                                    e = t.sent, this.markerType = this.sendScale < 12 ? 2 : 1, n = [], i = 0, o = s(e.data), 
                                    t.prev = 7, o.s();

                                  case 9:
                                    if ((c = o.n()).done) {
                                        t.next = 33;
                                        break;
                                    }
                                    if ("2" !== (u = c.value).type.toString()) {
                                        t.next = 16;
                                        break;
                                    }
                                    n.push({
                                        id: i,
                                        iconPath: "/static/images/empty.png",
                                        longitude: u.x_axis,
                                        latitude: u.y_axis,
                                        callout: {
                                            content: "".concat(u.name, "\n").concat(u.num, "套"),
                                            fontSize: 14,
                                            bgColor: "#1365e1",
                                            color: "#ffffff",
                                            padding: 4,
                                            borderRadius: 3,
                                            display: "ALWAYS",
                                            textAlign: "center"
                                        },
                                        width: 1,
                                        height: 1
                                    }), i++, t.next = 31;
                                    break;

                                  case 16:
                                    l = u.avg_price ? "\n￥".concat(u.avg_price) : "", f = "#1365e1", t.t0 = u.status, 
                                    t.next = 1 === t.t0 ? 21 : 2 === t.t0 ? 23 : 3 === t.t0 ? 25 : 9 === t.t0 ? 27 : 29;
                                    break;

                                  case 21:
                                    return f = "#16a4ae", t.abrupt("break", 30);

                                  case 23:
                                    return f = "#ee557d", t.abrupt("break", 30);

                                  case 25:
                                    return f = "#df8534", t.abrupt("break", 30);

                                  case 27:
                                    return f = "#777", t.abrupt("break", 30);

                                  case 29:
                                    return t.abrupt("break", 30);

                                  case 30:
                                    n.push({
                                        id: encodeURIComponent(u.url),
                                        iconPath: "/static/images/empty.png",
                                        longitude: u.x_axis,
                                        latitude: u.y_axis,
                                        callout: {
                                            content: "".concat(u.name).concat(l),
                                            fontSize: 12,
                                            bgColor: f,
                                            color: "#ffffff",
                                            padding: 4,
                                            borderRadius: 3,
                                            display: "ALWAYS",
                                            textAlign: "center"
                                        },
                                        width: 1,
                                        height: 1
                                    });

                                  case 31:
                                    t.next = 9;
                                    break;

                                  case 33:
                                    t.next = 38;
                                    break;

                                  case 35:
                                    t.prev = 35, t.t1 = t.catch(7), o.e(t.t1);

                                  case 38:
                                    return t.prev = 38, o.f(), t.finish(38);

                                  case 41:
                                    this.markers = n;

                                  case 42:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 7, 35, 38, 41 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    calloutTap: function() {
                        var e = l(a.default.mark(function e(n) {
                            var r, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (r = n.markerId, 2 !== this.markerType) {
                                        e.next = 12;
                                        break;
                                    }
                                    return e.next = 4, this.getScale();

                                  case 4:
                                    i = e.sent, this.scale = i > 14 ? i : i + 2.5, this.sendScale = 13, this.long = this.markers[r].longitude, 
                                    this.lat = this.markers[r].latitude, this.mapContext.moveToLocation(), e.next = 13;
                                    break;

                                  case 12:
                                    t.navigateTo({
                                        url: decodeURIComponent(r)
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    isOpenLocation: function() {
                        return new Promise(function(e) {
                            try {
                                t.getSetting({
                                    success: function() {
                                        e(!0);
                                    },
                                    fail: function() {
                                        e(!1);
                                    }
                                });
                            } catch (t) {
                                e(!1);
                            }
                        });
                    },
                    getLocation: function() {
                        var e = this;
                        return new Promise(function(n, a) {
                            t.getLocation({
                                type: "gcj02",
                                success: function(t) {
                                    e.long = t.longitude, e.lat = t.latitude, n();
                                },
                                fail: function() {
                                    a(new Error("getLocation fail"));
                                }
                            });
                        });
                    },
                    getScale: function() {
                        var t = this;
                        return new Promise(function(e) {
                            t.mapContext && t.mapContext.getScale({
                                success: function(t) {
                                    e(t.scale);
                                }
                            });
                        });
                    }
                }
            };
            e.default = g;
        }).call(this, n("543d").default);
    },
    fe58: function(t, e, n) {}
}, [ [ "0a47", "common/runtime", "common/vendor" ] ] ]);