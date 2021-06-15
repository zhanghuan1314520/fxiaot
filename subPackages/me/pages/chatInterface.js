require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/chatInterface" ], {
    1817: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("5bf7"), o = n.n(s);
        for (var a in s) "default" !== a && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(a);
        t.default = o.a;
    },
    "1d56": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("b4e6")).default);
        }).call(this, n("543d").createPage);
    },
    3335: function(e, t, n) {
        "use strict";
        var s = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return s;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "5bf7": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = c(n("a34a")), o = n("2f62"), a = c(n("4ec3")), r = n("b628"), i = c(n("a69c"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], s = !0, o = !1, a = void 0;
                        try {
                            for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (n.push(r.value), 
                            !t || n.length !== t); s = !0) ;
                        } catch (e) {
                            o = !0, a = e;
                        } finally {
                            try {
                                s || null == i.return || i.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return n;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, s = new Array(t); n < t; n++) s[n] = e[n];
                return s;
            }
            function h(e, t, n, s, o, a, r) {
                try {
                    var i = e[a](r), c = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(c) : Promise.resolve(c).then(s, o);
            }
            function f(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(s, o) {
                        var a = e.apply(t, n);
                        function r(e) {
                            h(a, s, o, r, i, "next", e);
                        }
                        function i(e) {
                            h(a, s, o, r, i, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, s);
                }
                return n;
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach(function(t) {
                        m(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var g = function() {
                n.e("components/UILayout/BusiDialog").then(function() {
                    return resolve(n("6bfa"));
                }.bind(null, n)).catch(n.oe);
            }, v = {
                components: {
                    CallPhoneDialog: g,
                    TipsDailog: g,
                    HeaderNav: function() {
                        Promise.all([ n.e("common/vendor"), n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/HeaderNav") ]).then(function() {
                            return resolve(n("51ad"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TextMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/Text") ]).then(function() {
                            return resolve(n("e240"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImgMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/Img") ]).then(function() {
                            return resolve(n("e37e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SystemMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/System") ]).then(function() {
                            return resolve(n("b380"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AutoReplyMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/AutoReply") ]).then(function() {
                            return resolve(n("f606"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    NotifyMessage: function() {
                        n.e("subPackages/me/components/ChatInterface/Messages/Notify").then(function() {
                            return resolve(n("c0ca"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    InviteMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/Invite") ]).then(function() {
                            return resolve(n("87f2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    MapMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/Map") ]).then(function() {
                            return resolve(n("c83c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AskCallMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/AskCall") ]).then(function() {
                            return resolve(n("f665"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AskWeChatMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/AskWeChat") ]).then(function() {
                            return resolve(n("41d5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ResCallMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/ResCall") ]).then(function() {
                            return resolve(n("b37d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ResWeChatMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/ResWeChat") ]).then(function() {
                            return resolve(n("07aa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CardMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/Card") ]).then(function() {
                            return resolve(n("f9ad"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ApprMessage: function() {
                        n.e("subPackages/me/components/ChatInterface/Messages/Appr").then(function() {
                            return resolve(n("3740"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BuysMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/Buys") ]).then(function() {
                            return resolve(n("e309"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SendPhoneMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/SendPhone") ]).then(function() {
                            return resolve(n("8b49"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    LabelMessage: function() {
                        n.e("subPackages/me/components/ChatInterface/Messages/Label").then(function() {
                            return resolve(n("4451"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ContinueWaitMessage: function() {
                        n.e("subPackages/me/components/ChatInterface/Messages/ContinueWait").then(function() {
                            return resolve(n("f1d9"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AutoSendMessage: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/Messages/AutoSend") ]).then(function() {
                            return resolve(n("2d43"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ReplyContainer: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/components/ChatInterface/ReplyContainer/Index") ]).then(function() {
                            return resolve(n("b896"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        user_id: 0,
                        project_id: 0,
                        historyList: [],
                        receiveUserInfo: {},
                        more: !1,
                        loading: !1,
                        firstLoad: !1,
                        scrollIntoView: "",
                        lastMessage: null,
                        callDialogVisible: !1,
                        callDialogContent: "电话拨通后请告知置业顾问您来自【杭州房小团】，可优先享受顾问的咨询和服务",
                        tipsDialogVisible: !1
                    };
                },
                computed: p(p(p({}, (0, o.mapState)({
                    MSG_TYPE: function(e) {
                        return e.chat.MSG_TYPE;
                    },
                    onSingleChat: function(e) {
                        return e.chat.singleChat;
                    },
                    onSystemChat: function(e) {
                        return e.chat.systemChat;
                    },
                    replyFocus: function(e) {
                        return e.chat.replyFocus;
                    },
                    callPhoneDialog: function(e) {
                        return e.chat.callPhoneDialog;
                    },
                    tipsDialog: function(e) {
                        return e.chat.tipsDialog;
                    },
                    refreshPhrases: function(e) {
                        return e.chat.refreshPhrases;
                    }
                })), {}, {
                    onChatMessage: function() {
                        return this.onSingleChat || this.onSystemChat;
                    }
                }, (0, o.mapState)({
                    userInfo: function(e) {
                        return e.user.userInfo;
                    }
                })), {}, {
                    messageList: function() {
                        var e = this, t = new Map();
                        return this.historyList.reduce(function(n, s) {
                            return t.has(s.id) || (t.set(s.id, !0), s.type === e.MSG_TYPE.TEXT && (s.content = (0, 
                            i.default)(s.content)), n.push(s)), n;
                        }, []);
                    },
                    headerHeight: function() {
                        return "".concat(this.receiveUserInfo.is_sales_man > 0 ? 300 : 124, "rpx");
                    },
                    tipsDialogContent: function() {
                        return this.tipsDialog.content;
                    }
                }),
                watch: {
                    onChatMessage: function(e) {
                        if (e) {
                            var t = e.content;
                            if (String(t.sender_id) !== String(this.user_id)) return;
                            a.default.chat.setReadMsg(1, this.user_id), this.historyList.push(t), this.pageScrollBottom();
                        }
                    },
                    callPhoneDialog: function(e) {
                        var t = e.status;
                        this.callDialogVisible = t;
                    },
                    tipsDialog: function(e) {
                        var t = e.status;
                        this.tipsDialogVisible = t;
                    },
                    refreshPhrases: function() {
                        var e = this;
                        a.default.chat.getUserInfo(this.user_id, this.project_id).then(function(t) {
                            t.data && (e.receiveUserInfo = t.data, e.project_id = e.project_id || e.receiveUserInfo.project_id, 
                            e.setReceiveUserInfo(e.receiveUserInfo));
                        });
                    }
                },
                onLoad: function(e) {
                    var t = this;
                    this.user_id = e.user_id, this.project_id = e.project_id || 0, this.chatInit().then(function() {
                        t.$nextTick(function() {
                            t.firstLoad = !0;
                        });
                    });
                },
                onUnload: function() {
                    this.setReceiveUserInfo({});
                },
                methods: p(p(p({}, (0, o.mapMutations)({
                    setSendUserInfo: "chat/SET_SEND_USER_INFO",
                    setReceiveUserInfo: "chat/SET_RECEIVER_USER_INFO"
                })), (0, o.mapActions)({
                    setSendLastMessage: "chat/setSendLastMessage",
                    allowCallPhoneDialog: "chat/allowCallPhoneDialog"
                })), {}, {
                    chatInit: function() {
                        var e = f(s.default.mark(function e() {
                            var t, n, o, r, i;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.chat.getUserInfo(this.user_id, this.project_id);

                                  case 2:
                                    if (t = e.sent, this.checkAuthorzation(), !t.data) {
                                        e.next = 21;
                                        break;
                                    }
                                    if (this.receiveUserInfo = t.data, this.project_id = this.project_id || this.receiveUserInfo.project_id, 
                                    this.setReceiveUserInfo(this.receiveUserInfo), this.setSendUserInfo(this.userInfo), 
                                    !this.receiveUserInfo.is_send_card) {
                                        e.next = 18;
                                        break;
                                    }
                                    return e.next = 12, Promise.all([ this.send({
                                        content: "".concat(this.receiveUserInfo.project_name, "||").concat(this.receiveUserInfo.project_id, "||").concat(this.receiveUserInfo.project_cover, "||").concat(this.receiveUserInfo.project_area, "||").concat(this.receiveUserInfo.project_price),
                                        type: this.MSG_TYPE.CARD
                                    }), this.send({
                                        content: "你好，我刚浏览了这个楼盘，想咨询一些具体情况",
                                        type: this.MSG_TYPE.AUTO_SEND
                                    }) ]);

                                  case 12:
                                    n = e.sent, o = u(n, 2), r = o[0], i = o[1], r.data && this.historyList.push(r.data), 
                                    i.data && this.historyList.push(i.data);

                                  case 18:
                                    return a.default.chat.setReadMsg(1, this.user_id), e.next = 21, this.loadNext();

                                  case 21:
                                    return e.next = 23, this.pageScrollBottom();

                                  case 23:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    onScrollToUpper: function() {
                        !this.loading && this.more && this.loadNext(!0);
                    },
                    emptyFunction: function() {},
                    checkAuthorzation: function() {
                        if (!this.userInfo.phone) {
                            var t = "/subPackages/me/pages/chatInterface?user_id=".concat(this.user_id, "&project_id=").concat(this.project_id);
                            e.redirectTo({
                                url: "/subPackages/tools/pages/login?direct=".concat(encodeURIComponent(t))
                            });
                        }
                    },
                    chooseHandle: function(t, n, s) {
                        var o = this, a = "agreed" === s ? 1 : 0;
                        e.showLoading({
                            title: "确定中"
                        }), this.send({
                            type: this.MSG_TYPE.RES_CALL,
                            content: "",
                            is_agreed: a,
                            parent_id: this.historyList[t].id
                        }).then(function() {
                            o.historyList[t].is_operated = 1, o.historyList[t].is_agreed = a;
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    askPhoneHandle: function() {
                        var e = this;
                        a.default.chat.agreeAsk(this.user_id).then(function(t) {
                            t.data && t.data.msg ? r.tip.showModal(t.data.msg) : e.send({
                                content: "",
                                type: e.MSG_TYPE.ASK_CALL
                            }).then(function(t) {
                                t && (e.historyList.push(t), e.pageScrollBottom());
                            });
                        });
                    },
                    askWeixinHandle: function() {
                        var e = this;
                        this.send({
                            type: this.MSG_TYPE.ASK_WECHAT,
                            content: ""
                        }).then(function(t) {
                            t && (e.historyList.push(t), e.pageScrollBottom());
                        });
                    },
                    replaceHandle: function() {
                        var t = this;
                        e.showLoading({
                            title: "更换中",
                            mask: !0
                        }), a.default.chat.chatChangeSalesman(this.user_id, this.project_id).then(function(n) {
                            e.hideLoading(), n.data ? (t.more = !1, t.loading = !1, t.firstLoad = !1, t.scrollIntoView = "", 
                            t.lastMessage = null, t.historyList = [], t.user_id = n.data.session_id, t.project_id = n.data.project_id, 
                            t.chatInit().then(function() {
                                t.$nextTick(function() {
                                    t.firstLoad = !0;
                                });
                            }), t.setSendLastMessage({
                                type: "replace",
                                receiver_id: n.data.session_id,
                                content: ""
                            })) : r.tip.toast("更换失败", "", "none");
                        });
                    },
                    sendStarHandle: function(t, n) {
                        var s = this, o = this.historyList[t];
                        n && o && (e.showLoading({
                            title: "评价中",
                            mask: !0
                        }), a.default.chat.setEvaluationScore(o.id, o.sender_id, n).then(function(o) {
                            e.hideLoading(), o.data ? (r.tip.toast("评价成功"), s.$set(s.historyList[t], "content", n)) : r.tip.toast("匿名评价失败", "", "none");
                        }));
                    },
                    waitHandle: function() {
                        var e = this;
                        this.send({
                            type: this.MSG_TYPE.CONTINUE_WAIT,
                            content: "房小团已经在加急催置业顾问尽快回复消息啦，请您再耐心等待"
                        }).then(function(t) {
                            t && (e.historyList.push(t), e.pageScrollBottom());
                        });
                    },
                    askCallMeHandle: function() {
                        var e = this;
                        this.send({
                            type: this.MSG_TYPE.SEND_PHONE,
                            content: this.userInfo.phone
                        }).then(function(t) {
                            t && (e.historyList.push(t), e.pageScrollBottom());
                        });
                    },
                    sendMessageHandle: function(e, t) {
                        var n, s = this, o = (m(n = {}, this.MSG_TYPE.TEXT, function() {
                            s.send({
                                type: s.MSG_TYPE.TEXT,
                                content: t
                            }).then(function(e) {
                                e && (s.historyList.push(e), s.pageScrollBottom());
                            });
                        }), m(n, this.MSG_TYPE.IMG, function() {
                            s.send({
                                type: s.MSG_TYPE.IMG,
                                content: t
                            }).then(function(e) {
                                e && (s.historyList.push(e), s.pageScrollBottom());
                            });
                        }), m(n, this.MSG_TYPE.INVITE, function() {
                            s.send(p({
                                type: s.MSG_TYPE.INVITE,
                                content: ""
                            }, t)).then(function(e) {
                                e && (r.tip.toast("邀请成功"), s.historyList.push(e), s.pageScrollBottom());
                            });
                        }), m(n, this.MSG_TYPE.MAP, function() {
                            s.send({
                                type: s.MSG_TYPE.MAP,
                                content: t
                            }).then(function(e) {
                                e && (s.historyList.push(e), s.pageScrollBottom());
                            });
                        }), m(n, this.MSG_TYPE.LABEL, function() {
                            s.send({
                                type: s.MSG_TYPE.LABEL,
                                content: t
                            }).then(function(e) {
                                e && (s.historyList.push(e), s.pageScrollBottom());
                            });
                        }), m(n, "default", function() {}), n);
                        (o[e] || o.default)();
                    },
                    getNetWork: function() {
                        var e = f(s.default.mark(function e() {
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new Promise(function(e) {
                                        wx.getNetworkType({
                                            success: function(t) {
                                                e(t);
                                            },
                                            fail: function() {
                                                e({});
                                            }
                                        });
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    send: function() {
                        var e = f(s.default.mark(function e(t) {
                            var n, o;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this.getNetWork();

                                  case 2:
                                    if ("none" !== e.sent.networkType) {
                                        e.next = 6;
                                        break;
                                    }
                                    return r.tip.toast("信息发送失败，请您尝试再次发送", "", "none"), e.abrupt("return", {});

                                  case 6:
                                    return n = p({
                                        receiver_id: this.user_id,
                                        project_id: this.project_id
                                    }, t), e.next = 9, a.default.chat.send(n);

                                  case 9:
                                    return (o = e.sent) && o.data && this.setSendLastMessage(n), e.abrupt("return", o.data);

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var e = f(s.default.mark(function e(t) {
                            var n, o, r;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.loading = !0, n = "", t && this.historyList.length > 0 && (n = this.historyList[0].id), 
                                    e.next = 5, a.default.chat.history(this.user_id, n);

                                  case 5:
                                    (o = e.sent).data && (this.more = o.data.length > 0, (r = o.data.filter(function(e) {
                                        return 8 !== Math.floor(e.type);
                                    })).length > 0 && (this.historyList = r.concat(this.historyList))), this.loading = !1;

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    pageScrollBottom: function() {
                        var e = this;
                        return this.$nextTick(function() {
                            e.scrollIntoView = "chatInterface__item-".concat(e.messageList.length - 1);
                        });
                    }
                })
            };
            t.default = v;
        }).call(this, n("543d").default);
    },
    a186: function(e, t, n) {
        "use strict";
        var s = n("ea8f");
        n.n(s).a;
    },
    b4e6: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("3335"), o = n("1817");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("a186");
        var r = n("f0c5"), i = Object(r.a)(o.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        t.default = i.exports;
    },
    ea8f: function(e, t, n) {}
}, [ [ "1d56", "common/runtime", "common/vendor" ] ] ]);