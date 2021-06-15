(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/CommentItemContent" ], {
    "09d7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f4f7"), r = n("10ed");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("c08f");
        var u = n("f0c5"), a = Object(u.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    },
    "10ed": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("29cc"), r = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    "29cc": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("a34a")), r = n("ca00"), i = n("b628"), u = a(n("4919"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, o, r, i, u) {
                try {
                    var a = t[i](u), c = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(c) : Promise.resolve(c).then(o, r);
            }
            var s = n("f4fd").getUserInfo, f = {
                mixins: [ u.default ],
                props: {
                    content: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    mentions: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    user_id: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    sales_man_id: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    commentId: {
                        type: Number,
                        default: 0
                    },
                    isNeedDetele: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        expand: !1,
                        showToggle: !1
                    };
                },
                onReady: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var n = e;
                        t.createSelectorQuery().in(e).select(".text").boundingClientRect(function(t) {
                            t = t || {}, n.showToggle = t.height + 10 > (0, r.transformRpx)(192);
                        }).exec();
                    });
                },
                mounted: function() {
                    var t = s();
                    this.userId = t.id;
                },
                methods: {
                    longPress: function() {
                        var t = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(o, r) {
                                    var i = t.apply(e, n);
                                    function u(t) {
                                        c(i, o, r, u, a, "next", t);
                                    }
                                    function a(t) {
                                        c(i, o, r, u, a, "throw", t);
                                    }
                                    u(void 0);
                                });
                            };
                        }(o.default.mark(function t() {
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!this.isNeedDetele || Math.floor(this.user_id) !== Math.floor(this.userId)) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.next = 3, i.tip.confirm("你确定删除此条评论吗？");

                                  case 3:
                                    t.sent && this.$emit("delComment", this.commentId);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    toggleExpand: function() {
                        this.expand = !this.expand;
                    },
                    handleGoUserPage: function() {
                        this.user_id && 0 !== this.user_id ? t.navigateTo({
                            url: this.jumpUrl + this.user_id
                        }) : this.previewImg(this.defaultAvatar);
                    },
                    previewImg: function(e) {
                        "string" == typeof e && "" !== e && t.previewImage({
                            urls: [ e ]
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    "86ea": function(t, e, n) {},
    c08f: function(t, e, n) {
        "use strict";
        var o = n("86ea");
        n.n(o).a;
    },
    f4f7: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/CommentItemContent-create-component", {
    "pages/components/lotteryDetail/CommentItemContent-create-component": function(t, e, n) {
        n("543d").createComponent(n("09d7"));
    }
}, [ [ "pages/components/lotteryDetail/CommentItemContent-create-component" ] ] ]);