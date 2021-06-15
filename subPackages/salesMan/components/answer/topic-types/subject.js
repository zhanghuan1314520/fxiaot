(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/components/answer/topic-types/subject" ], {
    "61b2": function(t, n, e) {
        "use strict";
        e.r(n);
        var c = e("9e2c"), s = e("67f5");
        for (var o in s) "default" !== o && function(t) {
            e.d(n, t, function() {
                return s[t];
            });
        }(o);
        e("b80c3");
        var a = e("f0c5"), u = Object(a.a)(s.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        n.default = u.exports;
    },
    "67f5": function(t, n, e) {
        "use strict";
        e.r(n);
        var c = e("fcdb"), s = e.n(c);
        for (var o in c) "default" !== o && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(o);
        n.default = s.a;
    },
    "9e2c": function(t, n, e) {
        "use strict";
        var c = function() {
            this.$createElement, this._self._c;
        }, s = [];
        e.d(n, "b", function() {
            return c;
        }), e.d(n, "c", function() {
            return s;
        }), e.d(n, "a", function() {});
    },
    b80c3: function(t, n, e) {
        "use strict";
        var c = e("e275");
        e.n(c).a;
    },
    e275: function(t, n, e) {},
    fcdb: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                selectSingle: "单选题",
                selectMulti: "多选题"
            }, c = {
                name: "Subject",
                props: {
                    info: {
                        type: Object,
                        default: function() {}
                    },
                    index: {
                        type: Number,
                        default: function() {
                            return 1;
                        }
                    },
                    mode: {
                        type: String,
                        default: function() {
                            return "process";
                        }
                    }
                },
                data: function() {
                    return {
                        remarkSrc: "https://imgcdn.huanjutang.com/assets/img/20213241646328081.png",
                        indexSrc: "https://imgcdn.huanjutang.com/assets/img/20213221055548081.png",
                        pinSrc: "https://imgcdn.huanjutang.com/assets/img/2021322113788081.png",
                        topicTypeMap: e
                    };
                },
                computed: {
                    showPin: function() {
                        return "process" === this.mode;
                    },
                    showIndex: function() {
                        return "process" === this.mode;
                    }
                },
                methods: {
                    showRemark: function(n) {
                        t.showModal({
                            title: "说明",
                            content: n,
                            showCancel: !1
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/salesMan/components/answer/topic-types/subject-create-component", {
    "subPackages/salesMan/components/answer/topic-types/subject-create-component": function(t, n, e) {
        e("543d").createComponent(e("61b2"));
    }
}, [ [ "subPackages/salesMan/components/answer/topic-types/subject-create-component" ] ] ]);