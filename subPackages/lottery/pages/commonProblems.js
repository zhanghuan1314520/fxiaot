require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/commonProblems" ], {
    "1fea": function(t, e, n) {
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
    "28d8": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = s(n("a34a")), r = n("b628"), i = s(n("4ec3"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, o, r, i, s) {
                try {
                    var u = t[i](s), a = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(a) : Promise.resolve(a).then(o, r);
            }
            function a(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var i = t.apply(e, n);
                        function s(t) {
                            u(i, o, r, s, a, "next", t);
                        }
                        function a(t) {
                            u(i, o, r, s, a, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var c = {
                components: {
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        data_list: [],
                        tempFilePath: "",
                        writePhotoAuth: !1,
                        showPermissionsSetting: !1,
                        programName: "杭州房小团",
                        isSalesMan: 0,
                        commonTools: []
                    };
                },
                onShareAppMessage: function() {
                    return r.share.share("你要的购房资料模版这里都有");
                },
                onPageScroll: function(t) {
                    this.$refs.share.pageScroll(t);
                },
                onLoad: function() {
                    var t = a(o.default.mark(function t() {
                        var e, n = this;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, i.default.downloadTemplate();

                              case 2:
                                e = t.sent, this.data_list = e && e.data || [], this.commonTools = e && e.common_tools || [], 
                                i.default.isSaleMan().then(function(t) {
                                    n.isSalesMan = t.data;
                                });

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    toUrl: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
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
                        var e = a(o.default.mark(function e(n) {
                            var i, s;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return i = n.url, s = this, e.next = 4, this.checkWriteAlbumAuth();

                                  case 4:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? t.downloadFile({
                                        url: i,
                                        success: function(e) {
                                            var n = e.tempFilePath;
                                            t.saveImageToPhotosAlbum({
                                                filePath: n,
                                                success: function() {
                                                    "authorize:ok" === e.errMsg && r.tip.toast("保存成功");
                                                }
                                            });
                                        }
                                    }).onProgressUpdate(function(e) {
                                        t.showLoading({
                                            title: "".concat(e.progress, "%")
                                        }), 100 === Math.floor(e.progress) && (t.hideLoading(), r.tip.toast("保存成功"));
                                    }) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function(t) {
                                            "authorize:ok" === t.errMsg && r.tip.toast("保存成功");
                                        },
                                        fail: function(t) {
                                            "authorize:fail auth deny" !== t.errMsg && (s.showPermissionsSetting = !0);
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
            e.default = c;
        }).call(this, n("543d").default);
    },
    6984: function(t, e, n) {},
    "8f3c": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("28d8"), r = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    a8fe: function(t, e, n) {
        "use strict";
        var o = n("6984");
        n.n(o).a;
    },
    c9d0: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("1fea"), r = n("8f3c");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("a8fe");
        var s = n("f0c5"), u = Object(s.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    dd51: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c9d0")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "dd51", "common/runtime", "common/vendor" ] ] ]);