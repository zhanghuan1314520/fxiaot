(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consult/index" ], {
    "16cd": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("d70e"), i = a("c899");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("e4c7");
        var r = a("f0c5"), s = Object(r.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    2616: function(e, t, a) {},
    a831: function(e, t, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = d(a("a34a")), i = d(a("c909")), o = d(a("dcf6")), r = d(a("1713")), s = d(a("4ec3")), c = a("b628");
            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || h(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var a = [], n = !0, i = !1, o = void 0;
                        try {
                            for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value), 
                            !t || a.length !== t); n = !0) ;
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return a;
                    }
                }(e, t) || h(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? f(e, t) : void 0;
                }
            }
            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n;
            }
            function g(e, t, a, n, i, o, r) {
                try {
                    var s = e[o](r), c = s.value;
                } catch (e) {
                    return void a(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(n, i);
            }
            function p(e) {
                return function() {
                    var t = this, a = arguments;
                    return new Promise(function(n, i) {
                        var o = e.apply(t, a);
                        function r(e) {
                            g(o, n, i, r, s, "next", e);
                        }
                        function s(e) {
                            g(o, n, i, r, s, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var m = null, y = {
                components: {
                    answerTemplate: function() {
                        a.e("pages/consult/components/answer").then(function() {
                            return resolve(a("2b6b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    consultTemplate: function() {
                        a.e("pages/consult/components/consultationDetail").then(function() {
                            return resolve(a("8f5a"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    sharingTemplate: function() {
                        a.e("pages/consult/components/sharingHall").then(function() {
                            return resolve(a("a137"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    soilTakenTemplate: function() {
                        a.e("pages/consult/components/soilTaken").then(function() {
                            return resolve(a("a764"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    AdFloatWindow: function() {
                        a.e("components/AdFloatWindow").then(function() {
                            return resolve(a("840d"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    AddMyProgramNew: function() {
                        a.e("components/AddMyProgramNew").then(function() {
                            return resolve(a("c96a"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    CustomNavHeader: function() {
                        a.e("components/CustomNavHeader").then(function() {
                            return resolve(a("7ec9c"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                mixins: [ r.default ],
                data: function() {
                    var t = e.getSystemInfoSync();
                    return {
                        page: 1,
                        more: !0,
                        loading: !1,
                        postBanners: [],
                        articles: new Array(8).fill({
                            skeleton: !0
                        }),
                        hotArticles: new Array(5).fill({
                            skeleton: !0
                        }),
                        dernData: new Array(4).fill({
                            skeleton: !0
                        }),
                        questionBanners: new Array(4).fill({
                            skeleton: !0
                        }),
                        questionItems: new Array(10).fill({
                            skeleton: !0
                        }),
                        items: [],
                        sendData: {},
                        shareIndex: 0,
                        newIndex: 1,
                        keyword: "",
                        soilData: [],
                        changeIndex: "none",
                        isShowAll: !0,
                        placeHolder: "房产知识有疑问？搜一搜就知道了",
                        answerHeaderFix: !1,
                        shareHeaderFix: !1,
                        soilHeaderFix: !1,
                        soilSendData: {},
                        shareMessage: null,
                        questionNavs: [],
                        articlePlaceHolder: "",
                        isAdOpen: !1,
                        AdFloatWindowBottom: "24rpx",
                        adFloatWindowImg: "",
                        adFloatWindowUrl: "",
                        showAddMyProgram: !1,
                        showedAddMyprogram: !1,
                        marginTop: 44 + t.statusBarHeight
                    };
                },
                onShareAppMessage: function() {
                    var e = {
                        title: "我在这里查摇号结果，好方便哦",
                        path: "/pages/consult/index?changeType=".concat(this.changeType),
                        imageUrl: ""
                    };
                    if (this.shareMessage) {
                        var t = {
                            1: "tabBar1:",
                            2: "tabBar2:",
                            3: "tabBar3:",
                            4: "tabBar4:"
                        }[this.changeType], a = this.shareMessage.title[t] || [], n = "我在这里查摇号结果，好方便哦";
                        a.length > 0 && (n = a[Math.floor(Math.random() * a.length)]);
                        var i = {
                            1: "tabBar1Img",
                            2: "tabBar2Img",
                            3: "tabBar3Img",
                            4: "tabBar4Img"
                        }[this.changeType], o = this.shareMessage.images[i] || [], r = "";
                        o.length > 0 && (r = o[Math.floor(Math.random() * o.length)]), e.title = n, e.path = "/pages/consult/index?changeType=".concat(this.changeType), 
                        e.imageUrl = r;
                    }
                    return c.share.share(e.title, e.path, e.imageUrl);
                },
                onReachBottom: function() {
                    this.more && !this.loading && this.loadNext();
                },
                onHide: function() {
                    c.redis.remove("question_index"), c.redis.remove("refreshQuestion"), 2 === this.changeType && this.$refs.addMyProgramRef.hideTips();
                },
                onShow: function() {
                    this.$store.dispatch("chat/getUnReadMessage"), this.$store.dispatch("chat/getUnReadCustomerMessage"), 
                    2 === this.changeType ? this.$refs.addMyProgramRef.initTips() : this.$refs.addMyProgramRef.hideTips();
                    var e = c.redis.get("question_index");
                    this.changeType = e || this.changeType;
                    var t = c.redis.get("refreshQuestion");
                    t && ("refreshQuestion" !== t && (this.sendData.tag = t, this.questionNavs.forEach(function(e) {
                        e.tags.forEach(function(e) {
                            e.name === t && (e.is_toggle = !0);
                        });
                    })), this.reload());
                },
                onPullDownRefresh: function() {
                    this.reload(), e.stopPullDownRefresh();
                },
                onLoad: function() {
                    var e = p(n.default.mark(function e(t) {
                        var a, r, d = this;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!t.hid) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 3, s.default.getDecodeHashParams(t.hid);

                              case 3:
                                a = e.sent, t = a.data ? (0, i.default)("?".concat(decodeURIComponent(a.data.path))).search(!0) : t;

                              case 5:
                                t.redirect && (c.redis.set("question_index", 2), new o.default(t).check()), r = c.redis.get("question_index"), 
                                this.changeType = r || t.changeType || this.changeType, this.loadNext(), this.$nextTick(function() {
                                    d.lastPageLoad(), s.default.question.questionType().then(function(e) {
                                        e && (e.data.forEach(function(e) {
                                            e.tags.forEach(function(e) {
                                                e.is_toggle = !1;
                                            });
                                        }), d.questionNavs = e.data);
                                    }), d.getShareInfo();
                                });

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadData: function(e) {
                        this.soilSendData = e, this.reload();
                    },
                    filterData: function(e) {
                        this.sendData = e, this.reload();
                    },
                    getShareInfo: function() {
                        var e = p(n.default.mark(function e() {
                            var t;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.getShareInfo({
                                        page_name: "/pages/consult/index",
                                        lottery_id: this.id,
                                        project_id: this.project_id
                                    });

                                  case 2:
                                    t = e.sent, 0 === parseInt(t.code, 10) && (this.shareMessage = t.data);

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
                    sendInputVal: function(e) {
                        this.keyword = e, this.reload();
                    },
                    chooseShareType: function() {
                        var e = p(n.default.mark(function e(t, a) {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.shareIndex = t, this.newIndex = a, this.reload();

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, a) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    changeOptions: function(e) {
                        this.page = 1, this.changeType = parseInt(e, 10), 2 === this.changeType ? this.$refs.addMyProgramRef.initTips() : this.$refs.addMyProgramRef.hideTips(), 
                        this.keyword = "", c.redis.set("question_index", this.changeType), this.reload();
                    },
                    srcollPageFixed: function(e) {
                        var t = e.scrollTop, a = void 0 === t ? 0 : t;
                        switch (this.changeType) {
                          case 2:
                            this.answerHeaderFix = a > 250, this.shareHeaderFix = !1, this.soilHeaderFix = !1;
                            break;

                          case 3:
                            this.shareHeaderFix = a > 0, this.answerHeaderFix = !1, this.soilHeaderFix = !1;
                            break;

                          case 4:
                            this.soilHeaderFix = a > 50, this.answerHeaderFix = !1, this.shareHeaderFix = !1;
                            break;

                          default:
                            this.answerHeaderFix = !1, this.shareHeaderFix = !1, this.soilHeaderFix = !1;
                        }
                    },
                    getNewsData: function() {
                        var e = this;
                        s.default.article.getHotArticlesList().then(function(t) {
                            e.hotArticles = t.data || [];
                        }), s.default.article.dernSources().then(function(t) {
                            e.dernData = t.data && t.data.data || [];
                        }), s.default.article.getArticlesList(this.page).then(function(t) {
                            t.data && (t.data.length < 1 ? e.more = !1 : e.page += 1, e.articles.length > 0 && e.articles[0].skeleton && (e.articles = []), 
                            e.articles = e.articles.concat(t.data));
                        });
                    },
                    getQuestionData: function() {
                        var e = this;
                        this.loading = !0, this.sendData.page = this.page, Promise.all([ s.default.consult.getTopicHotList(), s.default.question.getQuestionAnswerList(this.sendData) ]).then(function(t) {
                            var a = u(t, 2), n = a[0], i = a[1];
                            e.loading = !1, e.questionBanners = n.data || [], i.data && (!i.data.data || i.data.data.length < 10 ? e.more = !1 : e.page += 1, 
                            e.questionItems.length > 0 && e.questionItems[0].skeleton && (e.questionItems = []), 
                            e.questionItems = e.questionItems.concat(i.data.data));
                        });
                    },
                    getShareRoomData: function() {
                        var e = this;
                        s.default.getPosts(this.keyword, "", this.shareIndex, this.newIndex, this.page, 8).then(function(t) {
                            t.data && (t.data.data.length < 8 || !t.data.data ? e.more = !1 : e.page += 1, t.data.data.forEach(function(e) {
                                var t = [], a = e;
                                a.images && (a.images.forEach(function(e) {
                                    var a;
                                    t = (a = []).concat.apply(a, l(e));
                                }), a.images = t);
                            }), e.items = e.items.concat(t.data.data));
                        });
                    },
                    getSoilTakenData: function() {
                        var e = this, t = c.common.merge(this.soilSendData, {
                            page: this.page,
                            keyword: this.inputVal
                        });
                        s.default.soilAuction(t).then(function(t) {
                            t.data && (e.page >= t.data.last_page || !t.data.last_page ? e.more = !1 : e.page += 1, 
                            e.soilData = e.soilData.concat(t.data.data));
                        });
                    },
                    lastPageLoad: function() {
                        var e = this;
                        Promise.all([ s.default.question.questionHotSearch(), s.default.question.questionHotSearch(3) ]).then(function(t) {
                            var a = u(t, 2), n = a[0], i = a[1];
                            n.data && (e.placeHolder = n.data.showKeyword || e.placeHolder), i.data && (e.articlePlaceHolder = i.data.showKeyword || "");
                        }), s.default.getlotActivity().then(function(t) {
                            t.data && t.data.suspend_bottom && (e.isAdOpen = !0, e.adFloatWindowImg = t.data.suspend_bottom.img[0] || "", 
                            e.adFloatWindowUrl = t.data.suspend_bottom.url);
                        });
                    },
                    loadNext: function() {
                        switch (parseInt(this.changeType, 10)) {
                          case 1:
                            this.getNewsData();
                            break;

                          case 2:
                            this.getQuestionData();
                            break;

                          case 3:
                            this.getShareRoomData();
                            break;

                          case 4:
                            this.getSoilTakenData();
                        }
                    },
                    reload: function() {
                        var e = this;
                        this.page = 1, this.more = !0, this.articles = [], this.postBanners = [], this.questionItems = [], 
                        this.soilData = [], this.items = [], this.loadNext(), this.$nextTick(function() {
                            e.lastPageLoad();
                        });
                    },
                    onPageScroll: function(e) {
                        this.srcollPageFixed(e), this.isShowAll = !1, clearTimeout(m);
                        var t = this;
                        m = setTimeout(function() {
                            t.isShowAll = !0;
                        }, 500);
                    }
                }
            };
            t.default = y;
        }).call(this, a("543d").default);
    },
    c899: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("a831"), i = a.n(n);
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = i.a;
    },
    d70e: function(e, t, a) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, i = [];
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return i;
        }), a.d(t, "a", function() {});
    },
    e145: function(e, t, a) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("6cdc"), t(a("66fd")), e(t(a("16cd")).default);
        }).call(this, a("543d").createPage);
    },
    e4c7: function(e, t, a) {
        "use strict";
        var n = a("2616");
        a.n(n).a;
    }
}, [ [ "e145", "common/runtime", "common/vendor" ] ] ]);