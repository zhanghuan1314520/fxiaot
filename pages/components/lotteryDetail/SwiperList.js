(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/SwiperList" ], {
    "05c8": function(e, t, i) {
        "use strict";
        var a = i("202c");
        i.n(a).a;
    },
    "202c": function(e, t, i) {},
    "27aa": function(e, t, i) {},
    3326: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = i("f319"), n = i.n(a);
        for (var r in a) "default" !== r && function(e) {
            i.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = n.a;
    },
    "361c": function(e, t, i) {
        "use strict";
        var a = i("27aa");
        i.n(a).a;
    },
    "6c0f": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = i("e144"), n = i("3326");
        for (var r in n) "default" !== r && function(e) {
            i.d(t, e, function() {
                return n[e];
            });
        }(r);
        i("05c8"), i("361c");
        var s = i("f0c5"), o = Object(s.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = o.exports;
    },
    e144: function(e, t, i) {
        "use strict";
        var a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.swiperList.cover ? e.__map(e.dataList, function(t, i) {
                return {
                    $orig: e.__get_orig(t),
                    a0: "直播" === t.type && e.swiperList.live_cover && "living" === t.liveType ? {
                        width: "144rpx",
                        height: "144rpx",
                        "border-radius": "50%"
                    } : null
                };
            }) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, n = [];
        i.d(t, "b", function() {
            return a;
        }), i.d(t, "c", function() {
            return n;
        }), i.d(t, "a", function() {});
    },
    f319: function(e, t, i) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(i("c909")), n = {
                components: {
                    ImageLoader: function() {
                        i.e("components/ImageLoader").then(function() {
                            return resolve(i("24e0"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                props: {
                    swiperList: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    lotteryId: {
                        type: Number,
                        default: 0
                    },
                    projectId: {
                        type: Number,
                        default: 0
                    },
                    projectName: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        dataList: [],
                        swiperIndex: 0,
                        sourceUrl: null,
                        currentType: "VR",
                        navTypes: [],
                        videoUrl: null,
                        activeIndex: 0,
                        navTypeLen: 0
                    };
                },
                watch: {
                    swiperList: {
                        handler: function(e) {
                            if (Object.keys(e).length > 0) {
                                if (this.swiperIndex = 0, this.dataList = [], this.navTypes = [], e.live && e.live.id && e.live_cover) {
                                    this.navTypes.push({
                                        text: "直播",
                                        index: this.dataList.length
                                    });
                                    var t = "living";
                                    new Date().getTime() < new Date(e.live.started_at.replace(/-/g, "/")).getTime() && (t = "advance"), 
                                    this.dataList.push({
                                        type: "直播",
                                        liveType: t,
                                        model: this.standardLive(e.live)
                                    });
                                }
                                if (e.aerial_view_url && "string" == typeof e.aerial_view_url && e.aerial_view_cover && (this.navTypes.push({
                                    text: "航拍",
                                    index: this.dataList.length
                                }), this.dataList.push({
                                    type: "航拍",
                                    url: e.aerial_view_url
                                })), e.vr_view_room.length && e.vr_video_cover && (this.navTypes.push({
                                    text: "VR",
                                    index: this.dataList.length
                                }), this.dataList.push({
                                    type: "VR",
                                    url: e.vr_view_room[0]
                                })), e.panorama_url && "string" == typeof e.panorama_url && e.panoramic_video_cover && (this.navTypes.push({
                                    text: "全景",
                                    index: this.dataList.length
                                }), this.dataList.push({
                                    type: "全景",
                                    url: e.panorama_url
                                })), e.video_room.length && e.video_cover ? (this.navTypes.push({
                                    text: "讲房",
                                    index: this.dataList.length
                                }), this.dataList.push({
                                    type: "讲房",
                                    url: e.video_room[0].image,
                                    id: e.video_room[0].id
                                }), this.videoUrl = e.video_room[0].image) : !this.videoUrl && e.video_url && e.video_cover && (this.navTypes.push({
                                    text: "视频",
                                    index: this.dataList.length
                                }), this.dataList.push({
                                    type: "视频",
                                    url: e.video_url,
                                    id: e.video.id
                                })), e.photos.length) {
                                    this.navTypes.push({
                                        text: "图片",
                                        index: this.dataList.length
                                    });
                                    for (var i = 0; i < e.photos.length; i += 1) this.dataList.push({
                                        type: "图片",
                                        url: e.photos[i].image,
                                        originalImage: e.photos[i].original_image
                                    });
                                } else this.navTypes.push({
                                    text: "图片",
                                    index: this.dataList.length
                                }), this.dataList.push({
                                    type: "图片",
                                    url: e.cover
                                });
                                this.navTypes.length && (this.currentType = this.navTypes[0].text);
                            }
                        },
                        deep: !0
                    },
                    navTypes: {
                        handler: function(e) {
                            this.navTypeLen = e.length;
                        },
                        immediate: !0
                    }
                },
                methods: {
                    jumpToLive: function(t) {
                        var i = encodeURIComponent(JSON.stringify({
                            path: "pages/lotteryDetail",
                            pid: 1
                        }));
                        e.navigateTo({
                            url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t.roomid, "&custom_params=").concat(i)
                        });
                    },
                    standardLive: function(e) {
                        if (e) {
                            var t = new Date(e.started_at.replace(/-/g, "/")), i = t.getMonth() + 1, a = t.getDate(), n = t.getHours(), r = t.getMinutes();
                            n = n < 10 ? "0".concat(parseInt(n, 10)) : n, r = r < 10 ? "0".concat(parseInt(r, 10)) : r, 
                            e.started_at_text = "".concat(i, "月").concat(a, "日 ").concat(n, ":").concat(r);
                        }
                        return e;
                    },
                    selectType: function(e) {
                        this.currentType = e.text, this.swiperIndex = e.index;
                    },
                    gotoPhotosHandle: function() {
                        this.$emit("gotoPhotosEvent");
                    },
                    clickEvent: function(t, i) {
                        switch (t.type) {
                          case "VR":
                          case "全景":
                            if (this.swiperList.vr_view_room && this.swiperList.vr_view_room.length > 1) e.navigateTo({
                                url: "/subPackages/project/pages/oldHousePlan?lottery_id=".concat(this.lotteryId, "&project_id=").concat(this.projectId, "&project_name=").concat(this.projectName)
                            }); else {
                                var n = new a.default("/pages/webview2");
                                n.setSearch("redirect", t.url), "VR" === t.type && n.setSearch("showShare", !0), 
                                e.navigateTo({
                                    url: n.toString()
                                });
                            }
                            break;

                          case "航拍":
                            var r = new a.default("/pages/webview2");
                            r.setSearch("redirect", t.url), e.navigateTo({
                                url: r.toString()
                            });
                            break;

                          case "视频":
                          case "讲房":
                            this.playVideoHandle(t);
                            break;

                          case "图片":
                            this.previewPhotos(i);
                        }
                    },
                    previewPhotos: function(t) {
                        var i = this.swiperList.photos;
                        if (i && Array.isArray(i) && i[t]) {
                            var a = i.reduce(function(e, t) {
                                return e.concat(t.original_image);
                            }, []);
                            e.previewImage({
                                urls: a,
                                current: i[t].original_image
                            });
                        }
                    },
                    onSlideChangeEnd: function(e) {
                        this.swiperIndex = e && e.detail && e.detail.current ? e.detail.current : 0, this.activeIndex = this.swiperIndex;
                        for (var t = this.dataList[this.swiperIndex].type, i = null, a = 0; a < this.navTypes.length; a += 1) if (this.navTypes[a].text === t) {
                            i = this.navTypes[a];
                            break;
                        }
                        i && (this.activeIndex -= i.index), this.selectType.call(this, i);
                    },
                    playVideoHandle: function(t) {
                        var i = t.url, a = t.id;
                        e.navigateTo({
                            url: "/subPackages/tools/pages/playVideoPage?id=".concat(a, "&url=").concat(i)
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, i("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/SwiperList-create-component", {
    "pages/components/lotteryDetail/SwiperList-create-component": function(e, t, i) {
        i("543d").createComponent(i("6c0f"));
    }
}, [ [ "pages/components/lotteryDetail/SwiperList-create-component" ] ] ]);