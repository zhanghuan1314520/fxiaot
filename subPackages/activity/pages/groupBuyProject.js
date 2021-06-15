require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/groupBuyProject" ], {
    "1cee": function(t, n, e) {},
    "38c6": function(t, n, e) {
        "use strict";
        var a = e("1cee");
        e.n(a).a;
    },
    "3ae1": function(t, n, e) {},
    6835: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = r(e("a34a")), o = r(e("4ec3"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, n, e, a, o, r, u) {
                try {
                    var i = t[r](u), c = i.value;
                } catch (t) {
                    return void e(t);
                }
                i.done ? n(c) : Promise.resolve(c).then(a, o);
            }
            function i(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, o) {
                        var r = t.apply(n, e);
                        function i(t) {
                            u(r, a, o, i, c, "next", t);
                        }
                        function c(t) {
                            u(r, a, o, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                components: {
                    GroupItem: function() {
                        e.e("subPackages/activity/components/HomeGroupItem").then(function() {
                            return resolve(e("b2f5"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    NoData: function() {
                        e.e("subPackages/activity/components/NoData").then(function() {
                            return resolve(e("be2d"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    Banner: function() {
                        e.e("subPackages/activity/components/Banner").then(function() {
                            return resolve(e("cb5b"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                mixins: [ r(e("73a2")).default ],
                data: function() {
                    return {
                        groupList: [],
                        loading: !1,
                        item: {},
                        page: 1,
                        more: !0
                    };
                },
                onLoad: function() {
                    this.load();
                },
                onPullDownRefresh: function() {
                    var n = i(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return this.$refs.banner.getBanner(), this.groupList = [], this.loading = !1, this.more = !0, 
                                this.page = 1, n.next = 7, this.load();

                              case 7:
                                t.stopPullDownRefresh();

                              case 8:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                onReachBottom: function() {
                    var t = i(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more && !this.loading) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.load();

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
                methods: {
                    load: function() {
                        var t = this;
                        this.loading = !0, o.default.activity.groupBuyList({
                            route: "/couponForActivity",
                            data: {
                                activityPromotionId: 3,
                                page: this.page
                            }
                        }).then(function(n) {
                            n && n.data && n.data.data && (t.groupList = t.groupList.concat(n.data.data), n.data.data.length < 1 ? t.more = !1 : t.page += 1), 
                            t.loading = !1;
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    "7b03": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("6835"), o = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    },
    a971: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("bded")).default);
        }).call(this, e("543d").createPage);
    },
    bded: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("c17c"), o = e("7b03");
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("38c6"), e("e818");
        var u = e("f0c5"), i = Object(u.a)(o.default, a.b, a.c, !1, null, "22660b07", null, !1, a.a, void 0);
        n.default = i.exports;
    },
    c17c: function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
    },
    e818: function(t, n, e) {
        "use strict";
        var a = e("3ae1");
        e.n(a).a;
    }
}, [ [ "a971", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);