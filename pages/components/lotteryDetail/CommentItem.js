(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/CommentItem" ], {
    "0e6d": function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                e.stopPropagation(), t.expand = !0;
            }, t.e1 = function(e) {
                e.stopPropagation(), t.expand = !1;
            });
        }, i = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "1c45": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("ca00"), i = {
                components: {
                    Report: function() {
                        n.e("pages/components/lotteryDetail/Report").then(function() {
                            return resolve(n("41de"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CommentItemContent: function() {
                        n.e("pages/components/lotteryDetail/CommentItemContent").then(function() {
                            return resolve(n("09d7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    WhiteSpace: function() {
                        n.e("pages/components/lotteryDetail/WhiteSpace").then(function() {
                            return resolve(n("c024e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CommentItem: function() {
                        Promise.resolve().then(function() {
                            return resolve(n("1db0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }(n("4919")).default ],
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    hideTip: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    border: {
                        type: Boolean,
                        default: function() {
                            return !0;
                        }
                    },
                    next: {
                        type: Boolean,
                        default: function() {
                            return !0;
                        }
                    },
                    jumpToList: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    showReply: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    updateId: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    project_id: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    lottery_id: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    project_name: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    cover: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        levelMap: {
                            3: "https://imgcdn.huanjutang.com/assets/img/20213251354548081.png",
                            2: "https://imgcdn.huanjutang.com/assets/img/20213251355218081.png",
                            1: "https://imgcdn.huanjutang.com/assets/img/20213251355298081.png"
                        },
                        likeNum: 0,
                        liked: !1,
                        repliesList: [],
                        page: 0,
                        expand: !1,
                        showedNum: 0
                    };
                },
                computed: {
                    hasReply: function() {
                        return this.item.stats && this.item.stats.replies && !this.showReply;
                    },
                    height: function() {
                        return this.hasReply ? "auto" : "32rpx";
                    },
                    marginTop: function() {
                        return this.hasReply ? "8rpx" : "0";
                    },
                    fromTime: function() {
                        return (0, o.dayjs)(this.item.display_time).fromNow();
                    }
                },
                watch: {
                    item: {
                        handler: function(t) {
                            this.likeNum = t.count && t.count ? Number(t.count) : 0, this.liked = 1 === Number(t.is_like);
                        },
                        deep: !0,
                        immediate: !0
                    },
                    updateId: function(t) {
                        t === this.item.id && this.queryReply();
                    }
                },
                methods: {
                    delCommentHandle: function(t) {
                        this.$emit("delCommentQuery", t);
                    },
                    handleContentClick: function() {
                        this.jumpToList ? t.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(this.project_id, "&lottery_id=").concat(this.lottery_id, "&id=").concat(this.item.id, "&project_name=").concat(this.project_name)
                        }) : this.next ? this.goDetail() : t.navigateTo({
                            url: "/subPackages/project/pages/projectCommentDetail?project_id=".concat(this.project_id, "&lottery_id=").concat(this.lottery_id, "&id=").concat(this.item.pid, "&project_name=").concat(this.project_name)
                        });
                    },
                    goDetail: function(e) {
                        t.navigateTo({
                            url: "/subPackages/project/pages/projectCommentDetail?project_id=".concat(this.project_id, "&lottery_id=").concat(this.lottery_id, "&id=").concat(this.item.id, "&project_name=").concat(this.project_name, "&triggerFocus=").concat(e)
                        });
                    },
                    handleGoUserPage: function() {
                        Number(this.item.user_id) && Number(this.item.sales_man_id) ? t.navigateTo({
                            url: this.jumpUrl + this.item.user_id
                        }) : this.previewImg(this.item.original_avatar_url);
                    },
                    handleReply: function(e) {
                        this.jumpToList ? t.navigateTo({
                            url: "/subPackages/project/pages/project_comment?project_id=".concat(this.project_id, "&lottery_id=").concat(this.lottery_id, "&id=").concat(this.item.id, "&project_name=").concat(this.project_name)
                        }) : this.$emit("reply", e);
                    },
                    handleAddLike: function(t, e) {
                        this.liked ? (this.liked = !1, this.likeNum = Number(this.likeNum) - 1) : (this.liked = !0, 
                        this.likeNum = Number(this.likeNum) + 1), this.$emit("like", t, e);
                    },
                    formatUnit: function(t) {
                        return (0, o.formatUnitTenThousand)(t);
                    },
                    previewImg: function(e) {
                        "string" == typeof e && "" !== e && t.previewImage({
                            urls: [ e ]
                        });
                    },
                    handleClick: function() {}
                }
            };
            e.default = i;
        }).call(this, n("543d").default);
    },
    "1db0": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("0e6d"), i = n("3a1d");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("997f");
        var c = n("f0c5"), r = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "3a1d": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("1c45"), i = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    },
    9903: function(t, e, n) {},
    "997f": function(t, e, n) {
        "use strict";
        var o = n("9903");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/CommentItem-create-component", {
    "pages/components/lotteryDetail/CommentItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("1db0"));
    }
}, [ [ "pages/components/lotteryDetail/CommentItem-create-component" ] ] ]);