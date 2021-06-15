require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/IssueRecord" ], {
    1941: function(t, e, n) {},
    "2f89": function(t, e, n) {
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
    3238: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("4ec3")), o = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    visible: {
                        type: Boolean,
                        default: !1
                    },
                    activityId: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        isShow: !1,
                        redPacks: []
                    };
                },
                watch: {
                    visible: {
                        handler: function(t) {
                            this.isShow = t, t && this.getIssueData();
                        },
                        immediate: !0
                    }
                },
                methods: {
                    emptyHandle: function() {
                        return !1;
                    },
                    getIssueData: function() {
                        var t = this;
                        i.default.activity.redpackLogs(this.activityId).then(function(e) {
                            var n = e.data;
                            t.redPacks = n || [];
                        });
                    },
                    submitHandle: function(t) {
                        var e = this;
                        i.default.activity.redpackGetMoney(t).then(function(t) {
                            var n = t.data;
                            n && 0 === Number(n.code) && e.jumpServiceUrl();
                        });
                    },
                    jumpServiceUrl: function() {
                        t.navigateTo({
                            url: "/subPackages/tools/pages/webview?redirect=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FbxbNS0SdwI7dlNEINq4jiA"
                        });
                    },
                    closeDialog: function() {
                        this.isShow = !1, this.$emit("update:visible", !1);
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    "3ece": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("2f89"), o = n("46e1");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("4059");
        var a = n("f0c5"), u = Object(a.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = u.exports;
    },
    4059: function(t, e, n) {
        "use strict";
        var i = n("1941");
        n.n(i).a;
    },
    "46e1": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("3238"), o = n.n(i);
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/IssueRecord-create-component", {
    "subPackages/activity/components/IssueRecord-create-component": function(t, e, n) {
        n("543d").createComponent(n("3ece"));
    }
}, [ [ "subPackages/activity/components/IssueRecord-create-component" ] ] ]);