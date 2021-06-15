(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/answer/process" ], {
    "0d89": function(t, e, n) {},
    "25f5": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2d68")).default);
        }).call(this, n("543d").createPage);
    },
    "2d68": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("557b"), i = n("e6d3b");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("a662");
        var a = n("f0c5"), o = Object(a.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    },
    "557b": function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "7b80": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), i = s(n("4ec3"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, n, r, i, s, a) {
                try {
                    var o = t[s](a), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(r, i);
            }
            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, i = !1, s = void 0;
                        try {
                            for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done) && (n.push(a.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            i = !0, s = t;
                        } finally {
                            try {
                                r || null == o.return || o.return();
                            } finally {
                                if (i) throw s;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var d = {
                1: "selectSingle",
                2: "selectMulti"
            }, h = {
                name: "Process",
                components: {
                    subject: function() {
                        n.e("subPackages/salesMan/components/answer/topic-types/subject").then(function() {
                            return resolve(n("61b2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    answerSelect: function() {
                        n.e("subPackages/salesMan/components/answer/topic-types/answerSelect").then(function() {
                            return resolve(n("ca89"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        topicList: [],
                        theme_id: "",
                        union_id: "",
                        projectName: "杭州房小团",
                        currentTopic: {},
                        currentTopicIndex: 0,
                        answers: {},
                        hasDone: !1
                    };
                },
                computed: {
                    hasNext: function() {
                        return this.currentTopicIndex < this.topicList.length - 1;
                    },
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    }
                },
                onLoad: function(t) {
                    this.theme_id = t.theme_id, this.theme_id && this.getDetail(), this.$refs.busiNavHeader.setTransparentMode();
                },
                onShow: function() {
                    this.union_id && i.default.sales.checkAnswerValidity({
                        union_id: this.union_id
                    }).then(function(e) {
                        e && !e.data && t.redirectTo({
                            url: "/subPackages/salesMan/pages/answer/start"
                        });
                    });
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    changeBtnStatus: function(t) {
                        this.hasDone = t;
                    },
                    getDetail: function() {
                        var t = this;
                        i.default.sales.answerGetSubject({
                            theme_id: this.theme_id
                        }).then(function(e) {
                            if (e && e.data && e.data.union_id && (t.union_id = e.data.union_id), e && e.data && e.data.question && e.data.question.length) {
                                var n = e.data.question;
                                t.topicList = n.map(function(t) {
                                    if (!d.hasOwnProperty(Number(t.type))) throw Error("不受支持的题型");
                                    return l(l({}, t), {}, {
                                        type: d[t.type]
                                    });
                                });
                                var r = o(t.topicList, 1)[0];
                                t.currentTopic = r;
                            }
                        });
                    },
                    nextHandler: function() {
                        if (this.currentTopic.selfAnswer && this.currentTopicIndex < this.topicList.length - 1) {
                            this.currentTopicIndex += 1;
                            var t = this.topicList[this.currentTopicIndex];
                            this.answers[t.id] ? (t.selfAnswer = this.answers[t.id], t.selfAnswer && t.selfAnswer.length ? this.changeBtnStatus(!0) : this.changeBtnStatus(!1)) : this.changeBtnStatus(!1), 
                            this.currentTopic = l({}, t);
                        }
                    },
                    submit: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(r, i) {
                                    var s = t.apply(e, n);
                                    function o(t) {
                                        a(s, r, i, o, c, "next", t);
                                    }
                                    function c(t) {
                                        a(s, r, i, o, c, "throw", t);
                                    }
                                    o(void 0);
                                });
                            };
                        }(r.default.mark(function e() {
                            var n, s;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = {
                                        theme_id: this.theme_id,
                                        union_id: this.union_id,
                                        question_id: this.currentTopic.id,
                                        answer: this.currentTopic.selfAnswer
                                    }, e.next = 3, i.default.sales.answerSubmitResult(n);

                                  case 3:
                                    (s = e.sent) && s.data && (s.data.is_end_question ? (t.setStorageSync("answerResult", s.data), 
                                    this.changeBtnStatus(!1), t.redirectTo({
                                        url: "/subPackages/salesMan/pages/answer/result?theme_id=".concat(this.theme_id)
                                    })) : this.nextHandler());

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    pervHandler: function() {
                        this.currentTopicIndex -= 1;
                        var t = this.topicList[this.currentTopicIndex];
                        this.currentTopic = l(l({}, t), {}, {
                            selfAnswer: this.answers[t.id]
                        }), this.changeBtnStatus(!0);
                    },
                    onChange: function(t) {
                        var e = t.value;
                        e && e.length ? this.changeBtnStatus(!0) : this.changeBtnStatus(!1), Object.assign(this.currentTopic, {
                            selfAnswer: e
                        }), this.answers[this.currentTopic.id] = this.currentTopic.selfAnswer.sort();
                    }
                }
            };
            e.default = h;
        }).call(this, n("543d").default);
    },
    a662: function(t, e, n) {
        "use strict";
        var r = n("0d89");
        n.n(r).a;
    },
    e6d3b: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("7b80"), i = n.n(r);
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        e.default = i.a;
    }
}, [ [ "25f5", "common/runtime", "common/vendor" ] ] ]);