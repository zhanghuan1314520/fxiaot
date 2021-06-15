require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/houseTypePhotos" ], {
    "3cd1": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s(n("a34a")), r = s(n("4ec3")), a = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function c(t, e, n, i, r, a, s) {
                try {
                    var o = t[a](s), u = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(u) : Promise.resolve(u).then(i, r);
            }
            function h(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, r) {
                        var a = t.apply(e, n);
                        function s(t) {
                            c(a, i, r, s, o, "next", t);
                        }
                        function o(t) {
                            c(a, i, r, s, o, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var l = n("ca00").transformRpx, d = 0, f = 0, p = 0, m = !1, g = !1, b = {
                x: 0,
                y: 0,
                scale: 1
            }, v = null, x = {
                data: function() {
                    return {
                        swiperList: [],
                        bannerCountArr: [],
                        navbar: [],
                        changeIndex: 0,
                        nowNumber: 1,
                        more: !0,
                        project_id: "",
                        lottery_id: "",
                        isOpen: "",
                        isComplete: 1,
                        project_name: "",
                        animationData: null,
                        disabled: !1,
                        winWidth: 0,
                        winHeight: 0,
                        translateX: 0,
                        itemIndex: 0
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("快来看【".concat(this.project_name, "】，户型图"));
                },
                onLoad: function() {
                    var e = h(i.default.mark(function e(n) {
                        var r;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                    title: "加载中..."
                                }), this.project_id = n.project_id, this.lottery_id = n.lottery_id || "", this.itemIndex = n.index, 
                                this.changeIndex = n.tab || 0, this.nowNumber = n.index ? parseInt(n.index, 10) + 1 : 1, 
                                this.isOpen = n.is_this || "", this.project_name = n.project_name, e.next = 10, 
                                this.reload();

                              case 10:
                                v = t.createAnimation({
                                    duration: 300,
                                    timingFunction: "ease"
                                }), r = t.getSystemInfoSync(), this.winWidth = r.windowWidth, this.winHeight = r.windowHeight, 
                                this.itemIndex < this.swiperList.length - 1 && (this.translateX = -this.itemIndex * l(750), 
                                v.translateX(this.translateX).step(), this.animationData = v.export()), t.hideLoading(), 
                                setTimeout(function() {
                                    t.setNavigationBarTitle({
                                        title: "杭州房小团-户型图"
                                    });
                                });

                              case 17:
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
                        for (var e = t.currentTarget.dataset.index, n = 0, i = 0; i < this.bannerCountArr.length && i !== parseInt(e, 10); i += 1) n += this.bannerCountArr[i];
                        this.itemIndex = n, this.translateX = -this.itemIndex * l(750), v.translateX(this.translateX).step(), 
                        this.animationData = v.export(), this.nowNumber = 1, this.changeIndex = e;
                    },
                    touchstart: function(t) {
                        if (1 !== t.touches.length || m) d = 0, d = 0, f = 0, p = 0; else {
                            var e = t.touches[0], n = e.pageX, i = e.pageY;
                            d = n, f = i, p = n, m = !0;
                        }
                    },
                    touchmove: function(t) {
                        var e = t.changedTouches[0], n = e.pageX, i = e.pageY;
                        if (!g && p && this.touchVerify(d, f, n, i) && !(t.touches.length > 1)) {
                            var r = l(750) - l(750) * b.scale;
                            b.x > r + 15 && b.x < 0 || (p = n);
                        }
                    },
                    touchend: function(t) {
                        var e = t.changedTouches[0], n = e.pageX, i = e.pageY;
                        if (g) return setTimeout(function() {
                            g = !1;
                        }, 500), void (m = !1);
                        if (this.touchVerify(d, f, n, i)) {
                            var r = l(750) - l(750) * b.scale;
                            b.x > r + 15 && b.x < 0 ? m = !1 : (d < n && n - d > 40 ? this.rightScroll() : d > n && d - n > 40 ? this.leftScroll() : m = !1, 
                            this.swiperChangeHook(), d = 0, p = 0);
                        } else m = !1;
                    },
                    onScale: function(t) {
                        var e = t.detail;
                        b.scale = e.scale, b.x = e.x, b.y = e.y, g = !0;
                    },
                    onChange: function(t) {
                        var e = t.detail;
                        b.x = e.x, b.y = e.y;
                    },
                    swiperChangeHook: function() {
                        for (var t = this.itemIndex, e = 0, n = 0, i = t + 1, r = 0; r < this.bannerCountArr.length; r += 1) t + 1 > (n += this.bannerCountArr[r]) && (i = t + 1 - n, 
                        e += 1);
                        this.nowNumber = i, this.changeIndex = e;
                    },
                    touchVerify: function(t, e, n, i) {
                        return t || Math.abs(e - i) < Math.abs(t - n);
                    },
                    leftScroll: function() {
                        this.itemIndex < this.swiperList.length - 1 && (this.itemIndex += 1, this.translateX = -this.itemIndex * l(750), 
                        v.translateX(this.translateX).step(), this.animationData = v.export(), b.scale = 0, 
                        b.x = 0, b.y = 0), m = !1, d = 0, d = 0, f = 0, p = 0;
                    },
                    rightScroll: function() {
                        this.itemIndex > 0 && (this.itemIndex -= 1, this.translateX = -this.itemIndex * l(750), 
                        v.translateX(this.translateX).step(), this.animationData = v.export()), m = !1, 
                        d = 0, d = 0, f = 0, p = 0;
                    },
                    reload: function() {
                        var t = h(i.default.mark(function t() {
                            var e, n, a;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = 1 === Number(this.changeIndex) ? this.lottery_id : "", t.next = 3, r.default.houseTypePhotos(this.project_id, e, 0, "");

                                  case 3:
                                    if (n = t.sent, this.isComplete = n.is_complete, n.data && n.data.length > 0 && (this.swiperList = o(n.data), 
                                    this.bannerCountArr.push(n.data.length), this.navbar.push({
                                        text: "全部户型",
                                        number: n.data.length
                                    }), 1 === Number(this.changeIndex) && (this.current = Number(this.current) + n.data.length)), 
                                    !this.isOpen || 0 === Number(this.isOpen)) {
                                        t.next = 11;
                                        break;
                                    }
                                    return t.next = 9, r.default.houseTypePhotos(this.project_id, e, 0, 1);

                                  case 9:
                                    (a = t.sent).data && a.data.length > 0 && (this.swiperList = [].concat(o(this.swiperList), o(a.data)), 
                                    this.bannerCountArr.push(a.data.length), this.navbar.push({
                                        text: "本次开盘",
                                        number: a.data.length
                                    }));

                                  case 11:
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
            e.default = x;
        }).call(this, n("543d").default);
    },
    "5a81": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "5c31": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("8093")).default);
        }).call(this, n("543d").createPage);
    },
    8093: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("5a81"), r = n("bd46");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("a389");
        var s = n("f0c5"), o = Object(s.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = o.exports;
    },
    a389: function(t, e, n) {
        "use strict";
        var i = n("b260");
        n.n(i).a;
    },
    b260: function(t, e, n) {},
    bd46: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("3cd1"), r = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = r.a;
    }
}, [ [ "5c31", "common/runtime", "common/vendor" ] ] ]);