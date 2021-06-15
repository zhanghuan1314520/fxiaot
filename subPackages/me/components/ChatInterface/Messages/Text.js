require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/Text" ], {
    "199c": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            components: {
                BaseLayout: function() {
                    Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                        return resolve(t("607a"));
                    }.bind(null, t)).catch(t.oe);
                },
                showEmoji: function() {
                    t.e("pages/me/components/showEmoji").then(function() {
                        return resolve(t("0b1a"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a3fe")).default ],
            props: {
                message: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            }
        };
        n.default = a;
    },
    "9a80": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("199c"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    ad8a: function(e, n, t) {},
    e240: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("ec2b"), o = t("9a80");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("fc9a");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    ec2b: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    fc9a: function(e, n, t) {
        "use strict";
        var a = t("ad8a");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/Text-create-component", {
    "subPackages/me/components/ChatInterface/Messages/Text-create-component": function(e, n, t) {
        t("543d").createComponent(t("e240"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/Text-create-component" ] ] ]);