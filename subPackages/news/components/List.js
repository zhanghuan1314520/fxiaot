require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/List" ], {
    "88a3": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("926b"), o = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = o.a;
    },
    9185: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "926b": function(t, e, n) {
        "use strict";
        function r(t) {
            return function(t) {
                if (Array.isArray(t)) return o(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = {
            components: {
                Loading: function() {
                    n.e("subPackages/news/components/Loading").then(function() {
                        return resolve(n("77437"));
                    }.bind(null, n)).catch(n.oe);
                },
                NoData: function() {
                    n.e("subPackages/news/components/NoData").then(function() {
                        return resolve(n("474b"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomLine: function() {
                    n.e("subPackages/news/components/BottomLine").then(function() {
                        return resolve(n("53ce"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                params: {
                    type: Object,
                    default: function() {
                        return {
                            size: 10
                        };
                    }
                },
                api: {
                    type: Function,
                    default: null,
                    required: !0
                },
                height: {
                    type: String,
                    default: "0px"
                },
                noDataParams: {
                    type: Object,
                    default: function() {
                        return {
                            text: "",
                            image: "",
                            pageUrl: null,
                            isSelf: !1
                        };
                    }
                }
            },
            data: function() {
                return {
                    list: [],
                    page: 1,
                    end: !1,
                    loading: !1,
                    triggered: !1,
                    canScroll: !1,
                    clientHeight: 0
                };
            },
            mounted: function() {},
            methods: {
                load: function(t) {
                    var e = this;
                    if (t) {
                        if (this.end) return;
                        this.page += 1;
                    } else this.list = [], this.page = 1, this.$emit("clear");
                    this.loading = !0, this.api(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? a(Object(n), !0).forEach(function(e) {
                                i(t, e, n[e]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                        }
                        return t;
                    }({
                        page: this.page
                    }, this.params)).then(function(n) {
                        n.data && (e.list = t ? [].concat(r(e.list), r(n.data.list)) : n.data.list, e.end = n.data.count < e.page * (e.params && e.params.size || 10)), 
                        e.loading = !1, e.triggered = !1;
                    });
                },
                onRefresh: function() {
                    this.loading || (this.triggered = !0, this.load(), this.$emit("onRefresh"));
                },
                reachBottom: function() {
                    this.loading || this.load(!0);
                },
                onRestore: function() {}
            }
        };
        e.default = c;
    },
    ca7e: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("9185"), o = n("88a3");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        var i = n("f0c5"), c = Object(i.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/List-create-component", {
    "subPackages/news/components/List-create-component": function(t, e, n) {
        n("543d").createComponent(n("ca7e"));
    }
}, [ [ "subPackages/news/components/List-create-component" ] ] ]);