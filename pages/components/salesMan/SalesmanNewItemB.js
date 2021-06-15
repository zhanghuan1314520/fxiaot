(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/salesMan/SalesmanNewItemB" ], {
    "10c2": function(e, n, t) {},
    "15e2": function(e, n, t) {
        "use strict";
        var a = t("10c2");
        t.n(a).a;
    },
    "362b": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("bc93"), o = t("c4fb");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("15e2");
        var c = t("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    8047: function(e, n, t) {
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
            function c(e, n, t, a, o, r, c) {
                try {
                    var u = e[r](c), s = u.value;
                } catch (e) {
                    return void t(e);
                }
                u.done ? n(s) : Promise.resolve(s).then(a, o);
            }
            var u = {
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
                        return "B样式第".concat(this.index + 1, "位");
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
                    goDetail: function() {
                        var n = this.item, t = "/pages/salesMan/detail?user_id=".concat(n.session_id, "&project_id=").concat(this.project_id, "&andrees=").concat(this.andrees, "&project_img=").concat(n.cover);
                        e.navigateTo({
                            url: t
                        });
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
                                    function u(e) {
                                        c(r, a, o, u, s, "next", e);
                                    }
                                    function s(e) {
                                        c(r, a, o, u, s, "throw", e);
                                    }
                                    u(void 0);
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
            n.default = u;
        }).call(this, t("543d").default);
    },
    bc93: function(e, n, t) {
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
    c4fb: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8047"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/salesMan/SalesmanNewItemB-create-component", {
    "pages/components/salesMan/SalesmanNewItemB-create-component": function(e, n, t) {
        t("543d").createComponent(t("362b"));
    }
}, [ [ "pages/components/salesMan/SalesmanNewItemB-create-component" ] ] ]);