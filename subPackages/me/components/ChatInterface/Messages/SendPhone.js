require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/SendPhone" ], {
    "19ed": function(e, n, t) {
        "use strict";
        var a = t("733b");
        t.n(a).a;
    },
    "733b": function(e, n, t) {},
    8175: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    "8b49": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8175"), o = t("c60d");
        for (var s in o) "default" !== s && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        t("19ed");
        var c = t("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    c60d: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("d265"), o = t.n(a);
        for (var s in a) "default" !== s && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(s);
        n.default = o.a;
    },
    d265: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = s(t("a3fe")), o = s(t("1d68"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var c = {
                components: {
                    BaseLayout: function() {
                        Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                            return resolve(t("607a"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ a.default, o.default ],
                props: {
                    message: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                methods: {
                    copyHandle: function() {
                        var n = this;
                        e.setClipboardData({
                            data: this.message.content,
                            success: function() {
                                n.showTipsDialog("手机号已复制");
                            }
                        });
                    },
                    callHandle: function() {
                        e.makePhoneCall({
                            phoneNumber: this.message.content
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/SendPhone-create-component", {
    "subPackages/me/components/ChatInterface/Messages/SendPhone-create-component": function(e, n, t) {
        t("543d").createComponent(t("8b49"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/SendPhone-create-component" ] ] ]);