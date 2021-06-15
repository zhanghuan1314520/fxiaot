(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/me/advisory" ], {
    2669: function(t, e, n) {},
    "4ecb": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("857f"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    6244: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.messageList.length > 0 ? t.__map(t.messageList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    a0: 1 == e.link_type ? {
                        width: "88rpx",
                        height: "88rpx",
                        "border-radius": "50%"
                    } : null,
                    f0: 1 == e.link_type && e.intention > 0 ? t._f("labelText")(e.intention) : null
                };
            }) : null);
            t._isMounted || (t.e0 = function(e) {
                e.stopPropagation(), t.sureDel = !0;
            }), t.$mp.data = Object.assign({}, {
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
    },
    "73ce": function(t, e, n) {
        "use strict";
        var a = n("2669");
        n.n(a).a;
    },
    "7de8": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6244"), i = n("4ecb");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("73ce");
        var s = n("f0c5"), c = Object(s.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    "857f": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = h(n("a34a")), i = n("2f62"), r = h(n("5a0c")), s = h(n("4ec3")), c = n("b628"), o = n("ca00"), u = h(n("a69c"));
            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function l(t, e, n, a, i, r, s) {
                try {
                    var c = t[r](s), o = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(o) : Promise.resolve(o).then(a, i);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function s(t) {
                            l(r, a, i, s, c, "next", t);
                        }
                        function c(t) {
                            l(r, a, i, s, c, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach(function(e) {
                        g(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function g(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var m = 0, b = 0, v = 0, _ = 0, y = 0, k = 0, w = 0, L = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    robot: function() {
                        n.e("pages/me/components/chatRobot").then(function() {
                            return resolve(n("4e64"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    showEmoji: function() {
                        n.e("pages/me/components/showEmoji").then(function() {
                            return resolve(n("0b1a"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                filters: {
                    labelText: function(t) {
                        switch (Number(t)) {
                          case 1:
                            return "无效";

                          case 2:
                            return "潜在";

                          case 3:
                            return "意向";

                          default:
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        chatList: new Array(10).fill({
                            skeletons: !0
                        }),
                        loading: !0,
                        attentionServiceFlag: !1,
                        page: 1,
                        more: !0,
                        chatDelIndex: "none",
                        sureDel: !1,
                        triggered: !1,
                        scrollIntoView: "",
                        tabTapNumber: 0,
                        dubbleTabTap: function() {},
                        userIdsMap: new Map()
                    };
                },
                computed: p(p(p({}, (0, i.mapState)({
                    MSG_TYPE: function(t) {
                        return t.chat.MSG_TYPE;
                    },
                    MSG_TYPE_TIPS: function(t) {
                        return t.chat.MSG_TYPE_TIPS;
                    },
                    onSingleChat: function(t) {
                        return t.chat.singleChat;
                    },
                    onSendLastMessage: function(t) {
                        return t.chat.sendLastMessage;
                    }
                })), (0, i.mapState)({
                    userInfo: function(t) {
                        return t.user.userInfo;
                    }
                })), {}, {
                    messageList: function() {
                        var t = this;
                        if (this.chatList[0] && this.chatList[0].skeletons) return this.chatList;
                        var e = new Map();
                        return this.chatList.reduce(function(n, a) {
                            return e.has(a.link_id) || (e.set(a.link_id, !0), a.msg_type === t.MSG_TYPE.TEXT && (a.msg_content = (0, 
                            u.default)(a.msg_content)), n.push(a)), n;
                        }, []);
                    }
                }),
                watch: {
                    onSingleChat: function(t) {
                        this.userIdsMap.has(Number(t.user_id)) ? this.replaceChatByUserId(t.user_id, function(e) {
                            return p(p({}, e), {}, {
                                un_read_num: Number(e.un_read_num) + 1,
                                msg_content: t.content.content,
                                msg_type: t.content.type,
                                show_time: (0, r.default)(t.content.created_at).format("MM月DD日 HH:mm")
                            });
                        }) : this.setNewContact();
                    },
                    onSendLastMessage: function() {
                        var t = f(a.default.mark(function t(e) {
                            var n, i, r, s = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = e.type, i = e.content, r = e.receiver_id, "replace" !== n && this.chatList.forEach(function(t, e) {
                                        Number(t.link_id) === Number(r) && (n === s.MSG_TYPE.LABEL ? s.$set(s.chatList[e], "intention", i) : (s.$set(s.chatList[e], "msg_type", n), 
                                        s.$set(s.chatList[e], "msg_content", i)));
                                    }), !this.userIdsMap.has(Number(r))) {
                                        t.next = 6;
                                        break;
                                    }
                                    this.replaceChatByUserId(r, function(t) {
                                        return t;
                                    }), t.next = 8;
                                    break;

                                  case 6:
                                    return t.next = 8, this.setNewContact();

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()
                },
                onShow: function() {
                    this.$store.dispatch("chat/getUnReadMessage"), this.$store.dispatch("chat/getUnReadCustomerMessage");
                },
                onLoad: function() {
                    var t = this;
                    this.$refs.busiNavHeader.setWhiteMode(), this.getChatList().then(function(e) {
                        t.chatList = e;
                    }), s.default.me.attentionServiceNumber().then(function(e) {
                        e.data && (t.attentionServiceFlag = !e.data.subscribe);
                    }), this.dubbleTabTap = c.common.debounce(function() {
                        w = 0;
                    }, 2e3);
                },
                onTabItemTap: function() {
                    var t = this;
                    if ((w += 1) >= 2) {
                        var e = this.chatList.findIndex(function(t) {
                            return t.un_read_num > 0;
                        });
                        this.scrollIntoView = "", this.$nextTick(function() {
                            t.scrollIntoView = e > -1 ? "advisory-content-".concat(e) : "top";
                        });
                    }
                    this.dubbleTabTap();
                },
                methods: p(p({}, (0, i.mapActions)({
                    getUnReadMessage: "chat/getUnReadMessage"
                })), {}, {
                    onScrollToLower: function() {
                        this.more && this.loading && this.loadNext();
                    },
                    pagePullDownRestore: function() {},
                    pagePullDownRefresh: function() {
                        var t = this;
                        this.loading && (this.triggered = !0, this.page = 1, this.more = !0, this.getChatList().then(function(e) {
                            t.chatList = e, t.triggered = !1;
                        }));
                    },
                    emptyFunction: function() {},
                    replaceChatByUserId: function(t, e) {
                        for (var n = 0; n < this.chatList.length; n += 1) {
                            var a = this.chatList[n];
                            if (Number(a.link_id) === Number(t)) {
                                var i = e && e(a) || a, r = this.chatList.findIndex(function(t) {
                                    return 3 === Number(t.contact_type);
                                });
                                this.chatList.splice(n, 1), this.chatList.splice(r, 0, i);
                            }
                        }
                    },
                    setNewContact: function() {
                        var t = f(a.default.mark(function t() {
                            var e, n, i, r = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.chat.contactList(1);

                                  case 2:
                                    (e = t.sent).data && (n = e.data.contacts.find(function(t) {
                                        return !r.userIdsMap.has(Number(t.link_id));
                                    })) && (i = this.chatList.findIndex(function(t) {
                                        return 3 === Number(t.contact_type);
                                    }), this.chatList.splice(i, 0, n), this.userIdsMap.set(Number(n.link_id), !0));

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
                    goSubscribePage: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/subscribeMessage"
                        });
                    },
                    delUserHandle: function() {
                        var t = f(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.chatList[e], t.next = 3, s.default.chat.delContactUser(n.id);

                                  case 3:
                                    t.sent.data ? (this.chatDelIndex = "none", this.chatList.splice(e, 1), this.userIdsMap.delete(n.link_id), 
                                    n.un_read_num > 0 && this.getUnReadMessage(), c.tip.toast("删除成功")) : c.tip.toast("删除失败", "", "none");

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    touchS: function(t) {
                        y = 0, k = 0, m = t.touches[0].clientX, b = t.touches[0].clientY;
                    },
                    touchM: function(t) {
                        v = t.touches[0].clientX, _ = t.touches[0].clientY, y = m - v, k = b - _;
                    },
                    touchEnd: function(t) {
                        var e = t.toString();
                        y > 35 && k < 110 ? (this.sureDel = !1, this.chatDelIndex = this.chatDelIndex === e ? "none" : e) : y < 0 && (this.sureDel = !1, 
                        this.chatDelIndex = "none");
                    },
                    jumpServiceNumberUrl: function() {
                        t.navigateTo({
                            url: (0, o.webview2Url)("/followServices?saleman=".concat(Number(this.userInfo.sales_man_id > 0)))
                        });
                    },
                    toMsgDetail: function(e) {
                        var n = this;
                        if (this.chatDelIndex = "none", e) switch (this.chatList.forEach(function(t, a) {
                            Number(t.link_id) === Number(e.link_id) && e.un_read_num > 0 && (n.$set(n.chatList[a], "un_read_num", 0), 
                            n.getUnReadMessage());
                        }), Number(e.link_type)) {
                          case 1:
                            t.navigateTo({
                                url: "/subPackages/me/pages/chatInterface?user_id=".concat(e.link_id, "&entrance=serve")
                            });
                            break;

                          case 3:
                            1 === Number(e.contact_type) ? 1 === Number(e.link_id) ? t.navigateTo({
                                url: "/subPackages/me/pages/sysMessage?sysId=".concat(e.link_id, "&link_type=").concat(e.link_type)
                            }) : t.navigateTo({
                                url: "/subPackages/me/pages/sysMessage?sysId=".concat(e.link_id, "&link_type=").concat(e.link_type, "&title=").concat(e.link_name)
                            }) : t.navigateTo({
                                url: "/subPackages/news/pages/advisorySys?sysId=".concat(e.link_id, "&jumpType=").concat(e.action, "&link_type=").concat(e.link_type)
                            });
                        }
                    },
                    getChatList: function() {
                        var t = f(a.default.mark(function t() {
                            var e, n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !1, t.next = 3, s.default.chat.contactList(this.page);

                                  case 3:
                                    if (e = t.sent, this.loading = !0, !e.data) {
                                        t.next = 13;
                                        break;
                                    }
                                    if (0 !== e.data.contacts.length) {
                                        t.next = 10;
                                        break;
                                    }
                                    this.more = !1, t.next = 13;
                                    break;

                                  case 10:
                                    return this.page += 1, e.data.contacts.forEach(function(t) {
                                        n.userIdsMap.set(Number(t.link_id), !0);
                                    }), t.abrupt("return", e.data.contacts);

                                  case 13:
                                    return t.abrupt("return", []);

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
                    loadNext: function() {
                        var t = f(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.getChatList();

                                  case 2:
                                    e = t.sent, this.chatList = this.chatList.concat(e);

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
            e.default = L;
        }).call(this, n("543d").default);
    },
    "93b7": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7de8")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "93b7", "common/runtime", "common/vendor" ] ] ]);