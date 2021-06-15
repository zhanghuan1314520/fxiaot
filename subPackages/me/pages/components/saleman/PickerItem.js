require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/saleman/PickerItem" ], {
    1023: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("16b6"), i = n("21dd7");
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("6625");
        var u = n("f0c5"), r = Object(u.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    "16b6": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    "21dd7": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("89eb"), i = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    },
    "2aa5": function(e, t, n) {},
    6625: function(e, t, n) {
        "use strict";
        var a = n("2aa5");
        n.n(a).a;
    },
    "89eb": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            props: {
                options: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                value: {
                    type: [ String, Number ],
                    default: function() {
                        return "";
                    }
                },
                label: {
                    type: String,
                    default: ""
                },
                tip: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    newVal: "",
                    pickerVal: [],
                    visible: !1
                };
            },
            computed: {
                realVal: function() {
                    var e = this;
                    return this.options.find(function(t, n) {
                        return e.pickerVal[0] === n;
                    }) ? this.options.find(function(t, n) {
                        return e.pickerVal[0] === n;
                    }).value : "";
                },
                showName: function() {
                    var e = this;
                    return this.options.find(function(t, n) {
                        return e.pickerVal[0] === n;
                    }) ? this.options.find(function(t, n) {
                        return e.pickerVal[0] === n;
                    }).label : "请选择";
                }
            },
            watch: {
                value: {
                    handler: function(e) {
                        var t = this;
                        this.newVal = e, this.options.forEach(function(e, n) {
                            t.newVal === e.value && (t.pickerVal = [ n ]);
                        });
                    },
                    immediate: !0
                }
            },
            methods: {
                handleChange: function(e) {
                    this.pickerVal = e.detail.value, this.$emit("update:value", this.realVal);
                },
                handlecCancel: function() {
                    this.visible = !1;
                },
                handleComplete: function() {
                    if (this.realVal) this.$emit("update:value", this.realVal); else {
                        var e = this.options.find(function(e, t) {
                            return 0 === t;
                        }).value;
                        this.$emit("update:value", e), this.pickerVal = [ e ];
                    }
                    this.visible = !1;
                },
                onTap: function() {
                    this.disabled || (this.visible = !0);
                }
            }
        };
        t.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/saleman/PickerItem-create-component", {
    "subPackages/me/pages/components/saleman/PickerItem-create-component": function(e, t, n) {
        n("543d").createComponent(n("1023"));
    }
}, [ [ "subPackages/me/pages/components/saleman/PickerItem-create-component" ] ] ]);