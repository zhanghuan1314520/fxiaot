require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/search/components/SearchHome" ], {
    "1f0a": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("ca00");
            function r(t) {
                return function(t) {
                    if (Array.isArray(t)) return i(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return i(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            var c = {
                components: {
                    CustomNavigator: function() {
                        n.e("components/CustomNavigator").then(function() {
                            return resolve(n("5783"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Hotlist: function() {
                        n.e("subPackages/search/components/Hotlist").then(function() {
                            return resolve(n("e76f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseBanner: function() {
                        n.e("components/BaseBanner").then(function() {
                            return resolve(n("01c8"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    hotSearchList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    bannerList: {
                        type: Object,
                        default: function() {
                            return {
                                list: [],
                                config: {}
                            };
                        }
                    },
                    hotlist: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        historyList: [],
                        isShowToggleBtn: !1,
                        toggleStatus: !1,
                        toggleHeight: 0
                    };
                },
                created: function() {
                    var e = this, n = t.getStorageSync("historySearch_projects");
                    n && (this.historyList = n.split(",").map(decodeURIComponent), this.computedHistorySize()), 
                    this.$once("hook:beforeDestroy", function() {
                        e.saveHistory();
                    });
                },
                methods: {
                    clickHistory: function(t) {
                        getApp().sensors && getApp().sensors.track("S_search_click", {
                            keyword: t,
                            keyword_type: "历史搜索",
                            search_type: "楼盘"
                        }), this.$emit("clickHistory", t);
                    },
                    clearHistory: function() {
                        this.historyList = [], t.removeStorageSync("historySearch_projects");
                    },
                    saveHistory: function() {
                        var e = this.historyList.map(encodeURIComponent).join(",");
                        t.setStorageSync("historySearch_projects", e);
                    },
                    setHistory: function(t) {
                        var e;
                        -1 === this.historyList.indexOf(t) && (this.historyList = (e = []).concat.apply(e, [ t ].concat(r(this.historyList))), 
                        this.computedHistorySize(), this.saveHistory());
                    },
                    toggleHistoryGroup: function() {
                        this.toggleStatus = !this.toggleStatus;
                    },
                    computedHistorySize: function() {
                        var e = t.getSystemInfoSync(), n = (0, o.transformDeviceUnit)(e.windowWidth) - 64 - 44, r = this.historyList.reduce(function(t, e) {
                            return t + 24 * e.length + 56;
                        }, 0), i = Math.ceil(r / n);
                        this.isShowToggleBtn = i > 1, this.toggleHeight = 64 * i;
                    },
                    swiperNavHandle: function(t) {
                        (0, o.pageJump)(t);
                    },
                    handleClick: function() {}
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "4a37": function(t, e, n) {
        "use strict";
        var o = n("5297");
        n.n(o).a;
    },
    5297: function(t, e, n) {},
    "8d76": function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    9186: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("1f0a"), r = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    "93ad": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("8d76"), r = n("9186");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("4a37");
        var c = n("f0c5"), s = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/search/components/SearchHome-create-component", {
    "subPackages/search/components/SearchHome-create-component": function(t, e, n) {
        n("543d").createComponent(n("93ad"));
    }
}, [ [ "subPackages/search/components/SearchHome-create-component" ] ] ]);