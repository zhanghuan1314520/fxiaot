(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/RedEnvelopesState" ], {
    4838: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    redpackDetail: {
                        type: Object,
                        default: function() {}
                    },
                    type: {
                        type: Number,
                        default: -1
                    },
                    navigateBack: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        status: -1,
                        hidden: !0
                    };
                },
                watch: {
                    type: {
                        handler: function(t) {
                            var e = this;
                            this.status = Number(t), -1 !== this.status && this.$nextTick(function() {
                                e.hidden = !1;
                            });
                        },
                        immediate: !0
                    }
                },
                methods: {
                    navigateToHandle: function() {
                        this.navigateBack ? t.navigateBack() : t.reLaunch({
                            url: "/subPackages/activity/pages/threeStoryBuilding"
                        });
                    },
                    emptyHandle: function() {
                        return !1;
                    },
                    closeHandle: function() {
                        var t = this;
                        this.hidden = !0, setTimeout(function() {
                            t.status = -1, t.$emit("update:type", -1);
                        }, 300);
                    },
                    submitHandle: function() {
                        this.closeHandle(), this.jumpServiceUrl(), this.$emit("contactHandle", !0);
                    },
                    jumpServiceUrl: function() {
                        t.navigateTo({
                            url: "/subPackages/tools/pages/webview?redirect=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FbxbNS0SdwI7dlNEINq4jiA"
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    "69a5": function(t, e, n) {
        "use strict";
        var a = n("c7ce");
        n.n(a).a;
    },
    9756: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4838"), i = n.n(a);
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = i.a;
    },
    c7ce: function(t, e, n) {},
    e96e: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    f6c2: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e96e"), i = n("9756");
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        n("69a5");
        var o = n("f0c5"), u = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/RedEnvelopesState-create-component", {
    "pages/components/lotteryDetail/RedEnvelopesState-create-component": function(t, e, n) {
        n("543d").createComponent(n("f6c2"));
    }
}, [ [ "pages/components/lotteryDetail/RedEnvelopesState-create-component" ] ] ]);