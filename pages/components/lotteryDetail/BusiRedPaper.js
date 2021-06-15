(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/BusiRedPaper" ], {
    "0810": function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, u = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {});
    },
    "1ec3": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4380"), u = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = u.a;
    },
    4380: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                Authorization: function() {
                    n.e("components/Authorization").then(function() {
                        return resolve(n("5326"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                status: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    seconds: "10",
                    innerStatus: 0,
                    timeout: null
                };
            },
            computed: {
                countdown: function(t) {
                    var e = t.seconds;
                    return e < 10 ? "0".concat(e) : e;
                }
            },
            watch: {
                status: {
                    handler: function(t) {
                        this.innerStatus = 0 === Number(t) ? 1 : 3, 1 === Number(this.innerStatus) && this.startCountdown();
                    },
                    immediate: !0
                }
            },
            boforeDestroy: function() {
                this.timeout && (clearTimeout(this.timeout), this.timeout = null);
            },
            methods: {
                startCountdown: function() {
                    var t = this;
                    this.timeout = setTimeout(function() {
                        t.seconds -= 1, 0 !== t.seconds ? t.startCountdown() : (t.innerStatus = 2, clearTimeout(t.timeout), 
                        t.timeout = null);
                    }, 1e3);
                },
                clickGet: function() {
                    this.$emit("clickGet");
                },
                clickGetOut: function() {
                    this.$emit("clickGetOut");
                }
            }
        };
        e.default = o;
    },
    "998d": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("0810"), u = n("1ec3");
        for (var i in u) "default" !== i && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(i);
        n("d71c");
        var c = n("f0c5"), a = Object(c.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    },
    ce36: function(t, e, n) {},
    d71c: function(t, e, n) {
        "use strict";
        var o = n("ce36");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/BusiRedPaper-create-component", {
    "pages/components/lotteryDetail/BusiRedPaper-create-component": function(t, e, n) {
        n("543d").createComponent(n("998d"));
    }
}, [ [ "pages/components/lotteryDetail/BusiRedPaper-create-component" ] ] ]);