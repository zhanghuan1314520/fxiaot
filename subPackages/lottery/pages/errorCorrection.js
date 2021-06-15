require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/errorCorrection" ], {
    "195b": function(t, e, n) {
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
    "19b3": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7489"), r = n.n(a);
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        e.default = r.a;
    },
    "71b3": function(t, e, n) {},
    7489: function(t, e, n) {
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
            function o(t, e, n, a, r, u, i) {
                try {
                    var o = t[u](i), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(s) : Promise.resolve(s).then(a, r);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = t.apply(e, n);
                        function i(t) {
                            o(u, a, r, i, s, "next", t);
                        }
                        function s(t) {
                            o(u, a, r, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        true_inputVal: "",
                        false_inputVal: "",
                        typeIndex: 0,
                        typeList: [],
                        inputData: {
                            true_tp: [],
                            false_tp: []
                        },
                        phoneNumber: "",
                        num: 0,
                        sureNum: 0,
                        type: 5,
                        project_id: ""
                    };
                },
                onLoad: function() {
                    var t = s(a.default.mark(function t(e) {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.project_id = e.id, t.next = 3, this.reload.call(this);

                              case 3:
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
                        var t = s(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = this.inputData.true_tp.join(","), n = this.inputData.false_tp.join(","), 
                                    t.next = 4, r.default.setBugFeedback(this.type, this.true_inputVal, this.false_inputVal, "", e, n, this.project_id);

                                  case 4:
                                    "提交成功" === t.sent.data && (u.tip.toast("提交成功"), this.false_inputVal = "", this.true_inputVal = "", 
                                    this.phoneNumber = "", this.inputData.true_tp = [], this.inputData.false_tp = [], 
                                    this.type = 5);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    deletePic: function(t, e) {
                        var n = this, a = [];
                        1 === Math.floor(t) && (Object.keys(this.inputData.true_tp).forEach(function(t) {
                            Math.floor(t) !== Math.floor(e) && a.push(n.inputData.true_tp[t]);
                        }), this.inputData.true_tp = a), 2 === Math.floor(t) && (Object.keys(this.inputData.false_tp).forEach(function(t) {
                            Math.floor(t) !== Math.floor(e) && a.push(n.inputData.false_tp[t]);
                        }), this.inputData.false_tp = a);
                    },
                    bindTypePickerChange: function(t) {
                        this.typeIndex = t.detail.value, this.type = this.typeList[this.typeIndex].index;
                    },
                    inputNum: function(t, e) {
                        if (1 === Math.floor(t)) {
                            if (this.num = e.detail.value.length, this.true_inputVal = e.detail.value, !this.true_inputVal) return void u.tip.toast("内容不能为空", "", "none");
                            if (this.num > 300) return void u.tip.toast("字数超过限制", "", "none");
                        }
                        2 === Math.floor(t) && (this.sureNum = e.detail.value.length, this.false_inputVal = e.detail.value, 
                        this.sureNum > 300 && u.tip.toast("字数超过限制", "", "none"));
                    },
                    preview: function(e) {
                        t.previewImage({
                            urls: [ e ]
                        });
                    },
                    uploadFile: function() {
                        var e = s(a.default.mark(function e(n) {
                            var r, i, o;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (1 !== Math.floor(n) || 6 !== this.inputData.true_tp.length) {
                                        e.next = 3;
                                        break;
                                    }
                                    return u.tip.toast("最多上传6张", "", "none"), e.abrupt("return");

                                  case 3:
                                    if (2 !== Math.floor(n) || 6 !== this.inputData.false_tp.length) {
                                        e.next = 6;
                                        break;
                                    }
                                    return u.tip.toast("最多上传6张", "", "none"), e.abrupt("return");

                                  case 6:
                                    return e.prev = 6, e.next = 9, u.foundation.chooseImageSync({
                                        num: 1
                                    });

                                  case 9:
                                    return r = e.sent, e.next = 12, u.foundation.uploadFileSync(r.tempFilePaths[0]);

                                  case 12:
                                    if (i = e.sent, 200 === Math.floor(i.statusCode)) {
                                        e.next = 17;
                                        break;
                                    }
                                    u.tip.error("图片上传失败", "", "none"), e.next = 22;
                                    break;

                                  case 17:
                                    if (o = i.data, 0 === Math.floor(o.status)) {
                                        e.next = 21;
                                        break;
                                    }
                                    return u.tip.error("图片上传失败"), e.abrupt("return");

                                  case 21:
                                    1 === Math.floor(n) ? this.inputData.true_tp.push(o.data.url) : this.inputData.false_tp.push(o.data.url);

                                  case 22:
                                    e.next = 27;
                                    break;

                                  case 24:
                                    e.prev = 24, e.t0 = e.catch(6), console.error(e.t0);

                                  case 27:
                                    t.hideLoading();

                                  case 28:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 6, 24 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = s(a.default.mark(function e() {
                            var n, u = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, r.default.feedbackType();

                                  case 3:
                                    n = e.sent, Object.keys(n.data).forEach(function(t) {
                                        u.typeList.push({
                                            index: t,
                                            name: n.data[t]
                                        });
                                    }), t.hideLoading();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
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
    a274: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("195b"), r = n("19b3");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("ce5d");
        var i = n("f0c5"), o = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    ce5d: function(t, e, n) {
        "use strict";
        var a = n("71b3");
        n.n(a).a;
    },
    ef69c: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("a274")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "ef69c", "common/runtime", "common/vendor" ] ] ]);