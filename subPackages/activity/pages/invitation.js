require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/invitation" ], {
    "3c31": function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {});
    },
    4669: function(t, n, e) {},
    4927: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("cd73"), i = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = i.a;
    },
    b0667: function(t, n, e) {
        "use strict";
        var o = e("4669");
        e.n(o).a;
    },
    cd73: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = e("b628"), i = o.share, a = o.tip, s = {
                data: function() {
                    return {
                        img: "https://imgcdn.huanjutang.com/assets/img/20191023108368081.jpg",
                        imgs: [ "https://imgcdn.huanjutang.com/assets/img/20191023102158081.jpg", "https://imgcdn.huanjutang.com/assets/img/20191023103178081.jpg", "https://imgcdn.huanjutang.com/assets/img/20191023103338081.jpg", "https://imgcdn.huanjutang.com/assets/img/20191023103508081.jpg" ]
                    };
                },
                onShareAppMessage: function() {
                    return i.share("我已经入驻了南京房小团，特邀请你入驻");
                },
                onLoad: function() {},
                methods: {
                    saveImg: function() {
                        var n = this;
                        t.authorize({
                            scope: "scope.writePhotosAlbum",
                            success: function(e) {
                                if ("authorize:ok" === e.errMsg) {
                                    var o = n.img;
                                    t.showLoading({
                                        title: "保存中..."
                                    }), t.downloadFile({
                                        url: o,
                                        success: function(n) {
                                            t.hideLoading(), t.saveImageToPhotosAlbum({
                                                filePath: n.tempFilePath,
                                                success: function() {
                                                    t.showToast({
                                                        title: "保存成功",
                                                        icon: "success",
                                                        duration: 2e3
                                                    });
                                                },
                                                fail: function() {
                                                    a.toast("保存失败", "", "none");
                                                }
                                            });
                                        },
                                        fail: function() {
                                            t.hideLoading(), a.toast("下载图片失败", "", "none");
                                        }
                                    });
                                } else a.toast("获取授权信息失败", "", "none", 3e3);
                            },
                            fail: function() {
                                a.toast("请前往[设置]授权", "", "none", 3e3);
                            }
                        });
                    }
                }
            };
            n.default = s;
        }).call(this, e("543d").default);
    },
    f6d4: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3c31"), i = e("4927");
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        e("b0667");
        var s = e("f0c5"), u = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = u.exports;
    },
    ff08: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("f6d4")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "ff08", "common/runtime", "common/vendor" ] ] ]);