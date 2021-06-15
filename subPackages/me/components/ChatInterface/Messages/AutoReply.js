require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/AutoReply" ], {
    "02e0": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("1f05"), o = t.n(a);
        for (var s in a) "default" !== s && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(s);
        n.default = o.a;
    },
    "1f05": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = u(t("4ec3")), o = t("b628"), s = u(t("a3fe")), c = u(t("0c04"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var r = {
                components: {
                    BaseLayout: function() {
                        Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                            return resolve(t("607a"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ s.default, c.default ],
                props: {
                    message: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                methods: {
                    replyCallHandle: function() {
                        var n = this;
                        e.showLoading({
                            title: "加载中",
                            mask: !0
                        }), 1 === Number(this.receiveUserInfo.is_sales_man) ? a.default.getPhoneNum(this.receiveUserInfo.sales_man_id, 1).then(function(t) {
                            e.hideLoading(), t.data ? n.callPhone(t.data.phone) : o.tip.toast("获取电话信息失败", "", "none");
                        }) : (e.hideLoading(), e.makePhoneCall({
                            phoneNumber: this.receiveUserInfo.phone
                        }));
                    }
                }
            };
            n.default = r;
        }).call(this, t("543d").default);
    },
    "2ed4": function(e, n, t) {},
    "8f23": function(e, n, t) {
        "use strict";
        var a = t("2ed4");
        t.n(a).a;
    },
    f606: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("f963"), o = t("02e0");
        for (var s in o) "default" !== s && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        t("8f23");
        var c = t("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    f963: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/AutoReply-create-component", {
    "subPackages/me/components/ChatInterface/Messages/AutoReply-create-component": function(e, n, t) {
        t("543d").createComponent(t("f606"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/AutoReply-create-component" ] ] ]);