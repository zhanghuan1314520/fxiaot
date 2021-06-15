(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/AddMyProgramNew" ], {
    1517: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("72c8"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    "538c": function(t, e, n) {},
    "72c8": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), a = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
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
            function c(t, e, n, r, a, o, i) {
                try {
                    var d = t[o](i), s = d.value;
                } catch (t) {
                    return void n(t);
                }
                d.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function i(t) {
                            c(o, r, a, i, d, "next", t);
                        }
                        function d(t) {
                            c(o, r, a, i, d, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var p = {
                props: {
                    hideTip: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    var e = t.getSystemInfoSync();
                    return {
                        isAddMyProgram: !1,
                        showAddMyProgramId: null,
                        tagName: "AddMyProgram25",
                        close: !1,
                        closeTimer: null,
                        hideTipTimer: null,
                        showAddMyProgram: this.hideTip,
                        top: e.statusBarHeight + 40
                    };
                },
                watch: {
                    hideTip: function(t) {
                        this.showAddMyProgram = t;
                    }
                },
                methods: {
                    closeTipHandle: function() {
                        this.$emit("update:hideTip", !1), getApp().globalData.closeIndexDialog = !0;
                        var t = {
                            added: !1,
                            date: this.getDate.call(this),
                            showed: !0
                        };
                        this.updatePopupsData(this.showAddMyProgramId, JSON.stringify(t));
                    },
                    updatePopupsData: function() {
                        var t = u(r.default.mark(function t(e, n) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!e) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.next = 3, a.default.popupsUpdate(e, {
                                        content: n
                                    });

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getDate: function() {
                        var t = new Date(), e = t.getFullYear(), n = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : "0".concat(t.getMonth() + 1), r = t.getDate() + 1 > 9 ? t.getDate() + 1 : "0".concat(t.getDate() + 1);
                        return "".concat(e, "-").concat(n, "-").concat(r);
                    },
                    initTips: function() {
                        var e = u(r.default.mark(function e() {
                            var n, o, i, s, c, u, p, h;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = t.getEnterOptionsSync && t.getEnterOptionsSync() || t.getLaunchOptionsSync(), 
                                    1089 !== Math.floor(n.scene) && 1104 !== Math.floor(n.scene) || (this.isAddMyProgram = !0, 
                                    this.$emit("AddMyProgramEvent", {
                                        showed: !0,
                                        isAddMyProgram: !0
                                    })), e.next = 4, a.default.popupsShow(this.tagName);

                                  case 4:
                                    if ((o = e.sent) && o.data && o.data.hasOwnProperty("id")) {
                                        e.next = 14;
                                        break;
                                    }
                                    return i = {
                                        added: this.isAddMyProgram,
                                        date: this.getDate.call(this),
                                        showed: !1
                                    }, this.isAddMyProgram || this.$emit("update:hideTip", !0), e.next = 10, a.default.popupsCreate({
                                        tag: this.tagName,
                                        name: "添加到小程序",
                                        content: JSON.stringify(i)
                                    });

                                  case 10:
                                    0 === (s = e.sent).code && (this.showAddMyProgramId = s.data.id), e.next = 16;
                                    break;

                                  case 14:
                                    this.showAddMyProgramId = o.data.id, o.data.content && ((c = JSON.parse(o.data.content)).added ? this.$emit("AddMyProgramEvent", {
                                        showed: !0,
                                        isAddMyProgram: !0
                                    }) : this.isAddMyProgram ? ((u = d({}, c)).added = !0, this.updatePopupsData.call(this, this.showAddMyProgramId, JSON.stringify(u)), 
                                    this.$emit("AddMyProgramEvent", {
                                        showed: !0,
                                        isAddMyProgram: !0
                                    })) : (p = this.getDate.call(this)) === c.date ? c.showed ? this.$emit("AddMyProgramEvent", {
                                        showed: !0,
                                        isAddMyProgram: !0
                                    }) : this.$emit("update:hideTip", !0) : (this.$emit("update:hideTip", !0), (h = d({}, c)).showed = !1, 
                                    h.date = p, this.updatePopupsData.call(this, this.showAddMyProgramId, JSON.stringify(h))));

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    hideTips: function() {
                        this.hideTip && this.$emit("update:hideTip", !1);
                    }
                }
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    86883: function(t, e, n) {
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
    c96a: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("86883"), a = n("1517");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("cf8a");
        var i = n("f0c5"), d = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = d.exports;
    },
    cf8a: function(t, e, n) {
        "use strict";
        var r = n("538c");
        n.n(r).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/AddMyProgramNew-create-component", {
    "components/AddMyProgramNew-create-component": function(t, e, n) {
        n("543d").createComponent(n("c96a"));
    }
}, [ [ "components/AddMyProgramNew-create-component" ] ] ]);