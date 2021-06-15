(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/hangzhou/lotteryDetail/LotteryInfo" ], {
    1541: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = e("b628"), a = {
                components: {
                    TimeAxis: function() {
                        e.e("components/TimeAxis").then(function() {
                            return resolve(e("2ec0f"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {
                    lotteryInfo: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    is_not_lottery: {
                        type: String,
                        default: ""
                    },
                    hasBtns: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        defaultUp: "https://imgcdn.huanjutang.com/assets/img/201910171731337887.png",
                        defaultDown: "https://imgcdn.huanjutang.com/assets/img/201910171731334059.png",
                        activeUp: "https://imgcdn.huanjutang.com/assets/img/201910171731338081.png",
                        activeDown: "https://imgcdn.huanjutang.com/assets/img/201910171731331847.png"
                    };
                },
                methods: {
                    btnEventHandle: function(n) {
                        var e = this.lotteryInfo.button_list && this.lotteryInfo.button_list[n];
                        if (e) switch (Math.floor(e.type)) {
                          case 0:
                            break;

                          case 1:
                            e.url && t.navigateTo({
                                url: e.url
                            });
                            break;

                          case 2:
                            t.showLoading({
                                title: "加载中..."
                            });
                            var a = e.url;
                            if ([ ".doc", ".xls", ".pdf", ".docx", ".xlsx" ].every(function(t) {
                                return a.indexOf(t) < 0;
                            })) return o.tip.toast("格式不支持", "", "none"), void t.hideLoading();
                            t.downloadFile({
                                url: e.url,
                                success: function(n) {
                                    if (200 === n.statusCode) {
                                        var e = n.tempFilePath;
                                        t.openDocument({
                                            filePath: e
                                        });
                                    }
                                },
                                complete: function() {
                                    t.hideLoading();
                                }
                            });
                            break;

                          case 3:
                            e.url && t.navigateTo({
                                url: e.url
                            });
                            break;

                          case 4:
                            e.url.length > 1 ? t.navigateTo({
                                url: "/subPackages/project/pages/sourceList?project_id=".concat(this.lotteryInfo.project_id, "&lottery_id=").concat(this.lotteryInfo.id, "&name=").concat(this.lotteryInfo.name)
                            }) : t.previewImage({
                                urls: e.url.map(function(t) {
                                    return "".concat(t, "-watermarkhz");
                                })
                            });
                        }
                    },
                    btnEventTrack: function(t, n, e) {
                        this.$emit("sendTrackEvent", t, n, e);
                    },
                    previewImg: function(n) {
                        "string" == typeof n && "" !== n && t.previewImage({
                            urls: [ n ]
                        });
                    },
                    showRegisterEntryEvent: function() {
                        this.$emit("showRegisterEntryEvent");
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    },
    "559c": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("bd44"), a = e("9b36");
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("9c54");
        var i = e("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = r.exports;
    },
    "9b36": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("1541"), a = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = a.a;
    },
    "9c54": function(t, n, e) {
        "use strict";
        var o = e("c823");
        e.n(o).a;
    },
    bd44: function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    },
    c823: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/hangzhou/lotteryDetail/LotteryInfo-create-component", {
    "pages/components/hangzhou/lotteryDetail/LotteryInfo-create-component": function(t, n, e) {
        e("543d").createComponent(e("559c"));
    }
}, [ [ "pages/components/hangzhou/lotteryDetail/LotteryInfo-create-component" ] ] ]);