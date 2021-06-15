require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/yearEndActivityDetail" ], {
    1292: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4ec9"), i = n("6d0e");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("d4b70");
        var r = n("f0c5"), o = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "4ec9": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    5910: function(t, e, n) {},
    "6b03": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("1292")).default);
        }).call(this, n("543d").createPage);
    },
    "6d0e": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("9233"), i = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = i.a;
    },
    9233: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(n("a34a")), i = c(n("b458")), s = c(n("c909")), r = c(n("4ec3")), o = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, a, i, s, r) {
                try {
                    var o = t[s](r), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, i);
            }
            function h(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var s = t.apply(e, n);
                        function r(t) {
                            u(s, a, i, r, o, "next", t);
                        }
                        function o(t) {
                            u(s, a, i, r, o, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var d = {
                mixins: [ i.default ],
                data: function() {
                    return {
                        shared: !1,
                        typeName: "",
                        shareShow: !1,
                        followModelShow: !1,
                        saveToPhotosAlbum: !1,
                        drawCanvas: !1,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        canvasIndex: 0,
                        drawContext: null,
                        canvasLength: 0,
                        projectName: "",
                        type: 1,
                        cont: 1,
                        canvassing: !1,
                        id: "1",
                        vote_id: "1",
                        details: [],
                        is_share: "",
                        share_in: 2,
                        backHomeUrl: "/subPackages/activity/pages/yearEndActivity",
                        backHomeText: "活动首页",
                        backHomeOpenType: "navigate",
                        backHomeBottom: 130,
                        posterData: {
                            projectName: "",
                            projectCover: "",
                            projectVote: "",
                            projectNumber: ""
                        },
                        hidePoster: !0,
                        posterIndex: 0,
                        voteSuccess: !1,
                        RemainNum: 0,
                        weapp: {
                            nickName: "",
                            city: ""
                        },
                        endTime: "",
                        voteStop: !1,
                        time: null,
                        number: "",
                        saved: !1,
                        writePhotoAuth: !1,
                        showPermissionsSetting: !1,
                        voteSuccessTimer: null
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("我是".concat(this.details.number, "号").concat(this.projectName, "，请帮我投票"));
                },
                onPullDownRefresh: function() {
                    var e = h(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

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
                onLoad: function() {
                    var e = h(a.default.mark(function e(n) {
                        var i, c, u, h, d, l = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!(i = n).hid) {
                                    e.next = 6;
                                    break;
                                }
                                return e.next = 4, r.default.getDecodeHashParams(i.hid);

                              case 4:
                                c = e.sent, i = c && c.data ? (0, s.default)("?".concat(decodeURIComponent(c.data.path))).search(!0) : i;

                              case 6:
                                return u = o.cache.get("userinfo") || {}, this.weapp = '{"nickName": "'.concat(u.nickName, '", "city": "').concat(u.city, '"}'), 
                                this.id = i.id, this.vote_id = i.vote_id, this.typeName = i.type, this.shared = !!i.shared, 
                                i.share_query && (this.share_in = 1), e.next = 15, this.reload();

                              case 15:
                                return t.setNavigationBarTitle({
                                    title: this.details.name
                                }), t.getSetting({
                                    success: function(t) {
                                        t.authSetting["scope.writePhotosAlbum"] || (l.saveToPhotosAlbum = !0);
                                    },
                                    fail: function() {
                                        l.saveToPhotosAlbum = !0;
                                    }
                                }), h = encodeURIComponent("/subPackages/activity/pages/yearEndActivityDetail?id=".concat(this.id, "&vote_id=").concat(this.vote_id, "&shared=1")), 
                                e.next = 20, r.default.getQrCode("/pages/index?redirect=".concat(encodeURIComponent(h)));

                              case 20:
                                d = e.sent, 0 === parseInt(d.code, 10) && (this.posterData.projectQrcode = d.data.qrcode);

                              case 22:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    stopMoveHandle: function() {},
                    closePemissions: function() {
                        this.showPermissionsSetting = !1;
                    },
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
                    goActivityIndexPage: function() {
                        t.redirectTo({
                            url: "/subPackages/activity/pages/projectVote"
                        });
                    },
                    closeChowCanvas: function() {
                        this.drawCanvas = !1;
                    },
                    goDetailPage: function() {
                        t.navigateTo({
                            url: this.details.url
                        });
                    },
                    showDialog: function() {
                        this.voteSuccess = !0;
                    },
                    hideDialog: function() {
                        this.voteSuccess = !1, clearTimeout(this.voteSuccessTimer), this.voteSuccess = null;
                    },
                    openSetting: function(t) {
                        this.showPermissionsSetting = !1, t.detail.authSetting["scope.writePhotosAlbum"] && (this.writePhotoAuth = !0);
                    },
                    saveShareImage: function() {
                        var e = this;
                        t.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: e.canvasWidth,
                            height: e.canvasHeight,
                            canvasId: "myCanvas1",
                            success: function(n) {
                                var a = n.tempFilePath;
                                t.saveImageToPhotosAlbum({
                                    filePath: a,
                                    success: function() {
                                        e.saved = !0;
                                    },
                                    fail: function() {
                                        o.tip.toast("保存失败", "", "none");
                                    }
                                });
                            },
                            fail: function() {
                                o.tip.toast("海报生成失败", "", "none");
                            }
                        });
                    },
                    createPosterHandle: function() {
                        var e = h(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.shareShow = !1, n = this, e.next = 4, this.checkWriteAlbumAuth.call(this);

                                  case 4:
                                    if (this.writePhotoAuth = e.sent, this.writePhotoAuth) {
                                        e.next = 9;
                                        break;
                                    }
                                    t.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            var e = h(a.default.mark(function e() {
                                                return a.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return n.writePhotoAuth = !0, e.next = 3, n.drawImage().then(function() {
                                                            n.drawCanvas = !0;
                                                        }).catch(function() {
                                                            n.drawCanvas = !1, t.hideLoading(), o.tip.toast("活动海报生成失败", "", "none");
                                                        });

                                                      case 3:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function() {
                                                return e.apply(this, arguments);
                                            };
                                        }(),
                                        fail: function(t) {
                                            "authorize:fail auth deny" !== t.errMsg && (n.iShowRegisterBg = !0, n.showPermissionsSetting = !0, 
                                            n.shareShow = !1);
                                        }
                                    }), e.next = 11;
                                    break;

                                  case 9:
                                    return e.next = 11, n.drawImage().then(function() {
                                        n.drawCanvas = !0;
                                    }).catch(function() {
                                        n.drawCanvas = !1, t.hideLoading(), o.tip.toast("活动海报生成失败", "", "none");
                                    });

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
                    toggleShareHandle: function(t) {
                        var e = t.currentTarget.dataset.toggle;
                        this.shareShow = "open" === e;
                    },
                    callPhone: function(e) {
                        t.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    previe: function(e) {
                        var n = e, a = [ e ];
                        n && a.length > 0 && t.previewImage({
                            current: n,
                            urls: a
                        });
                    },
                    previewImg: function(e) {
                        var n = e, a = this.details.img;
                        n && a.length > 0 && t.previewImage({
                            current: n,
                            urls: a
                        });
                    },
                    voteIn: function() {
                        var t = h(a.default.mark(function t() {
                            var e, n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.userVote(this.details.id, this.details.vote_id);

                                  case 2:
                                    e = t.sent, this.details.vote_num = e && e.data && e.data.num ? e.data.num : 0, 
                                    e && e.data && "投票成功" === e.data.data && (this.details.total_vote += 1, this.voteSuccess = !0, 
                                    this.voteSuccessTimer = setTimeout(function() {
                                        n.voteSuccess = !1;
                                    }, 3e3));

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
                    openDetails: function() {
                        this.type = 1 === parseInt(this.type, 10) ? "" : 1;
                    },
                    canvassingFun: function() {
                        this.canvassing = !0;
                    },
                    quxiao: function() {
                        this.canvassing = !1;
                    },
                    getDetails: function() {
                        var e = h(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, r.default.eventDetails(this.id, this.vote_id, this.is_share);

                                  case 3:
                                    n = e.sent, this.details = n.data, this.endTime = n.data.vote_end_time, this.number = this.details.number, 
                                    this.typeName = this.details.category_title, this.posterData.projectName = this.details.name, 
                                    this.projectName = this.posterData.projectName, this.posterData.projectCover = this.details.cover, 
                                    this.posterData.projectVote = this.details.total_vote, this.posterData.projectNumber = this.details.number, 
                                    t.hideLoading();

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    stopMove: function() {
                        return !1;
                    },
                    draw: function() {
                        var e = h(a.default.mark(function e() {
                            var n = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.canvassing = !1, this.hidePoster = !1, e.next = 4, this.drawPoster().catch(function() {
                                        n.hidePoster = !0, t.hideLoading(), o.tip.toast("楼盘海报生成失败", "", "none");
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    closePoster: function() {
                        this.hidePoster = !0;
                    },
                    switchPoster: function() {
                        var t = h(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.posterIndex >= this.canvasLength - 1 ? this.posterIndex = 0 : this.posterIndex += 1;

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    savePoster: function() {
                        var t = h(a.default.mark(function t() {
                            var e, n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.drawContext.saveCanvasToTempFile(this.posterIndex).catch(function() {
                                        n.hidePoster = !0, o.tip.toast("保存失败", "", "none");
                                    });

                                  case 2:
                                    e = t.sent, this.hidePoster = !0, e && o.tip.success("保存成功");

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
                    reload: function() {
                        var t = h(a.default.mark(function t() {
                            var e, n, i, s, r, o, c;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.voteStop = !1, t.next = 3, this.getDetails.call(this);

                                  case 3:
                                    this.endTime && (e = new Date(this.endTime.replace(/-/g, "/")).getTime(), n = new Date().getTime(), 
                                    i = (e - n) / 1e3, s = parseInt(i / 86400, 10), r = parseInt(i % 86400 / 3600, 10), 
                                    o = parseInt(i % 3600 / 60, 10), c = parseInt(i % 60, 10), r = r < 0 ? 0 : r, o = o < 0 ? 0 : o, 
                                    c = c < 0 ? 0 : c, 0 === (s = s < 0 ? 0 : s) && 0 === r && 0 === o && 0 === c && (this.voteStop = !0)), 
                                    this.computedEndTime();

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
                    computedEndTime: function() {
                        var t = this;
                        if (this.endTime) {
                            var e = new Date(this.endTime.replace(/-/g, "/")).getTime();
                            this.time && clearInterval(this.time), this.time = setInterval(function() {
                                var n = new Date().getTime(), a = (e - n) / 1e3, i = parseInt(a / 86400, 10), s = parseInt(a % 86400 / 3600, 10), r = parseInt(a % 3600 / 60, 10), o = parseInt(a % 60, 10);
                                s = s < 0 ? 0 : s, r = r < 0 ? 0 : r, o = o < 0 ? 0 : o, 0 === (i = i < 0 ? 0 : i) && 0 === s && 0 === r && 0 === o && (t.voteStop = !0, 
                                clearInterval(t.time));
                            }, 1e3);
                        }
                    },
                    downloadFile: function(e) {
                        return new Promise(function(n, a) {
                            e || o.tip.toast("下载对象里面没有路径", "", "none");
                            var i = e.replace(/^http:/, "https:");
                            t.downloadFile({
                                url: i,
                                success: function(t) {
                                    n(t.tempFilePath);
                                },
                                fail: function(t) {
                                    a(t);
                                }
                            });
                        });
                    }
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    d4b70: function(t, e, n) {
        "use strict";
        var a = n("5910");
        n.n(a).a;
    }
}, [ [ "6b03", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);