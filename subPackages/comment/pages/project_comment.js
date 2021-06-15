(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/comment/pages/project_comment" ], {
    "1df1": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("7b76"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    "7b76": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = u(n("a34a")), r = u(n("4ec3")), a = u(n("38fb")), i = n("ca00"), c = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], o = !0, r = !1, a = void 0;
                        try {
                            for (var i, c = t[Symbol.iterator](); !(o = (i = c.next()).done) && (n.push(i.value), 
                            !e || n.length !== e); o = !0) ;
                        } catch (t) {
                            r = !0, a = t;
                        } finally {
                            try {
                                o || null == c.return || c.return();
                            } finally {
                                if (r) throw a;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return h(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            function m(t, e, n, o, r, a, i) {
                try {
                    var c = t[a](i), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, r);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = t.apply(e, n);
                        function i(t) {
                            m(a, o, r, i, c, "next", t);
                        }
                        function c(t) {
                            m(a, o, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var v, b = n("f4fd").getUserInfo, g = function() {
                v.reload.call(v);
            }, y = {
                components: {
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OfficialDrainage: function() {
                        n.e("components/CommonSmallCompont").then(function() {
                            return resolve(n("1525"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CommentItem: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/components/lotteryDetail/CommentItem") ]).then(function() {
                            return resolve(n("1db0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    WhiteSpace: function() {
                        n.e("subPackages/comment/components/WhiteSpace").then(function() {
                            return resolve(n("8740"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Loading: function() {
                        n.e("subPackages/comment/components/Loading").then(function() {
                            return resolve(n("bca6"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiBottomLine: function() {
                        n.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(n("d754"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ProjectHead: function() {
                        n.e("subPackages/comment/components/ProjectHead").then(function() {
                            return resolve(n("29e9"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ShowHome: function() {
                        n.e("subPackages/comment/components/ShowHome").then(function() {
                            return resolve(n("59d8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CallSalesman: function() {
                        n.e("components/CallSalesman").then(function() {
                            return resolve(n("f845"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ContactSalesman: function() {
                        n.e("components/ContactSalesman").then(function() {
                            return resolve(n("bf9f"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        project_id: 0,
                        project_name: "",
                        lottery_id: 0,
                        page: 1,
                        more: !0,
                        commentList: [],
                        id: "",
                        project_info: {},
                        userInfo: null,
                        comment: "",
                        recommendComment: {},
                        loading: !1,
                        isSalesMan: 0,
                        hideTip: !1,
                        isShowCommentBtn: !0,
                        btnStatus: []
                    };
                },
                onReachBottom: function() {
                    var t = p(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
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
                onPullDownRefresh: function() {
                    var e = p(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
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
                onUnload: function() {
                    var t = p(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                a.default.removeListener("reloadDataEvent", g), v = null;

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var t = p(o.default.mark(function t(e) {
                        var n = this;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.userInfo = b(), this.project_id = e.project_id, this.lottery_id = e.lottery_id || "", 
                                this.onlyGetOnece(), this.getBtnStatus(), t.next = 7, this.reload.call(this);

                              case 7:
                                v = this, a.default.on("reloadDataEvent", g), r.default.uploadPermission(this.project_id).then(function(t) {
                                    var e = t.data;
                                    n.isShowCommentBtn = e.project_comment;
                                });

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
                onShow: function() {},
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    },
                    bottomHeight: function() {
                        return i.isIPhoneX ? 292 : 238;
                    }
                },
                onHide: function() {
                    var t = this;
                    this.hideTip = !0, this.$nextTick(function() {
                        t.hideTip = !1;
                    });
                },
                onPageScroll: function(t) {
                    this.$refs.busiShareIcon && this.$refs.busiShareIcon.pageScroll(t);
                },
                methods: {
                    delComment: function() {
                        var t = p(o.default.mark(function t(e) {
                            var n;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.delProjectComment(e);

                                  case 2:
                                    (n = t.sent) && 0 === Math.floor(n.code) && (c.tip.toast("删除成功"), this.reload());

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
                    btnEventTrack: function() {},
                    loadNext: function() {
                        var e = p(o.default.mark(function e() {
                            var n, a, i = this;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.loading = !0, e.next = 3, r.default.getProjectCommentList(this.project_id, this.page, 2);

                                  case 3:
                                    if (n = e.sent, this.loading = !1, n) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 7:
                                    n.data && n.data.data && n.data.data.length > 0 ? this.page += 1 : this.more = !1, 
                                    this.project_info = n.data && n.data.project_info || {}, this.project_img = this.project_info.cover, 
                                    this.project_name = this.project_info.name, t.setNavigationBarTitle({
                                        title: "杭州房小团-".concat(this.project_name)
                                    }), a = n.data, this.comment = a && a.comment || "", this.comment = this.comment.replace(/<\/?br\/?>/g, "\n"), 
                                    this.comment = this.comment.replace(/<[^/>]+>/g, ""), this.comment = this.comment.replace(/<\/p>/g, "\n"), 
                                    this.comment = this.comment.replace(/<[^>]+>/g, ""), this.commentList = this.commentList.concat(n.data && n.data.data), 
                                    this.commentList.forEach(function(t) {
                                        i.$set(t, "is_toggle", !0);
                                    });

                                  case 20:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = p(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.page = 1, this.more = !0, this.commentList = [], e.next = 6, this.loadNext();

                                  case 6:
                                    t.stopPullDownRefresh(), t.hideLoading();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    onlyGetOnece: function() {
                        var t = p(o.default.mark(function t() {
                            var e, n, a, i;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, Promise.all([ r.default.isSaleMan(), r.default.recommendComment(this.project_id) ]);

                                  case 2:
                                    e = t.sent, n = d(e, 2), a = n[0], i = n[1], 1 === Math.floor(a.data) && (this.isSalesMan = a.data), 
                                    this.recommendComment = i && l(l({}, i.data), {}, {
                                        change: !0
                                    }) || {};

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
                    commentLike: function(t, e) {
                        r.default.projectCommentLike(t, e);
                    },
                    goProjectDetail: function() {
                        this.showHome ? t.navigateTo({
                            url: "/pages/lotteryDetail?id=&project_id=".concat(this.project_id, "&id=").concat(this.lottery_id)
                        }) : t.navigateBack();
                    },
                    haddleHideTip: function() {
                        var t = this;
                        this.hideTip = !0, this.$nextTick(function() {
                            t.hideTip = !1;
                        });
                    },
                    navigateToComment: function() {
                        var e = this.project_id, n = this.project_name, o = this.id, r = this.isSalesMan, a = this.comment;
                        t.navigateTo({
                            url: "/subPackages/tools/pages/commentInp?project_id=".concat(e, "&title=").concat(n, "&lottery_id=").concat(o, "&isSalesMan=").concat(r, "&comment=").concat(a)
                        });
                    },
                    getBtnStatus: function() {
                        var t = this;
                        r.default.getBtnStatus(this.lottery_id, this.project_id).then(function(e) {
                            e && e.data && (t.btnStatus = e.data);
                        });
                    }
                }
            };
            e.default = y;
        }).call(this, n("543d").default);
    },
    adac: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    c205d: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("adac"), r = n("1df1");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("e6bd");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    c92f: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c205d")).default);
        }).call(this, n("543d").createPage);
    },
    ce4c: function(t, e, n) {},
    e6bd: function(t, e, n) {
        "use strict";
        var o = n("ce4c");
        n.n(o).a;
    }
}, [ [ "c92f", "common/runtime", "common/vendor" ] ] ]);