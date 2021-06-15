require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/RelatedProject" ], {
    "0b7b": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
    },
    "26c6": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
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
                        e.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.projectId)
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    "62a0": function(e, t, n) {
        "use strict";
        var o = n("7584");
        n.n(o).a;
    },
    7584: function(e, t, n) {},
    a6de: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("0b7b"), c = n("be6d");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("62a0");
        var u = n("f0c5"), r = Object(u.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    be6d: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("26c6"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/RelatedProject-create-component", {
    "subPackages/news/components/RelatedProject-create-component": function(e, t, n) {
        n("543d").createComponent(n("a6de"));
    }
}, [ [ "subPackages/news/components/RelatedProject-create-component" ] ] ]);