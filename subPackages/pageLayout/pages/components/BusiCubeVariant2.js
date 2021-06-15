require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiCubeVariant2" ], {
    "144a": function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("6797"), o = e("5d91");
        for (var u in o) "default" !== u && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(u);
        e("aa59");
        var c = e("f0c5"), i = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = i.exports;
    },
    3077: function(a, t, e) {},
    "5d91": function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("63c1"), o = e.n(n);
        for (var u in n) "default" !== u && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(u);
        t.default = o.a;
    },
    "63c1": function(a, t, e) {
        "use strict";
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                name: "MagicSquareVariant2",
                components: {
                    BaseLayout: function() {
                        e.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                            return resolve(e("d956"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                mixins: [ function(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    };
                }(e("88f3")).default ],
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
                    to: function(t) {
                        switch ("".concat(t.data_from)) {
                          case "1":
                            a.navigateTo({
                                url: "/subPackages/project/pages/collectProjects?collection_id=".concat(t.data_uri)
                            });
                            break;

                          case "2":
                            t.data_url && a.navigateTo({
                                url: t.data_url
                            });
                            break;

                          case "3":
                            a.navigateTo({
                                url: "/pages/lotteryDetail?project_id=".concat(t.data_uri)
                            });
                            break;

                          case "5":
                            t.data_uri && a.navigateTo({
                                url: "/subPackages/pageLayout/pages/uiLayout?id=".concat(t.data_uri)
                            });
                            break;

                          case "6":
                            if (t.data_roomid) {
                                var e = encodeURIComponent(JSON.stringify({
                                    path: "uiLayout",
                                    pid: 1
                                }));
                                a.navigateTo({
                                    url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t.data_roomid, "&custom_params=").concat(e)
                                });
                            }
                        }
                    }
                }
            };
            t.default = n;
        }).call(this, e("543d").default);
    },
    6797: function(a, t, e) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(t, "b", function() {
            return n;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
    },
    aa59: function(a, t, e) {
        "use strict";
        var n = e("3077");
        e.n(n).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiCubeVariant2-create-component", {
    "subPackages/pageLayout/pages/components/BusiCubeVariant2-create-component": function(a, t, e) {
        e("543d").createComponent(e("144a"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiCubeVariant2-create-component" ] ] ]);