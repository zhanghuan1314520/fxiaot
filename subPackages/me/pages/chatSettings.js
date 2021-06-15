require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/chatSettings" ], {
    "1ce6": function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("fd6d")).default);
        }).call(this, e("543d").createPage);
    },
    "26c3": function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    "51f5": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("a5f6"), r = e.n(a);
        for (var s in a) "default" !== s && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(s);
        n.default = r.a;
    },
    5221: function(t, n, e) {},
    a5f6: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = i(e("a34a")), r = i(e("4ec3")), s = e("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, n, e, a, r, s, i) {
                try {
                    var u = t[s](i), o = u.value;
                } catch (t) {
                    return void e(t);
                }
                u.done ? n(o) : Promise.resolve(o).then(a, r);
            }
            function o(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, r) {
                        var s = t.apply(n, e);
                        function i(t) {
                            u(s, a, r, i, o, "next", t);
                        }
                        function o(t) {
                            u(s, a, r, i, o, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        avatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        session_id: null,
                        userInfo: {},
                        reason: [],
                        sales_man_id: ""
                    };
                },
                onLoad: function() {
                    var t = o(a.default.mark(function t(n) {
                        var e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.session_id = n.session_id, this.sales_man_id = n.sales_man_id, t.next = 4, 
                                r.default.chat.settingGetUserInfo(this.session_id);

                              case 4:
                                e = t.sent, this.userInfo = e.data;

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
                    preview: function(n) {
                        var e = [ n ];
                        t.previewImage({
                            urls: e
                        });
                    },
                    toUrl: function() {
                        t.navigateTo({
                            url: "/pages/lotterrDetail?id={{ this.userInfo }}"
                        });
                    },
                    cancelReportModal: function() {
                        this.hideReport = !1;
                    },
                    deleteContact: function() {
                        var n = o(a.default.mark(function n() {
                            var e = this;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    t.showModal({
                                        content: "你确认删除此联系人吗？",
                                        success: function() {
                                            var n = o(a.default.mark(function n(i) {
                                                var u;
                                                return a.default.wrap(function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                      case 0:
                                                        if (!i.confirm) {
                                                            n.next = 5;
                                                            break;
                                                        }
                                                        return n.next = 3, r.default.chat.deleteContact(e.session_id);

                                                      case 3:
                                                        u = n.sent, 0 === parseInt(u.code, 10) ? (s.tip.toast("删除成功"), t.navigateBack({
                                                            delta: 2
                                                        })) : s.tip.toast("删除失败");

                                                      case 5:
                                                      case "end":
                                                        return n.stop();
                                                    }
                                                }, n);
                                            }));
                                            return function(t) {
                                                return n.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 1:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    switchChangeFollow: function() {
                        var t = o(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.attentionUser(this.session_id);

                                  case 2:
                                    "关注成功" === t.sent.message ? this.userInfo.is_follow = 1 : this.userInfo.is_follow = 0;

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    switchChangeBlacklist: function() {
                        var t = o(a.default.mark(function t(n) {
                            var e, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = n.detail.value, t.next = 3, r.default.chat.addToBlacklist({
                                        link_id: this.session_id,
                                        is_blacklist: e
                                    });

                                  case 3:
                                    s = t.sent, this.userInfo.is_blacklist = "拉黑成功" === s.message;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    c041: function(t, n, e) {
        "use strict";
        var a = e("5221");
        e.n(a).a;
    },
    fd6d: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("26c3"), r = e("51f5");
        for (var s in r) "default" !== s && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(s);
        e("c041");
        var i = e("f0c5"), u = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    }
}, [ [ "1ce6", "common/runtime", "common/vendor" ] ] ]);