(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/MiniSalesmanCard" ], {
    "0ee0": function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("dbf2"), o = t("a1a9");
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t("1d73");
        var i = t("f0c5"), r = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "1d73": function(n, e, t) {
        "use strict";
        var a = t("b053");
        t.n(a).a;
    },
    7554: function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = {
                components: {
                    BusiAuthNavigator: function() {
                        t.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(t("aa79"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    ImageLoader: function() {
                        t.e("components/ImageLoader").then(function() {
                            return resolve(t("24e0"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    showIcon: {
                        type: Boolean,
                        default: function() {
                            return !0;
                        }
                    }
                },
                data: function() {
                    return {
                        urls: []
                    };
                },
                watch: {
                    list: {
                        handler: function(n) {
                            if (n && n.length) {
                                this.urls = [];
                                for (var e = 0; e < n.length; e += 1) this.urls.push("navigateTo-authphone://subPackages/me/pages/chatInterface?user_id=".concat(n[e].session_id, "&project_id=").concat(n[e].project_id, "&project_name=").concat(n[e].project_name, "&project_img=").concat(n[e].project_cover));
                            }
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    goSaleDetailPage: function(e) {
                        n.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(e.session_id, "&andrees=").concat([ "indexLeft", "indexCenter", "indexRight" ][this.index])
                        }), this.salesmanClickHandle.call(this, e);
                    },
                    salesmanClickHandle: function() {}
                }
            };
            e.default = a;
        }).call(this, t("543d").default);
    },
    a1a9: function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("7554"), o = t.n(a);
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = o.a;
    },
    b053: function(n, e, t) {},
    dbf2: function(n, e, t) {
        "use strict";
        var a = function() {
            var n = this, e = (n.$createElement, n._self._c, n.__map(n.list, function(e, t) {
                return {
                    $orig: n.__get_orig(e),
                    a0: {
                        width: "100rpx",
                        height: "100rpx",
                        "border-radius": "50%"
                    }
                };
            }));
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/MiniSalesmanCard-create-component", {
    "components/MiniSalesmanCard-create-component": function(n, e, t) {
        t("543d").createComponent(t("0ee0"));
    }
}, [ [ "components/MiniSalesmanCard-create-component" ] ] ]);