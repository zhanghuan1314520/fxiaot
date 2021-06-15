(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiColumn" ], {
    "0885": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("4ec3"));
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach(function(e) {
                    c(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var r = {
            components: {
                ImageLoader: function() {
                    n.e("components/ImageLoader").then(function() {
                        return resolve(n("24e0"));
                    }.bind(null, n)).catch(n.oe);
                },
                CustomNavigator: function() {
                    n.e("components/CustomNavigator").then(function() {
                        return resolve(n("5783"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                listData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {
                    activeIndex: 0,
                    collectionId: 0,
                    param: {
                        page: 1,
                        size: 10
                    },
                    loading: !0,
                    projectsList: new Array(3).fill({
                        skeletons: !0
                    })
                };
            },
            watch: {
                listData: {
                    handler: function() {
                        this.listData && this.listData.length > 0 && (this.collectionId = this.listData[0].collection_id, 
                        this.activeIndex = 0, this.param.page = 1, this.projectsList = [], this.loadProjects());
                    },
                    deep: !0,
                    immediate: !0
                },
                activeIndex: {
                    handler: function() {
                        this.projectsList = [], this.param = {
                            page: 1,
                            size: 10
                        }, this.collectionId = this.listData[this.activeIndex].collection_id, this.loadProjects();
                    }
                }
            },
            methods: {
                loadProjects: function() {
                    var t = this;
                    void 0 !== this.collectionId && (this.loading = !0, o.default.collections(this.collectionId, i(i({}, this.param), {}, {
                        is_banner: 1,
                        simple: 1
                    })).then(function(e) {
                        var n = e.data;
                        if (t.loading = !1, n) {
                            var o = t.param, a = o.page, i = o.size;
                            a >= Math.ceil(n.total / i) || a >= n.last_page ? t.more = !1 : (t.more = !0, t.param.page += 1), 
                            n.data = n.data.slice(0, 5), t.projectsList = t.projectsList.concat(n.data).filter(function(t) {
                                return !t.skeletons;
                            });
                        }
                    }));
                },
                navItemClickHandle: function(t) {
                    this.activeIndex = t;
                },
                handleClick: function() {}
            }
        };
        e.default = r;
    },
    "1d86b": function(t, e, n) {
        "use strict";
        var o = n("36c7");
        n.n(o).a;
    },
    "2b7f": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("0885"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "36c7": function(t, e, n) {},
    "8ee0": function(t, e, n) {
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
    cda84: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("8ee0"), a = n("2b7f");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("1d86b");
        var c = n("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiColumn-create-component", {
    "components/UILayout/BusiColumn-create-component": function(t, e, n) {
        n("543d").createComponent(n("cda84"));
    }
}, [ [ "components/UILayout/BusiColumn-create-component" ] ] ]);