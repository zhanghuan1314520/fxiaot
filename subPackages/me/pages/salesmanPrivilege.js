require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/salesmanPrivilege" ], {
    4763: function(e, n, t) {},
    "53b5": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("5955"), c = t("6486");
        for (var o in c) "default" !== o && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(o);
        t("bb7a");
        var i = t("f0c5"), u = Object(i.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    5955: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
    },
    6486: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("6fd3"), c = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = c.a;
    },
    "6fd3": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            components: {
                BusiNavHeader: function() {
                    t.e("components/UILayout/BusiNavHeader").then(function() {
                        return resolve(t("5ed7"));
                    }.bind(null, t)).catch(t.oe);
                },
                BasePrompt: function() {
                    t.e("subPackages/me/pages/components/BasePrompt").then(function() {
                        return resolve(t("fb15"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    privilegeList: [ {
                        name: "积分礼",
                        desc: "月底活跃度≥1500，次月1日赠送20积分",
                        icon: "https://imgcdn.huanjutang.com/file/2021/03/19/d1c59dbe6cdd5c05e07bface51a0575b.png",
                        tip: ""
                    }, {
                        name: "金币礼",
                        desc: "月底活跃度≥1500，次月1日赠送10金币",
                        icon: "https://imgcdn.huanjutang.com/file/2021/03/19/68a2f02216b064b2bbc0ce0a0364c036.png",
                        tip: ""
                    }, {
                        name: "顾问周报",
                        desc: "分析一周的数据，更好的服务客户",
                        icon: "https://imgcdn.huanjutang.com/file/2021/03/19/a87d2be5bd0e140bb39202263a76e134.png",
                        tip: "每周一通过置业顾问之家给您发送上周的周报情况，更好的服务客户"
                    }, {
                        name: "客户信息浏览",
                        desc: "查询客户楼盘浏览信息，精准定位客户购房需求",
                        icon: "https://imgcdn.huanjutang.com/file/2021/03/19/760924ff0d240ed93acdf15d9186508e.png",
                        tip: "任意微聊窗口点击右下方的+后，再点击顾问活跃度特权，可选择查看用户的楼盘浏览信息"
                    }, {
                        name: "高级专属群",
                        desc: "月底活跃度≥2500，享受进入高级群特权",
                        icon: "https://imgcdn.huanjutang.com/file/2021/03/19/897f41d79c4f4ef473f54313910a14cb.png",
                        tip: "当您达到此活跃度后，客服会将您微信加入高级专属群",
                        pro: !0
                    }, {
                        name: "海量曝光机会",
                        desc: "参与高级群活动，有机会获取海量曝光机会",
                        icon: "https://imgcdn.huanjutang.com/file/2021/03/19/77f8306bb4642abf36e5453c82ab7fe5.png",
                        tip: "",
                        pro: !0
                    } ]
                };
            },
            computed: {},
            onLoad: function() {
                this.$refs.busiNavHeader.setTransparentMode();
            },
            onPageScroll: function(e) {
                e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
            },
            methods: {}
        };
        n.default = a;
    },
    "8a39": function(e, n, t) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("53b5")).default);
        }).call(this, t("543d").createPage);
    },
    bb7a: function(e, n, t) {
        "use strict";
        var a = t("4763");
        t.n(a).a;
    }
}, [ [ "8a39", "common/runtime", "common/vendor" ] ] ]);