require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/leaderboard/countdown" ], {
    "079d": function(e, t, a) {},
    "57d9": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = u(a("ca00")), r = u(a("d772"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = n.default.dayjs, i = o().format("YYYY-MM-DD HH:mm:ss");
        o.extend(r.default);
        var c = [ {
            value1: "-",
            value2: "-",
            text: "天"
        }, {
            value1: "-",
            value2: "-",
            text: "时"
        }, {
            value1: "-",
            value2: "-",
            text: "分"
        }, {
            value1: "-",
            value2: "-",
            text: "秒"
        } ], s = {
            props: {
                start: {
                    type: String,
                    default: function() {
                        return i;
                    }
                },
                end: {
                    type: String,
                    default: function() {
                        return i;
                    }
                }
            },
            data: function() {
                return {
                    showArray: c,
                    timer: null
                };
            },
            watch: {
                end: function(e) {
                    var t = this;
                    this.clearTimer(), this.setCountDownValue(e), this.timer = setInterval(function() {
                        t.setCountDownValue(e);
                    }, 1e3);
                }
            },
            destroyed: function() {
                this.clearTimer();
            },
            methods: {
                clearTimer: function() {
                    clearInterval(this.timer), this.timer = null;
                },
                zeroPrefix: function(e) {
                    return {
                        value1: e[1] ? e[0] : "0",
                        value2: e[1] || e[0]
                    };
                },
                mapTimeArray: function(e) {
                    if (e.asSeconds() < -.8) return this.clearTimer(), c;
                    var t = "".concat(e.days()).split(""), a = "".concat(e.hours()).split(""), n = "".concat(e.minutes()).split(""), r = "".concat(e.seconds()).split("");
                    return [ {
                        value1: this.zeroPrefix(t).value1,
                        value2: this.zeroPrefix(t).value2,
                        text: "天"
                    }, {
                        value1: this.zeroPrefix(a).value1,
                        value2: this.zeroPrefix(a).value2,
                        text: "时"
                    }, {
                        value1: this.zeroPrefix(n).value1,
                        value2: this.zeroPrefix(n).value2,
                        text: "分"
                    }, {
                        value1: this.zeroPrefix(r).value1,
                        value2: this.zeroPrefix(r).value2,
                        text: "秒"
                    } ];
                },
                setCountDownValue: function() {
                    var e = o(this.end || i, "YYYY-MM-DD HH:mm:ss").valueOf(), t = o().valueOf(), a = o.duration(e - t);
                    this.showArray = this.mapTimeArray(a);
                }
            }
        };
        t.default = s;
    },
    "9f73": function(e, t, a) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, r = [];
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return r;
        }), a.d(t, "a", function() {});
    },
    a3b7: function(e, t, a) {
        "use strict";
        var n = a("079d");
        a.n(n).a;
    },
    b52d: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("57d9"), r = a.n(n);
        for (var u in n) "default" !== u && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(u);
        t.default = r.a;
    },
    bd24: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("9f73"), r = a("b52d");
        for (var u in r) "default" !== u && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(u);
        a("a3b7");
        var o = a("f0c5"), i = Object(o.a)(r.default, n.b, n.c, !1, null, "536e18a7", null, !1, n.a, void 0);
        t.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/leaderboard/countdown-create-component", {
    "subPackages/activity/components/leaderboard/countdown-create-component": function(e, t, a) {
        a("543d").createComponent(a("bd24"));
    }
}, [ [ "subPackages/activity/components/leaderboard/countdown-create-component" ] ] ]);