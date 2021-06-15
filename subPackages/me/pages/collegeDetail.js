require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/collegeDetail" ], {
    "09f1": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("2fc1"), a = n("e2a2");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("4b8b");
        var r = n("f0c5"), u = Object(r.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = u.exports;
    },
    1213: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("09f1")).default);
        }).call(this, n("543d").createPage);
    },
    "2fc1": function(t, e, n) {
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
    "4b8b": function(t, e, n) {
        "use strict";
        var i = n("91c3");
        n.n(i).a;
    },
    "91c3": function(t, e, n) {},
    dfeb: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = c(n("a34a")), a = c(n("c909")), o = c(n("4ec3")), r = n("b628"), u = n("ca00");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, i, a, o, r) {
                try {
                    var u = t[o](r), c = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(i, a);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, a) {
                        var o = t.apply(e, n);
                        function r(t) {
                            s(o, i, a, r, u, "next", t);
                        }
                        function u(t) {
                            s(o, i, a, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        id: 0,
                        info: {
                            content: ""
                        },
                        isShared: null,
                        currentVideoSrc: null,
                        playing: !1,
                        loaded: !1,
                        isSalesMan: !1,
                        isIphoneX: u.isIPhoneX
                    };
                },
                onLoad: function() {
                    var t = d(i.default.mark(function t(e) {
                        var n, r, u, c;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!(n = e).hid) {
                                    t.next = 6;
                                    break;
                                }
                                return t.next = 4, o.default.getDecodeHashParams(n.hid);

                              case 4:
                                (r = t.sent) && r.data && (n = r ? (0, a.default)("?".concat(decodeURIComponent(r.data.path))).search(!0) : n);

                              case 6:
                                return u = n.id, this.id = u, this.isShared = n.isShared || null, this.loadData(u), 
                                t.next = 12, o.default.isSaleMan();

                              case 12:
                                (c = t.sent) && c.data && (this.isSalesMan = 1 === Math.floor(c.data));

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                onShareAppMessage: function() {
                    return {};
                },
                methods: {
                    playVideo: function(e) {
                        var n = this;
                        this.currentVideoSrc = e.url;
                        var i = t.createVideoContext("video", this);
                        setTimeout(function() {
                            i.exitFullScreen(), i.play(), n.playing = !0;
                        }, 400);
                    },
                    downloadFile: function(e) {
                        t.getNetworkType({
                            success: function(t) {
                                "none" === t.networkType && r.tip.toast("请检查网络", "", "none");
                            }
                        }), t.showLoading({
                            title: "下载中..."
                        }), t.downloadFile({
                            url: e.url,
                            success: function(n) {
                                if (t.hideLoading(), 200 === n.statusCode) {
                                    r.tip.toast("下载成功", "", "none");
                                    var i = n.tempFilePath, a = e.url.substring(e.url.lastIndexOf(".") + 1);
                                    a = a.toLowerCase(), [ "jpg", "jpeg", "png", "dwg", "gif" ].includes(a) && t.previewImage({
                                        current: i,
                                        urls: [ i ]
                                    }), [ "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx" ].includes(a) && t.openDocument({
                                        filePath: i,
                                        fail: function() {
                                            r.tip.toast("打开文件失败", "", "none");
                                        }
                                    });
                                } else r.tip.toast(n.errMsg, "", "none");
                            },
                            fail: function() {
                                t.hideLoading(), r.tip.toast("下载失败", "", "none");
                            }
                        });
                    },
                    loadData: function() {
                        var e = d(i.default.mark(function e(n) {
                            var a;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading(), e.next = 3, o.default.wiki.wikiDetail(n);

                                  case 3:
                                    a = e.sent, t.hideLoading(), this.loaded = !0, 0 === a.code && (this.info = a.data, 
                                    this.info.medias.length && (this.currentVideoSrc = this.info.medias[0].url));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    vote: function(t) {
                        var e = this;
                        this.info.had_vote ? r.tip.toast("您已经点过了", "", "none") : o.default.wiki.wikiVote(this.info.id, t).then(function() {
                            r.tip.toast("操作成功", "", "none"), e.loadData(e.id);
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    e2a2: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("dfeb"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    }
}, [ [ "1213", "common/runtime", "common/vendor" ] ] ]);