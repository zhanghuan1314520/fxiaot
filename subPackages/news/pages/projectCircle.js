require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/projectCircle" ], {
    "1f34": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("948f"), c = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = c.a;
    },
    "76bb": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f752"), c = n("1f34");
        for (var u in c) "default" !== u && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(u);
        n("7e26");
        var i = n("f0c5"), r = Object(i.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "7b1d": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("76bb")).default);
        }).call(this, n("543d").createPage);
    },
    "7e26": function(t, e, n) {
        "use strict";
        var o = n("9553");
        n.n(o).a;
    },
    "948f": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("4ec3")), c = {
                components: {
                    DiscoveryItem: function() {
                        n.e("subPackages/news/components/DiscoveryItem").then(function() {
                            return resolve(n("760a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    List: function() {
                        n.e("subPackages/news/components/List").then(function() {
                            return resolve(n("ca7e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Publish: function() {
                        n.e("subPackages/news/components/Publish").then(function() {
                            return resolve(n("210e"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        getList: o.default.discovery.getPostList,
                        project_id: "",
                        project_name: ""
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    this.project_id = e.project_id, e.project_name && (this.project_name = e.project_name, 
                    t.setNavigationBarTitle({
                        title: "".concat(e.project_name, "·房友圈")
                    })), this.$nextTick(function() {
                        n.load();
                    });
                },
                methods: {
                    load: function(t) {
                        this.$refs.list.load(t);
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    9553: function(t, e, n) {},
    f752: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    }
}, [ [ "7b1d", "common/runtime", "common/vendor" ] ] ]);