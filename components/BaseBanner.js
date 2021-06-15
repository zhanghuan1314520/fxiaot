(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/BaseBanner" ], {
    "01c8": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("19e9"), o = t("1c1f");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("e5c9");
        var c = t("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "19e9": function(e, n, t) {
        "use strict";
        var a = function() {
            var e = this, n = (e.$createElement, e._self._c, e.dataApi.length > 1 && e.dataApi.length > 0 ? e.__map(e.dataApi, function(n, t) {
                return {
                    $orig: e.__get_orig(n),
                    a0: {
                        height: e.height + "rpx"
                    }
                };
            }) : null), t = e.dataApi.length > 1 || 1 !== e.dataApi.length || !e.dataApi[0].image ? null : {
                height: e.height + "rpx"
            };
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    a1: t
                }
            });
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    "1c1f": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("f3ce"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    "81b1": function(e, n, t) {},
    e5c9: function(e, n, t) {
        "use strict";
        var a = t("81b1");
        t.n(a).a;
    },
    f3ce: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            components: {
                ImageLoader: function() {
                    t.e("components/ImageLoader").then(function() {
                        return resolve(t("24e0"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                dataApi: {
                    type: Array,
                    default: function() {
                        return [ {} ];
                    }
                },
                height: {
                    type: Number,
                    default: 280
                },
                swiperDots: {
                    type: Boolean,
                    default: !0
                },
                swiperCircular: {
                    type: Boolean,
                    default: !0
                },
                content: {
                    type: String,
                    default: ""
                },
                source: {
                    type: String,
                    default: ""
                },
                bannerType: {
                    type: String,
                    default: "banner"
                },
                config: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            methods: {
                swiperNavHandle: function(e, n, t) {
                    e.includes("navigateTo://none") || this.$emit("swiperNavHandle", e, n, t);
                }
            }
        };
        n.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/BaseBanner-create-component", {
    "components/BaseBanner-create-component": function(e, n, t) {
        t("543d").createComponent(t("01c8"));
    }
}, [ [ "components/BaseBanner-create-component" ] ] ]);