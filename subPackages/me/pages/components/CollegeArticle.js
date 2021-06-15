require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/CollegeArticle" ], {
    "759a": function(e, n, t) {
        "use strict";
        var o = function() {
            var e = this, n = (e.$createElement, e._self._c, {
                width: "188rpx",
                height: "148rpx",
                "border-radius": "8rpx"
            }), t = e._f("cropImg")(e.item.cover_img);
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: n,
                    f0: t
                }
            });
        }, a = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    },
    "9dda": function(e, n, t) {
        "use strict";
        var o = t("b6e2");
        t.n(o).a;
    },
    afaf: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("759a"), a = t("ff58");
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        t("9dda");
        var r = t("f0c5"), i = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = i.exports;
    },
    b6e2: function(e, n, t) {},
    f176: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = {
                components: {
                    Authorization: function() {
                        t.e("components/Authorization").then(function() {
                            return resolve(t("5326"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    ImageLoader: function() {
                        t.e("components/ImageLoader").then(function() {
                            return resolve(t("24e0"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                filters: {
                    cropImg: function(e) {
                        if (!e) return "";
                        var n = e.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(e + n, "imageView2/1/w/282");
                    }
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                methods: {
                    emptyHandle: function() {},
                    goDetail: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/collegeDetail?id=".concat(this.item.id)
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    },
    ff58: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("f176"), a = t.n(o);
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/CollegeArticle-create-component", {
    "subPackages/me/pages/components/CollegeArticle-create-component": function(e, n, t) {
        t("543d").createComponent(t("afaf"));
    }
}, [ [ "subPackages/me/pages/components/CollegeArticle-create-component" ] ] ]);