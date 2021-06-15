require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/Card" ], {
    "1d59": function(e, n, t) {
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
    "61fe": function(e, n, t) {
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
            },
            computed: {
                content: function() {
                    var e = this.message.content;
                    return e ? "string" == typeof e ? e.split("||") : e : [];
                }
            },
            methods: {
                emptyFunction: function() {}
            }
        };
        n.default = a;
    },
    "6bb0": function(e, n, t) {
        "use strict";
        var a = t("dbb4");
        t.n(a).a;
    },
    dbb4: function(e, n, t) {},
    ed0a: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("61fe"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    f9ad: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("1d59"), o = t("ed0a");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("6bb0");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/Card-create-component", {
    "subPackages/me/components/ChatInterface/Messages/Card-create-component": function(e, n, t) {
        t("543d").createComponent(t("f9ad"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/Card-create-component" ] ] ]);