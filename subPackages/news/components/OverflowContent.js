require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/OverflowContent" ], {
    5974: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("5992"), u = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = u.a;
    },
    5992: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                props: {
                    content: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    rows: {
                        type: Number,
                        default: function() {
                            return 3;
                        }
                    },
                    topic: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    topicLength: {
                        type: Number,
                        default: function() {
                            return 10;
                        }
                    },
                    topicId: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    type: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    postId: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    hideTopic: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    height: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                methods: {
                    topicClick: function() {
                        t.navigateTo({
                            url: "/subPackages/discovery/pages/topicDetail?id=".concat(this.topicId, "&type=").concat(this.type)
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d").default);
    },
    "68e8": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("af21"), u = e("5974");
        for (var c in u) "default" !== c && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(c);
        e("abbc7");
        var r = e("f0c5"), a = Object(r.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = a.exports;
    },
    a934: function(t, n, e) {},
    abbc7: function(t, n, e) {
        "use strict";
        var o = e("a934");
        e.n(o).a;
    },
    af21: function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/OverflowContent-create-component", {
    "subPackages/news/components/OverflowContent-create-component": function(t, n, e) {
        e("543d").createComponent(e("68e8"));
    }
}, [ [ "subPackages/news/components/OverflowContent-create-component" ] ] ]);