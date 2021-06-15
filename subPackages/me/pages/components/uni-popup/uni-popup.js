require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/uni-popup/uni-popup" ], {
    "02ed7": function(t, n, e) {},
    "3b8e": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "UniPopup",
            components: {
                uniTransition: function() {
                    e.e("subPackages/me/pages/components/uni-popup/uni-transition").then(function() {
                        return resolve(e("8ce4"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            mixins: [ function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("5abe")).default ],
            props: {
                animation: {
                    type: Boolean,
                    default: !0
                },
                type: {
                    type: String,
                    default: "center"
                },
                maskClick: {
                    type: Boolean,
                    default: !0
                }
            },
            provide: function() {
                return {
                    popup: this
                };
            },
            data: function() {
                return {
                    duration: 300,
                    ani: [],
                    showPopup: !1,
                    showTrans: !1,
                    maskClass: {
                        position: "fixed",
                        bottom: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    },
                    transClass: {
                        position: "fixed",
                        left: 0,
                        right: 0
                    },
                    maskShow: !0,
                    mkclick: !0,
                    popupstyle: "top"
                };
            },
            watch: {
                type: {
                    handler: function(t) {
                        this[this.config[t]]();
                    },
                    immediate: !0
                },
                maskClick: function(t) {
                    this.mkclick = t;
                }
            },
            created: function() {
                this.mkclick = this.maskClick, this.animation ? this.duration = 300 : this.duration = 0;
            },
            methods: {
                clear: function(t) {
                    t.stopPropagation();
                },
                open: function() {
                    var t = this;
                    this.showPopup = !0, this.$nextTick(function() {
                        new Promise(function(n) {
                            clearTimeout(t.timer), t.timer = setTimeout(function() {
                                t.showTrans = !0, t.$nextTick(function() {
                                    n();
                                });
                            }, 50);
                        }).then(function() {
                            clearTimeout(t.msgtimer), t.msgtimer = setTimeout(function() {
                                t.customOpen && t.customOpen();
                            }, 100), t.$emit("change", {
                                show: !0,
                                type: t.type
                            });
                        });
                    });
                },
                close: function() {
                    var t = this;
                    this.showTrans = !1, this.$nextTick(function() {
                        t.$emit("change", {
                            show: !1,
                            type: t.type
                        }), clearTimeout(t.timer), t.customOpen && t.customClose(), t.timer = setTimeout(function() {
                            t.showPopup = !1;
                        }, 300);
                    });
                },
                onTap: function() {
                    this.mkclick && this.close();
                },
                top: function() {
                    this.popupstyle = "top", this.ani = [ "slide-top" ], this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0
                    };
                },
                bottom: function() {
                    this.popupstyle = "bottom", this.ani = [ "slide-bottom" ], this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0
                    };
                },
                center: function() {
                    this.popupstyle = "center", this.ani = [ "zoom-out", "fade" ], this.transClass = {
                        position: "fixed",
                        display: "flex",
                        flexDirection: "column",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        justifyContent: "center",
                        alignItems: "center"
                    };
                }
            }
        };
        n.default = o;
    },
    8477: function(t, n, e) {
        "use strict";
        var o = e("02ed7");
        e.n(o).a;
    },
    "8f16": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3b8e"), i = e.n(o);
        for (var s in o) "default" !== s && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(s);
        n.default = i.a;
    },
    d32a: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("e3a3"), i = e("8f16");
        for (var s in i) "default" !== s && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(s);
        e("8477");
        var u = e("f0c5"), a = Object(u.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = a.exports;
    },
    e3a3: function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/uni-popup/uni-popup-create-component", {
    "subPackages/me/pages/components/uni-popup/uni-popup-create-component": function(t, n, e) {
        e("543d").createComponent(e("d32a"));
    }
}, [ [ "subPackages/me/pages/components/uni-popup/uni-popup-create-component" ] ] ]);