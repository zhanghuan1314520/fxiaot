require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/chatRobot" ], {
    "0990": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("775a"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    "6cbc": function(t, e, n) {
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
    "775a": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = c(n("a34a")), a = c(n("4ec3")), o = n("ca00"), i = n("2f62"), s = n("3d29");
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t) {
            return function(t) {
                if (Array.isArray(t)) return f(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function l(t, e, n, r, a, o, i) {
            try {
                var s = t[o](i), c = s.value;
            } catch (t) {
                return void n(t);
            }
            s.done ? e(c) : Promise.resolve(c).then(r, a);
        }
        function d(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(r, a) {
                    var o = t.apply(e, n);
                    function i(t) {
                        l(o, r, a, i, s, "next", t);
                    }
                    function s(t) {
                        l(o, r, a, i, s, "throw", t);
                    }
                    i(void 0);
                });
            };
        }
        function h(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(Object(n), !0).forEach(function(e) {
                    y(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function y(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var m = {
            components: {
                questionChunk: function() {
                    n.e("subPackages/me/pages/components/robot/questionChunk").then(function() {
                        return resolve(n("ad0be"));
                    }.bind(null, n)).catch(n.oe);
                },
                chatItem: function() {
                    n.e("subPackages/me/pages/components/robot/chatItem").then(function() {
                        return resolve(n("f5d6"));
                    }.bind(null, n)).catch(n.oe);
                },
                ReplyContainer: function() {
                    n.e("subPackages/me/pages/components/robot/ReplyContainer/Index").then(function() {
                        return resolve(n("76eb"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            provide: function() {
                return {
                    robot: this
                };
            },
            data: function() {
                return {
                    chatList: [],
                    historyList: [],
                    intoEleId: "bottom-ele",
                    showAni: !0,
                    historyData: {
                        page: 1,
                        size: 5,
                        latelyId: null,
                        total: -1
                    },
                    allowFetch: !1
                };
            },
            computed: p(p({}, (0, i.mapState)({
                replyFocus: function(t) {
                    return t.chat.replyFocus;
                }
            })), {}, {
                headerHeight: function() {
                    return "40rpx";
                }
            }),
            mounted: function() {},
            methods: {
                allowGetHistory: function(t) {
                    this.allowFetch = t;
                },
                askQuestion: function() {
                    var t = d(r.default.mark(function t(e) {
                        var n, a, i, c, u, f, l, d;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = {
                                    type: "question",
                                    object_id: e.id,
                                    content: e.title
                                }, t.next = 3, this.sendChat(n);

                              case 3:
                                a = t.sent, i = a.data, c = i.created_at, u = i.answer, f = i.id, l = (0, o.dayjs)(c).subtract(1, "second").format("YYYY-MM-DD HH:mm:ss"), 
                                d = new s.Chat(l, e.title, c, u, u.type, f), this.chatList.push(d), this.intoEleId = d.id;

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                askWord: function() {
                    var t = d(r.default.mark(function t(e, n, a) {
                        var i, c, u, f, l, d, h, p, y;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = {
                                    type: e,
                                    object_id: a,
                                    content: n
                                }, t.next = 3, this.sendChat(i);

                              case 3:
                                c = t.sent, u = c.data, f = u.created_at, l = u.answer, d = u.id, h = u.question_list, 
                                p = (0, o.dayjs)(f).subtract(1, "second").format("YYYY-MM-DD HH:mm:ss"), y = new s.Chat(p, n, f, 0 === h.length ? l : h, 0 === h.length ? l.type : 0, d), 
                                this.chatList.push(y), this.intoEleId = y.id;

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, n, r) {
                        return t.apply(this, arguments);
                    };
                }(),
                askCategory: function() {
                    var t = d(r.default.mark(function t(e) {
                        var n, a, i, c, u, f, l, d;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = {
                                    type: "category",
                                    object_id: e.id,
                                    content: e.title
                                }, t.next = 3, this.sendChat(n);

                              case 3:
                                a = t.sent, i = a.data, c = i.created_at, u = i.question_list, f = i.id, l = (0, 
                                o.dayjs)(c).subtract(1, "second").format("YYYY-MM-DD HH:mm:ss"), d = new s.Chat(l, e.title, c, u, 0, f), 
                                this.chatList.push(d), this.intoEleId = d.id;

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                sendChat: function() {
                    var t = d(r.default.mark(function t(e) {
                        var n;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.default.chat.sendChat(e);

                              case 2:
                                return n = t.sent, this.showAni = !0, null === this.historyData.latelyId && (this.historyData.latelyId = n.data.id), 
                                t.abrupt("return", n);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                emptyFunction: function() {},
                onScrollToUpper: function() {
                    var t = d(r.default.mark(function t() {
                        var e, n, o, i;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.historyData.total !== this.historyList.length && this.allowFetch) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, a.default.chat.getChatRecord(this.historyData);

                              case 4:
                                e = t.sent, n = e.data, o = n.list, i = n.total, this.historyData.page += 1, this.historyData.total = i, 
                                this.historyList = [].concat(u(this.formatChatItem(o.reverse())), u(this.historyList)), 
                                this.intoEleId = "initLocation", this.showAni = !1;

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                formatChatItem: function(t) {
                    return t.map(function(t) {
                        var e = t.id, n = t.content, r = t.created_at, a = t.reply, i = (0, o.dayjs)(r).subtract(1, "second").format("YYYY-MM-DD HH:mm:ss");
                        return new s.Chat(i, n, r, 0 === a.question_list.length ? a.answer : a.question_list, 0 === a.question_list.length ? a.answer.type : 0, e);
                    });
                }
            }
        };
        e.default = m;
    },
    9465: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("6cbc"), a = n("0990");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("e567");
        var i = n("f0c5"), s = Object(i.a)(a.default, r.b, r.c, !1, null, "da51734e", null, !1, r.a, void 0);
        e.default = s.exports;
    },
    ae1e: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("9465")).default);
        }).call(this, n("543d").createPage);
    },
    cef9: function(t, e, n) {},
    e567: function(t, e, n) {
        "use strict";
        var r = n("cef9");
        n.n(r).a;
    }
}, [ [ "ae1e", "common/runtime", "common/vendor", "subPackages/me/common/vendor" ] ] ]);