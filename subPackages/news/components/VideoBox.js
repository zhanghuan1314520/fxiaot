require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/VideoBox" ], {
    1468: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("7360"), a = t("aad1");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("2b49");
        var u = t("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "2b49": function(n, e, t) {
        "use strict";
        var o = t("5d44");
        t.n(o).a;
    },
    "5d44": function(n, e, t) {},
    7360: function(n, e, t) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
    },
    aad1: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("fe99"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    fe99: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                url: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                postId: {
                    type: String,
                    default: function() {
                        return "";
                    }
                }
            },
            data: function() {
                return {
                    playIcon: "https://imgcdn.huanjutang.com/assets/img/20204261954168081.png"
                };
            },
            computed: {
                videoUrl: function() {
                    var n = this.url.indexOf("?") > -1 ? "&" : "?";
                    return "".concat(this.url).concat(n, "vframe/jpg/offset/1").concat("&imageView2/2/w/500/format/jpg/interlace/1/q/100|imageslim");
                }
            }
        };
        e.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/VideoBox-create-component", {
    "subPackages/news/components/VideoBox-create-component": function(n, e, t) {
        t("543d").createComponent(t("1468"));
    }
}, [ [ "subPackages/news/components/VideoBox-create-component" ] ] ]);