require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/chatItem" ], {
    2620: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            components: {
                textMsg: function() {
                    n.e("subPackages/me/pages/components/robot/msg/textMsg").then(function() {
                        return resolve(n("24d4"));
                    }.bind(null, n)).catch(n.oe);
                },
                categoryMsg: function() {
                    n.e("subPackages/me/pages/components/robot/msg/categoryMsg").then(function() {
                        return resolve(n("9833"));
                    }.bind(null, n)).catch(n.oe);
                },
                quesMsg: function() {
                    n.e("subPackages/me/pages/components/robot/msg/quesMsg").then(function() {
                        return resolve(n("2dde"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                item: {
                    type: Object,
                    default: function() {}
                }
            },
            data: function() {
                return {};
            },
            computed: {
                user: function() {
                    return {
                        content: this.item.askContnent,
                        created_at: this.item.askTime
                    };
                },
                robot: function() {
                    return {
                        content: this.item.rspContent,
                        created_at: this.item.rspTime
                    };
                }
            },
            mounted: function() {},
            methods: {}
        };
        t.default = o;
    },
    4115: function(e, t, n) {
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
    e8bd: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2620"), c = n.n(o);
        for (var s in o) "default" !== s && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = c.a;
    },
    f5d6: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("4115"), c = n("e8bd");
        for (var s in c) "default" !== s && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(s);
        var a = n("f0c5"), u = Object(a.a)(c.default, o.b, o.c, !1, null, "32ce8cd9", null, !1, o.a, void 0);
        t.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/chatItem-create-component", {
    "subPackages/me/pages/components/robot/chatItem-create-component": function(e, t, n) {
        n("543d").createComponent(n("f5d6"));
    }
}, [ [ "subPackages/me/pages/components/robot/chatItem-create-component" ] ] ]);