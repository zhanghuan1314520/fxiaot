require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiBannerDefault" ], {
    "4e19": function(a, e, t) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(e, "b", function() {
            return n;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    },
    "4eb8": function(a, e, t) {
        "use strict";
        var n = t("96b1");
        t.n(n).a;
    },
    "96b1": function(a, e, t) {},
    bc99: function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("4e19"), o = t("ca04");
        for (var u in o) "default" !== u && function(a) {
            t.d(e, a, function() {
                return o[a];
            });
        }(u);
        t("4eb8");
        var c = t("f0c5"), r = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    },
    ca04: function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("df08"), o = t.n(n);
        for (var u in n) "default" !== u && function(a) {
            t.d(e, a, function() {
                return n[a];
            });
        }(u);
        e.default = o.a;
    },
    df08: function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "banner_default",
                components: {
                    BaseLayout: function() {
                        t.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                            return resolve(t("d956"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                mixins: [ function(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    };
                }(t("88f3")).default ],
                props: {
                    settings: {
                        type: Object,
                        default: function() {
                            return {
                                magic_square: []
                            };
                        }
                    }
                },
                data: function() {
                    return {
                        dataApi: []
                    };
                },
                mounted: function() {},
                methods: {
                    swiperNavHandle: function(e) {
                        switch ("".concat(e.data_from)) {
                          case "1":
                            a.navigateTo({
                                url: "/subPackages/project/pages/collectProjects?collection_id=".concat(e.data_uri)
                            });
                            break;

                          case "2":
                            e.data_url && a.navigateTo({
                                url: e.data_url
                            });
                            break;

                          case "3":
                            a.navigateTo({
                                url: "/pages/lotteryDetail?project_id=".concat(e.data_uri)
                            });
                            break;

                          case "5":
                            e.data_uri && a.navigateTo({
                                url: "/subPackages/pageLayout/pages/uiLayout?id=".concat(e.data_uri)
                            });
                            break;

                          case "6":
                            if (e.data_roomid) {
                                var t = encodeURIComponent(JSON.stringify({
                                    path: "uiLayout",
                                    pid: 1
                                }));
                                a.navigateTo({
                                    url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(e.data_roomid, "&custom_params=").concat(t)
                                });
                            }
                        }
                    }
                }
            };
            e.default = n;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiBannerDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiBannerDefault-create-component": function(a, e, t) {
        t("543d").createComponent(t("bc99"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiBannerDefault-create-component" ] ] ]);