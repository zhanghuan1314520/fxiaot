require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiProjectVariant2" ], {
    "1be5": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n("4ec3")), a = n("ca00"), o = r(n("4ad9")), s = r(n("88f3"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var d = {
                "航拍": "aerial_view",
                VR: "vr",
                "直播": "lives"
            }, p = {
                name: "ProjectCollectionVariant2",
                components: {
                    BaseLayout: function() {
                        n.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                            return resolve(n("d956"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseLoading: function() {
                        n.e("subPackages/pageLayout/pages/components/BaseLoading").then(function() {
                            return resolve(n("b454"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseAdFlow: function() {
                        n.e("components/BaseAdFlow").then(function() {
                            return resolve(n("d4d5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseFilters: function() {
                        n.e("components/BaseFilters/Index").then(function() {
                            return resolve(n("9a4c"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ s.default, o.default ],
                props: {
                    settings: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    hasPureSearch: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        list: [],
                        param: {
                            page: 1,
                            size: 10
                        },
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
                        },
                        isRequesting: !1
                    };
                },
                computed: {
                    forceFixed: function() {
                        return -1 !== this.tabbarListIndex;
                    }
                },
                watch: {
                    settings: function() {
                        this.reload();
                    }
                },
                mounted: function() {
                    this.loadNext();
                },
                methods: {
                    sendAnalysisHandle: function(e) {
                        getApp().sensors && (e.ad ? getApp().sensors.track("AD_click", {
                            ad_medium: "小程序",
                            ad_type: "order",
                            ad_source: "uiLayout",
                            ad_code: e.ad.ad_code,
                            ad_nike_name: e.ad.ad_nike_name,
                            ad_number: e.ad.ad_number,
                            ad_keyword: e.ad.project_name
                        }) : getApp().sensors.track("P_project_click", {
                            project_name: e.name,
                            source: "小程序",
                            source_position: this.sourcePosition,
                            source_keyword: this.sourceKeyWord,
                            project_id: e.project_id
                        })), (0, a.pageJump)(e.url);
                    },
                    hiddenFilterHandle: function() {
                        this.tabbarListIndex = -1;
                    },
                    onFilterReset: function() {
                        this.resetFilters(), this.initFilterData(), this.list = [], this.reload();
                    },
                    paramMeddle: function(e) {
                        var t = {};
                        return Object.keys(e).forEach(function(n) {
                            e[n] && (t[n] = e[n]);
                        }), e.priceSort && (t.order = "desc" === e.priceSort ? "price_desc" : "price_asc"), 
                        e.circle_id && (delete this.params.circle_id, t.biz_circle_id = e.circle_id), t;
                    },
                    submitHandle: function(e) {
                        this.submitFilters(), this.hiddenFilterHandle();
                        var t = this.paramMeddle(e);
                        this.list = [], this.reload(t);
                    },
                    loadNext: function(t) {
                        var n = this;
                        if (this.more && !this.isRequesting) {
                            e.showLoading({
                                title: "加载中..."
                            }), this.isRequesting = !0;
                            var a = "";
                            this.settings.linkTypeDetail && "详情功能" === this.settings.linkTypeDetail.type && (a = d[this.settings.linkTypeDetail.value] || "");
                            var o = u(u({}, this.param), {}, {
                                collection_id: this.settings.assocated_collection.data_uri,
                                content_type: a
                            });
                            i.default.newSearchProject(o).then(function(i) {
                                var a = i.data;
                                e.stopPullDownRefresh(), e.hideLoading(), a && void 0 !== a.total && (n.param.page >= Math.ceil(a.total / n.param.size) ? n.more = !1 : n.param.page += 1, 
                                a.data.length > 0 && a.data.forEach(function(e) {
                                    e.characteristic = e.characteristic || [], e.characteristic = e.characteristic.filter(function(e) {
                                        return e;
                                    }), e.tags = e.tags || [], e.characteristic = e.characteristic.slice(0, 3 - (e.tags.length > 3 ? 3 : e.tags.length)), 
                                    e.tips = e.tags.concat(e.characteristic);
                                }), n.list = "reload" === t ? a.data : n.list.concat(a.data), n.more ? n.loading = !0 : n.loading = !1);
                            }).finally(function() {
                                n.isRequesting = !1;
                            });
                        }
                    },
                    reload: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.param = u({
                            page: 1,
                            size: 10
                        }, e), this.loading = !1, this.more = !0, this.loadNext("reload");
                    },
                    jumpTo: function(e) {
                        (0, a.pageJump)(e.url);
                    },
                    toUrlHandle: function(t) {
                        var n = t.currentTarget.dataset.item, i = n.project_id || n.id;
                        e.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(i, "&project_name=").concat(n.name)
                        });
                    },
                    stopHandle: function() {}
                }
            };
            t.default = p;
        }).call(this, n("543d").default);
    },
    "21dd": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("4143"), a = n("8655");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("9e87");
        var s = n("f0c5"), r = Object(s.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = r.exports;
    },
    4143: function(e, t, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    8655: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("1be5"), a = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = a.a;
    },
    "9e87": function(e, t, n) {
        "use strict";
        var i = n("eb1c");
        n.n(i).a;
    },
    eb1c: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiProjectVariant2-create-component", {
    "subPackages/pageLayout/pages/components/BusiProjectVariant2-create-component": function(e, t, n) {
        n("543d").createComponent(n("21dd"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiProjectVariant2-create-component" ] ] ]);