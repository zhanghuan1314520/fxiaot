require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/component/AudioPlayer" ], {
    6567: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                props: {
                    uniqueId: {
                        type: String,
                        default: null
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
                        default: !1
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
                        currentTime: "",
                        durationTime: "",
                        seek: !1
                    };
                },
                watch: {
                    duration: function(t) {
                        this.durationTime = this.format(t);
                    },
                    current: function(t) {
                        this.currentTime = this.format(t);
                    },
                    show: function() {
                        this.show && this.playEvent();
                    },
                    paused: function() {}
                },
                mounted: function() {
                    this.currentTime = this.format(this.current), this.durationTime = this.format(this.duration), 
                    this.audio = t.getBackgroundAudioManager();
                },
                beforeDestroy: function() {},
                methods: {
                    hidePlayer: function() {
                        this.pauseEvent(), this.$emit("update:show", !1);
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
                            t.pauseEvent();
                        }), this.audio.onEnded(function() {
                            t.endEvent();
                        }), this.audio.onSeeked(function() {
                            t.seek = !1;
                        });
                    },
                    format: function(t) {
                        return "".concat("0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60), ":").concat("0".repeat(2 - String(Math.floor(t % 60)).length)).concat(Math.floor(t % 60));
                    },
                    operation: function() {
                        this.paused ? this.playEvent() : this.pauseEvent();
                    },
                    playEvent: function() {
                        this.initState(), this.$emit("update:paused", !1), this.$emit("audioPlayHandler", this.uniqueId);
                    },
                    pauseEvent: function() {
                        this.audio && this.audio.pause(), this.$emit("update:current", this.currentTime), 
                        this.$emit("update:paused", !0);
                    },
                    endEvent: function() {
                        this.$emit("update:paused", !0), this.$emit("update:current", 0);
                    },
                    change: function(t) {
                        this.seek = !1, this.audio.src === this.src && (this.audio.startTime = t.detail.value, 
                        this.audio.seek(t.detail.value)), this.$emit("update:current", t.detail.value);
                    },
                    changing: function(t) {
                        this.seek = !0, this.$emit("update:current", t.detail.value);
                    },
                    destroyAudio: function() {
                        this.audio.stop(), this.audio.onTimeUpdate(function() {}), this.audio.onPlay(function() {}), 
                        this.audio.onEnded(function() {}), this.audio.onSeeked(function() {}), this.audio = null, 
                        this.$emit("close", this.uniqueId), this.$emit("update:paused", !0), this.$emit("update:show", !1);
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d").default);
    },
    b039: function(t, e, i) {},
    dc6a4: function(t, e, i) {
        "use strict";
        var n = i("b039");
        i.n(n).a;
    },
    df8d: function(t, e, i) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, u = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return u;
        }), i.d(e, "a", function() {});
    },
    f54e: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("6567"), u = i.n(n);
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = u.a;
    },
    fcfe: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("df8d"), u = i("f54e");
        for (var o in u) "default" !== o && function(t) {
            i.d(e, t, function() {
                return u[t];
            });
        }(o);
        i("dc6a4");
        var a = i("f0c5"), s = Object(a.a)(u.default, n.b, n.c, !1, null, "ed009f9a", null, !1, n.a, void 0);
        e.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/pages/component/AudioPlayer-create-component", {
    "subPackages/project/pages/component/AudioPlayer-create-component": function(t, e, i) {
        i("543d").createComponent(i("fcfe"));
    }
}, [ [ "subPackages/project/pages/component/AudioPlayer-create-component" ] ] ]);