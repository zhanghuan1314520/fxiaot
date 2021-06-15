require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/ReplyContainer/EmojiIcon" ], {
    "157d": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("6646"), r = n("d2a2");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("793b");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, "ce3c1856", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "5d509": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = i(n("ee1f")), r = i(n("a69c")), a = n("ca00");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            var s = {}, f = [];
            o.default.forEach(function(t) {
                s[t.id] = t, f.push(t.cn);
            });
            var d = [];
            [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 60, 62, 63, 64, 65, 66, 67, 68, 70, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 89, 92, 93, 94, 95, 300, 301, 302, 303, 304, 305, 306, 307, 204, 205, 202, 206, 212, 211, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 308, 309, 310, 311, 312, 209 ].forEach(function(t) {
                return d.push(s[t]);
            });
            var l = {
                props: {
                    padding: {
                        type: Number,
                        default: 15
                    },
                    backgroundColor: {
                        type: String,
                        default: "#EDEDED"
                    },
                    showSend: {
                        type: Boolean,
                        default: !0
                    },
                    showDel: {
                        type: Boolean,
                        default: !0
                    },
                    showHistory: {
                        type: Boolean,
                        default: !0
                    },
                    height: {
                        type: Number,
                        default: 300
                    },
                    source: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        history: [],
                        emotions: d,
                        extraPadding: 0,
                        perLine: 0,
                        hasSafeBottom: a.isIPhoneX
                    };
                },
                mounted: function() {
                    var e = this.padding, n = (t.getSystemInfoSync() || {}).windowWidth;
                    this.perLine = Math.floor((n - 2 * e) / 45), this.extraPadding = Math.floor((n - 2 * e - 40 * this.perLine) / (this.perLine - 1));
                },
                methods: {
                    getEmojiNames: function() {
                        return f;
                    },
                    parseEmoji: r.default,
                    insertEmoji: function(t) {
                        var e = t.currentTarget.dataset.idx, n = this.emotions[e].cn;
                        this.LRUCache(this.history, this.perLine, e), this.$emit("insertemoji", {
                            emotionName: n
                        });
                    },
                    deleteEmoji: function() {
                        this.$emit("delemoji");
                    },
                    send: function() {
                        this.$emit("send");
                    },
                    LRUCache: function(t, e, n) {
                        var o = t.indexOf(n);
                        o >= 0 ? (t.splice(o, 1), t.unshift(n)) : t.length < e ? t.push(n) : t.length === e && (t[e - 1] = n), 
                        this.history = c(t);
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    6646: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "793b": function(t, e, n) {
        "use strict";
        var o = n("a651");
        n.n(o).a;
    },
    a651: function(t, e, n) {},
    d2a2: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("5d509"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/ReplyContainer/EmojiIcon-create-component", {
    "subPackages/me/components/ChatInterface/ReplyContainer/EmojiIcon-create-component": function(t, e, n) {
        n("543d").createComponent(n("157d"));
    }
}, [ [ "subPackages/me/components/ChatInterface/ReplyContainer/EmojiIcon-create-component" ] ] ]);