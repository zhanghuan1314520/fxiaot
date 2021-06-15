(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/detail" ], {
    "140d": function(e, t, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {});
    },
    "25d6": function(e, t, n) {},
    "5c4a": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("6c64")).default);
        }).call(this, n("543d").createPage);
    },
    "69ab": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("f609"), s = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = s.a;
    },
    "6c64": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("140d"), s = n("69ab");
        for (var o in s) "default" !== o && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(o);
        n("e737");
        var r = n("f0c5"), a = Object(r.a)(s.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = a.exports;
    },
    e737: function(e, t, n) {
        "use strict";
        var i = n("25d6");
        n.n(i).a;
    },
    f609: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n("a34a")), s = a(n("4ec3")), o = a(n("c909")), r = n("b628");
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t, n, i, s, o, r) {
                try {
                    var a = e[o](r), c = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(c) : Promise.resolve(c).then(i, s);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(i, s) {
                        var o = e.apply(t, n);
                        function r(e) {
                            c(o, i, s, r, a, "next", e);
                        }
                        function a(e) {
                            c(o, i, s, r, a, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var l = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Entries: function() {
                        n.e("pages/salesMan/components/Entries").then(function() {
                            return resolve(n("4604"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SalesCard: function() {
                        n.e("pages/salesMan/components/SalesCard").then(function() {
                            return resolve(n("10f1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Projects: function() {
                        n.e("pages/salesMan/components/Projects").then(function() {
                            return resolve(n("6ea5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Share: function() {
                        n.e("pages/salesMan/components/Share").then(function() {
                            return resolve(n("0cd7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiFooter: function() {
                        n.e("components/UILayout/BusiFooter").then(function() {
                            return resolve(n("dff1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiButton: function() {
                        n.e("components/UILayout/BusiButton").then(function() {
                            return resolve(n("3f66"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        sales_id: "",
                        project_id: "",
                        user_id: "",
                        project_name: "",
                        project_img: "",
                        item: {
                            projects: new Array(2).fill({
                                skeleton: !0
                            }),
                            medals: {
                                medals: new Array(1).fill({
                                    skeleton: !0
                                })
                            }
                        },
                        loading: !0,
                        salesManName: "",
                        projectName: "杭州房小团"
                    };
                },
                onReachBottom: function() {
                    this.$refs.share.loadData();
                },
                onPullDownRefresh: function() {
                    this.reload(), e.stopPullDownRefresh();
                },
                onLoad: function() {
                    var e = u(i.default.mark(function e(t) {
                        var n, r, a;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.$refs.busiNavHeader.setTransparentMode(), !t.q) {
                                    e.next = 10;
                                    break;
                                }
                                n = (0, o.default)(decodeURIComponent(t.q)).search(!0), this.sales_id = n.id, this.user_id = n.user_id, 
                                this.project_id = n.project_id || "", this.project_name = n.title, this.project_img = n.project_img, 
                                e.next = 27;
                                break;

                              case 10:
                                if (!t.hid) {
                                    e.next = 22;
                                    break;
                                }
                                return e.next = 13, s.default.getDecodeHashParams(t.hid);

                              case 13:
                                r = e.sent, a = r && r.data ? (0, o.default)("?".concat(decodeURIComponent(r.data.path))).search(!0) : t, 
                                this.sales_id = a.id, this.user_id = a.user_id, this.project_name = a.title, this.project_id = a.project_id || "", 
                                this.project_img = a.project_img, e.next = 27;
                                break;

                              case 22:
                                this.sales_id = t.id, this.user_id = t.user_id, this.project_name = t.title, this.project_id = t.project_id || "", 
                                this.project_img = t.project_img;

                              case 27:
                                this.reload();

                              case 28:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    },
                    isSelf: function() {
                        return parseInt(this.user_id, 10) === this.userInfo.id;
                    },
                    showContactBtns: function() {
                        return !this.loading && !this.isSelf;
                    }
                },
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    emptyHandle: function() {},
                    callPhoneSuccess: function(e) {
                        s.default.getPhoneNum(this.sales_id, 1).then(function(t) {
                            t && t.data && e(t.data.phone);
                        });
                    },
                    contact: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(this.user_id, "&project_id=").concat(this.project_id, "&project_name=").concat(this.project_name, "&project_img=").concat(this.project_img)
                        });
                    },
                    likeSuccess: function(e) {
                        this.item.is_like = 1 === parseInt(this.item.is_like, 10) ? 2 : 1, this.item.sales_man_like_num = e;
                    },
                    follow: function() {
                        var e = u(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.followSalesMan(this.sales_id);

                                  case 2:
                                    e.sent && (this.item.attention = 1 === this.item.attention ? 2 : 1, this.$refs.entries.showModel = !0);

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
                    reload: function() {
                        this.getSalesMan();
                    },
                    getSalesMan: function() {
                        var t = u(i.default.mark(function t() {
                            var n, o, a = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, t.next = 3, s.default.sales.getSalesManInfo({
                                        id: this.sales_id,
                                        user_id: this.user_id
                                    });

                                  case 3:
                                    if (n = t.sent, o = n.data, this.loading = !1, "抱歉，该置业顾问已被下架" !== o) {
                                        t.next = 9;
                                        break;
                                    }
                                    return r.tip.showModal("抱歉，该置业顾问已被下架").then(function() {
                                        e.switchTab({
                                            url: "/pages/index"
                                        });
                                    }), t.abrupt("return");

                                  case 9:
                                    this.item = o || {}, this.salesManName = this.item.job_name || this.item.name || "", 
                                    this.project_name || (this.project_name = this.item.project_name), this.project_id || (this.project_id = this.item.project_id), 
                                    this.project_img || (this.project_img = Array.isArray(this.item.projects) && this.item.projects[0] ? this.item.projects[0].cover : ""), 
                                    this.user_id = this.item.session_id, this.sales_id = this.item.id, this.item.wechat_qrcode = this.item.wechat_qrcode ? this.item.wechat_qrcode.replace(/^https|http/, "https") : "", 
                                    this.$nextTick(function() {
                                        a.$refs.share.reload();
                                    });

                                  case 18:
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
            t.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "5c4a", "common/runtime", "common/vendor" ] ] ]);