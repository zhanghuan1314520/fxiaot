require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/saleman/BusiProject" ], {
    3231: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("a34a")), a = n("b628"), o = i(n("4ec3"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function l(e, t, n, r, a, o, i) {
                try {
                    var c = e[o](i), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, a);
            }
            function p(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = e.apply(t, n);
                        function i(e) {
                            l(o, r, a, i, c, "next", e);
                        }
                        function c(e) {
                            l(o, r, a, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var m = {
                components: {
                    BusiUploadDemo: function() {
                        n.e("subPackages/me/pages/components/saleman/BusiUploadDemo").then(function() {
                            return resolve(n("8530"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiTipBox: function() {
                        n.e("subPackages/me/pages/components/saleman/BusiTipBox").then(function() {
                            return resolve(n("ca13"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    changeLottery: {
                        type: Boolean,
                        default: !1
                    },
                    retryform: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        form: {
                            project_name: "",
                            card: "",
                            project_id: "",
                            is_relevance_enter: 0,
                            relevance_project_id: "",
                            relevance_project_name: "",
                            company_name: "",
                            team_type: null
                        },
                        showType: !1,
                        selectLottery: "选择已有的楼盘",
                        page: 1,
                        lotData: [],
                        searchValue: "",
                        salesManType: 2,
                        visible: !1,
                        relation: !1,
                        inviteUrl: "",
                        changeForm: {
                            primeval_project_id: "",
                            primeval_project_name: "",
                            commutation_project_id: "",
                            commutation_project_name: "",
                            card: ""
                        },
                        excludeProjectId: "",
                        visibleTipBox: !1,
                        tipStr: "",
                        relativeProject: [],
                        groupItems: [ "自销团队", "代理团队" ]
                    };
                },
                computed: {
                    showuploadBtn: function() {
                        return !!this.form.card;
                    },
                    disable: function() {
                        return !!this.form.card && !!this.form.project_name;
                    },
                    showGroupName: function() {
                        var e = this;
                        return this.groupItems.find(function(t, n) {
                            return n === e.form.team_type;
                        }) || "请选择";
                    }
                },
                watch: {
                    changeLottery: {
                        immediate: !0,
                        handler: function(e) {
                            e && this.loadChangelotteryData();
                        }
                    },
                    retryform: {
                        deep: !0,
                        immediate: !0,
                        handler: function() {
                            var e = p(r.default.mark(function e(t) {
                                var n, a, i, c, s, u, l;
                                return r.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (!t || !t.project_id) {
                                            e.next = 8;
                                            break;
                                        }
                                        return n = t.project_name, a = t.card, i = t.project_id, this.changeLottery || (this.form.project_name = n, 
                                        this.form.card = a, this.form.project_id = i, this.selectLottery = n), e.next = 5, 
                                        o.default.searchProject(this.form.project_name, this.page, this.salesManType, "");

                                      case 5:
                                        c = e.sent, s = c.data && c.data.data && c.data.data[0] ? c.data && c.data.data && c.data.data[0] : {}, 
                                        u = s.relevance_id, (l = s.relevance_name) && (this.form.relevance_project_id = u, 
                                        this.form.relevance_project_name = l);

                                      case 8:
                                        t && t.company_name && (this.form.company_name = t.company_name, this.form.team_type = {
                                            1: 0,
                                            2: 1
                                        }[t.team_type]);

                                      case 9:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }()
                    }
                },
                mounted: function() {
                    this.lodaData();
                },
                methods: {
                    loadChangelotteryData: function() {
                        var e = p(r.default.mark(function e() {
                            var t, n, a;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.sales.salemanEnterProject();

                                  case 2:
                                    t = e.sent, n = [], a = [], t.data && t.data.data && t.data.data.forEach(function(e) {
                                        n.push(e.project_id), a.push("“".concat(e.name, "”"));
                                    }), this.changeForm.primeval_project_id = n.toString(), this.changeForm.primeval_project_name = a.toString().slice(0, -1).replace(/,/g, "和"), 
                                    this.excludeProjectId = n.toString();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    lodaData: function() {
                        var e = p(r.default.mark(function e() {
                            var t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.isSaleMan();

                                  case 2:
                                    t = e.sent, this.inviteUrl = t.invite_url;

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
                    chooseLottery: function() {
                        var e = p(r.default.mark(function e() {
                            var t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.lotData = [], this.page = 1, e.next = 4, o.default.searchProject(this.searchValue, this.page, this.salesManType, this.excludeProjectId);

                                  case 4:
                                    (t = e.sent).data && (this.lotData = t.data.data), this.showType = !0;

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    searchSure: function() {
                        var t = p(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.page = 1, this.lotData = [], e.showLoading({
                                        title: "搜索中",
                                        mask: !0
                                    }), t.next = 5, o.default.searchProject(this.searchValue, this.page, this.salesManType, this.excludeProjectId);

                                  case 5:
                                    (n = t.sent).data && (this.lotData = n.data.data), e.hideLoading();

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    setLotname: function(e) {
                        var t = e.name, n = e.id, r = e.group_project;
                        this.selectLottery = t, this.form.project_name = t, this.form.project_id = n, this.relativeProject = r.map(function(e) {
                            return s(s({}, e), {}, {
                                isToggle: !1
                            });
                        }), this.changeLottery && (this.changeForm.commutation_project_id = n, this.changeForm.commutation_project_name = t), 
                        this.showType = !1;
                    },
                    closeModel: function() {
                        this.showType = !1;
                    },
                    uploadSuccess: function(e) {
                        this.form.card = e;
                    },
                    openUploadDemo: function() {
                        this.visible = !0;
                    },
                    delImg: function() {
                        this.form.card = "";
                    },
                    emptyFn: function() {},
                    relationHandler: function(e) {
                        this.relativeProject[e].isToggle = !this.relativeProject[e].isToggle, this.relation = !!(this.relativeProject.filter(function(e) {
                            return e.isToggle;
                        }).length > 0);
                    },
                    gotoVerify: function() {
                        if (this.disable) if (this.form.company_name.replace(/\s+/g, "")) {
                            var e = {};
                            if (this.changeLottery) this.form.relevance_project_id = this.relativeProject.filter(function(e) {
                                return e.isToggle;
                            }).map(function(e) {
                                return e.id;
                            }).join(","), this.form.relevance_project_name = this.relativeProject.filter(function(e) {
                                return e.isToggle;
                            }).map(function(e) {
                                return e.name;
                            }).join(","), this.visibleTipBox = !0, this.tipStr = "新项目提交审核通过后，将自动退出".concat(this.changeForm.primeval_project_name, "的置业顾问"); else {
                                var t = this.form, n = t.project_name, r = t.card, o = t.project_id, i = t.company_name, c = t.team_type;
                                this.relation ? (e.project_name = n, e.card = r, e.project_id = o, e.company_name = i, 
                                e.team_type = {
                                    0: 1,
                                    1: 2
                                }[c] || "", e.is_relevance_enter = 1, e.relevance_project_id = this.relativeProject.filter(function(e) {
                                    return e.isToggle;
                                }).map(function(e) {
                                    return e.id;
                                }).join(","), e.relevance_project_name = this.relativeProject.filter(function(e) {
                                    return e.isToggle;
                                }).map(function(e) {
                                    return e.name;
                                }).join(",")) : (e.project_name = n, e.card = r, e.project_id = o, e.company_name = i, 
                                e.team_type = {
                                    0: 1,
                                    1: 2
                                }[c] || "", e.is_relevance_enter = 0), this.$emit("submit", e);
                            }
                        } else a.tip.toast("请输入公司名称", "", "none");
                    },
                    submitHandler: function() {
                        this.changeForm.card = this.form.card, this.changeForm.company_name = this.form.company_name, 
                        this.changeForm.team_type = {
                            0: 1,
                            1: 2
                        }[this.form.team_type] || "", this.relation && (this.changeForm.commutation_project_id = "".concat(this.changeForm.commutation_project_id, ",").concat(this.form.relevance_project_id), 
                        this.changeForm.commutation_project_name = "".concat(this.changeForm.commutation_project_name, ",").concat(this.form.relevance_project_name)), 
                        this.$emit("changeLotterySubmit", this.changeForm);
                    },
                    jumpUrl: function() {
                        e.navigateTo({
                            url: this.inviteUrl
                        });
                    },
                    previewImageHandler: function() {
                        e.previewImage({
                            urls: [ this.form.card ]
                        });
                    },
                    onGroupChange: function(e) {
                        this.form.team_type = +e.detail.value;
                    }
                }
            };
            t.default = m;
        }).call(this, n("543d").default);
    },
    "4add": function(e, t, n) {},
    8271: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("3231"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    ba63: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("eae7"), a = n("8271");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("fee2");
        var i = n("f0c5"), c = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    eae7: function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    fee2: function(e, t, n) {
        "use strict";
        var r = n("4add");
        n.n(r).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/saleman/BusiProject-create-component", {
    "subPackages/me/pages/components/saleman/BusiProject-create-component": function(e, t, n) {
        n("543d").createComponent(n("ba63"));
    }
}, [ [ "subPackages/me/pages/components/saleman/BusiProject-create-component" ] ] ]);