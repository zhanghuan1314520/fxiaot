require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiBackgroundDefault" ], {
    "05c6": function(a, t, e) {
        "use strict";
        var n = e("7b30");
        e.n(n).a;
    },
    "0662": function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("db7b"), o = e.n(n);
        for (var u in n) "default" !== u && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(u);
        t.default = o.a;
    },
    "7b30": function(a, t, e) {},
    8194: function(a, t, e) {
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
    db7b: function(a, t, e) {
        "use strict";
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                mixins: [ function(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    };
                }(e("88f3")).default ],
                props: {
                    settings: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    dataBgColor: {
                        type: String,
                        default: ""
                    }
                },
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
    e31a: function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("8194"), o = e("0662");
        for (var u in o) "default" !== u && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(u);
        e("05c6");
        var c = e("f0c5"), r = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiBackgroundDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiBackgroundDefault-create-component": function(a, t, e) {
        e("543d").createComponent(e("e31a"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiBackgroundDefault-create-component" ] ] ]);