(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiTab" ], {
    1551: function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    },
    "3cec": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("4aa8"), a = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = a.a;
    },
    "4aa8": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = "between", a = {
            props: {
                list: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                isScrollView: {
                    type: Boolean,
                    default: !1
                },
                justifyContent: {
                    type: String,
                    default: function() {
                        return o;
                    }
                },
                activeId: {
                    type: Number,
                    default: 0
                }
            },
            methods: {
                handleTabChange: function(t) {
                    t !== this.activeId && this.$emit("onChange", t);
                },
                stopHandle: function() {}
            }
        };
        n.default = a;
    },
    "769c": function(t, n, e) {},
    d05b: function(t, n, e) {
        "use strict";
        var o = e("769c");
        e.n(o).a;
    },
    f97f: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("1551"), a = e("3cec");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        e("d05b");
        var c = e("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiTab-create-component", {
    "components/UILayout/BusiTab-create-component": function(t, n, e) {
        e("543d").createComponent(e("f97f"));
    }
}, [ [ "components/UILayout/BusiTab-create-component" ] ] ]);