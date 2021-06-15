(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/attentionServiceNumber" ], {
    "066d": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("1e68"), i = n("7cd6");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("659c");
        var s = n("f0c5"), c = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "1e68": function(t, e, n) {
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
    "659c": function(t, e, n) {
        "use strict";
        var o = n("fb28");
        n.n(o).a;
    },
    "7cd6": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("ecfd"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    ecfd: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("a34a")), i = r(n("4ec3"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, o, i, r, s) {
                try {
                    var c = t[r](s), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, i);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, i) {
                        var r = t.apply(e, n);
                        function c(t) {
                            s(r, o, i, c, u, "next", t);
                        }
                        function u(t) {
                            s(r, o, i, c, u, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var u = {
                props: {
                    show: {
                        type: Boolean,
                        default: !1
                    },
                    isResulted: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        writePhotoAuth: null,
                        showPermissionsSetting: !1,
                        iShowAttentionOrQrCode: !0,
                        secondShow: !1,
                        fContentBg: "",
                        qrcode: ""
                    };
                },
                created: function() {
                    var t = this;
                    i.default.lotteryDetail.getFollowText(1).then(function(e) {
                        e && e.data && (t.fContentBg = e.data.background, t.qrcode = e.data.bgUrl);
                    });
                },
                methods: {
                    hideModelBg: function(t) {
                        0 === Math.floor(t) && this.$emit("update:show", !1), 1 === Math.floor(t) && (this.secondShow = !1);
                    },
                    attentionserviceEvent: function() {
                        this.savePhotoHandler.call(this);
                    },
                    closePemissions: function() {
                        this.showPermissionsSetting = !1;
                    },
                    openSetting: function(t) {
                        this.showPermissionsSetting = !1, t.detail.authSetting["scope.writePhotosAlbum"] && (this.openAttentionServiceNumModel.call(this), 
                        this.savePhoto.call(this));
                    },
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
                    savePhotoHandler: function() {
                        var e = c(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, this.checkWriteAlbumAuth.call(this);

                                  case 3:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? (n.iShowAttentionOrQrCode = !1, 
                                    n.secondShow = !0, this.$emit("update:show", !1), this.savePhoto.call(n)) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            var t = c(o.default.mark(function t() {
                                                return o.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        n.openAttentionServiceNumModel.call(n), n.savePhoto.call(n);

                                                      case 2:
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
                                            "authorize:fail auth deny" !== t.errMsg && (n.showPermissionsSetting = !0, n.$emit("update:show", !1));
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
                    openAttentionServiceNumModel: function() {
                        this.writePhotoAuth = !0, this.iShowAttentionOrQrCode = !1, this.secondShow = !0, 
                        this.$emit("update:show", !1);
                    },
                    savePhoto: function() {
                        t.downloadFile({
                            url: this.qrcode,
                            success: function(e) {
                                t.saveImageToPhotosAlbum({
                                    filePath: e.tempFilePath,
                                    success: function() {},
                                    fail: function() {}
                                });
                            }
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    fb28: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/attentionServiceNumber-create-component", {
    "pages/components/lotteryDetail/attentionServiceNumber-create-component": function(t, e, n) {
        n("543d").createComponent(n("066d"));
    }
}, [ [ "pages/components/lotteryDetail/attentionServiceNumber-create-component" ] ] ]);