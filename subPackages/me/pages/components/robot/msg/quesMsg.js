require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/msg/quesMsg" ], {
    "13a9": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("ae16"), a = t.n(o);
        for (var s in o) "default" !== s && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        n.default = a.a;
    },
    "2dde": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("b2d9"), a = t("13a9");
        for (var s in a) "default" !== s && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(s);
        t("71c8");
        var u = t("f0c5"), c = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "6d98": function(e, n, t) {},
    "71c8": function(e, n, t) {
        "use strict";
        var o = t("6d98");
        t.n(o).a;
    },
    ae16: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = {
                components: {
                    BaseLayout: function() {
                        t.e("subPackages/me/pages/components/robot/BaseLayout").then(function() {
                            return resolve(t("0931"));
                        }.bind(null, t)).catch(t.oe);
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
                computed: {
                    type: function() {
                        return this.message.type;
                    }
                },
                methods: {
                    preview: function(n) {
                        n && e.previewImage({
                            urls: [ n ]
                        });
                    },
                    handleRedict: function() {
                        var n = this.message.content.url;
                        e.navigateTo({
                            url: n
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    },
    b2d9: function(e, n, t) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/msg/quesMsg-create-component", {
    "subPackages/me/pages/components/robot/msg/quesMsg-create-component": function(e, n, t) {
        t("543d").createComponent(t("2dde"));
    }
}, [ [ "subPackages/me/pages/components/robot/msg/quesMsg-create-component" ] ] ]);