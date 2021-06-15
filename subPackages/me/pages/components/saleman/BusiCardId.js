require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/saleman/BusiCardId" ], {
    "0c0b": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("bce4"), o = t("73a1");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("bc87");
        var i = t("f0c5"), c = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "73a1": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8309"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    8309: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = t("b628"), o = {
            components: {
                Authorization: function() {
                    t.e("components/Authorization").then(function() {
                        return resolve(t("5326"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                pageControl: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                idCard: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    form: {
                        name: "",
                        id_card: ""
                    }
                };
            },
            computed: {
                disable: function() {
                    return this.idCard ? !!this.form.name && !!this.form.id_card : !!this.form.name;
                }
            },
            methods: {
                gotoVerify: function() {
                    var e = 3 === this.pageControl.length ? this.pageControl[1] : this.pageControl[this.pageControl.length - 1], n = this;
                    if (this.disable) if (this.form.name.replace(/\s+/g, "")) if (this.idCard) {
                        if (this.form.id_card.length < 18) return void a.tip.toast("请输入正确的身份证号码", "", "none");
                        wx.startFacialRecognitionVerify({
                            name: this.form.name,
                            idCardNumber: this.form.id_card,
                            checkAliveType: 2,
                            success: function(t) {
                                0 === t.errCode && n.$emit("changePage", e, n.form);
                            }
                        });
                    } else n.$emit("changePage", e, n.form); else a.tip.toast("请输入姓名", "", "none");
                }
            }
        };
        n.default = o;
    },
    bc87: function(e, n, t) {
        "use strict";
        var a = t("ebca");
        t.n(a).a;
    },
    bce4: function(e, n, t) {
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
    ebca: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/saleman/BusiCardId-create-component", {
    "subPackages/me/pages/components/saleman/BusiCardId-create-component": function(e, n, t) {
        t("543d").createComponent(t("0c0b"));
    }
}, [ [ "subPackages/me/pages/components/saleman/BusiCardId-create-component" ] ] ]);