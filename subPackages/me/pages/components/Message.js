require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/Message" ], {
    "399c": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                name: "Message",
                props: {
                    info: {
                        type: Object,
                        default: function() {}
                    }
                },
                data: function() {
                    return {};
                },
                methods: {
                    toUrlHandle: function() {
                        var n = this.info;
                        n.url && (2 === parseInt(n.page_level, 10) ? e.navigateTo({
                            url: n.url
                        }) : e.switchTab({
                            url: n.url
                        }));
                    }
                }
            };
            n.default = t;
        }).call(this, t("543d").default);
    },
    "975a9": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("e424"), o = t("f395");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("9c4b");
        var u = t("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = s.exports;
    },
    "9c4b": function(e, n, t) {
        "use strict";
        var a = t("e78d");
        t.n(a).a;
    },
    e424: function(e, n, t) {
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
    e78d: function(e, n, t) {},
    f395: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("399c"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/Message-create-component", {
    "subPackages/me/pages/components/Message-create-component": function(e, n, t) {
        t("543d").createComponent(t("975a9"));
    }
}, [ [ "subPackages/me/pages/components/Message-create-component" ] ] ]);