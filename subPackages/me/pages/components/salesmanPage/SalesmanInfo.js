require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/salesmanPage/SalesmanInfo" ], {
    3408: function(a, n, e) {
        "use strict";
        var t = function() {
            this.$createElement, this._self._c;
        }, s = [];
        e.d(n, "b", function() {
            return t;
        }), e.d(n, "c", function() {
            return s;
        }), e.d(n, "a", function() {});
    },
    5061: function(a, n, e) {
        "use strict";
        var t = e("5cbd");
        e.n(t).a;
    },
    "5cbd": function(a, n, e) {},
    "611c": function(a, n, e) {
        "use strict";
        e.r(n);
        var t = e("3408"), s = e("6c4d");
        for (var o in s) "default" !== o && function(a) {
            e.d(n, a, function() {
                return s[a];
            });
        }(o);
        e("5061");
        var c = e("f0c5"), u = Object(c.a)(s.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        n.default = u.exports;
    },
    "6c4d": function(a, n, e) {
        "use strict";
        e.r(n);
        var t = e("f15b"), s = e.n(t);
        for (var o in t) "default" !== o && function(a) {
            e.d(n, a, function() {
                return t[a];
            });
        }(o);
        n.default = s.a;
    },
    f15b: function(a, n, e) {
        "use strict";
        (function(a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                components: {
                    Medals: function() {
                        Promise.all([ e.e("common/vendor"), e.e("pages/salesMan/components/Medals") ]).then(function() {
                            return resolve(e("28ace"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {
                    salesManData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    greetings: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png"
                    };
                },
                computed: {
                    name: function() {
                        return this.salesManData.name ? this.salesManData.name.length > 3 ? "".concat(this.salesManData.name.substring(0, 3), "...") : this.salesManData.name : "";
                    }
                },
                methods: {
                    handleEditInfo: function() {
                        a.navigateTo({
                            url: "/subPackages/me/pages/salesPersonInfo?id=".concat(this.salesManData.id)
                        });
                    },
                    goSalesDetail: function() {
                        a.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(this.salesManData.user_id)
                        });
                    }
                }
            };
            n.default = t;
        }).call(this, e("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/salesmanPage/SalesmanInfo-create-component", {
    "subPackages/me/pages/components/salesmanPage/SalesmanInfo-create-component": function(a, n, e) {
        e("543d").createComponent(e("611c"));
    }
}, [ [ "subPackages/me/pages/components/salesmanPage/SalesmanInfo-create-component" ] ] ]);