require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/salesmanPage" ], {
    "0eee": function(e, n, a) {
        "use strict";
        a.r(n);
        var t = a("227f"), s = a("eafb");
        for (var o in s) "default" !== o && function(e) {
            a.d(n, e, function() {
                return s[e];
            });
        }(o);
        a("dd36");
        var r = a("f0c5"), u = Object(r.a)(s.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        n.default = u.exports;
    },
    "227f": function(e, n, a) {
        "use strict";
        var t = function() {
            this.$createElement, this._self._c;
        }, s = [];
        a.d(n, "b", function() {
            return t;
        }), a.d(n, "c", function() {
            return s;
        }), a.d(n, "a", function() {});
    },
    a31c: function(e, n, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = r(a("a34a")), s = r(a("4ec3")), o = a("ca00");
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, n, a, t, s, o, r) {
                try {
                    var u = e[o](r), c = u.value;
                } catch (e) {
                    return void a(e);
                }
                u.done ? n(c) : Promise.resolve(c).then(t, s);
            }
            function c(e) {
                return function() {
                    var n = this, a = arguments;
                    return new Promise(function(t, s) {
                        var o = e.apply(n, a);
                        function r(e) {
                            u(o, t, s, r, c, "next", e);
                        }
                        function c(e) {
                            u(o, t, s, r, c, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var i = {
                components: {
                    BusiNavHeader: function() {
                        a.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(a("5ed7"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BaseBanner: function() {
                        a.e("components/BaseBanner").then(function() {
                            return resolve(a("01c8"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    SalesmanInfo: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/SalesmanInfo").then(function() {
                            return resolve(a("611c"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    SalesmanData: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/SalesmanData").then(function() {
                            return resolve(a("0c37"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    ActivityRank: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/ActivityRank").then(function() {
                            return resolve(a("db1a"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    Entries: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/Entries").then(function() {
                            return resolve(a("10c6"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CommonTools: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/CommonTools").then(function() {
                            return resolve(a("afdc"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    SalesTools: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/SalesTools").then(function() {
                            return resolve(a("38ac"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    SalesmanCollege: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/SalesmanCollege").then(function() {
                            return resolve(a("f27c"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    SurpriseModal: function() {
                        a.e("subPackages/me/pages/components/salesmanPage/SurpriseModal").then(function() {
                            return resolve(a("27a8"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    WhiteSpace: function() {
                        a.e("subPackages/me/pages/components/WhiteSpace").then(function() {
                            return resolve(a("4bc5"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    var n = e.getStorageSync("salesman_page_salesman_data"), a = e.getStorageSync("salesman_page_common_tools_data"), t = e.getStorageSync("salesman_page_sales_tools_data");
                    return {
                        collegeList: new Array(2).fill({
                            skeleton: !0
                        }),
                        advBannerList: {
                            list: [],
                            config: {}
                        },
                        bannerList: {
                            list: [],
                            config: {}
                        },
                        salesManData: n || {
                            tops: new Array(4).fill({
                                skeleton: !0
                            }),
                            medals: [],
                            project: {}
                        },
                        scoreData: [ {
                            name: "活跃度",
                            num: "--"
                        }, {
                            name: "积分",
                            num: "--"
                        }, {
                            name: "金币",
                            num: "--"
                        } ],
                        commonToolsData: a || new Array(4).fill({
                            skeleton: !0
                        }),
                        salesToolsData: t || new Array(4).fill({
                            skeleton: !0
                        }),
                        projectName: "杭州房小团",
                        bgImg: "",
                        greetings: ""
                    };
                },
                computed: {
                    showCollegeArticle: function() {
                        return this.collegeList.length > 0 || this.bannerList.list.length > 0;
                    }
                },
                onLoad: function() {
                    this.$refs.busiNavHeader.setTransparentMode();
                },
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onShow: function() {
                    this.loadPage();
                },
                onPullDownRefresh: function() {
                    var n = c(t.default.mark(function n() {
                        return t.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                this.loadPage(), e.stopPullDownRefresh();

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadPage: function() {
                        this.getSalesManHome(), this.getCommonToolData(), this.getSalesToolData(), this.changeTheme(), 
                        this.changeGreetings(), this.getCollegeList(), this.getAdvBanner(), this.getBanner();
                    },
                    getCommonToolData: function() {
                        var n = c(t.default.mark(function n() {
                            var a, o;
                            return t.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.default.sales.getToolData({
                                        type: 2
                                    });

                                  case 2:
                                    a = n.sent, o = a.data, this.commonToolsData = o || [], e.setStorage({
                                        key: "salesman_page_common_tools_data",
                                        data: this.commonToolsData
                                    });

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    getSalesToolData: function() {
                        var n = c(t.default.mark(function n() {
                            var a, o;
                            return t.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.default.sales.getToolData({
                                        type: 1
                                    });

                                  case 2:
                                    a = n.sent, o = a.data, this.salesToolsData = o || [], e.setStorage({
                                        key: "salesman_page_sales_tools_data",
                                        data: this.salesToolsData
                                    });

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    getSalesManHome: function() {
                        var n = c(t.default.mark(function n() {
                            var a, o, r, u = this;
                            return t.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.default.sales.getSalesManHome();

                                  case 2:
                                    a = n.sent, o = a.data, r = void 0 === o ? {} : o, this.salesManData = r, e.setStorage({
                                        key: "salesman_page_salesman_data",
                                        data: this.salesManData
                                    }), this.scoreData = [ {
                                        num: r.liveness,
                                        name: "活跃度",
                                        url: "/subPackages/me/pages/vitalityIntegral",
                                        fieldName: "sales_man_liveness_change"
                                    }, {
                                        num: r.sales_man_recommend_index,
                                        name: "积分",
                                        url: "/subPackages/me/pages/nowInteral",
                                        fieldName: "sales_man_recommend_index_change"
                                    }, {
                                        num: r.coins,
                                        name: "金币",
                                        url: "/subPackages/me/pages/myGold",
                                        fieldName: "sales_man_coins_change"
                                    } ], r.annual_tag && this.getSurpriseFlag(), this.$nextTick(function() {
                                        u.$refs.salesmanDataRef.getUnRead();
                                    });

                                  case 10:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    getAdvBanner: function() {
                        var e = this;
                        s.default.getBanner("salesmanPage--banner").then(function(n) {
                            n.data && (e.advBannerList = n.data);
                        });
                    },
                    getBanner: function() {
                        var e = this;
                        s.default.getBanner("salesmanPage-school-banner").then(function(n) {
                            n.data && (e.bannerList = n.data);
                        });
                    },
                    getCollegeList: function() {
                        var e = c(t.default.mark(function e() {
                            var n, a, o, r, u = this;
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.wiki.categoryList(2);

                                  case 2:
                                    if (!(n = e.sent).data || 0 === n.data.length) {
                                        e.next = 10;
                                        break;
                                    }
                                    return a = n.data[0].id, e.next = 7, s.default.wiki.subCategoryList(a);

                                  case 7:
                                    o = e.sent, r = o.data[0].id, s.default.wiki.wikiList({
                                        page: 1,
                                        page_size: 2,
                                        category_id: a,
                                        subcategory_id: r
                                    }).then(function(e) {
                                        e.data && (u.collegeList = e.data.data);
                                    });

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    swiperNavHandle: function(e) {
                        (0, o.pageJump)(e);
                    },
                    getSurpriseFlag: function() {
                        var e = c(t.default.mark(function e() {
                            var n;
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.popupsShow(this.salesManData.annual_tag);

                                  case 2:
                                    (n = e.sent).data && n.data.id || this.$refs.surpriseModal.open();

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
                    createSurpriseFlag: function() {
                        var e = c(t.default.mark(function e() {
                            return t.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.popupsCreate({
                                        tag: this.salesManData.annual_tag
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
                    changeTheme: function() {
                        var e = new Date(), n = e.getHours(), a = e.getMinutes(), t = n >= 6 && n < 19 || 19 === n && a < 31 ? {
                            hangzhou: "https://imgcdn.huanjutang.com/file/2021/03/16/e6ccbff1158a960ae6eb066532a69a81.png",
                            chengdu: "https://imgcdn.huanjutang.com/file/2021/03/16/e06b646ff901a815768d4c31b75ea35a.png",
                            nanjing: "https://imgcdn.huanjutang.com/file/2021/03/16/c36f407ffa439dfe5debbf02a6970beb.png",
                            wuhan: "https://imgcdn.huanjutang.com/file/2021/03/16/f0f26bc1e14a648cc4ff056733080a80.png"
                        } : {
                            hangzhou: "https://imgcdn.huanjutang.com/file/2021/03/16/c4fc9537d113af8173095da313b15896.png",
                            chengdu: "https://imgcdn.huanjutang.com/file/2021/03/16/4577644beee595b1276795f6370099cb.png",
                            nanjing: "https://imgcdn.huanjutang.com/file/2021/03/16/240abfd616904db1a840d67821e18126.png",
                            wuhan: "https://imgcdn.huanjutang.com/file/2021/03/16/449dddd758ebc76e74a9ca1af0c621fd.png"
                        };
                        this.bgImg = t.hangzhou;
                    },
                    changeGreetings: function() {
                        var e, n = new Date(), a = n.getHours(), t = n.getMinutes();
                        e = a >= 6 && a < 10 || 10 === a && t < 31 ? "morning" : a < 12 ? "am" : a < 14 ? "noon" : a < 20 || 20 === a && t < 31 ? "pm" : "night";
                        var s = {
                            morning: [ "美好的一天开始了，愿你好运连连~早安", "用热情的态度来完成工作~早安" ],
                            am: [ "未来你一定会感谢现在拼命努力的自己！", "懒惰者等待机遇，勤奋者创造机遇！" ],
                            noon: [ "要爱惜自己，再忙也要记得按时吃饭~" ],
                            pm: [ "人生充满期待，梦想连接未来。加油~", "未来你一定会感谢现在拼命努力的自己！", "相信努力和幸运成正比~" ],
                            night: [ "辛苦了，今日的客户别忘了持续跟进~", "每日学会反思，把经历变成经验！" ]
                        };
                        this.greetings = s[e][Math.floor(Math.random() * s[e].length)];
                    }
                }
            };
            n.default = i;
        }).call(this, a("543d").default);
    },
    bf29: function(e, n, a) {},
    dbe6: function(e, n, a) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("6cdc"), n(a("66fd")), e(n(a("0eee")).default);
        }).call(this, a("543d").createPage);
    },
    dd36: function(e, n, a) {
        "use strict";
        var t = a("bf29");
        a.n(t).a;
    },
    eafb: function(e, n, a) {
        "use strict";
        a.r(n);
        var t = a("a31c"), s = a.n(t);
        for (var o in t) "default" !== o && function(e) {
            a.d(n, e, function() {
                return t[e];
            });
        }(o);
        n.default = s.a;
    }
}, [ [ "dbe6", "common/runtime", "common/vendor" ] ] ]);