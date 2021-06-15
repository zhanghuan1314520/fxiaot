(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consult/components/sharingHall" ], {
    "641c": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, a, r, i, o) {
                try {
                    var s = e[i](o), u = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(a, r);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(t, n);
                        function s(e) {
                            o(i, a, r, s, u, "next", e);
                        }
                        function u(e) {
                            o(i, a, r, s, u, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var h = {
                observeInstance: null
            }, p = {
                components: {
                    shareTemplate: function() {
                        n.e("components/shareTemplate").then(function() {
                            return resolve(n("2c6c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    shareBtn: function() {
                        n.e("components/unifyUI/shareBtn").then(function() {
                            return resolve(n("f05d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    more: {
                        type: Boolean,
                        default: !0
                    },
                    inputValProps: {
                        type: String,
                        default: ""
                    },
                    shareHeaderFix: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        lazyload: !0,
                        shareIndex: 0,
                        newIndex: 0,
                        delModel: !1,
                        myType: [ {
                            type: 1,
                            value: "最新分享"
                        }, {
                            type: 2,
                            value: "最热分享"
                        } ],
                        shareType: [ {
                            type: "",
                            value: "全部"
                        }, {
                            type: 1,
                            value: "公寓"
                        }, {
                            type: 2,
                            value: "住宅"
                        }, {
                            type: 3,
                            value: "我的关注"
                        } ],
                        activeFlag: {
                            house: !1,
                            hotShare: !1
                        },
                        urls: [],
                        iShowCreateShare: !1,
                        items: [],
                        inputVal: ""
                    };
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    }
                },
                watch: {
                    list: {
                        handler: function(e) {
                            var t = this;
                            this.urls = [], this.urls = e.map(function(e) {
                                return "navigateTo-authphone://subPackages/me/pages/chatInterface?user_id=".concat(e.session_id);
                            }), this.items = e.map(function(e) {
                                return c(c({}, e), {}, {
                                    height: void 0 !== e.isShow ? e.height : "auto",
                                    isShow: void 0 !== e.isShow && e.isShow
                                });
                            }), this.items.length > 0 && this.$nextTick(function() {
                                t.observeNode();
                            });
                        },
                        deep: !0,
                        immediate: !0
                    },
                    inputValProps: function(e) {
                        this.inputVal = e;
                    }
                },
                destroyed: function() {
                    h.observeInstance = null;
                },
                created: function() {
                    var e = this;
                    r.default.isSaleMan().then(function(t) {
                        var n = t.isSalesMan;
                        e.iShowCreateShare = n;
                    });
                },
                methods: {
                    changeActiveFlag: function(e) {
                        var t = +e;
                        this.activeFlag.house = !t, this.activeFlag.hotShare = t;
                    },
                    phoneHandle: function() {
                        var e = s(a.default.mark(function e(t, n) {
                            var i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.getPhoneNum(n.sales_man_id, 1);

                                  case 2:
                                    i = e.sent, 0 === parseInt(i.code, 10) && t(i.data.phone);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    chatHandle: function(t) {
                        var n = t.currentTarget.dataset.item;
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(n.session_id)
                        });
                    },
                    inputTyping: function(e) {
                        var t = e.detail.value;
                        this.inputVal = t.replace(/(^\s+)|(\s+$)/g, ""), this.$emit("update:inputValProps", this.inputVal);
                    },
                    closeVideoView: function(e) {
                        this.items[e].imageView = !1;
                    },
                    viewVideo: function(e) {
                        this.items.forEach(function(e) {
                            e.imageView = !1;
                        }), this.items[e].imageView = !0;
                    },
                    clearInput: function() {
                        this.inputVal = "", this.$emit("update:inputValProps", this.inputVal), this.$emit("sendInputVal", this.inputVal);
                    },
                    doSearch: function() {
                        this.inputVal && this.$emit("sendInputVal", this.inputVal);
                    },
                    chooseShareTypeOne: function() {
                        var e = s(a.default.mark(function e(t) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.shareIndex = t.detail.value, this.$emit("chooseShare", parseInt(this.shareIndex, 10), parseInt(this.newIndex, 10) + 1);

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    chooseShareTypeTwo: function() {
                        var e = s(a.default.mark(function e(t) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.newIndex = t.detail.value, this.$emit("chooseShare", parseInt(this.shareIndex, 10), parseInt(this.newIndex, 10) + 1);

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    observeNode: function() {
                        var e = s(a.default.mark(function e() {
                            var t = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return h.observeInstance && (h.observeInstance.disconnect(), h.observeInstance = null), 
                                    e.next = 3, this.$nextTick();

                                  case 3:
                                    h.observeInstance = this.createIntersectionObserver({
                                        observeAll: !0
                                    }), h.observeInstance.relativeToViewport().observe(".post-item", function(e) {
                                        var n = e.dataset.index;
                                        t.items.length && (e.intersectionRatio > 0 ? (t.$set(t.items[Number(n)], "isShow", !0), 
                                        t.$set(t.items[Number(n)], "height", "".concat(e.boundingClientRect.height, "px"))) : (t.$set(t.items[Number(n)], "isShow", !1), 
                                        t.$set(t.items[Number(n)], "height", "auto")));
                                    });

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = p;
        }).call(this, n("543d").default);
    },
    8907: function(e, t, n) {},
    "8b71b": function(e, t, n) {
        "use strict";
        var a = n("8907");
        n.n(a).a;
    },
    a137: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("a51f"), r = n("ccc7");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("8b71b");
        var o = n("f0c5"), s = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    a51f: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    ccc7: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("641c"), r = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/consult/components/sharingHall-create-component", {
    "pages/consult/components/sharingHall-create-component": function(e, t, n) {
        n("543d").createComponent(n("a137"));
    }
}, [ [ "pages/consult/components/sharingHall-create-component" ] ] ]);