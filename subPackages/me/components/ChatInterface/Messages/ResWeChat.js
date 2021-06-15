require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/ResWeChat" ], {
    "07aa": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("54f9"), s = t("445c");
        for (var c in s) "default" !== c && function(e) {
            t.d(n, e, function() {
                return s[e];
            });
        }(c);
        t("3c71");
        var o = t("f0c5"), u = Object(o.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "0926": function(e, n, t) {},
    "3c71": function(e, n, t) {
        "use strict";
        var a = t("0926");
        t.n(a).a;
    },
    "445c": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("e4c2"), s = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = s.a;
    },
    "54f9": function(e, n, t) {
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
    e4c2: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = c(t("a3fe")), s = c(t("1d68"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var o = {
                components: {
                    BaseLayout: function() {
                        Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                            return resolve(t("607a"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ a.default, s.default ],
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
                            data: this.content.wechat_code,
                            success: function() {
                                var e = n.hasSalesman ? "微信号复制成功" : "微信号复制成功，添加微信后请告知置业顾问您来自【杭州房小团】，可优先享受顾问的咨询和服务";
                                n.showTipsDialog(e);
                            }
                        });
                    },
                    previewHandle: function() {
                        var n = this.content.wechat_qrcode;
                        n && e.previewImage({
                            urls: [ n ]
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/ResWeChat-create-component", {
    "subPackages/me/components/ChatInterface/Messages/ResWeChat-create-component": function(e, n, t) {
        t("543d").createComponent(t("07aa"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/ResWeChat-create-component" ] ] ]);