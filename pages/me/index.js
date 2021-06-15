(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/me/index" ], {
    "352d": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("b91d"), o = n("8aa6");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("de79"), n("abfd"), n("c18e");
        var c = n("f0c5"), i = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "3c87": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("352d")).default);
        }).call(this, n("543d").createPage);
    },
    "8aa6": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("c037"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    abfd: function(t, e, n) {
        "use strict";
        var a = n("dfb1");
        n.n(a).a;
    },
    b226: function(t, e, n) {},
    b91d: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    c037: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), o = i(n("4ec3")), r = i(n("79b9")), c = n("ca00");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function l(t, e, n, a, o, r, c) {
                try {
                    var i = t[r](c), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(a, o);
            }
            var d = {
                components: {
                    TopIcon: function() {
                        n.e("pages/me/components/topIcon").then(function() {
                            return resolve(n("7eea"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    MeListItem: function() {
                        n.e("pages/me/components/meListItem").then(function() {
                            return resolve(n("75c1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseBanner: function() {
                        n.e("components/BaseBanner").then(function() {
                            return resolve(n("01c8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    var e = t.getSystemInfoSync(), n = t.getStorageSync("me_top_icon_cache"), a = t.getStorageSync("me_list_icon_cache"), o = t.getStorageSync("me_userInfo_cache");
                    return {
                        current: 0,
                        statusBarHeight: e.statusBarHeight,
                        imageHeight: e.statusBarHeight + 44 + 128,
                        userInfo: o || {},
                        myBanners: {
                            list: [],
                            config: {}
                        },
                        topIcon: n || new Array(4).fill({
                            skeleton: !0
                        }),
                        listIcon: a || new Array(2).fill({
                            skeleton: !0,
                            content: new Array(5).fill({
                                skeleton: !0
                            })
                        }),
                        salesManLevel: {
                            1: "https://imgcdn.huanjutang.com/assets/img/202076155008081.png",
                            2: "https://imgcdn.huanjutang.com/assets/img/202076155007887.png",
                            3: "https://imgcdn.huanjutang.com/assets/img/202076155001847.png"
                        },
                        pageScroll: !1
                    };
                },
                computed: {
                    refreshPage: function() {
                        return this.$store.getters.refreshPage;
                    },
                    nameFormat: function() {
                        return this.isSalesMan ? this.userInfo.sales_man.name || "" : this.userInfo.nick_name || "";
                    },
                    defaultAvatar: function() {
                        return this.userInfo.avatar_url || "https://imgcdn.huanjutang.com/assets/img/2021122191988081.png";
                    },
                    isSalesMan: function() {
                        return this.userInfo.sales_man;
                    },
                    weapp: function() {
                        if (this.userInfo.nick_name) {
                            var t = {
                                510100: "成都",
                                330100: "杭州",
                                320100: "南京",
                                420100: "武汉",
                                default: "全国版"
                            };
                            return '{"nickName": "'.concat(this.userInfo.nick_name, '", "city": "').concat(t[r.default.CITY_ID] || t.default, '"}');
                        }
                        return '{"nickName": "","city": ""}';
                    }
                },
                watch: {
                    refreshPage: function(t) {
                        !0 === t && this.loadData();
                    },
                    scrollTop: function(t) {
                        return this.pageSrcoll = t > 32;
                    }
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? (this.pageScroll = !0, this.$refs.busiNavHeader.setWhiteMode()) : (this.pageScroll = !1, 
                    this.$refs.busiNavHeader.setTransparentMode());
                },
                onShow: function() {
                    this.$store.dispatch("chat/getUnReadMessage"), this.$store.dispatch("chat/getUnReadCustomerMessage");
                },
                onLoad: function() {
                    this.$refs.busiNavHeader.setTransparentMode(), this.loadData();
                },
                onPullDownRefresh: function() {
                    this.loadData(), t.stopPullDownRefresh();
                },
                methods: {
                    emptyFunction: function() {},
                    handleEditInfo: function() {},
                    loadData: function() {
                        var e = this;
                        o.default.me.selfSalesmaninfo().then(function(n) {
                            n.data && (e.userInfo = n.data, t.setStorage({
                                key: "me_userInfo_cache",
                                data: e.userInfo
                            }));
                        }), this.getIcon(), this.$nextTick(function() {
                            o.default.getBanner("me--banner").then(function(t) {
                                t && t.data && (e.myBanners = t.data);
                            });
                        });
                    },
                    getIcon: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(a, o) {
                                    var r = t.apply(e, n);
                                    function c(t) {
                                        l(r, a, o, c, i, "next", t);
                                    }
                                    function i(t) {
                                        l(r, a, o, c, i, "throw", t);
                                    }
                                    c(void 0);
                                });
                            };
                        }(a.default.mark(function e() {
                            var n, r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.icons({
                                        user_type: 1
                                    });

                                  case 2:
                                    (n = e.sent).data && (this.topIcon = n.data.top, r = n.data.tags, this.listIcon = r.map(function(t) {
                                        return s(s({}, t), {}, {
                                            content: t.content.map(function(t) {
                                                return s(s({}, t), {}, {
                                                    author: "我要入驻" !== t.text
                                                });
                                            })
                                        });
                                    }), t.setStorage({
                                        key: "me_top_icon_cache",
                                        data: this.topIcon
                                    }), t.setStorage({
                                        key: "me_list_icon_cache",
                                        data: this.listIcon
                                    }));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    swiperNavHandle: function(t) {
                        (0, c.pageJump)(t);
                    }
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    c18e: function(t, e, n) {
        "use strict";
        var a = n("da51");
        n.n(a).a;
    },
    da51: function(t, e, n) {},
    de79: function(t, e, n) {
        "use strict";
        var a = n("b226");
        n.n(a).a;
    },
    dfb1: function(t, e, n) {}
}, [ [ "3c87", "common/runtime", "common/vendor" ] ] ]);