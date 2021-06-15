(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/weekly" ], {
    "0ef0": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("8412"), r = a("79c3");
        for (var c in r) "default" !== c && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(c);
        a("4eb6");
        var l = a("f0c5"), u = Object(l.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = u.exports;
    },
    "4eb6": function(e, t, a) {
        "use strict";
        var n = a("8f46");
        a.n(n).a;
    },
    "79c3": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("7d87"), r = a.n(n);
        for (var c in n) "default" !== c && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(c);
        t.default = r.a;
    },
    "7d87": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = c(a("a34a")), r = c(a("4ec3"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function l(e, t, a, n, r, c, l) {
            try {
                var u = e[c](l), o = u.value;
            } catch (e) {
                return void a(e);
            }
            u.done ? t(o) : Promise.resolve(o).then(n, r);
        }
        function u(e) {
            return function() {
                var t = this, a = arguments;
                return new Promise(function(n, r) {
                    var c = e.apply(t, a);
                    function u(e) {
                        l(c, n, r, u, o, "next", e);
                    }
                    function o(e) {
                        l(c, n, r, u, o, "throw", e);
                    }
                    u(void 0);
                });
            };
        }
        var o = [ "max_chat_num", "max_call_duration" ], i = {
            name: "Weekly",
            components: {
                BusiNavHeader: function() {
                    a.e("components/UILayout/BusiNavHeader").then(function() {
                        return resolve(a("5ed7"));
                    }.bind(null, a)).catch(a.oe);
                },
                Medals: function() {
                    Promise.all([ a.e("common/vendor"), a.e("pages/salesMan/components/Medals") ]).then(function() {
                        return resolve(a("28ace"));
                    }.bind(null, a)).catch(a.oe);
                }
            },
            data: function() {
                return {
                    wideCollect: o,
                    coreImageLogo: "https://imgcdn.huanjutang.com/assets/img/20213251123588081.png",
                    chatImageLogo: "https://imgcdn.huanjutang.com/assets/img/20213251122268081.png",
                    end_date: "",
                    detail: {},
                    core: {},
                    chat: {},
                    levelInfo: {}
                };
            },
            computed: {
                userInfo: {
                    get: function() {
                        return this.$store.getters.userInfo;
                    }
                }
            },
            onShow: function() {
                this.getDetail();
            },
            onLoad: function() {
                var e = u(n.default.mark(function e(t) {
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            this.$refs.busiNavHeader.setTransparentMode(), this.end_date = t.end_date, this.end_date && this.getMedal();

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(),
            onPageScroll: function(e) {
                e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
            },
            methods: {
                getMedal: function() {
                    var e = u(n.default.mark(function e() {
                        var t, a, c;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if ((t = this.$store.getters.userInfo) && t.id) {
                                    e.next = 4;
                                    break;
                                }
                                return this.levelInfo = {}, e.abrupt("return");

                              case 4:
                                return e.next = 6, r.default.sales.getMedal({
                                    user_id: this.$store.getters.userInfo.id
                                });

                              case 6:
                                a = e.sent, c = a.data, this.levelInfo = c || {};

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                getText: function(e) {
                    return Number.isNaN(Number(e)) || e >= 0 ? "上升" : "下降";
                },
                getAbsText: function(e) {
                    return Number.isNaN(Number(e)) ? "--" : Math.abs(e);
                },
                getDetail: function() {
                    var e = this;
                    r.default.sales.getSalesWeekly({
                        end_date: this.end_date
                    }).then(function(t) {
                        t && t.data && (e.detail = t.data, e.core = {
                            1: {
                                key: "credits",
                                label: "上周积分",
                                value: "".concat(e.detail.credits, "分"),
                                remark: "与前一周比".concat(e.getText(e.detail.diff_credits), "了").concat(e.getAbsText(e.detail.diff_credits), "分")
                            },
                            2: {
                                key: "liveness",
                                label: "上周活跃度",
                                value: "".concat(e.detail.liveness, "分"),
                                remark: "与前一周比".concat(e.getText(e.detail.diff_liveness), "了").concat(e.getAbsText(e.detail.diff_liveness), "分")
                            },
                            3: {
                                key: "master_project_rank",
                                label: "主营楼盘排名",
                                value: "".concat(e.detail.master_project_rank, "名"),
                                remark: "与前一周比在该楼盘".concat(e.getText(e.detail.diff_master_project_rank), "了").concat(e.getAbsText(e.detail.diff_master_project_rank), "名")
                            },
                            4: {
                                key: "like_num",
                                label: "被点赞数",
                                value: "".concat(e.detail.like_num, "个"),
                                remark: "超过".concat(e.detail.like_num_percent, "的同行")
                            }
                        }, e.chat = {
                            1: {
                                key: "chat_user_num",
                                label: "上周微聊客户",
                                value: "".concat(e.detail.chat_user_num, "个"),
                                remark: "超过".concat(e.detail.chat_user_num_percent, "的同行")
                            },
                            2: {
                                key: "chat_user_num",
                                label: "聊天总条数",
                                value: "".concat(e.detail.chat_total_num, "条"),
                                remark: "超过".concat(e.detail.chat_total_num_percent, "的同行")
                            },
                            3: {
                                key: "chat_avg_num",
                                label: "平均微聊条数",
                                value: "".concat(e.detail.chat_avg_num, "条"),
                                remark: "超过".concat(e.detail.chat_avg_num_percent, "的同行")
                            },
                            4: {
                                key: "max_chat_num",
                                label: "微聊最多的一次",
                                value: e.detail.max_chat_num ? "与".concat(e.detail.max_chat_num_user, "聊了").concat(e.detail.max_chat_num, "条") : "--",
                                remark: ""
                            },
                            5: {
                                key: "call_user_num",
                                label: "上周通话客户数",
                                value: "".concat(e.detail.call_user_num, "个"),
                                remark: "超过".concat(e.detail.call_user_num_percent, "的同行")
                            },
                            6: {
                                key: "call_total_duration",
                                label: "通话总时长",
                                value: "".concat(e.detail.call_total_duration, "分钟"),
                                remark: "超过".concat(e.detail.call_total_duration_percent, "的同行")
                            },
                            7: {
                                key: "call_total_duration",
                                label: "平均通话时长",
                                value: "".concat(e.detail.call_avg_duration, "分钟"),
                                remark: "超过".concat(e.detail.call_avg_duration_percent, "的同行")
                            },
                            8: {
                                key: "max_call_duration",
                                label: "通话最久的一次",
                                value: e.detail.max_call_duration ? "与".concat(e.detail.max_call_duration_user, "聊了").concat(e.detail.max_call_duration, "分钟") : "--",
                                remark: ""
                            }
                        });
                    });
                }
            }
        };
        t.default = i;
    },
    8412: function(e, t, a) {
        "use strict";
        var n = function() {
            var e = this, t = (e.$createElement, e._self._c, e.chat ? e.__map(e.chat, function(t, a) {
                return {
                    $orig: e.__get_orig(t),
                    g0: e.wideCollect.includes(t.key)
                };
            }) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, r = [];
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return r;
        }), a.d(t, "a", function() {});
    },
    "8f46": function(e, t, a) {},
    b542: function(e, t, a) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("6cdc"), t(a("66fd")), e(t(a("0ef0")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "b542", "common/runtime", "common/vendor" ] ] ]);