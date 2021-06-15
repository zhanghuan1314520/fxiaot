require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/addAddress" ], {
    5193: function(e, t, s) {
        "use strict";
        s.r(t);
        var n = s("aea5"), a = s.n(n);
        for (var r in n) "default" !== r && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = a.a;
    },
    "6c05": function(e, t, s) {},
    "7d0f": function(e, t, s) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
        s.d(t, "b", function() {
            return n;
        }), s.d(t, "c", function() {
            return a;
        }), s.d(t, "a", function() {});
    },
    "9cce": function(e, t, s) {
        "use strict";
        var n = s("6c05");
        s.n(n).a;
    },
    ac02: function(e, t, s) {
        "use strict";
        s.r(t);
        var n = s("7d0f"), a = s("5193");
        for (var r in a) "default" !== r && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(r);
        s("9cce");
        var i = s("f0c5"), c = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = c.exports;
    },
    aea5: function(e, t, s) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = c(s("a34a")), a = c(s("4ec3")), r = s("b628"), i = c(s("5573"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function d(e, t, s, n, a, r, i) {
                try {
                    var c = e[r](i), d = c.value;
                } catch (e) {
                    return void s(e);
                }
                c.done ? t(d) : Promise.resolve(d).then(n, a);
            }
            function o(e) {
                return function() {
                    var t = this, s = arguments;
                    return new Promise(function(n, a) {
                        var r = e.apply(t, s);
                        function i(e) {
                            d(r, n, a, i, c, "next", e);
                        }
                        function c(e) {
                            d(r, n, a, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var u = {
                components: {
                    selectedAddressView: function() {
                        s.e("subPackages/activity/pages/selectedAddressView").then(function() {
                            return resolve(s("6b04"));
                        }.bind(null, s)).catch(s.oe);
                    }
                },
                data: function() {
                    return {
                        borderColor: !0,
                        showToggle: !1,
                        inputVal: "",
                        date: "",
                        sure: "确定",
                        togggle: !0,
                        hideLocal: !0,
                        showLocal: !1,
                        local: "选择省市区",
                        addressMes: {
                            sku_id: "",
                            province: "",
                            city: "",
                            district: "",
                            address: "",
                            contact_name: "",
                            contact_phone: ""
                        },
                        isShow: !1,
                        value: [ 0, 0, 0 ],
                        provinces: [],
                        citys: [],
                        areas: [],
                        areaInfo: ""
                    };
                },
                destroyed: function() {
                    this.$eventBus.$off("cancel"), this.$eventBus.$off("sure");
                },
                onShareAppMessage: function() {
                    return r.share.share("我在这里0元抽奖", "/subPackages/activity/pages/addAddress", "https://imgcdn.huanjutang.com/assets/img/20181116/5bee7a673dd0e.jpg");
                },
                onLoad: function() {
                    var e = o(n.default.mark(function e(t) {
                        var s = this;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.addressMes.sku_id = t.sku_id, e.next = 3, this.loadNext();

                              case 3:
                                return e.next = 5, this.init();

                              case 5:
                                this.$eventBus.$on("cancel", function() {
                                    s.isShow = !1;
                                }), this.$eventBus.$on("sure", function(e, t, n) {
                                    s.isShow = !1, s.addressMes.province = e, s.addressMes.city = t, s.addressMes.district = n, 
                                    s.addressMes.province && s.addressMes.province.length > 0 && (s.hideLocal = !1, 
                                    s.showLocal = !0);
                                });

                              case 7:
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
                    selecteHandle: function() {
                        this.isShow = !0;
                    },
                    cancelHandle: function() {
                        this.isShow = !1;
                    },
                    sureHandle: function(e, t, s) {
                        this.isShow = !1, this.addressMes.province = e, this.addressMes.city = t, this.addressMes.district = s, 
                        this.addressMes.province && this.addressMes.province.length > 0 && (this.hideLocal = !1, 
                        this.showLocal = !0);
                    },
                    inputPhone: function(e) {
                        this.addressMes.contact_phone = e.detail.value;
                    },
                    inputName: function(e) {
                        this.addressMes.contact_name = e.detail.value;
                    },
                    setValue: function(e) {
                        this.addressMes.address = e.detail.value, this.showToggle = this.addressMes.address;
                    },
                    clearValue: function() {
                        var e = o(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.addressMes.address = "", this.showToggle = !1;

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    submit: function() {
                        var t = o(n.default.mark(function t() {
                            var s, i;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (s = /^1[3456789]\d{9}$/, this.addressMes.contact_name && !this.addressMes.contact_name.match(/^\s*$/)) {
                                        t.next = 4;
                                        break;
                                    }
                                    return r.tip.error("请填写姓名"), t.abrupt("return");

                                  case 4:
                                    if (this.addressMes.contact_phone && !this.addressMes.contact_phone.match(/^\s*$/) && s.test(this.addressMes.contact_phone)) {
                                        t.next = 7;
                                        break;
                                    }
                                    return r.tip.error("请填写正确手机号"), t.abrupt("return");

                                  case 7:
                                    if (this.addressMes.province) {
                                        t.next = 10;
                                        break;
                                    }
                                    return r.tip.error("请填写省市区"), t.abrupt("return");

                                  case 10:
                                    if (this.addressMes.address && !this.addressMes.address.match(/^\s*$/)) {
                                        t.next = 13;
                                        break;
                                    }
                                    return r.tip.error("填写详细地址"), t.abrupt("return");

                                  case 13:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), t.next = 16, a.default.userAddresses(this.addressMes);

                                  case 16:
                                    i = t.sent, 0 === parseInt(i.code, 10) && (r.tip.toast("提交成功"), e.navigateBack()), 
                                    e.hideLoading();

                                  case 19:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    formatDate: function() {
                        var e = o(n.default.mark(function e(t) {
                            var s, a, r, i, c, d;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return s = new Date(t.replace(/-/g, "/")), a = s.getTime() + 6048e5, r = new Date(a), 
                                    i = r.getMonth() + 1, c = r.getDate(), (d = r.getHours()) < 10 && (d = "0".concat(d)), 
                                    e.abrupt("return", "".concat(i, "月").concat(c, "日").concat(d, ":00"));

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var e = o(n.default.mark(function e() {
                            var t, s, r, i;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.getraffleStatus(this.addressMes.sku_id);

                                  case 2:
                                    return t = e.sent, s = t.data.lucky_time, e.next = 6, this.formatDate(s);

                                  case 6:
                                    return this.date = e.sent, e.next = 9, a.default.getAddresses(this.addressMes.sku_id);

                                  case 9:
                                    (r = e.sent).data && (this.sure = "修改地址", this.togggle = !1, i = r.data, this.addressMes.contact_name = i.contact_name, 
                                    this.addressMes.address = i.address, this.addressMes.contact_phone = i.contact_phone, 
                                    this.addressMes.city = i.city, this.addressMes.district = i.district, this.addressMes.province = i.province, 
                                    this.local = i.province + i.province + i.district);

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    init: function() {
                        var e = this, t = i.default.provinces[0].id;
                        e.provinces = i.default.provinces, e.citys = i.default.citys[t], e.areas = i.default.areas[i.default.citys[t][0].id];
                    }
                }
            };
            t.default = u;
        }).call(this, s("543d").default);
    },
    dec7: function(e, t, s) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            s("6cdc"), t(s("66fd")), e(t(s("ac02")).default);
        }).call(this, s("543d").createPage);
    }
}, [ [ "dec7", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);