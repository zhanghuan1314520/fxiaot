require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/BottomOperate" ], {
    "319b0": function(t, n, e) {
        "use strict";
        var o = e("9b23");
        e.n(o).a;
    },
    9796: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("a102"), u = e("a7c2");
        for (var i in u) "default" !== i && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(i);
        e("319b0");
        var r = e("f0c5"), a = Object(r.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = a.exports;
    },
    "9b23": function(t, n, e) {},
    a102: function(t, n, e) {
        "use strict";
        var o = function() {
            var t = this, n = (t.$createElement, t._self._c, !t.rightContent && t.comment.show && t.comment.num ? t.formatUnit(t.comment.num) : null), e = !t.rightContent && t.like.show && t.likeNum ? t.formatUnit(t.likeNum) : null, o = !t.rightContent && t.answer.show && t.answer.num ? t.formatUnit(t.answer.num) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    m1: e,
                    m2: o
                }
            });
        }, u = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    },
    a7c2: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("f844"), u = e.n(o);
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        n.default = u.a;
    },
    f844: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(e("4ec3")), u = e("ca00"), i = {
            components: {
                Authorization: function() {
                    e.e("components/Authorization").then(function() {
                        return resolve(e("5326"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                marginTop: {
                    type: String,
                    default: function() {
                        return "32rpx";
                    }
                },
                leftContent: {
                    type: Object,
                    default: function() {
                        return {
                            content: "",
                            extra: ""
                        };
                    }
                },
                comment: {
                    type: Object,
                    default: function() {
                        return {
                            show: !0,
                            num: 0
                        };
                    }
                },
                like: {
                    type: Object,
                    default: function() {
                        return {
                            show: !0,
                            num: 0
                        };
                    }
                },
                answer: {
                    type: Object,
                    default: function() {
                        return {
                            show: !0,
                            num: 0
                        };
                    }
                },
                rightContent: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                type: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                postId: {
                    type: String,
                    default: function() {
                        return "";
                    }
                }
            },
            data: function() {
                return {
                    isLike: !1,
                    likeNum: 0
                };
            },
            watch: {
                like: {
                    handler: function(t) {
                        this.likeNum = t.num, this.isLike = !1;
                    },
                    deep: !0,
                    immediate: !0
                }
            },
            methods: {
                handdleLike: function() {
                    this.isLike || (o.default.discovery.updatePostStats({
                        postId: this.postId,
                        field: "likes"
                    }).then(), this.isLike = !0, this.likeNum += 1);
                },
                handleComment: function() {
                    this.$emit("comment");
                },
                formatUnit: function(t) {
                    return (0, u.formatUnitTenThousand)(t);
                }
            }
        };
        n.default = i;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/BottomOperate-create-component", {
    "subPackages/news/components/BottomOperate-create-component": function(t, n, e) {
        e("543d").createComponent(e("9796"));
    }
}, [ [ "subPackages/news/components/BottomOperate-create-component" ] ] ]);