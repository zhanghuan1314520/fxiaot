require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/ReplyContainer/Index" ], {
    "481e": function(e, t, n) {},
    8969: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("b91a"), r = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = r.a;
    },
    b896: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("ef24"), r = n("8969");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("c245");
        var s = n("f0c5"), c = Object(s.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = c.exports;
    },
    b91a: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n("2f62"), r = n("b628");
            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], i = !0, r = !1, o = void 0;
                        try {
                            for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done) && (n.push(s.value), 
                            !t || n.length !== t); i = !0) ;
                        } catch (e) {
                            r = !0, o = e;
                        } finally {
                            try {
                                i || null == c.return || c.return();
                            } finally {
                                if (r) throw o;
                            }
                        }
                        return n;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i;
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var l = {
                components: {
                    EmojiIcon: function() {
                        n.e("subPackages/me/components/ChatInterface/ReplyContainer/EmojiIcon").then(function() {
                            return resolve(n("157d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ToolsBar: function() {
                        n.e("subPackages/me/components/ChatInterface/ReplyContainer/ToolsBar").then(function() {
                            return resolve(n("e8bdd"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    More: function() {
                        n.e("subPackages/me/components/ChatInterface/ReplyContainer/More").then(function() {
                            return resolve(n("bb91"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Phrases: function() {
                        n.e("subPackages/me/components/ChatInterface/ReplyContainer/Phrases").then(function() {
                            return resolve(n("2ebf"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }(n("a3fe")).default ],
                props: {
                    projectId: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        isMore: !1,
                        isPhrases: !1,
                        isEmoji: !1,
                        content: "",
                        cursor: 0
                    };
                },
                computed: a(a({}, (0, i.mapState)({
                    MSG_TYPE: function(e) {
                        return e.chat.MSG_TYPE;
                    },
                    pendingInviteMsg: function(e) {
                        return e.chat.pendingInviteMsg;
                    }
                })), {}, {
                    isFocus: function() {
                        return this.content.trim().length > 0;
                    },
                    replyFocus: function() {
                        return [ this.isMore, this.isPhrases, this.isEmoji ];
                    }
                }),
                watch: {
                    replyFocus: function(e) {
                        var t = o(e, 3), n = t[0], i = t[1], r = t[2];
                        this.setReplyFocus(n || i || r);
                    },
                    pendingInviteMsg: function() {
                        this.isMore = !1, this.isPhrases = !1, this.$emit("onSend", this.MSG_TYPE.INVITE, this.pendingInviteMsg);
                    }
                },
                methods: a(a({}, (0, i.mapMutations)({
                    setReplyFocus: "chat/SET_REPLY_FOCUS"
                })), {}, {
                    emptyFunction: function() {},
                    onConfirm: function() {
                        this.sendHandle();
                    },
                    sendPictrueHandle: function(e) {
                        this.isMore = !1, this.isPhrases = !1, this.$emit("onSend", this.MSG_TYPE.IMG, e);
                    },
                    sendLabelHandle: function(e) {
                        this.isMore = !1, this.isPhrases = !1, this.$emit("onSend", this.MSG_TYPE.LABEL, e);
                    },
                    clickPhraseHandle: function() {
                        this.isMore = !1, this.isEmoji = !1, this.isPhrases = !this.isPhrases;
                    },
                    sendPhraseHandle: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.isMore = !1, this.isPhrases = !1, this.$emit("onSend", this.MSG_TYPE.TEXT, e.trim());
                    },
                    insertemoji: function(e) {
                        var t = e.emotionName, n = this.cursor, i = this.content, r = i.slice(0, n) + t + i.slice(n);
                        this.content = r, this.cursor = n + t.length;
                    },
                    clickLocationHandle: function() {
                        var t = this;
                        e.chooseLocation({
                            success: function(e) {
                                var n = {
                                    name: e.name,
                                    address: e.address,
                                    latitude: e.latitude,
                                    longitude: e.longitude
                                };
                                t.isMore = !1, t.isPhrases = !1, t.$emit("onSend", t.MSG_TYPE.MAP, JSON.stringify(n));
                            }
                        });
                    },
                    clickInviteHandle: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInvitation?receiver_id=".concat(this.receiveUserInfo.session_id)
                        });
                    },
                    moreHandle: function() {
                        this.isMore = !this.isMore, this.isPhrases = !1, this.isEmoji = !1;
                    },
                    emojiHandle: function() {
                        this.isMore = !1, this.isPhrases = !1, this.isEmoji = !this.isEmoji;
                    },
                    getCursor: function(e) {
                        this.cursor = e.detail.cursor || 0;
                    },
                    sendHandle: function() {
                        var e = this.content.trim();
                        e < 1 ? r.tip.toast("请输入你要发送的内容") : (this.isMore = !1, this.isPhrases = !1, this.isEmoji = !1, 
                        this.content = "", this.$emit("onSend", this.MSG_TYPE.TEXT, e));
                    },
                    hideHandle: function() {
                        this.isMore = !1, this.isPhrases = !1, this.isEmoji = !1;
                    }
                })
            };
            t.default = l;
        }).call(this, n("543d").default);
    },
    c245: function(e, t, n) {
        "use strict";
        var i = n("481e");
        n.n(i).a;
    },
    ef24: function(e, t, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/ReplyContainer/Index-create-component", {
    "subPackages/me/components/ChatInterface/ReplyContainer/Index-create-component": function(e, t, n) {
        n("543d").createComponent(n("b896"));
    }
}, [ [ "subPackages/me/components/ChatInterface/ReplyContainer/Index-create-component" ] ] ]);