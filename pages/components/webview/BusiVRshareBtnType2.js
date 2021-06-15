(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/webview/BusiVRshareBtnType2" ], {
    "0427": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            props: {
                huxingId: {
                    type: String,
                    default: ""
                },
                loaded: {
                    type: Boolean,
                    default: !1
                },
                vrProjectId: {
                    type: String,
                    default: ""
                },
                isAerial: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {};
            },
            methods: {
                vrSharedEvent: function() {}
            }
        };
        n.default = o;
    },
    5901: function(e, n, t) {
        "use strict";
        var o = t("ecce");
        t.n(o).a;
    },
    b488: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("b94e"), a = t("db41");
        for (var u in a) "default" !== u && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        t("5901");
        var c = t("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = r.exports;
    },
    b94e: function(e, n, t) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    },
    db41: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("0427"), a = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = a.a;
    },
    ecce: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/webview/BusiVRshareBtnType2-create-component", {
    "pages/components/webview/BusiVRshareBtnType2-create-component": function(e, n, t) {
        t("543d").createComponent(t("b488"));
    }
}, [ [ "pages/components/webview/BusiVRshareBtnType2-create-component" ] ] ]);