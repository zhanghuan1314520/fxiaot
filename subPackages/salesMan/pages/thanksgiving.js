(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/thanksgiving" ], {
    "0cd3": function(t, e, n) {},
    "3c1f": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("def2"), r = n("9633");
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        n("acaf");
        var o = n("f0c5"), u = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "5fa9": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3")), s = n("ca00"), o = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, r, s, o) {
                try {
                    var u = t[s](o), i = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(a, r);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var s = t.apply(e, n);
                        function o(t) {
                            i(s, a, r, o, u, "next", t);
                        }
                        function u(t) {
                            i(s, a, r, o, u, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    photoPermissionsSettings: function() {
                        n.e("components/photoPermissionsSettings").then(function() {
                            return resolve(n("372d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        projectName: "杭州房小团",
                        posterImage: "",
                        thanksInfo: {},
                        shareText: "感谢杭州房小团，让我们一起再创辉煌！",
                        showPermissionsSetting: !1,
                        saveImageLock: !1
                    };
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    }
                },
                onLoad: function() {
                    this.$refs.busiNavHeader.setTransparentMode(), this.getThanks();
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    getThanks: function() {
                        var t = c(a.default.mark(function t() {
                            var e, n, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.sales.getThanks();

                                  case 2:
                                    e = t.sent, n = e.data, s = void 0 === n ? {} : n, this.thanksInfo = s, this.createPoster(), 
                                    s.annual_tag && this.getSurpriseFlag();

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
                    createPoster: function() {
                        var t = c(a.default.mark(function t() {
                            var e, n, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.activity.poster({
                                        action: "annualPoster",
                                        params: {
                                            user_id: this.userInfo.id,
                                            annual_number: this.thanksInfo.annual_number
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, s = (void 0 === n ? {} : n).image, this.posterImage = s;

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
                    copyText: function() {
                        t.setClipboardData({
                            data: this.shareText,
                            success: function() {}
                        });
                    },
                    savePoster: function() {
                        var e = this;
                        this.posterImage && !this.saveImageLock && (this.saveImageLock = !0, t.downloadFile({
                            url: this.posterImage,
                            success: function(e) {
                                t.saveImageToPhotosAlbum({
                                    filePath: e.tempFilePath,
                                    success: function() {
                                        o.tip.toast("保存成功", "", "none");
                                    },
                                    fail: function() {
                                        o.tip.toast("保存失败", "", "none");
                                    }
                                });
                            },
                            fail: function() {
                                o.tip.toast("下载海报失败", "", "none");
                            },
                            complete: function() {
                                setTimeout(function() {
                                    e.saveImageLock = !1;
                                }, 500);
                            }
                        }));
                    },
                    checkPermissionAndsavePoster: function() {
                        var e = c(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, (0, s.checkWriteAlbumAuth)();

                                  case 3:
                                    e.sent ? n.savePoster() : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            n.savePoster();
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
                    getSurpriseFlag: function() {
                        var t = c(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.popupsShow(this.thanksInfo.annual_tag);

                                  case 2:
                                    (e = t.sent).data && e.data.id || this.createSurpriseFlag();

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
                    createSurpriseFlag: function() {
                        var t = c(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.popupsCreate({
                                        tag: this.thanksInfo.annual_tag
                                    });

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    viewPic: function() {
                        this.posterImage && t.previewImage({
                            urls: [ this.posterImage ]
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    8196: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3c1f")).default);
        }).call(this, n("543d").createPage);
    },
    9633: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5fa9"), r = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = r.a;
    },
    acaf: function(t, e, n) {
        "use strict";
        var a = n("0cd3");
        n.n(a).a;
    },
    def2: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    }
}, [ [ "8196", "common/runtime", "common/vendor" ] ] ]);