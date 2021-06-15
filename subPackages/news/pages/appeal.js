require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/appeal" ], {
    1976: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "737a": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), i = n("b628"), a = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, i, a, o) {
                try {
                    var u = t[a](o), s = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(s) : Promise.resolve(s).then(r, i);
            }
            var s = {
                data: function() {
                    return {
                        reason: "",
                        fileList: [],
                        max: 3,
                        riskId: ""
                    };
                },
                computed: {
                    showUpload: function() {
                        return this.fileList.length < 3;
                    }
                },
                methods: {
                    handleSubmit: function() {
                        if (this.reason.trim()) {
                            var e = {
                                risk_id: this.riskId,
                                content: this.reason
                            };
                            this.fileList.length > 0 && (e.files = this.fileList), t.showLoading({
                                title: "提交中",
                                mask: !0
                            }), a.default.createAppeal(e).then(function(e) {
                                t.hideLoading(), 0 === Number(e.code) && t.navigateBack();
                            });
                        } else i.tip.error("请填写申述理由");
                    },
                    handleUpload: function() {
                        var t = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(r, i) {
                                    var a = t.apply(e, n);
                                    function o(t) {
                                        u(a, r, i, o, s, "next", t);
                                    }
                                    function s(t) {
                                        u(a, r, i, o, s, "throw", t);
                                    }
                                    o(void 0);
                                });
                            };
                        }(r.default.mark(function t() {
                            var e, n, a = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.foundation.chooseImageSync({
                                        num: this.max
                                    });

                                  case 2:
                                    return e = t.sent, n = e.tempFilePaths.map(function(t) {
                                        return i.foundation.uploadFileSync(t);
                                    }), t.prev = 4, t.next = 7, Promise.all(n);

                                  case 7:
                                    t.sent.forEach(function(t) {
                                        if (200 !== parseInt(t.statusCode, 10)) i.tip.error("图片上传失败"); else {
                                            var e = t.data;
                                            if (0 !== parseInt(e.status, 10)) return void i.tip.error("图片上传失败");
                                            a.fileList = a.fileList.concat(e.data.url);
                                        }
                                    }), t.next = 15;
                                    break;

                                  case 11:
                                    t.prev = 11, t.t0 = t.catch(4), i.tip.error("图片上传失败"), this.fileList = [];

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 4, 11 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                },
                onLoad: function(t) {
                    this.riskId = t.risk_id;
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "7a9a": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("737a"), i = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = i.a;
    },
    "7d46": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("1976"), i = n("7a9a");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("81d2");
        var o = n("f0c5"), u = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    "81d2": function(t, e, n) {
        "use strict";
        var r = n("8b40");
        n.n(r).a;
    },
    "8b40": function(t, e, n) {},
    b16e: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7d46")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "b16e", "common/runtime", "common/vendor" ] ] ]);