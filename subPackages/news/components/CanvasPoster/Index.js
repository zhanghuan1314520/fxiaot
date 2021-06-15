require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/CanvasPoster/Index" ], {
    1200: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("c319"), i = n("c981");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("a781");
        var o = n("f0c5"), r = Object(o.a)(i.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = r.exports;
    },
    "93fa": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), i = n("b628"), a = n("ca00");
            function o(t, e, n, s, i, a, o) {
                try {
                    var r = t[a](o), c = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(c) : Promise.resolve(c).then(s, i);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(s, i) {
                        var a = t.apply(e, n);
                        function r(t) {
                            o(a, s, i, r, c, "next", t);
                        }
                        function c(t) {
                            o(a, s, i, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var c = {
                components: {
                    PhotoPermissionsSettings: function() {
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
                    },
                    className: {
                        type: String,
                        default: ""
                    },
                    offsetHeight: {
                        type: Number,
                        default: 256
                    }
                },
                data: function() {
                    return {
                        containerHegiht: t.getSystemInfoSync().windowHeight - (0, a.transformRpx)(this.offsetHeight),
                        images: [],
                        imageIndex: 0,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        showPermissionsSetting: !1,
                        writePhotoAuth: !1,
                        hasTipScroll: !1,
                        previewHeight: 0,
                        saveImageLock: !1
                    };
                },
                computed: {
                    previewList: function() {
                        return this.images.map(function(t) {
                            return t.preview;
                        });
                    },
                    hasShowMore: function() {
                        var e = t.getSystemInfoSync().windowHeight - 103;
                        return this.canvasHeight > e;
                    }
                },
                created: function() {
                    var t = r(s.default.mark(function t() {
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, a.checkWriteAlbumAuth)();

                              case 2:
                                this.writePhotoAuth = t.sent;

                              case 3:
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
                    render: function(e) {
                        var n = this, s = t.getSystemInfoSync().windowWidth / 1125;
                        this.canvasWidth = this.width * s, this.canvasHeight = this.height * s;
                        var i = this.images.push({
                            image: ""
                        }) - 1;
                        return new Promise(function(s, a) {
                            var o = t.createCanvasContext("_canvas-poster", n);
                            e(o).then(function(e) {
                                e.draw(!0, function() {
                                    t.canvasToTempFilePath({
                                        x: 0,
                                        y: 0,
                                        width: n.width,
                                        height: n.height,
                                        canvasId: "_canvas-poster",
                                        success: function(t) {
                                            n.images[i].image = t.tempFilePath, s();
                                        }
                                    }, n);
                                });
                            }).catch(a);
                        });
                    },
                    reset: function() {
                        this.images = [], this.imageIndex = 0;
                    },
                    saveBusinessCard: function() {
                        var e = r(s.default.mark(function e() {
                            var n;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, (0, a.checkWriteAlbumAuth)();

                                  case 3:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? this.savePhoto() : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            n.savePhoto();
                                        },
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
                        if (!this.saveImageLock && 0 !== this.images.length) {
                            var e = this, n = this.images[this.imageIndex] && this.images[this.imageIndex].image;
                            this.saveImageLock = !0, n && t.saveImageToPhotosAlbum({
                                filePath: n,
                                success: function() {
                                    i.tip.success("保存成功");
                                },
                                fail: function() {
                                    i.tip.toast("保存失败", "", "none");
                                },
                                complete: function() {
                                    e.saveImageLock = !1;
                                }
                            });
                        }
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    a781: function(t, e, n) {
        "use strict";
        var s = n("bf12");
        n.n(s).a;
    },
    bf12: function(t, e, n) {},
    c319: function(t, e, n) {
        "use strict";
        var s = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    c981: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("93fa"), i = n.n(s);
        for (var a in s) "default" !== a && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/CanvasPoster/Index-create-component", {
    "subPackages/news/components/CanvasPoster/Index-create-component": function(t, e, n) {
        n("543d").createComponent(n("1200"));
    }
}, [ [ "subPackages/news/components/CanvasPoster/Index-create-component" ] ] ]);