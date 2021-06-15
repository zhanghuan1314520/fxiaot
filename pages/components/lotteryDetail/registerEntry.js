(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/registerEntry" ], {
    "5a86": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e4da"), a = n("b381");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("d63b");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    "651c": function(t, e, n) {},
    b381: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("bb6a"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    bb6a: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), i = n("b628"), o = n("ca00");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, a = !1, i = void 0;
                        try {
                            for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            a = !0, i = t;
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function l(t, e, n, r, a, i, o) {
                try {
                    var s = t[i](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function h(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            l(i, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            l(i, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                components: {
                    photoPermissionsSettings: function() {
                        n.e("components/photoPermissionsSettings").then(function() {
                            return resolve(n("372d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    projectName: {
                        type: String,
                        default: ""
                    },
                    iShowRegisterBgCom: {
                        type: Boolean,
                        default: !1
                    },
                    registerBgSrc: {
                        type: String,
                        default: ""
                    },
                    projectId: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        showPermissionsSetting: !1,
                        writePhotoAuth: !0,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        posterDataRes: {}
                    };
                },
                computed: {
                    dialogBg: function() {
                        return "https://imgcdn.huanjutang.com/assets/img/20201016145788081.png";
                    }
                },
                watch: {
                    iShowRegisterBgCom: function(t) {
                        var e = this;
                        t && (this.articleDetail().then(function(t) {
                            var n = t.data;
                            e.posterDataRes = n;
                        }), this.downloadImage());
                    }
                },
                methods: {
                    articleDetail: function() {
                        return a.default.lottery.housePriceCanvas({
                            action: "projectRegistry",
                            params: {
                                project_id: this.projectId
                            }
                        });
                    },
                    shareHandle: function() {
                        this.$emit("update:iShowRegisterBgCom", !1);
                    },
                    hideRegisterEntry: function() {
                        this.$emit("update:iShowRegisterBgCom", !1);
                    },
                    downloadImage: function() {
                        var e = h(r.default.mark(function e() {
                            var n, a = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, (0, o.checkWriteAlbumAuth)();

                                  case 3:
                                    return this.writePhotoAuth = e.sent, e.abrupt("return", new Promise(function() {
                                        a.writePhotoAuth ? n.drawImage().catch(function() {
                                            t.hideLoading();
                                        }) : t.authorize({
                                            scope: "scope.writePhotosAlbum",
                                            success: function() {
                                                n.drawImage().catch(function() {
                                                    t.hideLoading();
                                                });
                                            },
                                            fail: function(t) {
                                                "authorize:fail auth deny" !== t.errMsg ? n.showPermissionsSetting = !0 : n.$emit("update:iShowRegisterBgCom", !1);
                                            }
                                        });
                                    }));

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
                        t.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: this.canvasWidth,
                            height: this.canvasHeight,
                            canvasId: "registerCanvas",
                            success: function(e) {
                                var n = e.tempFilePath;
                                t.saveImageToPhotosAlbum({
                                    filePath: n,
                                    success: function(t) {
                                        t && i.tip.success("保存成功");
                                    },
                                    fail: function() {
                                        i.tip.toast("保存失败", "", "none");
                                    }
                                });
                            },
                            fail: function() {
                                i.tip.toast("保存失败", "", "none");
                            }
                        }, this);
                    },
                    drawImage: function() {
                        var e = h(r.default.mark(function e() {
                            var n, a, o, s, u, l, h, f, d, p = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.showLoading({
                                        title: "生成中..."
                                    }), n = t.createCanvasContext("registerCanvas", this), a = this.posterDataRes, o = a.image, 
                                    s = a.imgProps, u = a.qrCodeProps, this.canvasWidth = s.w, this.canvasHeight = s.h, 
                                    !o || !this.registerBgSrc) {
                                        e.next = 27;
                                        break;
                                    }
                                    return e.prev = 6, e.next = 9, Promise.all([ i.canvasUtil.loadImage(o), i.canvasUtil.loadImage(this.registerBgSrc) ]);

                                  case 9:
                                    l = e.sent, h = c(l, 2), f = h[0], d = h[1], n.drawImage(f, 0, 0, s.w, s.h), n.drawImage(d, u.x, u.y, u.size, u.size), 
                                    n.draw(), t.hideLoading(), setTimeout(function() {
                                        p.savePhoto.call(p);
                                    }, 200), e.next = 25;
                                    break;

                                  case 20:
                                    e.prev = 20, e.t0 = e.catch(6), i.tip.toast("专属邀请码生成失败", "", "none"), this.iShowRegisterBg = !1, 
                                    t.hideLoading();

                                  case 25:
                                    e.next = 29;
                                    break;

                                  case 27:
                                    t.hideLoading(), this.$emit("update:iShowRegisterBgCom", !1);

                                  case 29:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 6, 20 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    d63b: function(t, e, n) {
        "use strict";
        var r = n("651c");
        n.n(r).a;
    },
    e4da: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/registerEntry-create-component", {
    "pages/components/lotteryDetail/registerEntry-create-component": function(t, e, n) {
        n("543d").createComponent(n("5a86"));
    }
}, [ [ "pages/components/lotteryDetail/registerEntry-create-component" ] ] ]);