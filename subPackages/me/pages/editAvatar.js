require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/editAvatar" ], {
    "19de": function(e, t, n) {},
    "264a": function(e, t, n) {
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
    2730: function(e, t, n) {
        "use strict";
        var a = n("19de");
        n.n(a).a;
    },
    "8cdd": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("e443")).default);
        }).call(this, n("543d").createPage);
    },
    d2a0: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = u(n("a34a")), o = u(n("4ec3")), i = n("b628"), r = n("f4fd");
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, a, o, i, r) {
                try {
                    var u = e[i](r), s = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(s) : Promise.resolve(s).then(a, o);
            }
            var c = e.getSystemInfoSync(), f = c.windowWidth, d = c.windowHeight - 50, l = {
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
                        default_avatar: "https://imgcdn.huanjutang.com/image/2020/04/02/b4878452a6c875494e0b89542ae322a5.png",
                        inputVal: "",
                        individual_resume: "",
                        avatar: "",
                        userInfo: null,
                        palceHolder: "",
                        showCropper: !1,
                        cropperOpt: {
                            width: f,
                            height: d,
                            pixelRatio: c.pixelRatio,
                            scale: 2.5,
                            zoom: 8,
                            cut: {
                                x: (f - 300) / 2,
                                y: (d - 300) / 2,
                                width: 300,
                                height: 300
                            }
                        }
                    };
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                onLoad: function() {
                    var t = this;
                    e.hideShareMenu(), this.userInfo = (0, r.getUserInfo)(), this.avatar = this.userInfo.avatarUrl, 
                    this.inputVal = this.userInfo.nickName, this.individual_resume = this.userInfo.individual_resume, 
                    this.$eventBus.$on("ready", function() {}), this.$eventBus.$on("beforeImageLoad", function() {}), 
                    this.$eventBus.$on("imageLoad", function() {}), this.$eventBus.$on("beforeDraw", function() {}), 
                    this.$eventBus.$on("getCropperImage", function() {
                        var n = function(e) {
                            return function() {
                                var t = this, n = arguments;
                                return new Promise(function(a, o) {
                                    var i = e.apply(t, n);
                                    function r(e) {
                                        s(i, a, o, r, u, "next", e);
                                    }
                                    function u(e) {
                                        s(i, a, o, r, u, "throw", e);
                                    }
                                    r(void 0);
                                });
                            };
                        }(a.default.mark(function n(o) {
                            var r, u;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, o;

                                  case 2:
                                    return r = n.sent, e.showLoading({
                                        title: "保存中",
                                        mask: !0
                                    }), n.prev = 4, n.next = 7, i.foundation.compressImageSync(r, 50);

                                  case 7:
                                    return r = n.sent, n.next = 10, i.foundation.uploadFileSync(r);

                                  case 10:
                                    u = n.sent, t.avatar = u.data && u.data.data && u.data.data.url, n.next = 17;
                                    break;

                                  case 14:
                                    n.prev = 14, n.t0 = n.catch(4), i.tip.toast("头像修改失败", "", "none");

                                  case 17:
                                    return n.prev = 17, e.hideLoading(), t.showCropper = !1, n.finish(17);

                                  case 21:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, null, [ [ 4, 14, 17, 21 ] ]);
                        }));
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    }()), this.$eventBus.$on("uploadTap", function() {
                        t.changeAvatar.call(t);
                    }), this.$once("hook:beforeDestroy", function() {
                        t.$eventBus.$off("ready"), t.$eventBus.$off("beforeImageLoad"), t.$eventBus.$off("imageLoad"), 
                        t.$eventBus.$off("beforeDraw"), t.$eventBus.$off("getCropperImage"), t.$eventBus.$off("uploadTap");
                    });
                },
                onShow: function() {
                    this.userInfo = (0, r.getUserInfo)(), this.avatar = this.userInfo.avatarUrl, this.inputVal = this.userInfo.nickName, 
                    this.individualResume = this.userInfo.individual_resume;
                },
                methods: {
                    handleShowDialog: function(e) {
                        this.showDialog = e;
                    },
                    changeAvatar: function() {
                        var e = this;
                        i.foundation.chooseImageSync().then(function(t) {
                            var n = t.tempFilePaths[0];
                            e.showCropper = !0, e.$nextTick(function() {
                                e.$refs.cropper.pushOrigin(n);
                            });
                        }).catch(function() {});
                    },
                    inputing: function(e) {
                        this.inputVal = e.detail.value;
                    },
                    saveInfo: function() {
                        var t = this;
                        e.showLoading({
                            title: "保存中"
                        }), o.default.editAvatar(this.avatar, this.inputVal, this.individual_resume).then(function(n) {
                            if (e.hideLoading(), 0 === Math.floor(n.code)) {
                                var a = {
                                    nickName: t.inputVal
                                };
                                (0, r.setUserInfo)(i.common.merge(t.userInfo, a)), e.navigateBack({
                                    delta: 1
                                }), t.$eventBus.$emit("updateUserInfo"), i.tip.toast("审核成功后生效");
                            } else i.tip.toast(n.message, "", "none");
                        }).catch(function() {
                            e.hideLoading(), i.tip.toast("保存失败", "", "none");
                        });
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    },
    db58: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("d2a0"), o = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    e443: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("264a"), o = n("db58");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("2730");
        var r = n("f0c5"), u = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    }
}, [ [ "8cdd", "common/runtime", "common/vendor" ] ] ]);