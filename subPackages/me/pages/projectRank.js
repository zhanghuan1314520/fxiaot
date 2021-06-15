require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/projectRank" ], {
    "0d2b": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("ddd7")).default);
        }).call(this, e("543d").createPage);
    },
    1264: function(n, t, e) {
        "use strict";
        var r = e("bbbe");
        e.n(r).a;
    },
    "8e0d": function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(e("a34a")), a = i(e("4ec3"));
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function o(n) {
                return function(n) {
                    if (Array.isArray(n)) return u(n);
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) return Array.from(n);
                }(n) || function(n, t) {
                    if (n) {
                        if ("string" == typeof n) return u(n, t);
                        var e = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? u(n, t) : void 0;
                    }
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
                return r;
            }
            function s(n, t, e, r, a, i, o) {
                try {
                    var u = n[i](o), s = u.value;
                } catch (n) {
                    return void e(n);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, a);
            }
            function c(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(r, a) {
                        var i = n.apply(t, e);
                        function o(n) {
                            s(i, r, a, o, u, "next", n);
                        }
                        function u(n) {
                            s(i, r, a, o, u, "throw", n);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                components: {
                    BusiNavHeader: function() {
                        e.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(e("5ed7"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    BusiBottomLine: function() {
                        e.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(e("d754"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    BusiLoading: function() {
                        e.e("components/UILayout/BusiLoading").then(function() {
                            return resolve(e("ea8a"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    ImageLoader: function() {
                        e.e("components/ImageLoader").then(function() {
                            return resolve(e("24e0"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                filters: {
                    salesmanAvatar: function(n) {
                        if (!n) return "";
                        var t = n.indexOf("?") > -1 ? "&" : "?";
                        return "".concat(n + t, "imageView2/1/w/168");
                    }
                },
                data: function() {
                    return {
                        projectName: "杭州房小团",
                        icon: {
                            first: "https://imgcdn.huanjutang.com/file/2021/01/18/93ddf2b8d368e41f8ed78d6bec783b90.png",
                            second: "https://imgcdn.huanjutang.com/file/2020/12/31/f0639e950d86e6b89b3a780940714160.png",
                            third: "https://imgcdn.huanjutang.com/file/2020/12/31/062fa51913f1c180f61c959fbba22119.png",
                            me: "https://imgcdn.huanjutang.com/file/2020/12/28/a7f9363b08b8ba17d58d1644da878445.png",
                            default: "https://imgcdn.huanjutang.com/file/2020/12/28/c0a9d24984b2a53b4794315e4bd73a38.png"
                        },
                        name: "--",
                        currentRanking: "--",
                        rankList: new Array(6).fill({
                            skeleton: !0
                        }),
                        page: 1,
                        end: !1,
                        loading: !1
                    };
                },
                onReachBottom: function() {
                    var n = c(r.default.mark(function n() {
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!this.end) {
                                    n.next = 2;
                                    break;
                                }
                                return n.abrupt("return");

                              case 2:
                                return n.next = 4, this.getRanking(!0);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    this.getRanking(), n.stopPullDownRefresh();
                },
                onPageScroll: function(n) {
                    n.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onLoad: function(n) {
                    this.$refs.busiNavHeader.setTransparentMode(), this.sales_id = n.sales_id, this.getRanking();
                },
                methods: {
                    formatIcon: function(n, t) {
                        return t.is_me ? this.icon.me : 0 === n ? this.icon.first : 1 === n ? this.icon.second : 2 === n ? this.icon.third : this.icon.default;
                    },
                    getRanking: function() {
                        var n = c(r.default.mark(function n(t) {
                            var e, i, u;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (!t) {
                                        n.next = 6;
                                        break;
                                    }
                                    if (!this.end) {
                                        n.next = 3;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 3:
                                    this.page += 1, n.next = 8;
                                    break;

                                  case 6:
                                    this.rankList = [], this.page = 1;

                                  case 8:
                                    return this.loading = !0, n.next = 11, a.default.sales.masterRanking({
                                        page: this.page
                                    });

                                  case 11:
                                    e = n.sent, i = e.data, u = void 0 === i ? {
                                        salesman_list: [],
                                        project: {}
                                    } : i, this.loading = !1, 1 === this.page && (this.currentRanking = u.current_ranking || "--", 
                                    this.name = u.project.name), this.rankList = t ? [].concat(o(this.rankList), o(u.salesman_list)) : u.salesman_list, 
                                    this.end = u.total <= this.rankList.length;

                                  case 18:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function(t) {
                            return n.apply(this, arguments);
                        };
                    }(),
                    goTaskCenter: function(t) {
                        n.navigateTo({
                            url: "/subPackages/me/pages/taskCenter?salesManId=".concat(t)
                        });
                    }
                }
            };
            t.default = f;
        }).call(this, e("543d").default);
    },
    "8fc0": function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("8e0d"), a = e.n(r);
        for (var i in r) "default" !== i && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(i);
        t.default = a.a;
    },
    bbbe: function(n, t, e) {},
    ddd7: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("eab1"), a = e("8fc0");
        for (var i in a) "default" !== i && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(i);
        e("1264");
        var o = e("f0c5"), u = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    },
    eab1: function(n, t, e) {
        "use strict";
        var r = function() {
            var n = this, t = (n.$createElement, n._self._c, n.__map(n.rankList, function(t, e) {
                return {
                    $orig: n.__get_orig(t),
                    m0: n.formatIcon(e, t),
                    a0: {
                        "margin-right": "28rpx",
                        width: "112rpx",
                        height: "112rpx",
                        "border-radius": "56rpx"
                    },
                    f0: n._f("salesmanAvatar")(t.avatar_url)
                };
            }));
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, a = [];
        e.d(t, "b", function() {
            return r;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
    }
}, [ [ "0d2b", "common/runtime", "common/vendor" ] ] ]);