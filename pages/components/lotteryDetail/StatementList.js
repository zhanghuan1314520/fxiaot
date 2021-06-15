(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/StatementList" ], {
    "56b2": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ebf7"), r = n("ee5f");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("c955");
        var u = n("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "8e91": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, a, r, o, u) {
                try {
                    var i = t[o](u), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function i(t) {
                            u(o, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            u(o, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                components: {
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    StatementOverFlowItem: function() {
                        n.e("pages/components/lotteryDetail/StatementOverFlowItem").then(function() {
                            return resolve(n("e741"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                filters: {
                    salesmanAvatar: function(t) {
                        if (!t) return "";
                        var e = t.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(t + e, "imageView2/1/w/144");
                    }
                },
                mixins: [ o(n("4919")).default ],
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
                    },
                    willSalesName: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        list: this.statementList
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
                    previewImage: function(e, n) {
                        var a = this.list[e].images;
                        t.previewImage({
                            current: a[n],
                            urls: a
                        });
                    },
                    callSalesman: function() {
                        var t = i(a.default.mark(function t(e, n) {
                            var o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getPhoneNum(n, 1);

                                  case 2:
                                    0 === (o = t.sent).code && e(o.data.phone);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    goUserPage: function() {
                        var e = i(a.default.mark(function e(n, r) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (Math.floor(n) && r) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    t.navigateTo({
                                        url: "".concat(this.jumpUrl).concat(n)
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    c955: function(t, e, n) {
        "use strict";
        var a = n("d0c6");
        n.n(a).a;
    },
    d0c6: function(t, e, n) {},
    ebf7: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.list, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    l0: e.thumbnails && e.thumbnails.length > 0 && 1 === e.thumbnails.length ? t.__map(e.thumbnails, function(e, n) {
                        return {
                            $orig: t.__get_orig(e),
                            a0: {
                                width: "316rpx",
                                height: "480rpx",
                                "border-radius": "8rpx"
                            }
                        };
                    }) : null,
                    l1: e.thumbnails && e.thumbnails.length > 0 && e.thumbnails && e.thumbnails.length > 1 ? t.__map(e.thumbnails, function(e, n) {
                        return {
                            $orig: t.__get_orig(e),
                            a1: n < 3 ? {
                                width: "222rpx",
                                height: "222rpx",
                                "border-radius": "8rpx"
                            } : null
                        };
                    }) : null,
                    a2: {
                        width: "48rpx",
                        height: "48rpx",
                        "border-radius": "24rpx"
                    },
                    f0: t._f("salesmanAvatar")(e.sales_man_avatar_url)
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l2: e
                }
            });
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    ee5f: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8e91"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/StatementList-create-component", {
    "pages/components/lotteryDetail/StatementList-create-component": function(t, e, n) {
        n("543d").createComponent(n("56b2"));
    }
}, [ [ "pages/components/lotteryDetail/StatementList-create-component" ] ] ]);