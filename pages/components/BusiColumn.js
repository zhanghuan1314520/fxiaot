(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/BusiColumn" ], {
    "1dbb": function(t, e, n) {},
    "40c4": function(t, e, n) {
        "use strict";
        var i = n("1dbb");
        n.n(i).a;
    },
    a092: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("c0f7"), o = n("ca0d");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("40c4");
        var s = n("f0c5"), r = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = r.exports;
    },
    b59a: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(n("a34a")), o = a(n("4ec3"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, i, o, a, s) {
                try {
                    var r = t[a](s), c = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(c) : Promise.resolve(c).then(i, o);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, o) {
                        var a = t.apply(e, n);
                        function r(t) {
                            s(a, i, o, r, c, "next", t);
                        }
                        function c(t) {
                            s(a, i, o, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var c = {
                components: {
                    ProjectItem: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    marginTop: {
                        type: Number,
                        default: 0
                    },
                    dataApi: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    titleData: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        projects: [],
                        projectsAll: {},
                        recommendProject: [],
                        recommendProejectState: !1,
                        pageAll: {},
                        loadingAll: {},
                        moreAll: {},
                        collection_id: "",
                        swiperHieght: 0,
                        selIndex: 0,
                        activeIndex: 0,
                        selContIndex: 0,
                        oldSelContIndex: 0,
                        scrollTop: 0,
                        param: {
                            page: 1,
                            size: 10
                        },
                        loading: !1,
                        more: !1,
                        isRequsting: !1
                    };
                },
                watch: {
                    dataApi: {
                        handler: function() {
                            this.dataApi && this.dataApi.length > 0 && (this.collection_id = this.dataApi[0].collection_id, 
                            this.loadProjects());
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    reachBottom: function() {
                        this.moreAll[this.selIndex] && this.projectsAll[this.selIndex] && !this.isRequsting && this.loadProjects();
                    },
                    handleCheck: function(t) {
                        var e = this;
                        this.activeIndex = t, this.selContIndex = this.oldSelContIndex, this.$nextTick(function() {
                            e.selIndex = t, e.selContIndex = t;
                        });
                    },
                    clear: function() {},
                    loadProjects: function() {
                        var t = r(i.default.mark(function t() {
                            var e = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.recommendProejectState && 2 === this.dataApi[this.selIndex].request_uri_id || (this.isRequsting = !0, 
                                    o.default.collections(this.collection_id, this.param).then(function() {
                                        var t = r(i.default.mark(function t(n) {
                                            var o;
                                            return i.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    if (!(o = n.data) || void 0 !== o.total) {
                                                        t.next = 3;
                                                        break;
                                                    }
                                                    return t.abrupt("return");

                                                  case 3:
                                                    e.loadProjectsHandle(o);

                                                  case 4:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()).finally(function() {
                                        e.isRequsting = !1;
                                    }));

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadProjectsHandle: function(e, n) {
                        t.stopPullDownRefresh(), e && (this.param.page >= Math.ceil(e.total / this.param.size) || this.param.page >= e.last_page ? this.more = !1 : (this.more = !0, 
                        this.param.page += 1), this.projects = "recommend" === n ? this.projects.concat(e.list) : this.projects.concat(e.data)), 
                        this.more ? this.loading = !0 : this.loading = !1, this.addCache(), this.swiperHeightAuto();
                    },
                    swiperChange: function() {
                        var e = r(i.default.mark(function e(n) {
                            var o, a, s;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return o = n.detail.current, this.activeIndex = o, e.next = 4, this.$nextTick();

                                  case 4:
                                    a = this, t.createSelectorQuery().in(this).select(".column").boundingClientRect(function(e) {
                                        e && e.top < 40 && t.pageScrollTo({
                                            scrollTop: a.scrollTop - Math.abs(e.top) - 40,
                                            duration: 0
                                        });
                                    }).exec(), this.selIndex = o, this.oldSelContIndex = o, this.collection_id = this.dataApi[o].collection_id, 
                                    s = this.getCache(), this.projects = s.projects, 0 === s.projects.length ? (this.param.page = 1, 
                                    this.more = !0, this.loading = !0, this.loadProjects()) : (this.param.page = s.page, 
                                    this.more = s.more, this.loading = s.loading, this.swiperHeightAuto());

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    swiperHeightAuto: function() {
                        var e = this;
                        this.$nextTick(function() {
                            var n = e;
                            t.createSelectorQuery().in(e).select(".project".concat(e.selIndex)).boundingClientRect(function(t) {
                                t && (n.swiperHieght = "".concat(t.height < 450 ? 450 : t.height, "px"));
                            }).exec();
                        });
                    },
                    addCache: function() {
                        this.projectsAll[this.selIndex] = [].concat(this.projects), this.pageAll[this.selIndex] = this.param.page, 
                        this.loadingAll[this.selIndex] = this.loading, this.moreAll[this.selIndex] = this.more;
                    },
                    getCache: function() {
                        return {
                            projects: this.projectsAll[this.selIndex] || [],
                            page: this.pageAll[this.selIndex],
                            more: this.moreAll[this.selIndex],
                            loading: this.loadingAll[this.selIndex]
                        };
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    c0f7: function(t, e, n) {
        "use strict";
        var i = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return i;
        });
    },
    ca0d: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b59a"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/BusiColumn-create-component", {
    "pages/components/BusiColumn-create-component": function(t, e, n) {
        n("543d").createComponent(n("a092"));
    }
}, [ [ "pages/components/BusiColumn-create-component" ] ] ]);