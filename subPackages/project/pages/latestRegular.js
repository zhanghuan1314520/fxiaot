require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/latestRegular" ], {
    "442d": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("85f5")).default);
        }).call(this, n("543d").createPage);
    },
    4477: function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "64ff": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = c(n("a34a")), o = c(n("1452")), u = n("b628");
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t, n, r, o, u, c) {
            try {
                var a = e[u](c), i = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(i) : Promise.resolve(i).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var u = e.apply(t, n);
                    function c(e) {
                        a(u, r, o, c, i, "next", e);
                    }
                    function i(e) {
                        a(u, r, o, c, i, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var s = {
            components: {
                SecondBuildingList: function() {
                    Promise.all([ n.e("subPackages/project/common/vendor"), n.e("subPackages/project/pages/component/SecondBuildingList/Index") ]).then(function() {
                        return resolve(n("3bed"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            mixins: [ o.default ],
            data: function() {
                return {
                    type: "",
                    title: "",
                    buttonType: "share",
                    baseParam: {
                        type: "newPreOrderAll"
                    }
                };
            },
            onShareAppMessage: function() {
                return u.share.share("这里有所有【 ".concat(this.title || "", " 】的楼盘详情，再也不用到处去找啦,快来看看吧！"));
            },
            onReachBottom: function() {
                var e = i(r.default.mark(function e() {
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this.$refs.secondBuilding.handleReachBottom();

                          case 1:
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
                var e = i(r.default.mark(function e() {
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this.$refs.secondBuilding.stopRefresh();

                          case 1:
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
                var e = i(r.default.mark(function e(t) {
                    var n, o;
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n = t.type, o = decodeURIComponent(t.title) || "最新摇号", this.title = o, this.type = n;

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }()
        };
        t.default = s;
    },
    "817c": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("64ff"), o = n.n(r);
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t.default = o.a;
    },
    "85f5": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("4477"), o = n("817c");
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        var c = n("f0c5"), a = Object(c.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = a.exports;
    }
}, [ [ "442d", "common/runtime", "common/vendor", "subPackages/project/common/vendor" ] ] ]);