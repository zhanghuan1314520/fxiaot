require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/drawDetails" ], {
    7320: function(t, e, i) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("e674")).default);
        }).call(this, i("543d").createPage);
    },
    8274: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(i("a34a")), s = i("b628"), a = r(i("4ec3"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var i = [], n = !0, s = !1, a = void 0;
                        try {
                            for (var r, o = t[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), 
                            !e || i.length !== e); n = !0) ;
                        } catch (t) {
                            s = !0, a = t;
                        } finally {
                            try {
                                n || null == o.return || o.return();
                            } finally {
                                if (s) throw a;
                            }
                        }
                        return i;
                    }
                }(t, e) || c(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || c(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                if (t) {
                    if ("string" == typeof t) return l(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? l(t, e) : void 0;
                }
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            function h(t, e, i, n, s, a, r) {
                try {
                    var o = t[a](r), u = o.value;
                } catch (t) {
                    return void i(t);
                }
                o.done ? e(u) : Promise.resolve(u).then(n, s);
            }
            function d(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, s) {
                        var a = t.apply(e, i);
                        function r(t) {
                            h(a, n, s, r, o, "next", t);
                        }
                        function o(t) {
                            h(a, n, s, r, o, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var p = i("f4fd").getUserInfo, f = {
                data: function() {
                    return {
                        indicatorDots: !1,
                        autoplay: !1,
                        interval: 5e3,
                        duration: 1e3,
                        sku_id: "1",
                        lucky_type: !1,
                        Involved_lsit: [],
                        goodsDetails: {},
                        timestamp: 0,
                        page: 1,
                        size: 7,
                        opt_type: 1,
                        bounced_type: !1,
                        draw_type: !1,
                        img_type: !1,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        winning_type: !1,
                        winning_result: !1,
                        my_result: !1,
                        tankuang: !1,
                        sponsors: [],
                        helpList: {},
                        helpList2: {},
                        getMydata: "",
                        shareQrCode: "",
                        myData: {},
                        bannerList: [],
                        bannerList2: [],
                        getSkuImages: [],
                        getDrawMan: {},
                        lucky_type2: !1,
                        type_all: !1,
                        loyall: 1,
                        participate_type: !0,
                        share_type: !0,
                        tuser_boost_id: ""
                    };
                },
                onShareAppMessage: function() {
                    return s.share.share("我在这里0元抽奖", "/subPackages/activity/pages/drawDetails?skuId=".concat(this.goodsDetails.user_boost_id, "&sku_id=").concat(this.sku_id, "&type=").concat(this.loyall), "https://imgcdn.huanjutang.com/assets/img/20181116/5bee7a673dd0e.jpg");
                },
                onPullDownRefresh: function() {
                    var e = d(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                    title: "加载中"
                                }), this.bannerList2.length = 0, this.bannerList.length = 0, this.participate_type = !0, 
                                this.opt_type = 1, e.next = 7, this.onRead();

                              case 7:
                                t.stopPullDownRefresh(), t.hideLoading();

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onShow: function() {
                    this.loyall = 1, this.winning_type = !1;
                },
                onLoad: function() {
                    var e = d(n.default.mark(function e(i) {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (t.showLoading({
                                    title: "加载中",
                                    mask: !0
                                }), this.sku_id = i.sku_id, !i.skuId) {
                                    e.next = 6;
                                    break;
                                }
                                return this.loyall = i.type, e.next = 6, a.default.initHelp(i.skuId);

                              case 6:
                                return e.next = 8, this.onRead();

                              case 8:
                                t.hideLoading();

                              case 9:
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
                    previewImage: function(e) {
                        t.previewImage({
                            urls: this.bannerList,
                            current: e
                        });
                    },
                    previewImage2: function(e) {
                        t.previewImage({
                            urls: this.bannerList2,
                            current: e
                        });
                    },
                    initHelp: function() {
                        this.bounced_type = !1, this.loyall = 2;
                    },
                    shutDown3: function() {
                        var e = t.getStorageSync("sui_id");
                        e = u(e = new Set(e)), e = [].concat(u(e), [ this.sku_id ]), t.setStorageSync("sui_id", e), 
                        this.winning_type = !1;
                    },
                    lookAll2: function() {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/allUser?userBoostId=".concat(this.goodsDetails.user_boost_id)
                        });
                    },
                    lookAll: function() {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/allUser?sku_id=".concat(this.sku_id)
                        });
                    },
                    writeAddress: function() {
                        var e = t.getStorageSync("sui_id");
                        e = new Set(e), e = [].concat(u(e), [ this.sku_id ]), t.setStorageSync("sui_id", e), 
                        this.winning_type = !1, t.navigateTo({
                            url: "/subPackages/activity/pages/addAddress?sku_id=".concat(this.sku_id)
                        });
                    },
                    getBack: function() {
                        t.navigateBack();
                    },
                    shutDown2: function() {
                        var e = t.getStorageSync("sui_id");
                        e = u(e = new Set(e)), e = [].concat(u(e), [ this.sku_id ]), t.setStorageSync("sui_id", e), 
                        this.bounced_type = !1, this.draw_type = !1;
                    },
                    drawbtn: function() {
                        var t = this;
                        this.bounced_type = !0, this.draw_type = !0, this.lucky_type = !0, this.lucky_type2 = !0, 
                        a.default.setTakePart(this.sku_id).then(function() {
                            a.default.getParticipate(t.sku_id, t.page, t.size).then(function(e) {
                                t.Involved_lsit = e.data;
                            }), t.goodsDetails.user_boost_id || a.default.setHellphim(t.sku_id).then(function(e) {
                                t.goodsDetails.user_boost_id = e.data.id, a.default.getHellpList(t.goodsDetails.user_boost_id, t.page, t.size).then(function(e) {
                                    t.helpList = e.data, t.bounced_type = !1;
                                });
                            });
                        });
                    },
                    shutDown: function() {
                        this.winning_type = !1;
                    },
                    closeCanvas: function() {
                        this.img_type = !1;
                    },
                    saveShareImage: function() {
                        var e = this;
                        return new Promise(function() {
                            t.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: e.canvasWidth,
                                height: e.canvasHeight,
                                canvasId: "myCanvas",
                                success: function(e) {
                                    var i = e.tempFilePath;
                                    t.saveImageToPhotosAlbum({
                                        filePath: i,
                                        success: function(t) {
                                            t && s.tip.success("保存成功");
                                        },
                                        fail: function() {
                                            s.tip.toast("保存失败", "", "none");
                                        }
                                    });
                                },
                                fail: function() {
                                    s.tip.toast("海报生成失败", "", "none");
                                }
                            }), e.img_type = !1;
                        });
                    },
                    shareTo: function() {
                        var e = d(n.default.mark(function e() {
                            var i = this;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.img_type = !0, e.next = 3, this.drawImage().catch(function() {
                                        i.drawCanvas = !1, t.hideLoading(), s.tip.toast("海报生成失败", "", "none");
                                    });

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
                    choose_item: function() {
                        var t = d(n.default.mark(function t(e) {
                            var i, s, r = this;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.opt_type = e, 2 === parseInt(e, 10) && this.goodsDetails.user_boost_id && a.default.getHellpList(this.goodsDetails.user_boost_id, this.page, this.size).then(function(t) {
                                        r.helpList = t.data;
                                    }), 3 !== parseInt(e, 10)) {
                                        t.next = 11;
                                        break;
                                    }
                                    return t.next = 5, a.default.getMyRannk(this.sku_id);

                                  case 5:
                                    return i = t.sent, this.getMydata = i.data, t.next = 9, a.default.rankingsList(this.sku_id);

                                  case 9:
                                    s = t.sent, this.helpList2 = s.data;

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    onRead: function() {
                        var e = d(n.default.mark(function e() {
                            var i, s, r, c, l, h, d, f, g, y, _, v, m, w, k, b, S, I, D = this;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.myData = p(), e.next = 3, Promise.all([ a.default.getDrawMan(this.sku_id), a.default.getShareQrCode(this.sku_id), a.default.goodsBannerImg(this.sku_id), a.default.getParticipate(this.sku_id, this.page, this.size), a.default.getSponsorsList(this.sku_id), a.default.getSkuImages(this.sku_id), a.default.drawSkuDetails(this.sku_id), a.default.getUserDraw(this.sku_id), a.default.getUserdzType(this.sku_id) ]);

                                  case 3:
                                    for (i = e.sent, s = o(i, 9), r = s[0], c = s[1], l = s[2], h = s[3], d = s[4], 
                                    f = s[5], g = s[6], y = s[7], _ = s[8], y = y.data, _ = _.data, this.getDrawMan = r.data, 
                                    l.data.forEach(function(t) {
                                        D.bannerList2.push(t.image);
                                    }), this.shareQrCode = c.data, this.timestamp = Date.now(), this.Involved_lsit = h.data, 
                                    this.sponsors = d.data, f.data.forEach(function(t) {
                                        D.bannerList.push(t.image_url);
                                    }), this.goodsDetails = g.data, this.tuser_boost_id = this.goodsDetails.user_boost_id, 
                                    v = new Date(this.goodsDetails.lucky_time.replace(/-/g, "/")).getTime(), m = new Date(this.goodsDetails.end_time.replace(/-/g, "/")).getTime(), 
                                    w = new Date(this.goodsDetails.start_time.replace(/-/g, "/")).getTime(), k = t.getStorageSync("sui_id"), 
                                    k = u(k = new Set(k)), b = !1, S = k.length, I = 0; I < S; I += 1) String(k[I]) === String(this.sku_id) && (b = !0);
                                    this.timestamp < m && this.timestamp > w ? 0 === parseInt(y.status, 10) ? (this.lucky_type = !0, 
                                    this.lucky_type2 = !0) : -1 === parseInt(g.data.status, 10) && (this.lucky_type = !1) : this.timestamp > m && this.timestamp < v ? 0 === parseInt(y.status, 10) ? (this.lucky_type = !0, 
                                    this.lucky_type2 = !0) : -1 === parseInt(y.status, 10) && (this.lucky_type = !0, 
                                    this.lucky_type2 = !1, t.showModal({
                                        title: "提示",
                                        content: "参与活动时间已经结束",
                                        showCancel: !1
                                    })) : this.timestamp > v && (b ? (this.share_type = !1, this.lucky_type2 = !0, 1 === parseInt(_.type, 10) ? 1 === parseInt(_.status, 10) ? (this.winning_result = !0, 
                                    this.my_result = !0) : (this.winning_result = !0, this.my_result = !1) : (this.share_type = !1, 
                                    this.participate_type = !1, this.lucky_type2 = !0, this.winning_result = !0, this.my_result = !1)) : (this.share_type = !1, 
                                    this.lucky_type2 = !0, 1 === parseInt(_.type, 10) ? 1 === parseInt(_.status, 10) ? (this.winning_type = !0, 
                                    this.winning_result = !0, this.my_result = !0) : (this.bounced_type = !0, this.winning_result = !0, 
                                    this.my_result = !1) : (this.share_type = !1, this.lucky_type2 = !0, 2 === parseInt(this.loyall, 10) ? (this.bounced_type = !1, 
                                    this.winning_result = !0, this.my_result = !1, this.loyall = 1, this.participate_type = !1) : (this.participate_type = !1, 
                                    this.winning_result = !0, this.bounced_type = !1, this.draw_type = !1, this.my_result = !1))));

                                  case 35:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    drawImage: function() {
                        var e = d(n.default.mark(function e() {
                            var i, a, r, u, c, l, h, d, p, f, g, y, _, v;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return u = function(t, e) {
                                        try {
                                            this.$report.report.__reportErrorReq({
                                                errMsg: t,
                                                error: JSON.stringify(e, Object.getOwnPropertyNames(e)),
                                                path: "/subPackages/activity/pages/drawDetails"
                                            }, [ "posterErr" ]);
                                        } catch (t) {
                                            console.error(t);
                                        }
                                    }, t.showLoading({
                                        title: "生成中..."
                                    }), i = t.getSystemInfoSync(), a = i.windowWidth, r = a / 600, this.canvasWidth = 600 * r * .9, 
                                    this.canvasHeight = 780 * r, e.prev = 5, e.next = 8, Promise.all([ this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181119/5bf21c475a917.png"), this.downloadFile(this.myData.avatarUrl), this.downloadFile(this.shareQrCode), this.downloadFile(this.goodsDetails.goods.image) ]).catch(function(t) {
                                        s.tip.toast("下载路径有误", "", "none"), u("下载路径有误", {
                                            err: JSON.stringify(t),
                                            params: {
                                                drawBg: h,
                                                avatar: d,
                                                qrCode: p,
                                                cover: f
                                            }
                                        });
                                    });

                                  case 8:
                                    c = e.sent, l = o(c, 4), h = l[0], d = l[1], p = l[2], f = l[3], h && d && p && f && ((g = t.createCanvasContext("myCanvas")).drawImage(h, 0, 0, this.canvasWidth, this.canvasHeight), 
                                    g.save(), g.arc(20 * r + 86 * r / 2, 40 * r + 86 * r / 2, 43 * r, 0, 2 * Math.PI, !1), 
                                    g.clip(), g.drawImage(d, 20 * r, 40 * r, 86 * r, 86 * r), g.restore(), y = 60 * r, 
                                    g.setFontSize(26 * r), g.setFillStyle("#999999"), g.fillText(this.myData.nickName, 120 * r, y), 
                                    y += 50 * r, g.setFontSize(22 * r), g.setFillStyle("#494949"), g.fillText("“我正在0元免费抽奖，扫码帮我助力”", 128 * r, y), 
                                    _ = (this.canvasWidth - 456 * r) / 2, y += 60 * r, g.drawImage(f, _, y, 456 * r, 230 * r), 
                                    y += 290 * r, g.setFontSize(28 * r), g.setFillStyle("#333333"), g.setTextAlign("center"), 
                                    g.fillText(this.goodsDetails.title, this.canvasWidth / 2, y), y += 40 * r, g.setFontSize(28 * r), 
                                    g.setFillStyle("#333333"), g.setTextAlign("center"), g.fillText("0元免费抽奖，快来围观~", this.canvasWidth / 2, y), 
                                    g.setLineDash([ 10, 5 ], 5), g.setStrokeStyle("#999999"), g.beginPath(), g.moveTo(52 * r, this.canvasHeight - 240 * r), 
                                    g.lineTo(this.canvasWidth - 56 * r, this.canvasHeight - 240 * r), g.stroke(), g.drawImage(p, 60 * r, this.canvasHeight - 190 * r, 160 * r, 160 * r), 
                                    g.setTextAlign("left"), v = 250 * r, g.setFontSize(26 * r), g.setFillStyle("#999999"), 
                                    g.fillText("已有".concat(this.Involved_lsit.total ? this.Involved_lsit.total : "", "人参与抽奖"), v, this.canvasHeight - 160 * r), 
                                    g.setFontSize(26 * r), g.setFillStyle("#e63831"), g.fillText("价值".concat(this.goodsDetails.price, "元"), v, this.canvasHeight - 110 * r), 
                                    g.setFontSize(26 * r), g.setFillStyle("#333333"), g.fillText("扫一扫开始免费拿", v, this.canvasHeight - 60 * r), 
                                    g.draw(), t.hideLoading()), e.next = 21;
                                    break;

                                  case 17:
                                    e.prev = 17, e.t0 = e.catch(5), s.tip.toast("生成时异常", "", "none"), u("生成时异常", JSON.stringify(e.t0));

                                  case 21:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 5, 17 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    downloadFile: function() {
                        var e = d(n.default.mark(function e(i) {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new Promise(function(e, n) {
                                        if (i) {
                                            var s = i.replace(/^http:/, "https:");
                                            t.downloadFile({
                                                url: s,
                                                success: function(t) {
                                                    e(t.tempFilePath);
                                                },
                                                fail: function(t) {
                                                    n(t);
                                                }
                                            });
                                        } else n(new Error("下载对象里面没有路径"));
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = f;
        }).call(this, i("543d").default);
    },
    "8b7c": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("8274"), s = i.n(n);
        for (var a in n) "default" !== a && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = s.a;
    },
    9855: function(t, e, i) {},
    c23b: function(t, e, i) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, s = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return s;
        }), i.d(e, "a", function() {});
    },
    e674: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("c23b"), s = i("8b7c");
        for (var a in s) "default" !== a && function(t) {
            i.d(e, t, function() {
                return s[t];
            });
        }(a);
        i("e77e");
        var r = i("f0c5"), o = Object(r.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = o.exports;
    },
    e77e: function(t, e, i) {
        "use strict";
        var n = i("9855");
        i.n(n).a;
    }
}, [ [ "7320", "common/runtime", "common/vendor" ] ] ]);