require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/UploadBtn" ], {
    "17df": function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n("d4a6"), o = n.n(e);
        for (var c in e) "default" !== c && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(c);
        a.default = o.a;
    },
    "40a7": function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n("ac8f"), o = n("17df");
        for (var c in o) "default" !== c && function(t) {
            n.d(a, t, function() {
                return o[t];
            });
        }(c);
        n("d1c1");
        var u = n("f0c5"), i = Object(u.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        a.default = i.exports;
    },
    ac8f: function(t, a, n) {
        "use strict";
        var e = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(a, "b", function() {
            return e;
        }), n.d(a, "c", function() {
            return o;
        }), n.d(a, "a", function() {});
    },
    d1c1: function(t, a, n) {
        "use strict";
        var e = n("ed8b");
        n.n(e).a;
    },
    d4a6: function(t, a, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var e = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("4ec3")), o = {
                props: {
                    show: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        uploadImage: "https://imgcdn.huanjutang.com/file/2020/10/11/8747b7fb85273d38e788b1b4d82a33ad.png",
                        isSaleMan: !1,
                        canUpload: !1
                    };
                },
                methods: {
                    loadIsSalesMan: function() {
                        var t = this;
                        e.default.isSaleMan().then(function(a) {
                            if (0 === a.code) {
                                var n = 0 !== a.sales_man_id;
                                t.isSaleMan = n, n && t.uploadStatus();
                            }
                        });
                    },
                    uploadStatus: function() {
                        var t = this;
                        e.default.activity.uploadStatus({
                            promotion_id: 4
                        }).then(function(a) {
                            t.canUpload = a.data && 0 === a.data.status;
                        });
                    },
                    toUpload: function() {
                        t.navigateTo({
                            url: "/subPackages/discovery/pages/videoEdit?isActivity=true"
                        });
                    }
                }
            };
            a.default = o;
        }).call(this, n("543d").default);
    },
    ed8b: function(t, a, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/UploadBtn-create-component", {
    "subPackages/activity/components/UploadBtn-create-component": function(t, a, n) {
        n("543d").createComponent(n("40a7"));
    }
}, [ [ "subPackages/activity/components/UploadBtn-create-component" ] ] ]);