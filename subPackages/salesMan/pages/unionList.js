(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/unionList" ], {
    "34ee": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3")), o = u(n("c909")), i = n("b628"), c = n("ca00");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
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
            function l(t, e, n, a, r, o, i) {
                try {
                    var c = t[o](i), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(a, r);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function i(t) {
                            l(o, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            l(o, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var h = {
                components: {
                    Loading: function() {
                        n.e("subPackages/salesMan/components/Loading").then(function() {
                            return resolve(n("1001"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ProjectItem: function() {
                        n.e("subPackages/salesMan/components/ProjectItem").then(function() {
                            return resolve(n("afa6"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CustomNavHeader: function() {
                        n.e("subPackages/salesMan/components/CustomNavHeader").then(function() {
                            return resolve(n("9838"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        id: "",
                        list: [],
                        loading: !0,
                        more: !0,
                        background: "",
                        backcolor: "",
                        bgcolor: "transparent",
                        title: "",
                        share_text: "",
                        share_image: ""
                    };
                },
                computed: {
                    paddingTop: function() {
                        var t = i.cache.get("user-phone-info").navHight;
                        return "".concat((0, c.transformRpx)(340) + t, "px");
                    },
                    offsetY: function() {
                        var t = i.cache.get("user-phone-info").statusBarHeight;
                        return "".concat(t - 44, "px");
                    }
                },
                onPageScroll: function(t) {
                    this.bgcolor = t.scrollTop > 50 ? this.backcolor : "transparent";
                },
                onReachBottom: function() {
                    var t = d(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.load(!0);

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
                    var e = d(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.load();

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
                    var e = d(a.default.mark(function e(n) {
                        var i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (t.showShareMenu({
                                    withShareTicket: !0,
                                    menus: [ "shareAppMessage" ]
                                }), !n.hid) {
                                    e.next = 6;
                                    break;
                                }
                                return e.next = 4, r.default.getDecodeHashParams(n.hid);

                              case 4:
                                (i = e.sent) && i.data && (n = i ? (0, o.default)("?".concat(decodeURIComponent(i.data.path))).search(!0) : n);

                              case 6:
                                this.id = n.id, this.load();

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
                onShareAppMessage: function() {
                    return i.share.share(this.share_text, "/subPackages/salesMan/pages/unionList?id=".concat(this.id), this.share_image);
                },
                methods: {
                    load: function(t) {
                        var e = this;
                        if (t) {
                            if (!this.more) return;
                            this.page += 1;
                        } else this.list = [], this.page = 1, this.$emit("clear");
                        this.loading = !0, r.default.getUnionList({
                            page: this.page,
                            project_hot_id: this.id
                        }).then(function(n) {
                            e.background = n.data.background, e.backcolor = n.data.backcolor || "#350055", e.share_text = n.data.share_text, 
                            e.share_image = n.data.share_image;
                            var a = n.data.title;
                            e.title = a.length > 8 ? "".concat(a.substring(0, 8), "...") : a, e.list = t ? [].concat(s(e.list), s(n.data.list)) : n.data.list, 
                            (e.page >= n.data.last_page || !n.data.last_page) && (e.more = !1), e.loading = !1;
                        });
                    },
                    goBack: function() {
                        1 === getCurrentPages().length ? t.switchTab({
                            url: "/pages/index"
                        }) : t.navigateBack();
                    }
                }
            };
            e.default = h;
        }).call(this, n("543d").default);
    },
    a470: function(t, e, n) {
        "use strict";
        var a = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return a;
        });
    },
    b702: function(t, e, n) {},
    e5e4: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("eef6")).default);
        }).call(this, n("543d").createPage);
    },
    eef6: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("a470"), r = n("f1d8");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("fe06");
        var i = n("f0c5"), c = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    f1d8: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("34ee"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    fe06: function(t, e, n) {
        "use strict";
        var a = n("b702");
        n.n(a).a;
    }
}, [ [ "e5e4", "common/runtime", "common/vendor" ] ] ]);