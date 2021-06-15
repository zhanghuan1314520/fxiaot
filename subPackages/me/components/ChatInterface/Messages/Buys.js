require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/Buys" ], {
    3611: function(e, n, t) {},
    4246: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("ba5c3"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    aa28: function(e, n, t) {
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
    ba5c3: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = u(t("4ec3")), o = u(t("a3fe")), c = u(t("0c04")), s = u(t("1d68"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var i = {
            components: {
                Authorization: function() {
                    t.e("components/Authorization").then(function() {
                        return resolve(t("5326"));
                    }.bind(null, t)).catch(t.oe);
                },
                BaseLayout: function() {
                    Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                        return resolve(t("607a"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            mixins: [ o.default, c.default, s.default ],
            props: {
                message: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            methods: {
                emptyFunction: function() {},
                continueWait: function() {
                    this.$emit("onWait");
                },
                callPhoneHandle: function() {
                    var e = this;
                    a.default.getPhoneNum(this.receiveUserInfo.sales_man_id, 1).then(function(n) {
                        n.data && e.callPhone(n.data.phone);
                    });
                },
                askWeixin: function() {
                    this.$emit("onAskWeixin");
                },
                askCallMe: function() {
                    this.$emit("onAskCallMe");
                },
                replaceHandle: function() {
                    this.$emit("onReplace");
                }
            }
        };
        n.default = i;
    },
    d7db: function(e, n, t) {
        "use strict";
        var a = t("3611");
        t.n(a).a;
    },
    e309: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("aa28"), o = t("4246");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("d7db");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/Buys-create-component", {
    "subPackages/me/components/ChatInterface/Messages/Buys-create-component": function(e, n, t) {
        t("543d").createComponent(t("e309"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/Buys-create-component" ] ] ]);