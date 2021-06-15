require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/component/projectPlanar/focusFooter" ], {
    "2bd7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("bb38"), r = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    },
    "95b1": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("fd8db"), r = n("2bd7");
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        n("f03a");
        var a = n("f0c5"), u = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "9f35": function(t, e, n) {},
    bb38: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = a(n("a34a")), r = a(n("4ec3")), c = n("b628");
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e, n, o, r, c, a) {
            try {
                var u = t[c](a), s = u.value;
            } catch (t) {
                return void n(t);
            }
            u.done ? e(s) : Promise.resolve(s).then(o, r);
        }
        function s(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, r) {
                    var c = t.apply(e, n);
                    function a(t) {
                        u(c, o, r, a, s, "next", t);
                    }
                    function s(t) {
                        u(c, o, r, a, s, "throw", t);
                    }
                    a(void 0);
                });
            };
        }
        var i = n("f4fd").getGlobalConfig, f = {
            components: {
                attentionServiceNumber: function() {
                    n.e("pages/components/lotteryDetail/attentionServiceNumber").then(function() {
                        return resolve(n("066d"));
                    }.bind(null, n)).catch(n.oe);
                },
                FollowSuccess: function() {
                    n.e("components/FollowSuccess").then(function() {
                        return resolve(n("ef03"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                lottery_id: {
                    type: Number,
                    default: 0
                },
                projectId: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    imgurl: "",
                    showFocus: !1,
                    baseDetail: {},
                    attentionServiceFlag: !1,
                    toastMsg: "",
                    followModelShow: !1,
                    followSuccessed: !1,
                    lotteryInfo: {},
                    foucsInfo: {},
                    serviceQrCode: ""
                };
            },
            computed: {
                isResultedFlag: function() {
                    return 3 === this.lotteryInfo.is_resulted && !1;
                }
            },
            watch: {
                lottery_id: function(t) {
                    t > 0 ? (this.fetchLottery(), this.fetchFocusInfo()) : this.showFocus = !1;
                },
                projectId: function(t) {
                    t > 0 ? this.fetchFocusInfo() : this.showFocus = !1;
                }
            },
            mounted: function() {
                this.getQrCode();
            },
            methods: {
                getQrCode: function() {
                    var t = s(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, i();

                              case 2:
                                (e = t.sent) && e.serviceQrCode && (this.serviceQrCode = e.serviceQrCode);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                handleClose: function() {
                    this.showFocus = !1;
                },
                fetchLottery: function() {
                    var t = s(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.default.lotteryDetail.getLotteryInfo(this.lottery_id);

                              case 2:
                                (e = t.sent).data && (this.lotteryInfo = e.data);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                fetchFocusInfo: function() {
                    var t = s(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.default.focusInfo(this.projectId);

                              case 2:
                                (e = t.sent).data && (this.foucsInfo = e.data, this.showFocus = 0 === this.foucsInfo.is_followed);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                lotteryRemindHandle: function() {
                    var t = s(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.default.getlotteryRemind(this.projectId);

                              case 2:
                                if (e = t.sent, 0 !== Math.floor(e.code)) {
                                    t.next = 15;
                                    break;
                                }
                                if (1 !== Math.floor(e.data.status)) {
                                    t.next = 15;
                                    break;
                                }
                                return t.next = 8, r.default.attentionServiceNumber();

                              case 8:
                                t.t0 = t.sent, t.next = 12;
                                break;

                              case 11:
                                t.t0 = {
                                    data: !0
                                };

                              case 12:
                                t.t0.data ? this.isResultedFlag ? c.tip.toast("设置成功", "", "none") : (this.followModelShow = !0, 
                                this.followSuccessed = !0) : this.attentionServiceFlag = !0, this.showFocus = !1;

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }()
            }
        };
        e.default = f;
    },
    f03a: function(t, e, n) {
        "use strict";
        var o = n("9f35");
        n.n(o).a;
    },
    fd8db: function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.followModelShow = !1;
            });
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/pages/component/projectPlanar/focusFooter-create-component", {
    "subPackages/project/pages/component/projectPlanar/focusFooter-create-component": function(t, e, n) {
        n("543d").createComponent(n("95b1"));
    }
}, [ [ "subPackages/project/pages/component/projectPlanar/focusFooter-create-component" ] ] ]);