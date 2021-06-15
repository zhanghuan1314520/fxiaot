require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/purchaseInfoCommonProblem" ], {
    "111f": function(t, e, n) {
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
    "4eb4": function(t, e, n) {
        "use strict";
        var a = n("a226");
        n.n(a).a;
    },
    8478: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = o(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var a = 0, r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: r
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, s = !0, u = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        u = !0, i = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (u) throw i;
                        }
                    }
                };
            }
            function o(t, e) {
                if (t) {
                    if ("string" == typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                }
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function c(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s), u = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(u) : Promise.resolve(u).then(a, r);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function s(t) {
                            c(i, a, r, s, o, "next", t);
                        }
                        function o(t) {
                            c(i, a, r, s, o, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        listData: [],
                        page: 1,
                        more: !0,
                        showDetail: !1,
                        type: 1,
                        showCont: null
                    };
                },
                onLoad: function() {
                    var e = l(a.default.mark(function e(n) {
                        var r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                    title: "加载中..."
                                }), this.type = n.type || 1, r = 2 === parseInt(this.type, 10) ? "公积金问题" : "摇号常见问题", 
                                t.setNavigationBarTitle({
                                    title: r
                                }), e.next = 7, this.loadNext();

                              case 7:
                                t.hideLoading();

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
                onPullDownRefresh: function() {
                    var e = l(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!this.showDetail) {
                                    e.next = 3;
                                    break;
                                }
                                return t.stopPullDownRefresh(), e.abrupt("return");

                              case 3:
                                return e.next = 5, this.reload();

                              case 5:
                                t.stopPullDownRefresh();

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
                onReachBottom: function() {
                    var t = l(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
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
                methods: {
                    stopMove: function() {
                        return !1;
                    },
                    previewImg: function(e) {
                        var n = this.showCont.images;
                        t.previewImage({
                            urls: n,
                            current: n[e]
                        });
                    },
                    closeHandle: function() {
                        this.showDetail = !1, this.showCont = null;
                    },
                    viewDetail: function(t, e) {
                        this.showCont = this.listData[t].value[e], this.showDetail = !0;
                    },
                    toggleHidden: function() {
                        var t = l(a.default.mark(function t(e) {
                            var n, i = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(this.listData[e].children_num > 0 && 0 !== parseInt(this.listData[e].has_children, 10))) {
                                        t.next = 8;
                                        break;
                                    }
                                    return this.listData.forEach(function(t, n) {
                                        parseInt(e, 10) !== n ? (i.$set(i.listData[n], "isToggle", !1), i.$set(i.listData, n, i.listData[n])) : (i.$set(i.listData[n], "isToggle", !t.isToggle), 
                                        i.$set(i.listData, n, i.listData[n]));
                                    }), t.next = 4, r.default.purchaseProblem(this.listData[e].id, this.type);

                                  case 4:
                                    (n = t.sent).data && n.data.data && (n.data.data.forEach(function(t) {
                                        t.images = t.images ? t.images.split(",") : [];
                                    }), this.listData[e].value = n.data.data, this.$set(this.listData[e], "value", n.data.data), 
                                    this.$set(this.listData, e, this.listData[e])), t.next = 10;
                                    break;

                                  case 8:
                                    this.showCont = this.listData[e], this.showDetail = !0;

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
                    loadNext: function() {
                        var t = l(a.default.mark(function t() {
                            var e, n, i;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.purchaseProblem(0, this.type, this.page);

                                  case 2:
                                    if ((e = t.sent).data) {
                                        n = s(e.data.data);
                                        try {
                                            for (n.s(); !(i = n.n()).done; ) i.value.isToggle = !1;
                                        } catch (t) {
                                            n.e(t);
                                        } finally {
                                            n.f();
                                        }
                                        this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                        e.data.data && (e.data.data.map(function(t) {
                                            return t.images = t.images ? t.images.split(",") : [];
                                        }), this.listData = this.listData.concat(e.data.data));
                                    }

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
                    reload: function() {
                        var e = l(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.more = !0, this.page = 1, this.listData = [], e.next = 6, this.loadNext();

                                  case 6:
                                    t.hideLoading();

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    8563: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8478"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    a226: function(t, e, n) {},
    ae13: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("111f"), r = n("8563");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("4eb4");
        var s = n("f0c5"), o = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    f0a8: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ae13")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f0a8", "common/runtime", "common/vendor" ] ] ]);