require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/components/AudioPlayer" ], {
    "0c58": function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i("2f62");
            function o(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, n);
                }
                return i;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(i), !0).forEach(function(e) {
                        u(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            function u(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            var r = {
                props: {
                    uniqueId: {
                        type: String,
                        default: ""
                    },
                    src: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    current: {
                        type: Number,
                        default: 0
                    },
                    paused: {
                        type: Boolean,
                        default: !1
                    },
                    autoplay: {
                        type: Boolean,
                        default: !0
                    },
                    show: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        duration: 0,
                        audio: null,
                        seek: !1,
                        durationTime: "",
                        currentTime: "",
                        audioPaused: !1,
                        audioShow: !1
                    };
                },
                watch: {
                    duration: function(t) {
                        this.durationTime = this.format(t);
                    },
                    current: function(t) {
                        this.currentTime = this.format(t);
                    },
                    paused: {
                        handler: function() {
                            this.audioPaused = this.paused;
                        },
                        immediate: !0
                    },
                    audioPaused: function() {
                        this.$emit("update:paused", this.audioPaused);
                    },
                    show: {
                        handler: function() {
                            this.audioShow = this.show;
                        },
                        immediate: !0
                    },
                    audioShow: function() {
                        this.audioShow && this.play(), this.$emit("update:show", this.audioShow);
                    },
                    "$store.state.system.playAudioIndex": {
                        handler: function(t) {
                            0 === Number(t) && (this.audioShow = !1, this.end()), this.audioPaused = Number(t) !== Number(this.uniqueId), 
                            this.audioPaused && (this.audioShow = !1);
                        }
                    }
                },
                created: function() {
                    this.currentTime = this.format(this.current), this.durationTime = this.format(this.duration), 
                    this.audio = t.getBackgroundAudioManager();
                },
                methods: a(a({}, (0, n.mapMutations)({
                    setPlayAudio: "system/SET_PLAY_AUDIO"
                })), {}, {
                    hidePlayerHandle: function() {
                        this.audioShow = !1, this.end();
                    },
                    initState: function() {
                        var t = this;
                        this.audio.startTime = this.current, this.audio.seek(this.current), this.currentTime = this.format(this.current), 
                        this.audio.src = this.src, this.audio.title = this.title, this.audio.onPlay(function() {
                            setTimeout(function() {
                                t.audio.onTimeUpdate(function() {
                                    t.duration = t.audio.duration, t.seek || t.$emit("update:current", t.audio.currentTime);
                                });
                            });
                        }), this.audio.onStop(function() {
                            t.pause();
                        }), this.audio.onEnded(function() {
                            t.end();
                        }), this.audio.onSeeked(function() {
                            t.seek = !1;
                        });
                    },
                    format: function(t) {
                        return "".concat("0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60), ":").concat("0".repeat(2 - String(Math.floor(t % 60)).length)).concat(Math.floor(t % 60));
                    },
                    operationHandle: function() {
                        this.audioPaused ? this.play() : this.pause();
                    },
                    play: function() {
                        this.initState(), this.audioPaused = !1;
                    },
                    pause: function() {
                        this.audio && this.audio.pause(), this.audioPaused = !0, this.$emit("update:current", this.currentTime);
                    },
                    end: function() {
                        this.audio.stop(), this.audioPaused = !0, this.$emit("update:current", 0), this.setPlayAudio(0);
                    },
                    changeHandle: function(t) {
                        this.seek = !1, this.audio.src === this.src && (this.audio.startTime = t.detail.value), 
                        this.audio.src === this.src && this.audio.seek(t.detail.value), this.$emit("update:current", t.detail.value);
                    },
                    changingHandle: function(t) {
                        this.seek = !0, this.$emit("update:current", t.detail.value);
                    }
                })
            };
            e.default = r;
        }).call(this, i("543d").default);
    },
    "85b1": function(t, e, i) {
        "use strict";
        var n = i("ddb060");
        i.n(n).a;
    },
    a146: function(t, e, i) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {});
    },
    bd7a: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("0c58"), o = i.n(n);
        for (var a in n) "default" !== a && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = o.a;
    },
    ddb060: function(t, e, i) {},
    e103: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("a146"), o = i("bd7a");
        for (var a in o) "default" !== a && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(a);
        i("85b1");
        var u = i("f0c5"), r = Object(u.a)(o.default, n.b, n.c, !1, null, "854b7270", null, !1, n.a, void 0);
        e.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/components/AudioPlayer-create-component", {
    "subPackages/project/components/AudioPlayer-create-component": function(t, e, i) {
        i("543d").createComponent(i("e103"));
    }
}, [ [ "subPackages/project/components/AudioPlayer-create-component" ] ] ]);