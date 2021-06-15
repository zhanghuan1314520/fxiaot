require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/housePriceDetail" ], {
    "0d24": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "5ef1": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("0d24"), r = n("a343");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("68e4");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "68e4": function(e, t, n) {
        "use strict";
        var o = n("81e1");
        n.n(o).a;
    },
    "81e1": function(e, t, n) {},
    a343: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("f93f"), r = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = r.a;
    },
    c1c0: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("5ef1")).default);
        }).call(this, n("543d").createPage);
    },
    f93f: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = s(n("a34a")), r = s(n("c909")), a = s(n("ce46")), i = s(n("4ec3")), c = n("b628");
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t, n, o, r, a, i) {
                try {
                    var c = e[a](i), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(o, r);
            }
            function l(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = e.apply(t, n);
                        function i(e) {
                            u(a, o, r, i, c, "next", e);
                        }
                        function c(e) {
                            u(a, o, r, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var h = {
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
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
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
                mixins: [ a.default ],
                data: function() {
                    return {
                        phone: "",
                        username: "",
                        bottom: 290,
                        houseDetail: {},
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
                        decorationList: [],
                        priceTipContent: !1,
                        phoneTips: !1,
                        cityName: "hangzhou",
                        isShowProjectPlan: !1
                    };
                },
                onShareAppMessage: function() {
                    return c.share.share("快来看~【".concat(this.title, "】户型图"), "/subPackages/project/pages/housePriceDetail?roomId=".concat(this.params.id, "&lotteryId=").concat(this.params.lottery_id, "&p_id=").concat(this.params.project_id, "&price=").concat(this.params.price));
                },
                onUnload: function() {
                    this.$eventBus.$emit("destroyVoice");
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
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
                    this.$eventBus.$emit("destroyVoice");
                },
                onPullDownRefresh: function() {
                    var t = l(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

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
                    var e = l(o.default.mark(function e(t) {
                        var n, a, s = this;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n = c.cache.get("user-phone-info"), this.navBarHeight = n.navHight, this.marginTop = 15 - this.navBarHeight, 
                                !t.hid) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 6, i.default.getDecodeHashParams(t.hid);

                              case 6:
                                (a = e.sent) && a.data && (t = a ? (0, r.default)("?".concat(decodeURIComponent(a.data.path))).search(!0) : t);

                              case 8:
                                this.params = {
                                    id: t.roomId,
                                    project_id: t.p_id,
                                    lottery_id: t.lotteryId,
                                    price: t.price
                                }, i.default.projects.checkIsHaveProjectPlan(this.projectId).then(function(e) {
                                    var t = e.data;
                                    s.isShowProjectPlan = t && t.plan_exist;
                                }), this.reload(), this.guideQuery(), this.getDecoration();

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
                methods: {
                    emptyFunction: function() {},
                    callPhoneSuccess: function() {
                        var e = l(o.default.mark(function e(t) {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, i.default.uiLayout.getAutoPhone(this.params.project_id, "");

                                  case 2:
                                    0 === (n = e.sent).code && t(n.data.phone);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    guideQuery: function() {
                        var e = l(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, i.default.popupsShow("housePriceDetailGuide");

                                  case 2:
                                    if ((t = e.sent) && t.data && Object.prototype.hasOwnProperty.call(t.data, "id")) {
                                        e.next = 10;
                                        break;
                                    }
                                    return n = {
                                        tag: "housePriceDetailGuide",
                                        name: "房源表详情新手引导",
                                        content: JSON.stringify({
                                            content: "housePriceDetailGuide"
                                        })
                                    }, e.next = 7, i.default.popupsCreate(n);

                                  case 7:
                                    this.phoneTips = !0, e.next = 11;
                                    break;

                                  case 10:
                                    this.phoneTips = !1;

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    closeHandle: function() {
                        this.priceTipContent = !this.priceTipContent;
                    },
                    getDecoration: function() {
                        var e = l(o.default.mark(function e() {
                            var t, n, r = this;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, i.default.decorationStyle(this.params.lottery_id);

                                  case 2:
                                    (t = e.sent) && t.data && t.data.length > 0 && (this.decorationList = t.data, this.decorationList && this.decorationList.forEach(function(e, t) {
                                        Math.floor(e.price) === Math.floor(r.price) && (r.currentStyleIndex = t);
                                    }), n = this.decorationList[this.currentStyleIndex], this.defaultDecorationStyle = "约".concat(n.price, "元(").concat(n.style, ")"));

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
                    goVrPage: function() {
                        var t = encodeURIComponent(this.houseDetail.huxing.vr_url), n = "/pages/webview2?redirect=".concat(t);
                        e.navigateTo({
                            url: n
                        });
                    },
                    onSlideChanged: function(e) {
                        this.swiperIndex = e && e.detail && e.detail.current ? e.detail.current : 0, this.houseDetail.huxing && this.houseDetail.huxing.vr_url && 0 === Math.floor(this.swiperIndex) ? this.showType = "VR" : this.showType = "IMG";
                    },
                    showVrItem: function() {
                        this.swiperIndex = 0, this.showType = "VR";
                    },
                    showImage: function() {
                        this.showType = "IMG", this.houseDetail.huxing && this.houseDetail.huxing.vr_url ? this.swiperIndex = 1 : this.swiperIndex = 0;
                    },
                    goCountPage: function() {
                        var t = this.houseDetail.price;
                        e.navigateTo({
                            url: "/subPackages/tools/pages/houseLoan".concat("chengdu" === this.cityName ? "" : "HZ", "?totalPrice=").concat(t, "&loan=1")
                        });
                    },
                    switchDecorationStyle: function() {
                        var t = this.decorationList || [], n = t.map(function(e) {
                            return "约".concat(e.price, "元(").concat(e.style, ")");
                        }), o = this;
                        e.showActionSheet({
                            itemList: n,
                            success: function(e) {
                                var r = e.tapIndex;
                                o.defaultDecorationStyle = n[r], o.currentStyleIndex = r;
                                var a = t[r].price;
                                o.params.price = a, o.reload();
                            }
                        });
                    },
                    preview: function(t) {
                        t && e.previewImage({
                            urls: [ t ]
                        });
                    },
                    prevImage: function(t, n) {
                        e.previewImage({
                            current: t[n],
                            urls: t
                        });
                    }
                }
            };
            t.default = h;
        }).call(this, n("543d").default);
    }
}, [ [ "c1c0", "common/runtime", "common/vendor", "subPackages/project/common/vendor" ] ] ]);