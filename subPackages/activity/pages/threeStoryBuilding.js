require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/threeStoryBuilding" ], {
    "2ec0": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("5405")).default);
        }).call(this, n("543d").createPage);
    },
    5405: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d57b"), o = n("aa8e");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("d611");
        var r = n("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    a3ef: function(t, e, n) {},
    aa8e: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("afab"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    afab: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(n("a34a")), o = r(n("4ec3")), i = n("b628");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, a, o, i, r) {
                try {
                    var c = t[i](r), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(a, o);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(e, n);
                        function r(t) {
                            c(i, a, o, r, u, "next", t);
                        }
                        function u(t) {
                            c(i, a, o, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var s = {
                components: {
                    ProjectBoxItem: function() {
                        n.e("subPackages/activity/components/ProjectBoxItem").then(function() {
                            return resolve(n("9b76c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    IssueRecord: function() {
                        n.e("subPackages/activity/components/IssueRecord").then(function() {
                            return resolve(n("3ece"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    NocontentPage: function() {
                        n.e("subPackages/activity/components/NocontentPage").then(function() {
                            return resolve(n("48c0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        redpackData: [],
                        showDialog: !1,
                        notFoundShow: !1,
                        inviteId: "",
                        userId: "",
                        activityId: 6,
                        nodes: "",
                        loading: !0,
                        more: !1,
                        startTime: "",
                        activityTime: ""
                    };
                },
                onPullDownRefresh: function() {
                    var e = u(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.notFoundShow) {
                                    e.next = 3;
                                    break;
                                }
                                return e.next = 3, this.reload();

                              case 3:
                                t.stopPullDownRefresh();

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
                onLoad: function() {
                    var t = u(a.default.mark(function t(e) {
                        var n, r, c, u, s, d, f, h;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = this.$store.getters.userInfo, this.userId = n && n.id, this.inviteId = e.id, 
                                this.inviteId && this.inviteHandle(), this.notFoundShow = i.cache.get("notFoundShow"), 
                                this.notFoundShow || this.reload(), t.next = 8, o.default.activity.reportRule(this.activityId);

                              case 8:
                                (r = t.sent) && r.data && (c = r.data.state, u = 0 === Number(c), this.notFoundShow !== u && (u || this.reload(), 
                                this.notFoundShow = u, i.cache.set("notFoundShow", this.notFoundShow)), this.nodes = r.data.description, 
                                r.data.start_time && r.data.end_time && (s = new Date(r.data.start_time.replace(/-/g, "/")), 
                                d = new Date(r.data.end_time.replace(/-/g, "/")), f = "".concat(s.getMonth() + 1, "月").concat(s.getDate(), "日"), 
                                h = "".concat(d.getMonth() + 1, "月").concat(d.getDate(), "日"), this.activityTime = "".concat(f, "-").concat(h)));

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                onShow: function() {
                    this.showDialog && this.$refs.redPaperRecord && this.$refs.redPaperRecord.getIssueData();
                },
                onShareAppMessage: function() {
                    return i.share.share("红包活动", "/subPackages/activity/pages/threeStoryBuilding?id=".concat(this.userId));
                },
                onReachBottom: function() {
                    var t = u(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more && !this.loading) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

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
                methods: {
                    inviteHandle: function() {
                        o.default.activity.redpachInvite(this.activityId, this.inviteId).then(function() {});
                    },
                    reload: function() {
                        var t = u(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.page = 1, this.redpackData = [], this.more = !0, t.next = 5, this.loadNext();

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
                    loadNext: function() {
                        var t = u(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, t.next = 3, o.default.activity.redpackList(this.activityId, this.page);

                                  case 3:
                                    !(e = t.sent) || !e.data.total || e.data.total / 10 <= this.page ? this.more = !1 : this.page += 1, 
                                    e && e.data && e.data.list && (this.loading = !1, this.redpackData = this.redpackData.concat(e.data.list));

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    emptyFunction: function() {}
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    d57b: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, encodeURIComponent(t.nodes));
            t._isMounted || (t.e0 = function(e) {
                t.showDialog = !0;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    d611: function(t, e, n) {
        "use strict";
        var a = n("a3ef");
        n.n(a).a;
    }
}, [ [ "2ec0", "common/runtime", "common/vendor" ] ] ]);