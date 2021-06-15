(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/CommentTitle" ], {
    1404: function(t, e, n) {
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
    "2ea5": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                title: {
                    type: String,
                    default: function() {
                        return "全部评论";
                    }
                },
                num: {
                    type: Number,
                    default: function() {
                        return 0;
                    }
                }
            }
        };
        e.default = o;
    },
    "4c32": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("1404"), a = n("fff7");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("ab919");
        var u = n("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    ab919: function(t, e, n) {
        "use strict";
        var o = n("ae3e");
        n.n(o).a;
    },
    ae3e: function(t, e, n) {},
    fff7: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("2ea5"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/CommentTitle-create-component", {
    "pages/components/lotteryDetail/CommentTitle-create-component": function(t, e, n) {
        n("543d").createComponent(n("4c32"));
    }
}, [ [ "pages/components/lotteryDetail/CommentTitle-create-component" ] ] ]);