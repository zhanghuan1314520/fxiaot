(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ImageLoader" ], {
    "0394": function(e, t, n) {},
    "12a9": function(e, t, n) {
        "use strict";
        var o = n("0394");
        n.n(o).a;
    },
    "23bc": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            props: {
                source: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                mode: {
                    type: String,
                    default: function() {
                        return "aspectFill";
                    }
                },
                defaultImage: {
                    type: String,
                    default: function() {
                        return "https://imgcdn.huanjutang.com/assets/img/20212231125168081.jpeg";
                    }
                },
                distance: {
                    type: Number,
                    default: function() {
                        return 60;
                    }
                }
            },
            data: function() {
                return this.observer = null, {
                    loaded: !1,
                    ratio: 0
                };
            },
            computed: {
                baseStyle: function() {
                    var e = this, t = "";
                    return Object.keys(this.styles || {}).forEach(function(n) {
                        t += "".concat(n, ": ").concat(e.styles[n], ";");
                    }), t;
                }
            },
            mounted: function() {
                var e = this;
                this.reset(), this.$nextTick(function() {
                    e.setObserver();
                });
            },
            destroyed: function() {
                this.reset();
            },
            methods: {
                reset: function() {
                    this.disconnectObserver();
                },
                callback: function() {
                    this.loaded = !0;
                },
                handleImageLoadError: function() {
                    this.callback();
                },
                handleImageLoaded: function() {
                    this.callback();
                },
                setObserver: function() {
                    var e = this;
                    this.observer = this.createIntersectionObserver(), this.observer.relativeToViewport({
                        bottom: this.distance
                    }).observe(".loader", function(t) {
                        t.intersectionRatio > 0 && (e.ratio = 1, e.disconnectObserver());
                    });
                },
                disconnectObserver: function() {
                    this.observer && (this.observer.disconnect(), this.observer = null);
                }
            }
        };
        t.default = o;
    },
    "24e0": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("4e15"), r = n("3274");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("12a9");
        var s = n("f0c5"), a = Object(s.a)(r.default, o.b, o.c, !1, null, "e9ff34d6", null, !1, o.a, void 0);
        t.default = a.exports;
    },
    3274: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("23bc"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "4e15": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ImageLoader-create-component", {
    "components/ImageLoader-create-component": function(e, t, n) {
        n("543d").createComponent(n("24e0"));
    }
}, [ [ "components/ImageLoader-create-component" ] ] ]);