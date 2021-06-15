(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/components/RelatedProject" ], {
    "4fbe": function(t, e, n) {},
    "63d7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("90e7"), a = n("6b09");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("8df2");
        var r = n("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "6b09": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("e34f"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    "8df2": function(t, e, n) {
        "use strict";
        var o = n("4fbe");
        n.n(o).a;
    },
    "90e7": function(t, e, n) {
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
    e34f: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    projectId: {
                        type: Number,
                        default: function() {
                            return "";
                        }
                    },
                    name: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    max: {
                        type: Number,
                        default: function() {
                            return 20;
                        }
                    },
                    margin: {
                        type: String,
                        default: function() {
                            return "24rpx";
                        }
                    },
                    postType: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                computed: {
                    contentWidth: function() {
                        return "".concat(28 * (Number(this.max) + 1), "rpx");
                    }
                },
                methods: {
                    haddleClick: function() {
                        t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.projectId)
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/salesMan/components/RelatedProject-create-component", {
    "pages/salesMan/components/RelatedProject-create-component": function(t, e, n) {
        n("543d").createComponent(n("63d7"));
    }
}, [ [ "pages/salesMan/components/RelatedProject-create-component" ] ] ]);