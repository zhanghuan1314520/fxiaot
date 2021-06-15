require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/search/components/SuggestList" ], {
    "5ab9": function(t, n, e) {},
    9389: function(t, n, e) {
        "use strict";
        e.r(n);
        var c = e("f646"), a = e("c0cb");
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        e("bd3c");
        var u = e("f0c5"), r = Object(u.a)(a.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        n.default = r.exports;
    },
    bd3c: function(t, n, e) {
        "use strict";
        var c = e("5ab9");
        e.n(c).a;
    },
    c0cb: function(t, n, e) {
        "use strict";
        e.r(n);
        var c = e("ce67"), a = e.n(c);
        for (var o in c) "default" !== o && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(o);
        n.default = a.a;
    },
    ce67: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = {
            components: {
                BrandItem: function() {
                    e.e("subPackages/search/components/BrandItem").then(function() {
                        return resolve(e("d0b4"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                keyword: {
                    type: String,
                    default: ""
                },
                listData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                brandData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                groupData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            methods: {
                clickHandle: function() {
                    this.$emit("onSubmit");
                },
                clickHandleWithParam: function(t) {
                    this.$emit("onSubmit", t);
                },
                handleNavigate: function() {}
            }
        };
        n.default = c;
    },
    f646: function(t, n, e) {
        "use strict";
        var c = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return c;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/search/components/SuggestList-create-component", {
    "subPackages/search/components/SuggestList-create-component": function(t, n, e) {
        e("543d").createComponent(e("9389"));
    }
}, [ [ "subPackages/search/components/SuggestList-create-component" ] ] ]);