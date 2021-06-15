require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/allProjectPhotos" ], {
    "0e21": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), i = n("b628");
            function r(t, e, n, a, i, r, o) {
                try {
                    var s = t[r](o), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var o = t.apply(e, n);
                        function s(t) {
                            r(o, a, i, s, u, "next", t);
                        }
                        function u(t) {
                            r(o, a, i, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var s = n("4ec3"), u = n("ca00").transformRpx, c = 0, h = 0, d = 0, l = !1, f = !1, p = {
                x: 0,
                y: 0,
                scale: 1
            }, g = null, m = {
                data: function() {
                    return {
                        swiperList: [],
                        bannerCountArr: [],
                        isSalesMan: 2,
                        navbar: [],
                        changeIndex: 0,
                        nowNumber: 1,
                        projectId: 0,
                        projectName: "",
                        type: "",
                        page: 1,
                        more: !0,
                        animationData: null,
                        disabled: !1,
                        winWidth: 0,
                        winHeight: 0,
                        translateX: 0,
                        itemIndex: 0
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("我在这里查看楼盘相册", "subPackages/project/pages/allProjectPhotos?project_id=".concat(this.projectId, "&project_name=").concat(this.projectName));
                },
                onLoad: function() {
                    var e = o(a.default.mark(function e(n) {
                        var i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                    title: "加载中",
                                    mask: !0
                                }), this.projectId = n.project_id, this.projectName = n.project_name, e.next = 5, 
                                this.reload();

                              case 5:
                                g = t.createAnimation({
                                    duration: 300,
                                    timingFunction: "ease"
                                }), i = t.getSystemInfoSync(), this.winWidth = i.windowWidth, this.winHeight = i.windowHeight, 
                                t.hideLoading();

                              case 10:
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
                    changeNavbarHandle: function(t) {
                        for (var e = t.currentTarget.dataset.index, n = 0, a = 0; a < this.bannerCountArr.length && a !== Number(e); a += 1) n += this.bannerCountArr[a];
                        this.itemIndex = n, this.translateX = -this.itemIndex * u(750), g.translateX(this.translateX).step(), 
                        this.animationData = g.export(), this.nowNumber = 1, this.changeIndex = e;
                    },
                    goToPhotos: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/photos?project_id=".concat(this.projectId, "&project_name=").concat(this.projectName)
                        });
                    },
                    touchstart: function(t) {
                        if (1 !== t.touches.length || l) c = 0, c = 0, h = 0, d = 0; else {
                            var e = t.touches[0], n = e.pageX, a = e.pageY;
                            c = n, h = a, d = n, l = !0;
                        }
                    },
                    touchmove: function(t) {
                        var e = t.changedTouches[0], n = e.pageX, a = e.pageY;
                        if (!f && d && this.touchVerify(c, h, n, a) && !(t.touches.length > 1)) {
                            var i = u(750) - u(750) * p.scale;
                            p.x > i + 15 && p.x < 0 || (d = n);
                        }
                    },
                    touchend: function(t) {
                        var e = t.changedTouches[0], n = e.pageX, a = e.pageY;
                        if (f) return setTimeout(function() {
                            f = !1;
                        }, 500), void (l = !1);
                        if (this.touchVerify(c, h, n, a)) {
                            var i = u(750) - u(750) * p.scale;
                            p.x > i + 15 && p.x < 0 ? l = !1 : (c < n && n - c > 40 ? this.rightScroll() : c > n && c - n > 40 ? this.leftScroll() : l = !1, 
                            this.swiperChangeHook(), c = 0, d = 0);
                        } else l = !1;
                    },
                    onScale: function(t) {
                        var e = t.detail;
                        p.scale = e.scale, p.x = e.x, p.y = e.y, f = !0;
                    },
                    onChange: function(t) {
                        var e = t.detail;
                        p.x = e.x, p.y = e.y;
                    },
                    swiperChangeHook: function() {
                        for (var t = this.itemIndex, e = 0, n = 0, a = t + 1, i = 0; i < this.bannerCountArr.length; i += 1) t + 1 > (n += this.bannerCountArr[i]) && (a = t + 1 - n, 
                        e += 1);
                        this.nowNumber = a, this.changeIndex = e;
                    },
                    touchVerify: function(t, e, n, a) {
                        return t || Math.abs(e - a) < Math.abs(t - n);
                    },
                    leftScroll: function() {
                        this.itemIndex < this.swiperList.length - 1 && (this.itemIndex += 1, this.translateX = -this.itemIndex * u(750), 
                        g.translateX(this.translateX).step(), this.animationData = g.export(), p.scale = 0, 
                        p.x = 0, p.y = 0), l = !1, c = 0, c = 0, h = 0, d = 0;
                    },
                    rightScroll: function() {
                        this.itemIndex > 0 && (this.itemIndex -= 1, this.translateX = -this.itemIndex * u(750), 
                        g.translateX(this.translateX).step(), this.animationData = g.export()), l = !1, 
                        c = 0, c = 0, h = 0, d = 0;
                    },
                    reload: function() {
                        var t = o(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.page = 1, this.more = !0, t.next = 4, this.loadData();

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
                    loadData: function() {
                        var t = o(a.default.mark(function t() {
                            var e, n, i;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.lotteryPhotos(this.projectId, this.type, this.page);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.swiperList = this.swiperList.concat(e.data.data), n = [], i = [], e.data.shijing_count > 0 && (i.push(e.data.shijing_count), 
                                    n.push({
                                        type: 2,
                                        text: "实景图",
                                        number: e.data.shijing_count
                                    })), e.data.zhoubian_count > 0 && (i.push(e.data.zhoubian_count), n.push({
                                        type: 3,
                                        text: "周边图",
                                        number: e.data.zhoubian_count
                                    })), e.data.yangban_count > 0 && (i.push(e.data.yangban_count), n.push({
                                        type: 4,
                                        text: "样板间",
                                        number: e.data.yangban_count
                                    })), e.data.xiaoguo_count > 0 && (i.push(e.data.xiaoguo_count), n.push({
                                        type: 5,
                                        text: "效果图",
                                        number: e.data.xiaoguo_count
                                    })), this.isSalesMan = e.data.is_sales_man, this.navbar = n, this.swiperList = e.data.data, 
                                    this.bannerCountArr = i);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    "0f39": function(t, e, n) {},
    "4ea5": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("dd31")).default);
        }).call(this, n("543d").createPage);
    },
    6600: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("0e21"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    "9e48": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    acfc: function(t, e, n) {
        "use strict";
        var a = n("0f39");
        n.n(a).a;
    },
    dd31: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("9e48"), i = n("6600");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("acfc");
        var o = n("f0c5"), s = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    }
}, [ [ "4ea5", "common/runtime", "common/vendor" ] ] ]);