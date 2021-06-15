require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/saleman/BusiRelationLottery" ], {
    "0864": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = o(n("a34a")), a = o(n("4ec3"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    u(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
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
        function s(e, t, n, r, a, o, i) {
            try {
                var c = e[o](i), u = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(u) : Promise.resolve(u).then(r, a);
        }
        function f(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                        s(o, r, a, i, c, "next", e);
                    }
                    function c(e) {
                        s(o, r, a, i, c, "throw", e);
                    }
                    i(void 0);
                });
            };
        }
        var l = {
            components: {
                BusiTipBox: function() {
                    n.e("subPackages/me/pages/components/saleman/BusiTipBox").then(function() {
                        return resolve(n("ca13"));
                    }.bind(null, n)).catch(n.oe);
                },
                Authorization: function() {
                    n.e("components/Authorization").then(function() {
                        return resolve(n("5326"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    form: {
                        project_id: "",
                        relevance_project_id: "",
                        relevance_name: "",
                        project_name: ""
                    },
                    primevalProjectId: "",
                    primevalProjectName: "",
                    relationLottery: [],
                    visibleTipBox: !1,
                    tipStr: "",
                    selectOptions: null
                };
            },
            computed: {
                disable: function() {
                    return !0;
                }
            },
            created: function() {
                var e = f(r.default.mark(function e() {
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, this.loadPrimevalProjectData();

                          case 2:
                            return e.next = 4, this.loadRelationData();

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
            methods: {
                loadPrimevalProjectData: function() {
                    var e = f(r.default.mark(function e() {
                        var t, n, o;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, a.default.sales.salemanEnterProject();

                              case 2:
                                t = e.sent, n = [], o = [], t.data && t.data.data && t.data.data.forEach(function(e) {
                                    n.push(e.project_id), e.is_default || o.push(e.name);
                                }), this.primevalProjectId = n.toString(), this.primevalProjectName = o;

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
                loadRelationData: function() {
                    var e = f(r.default.mark(function e() {
                        var t;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, a.default.searchProject("", 1, 2, "", this.primevalProjectId);

                              case 2:
                                (t = e.sent).data && t.data.data && (this.relationLottery = t.data.data.map(function(e) {
                                    return c(c({}, e), {}, {
                                        ischeck: !1
                                    });
                                }));

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
                relationHandler: function(e, t) {
                    t.ischeck = !t.ischeck;
                    var n = this.relationLottery.filter(function(e) {
                        return e.ischeck;
                    });
                    Array.isArray(n) && (this.form.project_id = n.map(function(e) {
                        return e.id;
                    }).join(","), this.form.relevance_project_id = n.map(function(e) {
                        return e.relevance_id;
                    }).join(","), this.form.project_name = n.map(function(e) {
                        return e.name;
                    }).join(","), this.form.relevance_name = n.map(function(e) {
                        return e.relevance_name;
                    }).join(","));
                },
                gotoVerify: function() {
                    var e = this;
                    if (this.form.project_id && this.form && this.form.project_id) if (1 === this.primevalProjectId.split(",").length) this.$emit("submit", this.form); else {
                        var t = [];
                        this.primevalProjectName.forEach(function(n) {
                            n !== e.form.relevance_name && t.push("“".concat(n, "”"));
                        }), t.length > 0 ? (this.visibleTipBox = !0, this.tipStr = "是否确定关联新楼盘“".concat(this.form.project_name, "”？")) : this.submitHandler();
                    }
                },
                submitHandler: function() {
                    this.$emit("submit", this.form);
                }
            }
        };
        t.default = l;
    },
    "2c3f": function(e, t, n) {
        "use strict";
        var r = n("7d6d");
        n.n(r).a;
    },
    "423e": function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    "7d6d": function(e, t, n) {},
    bb84: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0864"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    cca3: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("423e"), a = n("bb84");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("2c3f");
        var i = n("f0c5"), c = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/saleman/BusiRelationLottery-create-component", {
    "subPackages/me/pages/components/saleman/BusiRelationLottery-create-component": function(e, t, n) {
        n("543d").createComponent(n("cca3"));
    }
}, [ [ "subPackages/me/pages/components/saleman/BusiRelationLottery-create-component" ] ] ]);