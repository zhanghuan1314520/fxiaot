(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/components/shareTemplate" ], {
    7692: function(a, e, t) {
        "use strict";
        var n = function() {
            var a = this, e = (a.$createElement, a._self._c, (a.videoData || a.imgData.length > 0) && a.videoData ? {
                width: "400rpx",
                height: "260rpx",
                "border-radius": "4rpx"
            } : null), t = (a.videoData || a.imgData.length > 0) && 1 === a.imgData.length ? {
                width: "686rpx",
                height: "240rpx",
                "border-radius": "12rpx"
            } : null, n = (a.videoData || a.imgData.length > 0) && 2 === a.imgData.length ? {
                width: "336rpx",
                height: "240rpx",
                "border-radius": "12rpx"
            } : null, r = (a.videoData || a.imgData.length > 0) && 2 === a.imgData.length ? {
                width: "336rpx",
                height: "240rpx",
                "border-radius": "12rpx"
            } : null, o = (a.videoData || a.imgData.length > 0) && a.imgData.length >= 3 ? {
                width: "446rpx",
                height: "446rpx",
                "border-radius": "12rpx",
                "flex-shrink": 0
            } : null, i = (a.videoData || a.imgData.length > 0) && a.imgData.length >= 3 ? {
                width: "224rpx",
                height: "216rpx",
                "border-radius": "12rpx"
            } : null, l = (a.videoData || a.imgData.length > 0) && a.imgData.length >= 3 ? {
                width: "224rpx",
                height: "216rpx",
                "border-radius": "12rpx",
                "margin-top": "16rpx"
            } : null;
            a.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    a1: t,
                    a2: n,
                    a3: r,
                    a4: o,
                    a5: i,
                    a6: l
                }
            });
        }, r = [];
        t.d(e, "b", function() {
            return n;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {});
    },
    a2bb: function(a, e, t) {},
    b724: function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("7692"), r = t("b80c");
        for (var o in r) "default" !== o && function(a) {
            t.d(e, a, function() {
                return r[a];
            });
        }(o);
        t("ebc2");
        var i = t("f0c5"), l = Object(i.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = l.exports;
    },
    b80c: function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("d3f0"), r = t.n(n);
        for (var o in n) "default" !== o && function(a) {
            t.d(e, a, function() {
                return n[a];
            });
        }(o);
        e.default = r.a;
    },
    d3f0: function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                components: {
                    ImageLoader: function() {
                        t.e("components/ImageLoader").then(function() {
                            return resolve(t("24e0"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {
                    imgData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    videoData: {
                        type: String,
                        default: ""
                    },
                    dataIndex: {
                        type: Number,
                        default: 0
                    },
                    lazyload: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    playVideoHandle: function(e) {
                        a.navigateTo({
                            url: "/subPackages/tools/pages/playVideoPage?url=".concat(e)
                        });
                    },
                    viewPic: function(e, t) {
                        a.previewImage({
                            current: e,
                            urls: t
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, t("543d").default);
    },
    ebc2: function(a, e, t) {
        "use strict";
        var n = t("a2bb");
        t.n(n).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/salesMan/components/shareTemplate-create-component", {
    "pages/salesMan/components/shareTemplate-create-component": function(a, e, t) {
        t("543d").createComponent(t("b724"));
    }
}, [ [ "pages/salesMan/components/shareTemplate-create-component" ] ] ]);