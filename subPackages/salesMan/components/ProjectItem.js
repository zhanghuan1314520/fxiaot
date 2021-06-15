(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/components/ProjectItem" ], {
    "24be": function(t, e, n) {
        "use strict";
        var s = n("f444");
        n.n(s).a;
    },
    "38ab": function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("59b4"), i = n.n(s);
        for (var a in s) "default" !== a && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        e.default = i.a;
    },
    "59b4": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = {
                components: {
                    SalesMan: function() {
                        Promise.all([ n.e("common/vendor"), n.e("subPackages/salesMan/components/SalesMan") ]).then(function() {
                            return resolve(n("db8b"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    items: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    type: {
                        type: String,
                        default: ""
                    },
                    titleData: {
                        type: String,
                        default: ""
                    },
                    content: {
                        type: String,
                        default: ""
                    },
                    sourceKeyWord: {
                        type: String,
                        default: ""
                    },
                    sourcePosition: {
                        type: String,
                        default: ""
                    },
                    keyWordType: {
                        type: String,
                        default: ""
                    },
                    searchSource: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        list: [],
                        statusStyles: {
                            "待售": "info__tips__item--jjys",
                            "今日取证": "info__tips__item--jjys",
                            "复合中": "info__tips__item--jjys",
                            "已摇号": "info__tips__item--jjys",
                            "在售": "info__tips__item--zs",
                            "即将登记": "info__tips__item--zs",
                            "正在登记": "info__tips__item--zs",
                            "等待摇号": "info__tips__item--zs",
                            "初核名单": "info__tips__item--zs",
                            "等待加推": "info__tips__item--zzgs",
                            "交资料中": "info__tips__item--zzgs",
                            "自主选房": "info__tips__item--zzgs",
                            "复核名单": "info__tips__item--zzgs",
                            "已清盘": "info__tips__item--yqp"
                        }
                    };
                },
                watch: {
                    items: {
                        handler: function(t) {
                            this.list = t, this.list.length > 0 && this.list.forEach(function(t) {
                                t.characteristic = t.characteristic || [], t.characteristic = t.characteristic.filter(function(t) {
                                    return t;
                                }), t.tags = t.tags || [], t.characteristic = t.characteristic.slice(0, 3 - (t.tags.length > 3 ? 3 : t.tags.length)), 
                                t.tips = t.tags.concat(t.characteristic);
                            });
                        },
                        immediate: !0
                    }
                },
                methods: {
                    sendAnalysisHandle: function(t, e) {
                        "search_list" === this.content && getApp().sensors && getApp().sensors.track("S_search_result_click", {
                            keyword: this.sourceKeyWord,
                            keyword_type: this.keyWordType,
                            search_type: "楼盘",
                            search_source: this.searchSource,
                            result_id: t.project_id,
                            result_name: t.name,
                            order_by: e + 1
                        });
                    },
                    jumpTo: function(e) {
                        t.navigateTo({
                            url: e.url
                        });
                    },
                    toUrlHandle: function(e) {
                        var n = e.currentTarget.dataset.item, s = n.project_id || n.id;
                        t.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(s, "&project_name=").concat(n.name)
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    6080: function(t, e, n) {
        "use strict";
        var s = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    afa6: function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n("6080"), i = n("38ab");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("ce006"), n("24be");
        var c = n("f0c5"), o = Object(c.a)(i.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = o.exports;
    },
    ce006: function(t, e, n) {
        "use strict";
        var s = n("eb60");
        n.n(s).a;
    },
    eb60: function(t, e, n) {},
    f444: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/salesMan/components/ProjectItem-create-component", {
    "subPackages/salesMan/components/ProjectItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("afa6"));
    }
}, [ [ "subPackages/salesMan/components/ProjectItem-create-component" ] ] ]);