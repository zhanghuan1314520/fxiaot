(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiCube" ], {
    "0f27": function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var e = {
                props: {
                    listData: {
                        type: Object,
                        default: function() {
                            return {
                                style_name: "penta_cube",
                                detail: [ {
                                    img_url: "https://imgcdn.huanjutang.com/assert/img/1575960475510.jpg",
                                    data_from: 3,
                                    data_uri: "9527"
                                } ]
                            };
                        }
                    }
                },
                methods: {
                    to: function(a) {
                        switch ("".concat(a.data_from)) {
                          case "1":
                            t.navigateTo({
                                url: "/subPackages/project/pages/collectProjects?collection_id=".concat(a.data_uri)
                            });
                            break;

                          case "2":
                            t.navigateTo({
                                url: a.data_uri
                            });
                            break;

                          case "3":
                            t.navigateTo({
                                url: "/pages/lotteryDetail?project_id=".concat(a.data_uri)
                            });
                            break;

                          case "5":
                            a.data_uri && t.navigateTo({
                                url: "/subPackages/pageLayout/pages/uiLayout?id=".concat(a.data_uri)
                            });
                            break;

                          case "6":
                            a.data_roomid && t.navigateTo({
                                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(a.data_roomid)
                            });
                        }
                    }
                }
            };
            a.default = e;
        }).call(this, e("543d").default);
    },
    a10d: function(t, a, e) {},
    bf59: function(t, a, e) {
        "use strict";
        var n = e("a10d");
        e.n(n).a;
    },
    d632: function(t, a, e) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(a, "b", function() {
            return n;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {});
    },
    e1cf: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("0f27"), o = e.n(n);
        for (var c in n) "default" !== c && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(c);
        a.default = o.a;
    },
    e3ea: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("d632"), o = e("e1cf");
        for (var c in o) "default" !== c && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(c);
        e("bf59");
        var u = e("f0c5"), i = Object(u.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiCube-create-component", {
    "components/UILayout/BusiCube-create-component": function(t, a, e) {
        e("543d").createComponent(e("e3ea"));
    }
}, [ [ "components/UILayout/BusiCube-create-component" ] ] ]);