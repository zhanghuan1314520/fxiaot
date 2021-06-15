(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/BaseAddMiniApp" ], {
    "2bd9": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("350b"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    "350b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(n("a34a")), o = n("2f62"), r = c(n("4ec3"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, o, r, c) {
                try {
                    var i = t[r](c), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(a, o);
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
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
            var p = {
                data: function() {
                    return {
                        close: !1,
                        addMyProgramID: "",
                        top: t.getSystemInfoSync().statusBarHeight + 40
                    };
                },
                computed: d(d({}, (0, o.mapState)({
                    enableAddMyApp: function(t) {
                        return t.system.enableAddMyApp;
                    }
                })), {}, {
                    showTips: function() {
                        return this.enableAddMyApp.data;
                    }
                }),
                mounted: function() {
                    this.initTips();
                },
                methods: d(d({}, (0, o.mapMutations)({
                    changeTipsState: "system/SET_ENABLE_ADD_MY_APP"
                })), {}, {
                    closeTipHandle: function() {
                        this.changeTipsState(!1), r.default.popupsUpdate(this.addMyProgramID, {
                            content: JSON.stringify({
                                added: !1,
                                date: this.getDate(),
                                showed: !0
                            })
                        });
                    },
                    getDate: function() {
                        var t = new Date(), e = t.getFullYear(), n = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : "0".concat(t.getMonth() + 1), a = t.getDate() + 1 > 9 ? t.getDate() + 1 : "0".concat(t.getDate() + 1);
                        return "".concat(e, "-").concat(n, "-").concat(a);
                    },
                    initTips: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(a, o) {
                                    var r = t.apply(e, n);
                                    function c(t) {
                                        i(r, a, o, c, u, "next", t);
                                    }
                                    function u(t) {
                                        i(r, a, o, c, u, "throw", t);
                                    }
                                    c(void 0);
                                });
                            };
                        }(a.default.mark(function e() {
                            var n, o, c = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n = t.getEnterOptionsSync && t.getEnterOptionsSync() || t.getLaunchOptionsSync(), 
                                    o = 1089 === Math.floor(n.scene) || 1104 === Math.floor(n.scene), r.default.popupsShow("AddMyProgram25").then(function(t) {
                                        if (t.data) {
                                            var e = t.data.id, n = t.data.content && JSON.parse(t.data.content);
                                            if (n.added || o) c.$emit("onAdd"); else {
                                                var a = c.getDate();
                                                if (n.date === a && n.showed) return void c.$emit("onAdd");
                                                c.changeTipsState(!0), r.default.popupsUpdate(e, {
                                                    content: JSON.stringify(d(d({}, n), {}, {
                                                        showed: !0,
                                                        date: a
                                                    }))
                                                });
                                            }
                                        } else o ? c.$emit("onAdd") : c.changeTipsState(!0), r.default.popupsCreate({
                                            tag: "AddMyProgram25",
                                            name: "添加到小程序",
                                            content: JSON.stringify({
                                                added: o,
                                                date: c.getDate(),
                                                showed: !0
                                            })
                                        }).then(function(t) {
                                            0 === t.code && (c.addMyProgramID = t.data.id);
                                        });
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                })
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    "35ba": function(t, e, n) {
        "use strict";
        var a = n("c2f3");
        n.n(a).a;
    },
    a388: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e7ad"), o = n("2bd9");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("35ba");
        var c = n("f0c5"), i = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    c2f3: function(t, e, n) {},
    e7ad: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/BaseAddMiniApp-create-component", {
    "components/BaseAddMiniApp-create-component": function(t, e, n) {
        n("543d").createComponent(n("a388"));
    }
}, [ [ "components/BaseAddMiniApp-create-component" ] ] ]);