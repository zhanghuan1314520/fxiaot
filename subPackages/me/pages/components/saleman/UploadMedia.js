require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/saleman/UploadMedia" ], {
    "2de4": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("d79e"), a = n("60aa");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("9056");
        var r = n("f0c5"), s = Object(r.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = s.exports;
    },
    "60aa": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("a901"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    9056: function(t, e, n) {
        "use strict";
        var i = n("edf9");
        n.n(i).a;
    },
    a901: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), a = n("b628");
            function o(t, e, n, i, a, o, r) {
                try {
                    var s = t[o](r), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(i, a);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, a) {
                        var r = t.apply(e, n);
                        function s(t) {
                            o(r, i, a, s, u, "next", t);
                        }
                        function u(t) {
                            o(r, i, a, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var s = {
                props: {
                    mediaType: {
                        type: String,
                        default: function() {
                            return "image";
                        }
                    },
                    limit: {
                        type: Number,
                        default: function() {
                            return -1;
                        }
                    },
                    extra: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    tip: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    limitSize: {
                        type: Boolean,
                        default: function() {
                            return !0;
                        }
                    },
                    value: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    disabled: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    }
                },
                data: function() {
                    return {
                        closeIcon: "https://imgcdn.huanjutang.com/image/2020/05/27/9a5cb232f89b7e5755a5de97259b20fb.png",
                        playIcon: "https://imgcdn.huanjutang.com/image/2020/05/27/ddd4947f214b5f60aeb4c63e1199d988.png",
                        fileList: [],
                        prefix: "?vframe/jpg/offset/1",
                        isTemp: !1,
                        progress: 0
                    };
                },
                computed: {
                    showPlayIcon: function() {
                        return "video" === this.mediaType;
                    },
                    addText: function() {
                        return "video" === this.mediaType ? "添加视频" : "添加图片";
                    },
                    showAdd: function() {
                        return -1 === this.limit || this.limit > this.fileList.length;
                    },
                    showEmptyBox: function() {
                        return this.fileList.length % 3 == 1;
                    },
                    count: function() {
                        return -1 === this.limit ? "" : this.limit - this.fileList.length;
                    }
                },
                watch: {
                    value: {
                        handler: function(t) {
                            t && (this.fileList = t, t.length && (this.progress = 100));
                        },
                        immediate: !0
                    }
                },
                methods: {
                    uploadFile: function() {
                        var t = r(i.default.mark(function t() {
                            var e, n, o, r = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = this.count, t.next = 3, a.foundation.chooseImageSync({
                                        num: e
                                    });

                                  case 3:
                                    return n = t.sent, o = n.tempFilePaths.map(function(t) {
                                        return a.foundation.uploadFileSync(t);
                                    }), t.prev = 5, t.next = 8, Promise.all(o);

                                  case 8:
                                    t.sent.forEach(function(t) {
                                        if (t.statusCode && t.data) if (200 !== Number(t.statusCode)) a.tip.error("图片上传失败"); else {
                                            var e = t.data;
                                            if (0 !== Number(e.status)) return void a.tip.error("图片上传失败");
                                            r.fileList = r.fileList.concat(e.data.url);
                                        }
                                    }), this.$emit("update:value", this.fileList), t.next = 17;
                                    break;

                                  case 13:
                                    t.prev = 13, t.t0 = t.catch(5), a.tip.error("图片上传失败"), this.fileList = [];

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 5, 13 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    uploadVideo: function() {
                        var e = r(i.default.mark(function e() {
                            var n, o, r, s = this;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.foundation.chooseVideoSync();

                                  case 2:
                                    if (n = e.sent, o = this.fileList.length, this.isTemp = !0, this.fileList.push(n.thumbTempFilePath), 
                                    !(n.duration < 10 && this.limitSize)) {
                                        e.next = 10;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "视频时长不能小于".concat(10, "s"),
                                        icon: "none"
                                    }), this.fileList.pop(), e.abrupt("return");

                                  case 10:
                                    if (!(n.duration > 60 && this.limitSize)) {
                                        e.next = 14;
                                        break;
                                    }
                                    return t.showToast({
                                        title: "视频时长不能大于".concat(60, "s"),
                                        icon: "none"
                                    }), this.fileList.pop(), e.abrupt("return");

                                  case 14:
                                    return t.showLoading({
                                        title: "上传中...",
                                        mask: !0
                                    }), e.prev = 15, e.next = 18, a.foundation.uploadVideoSync(n.tempFilePath, function(t) {
                                        s.progress = t.progress;
                                    });

                                  case 18:
                                    r = e.sent, t.hideLoading(), this.fileList[o] = r, this.isTemp = !1, this.$emit("update:value", this.fileList), 
                                    e.next = 30;
                                    break;

                                  case 25:
                                    e.prev = 25, e.t0 = e.catch(15), t.hideLoading(), this.fileList.pop(), a.tip.toast("视频上传失败", "", "none");

                                  case 30:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 15, 25 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    handlePlayVideo: function(e) {
                        t.navigateTo({
                            url: "/subPackages/tools/pages/playVideoPage?url=".concat(e, "&type=").concat(this.limitSize ? "" : "activity")
                        });
                    },
                    haddleAddFile: function() {
                        "video" === this.mediaType ? this.uploadVideo() : this.uploadFile();
                    },
                    deleteFile: function(t) {
                        this.fileList.splice(t, 1), this.$emit("update:value", this.fileList);
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    d79e: function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    edf9: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/saleman/UploadMedia-create-component", {
    "subPackages/me/pages/components/saleman/UploadMedia-create-component": function(t, e, n) {
        n("543d").createComponent(n("2de4"));
    }
}, [ [ "subPackages/me/pages/components/saleman/UploadMedia-create-component" ] ] ]);