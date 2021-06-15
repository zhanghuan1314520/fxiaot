require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/salesmanPage/CommonTools" ], {
    "5e8d": function(t, e, n) {
        "use strict";
        var r = n("9a06");
        n.n(r).a;
    },
    "6fc0": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("8ef2"), o = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = o.a;
    },
    8039: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "8ef2": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = c(n("a34a")), o = n("b628"), a = c(n("4ec3"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, o = !1, a = void 0;
                        try {
                            for (var c, u = t[Symbol.iterator](); !(r = (c = u.next()).done) && (n.push(c.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            o = !0, a = t;
                        } finally {
                            try {
                                r || null == u.return || u.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return i(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function s(t, e, n, r, o, a, c) {
                try {
                    var u = t[a](c), i = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(r, o);
            }
            var l = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    toolsData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    projectName: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    },
                    sessionFrom: function() {
                        return '{"nickName": "'.concat(this.userInfo.nickName, '", "city": "').concat(this.userInfo.city, '"}');
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    handleNext: function(e) {
                        var n = e.url;
                        "生成专属图片" === e.title && (n = "".concat(e.url, "?project_name=").concat(this.projectName)), 
                        "更换楼盘" !== e.title ? "学区查询" !== e.title ? t.navigateTo({
                            url: n
                        }) : t.navigateToMiniProgram({
                            appId: "wx864fc2d00ecc2918"
                        }) : this.changelottery(e.url);
                    },
                    changelottery: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(r, o) {
                                    var a = t.apply(e, n);
                                    function c(t) {
                                        s(a, r, o, c, u, "next", t);
                                    }
                                    function u(t) {
                                        s(a, r, o, c, u, "throw", t);
                                    }
                                    c(void 0);
                                });
                            };
                        }(r.default.mark(function e(n) {
                            var c, i, s, l, f, d;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, Promise.all([ a.default.sales.salemanEnterProject(), a.default.sales.isAuth() ]);

                                  case 2:
                                    if (c = e.sent, i = u(c, 2), s = i[0], l = i[1], f = "true" === l.data.identity_authentication_switch, 
                                    1 !== s.data.is_commutation) {
                                        e.next = 10;
                                        break;
                                    }
                                    return o.tip.toast("楼盘交换审核中", "", "none"), e.abrupt("return");

                                  case 10:
                                    d = "3", f && (d = s.data.id_card ? "3" : "1,3"), t.navigateTo({
                                        url: "".concat(n, "?redirectPage=").concat(d, "&changeLottery=1")
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    "9a06": function(t, e, n) {},
    afdc: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("8039"), o = n("6fc0");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("5e8d");
        var c = n("f0c5"), u = Object(c.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/salesmanPage/CommonTools-create-component", {
    "subPackages/me/pages/components/salesmanPage/CommonTools-create-component": function(t, e, n) {
        n("543d").createComponent(n("afdc"));
    }
}, [ [ "subPackages/me/pages/components/salesmanPage/CommonTools-create-component" ] ] ]);