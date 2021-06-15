require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/components/morningPaper/TableBlock" ], {
    "02a3": function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, !e.hide && e.list.length > 0 ? e.__map(e.list, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    l0: e.__map(e.fields, function(n, r) {
                        return {
                            $orig: e.__get_orig(n),
                            g0: t[n.key] && !t.items || 0 === t[n.key] ? e.bordKey.includes(n.key) : null
                        };
                    }),
                    l3: t.items ? e.__map(t.items, function(n, r) {
                        return {
                            $orig: e.__get_orig(n),
                            l1: e.__map(e.fields, function(n, r) {
                                return {
                                    $orig: e.__get_orig(n),
                                    g1: t[n.key] ? e.bordKey.includes(n.key) : null
                                };
                            }),
                            l2: e.__map(e.fields, function(t, r) {
                                return {
                                    $orig: e.__get_orig(t),
                                    g2: n[t.key] ? e.bordKey.includes(t.key) : null
                                };
                            })
                        };
                    }) : null
                };
            }) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l4: t
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "2c57": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("02a3"), o = n("e70f");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("b3bb");
        var u = n("f0c5"), i = Object(u.a)(o.default, r.b, r.c, !1, null, "725a6357", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    "475f": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                props: {
                    title: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    total: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    },
                    header: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    bordKey: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    firstDark: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    fields: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    emptyText: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    showTotal: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    leftKey: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    noPadding: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    hide: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    extra: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                methods: {
                    handleNext: function(t) {
                        if (t.project_id) {
                            var n = "/pages/lotteryDetail?id=".concat(t.lottery_id, "&project_id=").concat(t.project_id);
                            e.navigateTo({
                                url: n
                            });
                        }
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    "79a2": function(e, t, n) {},
    b3bb: function(e, t, n) {
        "use strict";
        var r = n("79a2");
        n.n(r).a;
    },
    e70f: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("475f"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/pages/components/morningPaper/TableBlock-create-component", {
    "subPackages/news/pages/components/morningPaper/TableBlock-create-component": function(e, t, n) {
        n("543d").createComponent(n("2c57"));
    }
}, [ [ "subPackages/news/pages/components/morningPaper/TableBlock-create-component" ] ] ]);