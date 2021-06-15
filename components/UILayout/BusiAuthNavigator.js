(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiAuthNavigator" ], {
    "15e7": function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    },
    "3eeb": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("d4a2"), a = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = a.a;
    },
    aa79: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("15e7"), a = e("3eeb");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        var i = e("f0c5"), c = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = c.exports;
    },
    d4a2: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = e("ca00"), a = {
            components: {
                Authorization: function() {
                    e.e("components/Authorization").then(function() {
                        return resolve(e("5326"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                url: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    src: "",
                    isAuthPhone: !1
                };
            },
            watch: {
                url: {
                    handler: function(t) {
                        if (t) {
                            var n = this.url;
                            if (n.indexOf(":/") > -1) {
                                var e = n.split(":/"), o = e[1], a = e[0];
                                a.indexOf("-authphone") > -1 ? (a = a.replace("-authphone", ""), this.isAuthPhone = !0) : a.indexOf("-auth") > -1 ? (a = a.replace("-auth", ""), 
                                this.isAuthPhone = !1) : this.isAuthPhone = !1, this.src = o;
                            } else this.src = t;
                        }
                    },
                    immediate: !0
                }
            },
            methods: {
                navigateTo: function() {
                    (0, o.pageJump)(this.src);
                }
            }
        };
        n.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiAuthNavigator-create-component", {
    "components/UILayout/BusiAuthNavigator-create-component": function(t, n, e) {
        e("543d").createComponent(e("aa79"));
    }
}, [ [ "components/UILayout/BusiAuthNavigator-create-component" ] ] ]);