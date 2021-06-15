(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consult/components/HotArticleItem" ], {
    "0c2f1": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("bfbb"), c = n("b87a");
        for (var a in c) "default" !== a && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(a);
        n("95c5");
        var r = n("f0c5"), u = Object(r.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "6e5c": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                components: {
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                methods: {
                    toDetailHandle: function() {
                        this.item.skeleton || t.navigateTo({
                            url: this.item.url
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    "95c5": function(t, e, n) {
        "use strict";
        var o = n("a95c");
        n.n(o).a;
    },
    a95c: function(t, e, n) {},
    b87a: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("6e5c"), c = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = c.a;
    },
    bfbb: function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.item.skeleton ? null : {
                height: "196rpx",
                "border-top-right-radius": "16rpx",
                "border-top-left-radius": "16rpx"
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e
                }
            });
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/consult/components/HotArticleItem-create-component", {
    "pages/consult/components/HotArticleItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("0c2f1"));
    }
}, [ [ "pages/consult/components/HotArticleItem-create-component" ] ] ]);