require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/DiscoveryItem" ], {
    7547: function(e, t, n) {
        "use strict";
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, "import" === e.item.type ? {
                creatorAvatar: e.item.creatorAvatar,
                creatorName: e.item.creatorName
            } : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: t
                }
            });
        }, i = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    "760a": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("7547"), i = n("decf");
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        n("c500");
        var a = n("f0c5"), r = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    be85: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("ca00"), i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("4ec3")), c = n("f4fd"), a = {
                components: {
                    PersonalInfo: function() {
                        n.e("subPackages/news/components/PersonalInfo").then(function() {
                            return resolve(n("4a43"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BorderContainer: function() {
                        n.e("subPackages/news/components/BorderContainer").then(function() {
                            return resolve(n("1919"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OverflowContent: function() {
                        n.e("subPackages/news/components/OverflowContent").then(function() {
                            return resolve(n("68e8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageRow: function() {
                        n.e("subPackages/news/components/ImageRow").then(function() {
                            return resolve(n("3179"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    VideoBox: function() {
                        n.e("subPackages/news/components/VideoBox").then(function() {
                            return resolve(n("1468"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AcceptAnswer: function() {
                        n.e("subPackages/news/components/AcceptAnswer").then(function() {
                            return resolve(n("98db"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RelatedProject: function() {
                        n.e("subPackages/news/components/RelatedProject").then(function() {
                            return resolve(n("a6de"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RelatedTopic: function() {
                        n.e("subPackages/news/components/RelatedTopic").then(function() {
                            return resolve(n("4d9a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ArticleContent: function() {
                        n.e("subPackages/news/components/ArticleContent").then(function() {
                            return resolve(n("4a438"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BottomOperate: function() {
                        n.e("subPackages/news/components/BottomOperate").then(function() {
                            return resolve(n("9796"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    showFollow: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    isLastItem: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    isFirstItem: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    hideTopic: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    playCurrentVideo: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    showPersonal: {
                        type: Boolean,
                        default: function() {
                            return !0;
                        }
                    }
                },
                data: function() {
                    return {
                        hasFollow: !1,
                        userId: (0, c.getUserInfo)() ? (0, c.getUserInfo)().id : "",
                        typeMap: {
                            qa: "问答",
                            article: "图文",
                            topic: "话题",
                            import: "自媒体文章",
                            video: "视频"
                        }
                    };
                },
                computed: {
                    commentProps: function() {
                        return {
                            show: [ "video", "article", "text" ].includes(this.item.type),
                            num: this.item.stats.comments
                        };
                    },
                    likeProps: function() {
                        return {
                            show: [ "video", "article", "text" ].includes(this.item.type),
                            isLike: this.item.stats.isLike,
                            num: this.item.stats.likes
                        };
                    },
                    answerProps: function() {
                        return {
                            show: "qa" === this.item.type,
                            num: this.item.stats.comments
                        };
                    },
                    leftProps: function() {
                        return {
                            content: this.fromTime,
                            extra: this.item.extra
                        };
                    },
                    contentRows: function() {
                        return "qa" === this.item.type ? 2 : 3;
                    },
                    bottomMargin: function() {
                        var e = "32rpx", t = this.item.type;
                        return "qa" === t ? e = "24rpx" : "topic" === t && (e = "28rpx"), e;
                    },
                    projectMargin: function() {
                        return "video" === this.item.type ? "24rpx" : "20rpx";
                    },
                    fromTime: function() {
                        return (0, o.dayjs)(this.item.createdAt).fromNow();
                    },
                    formatTopic: function() {
                        var e = "";
                        return this.item.topic && this.item.topic.title && (e = this.item.topic.title.length > 18 ? "#".concat(this.item.topic.title.substring(0, 18), "...") : "#".concat(this.item.topic.title)), 
                        e;
                    },
                    tagImage: function() {
                        return 1 === this.item.vFlag ? "https://imgcdn.huanjutang.com/image/2020/05/29/0d7b9f0e9d3b70834a1c18beda1bb862.png" : "";
                    }
                },
                methods: {
                    subscribeHandler: function() {
                        var e = this;
                        this.item.hasFollow || this.hasFollow || i.default.discovery.subscribe({
                            userId: this.item.creatorId
                        }).then(function(t) {
                            0 === t.code && (e.hasFollow = !0);
                        });
                    },
                    handleBottomComment: function() {
                        this.haddleClickItem(!0);
                    },
                    haddleClickItem: function(t) {
                        var n = !0 === t ? "id=".concat(this.item.id, "&focus=true") : "id=".concat(this.item.id);
                        if ("qa" === this.item.type && e.navigateTo({
                            url: "/subPackages/discovery/pages/answerDetail?".concat(n)
                        }), "article" === this.item.type && e.navigateTo({
                            url: "/subPackages/discovery/pages/pictureDetail?".concat(n)
                        }), "video" === this.item.type) {
                            if (this.playCurrentVideo) return void e.navigateTo({
                                url: "/subPackages/discovery/pages/videoDetail?".concat(n, "&creatorId=").concat(this.item.creatorId)
                            });
                            e.navigateTo({
                                url: "/subPackages/discovery/pages/videoDetail?".concat(n)
                            });
                        }
                        "text" === this.item.type && e.navigateTo({
                            url: "/subPackages/discovery/pages/pictureDetail?id=".concat(this.item.id)
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    c500: function(e, t, n) {
        "use strict";
        var o = n("d6f8");
        n.n(o).a;
    },
    d6f8: function(e, t, n) {},
    decf: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("be85"), i = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/DiscoveryItem-create-component", {
    "subPackages/news/components/DiscoveryItem-create-component": function(e, t, n) {
        n("543d").createComponent(n("760a"));
    }
}, [ [ "subPackages/news/components/DiscoveryItem-create-component" ] ] ]);