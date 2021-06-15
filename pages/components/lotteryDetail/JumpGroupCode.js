(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/JumpGroupCode" ], {
    "5bb7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("7e57"), a = n("8753");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("856a");
        var r = n("f0c5"), i = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "7e57": function(t, e, n) {
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
    "856a": function(t, e, n) {
        "use strict";
        var o = n("a44a");
        n.n(o).a;
    },
    8753: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f279"), a = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = a.a;
    },
    a44a: function(t, e, n) {},
    f279: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    isShowGroupTips: {
                        type: Boolean,
                        default: !1
                    },
                    url: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        isShow: !1,
                        timer: null
                    };
                },
                watch: {
                    isShowGroupTips: {
                        handler: function(e) {
                            var n = this;
                            if (this.isShow = e, e) {
                                var o = 3;
                                this.timer = setInterval(function() {
                                    0 === o && (clearInterval(n.timer), n.timer = null, n.isShow = !1, n.$emit("update:isShowGroupTips", !1), 
                                    t.navigateTo({
                                        url: n.url
                                    })), o -= 1;
                                }, 1e3);
                            }
                        },
                        immediate: !0
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/JumpGroupCode-create-component", {
    "pages/components/lotteryDetail/JumpGroupCode-create-component": function(t, e, n) {
        n("543d").createComponent(n("5bb7"));
    }
}, [ [ "pages/components/lotteryDetail/JumpGroupCode-create-component" ] ] ]);