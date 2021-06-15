require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/PersonalInfo" ], {
    "04f51": function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    },
    "2f42": function(t, n, e) {
        "use strict";
        var a = e("d5fe");
        e.n(a).a;
    },
    "4a43": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("04f51"), u = e("be63");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        e("2f42");
        var o = e("f0c5"), c = Object(o.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "4f7c": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                props: {
                    avatar: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    tagImage: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    name: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    level: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    userId: {
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
                    contentType: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    articleUrl: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        levelMap: {
                            gold: "https://imgcdn.huanjutang.com/assets/img/2020720114111318.png",
                            silver: "https://imgcdn.huanjutang.com/assets/img/2020720114114059.png",
                            bronze: "https://imgcdn.huanjutang.com/assets/img/2020720114117887.png"
                        },
                        defaultIcon: "https://imgcdn.huanjutang.com/assets/img/2020712180428081.png"
                    };
                },
                computed: {
                    marginBottom: function() {
                        return "" !== this.level ? 0 : "20rpx";
                    },
                    formatName: function() {
                        return this.name.length > 12 ? "".concat(this.name.substring(0, 12), "...") : this.name;
                    },
                    defaultAvatar: function() {
                        return this.avatar || this.defaultIcon;
                    }
                },
                methods: {
                    haddleClick: function() {
                        var n = "import" === this.contentType ? this.articleUrl : "/subPackages/discovery/pages/userPage?userId=".concat(this.userId);
                        t.navigateTo({
                            url: n
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d").default);
    },
    be63: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("4f7c"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = u.a;
    },
    d5fe: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/PersonalInfo-create-component", {
    "subPackages/news/components/PersonalInfo-create-component": function(t, n, e) {
        e("543d").createComponent(e("4a43"));
    }
}, [ [ "subPackages/news/components/PersonalInfo-create-component" ] ] ]);