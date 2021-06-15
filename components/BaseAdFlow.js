(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/BaseAdFlow" ], {
    2232: function(t, e, i) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {});
    },
    a597: function(t, e, i) {
        "use strict";
        var n = i("caba");
        i.n(n).a;
    },
    caba: function(t, e, i) {},
    cdeb: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i("ca00");
        function o(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), i.push.apply(i, n);
            }
            return i;
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach(function(e) {
                    r(t, e, i[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                });
            }
            return t;
        }
        function r(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t;
        }
        var a = {
            props: {
                flowDetail: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                detailSource: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    detail: {},
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
                flowDetail: {
                    handler: function(t) {
                        if (t) try {
                            this.detail = t, this.detail.project_info.characteristic = this.detail.project_info.characteristic || [], 
                            this.detail.project_info.tags = this.detail.project_info.tags || [], this.detail.project_info.characteristic = this.detail.project_info.characteristic.slice(0, 3 - (this.detail.project_info.tags.length > 3 ? 3 : this.detail.project_info.tags.length)), 
                            this.detail.project_info.tips = this.detail.project_info.tags.concat(this.detail.project_info.characteristic);
                        } catch (t) {
                            this.detail = c(c({}, this.detail), {}, {
                                project_info: [],
                                tags: []
                            });
                        }
                    },
                    immediate: !0
                }
            },
            methods: {
                jumpTo: function(t) {
                    (0, n.pageJump)(t.url);
                }
            }
        };
        e.default = a;
    },
    d4d5: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("2232"), o = i("f8c3");
        for (var c in o) "default" !== c && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(c);
        i("a597");
        var r = i("f0c5"), a = Object(r.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = a.exports;
    },
    f8c3: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("cdeb"), o = i.n(n);
        for (var c in n) "default" !== c && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/BaseAdFlow-create-component", {
    "components/BaseAdFlow-create-component": function(t, e, i) {
        i("543d").createComponent(i("d4d5"));
    }
}, [ [ "components/BaseAdFlow-create-component" ] ] ]);