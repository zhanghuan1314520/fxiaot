require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/uploadVideo" ], {
    "0528": function(e, t, n) {
        "use strict";
        var r = n("a0a3");
        n.n(r).a;
    },
    1956: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("9d89"), i = n("bfa3");
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        n("0528");
        var o = n("f0c5"), s = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = s.exports;
    },
    "9cca": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n("a34a")), i = o(n("4ec3")), a = n("b628");
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function f(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o), c = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(r, i);
            }
            function p(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            f(a, r, i, o, s, "next", e);
                        }
                        function s(e) {
                            f(a, r, i, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var d = n("79b9"), l = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        projectData: [],
                        projectIndex: 0,
                        projectShow: !1,
                        dialogShow: !1,
                        videoList: [],
                        uploadIcon: "https://imgcdn.huanjutang.com/file/2020/07/27/f422f23c39fc5ab946876e75a432d29c.png",
                        deleteIcon: "https://imgcdn.huanjutang.com/assets/img/20191017161178081.png",
                        playIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAABR1BMVEVmZmYAAAD////BwcH///+MjIz////8/PxwcHBpaWn///////+srKzz8/Pv7+////95eXn////t7e2wsLD////4+Pj////////Kysq0tLSgoKCJiYmGhob///+qqqr8/Pzu7u7////r6+vj4+PPz8/////////////////////////////19fV0dHT////////29vb6+vr4+Pj////t7e3////////j4+Pb29v////Nzc3///98fHz////6+vr9/f35+fnq6ur19fX////////c3NzV1dX///+mpqb////////////////////////x8fHv7+/u7u7k5OTh4eH////////y8vLx8fHw8PD////d3d3g4ODX19fQ0NDT09PDw8P///+5ubn///////+ZmZmSkpKAgID////////39/f9/f34+Pj6+vquI9FUAAAAaHRSTlNNAAWDy10B/lBOA+xx2c+KVOXJdPLmrqSPeGlbWt1w8MrFxbOWhYJ4WlA0AvNSMCz68uTg29nPtKWgkmRVIOvp6NPcwrutoXJuYl5WKSIJ6eLLxLwu9O7R0Lq1ramdmYuAgG1mZmJYKgQaCSQAAAO8SURBVFjDvZnXQttAEEVHK1lGknvvGIM72DQbDJiWQkIJpAKBhBpiQf7/OSKQLAGknZUF5wPOw0g7OzsXBCZqc6MUH2ppkZ5by7aH4sWNpiowYYjlRvllZLIwm0im0gsAC+lUMjFbmIy8LDfkPsRbx9nojJiBB2TEmWj2eMuemFSGJmY8YMqbV4tDFcItJvNZnzgAliiiLztPuMT1t8F8DhDk8sG3dby4Jq2GAUnYK9WQYuIf/D4AaJS5QT/BiLtSyAVcuEJSly2uLo0ANyNLVYZYLi17wAaexZJsJVY7qy6whWu1o5qLScwXAJsEfDFiJlZj78fANmPvY+rjYjnuG4A+GPDF5UfFRW8A+iLgLT4m3lh0QZ+4Fjceijc1D/RNWNu8LybtEXCA121yT+wPgRMoef//4tqgCxzBNVi7K65Lc+AQc1L9jnjeq4BDKN55Kn4XDINjhIPv/onX8uAgobW/YhLMgYPkguRWvL4LjrK7fiuWRLBgekcEPkTpRvxpwrKp6bq+kuJrcxOf/oj9w2AtvtLHv14AB8P+a7E85WGIL3/p+ugIR6/2TMmGuBEFhrjXu7zS9ekkoIk2DHF5hik2cBvqDz/QtSgb4n0RIzbUuj5+iLwTxX0B1EgGJ+5dl3r7CNVUMhEVfkYBKb4p9cobQDDZhEoeLb4t9ccMMClUoHSAFNN6jH5j/nqzRYjPocW0HjsnYE0iDi+SHGJaj8I5WJF8Aa0Ul5j+eq8CYE6qBVqaT0xL/SWhgBlpDSILdsS3p9y0yyxEoAc2xPTXM5saeuC2I6alHn09ZiLWbJaC1sOkFFPpPsUrJh+vnbIttrgAUi3uA0JxX19ZGdMD0uE70shOl+hA+cDuAdkWLZpQGarston+zyiFKmxGucTI+29yE1Qtw982p8OMq0lTQYiJ3I0+wbr4xJgAwukwTkz75QX7+j81xM0o12UaSgGbaBM1Yt3Rbp8gRyzUUHijddNblD0U4sZY2nyxY2yDDt6IoTDHO3gL63vsMfbLkQJY9tZRjxvdYPwwYOdxI6yFrMUfzvmeY7gH5MpOkvcB+ZRPXucf6Qmp/lRrhedZhAhEcmZ1IxEqvqG75MiyqftwPVZdTkOfpJerT7/Qc34F6fzSNB9Tn23NS80dr93FtLdDnmSVvlySn3/5bz+uKEhdbMCiABolwQpYKLU2TyTUrvGEWFMhXIgVwoVYFHKGi93OiK2gcNjRoJCyVbKKNktbDoWxAYAAPoxFxceV4nV8/LnX+6y1jPi4gomPfwP0nmJlqFUXrgAAAABJRU5ErkJggg==",
                        houseIndex: 0,
                        houseType: [],
                        dataArr: [],
                        params: {
                            project_id: "",
                            video_type: "2",
                            videos: []
                        },
                        imageList: [],
                        uploadDisable: !1
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("我在这里上传视频");
                },
                onUnload: function() {},
                onLoad: function() {
                    var e = p(r.default.mark(function e(t) {
                        var n, a;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.params.project_id = t.project_id, this.params.project_id) {
                                    e.next = 8;
                                    break;
                                }
                                return this.projectShow = !0, e.next = 5, i.default.getProjectListWithUser();

                              case 5:
                                n = e.sent, this.projectData = n.data, this.params.project_id = this.projectData[0].project_id;

                              case 8:
                                return e.next = 10, i.default.huxingPhotosType(3);

                              case 10:
                                a = e.sent, this.houseType = a.data;

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    previewImage: function(t) {
                        e.previewImage({
                            urls: [ t ]
                        });
                    },
                    chooseImage: function() {
                        var e = p(r.default.mark(function e() {
                            var t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this.checkUploadPermission();

                                  case 2:
                                    if (e.sent) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 5:
                                    return e.next = 7, a.foundation.chooseImageSync({
                                        num: this.videoList.length
                                    });

                                  case 7:
                                    return t = e.sent, e.next = 10, this.upLoadImage(t.tempFilePaths);

                                  case 10:
                                    this.imageList.length > this.videoList.length && (a.tip.toast("一个视频至少一张封面图", "", "none", 3e3), 
                                    this.imageList = this.imageList.slice(0, this.videoList.length));

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    upLoadImage: function() {
                        var e = p(r.default.mark(function e(t) {
                            var n, i = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = t.map(function(e) {
                                        return a.foundation.uploadFileSync(e).catch(function(e) {
                                            return e;
                                        });
                                    }), e.prev = 1, e.next = 4, Promise.all(n);

                                  case 4:
                                    e.sent.forEach(function(e) {
                                        if (e.statusCode && e.data) if (200 !== Number(e.statusCode)) a.tip.error("图片上传失败"); else {
                                            var t = e.data;
                                            if (0 !== Number(t.status)) return void a.tip.error("图片上传失败");
                                            i.imageList = i.imageList.concat(t.data.url);
                                        }
                                    }), e.next = 11;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(1), this.initImageList();

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 1, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    deleteImage: function() {
                        var e = p(r.default.mark(function e(t) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.tip.confirm("请确认是否删除该图片？", "提示");

                                  case 2:
                                    e.sent && this.imageList.splice(t, 1);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    switchType: function(e) {
                        this.houseIndex = Number(e.detail.value), this.params.video_type = this.houseType[this.houseIndex].id;
                    },
                    deleteVideo: function() {
                        var e = p(r.default.mark(function e(t) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.tip.confirm("请确认是否删除该条视频？", "提示");

                                  case 2:
                                    e.sent && this.videoList.splice(t, 1);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toUrl: function() {
                        this.videoList = [], this.dialogShow = !1, e.navigateTo({
                            url: "/pages/webview2?redirect=".concat(d.webviewHost, "/followServices")
                        });
                    },
                    optProject: function() {
                        var t = this;
                        t.newList = [], t.projectData.forEach(function(e) {
                            t.newList.push(e.project_name);
                        }), e.showActionSheet({
                            itemList: t.newList,
                            success: function(e) {
                                t.projectIndex = e.tapIndex, t.params.project_id = t.projectData[t.projectIndex].project_id;
                            },
                            fail: function() {}
                        });
                    },
                    playVideoHandle: function(t) {
                        e.navigateTo({
                            url: "/subPackages/tools/pages/playVideoPage?url=".concat(t)
                        });
                    },
                    chooseVideo: function() {
                        var t = p(r.default.mark(function t() {
                            var n, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.checkUploadPermission();

                                  case 2:
                                    if (t.sent) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 5:
                                    return t.next = 7, a.foundation.chooseVideoSync();

                                  case 7:
                                    if (!((n = t.sent).size > 104857600)) {
                                        t.next = 11;
                                        break;
                                    }
                                    return e.showToast({
                                        title: "视频文件不能超过100M",
                                        icon: "none"
                                    }), t.abrupt("return");

                                  case 11:
                                    if (!(n.duration < 30)) {
                                        t.next = 14;
                                        break;
                                    }
                                    return e.showToast({
                                        title: "视频时长不能少于".concat(30, "s"),
                                        icon: "none"
                                    }), t.abrupt("return");

                                  case 14:
                                    return e.showLoading({
                                        title: "上传中...",
                                        mask: !0
                                    }), t.prev = 15, t.next = 18, a.foundation.uploadVideoSync(n.tempFilePath);

                                  case 18:
                                    i = t.sent, this.videoList.push({
                                        image_url: "".concat(i, "?vframe/jpg/offset/1"),
                                        video: i,
                                        content: "楼盘视频"
                                    }), t.next = 25;
                                    break;

                                  case 22:
                                    t.prev = 22, t.t0 = t.catch(15), a.tip.toast("视频上传失败", "", "none");

                                  case 25:
                                    e.hideLoading();

                                  case 26:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 15, 22 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    upFiles: function() {
                        var t = p(r.default.mark(function t() {
                            var n, o, s, u, f = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.videoList.length) {
                                        t.next = 3;
                                        break;
                                    }
                                    return a.tip.toast("请选择视频上传", "", "none"), t.abrupt("return");

                                  case 3:
                                    return t.next = 5, this.checkUploadPermission();

                                  case 5:
                                    if (t.sent) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 8:
                                    return this.params.videos = [], this.videoList.forEach(function(e, t) {
                                        f.params.videos.push({
                                            video: e.video,
                                            video_cover: f.imageList[t] || ""
                                        });
                                    }), (n = c({}, this.params)).videos.forEach(function(e) {
                                        return delete e.image_url;
                                    }), t.next = 14, i.default.salesManSetVideo(n);

                                  case 14:
                                    if (o = t.sent, e.hideLoading(), s = null, 0 !== Number(o.code)) {
                                        t.next = 31;
                                        break;
                                    }
                                    if (!((u = (u = e.getStorageSync("server_guide_times")) || 0) < 1)) {
                                        t.next = 25;
                                        break;
                                    }
                                    e.setStorageSync("server_guide_times", u + 1), this.dialogShow = !0, t.next = 31;
                                    break;

                                  case 25:
                                    return t.next = 27, a.tip.toast("提交审核成功");

                                  case 27:
                                    clearTimeout(s), this.videoList = [], this.imageList = [], s = setTimeout(function() {
                                        e.navigateBack({
                                            url: "/subPackages/project/pages/photos?project_id=".concat(this.project_id)
                                        });
                                    }, 1e3);

                                  case 31:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    changType: function() {
                        this.videoList = [], this.imageList = [], this.dialogShow = !1;
                    },
                    checkUploadPermission: function() {
                        var e = p(r.default.mark(function e() {
                            var t, n, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, i.default.uploadPermission(this.params.project_id);

                                  case 2:
                                    if (t = e.sent, n = t.code, o = t.data, 0 !== n || !o.upload_video) {
                                        e.next = 6;
                                        break;
                                    }
                                    return e.abrupt("return", Promise.resolve(!0));

                                  case 6:
                                    return a.tip.toast("【本楼盘只接受官方资料，请您谅解！】", null, "none"), e.abrupt("return", Promise.resolve(!1));

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    initImageList: function() {
                        this.imageList = [], this.uploadDisable = !1;
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    },
    "9d89": function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    a0a3: function(e, t, n) {},
    bfa3: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("9cca"), i = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = i.a;
    },
    cd70: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("1956")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "cd70", "common/runtime", "common/vendor" ] ] ]);