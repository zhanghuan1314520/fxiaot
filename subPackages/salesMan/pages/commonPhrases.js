(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/commonPhrases" ], {
    2918: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c406"), a = n.n(r);
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        e.default = a.a;
    },
    3170: function(t, e, n) {
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
    "5d4f": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3170"), a = n("2918");
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        n("ec9a");
        var i = n("f0c5"), o = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    },
    c406: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), a = n("2f62"), s = n("b628"), i = n("cf34");
            function o(t, e) {
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
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function f(t, e, n, r, a, s, i) {
                try {
                    var o = t[s](i), u = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var s = t.apply(e, n);
                        function i(t) {
                            f(s, r, a, i, o, "next", t);
                        }
                        function o(t) {
                            f(s, r, a, i, o, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var d = {
                components: {
                    commonPhrasesEditer: function() {
                        n.e("subPackages/salesMan/components/commonPhrasesEditer").then(function() {
                            return resolve(n("513e"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        phrase_id: null,
                        showDialog: !1,
                        loaded: !1,
                        params: {
                            content: "",
                            id: null,
                            is_auto_reply: !1
                        },
                        list: []
                    };
                },
                onPullDownRefresh: function() {
                    var t = l(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.getData();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onReachBottom: function() {},
                computed: u({}, (0, a.mapState)({
                    refreshPhrases: function(t) {
                        return t.chat.refreshPhrases;
                    }
                })),
                watch: {
                    refreshPhrases: function() {
                        var t = this;
                        this.userInfo().then(function() {
                            t.getData();
                        });
                    }
                },
                onLoad: function() {
                    var t = l(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.userInfo();

                              case 2:
                                return t.next = 4, this.getData();

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
                methods: u(u({}, (0, a.mapMutations)({
                    setRefreshPhrases: "chat/SET_REFRESH_PHRASES"
                })), {}, {
                    removeItem: function() {
                        var t = l(r.default.mark(function t(e, n) {
                            var a;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.tip.confirm("您确定要删除该条常用语吗？");

                                  case 2:
                                    if (!(a = t.sent)) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.next = 6, (0, i.phrasesDelete)(e.id);

                                  case 6:
                                    t.sent.code ? s.tip.toast(a.message, "", "none") : (this.list.splice(n, 1), this.setRefreshPhrases());

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    editData: function(t) {
                        if (this.showDialog = !0, !t) return this.params.content = "", this.params.is_auto_reply = !1, 
                        void (this.params.delay_time = 0);
                        this.params.content = t.content, this.params.is_auto_reply = String(this.phrase_id) === String(t.id), 
                        this.params.id = t.id, this.params.delay_time = t.delay_time || 0;
                    },
                    getData: function() {
                        var e = l(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, i.phrasesList)();

                                  case 2:
                                    n = e.sent, t.stopPullDownRefresh(), this.loaded = !0, n.code ? s.tip.toast(n.message, "", "none") : this.list = n.data && n.data.data;

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    setItemDefault: function() {
                        var t = l(r.default.mark(function t(e, n) {
                            var a, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.list[n] = e, (a = u({}, e)).is_auto_reply = String(a.id) !== String(this.phrase_id), 
                                    t.next = 5, (0, i.phrasesEdit)(a);

                                  case 5:
                                    (o = t.sent) ? (s.tip.toast("操作成功", "", "none"), this.userInfo(), this.setRefreshPhrases()) : s.tip.toast(o.message, "", "none");

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    userInfo: function() {
                        var t = l(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, i.coinsUserInfo)();

                                  case 2:
                                    (e = t.sent).code || (this.phrase_id = e.data.phrase_id);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                })
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    d20e: function(t, e, n) {},
    ec9a: function(t, e, n) {
        "use strict";
        var r = n("d20e");
        n.n(r).a;
    },
    ee58: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("5d4f")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "ee58", "common/runtime", "common/vendor" ] ] ]);