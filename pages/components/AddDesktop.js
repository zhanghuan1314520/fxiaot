(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/AddDesktop" ], {
    "57ec": function(t, e, n) {
        "use strict";
        var s = n("fafb");
        n.n(s).a;
    },
    "67bd": function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("7f6a"), o = n.n(s);
        for (var a in s) "default" !== a && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        e.default = o.a;
    },
    "7f6a": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = r(n("a34a")), o = r(n("4ec3")), a = r(n("ca00")), i = r(n("79b9"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, s);
                }
                return n;
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach(function(e) {
                        u(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function p(t, e, n, s, o, a, i) {
                try {
                    var r = t[a](i), d = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(d) : Promise.resolve(d).then(s, o);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(s, o) {
                        var a = t.apply(e, n);
                        function i(t) {
                            p(a, s, o, i, r, "next", t);
                        }
                        function r(t) {
                            p(a, s, o, i, r, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var f = {
                props: {
                    show: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        isSaleMan: !1,
                        os: "ios",
                        isAddDesktop: !1,
                        showAddDesktopId: null,
                        tagNameIos: "AddToDesktopTag9",
                        tagNameAndroid: "AddToDesktopTagAndroid_10",
                        close: !1,
                        closeTimer: null,
                        hideTipTimer: null
                    };
                },
                computed: {
                    util: function() {
                        return a.default;
                    }
                },
                watch: {
                    show: function(t) {
                        var e = this;
                        t && setTimeout(function() {
                            e.close = !0;
                        }, 5e3);
                    },
                    close: function(t) {
                        var e = this;
                        t && setTimeout(function() {
                            e.closeTipHandle.call(e);
                        }, 1500);
                    }
                },
                destroyed: function() {
                    this.clearTimers.call(this);
                },
                mounted: function() {
                    var e = l(s.default.mark(function e() {
                        var n, a, r, d, u, p, l, f, h, m, v, g, w, b;
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = this, t.getSystemInfo({
                                    success: function(t) {
                                        -1 !== t.system.indexOf("iOS") ? n.os = "ios" : n.os = "android";
                                    }
                                }), e.next = 4, o.default.isSaleMan();

                              case 4:
                                if (a = e.sent, 1 === Math.floor(a.data) && (this.isSaleMan = !0), r = t.getEnterOptionsSync && t.getEnterOptionsSync() || t.getLaunchOptionsSync(), 
                                1023 === Math.floor(r.scene) && (this.isAddDesktop = !0), "ios" !== this.os) {
                                    e.next = 23;
                                    break;
                                }
                                return e.next = 11, o.default.popupsShow(this.tagNameIos);

                              case 11:
                                if ((d = e.sent) && d.data && d.data.hasOwnProperty("id")) {
                                    e.next = 21;
                                    break;
                                }
                                return this.$emit("update:show", !0), u = {
                                    isSaleMan: this.isSaleMan,
                                    flag: !0,
                                    closed: !1,
                                    version: i.default.version
                                }, e.next = 17, o.default.popupsCreate({
                                    tag: this.tagNameIos,
                                    name: "添加到桌面/浮窗",
                                    content: JSON.stringify(u)
                                });

                              case 17:
                                0 === (p = e.sent).code && (this.showAddDesktopId = p.data.id), e.next = 23;
                                break;

                              case 21:
                                this.showAddDesktopId = d.data.id, d.data.content && (l = JSON.parse(d.data.content), 
                                this.isSaleMan ? i.default.version === l.version ? l.closed || this.$emit("update:show", !0) : (this.$emit("update:show", !0), 
                                (f = c({}, l)).version = i.default.version, f.flag = !0, f.closed = !1, this.updatePopupsData.call(this, this.showAddDesktopId, JSON.stringify(f))) : l.closed || this.$emit("update:show", !0));

                              case 23:
                                if ("android" !== this.os) {
                                    e.next = 48;
                                    break;
                                }
                                return e.next = 26, o.default.popupsShow(this.tagNameAndroid);

                              case 26:
                                if ((h = e.sent) && h.data && h.data.hasOwnProperty("id")) {
                                    e.next = 36;
                                    break;
                                }
                                return this.isAddDesktop || this.$emit("update:show", !0), m = {
                                    added: this.isAddDesktop,
                                    showed: !this.isAddDesktop,
                                    closed: !1,
                                    version: i.default.version
                                }, e.next = 32, o.default.popupsCreate({
                                    tag: this.tagNameAndroid,
                                    name: "添加到桌面/浮窗",
                                    content: JSON.stringify(m)
                                });

                              case 32:
                                0 === (v = e.sent).code && (this.showAddDesktopId = v.data.id), e.next = 48;
                                break;

                              case 36:
                                if (this.showAddDesktopId = h.data.id, !h.data.content) {
                                    e.next = 48;
                                    break;
                                }
                                if (g = JSON.parse(h.data.content), !this.isAddDesktop || g.added) {
                                    e.next = 47;
                                    break;
                                }
                                return (w = c({}, g)).closed = !0, w.added = !0, w.version = i.default.version, 
                                w.flag = !1, this.updatePopupsData.call(this, this.showAddDesktopId, JSON.stringify(w)), 
                                e.abrupt("return");

                              case 47:
                                g.added || (i.default.version === g.version ? g.closed || this.$emit("update:show", !0) : (this.$emit("update:show", !0), 
                                (b = c({}, g)).flag = this.showAddDesktopId, b.showed = (!0).isAddDesktop, b.version = i.default.version, 
                                b.closed = !1, this.updatePopupsData.call(this, this.showAddDesktopId, JSON.stringify(b))));

                              case 48:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    clearTimers: function() {
                        this.closeTimer && clearTimeout(this.closeTimer), this.hideTipTimer && clearTimeout(this.hideTipTimer);
                    },
                    closeTipHandle: function() {
                        this.clearTimers.call(this), this.$emit("update:show", !1);
                        var t = {
                            added: !1,
                            showed: !0,
                            closed: !0,
                            version: i.default.version
                        };
                        this.updatePopupsData(this.showAddDesktopId, JSON.stringify(t));
                    },
                    updatePopupsData: function() {
                        var t = l(s.default.mark(function t(e, n) {
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!e) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.next = 3, o.default.popupsUpdate(e, {
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
                        var t = new Date(), e = t.getFullYear(), n = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : "0".concat(t.getMonth() + 1), s = t.getDate() + 1 > 9 ? t.getDate() + 1 : "0".concat(t.getDate() + 1);
                        return "".concat(e, "-").concat(n, "-").concat(s);
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    "8efc": function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("9d13"), o = n("67bd");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("57ec");
        var i = n("f0c5"), r = Object(i.a)(o.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = r.exports;
    },
    "9d13": function(t, e, n) {
        "use strict";
        var s = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    fafb: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/AddDesktop-create-component", {
    "pages/components/AddDesktop-create-component": function(t, e, n) {
        n("543d").createComponent(n("8efc"));
    }
}, [ [ "pages/components/AddDesktop-create-component" ] ] ]);