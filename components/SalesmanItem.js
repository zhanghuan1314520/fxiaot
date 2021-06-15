(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SalesmanItem" ], {
    "78b8": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("cf15"), o = t("80a6");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("7d19");
        var u = t("f0c5"), c = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "7d19": function(e, n, t) {
        "use strict";
        var a = t("c6aa");
        t.n(a).a;
    },
    "80a6": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("eeb2"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    c6aa: function(e, n, t) {},
    cf15: function(e, n, t) {
        "use strict";
        var a = function() {
            var e = this, n = (e.$createElement, e._self._c, {
                width: "100%",
                height: "100%",
                "border-radius": "50%"
            }), t = e.parseNumber(e.item.page_views);
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: n,
                    m0: t
                }
            });
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    eeb2: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = r(t("a34a")), o = r(t("4ec3"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, n, t, a, o, r, u) {
                try {
                    var c = e[r](u), i = c.value;
                } catch (e) {
                    return void t(e);
                }
                c.done ? n(i) : Promise.resolve(i).then(a, o);
            }
            var c = {
                components: {
                    BusiAuthNavigator: function() {
                        t.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(t("aa79"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    BaseCallPhone: function() {
                        t.e("components/BaseCallPhone").then(function() {
                            return resolve(t("65ce"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    ImageLoader: function() {
                        t.e("components/ImageLoader").then(function() {
                            return resolve(t("24e0"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    index: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    },
                    project_id: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    andrees: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/2021122191988081.png",
                        sort: {
                            1: "https://imgcdn.huanjutang.com/assets/img/20196191631318081.png",
                            2: "https://imgcdn.huanjutang.com/assets/img/20196191629558081.png",
                            3: "https://imgcdn.huanjutang.com/assets/img/20196191631118081.png"
                        },
                        showCallPhone: !1
                    };
                },
                computed: {
                    recommend: function() {
                        var e = this.item, n = e.recommend_index, t = e.liveness;
                        return Number(t) >= 0 ? this.parseNumber(t) : Number(n) >= 0 ? this.parseNumber(n) : 0;
                    },
                    likeNum: function() {
                        var e = this.item, n = e.like_num, t = e.sales_man_like_num;
                        return Number(n) >= 0 ? this.parseNumber(n) : Number(t) >= 0 ? this.parseNumber(t) : 0;
                    },
                    dataContent: function() {
                        return "A样式第".concat(this.index + 1, "位");
                    }
                },
                methods: {
                    emptyHandle: function() {},
                    comfirm: function() {
                        this.showCallPhone = !1, e.makePhoneCall({
                            phoneNumber: this.phoneNumber
                        });
                    },
                    parseNumber: function(e) {
                        var n = parseInt(e / 1e4, 10);
                        return n > 0 ? "".concat(n, "w+") : e;
                    },
                    toIMPage: function(n) {
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(n.session_id, "&project_id=").concat(this.project_id, "&project_name=").concat(n.project_name, "&project_img=").concat(n.cover)
                        });
                    },
                    callPhoneSuccess: function() {
                        var e = function(e) {
                            return function() {
                                var n = this, t = arguments;
                                return new Promise(function(a, o) {
                                    var r = e.apply(n, t);
                                    function c(e) {
                                        u(r, a, o, c, i, "next", e);
                                    }
                                    function i(e) {
                                        u(r, a, o, c, i, "throw", e);
                                    }
                                    c(void 0);
                                });
                            };
                        }(a.default.mark(function e(n, t) {
                            var r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.getPhoneNum(t, 1);

                                  case 2:
                                    0 === (r = e.sent).code && (this.phoneNumber = r.data.phone, n(r.data.phone));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(n, t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = c;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SalesmanItem-create-component", {
    "components/SalesmanItem-create-component": function(e, n, t) {
        t("543d").createComponent(t("78b8"));
    }
}, [ [ "components/SalesmanItem-create-component" ] ] ]);