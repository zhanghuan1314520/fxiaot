require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/JoinModal" ], {
    "0680": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var c = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var a = {
                mixins: [ o(n("ff28")).default ],
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        titleImage: "https://imgcdn.huanjutang.com/file/2020/10/12/0d37bd8cdc059e6ed3a0dc6f64948be7.png",
                        closeImage: "https://imgcdn.huanjutang.com/file/2020/10/11/502fdf90dda06b9b8cd416b88bda73fe.png",
                        confirmImage: "https://imgcdn.huanjutang.com/file/2020/10/16/6e86be06b415bbfa6de4b38093817198.png",
                        copyImage: "https://imgcdn.huanjutang.com/file/2020/10/12/6f1ad724eab071651111ce01b7ff39f5.png",
                        knowImage: "https://imgcdn.huanjutang.com/file/2020/10/12/6e0c1a62a6e21245ea189214733a9f4c.png",
                        status: 1,
                        checked: !1
                    };
                },
                computed: {
                    joinText: function() {
                        return 1 === this.status ? "恭喜！！" : "恭喜您参团成功";
                    }
                },
                methods: {
                    handleMaskClick: function() {
                        this.close();
                    },
                    toProjectDetail: function() {
                        t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.item.project_id)
                        });
                    },
                    toCoupon: function() {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/coupon"
                        });
                    },
                    confirm: function() {
                        this.checked ? this.receiveCoupon() : t.showToast({
                            title: "请先同意授权",
                            icon: "none"
                        });
                    },
                    createRecord: function(t) {
                        var e = this;
                        c.default.activity.joinRecord({
                            subject_id: t,
                            promotion_id: 3
                        }).then(function(t) {
                            e.responseVerify(t) ? e.loadHeaderData() : e.joinLoading = !1;
                        }).catch(function() {
                            e.joinLoading = !1;
                        });
                    },
                    receiveCoupon: function() {
                        var t = this;
                        c.default.activity.receiveCoupon(this.item.id).then(function(e) {
                            0 === e.code && (t.$emit("success"), t.createRecord(t.item.id), t.toProjectDetail(), 
                            t.close());
                        });
                    },
                    copyWx: function() {
                        this.item.service_wechat && t.setClipboardData({
                            data: this.item.service_wechat,
                            success: function() {
                                t.showToast({
                                    title: "微信号已复制"
                                });
                            }
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    3323: function(t, e, n) {
        "use strict";
        var c = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.checked = !t.checked;
            });
        }, o = [];
        n.d(e, "b", function() {
            return c;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    bafc: function(t, e, n) {
        "use strict";
        var c = n("f9f5");
        n.n(c).a;
    },
    cb5e: function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n("3323"), o = n("e50c");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("bafc");
        var i = n("f0c5"), u = Object(i.a)(o.default, c.b, c.c, !1, null, "68e8d887", null, !1, c.a, void 0);
        e.default = u.exports;
    },
    e50c: function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n("0680"), o = n.n(c);
        for (var a in c) "default" !== a && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(a);
        e.default = o.a;
    },
    f9f5: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/JoinModal-create-component", {
    "subPackages/activity/components/JoinModal-create-component": function(t, e, n) {
        n("543d").createComponent(n("cb5e"));
    }
}, [ [ "subPackages/activity/components/JoinModal-create-component" ] ] ]);