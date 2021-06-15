require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiMotionButtonDefault" ], {
    1135: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = {
                mixins: [ function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }(e("88f3")).default ],
                props: {
                    settings: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        scrollTop: 0,
                        show: !1
                    };
                },
                computed: {
                    motionBtnIndex: function() {
                        return this.$store.state.uiLayout.motionBtnIndex;
                    }
                },
                watch: {
                    scrollTop: function(t) {
                        this.settings.length > 0 && t > this.settings[0].scroll ? this.show = !0 : this.show = !1;
                    }
                },
                methods: {
                    to: function(a) {
                        switch ("".concat(a.link.data_from)) {
                          case "1":
                            t.navigateTo({
                                url: "/subPackages/project/pages/collectProjects?collection_id=".concat(a.link.data_uri)
                            });
                            break;

                          case "2":
                            a.link.data_url && t.navigateTo({
                                url: a.link.data_url
                            });
                            break;

                          case "3":
                            t.navigateTo({
                                url: "/pages/lotteryDetail?project_id=".concat(a.link.data_uri)
                            });
                            break;

                          case "5":
                            a.link.data_uri && t.navigateTo({
                                url: "/subPackages/pageLayout/pages/uiLayout?id=".concat(a.link.data_uri)
                            });
                            break;

                          case "6":
                            if (a.link.data_roomid) {
                                var e = encodeURIComponent(JSON.stringify({
                                    path: "uiLayout",
                                    pid: 1
                                }));
                                t.navigateTo({
                                    url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(a.link.data_roomid, "&custom_params=").concat(e)
                                });
                            }
                        }
                    }
                }
            };
            a.default = n;
        }).call(this, e("543d").default);
    },
    "27e6": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("1135"), o = e.n(n);
        for (var u in n) "default" !== u && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(u);
        a.default = o.a;
    },
    "3c0b": function(t, a, e) {},
    "6f86": function(t, a, e) {
        "use strict";
        var n = e("3c0b");
        e.n(n).a;
    },
    e8f0: function(t, a, e) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(a, "b", function() {
            return n;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {});
    },
    ff6d: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("e8f0"), o = e("27e6");
        for (var u in o) "default" !== u && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(u);
        e("6f86");
        var i = e("f0c5"), c = Object(i.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiMotionButtonDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiMotionButtonDefault-create-component": function(t, a, e) {
        e("543d").createComponent(e("ff6d"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiMotionButtonDefault-create-component" ] ] ]);