require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/saleman/BusiUploadDemo" ], {
    1666: function(e, t, n) {},
    "19b9": function(e, t, n) {
        "use strict";
        var a = n("1666");
        n.n(a).a;
    },
    "3ba51": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("931e"), o = n.n(a);
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        t.default = o.a;
    },
    8530: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ef4d"), o = n("3ba51");
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        n("19b9");
        var r = n("f0c5"), s = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "931e": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), o = n("b628");
        function u(e, t, n, a, o, u, r) {
            try {
                var s = e[u](r), c = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(c) : Promise.resolve(c).then(a, o);
        }
        var r = {
            props: {
                visible: {
                    type: Boolean,
                    default: !1
                },
                mode: {
                    type: Number,
                    default: 1
                },
                showuploadBtn: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    headTitle: {
                        1: "请上传本人清晰的二维码图片",
                        2: "请上传本人手持名片或工牌的清晰照片"
                    },
                    imgArr: {
                        1: "https://imgcdn.huanjutang.com/image/2020/06/28/e88e819edf0b0e987fba5a2c9a64dfbf.png",
                        2: "https://imgcdn.huanjutang.com/image/2020/06/28/2d249a848cd4b3a8d58ab299ec16b9dc.png"
                    }
                };
            },
            methods: {
                nullFn: function() {},
                uploadFile: function() {
                    var e = function(e) {
                        return function() {
                            var t = this, n = arguments;
                            return new Promise(function(a, o) {
                                var r = e.apply(t, n);
                                function s(e) {
                                    u(r, a, o, s, c, "next", e);
                                }
                                function c(e) {
                                    u(r, a, o, s, c, "throw", e);
                                }
                                s(void 0);
                            });
                        };
                    }(a.default.mark(function e() {
                        var t, n, u;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, o.foundation.chooseImageSync();

                              case 3:
                                return t = e.sent, e.next = 6, o.foundation.uploadFileSync(t.tempFilePaths[0]);

                              case 6:
                                if (n = e.sent, 200 === parseInt(n.statusCode, 10)) {
                                    e.next = 11;
                                    break;
                                }
                                o.tip.toast("图片上传失败", "", "none"), e.next = 16;
                                break;

                              case 11:
                                if (u = n.data, 0 === parseInt(u.status, 10)) {
                                    e.next = 14;
                                    break;
                                }
                                return e.abrupt("return", o.tip.toast("图片上传失败", "", "none"));

                              case 14:
                                this.$emit("update:visible", !1), this.$emit("uploadSuccess", u.data.url);

                              case 16:
                                e.next = 20;
                                break;

                              case 18:
                                e.prev = 18, e.t0 = e.catch(0);

                              case 20:
                                return e.abrupt("return", !0);

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 18 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                closed: function() {
                    this.$emit("update:visible", !1);
                }
            }
        };
        t.default = r;
    },
    ef4d: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/saleman/BusiUploadDemo-create-component", {
    "subPackages/me/pages/components/saleman/BusiUploadDemo-create-component": function(e, t, n) {
        n("543d").createComponent(n("8530"));
    }
}, [ [ "subPackages/me/pages/components/saleman/BusiUploadDemo-create-component" ] ] ]);