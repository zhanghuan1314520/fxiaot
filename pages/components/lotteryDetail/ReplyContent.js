(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/ReplyContent" ], {
    "0261": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "5dc1": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("c0bf"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    },
    "924a": function(t, e, n) {},
    c0bf: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("ca00"), o = {
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
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    WhiteSpace: function() {
                        n.e("pages/components/lotteryDetail/WhiteSpace").then(function() {
                            return resolve(n("c024e"));
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
                            return !1;
                        }
                    },
                    project_name: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        levelMap: {
                            3: "https://imgcdn.huanjutang.com/assets/img/2020720114111318.png",
                            2: "https://imgcdn.huanjutang.com/assets/img/2020720114114059.png",
                            1: "https://imgcdn.huanjutang.com/assets/img/2020720114117887.png"
                        },
                        likeNum: 0,
                        liked: !1
                    };
                },
                computed: {
                    fromTime: function() {
                        return (0, i.dayjs)(this.item.display_time).fromNow();
                    }
                },
                watch: {
                    item: {
                        handler: function(t) {
                            this.likeNum = t.count && t.count ? Number(t.count) : 0, this.liked = !1;
                        },
                        deep: !0
                    }
                },
                methods: {
                    delCommentHandle: function(t) {
                        this.$emit("delCommentQuery", t);
                    },
                    handleContentClick: function() {
                        this.$emit("reply", {
                            name: this.item.name,
                            id: this.item.id
                        });
                    },
                    goDetail: function() {
                        t.navigateTo({
                            url: "/subPackages/discovery/pages/commentDetail?id=".concat(this.item.id, "&postId=").concat(this.item.postId)
                        });
                    },
                    handleGoUserPage: function() {
                        Number(this.item.user_id) && Number(this.item.sales_man_id) ? t.navigateTo({
                            url: this.jumpUrl + this.item.user_id
                        }) : this.previewImg(this.item.original_avatar_url);
                    },
                    handleAddLike: function(t, e) {
                        this.liked || (this.liked = !0, this.likeNum = Number(this.likeNum) + 1, this.$emit("like", t, e));
                    },
                    formatUnit: function(t) {
                        return (0, i.formatUnitTenThousand)(t);
                    },
                    previewImg: function(e) {
                        "string" == typeof e && "" !== e && t.previewImage({
                            urls: [ e ]
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    c221: function(t, e, n) {
        "use strict";
        var i = n("924a");
        n.n(i).a;
    },
    e861: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("0261"), o = n("5dc1");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("c221");
        var u = n("f0c5"), c = Object(u.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/ReplyContent-create-component", {
    "pages/components/lotteryDetail/ReplyContent-create-component": function(t, e, n) {
        n("543d").createComponent(n("e861"));
    }
}, [ [ "pages/components/lotteryDetail/ReplyContent-create-component" ] ] ]);