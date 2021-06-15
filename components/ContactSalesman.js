(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ContactSalesman" ], {
    "190f": function(n, t, e) {
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
    "28c4": function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(e("4ec3")), a = e("ca00"), c = {
            components: {
                BusiButton: function() {
                    e.e("components/UILayout/BusiButton").then(function() {
                        return resolve(e("3f66"));
                    }.bind(null, e)).catch(e.oe);
                },
                Authorization: function() {
                    e.e("components/Authorization").then(function() {
                        return resolve(e("5326"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                salesmanId: {
                    type: [ String, Number ],
                    default: ""
                },
                projectId: {
                    type: [ String, Number ],
                    required: !0,
                    default: ""
                },
                dataContent: {
                    type: String,
                    default: "底部按钮"
                }
            },
            methods: {
                onSuccess: function() {
                    o.default.projects.recommendSalesman(this.projectId, this.salesmanId).then(function(n) {
                        n.data && n.data.url && (0, a.pageJump)(n.data.url);
                    });
                },
                emptyHandle: function() {}
            }
        };
        t.default = c;
    },
    aaf0: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("28c4"), a = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = a.a;
    },
    bf9f: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("190f"), a = e("aaf0");
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        var u = e("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ContactSalesman-create-component", {
    "components/ContactSalesman-create-component": function(n, t, e) {
        e("543d").createComponent(e("bf9f"));
    }
}, [ [ "components/ContactSalesman-create-component" ] ] ]);