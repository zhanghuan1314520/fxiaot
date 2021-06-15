require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/morningPaper" ], {
    "05b0": function(e, t, n) {},
    "1bfc": function(e, t, n) {},
    "1e43": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("e12c"), a = n("acfd");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("652e"), n("b601");
        var i = n("f0c5"), s = Object(i.a)(a.default, r.b, r.c, !1, null, "85e30d3c", null, !1, r.a, void 0);
        t.default = s.exports;
    },
    "652e": function(e, t, n) {
        "use strict";
        var r = n("1bfc");
        n.n(r).a;
    },
    "8f3a": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), o = s(n("79b9")), i = n("b628");
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i), u = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(r, a);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = e.apply(t, n);
                        function i(e) {
                            u(o, r, a, i, s, "next", e);
                        }
                        function s(e) {
                            u(o, r, a, i, s, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], r = !0, a = !1, o = void 0;
                        try {
                            for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), 
                            !t || n.length !== t); r = !0) ;
                        } catch (e) {
                            a = !0, o = e;
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return n;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var f = n("f4fd"), h = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ], p = [ {
                key: "new_house",
                width: "112rpx"
            }, {
                key: "second_house",
                width: "140rpx"
            }, {
                key: "soil",
                width: "112rpx"
            } ], g = [ {
                key: "area_name",
                width: "144rpx"
            }, {
                key: "project_name",
                width: "156rpx"
            }, {
                key: "avg_price",
                width: "124rpx"
            }, {
                key: "sign_at",
                width: "172rpx"
            } ], y = [ {
                key: "area_name",
                width: "154rpx",
                noFlex: !0
            }, {
                key: "project_name",
                width: "292rpx",
                noFlex: !0,
                paddingLeft: !0
            }, {
                key: "avg_price",
                width: "160rpx",
                noFlex: !0
            } ], m = {
                510100: "https://imgcdn.huanjutang.com/assets/img/2021127104208081.png",
                330100: "https://imgcdn.huanjutang.com/assets/img/20211271041218081.png",
                320100: "https://imgcdn.huanjutang.com/assets/img/20211271045308081.png",
                420100: "https://imgcdn.huanjutang.com/assets/img/20211271040288081.png"
            }, v = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TableBlock: function() {
                        n.e("subPackages/news/pages/components/morningPaper/TableBlock").then(function() {
                            return resolve(n("2c57"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    createPosterAndShare: function() {
                        n.e("subPackages/news/pages/components/unifyUI/createPosterAndShare").then(function() {
                            return resolve(n("cabf"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CanvasPoster: function() {
                        n.e("subPackages/news/components/CanvasPoster/Index").then(function() {
                            return resolve(n("1200"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        extra: 320100 === o.default.CITY_ID ? "登记开始/截止时间均为上午09:00" : "",
                        isSalesMan: !1,
                        loading: !0,
                        shareShow: !1,
                        lottery: {},
                        signing: {},
                        yesterdayTrade: [],
                        date: "",
                        weekday: h[new Date().getDay()],
                        tradFields: p,
                        signFields: g,
                        lotteryFields: y,
                        qrCode: "",
                        morningText: "",
                        showTrade: !1,
                        logo: m[o.default.CITY_ID] || m[510100],
                        canvasWidth: 1125,
                        canvasHeight: 2001
                    };
                },
                computed: {
                    serverDate: function() {
                        var e = new Date();
                        if (!this.date) return {
                            year: e.getFullYear(),
                            month: e.getMonth() + 1,
                            day: e.getDate()
                        };
                        var t = d(this.date.split("-"), 3), n = t[0], r = t[1], a = t[2];
                        return {
                            year: n,
                            month: Number(r),
                            day: Number(a) < 10 ? "0".concat(Number(a)) : Number(a)
                        };
                    }
                },
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? (this.pageScroll = !0, this.$refs.busiNavHeader.setWhiteMode()) : (this.pageScroll = !1, 
                    this.$refs.busiNavHeader.setTransparentMode()), this.$refs.share.pageScroll(e);
                },
                onLoad: function() {
                    var e = c(r.default.mark(function e() {
                        var t;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.$refs.busiNavHeader.setTransparentMode(), e.next = 3, a.default.isSaleMan();

                              case 3:
                                (t = e.sent) && (this.isSalesMan = t.isSalesMan), this.query(), this.queryConfig();

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var t = c(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.query(), this.queryConfig(), e.stopPullDownRefresh();

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
                methods: {
                    shareHandle: function() {
                        this.shareShow = !0;
                    },
                    normalShareHandle: function() {},
                    queryConfig: function() {
                        var e = this;
                        f.refreshGlobalConfig().then(function(t) {
                            e.qrCode = t.morning_qr_code, e.morningText = t.morning_text;
                        });
                    },
                    preview: function() {
                        e.previewImage({
                            urls: [ this.qrCode ]
                        });
                    },
                    query: function() {
                        var e = this;
                        this.loading = !0, a.default.morningPaper().then(function(t) {
                            if (e.loading = !1, 0 === t.code) {
                                var n = t.data, r = n.date, a = n.lottery, o = n.signing, i = n.weekday, s = n.yesterday_trade;
                                if (r && a && o && i) {
                                    e.date = r, e.lottery = a, e.signing = o, e.weekday = i;
                                    var u = Object.prototype.toString.call(s);
                                    "[object Array]" === u && (e.yesterdayTrade = s), "[object Object]" === u && (e.yesterdayTrade = Object.keys(s).length ? [ s ] : []), 
                                    0 !== e.yesterdayTrade.length && (e.showTrade = !0);
                                }
                            }
                        }).catch(function() {
                            e.loading = !1;
                        });
                    },
                    createPoster: function() {
                        var t = c(r.default.mark(function t() {
                            var n, o, s, u, l, f, h, p, g, y, m, v = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return m = function() {
                                        return (m = c(r.default.mark(function e(t) {
                                            var n, a, o, s;
                                            return r.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, Promise.all([ i.canvasUtil.loadImage(h), i.canvasUtil.loadImage(l) ]);

                                                  case 2:
                                                    return n = e.sent, a = d(n, 2), o = a[0], s = a[1], t.drawImage(o, 0, 0, p.w, p.h), 
                                                    i.canvasUtil.createCircleImg(t, {
                                                        image: s,
                                                        size: g.size,
                                                        x: g.x,
                                                        y: g.y
                                                    }), e.abrupt("return", t);

                                                  case 9:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }))).apply(this, arguments);
                                    }, y = function(e) {
                                        return m.apply(this, arguments);
                                    }, e.showLoading({
                                        title: "生成中...",
                                        mask: !0
                                    }), t.next = 5, Promise.all([ a.default.getQrCode("/subPackages/news/pages/morningPaper"), this.posterData() ]);

                                  case 5:
                                    n = t.sent, o = d(n, 2), s = o[0], u = o[1], l = s.data && s.data.qrcode, u && u.data && l || (setTimeout(function() {
                                        i.tip.toast("海报渲染失败");
                                    }, 500), e.hideLoading()), f = u.data, h = f.image, p = f.imgProps, g = f.qrCodeProps, 
                                    this.canvasWidth = p.w, this.canvasHeight = p.h, this.$refs.canvasPoster.render(y.bind(this), h).then(function() {
                                        v.$refs.canvasPoster.saveBusinessCard(), v.shareShow = !1;
                                    }).catch(function() {
                                        setTimeout(function() {
                                            i.tip.toast("海报渲染失败");
                                        }, 500);
                                    }).finally(function() {
                                        e.hideLoading();
                                    });

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    posterData: function() {
                        var e = {
                            action: "morningLottery",
                            params: {
                                paper_detail: {
                                    date: this.date,
                                    weekday: this.weekday,
                                    lottery: this.lottery,
                                    signing: this.signing,
                                    yesterday_trade: this.yesterdayTrade[0] || {}
                                }
                            }
                        };
                        return a.default.lottery.housePriceCanvas(e);
                    }
                }
            };
            t.default = v;
        }).call(this, n("543d").default);
    },
    acfd: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("8f3a"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    b601: function(e, t, n) {
        "use strict";
        var r = n("05b0");
        n.n(r).a;
    },
    e12c: function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    e93b: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("1e43")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "e93b", "common/runtime", "common/vendor" ] ] ]);