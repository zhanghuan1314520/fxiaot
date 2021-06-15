(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/components/Entries" ], {
    "3e90": function(t, e, n) {},
    4604: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4c22"), i = n("5c71");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("e7895");
        var c = n("f0c5"), a = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    },
    "4c22": function(t, e, n) {
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
    "5c71": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c9e6"), i = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    c9e6: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("a34a")), i = a(n("4ec3")), s = a(n("f4fd")), c = n("b628");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, o, i, s, c) {
                try {
                    var a = t[s](c), u = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(u) : Promise.resolve(u).then(o, i);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, i) {
                        var s = t.apply(e, n);
                        function c(t) {
                            u(s, o, i, c, a, "next", t);
                        }
                        function a(t) {
                            u(s, o, i, c, a, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var l = {
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    salesId: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        serviceQrCode: "",
                        writePhotoAuth: !1,
                        isCheck: !1
                    };
                },
                mounted: function() {
                    var t = r(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, s.default.getGlobalConfig();

                              case 2:
                                return e = t.sent, this.serviceQrCode = e.serviceQrCode, t.next = 6, this.checkWriteAlbumAuth();

                              case 6:
                                this.writePhotoAuth = t.sent;

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    emptyFunction: function() {},
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
                    },
                    likeSalesMan: function() {
                        var e = r(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, i.default.salesManLike(this.salesId);

                                  case 3:
                                    n = e.sent, t.hideLoading(), n && n.data && this.$emit("likeSuccess", n.data.count);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    saveQrCode: function() {
                        t.showLoading();
                        var e = this.item.wechat_qrcode.split("."), n = e.length ? e[e.length - 1] : "";
                        t.downloadFile({
                            url: this.item.wechat_qrcode,
                            filePath: "".concat(wx.env.USER_DATA_PATH, "/img.").concat(n),
                            success: function(e) {
                                t.saveImageToPhotosAlbum({
                                    filePath: e.filePath || e.tempFilePath,
                                    success: function() {
                                        t.hideLoading(), c.tip.toast("保存成功");
                                    },
                                    fail: function() {
                                        t.hideLoading(), c.tip.toast("保存失败", "", "none");
                                    }
                                });
                            },
                            fail: function() {
                                c.tip.toast("下载失败", "", "none");
                            }
                        });
                    },
                    sureBtn: function() {
                        var e = this;
                        this.writePhotoAuth || t.authorize({
                            scope: "scope.writePhotosAlbum",
                            success: function(t) {
                                "authorize:ok" === t.errMsg && (e.writePhotoAuth = !0);
                            },
                            fail: function() {
                                e.isCheck = !0;
                            }
                        });
                    },
                    cancelModel: function() {
                        this.showModel = !1;
                    },
                    closeBtn: function() {
                        this.isCheck = !1;
                    },
                    openSetting: function(t) {
                        t.detail.authSetting["scope.writePhotosAlbum"] && (this.writePhotoAuth = !0), this.isCheck = !1;
                    },
                    saveCode: function() {
                        var e = this;
                        t.downloadFile({
                            url: this.serviceQrCode,
                            success: function(n) {
                                t.saveImageToPhotosAlbum({
                                    filePath: n.tempFilePath,
                                    success: function() {
                                        e.showModel = !1, c.tip.toast("保存成功");
                                    },
                                    fail: function() {
                                        e.showModel = !1, c.tip.toast("保存失败");
                                    }
                                });
                            },
                            fail: function() {
                                e.showModel = !1;
                            }
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    e7895: function(t, e, n) {
        "use strict";
        var o = n("3e90");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/salesMan/components/Entries-create-component", {
    "pages/salesMan/components/Entries-create-component": function(t, e, n) {
        n("543d").createComponent(n("4604"));
    }
}, [ [ "pages/salesMan/components/Entries-create-component" ] ] ]);