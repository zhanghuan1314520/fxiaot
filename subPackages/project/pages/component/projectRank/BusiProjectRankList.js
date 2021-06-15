require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/component/projectRank/BusiProjectRankList" ], {
    "099b": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("1f0d"), o = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    "1f0d": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), o = n("ca00");
            function r(t, e, n, i, o, r, a) {
                try {
                    var c = t[r](a), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(i, o);
            }
            var a = null, c = {
                components: {
                    BaseAdFlow: function() {
                        n.e("components/BaseAdFlow").then(function() {
                            return resolve(n("d4d5"));
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
                    tabName: {
                        type: String,
                        default: function() {
                            return "";
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
                    },
                    adSource: {
                        type: String,
                        default: ""
                    },
                    adType: {
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
                            this.list = t, this.list.length > 0 && (this.list.forEach(function(t) {
                                t.characteristic = t.characteristic || [], t.characteristic = t.characteristic.filter(function(t) {
                                    return t;
                                }), t.tags = t.tags || [], t.characteristic = t.characteristic.slice(0, 3 - (t.tags.length > 3 ? 3 : t.tags.length)), 
                                t.tips = t.tags.concat(t.characteristic);
                            }), this.observerNode());
                        },
                        immediate: !0
                    }
                },
                beforeDestroy: function() {
                    this.disconnectObserve();
                },
                methods: {
                    sendAnalysisHandle: function(t) {
                        getApp().sensors && (t.ad ? getApp().sensors.track("AD_click", {
                            ad_medium: "小程序",
                            ad_type: this.adType,
                            ad_source: this.adSource,
                            ad_code: t.ad.ad_code,
                            ad_nike_name: t.ad.ad_nike_name,
                            ad_number: t.ad.ad_number,
                            ad_keyword: t.ad.project_name
                        }) : getApp().sensors.track("P_project_click", {
                            project_name: t.name,
                            source: "小程序",
                            source_position: this.sourcePosition,
                            source_keyword: this.tabName,
                            project_id: t.project_id
                        }));
                    },
                    jumpTo: function(t) {
                        (0, o.pageJump)(t.url);
                    },
                    toUrlHandle: function(e) {
                        var n = e.currentTarget.dataset.item, i = n.project_id || n.id;
                        t.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(i, "&project_name=").concat(n.name)
                        });
                    },
                    observerNode: function() {
                        var t = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(i, o) {
                                    var a = t.apply(e, n);
                                    function c(t) {
                                        r(a, i, o, c, s, "next", t);
                                    }
                                    function s(t) {
                                        r(a, i, o, c, s, "throw", t);
                                    }
                                    c(void 0);
                                });
                            };
                        }(i.default.mark(function t() {
                            var e = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.disconnectObserve(), t.next = 3, this.$nextTick();

                                  case 3:
                                    this.createObserveInstance(), a.relativeToViewport().observe(".observe-image", function(t) {
                                        if (t.intersectionRatio > 0) {
                                            var n = t.dataset.index;
                                            e.$set(e.list[Number(n)], "show", !0);
                                        }
                                    });

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    disconnectObserve: function() {
                        a && (a.disconnect(), a = null);
                    },
                    createObserveInstance: function() {
                        a = this.createIntersectionObserver({
                            observeAll: !0
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "713f": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    8413: function(t, e, n) {},
    a6cf: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("713f"), o = n("099b");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("d4b0"), n("cb9f");
        var a = n("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    },
    cb9f: function(t, e, n) {
        "use strict";
        var i = n("8413");
        n.n(i).a;
    },
    d052: function(t, e, n) {},
    d4b0: function(t, e, n) {
        "use strict";
        var i = n("d052");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/pages/component/projectRank/BusiProjectRankList-create-component", {
    "subPackages/project/pages/component/projectRank/BusiProjectRankList-create-component": function(t, e, n) {
        n("543d").createComponent(n("a6cf"));
    }
}, [ [ "subPackages/project/pages/component/projectRank/BusiProjectRankList-create-component" ] ] ]);