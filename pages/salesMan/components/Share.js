(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/components/Share" ], {
    "0cd7": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e603"), i = n("8c8b");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("7bcb");
        var o = n("f0c5"), r = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "6a1d": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), i = o(n("4ec3")), s = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
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
            function l(t, e, n, a, i, s, o) {
                try {
                    var r = t[s](o), u = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            function h(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var s = t.apply(e, n);
                        function o(t) {
                            l(s, a, i, o, r, "next", t);
                        }
                        function r(t) {
                            l(s, a, i, o, r, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                components: {
                    BusiTab: function() {
                        n.e("components/UILayout/BusiTab").then(function() {
                            return resolve(n("f97f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ShareTemplate: function() {
                        n.e("pages/salesMan/components/shareTemplate").then(function() {
                            return resolve(n("b724"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiBottomLine: function() {
                        n.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(n("d754"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OperateBtns: function() {
                        n.e("pages/salesMan/components/OperateBtns").then(function() {
                            return resolve(n("b7f4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiLoading: function() {
                        n.e("components/UILayout/BusiLoading").then(function() {
                            return resolve(n("ea8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RelatedProject: function() {
                        n.e("pages/salesMan/components/RelatedProject").then(function() {
                            return resolve(n("63d7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OverFlowContent: function() {
                        n.e("pages/salesMan/components/OverFlowContent").then(function() {
                            return resolve(n("edd8"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                filters: {
                    salesmanAvatar: function(t) {
                        if (!t) return "https://imgcdn.huanjutang.com/assets/img/202051995218081.png";
                        var e = t.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(t + e, "imageView2/1/w/252");
                    }
                },
                props: {
                    sessionId: {
                        type: Number,
                        default: 0
                    },
                    isSelf: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        lazyload: !0,
                        switchType: 0,
                        list: [],
                        page: 1,
                        more: !0,
                        loading: !1,
                        questionList: [],
                        questionPage: 1,
                        questionMore: !0,
                        questionLoading: !1,
                        swiperHeight: 0
                    };
                },
                computed: {
                    tabList: function() {
                        return [ {
                            id: 0,
                            text: this.isSelf ? "我的分享" : "TA的分享",
                            dataName: "",
                            dataContent: ""
                        }, {
                            id: 1,
                            text: this.isSelf ? "我的回答" : "TA的回答",
                            dataName: "",
                            dataContent: ""
                        } ];
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    switchBarHandle: function(t) {
                        this.switchType = t, this.loadData();
                    },
                    loadData: function() {
                        var t = h(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (0 !== this.switchType) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.next = 3, this.loadShare();

                                  case 3:
                                    t.next = 7;
                                    break;

                                  case 5:
                                    return t.next = 7, this.loadQuestion();

                                  case 7:
                                    this.calcSwiperHeight();

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
                    handleSwiperChange: function(t) {
                        this.switchType = Number(t.detail.current), this.loadData();
                    },
                    reload: function() {
                        var t = h(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (0 !== this.switchType) {
                                        t.next = 8;
                                        break;
                                    }
                                    return this.more = !0, this.list = [], this.page = 1, t.next = 6, this.loadShare();

                                  case 6:
                                    t.next = 13;
                                    break;

                                  case 8:
                                    return this.questionMore = !0, this.questionList = [], this.questionPage = 1, t.next = 13, 
                                    this.loadQuestion();

                                  case 13:
                                    this.calcSwiperHeight();

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    navigato: function() {
                        t.switchTab({
                            url: "/pages/consult/index"
                        }), 1 === parseInt(this.switchType, 10) ? (s.redis.set("question_index", 2), s.redis.set("refreshQuestion", "refreshQuestion")) : s.redis.set("question_index", 3);
                    },
                    calcSwiperHeight: function() {
                        var e = this, n = ".swiper-".concat(this.switchType);
                        this.$nextTick(function() {
                            t.createSelectorQuery().in(e).select(n).boundingClientRect(function(t) {
                                t && (e.swiperHeight = t.height);
                            }).exec();
                        });
                    },
                    loadShare: function() {
                        var t = h(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.more && !this.loading) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return this.loading = !0, t.next = 5, i.default.showSalesPosts(this.sessionId, this.project_id, this.page);

                                  case 5:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1), 
                                    e && e.data && e.data.data && (n = e.data.data.map(function(t) {
                                        return u(u({}, t), {}, {
                                            height: void 0 !== t.isShow ? t.height : "auto",
                                            isShow: void 0 !== t.isShow && t.isShow
                                        });
                                    }), this.list = this.list.concat(n)), this.loading = !1;

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadQuestion: function() {
                        var t = h(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.questionMore && !this.questionLoading) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return this.questionLoading = !0, t.next = 5, i.default.showSalesQuestion(this.sessionId, this.questionPage);

                                  case 5:
                                    (e = t.sent).data && (this.questionPage >= e.data.last_page || !e.data.last_page ? this.questionMore = !1 : this.questionPage += 1), 
                                    e && e.data && e.data.data && (n = e.data.data.map(function(t) {
                                        return u(u({}, t), {}, {
                                            height: void 0 !== t.isShow ? t.height : "auto",
                                            isShow: void 0 !== t.isShow && t.isShow
                                        });
                                    }), this.questionList = this.questionList.concat(n)), this.questionLoading = !1;

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    "7bcb": function(t, e, n) {
        "use strict";
        var a = n("a13a");
        n.n(a).a;
    },
    "8c8b": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6a1d"), i = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = i.a;
    },
    a13a: function(t, e, n) {},
    e603: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.list.length ? t.__map(t.list, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    f0: t._f("salesmanAvatar")(e.avatar_url)
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/salesMan/components/Share-create-component", {
    "pages/salesMan/components/Share-create-component": function(t, e, n) {
        n("543d").createComponent(n("0cd7"));
    }
}, [ [ "pages/salesMan/components/Share-create-component" ] ] ]);