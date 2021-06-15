require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiBannerVariant1" ], {
    "3bdd": function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("6654"), o = t("51c3");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        var c = t("f0c5"), s = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "51c3": function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("82bc"), o = t.n(a);
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = o.a;
    },
    6654: function(n, e, t) {
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
    "82bc": function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = u(t("4ec3")), o = t("ca00");
        function u(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        var c = {
            name: "BannerVariant1",
            components: {
                BaseLayout: function() {
                    t.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                        return resolve(t("d956"));
                    }.bind(null, t)).catch(t.oe);
                },
                BaseBanner: function() {
                    t.e("components/BaseBanner").then(function() {
                        return resolve(t("01c8"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            mixins: [ u(t("88f3")).default ],
            props: {
                settings: {
                    type: Object,
                    default: function() {
                        return {
                            magic_square: []
                        };
                    }
                }
            },
            data: function() {
                return {
                    banners: {
                        list: [],
                        config: {}
                    }
                };
            },
            watch: {
                settings: function() {
                    this.reload();
                }
            },
            mounted: function() {
                this.reload();
            },
            methods: {
                reload: function() {
                    var n = this, e = (this.settings.adInfo ? this.settings.adInfo : {}).code, t = void 0 === e ? "" : e;
                    t && a.default.getBanner(this.spliceCode(t)).then(function(e) {
                        0 === e.code && e.data && (n.banners = e.data);
                    });
                },
                spliceCode: function(n) {
                    return n.substring(n.indexOf("-") + 1);
                },
                swiperNavHandle: function(n) {
                    (0, o.pageJump)(n);
                }
            }
        };
        e.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiBannerVariant1-create-component", {
    "subPackages/pageLayout/pages/components/BusiBannerVariant1-create-component": function(n, e, t) {
        t("543d").createComponent(t("3bdd"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiBannerVariant1-create-component" ] ] ]);