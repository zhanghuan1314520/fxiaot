require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BaseTimer" ], {
    2376: function(e, t, n) {
        "use strict";
        var i = n("ee4b");
        n.n(i).a;
    },
    3492: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            props: {
                startTime: {
                    type: Number,
                    default: 0
                },
                endTime: {
                    type: Number,
                    default: 0
                },
                dataApi: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                index: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    timer: null,
                    text: "距开始",
                    timeHour: "",
                    timeMin: "",
                    timeSecond: "",
                    state: 0,
                    once: []
                };
            },
            watch: {},
            destroyed: function() {
                this.timer && clearInterval(this.timer), this.once.length = 0;
            },
            mounted: function() {
                var e = this;
                this.once.push(function() {
                    e.text = "距开始", e.$emit("timerNotify", {
                        index: e.index,
                        timerState: 0
                    });
                }), this.once.push(function() {
                    e.text = "距结束", e.$emit("timerNotify", {
                        index: e.index,
                        timerState: 2
                    });
                }), this.once.push(function() {
                    e.text = "已结束", e.timeHour = "00", e.timeMin = "00", e.timeSecond = "00", clearInterval(e.timer), 
                    e.$emit("timerNotify", {
                        index: e.index,
                        timerState: 1
                    });
                }), this.timerout(), this.timer = setInterval(function() {
                    e.timerout();
                }, 1e3);
            },
            methods: {
                timerout: function() {
                    var e = new Date().getTime(), t = 0;
                    if (this.startTime > e) t = Math.round((this.startTime - e) / 1e3), this.once[0] && (this.once[0](), 
                    this.once[0] = null); else {
                        if (!(this.endTime > e)) return void (this.once[2] && (this.once[2](), this.once[2] = null));
                        t = Math.round((this.endTime - e) / 1e3), this.once[1] && (this.once[1](), this.once[1] = null);
                    }
                    var n = Math.floor(t / 3600), i = Math.floor(t / 60 % 60), o = t % 60, a = n > 0 ? n > 9 ? n : "0".concat(n) : "00", c = i > 0 ? i > 9 ? i : "0".concat(i) : "00", r = o > 0 ? o > 9 ? o : "0".concat(o) : "00";
                    this.timeHour = a, this.timeMin = c, this.timeSecond = r;
                }
            }
        };
        t.default = i;
    },
    "407f": function(e, t, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "77fc": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("407f"), o = n("89e4");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("2376");
        var c = n("f0c5"), r = Object(c.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = r.exports;
    },
    "89e4": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("3492"), o = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = o.a;
    },
    ee4b: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BaseTimer-create-component", {
    "subPackages/pageLayout/pages/components/BaseTimer-create-component": function(e, t, n) {
        n("543d").createComponent(n("77fc"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BaseTimer-create-component" ] ] ]);