require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/statement" ], {
    2469: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("321d"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    "321d": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = l(n("a34a")), o = l(n("0a2c")), r = l(n("4ec3")), i = n("b628"), s = l(n("f4fd")), c = n("ca00"), u = l(n("79b9"));
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function h(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function d(t, e, n, a, o, r, i) {
                try {
                    var s = t[r](i), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, o);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = t.apply(e, n);
                        function i(t) {
                            d(r, a, o, i, s, "next", t);
                        }
                        function s(t) {
                            d(r, a, o, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var m = {
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
                    Loading: function() {
                        n.e("subPackages/news/components/Loading").then(function() {
                            return resolve(n("77437"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    StatementList: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/components/lotteryDetail/StatementList") ]).then(function() {
                            return resolve(n("56b2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Dialog: function() {
                        n.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(n("6bfa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiTab: function() {
                        n.e("components/UILayout/BusiTab").then(function() {
                            return resolve(n("f97f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ o.default ],
                data: function() {
                    return {
                        lottery_id: "",
                        project_id: "",
                        sales_man_id: "",
                        page: 1,
                        size: 10,
                        more: !0,
                        type: 0,
                        statementList: new Array(4).fill({
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
                    typeMap: function() {
                        return {
                            1: "楼盘动态",
                            2: this.willSalesName,
                            3: "开盘",
                            4: "交房"
                        };
                    },
                    list: function() {
                        var t = [ {
                            id: "",
                            text: "全部(".concat(this.count, ")"),
                            dataName: "全部"
                        } ];
                        return this.project_count > 0 && t.push({
                            id: 1,
                            text: "楼盘动态(".concat(this.project_count, ")"),
                            dataName: "楼盘动态"
                        }), this.near_count > 0 && t.push({
                            id: 2,
                            text: "".concat(this.willSalesName, "(").concat(this.near_count, ")"),
                            dataName: this.willSalesName
                        }), this.opening_count > 0 && t.push({
                            id: 3,
                            text: "开盘(".concat(this.opening_count, ")"),
                            dataName: "开盘"
                        }), this.house_count > 0 && t.push({
                            id: 4,
                            text: "交房(".concat(this.house_count, ")"),
                            dataName: "交房"
                        }), t;
                    }
                },
                watch: {
                    statementList: function(t) {
                        t.length && (this.urls = [], this.urls = t.map(function(t) {
                            return "/subPackages/me/pages/chatInterface?user_id=".concat(t.session_id);
                        }));
                    }
                },
                onShareAppMessage: function() {
                    var t = "快来看【".concat(this.title, "】的动态"), e = "/pages/lotteryDetail?id=&project_id=".concat(this.project_id, "&id=").concat(this.lottery_id, "&redirect=").concat(encodeURIComponent((0, 
                    c.getCurrentPageUrlWithArgs)()));
                    return i.share.share(t, e);
                },
                onReachBottom: function() {
                    var t = p(a.default.mark(function t() {
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
                    var e = p(a.default.mark(function e() {
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
                onLoad: function() {
                    var t = p(a.default.mark(function t(e) {
                        var n, o, i, c = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.lottery_id = e.lottery_id, this.project_id = e.project_id, this.sales_man_id = e.sales_man_id, 
                                this.title = e.title, t.next = 6, s.default.getGlobalConfig();

                              case 6:
                                return n = t.sent, this.disclaimer = n.disclaimer, t.next = 10, this.getBuildingpages();

                              case 10:
                                return t.next = 12, r.default.isSaleMan(this.project_id);

                              case 12:
                                o = t.sent, 1 === parseInt(o.data, 10) && (this.isSealman = !0), (i = s.default.getUserInfo()) && (this.username = i.nickName), 
                                r.default.getBtnStatus(this.lottery_id, this.project_id).then(function(t) {
                                    c.btnStatus = t.data;
                                });

                              case 17:
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
                    confirm: function() {
                        this.showCallPhone = !1, t.makePhoneCall({
                            phoneNumber: this.phoneNumber
                        });
                    },
                    contactSalesEvent: function(t) {
                        this.toUrl2.call(this, t.hasPhone);
                    },
                    previewImage: function(e, n) {
                        var a = this.statementList[e].images;
                        t.previewImage({
                            current: a[n],
                            urls: a
                        });
                    },
                    phoneCall: function() {
                        var e = p(a.default.mark(function e() {
                            var n, o;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = "", e.next = 3, r.default.getPhoneNum(this.project_id, 2);

                                  case 3:
                                    o = e.sent, 0 === parseInt(o.code, 10) && (n = o.data.phone), t.makePhoneCall({
                                        phoneNumber: n
                                    });

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
                    getUserInfoToState: function() {
                        var t = this;
                        s.default.updateUserInfo().then(function(e) {
                            t.username = e.nickName, t.toState.call(t);
                        }).catch(function() {});
                    },
                    getUserInfo: function(t) {
                        var e = this;
                        s.default.updateUserInfo().then(function(n) {
                            e.username = n.nickName, e.callSalesman.call(e, t);
                        }).catch(function() {});
                    },
                    toUrl: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(e)
                        });
                    },
                    callSalesman: function() {
                        var t = p(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getPhoneNum(e, 1);

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
                        var e = p(a.default.mark(function e() {
                            var n, o, s;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.uploadPermission(this.project_id);

                                  case 2:
                                    n = e.sent, o = n.code, s = n.data, 0 === o && s.upload_dynamic ? (t.navigateTo({
                                        url: "/subPackages/news/pages/createStatement?lottery_id=".concat(this.lottery_id, "&project_id=").concat(this.project_id, "&project_name=").concat(this.title, "&type=").concat(this.type, "&status=").concat(this.status)
                                    }), r.default.dynamicRuleRead().then(function() {})) : i.tip.toast("【本楼盘只接受官方资料，请您谅解！】", null, "none");

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
                    change: function() {
                        var t = p(a.default.mark(function t(e) {
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
                    getBuildingpages: function() {
                        var t = p(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getDynamic(this.project_id, this.type, "2", this.page);

                                  case 2:
                                    return (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.firstLoad && (this.statementList = [], this.firstLoad = !1), this.project_count = e.data.project_count, 
                                    this.near_count = e.data.near_count, this.opening_count = e.data.opening_count, 
                                    this.house_count = e.data.house_count, this.phone = e.data.official_phone, this.count = e.data.count, 
                                    this.statementList = [].concat(h(this.statementList), h(e.data.data))), t.next = 6, 
                                    r.default.lottery.showCallSaleManbtn(this.project_id);

                                  case 6:
                                    (n = t.sent) && 0 === parseInt(n.code, 10) && (this.showCallBtn = 1 === parseInt(n.data.is_show_phone, 10));

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    handleSubscription: function() {
                        t.navigateTo({
                            url: (0, c.webview2Url)("".concat(u.default.webviewHost, "/followServices"))
                        }), 0 === this.btnStatus.attention && (r.default.getlotteryRemind(this.project_id).then(), 
                        i.redis.set("refreshAttentionStatus", !0));
                    }
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    "3ca8": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("a5a9"), o = n("2469");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("7f97");
        var i = n("f0c5"), s = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "7f97": function(t, e, n) {
        "use strict";
        var a = n("c1d1");
        n.n(a).a;
    },
    9147: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3ca8")).default);
        }).call(this, n("543d").createPage);
    },
    a5a9: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    c1d1: function(t, e, n) {}
}, [ [ "9147", "common/runtime", "common/vendor" ] ] ]);