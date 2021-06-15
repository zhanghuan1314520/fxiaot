(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/StatementListNotCD" ], {
    "024c": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("9f76"), o = n("c209");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("a8a8");
        var u = n("f0c5"), i = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    6755: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), o = u(n("4ec3")), r = u(n("0a2c"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, o, r, u) {
                try {
                    var i = t[r](u), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(a, o);
            }
            var c = n("f4fd"), s = {
                components: {
                    Dialog: function() {
                        n.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(n("6bfa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    StatementOverFlowItem: function() {
                        n.e("pages/components/lotteryDetail/StatementOverFlowItem").then(function() {
                            return resolve(n("e741"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r.default ],
                props: {
                    statementList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    margin: {
                        type: String,
                        default: "margin: 0 32rpx"
                    }
                },
                data: function() {
                    return {
                        username: "",
                        showCallBtn: !1,
                        showCallPhone: !1,
                        phoneNumber: "",
                        btnStatus: {},
                        list: this.statementList,
                        callContent: "拨通后请说明来自\n【杭州房小团】"
                    };
                },
                computed: {
                    typeMap: function() {
                        return {
                            1: "楼盘动态",
                            2: this.willSalesName,
                            3: "开盘",
                            4: "交房"
                        };
                    },
                    urls: function() {
                        return this.list.map(function(t) {
                            return "navigateTo-authphone://subPackages/me/pages/chatInterface?user_id=".concat(t.session_id);
                        });
                    }
                },
                watch: {
                    statementList: function(t) {
                        t.length && (this.list = t);
                    }
                },
                methods: {
                    comfirm: function() {
                        t.makePhoneCall({
                            phoneNumber: this.phoneNumber
                        });
                    },
                    previewImage: function(e, n) {
                        var a = this.list[e].images;
                        t.previewImage({
                            current: a[n],
                            urls: a
                        });
                    },
                    getUserInfo: function(t) {
                        var e = this;
                        c.updateUserInfo().then(function(n) {
                            e.username = n.nickName, e.callSalesman.call(e, t);
                        }).catch(function() {});
                    },
                    callSalesman: function() {
                        var t = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(a, o) {
                                    var r = t.apply(e, n);
                                    function u(t) {
                                        i(r, a, o, u, c, "next", t);
                                    }
                                    function c(t) {
                                        i(r, a, o, u, c, "throw", t);
                                    }
                                    u(void 0);
                                });
                            };
                        }(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.default.getPhoneNum(e, 1);

                                  case 2:
                                    0 === (n = t.sent).code && (this.showCallPhone = !0, this.phoneNumber = n.data.phone);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "9f76": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    a8a8: function(t, e, n) {
        "use strict";
        var a = n("dd1d");
        n.n(a).a;
    },
    c209: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6755"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    dd1d: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/StatementListNotCD-create-component", {
    "pages/components/lotteryDetail/StatementListNotCD-create-component": function(t, e, n) {
        n("543d").createComponent(n("024c"));
    }
}, [ [ "pages/components/lotteryDetail/StatementListNotCD-create-component" ] ] ]);