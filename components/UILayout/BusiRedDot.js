(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiRedDot" ], {
    1355: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("b045"), a = n("5ad0");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("d835");
        var o = n("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = c.exports;
    },
    4485: function(t, e, n) {},
    "5ad0": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("eb25"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    },
    b045: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    d835: function(t, e, n) {
        "use strict";
        var r = n("4485");
        n.n(r).a;
    },
    eb25: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = u(n("a34a")), a = u(n("4ec3"));
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e, n, r, a, u, o) {
            try {
                var c = t[u](o), i = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(i) : Promise.resolve(i).then(r, a);
        }
        function c(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(r, a) {
                    var u = t.apply(e, n);
                    function c(t) {
                        o(u, r, a, c, i, "next", t);
                    }
                    function i(t) {
                        o(u, r, a, c, i, "throw", t);
                    }
                    c(void 0);
                });
            };
        }
        var i = {
            props: {
                fieldName: {
                    type: String,
                    require: !0,
                    default: ""
                }
            },
            data: function() {
                return {
                    redDotObj: {}
                };
            },
            methods: {
                getUnRead: function() {
                    var t = c(r.default.mark(function t() {
                        var e, n;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.default.sales.getUnRead({
                                    field_names: [ this.fieldName ]
                                });

                              case 2:
                                e = t.sent, n = e.data, this.redDotObj = n || {};

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                setRead: function() {
                    var t = c(r.default.mark(function t() {
                        var e, n;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e = this.redDotObj, n = this.fieldName, e[n]) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");

                              case 3:
                                return t.next = 5, a.default.sales.setRead({
                                    field_name: n
                                });

                              case 5:
                                this.redDotObj[n] = 0;

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }()
            }
        };
        e.default = i;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiRedDot-create-component", {
    "components/UILayout/BusiRedDot-create-component": function(t, e, n) {
        n("543d").createComponent(n("1355"));
    }
}, [ [ "components/UILayout/BusiRedDot-create-component" ] ] ]);