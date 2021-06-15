(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/UnsuccessfulTrend" ], {
    3558: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("3a5d"), a = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = a.a;
    },
    "3a5d": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = c(n("a34a")), a = c(n("9445")), r = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, o, a, r, c) {
                try {
                    var i = t[r](c), s = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(s) : Promise.resolve(s).then(o, a);
            }
            var s = null, u = {
                props: {
                    erTrendData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    showMore: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    projectId: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    },
                    lotteryId: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    },
                    projectName: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    canvasToImage: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    }
                },
                data: function() {
                    return {
                        cWidth: "",
                        cHeight: "",
                        pixelRatio: 1,
                        showTips: !1,
                        tempSrc: ""
                    };
                },
                computed: {
                    showImage: function() {
                        return this.canvasToImage && "" !== this.tempSrc;
                    }
                },
                watch: {
                    erTrendData: function(t) {
                        this.businessData(t);
                    }
                },
                created: function() {
                    var e = t.getSystemInfoSync();
                    this.cWidth = e.windowWidth - 24, this.cHeight = 280;
                },
                methods: {
                    goDetailPage: function() {
                        var e = "/subPackages/project/pages/projectLotteryDetail?project_id=".concat(this.projectId, "&lottery_id=").concat(this.lotteryId, "&key=0&name=").concat(this.projectName);
                        t.navigateTo({
                            url: e
                        });
                    },
                    businessData: function(t) {
                        var e = t.data.map(function(t) {
                            return 1 * t;
                        }), n = this, o = {}, c = {
                            categories: t.timeLine.map(function(t) {
                                return t.replace(/-/g, ".");
                            }),
                            series: [ {
                                name: "摇中率",
                                data: e,
                                color: "#2F8CEF",
                                gradient: !0,
                                type: "area",
                                textSize: "12",
                                textColor: "#2F8CEF",
                                format: function(t) {
                                    return "".concat(t, "%");
                                }
                            } ]
                        };
                        o.padding = [ 20, 12, 10, 12 ], o.categories = c.categories, o.series = c.series, 
                        o.$this = n, o.canvasId = "trendCanvas", o.width = n.cWidth, o.height = n.cHeight, 
                        o.type = "area", o.legend = {
                            show: !1
                        }, o.dataLabel = {
                            show: !1,
                            fontColor: "#ff0000"
                        }, o.extra = {
                            area: {
                                type: "straight",
                                opacity: .1,
                                addLine: !0,
                                width: 2
                            },
                            tooltip: {
                                showBox: !0,
                                bgColor: "#2F8CEF",
                                bgOpacity: 1,
                                gridType: "dash",
                                dashLength: 5,
                                gridColor: "#1890ff",
                                fontColor: "#FFFFFF",
                                horizentalLine: !1,
                                xAxisLabel: !1,
                                yAxisLabel: !1,
                                labelBgColor: "#DFE8FF",
                                labelBgOpacity: .95,
                                labelFontColor: "#666666"
                            }
                        }, o.xAxis = {
                            rotateLabel: e.length > 4,
                            disableGrid: !0,
                            itemCount: 5,
                            calibration: !1,
                            scrollAlign: "left",
                            scrollShow: !1,
                            boundaryGap: "center",
                            fontColor: "#96989E",
                            fontSize: 11
                        }, o.yAxis = {
                            title: "摇中概率",
                            gridType: "solid",
                            splitNumber: 5,
                            min: 0,
                            max: 100,
                            gridColor: "#eeeeee",
                            fontColor: "#96989E",
                            fontSize: 11,
                            format: function(t) {
                                return "".concat(t, "%");
                            }
                        }, s = new a.default(o), o.enableScroll && (r.cache.get("charts-move-tiped") || (this.showTips = !0)), 
                        s.addEventListener("renderComplete", this.handleRenderComplete);
                    },
                    handleRenderComplete: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(o, a) {
                                    var r = t.apply(e, n);
                                    function c(t) {
                                        i(r, o, a, c, s, "next", t);
                                    }
                                    function s(t) {
                                        i(r, o, a, c, s, "throw", t);
                                    }
                                    c(void 0);
                                });
                            };
                        }(o.default.mark(function e() {
                            var n = this;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!this.tempSrc) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    setTimeout(function() {
                                        t.canvasToTempFilePath({
                                            canvasId: "trendCanvas",
                                            success: function(t) {
                                                n.tempSrc = t.tempFilePath;
                                            }
                                        }, n);
                                    }, 200);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    closeTips: function() {
                        this.showTips && (this.showTips = !1, r.cache.set("charts-move-tiped", !0));
                    },
                    touchstart: function(t) {
                        s.scrollStart(t), this.closeTips(), s.showToolTip(t, {
                            format: function(t) {
                                return "".concat(t.name, ":").concat(t.data);
                            }
                        });
                    },
                    touchmove: function(t) {
                        s.scroll(t);
                    },
                    touchend: function(t) {
                        s.scrollEnd(t);
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    9444: function(t, e, n) {
        "use strict";
        var o = n("f0b1");
        n.n(o).a;
    },
    c4b3: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    c99cc: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c4b3"), a = n("3558");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("9444");
        var c = n("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    f0b1: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/UnsuccessfulTrend-create-component", {
    "pages/components/lotteryDetail/UnsuccessfulTrend-create-component": function(t, e, n) {
        n("543d").createComponent(n("c99cc"));
    }
}, [ [ "pages/components/lotteryDetail/UnsuccessfulTrend-create-component" ] ] ]);