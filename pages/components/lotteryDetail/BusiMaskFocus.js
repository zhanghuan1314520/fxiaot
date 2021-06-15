(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/BusiMaskFocus" ], {
    4145: function(t, e, n) {
        "use strict";
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = {
            components: {
                Authorization: function() {
                    n.e("components/Authorization").then(function() {
                        return resolve(n("5326"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                width: {
                    type: Number,
                    default: 296
                },
                position: {
                    type: Object,
                    default: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 140
                        };
                    }
                }
            },
            computed: {
                positionObj: function(t) {
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? o(Object(n), !0).forEach(function(e) {
                                r(t, e, n[e]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                        }
                        return t;
                    }({}, t.position);
                }
            },
            methods: {
                maskClick: function() {
                    this.$emit("onMaskClick");
                },
                onSuccess: function() {
                    this.maskClick(), this.$emit("onFocusClick");
                }
            }
        };
        e.default = c;
    },
    5023: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("8a41"), r = n("bda6");
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        n("8b21");
        var i = n("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "659a": function(t, e, n) {},
    "8a41": function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "8b21": function(t, e, n) {
        "use strict";
        var o = n("659a");
        n.n(o).a;
    },
    bda6: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4145"), r = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/BusiMaskFocus-create-component", {
    "pages/components/lotteryDetail/BusiMaskFocus-create-component": function(t, e, n) {
        n("543d").createComponent(n("5023"));
    }
}, [ [ "pages/components/lotteryDetail/BusiMaskFocus-create-component" ] ] ]);