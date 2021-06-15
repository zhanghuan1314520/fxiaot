require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/bindIDCard" ], {
    "4bce": function(t, e, n) {
        "use strict";
        var i = n("54f5");
        n.n(i).a;
    },
    "4ead": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("e01a")).default);
        }).call(this, n("543d").createPage);
    },
    "54f5": function(t, e, n) {},
    "62a7": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "7cd3": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("da58"), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    },
    da58: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = u(n("a34a")), a = u(n("4ec3")), r = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, i, a, r, u) {
                try {
                    var s = t[r](u), o = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(o) : Promise.resolve(o).then(i, a);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, a) {
                        var r = t.apply(e, n);
                        function u(t) {
                            s(r, i, a, u, o, "next", t);
                        }
                        function o(t) {
                            s(r, i, a, u, o, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var d = n("ca00"), c = n("79b9"), h = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, l = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        inputIdCard: "",
                        inputName: "",
                        inputPhone: "",
                        id: "",
                        binding: !1,
                        idCardErr: !1,
                        phoneErr: !1,
                        allow: !1,
                        rules: {
                            name: !1,
                            id: !1,
                            phone: !1
                        }
                    };
                },
                onShareAppMessage: function() {
                    return r.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onLoad: function() {
                    var e = o(i.default.mark(function e(n) {
                        var r;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.id = n.id, !this.id) {
                                    e.next = 10;
                                    break;
                                }
                                return t.setNavigationBarTitle({
                                    title: "修改用户信息"
                                }), this.allow = !0, e.next = 6, a.default.getMyIdCard(this.id);

                              case 6:
                                r = e.sent, this.inputIdCard = r.data.id_card_show, this.inputPhone = r.data.phone_show, 
                                this.inputName = r.data.name;

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    gotoUrlHandle: function() {
                        t.navigateTo({
                            url: d.webview2Url("".concat(c.webviewHost, "/user/statement?id=10&type=privacy"))
                        });
                    },
                    clearValidate: function(t) {
                        "idCard" === t && 18 !== this.inputIdCard.length && (this.rules.id = !1), "phone" === t && 11 !== this.inputPhone.length && (this.rules.phone = !1);
                    },
                    validate: function(t) {
                        "idCard" === t && (h.test(this.inputIdCard) || (this.rules.id = !0)), "phone" === t && (/^1[3456789][0-9]{9}$/.test(this.inputPhone) && 0 !== this.inputPhone.length || (this.rules.phone = !0));
                    },
                    bindNameChange: function(t) {
                        this.inputName = t.detail.value, this.rules.name = 0 === t.detail.value.length;
                    },
                    bindIdCardChange: function(t) {
                        this.inputIdCard = t.detail.value, this.rules.id = 0 === t.detail.value.length;
                    },
                    bindPhoneChange: function(t) {
                        this.inputPhone = t.detail.value, this.rules.phone = !/^1[3456789][0-9]{9}$/.test(t.detail.value);
                    },
                    checkboxClick: function() {
                        this.allow = !this.allow;
                    },
                    submit: function() {
                        var e = o(i.default.mark(function e() {
                            var n, u, s = this;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.binding) {
                                        e.next = 29;
                                        break;
                                    }
                                    if (n = {
                                        name: this.inputName ? this.inputName.replace(/[*%&#+!()'"]/g, "") : "",
                                        idCard: this.inputIdCard ? this.inputIdCard.replace(/[*%&#+!()'"]/g, "") : "",
                                        phone: this.inputPhone ? this.inputPhone.replace(/[*%&#+!()'"]/g, "") : ""
                                    }, this.id && (n.id = this.id), 0 !== n.name.length) {
                                        e.next = 6;
                                        break;
                                    }
                                    return r.tip.toast("请输入正确的姓名", "", "none"), e.abrupt("return");

                                  case 6:
                                    if (h.test(n.idCard)) {
                                        e.next = 9;
                                        break;
                                    }
                                    return r.tip.toast("请输入正确的身份证", "", "none"), e.abrupt("return");

                                  case 9:
                                    if (/^1[3456789][0-9]{9}$/.test(n.phone) && 0 !== this.inputPhone.length) {
                                        e.next = 12;
                                        break;
                                    }
                                    return r.tip.toast("请输入正确的手机号", "", "none"), e.abrupt("return");

                                  case 12:
                                    if (this.allow) {
                                        e.next = 15;
                                        break;
                                    }
                                    return r.tip.toast("请先同意并遵守《服务声明》", "", "none"), e.abrupt("return");

                                  case 15:
                                    return t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), this.binding = !0, e.prev = 17, e.next = 20, a.default.bindIdCard(n);

                                  case 20:
                                    (u = e.sent) && 0 === parseInt(u.code, 10) ? (t.showToast({
                                        title: "绑定成功",
                                        icon: "success",
                                        duration: 1e3
                                    }), setTimeout(function() {
                                        t.navigateBack({
                                            success: function() {
                                                r.redis.set("updateHandle", "updateHandle"), s.binding = !1;
                                            }
                                        });
                                    }, 1500)) : this.binding = !1, e.next = 26;
                                    break;

                                  case 24:
                                    e.prev = 24, e.t0 = e.catch(17);

                                  case 26:
                                    return e.prev = 26, t.hideLoading(), e.finish(26);

                                  case 29:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 17, 24, 26, 29 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    unbind: function() {
                        var e = o(i.default.mark(function e() {
                            var n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.showModal({
                                        content: "确定要解绑？",
                                        showCancel: !0
                                    });

                                  case 2:
                                    if (!e.sent.confirm) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.next = 6, a.default.unbindIdCard({
                                        id: this.id
                                    });

                                  case 6:
                                    n = e.sent, 0 === parseInt(n.code, 10) && t.showToast({
                                        title: "解绑成功",
                                        icon: "success",
                                        duration: 3e3
                                    }), t.navigateBack();

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    e01a: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("62a7"), a = n("7cd3");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("4bce");
        var u = n("f0c5"), s = Object(u.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = s.exports;
    }
}, [ [ "4ead", "common/runtime", "common/vendor" ] ] ]);