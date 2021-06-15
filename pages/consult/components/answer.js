(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consult/components/answer" ], {
    "1b49": function(t, n, e) {
        "use strict";
        var s = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(n, "b", function() {
            return s;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
    },
    "26c0": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var s = r(e("a34a")), o = r(e("4ec3")), a = e("b628"), i = e("ca00");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, n, e, s, o, a, i) {
                try {
                    var r = t[a](i), u = r.value;
                } catch (t) {
                    return void e(t);
                }
                r.done ? n(u) : Promise.resolve(u).then(s, o);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(s, o) {
                        var a = t.apply(n, e);
                        function i(t) {
                            u(a, s, o, i, r, "next", t);
                        }
                        function r(t) {
                            u(a, s, o, i, r, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var d = null, f = null, l = {
                components: {
                    shareTemplate: function() {
                        e.e("components/shareTemplate").then(function() {
                            return resolve(e("2c6c"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    shareBtn: function() {
                        e.e("components/unifyUI/shareBtn").then(function() {
                            return resolve(e("f05d"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    TopicList: function() {
                        e.e("components/unifyUI/topicList").then(function() {
                            return resolve(e("0c2b"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    BusiAuthNavigator: function() {
                        e.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(e("aa79"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    Authorization: function() {
                        e.e("components/Authorization").then(function() {
                            return resolve(e("5326"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {
                    questionBanners: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    questionItems: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    questionNavs: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    more: {
                        type: Boolean,
                        default: !0
                    },
                    isShowAll: {
                        type: Boolean,
                        default: !0
                    },
                    placeHolder: {
                        type: String,
                        default: "房产知识有疑问？搜一搜就知道了"
                    },
                    answerHeaderFix: {
                        type: Boolean,
                        default: !1
                    },
                    sendData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        avatar_url: "https://imgcdn.huanjutang.com/assets/img/2019571417438081.png",
                        marginTop: t.getSystemInfoSync().statusBarHeight + 44 + (0, i.transformRpx)(110),
                        sortList: [ {
                            name: "默认排序",
                            index: ""
                        }, {
                            name: "浏览量由高到低",
                            index: 4
                        }, {
                            name: "发布时间由近到远",
                            index: 2
                        } ],
                        questionNavs_: [],
                        answerType: [ {
                            name: "全部"
                        }, {
                            name: "未回答"
                        }, {
                            name: "已回答"
                        }, {
                            name: "已解决"
                        } ],
                        answerIndex: "none",
                        sortIndex: 0,
                        optionsIndex: "0"
                    };
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    }
                },
                mounted: function() {
                    this.questionNavs_ = this.questionNavs;
                },
                methods: {
                    delBox: function() {
                        var n = c(s.default.mark(function n(e) {
                            var i, r, u = this;
                            return s.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    this.delModel = !0, i = this.questionItems[e], r = [], String(this.userInfo.id) === String(i.user_id) && r.push("删除"), 
                                    r.push("举报"), t.showActionSheet({
                                        itemList: r,
                                        success: function() {
                                            var n = c(s.default.mark(function n(e) {
                                                var c;
                                                return s.default.wrap(function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                      case 0:
                                                        c = r[e.tapIndex], n.t0 = c, n.next = "删除" === n.t0 ? 4 : "举报" === n.t0 ? 19 : 21;
                                                        break;

                                                      case 4:
                                                        if (String(u.userInfo.id) !== String(i.user_id)) {
                                                            n.next = 17;
                                                            break;
                                                        }
                                                        return n.next = 7, o.default.delQuestion(i.id);

                                                      case 7:
                                                        if ("删除成功" !== n.sent.data) {
                                                            n.next = 14;
                                                            break;
                                                        }
                                                        return a.tip.toast("删除成功"), n.next = 12, u.reload.call(u);

                                                      case 12:
                                                        n.next = 15;
                                                        break;

                                                      case 14:
                                                        a.tip.toast("删除失败", "", "none");

                                                      case 15:
                                                        n.next = 18;
                                                        break;

                                                      case 17:
                                                        a.tip.toast("非本人不能操作", "", "none");

                                                      case 18:
                                                        return n.abrupt("break", 22);

                                                      case 19:
                                                        return t.navigateTo({
                                                            url: "/subPackages/project/pages/reportType?type=2&id=".concat(i.id)
                                                        }), n.abrupt("break", 22);

                                                      case 21:
                                                        return n.abrupt("break", 22);

                                                      case 22:
                                                      case "end":
                                                        return n.stop();
                                                    }
                                                }, n);
                                            }));
                                            return function(t) {
                                                return n.apply(this, arguments);
                                            };
                                        }(),
                                        fail: function() {}
                                    });

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function(t) {
                            return n.apply(this, arguments);
                        };
                    }(),
                    closeCancel: function() {
                        this.optionsIndex = "0", this.sendData = d, a.common.extend(this, f);
                    },
                    submitHandle: function() {
                        this.$emit("filterData", this.sendData), this.optionsIndex = "0";
                    },
                    resetData: function() {
                        switch (parseInt(this.optionsIndex, 10)) {
                          case 1:
                            delete this.sendData.tag, this.questionNavs_.forEach(function(t) {
                                t.tags.forEach(function(t) {
                                    t.is_toggle = !1;
                                });
                            });
                            break;

                          case 2:
                            this.answerIndex = "none", delete this.sendData.status;
                            break;

                          case 3:
                            this.sortIndex = 0, delete this.sendData.time_order_by;
                        }
                        this.submitHandle.call(this);
                    },
                    pickerAnswerType: function(t, n) {
                        this.questionNavs_[t].tags[n].is_toggle = !this.questionNavs_[t].tags[n].is_toggle, 
                        this.sendData.tag = this.questionNavs_.map(function(t) {
                            return t.tags.reduce(function(t, n) {
                                return n.is_toggle && t.push(n.name), t;
                            }, []);
                        }).filter(function(t) {
                            return t.length > 0;
                        }).join(",");
                    },
                    pickerStatus: function(t) {
                        this.answerIndex = t, this.sendData.status = this.answerIndex;
                    },
                    pickerSort: function(t) {
                        this.sortIndex = t, this.sendData.time_order_by = this.sortList[t].index;
                    },
                    openSwitch: function(t) {
                        d = a.common.deepCopy(this.sendData);
                        var n = {
                            questionNavs: this.questionNavs_,
                            answerIndex: this.answerIndex,
                            sortIndex: this.sortIndex
                        };
                        f = a.common.deepCopy(n), this.optionsIndex = t.toString() === this.optionsIndex.toString() ? "0" : t;
                    },
                    toGo: function(n) {
                        t.navigateTo({
                            url: n
                        });
                    }
                }
            };
            n.default = l;
        }).call(this, e("543d").default);
    },
    "2b6b": function(t, n, e) {
        "use strict";
        e.r(n);
        var s = e("1b49"), o = e("e140");
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("2d8d");
        var i = e("f0c5"), r = Object(i.a)(o.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        n.default = r.exports;
    },
    "2d8d": function(t, n, e) {
        "use strict";
        var s = e("7b8e");
        e.n(s).a;
    },
    "7b8e": function(t, n, e) {},
    e140: function(t, n, e) {
        "use strict";
        e.r(n);
        var s = e("26c0"), o = e.n(s);
        for (var a in s) "default" !== a && function(t) {
            e.d(n, t, function() {
                return s[t];
            });
        }(a);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/consult/components/answer-create-component", {
    "pages/consult/components/answer-create-component": function(t, n, e) {
        e("543d").createComponent(e("2b6b"));
    }
}, [ [ "pages/consult/components/answer-create-component" ] ] ]);