require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/chat/ScrollItem" ], {
    "0237": function(t, e, n) {},
    1493: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), i = o(n("4ec3")), c = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function s(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function f(t, e, n, r, i, c, o) {
                try {
                    var a = t[c](o), u = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(u) : Promise.resolve(u).then(r, i);
            }
            var l = 0, p = 0, d = 0, m = 0, b = 0, h = 0, v = {
                filters: {
                    salesmanAvatar: function(t) {
                        if (!t) return "";
                        var e = t.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(t + e, "imageView2/1/w/132");
                    }
                },
                props: {
                    className: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/20190806/5d4948aa7c92c.png",
                        id: ""
                    };
                },
                computed: {
                    intention: function() {
                        return {
                            1: "无效",
                            2: "潜在",
                            3: "意向"
                        }[this.item.intention];
                    },
                    intentionClass: function() {
                        return {
                            1: "invalid",
                            2: "potential",
                            3: "attention"
                        }[this.item.intention];
                    }
                },
                methods: {
                    jumpUrl: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(e)
                        });
                    },
                    touchS: function(t) {
                        b = 0, h = 0, l = t.touches[0].clientX, p = t.touches[0].clientY;
                    },
                    touchM: function(t) {
                        d = t.touches[0].clientX, m = t.touches[0].clientY, b = l - d, h = p - m;
                    },
                    touchEnd: function(t) {
                        b > 35 && h < 110 ? this.id = t : b < 0 && (this.id = "");
                    },
                    userIntention: function() {
                        var t = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(r, i) {
                                    var c = t.apply(e, n);
                                    function o(t) {
                                        f(c, r, i, o, a, "next", t);
                                    }
                                    function a(t) {
                                        f(c, r, i, o, a, "throw", t);
                                    }
                                    o(void 0);
                                });
                            };
                        }(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.userIntention({
                                        receiver_id: this.item.linker.id,
                                        intention: e
                                    });

                                  case 2:
                                    c.tip.toast("标记成功"), this.$set(this, "item", u(u({}, this.item), {}, {
                                        intention: e
                                    })), this.id = "";

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = v;
        }).call(this, n("543d").default);
    },
    2678: function(t, e, n) {
        "use strict";
        var r = n("0237");
        n.n(r).a;
    },
    3820: function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this, e = (t.$createElement, t._self._c, t._f("salesmanAvatar")(t.item.linker && t.item.linker.avatar_url)), n = [ 1, 2, 3 ].includes(t.item.intention);
            t._isMounted || (t.e0 = function(e) {
                t.id = "";
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    f0: e,
                    g0: n
                }
            });
        }, i = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "77bb": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3820"), i = n("f152");
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        n("2678");
        var o = n("f0c5"), a = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = a.exports;
    },
    f152: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("1493"), i = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/chat/ScrollItem-create-component", {
    "subPackages/me/pages/components/chat/ScrollItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("77bb"));
    }
}, [ [ "subPackages/me/pages/components/chat/ScrollItem-create-component" ] ] ]);