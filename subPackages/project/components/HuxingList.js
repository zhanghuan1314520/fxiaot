require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/components/HuxingList" ], {
    "44ce": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "54eb": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("81fd"), r = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = r.a;
    },
    "5e1f": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("44ce"), r = n("54eb");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("b2c3");
        var c = n("f0c5"), a = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = a.exports;
    },
    "81fd": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("2f62");
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var a = {
                components: {
                    AudioPlayer: function() {
                        n.e("subPackages/project/components/AudioPlayer").then(function() {
                            return resolve(n("e103"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    listData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        huxingList: []
                    };
                },
                watch: {
                    listData: {
                        handler: function() {
                            this.huxingList = this.listData;
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                methods: i(i(i({}, (0, o.mapMutations)({
                    audioPlayer: "system/SET_PLAY_AUDIO"
                })), (0, o.mapActions)({
                    stopAllAudio: "system/stopAllAudio"
                })), {}, {
                    previewHandle: function(t) {
                        this.$emit("previewImage"), e.previewImage({
                            current: this.huxingList[t].image,
                            urls: this.huxingList.map(function(e) {
                                return e.image;
                            })
                        });
                    },
                    audioPlayerHandle: function(e) {
                        var t = this.huxingList[e];
                        t && (t.paused ? (t.paused = !1, t.showPlayer = !0, this.audioPlayer(t.id)) : (t.paused = !0, 
                        t.showPlayer = !1, this.stopAllAudio()));
                    },
                    gotoVrPage: function(t) {
                        e.navigateTo({
                            url: "/pages/webview2?redirect=".concat(encodeURIComponent(t))
                        });
                    }
                })
            };
            t.default = a;
        }).call(this, n("543d").default);
    },
    b2c3: function(e, t, n) {
        "use strict";
        var o = n("f41f");
        n.n(o).a;
    },
    f41f: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/components/HuxingList-create-component", {
    "subPackages/project/components/HuxingList-create-component": function(e, t, n) {
        n("543d").createComponent(n("5e1f"));
    }
}, [ [ "subPackages/project/components/HuxingList-create-component" ] ] ]);