require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/PrizeContent" ], {
    4776: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a("7f47"), n = a("c533");
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        a("fa1b");
        var u = a("f0c5"), o = Object(u.a)(n.default, r.b, r.c, !1, null, "f23002f0", null, !1, r.a, void 0);
        t.default = o.exports;
    },
    "7f47": function(e, t, a) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, n = [];
        a.d(t, "b", function() {
            return r;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {});
    },
    c533: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a("fdd4"), n = a.n(r);
        for (var i in r) "default" !== i && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = n.a;
    },
    fa1b: function(e, t, a) {
        "use strict";
        var r = a("fd8d");
        a.n(r).a;
    },
    fd8d: function(e, t, a) {},
    fdd4: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = i(a("ca00")), n = i(a("d772"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var u = r.default.dayjs;
        u.extend(n.default);
        var o = [ {
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
                item: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    showArray: o,
                    timer: null
                };
            },
            watch: {
                item: function(e) {
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
                    if (e.asSeconds() < -.8) return this.clearTimer(), this.$emit("update"), o;
                    var t = "".concat(e.days()).split(""), a = "".concat(e.hours()).split(""), r = "".concat(e.minutes()).split(""), n = "".concat(e.seconds()).split("");
                    return [ {
                        value1: this.zeroPrefix(t).value1,
                        value2: this.zeroPrefix(t).value2,
                        text: "天"
                    }, {
                        value1: this.zeroPrefix(a).value1,
                        value2: this.zeroPrefix(a).value2,
                        text: "时"
                    }, {
                        value1: this.zeroPrefix(r).value1,
                        value2: this.zeroPrefix(r).value2,
                        text: "分"
                    }, {
                        value1: this.zeroPrefix(n).value1,
                        value2: this.zeroPrefix(n).value2,
                        text: "秒"
                    } ];
                },
                setCountDownValue: function(e) {
                    if (e.start_time && e.lottery_time) {
                        var t = e.start_time, a = e.lottery_time, r = e.end_time, n = u(t, "YYYY-MM-DD HH:mm:ss").valueOf(), i = u(a, "YYYY-MM-DD HH:mm:ss").valueOf(), s = u(r, "YYYY-MM-DD HH:mm:ss").valueOf(), c = u().valueOf();
                        if (1 === e.is_lottery) return this.showArray = o, void this.clearTimer();
                        if (0 !== e.status.code) {
                            if (2 === e.status.code || 1 === e.status.code) {
                                var l = u.duration(i - c);
                                this.showArray = this.mapTimeArray(l), 2 === e.status.code && u.duration(s - c).asSeconds() < -.8 && this.$emit("update");
                            }
                        } else {
                            var f = u.duration(n - c);
                            this.showArray = this.mapTimeArray(f);
                        }
                    } else this.clearTimer();
                }
            }
        };
        t.default = s;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/PrizeContent-create-component", {
    "subPackages/activity/components/PrizeContent-create-component": function(e, t, a) {
        a("543d").createComponent(a("4776"));
    }
}, [ [ "subPackages/activity/components/PrizeContent-create-component" ] ] ]);