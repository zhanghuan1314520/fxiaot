(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/salesManCode" ], {
    "05ac": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("8fed"), r = e("8f8a");
        for (var i in r) "default" !== i && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(i);
        e("872d");
        var o = e("f0c5"), s = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = s.exports;
    },
    "4b97": function(t, n, e) {},
    "872d": function(t, n, e) {
        "use strict";
        var a = e("4b97");
        e.n(a).a;
    },
    "8f8a": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("a5fc"), r = e.n(a);
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        n.default = r.a;
    },
    "8fed": function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    a5fc: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = o(e("a34a")), r = o(e("4ec3")), i = e("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, n) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var e = [], a = !0, r = !1, i = void 0;
                        try {
                            for (var o, s = t[Symbol.iterator](); !(a = (o = s.next()).done) && (e.push(o.value), 
                            !n || e.length !== n); a = !0) ;
                        } catch (t) {
                            r = !0, i = t;
                        } finally {
                            try {
                                a || null == s.return || s.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return e;
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return c(t, n);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? c(t, n) : void 0;
                    }
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, a = new Array(n); e < n; e++) a[e] = t[e];
                return a;
            }
            function u(t, n, e, a, r, i, o) {
                try {
                    var s = t[i](o), c = s.value;
                } catch (t) {
                    return void e(t);
                }
                s.done ? n(c) : Promise.resolve(c).then(a, r);
            }
            function l(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(n, e);
                        function o(t) {
                            u(i, a, r, o, s, "next", t);
                        }
                        function s(t) {
                            u(i, a, r, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        qrCode: "",
                        salesManName: "",
                        salesManTag: "",
                        canvasWidth: "",
                        canvasHeight: "",
                        enablePullDownRefresh: !0
                    };
                },
                onLoad: function() {
                    var n = l(a.default.mark(function n(e) {
                        var i, o = this;
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                i = e.id || "", this.salesManName = e.name, this.salesManTag = e.salesManTag, t.showLoading({
                                    title: "加载中..."
                                }), r.default.getQrCode("/pages/salesMan/detail?id=".concat(i)).then(function(n) {
                                    o.qrCode = n.data.qrcode, t.hideLoading();
                                });

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function(t) {
                        return n.apply(this, arguments);
                    };
                }(),
                methods: {
                    buildCodeHandle: function() {
                        var n = l(a.default.mark(function n() {
                            var e = this;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, this.drawImage().catch(function() {
                                        t.hideLoading(), i.tip.toast("生成图片失败", "", "none");
                                    });

                                  case 2:
                                    return n.abrupt("return", new Promise(function() {
                                        t.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: e.canvasWidth,
                                            height: e.canvasHeight,
                                            canvasId: "myCanvas",
                                            success: function(n) {
                                                var e = n.tempFilePath;
                                                t.saveImageToPhotosAlbum({
                                                    filePath: e,
                                                    success: function(t) {
                                                        t && i.tip.toast("保存成功", "", "none");
                                                    },
                                                    fail: function() {
                                                        i.tip.toast("保存失败", "", "none");
                                                    }
                                                });
                                            },
                                            fail: function() {
                                                i.tip.toast("保存失败", "", "none");
                                            }
                                        });
                                    }));

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    preview: function() {
                        this.qrCode && t.previewImage({
                            urls: [ this.qrCode ]
                        });
                    },
                    drawImage: function() {
                        var n = l(a.default.mark(function n() {
                            var e, r, o, c, u, l, f, d, h;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.drawCanvas = !0, e = t.getSystemInfoSync(), r = e.windowWidth, o = r / 690, 
                                    this.canvasWidth = 690 * o * .9, this.canvasHeight = 1334 * o * .7, n.prev = 5, 
                                    n.next = 8, Promise.all([ this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20190410/5cadb22802a0c.png"), this.downloadFile(this.qrCode) ]);

                                  case 8:
                                    c = n.sent, u = s(c, 2), l = u[0], f = u[1], (d = t.createCanvasContext("myCanvas")).drawImage(l, 0, 0, this.canvasWidth, this.canvasHeight), 
                                    h = 80 * o, d.drawImage(f, (this.canvasWidth - 380 * o) / 2, h, 380 * o, 380 * o), 
                                    h += 440 * o, d.setFontSize(34 * o), d.setTextAlign("center"), d.setFillStyle("#2d8cf0"), 
                                    d.fillText("".concat(this.salesManTag, "——").concat(this.salesManName), this.canvasWidth / 2, h), 
                                    h += 64 * o, d.setFontSize(34 * o), d.setTextAlign("center"), d.setFillStyle("#1a1a1a"), 
                                    d.fillText("专属二维码", this.canvasWidth / 2, h), d.draw(), t.hideLoading(), n.next = 34;
                                    break;

                                  case 30:
                                    n.prev = 30, n.t0 = n.catch(5), i.tip.toast("生成图片失败", "", "none"), t.hideLoading();

                                  case 34:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this, [ [ 5, 30 ] ]);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    downloadFile: function(n) {
                        return new Promise(function(e, a) {
                            if (n) {
                                var r = n.replace(/^http:/, "https:");
                                t.downloadFile({
                                    url: r,
                                    success: function(t) {
                                        e(t.tempFilePath);
                                    },
                                    fail: function(t) {
                                        a(t);
                                    }
                                });
                            } else a(new Error("下载对象里面没有路径"));
                        });
                    }
                }
            };
            n.default = f;
        }).call(this, e("543d").default);
    },
    b47a: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("05ac")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "b47a", "common/runtime", "common/vendor" ] ] ]);