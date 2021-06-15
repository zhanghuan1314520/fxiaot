(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/CouponDialog" ], {
    "0d9c": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("319b"), i = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = i.a;
    },
    2403: function(e, t, n) {
        "use strict";
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.receiveDialog && e.userInfo && e.userInfo.phone ? e._f("phone")(e.userInfo && e.userInfo.phone) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    f0: t
                }
            });
        }, i = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    "319b": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("4ec3")), i = n("b628"), a = n("2f62");
            function r(e) {
                return function(e) {
                    if (Array.isArray(e)) return c(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            var u = {
                filters: {
                    phone: function() {
                        var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = n;
                        return o && 11 === o.length ? ((e = o = r(o)).splice.apply(e, [ 3, 4 ].concat(r("*".repeat(4)))), 
                        o.join("")) : o && o.length > 2 ? ((t = o = r(o)).splice.apply(t, [ 1, o.length - 2 ].concat(r("*".repeat(o.length - 2)))), 
                        o.join("")) : o;
                    }
                },
                props: {
                    show: {
                        type: Boolean,
                        default: !0
                    },
                    projectId: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        list: [],
                        receiveItem: null,
                        receiveDialog: !1,
                        alertShowFlag: !1,
                        alertShow: 1,
                        toastMsg: ""
                    };
                },
                computed: (0, a.mapState)({
                    userInfo: function(e) {
                        return e.user.userInfo;
                    }
                }),
                watch: {
                    projectId: function(e, t) {
                        e && e !== t && this.getCoupons();
                    },
                    alertShowFlag: function(e) {
                        var t = this;
                        e && setTimeout(function() {
                            t.alertShowFlag = !1;
                        }, 3e3);
                    }
                },
                methods: {
                    receiveOpen: function(e) {
                        this.receiveItem = e, this.receiveDialog = !0;
                    },
                    receiveConfirm: function() {
                        this.receiveDialog = !1, this.realReceive();
                    },
                    receiveClose: function() {
                        this.receiveDialog = !1;
                    },
                    goDetaiPage: function(t) {
                        var n = this.projectId ? this.projectId : "";
                        e.navigateTo({
                            url: "/subPackages/activity/pages/couponDetail?id=".concat(t, "&where=dialog&project_id=").concat(n)
                        });
                    },
                    getCoupons: function() {
                        var e = this;
                        o.default.activity.projectCouponsList(this.projectId).then(function(t) {
                            parseInt(t.code, 10) ? i.tip.toast(t.msg || "获取优惠券失败") : e.list = t.data;
                        });
                    },
                    receiveThis: function(t) {
                        2 === t.btnStatus ? this.goDetaiPage(t.id) : 4 === t.btnStatus ? e.showToast({
                            title: "活动未开始，请敬请期待",
                            icon: "none"
                        }) : 5 === t.btnStatus ? e.showToast({
                            title: "活动已结束，请期待下一场活动",
                            icon: "none"
                        }) : this.receiveOpen(t);
                    },
                    realReceive: function() {
                        var e = this, t = this.receiveItem;
                        o.default.activity.receiveCoupon(t.id).then(function(t) {
                            0 === t.code && (e.alertShowFlag = !0, e.toastMsg = t.message || "领取成功", e.alertShow = "1"), 
                            e.getCoupons();
                        });
                    },
                    closeSaleManCallDialog: function(e) {
                        e.target.dataset.id && this.$emit("update:show", !1);
                    },
                    hideSaleManCallDialog: function() {
                        this.$emit("update:show", !1);
                    },
                    comfirm: function() {
                        this.$emit("update:show", !1);
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    7649: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2403"), i = n("0d9c");
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        n("e360"), n("b671");
        var r = n("f0c5"), c = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    b671: function(e, t, n) {
        "use strict";
        var o = n("f9c3");
        n.n(o).a;
    },
    de9b: function(e, t, n) {},
    e360: function(e, t, n) {
        "use strict";
        var o = n("de9b");
        n.n(o).a;
    },
    f9c3: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/CouponDialog-create-component", {
    "pages/components/CouponDialog-create-component": function(e, t, n) {
        n("543d").createComponent(n("7649"));
    }
}, [ [ "pages/components/CouponDialog-create-component" ] ] ]);