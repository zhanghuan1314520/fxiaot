(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/components/SalesCard" ], {
    "0c77": function(e, n, t) {},
    "10f1": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8530e"), o = t("50e7");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("b8b5");
        var u = t("f0c5"), c = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "3d38": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function o(e, n, t, a, o, r, u) {
                try {
                    var c = e[r](u), s = c.value;
                } catch (e) {
                    return void t(e);
                }
                c.done ? n(s) : Promise.resolve(s).then(a, o);
            }
            var r = {
                components: {
                    ContactBtns: function() {
                        t.e("pages/salesMan/components/ContactBtns").then(function() {
                            return resolve(t("0e41"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    Medals: function() {
                        Promise.all([ t.e("common/vendor"), t.e("pages/salesMan/components/Medals") ]).then(function() {
                            return resolve(t("28ace"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {
                    userId: {
                        type: Number,
                        require: !0,
                        default: 0
                    },
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    salesId: {
                        type: Number,
                        default: 0
                    },
                    salesManName: {
                        type: String,
                        default: ""
                    },
                    showContactBtns: {
                        type: Boolean,
                        default: !1
                    },
                    contactParam: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/2021122191988081.png"
                    };
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    },
                    name: function() {
                        var e = this.salesManName;
                        return e ? e.length > 3 ? "".concat(e.substring(0, 3), "...") : e : "--";
                    },
                    wechat: function() {
                        var e = this.item.wechat_code;
                        return e ? e.length > 8 ? "".concat(e.substring(0, 8), "...") : e : "";
                    },
                    defaultProjectName: function() {
                        var e = this.item.project_name;
                        return e ? e.length > 5 ? "".concat(e.substring(0, 5), "...") : e : "";
                    }
                },
                methods: {
                    previewOnce: function(n) {
                        n && e.previewImage({
                            urls: [ n ]
                        });
                    },
                    weixinCopy: function() {
                        var n = function(e) {
                            return function() {
                                var n = this, t = arguments;
                                return new Promise(function(a, r) {
                                    var u = e.apply(n, t);
                                    function c(e) {
                                        o(u, a, r, c, s, "next", e);
                                    }
                                    function s(e) {
                                        o(u, a, r, c, s, "throw", e);
                                    }
                                    c(void 0);
                                });
                            };
                        }(a.default.mark(function n(t) {
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    e.setClipboardData({
                                        data: t,
                                        success: function() {
                                            e.showModal({
                                                title: "小技巧",
                                                content: "微信号已复制，联系说来自【杭州房小团】将会获得更好服务！",
                                                showCancel: !1
                                            });
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }));
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = r;
        }).call(this, t("543d").default);
    },
    "50e7": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("3d38"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    "8530e": function(e, n, t) {
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
    b8b5: function(e, n, t) {
        "use strict";
        var a = t("0c77");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/salesMan/components/SalesCard-create-component", {
    "pages/salesMan/components/SalesCard-create-component": function(e, n, t) {
        t("543d").createComponent(t("10f1"));
    }
}, [ [ "pages/salesMan/components/SalesCard-create-component" ] ] ]);