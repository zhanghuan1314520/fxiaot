(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/PersonalInfo" ], {
    6641: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = {
                mixins: [ function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }(e("4919")).default ],
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
                    user_id: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    sales_man_id: {
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
                            3: "https://imgcdn.huanjutang.com/assets/img/2020720114111318.png",
                            2: "https://imgcdn.huanjutang.com/assets/img/2020720114114059.png",
                            1: "https://imgcdn.huanjutang.com/assets/img/2020720114117887.png"
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
                    handleGoUserPage: function(n) {
                        Number(this.user_id) && Number(this.sales_man_id) ? t.navigateTo({
                            url: this.jumpUrl + this.user_id
                        }) : n && this.previewImg(this.defaultAvatar);
                    },
                    previewImg: function(n) {
                        "string" == typeof n && "" !== n && t.previewImage({
                            urls: [ n ]
                        });
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    },
    "824f": function(t, n, e) {},
    a284: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("6641"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = u.a;
    },
    cea1: function(t, n, e) {
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
    d24b: function(t, n, e) {
        "use strict";
        var a = e("824f");
        e.n(a).a;
    },
    dd32: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("cea1"), u = e("a284");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        e("d24b");
        var i = e("f0c5"), o = Object(i.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = o.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/PersonalInfo-create-component", {
    "pages/components/lotteryDetail/PersonalInfo-create-component": function(t, n, e) {
        e("543d").createComponent(e("dd32"));
    }
}, [ [ "pages/components/lotteryDetail/PersonalInfo-create-component" ] ] ]);