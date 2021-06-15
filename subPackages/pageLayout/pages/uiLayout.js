require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/uiLayout" ], {
    2753: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("99ac")).default);
        }).call(this, n("543d").createPage);
    },
    "2f3b": function(e, t, n) {
        "use strict";
        var o = n("4425");
        n.n(o).a;
    },
    4425: function(e, t, n) {},
    "6d2b": function(e, t, n) {
        "use strict";
        var o = n("a030");
        n.n(o).a;
    },
    "88c8": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("4ec3")), a = n("2f62"), c = n("b628");
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var r = {
                components: {
                    BusiBackgroundDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiBackgroundDefault") ]).then(function() {
                            return resolve(n("e31a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiCubeDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiCubeDefault") ]).then(function() {
                            return resolve(n("79e4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiCubeVariant1: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiCubeVariant1") ]).then(function() {
                            return resolve(n("55d3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiCubeVariant2: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiCubeVariant2") ]).then(function() {
                            return resolve(n("144a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiTabProjectDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiTabProjectDefault") ]).then(function() {
                            return resolve(n("e3e5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiProjectDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiProjectDefault") ]).then(function() {
                            return resolve(n("f87e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiProjectVariant1: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiProjectVariant1") ]).then(function() {
                            return resolve(n("a4ba"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiProjectVariant2: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiProjectVariant2") ]).then(function() {
                            return resolve(n("21dd"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiProjectVariant3: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiProjectVariant3") ]).then(function() {
                            return resolve(n("1a32"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSmartButtonDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiSmartButtonDefault") ]).then(function() {
                            return resolve(n("82f6"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiMotionButtonDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiMotionButtonDefault") ]).then(function() {
                            return resolve(n("ff6d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiBannerDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiBannerDefault") ]).then(function() {
                            return resolve(n("bc99"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiBannerVariant1: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiBannerVariant1") ]).then(function() {
                            return resolve(n("3bdd"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiRichTextDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiRichTextDefault") ]).then(function() {
                            return resolve(n("82fb"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiVideoDefault: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiVideoDefault") ]).then(function() {
                            return resolve(n("2cc8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSearch1: function() {
                        n.e("subPackages/pageLayout/pages/components/BusiSearch1").then(function() {
                            return resolve(n("8fad"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSearch2: function() {
                        n.e("subPackages/pageLayout/pages/components/BusiSearch2").then(function() {
                            return resolve(n("218f0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSearch3: function() {
                        Promise.all([ n.e("subPackages/pageLayout/common/vendor"), n.e("subPackages/pageLayout/pages/components/BusiSearch3") ]).then(function() {
                            return resolve(n("b644"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        id: "",
                        pageStatus: "normal",
                        motionShow: !1,
                        motionDebounce: null,
                        minHeight: e.getSystemInfoSync().windowHeight,
                        setting: {
                            components: []
                        },
                        hasPureSearch: !1
                    };
                },
                computed: {
                    forceFixed: function() {
                        return -1 !== this.tabbarListIndex && !this.hasPureSearch;
                    }
                },
                onPullDownRefresh: function() {
                    var e = this;
                    this.loadNext().then(function() {
                        e.notifyReload();
                    });
                },
                onShareAppMessage: function() {
                    var e = this, t = [], n = "";
                    return this.setting.sharing.links.forEach(function(n) {
                        var o = /\?/.test(n);
                        t.push("".concat(n.replace(/\${(\s*.*?\s*)}/g, function() {
                            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                            return e[n[1]];
                        })).concat(o ? "&__redirect__=" : "?__redirect__="));
                    }), t.forEach(function(e, t) {
                        for (var o = e, a = 0; a < t; a += 1) o = encodeURIComponent(o);
                        n += o;
                    }), {
                        imageUrl: this.setting.sharing.image,
                        path: n,
                        title: this.setting.sharing.title
                    };
                },
                onReachBottom: function() {
                    var e = this;
                    if (this.setting.components) {
                        var t = Object.keys(this.$refs), n = [ "comp-motion" ];
                        t.length > 0 && t.filter(function(e) {
                            return !n.includes(e);
                        }).forEach(function(t) {
                            e.$refs[t][0].loadNext && e.$refs[t][0].loadNext();
                        });
                    }
                },
                onLoad: function(e) {
                    this.id = e.id, this.loadNext();
                },
                onPageScroll: function(e) {
                    this.motionDebounce && this.motionDebounce(e);
                },
                methods: i(i({}, (0, a.mapMutations)({
                    notifyReload: "SET_NOTIFYRELOAD"
                })), {}, {
                    stopHandle: function() {},
                    hiddenFilterHandle: function() {
                        this.tabbarListIndex = -1;
                    },
                    onFilterReset: function() {
                        this.resetFilters(), this.initFilterData();
                        var e = Object.keys(this.$refs).find(function(e) {
                            return e.startsWith("comp-project");
                        });
                        e && (this.$refs[e][0].list = [], this.$refs[e][0].reload());
                    },
                    paramMeddle: function(e) {
                        var t = {};
                        return Object.keys(e).forEach(function(n) {
                            e[n] && (t[n] = e[n]);
                        }), e.priceSort && (t.order = "desc" === e.priceSort ? "price_desc" : "price_asc"), 
                        e.circle_id && (delete this.params.circle_id, t.biz_circle_id = e.circle_id), t;
                    },
                    submitHandle: function(e, t, n) {
                        var o = "comp-project-".concat(t.variant, "-").concat(n);
                        this.submitFilters(), this.hiddenFilterHandle();
                        var a = this.paramMeddle(e);
                        this.$refs[o][0].list = [], this.$refs[o][0].reload(a);
                    },
                    loadNext: function() {
                        var t = this;
                        return o.default.uiLayout.settings(this.id).then(function(n) {
                            var o = n.data;
                            if (e.hideLoading(), e.stopPullDownRefresh(), o) {
                                t.setting = o, t.setting.components.sort(function(e, t) {
                                    return e.priority - t.priority;
                                }), e.setNavigationBarTitle({
                                    title: t.setting.title ? "杭州房小团-".concat(t.setting.title) : "杭州房小团"
                                });
                                var a = [], c = [ "background_image", "smart_button", "motion" ], s = {};
                                t.setting.components.forEach(function(e) {
                                    c.includes(e.type) ? s[e.type] ? s[e.type].push(e) : s[e.type] = [ e ] : a.push(e);
                                }), t.setting.components = a.concat(Object.keys(s).map(function(e) {
                                    return function(t) {
                                        var n = i({}, e[t][0]);
                                        return n.settings = [], e[t].forEach(function(e) {
                                            n.settings.push(e.settings);
                                        }), n;
                                    };
                                }(s))), t.setting.components.length || (t.pageStatus = "empty");
                                var u = "", r = t.setting.components.find(function(e) {
                                    return "project_collection" === e.type;
                                });
                                r && r.setting && r.setting.assocated_collection && r.setting.assocated_collection.data_uri && (u = r.setting.assocated_collection.data_uri);
                                var l = t.setting.components.find(function(e) {
                                    return "search_box" === e.type;
                                });
                                l && [ "variant1", "variant2" ].includes(l.variant) ? t.hasPureSearch = !0 : t.hasPureSearch = !1, 
                                t.setting.components.forEach(function(e) {
                                    "search_box" === e.type && "variant2" !== e.variant && (e.settings.jumpUri = u ? "/subPackages/search/pages/index?s_t=".concat(e.settings.tip || "", "&connection_id=").concat(u) : "/subPackages/search/pages/index?s_t=".concat(e.settings.tip || "")), 
                                    t["strategy".concat(e.type)] && t["strategy".concat(e.type)]();
                                });
                            } else t.pageStatus = "lose";
                        });
                    },
                    strategymotion: function() {
                        var e = this;
                        this.motionDebounce = c.common.debounce(function(t) {
                            e.$refs["comp-motion"].length > 0 && (e.$refs["comp-motion"][0].scrollTop = t.scrollTop);
                        }, 100);
                    }
                })
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    "99ac": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("9d72"), a = n("9ad1");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("2f3b"), n("6d2b");
        var s = n("f0c5"), i = Object(s.a)(a.default, o.b, o.c, !1, null, "5fc01eb1", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "9ad1": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("88c8"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    },
    "9d72": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    a030: function(e, t, n) {}
}, [ [ "2753", "common/runtime", "common/vendor" ] ] ]);