require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/yearEndActivity" ], {
    "0db6": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c799"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    "2e53": function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "40de": function(t, e, n) {},
    c10c: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("2e53"), a = n("0db6");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("e0ca");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    c799: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), a = o(n("4ec3")), i = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function c(t, e, n, r, a, i, o) {
                try {
                    var s = t[i](o), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            c(i, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            c(i, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var l = {
                data: function() {
                    return {
                        showRules: !1,
                        tab: 1,
                        voteSuccess: !1,
                        keywords: "",
                        pages: 1,
                        more: !0,
                        top_data: {},
                        projects: [],
                        endTime: "",
                        day: "",
                        hour: "",
                        minutes: "",
                        second: "",
                        startTime: "",
                        formID: "",
                        RemainNum: 0,
                        weapp: {
                            nickName: "",
                            city: ""
                        },
                        uniq_id: "",
                        topHeight: !1,
                        typeList: [],
                        category_id: 1,
                        scroll: null,
                        loading: !0,
                        viewType: !0,
                        title: ""
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("在这里参与".concat(this.top_data.title, "活动"));
                },
                onReachBottom: function() {
                    var t = d(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext.call(this);

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
                    var e = d(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
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
                    var t = d(r.default.mark(function t() {
                        var e, n, o, s = this;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.scroll = this.pageScrollControl(function(t) {
                                    s.topHeight = t.scrollTop > 430;
                                }, 100), e = i.cache.get("userinfo") || {}, this.weapp = '{"nickName": "'.concat(e.nickName, '", "city": "').concat(e.city, '"}'), 
                                t.next = 5, a.default.voteIndex("", this.pages, this.uniq_id);

                              case 5:
                                if (0 !== (n = t.sent).code || !n.data || !n.data.top_data.id) {
                                    t.next = 16;
                                    break;
                                }
                                return this.top_data = n.data.top_data, this.endTime = n.data && n.data.top_data ? n.data.top_data.vote_end_time : "", 
                                this.title = this.top_data.title, t.next = 12, this.timeChange();

                              case 12:
                                return t.next = 14, a.default.yearActivity(this.top_data.id);

                              case 14:
                                0 === (o = t.sent).code && o.data && o.data.length > 0 && (this.typeList = o.data, 
                                this.category_id = o.data[0].id);

                              case 16:
                                return t.next = 18, this.reload.call(this);

                              case 18:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    stopMove: function() {
                        return !1;
                    },
                    closeRulesView: function() {
                        this.showRules = !1;
                    },
                    lookRules: function() {
                        this.showRules = !0;
                    },
                    switchTab: function() {
                        var t = d(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.viewType = !0, this.category_id = e, this.keywords = "", t.next = 5, 
                                    this.reload.call(this);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    clearInput: function() {
                        var t = d(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.keywords = "", t.next = 3, this.reload.call(this);

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    vote: function() {
                        var e = d(r.default.mark(function e(n, i) {
                            var o, s, u = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return i && i.detail && a.default.sendFromID(i.detail.formId).then(function() {}), 
                                    o = this.projects[n], e.next = 4, a.default.userVote(o.id, this.top_data.id);

                                  case 4:
                                    s = e.sent, this.RemainNum = s.data && s.data.num ? s.data.num : 0, s.data && "投票成功" === s.data.data && (o.total_vote += 1, 
                                    this.voteSuccess = !0, setTimeout(function() {
                                        u.voteSuccess = !1, t.hideLoading(), t.navigateTo({
                                            url: "/subPackages/activity/pages/buildingVote?id=".concat(o.id, "&vote_id=").concat(o.vote_id)
                                        });
                                    }, 2e3));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    sure: function() {
                        var t = d(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.viewType = !1, e && e.detail && a.default.sendFromID(e.detail.formId).then(function() {}), 
                                    this.projects = [], t.next = 5, this.reload.call(this);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    oInpChange: function(t) {
                        this.keywords = t.detail.value;
                    },
                    loadNext: function() {
                        var t = d(r.default.mark(function t() {
                            var e, n, i, o, u = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.yearActivityList(this.category_id, this.top_data.id, this.keywords, this.pages, this.uniq_id);

                                  case 2:
                                    if ((e = t.sent).data && (this.pages >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.pages += 1, 
                                    this.projects = [].concat(s(this.projects), s(e.data.data)), this.uniq_id = e.data.uniq_id), 
                                    this.projects.length > 0) for (n = [], i = function(t) {
                                        n.push(u.projects[t].id), u.ids = n.join(","), u.typeList.forEach(function(e) {
                                            String(u.projects[t].categories_id) === String(e.id) && (u.projects[t].tagName = e.title);
                                        });
                                    }, o = 0; o < this.projects.length; o += 1) i(o);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = d(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), this.loading = !1, this.more = !0, this.pages = 1, this.projects = [], e.next = 7, 
                                    this.loadNext.call(this);

                                  case 7:
                                    this.loading = !0, t.hideLoading();

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    onPageScroll: function() {
                        var t = d(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.scroll && this.scroll(e);

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    pageScrollControl: function(t, e) {
                        var n = null, r = this;
                        return function() {
                            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                            n && clearTimeout(n), n = setTimeout(function() {
                                t.apply(r, i);
                            }, e);
                        };
                    },
                    timeChange: function() {
                        var t = d(r.default.mark(function t() {
                            var e, n = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.endTime && (e = new Date(this.endTime.replace(/-/g, "/")).getTime(), setInterval(function() {
                                        var t = new Date().getTime(), r = (e - t) / 1e3, a = parseInt(r / 86400, 10), i = parseInt(r % 86400 / 3600, 10), o = parseInt(r % 3600 / 60, 10), s = parseInt(r % 60, 10);
                                        n.day = a < 0 ? 0 : a, n.hour = i < 0 ? 0 : i, n.minutes = o < 0 ? 0 : o, n.second = s < 0 ? 0 : s;
                                    }, 1e3));

                                  case 1:
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
            e.default = l;
        }).call(this, n("543d").default);
    },
    ce0a: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c10c")).default);
        }).call(this, n("543d").createPage);
    },
    e0ca: function(t, e, n) {
        "use strict";
        var r = n("40de");
        n.n(r).a;
    }
}, [ [ "ce0a", "common/runtime", "common/vendor" ] ] ]);