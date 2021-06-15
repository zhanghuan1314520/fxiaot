(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/comment/components/unifyUI/vote-result" ], {
    1465: function(t, e, n) {},
    3924: function(t, e, n) {
        "use strict";
        var o = n("1465");
        n.n(o).a;
    },
    "3f83": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                agreePrecent: {
                    type: Number,
                    default: 0
                },
                disagreePrecent: {
                    type: Number,
                    default: 0
                },
                voteType: {
                    type: String,
                    default: ""
                },
                upVoteText: {
                    type: String,
                    default: ""
                },
                downVoteText: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                upVoteTextStr: function() {
                    return "up_vote" === this.voteType ? "".concat(this.agreePrecent, "%").concat(this.upVoteText, "（已投）") : "".concat(this.agreePrecent, "%").concat(this.upVoteText);
                },
                downVoteTextStr: function() {
                    return "down_vote" === this.voteType ? "".concat(this.disagreePrecent, "%").concat(this.downVoteText, "（已投）") : "".concat(this.disagreePrecent, "%").concat(this.downVoteText);
                }
            }
        };
        e.default = o;
    },
    b199: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("bbda"), c = n("d347");
        for (var u in c) "default" !== u && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(u);
        n("3924");
        var a = n("f0c5"), r = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    bbda: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    d347: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("3f83"), c = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/comment/components/unifyUI/vote-result-create-component", {
    "subPackages/comment/components/unifyUI/vote-result-create-component": function(t, e, n) {
        n("543d").createComponent(n("b199"));
    }
}, [ [ "subPackages/comment/components/unifyUI/vote-result-create-component" ] ] ]);