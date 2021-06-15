require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/voteRanking" ], {
    4113: function(t, e, n) {
        "use strict";
        var a = n("d1bf");
        n.n(a).a;
    },
    5457: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c5ab")).default);
        }).call(this, n("543d").createPage);
    },
    "730b": function(t, e, n) {
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
    "86e9": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3")), i = u(n("79b9")), o = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, a, r, i, o) {
                try {
                    var u = t[i](o), c = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function o(t) {
                            c(i, a, r, o, u, "next", t);
                        }
                        function u(t) {
                            c(i, a, r, o, u, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                components: {
                    BackHome: function() {
                        n.e("subPackages/activity/components/BackHome").then(function() {
                            return resolve(n("9a29"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        avatar_url: "",
                        vote_id: 0,
                        page: 1,
                        more: !0,
                        top3List: [],
                        rankingList: [],
                        backHomeUrl: "/subPackages/activity/pages/projectVote",
                        backHomeText: "活动首页",
                        backHomeOpenType: "navigate",
                        activityUrl: "/pages/webview2?redirect=".concat(encodeURIComponent(i.default.webviewHost), "activity%2FactivityPrize")
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("在这里参与最美售楼部活动");
                },
                onReachBottom: function() {
                    var t = s(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

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
                    var e = s(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

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
                    var t = s(a.default.mark(function t(e) {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = o.cache.get("userinfo"), this.avatar_url = n.avatarUrl, this.vote_id = e.vote_id, 
                                t.next = 5, this.reload();

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
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    loadNext: function() {
                        var t = s(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.votePlayRanking(this.vote_id, this.page);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1), 
                                    n = e.data && e.data.data ? e.data.data : [], this.top3List.length > 0 ? this.rankingList = this.rankingList.concat(n) : (this.top3List = n.splice(0, n.length > 3 ? 3 : n.length), 
                                    this.rankingList = n);

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
                    reload: function() {
                        var e = s(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中"
                                    }), this.page = 1, this.more = !0, this.top3List = [], this.rankingList = [], e.next = 7, 
                                    this.loadNext();

                                  case 7:
                                    t.hideLoading(), t.stopPullDownRefresh();

                                  case 9:
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
            e.default = f;
        }).call(this, n("543d").default);
    },
    c27f: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("86e9"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    c5ab: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("730b"), r = n("c27f");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("4113");
        var o = n("f0c5"), u = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    d1bf: function(t, e, n) {}
}, [ [ "5457", "common/runtime", "common/vendor" ] ] ]);