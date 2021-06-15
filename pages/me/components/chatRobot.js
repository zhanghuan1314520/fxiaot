(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/me/components/chatRobot" ], {
    "12fb": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("9569"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    "4e64": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("fff4"), a = n("12fb");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("ab7e");
        var r = n("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    9569: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("b628");
            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach(function(e) {
                        r(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var u = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/20213301342388081.png",
                        readStatus: !0
                    };
                },
                mounted: function() {
                    this.getUnReadMessage(), 1 !== o.cache.get("robotReadStatus") && (this.readStatus = !1);
                },
                methods: c(c({}, (0, n("2f62").mapActions)({
                    getUnReadMessage: "chat/getUnReadMessage"
                })), {}, {
                    toMsgDetail: function() {
                        o.cache.set("robotReadStatus", 1), this.readStatus = !0, this.getUnReadMessage(), 
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatRobot"
                        });
                    }
                })
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    ab7e: function(t, e, n) {
        "use strict";
        var o = n("cd50");
        n.n(o).a;
    },
    cd50: function(t, e, n) {},
    fff4: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/me/components/chatRobot-create-component", {
    "pages/me/components/chatRobot-create-component": function(t, e, n) {
        n("543d").createComponent(n("4e64"));
    }
}, [ [ "pages/me/components/chatRobot-create-component" ] ] ]);