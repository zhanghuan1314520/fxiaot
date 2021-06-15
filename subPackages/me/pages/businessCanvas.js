require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/businessCanvas" ], {
    1203: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("4efc")).default);
        }).call(this, n("543d").createPage);
    },
    "4efc": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5660"), i = n("ad48");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("6d66");
        var r = n("f0c5"), o = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    5660: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    5834: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(n("a34a")), i = n("b628"), s = r(n("4ec3"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], a = !0, i = !1, s = void 0;
                        try {
                            for (var r, o = t[Symbol.iterator](); !(a = (r = o.next()).done) && (n.push(r.value), 
                            !e || n.length !== e); a = !0) ;
                        } catch (t) {
                            i = !0, s = t;
                        } finally {
                            try {
                                a || null == o.return || o.return();
                            } finally {
                                if (i) throw s;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function l(t, e, n, a, i, s, r) {
                try {
                    var o = t[s](r), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, i);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var s = t.apply(e, n);
                        function r(t) {
                            l(s, a, i, r, o, "next", t);
                        }
                        function o(t) {
                            l(s, a, i, r, o, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var u = "", h = "", f = "", g = "", m = {
                components: {
                    CanvasPost: function() {
                        n.e("subPackages/me/pages/components/CanvasPost").then(function() {
                            return resolve(n("3202"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        salesManInfo: null,
                        project_name: "",
                        sort: {
                            1: "铜牌顾问",
                            2: "银牌顾问",
                            3: "金牌顾问"
                        },
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        sales_man_id: "",
                        qrCode: "",
                        userName: "",
                        img: "",
                        guideImg: [],
                        miniLogo: ""
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("我是【".concat(this.project_name, "】的置业顾问【").concat(this.userName, "】，欢迎咨询"), "/pages/salesMan/detail?id=".concat(this.sales_man_id, "&user_id=").concat(this.salesManInfo.session_id), this.img);
                },
                onLoad: function() {
                    var e = d(a.default.mark(function e(n) {
                        var i, r, c, l = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                    title: "生成中...",
                                    mask: !0
                                }), this.sales_man_id = n.id, this.project_name = n.projectName, this.writePhotoAuth = n.writePhotoAuth, 
                                e.next = 6, s.default.getSalesManOnce(this.sales_man_id);

                              case 6:
                                i = e.sent, r = i.data, c = r || {}, this.salesManInfo = c, this.salesManInfo.projects = c.projects.filter(function(t) {
                                    return t.id > 0;
                                }), Promise.all([ s.default.getGuideImage("business_canvas"), s.default.getQrCode("/pages/salesMan/detail?id=".concat(this.sales_man_id, "&user_id=").concat(c.session_id)) ]).then(function(t) {
                                    var e = o(t, 2), n = e[0], a = e[1];
                                    l.qrCode = a.data.qrcode, l.guideImg = n && n.data || [], c && (l.userName = c.name, 
                                    l.img = c.avatar_url), l.drawCanvas();
                                }), t.hideLoading();

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    hideGuide: function() {
                        this.guideImg = [];
                    },
                    drawCanvas: function() {
                        var e = this;
                        if (!this.qrCode) return i.tip.toast("二维码为空", "", "none"), void t.hideLoading();
                        this.miniLogo = "https://imgcdn.huanjutang.com/assets/img/20200529/5ed067fc36922.png";
                        var n = "", a = "";
                        switch (Math.floor(this.salesManInfo.grade)) {
                          case 1:
                            n = "https://imgcdn.huanjutang.com/assets/img/20200331/5e8319aa9d454.png", a = "https://imgcdn.huanjutang.com/assets/img/20200402/5e85b9b0606ca.png";
                            break;

                          case 2:
                            n = "https://imgcdn.huanjutang.com/assets/img/20200331/5e8319b94282c.png", a = "https://imgcdn.huanjutang.com/assets/img/20200402/5e85b9bdc6970.png";
                            break;

                          case 3:
                            n = "https://imgcdn.huanjutang.com/assets/img/20200331/5e83196be48db.png", a = "https://imgcdn.huanjutang.com/assets/img/20200402/5e85b99140edb.png";
                            break;

                          default:
                            n = "https://imgcdn.huanjutang.com/assets/img/20200331/5e83196be48db.png", a = "https://imgcdn.huanjutang.com/assets/img/20200402/5e85b99140edb.png";
                        }
                        Promise.all([ this.downloadFile(this.salesManInfo.avatar_url_thumbnail2), this.downloadFile(this.qrCode), this.downloadFile(n), this.downloadFile(a) ]).then(function(t) {
                            var n = o(t, 4);
                            u = n[0], h = n[1], g = n[2], f = n[3], e.canvasWidth = 498, e.canvasHeight = 972, 
                            e.$refs.canvasPost.$emit("renderQueue", [ e.drawImageOne, e.drawImageTwo ]);
                        }).catch(function(e) {
                            console.log(e), t.hideLoading();
                        });
                    },
                    drawImageOne: function() {
                        var e = d(a.default.mark(function e(n) {
                            var s, r, c, l, d, g, m, p, w, b, v, x, F, y, j;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, Promise.all([ this.downloadFile(this.miniLogo), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20200225/5e54efb331907.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20200212/5e43aac37c646.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20200331/5e830cdca4420.png") ]);

                                  case 3:
                                    s = e.sent, r = o(s, 4), c = r[0], l = r[1], d = r[2], g = r[3], h && c && u && l && d && f && g && (m = new i.DrawCanvas(n, 650, 960), 
                                    p = m.getScale(), w = 650 * p, b = 960 * p, n.setFillStyle("#fff"), n.fillRect(0, 0, w, b), 
                                    n.drawImage(d, 0, 0, w, b), v = 76 * p, x = w / 2, m.drawRoundRect((w - 220 * p) / 2, v, 220 * p, 220 * p, 110 * p, "#F3C79F"), 
                                    m.drawCircleAvatar(u, {
                                        x: (w - 212 * p) / 2,
                                        y: 80 * p,
                                        size: 212 * p
                                    }), this.project_name.length > 9 ? (v = 372 * p, n.setTextAlign("center"), n.setFillStyle("#FFD0A6"), 
                                    n.setFontSize(64 * p), this.changFontsize(this.project_name, n, x, v + 20 * p, p), 
                                    this.changFontsize(this.project_name, n, x - .3, v + 20 * p, p), this.changFontsize(this.project_name, n, x, v + 20 * p - .3, p), 
                                    this.changFontsize(this.project_name, n, x, v + 20 * p, p), this.changFontsize(this.project_name, n, x + .3, v + 20 * p, p), 
                                    this.changFontsize(this.project_name, n, x, v + 20 * p - .3, p), m.drawBoldText({
                                        x: x,
                                        y: 600 * p,
                                        text: "VR看房 视频讲房 日照系统 1对1服务",
                                        color: "#fff",
                                        size: 26 * p,
                                        align: "center",
                                        bold: !1
                                    }), v = 494 * p) : (v = 372 * p, m.drawBoldText({
                                        x: x,
                                        y: v + 20 * p,
                                        text: this.project_name,
                                        color: "#FFD0A6",
                                        size: 64 * p,
                                        bold: !0,
                                        align: "center"
                                    }), m.drawBoldText({
                                        x: x,
                                        y: 544 * p,
                                        text: "VR看房 视频讲房 日照系统 1对1服务",
                                        color: "#FFD0A6",
                                        size: 26 * p,
                                        align: "center",
                                        bold: !1
                                    }), v = 442 * p), n.drawImage(l, (w - 312 * p) / 2, v, 312 * p, 68 * p), F = this.salesManInfo.name, 
                                    y = n.measureText(F).width, j = (w - (228 * p + 20 + y)) / 2, v = 664 * p, m.drawBoldText({
                                        x: j,
                                        y: v,
                                        text: F,
                                        color: "#FFFFFF",
                                        size: 40 * p,
                                        bold: !0,
                                        align: "left"
                                    }), n.drawImage(f, j + y + 48 * p, v - 48 * p, 228 * p, 86 * p), y = n.measureText("我已开工，在线看房咨询请找我").width, 
                                    m.drawBoldText({
                                        x: 40 * p,
                                        y: 718 * p,
                                        text: "我已开工，在线看房咨询请找我",
                                        color: "#ffffff",
                                        size: 26 * p,
                                        align: "left",
                                        bold: !1
                                    }), n.drawImage(g, 411 * p, 693 * p, 22 * p, 26 * p), m.drawBoldText({
                                        x: 444 * p,
                                        y: 718 * p,
                                        text: this.salesManInfo.phone,
                                        color: "#ffffff",
                                        size: 28 * p,
                                        align: "left",
                                        bold: !1
                                    }), m.drawDottedLine({
                                        startX: 24 * p,
                                        endX: w - 28 * p,
                                        y: b - 190 * p,
                                        color: "rgba(255, 255, 255, 0.3)"
                                    }), n.setFillStyle("#CF7B7E"), n.fillRect(30 * p, 812 * p, 124 * p, 124 * p), n.drawImage(h, 34 * p, 816 * p, 116 * p, 116 * p), 
                                    y = n.measureText("杭州房小团").width, n.drawImage(c, w - 82 * p - y, 848 * p, 32 * p, 32 * p), 
                                    m.drawBoldText({
                                        x: w - 32 * p,
                                        y: 874 * p,
                                        text: "杭州房小团",
                                        color: "rgba(255, 255, 255, 0.9)",
                                        size: 26 * p,
                                        align: "right"
                                    }), m.drawBoldText({
                                        x: w - 32 * p,
                                        y: 916 * p,
                                        text: "买房就上房小团，新房信息快准全",
                                        color: "rgba(255, 255, 255, 0.9)",
                                        size: 26 * p,
                                        align: "right",
                                        bold: !1
                                    })), e.next = 17;
                                    break;

                                  case 12:
                                    e.prev = 12, e.t0 = e.catch(0), console.error(e.t0), i.tip.toast("专属邀请码生成失败", "", "none"), 
                                    t.hideLoading();

                                  case 17:
                                    return e.abrupt("return", n);

                                  case 18:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 0, 12 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    drawImageTwo: function() {
                        var e = d(a.default.mark(function e(n) {
                            var s, r, c, l, d, f, m, p, w, b, v, x;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 4, Promise.all([ this.downloadFile("https://imgcdn.huanjutang.com/image/2020/06/03/d4c2845b2a63ba14dfd893483c1e9d61.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/202023175768081.png"), this.downloadFile("https://imgcdn.huanjutang.com/assets/img/20200331/5e830d9409b66.png") ]);

                                  case 4:
                                    s = e.sent, r = o(s, 3), c = r[0], l = r[1], d = r[2], c && u && h && l && d && g && (f = new i.DrawCanvas(n, 650, 960), 
                                    m = f.getScale(), p = 650 * m, w = 960 * m, n.setFillStyle("#fff"), n.fillRect(0, 0, p, w), 
                                    n.drawImage(u, 24 * m, 24 * m, p - 48 * m, 566 * m), n.drawImage(l, 24 * m, 608 * m, p - 48 * m, 60 * m), 
                                    b = 720 * m, n.setFontSize(40 * m), n.setFillStyle("#000"), f.drawBoldText({
                                        x: 28 * m,
                                        y: b,
                                        text: this.salesManInfo.name,
                                        color: "#000",
                                        size: 40 * m,
                                        bold: !0,
                                        align: "left"
                                    }), v = n.measureText(this.salesManInfo.name).width, n.drawImage(g, 28 * m + v + 12 * m, b - 48 * m, 228 * m, 85 * m), 
                                    x = this.project_name.length > 7 ? "".concat(this.project_name.substring(0, 7), "...") : this.project_name, 
                                    f.drawBoldText({
                                        x: 28 * m,
                                        y: 768 * m,
                                        text: "主营楼盘：".concat(x),
                                        color: "#606266",
                                        size: 28 * m,
                                        align: "left",
                                        bold: !1
                                    }), v = n.measureText(this.salesManInfo.phone).width, f.drawBoldText({
                                        x: p - 28 * m,
                                        y: 768 * m,
                                        text: this.salesManInfo.phone,
                                        color: "#606266",
                                        size: 28 * m,
                                        align: "right",
                                        bold: !1
                                    }), n.drawImage(d, p - (138 + v) * m, 748 * m, 22 * m, 26 * m), f.drawDottedLine({
                                        startX: 24 * m,
                                        endX: p - 28 * m,
                                        y: w - 165 * m,
                                        color: "#f2f2f2"
                                    }), n.setFillStyle("rgba(244, 244, 244, 1)"), n.fillRect(28 * m, w - 144 * m, 124 * m, 124 * m), 
                                    n.drawImage(h, 32 * m, w - 140 * m, 116 * m, 116 * m), v = n.measureText("杭州房小团").width, 
                                    n.drawImage(c, p - 65 * m - v, w - 124 * m, 40 * m, 40 * m), f.drawBoldText({
                                        x: p - 28 * m,
                                        y: w - 96 * m,
                                        text: "杭州房小团",
                                        color: "#2F8CEF",
                                        size: 26 * m,
                                        align: "right",
                                        bold: !1
                                    }), f.drawBoldText({
                                        x: p - 28 * m,
                                        y: w - 52 * m,
                                        text: "选新房 查摇号 就上房小团",
                                        color: "#96989E",
                                        size: 26 * m,
                                        align: "right",
                                        bold: !1
                                    })), e.next = 16;
                                    break;

                                  case 12:
                                    e.prev = 12, e.t0 = e.catch(0), i.tip.toast("专属邀请码生成失败", "", "none"), t.hideLoading();

                                  case 16:
                                    return e.prev = 16, e.abrupt("return", n);

                                  case 19:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 0, 12, 16, 19 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    changFontsize: function(t, e, n, a, i) {
                        var s = t.split(""), r = "", o = "", c = e.measureText(t).width;
                        if (t.length < 5) e.fillText(t, n, a); else if (t.length <= 9) e.setFontSize(c / t.length - 3 * t.length * i), 
                        e.fillText(t, n, a); else {
                            for (var l = 0; l < s.length; l += 1) l <= 8 ? r += s[l] : o += s[l];
                            e.setFontSize(44 * i), e.fillText(r, n, a - 40 * i), e.fillText(o, n, a + 20 * i);
                        }
                    },
                    downloadFile: function(e) {
                        return new Promise(function(n, a) {
                            if (e) {
                                var i = e.replace(/^http:/, "https:");
                                t.downloadFile({
                                    url: i,
                                    success: function(t) {
                                        n(t.tempFilePath);
                                    },
                                    fail: function(t) {
                                        a(t);
                                    }
                                });
                            } else a(new Error("下载对象里面没有路径"));
                        });
                    }
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    "6d66": function(t, e, n) {
        "use strict";
        var a = n("bc7a");
        n.n(a).a;
    },
    ad48: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5834"), i = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = i.a;
    },
    bc7a: function(t, e, n) {}
}, [ [ "1203", "common/runtime", "common/vendor" ] ] ]);