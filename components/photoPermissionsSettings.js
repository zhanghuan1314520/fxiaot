(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/photoPermissionsSettings" ], {
    "199b": function(t, n, e) {
        "use strict";
        var o = e("b90c");
        e.n(o).a;
    },
    "372d": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("ff6f"), s = e("89bc");
        for (var i in s) "default" !== i && function(t) {
            e.d(n, t, function() {
                return s[t];
            });
        }(i);
        e("199b");
        var c = e("f0c5"), a = Object(c.a)(s.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = a.exports;
    },
    "89bc": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("a69c1"), s = e.n(o);
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        n.default = s.a;
    },
    a69c1: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            props: {
                showSetting: {
                    type: Boolean,
                    default: !1
                },
                permissionsCallback: {
                    type: Function,
                    default: null
                },
                txt: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    showPermissionsSetting: !1
                };
            },
            watch: {
                showSetting: function(t) {
                    this.showPermissionsSetting = t;
                }
            },
            methods: {
                closePemissions: function() {
                    this.showPermissionsSetting = !1, this.$emit("update:showSetting", !1);
                },
                openSetting: function(t) {
                    this.showPermissionsSetting = !1, this.$emit("update:showSetting", !1), t.detail.authSetting["scope.writePhotosAlbum"] && this.permissionsCallback && this.permissionsCallback.call(this.$parent);
                }
            }
        };
        n.default = o;
    },
    b90c: function(t, n, e) {},
    ff6f: function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, s = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return s;
        }), e.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/photoPermissionsSettings-create-component", {
    "components/photoPermissionsSettings-create-component": function(t, n, e) {
        e("543d").createComponent(e("372d"));
    }
}, [ [ "components/photoPermissionsSettings-create-component" ] ] ]);