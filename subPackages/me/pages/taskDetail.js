require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/taskDetail" ], {
    "09bb": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("18e1"), i = a("77d5");
        for (var s in i) "default" !== s && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(s);
        a("da8a");
        var o = a("f0c5"), r = Object(o.a)(i.default, n.b, n.c, !1, null, "ad5312f6", null, !1, n.a, void 0);
        e.default = r.exports;
    },
    "18e1": function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, (t.taskDetail.can_upload ? -1 == t.taskDetail.log.check_status : 0 == t.taskDetail.log.check_status || 1 == t.taskDetail.log.check_status) ? parseInt(t.taskDetail.log.check_status) : null), a = (t.taskDetail.can_upload ? -1 == t.taskDetail.log.check_status : 0 == t.taskDetail.log.check_status || 1 == t.taskDetail.log.check_status) ? parseInt(t.taskDetail.log.check_status) : null;
            t._isMounted || (t.e0 = function(e) {
                t.showPop = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: a
                }
            });
        }, i = [];
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
    },
    "39f51": function(t, e, a) {},
    "77d5": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("c09f"), i = a.n(n);
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = i.a;
    },
    c09f: function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(a("a34a")), i = r(a("79b9")), s = r(a("4ec3")), o = a("b628");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var a = [], n = !0, i = !1, s = void 0;
                        try {
                            for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done) && (a.push(o.value), 
                            !e || a.length !== e); n = !0) ;
                        } catch (t) {
                            i = !0, s = t;
                        } finally {
                            try {
                                n || null == r.return || r.return();
                            } finally {
                                if (i) throw s;
                            }
                        }
                        return a;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var a = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? c(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n;
            }
            function l(t, e, a, n, i, s, o) {
                try {
                    var r = t[s](o), u = r.value;
                } catch (t) {
                    return void a(t);
                }
                r.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function d(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, i) {
                        var s = t.apply(e, a);
                        function o(t) {
                            l(s, n, i, o, r, "next", t);
                        }
                        function r(t) {
                            l(s, n, i, o, r, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                components: {
                    customNavHeader: function() {
                        a.e("subPackages/me/pages/components/customNavHeader").then(function() {
                            return resolve(a("8094"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    Authorization: function() {
                        a.e("components/Authorization").then(function() {
                            return resolve(a("5326"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        loading: !0,
                        pageSrcoll: !1,
                        scrollTop: 0,
                        taskDetail: {},
                        taskStatus: 1,
                        taskCompleteList: [],
                        taskId: "",
                        show: !0,
                        imgTotalList: [],
                        imageList: [],
                        fileList: [],
                        showPop: !1,
                        start: "",
                        end: "",
                        now: new Date().getTime()
                    };
                },
                onShow: function() {},
                onLoad: function(t) {
                    this.loading = !0, this.taskId = t.taskId, this.salesManId = t.salesManId, this.loadData();
                },
                watch: {
                    scrollTop: function(t) {
                        return this.pageSrcoll = t > 32;
                    }
                },
                mounted: function() {},
                onPageScroll: function(t) {
                    this.scrollTop = t.scrollTop;
                },
                onPullDownRefresh: function() {
                    var e = d(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.loadData();

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
                methods: {
                    loadData: function() {
                        var e = d(n.default.mark(function e() {
                            var a, o, r, c, l, d, f = this;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, Promise.all([ s.default.taskDetail(this.taskId, this.salesManId), s.default.taskCompleteList(this.taskId, 4) ]);

                                  case 2:
                                    if (a = e.sent, o = u(a, 2), r = o[0], c = o[1], this.loading = !1, !r.data) {
                                        e.next = 20;
                                        break;
                                    }
                                    if (!Array.isArray(r.data) && r.data) {
                                        e.next = 13;
                                        break;
                                    }
                                    return l = "".concat(i.default.webviewHost, "/salesman/overdueTaskRemind?salesManId=").concat(this.salesManId), 
                                    d = "/pages/webview2?redirect=".concat(encodeURIComponent(l)), t.redirectTo({
                                        url: d
                                    }), e.abrupt("return");

                                  case 13:
                                    this.fileList = [], this.imageList = [], this.imgTotalList = [], r.data.log && r.data.log.files && r.data.log.files.forEach(function(t) {
                                        if (2 === parseInt(t.type, 10)) {
                                            var e = t;
                                            e.size = t.size / 1024 >= 100 ? "".concat((t.size / 1024 / 1024).toFixed(2), "M") : "".concat((t.size / 1024).toFixed(2), "Kb"), 
                                            f.fileList.push(e);
                                        } else f.imgTotalList.push(t.file);
                                    }), this.imgTotalList.length > 3 ? this.imageList = this.imgTotalList.slice(0, 3) : this.imageList = this.imgTotalList, 
                                    r.data.start_time && r.data.end_time && (this.start = new Date(r.data.start_time.replace(/-/g, "/")).getTime(), 
                                    this.end = new Date(r.data.end_time.replace(/-/g, "/")).getTime(), 2 === r.data.time_type && this.now < this.start ? this.taskStatus = 0 : 2 === r.data.time_type && this.now >= this.start && this.now < this.end ? this.taskStatus = 1 : this.taskStatus = 2, 
                                    r.data.start_time = r.data.start_time.substring(5, 16), r.data.end_time = r.data.end_time.substring(5, 16)), 
                                    this.taskDetail = r.data;

                                  case 20:
                                    c.data && (this.taskCompleteList = c.data.length > 4 ? c.data.slice(0, 4) : c.data);

                                  case 21:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    preventTouchMove: function() {
                        return "";
                    },
                    showUploadPop: function() {
                        var t = new Date().getTime();
                        this.end && t > this.end ? o.tip.error("该任务已结束！") : this.showPop = !0;
                    },
                    upLoadImage: function() {
                        var t = d(n.default.mark(function t(e) {
                            var a, i, s = this;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.imgTotalList = [], a = e.map(function(t) {
                                        return o.foundation.uploadFileSync(t).catch(function(t) {
                                            return t;
                                        });
                                    }), t.prev = 2, t.next = 5, Promise.all(a);

                                  case 5:
                                    t.sent.map(function(t) {
                                        if (t.statusCode && t.data) if (200 !== parseInt(t.statusCode, 10)) o.tip.error("图片上传失败"); else {
                                            var e = t.data;
                                            if (0 !== parseInt(e.status, 10)) return o.tip.error("图片上传失败");
                                            s.imgTotalList = s.imgTotalList.concat(e.data.url), s.imgTotalList.length > 3 ? s.imageList = s.imgTotalList.slice(0, 3) : s.imageList = s.imgTotalList;
                                        }
                                        return "";
                                    }), i = this.imgTotalList.map(function(t, e) {
                                        return {
                                            type: 1,
                                            filename: e,
                                            ext: "png",
                                            file: t
                                        };
                                    }), this.customComplete(i), t.next = 14;
                                    break;

                                  case 11:
                                    t.prev = 11, t.t0 = t.catch(2), this.showPop = !1;

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 2, 11 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    previewImage: function(e) {
                        t.previewImage({
                            current: e,
                            urls: this.imgTotalList
                        });
                    },
                    showMore: function() {
                        this.previewImage(2);
                    },
                    uploadFile: function() {
                        var e = this;
                        t.chooseMessageFile({
                            count: 10,
                            type: "file",
                            extension: [ "zip", "doc", "docx", "ppt", "pptx", "pdf", "xls", "xlsx" ],
                            success: function(t) {
                                var a = t.tempFiles, n = a.map(function(t) {
                                    return o.foundation.uploadFileSync(t.path).catch(function(t) {
                                        return t;
                                    });
                                });
                                try {
                                    Promise.all(n).then(function(t) {
                                        t.map(function(t) {
                                            if (t.statusCode && t.data) if (200 !== parseInt(t.statusCode, 10)) o.tip.error("文件上传失败"); else {
                                                var e = t.data;
                                                if (0 !== parseInt(e.status, 10)) return o.tip.error("文件上传失败");
                                            }
                                            return "";
                                        }), e.fileList = a.map(function(e, a) {
                                            return {
                                                size: e.size,
                                                type: 2,
                                                filename: e.name,
                                                ext: e.name.substring(parseInt(e.name.lastIndexOf("."), 10) + 1, e.name.length),
                                                file: t[a] && t[a].data && t[a].data.data && t[a].data.data.url
                                            };
                                        }), e.customComplete(e.fileList);
                                    });
                                } catch (t) {
                                    e.showPop = !1;
                                }
                            },
                            fail: function() {}
                        });
                    },
                    downloadFile: function(e) {
                        t.getNetworkType({
                            success: function(t) {
                                "none" === t.networkType && o.tip.toast("请检查网络", "", "none");
                            }
                        }), t.showLoading({
                            title: "下载中..."
                        }), t.downloadFile({
                            url: e,
                            success: function(a) {
                                if (t.hideLoading(), 200 === a.statusCode) {
                                    o.tip.toast("下载成功", "", "none");
                                    var n = a.tempFilePath, i = e.substring(e.lastIndexOf(".") + 1);
                                    i = i.toLowerCase(), [ "jpg", "jpeg", "png", "dwg", "gif" ].includes(i) && t.previewImage({
                                        current: n,
                                        urls: [ n ]
                                    }), [ "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx" ].includes(i) && t.openDocument({
                                        filePath: n,
                                        fail: function() {
                                            o.tip.toast("打开文件失败", "", "none");
                                        }
                                    }), [ "zip", "rar" ].includes(i);
                                } else o.tip.toast(a.errMsg, "", "none");
                            },
                            fail: function() {
                                t.hideLoading(), o.tip.toast("下载失败", "", "none");
                            }
                        });
                    },
                    customComplete: function(t) {
                        var e = this;
                        s.default.customComplete(this.taskId, t).then(function() {
                            e.showPop = !1, e.taskDetail.can_upload = !1, e.loadData();
                        });
                    },
                    uploadImg: function() {
                        var t = d(n.default.mark(function t() {
                            var e;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.foundation.chooseImageSync({
                                        num: 6
                                    });

                                  case 2:
                                    return e = t.sent, t.next = 5, this.upLoadImage(e.tempFilePaths);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    toList: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/taskAchievement?taskId=".concat(this.taskId)
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, a("543d").default);
    },
    da8a: function(t, e, a) {
        "use strict";
        var n = a("39f51");
        a.n(n).a;
    },
    fe4a: function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("6cdc"), e(a("66fd")), t(e(a("09bb")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "fe4a", "common/runtime", "common/vendor" ] ] ]);