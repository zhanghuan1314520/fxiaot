require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/HomeLiverItem" ], {
    "1bca": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.formatStatus(t.item)), n = t.formatStatus(t.item), a = t.formatStatus(t.item), c = t.isStarted(), i = t.isEnd(), o = !c || i ? t.isEnd() : null, r = c && !i || !o ? null : t.formatEndTime(t.item), s = c && !i || o ? null : t.remind(t.item), m = t.formatStatus(t.item), u = t.formatStatus(t.item);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: n,
                    m2: a,
                    m3: c,
                    m4: i,
                    m5: o,
                    m6: r,
                    m7: s,
                    m8: m,
                    m9: u
                }
            });
        }, c = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    "5a44": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("da53"), c = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = c.a;
    },
    6448: function(t, e, n) {},
    "697b": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("1bca"), c = n("5a44");
        for (var i in c) "default" !== i && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(i);
        n("e94d");
        var o = n("f0c5"), r = Object(o.a)(c.default, a.b, a.c, !1, null, "a7486c6e", null, !1, a.a, void 0);
        e.default = r.exports;
    },
    da53: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("ca00"), c = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("4ec3")), i = n("b628"), o = {
                components: {
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
                    }
                },
                data: function() {
                    return {
                        bigPlay: "https://imgcdn.huanjutang.com/file/2020/10/11/1d24553e5e87a58ac9d7629f05bc1697.png",
                        liverStatus: {
                            remind: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/21339611ea8ba87406df54a6bbdfc8a9.png",
                                width: "52rpx",
                                button: "https://imgcdn.huanjutang.com/file/2020/10/11/bf14029f4bb49262f33433e0ccb50bbd.png",
                                background: "#41e2ff",
                                text: "提醒我"
                            },
                            subscribed: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/21339611ea8ba87406df54a6bbdfc8a9.png",
                                width: "52rpx",
                                button: "https://imgcdn.huanjutang.com/file/2020/10/11/a2c730fa5c96bc5d590b9c893d41b6d8.png",
                                background: "#41e2ff",
                                text: "已订阅"
                            },
                            started: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/817b3d3bb6e33cd57b7049fcc79da05e.png",
                                width: "74rpx",
                                button: "https://imgcdn.huanjutang.com/file/2020/10/11/1a8d69d1c1a11eac10bd43fb779ae4cd.png",
                                background: "#ffd541",
                                text: "进入直播"
                            },
                            finished: {
                                image: "https://imgcdn.huanjutang.com/file/2020/10/11/c6f67a9b0ebf6eb2a89f3e48efeca2ce.png",
                                width: "52rpx",
                                button: "https://imgcdn.huanjutang.com/file/2020/10/11/3fb817d03e9c0d5db07c04e1405678cd.png",
                                background: "#ff89a8",
                                text: "进入回放"
                            }
                        },
                        timer: null,
                        timeStr: ""
                    };
                },
                created: function() {
                    var t = this;
                    this.isStarted() && !this.isEnd() && (this.formatTime(this.item.started_at), this.timer = setInterval(function() {
                        t.formatTime(t.item.started_at);
                    }, 1e3));
                },
                destroyed: function() {
                    this.timer && clearInterval(this.timer);
                },
                methods: {
                    emptyFunction: function() {},
                    isStarted: function() {
                        return (0, a.dayjs)().format("YYYY-MM-DD HH:mm:ss") > this.item.started_at;
                    },
                    isEnd: function() {
                        return (0, a.dayjs)().format("YYYY-MM-DD HH:mm:ss") > this.item.ended_at;
                    },
                    formatEndTime: function() {
                        var t = (0, a.dayjs)(this.item.ended_at, "YYYY-MM-DD HH:mm:ss").toDate(), e = t.getMonth() + 1, n = t.getDate(), c = t.getHours(), i = t.getMinutes();
                        return c = c < 10 ? "0".concat(parseInt(c, 10)) : c, i = i < 10 ? "0".concat(parseInt(i, 10)) : i, 
                        "".concat(e, "月").concat(n, "日 ").concat(c, ":").concat(i);
                    },
                    remind: function(t) {
                        if (t) {
                            var e = (0, a.dayjs)(t.started_at, "YYYY-MM-DD HH:mm:ss").toDate(), n = e.getMonth() + 1, c = e.getDate(), i = e.getHours(), o = e.getMinutes();
                            i = i < 10 ? "0".concat(parseInt(i, 10)) : i, o = o < 10 ? "0".concat(parseInt(o, 10)) : o;
                            var r = new Date(), s = r.getFullYear(), m = r.getMonth() + 1, u = r.getDate(), d = new Date("".concat(s, "/").concat(m, "/").concat(u, " 23:59:59")).getTime() + 864e5, f = new Date("".concat(s, "/").concat(m, "/").concat(u, " 23:59:59")).getTime() + 1728e5;
                            return e.getTime() < new Date("".concat(s, "/").concat(m, "/").concat(u, " 23:59:59")).getTime() ? "今天 ".concat(i, ":").concat(o, " 开播") : e.getTime() < d ? "明天 ".concat(i, ":").concat(o, " 开播") : e.getTime() < f ? "后天 ".concat(i, ":").concat(o, " 开播") : "".concat(n, "月").concat(c, "日 ").concat(i, ":").concat(o, " 开播");
                        }
                        return "";
                    },
                    formatStatus: function(t) {
                        var e, n = (0, a.dayjs)().format("YYYY-MM-DD HH:mm:ss");
                        return n < t.started_at && (e = 0 === t.user_is_reminded ? "remind" : "subscribed"), 
                        n > t.started_at && n < t.ended_at && (e = "started"), n > t.ended_at && (e = "finished"), 
                        e;
                    },
                    formatTime: function(t) {
                        var e = new Date().getTime(), n = (0, a.dayjs)(t, "YYYY-MM-DD HH:mm:ss").valueOf(), c = Math.round((e - n) / 1e3);
                        if (c < 0) clearInterval(this.timer); else {
                            var i, o, r, s = parseInt(c / 3600 / 24, 10), m = parseInt(c / 3600 % 24, 10), u = parseInt(c / 60 % 60, 10), d = c % 60, f = s > 0 ? s : "";
                            i = m > 0 ? m > 9 ? m : "0".concat(m) : "00", o = u > 0 ? u > 9 ? u : "0".concat(u) : "00", 
                            r = d > 0 ? d > 9 ? d : "0".concat(d) : "00", this.timeStr = f ? "".concat(f, "天").concat(i, ":").concat(o, ":").concat(r) : "".concat(i, ":").concat(o, ":").concat(r);
                        }
                    },
                    goPlay: function() {
                        var e = encodeURIComponent(JSON.stringify({
                            path: "subPackages/liver/pages/liverList",
                            pid: 1
                        }));
                        t.navigateTo({
                            url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(this.item.roomid, "&custom_params=").concat(e)
                        });
                    },
                    subscribe: function() {
                        var t = this;
                        this.isStarted() || 0 !== this.item.user_is_reminded ? this.goPlay() : c.default.activity.subscribe({
                            activity_id: this.item.id,
                            promotion_id: this.item.activity_promotion_id,
                            inform_time: this.item.started_at,
                            type: 1
                        }).then(function(e) {
                            0 === e.code && (i.tip.toast("订阅成功"), t.$set(t.item, "user_is_reminded", 1), t.$forceUpdate());
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    e94d: function(t, e, n) {
        "use strict";
        var a = n("6448");
        n.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/HomeLiverItem-create-component", {
    "subPackages/activity/components/HomeLiverItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("697b"));
    }
}, [ [ "subPackages/activity/components/HomeLiverItem-create-component" ] ] ]);