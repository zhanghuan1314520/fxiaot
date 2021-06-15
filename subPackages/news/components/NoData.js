require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/NoData" ], {
    "44a2": function(e, t, n) {},
    "474b": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("f4fe"), o = n("cc5d");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("e907");
        var a = n("f0c5"), u = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    },
    "929d": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("2f62");
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var u = {
                props: {
                    text: {
                        type: String,
                        default: "暂无数据"
                    },
                    image: {
                        type: String,
                        default: ""
                    },
                    pageUrl: {
                        type: Number,
                        default: null
                    },
                    isSelf: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        textStr: {
                            1: "前往发现区发布",
                            2: "前往问答区提问",
                            3: "前往小视频区发布"
                        }
                    };
                },
                computed: {
                    imgUrl: function() {
                        return this.image || "https://imgcdn.huanjutang.com/image/2020/06/01/c2e52b08670ade21b2f9127a51438820.png";
                    },
                    textStrTmp: function() {
                        return this.textStr[this.pageUrl || 0];
                    }
                },
                methods: c(c({}, (0, r.mapMutations)({
                    setTabActiveId: "SET_TAB_ACTIVE_ID",
                    setRefreshDiscoveryIdx: "SET_REFRESH_DISCOVER_IDX"
                })), {}, {
                    jumpUrl: function(t) {
                        this.setTabActiveId({
                            1: 0,
                            2: 3,
                            3: 2
                        }[t]), this.setRefreshDiscoveryIdx(!0), e.switchTab({
                            url: "/pages/discovery/index"
                        });
                    }
                })
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    cc5d: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("929d"), o = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    e907: function(e, t, n) {
        "use strict";
        var r = n("44a2");
        n.n(r).a;
    },
    f4fe: function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/NoData-create-component", {
    "subPackages/news/components/NoData-create-component": function(e, t, n) {
        n("543d").createComponent(n("474b"));
    }
}, [ [ "subPackages/news/components/NoData-create-component" ] ] ]);