require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/hangzhou/bindCode/codeDetail" ], {
    "2acd": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("a302"), r = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = r.a;
    },
    "795b": function(e, t, n) {
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
    a302: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3")), o = n("b628");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, a, r, o, i) {
                try {
                    var s = e[o](i), c = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(a, r);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = e.apply(t, n);
                        function i(e) {
                            s(o, a, r, i, c, "next", e);
                        }
                        function c(e) {
                            s(o, a, r, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var u = n("ca00"), d = n("79b9"), l = {
                components: {
                    uniPopup: function() {
                        Promise.all([ n.e("subPackages/me/common/vendor"), n.e("subPackages/me/pages/components/uni-popup/uni-popup") ]).then(function() {
                            return resolve(n("d32a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    ids: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        maxLength: 200,
                        inputName: "",
                        inputCode: "",
                        inputRegNum: "",
                        allow: !1,
                        rules: {
                            name: !1,
                            code: !1,
                            regNum: !1
                        },
                        rangeList: [],
                        projectList: [],
                        searchValue: "",
                        projectIndex: "none",
                        rangeIndex: "none",
                        projectId: "",
                        projectName: "",
                        rangeName: "",
                        rangeId: ""
                    };
                },
                watch: {
                    inputName: function(e) {
                        this.rules.name = 0 === e.length;
                    },
                    inputCode: function(e) {
                        this.rules.code = 0 === e.length;
                    },
                    inputRegNum: function(e) {
                        this.rules.regNum = 0 === e.length;
                    }
                },
                mounted: function() {
                    var t = c(a.default.mark(function t() {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this.ids) {
                                    t.next = 7;
                                    break;
                                }
                                return e.setNavigationBarTitle({
                                    title: "修改编码"
                                }), this.allow = !0, t.next = 5, r.default.userGetCode(this.ids);

                              case 5:
                                (n = t.sent) && n.data && (this.inputCode = n.data.code, this.inputName = n.data.name, 
                                this.rangeId = n.data.lottery_id, this.projectName = n.data.project_name, this.rangeName = n.data.sale_area);

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    gotoUrlHandle: function() {
                        e.navigateTo({
                            url: u.webview2Url("".concat(d.webviewHost, "/user/statement?id=10&type=privacy"))
                        });
                    },
                    rangeData: function() {
                        var e = this;
                        r.default.lotteryNum(this.projectId, 1).then(function(t) {
                            t && Array.isArray(t.data) && t.data.length > 0 && (e.rangeList = t.data);
                        });
                    },
                    projectSearch: function() {
                        var e = c(a.default.mark(function e() {
                            var t;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.searchProject(this.searchValue, 1);

                                  case 2:
                                    (t = e.sent) && t.data && (this.projectList = t.data.data);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    projectChoose: function(e) {
                        this.projectIndex = e, this.projectId = this.projectList[e].id, this.projectName = this.projectList[e].name, 
                        this.rangeData(), this.$refs.projectDialog.close();
                    },
                    rangeChoose: function(e) {
                        this.rangeIndex = e, this.rangeId = this.rangeList[e].id, this.rangeName = this.rangeList[e].name, 
                        this.$refs.rangeDialog.close();
                    },
                    checkboxClick: function() {
                        this.allow = !this.allow;
                    },
                    closeDialog: function() {
                        this.$refs.projectDialog.close(), this.$refs.rangeDialog.close();
                    },
                    rangeHandle: function() {
                        this.ids || this.$refs.rangeDialog.open();
                    },
                    projectHandle: function() {
                        var e = c(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!this.ids) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    return e.next = 4, this.projectSearch();

                                  case 4:
                                    this.$refs.projectDialog.open();

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    submit: function() {
                        var t = c(a.default.mark(function t() {
                            var n, i;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (0 !== (n = {
                                        name: this.inputName ? this.inputName.replace(/[*%&#+!()'"]/g, "") : "",
                                        code: this.inputCode ? this.inputCode.replace(/[*%&#+!()'"]/g, "") : "",
                                        lottery_id: this.rangeId,
                                        id: this.ids || ""
                                    }).name.length) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.next = 4, e.showModal({
                                        content: "请输入姓名",
                                        showCancel: !1
                                    });

                                  case 4:
                                    return t.abrupt("return");

                                  case 5:
                                    if (0 !== n.code.length) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.next = 8, e.showModal({
                                        content: "请输入编码或登记号",
                                        showCancel: !1
                                    });

                                  case 8:
                                    return t.abrupt("return");

                                  case 9:
                                    if (this.rangeId) {
                                        t.next = 13;
                                        break;
                                    }
                                    return t.next = 12, e.showModal({
                                        content: "您楼盘信息有误，请联系客服解决^_^",
                                        showCancel: !1
                                    });

                                  case 12:
                                    return t.abrupt("return");

                                  case 13:
                                    if (this.allow) {
                                        t.next = 17;
                                        break;
                                    }
                                    return t.next = 16, e.showModal({
                                        content: "请先同意并遵守《服务声明》",
                                        showCancel: !1
                                    });

                                  case 16:
                                    return t.abrupt("return");

                                  case 17:
                                    return e.showLoading({
                                        title: "绑定中...",
                                        mask: !0
                                    }), t.next = 20, r.default.bindCode(n);

                                  case 20:
                                    if (t.sent) {
                                        e.showToast({
                                            title: "绑定成功",
                                            icon: "success",
                                            duration: 3e3
                                        }), i = getCurrentPages();
                                        try {
                                            i.length > 1 && "pages/lotteryDetail" === i[i.length - 2].route && o.redis.set("refreshLotteryDetail", !0);
                                        } catch (e) {}
                                        e.hideLoading(), i.length > 1 ? e.navigateBack() : e.switchTab({
                                            url: "/pages/index"
                                        });
                                    }

                                  case 22:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    checkIDInfo: function() {
                        r.default.checkBindIdCard().then(function() {
                            var t = c(a.default.mark(function t(n) {
                                return a.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        if (!1 !== n.data) {
                                            t.next = 5;
                                            break;
                                        }
                                        return t.next = 3, e.showModal({
                                            title: "请先绑定个人信息",
                                            content: "绑定个人信息之后，部分楼盘可以直接获取摇号编码，查询摇号结果更方便",
                                            showCancel: !0
                                        });

                                      case 3:
                                        t.sent.confirm && e.navigateTo({
                                            url: "/subPackages/me/pages/bindIDCard"
                                        });

                                      case 5:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }());
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    },
    a5d8: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("795b"), r = n("2acd");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        var i = n("f0c5"), s = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/hangzhou/bindCode/codeDetail-create-component", {
    "subPackages/me/pages/components/hangzhou/bindCode/codeDetail-create-component": function(e, t, n) {
        n("543d").createComponent(n("a5d8"));
    }
}, [ [ "subPackages/me/pages/components/hangzhou/bindCode/codeDetail-create-component" ] ] ]);