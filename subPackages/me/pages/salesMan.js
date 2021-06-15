require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/salesMan" ], {
    "04f5": function(e, t, a) {
        "use strict";
        var r = a("aa57");
        a.n(r).a;
    },
    2341: function(e, t, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = c(a("a34a")), n = c(a("c909")), o = a("b628"), s = c(a("4ec3"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
            }
            function u(e, t, a, r, n, o, s) {
                try {
                    var c = e[o](s), i = c.value;
                } catch (e) {
                    return void a(e);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, n);
            }
            function f(e) {
                return function() {
                    var t = this, a = arguments;
                    return new Promise(function(r, n) {
                        var o = e.apply(t, a);
                        function s(e) {
                            u(o, r, n, s, c, "next", e);
                        }
                        function c(e) {
                            u(o, r, n, s, c, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var l = {
                components: {
                    BusiNavHeader: function() {
                        a.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(a("5ed7"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiCardId: function() {
                        a.e("subPackages/me/pages/components/saleman/BusiCardId").then(function() {
                            return resolve(a("0c0b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiWxCard: function() {
                        a.e("subPackages/me/pages/components/saleman/BusiWxCard").then(function() {
                            return resolve(a("91bb"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiProject: function() {
                        a.e("subPackages/me/pages/components/saleman/BusiProject").then(function() {
                            return resolve(a("ba63"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiRelationLottery: function() {
                        a.e("subPackages/me/pages/components/saleman/BusiRelationLottery").then(function() {
                            return resolve(a("cca3"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        isAuth: !1,
                        pageControl: [ 1, 2, 3 ],
                        currentPage: 1,
                        formParams: {},
                        changeLottery: !1,
                        relateLottery: !1,
                        imgSrc: "https://imgcdn.huanjutang.com/file/2020/12/15/15acc8198c669f44351690081300dbdb.png",
                        pageScroll: !1,
                        retryform: {
                            wechat: "",
                            wechat_qrcode: "",
                            pageScroll: !1,
                            card: "",
                            project_id: "",
                            project_name: "",
                            job_name: "",
                            company_name: "",
                            team_type: null
                        }
                    };
                },
                computed: {
                    isCardAuth: function() {
                        return this.isAuth;
                    }
                },
                onPageScroll: function(e) {
                    this.pageScroll = e.scrollTop > 130, e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onLoad: function() {
                    var e = f(r.default.mark(function e(t) {
                        var a;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.$refs.busiNavHeader.setTransparentMode(), t.inviter_id && (this.formParams.inviter_id = t.inviter_id), 
                                !t.hid) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 5, s.default.getDecodeHashParams(t.hid);

                              case 5:
                                (a = e.sent) && a.data && (t = a ? (0, n.default)("?".concat(decodeURIComponent(a.data.path))).search(!0) : t), 
                                this.formParams.inviter_id = t.inviter_id;

                              case 8:
                                t && t.redirectPage && (this.pageControl = t.redirectPage.split(","), this.currentPage = this.pageControl[0] || ""), 
                                this.changeLottery = !!t.changeLottery, this.relateLottery = !!t.relateLottery, 
                                this.getCacheData(), this.loadSwicth(), this.loadRetryData(), this.changeLottery && this.loadChangeData();

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                watch: {
                    currentPage: function(e) {
                        4 === e && (this.imgSrc = "https://imgcdn.huanjutang.com/file/2020/12/14/173745f85be63e83c3c497f4b0613134.png");
                    }
                },
                methods: {
                    loadSwicth: function() {
                        var e = f(r.default.mark(function e() {
                            var t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.sales.isAuth();

                                  case 2:
                                    (t = e.sent) && 0 === t.code && (this.isAuth = "true" === t.data.identity_authentication_switch);

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
                    loadRetryData: function() {
                        var e = f(r.default.mark(function e() {
                            var t, a, n, o, c, u, f, l, h;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.sales.salesSate();

                                  case 2:
                                    if (0 === (t = e.sent).code && t.data && "object" === i(t.data)) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 5:
                                    a = t.data, n = a.wechat, o = a.wechat_qrcode, c = a.project, u = a.card, f = a.sales_user, 
                                    l = void 0 === f ? {} : f, h = a.name, this.retryform.wechat = n, this.retryform.wechat_qrcode = o, 
                                    this.retryform.card = u, this.retryform.project_id = c.id, this.retryform.project_name = c.name, 
                                    this.retryform.job_name = l.job_name || h, this.retryform.company_name = l.company_name, 
                                    this.retryform.team_type = l.team_type, this.formParams.wechat = n, this.formParams.wechat_qrcode = o, 
                                    this.formParams.job_name = l.job_name || h, h && (this.formParams.name = h);

                                  case 18:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadChangeData: function() {
                        var e = f(r.default.mark(function e() {
                            var t, a, n, o, c;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.sales.salesSate();

                                  case 2:
                                    t = e.sent, a = t.data, n = a.sales_user, o = void 0 === n ? {} : n, c = a.name, 
                                    this.retryform.company_name = o.company_name, this.retryform.team_type = o.team_type, 
                                    this.retryform.job_name = o.job_name || c;

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    getCacheData: function() {
                        var e = this, t = o.cache.get("saleman-record-page");
                        if (t) {
                            if (Object.keys(t).forEach(function(a) {
                                var r = t[a];
                                e.formParams = Object.assign(e.formParams, r);
                            }), 3 === this.pageControl.length) {
                                if (!Object.keys(t[1]).length) return void (this.currentPage = 1);
                                if (!Object.keys(t[2]).length) return void (this.currentPage = 2);
                                if (!Object.keys(t[3]).length) return void (this.currentPage = 3);
                            }
                            if (2 === this.pageControl.length) {
                                if (!Object.keys(t[this.pageControl[0]]).length) return void (this.currentPage = this.pageControl[0] || "");
                                if (!Object.keys(t[this.pageControl[1]]).length) return void (this.currentPage = this.pageControl[1] || "");
                            }
                            1 === this.pageControl.length && (Object.keys(t[this.pageControl[0]]).length || (this.currentPage = this.pageControl[0] || ""));
                        } else this.changeLottery || this.relateLottery || (this.currentPage = 1);
                    },
                    changePage: function(e, t) {
                        if (this.formParams = Object.assign(this.formParams, t), this.retryform.job_name = this.retryform.job_name || this.formParams.name || "", 
                        !this.changeLottery) {
                            var a = o.cache.get("saleman-record-page") || {
                                1: {},
                                2: {},
                                3: {},
                                4: {}
                            };
                            a[this.currentPage] = t, o.cache.set("saleman-record-page", a);
                        }
                        this.currentPage = e;
                    },
                    changeLotterySubmit: function() {
                        var t = f(r.default.mark(function t(a) {
                            var n, o, c;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.formParams, o = n.id_card, c = n.name, t.next = 3, s.default.sales.slaemanChangeProject(Object.assign(a, {
                                        id_card: o,
                                        name: c,
                                        job_name: this.retryform.job_name
                                    }));

                                  case 3:
                                    0 === t.sent.code && e.redirectTo({
                                        url: "/subPackages/me/pages/salemanSubmitSuccess?change=1&project_name=".concat(a.commutation_project_name)
                                    });

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
                    submit: function() {
                        var t = f(r.default.mark(function t(a) {
                            var n, c;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.formParams = Object.assign(this.formParams, a), t.next = 3, s.default.sales.salemanSettledIn(this.formParams);

                                  case 3:
                                    n = t.sent, c = {
                                        1: {},
                                        2: {},
                                        3: {},
                                        4: {}
                                    }, o.cache.set("saleman-record-page", c), 0 === n.code && e.redirectTo({
                                        url: "/subPackages/me/pages/salemanSubmitSuccess"
                                    });

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    relationLottery: function() {
                        var t = f(r.default.mark(function t(a) {
                            var n, c, i, u, f;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.formParams, c = n.id_card, i = n.name, t.next = 3, s.default.sales.salesRelevanceEnter(Object.assign(a, {
                                        id_card: c,
                                        name: i
                                    }));

                                  case 3:
                                    u = t.sent, f = {
                                        1: {},
                                        2: {},
                                        3: {},
                                        4: {}
                                    }, o.cache.set("saleman-record-page", f), 0 === u.code && e.redirectTo({
                                        url: "/subPackages/me/pages/salemanSettle?relation=1&project_name=".concat(a.project_name)
                                    });

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = l;
        }).call(this, a("543d").default);
    },
    "478d": function(e, t, a) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, n = [];
        a.d(t, "b", function() {
            return r;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {});
    },
    "56df": function(e, t, a) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("6cdc"), t(a("66fd")), e(t(a("5f0a")).default);
        }).call(this, a("543d").createPage);
    },
    "5f0a": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a("478d"), n = a("f8a2");
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        a("04f5");
        var s = a("f0c5"), c = Object(s.a)(n.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    aa57: function(e, t, a) {},
    f8a2: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a("2341"), n = a.n(r);
        for (var o in r) "default" !== o && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = n.a;
    }
}, [ [ "56df", "common/runtime", "common/vendor" ] ] ]);