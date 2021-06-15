(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/AudioPlayer" ], {
    "71cf": function(t, n, o) {},
    7693: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o("b136"), e = o.n(i);
        for (var a in i) "default" !== a && function(t) {
            o.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = e.a;
    },
    7901: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o("aa572"), e = o("7693");
        for (var a in e) "default" !== a && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(a);
        o("8186");
        var u = o("f0c5"), r = Object(u.a)(e.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = r.exports;
    },
    8186: function(t, n, o) {
        "use strict";
        var i = o("71cf");
        o.n(i).a;
    },
    aa572: function(t, n, o) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, e = [];
        o.d(n, "b", function() {
            return i;
        }), o.d(n, "c", function() {
            return e;
        }), o.d(n, "a", function() {});
    },
    b136: function(t, n, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = {
                props: {
                    src: {
                        type: String,
                        default: ""
                    },
                    autoplay: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        audio: t.createInnerAudioContext(),
                        currentTime: "",
                        durationTime: "",
                        current: "",
                        loading: !1,
                        paused: !0,
                        seek: !1,
                        duration: 0
                    };
                },
                watch: {
                    src: function(t) {
                        this.audio.src = t, this.current = 0, this.audio.play(), this.loading = !0;
                    },
                    duration: function(t) {
                        this.durationTime = this.format(t);
                    },
                    current: function(t) {
                        this.currentTime = this.format(t);
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$eventBus.$on("destroyVoice", function() {
                        t.audio && (t.audio.stop(), t.audio.destroy()), t.audio = null;
                    }), this.$once("hook:beforeDestory", function() {
                        t.$eventBus.$off("destroyVoice");
                    });
                },
                detached: function() {
                    this.audio && this.audio.destroy();
                },
                created: function() {
                    var n = this;
                    this.audio.src = this.src, this.current = 0, this.durationTime = this.format(this.duration), 
                    t.setInnerAudioOption({
                        obeyMuteSwitch: !1
                    }), this.audio.autoplay = this.autoplay, this.audio.onPlay(function() {
                        n.paused = !1, n.loading = !1, n.$nextTick(function() {
                            n.audio.onTimeUpdate(function() {
                                n.duration = n.audio.duration, n.seek || (n.current = n.audio.currentTime);
                            });
                        });
                    }), this.audio.onPause(function() {
                        n.paused = !0;
                    }), this.audio.onEnded(function() {
                        n.paused = !0, n.current = 0;
                    }), this.audio.onSeeked(function() {
                        n.seek = !1;
                    });
                },
                methods: {
                    format: function(t) {
                        return "".concat("0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60), ":").concat("0".repeat(2 - String(Math.floor(t % 60)).length)).concat(Math.floor(t % 60));
                    },
                    operation: function() {
                        this.audio && (this.audio.paused ? (this.audio.play(), this.loading = !0) : this.audio.pause());
                    },
                    change: function(t) {
                        this.audio && this.audio.seek(t.detail.value), this.current = t.detail.value;
                    },
                    changing: function(t) {
                        this.seek = !0, this.current = t.detail.value;
                    }
                }
            };
            n.default = o;
        }).call(this, o("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/AudioPlayer-create-component", {
    "components/AudioPlayer-create-component": function(t, n, o) {
        o("543d").createComponent(o("7901"));
    }
}, [ [ "components/AudioPlayer-create-component" ] ] ]);