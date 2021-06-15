(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/BusiActivity" ], {
    3592: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("dcf9"), c = e("eb67");
        for (var a in c) "default" !== a && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(a);
        e("5a54");
        var o = e("f0c5"), u = Object(o.a)(c.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = u.exports;
    },
    "364d": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = e("ca00"), c = {
            components: {
                BaseBanner: function() {
                    e.e("components/BaseBanner").then(function() {
                        return resolve(e("01c8"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                dataApi: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    isShow: !0,
                    activity: {
                        list: [],
                        config: {}
                    },
                    activityFix: {}
                };
            },
            computed: {
                existActivity: function() {
                    return this.activity.list.length > 0;
                },
                existActivityFix: function() {
                    return Object.keys(this.activityFix).length > 0;
                }
            },
            watch: {
                dataApi: {
                    handler: function(t) {
                        t && (t.middleBanner && (this.activity = t.middleBanner), t.hoverBanner && (this.activityFix = t.hoverBanner));
                    },
                    immediate: !0
                }
            },
            methods: {
                goToUrlHandle: function() {
                    (0, i.pageJump)(this.activity.url);
                },
                goToUrlHandleFix: function() {
                    (0, i.pageJump)(this.activityFix.url);
                },
                close: function() {
                    this.isShow = !1, this.$emit("close", !1);
                },
                swiperNavHandle: function(t) {
                    (0, i.pageJump)(t);
                }
            }
        };
        n.default = c;
    },
    "4ea6": function(t, n, e) {},
    "5a54": function(t, n, e) {
        "use strict";
        var i = e("4ea6");
        e.n(i).a;
    },
    dcf9: function(t, n, e) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, c = [];
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {});
    },
    eb67: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("364d"), c = e.n(i);
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/BusiActivity-create-component", {
    "pages/components/BusiActivity-create-component": function(t, n, e) {
        e("543d").createComponent(e("3592"));
    }
}, [ [ "pages/components/BusiActivity-create-component" ] ] ]);