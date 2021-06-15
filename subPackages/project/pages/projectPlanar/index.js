require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/projectPlanar/index" ], {
    "0d0a": function(t, e, n) {
        "use strict";
        var i = n("ec6d");
        n.n(i).a;
    },
    "6ae3": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("2f62"), a = o(n("4ec3")), r = o(n("c909"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        u(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var l = {}, f = !1, h = "预售时间", d = {
                components: {
                    BusiFooter: function() {
                        n.e("components/UILayout/BusiFooter").then(function() {
                            return resolve(n("dff1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HuxingList: function() {
                        n.e("subPackages/project/components/HuxingList").then(function() {
                            return resolve(n("5e1f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ContactSalesman: function() {
                        n.e("components/ContactSalesman").then(function() {
                            return resolve(n("bf9f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CallSalesman: function() {
                        n.e("components/CallSalesman").then(function() {
                            return resolve(n("f845"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    focusFooter: function() {
                        n.e("subPackages/project/pages/component/projectPlanar/focusFooter").then(function() {
                            return resolve(n("95b1"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        originAreaX: 0,
                        originAreaY: 0,
                        areaImage: "",
                        areaWidth: 0,
                        areaHeight: 0,
                        areaScale: 1,
                        compassStatus: 0,
                        compassAngle: 0,
                        swiperList: [],
                        swiperIndex: 0,
                        huxingList: [],
                        navbarText: "未开盘",
                        hasShowTips: !1,
                        loading: !0,
                        projectId: "",
                        projectName: "",
                        lottery_id: 0,
                        presaleStr: h,
                        swiperListRes: {}
                    };
                },
                computed: {
                    areaX: function() {
                        var t = this.originAreaX * this.areaScale;
                        return t < this.areaWidth * this.areaScale / 2 ? 0 : -t;
                    },
                    areaY: function() {
                        var t = this.originAreaY * this.areaScale;
                        return t < this.areaHeight * this.areaScale / 2 ? 0 : -t;
                    },
                    hideSwiperList: function() {
                        return 0 === this.swiperList.length && !this.loading;
                    },
                    hideHuxingList: function() {
                        return 0 === this.huxingList.length && !this.loading;
                    },
                    markerSacle: function() {
                        return 1 / this.areaScale;
                    }
                },
                onHide: function() {
                    f || this.stopAllAudio();
                },
                onShow: function() {
                    f = !1;
                },
                onUnload: function() {
                    this.stopAllAudio();
                },
                onLoad: function(e) {
                    var n = this;
                    this.projectId = e.projectId, this.projectName = e.projectName, this.lottery_id = e.lottery_id, 
                    this.navbarText = e.navbarText || this.navbarText, t.setNavigationBarTitle({
                        title: "杭州房小团-".concat(this.projectName)
                    }), this.getAviationData(), a.default.projects.getProjectPlanar(this.projectId).then(function(e) {
                        if (e.data && e.data.plan) {
                            var i = e.data;
                            n.areaImage = i.plan.url, n.getImageInfo(n.areaImage).then(function(e) {
                                var i = e.width, a = 960 / i, r = i * a, o = e.height * a, c = t.getSystemInfoSync().windowWidth / r;
                                return n.areaWidth = r * c, n.areaHeight = o * c, c;
                            }).then(function(t) {
                                n.compassStatus = Math.floor(i.plan.compass_status) || 0, n.$nextTick(function() {
                                    n.compassAngle = Math.floor(i.plan.compass_angle) || 0;
                                }), l = {}, i.buildings.forEach(function(e) {
                                    l[e.status_text] || (l[e.status_text] = []), e.huxings.forEach(function(t) {
                                        t.paused = !0, t.showPlayer = !1, t.current = 0;
                                    }), l[e.status_text].push(s(s({}, e), {}, {
                                        point_x: e.point_x * t,
                                        point_y: e.point_y * t
                                    }));
                                }), n.$once("hook:beforeDestory", function() {
                                    l = {};
                                });
                            }).then(function() {
                                n.changeSwiperList(n.navbarText, 0);
                            }).then(function() {
                                n.loading = !1, n.showToast();
                            });
                        }
                    });
                },
                methods: s(s({}, (0, i.mapActions)({
                    stopAllAudio: "system/stopAllAudio"
                })), {}, {
                    previewImage: function() {
                        f = !0;
                    },
                    chagneHandle: function(t) {
                        this.clickHandle(t.detail.current);
                    },
                    scaleHandle: function(t) {
                        this.areaScale = t.detail.scale;
                    },
                    changeSwiperList: function(t, e) {
                        var n = this;
                        this.navbarText = t, this.swiperIndex = e;
                        var i = l[this.navbarText];
                        i ? this.swiperList = i.map(function(t, e) {
                            return e === n.swiperIndex && (n.$nextTick(function() {
                                n.originAreaX = t.point_x, n.originAreaY = t.point_y;
                            }), n.huxingList = t.huxings), Object.keys(t).filter(function(t) {
                                return "huxings" !== t;
                            }).reduce(function(e, n) {
                                return e[n] = t[n], e;
                            }, {});
                        }) : (this.swiperList = [], this.huxingList = []);
                    },
                    clickHandle: function(t) {
                        var e = this;
                        this.swiperIndex = t;
                        var n = (l[this.navbarText] || [])[this.swiperIndex];
                        n ? (this.huxingList = n.huxings, this.$nextTick(function() {
                            e.originAreaX = n.point_x, e.originAreaY = n.point_y;
                        })) : this.huxingList = [];
                    },
                    getImageInfo: function(e) {
                        return new Promise(function(n, i) {
                            "string" == typeof e && "" !== e && t.getImageInfo({
                                src: e,
                                success: function(t) {
                                    n(t);
                                },
                                fail: function() {
                                    i();
                                }
                            });
                        });
                    },
                    showToast: function() {
                        var t = this;
                        this.$nextTick(function() {
                            t.hasShowTips = !0;
                            var e = setTimeout(function() {
                                t.hasShowTips = !1, e = null;
                            }, 3e3);
                            t.$once("hook:beforeDestory", function() {
                                e && (clearTimeout(e), e = null);
                            });
                        });
                    },
                    getAviationData: function() {
                        var t = this;
                        a.default.lotteryDetail.getSwiperImage(this.projectId).then(function(e) {
                            e.data && (t.swiperListRes = e.data || {});
                        });
                    },
                    redictAviation: function() {
                        var e = new r.default("/pages/webview2");
                        e.setSearch("redirect", this.swiperListRes.aerial_view_url), t.navigateTo({
                            url: e.toString()
                        });
                    }
                })
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    "9bc2": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "9bf6": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c741")).default);
        }).call(this, n("543d").createPage);
    },
    c741: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("9bc2"), a = n("f04f");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("0d0a");
        var o = n("f0c5"), c = Object(o.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    },
    ec6d: function(t, e, n) {},
    f04f: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("6ae3"), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    }
}, [ [ "9bf6", "common/runtime", "common/vendor" ] ] ]);