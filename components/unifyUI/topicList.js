(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/unifyUI/topicList" ], {
    "0c2b": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("8ec7"), c = e("f86d");
        for (var i in c) "default" !== i && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(i);
        e("fc87");
        var s = e("f0c5"), u = Object(s.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "8ec7": function(n, t, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {});
    },
    9720: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("4ec3")), c = {
                components: {
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
                    }
                },
                data: function() {
                    return {
                        banners: []
                    };
                },
                computed: {
                    bannerWidth: function() {
                        return "".concat(576 * this.banners.length + 146, "rpx");
                    }
                },
                watch: {
                    questionBanners: {
                        handler: function() {
                            this.banners = this.questionBanners;
                        },
                        immediate: !0
                    }
                },
                methods: {
                    discussionVoteFN: function(n, t) {
                        var e = this, c = this.banners[n];
                        c && o.default.discussionVote(c.id, t).then(function(t) {
                            t.data && "投票成功" === t.message && e.$set(e.banners, n, t.data);
                        });
                    },
                    toDiscussUrl: function() {
                        n.navigateTo({
                            url: "/subPackages/question/pages/discussList"
                        });
                    },
                    toDiscussDetailHandle: function(t) {
                        t.skeleton || n.navigateTo({
                            url: "/subPackages/comment/pages/discuss?id=".concat(t.id)
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, e("543d").default);
    },
    "9ae6": function(n, t, e) {},
    f86d: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("9720"), c = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = c.a;
    },
    fc87: function(n, t, e) {
        "use strict";
        var o = e("9ae6");
        e.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/unifyUI/topicList-create-component", {
    "components/unifyUI/topicList-create-component": function(n, t, e) {
        e("543d").createComponent(e("0c2b"));
    }
}, [ [ "components/unifyUI/topicList-create-component" ] ] ]);