require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/editJobName" ], {
    7731: function(t, e, n) {
        "use strict";
        var a = n("81b0");
        n.n(a).a;
    },
    "81b0": function(t, e, n) {},
    8308: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("cfb0"), o = n("cbd2");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n("7731");
        var i = n("f0c5"), r = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    8877: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), o = i(n("4ec3")), u = n("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, n, a, o, u, i) {
                try {
                    var r = t[u](i), s = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(s) : Promise.resolve(s).then(a, o);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var u = t.apply(e, n);
                        function i(t) {
                            r(u, a, o, i, s, "next", t);
                        }
                        function s(t) {
                            r(u, a, o, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                components: {
                    UploadMedia: function() {
                        n.e("subPackages/me/pages/components/saleman/UploadMedia").then(function() {
                            return resolve(n("2de4"));
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
                        jobName: "",
                        fileList: [],
                        state: null,
                        oldVal: {
                            jobName: "",
                            card: ""
                        }
                    };
                },
                computed: {
                    disabled: function() {
                        return !this.jobName || !this.fileList.length || 0 === this.state || this.noChange;
                    },
                    noChange: function() {
                        return this.jobName === this.oldVal.jobName && this.fileList[0] === this.oldVal.card;
                    }
                },
                onLoad: function() {
                    var t = s(a.default.mark(function t(e) {
                        var n, u;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, o.default.sales.salesProfileDetail({
                                    content_type: 3
                                });

                              case 2:
                                n = t.sent, u = n.data, this.jobName = u.job_name || e.name || "", this.state = u.state, 
                                this.fileList = u.card ? [ u.card ] : [], this.oldVal = {
                                    jobName: this.jobName,
                                    card: u.card || ""
                                }, this.$refs.inputItem.onFocus();

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    modify: function() {
                        var e = s(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.jobName) {
                                        e.next = 3;
                                        break;
                                    }
                                    return u.tip.toast("工作展示名不能为空", "", "none"), e.abrupt("return");

                                  case 3:
                                    if (this.fileList.length) {
                                        e.next = 6;
                                        break;
                                    }
                                    return u.tip.toast("名片/工牌不能为空", "", "none"), e.abrupt("return");

                                  case 6:
                                    return e.next = 8, o.default.sales.salesProfileUpdate({
                                        content_type: 3,
                                        content: [ {
                                            field: "job_name",
                                            value: this.jobName
                                        }, {
                                            field: "card",
                                            value: this.fileList[0]
                                        } ]
                                    });

                                  case 8:
                                    0 === (n = e.sent).code ? (u.tip.toast("审核通过后生效", "", "none"), setTimeout(function() {
                                        t.navigateBack();
                                    }, 1e3)) : u.tip.toast(n.message, "", "none");

                                  case 10:
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
            e.default = c;
        }).call(this, n("543d").default);
    },
    cbd2: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8877"), o = n.n(a);
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        e.default = o.a;
    },
    cfb0: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    f98b: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("8308")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f98b", "common/runtime", "common/vendor" ] ] ]);