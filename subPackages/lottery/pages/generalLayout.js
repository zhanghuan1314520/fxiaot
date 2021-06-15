require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/generalLayout" ], {
    "42c4": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s(n("a34a")), r = s(n("a152")), a = s(n("4ec3")), o = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], i = !0, r = !1, a = void 0;
                        try {
                            for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), 
                            !e || n.length !== e); i = !0) ;
                        } catch (t) {
                            r = !0, a = t;
                        } finally {
                            try {
                                i || null == s.return || s.return();
                            } finally {
                                if (r) throw a;
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
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function l(t, e, n, i, r, a, o) {
                try {
                    var s = t[a](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(i, r);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, r) {
                        var a = t.apply(e, n);
                        function o(t) {
                            l(a, i, r, o, s, "next", t);
                        }
                        function s(t) {
                            l(a, i, r, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var h = {
                w: 0,
                h: 0
            }, d = null, m = null, p = {
                components: {
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r.default ],
                data: function() {
                    return {
                        imgSize: {
                            w: 0,
                            h: 0
                        },
                        imgUrl: "",
                        imgScale: 1,
                        lotteryId: 0,
                        projectId: 0,
                        projectName: "",
                        x: 0,
                        y: 0,
                        points: [],
                        buildDatas: [],
                        unitDatas: [],
                        roomDatas: [],
                        loading: !0,
                        selectedUnit: !1,
                        roomTranslate: 0,
                        buildIndex: 0,
                        unitIndex: 0,
                        roomIndex: 0,
                        pageHeight: 0
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("【".concat(this.projectName, "】总平图"));
                },
                onPageScroll: function(t) {
                    this.$refs.share.pageScroll(t);
                },
                onLoad: function() {
                    var e = f(i.default.mark(function e(n) {
                        var r, o, s = this;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.lotteryId = n.lottery_id, this.projectId = n.project_id, this.projectName = n.project_name, 
                                r = t.getSystemInfoSync(), this.pageHeight = r.windowHeight, e.next = 7, a.default.lottery.getLotteryPlanUnit(this.lotteryId);

                              case 7:
                                return o = e.sent, d = o.data, this.imgUrl = d.planar.image, this.buildDatas = d.mark.map(function(t) {
                                    return s.createBuildData(t);
                                }), this.points = this.buildDatas.map(function(t, e) {
                                    var n = s.createPoint(t, 1, {
                                        shiftx: 6,
                                        shifty: 12
                                    });
                                    return 0 === e && (n.toggle = !0), n;
                                }), this.unitDatas = d.mark[this.buildIndex].list.map(function(t) {
                                    return s.createUnitData(t);
                                }), this.loading = !1, e.next = 16, this.initStage();

                              case 16:
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
                    clickPointHandle: function(t) {
                        var e = this.points[t];
                        e && (this.setPosition(this.transferPosition(e)), this.buildIndex = t, this.points.forEach(function(e, n) {
                            e.toggle = Math.floor(t) === n;
                        }));
                    },
                    changeSwiperHandle: function(t) {
                        var e = this, n = t.detail.current;
                        this.unitIndex = 0, this.unitDatas = d.mark[n].list.map(function(t) {
                            return e.createUnitData(t);
                        }), this.clickPointHandle.call(this, n), this.selectedUnit && (this.selectedUnit = !1, 
                        this.roomTranslate = 0, this.imgSize.w = m.w, this.imgSize.h = m.h, this.buildDatas = d.mark.map(function(t) {
                            return e.createBuildData(t);
                        }), this.points = this.buildDatas.map(function(t, i) {
                            var r = e.createPoint(t, 1, {
                                shiftx: 6,
                                shifty: 12
                            });
                            return i === Math.floor(n) && (r.toggle = !0), r;
                        }), this.setPosition(this.transferPosition(this.points[n])));
                    },
                    clickUnitHandle: function(t) {
                        var e = this;
                        this.unitIndex = t;
                        var n = this.unitDatas[this.unitIndex];
                        a.default.lottery.getLotteryPlanRoom(n.key).then(function(t) {
                            var r = 1.3, a = e.createPoint(n, 1);
                            a.toggle = !0, a.x = a.x * r - 6, a.y = a.y * r - 12, e.selectedUnit || (e.imgSize.w *= r, 
                            e.imgSize.h *= r), e.selectedUnit = !0, t.data && (e.points = [ a ].concat(t.data.map(function(t, e) {
                                return {
                                    x: t.x_axis * r - 9,
                                    y: t.y_axis * r - 9,
                                    type: 2,
                                    toggle: 0 === e,
                                    mark: t.mark,
                                    key: t.key
                                };
                            }))), e.setPosition(e.transferPosition(e.points[1] || e.points[0])), wx.nextTick(f(i.default.mark(function n() {
                                return i.default.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return t.data && (e.roomDatas = t.data.map(function(t) {
                                            return {
                                                mark: t.mark,
                                                key: t.key,
                                                list: t.list
                                            };
                                        })), n.next = 3, e.getRoomTranslate();

                                      case 3:
                                        e.roomTranslate = n.sent, e.roomIndex = 0;

                                      case 5:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                            })));
                        });
                    },
                    changeRoomHandle: function(t) {
                        this.clickRoomHandle.call(this, t.detail.current);
                    },
                    clickRoomHandle: function(t) {
                        this.roomIndex = t;
                        var e = this.roomDatas[this.roomIndex], n = {
                            x: 0,
                            y: 0
                        };
                        this.points.forEach(function(t) {
                            t.toggle = t.key === e.key || 1 === Math.floor(t.type), t.key === e.key && (n.x = t.x, 
                            n.y = t.y);
                        }), this.setPosition(this.transferPosition(n));
                    },
                    backUnitHandle: function() {
                        var e = this;
                        t.pageScrollTo({
                            scrollTop: 0
                        }), this.selectedUnit = !1, this.roomTranslate = 0, this.imgSize.w = m.w, this.imgSize.h = m.h, 
                        this.buildDatas = d.mark.map(function(t) {
                            return e.createBuildData(t);
                        }), this.points = this.buildDatas.map(function(t, n) {
                            var i = e.createPoint(t, 1);
                            return n === Math.floor(e.buildIndex) && (i.toggle = !0), i;
                        });
                    },
                    previewHandle: function(e) {
                        "string" == typeof e && t.previewImage({
                            urls: [ e ]
                        });
                    },
                    createBuildData: function(t) {
                        return {
                            x: t.x_axis,
                            y: t.y_axis,
                            id: t.id,
                            key: t.key,
                            mark: t.mark,
                            project_name: t.project_name,
                            pre_order_time: t.pre_order_time,
                            result_publish_time: t.result_publish_time
                        };
                    },
                    createUnitData: function(t) {
                        return {
                            key: t.key,
                            unit_name: t.unit_name,
                            x: t.x_axis,
                            y: t.y_axis,
                            mark: t.mark,
                            elevator: t.elevator,
                            total: t.total,
                            max_floor: t.max_floor
                        };
                    },
                    initStage: function() {
                        var t = f(i.default.mark(function t() {
                            var e, n, r;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, this.getImageInfoSync(this.imgUrl);

                                  case 3:
                                    e = t.sent, n = 980 / e.width, this.imgSize = {
                                        w: 980,
                                        h: e.height * n
                                    }, m = {
                                        w: 980,
                                        h: e.height * n
                                    }, t.next = 13;
                                    break;

                                  case 9:
                                    return t.prev = 9, t.t0 = t.catch(0), o.tip.toast("图片下载失败", "", "none"), t.abrupt("return");

                                  case 13:
                                    return t.next = 15, this.getElemRectSync(".scale-view");

                                  case 15:
                                    r = t.sent, h = {
                                        w: r.width,
                                        h: r.height
                                    }, this.setPosition(this.transferPosition(this.points[0]));

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 0, 9 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    setPosition: function(t) {
                        var e = t.x, n = t.y;
                        this.x = e, this.y = n;
                    },
                    getRoomTranslate: function() {
                        var t = this;
                        return new Promise(function(e) {
                            t.getRoomTranslate._translateY ? e(t.getRoomTranslate._translateY) : Promise.all([ t.getElemRectSync(".scale-view"), t.getElemRectSync(".house-plan"), t.getElemRectSync(".rooms-content") ]).then(function(n) {
                                var i = c(n, 3), r = i[0], a = i[1], o = i[2];
                                t.getRoomTranslate._translateY = t.pageHeight - (r.height + a.height + o.height), 
                                e(t.getRoomTranslate._translateY);
                            }).catch(function() {
                                e(300);
                            });
                        });
                    },
                    getImageInfoSync: function(e) {
                        return new Promise(function(n, i) {
                            t.getImageInfo({
                                src: e,
                                success: function(t) {
                                    n(t);
                                },
                                fail: function(t) {
                                    i(t);
                                }
                            });
                        });
                    },
                    getElemRectSync: function(e) {
                        return new Promise(function(n) {
                            var i = t.createSelectorQuery();
                            i.select(e).boundingClientRect(), i.exec(function(t) {
                                n(t[0]);
                            });
                        });
                    },
                    createPoint: function(t, e, n) {
                        return n = n || {
                            shiftx: 0,
                            shifty: 0
                        }, {
                            x: t.x - n.shiftx,
                            y: t.y - n.shifty,
                            type: e,
                            toggle: !1,
                            mark: t.mark,
                            key: t.key
                        };
                    },
                    transferPosition: function(t) {
                        return {
                            x: -t.x + h.w / 2,
                            y: -t.y + h.h / 2 - Math.abs(this.roomTranslate / 2)
                        };
                    }
                }
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    "569d": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("61e1")).default);
        }).call(this, n("543d").createPage);
    },
    "61e1": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("c024"), r = n("da85");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("9a75");
        var o = n("f0c5"), s = Object(o.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = s.exports;
    },
    "9a75": function(t, e, n) {
        "use strict";
        var i = n("c36f");
        n.n(i).a;
    },
    c024: function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    c36f: function(t, e, n) {},
    da85: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("42c4"), r = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = r.a;
    }
}, [ [ "569d", "common/runtime", "common/vendor", "subPackages/lottery/common/vendor" ] ] ]);