(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/StatementOverFlowItem" ], {
    "1f57": function(t, e, n) {},
    "5bf9": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("ca00"), a = {
                props: {
                    content: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        expand: !1,
                        showToggle: !1
                    };
                },
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var n = e;
                        t.createSelectorQuery().in(e).select(".text").boundingClientRect(function(t) {
                            t && (n.showToggle = t.height + 10 > (0, o.transformRpx)(144));
                        }).exec();
                    });
                },
                methods: {
                    toggleExpand: function() {
                        this.expand = !this.expand;
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    7185: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("5bf9"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    "84b3": function(t, e, n) {
        "use strict";
        var o = n("1f57");
        n.n(o).a;
    },
    "8b07": function(t, e, n) {
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
    e741: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("8b07"), a = n("7185");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("84b3");
        var r = n("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/StatementOverFlowItem-create-component", {
    "pages/components/lotteryDetail/StatementOverFlowItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("e741"));
    }
}, [ [ "pages/components/lotteryDetail/StatementOverFlowItem-create-component" ] ] ]);