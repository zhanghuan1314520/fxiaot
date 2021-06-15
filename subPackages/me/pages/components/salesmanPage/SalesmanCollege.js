require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/salesmanPage/SalesmanCollege" ], {
    "269c": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("dbde"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    "50e75": function(e, n, t) {
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
    "9fc6": function(e, n, t) {},
    d92c: function(e, n, t) {
        "use strict";
        var a = t("9fc6");
        t.n(a).a;
    },
    dbde: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = t("ca00"), o = {
                components: {
                    Authorization: function() {
                        t.e("components/Authorization").then(function() {
                            return resolve(t("5326"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    BaseBanner: function() {
                        t.e("components/BaseBanner").then(function() {
                            return resolve(t("01c8"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    CollegeArticle: function() {
                        t.e("subPackages/me/pages/components/CollegeArticle").then(function() {
                            return resolve(t("afaf"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                filters: {
                    topNameMap: function(e) {
                        return {
                            phone: "电话",
                            chat: "微聊",
                            bindUser: "专属客户"
                        }[e];
                    }
                },
                props: {
                    collegeList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    bannerList: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    handleCheckMore: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/collegeArticle"
                        });
                    },
                    swiperNavHandle: function(e) {
                        (0, a.pageJump)(e);
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    },
    f27c: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("50e75"), o = t("269c");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("d92c");
        var u = t("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/salesmanPage/SalesmanCollege-create-component", {
    "subPackages/me/pages/components/salesmanPage/SalesmanCollege-create-component": function(e, n, t) {
        t("543d").createComponent(t("f27c"));
    }
}, [ [ "subPackages/me/pages/components/salesmanPage/SalesmanCollege-create-component" ] ] ]);