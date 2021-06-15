(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/wikis/pages/list" ], {
    "0c12": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("ab34"), s = i.n(n);
        for (var a in n) "default" !== a && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = s.a;
    },
    1616: function(t, e, i) {},
    "8dcc": function(t, e, i) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, s = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return s;
        }), i.d(e, "a", function() {});
    },
    ab34: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(i("a34a")), s = o(i("4ec3")), a = i("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, i, n, s, a, o) {
                try {
                    var r = t[a](o), c = r.value;
                } catch (t) {
                    return void i(t);
                }
                r.done ? e(c) : Promise.resolve(c).then(n, s);
            }
            function c(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, s) {
                        var a = t.apply(e, i);
                        function o(t) {
                            r(a, n, s, o, c, "next", t);
                        }
                        function c(t) {
                            r(a, n, s, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var u = {
                components: {
                    WikiItem: function() {
                        i.e("subPackages/wikis/pages/component/WikiItem").then(function() {
                            return resolve(i("9c15"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                data: function() {
                    return {
                        tempFilePath: "",
                        writePhotoAuth: !1,
                        showPermissionsSetting: !1,
                        contentType: 1,
                        swiperHieght: 0,
                        cId: 0,
                        selIndex: 0,
                        selContIndex: 0,
                        activeIndex: 0,
                        cacheList: [],
                        tabTypes: [],
                        more: !0,
                        loading: !0,
                        typeName: ""
                    };
                },
                destroyed: function() {},
                onLoad: function(e) {
                    var i = e.cId;
                    this.cId = i, this.contentType = e.type, this.typeName = e.typeName || "百科列表", this.getSubCategory(this.cId), 
                    t.setNavigationBarTitle({
                        title: this.typeName
                    });
                },
                onReachBottom: function() {
                    this.cacheList[this.selIndex].page += 1, this.loadData(this.selIndex);
                },
                methods: {
                    openSetting: function(t) {
                        this.showPermissionsSetting = !1, t.detail.authSetting["scope.writePhotosAlbum"] && (this.writePhotoAuth = !0);
                    },
                    closePermissionsHandle: function() {
                        this.showPermissionsSetting = !1, this.drawCanvas = !1;
                    },
                    previewImg: function(e) {
                        t.previewImage({
                            urls: [ e.cover_img ]
                        });
                    },
                    downLoadFileImg: function() {
                        var e = c(n.default.mark(function e(i) {
                            var s, o;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return s = i.attachments[0].url, o = this, e.next = 4, this.checkWriteAlbumAuth();

                                  case 4:
                                    this.writePhotoAuth = e.sent, this.writePhotoAuth ? t.downloadFile({
                                        url: s,
                                        success: function(e) {
                                            var i = e.tempFilePath;
                                            t.saveImageToPhotosAlbum({
                                                filePath: i,
                                                success: function() {
                                                    "authorize:ok" === e.errMsg && a.tip.toast("保存成功");
                                                }
                                            });
                                        }
                                    }).onProgressUpdate(function(e) {
                                        t.showLoading({
                                            title: "".concat(e.progress, "%")
                                        }), 100 === Math.floor(e.progress) && (t.hideLoading(), a.tip.toast("保存成功"));
                                    }) : t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function(t) {
                                            "authorize:ok" === t.errMsg && a.tip.toast("保存成功");
                                        },
                                        fail: function(t) {
                                            "authorize:fail auth deny" !== t.errMsg && (o.showPermissionsSetting = !0);
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
                    },
                    downloadFile: function(e) {
                        var i = e.attachments;
                        if (i.length) {
                            t.getNetworkType({
                                success: function(t) {
                                    "none" === t.networkType && a.tip.toast("请检查网络", "", "none");
                                }
                            });
                            var n = i[0];
                            t.showLoading({
                                title: "下载中..."
                            }), t.downloadFile({
                                url: n.url,
                                success: function(e) {
                                    if (t.hideLoading(), 200 === e.statusCode) {
                                        a.tip.toast("下载成功", "", "none");
                                        var i = e.tempFilePath, s = n.url.substring(n.url.lastIndexOf(".") + 1);
                                        s = s.toLowerCase(), [ "jpg", "jpeg", "png", "dwg", "gif" ].includes(s) && t.previewImage({
                                            current: i,
                                            urls: [ i ]
                                        }), [ "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx" ].includes(s) && t.openDocument({
                                            filePath: i,
                                            fail: function() {
                                                a.tip.toast("打开文件失败", "", "none");
                                            }
                                        }), [ "zip", "rar" ].includes(s);
                                    } else a.tip.toast(e.errMsg, "", "none");
                                },
                                fail: function() {
                                    t.hideLoading(), a.tip.toast("下载失败", "", "none");
                                }
                            }), s.default.wiki.wikiDetail(e.id);
                        } else a.tip.toast("文件不存在", "", "none");
                    },
                    getSubCategory: function() {
                        var t = c(n.default.mark(function t(e) {
                            var i, a;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.wiki.subCategoryList(e);

                                  case 2:
                                    if (0 === (i = t.sent).code) {
                                        for (this.tabTypes = i.data, a = 0; a < this.tabTypes.length; a += 1) this.cacheList.push({
                                            subcategory_id: this.tabTypes[a].id,
                                            page: 1,
                                            page_size: 10,
                                            category_id: this.cId,
                                            list: [],
                                            firstLoaded: !1
                                        });
                                        this.tabTypes.length && this.loadData(this.selIndex);
                                    }

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    handleCheck: function(t) {
                        var e = this;
                        this.activeIndex = t, this.$nextTick(function() {
                            e.selIndex = t, e.selContIndex = t;
                        });
                    },
                    loadData: function() {
                        var t = c(n.default.mark(function t(e) {
                            var i, a;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return i = this.cacheList[e], t.next = 3, s.default.wiki.wikiList({
                                        page: i.page,
                                        page_size: i.page_size,
                                        category_id: i.cId,
                                        subcategory_id: i.subcategory_id
                                    });

                                  case 3:
                                    0 === (a = t.sent).code && a.data && (this.cacheList[e].list = this.cacheList[e].list.concat(a.data.data), 
                                    i.page > a.data.last_page && (this.cacheList[e].page = a.data.last_page)), this.swiperHeightAuto(e);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    swiperHeightAuto: function(t) {
                        var e;
                        e = 1 === Math.floor(this.contentType) ? 248 * this.cacheList[t].list.length : 254 * this.cacheList[t].list.length, 
                        this.swiperHieght = "".concat(e, "rpx");
                    },
                    swiperChange: function() {
                        var t = c(n.default.mark(function t(e) {
                            var i;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return i = e.detail.current, this.activeIndex = i, t.next = 4, this.$nextTick();

                                  case 4:
                                    this.selIndex = i, this.selContIndex = i, this.cacheList[i].list.length || this.loadData(i), 
                                    this.swiperHeightAuto(i);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    addCache: function() {
                        this.projectsAll[this.selIndex] = [].concat(this.projects), this.pageAll[this.selIndex] = this.param.page, 
                        this.loadingAll[this.selIndex] = this.loading, this.moreAll[this.selIndex] = this.more;
                    },
                    getCache: function() {
                        return {
                            projects: this.projectsAll[this.selIndex] || [],
                            page: this.pageAll[this.selIndex],
                            more: this.moreAll[this.selIndex],
                            loading: this.loadingAll[this.selIndex]
                        };
                    }
                }
            };
            e.default = u;
        }).call(this, i("543d").default);
    },
    ae48: function(t, e, i) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("e289")).default);
        }).call(this, i("543d").createPage);
    },
    b3a0: function(t, e, i) {
        "use strict";
        var n = i("1616");
        i.n(n).a;
    },
    e289: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("8dcc"), s = i("0c12");
        for (var a in s) "default" !== a && function(t) {
            i.d(e, t, function() {
                return s[t];
            });
        }(a);
        i("b3a0");
        var o = i("f0c5"), r = Object(o.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    }
}, [ [ "ae48", "common/runtime", "common/vendor" ] ] ]);