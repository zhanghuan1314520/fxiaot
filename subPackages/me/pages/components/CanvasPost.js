require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/CanvasPost" ], {
    2639: function(t, e, n) {
        "use strict";
        var a = n("8c9b");
        n.n(a).a;
    },
    3202: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("fa35"), s = n("56b1");
        for (var o in s) "default" !== o && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(o);
        n("2639");
        var c = n("f0c5"), r = Object(c.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "4c40": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), s = n("ca00"), o = n("b628");
            function c(t, e, n, a, s, o, c) {
                try {
                    var r = t[o](c), u = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(u) : Promise.resolve(u).then(a, s);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, s) {
                        var o = t.apply(e, n);
                        function r(t) {
                            c(o, a, s, r, u, "next", t);
                        }
                        function u(t) {
                            c(o, a, s, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var u = {
                components: {
                    photoPermissionsSettings: function() {
                        n.e("components/photoPermissionsSettings").then(function() {
                            return resolve(n("372d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    cWidth: {
                        type: Number,
                        default: 0
                    },
                    cHeight: {
                        type: Number,
                        default: 0
                    },
                    maxHeight: {
                        type: String,
                        default: "auto"
                    }
                },
                data: function() {
                    return {
                        canvasIndex: 0,
                        images: [],
                        canvasWidth: 0,
                        canvasHeight: 0,
                        renderQueue: [],
                        showPermissionsSetting: !1,
                        writePhotoAuth: !1
                    };
                },
                mounted: function() {
                    var e = r(a.default.mark(function e() {
                        var n = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.$on("renderQueue", function(e) {
                                    n.renderQueue = new Array(e.length), n.images = [];
                                    var a = t.getSystemInfoSync().windowWidth / 750;
                                    n.canvasWidth = n.cWidth * a, n.canvasHeight = n.cHeight * a, e.forEach(function(e, s) {
                                        var o = "_canvas-post-".concat(s);
                                        e(t.createCanvasContext(o, n), a).then(function(e) {
                                            Promise.resolve().then(function() {
                                                e.draw(!0, function() {
                                                    t.canvasToTempFilePath({
                                                        x: 0,
                                                        y: 0,
                                                        width: n.canvasWidth,
                                                        height: n.canvasHeight,
                                                        canvasId: o,
                                                        success: function(t) {
                                                            n.images.push(t.tempFilePath);
                                                        }
                                                    }, n);
                                                });
                                            });
                                        });
                                    });
                                }), e.next = 3, s.checkWriteAlbumAuth.call(this);

                              case 3:
                                this.writePhotoAuth = e.sent;

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    change: function(t) {
                        this.canvasIndex = t.target.current;
                    },
                    saveBusinessCard: function() {
                        var e = r(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, s.checkWriteAlbumAuth.call(this);

                                  case 3:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? this.savePhoto.call(n) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            var t = r(a.default.mark(function t() {
                                                return a.default.wrap(function(t) {
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
                        var e = this.images[this.canvasIndex];
                        e && t.saveImageToPhotosAlbum({
                            filePath: e,
                            success: function() {
                                o.tip.success("保存成功");
                            },
                            fail: function() {
                                o.tip.toast("保存失败", "", "none");
                            }
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    "56b1": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4c40"), s = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = s.a;
    },
    "8c9b": function(t, e, n) {},
    fa35: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/CanvasPost-create-component", {
    "subPackages/me/pages/components/CanvasPost-create-component": function(t, e, n) {
        n("543d").createComponent(n("3202"));
    }
}, [ [ "subPackages/me/pages/components/CanvasPost-create-component" ] ] ]);