require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/conjecture" ], {
    "0e45": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c5f5"), a = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = a.a;
    },
    "4ecf": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("9acb"), a = n("0e45");
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        n("9385");
        var u = n("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, "30e06438", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    9385: function(t, e, n) {
        "use strict";
        var o = n("a626");
        n.n(o).a;
    },
    "9acb": function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e, n) {
                var o = arguments[arguments.length - 1].currentTarget.dataset, a = o.eventParams || o["event-params"];
                return n = a.i, t.robot.askQuestion(n);
            });
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    a626: function(t, e, n) {},
    c5f5: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = u(n("a34a")), a = u(n("4ec3")), s = n("b628");
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e, n, o, a, s, u) {
            try {
                var r = t[s](u), c = r.value;
            } catch (t) {
                return void n(t);
            }
            r.done ? e(c) : Promise.resolve(c).then(o, a);
        }
        var c = {
            inject: [ "robot" ],
            data: function() {
                return {
                    descImg: "https://imgcdn.huanjutang.com/assets/img/20213121138288081.png",
                    exchangeImg: "https://imgcdn.huanjutang.com/assets/img/2021312134748081.png",
                    question: {
                        page: 1,
                        page_size: 6,
                        total: 0
                    },
                    questionList: []
                };
            },
            mounted: function() {
                this.getQuestionList();
            },
            methods: {
                getQuestionList: function() {
                    var t = function(t) {
                        return function() {
                            var e = this, n = arguments;
                            return new Promise(function(o, a) {
                                var s = t.apply(e, n);
                                function u(t) {
                                    r(s, o, a, u, c, "next", t);
                                }
                                function c(t) {
                                    r(s, o, a, u, c, "throw", t);
                                }
                                u(void 0);
                            });
                        };
                    }(o.default.mark(function t() {
                        var e, n, u, r;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (Math.ceil(this.question.total / this.question.page_size) !== this.question.page - 1 || 0 === this.question.total) {
                                    t.next = 4;
                                    break;
                                }
                                return s.tip.toast("没有更多问题了，小团子在加快准备中哦~", null, "none"), t.abrupt("return");

                              case 4:
                                return t.next = 6, a.default.chat.getQuestionList(this.question.page, this.question.page_size);

                              case 6:
                                (e = t.sent).data && (n = e.data, u = n.list, r = n.total, this.questionList = u, 
                                this.setTotalAndPage(r));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                setTotalAndPage: function(t) {
                    this.question.total = t, this.question.page += 1;
                }
            }
        };
        e.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/conjecture-create-component", {
    "subPackages/me/pages/components/robot/conjecture-create-component": function(t, e, n) {
        n("543d").createComponent(n("4ecf"));
    }
}, [ [ "subPackages/me/pages/components/robot/conjecture-create-component" ] ] ]);