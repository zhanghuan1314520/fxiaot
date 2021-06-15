require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/groupBuyVideoDetail" ], {
    "342a": function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(i("a34a")), n = u(i("4ec3")), o = i("ca00"), s = i("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, i, a, n, o, s) {
                try {
                    var u = t[o](s), c = u.value;
                } catch (t) {
                    return void i(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(a, n);
            }
            function r(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(a, n) {
                        var o = t.apply(e, i);
                        function s(t) {
                            c(o, a, n, s, u, "next", t);
                        }
                        function u(t) {
                            c(o, a, n, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var l = {
                components: {
                    Authorization: function() {
                        i.e("components/Authorization").then(function() {
                            return resolve(i("5326"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    BaseCallPhone: function() {
                        i.e("components/BaseCallPhone").then(function() {
                            return resolve(i("65ce"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                mixins: [ u(i("73a2")).default ],
                data: function() {
                    return {
                        param: {
                            id: ""
                        },
                        id: "",
                        detail: {},
                        likeStatus: 0,
                        sales_man_id: "",
                        animate: !1,
                        showLikeImage: !1,
                        timer: null,
                        backSwitch: !1
                    };
                },
                computed: {
                    isSelf: function() {
                        return this.detail.sales_man && this.sales_man_id === this.detail.sales_man.sales_man_id;
                    },
                    buttonImage: function() {
                        return 0 === this.likeStatus ? this.videoImage.likeButton : this.videoImage.likedButton;
                    }
                },
                onLoad: function(t) {
                    this.id = t.id, this.param.id = t.id, this.load(), this.getLikeStatus(), this.viewVideo(), 
                    this.loadIsSalesMan(), this.getBackBtnSwitch();
                },
                destroyed: function() {
                    clearTimeout(this.timer);
                },
                onPullDownRefresh: function() {
                    var e = r(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.load(), this.getLikeStatus(), this.viewVideo(), this.loadIsSalesMan(), this.getBackBtnSwitch(), 
                                t.stopPullDownRefresh();

                              case 6:
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
                    emptyFunction: function() {},
                    load: function() {
                        var t = this;
                        n.default.activity.groupBuyVideoDetail(this.param).then(function(e) {
                            var i = e.data;
                            t.title = i.name, t.detail = i;
                        });
                    },
                    loadIsSalesMan: function() {
                        var t = this;
                        n.default.isSaleMan().then(function(e) {
                            t.sales_man_id = e.sales_man_id || "";
                        });
                    },
                    getBackBtnSwitch: function() {
                        var t = this;
                        n.default.activity.backBtnSwitch().then(function(e) {
                            var i = e.data;
                            t.backSwitch = i && i.switch;
                        });
                    },
                    getLikeStatus: function() {
                        var t = this;
                        clearTimeout(this.timer), n.default.activity.likeStatus(this.param).then(function(e) {
                            var i = e.data;
                            t.likeStatus = i.status, 0 === t.likeStatus ? t.showLikeImage = !0 : t.timer = setTimeout(function() {
                                t.showLikeImage = !1;
                            }, 300);
                        });
                    },
                    likeVideo: function() {
                        var e = this;
                        2 !== this.likeStatus ? this.isSelf ? s.tip.toast("不可给自己点赞哟～") : 0 === this.likeStatus && (this.animate = !0, 
                        n.default.activity.likeVideo(this.param).then(function() {
                            e.getLikeStatus(), e.detail.like_num += 1;
                        })) : t.showToast({
                            title: "您已为置业顾问加油点赞",
                            icon: "none",
                            duration: 3e3
                        });
                    },
                    viewVideo: function() {
                        this.isSelf || n.default.activity.viewVideo(this.param);
                    },
                    playVideo: function() {
                        var t = this;
                        this.isSelf || n.default.activity.playVideo(this.param).then(function() {
                            t.detail.play_num += 1;
                        });
                    },
                    toPlayVideo: function(e, i) {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/groupBuyVideoPlay?id=".concat(i)
                        }), this.playVideo();
                    },
                    toHome: function() {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/groupBuy"
                        });
                    },
                    handleGoProjectDetail: function() {
                        this.detail.project_id && t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.detail.project_id)
                        });
                    },
                    formatUnit: function(t) {
                        return (0, o.formatUnitTenThousand)(t);
                    },
                    onSuccess: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(this.detail.sales_man.session_id)
                        });
                    },
                    callSalesman: function() {
                        var t = r(a.default.mark(function t(e, i) {
                            var o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.default.getPhoneNum(i, 1);

                                  case 2:
                                    0 === (o = t.sent).code && e(o.data.phone);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e, i) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    toSalesDetail: function() {
                        var e = this.detail.sales_man, i = this.project_id, a = "/pages/salesMan/detail?user_id=".concat(e.session_id, "&project_id=").concat(i);
                        t.navigateTo({
                            url: a
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, i("543d").default);
    },
    "4a85": function(t, e, i) {},
    "587e": function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.formatUnit(t.detail.like_num)), i = t.formatUnit(t.detail.play_num);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: i
                }
            });
        }, n = [];
        i.d(e, "b", function() {
            return a;
        }), i.d(e, "c", function() {
            return n;
        }), i.d(e, "a", function() {});
    },
    "97bb": function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("342a"), n = i.n(a);
        for (var o in a) "default" !== o && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = n.a;
    },
    b272: function(t, e, i) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("ff0d")).default);
        }).call(this, i("543d").createPage);
    },
    c4e7: function(t, e, i) {
        "use strict";
        var a = i("4a85");
        i.n(a).a;
    },
    ff0d: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("587e"), n = i("97bb");
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        i("c4e7");
        var s = i("f0c5"), u = Object(s.a)(n.default, a.b, a.c, !1, null, "294001cc", null, !1, a.a, void 0);
        e.default = u.exports;
    }
}, [ [ "b272", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);