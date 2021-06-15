(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/CommonSmallCompont" ], {
    "0697": function(t, n, e) {
        "use strict";
        var o = e("2bbb");
        e.n(o).a;
    },
    1525: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("9165"), r = e("4bfd");
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        e("0697");
        var c = e("f0c5"), a = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = a.exports;
    },
    "2bbb": function(t, n, e) {},
    "3ced": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("4ec3")), r = {
                props: {
                    recommendComment: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    dataContent: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        alertShowFlag: !1,
                        id: "",
                        url: ""
                    };
                },
                watch: {
                    recommendComment: {
                        handler: function(t) {
                            t && t.project_id && this.queryCode();
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                methods: {
                    queryCode: function() {
                        var t = this;
                        o.default.groupCode({
                            project_id: this.recommendComment.project_id
                        }).then(function(n) {
                            if (0 === n.code && n.data) {
                                var e = n.data, o = e.id, r = e.url;
                                o && r && (t.id = o, t.url = r);
                            }
                        });
                    },
                    report: function(t) {
                        o.default.groupCodeLog({
                            id: t,
                            project_id: this.recommendComment.project_id
                        }).then();
                    },
                    navigateGroup: function() {
                        var n = this.recommendComment.material_url;
                        this.id && this.url && (n = this.url, this.report(this.id)), n && t.navigateTo({
                            url: n
                        });
                    },
                    copyNumber: function(n) {
                        n && t.setClipboardData({
                            data: n,
                            success: function() {
                                t.showToast({
                                    title: "微信号已复制"
                                });
                            }
                        });
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    "4bfd": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3ced"), r = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = r.a;
    },
    9165: function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/CommonSmallCompont-create-component", {
    "components/CommonSmallCompont-create-component": function(t, n, e) {
        e("543d").createComponent(e("1525"));
    }
}, [ [ "components/CommonSmallCompont-create-component" ] ] ]);