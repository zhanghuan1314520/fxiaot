require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/CreatePoster" ], {
    "3fe3": function(t, e, n) {},
    "411f": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("96a9"), s = n("81c5");
        for (var o in s) "default" !== o && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(o);
        n("d096");
        var a = n("f0c5"), c = Object(a.a)(s.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    },
    "81c5": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("8d58"), s = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = s.a;
    },
    "8d58": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), s = n("ca00"), o = n("b628");
            function a(t, e, n, i, s, o, a) {
                try {
                    var c = t[o](a), r = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(r) : Promise.resolve(r).then(i, s);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, s) {
                        var o = t.apply(e, n);
                        function c(t) {
                            a(o, i, s, c, r, "next", t);
                        }
                        function r(t) {
                            a(o, i, s, c, r, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var r = {
                components: {
                    photoPermissionsSettings: function() {
                        n.e("components/photoPermissionsSettings").then(function() {
                            return resolve(n("372d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    width: {
                        type: Number,
                        default: 0
                    },
                    height: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        imageIndex: 0,
                        images: [],
                        canvasWidth: 0,
                        canvasHeight: 0,
                        renderQueue: [],
                        showPermissionsSetting: !1,
                        writePhotoAuth: !1,
                        isShowScrollModel: !1,
                        hasTipScroll: !0,
                        hasTopView: !1,
                        saveImageLock: !1,
                        saving: !1,
                        visible: !1,
                        showContent: !1,
                        saveSuccess: !1
                    };
                },
                created: function() {},
                mounted: function() {
                    var t = c(i.default.mark(function t() {
                        var e = this;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.$on("hastopContent", function(t) {
                                    e.hasTopView = t;
                                }), t.next = 3, s.checkWriteAlbumAuth.call(this);

                              case 3:
                                this.writePhotoAuth = t.sent;

                              case 4:
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
                    hideHandler: function() {
                        this.showContent = !1, this.saveSuccess = !1;
                    },
                    scrollHandle: function() {
                        this.hasTipScroll = !1;
                    },
                    change: function(t) {
                        this.imageIndex = t.target.current;
                    },
                    show: function() {
                        this.showContent = !0;
                    },
                    render: function(e, n) {
                        var i = this, s = t.getSystemInfoSync().windowWidth / 1125;
                        this.canvasWidth = this.width * s, this.canvasHeight = this.height * s;
                        var o = this.images.push({
                            image: "",
                            preview: n
                        }) - 1;
                        return this.visible = !0, new Promise(function(n, s) {
                            var a = t.createCanvasContext("_canvas-poster", i);
                            e(a).then(function(e) {
                                e.draw(!0, function() {
                                    t.canvasToTempFilePath({
                                        x: 0,
                                        y: 0,
                                        width: i.width,
                                        height: i.height,
                                        canvasId: "_canvas-poster",
                                        success: function(t) {
                                            i.images[o].image = t.tempFilePath, n();
                                        }
                                    }, i);
                                });
                            }).catch(s);
                        });
                    },
                    reset: function() {
                        this.images = [], this.imageIndex = 0;
                    },
                    saveImage: function() {
                        var e = c(i.default.mark(function e() {
                            var n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, s.checkWriteAlbumAuth.call(this);

                                  case 3:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? this.savePhoto.call(n) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            var t = c(i.default.mark(function t() {
                                                return i.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        n.savePhoto.call(n);

                                                      case 1:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                            }));
                                            return function() {
                                                return t.apply(this, arguments);
                                            };
                                        }(),
                                        fail: function(t) {
                                            "authorize:fail auth deny" !== t.errMsg && (n.showPermissionsSetting = !0);
                                        }
                                    });

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    savePhoto: function() {
                        if (!this.saveImageLock) {
                            var e = this, n = this.images[this.imageIndex].image;
                            this.saving ? o.tip.toast("图片保存中，请等待", "", "none") : (this.saveImageLock = !0, n && t.saveImageToPhotosAlbum({
                                filePath: n,
                                success: function() {
                                    e.saveSuccess = !0, o.tip.success("保存成功");
                                },
                                fail: function() {
                                    o.tip.toast("保存失败", "", "none");
                                },
                                complete: function() {
                                    setTimeout(function() {
                                        e.saveImageLock = !1;
                                    }, 500);
                                }
                            }));
                        }
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d").default);
    },
    "96a9": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    },
    d096: function(t, e, n) {
        "use strict";
        var i = n("3fe3");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/CreatePoster-create-component", {
    "subPackages/activity/components/CreatePoster-create-component": function(t, e, n) {
        n("543d").createComponent(n("411f"));
    }
}, [ [ "subPackages/activity/components/CreatePoster-create-component" ] ] ]);