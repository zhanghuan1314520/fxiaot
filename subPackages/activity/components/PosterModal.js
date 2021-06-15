require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/PosterModal" ], {
    "44f6": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("a493"), a = n("ece3");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("7ab2");
        var i = n("f0c5"), c = Object(i.a)(a.default, r.b, r.c, !1, null, "6c829194", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    "7ab2": function(t, e, n) {
        "use strict";
        var r = n("e7f8");
        n.n(r).a;
    },
    a493: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    b686: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(n("a34a")), a = i(n("ff28")), o = n("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, a = !1, o = void 0;
                        try {
                            for (var i, c = t[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            a = !0, o = t;
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function s(t, e, n, r, a, o, i) {
                try {
                    var c = t[o](i), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function i(t) {
                            s(o, r, a, i, c, "next", t);
                        }
                        function c(t) {
                            s(o, r, a, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var l = {
                components: {
                    CreatePoster: function() {
                        n.e("subPackages/activity/components/CreatePoster").then(function() {
                            return resolve(n("411f"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ a.default ],
                props: {
                    image: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    titleImage: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    fontImage: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                data: function() {
                    return {
                        closeImage: "https://imgcdn.huanjutang.com/file/2020/10/11/502fdf90dda06b9b8cd416b88bda73fe.png",
                        saveImage: "https://imgcdn.huanjutang.com/file/2020/10/12/7346c352d5a4b4898b165ee4bcb91cf0.png",
                        shareImage: "https://imgcdn.huanjutang.com/file/2020/10/14/fff0af8ae2afc93766021db5c7a8bdc5.png",
                        titleImageTemp: "",
                        qrcodeTemp: ""
                    };
                },
                methods: {
                    emptyFunction: function() {},
                    handleMaskClick: function() {
                        this.close();
                    },
                    save: function() {
                        this.$refs.canvasPoster.saveImage();
                    },
                    createPoster: function() {
                        var e = f(r.default.mark(function e() {
                            var n = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.showLoading({
                                        title: "生成中...",
                                        mask: !0
                                    }), this.createPost().then(function(e) {
                                        n.$refs.canvasPoster.$emit("renderQueue", [ e.bind(n) ]), t.hideLoading();
                                    }).catch(function() {
                                        t.hideLoading(), o.tip.toast("海报渲染失败");
                                    });

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    createPost: function() {
                        var t = f(r.default.mark(function t() {
                            var e, n, a, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!this.qrcodeTemp || !this.titleImageTemp) {
                                        t.next = 5;
                                        break;
                                    }
                                    e = this.titleImageTemp, n = this.qrcodeTemp, t.next = 13;
                                    break;

                                  case 5:
                                    return t.next = 7, Promise.all([ o.canvasUtil.loadImage(this.titleImage), o.canvasUtil.loadImage(this.image) ]);

                                  case 7:
                                    a = t.sent, i = c(a, 2), e = i[0], n = i[1], this.qrcodeTemp = n, this.titleImageTemp = e;

                                  case 13:
                                    return t.abrupt("return", function() {
                                        var t = f(r.default.mark(function t(a) {
                                            return r.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return a.drawImage(e, 0, 0, 1080, 1920), o.canvasUtil.createCircleImg(a, {
                                                        image: n,
                                                        size: 238,
                                                        x: 419,
                                                        y: 1511
                                                    }), t.abrupt("return", a);

                                                  case 3:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }());

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    e7f8: function(t, e, n) {},
    ece3: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("b686"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/PosterModal-create-component", {
    "subPackages/activity/components/PosterModal-create-component": function(t, e, n) {
        n("543d").createComponent(n("44f6"));
    }
}, [ [ "subPackages/activity/components/PosterModal-create-component" ] ] ]);