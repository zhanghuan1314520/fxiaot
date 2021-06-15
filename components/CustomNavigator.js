(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/CustomNavigator" ], {
    "44f5": function(e, t, a) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, i = [];
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return i;
        }), a.d(t, "a", function() {});
    },
    5783: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("44f5"), i = a("a685");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("5be0");
        var c = a("f0c5"), r = Object(c.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = r.exports;
    },
    "5be0": function(e, t, a) {
        "use strict";
        var n = a("e8bc");
        a.n(n).a;
    },
    "6f40": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = a("ca00"), i = {
            props: {
                url: {
                    type: String,
                    default: ""
                },
                dataId: {
                    type: String,
                    default: ""
                },
                dataName: {
                    type: String,
                    default: ""
                },
                dataType: {
                    type: String,
                    default: ""
                },
                dataContent: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    src: "",
                    openType: "navigate",
                    appId: ""
                };
            },
            watch: {
                url: {
                    handler: function(e) {
                        if (e) {
                            var t = this.url;
                            if (t.indexOf(":/") > -1) {
                                var a = t.split(":/"), n = a[0], i = a[1];
                                if (n.indexOf("wxapp-") > -1) {
                                    var o = n.split("wxapp-")[1];
                                    this.appId = o, this.src = i, this.openType = "navigate";
                                } else switch (this.src = i, n) {
                                  case "navigateTo":
                                    this.openType = "navigate";
                                    break;

                                  case "redirectTo":
                                    this.openType = "redirect";
                                    break;

                                  case "switchTab":
                                    this.openType = "switchTab";
                                    break;

                                  case "reLaunch":
                                    this.openType = "reLaunch";
                                    break;

                                  case "navigateBack":
                                    this.openType = "navigateBack";
                                    break;

                                  case "plugin-private":
                                    this.openType = "plugin-private";
                                    break;

                                  default:
                                    this.openType = "navigate";
                                }
                            } else this.src = e, this.openType = "navigate";
                        }
                    },
                    immediate: !0
                }
            },
            methods: {
                clickHandle: function() {},
                navigateTo: function(e, t) {
                    (0, n.pageJump)(e, t);
                }
            }
        };
        t.default = i;
    },
    a685: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("6f40"), i = a.n(n);
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = i.a;
    },
    e8bc: function(e, t, a) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/CustomNavigator-create-component", {
    "components/CustomNavigator-create-component": function(e, t, a) {
        a("543d").createComponent(a("5783"));
    }
}, [ [ "components/CustomNavigator-create-component" ] ] ]);