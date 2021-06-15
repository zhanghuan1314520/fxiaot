(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/webview2" ], {
    "0e12": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("8cf6")).default);
        }).call(this, n("543d").createPage);
    },
    3343: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("8a0c"), r = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = r.a;
    },
    "62bc": function(e, t, n) {},
    "6a88": function(e, t, n) {
        "use strict";
        var a = n("62bc");
        n.n(a).a;
    },
    "8a0c": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = h(n("a34a")), r = h(n("c909")), i = n("2f62"), s = h(n("94b0")), c = n("ca00"), o = h(n("4ec3")), u = n("b628");
            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function l(e, t, n, a, r, i, s) {
                try {
                    var c = e[i](s), o = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(o) : Promise.resolve(o).then(a, r);
            }
            function d(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(t, n);
                        function s(e) {
                            l(i, a, r, s, c, "next", e);
                        }
                        function c(e) {
                            l(i, a, r, s, c, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var f = n("f4fd"), p = {
                components: {
                    BusiSalesmanInfo: function() {
                        n.e("pages/components/webview/BusiSalesmanInfo").then(function() {
                            return resolve(n("a0f6"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSalesmanInfoForVR: function() {
                        n.e("pages/components/webview/BusiSalesmanInfoType2").then(function() {
                            return resolve(n("1fb7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiVRshareBtn: function() {
                        n.e("pages/components/webview/BusiVRshareBtnType2").then(function() {
                            return resolve(n("b488"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSunshareBtn: function() {
                        n.e("pages/components/webview/BusiSunshareBtn").then(function() {
                            return resolve(n("eb43"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiQualificationShareBtn: function() {
                        n.e("pages/components/webview/BusiQualificationShareBtn").then(function() {
                            return resolve(n("86ba"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiArticleShareBtn: function() {
                        n.e("pages/components/webview/BusiArticleShareBtn").then(function() {
                            return resolve(n("f682"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        title: "",
                        url: "",
                        redirect: "",
                        showShareBtn: !1,
                        webViewUrl: "",
                        collectionStatus: 0,
                        articleId: 0,
                        showSunshineShare: !1,
                        articles: null,
                        isIosOrAndroid: !1,
                        huxingId: null,
                        vrProjectId: null,
                        sharedVr: !1,
                        houseInfo: null,
                        projectName: "",
                        loaded: !1,
                        qualificationShare: !1,
                        showPanoramaShare: !1,
                        isSalesMan: !1,
                        isShowSalesmanInfo: !1,
                        salesManInfo: {},
                        salesManId: 0,
                        isShowVRSalesmanInfo: !1,
                        vrSalesManInfo: {},
                        isAerial: !1
                    };
                },
                computed: (0, i.mapState)({
                    enableShare: function(e) {
                        return e.system.enableShare;
                    }
                }),
                onShareAppMessage: function() {
                    var e = (0, r.default)(this.webViewUrl).search(!0), t = this.articles && this.articles.title, n = e.title || t || "杭州房小团", a = (0, 
                    r.default)(this.webViewUrl);
                    !this.huxingId && this.articleId && (a.setSearch("article_id", this.articleId || ""), 
                    a.setSearch("articleShare", this.salesManId || ""));
                    var i = a.toString();
                    i = (0, c.webview2Url)(i);
                    var s = (0, r.default)(i), o = f.getUserInfo();
                    this.huxingId && (s.setSearch("shared", 1), s.setSearch("share_user_id", o.id)), 
                    this.isAerial && s.setSearch("share_user_id", o.id), i.includes("sunshine") && s.setSearch("isShare", !0), 
                    this.qualificationShare && s.setSearch("qualificationShare", !0), this.articleId && s.setSearch("article_id", this.articleId);
                    var h = "/pages/index?redirect=".concat(encodeURIComponent(s.toString()));
                    return u.share.share(n, h, e.cover || "");
                },
                onLoad: function() {
                    var t = d(a.default.mark(function t(n) {
                        var i, c, h, l, d, f, p, S, v, I, m = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = e.getSystemInfoSync(), this.isIosOrAndroid = i.system.includes("Android"), 
                                t.next = 4, s.default.ping();

                              case 4:
                                if (!(c = n).hid) {
                                    t.next = 10;
                                    break;
                                }
                                return t.next = 8, o.default.getDecodeHashParams(n.hid);

                              case 8:
                                (h = t.sent).data && (c = (0, r.default)("?".concat(decodeURIComponent(h.data.path))).search(!0));

                              case 10:
                                if (l = c.articleShare || c.s_id || "", !c.redirect) {
                                    t.next = 34;
                                    break;
                                }
                                if (this.redirect = c.redirect, d = decodeURIComponent(c.redirect), f = (0, r.default)(d), 
                                p = u.cache.get("userinfo") || {}, S = f.search(!0), f.setSearch("open_id", p && p.openId), 
                                f.setSearch("access_token", u.cache.get("access_token")), f.setSearch("enable_share", this.enableShare ? 1 : 0), 
                                this.webViewUrl = d, this.url = f.toString(), this.articleId = S.article_id || "", 
                                this.showShareBtn = /\/article\//.test(d) || /mp\.weixin\.qq\.com\//.test(d), d.includes("sunshine") && (this.showSunshineShare = !0), 
                                S.showShare && (this.showPanoramaShare = !0), this.huxingId = S.huxing_id, this.sharedVr = !!S.shared, 
                                !this.huxingId) {
                                    t.next = 29;
                                    break;
                                }
                                return t.next = 28, this.getHouseInfo.call(this, this.huxingId);

                              case 28:
                                this.getVRSalemanCardData(c.share_user_id || "", c.redirect, "1");

                              case 29:
                                this.isAerial = "aerialView" === S.type, this.isAerial && (this.vrProjectId = S.project_id, 
                                this.getVRSalemanCardData(c.share_user_id || "", c.redirect, "2")), this.qualificationShare = !!S.qualificationShare || !1, 
                                ((v = S.articleShare || "") || Number(this.articleId) && Number(l)) && o.default.sales.getArticleSalesmanInfo(v).then(function(e) {
                                    m.isShowSalesmanInfo = "[object Object]" === Object.prototype.toString.call(e.data), 
                                    m.salesManInfo = e.data;
                                });

                              case 34:
                                if (this.articleId) {
                                    t.next = 36;
                                    break;
                                }
                                return t.abrupt("return");

                              case 36:
                                return t.next = 38, o.default.isSaleMan();

                              case 38:
                                return (I = t.sent) && (this.isSalesMan = 1 === parseInt(I.data, 10), this.salesManId = I.sales_man_id), 
                                t.next = 42, this.posterContent();

                              case 42:
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
                    getHouseInfo: function() {
                        var e = d(a.default.mark(function e(t) {
                            var n, r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.lottery.houseInfo(t);

                                  case 2:
                                    n = e.sent, 0 === parseInt(n.code, 10) && (this.houseInfo = n.data, this.houseInfo.outer_square = "".concat(this.houseInfo.outer_square, "㎡"), 
                                    this.projectName = this.houseInfo.project.project_name, this.vrProjectId = n.data.project_id, 
                                    r = "".concat(this.houseInfo.house_type, " ").concat(this.houseInfo.outer_square), 
                                    this.url += "&pjId=".concat(this.vrProjectId, "&pjName=").concat(this.projectName, "&square=").concat(r), 
                                    this.loaded = !0);

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
                    handleWebviewLoaded: function() {},
                    posterContent: function() {
                        var t = d(a.default.mark(function t() {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), t.next = 3, o.default.article.projectArticle("", "", 1, 1, "", "", this.articleId);

                                  case 3:
                                    (n = t.sent).data && n.data.data && n.data.data.length > 0 && (this.articles = n.data.data[0] || "", 
                                    this.articles.content = this.articles.content.trim()), e.hideLoading();

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getVRSalemanCardData: function() {
                        var e = d(a.default.mark(function e(t, n, r) {
                            var i, s;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!n.includes("vr.huanjutang.com")) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    return e.next = 4, o.default.sales.getVRSalemanInfo(this.vrProjectId, r, t);

                                  case 4:
                                    i = e.sent, (s = i.data) && (this.vrSalesManInfo = s, this.isShowVRSalesmanInfo = Object.prototype.toString.call(s).includes("[object Object]"));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n, a) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = p;
        }).call(this, n("543d").default);
    },
    "8cf6": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("a5e6"), r = n("3343");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("6a88");
        var s = n("f0c5"), c = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = c.exports;
    },
    a5e6: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    }
}, [ [ "0e12", "common/runtime", "common/vendor" ] ] ]);