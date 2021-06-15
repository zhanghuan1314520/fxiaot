require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/ReplyContainer/More" ], {
    "345f": function(n, e, t) {
        "use strict";
        var o = t("5509");
        t.n(o).a;
    },
    "3cb7": function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("a4baf"), a = t.n(o);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = a.a;
    },
    5509: function(n, e, t) {},
    9295: function(n, e, t) {
        "use strict";
        var o = function() {
            var n = this;
            n.$createElement, n._self._c, n._isMounted || (n.e0 = function(e) {
                n.visible = !0;
            });
        }, a = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
    },
    a4baf: function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = c(t("a34a")), a = t("b628"), i = c(t("4ec3"));
            function c(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function r(n, e, t, o, a, i, c) {
                try {
                    var r = n[i](c), u = r.value;
                } catch (n) {
                    return void t(n);
                }
                r.done ? e(u) : Promise.resolve(u).then(o, a);
            }
            var u = {
                components: {
                    Authorization: function() {
                        t.e("components/Authorization").then(function() {
                            return resolve(t("5326"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    Dialog: function() {
                        t.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(t("6bfa"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ c(t("a3fe")).default ],
                props: {
                    projectId: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        visible: !1,
                        intention: 1,
                        showPrivilege: !1
                    };
                },
                computed: {
                    showLabel: function() {
                        return this.sendUserInfo.sales_man_id > 0 && 0 === Number(this.receiveUserInfo.is_sales_man);
                    }
                },
                mounted: function() {
                    this.salesInfo();
                },
                methods: {
                    emptyFunction: function() {},
                    openPhotoHandle: function() {
                        var e = this;
                        a.foundation.chooseImageSync().then(function(t) {
                            n.showLoading({
                                title: "发送中",
                                mask: !0
                            });
                            var o = t.tempFilePaths[0];
                            a.foundation.uploadFileSync(o).then(function(n) {
                                if (n && n.data) {
                                    var t = n.data.data.url;
                                    e.$emit("onSendPicture", t);
                                }
                            }).finally(function() {
                                n.hideLoading();
                            });
                        }).catch();
                    },
                    clickLabelHandle: function(n) {
                        this.intention = n;
                    },
                    submit: function() {
                        this.$emit("onSendLabel", this.intention);
                    },
                    goToSalesPrivilege: function() {
                        n.navigateTo({
                            url: "/subPackages/me/pages/myPrivilege?userId=".concat(this.receiveUserInfo.session_id, "&projectId=").concat(this.projectId)
                        });
                    },
                    salesInfo: function() {
                        var n = function(n) {
                            return function() {
                                var e = this, t = arguments;
                                return new Promise(function(o, a) {
                                    var i = n.apply(e, t);
                                    function c(n) {
                                        r(i, o, a, c, u, "next", n);
                                    }
                                    function u(n) {
                                        r(i, o, a, c, u, "throw", n);
                                    }
                                    c(void 0);
                                });
                            };
                        }(o.default.mark(function n() {
                            var e, t, a;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, i.default.sales.salesInfo();

                                  case 2:
                                    e = n.sent, t = e.data, a = (void 0 === t ? {} : t).sales_man || {}, this.showPrivilege = !!a.is_sales_man_privilege;

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = u;
        }).call(this, t("543d").default);
    },
    bb91: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("9295"), a = t("3cb7");
        for (var i in a) "default" !== i && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        t("345f");
        var c = t("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/ReplyContainer/More-create-component", {
    "subPackages/me/components/ChatInterface/ReplyContainer/More-create-component": function(n, e, t) {
        t("543d").createComponent(t("bb91"));
    }
}, [ [ "subPackages/me/components/ChatInterface/ReplyContainer/More-create-component" ] ] ]);