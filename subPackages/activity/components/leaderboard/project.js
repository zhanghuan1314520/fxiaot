require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/leaderboard/project" ], {
    "069b": function(t, e, n) {
        "use strict";
        var r = n("8aed");
        n.n(r).a;
    },
    3468: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = n("2f62");
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        a(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var i = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    status: {
                        type: Number,
                        default: function() {
                            return 1;
                        }
                    },
                    index: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    }
                },
                data: function() {
                    return {
                        buttonMap: {
                            1: {
                                text: "为它投票",
                                className: "active"
                            },
                            2: {
                                text: "明天再来",
                                className: "default"
                            },
                            3: {
                                text: "活动结束",
                                className: "default"
                            },
                            4: {
                                text: "为它投票",
                                className: "active"
                            }
                        }
                    };
                },
                computed: {
                    compressCover: function() {
                        if (this.item.cover) {
                            var t = this.item.cover.indexOf("?") > -1 ? "&" : "?";
                            return "".concat(this.item.cover).concat(t).concat("imageView2/2/w/580/format/jpg/interlace/1/q/100|imageslim");
                        }
                        return "";
                    }
                },
                methods: o(o({}, (0, r.mapMutations)({
                    setCurrentIndex: "activity/SET_CURRENT_INDEX",
                    setCurrentObject: "activity/SET_CURRENT_OBJECT",
                    setCurrentSourceParam: "activity/SET_CURRENT_SOURCE_PARAM"
                })), {}, {
                    emptyFunction: function() {},
                    handleVote: function(t) {
                        1 !== this.status && 4 !== this.status || this.$emit("vote", t, this.index);
                    },
                    handleNext: function() {
                        this.setCurrentIndex(this.index), this.setCurrentObject(this.item), this.setCurrentSourceParam("homeList"), 
                        t.navigateTo({
                            url: "/subPackages/activity/pages/leaderboardProject?id=".concat(this.item.id)
                        });
                    }
                })
            };
            e.default = i;
        }).call(this, n("543d").default);
    },
    "45f6": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3468"), c = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = c.a;
    },
    "6a84": function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    "8aed": function(t, e, n) {},
    c89d: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("6a84"), c = n("45f6");
        for (var o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        n("069b");
        var a = n("f0c5"), i = Object(a.a)(c.default, r.b, r.c, !1, null, "05f26bdd", null, !1, r.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/leaderboard/project-create-component", {
    "subPackages/activity/components/leaderboard/project-create-component": function(t, e, n) {
        n("543d").createComponent(n("c89d"));
    }
}, [ [ "subPackages/activity/components/leaderboard/project-create-component" ] ] ]);