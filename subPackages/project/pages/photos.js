require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/photos" ], {
    2353: function(t, e, i) {},
    "2d901": function(t, e, i) {
        "use strict";
        var n = i("2353");
        i.n(n).a;
    },
    "35ca": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("f764"), a = i("93c8");
        for (var r in a) "default" !== r && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(r);
        i("2d901");
        var o = i("f0c5"), s = Object(o.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    },
    "84a7": function(t, e, i) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("35ca")).default);
        }).call(this, i("543d").createPage);
    },
    "93c8": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("a1c7"), a = i.n(n);
        for (var r in n) "default" !== r && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = a.a;
    },
    a1c7: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(i("a34a")), a = o(i("4ec3")), r = i("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, i, n, a, r, o) {
                try {
                    var s = t[r](o), c = s.value;
                } catch (t) {
                    return void i(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a);
            }
            function c(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, a) {
                        var r = t.apply(e, i);
                        function o(t) {
                            s(r, n, a, o, c, "next", t);
                        }
                        function c(t) {
                            s(r, n, a, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var u = [], l = [], d = null, h = null, f = [], p = [], v = {
                components: {
                    BottomBtns: function() {
                        i.e("subPackages/project/pages/component/photosBottombtns").then(function() {
                            return resolve(i("77bd"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    Tab: function() {
                        i.e("subPackages/project/components/Tab").then(function() {
                            return resolve(i("e263"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    ImageLoader: function() {
                        i.e("components/ImageLoader").then(function() {
                            return resolve(i("24e0"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                filters: {
                    formatStyles: function(t) {
                        return {
                            width: "160rpx",
                            height: "160rpx",
                            "margin-bottom": "16rpx",
                            "border-radius": "4rpx",
                            "margin-right": (t + 1) % 4 == 0 ? 0 : "14rpx"
                        };
                    }
                },
                data: function() {
                    return {
                        more: !0,
                        items: [],
                        project_id: 0,
                        project_name: "",
                        videoCount: 0,
                        loading: !0,
                        hideReport: !1,
                        username: "",
                        tabBarMapKey: {},
                        tabBar: [],
                        tabBarVaild: [],
                        typeName: "视频",
                        fieldName: "video",
                        projectPhone: "",
                        showCallBtn: !1,
                        listData: [],
                        distance: 0,
                        scrollId: "",
                        tabBarList: [],
                        page: 1,
                        type: 1,
                        tabList: [],
                        activeTabId: 0,
                        swiperHeight: 0,
                        videosData: [],
                        picturesData: [],
                        topNavHeight: 0,
                        scrollIndex: 0
                    };
                },
                onUnload: function() {
                    h && h.disconnect(), d && d.disconnect();
                },
                onShareAppMessage: function() {
                    return r.share.share("快来看~【".concat(this.project_name, "】的图片，你来看看怎么样"));
                },
                onPullDownRefresh: function() {
                    var e = c(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                h && h.disconnect(), h = null, d && d.disconnect(), d = null, t.stopPullDownRefresh(), 
                                this.observerNodes(), f.length > 0 && this.observerVideoNodes();

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var e = c(n.default.mark(function e(i) {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.project_id = i.project_id, this.type = i.type || 1, this.project_name = decodeURIComponent(i.project_name), 
                                t.setNavigationBarTitle({
                                    title: "杭州房小团-".concat(this.project_name)
                                }), e.next = 6, this.qureyPictures();

                              case 6:
                                return e.next = 8, this.qureyVideos();

                              case 8:
                                this.loading = !1, f.length > 0 && (this.tabList = [ {
                                    id: 0,
                                    name: "picture",
                                    text: "图片"
                                }, {
                                    id: 1,
                                    name: "video",
                                    text: "视频"
                                } ]), this.listData = p, this.type = this.listData.length > 0 && this.listData[0].id || 1, 
                                this.calcSwiperHeight(), this.observerNodes(), f.length > 0 && this.observerVideoNodes();

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    handleSwiperChange: function(e) {
                        this.activeTabId = Number(e.detail.current), this.type = this.listData.length > 0 && this.listData[0].id || 1, 
                        this.listData = 0 === this.activeTabId ? p : f, this.calcSwiperHeight(), t.pageScrollTo({
                            scrollTop: 0,
                            duration: 0
                        });
                    },
                    handleTabChange: function(e) {
                        this.activeTabId = Number(e.id), this.type = this.listData.length > 0 && this.listData[0].id || 1, 
                        this.listData = 0 === this.activeTabId ? p : f, this.calcSwiperHeight(), t.pageScrollTo({
                            scrollTop: 0,
                            duration: 0
                        });
                    },
                    calcSwiperHeight: function() {
                        var e = this;
                        this.listData.length > 1 && this.tabList.length > 0 ? this.topNavHeight = 232 : this.listData.length > 1 ? this.topNavHeight = 132 : this.tabList.length > 1 ? this.topNavHeight = 120 : this.topNavHeight = 20;
                        var i = ".swiper-".concat(this.activeTabId);
                        this.$nextTick(function() {
                            t.createSelectorQuery().select(i).boundingClientRect(function(t) {
                                t && (e.swiperHeight = "".concat(t.height, "px"));
                            }).exec();
                        });
                    },
                    preview: function(e, i) {
                        var n = this.listData[e] && this.listData[e].items;
                        if (n[i]) {
                            var a = n[i].original_image || n[i].image, r = n.reduce(function(t, e) {
                                return t.concat(e.original_image || e.image);
                            }, []);
                            t.previewImage({
                                current: a,
                                urls: r
                            });
                        }
                    },
                    playVideoHandle: function(e, i) {
                        var n = this.listData[e] && this.listData[e].items[i];
                        t.navigateTo({
                            url: "/subPackages/tools/pages/playVideoPage?id=".concat(n.id, "&url=").concat(n.image)
                        });
                    },
                    qureyPictures: function() {
                        var t = c(n.default.mark(function t() {
                            var e;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.photosDataNew(this.project_id, 1);

                                  case 2:
                                    (e = t.sent) && e.data && (p = e.data.data, this.picturesData = p);

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
                    qureyVideos: function() {
                        var t = c(n.default.mark(function t() {
                            var e;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.photosDataNew(this.project_id, 2);

                                  case 2:
                                    (e = t.sent) && e.data && (this.projectPhone = e.data.official_phone, f = e.data.data, 
                                    this.videosData = f);

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
                    switchTabBar: function() {
                        var e = c(n.default.mark(function e(i) {
                            var a, r, o = this;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.scrollIndex = i, a = this.listData[i], Number(a.id) !== Number(this.type) && (this.type = a.id, 
                                    (r = t.createSelectorQuery()).select("#".concat(a.field_name)).boundingClientRect(), 
                                    r.selectViewport().scrollOffset(), r.exec(function(t) {
                                        t[0] && t[0].top && o.scrollPage(t[0].top, t[1].scrollTop);
                                    })), this.scrollId = "tabBar_".concat(a.field_name);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    scrollPage: function(e, i) {
                        this.distance = e;
                        var n = i + e - 150;
                        t.pageScrollTo({
                            scrollTop: n,
                            duration: 300
                        });
                    },
                    changeTypeByScroll: function(t) {
                        var e = t.find(function(t) {
                            return !0 === t.show;
                        });
                        if (e) {
                            var i = this.listData.find(function(t) {
                                return t.field_name === e.id;
                            });
                            i && (this.type = i.id, this.scrollId = "tabBar_".concat(i.field_name));
                        }
                    },
                    observerVideoNodes: function() {
                        var e = this;
                        (d = t.createIntersectionObserver(this.$wxpage, {
                            observeAll: !0
                        })).relativeToViewport({
                            top: -120
                        }).observe(".video-box", function(t) {
                            var i = l.findIndex(function(e) {
                                return e.id === t.id;
                            });
                            t.intersectionRatio > 0 ? i > -1 ? l[i].show = !0 : l.push({
                                id: t.id,
                                show: !0
                            }) : i > -1 && (l[i].show = !1), e.distance ? setTimeout(function() {
                                e.distance = 0;
                            }, 301) : e.changeTypeByScroll(l);
                        });
                    },
                    observerNodes: function() {
                        var e = this;
                        (h = t.createIntersectionObserver(this.$wxpage, {
                            observeAll: !0
                        })).relativeToViewport({
                            top: -120
                        }).observe(".pictures-box", function(t) {
                            var i = u.findIndex(function(e) {
                                return e.id === t.id;
                            });
                            t.intersectionRatio > 0 ? i > -1 ? u[i].show = !0 : u.push({
                                id: t.id,
                                show: !0
                            }) : i > -1 && (u[i].show = !1), e.distance ? setTimeout(function() {
                                e.distance = 0;
                            }, 301) : e.changeTypeByScroll(u);
                        });
                    }
                }
            };
            e.default = v;
        }).call(this, i("543d").default);
    },
    f764: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.picturesData, function(e, i) {
                return {
                    $orig: t.__get_orig(e),
                    l0: t.__map(e.items, function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            f0: t._f("formatStyles")(i)
                        };
                    })
                };
            })), i = t.videosData.length > 0 ? t.__map(t.videosData, function(e, i) {
                return {
                    $orig: t.__get_orig(e),
                    l2: t.__map(e.items, function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            a0: {
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                left: 0,
                                top: 0,
                                "border-radius": "8rpx"
                            },
                            g0: e.image.indexOf("?")
                        };
                    })
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l1: e,
                    l3: i
                }
            });
        }, a = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return a;
        }), i.d(e, "a", function() {});
    }
}, [ [ "84a7", "common/runtime", "common/vendor" ] ] ]);