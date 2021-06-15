(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/TimeAxis" ], {
    "2ec0f": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("55d4"), i = n("d67b");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("4d10");
        var c = n("f0c5"), r = Object(c.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "4d10": function(t, e, n) {
        "use strict";
        var a = n("a371");
        n.n(a).a;
    },
    "55d4": function(t, e, n) {
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
    a371: function(t, e, n) {},
    d67b: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e09d"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = i.a;
    },
    e09d: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    timeData: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        toItemView: "",
                        currentIndex: -1,
                        tips: {
                            text: "",
                            url: "",
                            url_type: ""
                        }
                    };
                },
                watch: {
                    timeData: {
                        handler: function() {
                            for (var t = 0, e = 0; e < this.timeData.length; e += 1) {
                                var n = this.timeData[e];
                                if (1 === Math.floor(n.status)) {
                                    t = e, this.currentIndex = e, this.tips = n;
                                    break;
                                }
                            }
                            t >= 3 && (this.toItemView = "item_".concat(t - 2));
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    tapEvent: function(t, e) {
                        this.currentIndex = t, this.tips = e, this.toItemView = "item_".concat(t - 2);
                    },
                    goPages: function() {
                        var e = this.tips, n = e.url_type, a = e.url;
                        if (a && n) switch (Math.floor(n)) {
                          case 5:
                            var i = "/pages/webview2?redirect=".concat(encodeURIComponent(a));
                            t.navigateTo({
                                url: i
                            });
                            break;

                          case 4:
                            t.navigateTo({
                                url: a
                            });
                            break;

                          case 3:
                            t.previewImage({
                                urls: [ a ],
                                current: 0
                            });
                            break;

                          case 2:
                            t.showLoading({
                                title: "加载中..."
                            }), t.downloadFile({
                                url: a,
                                success: function(e) {
                                    var n = e.tempFilePath;
                                    t.openDocument({
                                        filePath: n
                                    });
                                },
                                complete: function() {
                                    t.hideLoading();
                                }
                            });
                        }
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/TimeAxis-create-component", {
    "components/TimeAxis-create-component": function(t, e, n) {
        n("543d").createComponent(n("2ec0f"));
    }
}, [ [ "components/TimeAxis-create-component" ] ] ]);