(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/salesMan" ], {
    "1e7a": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4503"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    "20d9": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("61e14"), o = n("1e7a");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        var c = n("f0c5"), i = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = i.exports;
    },
    4503: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                components: {
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                filters: {
                    salesmanAvatar: function(e) {
                        var t = e.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(e + t, "imageView2/1/w/200");
                    }
                },
                props: {
                    recommendSalesMan: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    baseDetail: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    recommendRule: {
                        type: String,
                        default: ""
                    },
                    isSalesMan: {
                        type: Number,
                        default: null
                    },
                    projectId: {
                        type: Number,
                        default: null
                    }
                },
                data: function() {
                    return {
                        urls: []
                    };
                },
                watch: {
                    recommendSalesMan: function(e) {
                        var t = this;
                        e.length && 0 === this.urls.length && (this.urls = [], this.urls = e.map(function(e) {
                            return "navigateTo-authphone://subPackages/me/pages/chatInterface?user_id=".concat(e.session_id, "&project_id=").concat(t.projectId, "&project_name=").concat(t.baseDetail.name, "&project_img=").concat(t.baseDetail.cover);
                        }));
                    }
                },
                methods: {
                    findStr: function(e, t) {
                        return e.indexOf(t) > -1;
                    },
                    btnEventTrack: function() {},
                    navigateToHandle: function(t) {
                        e.navigateTo({
                            url: t
                        });
                    },
                    gotoSalesmanIM: function(e) {
                        this.$emit("gotoSalesmanIM", e);
                    },
                    stopMoveHandle: function() {
                        return !1;
                    },
                    jumpSaleManCenterUrl: function(t) {
                        e.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(t.session_id, "&project_id=").concat(this.project_id, "&andrees=detail&title=").concat(this.baseDetail.name, "&project_img=").concat(this.baseDetail.cover)
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    "61e14": function(e, t, n) {
        "use strict";
        var a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.recommendSalesMan.length > 0 ? e.__map(e.recommendSalesMan, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    a0: {
                        width: "100rpx",
                        height: "100rpx",
                        "border-radius": "100rpx"
                    },
                    f0: e._f("salesmanAvatar")(t.sales_man_avatar)
                };
            }) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/salesMan-create-component", {
    "pages/components/lotteryDetail/salesMan-create-component": function(e, t, n) {
        n("543d").createComponent(n("20d9"));
    }
}, [ [ "pages/components/lotteryDetail/salesMan-create-component" ] ] ]);