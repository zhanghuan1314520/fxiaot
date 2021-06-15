require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/wepy-com-cropper" ], {
    "0330": function(t, e, n) {},
    "31bb": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a059")), r = {
                props: {
                    options: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        cropper__: null,
                        id: "cropper",
                        targetId: "targetCropper"
                    };
                },
                computed: {
                    width: function() {
                        return this.options.width;
                    },
                    height: function() {
                        return this.options.height;
                    },
                    pixelRatio: function() {
                        return this.options.pixelRatio;
                    }
                },
                mounted: function() {},
                methods: {
                    stopHandle: function() {},
                    ts: function(t) {
                        this.cropper__.touchStart(t);
                    },
                    tm: function(t) {
                        this.cropper__.touchMove(t);
                    },
                    te: function(t) {
                        this.cropper__.touchEnd(t);
                    },
                    canvasError: function(t) {
                        console.error(t.detail.errMsg);
                    },
                    uploadTap: function() {
                        this.$eventBus.$emit("uploadTap");
                    },
                    getCropperImage: function() {
                        var e = this;
                        this.$eventBus.$emit("getCropperImage", this.cropper__.getCropperImage({
                            outerCall: function(n) {
                                t.canvasToTempFilePath(n, e);
                            }
                        }));
                    },
                    pushOrigin: function(e) {
                        var n = this;
                        if (!this.cropper__) {
                            var r = this.options;
                            r.id = this.id, r.targetId = this.targetId, r.ctx = t.createCanvasContext(this.id, this), 
                            r.targetCtx = t.createCanvasContext(this.targetId, this), this.cropper__ = new o.default(r).on("ready", function() {
                                for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                                (t = n.$eventBus).$emit.apply(t, [ "ready" ].concat(o));
                            }).on("beforeImageLoad", function() {
                                for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                                (t = n.$eventBus).$emit.apply(t, [ "beforeImageLoad" ].concat(o));
                            }).on("imageLoad", function() {
                                for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                                (t = n.$eventBus).$emit.apply(t, [ "imageLoad" ].concat(o));
                            }).on("beforeDraw", function() {
                                for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                                (t = n.$eventBus).$emit.apply(t, [ "beforeDraw" ].concat(o));
                            });
                        }
                        this.cropper__.pushOrign(e);
                    },
                    updateCanvas: function() {
                        this.cropper__.updateCanvas();
                    },
                    getCropperBase64: function(t) {
                        this.cropper__.getCropperImage(t);
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d").default);
    },
    "67f8": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("31bb"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    a635: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("fb5b"), r = n("67f8");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("a920");
        var c = n("f0c5"), i = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    a920: function(t, e, n) {
        "use strict";
        var o = n("0330");
        n.n(o).a;
    },
    fb5b: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/wepy-com-cropper-create-component", {
    "subPackages/me/pages/components/wepy-com-cropper-create-component": function(t, e, n) {
        n("543d").createComponent(n("a635"));
    }
}, [ [ "subPackages/me/pages/components/wepy-com-cropper-create-component" ] ] ]);