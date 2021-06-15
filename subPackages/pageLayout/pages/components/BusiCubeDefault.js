require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiCubeDefault" ], {
    "6a1c": function(a, e, t) {},
    "79e4": function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("f3cb"), o = t("d1c8a");
        for (var u in o) "default" !== u && function(a) {
            t.d(e, a, function() {
                return o[a];
            });
        }(u);
        t("a93c");
        var c = t("f0c5"), i = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = i.exports;
    },
    a93c: function(a, e, t) {
        "use strict";
        var n = t("6a1c");
        t.n(n).a;
    },
    d1c8a: function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("e53c"), o = t.n(n);
        for (var u in n) "default" !== u && function(a) {
            t.d(e, a, function() {
                return n[a];
            });
        }(u);
        e.default = o.a;
    },
    e53c: function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "MagicSquareDefault",
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
                    to: function(e) {
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
    },
    f3cb: function(a, e, t) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(e, "b", function() {
            return n;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiCubeDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiCubeDefault-create-component": function(a, e, t) {
        t("543d").createComponent(t("79e4"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiCubeDefault-create-component" ] ] ]);