(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SoilTakenItem/soilTokenItem" ], {
    "16a7": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("bdb0"), a = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = a.a;
    },
    "7c69": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("dda3"), a = e("16a7");
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        e("8d19");
        var u = e("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    "8d19": function(n, t, e) {
        "use strict";
        var o = e("ebda");
        e.n(o).a;
    },
    bdb0: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                props: {
                    soilData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    toUrlHandle: function(t) {
                        var e = t.currentTarget.dataset.item;
                        n.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(e.id, "&project_name=").concat(e.name)
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    dda3: function(n, t, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
    },
    ebda: function(n, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SoilTakenItem/soilTokenItem-create-component", {
    "components/SoilTakenItem/soilTokenItem-create-component": function(n, t, e) {
        e("543d").createComponent(e("7c69"));
    }
}, [ [ "components/SoilTakenItem/soilTokenItem-create-component" ] ] ]);