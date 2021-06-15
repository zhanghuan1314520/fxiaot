require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/ReplyContainer/ToolsBar" ], {
    "26ef": function(t, n, e) {
        "use strict";
        var o = e("7854");
        e.n(o).a;
    },
    3827: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = a(e("4ec3"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var c = {
                mixins: [ a(e("a3fe")).default ],
                data: function() {
                    return {
                        hasLocationPromise: !1,
                        reportBtn: null
                    };
                },
                computed: {
                    hasSalesman: function() {
                        return this.sendUserInfo.sales_man_id > 0;
                    }
                },
                created: function() {
                    var n = this;
                    t.getSetting({
                        success: function(e) {
                            e.authSetting && (n.hasLocationPromise = e.authSetting["scope.userLocation"], n.hasLocationPromise || t.authorize({
                                scope: "scope.userLocation",
                                success: function() {
                                    n.hasLocationPromise = !0;
                                }
                            }));
                        }
                    }), o.default.activity.reportChatBtns().then(function(t) {
                        t.data && t.data.button && (n.reportBtn = t.data.button);
                    });
                },
                methods: {
                    phrasesHandle: function() {
                        this.$emit("onPhrase");
                    },
                    locationHandle: function() {
                        this.$emit("onLocation");
                    },
                    inviteHandle: function() {
                        this.$emit("onInvite");
                    },
                    goActivityReport: function() {
                        t.navigateTo({
                            url: this.reportBtn.url
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    "4c62": function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    },
    7854: function(t, n, e) {},
    b245: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3827"), a = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = a.a;
    },
    e8bdd: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("4c62"), a = e("b245");
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("26ef");
        var i = e("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/ReplyContainer/ToolsBar-create-component", {
    "subPackages/me/components/ChatInterface/ReplyContainer/ToolsBar-create-component": function(t, n, e) {
        e("543d").createComponent(e("e8bdd"));
    }
}, [ [ "subPackages/me/components/ChatInterface/ReplyContainer/ToolsBar-create-component" ] ] ]);