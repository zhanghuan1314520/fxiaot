require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/HomeGroupItem" ], {
    b2f5: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("ecde"), c = i("cf11");
        for (var a in c) "default" !== a && function(t) {
            i.d(e, t, function() {
                return c[t];
            });
        }(a);
        i("d6ba");
        var o = i("f0c5"), s = Object(o.a)(c.default, n.b, n.c, !1, null, "2f57b64a", null, !1, n.a, void 0);
        e.default = s.exports;
    },
    b83d: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i("ca00"), c = i("b628"), a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(i("4ec3")), o = {
                components: {
                    Authorization: function() {
                        i.e("components/Authorization").then(function() {
                            return resolve(i("5326"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    JoinModal: function() {
                        Promise.all([ i.e("subPackages/activity/common/vendor"), i.e("subPackages/activity/components/JoinModal") ]).then(function() {
                            return resolve(i("cb5e"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/2020712180428081.png",
                        projectStatus: {
                            join: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/060b564c4423ca3c58fa0d6f2fe92c59.png",
                                text: "立即参团"
                            },
                            view: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/fb5cff79b0f80d2f8f9f6c3ab3a34b9e.png",
                                text: "查看优惠"
                            },
                            remind: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/1e2bde1a6fe0d1e67254901e4e010e5a.png",
                                text: "提醒我"
                            },
                            subscribed: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/a2c730fa5c96bc5d590b9c893d41b6d8.png",
                                text: "已订阅"
                            },
                            end: {
                                image: "https://imgcdn.huanjutang.com/assets/img/202010191344488081.png",
                                text: "已结束"
                            }
                        },
                        timer: null,
                        timeStr: "",
                        ended: !1
                    };
                },
                computed: {
                    avatarList: function() {
                        return this.item.user_list.slice(0, 4);
                    }
                },
                mounted: function() {
                    var t = this;
                    this.formatTime(this.item), this.timer = setInterval(function() {
                        t.formatTime(t.item);
                    }, 1e3);
                },
                destroyed: function() {
                    this.timer && clearInterval(this.timer);
                },
                methods: {
                    emptyFunction: function() {},
                    formatUnit: function(t) {
                        return (0, n.formatUnitTenThousand)(t);
                    },
                    formatStatus: function(t) {
                        var e = "", i = this.checkReceive();
                        return 0 !== t.user_is_reminded || i || (e = "remind"), 1 !== t.user_is_reminded || i || (e = "subscribed"), 
                        0 === t.user_is_received && i && (e = "join"), 1 === t.user_is_received && i && (e = "view"), 
                        this.ended && (e = "end"), e;
                    },
                    formatTime: function(t) {
                        var e = new Date().getTime(), i = (0, n.dayjs)(t.start_time, "YYYY-MM-DD HH:mm:ss").valueOf(), c = (0, 
                        n.dayjs)(t.end_time, "YYYY-MM-DD HH:mm:ss").valueOf(), a = (0, n.dayjs)(t.receive_start_time, "YYYY-MM-DD HH:mm:ss").valueOf(), o = (0, 
                        n.dayjs)(t.receive_end_time, "YYYY-MM-DD HH:mm:ss").valueOf(), s = a > 0 && !Number.isNaN(a) && o > 0 && !Number.isNaN(o), r = s ? a : i, u = s ? o : c, m = 0, d = "";
                        if (e < a && (m = Math.round((r - e) / 1e3), d = "距开始"), e < u && e > r && (m = Math.round((u - e) / 1e3), 
                        d = "距结束"), e > u) return this.timeStr = "已结束", this.ended = !0, void clearInterval(this.timer);
                        if (m <= 0) clearInterval(this.timer); else {
                            var f, l, h, v = parseInt(m / 3600 / 24, 10), p = parseInt(m / 3600 % 24, 10), b = parseInt(m / 60 % 60, 10), _ = m % 60, g = v > 0 ? v : "";
                            f = p > 0 ? p > 9 ? p : "0".concat(p) : "00", l = b > 0 ? b > 9 ? b : "0".concat(b) : "00", 
                            h = _ > 0 ? _ > 9 ? _ : "0".concat(_) : "00", this.timeStr = g ? "".concat(d, " ").concat(g, "天 ").concat(f, ":").concat(l, ":").concat(h) : "".concat(d, " ").concat(f, ":").concat(l, ":").concat(h);
                        }
                    },
                    checkReceive: function() {
                        return "0000-00-00 00:00:00" !== this.item.receive_start_time && (0, n.dayjs)().format("YYYY-MM-DD HH:mm:ss") > this.item.receive_start_time;
                    },
                    haddleClick: function() {
                        var e = this;
                        if (!this.ended) {
                            var i = this.checkReceive();
                            0 !== this.item.user_is_reminded || i || a.default.activity.subscribe({
                                activity_id: this.item.id,
                                promotion_id: this.item.activity_promotion_id,
                                inform_time: this.item.receive_start_time,
                                type: 1
                            }).then(function(t) {
                                0 === t.code && (c.tip.toast("订阅成功"), e.$set(e.item, "user_is_reminded", 1));
                            }), 0 === this.item.user_is_received && i && this.$refs["joinModal".concat(this.item.id)].open(), 
                            1 === this.item.user_is_received && i && t.navigateTo({
                                url: "/subPackages/activity/pages/coupon"
                            });
                        }
                    },
                    success: function() {
                        this.$set(this.item, "user_is_received", 1), this.$set(this.item, "user_count", this.item.user_count + 1);
                    },
                    toProjectDetail: function() {
                        t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.item.project_id)
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, i("543d").default);
    },
    b8cb: function(t, e, i) {},
    cf11: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("b83d"), c = i.n(n);
        for (var a in n) "default" !== a && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = c.a;
    },
    d6ba: function(t, e, i) {
        "use strict";
        var n = i("b8cb");
        i.n(n).a;
    },
    ecde: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.formatUnit(t.item.user_count)), i = t.formatStatus(t.item), n = t.formatStatus(t.item);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: i,
                    m2: n
                }
            });
        }, c = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return c;
        }), i.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/HomeGroupItem-create-component", {
    "subPackages/activity/components/HomeGroupItem-create-component": function(t, e, i) {
        i("543d").createComponent(i("b2f5"));
    }
}, [ [ "subPackages/activity/components/HomeGroupItem-create-component" ] ] ]);