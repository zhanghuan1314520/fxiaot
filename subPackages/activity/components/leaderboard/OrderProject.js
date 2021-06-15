require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/leaderboard/OrderProject" ], {
    "2b3c": function(e, t, r) {
        "use strict";
        var n = r("5439");
        r.n(n).a;
    },
    "46c8": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("e916"), c = r("e035");
        for (var o in c) "default" !== o && function(e) {
            r.d(t, e, function() {
                return c[e];
            });
        }(o);
        r("2b3c");
        var a = r("f0c5"), i = Object(a.a)(c.default, n.b, n.c, !1, null, "292a78d1", null, !1, n.a, void 0);
        t.default = i.exports;
    },
    5439: function(e, t, r) {},
    b5fe: function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r("2f62");
            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), r.push.apply(r, n);
                }
                return r;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        a(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e;
            }
            var i = {
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    index: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    },
                    status: {
                        type: Number,
                        default: function() {
                            return 1;
                        }
                    }
                },
                computed: {
                    className: function() {
                        return "order".concat(this.item.rank);
                    },
                    compressCover: function() {
                        if (this.item.cover) {
                            var e = this.item.cover.indexOf("?") > -1 ? "&" : "?";
                            return "".concat(this.item.cover).concat(e).concat("imageView2/2/w/580/format/jpg/interlace/1/q/100|imageslim");
                        }
                        return "";
                    }
                },
                methods: o(o({}, (0, n.mapMutations)({
                    setCurrentIndex: "activity/SET_CURRENT_INDEX",
                    setCurrentObject: "activity/SET_CURRENT_OBJECT",
                    setCurrentSourceParam: "activity/SET_CURRENT_SOURCE_PARAM"
                })), {}, {
                    handleNext: function() {
                        this.setCurrentIndex(this.index), this.setCurrentObject(this.item), this.setCurrentSourceParam("projectList"), 
                        e.navigateTo({
                            url: "/subPackages/activity/pages/leaderboardProject?id=".concat(this.item.id)
                        });
                    }
                })
            };
            t.default = i;
        }).call(this, r("543d").default);
    },
    e035: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("b5fe"), c = r.n(n);
        for (var o in n) "default" !== o && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = c.a;
    },
    e916: function(e, t, r) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, c = [];
        r.d(t, "b", function() {
            return n;
        }), r.d(t, "c", function() {
            return c;
        }), r.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/leaderboard/OrderProject-create-component", {
    "subPackages/activity/components/leaderboard/OrderProject-create-component": function(e, t, r) {
        r("543d").createComponent(r("46c8"));
    }
}, [ [ "subPackages/activity/components/leaderboard/OrderProject-create-component" ] ] ]);