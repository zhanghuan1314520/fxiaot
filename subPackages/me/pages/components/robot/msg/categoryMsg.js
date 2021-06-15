require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/msg/categoryMsg" ], {
    "512e": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n("b628"), c = {
            inject: [ "robot" ],
            components: {
                BaseLayout: function() {
                    n.e("subPackages/me/pages/components/robot/BaseLayout").then(function() {
                        return resolve(n("0931"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                message: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                isReceive: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    current: 0
                };
            },
            computed: {
                categoryList: function() {
                    return this.message.content;
                },
                swiperList: function() {
                    for (var e = o.common.deepCopy(this.categoryList), t = []; e.length > 0; ) t.push(e.splice(0, 6));
                    return t;
                }
            },
            mounted: function() {
                this.calcHeight();
            },
            methods: {
                calcHeight: function() {}
            }
        };
        t.default = c;
    },
    "8cfe": function(e, t, n) {},
    9833: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("f481"), c = n("d7e7");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("b57b");
        var r = n("f0c5"), s = Object(r.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = s.exports;
    },
    b57b: function(e, t, n) {
        "use strict";
        var o = n("8cfe");
        n.n(o).a;
    },
    d7e7: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("512e"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    },
    f481: function(e, t, n) {
        "use strict";
        var o = function() {
            var e = this;
            e.$createElement, e._self._c, e._isMounted || (e.e0 = function(t) {
                return e.current = t.detail.current;
            }, e.e1 = function(t, n) {
                var o = arguments[arguments.length - 1].currentTarget.dataset, c = o.eventParams || o["event-params"];
                return n = c.j, e.robot.askQuestion(n);
            });
        }, c = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/msg/categoryMsg-create-component", {
    "subPackages/me/pages/components/robot/msg/categoryMsg-create-component": function(e, t, n) {
        n("543d").createComponent(n("9833"));
    }
}, [ [ "subPackages/me/pages/components/robot/msg/categoryMsg-create-component" ] ] ]);