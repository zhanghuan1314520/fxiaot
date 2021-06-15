require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/mapLookHouse" ], {
    "1f04": function(t, e, r) {
        "use strict";
        r.r(e);
        var a = r("3b11"), n = r("b3b7");
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r("d036"), r("e516");
        var s = r("f0c5"), o = Object(s.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "3b11": function(t, e, r) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, n = [];
        r.d(e, "b", function() {
            return a;
        }), r.d(e, "c", function() {
            return n;
        }), r.d(e, "a", function() {});
    },
    7528: function(t, e, r) {},
    "8a94": function(t, e, r) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r("6cdc"), e(r("66fd")), t(e(r("1f04")).default);
        }).call(this, r("543d").createPage);
    },
    b3b7: function(t, e, r) {
        "use strict";
        r.r(e);
        var a = r("ecd6"), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    d036: function(t, e, r) {
        "use strict";
        var a = r("7528");
        r.n(a).a;
    },
    e354: function(t, e, r) {},
    e516: function(t, e, r) {
        "use strict";
        var a = r("e354");
        r.n(a).a;
    },
    ecd6: function(t, e, r) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(r("a34a")), n = c(r("4ec3")), i = r("2f62"), s = r("b628"), o = c(r("ac87"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, r, a, n, i, s) {
                try {
                    var o = t[i](s), c = o.value;
                } catch (t) {
                    return void r(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, n);
            }
            function l(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(a, n) {
                        var i = t.apply(e, r);
                        function s(t) {
                            u(i, a, n, s, o, "next", t);
                        }
                        function o(t) {
                            u(i, a, n, s, o, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var r = [], a = !0, n = !1, i = void 0;
                        try {
                            for (var s, o = t[Symbol.iterator](); !(a = (s = o.next()).done) && (r.push(s.value), 
                            !e || r.length !== e); a = !0) ;
                        } catch (t) {
                            n = !0, i = t;
                        } finally {
                            try {
                                a || null == o.return || o.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return r;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return h(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
                return a;
            }
            function m(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, a);
                }
                return r;
            }
            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(r), !0).forEach(function(e) {
                        f(t, e, r[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    });
                }
                return t;
            }
            function f(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t;
            }
            var b = r("f4fd"), g = {
                property_type: 10
            }, y = {
                mapContext: null,
                districtData: [],
                bussinessData: [],
                projectData: [],
                projectId: "",
                cityInfo: {},
                centerInfo: {},
                dragRegionChange: null,
                scaleRegionChange: null,
                districtParam: p(p({}, g), {}, {
                    aggs_type: "district_id"
                }),
                bussinessParam: p(p({}, g), {}, {
                    aggs_type: "biz_circle_id"
                }),
                projectParam: p({
                    size: 100
                }, g),
                metroParam: p(p({}, g), {}, {
                    aggs_type: "city_metro_id"
                }),
                markerCopy: {
                    metroPoint: [],
                    area: [],
                    project: [],
                    metro: {}
                },
                circleBorder: null,
                areaBorder: null,
                metroData: null,
                metroLineData: null,
                range: 0,
                lockRegion: !0,
                locationMarker: [],
                station: {},
                area: {},
                circle: {},
                prevParam: {
                    metro: -1
                },
                lineData: {},
                project: {}
            }, k = JSON.parse(JSON.stringify(y)), v = 11, x = 15, _ = {
                components: {
                    BaseFilters: function() {
                        r.e("components/BaseFilters/Index").then(function() {
                            return resolve(r("9a4c"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    ShareButton: function() {
                        r.e("subPackages/project/components/BaseShareBtn").then(function() {
                            return resolve(r("4b9f"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                mixins: [ o.default ],
                data: function() {
                    return {
                        filterTabParam: {},
                        mapLookTap: "",
                        markers: [],
                        longitude: "",
                        latitude: "",
                        scale: v,
                        markerType: 1,
                        loadType: 1,
                        mapHeight: 0,
                        params: {},
                        filterParams: {},
                        otherParams: {},
                        tabParams: {},
                        includePoints: [],
                        polygons: [],
                        polyline: [],
                        circles: [],
                        loading: !1
                    };
                },
                computed: p({
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                }, (0, i.mapState)({
                    enableShare: function(t) {
                        return t.system.enableShare;
                    }
                })),
                destroyed: function() {
                    Object.keys(y).forEach(function(t) {
                        y[t] = k[t];
                    }), y.station = {}, y.lineData = {}, y.project = {}, y.markerCopy = {
                        metroPoint: [],
                        area: [],
                        project: [],
                        metro: {}
                    };
                },
                methods: {
                    hiddenFilterHandle: function() {
                        this.tabbarListIndex = -1;
                    },
                    onFilterReset: function() {
                        this.resetFilters(), this.initFilterData(), this.polyline = [], this.resetParam(), 
                        this.filterParams = {}, this.params = {}, this.markerType = 1, this.scale = v;
                        var t = y.cityInfo, e = t.x_axis, r = t.y_axis;
                        this.longitude = e, this.latitude = r, this.hiddenFilterHandle(), this.loadWithMarkerType();
                    },
                    findLocation: function(t, e) {
                        var r = d(e.toString().split(","), 1)[0], a = t.find(function(t) {
                            return Number(t.id) === Number(r);
                        });
                        return !!a && (this.longitude = Number(a.lng), this.latitude = Number(a.lat), !0);
                    },
                    setMetroLine: function(t, e) {
                        this.loadType = 2;
                        var r = {
                            color: "#0074FF",
                            width: 4
                        }, a = y.metroData[t];
                        if (a) {
                            e && a.middle_point && a.middle_point.lat && (this.latitude = a.middle_point.lat, 
                            this.longitude = a.middle_point.lng), this.polyline = [ p({
                                points: a.points
                            }, r) ], a.otherPoints && this.polyline.push(p({
                                points: a.otherPoints
                            }, r));
                            var n = a.metros.map(function(t) {
                                return {
                                    id: t.id,
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
                            y.markerCopy.metroPoint = n;
                        }
                    },
                    resetParam: function() {
                        this.loadType = 1, this.circles = [], this.polygons = [], this.includePoints = [], 
                        y.station = {}, y.circle = {}, y.area = {};
                    },
                    submitHandle: function() {
                        var t = l(a.default.mark(function t(e) {
                            var r, n, i, s, o, c, u, l, h, m, p, f, b, g, k, _, P, w, T, C, j = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.submitFilters(), t.next = 3, this.$nextTick();

                                  case 3:
                                    if (e.metro && (r = y.prevParam.metro !== e.metro), y.prevParam = e, this.resetParam(), 
                                    !r && e.metro || (this.polyline = []), this.hiddenFilterHandle(), y.lockRegion = !0, 
                                    i = JSON.parse(JSON.stringify(e)), (s = Object.keys(i)) && s.forEach(function(t) {
                                        "" === e[t] && delete i[t];
                                    }), 0 === Object.keys(i).length && (this.markerType = 1, this.scale = v, this.polygons = []), 
                                    i.locations && (o = i.locations.split(";"), c = o[o.length - 1], u = c.split(","), 
                                    l = d(u, 2), h = l[0], m = l[1], this.longitude = h, this.latitude = m), i.biz_circle_id ? this.drawPolygon(i.biz_circle_id, "circle_border") : i.district_id && (n = this.findLocation(y.districtData, i.district_id), 
                                    this.drawPolygon(i.district_id, "area_border")), this.filterParams = i, p = i.district_id, 
                                    f = i.biz_circle_id, b = i.rangeType, g = i.range, k = i.metro, !g && !f) {
                                        t.next = 28;
                                        break;
                                    }
                                    if (this.markerType = 3, this.scale = x, !g) {
                                        t.next = 26;
                                        break;
                                    }
                                    return t.next = 23, this.setCenter();

                                  case 23:
                                    this.scale = x, _ = y.centerInfo, P = _.x_axis, w = _.y_axis, this.drawCircle(Number(P), Number(w), 1e3 * Number(g));

                                  case 26:
                                    t.next = 29;
                                    break;

                                  case 28:
                                    !1 === n && (this.markerType = 1, this.scale = 10.9999, delete this.filterParams.district_id);

                                  case 29:
                                    return (b || k) && (this.loadType = 2), k && (y.lineData[k] = !1, y.project[k] = !1), 
                                    "subway" === b ? (this.markerType = 3, this.scale = x, this.setMetroLine(k), i.stationId && ((T = i.stationId.split(",")) && T.forEach(function(t) {
                                        y.station[t] = !0;
                                    }), (C = i.locations.split(";")) && C.forEach(function(t, e) {
                                        var r = d(t.split(","), 2), a = r[0], n = r[1];
                                        j.drawCircle(Number(a), Number(n), y.range, T[e]);
                                    }))) : k && !0 === r && (this.markerType = 1, this.scale = 10, this.setMetroLine(k, !0)), 
                                    p && !f && n && (this.markerType = 2, this.scale = 13), "" === p && (this.markerType = 1, 
                                    this.scale = 10.9999, delete this.filterParams.district_id), t.next = 36, this.loadWithMarkerType("scale");

                                  case 36:
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
                        var e = t.type, r = t.causedBy;
                        if ("end" === e) {
                            var a = function() {
                                return {};
                            }, n = {
                                drag: y.scaleRegionChange || a,
                                scale: y.scaleRegionChange || a
                            };
                            if (n[r]) {
                                var i = n[r](t);
                                "drag" === r && (delete this.filterParams.district_id, delete this.filterParams.locations, 
                                delete this.filterParams.biz_circle_id), i && i.then && i.then();
                            }
                        }
                    },
                    commonMarkerTap: function() {
                        var t = l(a.default.mark(function t(e) {
                            var r, n, i, s, o, c = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (r = this.markerType, n = y.districtData, i = y.bussinessData, 1 !== r) {
                                        t.next = 12;
                                        break;
                                    }
                                    if (s = n[e]) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 6:
                                    this.setMarkerType(s, 13, 2), this.filterParams.district_id = s && s.id, this.drawPolygon(s.id, "area_border"), 
                                    this.setCheckedArea(), t.next = 24;
                                    break;

                                  case 12:
                                    if (2 !== r) {
                                        t.next = 22;
                                        break;
                                    }
                                    if (0 !== i.length) {
                                        t.next = 15;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 15:
                                    o = i[e], this.setMarkerType(o, x, 3), this.filterParams.biz_circle_id = o && o.id, 
                                    this.drawPolygon(o.id, "circle_border"), this.setCheckedCircle(), t.next = 24;
                                    break;

                                  case 22:
                                    return setTimeout(function() {
                                        y.projectId = e, c.goProjectDetail();
                                    }, 10), t.abrupt("return");

                                  case 24:
                                    return t.next = 26, this.loadWithMarkerType("scale");

                                  case 26:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    setCheckedStation: function() {
                        var t = this.trainTubeList.data, e = "", r = "", a = 0, n = t.map(function(t) {
                            return !0 === y.station[t.id] && (e += t.id, r += t.value, a += 1), p(p({}, t), {}, {
                                isChecked: !0 === y.station[t.id]
                            });
                        });
                        this.$set(this.tabbarList[0], "isSelected", !0), this.$set(this.tabbarList[0], "selectedLen", a), 
                        this.$refs.baseFilters.setParams("areaFilter", {
                            stationId: e,
                            locations: r,
                            rangeType: "subway",
                            metro: this.filterParams.metro
                        }), this.setTrainTubeListHandler(n);
                    },
                    setCheckedCircle: function() {
                        var t = this.bizCircleList.data, e = "", r = "", a = 0, n = t.map(function(t) {
                            return !0 === y.circle[t.value] && (e += t.value, r += t.locations, a += 1), p(p({}, t), {}, {
                                isChecked: !0 === y.circle[t.value]
                            });
                        });
                        this.$set(this.tabbarList[0], "isSelected", !0), this.$set(this.tabbarList[0], "selectedLen", a), 
                        this.$refs.baseFilters.setParams("areaFilter", {
                            biz_circle_id: e,
                            locations: r
                        }), this.setBizCircleListHandler(n);
                    },
                    setCheckedArea: function() {
                        var t = this.townList.data, e = t.findIndex(function(t) {
                            return !0 === y.area[t.value];
                        });
                        e > -1 && (this.setTownListIndexHandler(e), this.$set(this.tabbarList[0], "isSelected", !0), 
                        this.$set(this.tabbarList[0], "selectedLen", 1), this.$refs.baseFilters.setParams("areaFilter", {
                            district_id: t[e].value
                        }));
                    },
                    stationTap: function() {
                        var t = l(a.default.mark(function t(e) {
                            var r;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!y.station[e.id]) {
                                        t.next = 10;
                                        break;
                                    }
                                    if (y.station[e.id] = "", this.setMarkerType(e, x, 3), this.setCheckedStation(), 
                                    !((r = this.circles.findIndex(function(t) {
                                        return Number(t.id) === Number(e.id);
                                    })) < 0)) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 7:
                                    return this.circles.splice(r, 1), this.loadWithMarkerType(), t.abrupt("return");

                                  case 10:
                                    return this.setMarkerType(e, x, 3), y.station[e.id] = !0, this.setCheckedStation(), 
                                    this.drawCircle(Number(e.lng), Number(e.lat), y.range, e.id), t.next = 16, this.loadWithMarkerType();

                                  case 16:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    metroMarkerTap: function(t) {
                        var e = this, r = this.markerType, a = y.metroData, n = this.filterParams.metro, i = y.metroData[n].metros[t];
                        if (2 === r) {
                            if (0 === a.length) return;
                            this.stationTap(i);
                        } else {
                            if (i && i.metro_name) return void this.stationTap(i);
                            setTimeout(function() {
                                y.projectId = t, e.goProjectDetail();
                            }, 10);
                        }
                    },
                    drawCircle: function(t, e, r, a) {
                        var n = {
                            latitude: e,
                            longitude: t,
                            color: "#2D8CF041",
                            fillColor: "#2D8CF02D",
                            strokeWidth: 1,
                            radius: r,
                            id: a
                        };
                        this.circles.push(n);
                    },
                    markerTap: function(t) {
                        var e = t.detail.markerId;
                        y.lockRegion = !0, this.includePoints = [], 2 === this.loadType ? this.metroMarkerTap(e) : this.commonMarkerTap(e);
                    },
                    setMarkerType: function() {
                        var t = l(a.default.mark(function t(e, r, n) {
                            var i, s, o, c;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    f(i = {}, 13, r - .001 * Math.random()), f(i, x, r + .001 * Math.random()), s = i, 
                                    o = e.lng, c = e.lat, this.longitude = Number(o) || this.longitude, this.latitude = Number(c) || this.latitude, 
                                    this.scale = s[r], this.markerType = n;

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, r, a) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    drawPolygon: function(t, e) {
                        var r = this;
                        y.circle = {}, y.area = {};
                        var a = s.cache.get(e), n = {
                            strokeWidth: 2,
                            strokeColor: "#2D8CF041",
                            fillColor: "#2D8CF02D"
                        }, i = t.toString().split(","), o = [];
                        i && i.forEach(function(t) {
                            a[t] && a[t].border && (o.push(p({
                                points: a[t].border
                            }, n)), r.setLabelColor(t, e));
                        }), this.polygons = o;
                    },
                    setLabelColor: function(t, e) {
                        ({
                            circle_border: y.circle,
                            area_border: y.area
                        })[e][t] = !0;
                    },
                    goProjectDetail: function() {
                        var e = y.projectData, r = y.projectId, a = e.find(function(t) {
                            return Number(t.project_id) === Number(r);
                        });
                        a && t.navigateTo({
                            url: a.url
                        });
                    },
                    setCenter: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r, n, i, s, o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, this.getLocation();

                                  case 3:
                                    e = t.sent, r = e.longitude, n = e.latitude, this.longitude = r, this.latitude = n, 
                                    y.centerInfo = {
                                        x_axis: r,
                                        y_axis: n
                                    }, t.next = 16;
                                    break;

                                  case 11:
                                    t.prev = 11, t.t0 = t.catch(0), i = y.cityInfo, s = i.x_axis, o = i.y_axis, this.longitude = s, 
                                    this.latitude = o;

                                  case 16:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 0, 11 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    init: function() {
                        var e = l(a.default.mark(function e() {
                            var r, n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, b.getGlobalConfig();

                                  case 2:
                                    r = e.sent, n = r.city_info, y.mapContext = t.createMapContext("map"), this.longitude = n.x_axis, 
                                    this.latitude = n.y_axis, y.cityInfo = n, this.loadWithMarkerType().then(), this.initChangeHandler();

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    paintMetroProject: function(t, e) {
                        var r = this.filterParams.metro, a = y.station;
                        if (y.metroData[r]) {
                            var n = y.markerCopy.metro[r].map(function(t) {
                                return p(p({}, t), {}, {
                                    label: p(p({}, t.label), {}, {
                                        bgColor: a[t.actId] ? "#FF7D4F" : "#0074FF"
                                    })
                                });
                            });
                            y.markerCopy.metro[r] = n, this.markers = e ? y.markerCopy.project.concat(n) : n;
                        }
                    },
                    paintMetro: function() {
                        var t = l(a.default.mark(function t(e, r) {
                            var i, s, o, c, u, l, d;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return delete this.params.top_left, delete this.params.bottom_right, delete this.params.locations, 
                                    delete this.params.stationId, t.next = 6, n.default.areaNumSearch(this.params);

                                  case 6:
                                    if (i = t.sent, s = i.data, y.metroLineData = i.data, o = this.filterParams.metro, 
                                    c = y.station, u = y.metroData, l = u[o]) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 14:
                                    y.lineData[o] = !0, d = l.metros.map(function(t, e) {
                                        var r = s[t.id] ? "(".concat(s[t.id], ")") : "", a = "".concat(t.metro_name).concat(r), n = s[t.id] ? -(13 * a.length - 20 + 13) / 2 : -(13 * a.length + 20) / 2;
                                        return {
                                            id: e,
                                            actId: t.id,
                                            iconPath: "https://imgcdn.huanjutang.com/assets/img/2020724168488081.png",
                                            longitude: Number(t.lng),
                                            latitude: Number(t.lat),
                                            name: t.metro_name,
                                            width: 6,
                                            height: 6,
                                            anchor: {
                                                x: .5,
                                                y: .5
                                            },
                                            label: {
                                                content: a,
                                                fontSize: 13,
                                                bgColor: c[t.id] ? "#FF7D4F" : "#0074FF",
                                                color: "#FFF",
                                                display: "ALWAYS",
                                                textAlign: "center",
                                                padding: 10,
                                                anchorY: -46,
                                                anchorX: n,
                                                borderRadius: 30
                                            }
                                        };
                                    }), y.markerCopy.metro[o] = d, this.markers = r ? y.markerCopy.project.concat(d) : d;

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, r) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadWithMarkerType: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r, n, i, o, c, u = arguments;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e = u.length > 0 && void 0 !== u[0] ? u[0] : "scale", this.loading = !0, this.params = s.common.merge({}, this.filterParams, this.tabParams), 
                                    y.lockRegion = !0, this.params.locations || (this.params = s.common.merge(this.otherParams, this.params)), 
                                    r = this.markerType, n = this.filterParams.metro, 1 !== r) {
                                        t.next = 16;
                                        break;
                                    }
                                    if (2 !== this.loadType) {
                                        t.next = 11;
                                        break;
                                    }
                                    return this.markers = y.markerCopy.metroPoint, t.abrupt("return");

                                  case 11:
                                    return this.params = s.common.merge(y.districtParam, this.params), t.next = 14, 
                                    this.paintAreas(e);

                                  case 14:
                                    t.next = 54;
                                    break;

                                  case 16:
                                    if (2 !== r) {
                                        t.next = 31;
                                        break;
                                    }
                                    if (1 !== this.loadType) {
                                        t.next = 23;
                                        break;
                                    }
                                    return this.params = s.common.merge(y.bussinessParam, this.params, this.tabParams), 
                                    t.next = 21, this.paintCircles(e);

                                  case 21:
                                    t.next = 29;
                                    break;

                                  case 23:
                                    if (!y.lineData[n]) {
                                        t.next = 26;
                                        break;
                                    }
                                    return this.markers = y.markerCopy.metro[n], t.abrupt("return");

                                  case 26:
                                    return this.params = s.common.merge(y.metroParam, this.params, this.tabParams), 
                                    t.next = 29, this.paintMetro(e);

                                  case 29:
                                    t.next = 54;
                                    break;

                                  case 31:
                                    if (1 !== this.loadType) {
                                        t.next = 43;
                                        break;
                                    }
                                    return t.next = 34, this.delay(300);

                                  case 34:
                                    return t.next = 36, this.getRectLocation();

                                  case 36:
                                    return i = t.sent, o = i.southwest, c = i.northeast, this.otherParams = {
                                        top_left: "".concat(o.longitude, ",").concat(o.latitude),
                                        bottom_right: "".concat(c.longitude, ",").concat(c.latitude)
                                    }, this.params = s.common.merge(y.projectParam, this.params, this.otherParams, this.tabParams), 
                                    t.next = 43, this.paintProject(e);

                                  case 43:
                                    if (2 !== this.loadType) {
                                        t.next = 54;
                                        break;
                                    }
                                    if (y.project[n]) {
                                        t.next = 52;
                                        break;
                                    }
                                    return this.params = s.common.merge(y.projectParam, this.params, this.tabParams), 
                                    t.next = 48, this.paintProject(e);

                                  case 48:
                                    this.params = s.common.merge(y.metroParam, this.params, this.tabParams), this.paintMetro(e, !0), 
                                    t.next = 54;
                                    break;

                                  case 52:
                                    this.params = s.common.merge(y.metroParam, this.params, this.tabParams), this.paintMetroProject(e, !0);

                                  case 54:
                                    this.otherParams = {}, this.loading = !1;

                                  case 56:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    mapMarkerLabel: function(t, e) {
                        var r = [], a = [];
                        return t.forEach(function(t, n) {
                            if (Number(t.lng) && Number(t.lat) && r.push({
                                longitude: Number(t.lng),
                                latitude: Number(t.lat)
                            }), t.name) {
                                var i = y[e][t.id] ? "#FF7D4F" : "#fff", s = y[e][t.id] ? "#fff" : "#000000d9", o = " ".concat(t.name, " \n (").concat(t.count, ") ");
                                a.push({
                                    id: n,
                                    flag: t.id,
                                    name: t.name,
                                    iconPath: "https://imgcdn.huanjutang.com/assets/img/20205191026358081.png",
                                    longitude: Number(t.lng),
                                    latitude: Number(t.lat),
                                    label: {
                                        content: o,
                                        fontSize: 13,
                                        bgColor: i,
                                        color: s,
                                        display: "ALWAYS",
                                        textAlign: "center",
                                        borderWidth: 1,
                                        borderColor: "#00000029",
                                        padding: 15,
                                        borderRadius: 100,
                                        anchorX: -(13 * (t.name.length + 2) + 30) / 2
                                    },
                                    alpha: .95,
                                    width: 0,
                                    height: 0
                                });
                            }
                        }), a;
                    },
                    showToast: function() {
                        t.showToast({
                            title: "未找到楼盘，请更换筛选条件再试试",
                            icon: "none",
                            duration: 3e3
                        });
                    },
                    paintAreas: function() {
                        var t = l(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (1 === this.markerType) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return delete this.params.top_left, delete this.params.bottom_right, delete this.params.district_id, 
                                    delete this.params.biz_circle_id, t.next = 8, n.default.areaNumSearch(this.params);

                                  case 8:
                                    if (0 === (e = t.sent).code) {
                                        t.next = 11;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 11:
                                    return e.data && 0 !== e.data.length || this.showToast(), y.districtData = e.data, 
                                    y.districtData && (this.markers = this.mapMarkerLabel(y.districtData, "area")), 
                                    y.markerCopy.area = this.markers, t.next = 17, this.$nextTick();

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    arrayUnion: function(t, e) {
                        var r = this.markers, a = {};
                        return r.concat(t).reduce(function(t, r) {
                            return r[e] in a || t.push(r), a[r[e]] = !0, t;
                        }, []);
                    },
                    paintCircles: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r, i, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (2 === this.markerType) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return this.params.district_id && (e = 1), delete this.params.locations, delete this.params.top_left, 
                                    delete this.params.bottom_right, delete this.params.biz_circle_id, t.next = 9, n.default.areaNumSearch(this.params);

                                  case 9:
                                    if (0 === (r = t.sent).code) {
                                        t.next = 12;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 12:
                                    if (y.bussinessData = r.data || [], 0 !== r.data.length || 0 === Object.keys(y.area).length) {
                                        t.next = 19;
                                        break;
                                    }
                                    return this.markerType = 3, this.scale = x, t.next = 18, this.loadWithMarkerType();

                                  case 18:
                                    return t.abrupt("return");

                                  case 19:
                                    return 1 === e && (i = y.bussinessData[0], this.longitude = Number(i.lng), this.latitude = Number(i.lat)), 
                                    s = this.mapMarkerLabel(y.bussinessData, "circle"), this.markers = s, t.next = 24, 
                                    this.$nextTick();

                                  case 24:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    paintProject: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r, i, s, o, c, u, l, d;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (3 === this.markerType) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return delete this.params.city_metro_id, e = 0 === y.bussinessData.length && this.params.district_id, 
                                    (this.params.biz_circle_id || e) && (delete this.params.top_left, delete this.params.bottom_right), 
                                    r = p({}, this.params), i = y.cityInfo, s = i.x_axis, o = i.y_axis, r.range && (r.locations = "".concat(s, ",").concat(o), 
                                    delete r.top_left, delete r.bottom_right), 2 === this.loadType && (y.project[this.filterParams.metro] = !0), 
                                    t.next = 11, n.default.searchProjectMap(r);

                                  case 11:
                                    if (0 === (c = t.sent).code) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 14:
                                    return c.data && 0 === c.data.data.length && this.showToast(), y.projectData = c.data && c.data.data, 
                                    u = [], l = [], y.projectData && y.projectData.forEach(function(t) {
                                        Number(t.lng) && Number(t.lat) && u.push({
                                            longitude: Number(t.lng),
                                            latitude: Number(t.lat)
                                        }), t.name && l.push({
                                            id: Number(t.project_id),
                                            name: t.name,
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
                                        });
                                    }), !this.params.biz_circle_id && 0 !== y.bussinessData.length || 1 !== this.loadType || (d = y.projectData[0]) && (this.longitude = Number(d.lng), 
                                    this.latitude = Number(d.lat)), this.markers = l, y.markerCopy.project = this.markers, 
                                    t.next = 24, this.$nextTick();

                                  case 24:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    initChangeHandler: function() {
                        var t = this;
                        y.scaleRegionChange = s.common.debounce(function() {
                            var e = l(a.default.mark(function e(r) {
                                var n, i;
                                return a.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.getScale();

                                      case 2:
                                        if (n = e.sent, y.lockRegion = !0, i = 1, n < 7 ? t.markerType = 1 : i = n <= v ? 1 : n <= 13 ? 2 : 3, 
                                        "drag" !== r.causedBy && t.markerType === i) {
                                            e.next = 10;
                                            break;
                                        }
                                        return t.markerType = i, e.next = 10, t.loadWithMarkerType();

                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }(), 300);
                    },
                    getLocationHandle: function() {
                        var t = l(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.setCenter();

                                  case 2:
                                    return this.scale = x + .001 * Math.random(), this.markerType = 3, e = {
                                        latitude: Number(this.latitude),
                                        longitude: Number(this.longitude),
                                        color: "#2D8CF041",
                                        fillColor: "#2D8CF02D",
                                        strokeWidth: 1,
                                        radius: 1e3,
                                        id: "location"
                                    }, this.circles = [], this.circles.findIndex(function(t) {
                                        return "location" === t.id;
                                    }) < 0 && this.circles.push(e), t.next = 10, this.$nextTick();

                                  case 10:
                                    return t.next = 12, this.loadWithMarkerType();

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getLocation: function() {
                        return new Promise(function(e, r) {
                            t.getLocation({
                                type: "gcj02",
                                success: function(t) {
                                    e(t);
                                },
                                fail: function() {
                                    r(new Error("getLocation Permission defined"));
                                }
                            });
                        });
                    },
                    getScale: function() {
                        return new Promise(function(t) {
                            y && y.mapContext && y.mapContext.getScale({
                                success: function(e) {
                                    t(e.scale);
                                }
                            });
                        });
                    },
                    getRectLocation: function() {
                        return new Promise(function(t) {
                            y.mapContext && y.mapContext.getRegion({
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
                            var e = d(t.split(","), 2), r = e[0], a = e[1];
                            return {
                                latitude: Number(r),
                                longitude: Number(a)
                            };
                        });
                    },
                    mapMetroData: function(t) {
                        var e = this, r = {};
                        t && t.forEach(function(t) {
                            var a = d(t.points.split("|"), 2), n = a[0], i = a[1];
                            r[t.code] = {
                                metros: t.metros,
                                id: t.id,
                                name: t.name,
                                middle_point: t.middle_point,
                                points: n ? e.mapBorder(n) : null
                            }, i && (r[t.code].otherPoints = e.mapBorder(i));
                        }), y.metroData = r, s.cache.set("metro_line", r);
                    },
                    asyncGetMetro: function() {
                        var t = this;
                        n.default.metroLine().then(function(e) {
                            t.mapMetroData(e.data);
                        });
                    },
                    getMetroLine: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(e = s.cache.get("metro_line"))) {
                                        t.next = 5;
                                        break;
                                    }
                                    return y.metroData = e, this.asyncGetMetro(), t.abrupt("return");

                                  case 5:
                                    return t.next = 7, n.default.metroLine();

                                  case 7:
                                    r = t.sent, this.mapMetroData(r.data);

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    setBorderData: function(t) {
                        var e = this, r = {}, a = {};
                        t && t.forEach(function(t) {
                            a[t.areaid] = {
                                area: t.area,
                                border: t.border ? e.mapBorder(t.border) : null
                            }, t.biz_circles && t.biz_circles.forEach(function(t) {
                                r[t.id] = {
                                    name: t.name,
                                    border: t.border ? e.mapBorder(t.border) : null
                                };
                            });
                        }), s.cache.set("area_border", a), s.cache.set("circle_border", r), y.circleBorder = r, 
                        y.areaBorder = a;
                    },
                    asyncGetBorder: function() {
                        var t = this;
                        n.default.areas({
                            need_border: 1
                        }).then(function(e) {
                            t.setBorderData(e.data);
                        });
                    },
                    getBorder: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r, i;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e = s.cache.get("circle_border"), r = s.cache.get("area_border"), !e || !r) {
                                        t.next = 7;
                                        break;
                                    }
                                    return y.circleBorder = e, y.areaBorder = r, this.asyncGetBorder(), t.abrupt("return");

                                  case 7:
                                    return t.next = 9, n.default.areas({
                                        need_border: 1
                                    });

                                  case 9:
                                    i = t.sent, this.setBorderData(i.data);

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    asyncGetRange: function() {
                        var t = this;
                        n.default.mapSetting().then(function(e) {
                            t.setRange(e);
                        });
                    },
                    setRange: function(t) {
                        if (t.data && t.data.metro_distance) {
                            var e = 1e3 * Number(t.data.metro_distance);
                            s.cache.set("station_range", e), y.range = e;
                        }
                    },
                    getRange: function() {
                        var t = l(a.default.mark(function t() {
                            var e, r;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(e = s.cache.get("station_range"))) {
                                        t.next = 5;
                                        break;
                                    }
                                    return y.range = e, this.asyncGetRange(), t.abrupt("return");

                                  case 5:
                                    return t.next = 7, n.default.mapSetting();

                                  case 7:
                                    r = t.sent, this.setRange(r);

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    setCheckedMoreItem: function() {}
                },
                onShareAppMessage: function() {
                    return s.share.share("地图找房好方便，还能看预售在售，分享给你", "/subPackages/project/pages/mapLookHouse");
                },
                onLoad: function() {
                    var t = l(a.default.mark(function t(e) {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.getMetroLine();

                              case 2:
                                return t.next = 4, this.getBorder();

                              case 4:
                                return t.next = 6, this.getRange();

                              case 6:
                                e.tabType && (this.tabParams = {
                                    type: e.tabType
                                }, this.setCheckedMoreItem()), this.init();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }()
            };
            e.default = _;
        }).call(this, r("543d").default);
    }
}, [ [ "8a94", "common/runtime", "common/vendor", "subPackages/project/common/vendor" ] ] ]);