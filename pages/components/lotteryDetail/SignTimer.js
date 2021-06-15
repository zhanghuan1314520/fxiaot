(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/SignTimer" ], {
    "0716": function(t, e, n) {},
    "30b1": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("a34a"));
        function o(t, e, n, r, o, i, a) {
            try {
                var u = t[i](a), c = u.value;
            } catch (t) {
                return void n(t);
            }
            u.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        var i = {
            props: {
                endTime: {
                    type: Number,
                    default: 0
                },
                text: {
                    type: String,
                    default: ""
                },
                show: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    timer: null,
                    timeStr: "",
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            },
            watch: {
                endTime: function() {
                    var t = function(t) {
                        return function() {
                            var e = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t.apply(e, n);
                                function u(t) {
                                    o(a, r, i, u, c, "next", t);
                                }
                                function c(t) {
                                    o(a, r, i, u, c, "throw", t);
                                }
                                u(void 0);
                            });
                        };
                    }(r.default.mark(function t(e, n) {
                        var o = this;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e && e !== n && (this.timerout.call(this), this.timer = setInterval(function() {
                                    o.timerout.call(o);
                                }, 1e3));

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                }()
            },
            destroyed: function() {
                this.timer && clearInterval(this.timer);
            },
            mounted: function() {},
            methods: {
                timerout: function() {
                    var t = new Date().getTime(), e = Math.round((this.endTime - t) / 1e3);
                    if (e < 0) return clearInterval(this.timer), void (this.show = !1);
                    var n = parseInt(e / 3600 / 24, 10), r = parseInt(e / 3600 % 24, 10), o = parseInt(e / 60 % 60, 10), i = e % 60, a = n > 0 ? n : "", u = r > 0 ? r > 9 ? r : "0".concat(r) : "00", c = o > 0 ? o > 9 ? o : "0".concat(o) : "00", s = i > 0 ? i > 9 ? i : "0".concat(i) : "00";
                    this.days = a, this.hours = u, this.minutes = c, this.seconds = s;
                }
            }
        };
        e.default = i;
    },
    5529: function(t, e, n) {
        "use strict";
        var r = n("0716");
        n.n(r).a;
    },
    "8e8f": function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "97ce": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("8e8f"), o = n("b1b1");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("5529");
        var a = n("f0c5"), u = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    b1b1: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("30b1"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/SignTimer-create-component", {
    "pages/components/lotteryDetail/SignTimer-create-component": function(t, e, n) {
        n("543d").createComponent(n("97ce"));
    }
}, [ [ "pages/components/lotteryDetail/SignTimer-create-component" ] ] ]);