(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ProjectItem/ProjectItem" ], {
    "29f6": function(t, e, n) {},
    4786: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("57a9"), o = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    "57a9": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("ca00"), o = {
                components: {
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    },
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
                        if ("search_list" === this.content && getApp().sensors && getApp().sensors.track("S_search_result_click", {
                            keyword: this.sourceKeyWord,
                            keyword_type: this.keyWordType,
                            search_type: "楼盘",
                            search_source: this.searchSource,
                            result_id: t.project_id,
                            result_name: t.name,
                            order_by: e + 1
                        }), getApp().sensors) if (t.ad) {
                            if (!this.adType || !this.adSource) return;
                            getApp().sensors.track("AD_click", {
                                ad_medium: "小程序",
                                ad_type: this.adType,
                                ad_source: this.adSource,
                                ad_code: t.ad.ad_code,
                                ad_nike_name: t.ad.ad_nike_name,
                                ad_number: t.ad.ad_number,
                                ad_keyword: t.ad.project_name
                            });
                        } else getApp().sensors.track("P_project_click", {
                            project_name: t.name,
                            source: "小程序",
                            source_position: this.sourcePosition,
                            source_keyword: this.sourceKeyWord,
                            project_id: t.project_id
                        });
                        (0, i.pageJump)(t.url);
                    },
                    jumpTo: function(t) {
                        (0, i.pageJump)(t.url);
                    },
                    toUrlHandle: function(e) {
                        var n = e.currentTarget.dataset.item, i = n.project_id || n.id;
                        t.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(i, "&project_name=").concat(n.name)
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    "72e2": function(t, e, n) {
        "use strict";
        var i = n("29f6");
        n.n(i).a;
    },
    "790e": function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.list, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    a0: e.ad_number ? null : {
                        width: "216rpx",
                        height: "180rpx",
                        "border-radius": "8rpx"
                    }
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    ae52: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("790e"), o = n("4786");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("72e2");
        var a = n("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ProjectItem/ProjectItem-create-component", {
    "components/ProjectItem/ProjectItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("ae52"));
    }
}, [ [ "components/ProjectItem/ProjectItem-create-component" ] ] ]);