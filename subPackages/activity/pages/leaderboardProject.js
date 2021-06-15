require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/leaderboardProject" ], {
    "27ec": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3a7e")).default);
        }).call(this, n("543d").createPage);
    },
    "2b5c": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = c(n("a34a")), r = n("2f62"), a = n("ca00"), i = c(n("c909")), u = c(n("4ec3"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], o = !0, r = !1, a = void 0;
                        try {
                            for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), 
                            !e || n.length !== e); o = !0) ;
                        } catch (t) {
                            r = !0, a = t;
                        } finally {
                            try {
                                o || null == u.return || u.return();
                            } finally {
                                if (r) throw a;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach(function(e) {
                        v(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function v(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function p(t, e, n, o, r, a, i) {
                try {
                    var u = t[a](i), c = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(o, r);
            }
            function b(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = t.apply(e, n);
                        function i(t) {
                            p(a, o, r, i, u, "next", t);
                        }
                        function u(t) {
                            p(a, o, r, i, u, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var m = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    overlapping: function() {
                        n.e("subPackages/activity/components/leaderboard/overlapping").then(function() {
                            return resolve(n("2c0d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SharePopup: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiPopup/SharePopup") ]).then(function() {
                            return resolve(n("093f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Popup: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiPopup/BasePopup") ]).then(function() {
                            return resolve(n("ccdd"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    modal: function() {
                        Promise.all([ n.e("subPackages/activity/common/vendor"), n.e("subPackages/activity/components/leaderboard/modal") ]).then(function() {
                            return resolve(n("ad38"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CreatePoster: function() {
                        n.e("subPackages/activity/components/CreatePoster").then(function() {
                            return resolve(n("411f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ c(n("c877")).default ],
                data: function() {
                    return {
                        logoImage: "https://imgcdn.huanjutang.com/assets/img/2020129958558081.png",
                        hideText: !1,
                        overflow: !1,
                        id: "",
                        detail: {},
                        voteData: {},
                        voteUserInfo: {},
                        voteRule: {},
                        isLimit: !1,
                        name: "",
                        image: ""
                    };
                },
                computed: {
                    overflowText: function() {
                        return this.hideText ? "点击查看全部" : "点击收起";
                    },
                    restCount: function() {
                        return this.isObjectEmpty(this.voteUserInfo) ? 0 : this.voteUserInfo.total_vote_number - this.voteUserInfo.use_vote_number;
                    },
                    popupText: function() {
                        var t = 0;
                        return this.voteRule.rule_params && (t = this.voteRule.rule_params.share_poll), 
                        2 === this.voteStatus || this.shareCount <= 0 ? "继续分享可为您喜欢的楼盘拉票" : "邀请好友投票可获得 ".concat(t, " 次投票机会");
                    },
                    currentObject: function() {
                        return this.$store.getters.currentObject;
                    },
                    shareCount: function() {
                        var t = this.voteUserInfo, e = t.total_vote_number, n = t.use_vote_number, o = t.obtain_number;
                        return e && n && this.voteRule && this.voteRule.rule_params ? this.voteRule.rule_params.share_frequency - o : 0;
                    }
                },
                onLoad: function(t) {
                    var e = this;
                    this.$refs.busiNavHeader.setTransparentMode(), t.hid ? u.default.getDecodeHashParams(t.hid).then(function(n) {
                        n && n.data && (t = n ? (0, i.default)("?".concat(decodeURIComponent(n.data.path))).search(!0) : t, 
                        e.init(t));
                    }) : this.init(t);
                },
                onShow: function() {
                    this.detail.vote_id && this.queryServerVoteStatus(this.detail.vote_id);
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onPullDownRefresh: function() {
                    var e = b(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.loadData(), t.stopPullDownRefresh();

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
                methods: h(h({}, (0, r.mapMutations)({
                    setCurrentObject: "activity/SET_CURRENT_OBJECT"
                })), {}, {
                    init: function(t) {
                        var e = t.id;
                        if (!e) throw new Error("参数错误");
                        this.id = e, this.loadData();
                    },
                    shareHook: function() {
                        this.$refs.popup.close(), this.addVoteCount();
                    },
                    end: function() {
                        t.showToast({
                            title: "活动已结束，请查看排行",
                            icon: "none"
                        });
                    },
                    handleBoost: function() {
                        3 !== this.voteStatus ? this.$refs.popup.open() : this.end();
                    },
                    emptyFunction: function() {},
                    addVoteCount: function() {
                        var t = this;
                        3 !== this.voteStatus && 2 !== this.voteStatus && (this.isLimit || u.default.activity.leaderboardShare({
                            vote_id: this.detail.vote_id
                        }).then(function(e) {
                            t.verify(e) && (1 !== Number(e.data.is_upper) ? t.voteUserInfo = e.data : t.isLimit = !0);
                        }));
                    },
                    handleNext: function(e) {
                        t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(e)
                        });
                    },
                    handleModalConfirm: function() {
                        4 === this.voteStatus && this.$refs.popup.open(), this.$refs.modal.close();
                    },
                    handleVote: function() {
                        var e = this;
                        3 !== this.voteStatus ? 2 !== this.voteStatus ? 4 !== this.voteStatus ? (t.showLoading({
                            title: "投票中...",
                            mask: !0
                        }), u.default.activity.leaderboardVote({
                            vote_object_id: this.id
                        }).then(function() {
                            var n = b(o.default.mark(function n(r) {
                                return o.default.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        if (t.hideLoading(), e.verify(r)) {
                                            n.next = 3;
                                            break;
                                        }
                                        return n.abrupt("return");

                                      case 3:
                                        return t.showToast({
                                            title: "投票成功！",
                                            icon: "none"
                                        }), e.voteUserInfo = r.data, n.next = 7, e.loadDetail();

                                      case 7:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                            }));
                            return function(t) {
                                return n.apply(this, arguments);
                            };
                        }())) : this.$refs.popup.open() : t.showToast({
                            title: "每日只可投票".concat(this.voteRule.rule_params.all_poll, "次，请明日再来"),
                            icon: "none"
                        }) : this.end();
                    },
                    loadData: function() {
                        var t = b(o.default.mark(function t() {
                            var e, n, r, i;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.loadDetail();

                                  case 2:
                                    return t.next = 4, this.$nextTick();

                                  case 4:
                                    return t.next = 6, this.getTextHeight();

                                  case 6:
                                    e = t.sent, n = l(e, 1), r = n[0], i = r.height > (0, a.transformRpx)(176), this.hideText = i, 
                                    this.overflow = i, this.loadUserVoteInfo(), this.loadVoteRule();

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadDetail: function() {
                        var t = b(o.default.mark(function t() {
                            var e;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, u.default.activity.leaderboardDataDetail({
                                        vote_object_id: this.id
                                    });

                                  case 2:
                                    if (e = t.sent, this.verify(e)) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 5:
                                    this.detail = e.data, this.voteData = e.data, this.queryServerVoteStatus(e.data.vote_id), 
                                    this.pollingVoteStatus(e.data), this.name = e.data.object_name, this.image = e.data.cover, 
                                    this.setCurrentObject(h(h({}, this.currentObject), {}, {
                                        total_vote_number: this.detail.total_vote_number
                                    }));

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadVoteRule: function() {
                        var t = this;
                        u.default.activity.leaderboard({
                            vote_id: this.detail.vote_id
                        }).then(function(e) {
                            t.verify(e) && "object" === s(e.data.rule) && (t.voteRule = e.data.rule);
                        });
                    },
                    loadUserVoteInfo: function() {
                        var t = this;
                        u.default.activity.leaderboardVoteUser({
                            vote_id: this.detail.vote_id
                        }).then(function(e) {
                            t.verify(e) && (t.voteUserInfo = e.data);
                        });
                    },
                    getTextHeight: function() {
                        return new Promise(function(e) {
                            var n = t.createSelectorQuery();
                            n.select("#text").boundingClientRect(), n.exec(function(t) {
                                e(t);
                            });
                        });
                    },
                    handleShare: function() {}
                })
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    "3a7e": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("53b4"), r = n("a955");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("b6db"), n("afbb");
        var i = n("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, "68cbcd9d", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "53b4": function(t, e, n) {
        "use strict";
        var o = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.hideText = !t.hideText;
            });
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    8380: function(t, e, n) {},
    a2b9: function(t, e, n) {},
    a955: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("2b5c"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    afbb: function(t, e, n) {
        "use strict";
        var o = n("a2b9");
        n.n(o).a;
    },
    b6db: function(t, e, n) {
        "use strict";
        var o = n("8380");
        n.n(o).a;
    }
}, [ [ "27ec", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);