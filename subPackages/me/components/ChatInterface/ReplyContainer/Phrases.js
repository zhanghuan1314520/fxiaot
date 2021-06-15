require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/ReplyContainer/Phrases" ], {
    "0272": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "2ebf": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("0272"), r = n("43c9");
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        n("f88a");
        var o = n("f0c5"), c = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = c.exports;
    },
    "43c9": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("5d77"), r = n.n(a);
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        t.default = r.a;
    },
    "5d77": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("2f62"), r = o(n("4ec3")), s = n("b628");
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
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
            var f = {
                components: {
                    PhrasesEditor: function() {
                        n.e("subPackages/me/components/ChatInterface/ReplyContainer/PhrasesEditor").then(function() {
                            return resolve(n("3c92"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ o(n("a3fe")).default ],
                data: function() {
                    return {
                        editorVisible: !1,
                        phrasesList: [],
                        userPhrasesList: [ "你好，想咨询下楼盘信息。", "请问你们楼盘什么时候开盘呢？", "有哪些户型，大概价格是多少呢？" ]
                    };
                },
                computed: i(i({}, (0, a.mapState)({
                    refreshPhrases: function(e) {
                        return e.chat.refreshPhrases;
                    }
                })), {}, {
                    hasSalesman: function() {
                        return this.sendUserInfo.sales_man_id > 0;
                    }
                }),
                watch: {
                    refreshPhrases: {
                        handler: function() {
                            var e = this;
                            r.default.me.phrasesList().then(function(t) {
                                t.data && (e.phrasesList = t.data.data);
                            });
                        },
                        immediate: !0
                    }
                },
                methods: i(i({}, (0, a.mapMutations)({
                    setRefreshPhrases: "chat/SET_REFRESH_PHRASES"
                })), {}, {
                    addHandle: function() {
                        this.phrasesList.length >= 10 ? s.tip.toast("常用语只能设置10条", "", "none") : this.editorVisible = !0;
                    },
                    editHandle: function() {
                        e.navigateTo({
                            url: "/subPackages/salesMan/pages/commonPhrases"
                        });
                    },
                    onSubmit: function(t) {
                        var n = this;
                        e.showLoading({
                            title: "保存中",
                            mask: !0
                        }), r.default.me.phrasesEdit(t).then(function(t) {
                            e.hideLoading(), t.data && n.setRefreshPhrases();
                        });
                    },
                    usePhraseClick: function(e) {
                        this.$emit("onSend", e);
                    }
                })
            };
            t.default = f;
        }).call(this, n("543d").default);
    },
    b8dd: function(e, t, n) {},
    f88a: function(e, t, n) {
        "use strict";
        var a = n("b8dd");
        n.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/ReplyContainer/Phrases-create-component", {
    "subPackages/me/components/ChatInterface/ReplyContainer/Phrases-create-component": function(e, t, n) {
        n("543d").createComponent(n("2ebf"));
    }
}, [ [ "subPackages/me/components/ChatInterface/ReplyContainer/Phrases-create-component" ] ] ]);