require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/addUser" ], {
    "0c01": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = i(e("a34a")), u = i(e("4ec3")), r = e("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, n, e, a, u, r, i) {
                try {
                    var o = t[r](i), c = o.value;
                } catch (t) {
                    return void e(t);
                }
                o.done ? n(c) : Promise.resolve(c).then(a, u);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, u) {
                        var r = t.apply(n, e);
                        function i(t) {
                            o(r, a, u, i, c, "next", t);
                        }
                        function c(t) {
                            o(r, a, u, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        userInfo: {},
                        typeIndex: 0,
                        maxLength: 200,
                        inputContact: "",
                        inputDetail: ""
                    };
                },
                onShareAppMessage: function() {
                    return r.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onLoad: function() {
                    var t = c(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.userInfo = r.cache.get("userinfo");

                              case 1:
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
                    bindCountryChange: function(t) {
                        this.typeIndex = t.detail.value;
                    },
                    bindTextAreaChange: function(t) {
                        this.inputDetail = t.detail.value;
                    },
                    bindContactChange: function(t) {
                        this.inputContact = t.detail.value;
                    },
                    submit: function() {
                        var n = c(a.default.mark(function n() {
                            var e;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (e = {
                                        type: this.typeIndex + 1,
                                        contact: this.inputContact,
                                        content: this.inputDetail
                                    }, !(this.inputDetail.length < 10)) {
                                        n.next = 5;
                                        break;
                                    }
                                    return n.next = 4, t.showModal({
                                        content: "最少输入10个字",
                                        showCancel: !1
                                    });

                                  case 4:
                                    return n.abrupt("return");

                                  case 5:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), n.next = 8, u.default.feedback(e);

                                  case 8:
                                    return t.hideLoading(), n.next = 11, t.showModal({
                                        content: "亲，我们已收到您的反馈，我们会尽快修复此问题 :-)",
                                        showCancel: !1
                                    });

                                  case 11:
                                    this.typeIndex = 0, this.inputContact = "", this.inputDetail = "";

                                  case 14:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = s;
        }).call(this, e("543d").default);
    },
    "16e3": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("1ffa"), u = e("f6ee");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        e("774d");
        var i = e("f0c5"), o = Object(i.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = o.exports;
    },
    "1ffa": function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    },
    "774d": function(t, n, e) {
        "use strict";
        var a = e("a6ae");
        e.n(a).a;
    },
    a6ae: function(t, n, e) {},
    f6ee: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("0c01"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = u.a;
    },
    fa53: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("16e3")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "fa53", "common/runtime", "common/vendor" ] ] ]);