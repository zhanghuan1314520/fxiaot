require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/oldHousePlan" ], {
    "56cd": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("e23d")).default);
        }).call(this, n("543d").createPage);
    },
    5981: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5df4"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    "5df4": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(n("a34a")), o = c(n("c909")), r = c(n("4ec3")), i = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return d(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || l(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], a = !0, o = !1, r = void 0;
                        try {
                            for (var i, c = t[Symbol.iterator](); !(a = (i = c.next()).done) && (n.push(i.value), 
                            !e || n.length !== e); a = !0) ;
                        } catch (t) {
                            o = !0, r = t;
                        } finally {
                            try {
                                a || null == c.return || c.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return n;
                    }
                }(t, e) || l(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(t, e) {
                if (t) {
                    if ("string" == typeof t) return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0;
                }
            }
            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function f(t, e, n, a, o, r, i) {
                try {
                    var c = t[r](i), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(a, o);
            }
            function h(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = t.apply(e, n);
                        function i(t) {
                            f(r, a, o, i, c, "next", t);
                        }
                        function c(t) {
                            f(r, a, o, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var p = n("ca00"), g = n("f4fd"), m = {
                components: {
                    FooterBtns: function() {
                        n.e("components/FooterBtns").then(function() {
                            return resolve(n("99f2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RecommedSales: function() {
                        n.e("components/RecommedSales").then(function() {
                            return resolve(n("1a4a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AudioPlayer: function() {
                        n.e("subPackages/project/pages/component/AudioPlayer").then(function() {
                            return resolve(n("fcfe"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        project_id: 0,
                        project_name: "",
                        is_sales_man: 2,
                        showLayout: !1,
                        initLoading: !0,
                        lottery_id: 0,
                        loading: !0,
                        username: "",
                        showCallBtn: !1,
                        showOpening: !1,
                        selOpening: !1,
                        disclaimerUrl: "",
                        strategyUrl: "",
                        tabList: {
                            opening: [],
                            all: [],
                            openingSel: 0,
                            allSel: 0
                        },
                        itemList: []
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("快来看~【".concat(this.project_name, "】户型图"), "/pages/lotteryDetail?id=".concat(this.lottery_id, "&project_id=").concat(this.project_id, "&redirect=").concat(encodeURIComponent(p.getCurrentPageUrlWithArgs())));
                },
                onHide: function() {},
                onPullDownRefresh: function() {
                    var e = h(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.reload(), t.stopPullDownRefresh();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onShow: function() {},
                onLoad: function() {
                    var t = h(a.default.mark(function t(e) {
                        var n, i;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!e.hid) {
                                    t.next = 5;
                                    break;
                                }
                                return t.next = 3, r.default.getDecodeHashParams(e.hid);

                              case 3:
                                (n = t.sent) && n.data && (e = (0, o.default)("?".concat(decodeURIComponent(n.data.path))).search(!0));

                              case 5:
                                if (this.project_id = e.project_id, this.lottery_id = e.lottery_id || "", this.project_name = decodeURIComponent(e.project_name), 
                                !this.lottery_id || "0" === this.lottery_id) {
                                    t.next = 13;
                                    break;
                                }
                                return this.showOpening = !0, this.selOpening = !0, t.next = 13, this.getFilterTab(!0);

                              case 13:
                                return t.next = 15, this.getFilterTab(!1);

                              case 15:
                                (i = g.getUserInfo()) && (this.username = i.nickName), this.getDeclareUrl(), this.reload();

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    getDeclareUrl: function() {
                        var t = h(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getAppJumpApge();

                                  case 2:
                                    (e = t.sent).data && (this.strategyUrl = e.data.hxgl, this.disclaimerUrl = e.data.mzsm);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    handleShowPlayer: function(t) {
                        t.paused = !1, t.showPlayer = !0;
                        var e = t.uniqueId;
                        this.$refs[e][0].operation();
                    },
                    handleStopPlayer: function(t) {
                        var e = t.uniqueId;
                        this.$refs[e][0].operation();
                    },
                    playHandler: function(t) {
                        this.itemList.forEach(function(e) {
                            e.uniqueId !== t && (e.paused = !0);
                        });
                    },
                    closePlayer: function() {},
                    handleShowOpening: function() {
                        this.selOpening = !this.selOpening, this.loadNext();
                    },
                    getFilterTab: function() {
                        var t = h(a.default.mark(function t() {
                            var e, n, o = arguments;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(o.length > 0 && void 0 !== o[0] && o[0]) || 0 !== this.tabList.opening.length) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.next = 4, r.default.houseType(this.project_id, this.lottery_id, 1);

                                  case 4:
                                    (e = t.sent).data && (this.tabList.opening = this.createHouseType(e.data), 0 === this.tabList.opening[0].count && (this.selOpening = !1, 
                                    this.showOpening = !1)), t.next = 13;
                                    break;

                                  case 8:
                                    if (0 !== this.tabList.all.length) {
                                        t.next = 13;
                                        break;
                                    }
                                    return t.next = 11, r.default.houseType(this.project_id, "", "");

                                  case 11:
                                    (n = t.sent).data && (this.tabList.all = this.createHouseType(n.data));

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    goVrPage: function(e) {
                        var n = "/subPackages/tools/pages/webview?redirect=".concat(encodeURIComponent(e.vr_url));
                        t.navigateTo({
                            url: n
                        });
                    },
                    getUserInfo: function() {
                        var t = this;
                        g.updateUserInfo().then(function(e) {
                            t.username = e.nickName, t.uploadProjectImg.call(t);
                        }).catch(function() {});
                    },
                    handlePreview: function(t, e) {
                        this.openPreviewImg(e, t.id);
                    },
                    openPreviewImg: function(e) {
                        for (var n = [], a = 0; a < this.itemList.length; a += 1) n.push(this.itemList[a].original_image);
                        t.previewImage({
                            current: this.itemList[e].original_image,
                            urls: n
                        });
                    },
                    getSaleMan: function() {
                        var t = this;
                        r.default.isSaleMan(this.project_id).then(function(e) {
                            e && e.data && (t.is_sales_man = e.data);
                        });
                    },
                    isShowLayout: function() {
                        var t = h(a.default.mark(function t() {
                            var e = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    r.default.lotteryDetail.getDetails(this.project_id, this.lottery_id).then(function(t) {
                                        t.data && t.data.plan_buildings && t.data.plan_buildings.total > 0 && (e.showLayout = !0);
                                    });

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    uploadProjectImg: function() {
                        var e = h(a.default.mark(function e() {
                            var n, o, c;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.uploadPermission(this.project_id);

                                  case 2:
                                    (n = e.sent).data && n.code && (o = n.code, c = n.data, 0 === o && c.upload_door_model ? t.navigateTo({
                                        url: "/subPackages/lottery/pages/addHouseIn?project_id=".concat(this.project_id)
                                    }) : i.tip.toast("【本楼盘只接受官方资料，请您谅解！】", null, "none"));

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
                    switchTab: function(t) {
                        this.selOpening ? this.tabList.openingSel = t : this.tabList.allSel = t, this.loadNext();
                    },
                    handleToStatement: function() {
                        t.navigateTo({
                            url: "/".concat(this.disclaimerUrl)
                        });
                    },
                    handleToStrategy: function() {
                        t.navigateTo({
                            url: "/".concat(this.strategyUrl)
                        });
                    },
                    handleToLayout: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/projectPlanar/index?projectId=".concat(this.project_id, "&projectName=").concat(this.project_name)
                        });
                    },
                    reload: function() {
                        this.loadNext(), this.getButtonStatus(), this.getSaleMan(), this.isShowLayout();
                    },
                    getButtonStatus: function() {
                        var t = this;
                        r.default.lottery.showCallSaleManbtn(this.project_id).then(function(e) {
                            e && 0 === Math.floor(e.code) && (t.showCallBtn = 1 === Math.floor(e.data.is_show_phone));
                        });
                    },
                    loadPhoto: function(t) {
                        var e = this;
                        if (t && t.data) {
                            var n = t.data.map(function(t, n) {
                                if (t.name) {
                                    var a = u(t.name.split(" "), 1)[0];
                                    t.name = a;
                                }
                                return t.uniqueId = "".concat(1 === Math.floor(e.tab) ? "that_".concat(t.id).concat(n) : "all_".concat(t.id).concat(n), "_").concat(Math.floor(10 * Math.random())), 
                                t.voice_url && (t.paused = !0, t.showPlayer = !1, t.current = 0), t;
                            });
                            this.itemList = s(n);
                        }
                        this.$nextTick(function() {
                            e.loading = !1, e.initLoading = !1;
                        });
                    },
                    loadNext: function() {
                        var t = this, e = this.lottery_id, n = this.tabList.all[this.tabList.allSel].type, a = "";
                        this.selOpening && (n = this.tabList.opening[this.tabList.openingSel].type, a = 1), 
                        this.loading = !0, r.default.houseTypePhotos(this.project_id, e, n, a).then(function(e) {
                            t.loadPhoto(e);
                        });
                    },
                    createHouseType: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = 0, n = t.reduce(function(t, n) {
                            return e += Math.floor(n.count), n.text && t.push({
                                text: n.text,
                                type: n.type,
                                count: n.count
                            }), t;
                        }, []);
                        return [ {
                            text: "全部",
                            type: 0,
                            count: e
                        } ].concat(n);
                    }
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    "8d80": function(t, e, n) {
        "use strict";
        var a = n("d91f");
        n.n(a).a;
    },
    d91f: function(t, e, n) {},
    e23d: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("f8ac"), o = n("5981");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("8d80");
        var i = n("f0c5"), c = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    f8ac: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    }
}, [ [ "56cd", "common/runtime", "common/vendor" ] ] ]);