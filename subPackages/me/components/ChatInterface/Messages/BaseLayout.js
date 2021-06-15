require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/BaseLayout" ], {
    "34da": function(e, t, n) {
        "use strict";
        var a = n("a0ac");
        n.n(a).a;
    },
    "607a": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("6b6a"), c = n("cbf3");
        for (var o in c) "default" !== o && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        n("34da");
        var s = n("f0c5"), u = Object(s.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    "6b6a": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
    },
    "6c7c": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                mixins: [ function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }(n("a3fe")).default ],
                props: {
                    message: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    showAvatar: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png"
                    };
                },
                computed: {
                    salemanCenterUrl: function() {
                        return "/pages/salesMan/detail?user_id=".concat(this.info.session_id);
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    preview: function(t) {
                        t && e.previewImage({
                            urls: [ t ]
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    a0ac: function(e, t, n) {},
    cbf3: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("6c7c"), c = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/BaseLayout-create-component", {
    "subPackages/me/components/ChatInterface/Messages/BaseLayout-create-component": function(e, t, n) {
        n("543d").createComponent(n("607a"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/BaseLayout-create-component" ] ] ]);