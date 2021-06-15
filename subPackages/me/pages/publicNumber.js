require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/publicNumber" ], {
    7245: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ed3f")).default);
        }).call(this, n("543d").createPage);
    },
    "7f23": function(t, e, n) {
        "use strict";
        var o = n("9e3f");
        n.n(o).a;
    },
    "9e3f": function(t, e, n) {},
    b1f0: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    b743: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = c(n("a34a")), r = c(n("11c0")), u = n("b628"), i = n("ca00");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, n, o, r, u, i) {
                try {
                    var c = t[u](i), a = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(a) : Promise.resolve(a).then(o, r);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var u = t.apply(e, n);
                        function i(t) {
                            a(u, o, r, i, c, "next", t);
                        }
                        function c(t) {
                            a(u, o, r, i, c, "throw", t);
                        }
                        i(void 0);
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
                mixins: [ r.default ],
                data: function() {
                    return {
                        programName: "杭州房小团",
                        showPermissionsSetting: !1
                    };
                },
                methods: {
                    preview: function() {
                        this.groupInfo.wechat_code && t.previewImage({
                            urls: [ this.groupInfo.wechat_code ]
                        });
                    },
                    saveCode: function() {
                        var e = s(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, i.checkWriteAlbumAuth.call(this);

                                  case 3:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? this.savePhoto.call(n) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            var t = s(o.default.mark(function t() {
                                                return o.default.wrap(function(t) {
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
                        var e = s(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, u.tip.confirm("确认保存图片吗？", "提示");

                                  case 2:
                                    e.sent && t.downloadFile({
                                        url: this.groupInfo.wechat_code,
                                        success: function(e) {
                                            t.saveImageToPhotosAlbum({
                                                filePath: e.tempFilePath,
                                                success: function() {
                                                    u.tip.toast("保存成功");
                                                },
                                                fail: function() {
                                                    u.tip.toast("保存失败", "", "none");
                                                }
                                            });
                                        },
                                        fail: function() {
                                            u.tip.toast("保存失败", "", "none");
                                        }
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
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
    df1e: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("b743"), r = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = r.a;
    },
    ed3f: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("b1f0"), r = n("df1e");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("7f23");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    }
}, [ [ "7245", "common/runtime", "common/vendor", "subPackages/me/common/vendor" ] ] ]);