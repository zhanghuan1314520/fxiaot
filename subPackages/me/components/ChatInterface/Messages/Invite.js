require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/Invite" ], {
    "2a6d": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = u(t("4ec3")), o = t("b628"), c = u(t("a3fe")), s = u(t("0c04"));
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
                mixins: [ c.default, s.default ],
                props: {
                    message: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                computed: {
                    messageContent: function() {
                        var e = this.message.content;
                        if (!e) return "";
                        var n = e;
                        if ("string" == typeof e) try {
                            n = JSON.parse(e);
                        } catch (e) {}
                        return "邀请您 ".concat(n.date, " 周").concat(n.weekday, "到").concat(n.project, "看房。\n地址：").concat(n.address, "。\n到场报").concat(n.name, "，我将为您专属服务。");
                    },
                    hasSalesman: function() {
                        return this.sendUserInfo.sales_man_id > 0;
                    }
                },
                methods: {
                    callHandle: function() {
                        var n = this;
                        e.showLoading({
                            title: "加载中",
                            mask: !0
                        }), a.default.getPhoneNum(this.receiveUserInfo.sales_man_id, 1).then(function(t) {
                            e.hideLoading(), t.data ? n.callPhone(t.data.phone) : o.tip.toast("获取电话信息失败", "", "none");
                        });
                    }
                }
            };
            n.default = r;
        }).call(this, t("543d").default);
    },
    "87f2": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("dd61"), o = t("b2a2");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("d453");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    b2a2: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("2a6d"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    d453: function(e, n, t) {
        "use strict";
        var a = t("f542");
        t.n(a).a;
    },
    dd61: function(e, n, t) {
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
    f542: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/Invite-create-component", {
    "subPackages/me/components/ChatInterface/Messages/Invite-create-component": function(e, n, t) {
        t("543d").createComponent(t("87f2"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/Invite-create-component" ] ] ]);