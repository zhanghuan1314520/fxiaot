require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/changeEnterProject" ], {
    "63a7": function(t, e, a) {},
    "6adb": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(a("a34a")), n = o(a("4ec3")), i = a("b628"), u = a("f4fd");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, a, r, n, i, u) {
                try {
                    var o = t[i](u), c = o.value;
                } catch (t) {
                    return void a(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(r, n);
            }
            function s(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(r, n) {
                        var i = t.apply(e, a);
                        function u(t) {
                            c(i, r, n, u, o, "next", t);
                        }
                        function o(t) {
                            c(i, r, n, u, o, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var p = a("ca00"), d = a("79b9"), l = {
                data: function() {
                    return {
                        inputData: {
                            name: "",
                            phone: "",
                            wechat: "",
                            project_name: "",
                            wechat_qrcode: "",
                            card: "",
                            old_project_name: "",
                            shop: "",
                            old_shop: "",
                            corporation: "",
                            old_corporation: ""
                        },
                        project_id: "",
                        showModel: !1,
                        showTextarea: !0,
                        sales_man_id: "",
                        type: "",
                        gui_url: "",
                        invite_url: "",
                        is_broker: null,
                        PS: "注：如果无法上传图片，请到杭州房小团公众号里面的（菜单=>更多=>置业顾问入驻）报名！"
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/salesMan?inviter_id=".concat(this.sales_man_id || 0));
                },
                onLoad: function() {
                    var t = s(r.default.mark(function t(e) {
                        var a, u, o, c;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a = i.cache.get("userinfo"), this.project_id = e && e.project_id, this.sales_man_id = a.sales_man_id, 
                                t.next = 5, n.default.sales.getCommutationProject(this.project_id);

                              case 5:
                                return (u = t.sent).data && (o = u.data, this.inputData = i.common.merge(this.inputData, {
                                    name: o.name,
                                    phone: o.phone,
                                    wechat: o.wechat_code,
                                    wechat_qrcode: o.wechat_qrcode,
                                    card: o.card,
                                    old_project_name: o.project_name,
                                    old_shop: o.shop,
                                    old_corporation: o.corporation
                                }), this.is_broker = u.data.is_broker), t.next = 9, n.default.isSaleMan();

                              case 9:
                                c = t.sent, this.gui_url = c.url, this.invite_url = c.invite_url, 1 === parseInt(e.type, 10) && (this.showModel = !0, 
                                this.showTextarea = !1);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    delImg: function(t) {
                        1 === parseInt(t, 10) ? this.inputData.wechat_qrcode = "" : this.inputData.card = "";
                    },
                    changType: function() {
                        this.type = "";
                    },
                    rules_in: function() {
                        t.navigateTo({
                            url: this.gui_url
                        });
                    },
                    getFormID: function(t) {
                        t && t.detail && n.default.sendFromID(t.detail.formId).then(function() {});
                    },
                    preview: function(e) {
                        var a = e.currentTarget.dataset.preview;
                        t.previewImage({
                            urls: [ a ]
                        });
                    },
                    uploadFile: function() {
                        var t = s(r.default.mark(function t(e) {
                            var a, n, u;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, i.foundation.chooseImageSync();

                                  case 3:
                                    return a = t.sent, t.next = 6, i.foundation.uploadFileSync(a.tempFilePaths[0]);

                                  case 6:
                                    if (n = t.sent, 200 === parseInt(n.statusCode, 10)) {
                                        t.next = 11;
                                        break;
                                    }
                                    i.tip.error("图片上传失败"), t.next = 16;
                                    break;

                                  case 11:
                                    if (u = n.data, 0 === parseInt(u.status, 10)) {
                                        t.next = 15;
                                        break;
                                    }
                                    return i.tip.error("图片上传失败"), t.abrupt("return");

                                  case 15:
                                    1 === parseInt(e, 10) ? this.inputData.wechat_qrcode = u.data.url : this.inputData.card = u.data.url;

                                  case 16:
                                    t.next = 21;
                                    break;

                                  case 18:
                                    t.prev = 18, t.t0 = t.catch(0), i.tip.error("图片上传失败");

                                  case 21:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 0, 18 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    inputValue: function(t, e) {
                        this.inputData[t] = e.detail.value;
                    },
                    loseFocus: function(t, e) {
                        this.inputData[t] = e.detail.value, /^1[3456789]\d{9}$/.test(this.inputData.phone) || i.tip.alert("手机号有误");
                    },
                    submit: function() {
                        var e = s(r.default.mark(function e() {
                            var a;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (a = {
                                        project_id: this.project_id
                                    }, this.inputData.name) {
                                        e.next = 4;
                                        break;
                                    }
                                    return i.tip.alert("请填写姓名"), e.abrupt("return");

                                  case 4:
                                    if (a.name = this.inputData.name, this.inputData.wechat) {
                                        e.next = 8;
                                        break;
                                    }
                                    return i.tip.alert("请填写微信号"), e.abrupt("return");

                                  case 8:
                                    if (a.wechat = this.inputData.wechat, this.inputData.phone) {
                                        e.next = 12;
                                        break;
                                    }
                                    return i.tip.alert("请填写手机号"), e.abrupt("return");

                                  case 12:
                                    if (a.phone = this.inputData.phone, this.inputData.card) {
                                        e.next = 16;
                                        break;
                                    }
                                    return i.tip.alert("请上传名片或工牌"), e.abrupt("return");

                                  case 16:
                                    if (a.card = this.inputData.card, this.inputData.wechat_qrcode) {
                                        e.next = 20;
                                        break;
                                    }
                                    return i.tip.alert("请上传二维码"), e.abrupt("return");

                                  case 20:
                                    if (a.wechat_qrcode = this.inputData.wechat_qrcode, 1 !== parseInt(this.is_broker, 10)) {
                                        e.next = 38;
                                        break;
                                    }
                                    if (this.inputData.old_shop) {
                                        e.next = 25;
                                        break;
                                    }
                                    return i.tip.alert("请填写原店面名"), e.abrupt("return");

                                  case 25:
                                    if (this.inputData.shop) {
                                        e.next = 28;
                                        break;
                                    }
                                    return i.tip.alert("请填写更换后店面名"), e.abrupt("return");

                                  case 28:
                                    if (a.shop = this.inputData.shop, this.inputData.old_corporation) {
                                        e.next = 32;
                                        break;
                                    }
                                    return i.tip.alert("请填写原公司名"), e.abrupt("return");

                                  case 32:
                                    if (this.inputData.corporation) {
                                        e.next = 35;
                                        break;
                                    }
                                    return i.tip.alert("请填写更换后公司名"), e.abrupt("return");

                                  case 35:
                                    a.corporation = this.inputData.corporation, e.next = 41;
                                    break;

                                  case 38:
                                    if (this.inputData.old_project_name) {
                                        e.next = 41;
                                        break;
                                    }
                                    return i.tip.alert("请填写原驻楼盘名称"), e.abrupt("return");

                                  case 41:
                                    if (this.inputData.project_name) {
                                        e.next = 44;
                                        break;
                                    }
                                    return i.tip.alert("请填写更换后楼盘名"), e.abrupt("return");

                                  case 44:
                                    a.commutation_project = this.inputData.project_name, n.default.sales.setCommutationProject(a).then(function(e) {
                                        0 === parseInt(e.code, 10) && t.redirectTo({
                                            url: p.webview2Url("".concat(d.webviewHost, "/salesman/registry?_t=").concat(Date.now()))
                                        });
                                    });

                                  case 46:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    getQrcode: function() {
                        var e = s(r.default.mark(function e() {
                            var a;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, u.getGlobalConfig)();

                                  case 2:
                                    a = e.sent, t.previewImage({
                                        urls: [ a.wechatQrCode ]
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, a("543d").default);
    },
    7453: function(t, e, a) {
        "use strict";
        var r = a("63a7");
        a.n(r).a;
    },
    "7b7d": function(t, e, a) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, n = [];
        a.d(e, "b", function() {
            return r;
        }), a.d(e, "c", function() {
            return n;
        }), a.d(e, "a", function() {});
    },
    "7d33": function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a("6adb"), n = a.n(r);
        for (var i in r) "default" !== i && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = n.a;
    },
    9582: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = a("7b7d"), n = a("7d33");
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        a("7453");
        var u = a("f0c5"), o = Object(u.a)(n.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    },
    d986: function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("6cdc"), e(a("66fd")), t(e(a("9582")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "d986", "common/runtime", "common/vendor" ] ] ]);