require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/ProjectBoxItem" ], {
    "03cd": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("6a68"), c = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = c.a;
    },
    "63b6": function(t, e, n) {
        "use strict";
        var o = n("c1a5");
        n.n(o).a;
    },
    "6a68": function(t, e, n) {
        "use strict";
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
                projectData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            }
        };
        e.default = o;
    },
    "9b76c": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("ad43"), c = n("03cd");
        for (var a in c) "default" !== a && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(a);
        n("63b6");
        var r = n("f0c5"), u = Object(r.a)(c.default, o.b, o.c, !1, null, "f319c39c", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    ad43: function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.projectData, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    a0: {
                        width: "100%",
                        height: "204rpx",
                        "border-radius": "4rpx"
                    }
                };
            }));
            t._isMounted || (t.e0 = function() {}), t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    c1a5: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/ProjectBoxItem-create-component", {
    "subPackages/activity/components/ProjectBoxItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("9b76c"));
    }
}, [ [ "subPackages/activity/components/ProjectBoxItem-create-component" ] ] ]);