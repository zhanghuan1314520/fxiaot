(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/common/vendor" ], {
    "0c04": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("2f62");
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach(function(e) {
                        i(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var c = {
                data: function() {
                    return {
                        phone: "",
                        dialogFlag: "callPhoneMixin".concat(Math.floor(1e4 * Math.random()))
                    };
                },
                computed: a(a({}, (0, o.mapState)({
                    callPhoneDialog: function(t) {
                        return t.chat.callPhoneDialog;
                    }
                })), {}, {
                    dialogSubmit: function() {
                        var t = this.callPhoneDialog, e = t.status, n = t.flag, o = t.allow;
                        return "hide" === e && n === this.dialogFlag && o;
                    }
                }),
                watch: {
                    dialogSubmit: function(e) {
                        e && this.phone && t.makePhoneCall({
                            phoneNumber: this.phone
                        });
                    }
                },
                methods: a(a({}, (0, o.mapActions)({
                    showCallPhoneDialog: "chat/showCallPhoneDialog"
                })), {}, {
                    callPhone: function(t) {
                        this.phone = t, this.showCallPhoneDialog(this.dialogFlag);
                    }
                })
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "11c0": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, e.default = {
            data: function() {
                return {
                    backBg: "https://imgcdn.huanjutang.com/assets/img/20190731/5d410b29cbc56.png",
                    groupInfo: {
                        wechat_code: "https://imgcdn.huanjutang.com/assert/img/15547803194916504.jpg"
                    }
                };
            }
        };
    },
    "1d68": function(t, e, n) {
        "use strict";
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            methods: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        r(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }({}, (0, n("2f62").mapActions)({
                showTipsDialog: "chat/showTipsDialog"
            }))
        };
        e.default = a;
    },
    "3d29": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.a = e.Chat = void 0, e.Chat = function t(e, n, o, r, a, i) {
            (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, t), this.askTime = e, this.askContnent = n, this.rspTime = o, this.rspContent = r, 
            this.type = a, this.id = "chat_".concat(i);
        }, e.a = 33;
    },
    "408f": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, e.default = {
            created: function() {
                "message" === this.type && (this.maskShow = !1, this.childrenMsg = null);
            },
            methods: {
                customOpen: function() {
                    this.childrenMsg && this.childrenMsg.open();
                },
                customClose: function() {
                    this.childrenMsg && this.childrenMsg.close();
                }
            }
        };
    },
    "5abe": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("408f")), r = {
            top: "top",
            bottom: "bottom",
            center: "center",
            message: "top",
            dialog: "center",
            share: "bottom"
        }, a = {
            data: function() {
                return {
                    config: r
                };
            },
            mixins: [ o.default ]
        };
        e.default = a;
    },
    a059: function(t, e, n) {
        "use strict";
        (function(o) {
            var r, a;
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        u(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            /**
 * we-cropper v1.3.8
 * (c) 2019 dlhandsome
 * @license MIT
 */            !function(o, i) {
                "object" === s(e) && void 0 !== t ? t.exports = i() : void 0 === (a = "function" == typeof (r = i) ? r.call(e, n, e, t) : r) || (t.exports = a);
            }(0, function() {
                var t = void 0, e = [ "touchstarted", "touchmoved", "touchended" ];
                function n(t) {
                    for (var n = [], o = arguments.length - 1; o-- > 0; ) n[o] = arguments[o + 1];
                    e.forEach(function(e, o) {
                        void 0 !== n[o] && (t[e] = n[o]);
                    });
                }
                function r() {
                    return t || (t = wx.getSystemInfoSync()), t;
                }
                var a = {}, i = {
                    id: {
                        default: "cropper",
                        get: function() {
                            return a.id;
                        },
                        set: function(t) {
                            "string" != typeof t && console.error("id：".concat(t, " is invalid")), a.id = t;
                        }
                    },
                    width: {
                        default: 750,
                        get: function() {
                            return a.width;
                        },
                        set: function(t) {
                            "number" != typeof t && console.error("width：".concat(t, " is invalid")), a.width = t;
                        }
                    },
                    height: {
                        default: 750,
                        get: function() {
                            return a.height;
                        },
                        set: function(t) {
                            "number" != typeof t && console.error("height：".concat(t, " is invalid")), a.height = t;
                        }
                    },
                    pixelRatio: {
                        default: r().pixelRatio,
                        get: function() {
                            return a.pixelRatio;
                        },
                        set: function(t) {
                            "number" != typeof t && console.error("pixelRatio：".concat(t, " is invalid")), a.pixelRatio = t;
                        }
                    },
                    scale: {
                        default: 2.5,
                        get: function() {
                            return a.scale;
                        },
                        set: function(t) {
                            "number" != typeof t && console.error("scale：".concat(t, " is invalid")), a.scale = t;
                        }
                    },
                    zoom: {
                        default: 5,
                        get: function() {
                            return a.zoom;
                        },
                        set: function(t) {
                            "number" != typeof t ? console.error("zoom：".concat(t, " is invalid")) : (t < 0 || t > 10) && console.error("zoom should be ranged in 0 ~ 10"), 
                            a.zoom = t;
                        }
                    },
                    src: {
                        default: "",
                        get: function() {
                            return a.src;
                        },
                        set: function(t) {
                            "string" != typeof t && console.error("src：".concat(t, " is invalid")), a.src = t;
                        }
                    },
                    cut: {
                        default: {},
                        get: function() {
                            return a.cut;
                        },
                        set: function(t) {
                            "object" !== s(t) && console.error("cut：".concat(t, " is invalid")), a.cut = t;
                        }
                    },
                    boundStyle: {
                        default: {},
                        get: function() {
                            return a.boundStyle;
                        },
                        set: function(t) {
                            "object" !== s(t) && console.error("boundStyle：".concat(t, " is invalid")), a.boundStyle = t;
                        }
                    },
                    onReady: {
                        default: null,
                        get: function() {
                            return a.ready;
                        },
                        set: function(t) {
                            a.ready = t;
                        }
                    },
                    onBeforeImageLoad: {
                        default: null,
                        get: function() {
                            return a.beforeImageLoad;
                        },
                        set: function(t) {
                            a.beforeImageLoad = t;
                        }
                    },
                    onImageLoad: {
                        default: null,
                        get: function() {
                            return a.imageLoad;
                        },
                        set: function(t) {
                            a.imageLoad = t;
                        }
                    },
                    onBeforeDraw: {
                        default: null,
                        get: function() {
                            return a.beforeDraw;
                        },
                        set: function(t) {
                            a.beforeDraw = t;
                        }
                    }
                }, u = r().windowWidth, l = "undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : {};
                function f(t, e) {
                    return t(e = {
                        exports: {}
                    }, e.exports), e.exports;
                }
                var d = f(function(t, e) {
                    e.isStr = function(t) {
                        return "string" == typeof t;
                    }, e.isNum = function(t) {
                        return "number" == typeof t;
                    }, e.isArr = Array.isArray, e.isUndef = function(t) {
                        return void 0 === t;
                    }, e.isTrue = function(t) {
                        return !0 === t;
                    }, e.isFalse = function(t) {
                        return !1 === t;
                    }, e.isFunc = function(t) {
                        return "function" == typeof t;
                    }, e.isObj = e.isObject = function(t) {
                        return null !== t && "object" === s(t);
                    };
                    var n = Object.prototype.toString;
                    e.isPlainObject = function(t) {
                        return "[object Object]" === n.call(t);
                    };
                    var o = Object.prototype.hasOwnProperty;
                    e.hasOwn = function(t, e) {
                        return o.call(t, e);
                    }, e.noop = function(t, e, n) {}, e.isValidArrayIndex = function(t) {
                        var e = parseFloat(String(t));
                        return e >= 0 && Math.floor(e) === e && isFinite(t);
                    };
                }), h = d.isFunc, p = d.isPlainObject, g = [ "ready", "beforeImageLoad", "beforeDraw", "imageLoad" ];
                function v(t) {
                    return function(e) {
                        for (var n = [], o = arguments.length - 1; o-- > 0; ) n[o] = arguments[o + 1];
                        return void 0 === e && (e = {}), new Promise(function(o, r) {
                            e.success = function(t) {
                                o(t);
                            }, e.fail = function(t) {
                                r(t);
                            }, e.outerCall ? e.outerCall(e) : t.apply(void 0, [ e ].concat(n));
                        });
                    };
                }
                var b = v(wx.getImageInfo), y = v(wx.canvasToTempFilePath), m = f(function(t, e) {
                    /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
                    !function(n) {
                        var o = e, r = t && t.exports == o && t, a = "object" === s(l) && l;
                        a.global !== a && a.window !== a || (n = a);
                        var i = function(t) {
                            this.message = t;
                        };
                        (i.prototype = new Error()).name = "InvalidCharacterError";
                        var c = function(t) {
                            throw new i(t);
                        }, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = /[\t\n\f\r ]/g, d = {
                            encode: function(t) {
                                t = String(t), /[^\0-\xFF]/.test(t) && c("The string to be encoded contains characters outside of the Latin1 range.");
                                for (var e, n, o, r, a = t.length % 3, i = "", s = -1, l = t.length - a; ++s < l; ) e = t.charCodeAt(s) << 16, 
                                n = t.charCodeAt(++s) << 8, o = t.charCodeAt(++s), i += u.charAt((r = e + n + o) >> 18 & 63) + u.charAt(r >> 12 & 63) + u.charAt(r >> 6 & 63) + u.charAt(63 & r);
                                return 2 == a ? (e = t.charCodeAt(s) << 8, n = t.charCodeAt(++s), i += "".concat(u.charAt((r = e + n) >> 10) + u.charAt(r >> 4 & 63) + u.charAt(r << 2 & 63), "=")) : 1 == a && (r = t.charCodeAt(s), 
                                i += "".concat(u.charAt(r >> 2) + u.charAt(r << 4 & 63), "==")), i;
                            },
                            decode: function(t) {
                                var e = (t = String(t).replace(f, "")).length;
                                e % 4 == 0 && (e = (t = t.replace(/==?$/, "")).length), (e % 4 == 1 || /[^+a-zA-Z0-9/]/.test(t)) && c("Invalid character: the string to be decoded is not correctly encoded.");
                                for (var n, o, r = 0, a = "", i = -1; ++i < e; ) o = u.indexOf(t.charAt(i)), n = r % 4 ? 64 * n + o : o, 
                                r++ % 4 && (a += String.fromCharCode(255 & n >> (-2 * r & 6)));
                                return a;
                            },
                            version: "0.1.0"
                        };
                        if (o && !o.nodeType) if (r) r.exports = d; else for (var h in d) d.hasOwnProperty(h) && (o[h] = d[h]); else n.base64 = d;
                    }(l);
                });
                function w(t) {
                    var e = "";
                    if ("string" == typeof t) e = t; else for (var n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
                    return m.encode(e);
                }
                function O(t, e, n, o, r, a, i) {
                    void 0 === i && (i = function() {}), void 0 === a && (a = "png"), a = function(t) {
                        var e = (t = t.toLowerCase().replace(/jpg/i, "jpeg")).match(/png|jpeg|bmp|gif/)[0];
                        return "image/".concat(e);
                    }(a), /bmp/.test(a) ? function(t, e, n, o, r, a) {
                        wx.canvasGetImageData({
                            canvasId: t,
                            x: e,
                            y: n,
                            width: o,
                            height: r,
                            success: function(t) {
                                a(t, null);
                            },
                            fail: function(t) {
                                a(null, t);
                            }
                        });
                    }(t, e, n, o, r, function(t, e) {
                        var n = function(t) {
                            var e = t.width, n = t.height, o = e * n * 3, r = o + 54, a = [ 66, 77, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0 ], i = [ 40, 0, 0, 0, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], c = (4 - 3 * e % 4) % 4, u = t.data, s = "", l = e << 2, f = n, d = String.fromCharCode;
                            do {
                                for (var h = l * (f - 1), p = "", g = 0; g < e; g++) {
                                    var v = g << 2;
                                    p += d(u[h + v + 2]) + d(u[h + v + 1]) + d(u[h + v]);
                                }
                                for (var b = 0; b < c; b++) p += String.fromCharCode(0);
                                s += p;
                            } while (--f);
                            return w(a.concat(i)) + w(s);
                        }(t);
                        h(i) && i(function(t, e) {
                            return "data:".concat(e, ";base64,").concat(t);
                        }(n, "image/".concat(a)), e);
                    }) : console.error("暂不支持生成'".concat(a, "'类型的base64图片"));
                }
                var x = function(t, e) {
                    return void 0 === t && (t = {}), void 0 === e && (e = function() {}), O(t.canvasId, t.x, t.y, t.width, t.height, "bmp", e);
                }, j = {
                    touchStart: function(t) {
                        var e = this, o = t.touches, r = o[0], a = o[1];
                        e.src && (n(e, !0, null, null), e.__oneTouchStart(r), t.touches.length >= 2 && e.__twoTouchStart(r, a));
                    },
                    touchMove: function(t) {
                        var e = this, o = t.touches, r = o[0], a = o[1];
                        e.src && (n(e, null, !0), 1 === t.touches.length && e.__oneTouchMove(r), t.touches.length >= 2 && e.__twoTouchMove(r, a));
                    },
                    touchEnd: function(t) {
                        var e = this;
                        e.src && (n(e, !1, !1, !0), e.__xtouchEnd());
                    }
                }, P = function(t) {
                    var e = this, n = {};
                    return function(t, e) {
                        Object.defineProperties(t, e);
                    }(e, i), Object.keys(i).forEach(function(t) {
                        n[t] = i[t].default;
                    }), Object.assign(e, n, t), e.prepare(), e.attachPage(), e.createCtx(), e.observer(), 
                    e.cutt(), e.methods(), e.init(), e.update(), e;
                };
                return P.prototype.init = function() {
                    var t = this, e = t.src;
                    return t.version = "1.3.8", "function" == typeof t.onReady && t.onReady(t.ctx, t), 
                    e ? t.pushOrign(e) : t.updateCanvas(), n(t, !1, !1, !1), t.oldScale = 1, t.newScale = 1, 
                    t;
                }, Object.assign(P.prototype, j), P.prototype.prepare = function() {
                    var t = this;
                    t.attachPage = function() {
                        var e = getCurrentPages(), n = e[e.length - 1];
                        Object.defineProperty(n, "wecropper", {
                            get: function() {
                                return console.warn("Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"), 
                                t;
                            },
                            configurable: !0
                        });
                    }, t.createCtx = function() {
                        var e = t.id, n = t.targetId;
                        e ? (t.ctx = t.ctx || wx.createCanvasContext(e), t.targetCtx = t.targetCtx || wx.createCanvasContext(n)) : console.error("constructor: create canvas context failed, 'id' must be valuable");
                    }, t.deviceRadio = u / 750;
                }, P.prototype.observer = function() {
                    var t = this;
                    t.on = function(e, n) {
                        return g.indexOf(e) > -1 ? h(n) && ("ready" === e ? n(t) : t["on".concat(function(t) {
                            return t.charAt(0).toUpperCase() + t.slice(1);
                        }(e))] = n) : console.error("event: ".concat(e, " is invalid")), t;
                    };
                }, P.prototype.methods = function() {
                    var t = this, e = t.width, n = t.height, o = t.id, r = t.targetId, a = t.pixelRatio, i = t.cut, u = i.x;
                    void 0 === u && (u = 0);
                    var s = i.y;
                    void 0 === s && (s = 0);
                    var l = i.width;
                    void 0 === l && (l = e);
                    var f = i.height;
                    void 0 === f && (f = n), t.updateCanvas = function(e) {
                        return t.croperTarget && t.ctx.drawImage(t.croperTarget, t.imgLeft, t.imgTop, t.scaleWidth, t.scaleHeight), 
                        h(t.onBeforeDraw) && t.onBeforeDraw(t.ctx, t), t.setBoundStyle(t.boundStyle), t.ctx.draw(!1, e), 
                        t;
                    }, t.pushOrign = function(e) {
                        return t.src = e, h(t.onBeforeImageLoad) && t.onBeforeImageLoad(t.ctx, t), b({
                            src: e
                        }).then(function(e) {
                            var n = e.width / e.height, o = l / f;
                            return t.croperTarget = e.path, n < o ? (t.rectX = u, t.baseWidth = l, t.baseHeight = l / n, 
                            t.rectY = s - Math.abs((f - t.baseHeight) / 2)) : (t.rectY = s, t.baseWidth = f * n, 
                            t.baseHeight = f, t.rectX = u - Math.abs((l - t.baseWidth) / 2)), t.imgLeft = t.rectX, 
                            t.imgTop = t.rectY, t.scaleWidth = t.baseWidth, t.scaleHeight = t.baseHeight, t.update(), 
                            new Promise(function(e) {
                                t.updateCanvas(e);
                            });
                        }).then(function() {
                            h(t.onImageLoad) && t.onImageLoad(t.ctx, t);
                        });
                    }, t.getCropperBase64 = function(t) {
                        void 0 === t && (t = function() {}), x({
                            canvasId: o,
                            x: u,
                            y: s,
                            width: l,
                            height: f
                        }, t);
                    }, t.getCropperImage = function(e, n) {
                        var i = e, d = {
                            canvasId: o,
                            x: u,
                            y: s,
                            width: l,
                            height: f
                        }, g = function() {
                            return Promise.resolve();
                        };
                        return p(i) && i.original && (g = function() {
                            return t.targetCtx.drawImage(t.croperTarget, t.imgLeft * a, t.imgTop * a, t.scaleWidth * a, t.scaleHeight * a), 
                            d = {
                                canvasId: r,
                                x: u * a,
                                y: s * a,
                                width: l * a,
                                height: f * a
                            }, function(t, e) {
                                return void 0 === e && (e = !1), new Promise(function(n) {
                                    t.draw(e, n);
                                });
                            }(t.targetCtx);
                        }), g().then(function() {
                            p(i) && (d = c(c({}, d), i)), h(i) && (n = i);
                            var t = d.componentContext ? [ d, d.componentContext ] : [ d ];
                            return y.apply(null, t);
                        }).then(function(e) {
                            var o = e.tempFilePath;
                            return h(n) ? n.call(t, o, null) : o;
                        }).catch(function(e) {
                            if (!h(n)) throw e;
                            n.call(t, null, e);
                        });
                    };
                }, P.prototype.cutt = function() {
                    var t = this, e = t.width, n = t.height, o = t.cut, r = o.x;
                    void 0 === r && (r = 0);
                    var a = o.y;
                    void 0 === a && (a = 0);
                    var i = o.width;
                    void 0 === i && (i = e);
                    var c = o.height;
                    void 0 === c && (c = n), t.outsideBound = function(e, n) {
                        t.imgLeft = e >= r ? r : t.scaleWidth + e - r <= i ? r + i - t.scaleWidth : e, t.imgTop = n >= a ? a : t.scaleHeight + n - a <= c ? a + c - t.scaleHeight : n;
                    }, t.setBoundStyle = function(o) {
                        void 0 === o && (o = {});
                        var u = o.color;
                        void 0 === u && (u = "#04b00f");
                        var s = o.mask;
                        void 0 === s && (s = "rgba(0, 0, 0, 0.3)");
                        var l = o.lineWidth;
                        void 0 === l && (l = 1);
                        var f = [ {
                            start: {
                                x: r - l,
                                y: a + 10 - l
                            },
                            step1: {
                                x: r - l,
                                y: a - l
                            },
                            step2: {
                                x: r + 10 - l,
                                y: a - l
                            }
                        }, {
                            start: {
                                x: r - l,
                                y: a + c - 10 + l
                            },
                            step1: {
                                x: r - l,
                                y: a + c + l
                            },
                            step2: {
                                x: r + 10 - l,
                                y: a + c + l
                            }
                        }, {
                            start: {
                                x: r + i - 10 + l,
                                y: a - l
                            },
                            step1: {
                                x: r + i + l,
                                y: a - l
                            },
                            step2: {
                                x: r + i + l,
                                y: a + 10 - l
                            }
                        }, {
                            start: {
                                x: r + i + l,
                                y: a + c - 10 + l
                            },
                            step1: {
                                x: r + i + l,
                                y: a + c + l
                            },
                            step2: {
                                x: r + i - 10 + l,
                                y: a + c + l
                            }
                        } ];
                        t.ctx.beginPath(), t.ctx.setFillStyle(s), t.ctx.fillRect(0, 0, r, n), t.ctx.fillRect(r, 0, i, a), 
                        t.ctx.fillRect(r, a + c, i, n - a - c), t.ctx.fillRect(r + i, 0, e - r - i, n), 
                        t.ctx.fill(), f.forEach(function(e) {
                            t.ctx.beginPath(), t.ctx.setStrokeStyle(u), t.ctx.setLineWidth(l), t.ctx.moveTo(e.start.x, e.start.y), 
                            t.ctx.lineTo(e.step1.x, e.step1.y), t.ctx.lineTo(e.step2.x, e.step2.y), t.ctx.stroke();
                        });
                    };
                }, P.prototype.update = function() {
                    var t = this;
                    t.src && (t.__oneTouchStart = function(e) {
                        t.touchX0 = Math.round(e.x), t.touchY0 = Math.round(e.y);
                    }, t.__oneTouchMove = function(e) {
                        var n, o;
                        if (t.touchended) return t.updateCanvas();
                        n = Math.round(e.x - t.touchX0), o = Math.round(e.y - t.touchY0);
                        var r = Math.round(t.rectX + n), a = Math.round(t.rectY + o);
                        t.outsideBound(r, a), t.updateCanvas();
                    }, t.__twoTouchStart = function(e, n) {
                        var o, r, a;
                        t.touchX1 = Math.round(t.rectX + t.scaleWidth / 2), t.touchY1 = Math.round(t.rectY + t.scaleHeight / 2), 
                        o = Math.round(n.x - e.x), r = Math.round(n.y - e.y), a = Math.round(Math.sqrt(o * o + r * r)), 
                        t.oldDistance = a;
                    }, t.__twoTouchMove = function(e, n) {
                        var o = t.oldScale, r = t.oldDistance, a = t.scale, i = t.zoom;
                        t.newScale = function(t, e, n, o, r) {
                            var a, i;
                            return a = Math.round(r.x - o.x), i = Math.round(r.y - o.y), t + .001 * n * (Math.round(Math.sqrt(a * a + i * i)) - e);
                        }(o, r, i, e, n), t.newScale <= 1 && (t.newScale = 1), t.newScale >= a && (t.newScale = a), 
                        t.scaleWidth = Math.round(t.newScale * t.baseWidth), t.scaleHeight = Math.round(t.newScale * t.baseHeight);
                        var c = Math.round(t.touchX1 - t.scaleWidth / 2), u = Math.round(t.touchY1 - t.scaleHeight / 2);
                        t.outsideBound(c, u), t.updateCanvas();
                    }, t.__xtouchEnd = function() {
                        t.oldScale = t.newScale, t.rectX = t.imgLeft, t.rectY = t.imgTop;
                    });
                }, P;
            });
        }).call(this, n("c8ba"));
    },
    a3fe: function(t, e, n) {
        "use strict";
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    a(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            computed: r(r({}, (0, n("2f62").mapState)({
                sendUserInfo: function(t) {
                    return t.chat.sendUserInfo;
                },
                receiveUserInfo: function(t) {
                    return t.chat.receiveUserInfo;
                }
            })), {}, {
                info: function() {
                    if (this.isReceive) {
                        var t = this.receiveUserInfo;
                        return {
                            has_to_center: 1 === Math.floor(t.is_sales_man),
                            avatar_url: t.avatar_url,
                            session_id: t.session_id,
                            sales_man_id: t.sales_man_id,
                            phone: t.phone
                        };
                    }
                    var e = this.sendUserInfo;
                    return {
                        has_to_center: !1,
                        avatar_url: e.avatarUrl,
                        session_id: 0,
                        sales_man_id: 0,
                        phone: e.phone
                    };
                },
                isReceive: function() {
                    return this.message && String(this.message.sender_id) === String(this.receiveUserInfo.session_id);
                }
            })
        };
        e.default = i;
    },
    cd89: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, e.default = {
            data: function() {
                return {
                    nowTab: 1,
                    tabList: [ {
                        id: 1,
                        text: "我的摇号",
                        dataName: "我的摇号",
                        dataContent: ""
                    }, {
                        id: 2,
                        text: "我的编码",
                        dataName: "我的编码",
                        dataContent: ""
                    } ]
                };
            }
        };
    }
} ]);