require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/settings" ], {
    "0a27": function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("d0bd"), s = e.n(r);
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        n.default = s.a;
    },
    8787: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("d9c2"), s = e("0a27");
        for (var u in s) "default" !== u && function(t) {
            e.d(n, t, function() {
                return s[t];
            });
        }(u);
        e("ceec");
        var a = e("f0c5"), i = Object(a.a)(s.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = i.exports;
    },
    "930d": function(t, n, e) {},
    ceec: function(t, n, e) {
        "use strict";
        var r = e("930d");
        e.n(r).a;
    },
    d0bd: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = a(e("a34a")), s = a(e("4ec3")), u = e("f4fd");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            function o(t, n, e, r, s, u, a) {
                try {
                    var i = t[u](a), o = i.value;
                } catch (t) {
                    return void e(t);
                }
                i.done ? n(o) : Promise.resolve(o).then(r, s);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(r, s) {
                        var u = t.apply(n, e);
                        function a(t) {
                            o(u, r, s, a, i, "next", t);
                        }
                        function i(t) {
                            o(u, r, s, a, i, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var f = e("f4fd").updateUserInfo, l = {
                data: function() {
                    return {
                        settingsList: [],
                        isToggle: !1,
                        keys: [],
                        userInfo: null,
                        appName: "杭州房小团",
                        authSuccess: !1
                    };
                },
                onLoad: function() {
                    var n = c(r.default.mark(function n() {
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t.hideShareMenu(), this.userInfo = (0, u.getUserInfo)(), n.next = 4, this.reload.call(this);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                computed: {
                    hasAuthed: function() {
                        if (null === this.userInfo) return !1;
                        var t = this.userInfo.nickName, n = this.userInfo.unionId;
                        return !(!t || !n);
                    }
                },
                methods: {
                    getUserInfo: function() {
                        var t = this;
                        f().then(function(n) {
                            t.userInfo = n;
                        }).catch(function() {});
                    },
                    handleGetUserInfo: function() {
                        var t = this;
                        f().then(function(n) {
                            t.userInfo = n, t.authSuccess = !0;
                        }).catch(function() {});
                    },
                    mydetails: function() {
                        this.userInfo.sales_man_id && "0" !== this.userInfo.sales_man_id ? t.navigateTo({
                            url: "/subPackages/me/pages/salesPersonInfo?id=".concat(this.userInfo.sales_man_id)
                        }) : t.navigateTo({
                            url: "/subPackages/me/pages/editAvatar"
                        });
                    },
                    analysis: function(n) {
                        t.navigateTo({
                            url: n
                        });
                    },
                    switchChange: function() {
                        var n = c(r.default.mark(function n(e) {
                            var u, a, i;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.vibrateShort(), u = this.settingsList[e], a = {}, this.keys.forEach(function(t) {
                                        a[t.key] = t.val;
                                    }), i = u.field, u.status = 1 === parseInt(u.status, 10) ? 2 : 1, a[i] = u.status, 
                                    n.next = 9, s.default.changeSettings(a);

                                  case 9:
                                    this.keys = this.getKeysWithArr(this.settingsList);

                                  case 10:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function(t) {
                            return n.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var t = c(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.settings();

                                  case 2:
                                    (n = t.sent).data && (this.settingsList = n.data, this.keys = this.getKeysWithArr(n.data));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getKeysWithArr: function() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [];
                        return n.forEach(function(n) {
                            if ("object" === i(n.status) && null !== n.status) {
                                var r = t.getKeysWithArr(n.status);
                                e = e.concat(r);
                            } else e.push({
                                key: n.field,
                                val: n.status
                            });
                        }), e;
                    }
                }
            };
            n.default = l;
        }).call(this, e("543d").default);
    },
    d7bb: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("8787")).default);
        }).call(this, e("543d").createPage);
    },
    d9c2: function(t, n, e) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, s = [];
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return s;
        }), e.d(n, "a", function() {});
    }
}, [ [ "d7bb", "common/runtime", "common/vendor" ] ] ]);