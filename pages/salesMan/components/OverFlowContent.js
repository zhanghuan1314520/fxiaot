(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/components/OverFlowContent" ], {
    "0380": function(n, e, t) {
        "use strict";
        var o = t("d299");
        t.n(o).a;
    },
    "7e12": function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = t("ca00"), a = {
                props: {
                    content: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        expand: !1,
                        showToggle: !1
                    };
                },
                onReady: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var t = e;
                        n.createSelectorQuery().in(e).select(".text").boundingClientRect(function(n) {
                            n && (t.showToggle = n.height + 10 > (0, o.transformRpx)(264));
                        }).exec();
                    });
                },
                methods: {
                    toggleExpand: function() {
                        this.expand = !this.expand;
                    }
                }
            };
            e.default = a;
        }).call(this, t("543d").default);
    },
    "96b17": function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("7e12"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    d299: function(n, e, t) {},
    edd8: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("fe1c"), a = t("96b17");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("0380");
        var u = t("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    fe1c: function(n, e, t) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/salesMan/components/OverFlowContent-create-component", {
    "pages/salesMan/components/OverFlowContent-create-component": function(n, e, t) {
        t("543d").createComponent(t("edd8"));
    }
}, [ [ "pages/salesMan/components/OverFlowContent-create-component" ] ] ]);