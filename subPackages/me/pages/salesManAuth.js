require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/salesManAuth" ], {
    "2f32": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("6429"), o = t("ba01");
        for (var i in o) "default" !== i && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        t("f1e0");
        var r = t("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "58e7": function(e, n, t) {},
    6429: function(e, n, t) {
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
    ba01: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("e96b"), o = t.n(a);
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = o.a;
    },
    e96b: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("4ec3")), o = t("b628"), i = {
                components: {
                    Authorization: function() {
                        t.e("components/Authorization").then(function() {
                            return resolve(t("5326"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    BusiNavHeader: function() {
                        t.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(t("5ed7"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        form: {
                            name: "",
                            id_card: ""
                        },
                        imgSrc: "https://imgcdn.huanjutang.com/file/2020/12/15/15acc8198c669f44351690081300dbdb.png"
                    };
                },
                computed: {
                    disable: function() {
                        return !!this.form.name && !!this.form.id_card;
                    }
                },
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    gotoVerify: function() {
                        if (this.disable) if (this.form.id_card.length < 18) o.tip.toast("请输入正确的身份证号码", "", "none"); else {
                            var n = this;
                            wx.startFacialRecognitionVerify({
                                name: n.form.name,
                                idCardNumber: n.form.id_card,
                                checkAliveType: 2,
                                success: function(t) {
                                    0 === t.errCode && a.default.sales.saveRealNameInfo({
                                        name: n.form.name,
                                        id_card: n.form.id_card
                                    }).then(function(n) {
                                        0 === n.code ? (o.tip.toast("实名认证成功", "", "none"), e.navigateBack()) : o.tip.toast(n.message, "", "none");
                                    });
                                }
                            });
                        }
                    }
                }
            };
            n.default = i;
        }).call(this, t("543d").default);
    },
    f1e0: function(e, n, t) {
        "use strict";
        var a = t("58e7");
        t.n(a).a;
    },
    faf6: function(e, n, t) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("2f32")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "faf6", "common/runtime", "common/vendor" ] ] ]);