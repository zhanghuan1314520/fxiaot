require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiSmartButtonDefault" ], {
    "3cdf": function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("d63d"), o = t.n(n);
        for (var c in n) "default" !== c && function(a) {
            t.d(e, a, function() {
                return n[a];
            });
        }(c);
        e.default = o.a;
    },
    "7d08": function(a, e, t) {
        "use strict";
        var n = function() {
            var a = this;
            a.$createElement, a._self._c, a._isMounted || (a.e0 = function(a, e) {
                for (var t = [], n = arguments.length - 2; n-- > 0; ) t[n] = arguments[n + 2];
                var o = t[t.length - 1].currentTarget.dataset, c = o.eventParams || o["event-params"];
                return a((e = c.item).phone);
            });
        }, o = [];
        t.d(e, "b", function() {
            return n;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    },
    "82f6": function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("7d08"), o = t("3cdf");
        for (var c in o) "default" !== c && function(a) {
            t.d(e, a, function() {
                return o[a];
            });
        }(c);
        t("e0b0");
        var u = t("f0c5"), r = Object(u.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    },
    b45f: function(a, e, t) {},
    d63d: function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                components: {
                    BaseCallPhone: function() {
                        t.e("components/BaseCallPhone").then(function() {
                            return resolve(t("65ce"));
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
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                methods: {
                    to: function(e) {
                        switch ("".concat(e.linkType)) {
                          case "2":
                            a.openLocation({
                                latitude: parseFloat(e.address.latLng.lat),
                                longitude: parseFloat(e.address.latLng.lng),
                                title: e.address.title,
                                address: e.address.address || ""
                            });
                            break;

                          case "3":
                            switch ("".concat(e.link.data_from)) {
                              case "1":
                                a.navigateTo({
                                    url: "/subPackages/project/pages/collectProjects?collection_id=".concat(e.link.data_uri)
                                });
                                break;

                              case "2":
                                a.navigateTo({
                                    url: e.link.data_url
                                });
                                break;

                              case "3":
                                a.navigateTo({
                                    url: "/pages/lotteryDetail?project_id=".concat(e.link.data_uri)
                                });
                                break;

                              case "5":
                                e.link.data_uri && a.navigateTo({
                                    url: "/subPackages/pageLayout/pages/uiLayout?id=".concat(e.link.data_uri)
                                });
                                break;

                              case "6":
                                if (e.link.data_roomid) {
                                    var t = encodeURIComponent(JSON.stringify({
                                        path: "uiLayout",
                                        pid: 1
                                    }));
                                    a.navigateTo({
                                        url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(e.link.data_roomid, "&custom_params=").concat(t)
                                    });
                                }
                            }
                        }
                    }
                }
            };
            e.default = n;
        }).call(this, t("543d").default);
    },
    e0b0: function(a, e, t) {
        "use strict";
        var n = t("b45f");
        t.n(n).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiSmartButtonDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiSmartButtonDefault-create-component": function(a, e, t) {
        t("543d").createComponent(t("82f6"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiSmartButtonDefault-create-component" ] ] ]);