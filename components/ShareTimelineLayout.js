(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ShareTimelineLayout" ], {
    "0bd0": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("c1fa"), o = n("4fdf");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("17a6");
        var i = n("f0c5"), a = Object(i.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = a.exports;
    },
    "17a6": function(e, t, n) {
        "use strict";
        var r = n("b407");
        n.n(r).a;
    },
    "4cd7": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("2f62"), o = n("ca00");
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var u = {
                data: function() {
                    var t = e.getLaunchOptionsSync && e.getLaunchOptionsSync(), n = e.getSystemInfoSync();
                    return {
                        hasTimeline: t && 1154 === t.scene,
                        marginTop: n.statusBarHeight + 44,
                        windowHeight: n.windowHeight
                    };
                },
                computed: i(i({}, (0, r.mapState)({
                    content: function(e) {
                        return e.system.shareTimelineContent;
                    }
                })), {}, {
                    minHeight: function() {
                        return "".concat(this.windowHeight - (0, o.transformRpx)(this.marginTop), "px");
                    }
                })
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    "4fdf": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("4cd7"), o = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    b407: function(e, t, n) {},
    c1fa: function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ShareTimelineLayout-create-component", {
    "components/ShareTimelineLayout-create-component": function(e, t, n) {
        n("543d").createComponent(n("0bd0"));
    }
}, [ [ "components/ShareTimelineLayout-create-component" ] ] ]);