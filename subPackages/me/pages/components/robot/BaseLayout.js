require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/BaseLayout" ], {
    "0931": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("92db"), o = n("ec38");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("1a95");
        var u = n("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "1a95": function(e, t, n) {
        "use strict";
        var a = n("ec88");
        n.n(a).a;
    },
    "8ccc": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("b628"), o = {
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
                    },
                    showAvatar: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/2021323154408081.png"
                    };
                },
                computed: {
                    avatar: function() {
                        return this.isReceive ? this.defaultAvatar : a.cache.get("userinfo").avatarUrl;
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
            t.default = o;
        }).call(this, n("543d").default);
    },
    "92db": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    ec38: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("8ccc"), o = n.n(a);
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = o.a;
    },
    ec88: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/BaseLayout-create-component", {
    "subPackages/me/pages/components/robot/BaseLayout-create-component": function(e, t, n) {
        n("543d").createComponent(n("0931"));
    }
}, [ [ "subPackages/me/pages/components/robot/BaseLayout-create-component" ] ] ]);