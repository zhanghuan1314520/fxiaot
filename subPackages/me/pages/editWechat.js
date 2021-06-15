require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/editWechat" ], {
    "38de": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("b961"), u = n("ef23");
        for (var o in u) "default" !== o && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(o);
        n("4b8e");
        var c = n("f0c5"), r = Object(c.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "4b8e": function(t, e, n) {
        "use strict";
        var a = n("50db");
        n.n(a).a;
    },
    "50db": function(t, e, n) {},
    "57b3": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(n("a34a")), u = c(n("4ec3")), o = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, n, a, u, o, c) {
                try {
                    var r = t[o](c), i = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(i) : Promise.resolve(i).then(a, u);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, u) {
                        var o = t.apply(e, n);
                        function c(t) {
                            r(o, a, u, c, i, "next", t);
                        }
                        function i(t) {
                            r(o, a, u, c, i, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var s = {
                components: {
                    UploadMedia: function() {
                        n.e("subPackages/me/pages/components/saleman/UploadMedia").then(function() {
                            return resolve(n("2de4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SubmitButton: function() {
                        n.e("subPackages/me/pages/components/saleman/SubmitButton").then(function() {
                            return resolve(n("649d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    InputItem: function() {
                        n.e("subPackages/me/pages/components/saleman/InputItem").then(function() {
                            return resolve(n("24db"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        wechat: "",
                        fileList: [],
                        state: null,
                        oldVal: {
                            wechat: "",
                            qrCode: ""
                        }
                    };
                },
                computed: {
                    disabled: function() {
                        return !this.wechat || !this.fileList.length || 0 === this.state || this.noChange;
                    },
                    noChange: function() {
                        return this.wechat === this.oldVal.wechat && this.fileList[0] === this.oldVal.qrCode;
                    }
                },
                onLoad: function() {
                    var t = i(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, u.default.sales.salesProfileDetail({
                                    content_type: 1
                                });

                              case 2:
                                e = t.sent, n = e.data, this.wechat = n && n.wechat_code || "", this.state = n && n.state || null, 
                                this.fileList = n && n.wechat_qrcode ? [ n.wechat_qrcode ] : [], this.oldVal = {
                                    wechat: this.wechat,
                                    qrCode: n && n.wechat_qrcode || ""
                                }, this.$refs.inputItem.onFocus();

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    modify: function() {
                        var e = i(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.wechat) {
                                        e.next = 3;
                                        break;
                                    }
                                    return o.tip.toast("微信名不能为空", "", "none"), e.abrupt("return");

                                  case 3:
                                    if (!(/[\u4e00-\u9fa5]/.test(this.wechat) || this.wechat.length > 20)) {
                                        e.next = 6;
                                        break;
                                    }
                                    return o.tip.toast("请输入正确的微信名", "", "none"), e.abrupt("return");

                                  case 6:
                                    if (this.fileList.length) {
                                        e.next = 9;
                                        break;
                                    }
                                    return o.tip.toast("微信二维码不能为空", "", "none"), e.abrupt("return");

                                  case 9:
                                    return e.next = 11, u.default.sales.salesProfileUpdate({
                                        content_type: 1,
                                        content: [ {
                                            field: "wechat_code",
                                            value: this.wechat
                                        }, {
                                            field: "wechat_qrcode",
                                            value: this.fileList[0]
                                        } ]
                                    });

                                  case 11:
                                    0 === (n = e.sent).code ? (o.tip.toast("审核通过后生效", "", "none"), setTimeout(function() {
                                        t.navigateBack();
                                    }, 1e3)) : o.tip.toast(n.message, "", "none");

                                  case 13:
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
            e.default = s;
        }).call(this, n("543d").default);
    },
    "5ca68": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("38de")).default);
        }).call(this, n("543d").createPage);
    },
    b961: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, u = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {});
    },
    ef23: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("57b3"), u = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = u.a;
    }
}, [ [ "5ca68", "common/runtime", "common/vendor" ] ] ]);