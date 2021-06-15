require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BusiTabProjectDefault" ], {
    "37a5": function(e, t, a) {
        "use strict";
        var n = a("9d25");
        a.n(n).a;
    },
    "6ebe": function(e, t, a) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, o = [];
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
    },
    "7d51": function(e, t, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                components: {
                    BusiProjectDefault: function() {
                        Promise.all([ a.e("subPackages/pageLayout/common/vendor"), a.e("subPackages/pageLayout/pages/components/BusiProjectDefault") ]).then(function() {
                            return resolve(a("f87e"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiProjectVariant1: function() {
                        Promise.all([ a.e("subPackages/pageLayout/common/vendor"), a.e("subPackages/pageLayout/pages/components/BusiProjectVariant1") ]).then(function() {
                            return resolve(a("a4ba"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiProjectVariant2: function() {
                        Promise.all([ a.e("subPackages/pageLayout/common/vendor"), a.e("subPackages/pageLayout/pages/components/BusiProjectVariant2") ]).then(function() {
                            return resolve(a("21dd"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BusiProjectVariant3: function() {
                        Promise.all([ a.e("subPackages/pageLayout/common/vendor"), a.e("subPackages/pageLayout/pages/components/BusiProjectVariant3") ]).then(function() {
                            return resolve(a("1a32"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    BaseLayout: function() {
                        a.e("subPackages/pageLayout/pages/components/BaseLayout").then(function() {
                            return resolve(a("d956"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                mixins: [ function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }(a("88f3")).default ],
                props: {
                    settings: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    variant: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        activeIndex: 0,
                        projectSettings: {},
                        showProject: !0,
                        padding: {
                            left: "40rpx",
                            right: "40rpx"
                        }
                    };
                },
                watch: {
                    settings: {
                        handler: function() {
                            this.projectSettings = this.package(this.settings.tabs[0]);
                        },
                        immediate: !0
                    },
                    activeIndex: function(e) {
                        this.projectSettings = this.package(this.settings.tabs[e]);
                    }
                },
                methods: {
                    loadNext: function() {
                        var e = this.$refs["project_".concat(this.variant)];
                        e && e.loadNext();
                    },
                    package: function(e) {
                        return {
                            assocated_collection: e.link,
                            vertial_padding_right: "0",
                            vertial_padding_left: "0"
                        };
                    },
                    handleCheck: function(e) {
                        this.activeIndex = e;
                    },
                    to: function(t) {
                        switch ("".concat(t.data_from)) {
                          case "1":
                            e.navigateTo({
                                url: "/subPackages/project/pages/collectProjects?collection_id=".concat(t.data_uri)
                            });
                            break;

                          case "2":
                            t.data_url && e.navigateTo({
                                url: t.data_url
                            });
                            break;

                          case "3":
                            e.navigateTo({
                                url: "/pages/lotteryDetail?project_id=".concat(t.data_uri)
                            });
                        }
                    }
                }
            };
            t.default = n;
        }).call(this, a("543d").default);
    },
    "824e": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("7d51"), o = a.n(n);
        for (var c in n) "default" !== c && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(c);
        t.default = o.a;
    },
    "9d25": function(e, t, a) {},
    e3e5: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("6ebe"), o = a("824e");
        for (var c in o) "default" !== c && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(c);
        a("37a5");
        var u = a("f0c5"), s = Object(u.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BusiTabProjectDefault-create-component", {
    "subPackages/pageLayout/pages/components/BusiTabProjectDefault-create-component": function(e, t, a) {
        a("543d").createComponent(a("e3e5"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BusiTabProjectDefault-create-component" ] ] ]);