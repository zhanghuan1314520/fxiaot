require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/ResCall" ], {
    "02ed": function(e, n, t) {},
    "397f": function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return s;
        }), t.d(n, "a", function() {});
    },
    7446: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("c7e8"), s = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = s.a;
    },
    8663: function(e, n, t) {
        "use strict";
        var a = t("02ed");
        t.n(a).a;
    },
    b37d: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("397f"), s = t("7446");
        for (var o in s) "default" !== o && function(e) {
            t.d(n, e, function() {
                return s[e];
            });
        }(o);
        t("8663");
        var c = t("f0c5"), u = Object(c.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    c7e8: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = c(t("a3fe")), s = c(t("0c04")), o = c(t("1d68"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var u = {
                components: {
                    BaseLayout: function() {
                        Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                            return resolve(t("607a"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ a.default, s.default, o.default ],
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
                    },
                    hasSalesman: function() {
                        return this.sendUserInfo.sales_man_id > 0;
                    }
                },
                methods: {
                    copyHandle: function() {
                        var n = this;
                        e.setClipboardData({
                            data: this.content.phone,
                            success: function() {
                                var e = n.hasSalesman ? "手机号复制成功" : "手机号复制成功，电话拨通后请告知置业顾问您来自【杭州房小团】，可优先享受顾问的咨询和服务";
                                n.showTipsDialog(e);
                            }
                        });
                    },
                    callHandle: function() {
                        this.hasSalesman ? e.makePhoneCall({
                            phoneNumber: this.receiveUserInfo.phone
                        }) : this.callPhone(this.content.phone);
                    }
                }
            };
            n.default = u;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/ResCall-create-component", {
    "subPackages/me/components/ChatInterface/Messages/ResCall-create-component": function(e, n, t) {
        t("543d").createComponent(t("b37d"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/ResCall-create-component" ] ] ]);