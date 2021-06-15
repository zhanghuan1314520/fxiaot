(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Authorization" ], {
    "0cf3": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "1c04": function(e, t, n) {},
    "3e27": function(e, t, n) {
        "use strict";
        var o = n("1c04");
        n.n(o).a;
    },
    "3fdd": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("6c8f"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    5326: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("0cf3"), r = n("3fdd");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("3e27");
        var i = n("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "6c8f": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("2f62"), r = n("ca00");
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var s = n("f4fd"), a = {
                props: {
                    isAuthPhone: {
                        type: Boolean,
                        default: !1
                    },
                    redirectURL: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    }
                },
                methods: i(i(i({}, (0, o.mapActions)({
                    setUserInfo: "setUserInfo"
                })), (0, o.mapMutations)({
                    setEventCallback: "SET_EVENTHANDLER"
                })), {}, {
                    clickHandle: function() {
                        return !1;
                    },
                    bindSuccess: function() {
                        this.$emit("onSuccess");
                    },
                    getUserInfo: function() {
                        var e = this;
                        s.updateUserInfo().then(function(t) {
                            e.setUserInfo(t), e.isAuthPhone ? e.redirectURL ? e.userInfo.phone ? (0, r.pageJump)(e.redirectURL) : e.toAuthPhonePage() : e.userInfo.phone ? e.bindSuccess() : e.toAuthPhonePage() : e.bindSuccess();
                        }).catch(function(e) {
                            if ("denied" !== e.name) throw e;
                        });
                    },
                    toAuthPhonePage: function() {
                        this.redirectURL ? e.navigateTo({
                            url: "/subPackages/tools/pages/telLogin?direct=".concat(encodeURIComponent(this.redirectURL))
                        }) : (this.setEventCallback(this.bindSuccess.bind(this)), e.navigateTo({
                            url: "/subPackages/tools/pages/telLogin"
                        }));
                    }
                })
            };
            t.default = a;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Authorization-create-component", {
    "components/Authorization-create-component": function(e, t, n) {
        n("543d").createComponent(n("5326"));
    }
}, [ [ "components/Authorization-create-component" ] ] ]);