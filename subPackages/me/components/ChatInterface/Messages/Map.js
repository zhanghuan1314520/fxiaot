require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/Map" ], {
    "2eb2": function(e, n, t) {
        "use strict";
        var a = t("a768");
        t.n(a).a;
    },
    "40b0": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = {
                components: {
                    BaseLayout: function() {
                        Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                            return resolve(t("607a"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }(t("a3fe")).default ],
                props: {
                    message: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                computed: {
                    content: function() {
                        var e = this.message.content;
                        return e ? "string" == typeof e ? JSON.parse(e) : e : {};
                    }
                },
                methods: {
                    openLocation: function() {
                        var n = this.content;
                        n.latitude && n.longitude && e.openLocation({
                            latitude: n.latitude,
                            longitude: n.longitude,
                            name: n.name,
                            address: n.address
                        });
                    }
                }
            };
            n.default = a;
        }).call(this, t("543d").default);
    },
    a768: function(e, n, t) {},
    b1ee: function(e, n, t) {
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
    c83c: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("b1ee"), o = t("f695");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("2eb2");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    f695: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("40b0"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/Map-create-component", {
    "subPackages/me/components/ChatInterface/Messages/Map-create-component": function(e, n, t) {
        t("543d").createComponent(t("c83c"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/Map-create-component" ] ] ]);