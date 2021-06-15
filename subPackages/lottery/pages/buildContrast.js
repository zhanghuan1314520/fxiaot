require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/buildContrast" ], {
    3560: function(t, e, i) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("71fb")).default);
        }).call(this, i("543d").createPage);
    },
    "71fb": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("cd15"), a = i("e37b");
        for (var r in a) "default" !== r && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(r);
        i("ac68");
        var o = i("f0c5"), s = Object(o.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    },
    "983f": function(t, e, i) {},
    ac68: function(t, e, i) {
        "use strict";
        var n = i("983f");
        i.n(n).a;
    },
    b70f: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(i("a34a")), a = i("b628"), r = o(i("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            function l(t, e, i, n, a, r, o) {
                try {
                    var s = t[r](o), c = s.value;
                } catch (t) {
                    return void i(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a);
            }
            function d(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, a) {
                        var r = t.apply(e, i);
                        function o(t) {
                            l(r, n, a, o, s, "next", t);
                        }
                        function s(t) {
                            l(r, n, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var u, f = i("38fb"), h = function() {
                u.project_id.length = 0, u.buiding_id.length = 0, r.default.getContrastList(u.page, u.size).then(function(e) {
                    e.data.list.forEach(function(t) {
                        Math.floor(t.project_id) === Math.floor(u.on_project_id) ? (t.type = !0, -1 !== u.project_id.indexOf(t.project_id) && u.project_id.push(t.project_id), 
                        u.buiding_id.push(t.id)) : t.type = !1;
                    }), u.data_list = e.data, t.setStorageSync("data_list", e.data.list);
                });
            }, p = {
                data: function() {
                    return {
                        opt_type: !1,
                        page: 1,
                        page2: 2,
                        size: 10,
                        size2: 999,
                        data_list: {},
                        project_id: [],
                        buiding_id: [],
                        total: "",
                        all_page: "",
                        more: !0,
                        loging_type: !1,
                        on_project_id: "",
                        newList: [],
                        loading: !1,
                        len: 0
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("对比楼盘，让优缺无处可逃");
                },
                onReachBottom: function() {
                    var e = d(n.default.mark(function e() {
                        var i, a = this;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.more) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return e.next = 4, r.default.getContrastList(this.page2, this.size);

                              case 4:
                                i = e.sent, this.page2 >= this.all_page || !this.all_page ? this.more = !1 : this.page2 += 1, 
                                i.data.list.forEach(function(t, e) {
                                    try {
                                        Math.floor(a.newList[0].project_id) === Math.floor(t.project_id) && i.data.list.splice(e, 1);
                                    } catch (t) {
                                        console.error(t);
                                    }
                                }), this.data_list.list = this.data_list.list.concat(i.data.list), t.setStorageSync("data_list", this.data_list.list);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var e = d(n.default.mark(function e() {
                        var i, a, o = this;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.more = !0, this.project_id.length = 0, this.buiding_id.length = 0, this.page2 = 2, 
                                this.newList.length = 0, t.showLoading({
                                    title: "加载中"
                                }), e.next = 8, r.default.getContrastList(this.page, this.size2);

                              case 8:
                                i = e.sent, Object.keys(i.data.list).forEach(function(t) {
                                    var e = i.data.list[t];
                                    Math.floor(e.project_id) === Math.floor(o.on_project_id) ? (o.newList.push(e), o.project_id.push(e.project_id), 
                                    o.buiding_id.push(e.id), e.type = !0) : e.type = !1;
                                }), this.all_page = Math.ceil(Math.floor(i.data.total) / 10), i.data.list.length = 10, 
                                i.data.list.forEach(function(t, e) {
                                    try {
                                        Math.floor(o.newList[0].project_id) === Math.floor(t.project_id) && i.data.list.splice(e, 1);
                                    } catch (t) {
                                        console.error(t);
                                    }
                                }), this.data_list.list = [].concat(s(this.newList), s(i.data.list)), a = [], this.data_list.list.forEach(function(t) {
                                    t && a.push(t);
                                }), this.data_list.list = a, t.setStorageSync("data_list", this.data_list.list), 
                                this.loging_type = !0, t.stopPullDownRefresh(), t.hideLoading();

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onUnload: function() {
                    var t = d(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                u = null, f.removeListener("refreshBuildContrast", h);

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var e = d(n.default.mark(function e(i) {
                        var a, o = this;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.loading = !1, this.on_project_id = i.project_id, u = this, f.on("refreshBuildContrast", h), 
                                e.next = 6, r.default.addBuildings(this.on_project_id);

                              case 6:
                                return e.next = 8, r.default.getContrastList(this.page, this.size2);

                              case 8:
                                (a = e.sent).data.list.length > 10 ? (Object.keys(a.data.list).forEach(function(t) {
                                    var e = a.data.list[t];
                                    Math.floor(e.project_id) === Math.floor(o.on_project_id) ? (o.newList.push(e), o.project_id.push(e.project_id), 
                                    o.buiding_id.push(e.id), e.type = !0) : e.type = !1;
                                }), this.all_page = Math.ceil(Math.floor(a.data.total) / 10), a.data.list.length = 10, 
                                a.data.list.forEach(function(t, e) {
                                    Math.floor(o.newList[0].project_id) === Math.floor(t.project_id) && a.data.list.splice(e, 1);
                                }), this.data_list.list = [].concat(s(this.newList), s(a.data.list)), t.setStorageSync("data_list", this.data_list.list), 
                                this.loging_type = !0) : (Object.keys(a.data.list).forEach(function(t) {
                                    var e = a.data.list[t];
                                    Math.floor(e.project_id) === Math.floor(o.on_project_id) ? (o.newList.push(e), o.project_id.push(e.project_id), 
                                    o.buiding_id.push(e.id), e.type = !0) : e.type = !1;
                                }), this.all_page = Math.ceil(Math.floor(a.data.total) / 10), a.data.list.forEach(function(t, e) {
                                    Math.floor(o.newList[0].project_id) === Math.floor(t.project_id) && a.data.list.splice(e, 1);
                                }), this.data_list.list = [].concat(s(this.newList), s(a.data.list)), t.setStorageSync("data_list", this.data_list.list), 
                                this.loging_type = !0, this.loading = !0);

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                watch: {
                    project_id: function(e) {
                        e.length > 2 ? (t.showToast({
                            title: "只能选择两个楼盘",
                            duration: 1e3,
                            icon: "none"
                        }), this.len = 0) : this.len = e.length;
                    }
                },
                methods: {
                    compareBegan: function() {
                        2 === this.project_id.length && t.navigateTo({
                            url: "/subPackages/lottery/pages/contrastDetail?one_id=".concat(this.project_id[0], "&two_id=").concat(this.project_id[1])
                        });
                    },
                    delete_item: function() {
                        var e = d(n.default.mark(function e() {
                            var i, o, c = this;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!(this.project_id.length > 0)) {
                                        e.next = 16;
                                        break;
                                    }
                                    return e.next = 3, r.default.deleteBuilding(this.buiding_id.toString());

                                  case 3:
                                    return e.next = 5, r.default.getContrastList(this.page, this.size);

                                  case 5:
                                    (i = e.sent).data.list.forEach(function(t) {
                                        t.type = !1;
                                    }), o = (o = a.redis.get("refreshPkIconStatus")) ? new Set(o.split(",")) : new Set(), 
                                    Object.keys(this.project_id).forEach(function(t) {
                                        o.add(c.project_id[t]);
                                    }), a.redis.set("refreshPkIconStatus", s(o).toString(), 60), this.data_list = i.data, 
                                    this.project_id.length = 0, this.buiding_id.length = 0, this.project_id = [], t.setStorageSync("data_list", this.data_list.list);

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    opting: function(t, e) {
                        this.data_list.list[e].type = !this.data_list.list[e].type, this.project_id = this.data_list.list.filter(function(t) {
                            return t.type;
                        }).map(function(t) {
                            return t.project_id;
                        }), this.buiding_id = this.data_list.list.filter(function(t) {
                            return t.type;
                        }).map(function(t) {
                            return t.id;
                        });
                    },
                    addBuilding: function() {
                        t.navigateTo({
                            url: "/subPackages/lottery/pages/findBuilding?type=3"
                        });
                    }
                }
            };
            e.default = p;
        }).call(this, i("543d").default);
    },
    cd15: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.data_list.list && t.data_list.list.length ? t.__map(t.data_list.list, function(e, i) {
                return {
                    $orig: t.__get_orig(e),
                    g0: t.project_id.includes(e.project_id)
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, a = [];
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return a;
        }), i.d(e, "a", function() {});
    },
    e37b: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("b70f"), a = i.n(n);
        for (var r in n) "default" !== r && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = a.a;
    }
}, [ [ "3560", "common/runtime", "common/vendor" ] ] ]);