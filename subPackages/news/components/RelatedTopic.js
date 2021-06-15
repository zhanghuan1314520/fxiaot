require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/RelatedTopic" ], {
    "1d40": function(n, e, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    },
    2355: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            props: {
                name: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                hasPadding: {
                    type: Boolean,
                    default: function() {
                        return !0;
                    }
                },
                type: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                formatName: function() {
                    return this.name.length > 18 ? "".concat(this.name.substring(0, 18), "...") : this.name;
                },
                discussImage: function() {
                    return "comment" === this.type ? "https://imgcdn.huanjutang.com/file/2020/08/10/7b19be8d0636d669f27b4d21b970d904.png" : "https://imgcdn.huanjutang.com/file/2020/08/10/2de75de9f8e243c08a019ff16943e0a2.png";
                }
            }
        };
        e.default = a;
    },
    "438f": function(n, e, t) {},
    "4d9a": function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("1d40"), o = t("b361");
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t("61de");
        var u = t("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "61de": function(n, e, t) {
        "use strict";
        var a = t("438f");
        t.n(a).a;
    },
    b361: function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("2355"), o = t.n(a);
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/RelatedTopic-create-component", {
    "subPackages/news/components/RelatedTopic-create-component": function(n, e, t) {
        t("543d").createComponent(t("4d9a"));
    }
}, [ [ "subPackages/news/components/RelatedTopic-create-component" ] ] ]);