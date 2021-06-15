require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/leaderboard" ], {
    2863: function(t, e, r) {},
    "3f73": function(t, e, r) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r("6cdc"), e(r("66fd")), t(e(r("ef74")).default);
        }).call(this, r("543d").createPage);
    },
    "5ca6": function(t, e, r) {},
    "5cdf": function(t, e, r) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(r("a34a")), o = u(r("4ec3")), n = u(r("ca00")), i = r("2f62"), c = u(r("d772")), s = u(r("c877"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var r = [], a = !0, o = !1, n = void 0;
                        try {
                            for (var i, c = t[Symbol.iterator](); !(a = (i = c.next()).done) && (r.push(i.value), 
                            !e || r.length !== e); a = !0) ;
                        } catch (t) {
                            o = !0, n = t;
                        } finally {
                            try {
                                a || null == c.return || c.return();
                            } finally {
                                if (o) throw n;
                            }
                        }
                        return r;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return h(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
                return a;
            }
            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            function f(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, a);
                }
                return r;
            }
            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(r), !0).forEach(function(e) {
                        p(t, e, r[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    });
                }
                return t;
            }
            function p(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t;
            }
            function v(t, e, r, a, o, n, i) {
                try {
                    var c = t[n](i), s = c.value;
                } catch (t) {
                    return void r(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(a, o);
            }
            function b(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(a, o) {
                        var n = t.apply(e, r);
                        function i(t) {
                            v(n, a, o, i, c, "next", t);
                        }
                        function c(t) {
                            v(n, a, o, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var g = n.default.dayjs, y = n.default.pageJump;
            g.extend(c.default);
            var j = {
                components: {
                    countdown: function() {
                        r.e("subPackages/activity/components/leaderboard/countdown").then(function() {
                            return resolve(r("bd24"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    project: function() {
                        r.e("subPackages/activity/components/leaderboard/project").then(function() {
                            return resolve(r("c89d"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    overlapping: function() {
                        r.e("subPackages/activity/components/leaderboard/overlapping").then(function() {
                            return resolve(r("2c0d"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    OrderProject: function() {
                        r.e("subPackages/activity/components/leaderboard/OrderProject").then(function() {
                            return resolve(r("46c8"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    modal: function() {
                        Promise.all([ r.e("subPackages/activity/common/vendor"), r.e("subPackages/activity/components/leaderboard/modal") ]).then(function() {
                            return resolve(r("ad38"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    SharePopup: function() {
                        Promise.all([ r.e("common/vendor"), r.e("components/UILayout/BusiPopup/SharePopup") ]).then(function() {
                            return resolve(r("093f"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    Popup: function() {
                        Promise.all([ r.e("common/vendor"), r.e("components/UILayout/BusiPopup/BasePopup") ]).then(function() {
                            return resolve(r("ccdd"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    tab: function() {
                        r.e("subPackages/activity/components/leaderboard/tab").then(function() {
                            return resolve(r("6141"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    CreatePoster: function() {
                        r.e("subPackages/activity/components/CreatePoster").then(function() {
                            return resolve(r("411f"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                filters: {
                    isActive: function(t, e) {
                        return t === e;
                    }
                },
                mixins: [ s.default ],
                data: function() {
                    return {
                        active: 1,
                        showHomeTab: !0,
                        voteId: "",
                        middleTab: [],
                        voteUserInfo: {},
                        voteData: {},
                        voteRule: {},
                        num: {
                            total_visitor_number: "总访问数",
                            total_join_number: "总参与数",
                            total_vote_number: "总投票数"
                        },
                        homeParam: {
                            page: 1,
                            size: 10,
                            vote_id: "",
                            vote_group_id: "",
                            order: "random",
                            loading: !1,
                            more: !0
                        },
                        projectParam: {
                            page: 1,
                            size: 20,
                            vote_id: "",
                            vote_group_id: "",
                            order: "rank",
                            loading: !1,
                            more: !0
                        },
                        searchParam: {
                            page: 1,
                            size: 10,
                            vote_id: "",
                            order: "search",
                            keyword: "",
                            loading: !1,
                            more: !0
                        },
                        homeList: [],
                        projectList: [],
                        logoImage: "https://imgcdn.huanjutang.com/assets/img/2020129958558081.png",
                        tab: [ {
                            id: 1,
                            active: "https://imgcdn.huanjutang.com/assets/img/2020129105738081.png",
                            default: "https://imgcdn.huanjutang.com/assets/img/20201291057238081.png",
                            font: "活动首页"
                        }, {
                            id: 2,
                            active: "https://imgcdn.huanjutang.com/assets/img/20201291057388081.png",
                            default: "https://imgcdn.huanjutang.com/assets/img/2020129105878081.png",
                            font: "楼盘排行"
                        }, {
                            id: 3,
                            active: "https://imgcdn.huanjutang.com/assets/img/20201291058238081.png",
                            default: "https://imgcdn.huanjutang.com/assets/img/20201291058418081.png",
                            font: "活动规则"
                        } ],
                        nodes: "",
                        buttonLink: "",
                        currentObjectId: "",
                        currentObjectImage: "",
                        currentObjectName: "",
                        currentVoteName: "",
                        isLimit: !1,
                        shareData: {},
                        showBack: !1,
                        height: 603,
                        homeGroupId: 0,
                        projectGroupId: 0,
                        paramKey: "homeParam"
                    };
                },
                computed: {
                    popupText: function() {
                        var t = 0;
                        return this.voteRule.rule_params && (t = this.voteRule.rule_params.share_poll), 
                        "邀请好友投票可获得 ".concat(t, " 次投票机会");
                    },
                    restCount: function() {
                        return this.isObjectEmpty(this.voteUserInfo) ? 0 : this.voteUserInfo.total_vote_number - this.voteUserInfo.use_vote_number;
                    },
                    currentIndex: function() {
                        return this.$store.getters.currentIndex;
                    },
                    currentObject: function() {
                        return this.$store.getters.currentObject;
                    },
                    currentSourceParam: function() {
                        return this.$store.getters.currentSourceParam;
                    },
                    currentObjectPath: function() {
                        return this.currentObjectId ? "leaderboardProject" : "leaderboard";
                    }
                },
                onLoad: function(e) {
                    var r = e.vote_id;
                    if (!r) throw new Error("没有传入活动id");
                    this.voteId = r, this.loadData(), this.height = t.getSystemInfoSync().windowHeight;
                },
                onReachBottom: function() {
                    var t = b(a.default.mark(function t() {
                        var e, r;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e = {
                                    1: {
                                        key: this.paramKey,
                                        func: "loadHomeList"
                                    },
                                    2: {
                                        key: "projectParam",
                                        func: "loadProjectList"
                                    }
                                }, r = e[this.active]) {
                                    t.next = 4;
                                    break;
                                }
                                return t.abrupt("return");

                              case 4:
                                if (this[r.key].more && !this[r.key].loading) {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return");

                              case 6:
                                return t.next = 8, this[r.func]();

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
                onPullDownRefresh: function() {
                    var e = b(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
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
                onPageScroll: function(t) {
                    var e = t.scrollTop;
                    this.showBack = e > this.height;
                },
                onShow: function() {
                    var t = this.currentSourceParam, e = this.currentIndex, r = this.currentObject;
                    -1 !== e && (this.$set(this[t], e, r), this.setCurrentIndex(-1), this.setCurrentObject({}), 
                    this.setCurrentSourceParam(""), this.voteId && this.queryServerVoteStatus(this.voteId));
                },
                methods: m(m({}, (0, i.mapMutations)({
                    setCurrentIndex: "activity/SET_CURRENT_INDEX",
                    setCurrentObject: "activity/SET_CURRENT_OBJECT",
                    setCurrentSourceParam: "activity/SET_CURRENT_SOURCE_PARAM"
                })), {}, {
                    shareHook: function() {
                        this.$refs.popup.close(), this.addVoteCount();
                    },
                    objectClone: function(t) {
                        return JSON.parse(JSON.stringify(t));
                    },
                    addVoteCount: function() {
                        var t = this;
                        3 !== Number(this.voteStatus) && 2 !== Number(this.voteStatus) && (this.isLimit || o.default.activity.leaderboardShare({
                            vote_id: this.voteId
                        }).then(function(e) {
                            t.verify(e) && (1 !== Number(e.data.is_upper) ? t.voteUserInfo = e.data : t.isLimit = !0);
                        }));
                    },
                    handleTabChange: function(t) {
                        var e = this;
                        t !== this.active && this.backToTop(function() {
                            e.active = t, e.homeParam.page = 1, e.searchParam.page = 1, e.projectParam.page = 1, 
                            e.loadOrderData();
                        });
                    },
                    loadHomeList: function() {
                        var t = this;
                        if (!this[this.paramKey].loading) {
                            this[this.paramKey].loading = !0;
                            var e = this.objectClone(this[this.paramKey]);
                            delete e.more, delete e.loading, o.default.activity.leaderboardData(e).then(function(e) {
                                t[t.paramKey].loading = !1, "[object Array]" === Object.prototype.toString.call(e.data) && (e.data.length ? t[t.paramKey].page += 1 : t[t.paramKey].more = !1, 
                                t.homeList = t.homeList.concat(e.data));
                            });
                        }
                    },
                    loadProjectList: function() {
                        var t = this;
                        if (!this.projectParam.loading) {
                            var e = this.objectClone(this.projectParam);
                            delete e.more, delete e.loading, this.projectParam.loading = !0, o.default.activity.leaderboardData(e).then(function(e) {
                                t.projectParam.loading = !1, "[object Array]" === Object.prototype.toString.call(e.data) && (e.data.length ? t.projectParam.page += 1 : t.projectParam.more = !1, 
                                t.projectList = t.projectList.concat(e.data));
                            });
                        }
                    },
                    handleInputClick: function() {},
                    handleKeywordChange: function(t) {
                        var e = this;
                        t.detail.value && (this.paramKey = "searchParam", this.backToTop(function() {
                            var r = m(m({}, e.searchParam), {}, {
                                keyword: t.detail.value,
                                vote_id: e.voteId,
                                page: 1,
                                more: !0
                            });
                            e.showHomeTab = !1, delete r.vote_group_id, e.searchParam = r, e.homeList = [], 
                            e.loadHomeList();
                        }));
                    },
                    handleHomeLeaderboardClick: function(t) {
                        var e = m(m({}, this.homeParam), {}, {
                            vote_id: this.voteId,
                            vote_group_id: t,
                            page: 1,
                            more: !0
                        });
                        this.homeGroupId = t, this.homeParam = e, this.homeList = [], this.loadHomeList();
                    },
                    handleProjectLeaderboardClick: function(t) {
                        var e = m(m({}, this.projectParam), {}, {
                            vote_id: this.voteId,
                            vote_group_id: t,
                            page: 1,
                            more: !0
                        });
                        this.projectGroupId = t, this.projectParam = e, this.projectList = [], this.loadProjectList();
                    },
                    handleVote: function(e, r) {
                        var a = this;
                        this.restCount <= 0 && 4 === this.voteStatus ? this.$refs.popup.open() : (t.showLoading({
                            title: "投票中...",
                            mask: !0
                        }), o.default.activity.leaderboardVote({
                            vote_object_id: e.id
                        }).then(function(o) {
                            if (t.hideLoading(), a.verify(o)) {
                                a.$refs.modal.open(), a.voteUserInfo = o.data, a.currentObjectId = e.id, a.currentObjectName = e.object_name, 
                                a.currentObjectImage = e.cover, a.currentVoteName = a.shareData.verb_share_title;
                                var n = m({}, e);
                                n.total_vote_number += 1, a.$set(a.homeList, r, n);
                            }
                        }));
                    },
                    handleModalConfirm: function() {
                        this.restCount <= 0 && 4 === this.voteStatus ? this.$refs.popup.open() : (this.currentObjectId = "", 
                        this.currentVoteName = "", this.currentObjectImage = this.shareData.default_share_image, 
                        this.currentObjectName = this.shareData.default_share_title), this.$refs.modal.close();
                    },
                    handleNext: function() {
                        y(this.buttonLink);
                    },
                    backToTop: function(e) {
                        t.pageScrollTo({
                            scrollTop: 0,
                            success: function() {
                                "function" == typeof e && e();
                            }
                        });
                    },
                    handleClear: function() {
                        this.$set(this.searchParam, "keyword", ""), this.paramKey = "homeParam", this.homeParam.page = 1, 
                        this.showHomeTab = !0, this.homeList = [], this.loadHomeList();
                    },
                    handleShare: function() {
                        this.currentObjectId = "", this.currentVoteName = "", this.currentObjectImage = this.shareData.default_share_image, 
                        this.currentObjectName = this.shareData.default_share_title;
                    },
                    mapVoteInfoData: function(t) {
                        if (this.verify(t) && "object" === l(t.data.groups) && "object" === l(t.data.rule)) {
                            this.middleTab = t.data.groups, this.voteRule = t.data.rule;
                            var e = t.data;
                            delete e.groups, delete e.rule, this.voteData = e, this.pollingVoteStatus(e.end_time);
                        }
                    },
                    mapVoteUserInfo: function(t) {
                        this.verify(t) && (this.voteUserInfo = t.data);
                    },
                    loadBaseData: function() {
                        var t = b(a.default.mark(function t() {
                            var e, r, n, i, c = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.queryServerVoteStatus(this.voteId), t.next = 3, Promise.all([ o.default.activity.leaderboard({
                                        vote_id: this.voteId
                                    }), o.default.activity.leaderboardVoteUser({
                                        vote_id: this.voteId
                                    }) ]);

                                  case 3:
                                    e = t.sent, r = d(e, 2), n = r[0], i = r[1], this.mapVoteInfoData(n), this.mapVoteUserInfo(i), 
                                    this.$nextTick(function() {
                                        c.loadOrderData();
                                    });

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadOrderData: function() {
                        var t = "tab".concat(this.active);
                        this.$refs[t] && this.$refs[t].refresh();
                    },
                    loadRule: function() {
                        var t = this;
                        o.default.activity.leaderboard({
                            vote_id: this.voteId,
                            type: "rule"
                        }).then(function(e) {
                            t.verify(e) && (t.nodes = e.data.description, t.buttonLink = e.data.customer_service_link);
                        });
                    },
                    loadShareInfo: function() {
                        var t = this;
                        o.default.activity.shareData().then(function(e) {
                            t.verify(e) && (t.shareData = e.data, t.currentObjectImage = t.shareData.default_share_image, 
                            t.currentObjectName = t.shareData.default_share_title);
                        });
                    },
                    loadData: function() {
                        var t = b(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.homeParam.page = 1, this.searchParam.page = 1, this.projectParam.page = 1, 
                                    this.homeList = [], this.projectList = [], "searchParam" !== this.paramKey && this.$set(this.searchParam, "keyword", ""), 
                                    t.next = 8, this.loadBaseData();

                                  case 8:
                                    this.loadRule(), this.loadShareInfo();

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                })
            };
            e.default = j;
        }).call(this, r("543d").default);
    },
    9891: function(t, e, r) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.tab, function(e, r) {
                return {
                    $orig: t.__get_orig(e),
                    f0: t._f("isActive")(e.id, t.active)
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
        r.d(e, "b", function() {
            return a;
        }), r.d(e, "c", function() {
            return o;
        }), r.d(e, "a", function() {});
    },
    aedc: function(t, e, r) {
        "use strict";
        var a = r("2863");
        r.n(a).a;
    },
    b3ad5: function(t, e, r) {
        "use strict";
        var a = r("5ca6");
        r.n(a).a;
    },
    ec7a: function(t, e, r) {
        "use strict";
        r.r(e);
        var a = r("5cdf"), o = r.n(a);
        for (var n in a) "default" !== n && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = o.a;
    },
    ef74: function(t, e, r) {
        "use strict";
        r.r(e);
        var a = r("9891"), o = r("ec7a");
        for (var n in o) "default" !== n && function(t) {
            r.d(e, t, function() {
                return o[t];
            });
        }(n);
        r("b3ad5"), r("aedc");
        var i = r("f0c5"), c = Object(i.a)(o.default, a.b, a.c, !1, null, "458dc46b", null, !1, a.a, void 0);
        e.default = c.exports;
    }
}, [ [ "3f73", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);