require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/oldHousePlanDetail" ], {
    "04be": function(e, t, n) {
        "use strict";
        var o = n("b728");
        n.n(o).a;
    },
    "34a0": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("bf89"), i = n("3b05");
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("04be");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "3b05": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("99ed"), i = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = i.a;
    },
    "99ed": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = c(n("a34a")), i = c(n("c909")), r = c(n("4ec3")), a = n("b628");
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, o, i, r, a) {
                try {
                    var c = e[r](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(o, i);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, i) {
                        var r = e.apply(t, n);
                        function a(e) {
                            s(r, o, i, a, c, "next", e);
                        }
                        function c(e) {
                            s(r, o, i, a, c, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var d = n("ca00"), l = !1, h = null, f = {
                components: {
                    CustomNavHeader: function() {
                        n.e("subPackages/project/pages/component/customNavHeader").then(function() {
                            return resolve(n("12fd"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FooterBtns: function() {
                        n.e("components/FooterBtns").then(function() {
                            return resolve(n("99f2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RecommedSales: function() {
                        n.e("components/RecommedSales").then(function() {
                            return resolve(n("1a4a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AudioPlayer: function() {
                        n.e("components/AudioPlayer").then(function() {
                            return resolve(n("7901"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        page: 1,
                        more: !0,
                        items: [],
                        project_id: 0,
                        project_name: "",
                        is_sales_man: 2,
                        lottery_id: 0,
                        typeList: [],
                        typeListNow: [],
                        type: 0,
                        typeTo: 0,
                        tab: 1,
                        loading: !1,
                        phone: "",
                        username: "",
                        showCallBtn: !1,
                        currentTime: 0,
                        duration: 0,
                        voiceIndex: "none",
                        voiceType: 0,
                        bottom: 290,
                        info: {},
                        defaultDecorationStyle: "",
                        swiperIndex: 0,
                        showType: null,
                        qrcode: "",
                        scrollTop: 0,
                        pageSrcoll: !1,
                        params: {
                            id: "",
                            project_id: "",
                            lottery_id: "",
                            price: ""
                        },
                        currentStyleIndex: 0,
                        navBarHeight: 64,
                        marginTop: 15,
                        cityName: "hangzhou"
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("快来看~【".concat(this.project_name, "】户型图"), "/pages/lotteryDetail?id=".concat(this.lottery_id, "&project_id=").concat(this.project_id, "&redirect=").concat(encodeURIComponent(d.getCurrentPageUrlWithArgs())));
                },
                onUnload: function() {
                    this.resetVoice();
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    },
                    firstPay: function() {
                        return (.3 * this.info.price / 1e4).toFixed(1);
                    },
                    sixPay: function() {
                        return (.6 * this.info.price / 1e4).toFixed(1);
                    },
                    totalPrice: function() {
                        return parseInt(this.info.price / 1e4, 10);
                    }
                },
                watch: {
                    scrollTop: function(e) {
                        return this.pageSrcoll = e > 32;
                    }
                },
                onPageScroll: function(e) {
                    this.scrollTop = e.scrollTop;
                },
                onHide: function() {
                    l || this.resetVoice();
                },
                onPullDownRefresh: function() {
                    var t = u(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.loadData();

                              case 2:
                                e.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var e = u(o.default.mark(function e(t) {
                        var n, c;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n = a.cache.get("user-phone-info"), this.navBarHeight = n.navHight, console.log(this.navBarHeight), 
                                this.marginTop = 15 - this.navBarHeight, !t.hid) {
                                    e.next = 9;
                                    break;
                                }
                                return e.next = 7, r.default.getDecodeHashParams(t.hid);

                              case 7:
                                (c = e.sent) && c.data && (t = c ? (0, i.default)("?".concat(decodeURIComponent(c.data.path))).search(!0) : t);

                              case 9:
                                this.params = {
                                    id: t && t.id,
                                    project_id: t.project_id,
                                    lottery_id: t.lottery_id,
                                    price: ""
                                }, this.loadData(this.params), this.loadQrcode();

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    zoomPic: function(t) {
                        e.previewImage({
                            current: t,
                            urls: [ t ]
                        });
                    },
                    goVrPage: function() {
                        var t = encodeURIComponent(this.info.vr_url), n = "/pages/webview2?redirect=".concat(t);
                        e.navigateTo({
                            url: n
                        });
                    },
                    onSlideChanged: function(e) {
                        var t = e && e.detail && e.detail.current ? e.detail.current : 0;
                        this.info.vr_cover && 0 === Number(t) ? this.showType = "VR" : this.showType = "IMG";
                    },
                    showVrItem: function() {
                        this.swiperIndex = 0, this.showType = "VR";
                    },
                    showImage: function() {
                        this.showType = "IMG", this.info.vr_cover ? this.swiperIndex = 1 : this.swiperIndex = 0;
                    },
                    goOneHouseOnePrice: function() {
                        e.navigateTo({
                            url: "/subPackages/project/pages/housePriceList?lotteryId=".concat(this.params.lottery_id, "&p_id=").concat(this.params.project_id, "&houseTypeId=").concat(this.params.id)
                        });
                    },
                    goCountPage: function() {
                        var t = (this.info.price / 1e4).toFixed(1);
                        e.navigateTo({
                            url: "/subPackages/tools/pages/houseLoan".concat("chengdu" === this.cityName ? "" : "HZ", "?totalPrice=").concat(t, "&loan=1")
                        });
                    },
                    switchDecorationStyle: function() {
                        var t = this.info.decoration_style || [], n = t.map(function(e) {
                            return "约".concat(e.price, "元(").concat(e.style, ")");
                        }), o = this;
                        e.showActionSheet({
                            itemList: n,
                            success: function(e) {
                                var i = e.tapIndex;
                                o.defaultDecorationStyle = n[i], o.currentStyleIndex = i;
                                var r = t[i].price;
                                o.params.price = r, o.loadData();
                            }
                        });
                    },
                    prevImage: function(t, n) {
                        e.previewImage({
                            current: t[n],
                            urls: t
                        });
                    },
                    loadQrcode: function() {
                        var e = u(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = "subPackages/project/pages/oldHousePlan?id=".concat(this.params.id, "&project_id=").concat(this.params.project_id, "&lottery_id=").concat(this.params.lottery_id, "&price=").concat(this.params.price), 
                                    e.next = 3, r.default.creatQrCode(t);

                                  case 3:
                                    (n = e.sent) && 0 === n.code && (this.qrcode = n.data.qrcode);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadData: function() {
                        var e = u(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.lottery.hosePlanDetail(this.params);

                                  case 2:
                                    (t = e.sent) && 0 === t.code && (this.info = t.data, this.info.decoration_style.length && (n = this.info.decoration_style[this.currentStyleIndex], 
                                    this.defaultDecorationStyle = "约".concat(n.price, "元(").concat(n.style, ")")), this.info.vr_cover ? this.showType = "VR" : this.showType = "IMG", 
                                    console.log("this.info", this.info));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    playVoice: function(t) {
                        var n = this;
                        h = e.getBackgroundAudioManager();
                        var o = this.items[t];
                        Math.floor(this.voiceId) !== Math.floor(o.id) && (h.src = o.voice_url, h.title = this.project_name), 
                        this.voiceIndex = t, this.voiceId = o && o.id, h.play(), this.duration = 1, h && (h.onTimeUpdate(function() {
                            h && h.duration && h.currentTime && (n.currentTime = n.changeTime(h.duration, h.currentTime));
                        }), h.onEnded(function() {
                            n.currentTime = 0, n.duration = 0, n.voiceIndex = "none";
                        }));
                    },
                    pauseVoice: function() {
                        this.duration = 0, h.pause();
                    },
                    handlePreview: function(e, t) {
                        e.vr_url ? this.showVr(e, t) : this.openPreviewImg(t, e.id);
                    },
                    openPreviewImg: function(t) {
                        for (var n = [], o = 0; o < this.items.length; o += 1) n.push(this.items[o].original_image);
                        e.previewImage({
                            current: this.items[t].original_image,
                            urls: n
                        }), l = !0;
                    },
                    resetVoice: function() {
                        this.currentTime = 0, this.duration = 0, this.voiceId = 0, h && h.stop(), h = null;
                    }
                }
            };
            t.default = f;
        }).call(this, n("543d").default);
    },
    a2aa: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("34a0")).default);
        }).call(this, n("543d").createPage);
    },
    b728: function(e, t, n) {},
    bf89: function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    }
}, [ [ "a2aa", "common/runtime", "common/vendor" ] ] ]);