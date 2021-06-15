require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiCouponDialog" ], {
    "1a182": function(t, e, n) {},
    "2ab7": function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.receiveDialog && t.userInfo && t.userInfo.phone ? t._f("phone")(t.userInfo.phone) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    f0: e
                }
            });
        }, i = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "4a79": function(t, e, n) {},
    6026: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("830b"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    "830b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("4ec3")), i = n("b628"), r = n("2f62");
            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach(function(e) {
                        u(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            var p = {
                components: {},
                filters: {
                    phone: function(t) {
                        var e, n, o = t;
                        return o && 11 === o.length ? ((e = o = s(o)).splice.apply(e, [ 3, 4 ].concat(s("*".repeat(4)))), 
                        o.join("")) : o && o.length > 2 ? ((n = o = s(o)).splice.apply(n, [ 1, o.length - 2 ].concat(s("*".repeat(o.length - 2)))), 
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
                        isMultiCoupon: !1,
                        receiveDialog: !1,
                        alertShowFlag: !1,
                        alertShow: 1,
                        toastMsg: ""
                    };
                },
                computed: (0, r.mapState)({
                    userInfo: function(t) {
                        return t.user.userInfo;
                    }
                }),
                watch: {
                    projectId: function(t, e) {
                        t && -1 !== t && t !== e && this.getCoupons();
                    },
                    alertShowFlag: function(t) {
                        var e = this;
                        t && setTimeout(function() {
                            e.alertShowFlag = !1;
                        }, 3e3);
                    },
                    show: function(t) {
                        t || this.setMotionBtnIndex(99);
                    }
                },
                methods: c(c({}, (0, r.mapMutations)({
                    setMotionBtnIndex: "SET_MOTIONBTNINDEX"
                })), {}, {
                    receiveOpen: function(t) {
                        this.receiveItem = t, this.setMotionBtnIndex(9), this.receiveDialog = !0;
                    },
                    receiveConfirm: function() {
                        this.receiveDialog = !1, this.isMultiCoupon || this.setMotionBtnIndex(99), this.realReceive();
                    },
                    receiveClose: function() {
                        this.receiveDialog = !1, this.isMultiCoupon || this.setMotionBtnIndex(99);
                    },
                    goDetaiPage: function(e) {
                        var n = this.projectId ? this.projectId : "";
                        t.navigateTo({
                            url: "/subPackages/activity/pages/couponDetail?id=".concat(e, "&where=dialog&project_id=").concat(n)
                        });
                    },
                    getCoupons: function() {
                        var t = this;
                        o.default.activity.projectCouponsList(this.projectId).then(function(e) {
                            Math.floor(e.code) ? i.tip.toast(e.msg || "获取优惠券失败") : (t.list = e.data, 1 === t.list.length ? t.receiveOpen(t.list[0]) : (t.isMultiCoupon = !0, 
                            t.setMotionBtnIndex(9)));
                        });
                    },
                    receiveThis: function(e) {
                        2 === e.btnStatus ? this.goDetaiPage(e.id) : 4 === e.btnStatus ? t.showToast({
                            title: "活动未开始，请敬请期待",
                            icon: "none"
                        }) : 5 === e.btnStatus ? t.showToast({
                            title: "活动已结束，请期待下一场活动",
                            icon: "none"
                        }) : this.receiveOpen(e);
                    },
                    realReceive: function() {
                        var t = this, e = this.receiveItem;
                        o.default.activity.receiveCoupon(e.id).then(function(n) {
                            0 === n.code && (t.toastMsg = n.message || "领取成功", t.alertShow = "1", t.isMultiCoupon || t.$emit("receive", t.projectId, e.id)), 
                            t.isMultiCoupon && t.getCoupons();
                        });
                    },
                    closeSaleManCallDialog: function(t) {
                        t.target.dataset.id && (this.isMultiCoupon = !1, this.$emit("update:show", !1));
                    },
                    hideSaleManCallDialog: function() {
                        this.isMultiCoupon = !1, this.$emit("update:show", !1);
                    },
                    comfirm: function() {
                        this.$emit("update:show", !1), this.isMultiCoupon = !1;
                    }
                })
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    "8a37": function(t, e, n) {
        "use strict";
        var o = n("4a79");
        n.n(o).a;
    },
    abcb: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("2ab7"), i = n("6026");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("b689"), n("8a37");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    b689: function(t, e, n) {
        "use strict";
        var o = n("1a182");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiCouponDialog-create-component", {
    "subPackages/pageLayout/pages/components/BusiCouponDialog-create-component": function(t, e, n) {
        n("543d").createComponent(n("abcb"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiCouponDialog-create-component" ] ] ]);