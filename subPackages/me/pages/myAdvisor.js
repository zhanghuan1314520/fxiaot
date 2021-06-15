require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/myAdvisor" ], {
    "238c": function(t, e, n) {
        "use strict";
        var a = n("61a0");
        n.n(a).a;
    },
    "3f68": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5efd"), r = n("f297");
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        n("238c");
        var i = n("f0c5"), o = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "405b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3")), s = n("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, a, r, s, i) {
                try {
                    var o = t[s](i), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var s = t.apply(e, n);
                        function i(t) {
                            o(s, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            o(s, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var u = n("f4fd"), l = {
                data: function() {
                    return {
                        project_name: "",
                        project_id: null,
                        page: 1,
                        more: !0,
                        loading: !0,
                        salesList: [],
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        color: {
                            1: "https://imgcdn.huanjutang.com/assets/img/20180713/5b487eb85cca2.jpg",
                            2: "https://imgcdn.huanjutang.com/assets/img/20180713/5b487ec8284d9.jpg",
                            3: "https://imgcdn.huanjutang.com/assets/img/20180713/5b487ead2f79b.jpg"
                        },
                        font_color: {
                            1: "#8c7374",
                            2: "#8d92a3",
                            3: "#c86601"
                        },
                        sort: {
                            1: "铜牌顾问",
                            2: "银牌顾问",
                            3: "金牌顾问"
                        },
                        tuijian: [],
                        phone: "",
                        hasShowPhoneCallTip: !1,
                        username: ""
                    };
                },
                onShareAppMessage: function() {
                    return s.share.share("".concat(this.project_name, "楼盘的置业顾问都在这里~"), "/pages/salesMan/index?id=".concat(this.project_id));
                },
                onReachBottom: function() {
                    var t = c(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext.call(this);

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
                onPullDownRefresh: function() {
                    var e = c(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
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
                    var t = c(a.default.mark(function t(e) {
                        var n, r, s, i;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, u.getGlobalConfig();

                              case 2:
                                return (n = t.sent).phone && (this.phone = n.phone), e.q ? (r = decodeURIComponent(e.q), 
                                s = r.match(/\?id=([^&]+)&project_id=([^&]+)/i), this.project_id = s[1] || "", this.project_name = s[2] || "") : (this.project_name = e.title, 
                                this.project_id = e.id), (i = u.getUserInfo()) && (this.username = i.nickName), 
                                t.next = 9, this.reload.call(this);

                              case 9:
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
                    getUserInfo: function(t) {
                        var e = this;
                        u.updateUserInfo().then(function(n) {
                            e.username = n.nickName, e.toIMPage.call(e, t);
                        }).catch(function() {});
                    },
                    toUrl: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/salesMan?id=".concat(this.project_id)
                        }), e && e.detail && r.default.sendFromID(e.detail.formId).then(function() {});
                    },
                    like: function() {
                        var t = c(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.salesManLike(this.salesList[e].sales_man_id);

                                  case 2:
                                    n = t.sent, this.salesList[e].is_like = 1 === parseInt(this.salesList[e].is_like, 10) ? 2 : 1, 
                                    this.salesList[e].like_count = n.data.count;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    showTip: function() {
                        t.showModal({
                            title: "推荐规则说明",
                            content: "为了保障平台更多置业顾问的权益，平台增加了置业顾问推荐功能，规则如下：".concat(this.tips),
                            showCancel: !1
                        });
                    },
                    follow: function() {
                        var t = c(a.default.mark(function t(e) {
                            var n, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.salesList[e].sales_man_id, t.next = 3, r.default.followSalesMan(n);

                                  case 3:
                                    if (s = t.sent, 0 !== parseInt(s.code, 10)) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.next = 7, this.reload.call(this);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    phoneCall: function() {
                        var e = c(a.default.mark(function e(n) {
                            var s;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.getPhoneNum(n, 1);

                                  case 2:
                                    0 === (s = e.sent).code && t.makePhoneCall({
                                        phoneNumber: s.data.phone
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toIMPage: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(e.session_id, "&project_id=").concat(e.project_id)
                        });
                    },
                    loadNext: function() {
                        var t = c(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getFollowSales(this.page);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.tips = e.data.rule, this.salesList = this.salesList.concat(e.data.data), !this.project_name && this.salesList.length > 0 && (this.project_name = this.salesList[0].project_name)), 
                                    this.loading = !1;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = c(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.loading = !0, this.page = 1, this.more = !0, this.salesList = [], e.next = 7, 
                                    this.loadNext.call(this);

                                  case 7:
                                    t.hideLoading();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    "4ccf": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3f68")).default);
        }).call(this, n("543d").createPage);
    },
    "5efd": function(t, e, n) {
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
    "61a0": function(t, e, n) {},
    f297: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("405b"), r = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = r.a;
    }
}, [ [ "4ccf", "common/runtime", "common/vendor" ] ] ]);