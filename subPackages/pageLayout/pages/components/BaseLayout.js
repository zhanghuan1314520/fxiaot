require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BaseLayout" ], {
    "66a4": function(e, t, n) {
        "use strict";
        var a = n("9aae");
        n.n(a).a;
    },
    "7f58": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            props: {
                margin: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                customerPadding: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                padding: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            }
        };
        t.default = a;
    },
    "9aae": function(e, t, n) {},
    c47f: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("7f58"), o = n.n(a);
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        t.default = o.a;
    },
    d956: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"), o = n("c47f");
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        n("66a4");
        var c = n("f0c5"), r = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    e017: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BaseLayout-create-component", {
    "subPackages/pageLayout/pages/components/BaseLayout-create-component": function(e, t, n) {
        n("543d").createComponent(n("d956"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BaseLayout-create-component" ] ] ]);