require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/salesManInfo" ], {
    "0a37": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("a587"), s = n("d3bf");
        for (var i in s) "default" !== i && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(i);
        n("6682");
        var r = n("f0c5"), o = Object(r.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "38aa": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(n("a34a")), s = r(n("4ec3")), i = n("b628");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], a = !0, s = !1, i = void 0;
                        try {
                            for (var r, o = t[Symbol.iterator](); !(a = (r = o.next()).done) && (n.push(r.value), 
                            !e || n.length !== e); a = !0) ;
                        } catch (t) {
                            s = !0, i = t;
                        } finally {
                            try {
                                a || null == o.return || o.return();
                            } finally {
                                if (s) throw i;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function l(t, e, n, a, s, i, r) {
                try {
                    var o = t[i](r), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, s);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, s) {
                        var i = t.apply(e, n);
                        function r(t) {
                            l(i, a, s, r, o, "next", t);
                        }
                        function o(t) {
                            l(i, a, s, r, o, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var h = n("f4fd"), f = {
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        salesMan_id: "",
                        projectList: [],
                        projectName: [],
                        index: 0,
                        project_id: "",
                        project_name: "",
                        salesManInfo: {},
                        content: [],
                        shareTitle: "我在这里入驻楼盘",
                        weapp: "",
                        salesManListWidth: 0,
                        salesManBanners: [],
                        showInviteView: !1,
                        isShare: !1,
                        drawCanvas: !1,
                        canvasHeight: 0,
                        canvasWidth: 0
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share(this.shareTitle, "/subPackages/me/pages/salesMan?inviter_id=".concat(this.salesMan_id));
                },
                onPullDownRefresh: function() {
                    var t = u(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload.call(this);

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
                onLoad: function() {
                    var t = u(a.default.mark(function t(e) {
                        var n, r, o = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return (n = i.cache.get("userinfo") || {}) && (this.weapp = '{"nickName": "'.concat(n.nickName, '", "city": "').concat(n.city, '"}')), 
                                this.salesMan_id = e.id, h.getGlobalConfig().then(function(t) {
                                    o.salesManBanners = t.salesManBanners;
                                }), t.next = 6, s.default.getProjectListWithUser(this.project_id);

                              case 6:
                                return r = t.sent, this.projectList = r.data, this.projectList.forEach(function(t) {
                                    t.sales_man_id === o.salesMan_id && (o.project_name = t.project_name, o.project_id = t.project_id), 
                                    o.projectName.push(t.project_name);
                                }), this.project_id || (this.project_id = r.data[0] && r.data[0].project_id), t.next = 12, 
                                this.reload.call(this);

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    goToUrl: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    changeProject: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/changeEnterProject?project_id=".concat(e)
                        });
                    },
                    saveShareImage: function() {
                        var e = this;
                        return this.drawCanvas = !1, new Promise(function() {
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
                                            t && i.tip.success("保存成功");
                                        },
                                        fail: function() {
                                            i.tip.toast("保存失败", "", "none");
                                        }
                                    });
                                },
                                fail: function() {
                                    i.tip.toast("邀请码生成失败", "", "none");
                                }
                            });
                        });
                    },
                    inviteEnter: function() {
                        this.isShare = !0;
                    },
                    shareTo: function() {
                        var e = u(a.default.mark(function e() {
                            var n = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.isShare = !1, this.drawCanvas = !0, e.next = 4, this.drawImage().catch(function() {
                                        n.drawCanvas = !1, t.hideLoading(), i.tip.toast("邀请码生成失败", "", "none");
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
                    stopMove: function() {
                        return !1;
                    },
                    cancel: function() {
                        this.isShare = !1;
                    },
                    closeCanvas: function() {
                        this.drawCanvas = !1;
                    },
                    toUrl: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/salesPersonInfo?id=".concat(this.salesMan_id)
                        });
                    },
                    changeShareTitle: function(t) {
                        var e = t.detail.formId;
                        s.default.sendFromID(e).then(function() {}), this.shareTitle = "这里有很多用户，快来和我一起入驻吧！";
                    },
                    showProjectList: function() {
                        var e = u(a.default.mark(function e() {
                            var n, s = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n = getApp(), t.showActionSheet({
                                        itemList: this.projectName,
                                        success: function() {
                                            var e = u(a.default.mark(function e(i) {
                                                var r;
                                                return a.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return r = i.tapIndex, t.setStorageSync("sales_man_id", s.projectList[r].sales_man_id), 
                                                        s.project_name = s.projectList[r].project_name, s.project_id = s.projectList[r] && s.projectList[r].project_id, 
                                                        s.salesMan_id = s.projectList[r].sales_man_id, e.next = 7, s.reload.call(s);

                                                      case 7:
                                                        n.refresh_me = !0;

                                                      case 8:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }()
                                    });

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
                    reload: function() {
                        var e = u(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, s.default.salesManDetail2(this.project_id);

                                  case 3:
                                    n = e.sent, this.salesManInfo = n.data, this.salesManListWidth = 340 * n.data.project_results.length, 
                                    this.salesManInfo.advantage && (this.content = this.salesManInfo.advantage.split("\n")), 
                                    this.content.map(function(t) {
                                        return t.replace(/(\s*)/g, "");
                                    }), t.stopPullDownRefresh(), t.hideLoading();

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
                    drawImage: function() {
                        var e = u(a.default.mark(function e() {
                            var n, r, c, l, u, h, f, d, p, v, g, m, w, y, b, _, S, j, x, F = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return f = function(t, e, n) {
                                        for (var a = 0; a < e.length; a += 1) t.setFontSize(18 * l), t.setTextBaseline("top"), 
                                        t.setFillStyle("#d2b899"), t.fillText(e[a], n - 20, 50 * l + 12 * a);
                                    }, h = function(t, e) {
                                        try {
                                            this.$report.report.__reportErrorReq({
                                                errMsg: t,
                                                error: JSON.stringify(e, Object.getOwnPropertyNames(e)),
                                                path: "subPackages/me/pages/salesManInfo",
                                                params: {
                                                    is_broker: n.salesManInfo.is_broker,
                                                    salesMan_id: n.salesMan_id
                                                }
                                            }, [ "posterErr" ]);
                                        } catch (t) {
                                            console.error(t);
                                        }
                                    }, t.showLoading({
                                        title: "生成中..."
                                    }), n = this, r = t.getSystemInfoSync(), c = r.windowWidth, l = c / 690, this.canvasWidth = 690 * l * .9, 
                                    this.canvasHeight = 1334 * l * .7, e.next = 8, s.default.sales.shareQrCode(this.salesManInfo.id);

                                  case 8:
                                    return u = e.sent, e.prev = 9, e.next = 12, Promise.all([ this.downloadFile(this.salesManInfo.avatar_url), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181112/5be92c4123e50.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181113/5bea8fe4da199.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181113/5bea8ff1a1b3b.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20181113/5bea8ffae97a8.png"), this.downloadFile(u.data) ]).catch(function(e) {
                                        t.hideLoading(), i.tip.toast("专属邀请码生成失败", "", "none"), h("资源预下载异常", {
                                            err: JSON.stringify(e),
                                            params: {
                                                avatar: v,
                                                cover: g,
                                                jin: m,
                                                yin: w,
                                                tong: y,
                                                qrCode: b
                                            }
                                        }), F.drawCanvas = !1;
                                    });

                                  case 12:
                                    d = e.sent, p = o(d, 6), v = p[0], g = p[1], m = p[2], w = p[3], y = p[4], b = p[5], 
                                    v && g && m && w && y && b && (_ = {
                                        3: m,
                                        2: w,
                                        1: y
                                    }, (S = t.createCanvasContext("myCanvas")).drawImage(g, 0, 0, this.canvasWidth, this.canvasHeight), 
                                    S.save(), S.arc(60 * l + 120 * l / 2, 50 * l + 120 * l / 2, 60 * l, 0, 2 * Math.PI, !1), 
                                    S.clip(), S.drawImage(v, 60 * l, 50 * l, 120 * l, 120 * l), S.restore(), j = 100 * l, 
                                    S.setFontSize(34 * l), S.setFillStyle("#1a1a1a"), S.fillText(this.salesManInfo.name, 205 * l, j), 
                                    S.drawImage(_[this.salesManInfo.grade], 205 * l, j + 27 * l, 21 * l, 28 * l), j += 50 * l, 
                                    S.setFontSize(24 * l), S.setFillStyle("#666"), S.fillText("置业顾问", 240 * l, j), f(S, "杭州房小团", this.canvasWidth), 
                                    j += 110 * l, S.setFontSize(40 * l), S.setFillStyle("#b3752b"), S.setTextAlign("center"), 
                                    S.fillText("我在这里", this.canvasWidth / 2, j), j += 73 * l, S.setFontSize(40 * l), 
                                    S.setFillStyle("#b3752b"), S.setTextAlign("center"), S.fillText("等着你们一起入驻", this.canvasWidth / 2, j), 
                                    x = (this.canvasWidth - 300 * l) / 2, j += 97 * l, S.drawImage(b, x, j, 300 * l, 300 * l), 
                                    S.setFontSize(20 * l), S.setFillStyle("#c6955f"), S.setTextAlign("center"), S.fillText("扫码和我一起入驻杭州房小团", this.canvasWidth / 2, this.canvasHeight - 150 * l), 
                                    S.setFontSize(34 * l), S.setFillStyle("#b3752b"), S.fillText(this.salesManInfo.like_num, 90 * l, this.canvasHeight - 100 * l), 
                                    S.setFontSize(20 * l), S.setFillStyle("#666"), S.fillText("点赞", 90 * l, this.canvasHeight - 60 * l), 
                                    S.setFontSize(34 * l), S.setFillStyle("#b3752b"), S.fillText(this.salesManInfo.recommend_index, this.canvasWidth / 2 - 80 * l, this.canvasHeight - 100 * l), 
                                    S.setFontSize(20 * l), S.setFillStyle("#666"), S.fillText("活跃度", this.canvasWidth / 2 - 80 * l, this.canvasHeight - 60 * l), 
                                    S.setFontSize(34 * l), S.setFillStyle("#b3752b"), S.fillText(this.salesManInfo.consulting, this.canvasWidth / 2 + 80 * l, this.canvasHeight - 100 * l), 
                                    S.setFontSize(20 * l), S.setFillStyle("#666"), S.fillText("咨询量", this.canvasWidth / 2 + 80 * l, this.canvasHeight - 60 * l), 
                                    S.setFontSize(34 * l), S.setFillStyle("#b3752b"), S.fillText(this.salesManInfo.page_views, this.canvasWidth - 90 * l, this.canvasHeight - 100 * l), 
                                    S.setFontSize(20 * l), S.setFillStyle("#666"), S.fillText("浏览量", this.canvasWidth - 90 * l, this.canvasHeight - 60 * l), 
                                    S.draw()), t.hideLoading(), e.next = 30;
                                    break;

                                  case 24:
                                    e.prev = 24, e.t0 = e.catch(9), i.tip.toast("专属邀请码生成失败", "", "none"), h("生成时异常", e.t0), 
                                    this.drawCanvas = !1, t.hideLoading();

                                  case 30:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 9, 24 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    downloadFile: function(e) {
                        return new Promise(function(n, a) {
                            if (e) {
                                var s = e.replace(/^http:/, "https:");
                                t.downloadFile({
                                    url: s,
                                    success: function(t) {
                                        n(t.tempFilePath);
                                    },
                                    fail: function(t) {
                                        a(t);
                                    }
                                });
                            } else a(new Error("下载对象里面没有路径"));
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    6682: function(t, e, n) {
        "use strict";
        var a = n("df5b");
        n.n(a).a;
    },
    9373: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("0a37")).default);
        }).call(this, n("543d").createPage);
    },
    a587: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    },
    d3bf: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("38aa"), s = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = s.a;
    },
    df5b: function(t, e, n) {}
}, [ [ "9373", "common/runtime", "common/vendor" ] ] ]);