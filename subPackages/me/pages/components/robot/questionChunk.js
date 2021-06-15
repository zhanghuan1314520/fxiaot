require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/questionChunk" ], {
    5432: function(e, n, t) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
    },
    ad0be: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("5432"), c = t("d34c");
        for (var u in c) "default" !== u && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(u);
        var a = t("f0c5"), s = Object(a.a)(c.default, o.b, o.c, !1, null, "dcc95a22", null, !1, o.a, void 0);
        n.default = s.exports;
    },
    b06f: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = t("ca00"), c = {
            components: {
                textMsg: function() {
                    t.e("subPackages/me/pages/components/robot/msg/textMsg").then(function() {
                        return resolve(t("24d4"));
                    }.bind(null, t)).catch(t.oe);
                },
                conjecture: function() {
                    t.e("subPackages/me/pages/components/robot/conjecture").then(function() {
                        return resolve(t("4ecf"));
                    }.bind(null, t)).catch(t.oe);
                },
                category: function() {
                    t.e("subPackages/me/pages/components/robot/category").then(function() {
                        return resolve(t("dc09"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    introduceMsg: {
                        content: "亲，我是你的在线助手，有什么问题可以问我哦！",
                        created_at: (0, o.dayjs)().format("YYYY-MM-DD HH:mm:ss")
                    }
                };
            },
            mounted: function() {},
            methods: {}
        };
        n.default = c;
    },
    d34c: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("b06f"), c = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/questionChunk-create-component", {
    "subPackages/me/pages/components/robot/questionChunk-create-component": function(e, n, t) {
        t("543d").createComponent(t("ad0be"));
    }
}, [ [ "subPackages/me/pages/components/robot/questionChunk-create-component" ] ] ]);