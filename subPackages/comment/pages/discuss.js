(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/comment/pages/discuss" ], {
    "0d8f": function(t, e, n) {
        "use strict";
        var s = n("32d9");
        n.n(s).a;
    },
    "32d9": function(t, e, n) {},
    "46fb": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("6954")).default);
        }).call(this, n("543d").createPage);
    },
    6954: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("9f48"), i = n("f613");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("0d8f");
        var o = n("f0c5"), r = Object(o.a)(i.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = r.exports;
    },
    "9f48": function(t, e, n) {
        "use strict";
        var s = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    f613: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("f869"), i = n.n(s);
        for (var a in s) "default" !== a && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        e.default = i.a;
    },
    f869: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = c(n("a34a")), i = n("2f62"), a = c(n("4ec3")), o = n("b628"), r = n("ca00");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, s);
                }
                return n;
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        d(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function h(t, e, n, s, i, a, o) {
                try {
                    var r = t[a](o), c = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(c) : Promise.resolve(c).then(s, i);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(s, i) {
                        var a = t.apply(e, n);
                        function o(t) {
                            h(a, s, i, o, r, "next", t);
                        }
                        function r(t) {
                            h(a, s, i, o, r, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var l = n("f4fd").updateUserInfo, m = 0, g = 0, v = [ {
                src: "https://imgcdn.huanjutang.com/assets/img/20191121/5dd644bc404e2.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd3945fa256e.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd394a3dc5e1.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd3967e7001e.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd39500a26da.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd3952aec183.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd3957f189f8.png"
            }, {
                src: "https://imgcdn.huanjutang.com/assets/img/20191119/5dd395e48b5d0.png"
            } ], b = {
                components: {
                    voteResult: function() {
                        n.e("subPackages/comment/components/unifyUI/vote-result").then(function() {
                            return resolve(n("b199"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    shareBtn: function() {
                        n.e("components/unifyUI/shareBtn").then(function() {
                            return resolve(n("f05d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        default_avatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        topicInfo: {},
                        discussionList: [],
                        newDiscussionList: [],
                        topic_id: "",
                        page: 1,
                        more: !0,
                        userInfo: null,
                        loading: !0,
                        short_title: "",
                        comment_cont: "",
                        isFocus: !1,
                        inputPlace: "我来说两句...",
                        bottom: 0,
                        pid: 0,
                        textAreaStyle: !1,
                        tempSalesManId: 0,
                        agreePrecent: 0,
                        disagreePrecent: 0,
                        isShowVote: !1,
                        isHasVote: !1,
                        voteType: "",
                        bgStr: "",
                        upVoteText: "",
                        downVoteText: "",
                        chooseIndex: -1
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("快来看啊，大家都在这里讨论".concat(this.topicInfo.short_title));
                },
                onReachBottom: function() {
                    var t = p(s.default.mark(function t() {
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext.call(this);

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
                onPullDownRefresh: function() {
                    var e = p(s.default.mark(function e() {
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var e = p(s.default.mark(function e(n) {
                        var i;
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.topic_id = n.id, this.is_hot = n.is_hot, this.userInfo = o.cache.get("userinfo") || {}, 
                                this.bgStr = v[(0, r.random)(0, 7)].src, this.chooseIndex = n.index, e.next = 7, 
                                this.reload.call(this);

                              case 7:
                                ((i = t.getSystemInfoSync() || {}).model && i.model.toLowerCase().indexOf("iphone") > -1 || r.isIPhoneX) && (this.textAreaStyle = !0);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    isIphoneX: function() {
                        return r.isIPhoneX;
                    }
                },
                methods: f(f({}, (0, i.mapMutations)({
                    setUpdatedIndex: "SET_UPDATED_INDEX",
                    setUpdatedItem: "SET_UPDATED_ITEM"
                })), {}, {
                    discussionVoteFN: function() {
                        var t = p(s.default.mark(function t(e) {
                            var n, i;
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.discussionVote(this.topic_id, e);

                                  case 2:
                                    if (0 !== (n = t.sent).code || "投票成功" !== n.message) {
                                        t.next = 10;
                                        break;
                                    }
                                    return t.next = 6, a.default.topicInfo(this.topic_id);

                                  case 6:
                                    i = t.sent, this.setUpdatedIndex(this.chooseIndex), this.setUpdatedItem(i.data), 
                                    this.getVoteDetailData(i);

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    nullFn: function(t) {
                        this.tempSalesManId = t;
                    },
                    getUserInfoToIM: function() {
                        var t = this;
                        l().then(function(e) {
                            t.userInfo = e, t.jumpToUrl.call(t);
                        }).catch(function() {});
                    },
                    jumpToUrl: function() {
                        var e = p(s.default.mark(function e() {
                            var n, i, r;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.getSalesManOnce(this.tempSalesManId);

                                  case 2:
                                    n = e.sent, i = "", 0 === n.code && (i = "/subPackages/me/pages/chatInterface?user_id=".concat(n.data.session_id)), 
                                    this.userInfo = o.cache.get("userinfo"), this.userInfo.phone ? t.navigateTo({
                                        url: i
                                    }) : (r = "/subPackages/tools/pages/telLogin?direct=".concat(encodeURIComponent(i)), 
                                    t.navigateTo({
                                        url: r
                                    }));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toAnswerManDetail: function(e, n) {
                        2 !== parseInt(n, 10) && t.navigateTo({
                            url: "/subPackages/question/pages/userQuestion?user_id=".concat(e)
                        });
                    },
                    loseFocus: function() {
                        this.bottom = 0, this.isFocus = !1;
                    },
                    inputVal: function(t) {
                        var e = t.detail.value;
                        this.comment_cont = e.trim();
                    },
                    closeBg: function() {
                        this.bottom = 0, this.isFocus = !1, this.pid = "", this.inputPlace = "我来说两句...";
                    },
                    getFormId: function(t) {
                        t && t.detail && a.default.sendFromID(t.detail.formId).then(function() {});
                    },
                    bindContfocus: function(t) {
                        this.bottom = t.detail.height, this.isFocus = !0;
                    },
                    touchStart: function(t) {
                        m = t.timeStamp;
                    },
                    touchEnd: function(t) {
                        g = t.timeStamp;
                    },
                    comment: function(t, e, n) {
                        if (g - m < 350) {
                            if (this.userInfo.id.toString() === n.toString()) return void o.tip.toast("不能自己回复自己", "", "none");
                            this.isFocus = !0, this.pid = t, this.inputPlace = e ? "回复@".concat(e) : "小主人说点什么吧";
                        }
                    },
                    formSubmit: function() {
                        var e = p(s.default.mark(function e() {
                            var n;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.bottom = 0, this.isFocus = !1, this.comment_cont) {
                                        e.next = 5;
                                        break;
                                    }
                                    return o.tip.toast("请输入评论内容", "", "none"), e.abrupt("return");

                                  case 5:
                                    if (this.pid = this.pid || "", t.showLoading({
                                        title: "加载中..."
                                    }), n = null, "" !== this.pid.toString()) {
                                        e.next = 14;
                                        break;
                                    }
                                    return e.next = 11, a.default.setDiscussion(this.topic_id, this.comment_cont);

                                  case 11:
                                    n = e.sent, e.next = 17;
                                    break;

                                  case 14:
                                    return e.next = 16, a.default.setDiscussionComment(0, this.comment_cont, this.pid);

                                  case 16:
                                    n = e.sent;

                                  case 17:
                                    if (this.comment_cont = "", this.isShow = !1, !n || !n.data) {
                                        e.next = 25;
                                        break;
                                    }
                                    return o.tip.toast("评论成功"), this.pid = "", this.inputPlace = "小主人说点什么吧", e.next = 25, 
                                    this.reload();

                                  case 25:
                                    t.hideLoading();

                                  case 26:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    updateUserInfoSubmit: function() {
                        var t = this;
                        l().then(function(e) {
                            t.userInfo = e, t.formSubmit.call(t);
                        }).catch(function() {});
                    },
                    followTopicInfo: function() {
                        var t = p(s.default.mark(function t() {
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.topicAttention(this.topic_id);

                                  case 2:
                                    "关注成功" === t.sent.data ? (this.topicInfo.attention = 1, this.topicInfo.attention_num += 1) : (this.topicInfo.attention = 2, 
                                    this.topicInfo.attention_num -= 1);

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
                    delQuestion: function() {
                        var e = p(s.default.mark(function e(n, i) {
                            var r, c, u = this;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.delModel = !0, r = 1 === parseInt(n, 10) ? this.discussionList[i] : this.newDiscussionList[i], 
                                    c = [], String(this.userInfo.id) === String(r.user_id) ? c.push("删除") : c.push("举报"), 
                                    t.showActionSheet({
                                        itemList: c,
                                        success: function() {
                                            var e = p(s.default.mark(function e(n) {
                                                var i, f;
                                                return s.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        i = c[n.tapIndex], e.t0 = i, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 15 : 17;
                                                        break;

                                                      case 4:
                                                        return e.next = 6, a.default.question.deleteDiscussion(r.id, u.topic_id);

                                                      case 6:
                                                        if (f = e.sent, 0 !== parseInt(f.code, 10)) {
                                                            e.next = 13;
                                                            break;
                                                        }
                                                        return e.next = 10, u.reload.call(u);

                                                      case 10:
                                                        o.tip.toast("删除成功", "", ""), e.next = 14;
                                                        break;

                                                      case 13:
                                                        o.tip.toast("删除失败", "", "none");

                                                      case 14:
                                                        return e.abrupt("break", 18);

                                                      case 15:
                                                        return t.navigateTo({
                                                            url: "/subPackages/project/pages/reportType?type=2&id=".concat(r.id)
                                                        }), e.abrupt("break", 18);

                                                      case 17:
                                                        return e.abrupt("break", 18);

                                                      case 18:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }(),
                                        fail: function() {}
                                    });

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toSalesManHandle: function() {
                        var e = p(s.default.mark(function e(n) {
                            var i;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.getSalesManOnce(n);

                                  case 2:
                                    0 === (i = e.sent).code && t.navigateTo({
                                        url: "/subPackages/me/pages/chatInterface?user_id=".concat(i.data.session_id)
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toUrl: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    follow: function() {
                        var t = p(s.default.mark(function t(e, n) {
                            var i;
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (i = null, i = 1 === parseInt(e, 10) ? this.discussionList[n] : this.newDiscussionList[n], 
                                    !(parseInt(n, 10) >= 0)) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.next = 5, a.default.attentionUser(i.user_id, i.sales_man_id);

                                  case 5:
                                    "关注成功" === t.sent.message ? i.attention = 1 : i.attention = 2, t.next = 13;
                                    break;

                                  case 9:
                                    return t.next = 11, a.default.topicAttention(this.topic_id);

                                  case 11:
                                    "关注成功" === t.sent.message ? (this.topicInfo.attention = 1, this.topicInfo.attention_num += 1) : (this.topicInfo.attention = 2, 
                                    this.topicInfo.attention_num -= 1);

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    toggle: function(t, e) {
                        1 === parseInt(t, 10) ? this.discussionList[e].is_toggle = !this.discussionList[e].is_toggle : this.newDiscussionList[e].is_toggle = !this.newDiscussionList[e].is_toggle;
                    },
                    isLike: function(t, e) {
                        var n = null;
                        (n = 1 === parseInt(t, 10) ? this.discussionList[e] : this.newDiscussionList[e]).is_like = 1 === parseInt(n.is_like, 10) ? 2 : 1, 
                        n.like_num = 1 === parseInt(n.is_like, 10) ? parseInt(n.like_num, 10) + 1 : parseInt(n.like_num, 10) - 1, 
                        a.default.discussionLike(n.id).then(function(t) {
                            "点赞成功" === t.data ? n.is_like = 1 : n.is_like = 2;
                        });
                    },
                    reload: function() {
                        var e = p(s.default.mark(function e() {
                            var n;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.loading = !0, e.next = 4, a.default.topicInfo(this.topic_id);

                                  case 4:
                                    return n = e.sent, this.topicInfo = n.data, this.short_title = this.topicInfo.short_title, 
                                    this.isShowVote = this.topicInfo.vote_able, this.getVoteDetailData(n), this.loading = !1, 
                                    this.more = !0, this.page = 1, this.newDiscussionList = [], e.next = 15, this.loadNext.call(this);

                                  case 15:
                                    t.hideLoading();

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = p(s.default.mark(function t() {
                            var e, n;
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.discussionList(this.topic_id, 1, "");

                                  case 2:
                                    return e = t.sent, this.discussionList = e.data && e.data.data, this.discussionList.forEach(function(t) {
                                        t.is_toggle = !1;
                                    }), t.next = 7, a.default.discussionList(this.topic_id, "", this.page);

                                  case 7:
                                    (n = t.sent).data && (this.page >= n.data.last_page || !n.data.last_page ? this.more = !1 : this.page += 1), 
                                    n && n.data && n.data.data && n.data.data.forEach(function(t) {
                                        t.is_toggle = !1;
                                    }), this.newDiscussionList = this.newDiscussionList.concat(n.data ? n.data.data : []);

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
                    getVoteDetailData: function(t) {
                        var e = t.data, n = e.vote_type, s = e.up_percentum, i = e.down_percentum, a = e.has_voted, o = e.up_vote, r = e.down_vote;
                        this.isHasVote = a, this.voteType = n, this.agreePrecent = s, this.disagreePrecent = i, 
                        this.upVoteText = o, this.downVoteText = r;
                    }
                })
            };
            e.default = b;
        }).call(this, n("543d").default);
    }
}, [ [ "46fb", "common/runtime", "common/vendor" ] ] ]);