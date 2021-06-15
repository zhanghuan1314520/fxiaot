require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/projectQuestionList" ], {
    "03ea": function(t, e, r) {},
    "1c9c": function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("6918"), a = r.n(n);
        for (var s in n) "default" !== s && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = a.a;
    },
    "47f40": function(t, e, r) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r("6cdc"), e(r("66fd")), t(e(r("c2bc")).default);
        }).call(this, r("543d").createPage);
    },
    6918: function(t, e, r) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(r("a34a")), a = i(r("4ec3")), s = r("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, r, n, a, s, i) {
                try {
                    var u = t[s](i), o = u.value;
                } catch (t) {
                    return void r(t);
                }
                u.done ? e(o) : Promise.resolve(o).then(n, a);
            }
            function o(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(n, a) {
                        var s = t.apply(e, r);
                        function i(t) {
                            u(s, n, a, i, o, "next", t);
                        }
                        function o(t) {
                            u(s, n, a, i, o, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        more: !0,
                        page: 1,
                        item: [],
                        avatar_url: "",
                        userInfo: null,
                        questionItems: [],
                        project_id: "",
                        lottery_id: "",
                        shareTitle: "",
                        shareImg: "",
                        shareUrl: ""
                    };
                },
                onShareAppMessage: function() {
                    return this.shareTitle = this.share.title, this.shareUrl = this.share.url, this.shareImg = this.share.img || "", 
                    s.share.share(this.shareTitle, this.shareUrl, this.shareImg);
                },
                onReachBottom: function() {
                    var t = o(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
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
                    var e = o(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
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
                    var t = o(n.default.mark(function t(e) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.project_id = e.project_id, this.lottery_id = e.lottery_id, r = s.cache.get("userinfo"), 
                                this.userInfo = r, this.avatar_url = r && r.avatarUrl ? r.avatarUrl : "", t.next = 7, 
                                this.reload.call(this);

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
                methods: {
                    delBox: function() {
                        var e = o(n.default.mark(function e(r) {
                            var i, u, c = this;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.delModel = !0, i = this.questionItems[r], u = [], String(this.userInfo.id) === String(i.user_id) && u.push("删除"), 
                                    u.push("举报"), t.showActionSheet({
                                        itemList: u,
                                        success: function() {
                                            var e = o(n.default.mark(function e(r) {
                                                var o;
                                                return n.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        o = u[r.tapIndex], e.t0 = o, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 19 : 21;
                                                        break;

                                                      case 4:
                                                        if (String(c.userInfo.id) !== String(i.user_id)) {
                                                            e.next = 17;
                                                            break;
                                                        }
                                                        return e.next = 7, a.default.delQuestion(i.id);

                                                      case 7:
                                                        if ("删除成功" !== e.sent.data) {
                                                            e.next = 14;
                                                            break;
                                                        }
                                                        return s.tip.toast("删除成功", "", ""), e.next = 12, c.reload.call(c);

                                                      case 12:
                                                        e.next = 15;
                                                        break;

                                                      case 14:
                                                        s.tip.toast("删除失败", "", "");

                                                      case 15:
                                                        e.next = 18;
                                                        break;

                                                      case 17:
                                                        s.tip.toast("非本人不能操作", "", "");

                                                      case 18:
                                                        return e.abrupt("break", 22);

                                                      case 19:
                                                        return t.navigateTo({
                                                            url: "/subPackages/project/pages/reportType?type=2&id=".concat(i.id)
                                                        }), e.abrupt("break", 22);

                                                      case 21:
                                                        return e.abrupt("break", 22);

                                                      case 22:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }(),
                                        fail: function(t) {
                                            console.error(t.errMsg);
                                        }
                                    });

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    follow: function() {
                        var t = o(n.default.mark(function t(e, r) {
                            var s;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return s = e ? this.hotAnswer[r] : this.newAnswer[r], t.next = 3, a.default.attentionUser(s.user_id, s.sales_man_id);

                                  case 3:
                                    "关注成功" === t.sent.data ? s.attention = 1 : s.attention = 2;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, r) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    focus: function() {
                        var t = o(n.default.mark(function t(e) {
                            var r, s;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = this.userInfo && this.userInfo.sales_man_id ? this.userInfo.sales_man_id : "", 
                                    s = this.questionItems[e], t.next = 3, a.default.attentionUser(s.user_id, r);

                                  case 3:
                                    "关注成功" === t.sent.data ? s.attention = 1 : s.attention = 2;

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
                    toUrl: function(e) {
                        return t.navigateTo({
                            url: e
                        }), !1;
                    },
                    reload: function() {
                        var e = o(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.page = 1, this.more = !0, this.questionItems = [], this.loading = !0, 
                                    e.next = 6, this.loadNext.call(this);

                                  case 6:
                                    this.loading = !1, t.stopPullDownRefresh();

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
                    loadNext: function() {
                        var t = o(n.default.mark(function t() {
                            var e;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.projectQuestion(this.project_id, this.item.lottery_id || "", 1, 1);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.share = e.data.share, this.questionItems = this.questionItems.concat(e.data.data));

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
            e.default = c;
        }).call(this, r("543d").default);
    },
    "9d8a": function(t, e, r) {
        "use strict";
        var n = r("03ea");
        r.n(n).a;
    },
    affe: function(t, e, r) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
        r.d(e, "b", function() {
            return n;
        }), r.d(e, "c", function() {
            return a;
        }), r.d(e, "a", function() {});
    },
    c2bc: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("affe"), a = r("1c9c");
        for (var s in a) "default" !== s && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(s);
        r("9d8a");
        var i = r("f0c5"), u = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = u.exports;
    }
}, [ [ "47f40", "common/runtime", "common/vendor" ] ] ]);