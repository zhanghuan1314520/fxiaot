require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/statement-not-cd" ], {
    "04b9": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("29f1"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    "29f1": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(n("a34a")), o = c(n("ad0f")), r = n("ca00"), i = n("b628"), s = c(n("4ec3"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function h(t, e, n, a, o, r, i) {
                try {
                    var s = t[r](i), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, o);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = t.apply(e, n);
                        function i(t) {
                            h(r, a, o, i, s, "next", t);
                        }
                        function s(t) {
                            h(r, a, o, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var d = n("f4fd"), p = n("ca00"), m = n("79b9"), g = {
                components: {
                    BusiFooter: function() {
                        n.e("components/UILayout/BusiFooter").then(function() {
                            return resolve(n("dff1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ContactSalesman: function() {
                        n.e("components/ContactSalesman").then(function() {
                            return resolve(n("bf9f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FooterShare: function() {
                        n.e("components/FooterShare").then(function() {
                            return resolve(n("ebae"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    StatementOverFlowItem: function() {
                        n.e("pages/components/lotteryDetail/StatementOverFlowItem").then(function() {
                            return resolve(n("e741"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Dialog: function() {
                        n.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(n("6bfa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ o.default ],
                data: function() {
                    return {
                        num: 2,
                        lottery_id: "",
                        project_id: "",
                        page: 1,
                        size: 10,
                        more: !0,
                        type: "",
                        statementList: new Array(7).fill({
                            skeleton: !0
                        }),
                        disclaimer: "",
                        count: 0,
                        status: 0,
                        project_count: 0,
                        near_count: 0,
                        opening_count: 0,
                        house_count: 0,
                        title: "",
                        pointUrl: "",
                        news_cont: 0,
                        allpage: 0,
                        isSealman: !1,
                        comment_show: !1,
                        phone: "",
                        username: "",
                        showCallBtn: !1,
                        showCallPhone: !1,
                        phoneNumber: "",
                        urls: [],
                        btnStatus: {},
                        callContent: "拨通后请说明来自\n【杭州房小团】",
                        firstLoad: !0
                    };
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    },
                    bottomHeight: function() {
                        return r.isIPhoneX ? 292 : 238;
                    }
                },
                watch: {
                    statementList: function(t) {
                        t.length && (this.urls = [], this.urls = t.map(function(t) {
                            return "navigateTo-authphone://subPackages/me/pages/chatInterface?user_id=".concat(t.session_id);
                        }));
                    }
                },
                onShareAppMessage: function() {
                    var t = "快来看【".concat(this.title, "】的动态"), e = "/pages/lotteryDetail?id=&project_id=".concat(this.project_id, "&id=").concat(this.lottery_id, "&redirect=").concat(encodeURIComponent(p.getCurrentPageUrlWithArgs()));
                    return i.share.share(t, e);
                },
                onReachBottom: function() {
                    var t = f(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.getBuildingpages();

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
                onPullDownRefresh: function() {
                    var e = f(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.more = !0, this.type = "", this.page = 1, this.statementList = [], e.next = 6, 
                                this.getBuildingpages();

                              case 6:
                                t.stopPullDownRefresh();

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onPageScroll: function(t) {
                    this.$refs.share.pageScroll(t);
                },
                onLoad: function() {
                    var t = f(a.default.mark(function t(e) {
                        var n, o, r, i = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.lottery_id = e.lottery_id, this.project_id = e.project_id, this.title = e.title, 
                                t.next = 5, d.getGlobalConfig();

                              case 5:
                                return n = t.sent, this.disclaimer = n.disclaimer, t.next = 9, this.getBuildingpages();

                              case 9:
                                return t.next = 11, s.default.isSaleMan(this.project_id);

                              case 11:
                                o = t.sent, 1 === Math.floor(o.data) && (this.isSealman = !0), (r = d.getUserInfo()) && (this.username = r.nickName), 
                                s.default.getBtnStatus(this.lottery_id, this.project_id).then(function(t) {
                                    i.btnStatus = t.data;
                                });

                              case 16:
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
                    comfirm: function() {
                        t.makePhoneCall({
                            phoneNumber: this.phoneNumber
                        });
                    },
                    contactSalesEvent: function(t) {
                        this.toUrl2.call(this, t.hasPhone);
                    },
                    handleSubscription: function() {
                        t.navigateTo({
                            url: p.webview2Url("".concat(m.webviewHost, "/followServices"))
                        }), 0 === this.btnStatus.attention && (s.default.getlotteryRemind(this.project_id).then(), 
                        i.redis.set("refreshAttentionStatus", !0));
                    },
                    previewImage: function(e, n) {
                        var a = this.statementList[e].images;
                        t.previewImage({
                            current: a[n],
                            urls: a
                        });
                    },
                    phoneCall: function() {
                        var e = f(a.default.mark(function e(n) {
                            var o, r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!/^(0|1)\d{10}$/.test(o = n)) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.next = 5, s.default.getPhoneNum(this.project_id, 2);

                                  case 5:
                                    r = e.sent, 0 === Math.floor(r.code) && (o = r.data.phone);

                                  case 7:
                                    t.makePhoneCall({
                                        phoneNumber: o
                                    });

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toUrl2: function(e) {
                        var n = "/pages/salesMan/index?id=".concat(this.project_id, "&title=").concat(this.title);
                        if (e) t.navigateTo({
                            url: n
                        }); else {
                            var a = "/subPackages/tools/pages/telLogin?direct=".concat(encodeURIComponent(n));
                            t.navigateTo({
                                url: a
                            });
                        }
                    },
                    updateInfoToUrl: function(t, e) {
                        var n = this;
                        d.updateUserInfo().then(function(a) {
                            n.username = a.nickName, n.toUrl.call(n, t, e);
                        }).catch(function() {});
                    },
                    getUserInfoToState: function() {
                        var t = this;
                        d.updateUserInfo().then(function(e) {
                            t.username = e.nickName, t.toState.call(t);
                        }).catch(function() {});
                    },
                    getUserInfo: function(t) {
                        var e = this;
                        d.updateUserInfo().then(function(n) {
                            e.username = n.nickName, e.callSalesman.call(e, t);
                        }).catch(function() {});
                    },
                    previewOnce: function(e) {
                        e && t.previewImage({
                            urls: [ e ]
                        });
                    },
                    toUrl: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(e)
                        });
                    },
                    callSalesman: function() {
                        var t = f(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.getPhoneNum(e, 1);

                                  case 2:
                                    0 === (n = t.sent).code && (this.showCallPhone = !0, this.phoneNumber = n.data.phone);

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
                    toState: function() {
                        var e = f(a.default.mark(function e() {
                            var n, o, r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.uploadPermission(this.project_id);

                                  case 2:
                                    n = e.sent, o = n.code, r = n.data, 0 === o && r.upload_dynamic ? (t.navigateTo({
                                        url: "/subPackages/news/pages/createStatement?lottery_id=".concat(this.lottery_id, "&project_id=").concat(this.project_id, "&project_name=").concat(this.title, "&type=").concat(this.type, "&status=").concat(this.status)
                                    }), s.default.dynamicRuleRead().then(function() {})) : i.tip.toast("【本楼盘只接受官方资料，请您谅解！】", null, "none");

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    showState: function() {
                        this.comment_show = !0;
                    },
                    dropContent: function(t) {
                        var e = this.statementList && this.statementList[t];
                        e && (e.is_toggle = !e.is_toggle, this.$set(this.statementList, t, e));
                    },
                    change: function() {
                        var t = f(a.default.mark(function t(e) {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.page = 1, this.more = !0, this.type = e, this.statementList = [], t.next = 6, 
                                    this.getBuildingpages();

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
                    getLength: function(t) {
                        for (var e = 0, n = 0; n < t.length; n += 1) {
                            var a = t.substr(n, 1);
                            "%u" === escape(a).substring(0, 2) ? e += 2 : e += 1;
                        }
                        return e / 2;
                    },
                    getBuildingpages: function() {
                        var t = f(a.default.mark(function t() {
                            var e, n, o = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.getDynamic(this.project_id, this.type, "2", this.page);

                                  case 2:
                                    return (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.firstLoad && (this.statementList = [], this.firstLoad = !1), this.project_count = e.data.project_count, 
                                    this.near_count = e.data.near_count, this.opening_count = e.data.opening_count, 
                                    this.house_count = e.data.house_count, this.phone = e.data.official_phone, this.count = e.data.count, 
                                    this.statementList = [].concat(u(this.statementList), u(e.data.data)), this.statementList.forEach(function(t) {
                                        if (t.is_toggle = !1, o.getLength.call(o, t.content) > 67) t.show_toggle = !0; else {
                                            var e = t.content.split("\n");
                                            (e = e.filter(function(t) {
                                                return t;
                                            })).length > 3 || e.length > 1 && e[e.length - 1].length > 23 ? t.show_toggle = !0 : t.show_toggle = !1;
                                        }
                                    })), t.next = 6, s.default.lottery.showCallSaleManbtn(this.project_id);

                                  case 6:
                                    (n = t.sent) && 0 === Math.floor(n.code) && (this.showCallBtn = 1 === Math.floor(n.data.is_show_phone));

                                  case 8:
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
            e.default = g;
        }).call(this, n("543d").default);
    },
    3516: function(t, e, n) {},
    "3ba7": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.statementList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    l0: e.thumbnails.length > 0 && 1 === e.thumbnails.length ? t.__map(e.thumbnails, function(e, n) {
                        return {
                            $orig: t.__get_orig(e),
                            a0: {
                                width: "400rpx",
                                height: "260rpx",
                                "border-radius": "4rpx"
                            }
                        };
                    }) : null,
                    l1: e.thumbnails.length > 0 && e.thumbnails.length > 1 ? t.__map(e.thumbnails, function(e, n) {
                        return {
                            $orig: t.__get_orig(e),
                            a1: {
                                width: "180rpx",
                                height: "180rpx",
                                "border-radius": "4rpx"
                            }
                        };
                    }) : null
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l2: e
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    cc8d: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("3ba7"), o = n("04b9");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("fff1");
        var i = n("f0c5"), s = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    d8ca: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("cc8d")).default);
        }).call(this, n("543d").createPage);
    },
    fff1: function(t, e, n) {
        "use strict";
        var a = n("3516");
        n.n(a).a;
    }
}, [ [ "d8ca", "common/runtime", "common/vendor", "subPackages/news/common/vendor" ] ] ]);