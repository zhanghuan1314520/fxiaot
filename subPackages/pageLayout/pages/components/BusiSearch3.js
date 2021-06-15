require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiSearch3" ], {
    "06a1": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("f894"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    "270b": function(e, n, t) {},
    "40e7": function(e, n, t) {
        "use strict";
        var a = t("270b");
        t.n(a).a;
    },
    "5e616": function(e, n, t) {
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
    b644: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("5e616"), o = t("06a1");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("40e7");
        var u = t("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = s.exports;
    },
    f894: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = o(t("4ec3"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var c = {
            components: {
                BusiSearchSwiper: function() {
                    t.e("pages/components/BusiSearchSwiper").then(function() {
                        return resolve(t("ef31"));
                    }.bind(null, t)).catch(t.oe);
                },
                BusiSearch: function() {
                    t.e("components/UILayout/BusiSearch").then(function() {
                        return resolve(t("5f00"));
                    }.bind(null, t)).catch(t.oe);
                },
                BaseLayout: function() {
                    t.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                        return resolve(t("d956"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            mixins: [ o(t("88f3")).default ],
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
                    hotSearchList: {
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
            created: function() {
                this.padding = {
                    top: "".concat(this.settings.vertial_margin, "rpx")
                };
            },
            mounted: function() {
                this.reload();
            },
            methods: {
                reload: function() {
                    var e = this;
                    a.default.getBanner("search--search").then(function(n) {
                        0 === n.code && n.data && (e.hotSearchList = n.data);
                    });
                }
            }
        };
        n.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiSearch3-create-component", {
    "subPackages/pageLayout/pages/components/BusiSearch3-create-component": function(e, n, t) {
        t("543d").createComponent(t("b644"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiSearch3-create-component" ] ] ]);