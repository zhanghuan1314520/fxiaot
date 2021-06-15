require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/violationNotice" ], {
    "1bd7": function(t, n, e) {},
    2277: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("e13d")).default);
        }).call(this, e("543d").createPage);
    },
    "393b": function(t, n, e) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    "7b31": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("9fd8"), r = e.n(i);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = r.a;
    },
    "9fd8": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = a(e("a34a")), r = a(e("4ec3")), u = e("b628");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, n, e, i, r, u, a) {
                try {
                    var s = t[u](a), o = s.value;
                } catch (t) {
                    return void e(t);
                }
                s.done ? n(o) : Promise.resolve(o).then(i, r);
            }
            function o(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(i, r) {
                        var u = t.apply(n, e);
                        function a(t) {
                            s(u, i, r, a, o, "next", t);
                        }
                        function o(t) {
                            s(u, i, r, a, o, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        info: {
                            user_punish_info: {
                                imgList: []
                            }
                        },
                        msgType: 2,
                        against: {
                            key: "房小团社区行为规范",
                            value: ""
                        }
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("通知详情");
                },
                onLoad: function() {
                    var t = o(i.default.mark(function t(n) {
                        var e, u, a;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.msgType = n.type, this.riskMsgDetail(n), t.next = 4, r.default.statemenList();

                              case 4:
                                (e = t.sent) && e.data && (u = e.data, (a = u.filter(function(t) {
                                    return "房小团社区行为规范" === t.key;
                                })).length && (this.against = a[0] || ""));

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(n) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    riskMsgDetail: function() {
                        var t = o(i.default.mark(function t(n) {
                            var e;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.riskMsgDetail(n);

                                  case 2:
                                    e = t.sent, parseInt(e.code, 10) ? u.tip.toast("保存失败", "", e.message) : (this.info = e.data, 
                                    this.info.user_punish_info && this.info.user_punish_info.against_image_list_str ? this.info.user_punish_info.imgList = this.info.user_punish_info.against_image_list_str.split(",") || [] : this.info.user_punish_info.imgList = []);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    goRulesPage: function() {
                        t.navigateTo({
                            url: this.against.value
                        });
                    },
                    previewImage: function(n, e) {
                        t.previewImage({
                            current: n[e],
                            urls: n
                        });
                    }
                }
            };
            n.default = f;
        }).call(this, e("543d").default);
    },
    bf04: function(t, n, e) {
        "use strict";
        var i = e("1bd7");
        e.n(i).a;
    },
    e13d: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("393b"), r = e("7b31");
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        e("bf04");
        var a = e("f0c5"), s = Object(a.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = s.exports;
    }
}, [ [ "2277", "common/runtime", "common/vendor" ] ] ]);