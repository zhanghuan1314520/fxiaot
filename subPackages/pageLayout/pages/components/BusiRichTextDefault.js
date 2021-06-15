require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiRichTextDefault" ], {
    "252a": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("d1f6"), u = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = u.a;
    },
    "34b2": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, u = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {});
    },
    "82fb": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("34b2"), u = n("252a");
        for (var o in u) "default" !== o && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(o);
        var c = n("f0c5"), s = Object(c.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    d1f6: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            components: {
                BaseLayout: function() {
                    n.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                        return resolve(n("d956"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("88f3")).default ],
            props: {
                settings: {
                    type: Object,
                    default: function() {
                        return {
                            magic_square: []
                        };
                    }
                }
            }
        };
        t.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiRichTextDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiRichTextDefault-create-component": function(e, t, n) {
        n("543d").createComponent(n("82fb"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiRichTextDefault-create-component" ] ] ]);