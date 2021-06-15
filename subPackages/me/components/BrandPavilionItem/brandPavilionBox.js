require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/BrandPavilionItem/brandPavilionBox" ], {
    "323a": function(t, n, e) {
        "use strict";
        var a = e("549c");
        e.n(a).a;
    },
    3753: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("5027"), o = e("7dd4");
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        e("323a");
        var r = e("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    5027: function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
    },
    "549c": function(t, n, e) {},
    "7dd4": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("a80a"), o = e.n(a);
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        n.default = o.a;
    },
    a80a: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = i(e("a34a")), o = i(e("4ec3"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, n, e, a, o, i, r) {
            try {
                var c = t[i](r), u = c.value;
            } catch (t) {
                return void e(t);
            }
            c.done ? n(u) : Promise.resolve(u).then(a, o);
        }
        var c = {
            props: {
                itemsData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                titleData: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    itemsDataCopy: []
                };
            },
            watch: {
                itemsData: {
                    handler: function() {
                        this.itemsDataCopy = this.itemsData;
                    },
                    deep: !0,
                    immediate: !0
                }
            },
            methods: {
                clickAnalysis: function() {},
                attention: function() {
                    var t = function(t) {
                        return function() {
                            var n = this, e = arguments;
                            return new Promise(function(a, o) {
                                var i = t.apply(n, e);
                                function c(t) {
                                    r(i, a, o, c, u, "next", t);
                                }
                                function u(t) {
                                    r(i, a, o, c, u, "throw", t);
                                }
                                c(void 0);
                            });
                        };
                    }(a.default.mark(function t(n) {
                        var e, i, r, c;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e = n.currentTarget.dataset.index, i = this.itemsDataCopy[e], r = 1 === Math.floor(i.is_collection) ? 2 : 1, 
                                t.next = 4, o.default.brandAttention(i.id, r);

                              case 4:
                                c = t.sent, 0 === Math.floor(c.code) && (i.is_collection = 1 === Math.floor(i.is_collection) ? 2 : 1), 
                                this.itemsDataCopy[e] = i, this.$set(this.itemsDataCopy, e, i);

                              case 8:
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
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/BrandPavilionItem/brandPavilionBox-create-component", {
    "subPackages/me/components/BrandPavilionItem/brandPavilionBox-create-component": function(t, n, e) {
        e("543d").createComponent(e("3753"));
    }
}, [ [ "subPackages/me/components/BrandPavilionItem/brandPavilionBox-create-component" ] ] ]);