require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/loginIndex" ], {
    1149: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "3eb2": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("4ec3")), a = n("b628"), i = n("ca00");
            function r(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], o = !0, a = !1, i = void 0;
                        try {
                            for (var r, c = t[Symbol.iterator](); !(o = (r = c.next()).done) && (n.push(r.value), 
                            !e || n.length !== e); o = !0) ;
                        } catch (t) {
                            a = !0, i = t;
                        } finally {
                            try {
                                o || null == c.return || c.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            var l = null, s = {
                components: {
                    ActionSheet: function() {
                        n.e("subPackages/lottery/pages/components/ActionSheet").then(function() {
                            return resolve(n("bd34"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Dialog: function() {
                        n.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(n("6bfa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        commentShow: !1,
                        auctionRules: [],
                        indexList: [],
                        projectList: {
                            result: new Array(1).fill({
                                skeleton: !0
                            })
                        },
                        time: "",
                        showJoinInp: !1,
                        coins: "--",
                        settlementing: !1,
                        settlementTime: 3e5,
                        settlementEnd: !1,
                        settlementTimer: null,
                        showActionSheet: !1,
                        itemList: [],
                        userInfo: this.$store.getters.userInfo
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("我在这里查看我要上首页", "/subPackages/lottery/pages/loginIndex");
                },
                onShow: function() {
                    this.loadData();
                },
                onPullDownRefresh: function() {
                    this.loadData(), t.stopPullDownRefresh();
                },
                onUnload: function() {
                    clearInterval(l), l = null, this.settlementTimer && (clearInterval(this.settlementTimer), 
                    this.settlementTimer = null);
                },
                onLoad: function(e) {
                    var n = e.sales_man_id || this.userInfo.sales_man_id;
                    n && 0 !== Math.floor(n) ? (this.computedTime(), this.loadData()) : t.switchTab({
                        url: "/pages/index"
                    });
                },
                watch: {
                    showJoinInp: function(t) {
                        !0 === t && (this.settlementing = !0, this.settlementTimerHandler.call(this));
                    },
                    settlementEnd: function(t) {
                        !0 === t && this.loadData();
                    }
                },
                methods: {
                    actionSheetSelected: function(e) {
                        t.navigateTo({
                            url: "/subPackages/lottery/pages/loginIndexDetail?project_id=0&sales_man_id=".concat(e.sales_men_id, "&project_name=").concat(e.name)
                        });
                    },
                    settlementTimerHandler: function() {
                        var t = this;
                        t.settlementTimer = setInterval(function() {
                            (0, i.formatDate)() + 828e5 + t.settlementTime <= Date.now() && (t.settlementing = !1, 
                            t.settlementEnd = !0, clearInterval(t.settlementTimer), t.settlementTimer = null);
                        }, 1e3);
                    },
                    gotoHomeBidding: function() {
                        var e = this.indexList.project_list;
                        if (Array.isArray(e) && e.length > 0) if (e.length > 1) this.showActionSheet = !0, 
                        this.itemList = e; else {
                            var n = e[0].sales_men_id, o = e[0].name;
                            t.navigateTo({
                                url: "/subPackages/lottery/pages/loginIndexDetail?project_id=0&sales_man_id=".concat(n, "&project_name=").concat(o)
                            });
                        } else a.tip.toast("您还没有入驻任何楼盘", "", "none");
                    },
                    gotoBiddingPage: function(e) {
                        t.navigateTo({
                            url: "/subPackages/lottery/pages/loginIndexDetail?project_id=".concat(e.id, "&sales_man_id=").concat(e.sales_men_id, "&project_name=").concat(e.name)
                        });
                    },
                    toggleRulesHandle: function() {
                        this.$refs.Dialog.dialog("竞价规则", "", {
                            showCancel: !1,
                            submitText: "知道了",
                            icon: "",
                            isColumnBtn: !0,
                            textAlign: "left"
                        });
                    },
                    stopMove: function() {
                        return !1;
                    },
                    gotoTransformGold: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/goldRecharge?type=".concat("ios" === (0, i.getPlatform)() ? "ios" : "android")
                        });
                    },
                    loadData: function() {
                        var t = this;
                        Promise.all([ o.default.sales.salesInfo(), o.default.lottery.getBiddingDetailConfig(), o.default.joinHomeSalesMan(), o.default.joinHomeProject() ]).then(function(e) {
                            var n = r(e, 4), o = n[0], a = n[1], i = n[2], c = n[3];
                            t.coins = o && o.data && o.data.sales_man.coins || 0, t.auctionRules = a.data, i && i.data && (t.indexList = i.data), 
                            c && c.data && (t.projectList = c.data);
                        });
                    },
                    computedTime: function() {
                        var t = this;
                        l = setInterval(function() {
                            var e = (0, i.formatDate)() + 828e5, n = Date.now();
                            if (t.showJoinInp = n > e, n > e) {
                                var o = function(t) {
                                    var e = new Date(t);
                                    return "".concat(e.getFullYear(), "-") + "".concat(e.getMonth() + 1 < 10 ? "0".concat(e.getMonth() + 1) : e.getMonth() + 1, "-") + (e.getDate() < 10 ? "0".concat(e.getDate()) : e.getDate());
                                }(Date.now() + 864e5);
                                e = (0, i.formatDate)("".concat(o, " 00:00:00"));
                            }
                            var a = (e - n) / 1e3, r = Math.floor(a % 86400 / 3600), c = Math.floor(a % 3600 / 60), l = Math.floor(a % 60);
                            r < 10 && (r = "0".concat(r)), c < 10 && (c = "0".concat(c)), l < 10 && (l = "0".concat(l)), 
                            t.time = "".concat(r, ":").concat(c, ":").concat(l);
                        }, 1e3);
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "42e1": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("3eb2"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    5929: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("5cec")).default);
        }).call(this, n("543d").createPage);
    },
    "5cec": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("1149"), a = n("42e1");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("948c");
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "948c": function(t, e, n) {
        "use strict";
        var o = n("eb50");
        n.n(o).a;
    },
    eb50: function(t, e, n) {}
}, [ [ "5929", "common/runtime", "common/vendor" ] ] ]);