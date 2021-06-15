require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/HeaderNav" ], {
    "1e82": function(e, n, t) {},
    "396f": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8e2d"), o = t.n(a);
        for (var s in a) "default" !== s && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(s);
        n.default = o.a;
    },
    "51ad": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("5c79"), o = t("396f");
        for (var s in o) "default" !== s && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        t("ab62");
        var i = t("f0c5"), c = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "5c79": function(e, n, t) {
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
    "8e2d": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = i(t("a34a")), o = i(t("4ec3")), s = i(t("30d1"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, n, t, a, o, s, i) {
                try {
                    var c = e[s](i), r = c.value;
                } catch (e) {
                    return void t(e);
                }
                c.done ? n(r) : Promise.resolve(r).then(a, o);
            }
            var r = {
                components: {
                    BaseCallPhone: function() {
                        t.e("components/BaseCallPhone").then(function() {
                            return resolve(t("65ce"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ i(t("a3fe")).default ],
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        userBankInfo: {},
                        medals: s.default,
                        medalsItem: []
                    };
                },
                watch: {
                    receiveUserInfo: function(e) {
                        var n = this;
                        Object.keys(e).length > 0 && (o.default.chat.settingGetUserInfo(this.receiveUserInfo.session_id).then(function(e) {
                            e.data && (n.userBankInfo = e.data);
                        }), !0 === e.is_sales_man && this.getSalesMan());
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    toSalesmanCenterHandle: function() {
                        e.showLoading({
                            title: "加载中"
                        }), e.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(this.receiveUserInfo.session_id),
                            success: function() {
                                e.hideLoading();
                            }
                        });
                    },
                    getSalesMan: function() {
                        var e = function(e) {
                            return function() {
                                var n = this, t = arguments;
                                return new Promise(function(a, o) {
                                    var s = e.apply(n, t);
                                    function i(e) {
                                        c(s, a, o, i, r, "next", e);
                                    }
                                    function r(e) {
                                        c(s, a, o, i, r, "throw", e);
                                    }
                                    i(void 0);
                                });
                            };
                        }(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.sales.getSalesManInfo({
                                        id: this.receiveUserInfo.sales_man_id
                                    });

                                  case 2:
                                    (n = e.sent).data && (this.medalsItem = n.data.medals.medals);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toProjectDetail: function() {
                        e.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.receiveUserInfo.project_id)
                        });
                    },
                    replaceHandle: function() {
                        this.$emit("onReplace");
                    },
                    preview: function(n) {
                        n && e.previewImage({
                            urls: [ n ]
                        });
                    },
                    showActionSheet: function() {
                        var n = this, t = this.receiveUserInfo.session_id;
                        e.showActionSheet({
                            itemList: [ this.userBankInfo.is_blacklist ? "移除黑名单" : "加入黑名单", "举报对方" ],
                            success: function(a) {
                                0 === a.tapIndex ? o.default.chat.addToBlacklist({
                                    link_id: t,
                                    is_blacklist: !n.userBankInfo.is_blacklist
                                }).then() : e.navigateTo({
                                    url: "/subPackages/project/pages/reportType?type=3&id=".concat(t)
                                });
                            }
                        });
                    },
                    callPhoneHandle: function(e) {
                        o.default.getPhoneNum(this.receiveUserInfo.sales_man_id, 1).then(function(n) {
                            n.data && e(n.data.phone);
                        });
                    },
                    askPhone: function() {
                        var n = this;
                        e.showModal({
                            title: "提示",
                            showCancel: !0,
                            content: "你正在索要用户电话，将扣除5积分，如索要失败或24:00之前用户未回应，积分将返回.是否确认索要",
                            success: function(e) {
                                e.confirm && n.$emit("onAskPhone");
                            }
                        });
                    },
                    askWeixin: function() {
                        this.$emit("onAskWeixin");
                    }
                }
            };
            n.default = r;
        }).call(this, t("543d").default);
    },
    ab62: function(e, n, t) {
        "use strict";
        var a = t("1e82");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/HeaderNav-create-component", {
    "subPackages/me/components/ChatInterface/HeaderNav-create-component": function(e, n, t) {
        t("543d").createComponent(t("51ad"));
    }
}, [ [ "subPackages/me/components/ChatInterface/HeaderNav-create-component" ] ] ]);