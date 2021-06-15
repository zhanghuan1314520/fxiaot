require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/subwayLookHouse" ], {
    "0395": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("fbc6")).default);
        }).call(this, n("543d").createPage);
    },
    5112: function(t, e, n) {
        "use strict";
        var r = n("841e");
        n.n(r).a;
    },
    "512b": function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.showGuide = !1;
            });
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "841e": function(t, e, n) {},
    a20f: function(t, e, n) {
        "use strict";
        var r = n("bb83");
        n.n(r).a;
    },
    bb83: function(t, e, n) {},
    d28e: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("ff05"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    fbc6: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("512b"), a = n("d28e");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("a20f"), n("5112");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    ff05: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), i = n("2f62"), o = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, a = !1, i = void 0;
                        try {
                            for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            a = !0, i = t;
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (a) throw i;
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
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function l(t, e, n, r, a, i, o) {
                try {
                    var s = t[i](o), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            l(i, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            l(i, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach(function(e) {
                        m(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function m(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var p = n("f4fd"), g = {
                property_type: 1
            }, y = {
                color: "#0074FF",
                width: 4
            }, b = {
                type: "station",
                iconPath: "https://imgcdn.huanjutang.com/assets/img/2020724168488081.png",
                width: 6,
                height: 6,
                anchor: {
                    x: .5,
                    y: .5
                }
            }, v = {
                fontSize: 13,
                color: "#FFF",
                display: "ALWAYS",
                textAlign: "center",
                padding: 10,
                anchorY: -46,
                borderRadius: 30
            }, k = {
                mapContext: null,
                projectData: [],
                cityInfo: {},
                range: 1200,
                regionChange: null,
                metroParam: h(h({}, g), {}, {
                    aggs_type: "city_metro_id"
                }),
                projectParam: h({
                    size: 100
                }, g),
                markerCopy: {
                    1: [],
                    2: [],
                    3: []
                },
                stationPoint: {},
                polylineData: {},
                polylineMiddle: {},
                metroData: null,
                station: {},
                locationMarker: [],
                metroLoading: !1,
                projectLoading: !1
            }, w = JSON.parse(JSON.stringify(k)), D = {
                components: {
                    ShareButton: function() {
                        n.e("subPackages/project/components/BaseShareBtn").then(function() {
                            return resolve(n("4b9f"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    var e = t.getSystemInfoSync().system;
                    return this.isAndroid = e.includes("Android"), {
                        markers: [],
                        longitude: "",
                        latitude: "",
                        scale: 11,
                        markerType: 1,
                        params: {},
                        tabParams: {},
                        polyline: [],
                        circles: [],
                        activeLine: {},
                        metroData: [],
                        selectedStation: [],
                        loading: !1,
                        showGuide: !1
                    };
                },
                computed: h({
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    },
                    showStation: function() {
                        return this.selectedStation.length > 0;
                    }
                }, (0, i.mapState)({
                    enableShare: function(t) {
                        return t.system.enableShare;
                    }
                })),
                destroyed: function() {
                    Object.keys(k).forEach(function(t) {
                        k[t] = w[t];
                    }), k.station = {}, k.lineData = {}, k.stationPoint = {}, k.polylineData = {}, k.polylineMiddle = {}, 
                    k.markerCopy = {
                        1: [],
                        2: [],
                        3: []
                    };
                },
                methods: {
                    handleLineChange: function() {
                        var t = d(r.default.mark(function t(e) {
                            var n, a, i = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = e.id, (a = e.index) !== this.activeLine.index) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 3:
                                    this.activeLine = {
                                        id: n,
                                        index: a
                                    }, this.selectedStation.forEach(function(t) {
                                        i.stationMarkerStatus(t.markerId, "#0074FF");
                                    }), this.$nextTick(function() {
                                        i.selectedStation = [], k.station = {};
                                    }), this.scale = 11 - .001 * Math.random(), 1 === this.markerType && this.setMetroLine(a);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    handleDeleteStation: function() {
                        var t = d(r.default.mark(function t(e, n, a) {
                            var i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.selectedStation.splice(e, 1), (i = this.circles.findIndex(function(t) {
                                        return Number(t.id) === Number(n);
                                    })) > -1 && this.circles.splice(i, 1), k.station[n] = "", this.stationMarkerStatus(a, "#0074FF");

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n, r) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    setPolylineData: function(t) {
                        var e = k.metroData[t], n = e.points || e.metros.map(function(t) {
                            return {
                                longitude: Number(t.lng),
                                latitude: Number(t.lat)
                            };
                        });
                        k.polylineData[t] = [ h({
                            points: n
                        }, y) ], e.middle_point && e.middle_point.lat && (k.polylineMiddle[t] = {
                            latitude: e.middle_point.lat,
                            longitude: e.middle_point.lng
                        }), e.otherPoints && k.polylineData[t].push(h({
                            points: e.otherPoints
                        }, y));
                    },
                    setStationPoint: function(t) {
                        var e = k.metroData[t];
                        k.stationPoint[t] = e.metros.map(function(t, e) {
                            return {
                                id: e,
                                iconPath: "https://imgcdn.huanjutang.com/assets/img/2020724168488081.png",
                                longitude: Number(t.lng),
                                latitude: Number(t.lat),
                                width: 6,
                                height: 6,
                                anchor: {
                                    x: .5,
                                    y: .5
                                }
                            };
                        });
                    },
                    setMetroLine: function() {
                        var t = d(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (k.metroData[e]) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 3:
                                    this.tabParams.metro = e, k.polylineData[e] || this.setPolylineData(e), this.polyline = k.polylineData[e], 
                                    this.latitude = k.polylineMiddle[e].latitude, this.longitude = k.polylineMiddle[e].longitude, 
                                    k.stationPoint[e] || this.setStationPoint(e), this.markers = k.stationPoint[e];

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    regionChange: function(t) {
                        t.causedBy && k.regionChange && k.regionChange();
                    },
                    stationMarkerStatus: function(t, e) {
                        var n = this.markers.findIndex(function(e) {
                            return e.id === t;
                        }), r = this.markers[n];
                        r.label.bgColor = e, this.$set(this.markers, n, r);
                    },
                    stationTap: function() {
                        var t = d(r.default.mark(function t(e, n) {
                            var a;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!k.station[n.id]) {
                                        t.next = 6;
                                        break;
                                    }
                                    if (!((a = this.selectedStation.findIndex(function(t) {
                                        return t.id === n.id;
                                    })) < 0)) {
                                        t.next = 4;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 4:
                                    return this.handleDeleteStation(a, n.id, e), t.abrupt("return");

                                  case 6:
                                    this.setMarkerType(n, 15), k.station[n.id] = !0, this.stationMarkerStatus(e, "#FF7D4F"), 
                                    this.selectedStation.push(h(h({}, n), {}, {
                                        markerId: e
                                    })), this.drawCircle(Number(n.lng), Number(n.lat), n.id);

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    markerTap: function(t) {
                        var e = this, n = t.detail.markerId, r = this.markerType, a = this.activeLine, i = k.metroData, o = i[a.index].metros[n];
                        if (2 === r) {
                            if (0 === i.length) return;
                            this.stationTap(n, o);
                        } else {
                            if (o && o.metro_name) return void this.stationTap(n, o);
                            setTimeout(function() {
                                e.goProjectDetail(n);
                            }, 10);
                        }
                    },
                    drawCircle: function(t, e, n) {
                        var r = {
                            latitude: e,
                            longitude: t,
                            color: "#2D8CF041",
                            fillColor: "#2D8CF02D",
                            strokeWidth: 1,
                            radius: k.range,
                            id: n
                        };
                        this.circles.push(r);
                    },
                    setMarkerType: function() {
                        var t = d(r.default.mark(function t(e, n) {
                            var a, i, o, s;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    m(a = {}, 13, n - .001 * Math.random()), m(a, 15, n + .001 * Math.random()), i = a, 
                                    o = e.lng, s = e.lat, this.longitude = Number(o) || this.longitude, this.latitude = Number(s) || this.latitude, 
                                    this.scale = i[n];

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    goProjectDetail: function(e) {
                        var n = k.projectData.find(function(t) {
                            return Number(t.project_id) === Number(e);
                        });
                        n && t.navigateTo({
                            url: n.url
                        });
                    },
                    initMap: function() {
                        var e = this;
                        p.getGlobalConfig().then(function(n) {
                            n.city_info && (k.mapContext = t.createMapContext("map", e), e.longitude = n.city_info.x_axis, 
                            e.latitude = n.city_info.y_axis, k.cityInfo = n.city_info);
                        });
                    },
                    loadData: function() {
                        this.loading = !0, this.params = o.common.merge({}, this.tabParams), {
                            1: this.loadLine,
                            2: this.loadStation,
                            3: this.loadProject
                        }[this.markerType]();
                    },
                    loadLine: function() {
                        this.circles = [];
                        var t = this.activeLine.index;
                        this.setMetroLine(t);
                    },
                    loadStation: function() {
                        var t = this, e = this.activeLine.index, n = k.metroData[e];
                        n && (k.markerCopy[3][e] ? this.markers = k.markerCopy[3][e] : (this.params = o.common.merge(k.metroParam, this.params), 
                        k.metroLoading = !0, delete this.params.top_left, delete this.params.bottom_right, 
                        a.default.areaNumSearch(this.params).then(function(r) {
                            var a = r.data || [];
                            k.markerCopy[3][e] = n.metros.map(function(e, n) {
                                var r = a[e.id] ? "(".concat(a[e.id], ")") : "", i = "".concat(e.metro_name).concat(r), o = a[e.id] ? -(13 * i.length - 20 + 13) / 2 : -(13 * i.length + 20) / 2;
                                return h(h({
                                    id: n,
                                    actId: e.id,
                                    longitude: Number(e.lng),
                                    latitude: Number(e.lat),
                                    name: e.metro_name
                                }, b), {}, {
                                    label: h({
                                        content: i,
                                        bgColor: "#0074FF",
                                        anchorX: t.isAndroid ? o : 0
                                    }, v)
                                });
                            }), t.markers = k.markerCopy[3][e], k.metroLoading = !1;
                        })));
                    },
                    loadProject: function() {
                        var t = this, e = this.activeLine.index;
                        k.markerCopy[1][e] ? this.markers = this.markers.concat(k.markerCopy[1][e]) : (this.params = o.common.merge(k.projectParam, this.params), 
                        k.projectLoading = !0, a.default.searchProjectMap(this.params).then(function(n) {
                            k.projectLoading = !1, n.data && n.data.data && (k.projectData = n.data.data, t.mapProjectData(e));
                        }));
                    },
                    mapProjectData: function(t) {
                        k.markerCopy[1][t] = k.projectData.map(function(t) {
                            return {
                                id: Number(t.project_id),
                                name: t.name,
                                type: "project",
                                iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191026358081.png",
                                longitude: Number(t.lng),
                                latitude: Number(t.lat),
                                callout: {
                                    content: " ".concat(t.name, " "),
                                    fontSize: 13,
                                    color: "#000000d9",
                                    borderColor: "#00000029",
                                    bgColor: "#fff",
                                    borderWidth: 1,
                                    display: "ALWAYS",
                                    textAlign: "center",
                                    padding: 8,
                                    borderRadius: 40
                                },
                                width: 0,
                                height: 0,
                                zIndex: 99,
                                alpha: .9
                            };
                        }), this.markers = this.markers.concat(k.markerCopy[1][t]);
                    },
                    mapMarkerType: function() {
                        var t = d(r.default.mark(function t() {
                            var e, n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.getScale();

                                  case 2:
                                    e = t.sent, (n = e <= 11 ? 1 : e <= 13 ? 2 : 3) !== this.markerType && (this.markerType = n, 
                                    this.loadData());

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getScale: function() {
                        return new Promise(function(t) {
                            k && k.mapContext && k.mapContext.getScale({
                                success: function(e) {
                                    t(e.scale);
                                }
                            });
                        });
                    },
                    getRectLocation: function() {
                        return new Promise(function(t) {
                            k.mapContext && k.mapContext.getRegion({
                                success: function(e) {
                                    t({
                                        southwest: {
                                            latitude: e.northeast.latitude,
                                            longitude: e.southwest.longitude
                                        },
                                        northeast: {
                                            latitude: e.southwest.latitude,
                                            longitude: e.northeast.longitude
                                        }
                                    });
                                }
                            });
                        });
                    },
                    delay: function(t) {
                        return new Promise(function(e) {
                            setTimeout(function() {
                                e();
                            }, t);
                        });
                    },
                    mapBorder: function(t) {
                        return t.split(";").map(function(t) {
                            var e = u(t.split(","), 2), n = e[0], r = e[1];
                            return {
                                latitude: Number(n),
                                longitude: Number(r)
                            };
                        });
                    },
                    setMetroData: function(t) {
                        this.metroData = Object.keys(t).map(function(e) {
                            return {
                                id: t[e].id,
                                name: t[e].name,
                                index: e
                            };
                        }), this.activeLine = {
                            id: this.metroData[0].id,
                            index: this.metroData[0].index
                        }, this.setMetroLine(this.metroData[0].index);
                    },
                    mapMetroData: function(t) {
                        var e = this, n = {};
                        t.forEach(function(t) {
                            var r = u(t.points.split("|"), 2), a = r[0], i = r[1];
                            n[t.code] = {
                                metros: t.metros,
                                id: t.id,
                                name: t.name,
                                middle_point: t.middle_point,
                                points: t.points ? e.mapBorder(a) : null
                            }, i && (n[t.code].otherPoints = e.mapBorder(i));
                        }), k.metroData = n, o.cache.set("metro_line", n);
                    },
                    getMetroLine: function() {
                        var t = d(r.default.mark(function t() {
                            var e, n = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    (e = o.cache.get("metro_line")) && (k.metroData = e, this.setMetroData(e)), a.default.metroLine().then(function(t) {
                                        n.mapMetroData(t.data), n.setMetroData(k.metroData);
                                    });

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getRange: function() {
                        var t = d(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    (e = o.cache.get("station_range")) && (k.range = e), a.default.mapSetting().then(function(t) {
                                        if (t.data && t.data.metro_distance) {
                                            var e = 1e3 * Number(t.data.metro_distance);
                                            o.cache.set("station_range", e), k.range = e;
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                },
                onLoad: function() {
                    var t = d(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                k.regionChange = o.common.debounce(this.mapMarkerType, 300), o.cache.get("subway_flag") || (this.showGuide = !0, 
                                o.cache.set("subway_flag", !0)), this.initMap(), this.getMetroLine(), this.getRange();

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }()
            };
            e.default = D;
        }).call(this, n("543d").default);
    }
}, [ [ "0395", "common/runtime", "common/vendor" ] ] ]);