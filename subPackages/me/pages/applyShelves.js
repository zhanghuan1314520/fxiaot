require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/applyShelves" ], {
    "0c17": function(t, e, n) {},
    "27e9": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("8e04")).default);
        }).call(this, n("543d").createPage);
    },
    "2a1b": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("f77c"), r = n.n(a);
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        e.default = r.a;
    },
    "8e04": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d949"), r = n("2a1b");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("94b03");
        var i = n("f0c5"), s = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "94b03": function(t, e, n) {
        "use strict";
        var a = n("0c17");
        n.n(a).a;
    },
    d949: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    f77c: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3")), u = n("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, a, r, u, i) {
                try {
                    var s = t[u](i), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = t.apply(e, n);
                        function i(t) {
                            s(u, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            s(u, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        inputVal: "",
                        typeIndex: 0,
                        true_tp: [],
                        num: 0,
                        sureNum: 0,
                        sales_man_id: "",
                        title: ""
                    };
                },
                onLoad: function() {
                    var t = c(a.default.mark(function t(e) {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.sales_man_id = e.sales_man_id, this.title = e.title;

                              case 2:
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
                    upMsg: function() {
                        var e = c(a.default.mark(function e() {
                            var n, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this.true_tp.join(","), e.next = 3, r.default.sales.putAways(this.sales_man_id, this.inputVal, n);

                                  case 3:
                                    (i = e.sent) && 0 === parseInt(i.code, 10) && (u.tip.toast(i.data), this.inputVal = "", 
                                    this.true_tp = [], t.navigateBack({
                                        number: 2
                                    }));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    deletePic: function(t) {
                        var e = this, n = [];
                        Object.keys(this.true_tp).forEach(function(a) {
                            parseInt(a, 10) !== parseInt(t, 10) && n.push(e.true_tp[a]);
                        }), this.true_tp = n;
                    },
                    inputNum: function(t) {
                        this.num = t.detail.value.length, this.inputVal = t.detail.value, this.inputVal ? this.num > 300 && u.tip.toast("字数超过限制", "", "none") : u.tip.toast("内容不能为空", "", "none");
                    },
                    preview: function(e) {
                        t.previewImage({
                            urls: [ e ]
                        });
                    },
                    uploadFile: function() {
                        var e = c(a.default.mark(function e() {
                            var n, r, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!(this.true_tp.length >= 6)) {
                                        e.next = 3;
                                        break;
                                    }
                                    return u.tip.toast("最多上传6张", "", "none"), e.abrupt("return");

                                  case 3:
                                    return e.prev = 3, e.next = 6, u.foundation.chooseImageSync({
                                        num: 1
                                    });

                                  case 6:
                                    return n = e.sent, e.next = 9, u.foundation.uploadFileSync(n.tempFilePaths[0]);

                                  case 9:
                                    if (r = e.sent, 200 === parseInt(r.statusCode, 10)) {
                                        e.next = 14;
                                        break;
                                    }
                                    u.tip.error("图片上传失败", "", "none"), e.next = 19;
                                    break;

                                  case 14:
                                    if (i = r.data, 0 === parseInt(i.status, 10)) {
                                        e.next = 18;
                                        break;
                                    }
                                    return u.tip.error("图片上传失败"), e.abrupt("return");

                                  case 18:
                                    this.true_tp.push(i.data.url);

                                  case 19:
                                    e.next = 23;
                                    break;

                                  case 21:
                                    e.prev = 21, e.t0 = e.catch(3);

                                  case 23:
                                    t.hideLoading();

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 3, 21 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    }
}, [ [ "27e9", "common/runtime", "common/vendor" ] ] ]);