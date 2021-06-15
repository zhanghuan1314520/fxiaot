require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/projectDetail" ], {
    "1e94": function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.hasInfoData ? t.__map(t.infoData, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    g0: e.value.length && "地铁交通" !== e.label ? e.value.join(";") : null
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    9453: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("1e94"), a = n("ab24");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("e20d");
        var i = n("f0c5"), c = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = c.exports;
    },
    a8c6: function(t, e, n) {},
    ab24: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("b0fa"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    b0fa: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = c(n("a34a")), a = c(n("c909")), o = c(n("4ec3")), i = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        l(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, a = !1, o = void 0;
                        try {
                            for (var i, c = t[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            a = !0, o = t;
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function h(t, e, n, r, a, o, i) {
                try {
                    var c = t[o](i), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function i(t) {
                            h(o, r, a, i, c, "next", t);
                        }
                        function c(t) {
                            h(o, r, a, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var g = n("ca00"), y = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FooterBtns: function() {
                        n.e("components/FooterBtns").then(function() {
                            return resolve(n("99f2"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        project_id: "",
                        lottery_id: "",
                        title: "",
                        content: "",
                        item: {},
                        main_message: new Array(6).fill(" "),
                        periphery: new Array(20).fill(" "),
                        zhoubian: [],
                        phone: "",
                        attetionList: null,
                        qrcode: "",
                        is_complete: !1,
                        infoData: [],
                        hasInfoData: !1,
                        surrounding: "",
                        axis: ""
                    };
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onShareAppMessage: function() {
                    var t = "【".concat(this.title, "】的详细信息");
                    return i.share.share(t, "/pages/lotteryDetail?id=".concat(this.lottery_id, "&project_id=").concat(this.project_id, "&redirect=").concat(encodeURIComponent(g.getCurrentPageUrlWithArgs())));
                },
                onPullDownRefresh: function() {
                    var e = p(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var t = p(r.default.mark(function t(e) {
                        var n, i;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.$refs.busiNavHeader.setTransparentMode(), !e.hid) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 4, o.default.getDecodeHashParams(e.hid);

                              case 4:
                                (n = t.sent) && n.data && (i = n ? (0, a.default)("?".concat(decodeURIComponent(n.data.path))).search(!0) : e, 
                                this.lottery_id = i.lottery_id, this.project_id = i.project_id), t.next = 10;
                                break;

                              case 8:
                                this.lottery_id = e.lottery_id, this.project_id = e.project_id;

                              case 10:
                                return t.next = 12, this.reload.call(this);

                              case 12:
                                this.getPeripheryInfo(this.axis.split(",")[0], this.axis.split(",")[1]);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    emptyFunction: function() {},
                    callSalesEvent: function() {
                        this.phoneCall.call(this, this.attetionList.phone_url.url);
                    },
                    contactSalesEvent: function(t) {
                        this.toUrl.call(this, t.hasPhone);
                    },
                    gotoSubwayHandle: function(e, n) {
                        var r = this.periphery[e].value[n];
                        t.openLocation({
                            latitude: parseFloat(r.y_axis),
                            longitude: parseFloat(r.x_axis),
                            name: "".concat(r.type, "号线").concat(r.station, "站")
                        });
                    },
                    preview: function(e) {
                        t.previewImage({
                            current: e,
                            urls: [ e ]
                        });
                    },
                    openRJTipView: function() {
                        t.showModal({
                            title: "容积率说明",
                            content: "容积率：项目土地上总建筑面积与总用地面积的比值，间接反映了单位土地上所承载的各种人为功能的使用量，容积率越低，居住密度越小，表示居住舒适度较高；一个良好的居住小区，高层住宅容积率应不超过5，改善型小区的容积率一般在2-3，新房别墅的容积率一般在1-1.5。",
                            showCancel: !1
                        });
                    },
                    toUrl: function(e) {
                        var n = "/pages/salesMan/index?id=".concat(this.project_id, "&title=").concat(this.title);
                        if (e) t.navigateTo({
                            url: n
                        }); else {
                            var r = "/subPackages/tools/pages/telLogin?direct=".concat(encodeURIComponent(n));
                            t.navigateTo({
                                url: r
                            });
                        }
                    },
                    toMapHandle: function(e, n, r) {
                        t.openLocation({
                            latitude: parseFloat(n) || 0,
                            longitude: parseFloat(e) || 0,
                            name: this.title,
                            address: r
                        });
                    },
                    phoneCall: function() {
                        var e = p(r.default.mark(function e(n) {
                            var a;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!/^(0|1)\d{10}$/.test(n)) {
                                        e.next = 6;
                                        break;
                                    }
                                    return e.next = 4, o.default.getPhoneNum(this.project_id, 2);

                                  case 4:
                                    a = e.sent, 0 === Math.floor(a.code) && (n = a.data.phone);

                                  case 6:
                                    t.makePhoneCall({
                                        phoneNumber: n
                                    });

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = p(r.default.mark(function e() {
                            var n, a, i, c, s, u, l, f, h, p;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = "subPackages/project/pages/projectDetail?project_id=".concat(this.project_id), 
                                    a = this.lottery_id ? "".concat(n, "&lottery_id=").concat(this.lottery_id) : n, 
                                    e.next = 4, Promise.all([ o.default.getProjectDetailsData(this.project_id, this.lottery_id), o.default.getBtnStatus(this.lottery_id, this.project_id), o.default.creatQrCode(a) ]);

                                  case 4:
                                    i = e.sent, c = d(i, 3), s = c[0], u = c[1], l = c[2], u && u.data && (this.attetionList = u.data || {}), 
                                    s && s.data && (this.item = s.data, this.title = s.data.name, this.content = s.data.content, 
                                    f = d(s.data.rows, 2), h = f[0], p = f[1], this.main_message = h, this.periphery = p, 
                                    this.surrounding = s.data.surrounding, this.axis = "".concat(s.data.x_axis, ",").concat(s.data.y_axis)), 
                                    this.qrcode = l.data.qrcode, this.is_complete = !0, t.stopPullDownRefresh();

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    goPeripheryPage: function() {
                        var e = "/subPackages/project/pages/peripheral?project_id=".concat(this.project_id, "&axis=").concat(this.axis, "&project_name=").concat(this.title);
                        t.navigateTo({
                            url: e
                        });
                    },
                    getPeripheryInfoBak: function() {
                        var t = p(r.default.mark(function t() {
                            var e, n, a, i, c, s, l, d, f, h, p, y, v, b, m = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    for (e = {
                                        2: {
                                            keyword: "公交",
                                            category: "公交车站",
                                            distance: "1000",
                                            autoExtend: "0",
                                            lebel: "公交站点"
                                        },
                                        3: {
                                            keyword: "学校",
                                            category: "大学,中学,小学,幼儿园",
                                            distance: "5000",
                                            autoExtend: "0",
                                            lebel: "学校"
                                        },
                                        4: {
                                            keyword: "医院",
                                            category: "综合医院,专科医院",
                                            distance: "5000",
                                            autoExtend: "0",
                                            lebel: "医院"
                                        },
                                        7: {
                                            keyword: "购物",
                                            category: "综合商场",
                                            distance: "2000",
                                            autoExtend: "0",
                                            lebel: "购物中心"
                                        },
                                        9: {
                                            keyword: "公园",
                                            category: "公园",
                                            distance: "5000",
                                            autoExtend: "0",
                                            lebel: "公园"
                                        }
                                    }, n = {}, a = 0; a < this.periphery.length; a += 1) "地铁交通" === (i = this.periphery[a]).text && (n = i.value);
                                    return c = {}, s = [], n.forEach(function(t, e) {
                                        s.push(n[e]);
                                    }), c["地铁交通"] = s, c["地铁交通"].length > 3 && (c["地铁交通"].length = 3), l = [], e.forEach(function(t, e) {
                                        l.push(o.default.lottery.mapLocalSearch(m.project_id, e));
                                    }), t.next = 12, Promise.all(l);

                                  case 12:
                                    for (d = t.sent, f = 0; f < d.length; f += 1) h = d[f], p = h.data.type, y = e[p].lebel, 
                                    0 === parseInt(h.code, 10) && h.data ? c[y] = g.jsonSort(h.data.data, "_distance") : c[y] = [];
                                    c["学校"].length > 5 && (c["学校"].length = 5), c["公交站点"].length > 3 && (c["公交站点"].length = 3), 
                                    c["医院"].length > 5 && (c["医院"].length = 5), c["购物中心"].length > 5 && (c["购物中心"].length = 5), 
                                    this.infoData = u({}, c), v = !1, b = 0;

                                  case 21:
                                    if (!(b <= this.infoData.length)) {
                                        t.next = 28;
                                        break;
                                    }
                                    if (!this.infoData[b].length) {
                                        t.next = 25;
                                        break;
                                    }
                                    return v = !0, t.abrupt("break", 28);

                                  case 25:
                                    b += 1, t.next = 21;
                                    break;

                                  case 28:
                                    this.hasInfoData = v || !!this.surrounding;

                                  case 29:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getPeripheryInfo: function() {
                        var t = p(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.default.lottery.mapLocalSearchText(this.project_id);

                                  case 2:
                                    0 === (e = t.sent).code && (this.infoData = e.data, this.hasInfoData = e.data.length);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = y;
        }).call(this, n("543d").default);
    },
    e20d: function(t, e, n) {
        "use strict";
        var r = n("a8c6");
        n.n(r).a;
    },
    fbbf: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("9453")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "fbbf", "common/runtime", "common/vendor" ] ] ]);