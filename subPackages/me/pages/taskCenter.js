require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/taskCenter" ], {
    "23f6": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5430"), r = n("96ca");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("773b");
        var s = n("f0c5"), i = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "3c5a": function(t, e, n) {},
    5430: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "5de6": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("23f6")).default);
        }).call(this, n("543d").createPage);
    },
    "773b": function(t, e, n) {
        "use strict";
        var a = n("3c5a");
        n.n(a).a;
    },
    8555: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function u(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], a = !0, r = !1, o = void 0;
                        try {
                            for (var s, i = t[Symbol.iterator](); !(a = (s = i.next()).done) && (n.push(s.value), 
                            !e || n.length !== e); a = !0) ;
                        } catch (t) {
                            r = !0, o = t;
                        } finally {
                            try {
                                a || null == i.return || i.return();
                            } finally {
                                if (r) throw o;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function f(t, e, n, a, r, o, s) {
                try {
                    var i = t[o](s), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function s(t) {
                            f(o, a, r, s, i, "next", t);
                        }
                        function i(t) {
                            f(o, a, r, s, i, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var h = null, p = {
                components: {
                    BusiBottomLine: function() {
                        n.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(n("d754"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TaskItem: function() {
                        n.e("subPackages/me/pages/components/TaskItemCom").then(function() {
                            return resolve(n("91ba"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseInfo: function() {
                        n.e("subPackages/me/pages/components/taskCenter/BaseInfo").then(function() {
                            return resolve(n("1df5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SignIn: function() {
                        n.e("subPackages/me/pages/components/taskCenter/SignIn").then(function() {
                            return resolve(n("e173"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        liveless: 0,
                        point: 0,
                        meta: {},
                        tasks: t.getStorageSync("task_center_task_list") || new Array(5).fill({
                            skeleton: !0
                        }),
                        showProjectBox: !1,
                        salesManId: "",
                        customTaskList: []
                    };
                },
                onShow: function() {
                    this.loadData();
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onLoad: function(t) {
                    this.$refs.busiNavHeader.setTransparentMode(), this.salesManId = t.salesManId;
                },
                mounted: function() {
                    t.setNavigationBarTitle({
                        title: "杭州房小团-任务中心"
                    });
                },
                onPullDownRefresh: function() {
                    var e = d(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.loadData();

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
                    clearInterval(h), h = null;
                },
                methods: {
                    navigatoDetail: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/taskDetail?taskId=".concat(e, "&salesManId=").concat(this.salesManId)
                        });
                    },
                    loadData: function() {
                        var e = d(a.default.mark(function e() {
                            var n, o, s, c, l, f, d = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.$refs.signIn.getSignInfo(), e.next = 3, Promise.all([ r.default.sales.salesInfo(), r.default.integralBaseInfo(), r.default.task(), r.default.customTask(this.salesManId) ]);

                                  case 3:
                                    n = e.sent, o = u(n, 4), s = o[0], c = o[1], l = o[2], f = o[3], s.data && s.data.sales_man && (this.liveless = s.data.sales_man.liveness || 0), 
                                    this.point = c.data ? c.data.today_point : 0, l.data && l.data.list && l.data.list.length > 0 && (this.tasks = l.data.list.filter(function(t) {
                                        return 1 === Number(t.is_show);
                                    }), t.setStorage({
                                        key: "task_center_task_list",
                                        data: this.tasks
                                    })), this.meta = l.data && l.data.meta, Array.isArray(f.data) && (this.customTaskList = f.data.map(function(t) {
                                        return i(i({}, t), {}, {
                                            is_show: 1
                                        });
                                    }), this.customTaskList.forEach(function(t, e) {
                                        2 === Math.floor(t.time_type) && t.end_time && d.computedTime(e);
                                    }));

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    getIntegralBaseInfo: function() {
                        var t = d(a.default.mark(function t() {
                            var e, n, o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.integralBaseInfo();

                                  case 2:
                                    e = t.sent, n = e.data, o = void 0 === n ? {} : n, this.point = o.today_point || 0;

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
                    handleCheck: function(e) {
                        e.is_done || t.navigateTo({
                            url: "/subPackages/me/pages/signInNew"
                        });
                    },
                    handleOperate: function(e) {
                        "copy" === e.url ? t.setClipboardData({
                            data: this.meta.wechat_code
                        }) : "upload" === e.url ? this.showProjectInfo() : "LevelClear" === e.code ? e.is_click && t.navigateTo({
                            url: e.url
                        }) : t.navigateTo({
                            url: "".concat(e.url, "?salesMan_id=").concat(this.salesManId),
                            fail: function() {
                                t.switchTab({
                                    url: e.url
                                });
                            }
                        });
                    },
                    handleNext: function(e) {
                        var n;
                        n = 1 === e ? "/subPackages/me/pages/nowInteral" : "/subPackages/me/pages/vitalityIntegral", 
                        t.navigateTo({
                            url: n
                        });
                    },
                    showProjectInfo: function() {
                        this.showProjectBox = !this.showProjectBox;
                    },
                    toUrl: function(e) {
                        switch (Math.floor(e)) {
                          case 1:
                            t.navigateTo({
                                url: "/subPackages/lottery/pages/addHouseIn"
                            });
                            break;

                          case 2:
                            t.navigateTo({
                                url: "/subPackages/lottery/pages/uploadPic"
                            });
                            break;

                          case 3:
                            t.navigateTo({
                                url: "/subPackages/lottery/pages/uploadVideo"
                            });
                        }
                        this.showProjectBox = !1;
                    },
                    computedTime: function(t) {
                        var e = this.customTaskList[t], n = new Date(e.end_time.replace(/-/g, "/")).getTime(), a = new Date(e.start_time.replace(/-/g, "/")).getTime();
                        function r() {
                            var t = new Date().getTime(), r = (n - t) / 1e3;
                            if (a > t ? r = (a - t) / 1e3 : e.start_time = "", t > n) return e.is_show = 0;
                            var o = Math.floor(r / 86400), s = Math.floor(r % 86400 / 3600), i = Math.floor(r % 3600 / 60), c = Math.floor(r % 60);
                            return e.end_time = o > 0 ? "".concat(o, "天 ").concat(s, "小时").concat(i, "分").concat(c, "秒") : "".concat(s, "小时").concat(i, "分").concat(c, "秒");
                        }
                        r(), h = setInterval(r, 1e3);
                    }
                }
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    "96ca": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8555"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    }
}, [ [ "5de6", "common/runtime", "common/vendor" ] ] ]);