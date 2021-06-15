require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/personInfo" ], {
    1043: function(e, t, n) {
        "use strict";
        var a = n("aede");
        n.n(a).a;
    },
    "44ed": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("5609"), o = n("89b1");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("1043");
        var u = n("f0c5"), i = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = i.exports;
    },
    5609: function(e, t, n) {
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
    "843f": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("44ed")).default);
        }).call(this, n("543d").createPage);
    },
    "89b1": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("bcd6"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    aede: function(e, t, n) {},
    bcd6: function(e, t, n) {
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
            function i(e, t, n, a, o, r, u) {
                try {
                    var i = e[r](u), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(s) : Promise.resolve(s).then(a, o);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = e.apply(t, n);
                        function u(e) {
                            i(r, a, o, u, s, "next", e);
                        }
                        function s(e) {
                            i(r, a, o, u, s, "throw", e);
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
                        inputData: [],
                        default_avatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        saleMan_id: "",
                        tip: "",
                        bottom: 0,
                        showCropper: !1,
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
                    this.reload.call(this);
                },
                onPullDownRefresh: function() {
                    var e = s(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

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
                onLoad: function() {
                    var t = this;
                    e.hideShareMenu(), this.$eventBus.$on("ready", function() {}), this.$eventBus.$on("beforeImageLoad", function() {}), 
                    this.$eventBus.$on("imageLoad", function() {}), this.$eventBus.$on("beforeDraw", function() {}), 
                    this.$eventBus.$on("getCropperImage", function() {
                        var n = s(a.default.mark(function n(u) {
                            var i, s, c, l, p, h, v;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, u;

                                  case 2:
                                    return i = n.sent, e.showLoading({
                                        title: "保存中",
                                        mask: !0
                                    }), n.prev = 4, n.next = 7, r.foundation.compressImageSync(i, 50);

                                  case 7:
                                    return i = n.sent, n.next = 10, r.foundation.uploadFileSync(i);

                                  case 10:
                                    if (s = n.sent, 200 === parseInt(s.statusCode, 10)) {
                                        n.next = 14;
                                        break;
                                    }
                                    return r.tip.toast("头像上传失败", "", "none"), n.abrupt("return");

                                  case 14:
                                    if (c = s.data, 0 === parseInt(c.status, 10)) {
                                        n.next = 18;
                                        break;
                                    }
                                    return r.tip.toast("头像上传失败", "", "none"), n.abrupt("return");

                                  case 18:
                                    return l = c.data.url, p = t.inputData.nick_name, n.next = 22, o.default.editAvatar(l, p);

                                  case 22:
                                    h = n.sent, 0 === parseInt(h.code, 10) ? (t.default_avatar = c.data.url, r.tip.toast(h.message || "修改成功", "", "none"), 
                                    (v = f()).avatarUrl = t.default_avatar, d(v)) : r.tip.toast(h.message || "修改失败", "", "none"), 
                                    n.next = 29;
                                    break;

                                  case 26:
                                    n.prev = 26, n.t0 = n.catch(4), r.tip.toast("头像修改失败", "", "none");

                                  case 29:
                                    return n.prev = 29, e.hideLoading(), t.showCropper = !1, n.finish(29);

                                  case 33:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, null, [ [ 4, 26, 29, 33 ] ]);
                        }));
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    }()), this.$eventBus.$on("uploadTap", function() {
                        t.chooseAvatar.call(t);
                    }), this.$once("hook:beforeDestroy", function() {
                        t.$eventBus.$off("ready"), t.$eventBus.$off("beforeImageLoad"), t.$eventBus.$off("imageLoad"), 
                        t.$eventBus.$off("beforeDraw"), t.$eventBus.$off("getCropperImage"), t.$eventBus.$off("uploadTap");
                    });
                },
                methods: {
                    handleNext: function(t, n) {
                        e.navigateTo({
                            url: "/subPackages/me/pages/editInfo?type=".concat(t, "&val=").concat(n, "&isSalesMan=false")
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
                        var e = s(a.default.mark(function e() {
                            var t;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t = f(), this.inputData = {
                                        avatar_url: t.avatarUrl,
                                        nick_name: t.nickName,
                                        content: t.individual_resume
                                    }, this.default_avatar = t.avatarUrl;

                                  case 3:
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
            t.default = v;
        }).call(this, n("543d").default);
    }
}, [ [ "843f", "common/runtime", "common/vendor" ] ] ]);