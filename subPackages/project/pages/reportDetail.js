require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/reportDetail" ], {
    "3fd4": function(t, e, n) {
        "use strict";
        var a = n("730a");
        n.n(a).a;
    },
    "449c": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("fbac"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    "724a": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("85e1")).default);
        }).call(this, n("543d").createPage);
    },
    "730a": function(t, e, n) {},
    "85e1": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("938b"), i = n("449c");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("3fd4");
        var u = n("f0c5"), o = Object(u.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "938b": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    fbac: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), i = u(n("4ec3")), r = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, a, i, r, u) {
                try {
                    var o = t[r](u), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(s) : Promise.resolve(s).then(a, i);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function u(t) {
                            o(r, a, i, u, s, "next", t);
                        }
                        function s(t) {
                            o(r, a, i, u, s, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        num: 0,
                        imageList: [],
                        inputVal: "",
                        type: "",
                        blowing_type: "",
                        id: ""
                    };
                },
                onLoad: function(e) {
                    this.id = e && e.id, this.type = e.type, this.blowing_type = e.blowing_type, e.title && t.setNavigationBarTitle({
                        title: e.title
                    });
                },
                methods: {
                    inputNum: function(t) {
                        this.num = t.detail.value.length, this.inputVal = t.detail.value;
                    },
                    deletePic: function(t) {
                        for (var e = [], n = 0; n < this.imageList.length; n += 1) {
                            if (Math.floor(n) === Math.floor(t)) return;
                            e.push(this.imageList[n]);
                        }
                        this.imageList = e;
                    },
                    upForm: function() {
                        var e = s(a.default.mark(function e() {
                            var n, u;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (n = this.imageList.join(","), this.inputVal) {
                                        e.next = 4;
                                        break;
                                    }
                                    return r.tip.toast("内容不能为空", "", "none"), e.abrupt("return");

                                  case 4:
                                    if (!(this.num > 300)) {
                                        e.next = 7;
                                        break;
                                    }
                                    return r.tip.toast("字数超过限制", "", "none"), e.abrupt("return");

                                  case 7:
                                    if (!this.type) {
                                        e.next = 13;
                                        break;
                                    }
                                    return e.next = 10, i.default.question.whistleSetContent(this.type, this.blowing_type, this.id, this.inputVal, n);

                                  case 10:
                                    u = e.sent, e.next = 16;
                                    break;

                                  case 13:
                                    return e.next = 15, i.default.setPostFeedback(this.type, this.inputVal, n);

                                  case 15:
                                    u = e.sent;

                                  case 16:
                                    "举报成功" === u.data && r.tip.toast("举报成功"), this.inputVal = "", this.imageList = [], 
                                    setTimeout(function() {
                                        t.navigateBack();
                                    }, 600);

                                  case 20:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    preview: function(e) {
                        var n = e;
                        t.previewImage({
                            urls: [ n ]
                        });
                    },
                    uploadFile: function() {
                        var e = s(a.default.mark(function e() {
                            var n, i, u;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (6 !== this.imageList.length) {
                                        e.next = 3;
                                        break;
                                    }
                                    return r.tip.toast("最多上传6张", "", "none"), e.abrupt("return");

                                  case 3:
                                    return e.prev = 3, e.next = 6, r.foundation.chooseImageSync();

                                  case 6:
                                    return n = e.sent, e.next = 9, r.foundation.uploadFileSync(n.tempFilePaths[0]);

                                  case 9:
                                    if (i = e.sent, 200 === Math.floor(i.statusCode)) {
                                        e.next = 14;
                                        break;
                                    }
                                    r.tip.error("图片上传失败", "", "none"), e.next = 19;
                                    break;

                                  case 14:
                                    if (u = i.data, 0 === Math.floor(u.status)) {
                                        e.next = 18;
                                        break;
                                    }
                                    return r.tip.error("图片上传失败"), e.abrupt("return");

                                  case 18:
                                    this.imageList.push(u.data.url);

                                  case 19:
                                    e.next = 24;
                                    break;

                                  case 21:
                                    e.prev = 21, e.t0 = e.catch(3), console.error(e.t0);

                                  case 24:
                                    t.hideLoading();

                                  case 25:
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
            e.default = c;
        }).call(this, n("543d").default);
    }
}, [ [ "724a", "common/runtime", "common/vendor" ] ] ]);