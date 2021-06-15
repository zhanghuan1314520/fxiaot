require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/salesPersonInfo" ], {
    "09db": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("668c"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    "5a5d": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "668c": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = u(n("a34a")), o = u(n("4ec3")), r = n("b628");
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, a, o, r, u) {
                try {
                    var s = e[r](u), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(i) : Promise.resolve(i).then(a, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = e.apply(t, n);
                        function u(e) {
                            s(r, a, o, u, i, "next", e);
                        }
                        function i(e) {
                            s(r, a, o, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var c = n("f4fd"), f = c.getUserInfo, d = c.setUserInfo, l = e.getSystemInfoSync(), p = l.windowWidth, h = l.windowHeight - 50, v = {
                components: {
                    cropper: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/pages/components/wepy-com-cropper") ]).then(function() {
                            return resolve(n("a635"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        showDialog: !1,
                        inputData: {},
                        default_avatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        saleMan_id: "",
                        tip: "",
                        bottom: 0,
                        showCropper: !1,
                        isSalesMan: "",
                        cropperOpt: {
                            width: p,
                            height: h,
                            pixelRatio: l.pixelRatio,
                            scale: 2.5,
                            zoom: 8,
                            cut: {
                                x: (p - 300) / 2,
                                y: (h - 300) / 2,
                                width: 300,
                                height: 300
                            }
                        }
                    };
                },
                onShareAppMessage: function() {
                    return r.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onShow: function() {
                    this.reload();
                },
                onPullDownRefresh: function() {
                    var e = i(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function(t) {
                    var n = this;
                    this.sales_man_id = t.id, e.hideShareMenu(), this.$eventBus.$on("ready", function() {}), 
                    this.$eventBus.$on("beforeImageLoad", function() {}), this.$eventBus.$on("imageLoad", function() {}), 
                    this.$eventBus.$on("beforeDraw", function() {}), this.$eventBus.$on("getCropperImage", function() {
                        var t = i(a.default.mark(function t(u) {
                            var s, i, c, l, p, h, v;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, u;

                                  case 2:
                                    return s = t.sent, e.showLoading({
                                        title: "保存中",
                                        mask: !0
                                    }), t.prev = 4, t.next = 7, r.foundation.compressImageSync(s, 50);

                                  case 7:
                                    return s = t.sent, t.next = 10, r.foundation.uploadFileSync(s);

                                  case 10:
                                    if (i = t.sent, 200 === parseInt(i.statusCode, 10)) {
                                        t.next = 14;
                                        break;
                                    }
                                    return r.tip.toast("头像上传失败", "", "none"), t.abrupt("return");

                                  case 14:
                                    if (c = i.data, 0 === parseInt(c.status, 10)) {
                                        t.next = 18;
                                        break;
                                    }
                                    return r.tip.toast("头像上传失败", "", "none"), t.abrupt("return");

                                  case 18:
                                    return l = c.data.url, p = n.inputData.nick_name, t.next = 22, o.default.editAvatar(l, p);

                                  case 22:
                                    h = t.sent, 0 === parseInt(h.code, 10) ? (n.default_avatar = c.data.url, r.tip.toast(h.message || "修改成功", "", "none"), 
                                    (v = f()).avatarUrl = n.default_avatar, d(v)) : r.tip.toast(h.message || "修改失败", "", "none"), 
                                    t.next = 29;
                                    break;

                                  case 26:
                                    t.prev = 26, t.t0 = t.catch(4), r.tip.toast("头像修改失败", "", "none");

                                  case 29:
                                    return t.prev = 29, e.hideLoading(), n.showCropper = !1, t.finish(29);

                                  case 33:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 4, 26, 29, 33 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()), this.$eventBus.$on("uploadTap", function() {
                        n.chooseAvatar.call(n);
                    }), this.$once("hook:beforeDestroy", function() {
                        n.$eventBus.$off("ready"), n.$eventBus.$off("beforeImageLoad"), n.$eventBus.$off("imageLoad"), 
                        n.$eventBus.$off("beforeDraw"), n.$eventBus.$off("getCropperImage"), n.$eventBus.$off("uploadTap");
                    });
                },
                methods: {
                    goTo: function(t) {
                        e.navigateTo({
                            url: t
                        });
                    },
                    handleChangePhone: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/changeInfoPhone"
                        });
                    },
                    handleShowDialog: function(e) {
                        this.showDialog = e;
                    },
                    chooseAvatar: function() {
                        var e = this;
                        r.foundation.chooseImageSync().then(function(t) {
                            var n = t.tempFilePaths[0];
                            e.showCropper = !0, e.$nextTick(function() {
                                e.$refs.cropper.pushOrigin(n);
                            });
                        }).catch(function() {});
                    },
                    reload: function() {
                        var t = i(a.default.mark(function t() {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.default.getPersonInfo({
                                        sales_man_id: this.sales_man_id
                                    });

                                  case 2:
                                    n = t.sent, this.default_avatar = n.data && n.data.avatar_url, this.inputData = n.data, 
                                    e.stopPullDownRefresh();

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = v;
        }).call(this, n("543d").default);
    },
    "8fa7": function(e, t, n) {},
    c550: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("ca23")).default);
        }).call(this, n("543d").createPage);
    },
    ca23: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("5a5d"), o = n("09db");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("e257");
        var u = n("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    e257: function(e, t, n) {
        "use strict";
        var a = n("8fa7");
        n.n(a).a;
    }
}, [ [ "c550", "common/runtime", "common/vendor" ] ] ]);