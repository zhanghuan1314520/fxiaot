require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/editCompany" ], {
    "062b": function(e, t, n) {},
    "3a35": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("a34a")), o = r(n("4ec3")), u = n("b628");
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t, n, a, o, u, r) {
                try {
                    var c = e[u](r), i = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(i) : Promise.resolve(i).then(a, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, o) {
                        var u = e.apply(t, n);
                        function r(e) {
                            c(u, a, o, r, i, "next", e);
                        }
                        function i(e) {
                            c(u, a, o, r, i, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var s = {
                components: {
                    PickerItem: function() {
                        n.e("subPackages/me/pages/components/saleman/PickerItem").then(function() {
                            return resolve(n("1023"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SubmitButton: function() {
                        n.e("subPackages/me/pages/components/saleman/SubmitButton").then(function() {
                            return resolve(n("649d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    InputItem: function() {
                        n.e("subPackages/me/pages/components/saleman/InputItem").then(function() {
                            return resolve(n("24db"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        teamType: null,
                        companyName: "",
                        state: null,
                        oldVal: {
                            jobName: "",
                            card: ""
                        }
                    };
                },
                computed: {
                    disabled: function() {
                        return !this.companyName || !this.teamType || 0 === this.state || this.noChange;
                    },
                    noChange: function() {
                        return this.companyName === this.oldVal.companyName && this.teamType === this.oldVal.teamType;
                    }
                },
                onLoad: function() {
                    var e = i(a.default.mark(function e() {
                        var t, n;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.default.sales.salesProfileDetail({
                                    content_type: 2
                                });

                              case 2:
                                t = e.sent, n = t.data, this.companyName = n.company_name || "", this.state = n.state, 
                                this.teamType = n.team_type - 0, this.oldVal = {
                                    companyName: this.companyName,
                                    teamType: this.teamType
                                }, this.$refs.inputItem.onFocus();

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
                methods: {
                    modify: function() {
                        var t = i(a.default.mark(function t() {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.companyName) {
                                        t.next = 3;
                                        break;
                                    }
                                    return u.tip.toast("公司名称不能为空", "", "none"), t.abrupt("return");

                                  case 3:
                                    if (this.teamType) {
                                        t.next = 6;
                                        break;
                                    }
                                    return u.tip.toast("所属团队类型不能为空", "", "none"), t.abrupt("return");

                                  case 6:
                                    return t.next = 8, o.default.sales.salesProfileUpdate({
                                        content_type: 2,
                                        content: [ {
                                            field: "company_name",
                                            value: this.companyName
                                        }, {
                                            field: "team_type",
                                            value: this.teamType
                                        } ]
                                    });

                                  case 8:
                                    0 === (n = t.sent).code ? (u.tip.toast("审核通过后生效", "", "none"), setTimeout(function() {
                                        e.navigateBack();
                                    }, 1e3)) : u.tip.toast(n.message, "", "none");

                                  case 10:
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
            t.default = s;
        }).call(this, n("543d").default);
    },
    7921: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    be8f: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("e5c8")).default);
        }).call(this, n("543d").createPage);
    },
    d821: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("3a35"), o = n.n(a);
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        t.default = o.a;
    },
    dfd7: function(e, t, n) {
        "use strict";
        var a = n("062b");
        n.n(a).a;
    },
    e5c8: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("7921"), o = n("d821");
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        n("dfd7");
        var r = n("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = c.exports;
    }
}, [ [ "be8f", "common/runtime", "common/vendor" ] ] ]);