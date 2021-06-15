require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/advisorySys" ], {
    "1aa6": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("cdfc")).default);
        }).call(this, n("543d").createPage);
    },
    "2dd3": function(t, e, n) {
        "use strict";
        var a = n("85eb");
        n.n(a).a;
    },
    "7f7e": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "85eb": function(t, e, n) {},
    "87f9": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d1fd"), r = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = r.a;
    },
    cdfc: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7f7e"), r = n("87f9");
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        n("2dd3");
        var u = n("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    d1fd: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3")), s = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, r, s, u) {
                try {
                    var i = t[s](u), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(o) : Promise.resolve(o).then(a, r);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var s = t.apply(e, n);
                        function u(t) {
                            i(s, a, r, u, o, "next", t);
                        }
                        function o(t) {
                            i(s, a, r, u, o, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var c = n("f4fd"), f = 0, d = 0, l = 0, h = 0, p = 0, m = 0, v = {
                data: function() {
                    return {
                        default_avatar: "https://imgcdn.huanjutang.com/assets/img/20190806/5d4948aa7c92c.png",
                        more: !0,
                        commentList: [],
                        loading: !0,
                        page: 1,
                        type: 1,
                        sysUserId: 0,
                        showCommentInput: !1,
                        commentInput: {
                            val: "",
                            place: "我来说两句…",
                            pid: "",
                            focus: !0
                        },
                        userName: "",
                        fixedCommentBottom: 0,
                        jumpType: "",
                        query_arr: null,
                        msgType: "",
                        chatDelIndex: "none",
                        sureDel: !1,
                        typeMap: {
                            1: "个人名片",
                            2: "楼盘评论",
                            3: "提问",
                            4: "回答",
                            5: "回答评论",
                            6: "话题讨论",
                            7: "讨论评论",
                            10: "动态",
                            11: "发现评论",
                            12: "发现回复"
                        }
                    };
                },
                onPullDownRefresh: function() {
                    var e = o(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

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
                onReachBottom: function() {
                    var t = o(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

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
                onLoad: function() {
                    var e = o(a.default.mark(function e(n) {
                        var s, u, i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.sysUserId = n.sysId, s = n.link_type, this.jumpType = n.jumpType, u = "like" === this.jumpType ? "我收到的点赞" : "我收到的回复", 
                                t.setNavigationBarTitle({
                                    title: u
                                }), r.default.chat.setReadMsg(s, this.sysUserId).then(), i = c.getUserInfo(), this.userName = i.nick_name, 
                                e.next = 10, this.reload();

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    toMsgDetail: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    removeItem: function() {
                        var t = o(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.deleteSystemMsg(e.notice_id, e.notice_type_id);

                                  case 2:
                                    if (!(n = t.sent) || 0 !== n.code) {
                                        t.next = 10;
                                        break;
                                    }
                                    return this.chatDelIndex = "none", t.next = 7, this.reload();

                                  case 7:
                                    s.tip.toast("删除成功"), t.next = 11;
                                    break;

                                  case 10:
                                    s.tip.toast("删除失败", "", "none");

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    delSysButton: function() {
                        this.sureDel = !0;
                    },
                    touchS: function(t) {
                        p = 0, m = 0, f = t.touches[0].clientX, d = t.touches[0].clientY;
                    },
                    touchM: function(t) {
                        l = t.touches[0].clientX, h = t.touches[0].clientY, p = f - l, m = d - h;
                    },
                    touchEnd: function(t) {
                        var e = t.toString();
                        p > 35 && m < 110 ? (this.sureDel = !1, this.chatDelIndex = this.chatDelIndex === e ? "none" : e) : p < 0 && (this.sureDel = !1, 
                        this.chatDelIndex = "none");
                    },
                    toSalesManDetail: function(e) {
                        var n = this.commentList[e];
                        if (n.salesman_id > 0) t.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(n.sender_id)
                        }); else {
                            if (!n.avatar_url) return;
                            t.previewImage({
                                urls: [ n.avatar_url ]
                            });
                        }
                    },
                    reload: function() {
                        var t = o(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, this.page = 1, this.more = !0, this.commentList = [], 
                                    t.next = 6, this.loadNext();

                                  case 6:
                                    this.loading = !1;

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = o(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.chat.systemInfo(this.sysUserId, this.page);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.commentList = this.commentList.concat(e.data.data));

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
                }
            };
            e.default = v;
        }).call(this, n("543d").default);
    }
}, [ [ "1aa6", "common/runtime", "common/vendor" ] ] ]);