require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/yearReportDetail" ], {
    "12e8": function(t, e, a) {},
    "4c83": function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(t) {
                t.stopPropagation();
            });
        }, i = [];
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {});
    },
    5075: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("851f"), i = a.n(n);
        for (var c in n) "default" !== c && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = i.a;
    },
    7523: function(t, e, a) {
        "use strict";
        var n = a("12e8");
        a.n(n).a;
    },
    "851f": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(a("a34a")), i = o(a("4ec3")), c = a("b628"), u = o(a("4123"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, a, n, i, c, u) {
                try {
                    var o = t[c](u), r = o.value;
                } catch (t) {
                    return void a(t);
                }
                o.done ? e(r) : Promise.resolve(r).then(n, i);
            }
            var s = 0, d = 0, g = t.createInnerAudioContext(), h = [ "https://imgcdn.huanjutang.com/image/2020/12/30/0696e4ec503de1be6618012ed7853825.png", "https://imgcdn.huanjutang.com/image/2020/12/24/acfd397a4533fa0f1097519d89cbbbf7.png", "https://imgcdn.huanjutang.com/image/2020/12/30/f603741310711647d6a62a52c64d0a7a.png", "https://imgcdn.huanjutang.com/image/2020/12/28/e9f017841ec6b1ccd816594bf9ade0a9.png", "https://imgcdn.huanjutang.com/image/2020/12/28/6e35efdc7a9d37e828cc39556a64148a.png", "https://imgcdn.huanjutang.com/image/2020/12/28/ac5cf0cdb39d684381eef15f5faaeaa2.png", "https://imgcdn.huanjutang.com/image/2020/12/28/bfd709c11045f9ea66ebce7e115b2a72.png", "https://imgcdn.huanjutang.com/image/2020/12/28/5d51adc1ce42b4422549b37056b32a0a.png", "https://imgcdn.huanjutang.com/image/2020/12/28/920aab18982272594bdf1dde36c38126.png", "https://imgcdn.huanjutang.com/file/2021/01/15/a5c58d4d4261e31d1c5487bc6e2b84ee.png", "https://imgcdn.huanjutang.com/image/2020/12/30/381fc043130eb5b9342b1b497e8ad59c.png", "https://imgcdn.huanjutang.com/image/2020/12/30/9447e27c209a9e1978e80b45b0963d3d.png" ], f = [ "https://imgcdn.huanjutang.com/image/2020/12/30/ef61f57be6ae08a5ebd66eaf96188294.png", "https://imgcdn.huanjutang.com/image/2020/12/31/4aaa731f0da3e729904dce44c9ea1275.png", "https://imgcdn.huanjutang.com/image/2020/12/29/eff20610e2736939b142121d73c3d54c.png", "https://imgcdn.huanjutang.com/image/2020/12/29/2b465581fa7d4f28372ec5678ea226cc.png", "https://imgcdn.huanjutang.com/image/2021/01/06/c8ceea3412e31acc39167fb083abb0c7.png", "https://imgcdn.huanjutang.com/image/2020/12/29/225bf6d761436e728e821aff49e1b69a.png", "https://imgcdn.huanjutang.com/image/2020/12/28/bfd709c11045f9ea66ebce7e115b2a72.png", "https://imgcdn.huanjutang.com/image/2020/12/28/5d51adc1ce42b4422549b37056b32a0a.png", "https://imgcdn.huanjutang.com/image/2020/12/28/920aab18982272594bdf1dde36c38126.png", "https://imgcdn.huanjutang.com/file/2021/01/15/a5c58d4d4261e31d1c5487bc6e2b84ee.png", "https://imgcdn.huanjutang.com/image/2020/12/30/381fc043130eb5b9342b1b497e8ad59c.png", "https://imgcdn.huanjutang.com/image/2020/12/30/e452e79568b2d4c453b14881172537b4.png" ], m = {
                components: {
                    BusiNavHeader: function() {
                        a.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(a("5ed7"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    ShareTimelineLayout: function() {
                        a.e("components/ShareTimelineLayout").then(function() {
                            return resolve(a("0bd0"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                mixins: [ u.default ],
                data: function() {
                    return {
                        uInfo: {},
                        wishValue: "",
                        agreeVal: [ "isAgree" ],
                        bgArr: h,
                        musicState: 1,
                        audioBtnBg: "https://imgcdn.huanjutang.com/image/2020/12/29/7335551110b2c3371a27bce6249444a7.png",
                        isAgree: 1,
                        playState: 0,
                        reportData: [],
                        showLoading: !1
                    };
                },
                onShareTimeline: function() {
                    var t = this.shareTimelineParam.title || "房小团", e = this.shareTimelineParam.share_image;
                    return c.share.shareTimeline(t, {
                        shareTimeline: this.shareTimelineParam.content_image,
                        share_id: this.userInfo.id
                    }, e);
                },
                onLoad: function() {
                    var e = function(t) {
                        return function() {
                            var e = this, a = arguments;
                            return new Promise(function(n, i) {
                                var c = t.apply(e, a);
                                function u(t) {
                                    r(c, n, i, u, o, "next", t);
                                }
                                function o(t) {
                                    r(c, n, i, u, o, "throw", t);
                                }
                                u(void 0);
                            });
                        };
                    }(n.default.mark(function e() {
                        var a, c;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (t.getStorageSync("isFirstJoin2020")) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 4, i.default.activity.reportComplete(this.activityId, "report");

                              case 4:
                                a = e.sent, (c = a.data) && c.accumulated_points && (this.wishValue = c.accumulated_points || 0), 
                                t.setStorageSync("isFirstJoin2020", !0);

                              case 8:
                                g.autoplay = !0, g.loop = !0, g.src = "https://imgcdn.huanjutang.com/file/2021/01/05/e2a82d6d7777a6c175b67f2b3d8dfbde.mp3", 
                                g.play(), this.getUserType();

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onShow: function() {
                    1 === this.musicState && g.play();
                },
                onHide: function() {
                    g.stop();
                },
                onUnload: function() {
                    g.stop();
                },
                methods: {
                    changeAgree: function(t) {
                        this.agreeVal = t.detail.value, this.agreeVal && this.agreeVal.length > 0 ? this.isAgree = 1 : this.isAgree = 0;
                    },
                    getUserType: function() {
                        var t = this;
                        i.default.activity.reportUserInfo(this.activityId).then(function(e) {
                            t.uInfo = e.data && e.data.user_info, t.wishValue = e.data && e.data.home_images.report_new, 
                            t.bgArr = 1 === e.data.user_info.user_type ? h : f, t.getReportData(e.data.user_info.user_type);
                        });
                    },
                    getReportData: function(t) {
                        var e = this;
                        1 === t ? i.default.activity.yearlyUser().then(function(t) {
                            e.reportData = t.data;
                        }) : i.default.activity.yearlySalesman().then(function(t) {
                            e.reportData = t.data;
                        });
                    },
                    toJoinActivity: function() {
                        this.playState = 1;
                    },
                    changePlayState: function() {
                        1 === this.musicState ? (this.musicState = 0, g.stop(), this.audioBtnBg = "https://imgcdn.huanjutang.com/image/2020/12/29/c8ffebfd813354b2a158363544adbb45.png") : (this.musicState = 1, 
                        g.play(), this.audioBtnBg = "https://imgcdn.huanjutang.com/image/2020/12/29/7335551110b2c3371a27bce6249444a7.png");
                    },
                    pageChange: function(t) {
                        var e = t.detail.current;
                        this.playState = e;
                    },
                    createCanvas: function() {
                        t.navigateTo({
                            url: "/subPackages/tools/pages/canvasYearActivity?userType=".concat(this.uInfo.user_type, "&wishValue=").concat(this.uInfo.accumulated_points, "&keywordImg=").concat(this.wishValue, "&type=report")
                        });
                    },
                    touchStart: function(t) {
                        s = t.touches[0].clientY;
                    },
                    touchMove: function(t) {
                        d = s - t.touches[0].clientY;
                    },
                    touchEnd: function() {
                        if (this.showLoading = 0 === this.reportData.length, this.showLoading) return !1;
                        if (d > 100) {
                            if (0 === this.playState && 0 === this.isAgree) return c.tip.toast("需要勾选同意", "", "none", 3e3), 
                            d = 0, !1;
                            if (this.playState > 8) return !1;
                            this.playState += 1;
                        } else if (d < -50) {
                            if (0 === this.playState) return !1;
                            this.playState -= 1;
                        }
                        return d = 0, "";
                    }
                }
            };
            e.default = m;
        }).call(this, a("543d").default);
    },
    "90a5": function(t, e, a) {},
    a15b: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("4c83"), i = a("5075");
        for (var c in i) "default" !== c && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(c);
        a("7523"), a("de3e");
        var u = a("f0c5"), o = Object(u.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = o.exports;
    },
    b793: function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("6cdc"), e(a("66fd")), t(e(a("a15b")).default);
        }).call(this, a("543d").createPage);
    },
    de3e: function(t, e, a) {
        "use strict";
        var n = a("90a5");
        a.n(n).a;
    }
}, [ [ "b793", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);