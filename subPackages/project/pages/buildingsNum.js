require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/buildingsNum" ], {
    "0fed": function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("45a8")).default);
        }).call(this, e("543d").createPage);
    },
    1237: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("975a"), r = e.n(i);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = r.a;
    },
    "45a8": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("f446"), r = e("1237");
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        e("8748");
        var a = e("f0c5"), o = Object(a.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = o.exports;
    },
    "570e": function(t, n, e) {},
    8748: function(t, n, e) {
        "use strict";
        var i = e("570e");
        e.n(i).a;
    },
    "975a": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = a(e("a34a")), r = a(e("4ec3")), u = e("b628");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, n, e, i, r, u, a) {
                try {
                    var o = t[u](a), c = o.value;
                } catch (t) {
                    return void e(t);
                }
                o.done ? n(c) : Promise.resolve(c).then(i, r);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(i, r) {
                        var u = t.apply(n, e);
                        function a(t) {
                            o(u, i, r, a, c, "next", t);
                        }
                        function c(t) {
                            o(u, i, r, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        background: [ "", "#d3f9ef", "#fde5e5", "#e0f8fa", "#f5f5f5" ],
                        color: [ "", "#16c295", "#f7776a", "#16a5af", "#666666" ],
                        scrollWidth: 0,
                        shareView: !1,
                        tab: 0,
                        id: "",
                        buildingUnit: [],
                        buildingFloor: [],
                        unitId: "",
                        title: ""
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("".concat(this.title, "楼盘的一房一价出炉，快来杭州房小团看看吧！"));
                },
                onPullDownRefresh: function() {
                    var t = c(i.default.mark(function t() {
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload.call(this);

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var n = c(i.default.mark(function n(e) {
                        var u, a, o;
                        return i.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return u = e.buildingNum, this.title = e.title, a = e.id, t.setNavigationBarTitle({
                                    title: u
                                }), n.next = 6, r.default.buildingUnit(a);

                              case 6:
                                return (o = n.sent) && o.data && (this.buildingUnit = o.data, this.unitId = this.buildingUnit[0] && this.buildingUnit[0].id, 
                                this.scrollWidth = 130 * this.buildingUnit.length), n.next = 10, this.reload.call(this);

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function(t) {
                        return n.apply(this, arguments);
                    };
                }(),
                methods: {
                    preview: function(n) {
                        t.previewImage({
                            url: [ n ]
                        });
                    },
                    switchTab: function() {
                        var t = c(i.default.mark(function t(n, e) {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.tab = n, this.unitId = e, t.next = 4, this.reload.call(this);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(n, e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = c(i.default.mark(function t() {
                            var n, e = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.buildingFloor(this.unitId);

                                  case 2:
                                    (n = t.sent) && n.data && n.data.forEach(function(t, i) {
                                        e.buildingFloor.push({
                                            key: i,
                                            data: n.data[i]
                                        });
                                    });

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var n = c(i.default.mark(function n() {
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.buildingFloor = [], n.next = 4, this.loadNext.call(this);

                                  case 4:
                                    t.stopPullDownRefresh(), t.hideLoading();

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = s;
        }).call(this, e("543d").default);
    },
    f446: function(t, n, e) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    }
}, [ [ "0fed", "common/runtime", "common/vendor" ] ] ]);