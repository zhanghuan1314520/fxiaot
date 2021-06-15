require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/reportType" ], {
    "31db": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = r(n("a34a")), s = r(n("4ec3")), a = n("b628");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, i, s, a, r) {
                try {
                    var o = t[a](r), u = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(u) : Promise.resolve(u).then(i, s);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, s) {
                        var a = t.apply(e, n);
                        function r(t) {
                            o(a, i, s, r, u, "next", t);
                        }
                        function u(t) {
                            o(a, i, s, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var c = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        typeList: [],
                        type: "",
                        id: "",
                        finish: !1,
                        num: 6,
                        imagesList: [],
                        questionContent: "",
                        phoneNum: "",
                        typeData: [],
                        chooseIndex: -1
                    };
                },
                onLoad: function() {
                    var e = u(i.default.mark(function e(n) {
                        var s;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.type = n.type || "1", this.id = n && n.id || "", s = "", e.t0 = Math.floor(this.type), 
                                e.next = 5 === e.t0 ? 6 : 99 === e.t0 ? 8 : 10;
                                break;

                              case 6:
                                return s = "纠错", e.abrupt("break", 11);

                              case 8:
                                return s = "反馈", e.abrupt("break", 11);

                              case 10:
                                s = "举报";

                              case 11:
                                return t.setNavigationBarTitle({
                                    title: s
                                }), e.next = 14, this.reload();

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    upFileHandle: function() {
                        var e = u(i.default.mark(function e() {
                            var n, r, o = this;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.finish) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    return this.finish = !1, n = "", this.imagesList.length > 0 && (n = this.imagesList.join(",")), 
                                    e.next = 7, s.default.question.whistleSetContent({
                                        whistle_blowing_type: this.typeData.join(","),
                                        img: n,
                                        content: this.questionContent,
                                        contact: this.phoneNum,
                                        type: this.type,
                                        object_id: this.id
                                    });

                                  case 7:
                                    (r = e.sent) && "success" === r.message ? (a.tip.toast("提交成功"), setTimeout(function() {
                                        o.finish = !0, t.navigateBack();
                                    }, 50)) : a.tip.toast("提交失败");

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
                    questionCont: function(t, e) {
                        var n = e.detail.value;
                        t && "question" === t ? this.questionContent = n.replace(/(^\s+)|(\s+$)/g, "") : this.phoneNum = n.replace(/(^\s+)|(\s+$)/g, ""), 
                        this.changeFinishStatus.call(this);
                    },
                    chooseTypeHandle: function(t) {
                        var e = [], n = this.typeList[t];
                        this.typeList.forEach(function(t) {
                            t.is_toggle && e.push(t.type);
                        }), e.length < 2 ? n.is_toggle = !n.is_toggle : e.forEach(function(t) {
                            t === n.type && (n.is_toggle = !1);
                        }), this.$set(this.typeList[t], "is_toggle", n.is_toggle), this.changeFinishStatus.call(this);
                    },
                    chooseRadioHandle: function(t) {
                        this.chooseIndex = t, this.changeFinishStatus();
                    },
                    deleteImg: function(t) {
                        for (var e = [], n = 0; n < this.imagesList.length; n += 1) {
                            if (parseInt(n, 10) === parseInt(t, 10)) return;
                            e.push(this.imagesList[n]);
                        }
                        this.imagesList = e, this.changeFinishStatus.call(this);
                    },
                    previewImg: function(e) {
                        var n = this.imagesList[e];
                        t.previewImage({
                            current: n,
                            urls: this.imagesList
                        });
                    },
                    upFileImg: function() {
                        var e = u(i.default.mark(function e() {
                            var n, s = this;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!(this.imagesList.length > 0)) {
                                        e.next = 4;
                                        break;
                                    }
                                    this.num = 6 - this.imagesList.length, e.next = 7;
                                    break;

                                  case 4:
                                    if (6 !== this.imagesList.length) {
                                        e.next = 7;
                                        break;
                                    }
                                    return a.tip.toast("最多上传6张", "", "none"), e.abrupt("return");

                                  case 7:
                                    return e.next = 9, a.foundation.chooseImageSync({
                                        num: this.num
                                    });

                                  case 9:
                                    n = e.sent, t.showLoading({
                                        title: "上传中"
                                    }), Object.keys(n.tempFilePaths).forEach(function() {
                                        var t = u(i.default.mark(function t(e) {
                                            var r, o;
                                            return i.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return t.prev = 0, t.next = 3, a.foundation.uploadFileSync(n.tempFilePaths[e]);

                                                  case 3:
                                                    if (r = t.sent, 200 === parseInt(r.statusCode, 10)) {
                                                        t.next = 8;
                                                        break;
                                                    }
                                                    a.tip.error("第".concat(e, "张图片上传失败")), t.next = 17;
                                                    break;

                                                  case 8:
                                                    if (o = r.data, 0 === parseInt(o.status, 10)) {
                                                        t.next = 13;
                                                        break;
                                                    }
                                                    a.tip.error("第".concat(e, "张图片上传失败")), t.next = 17;
                                                    break;

                                                  case 13:
                                                    if (s.imagesList = s.imagesList.concat(o.data.url), !(s.imagesList.length > 6)) {
                                                        t.next = 17;
                                                        break;
                                                    }
                                                    return a.tip.toast("最多上传6张图片", "", "none"), t.abrupt("return");

                                                  case 17:
                                                    t.next = 22;
                                                    break;

                                                  case 19:
                                                    t.prev = 19, t.t0 = t.catch(0), console.error(t.t0);

                                                  case 22:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t, null, [ [ 0, 19 ] ]);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()), this.changeFinishStatus.call(this), t.hideLoading();

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    changeFinishStatus: function() {
                        var t = this;
                        this.typeData = [];
                        var e = this.typeList.find(function(t) {
                            return t.is_toggle;
                        }), n = "5" === this.type || "99" === this.type;
                        (n || this.chooseIndex || 0 !== e.length) && (n && this.chooseIndex >= 0 && this.typeData.push(this.typeList[this.chooseIndex].type), 
                        this.typeList.forEach(function(e) {
                            e.is_toggle && t.typeData.push(e.type);
                        }), ("3" === this.type && this.imagesList.length > 0 || "3" !== this.type) && this.questionContent && this.typeData.length > 0 ? this.finish = !0 : this.finish = !1);
                    },
                    reload: function() {
                        var t = u(i.default.mark(function t() {
                            var e;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.question.whistleBlowing(this.type);

                                  case 2:
                                    e = t.sent, this.typeList = e.data, this.typeList.forEach(function(t) {
                                        t.is_toggle = !1;
                                    });

                                  case 5:
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
            e.default = c;
        }).call(this, n("543d").default);
    },
    4266: function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    },
    "4fa8": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("8587")).default);
        }).call(this, n("543d").createPage);
    },
    6707: function(t, e, n) {},
    8587: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("4266"), s = n("a08b");
        for (var a in s) "default" !== a && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        n("ecba");
        var r = n("f0c5"), o = Object(r.a)(s.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = o.exports;
    },
    a08b: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("31db"), s = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = s.a;
    },
    ecba: function(t, e, n) {
        "use strict";
        var i = n("6707");
        n.n(i).a;
    }
}, [ [ "4fa8", "common/runtime", "common/vendor" ] ] ]);