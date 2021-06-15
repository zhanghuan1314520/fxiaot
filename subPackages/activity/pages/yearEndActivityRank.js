require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/yearEndActivityRank" ], {
    "10d4": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d59a"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    2073: function(t, e, n) {},
    "26da": function(t, e, n) {
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
    "2cf2": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("26da"), r = n("10d4");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("54bf");
        var o = n("f0c5"), u = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "54bf": function(t, e, n) {
        "use strict";
        var a = n("2073");
        n.n(a).a;
    },
    d59a: function(t, e, n) {
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
            function u(t, e, n, a, r, i, o) {
                try {
                    var u = t[i](o), s = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(s) : Promise.resolve(s).then(a, r);
            }
            function s(t) {
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
            var c = {
                components: {
                    BackHome: function() {
                        n.e("subPackages/activity/components/BackHome").then(function() {
                            return resolve(n("9a29"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        category_id: 1,
                        tab: 1,
                        avatar_url: "",
                        vote_id: 0,
                        page: 1,
                        more: !0,
                        top3List: [],
                        rankingList: [],
                        loading: !0,
                        backHomeUrl: "/subPackages/activity/pages/yearEndActivity",
                        backHomeText: "活动首页",
                        backHomeOpenType: "navigate",
                        typeList: [],
                        title: ""
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("在这里参与".concat(this.title, "活动"));
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
                        var n, o;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = i.cache.get("userinfo"), this.avatar_url = n.avatarUrl, this.title = e.title || "", 
                                this.vote_id = e.vote_id || "", t.next = 6, r.default.yearActivity(this.vote_id);

                              case 6:
                                return 0 === (o = t.sent).code && o.data && o.data.length > 0 && (this.typeList = o.data, 
                                this.category_id = o.data[0].id), t.next = 10, this.reload();

                              case 10:
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
                    switchTab: function() {
                        var t = s(a.default.mark(function t(e) {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.category_id = e, t.next = 3, this.reload();

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = s(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.votePlayRanking(this.vote_id, this.category_id, this.page);

                                  case 2:
                                    e = t.sent, this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    (n = e.data && e.data.data ? e.data.data : []).length > 0 && n.forEach(function(t) {
                                        t.total_vote >= 1e4 && (t.total_vote = "".concat(parseInt(t.total_vote / 1e4, 10), "w"));
                                    }), this.top3List.length > 0 ? this.rankingList = this.rankingList.concat(n) : (this.top3List = n.splice(0, n.length > 3 ? 3 : n.length), 
                                    this.rankingList = n);

                                  case 7:
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
                                    }), this.loading = !1, this.page = 1, this.more = !0, this.top3List = [], this.rankingList = [], 
                                    e.next = 8, this.loadNext();

                                  case 8:
                                    t.hideLoading(), t.stopPullDownRefresh(), this.loading = !0;

                                  case 11:
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
            e.default = c;
        }).call(this, n("543d").default);
    },
    ee51: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2cf2")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "ee51", "common/runtime", "common/vendor" ] ] ]);