require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiVideoDefault" ], {
    "2cc8": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("724ac"), a = n("a02b");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("71e8");
        var i = n("f0c5"), u = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    6377: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("2f62");
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var u = {
                components: {
                    BaseLayout: function() {
                        n.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                            return resolve(n("d956"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }(n("88f3")).default ],
                props: {
                    settings: {
                        type: Object,
                        default: function() {
                            return {
                                magic_square: []
                            };
                        }
                    },
                    dataIndex: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        hasPlaying: !1,
                        videoCtx: null,
                        videoId: "video_".concat(this.index)
                    };
                },
                computed: {
                    videoCover: function() {
                        return "".concat(this.settings.video[0].video_url, "?vframe/jpg/offset/0");
                    }
                },
                watch: {
                    "$store.state.uiLayout.playVideoIndex": function(e) {
                        this.hasPlaying && e !== this.dataIndex && (this.hasPlaying = !1);
                    },
                    hasPlaying: function(t) {
                        var n = this;
                        this.$nextTick(function() {
                            t ? n.videoCtx ? n.videoCtx.play() : (n.videoCtx = e.createVideoContext(n.videoId), 
                            n.videoCtx.play(), n.$once("hook:beforeDestroy", function() {
                                n.videoCtx = null;
                            })) : n.videoCtx && n.videoCtx.pause();
                        });
                    }
                },
                methods: c(c({}, (0, o.mapMutations)({
                    setPlayIndex: "SET_PLAY_VIDEO"
                })), {}, {
                    playHandle: function() {
                        this.hasPlaying = !0, this.setPlayIndex(this.dataIndex);
                    }
                })
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    "71e8": function(e, t, n) {
        "use strict";
        var o = n("85ec");
        n.n(o).a;
    },
    "724ac": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    "85ec": function(e, t, n) {},
    a02b: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("6377"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiVideoDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiVideoDefault-create-component": function(e, t, n) {
        n("543d").createComponent(n("2cc8"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiVideoDefault-create-component" ] ] ]);