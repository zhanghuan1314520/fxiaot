(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/components/answer/topic-types/answerSelect" ], {
    "2b9a": function(e, t, n) {
        "use strict";
        var r = n("4b96");
        n.n(r).a;
    },
    4687: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.topicData && e.topicData.options && e.showAnswer ? e.info.answer.join("") : null), n = e.topicData && e.topicData.options ? e.__map(e.topicData.options, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    g1: e.currentSelectOption.includes(n)
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    l0: n
                }
            });
        }, i = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    "4b96": function(e, t, n) {},
    ca89: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("4687"), i = n("ef22");
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        n("2b9a");
        var o = n("f0c5"), s = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = s.exports;
    },
    ef00: function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            selectSingle: "select-single",
            selectMulti: "select-multi"
        }, o = {
            name: "SelectSingle",
            components: {},
            props: {
                info: {
                    type: Object,
                    default: function() {}
                },
                type: {
                    type: String,
                    default: function() {
                        return "selectSingle";
                    }
                },
                mode: {
                    type: String,
                    default: function() {
                        return "process";
                    }
                },
                questionIndex: {
                    type: Number,
                    default: function() {
                        return 0;
                    }
                },
                questionLength: {
                    type: Number,
                    default: function() {
                        return 1;
                    }
                }
            },
            data: function() {
                return {
                    wrongImageSrc: "https://imgcdn.huanjutang.com/assets/img/20213232323388081.png",
                    typeClassMap: c,
                    topicData: {},
                    currentSelectOption: []
                };
            },
            computed: {
                showAnswer: function() {
                    return "view" === this.mode;
                },
                isWrong: function() {
                    return this.info && !this.info.right;
                }
            },
            watch: {
                info: {
                    handler: function(e) {
                        if (e) if (this.topicData = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? r(Object(n), !0).forEach(function(t) {
                                    i(e, t, n[t]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                });
                            }
                            return e;
                        }({}, this.info), "view" === this.mode) {
                            if (!Array.isArray(e.answer)) throw Error("数据结构有误");
                            this.currentSelectOption = e.answer;
                        } else e.selfAnswer ? this.currentSelectOption = e.selfAnswer : this.currentSelectOption = [];
                    },
                    immediate: !0
                }
            },
            methods: {
                onSelect: function(e) {
                    if ("view" !== this.mode) if ("selectSingle" !== this.type) {
                        if ("selectMulti" !== this.type) throw Error("不受支持的题型");
                        this.selectMultiHandler(e);
                    } else this.selectSingleHandler(e);
                },
                selectMultiHandler: function(e) {
                    if (this.currentSelectOption.includes(e)) {
                        var t = this.currentSelectOption.findIndex(function(t) {
                            return t === e;
                        });
                        this.currentSelectOption.splice(t, 1);
                    } else this.currentSelectOption.push(e);
                    this.$emit("onChange", {
                        row: this.info,
                        value: this.currentSelectOption
                    });
                },
                selectSingleHandler: function(e) {
                    if (this.currentSelectOption.includes(e)) {
                        var t = this.currentSelectOption.findIndex(function(t) {
                            return t === e;
                        });
                        this.currentSelectOption.splice(t, 1);
                    } else this.currentSelectOption = [], this.currentSelectOption.push(e);
                    this.$emit("onChange", {
                        row: this.info,
                        value: this.currentSelectOption
                    });
                }
            }
        };
        t.default = o;
    },
    ef22: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("ef00"), i = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/salesMan/components/answer/topic-types/answerSelect-create-component", {
    "subPackages/salesMan/components/answer/topic-types/answerSelect-create-component": function(e, t, n) {
        n("543d").createComponent(n("ca89"));
    }
}, [ [ "subPackages/salesMan/components/answer/topic-types/answerSelect-create-component" ] ] ]);