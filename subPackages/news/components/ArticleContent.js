require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/ArticleContent" ], {
    "2dd7": function(t, n, e) {
        "use strict";
        var o = e("7f88");
        e.n(o).a;
    },
    "3f5b": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("99d4"), c = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = c.a;
    },
    "4a438": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("79bd"), c = e("3f5b");
        for (var u in c) "default" !== u && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(u);
        e("2dd7");
        var r = e("f0c5"), a = Object(r.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = a.exports;
    },
    "79bd": function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {});
    },
    "7f88": function(t, n, e) {},
    "99d4": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("4ec3")), c = {
                components: {
                    OverflowContent: function() {
                        e.e("subPackages/news/components/OverflowContent").then(function() {
                            return resolve(e("68e8"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {
                    postId: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    content: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    image: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    target_url: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    time: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    info: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                computed: {
                    imageUrl: function() {
                        var t = this.image.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(this.image).concat(t).concat("imageView2/2/w/276/format/jpg/interlace/1/q/100|imageslim");
                    }
                },
                methods: {
                    handleDetail: function() {
                        o.default.discovery.getPostDetail({
                            id: this.postId
                        }), t.navigateTo({
                            url: this.target_url
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/ArticleContent-create-component", {
    "subPackages/news/components/ArticleContent-create-component": function(t, n, e) {
        e("543d").createComponent(e("4a438"));
    }
}, [ [ "subPackages/news/components/ArticleContent-create-component" ] ] ]);