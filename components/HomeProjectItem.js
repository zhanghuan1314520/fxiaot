(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/HomeProjectItem" ], {
    "115e": function(t, e, n) {
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
    "514a": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c6e7"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    "583e": function(t, e, n) {},
    b01e: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("115e"), a = n("514a");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("b224");
        var u = n("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    b224: function(t, e, n) {
        "use strict";
        var o = n("583e");
        n.n(o).a;
    },
    c6e7: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("ca00"), a = {
                props: {
                    itemsData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    updating: {
                        type: Boolean,
                        value: !1
                    },
                    titleData: {
                        type: String,
                        default: ""
                    },
                    content: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        list: []
                    };
                },
                watch: {
                    itemsData: {
                        handler: function(t) {
                            this.list = t;
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    clickAnalysis: function() {},
                    toUrlHandle: function(e) {
                        var n = e.currentTarget.dataset.index, o = this.list[n];
                        t.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(o.id, "&project_name=").concat(o.name)
                        });
                    },
                    navigateTo: function(t) {
                        (0, o.pageJump)(t);
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/HomeProjectItem-create-component", {
    "components/HomeProjectItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("b01e"));
    }
}, [ [ "components/HomeProjectItem-create-component" ] ] ]);