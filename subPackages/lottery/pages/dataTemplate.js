require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/dataTemplate" ], {
    "25be": function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "429b0": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("25be"), i = n("5bf70");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("843e");
        var u = n("f0c5"), s = Object(u.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    "5bf70": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("96da"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    6479: function(t, e, n) {},
    6768: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("429b0")).default);
        }).call(this, n("543d").createPage);
    },
    "843e": function(t, e, n) {
        "use strict";
        var o = n("6479");
        n.n(o).a;
    },
    "96da": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = u(n("a34a")), i = n("b628"), r = u(n("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, o, i, r, u) {
                try {
                    var s = t[r](u), a = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(a) : Promise.resolve(a).then(o, i);
            }
            var a = {
                data: function() {
                    return {
                        data_list: [],
                        tempFilePath: "",
                        writePhotoAuth: !1,
                        showPermissionsSetting: !1
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("你要的购房资料模版这里都有");
                },
                onLoad: function() {
                    var t = this;
                    r.default.downloadTemplate().then(function(e) {
                        t.data_list = e.data;
                    });
                },
                methods: {
                    openSetting: function(t) {
                        this.showPermissionsSetting = !1, t.detail.authSetting["scope.writePhotosAlbum"] && (this.writePhotoAuth = !0);
                    },
                    closePermissionsHandle: function() {
                        this.showPermissionsSetting = !1, this.drawCanvas = !1;
                    },
                    previewImg: function(e) {
                        t.previewImage({
                            urls: [ e.image ]
                        });
                    },
                    downLoadFileImg: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(o, i) {
                                    var r = t.apply(e, n);
                                    function u(t) {
                                        s(r, o, i, u, a, "next", t);
                                    }
                                    function a(t) {
                                        s(r, o, i, u, a, "throw", t);
                                    }
                                    u(void 0);
                                });
                            };
                        }(o.default.mark(function e(n) {
                            var r, u;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return r = n.url, u = this, e.next = 4, this.checkWriteAlbumAuth();

                                  case 4:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? t.downloadFile({
                                        url: r,
                                        success: function(e) {
                                            var n = e.tempFilePath;
                                            t.saveImageToPhotosAlbum({
                                                filePath: n,
                                                success: function() {
                                                    "authorize:ok" === e.errMsg && i.tip.toast("保存成功");
                                                }
                                            });
                                        }
                                    }).onProgressUpdate(function(e) {
                                        t.showLoading({
                                            title: "".concat(e.progress, "%")
                                        }), 100 === Math.floor(e.progress) && (t.hideLoading(), i.tip.toast("保存成功"));
                                    }) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function(t) {
                                            "authorize:ok" === t.errMsg && i.tip.toast("保存成功");
                                        },
                                        fail: function(t) {
                                            "authorize:fail auth deny" !== t.errMsg && (u.showPermissionsSetting = !0);
                                        }
                                    });

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    checkWriteAlbumAuth: function() {
                        return new Promise(function(e) {
                            t.getSetting({
                                success: function(t) {
                                    e(t.authSetting["scope.writePhotosAlbum"] || !1);
                                },
                                fail: function() {
                                    e(!1);
                                }
                            });
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    }
}, [ [ "6768", "common/runtime", "common/vendor" ] ] ]);