(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/hangzhou/lotteryResult/lotteryResult" ], {
    3096: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("cc99"), a = n("331b");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("fdf8");
        var s = n("f0c5"), r = Object(s.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "331b": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("88bc"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "7e5e": function(t, e, n) {},
    "88bc": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("a34a")), a = r(n("4ec3")), i = n("b628"), s = n("ca00");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, o, a, i, s) {
                try {
                    var r = t[i](s), u = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(u) : Promise.resolve(u).then(o, a);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, a) {
                        var i = t.apply(e, n);
                        function s(t) {
                            u(i, o, a, s, r, "next", t);
                        }
                        function r(t) {
                            u(i, o, a, s, r, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var l = {
                components: {
                    photoPermissionsSettings: function() {
                        n.e("components/photoPermissionsSettings").then(function() {
                            return resolve(n("372d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Skeletons: function() {
                        n.e("pages/components/LotteryResultSkeleton").then(function() {
                            return resolve(n("55b4"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r(n("667e")).default ],
                props: {
                    ids: {
                        type: String,
                        default: null
                    },
                    code: {
                        type: String,
                        default: ""
                    },
                    type: {
                        type: Number,
                        default: 0
                    },
                    listType: {
                        type: String,
                        default: ""
                    },
                    projectName: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        loading: !1,
                        title: "",
                        item: {},
                        myCodes: [],
                        userInfo: {},
                        shareTitle: "",
                        canvasWidth: 0,
                        canvasHeight: 0,
                        appName: "杭州房小团",
                        showPermissionsSetting: !1,
                        writePhotoAuth: null,
                        project_name: ""
                    };
                },
                watch: {
                    project_name: function(t) {
                        this.$emit("update:projectName", t);
                    }
                },
                onShareAppMessage: function() {
                    return i.share.share("快来看【".concat(this.project_name, "】的摇号结果"));
                },
                onPullDownRefresh: function() {
                    var e = c(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reloadData.call(this);

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                mounted: function() {
                    this.userInfo = i.cache.get("userinfo"), this.reloadData().then();
                },
                methods: {
                    reloadData: function() {
                        var e = c(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.ids) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    return this.loading = !0, e.next = 5, a.default.getLotteryCodeDetail(this.ids || "", this.code, this.type, this.listType);

                                  case 5:
                                    n = e.sent, this.loading = !1, n.data || wx.navigateBack({
                                        delta: 1,
                                        success: function() {
                                            i.tip.toast("暂无结果", "", "none");
                                        }
                                    }), n && n.data && (this.item = n.data, this.project_name = this.item.name, this.myCodes = this.item.myCodes, 
                                    this.item.type_item.length > 15 ? this.item.mainFSize = "36rpx" : this.item.mainFSize = "44rpx"), 
                                    t.stopPullDownRefresh();

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    showCode: function() {
                        t.previewImage({
                            urls: [ this.item.qr_code ]
                        });
                    },
                    saveShareImage: function() {
                        var e = c(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this, e.next = 3, s.checkWriteAlbumAuth.call(this);

                                  case 3:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? this.savePhoto.call(n) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            var t = c(o.default.mark(function t() {
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
                        var e = this;
                        this.drawImage().then(function() {
                            setTimeout(function() {
                                t.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: e.canvasWidth,
                                    height: e.canvasHeight,
                                    canvasId: "myCanvas",
                                    success: function(e) {
                                        var n = e.tempFilePath;
                                        t.saveImageToPhotosAlbum({
                                            filePath: n,
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
                                }, e);
                            }, 200);
                        }).catch(function() {
                            t.hideLoading(), i.tip.toast("生成图片失败", "", "none");
                        });
                    },
                    downloadFile: function(e) {
                        return new Promise(function(n, o) {
                            if (e) {
                                var a = e.replace(/^http:/, "https:");
                                t.downloadFile({
                                    url: a,
                                    success: function(t) {
                                        n(t.tempFilePath);
                                    },
                                    fail: function(t) {
                                        o(t);
                                    }
                                });
                            } else o(new Error("下载对象里面没有路径"));
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    cc99: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    fdf8: function(t, e, n) {
        "use strict";
        var o = n("7e5e");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/hangzhou/lotteryResult/lotteryResult-create-component", {
    "pages/components/hangzhou/lotteryResult/lotteryResult-create-component": function(t, e, n) {
        n("543d").createComponent(n("3096"));
    }
}, [ [ "pages/components/hangzhou/lotteryResult/lotteryResult-create-component" ] ] ]);