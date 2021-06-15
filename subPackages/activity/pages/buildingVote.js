require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/buildingVote" ], {
    "01b1": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("aa1b")).default);
        }).call(this, n("543d").createPage);
    },
    "52ac": function(t, e, n) {
        "use strict";
        var a = n("d9bb");
        n.n(a).a;
    },
    aa1b: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("eeac"), i = n("ee9c");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("52ac");
        var s = n("f0c5"), c = Object(s.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    af34: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), i = o(n("4ec3")), r = o(n("853f")), s = n("b628"), c = o(n("79b9"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, a, i, r, s) {
                try {
                    var c = t[r](s), o = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(o) : Promise.resolve(o).then(a, i);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function s(t) {
                            u(r, a, i, s, c, "next", t);
                        }
                        function c(t) {
                            u(r, a, i, s, c, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var h = {
                components: {
                    BackActivity: function() {
                        n.e("subPackages/activity/components/BackHome").then(function() {
                            return resolve(n("9a29"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        type: 1,
                        cont: 1,
                        canvassing: !1,
                        id: "1",
                        vote_id: "1",
                        details: [],
                        is_share: "",
                        share_in: 2,
                        backHomeUrl: "/subPackages/activity/pages/projectVote",
                        backHomeText: "活动首页",
                        backHomeOpenType: "navigate",
                        backHomeBottom: 130,
                        hidePoster: !0,
                        drawContext: null,
                        canvasWidth: 0,
                        canvasHeight: 0,
                        canvasLength: 0,
                        posterIndex: 0,
                        voteSuccess: !1,
                        RemainNum: 0,
                        weapp: {
                            nickName: "",
                            city: ""
                        },
                        endTime: "",
                        voteStop: !1,
                        time: null,
                        voteNumber: "",
                        activityUrl: "/pages/webview2?redirect=".concat(encodeURIComponent(c.default.webviewHost), "activity%2FactivityPrize")
                    };
                },
                onShareAppMessage: function() {
                    return s.share.share("我是".concat(this.details.number, "号，请帮我投票"));
                },
                onPullDownRefresh: function() {
                    var e = d(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var e = d(a.default.mark(function e(n) {
                        var i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return i = s.cache.get("userinfo") || {}, this.weapp = '{"nickName": "'.concat(i.nickName, '", "city": "').concat(i.city, '"}'), 
                                this.id = n.id, this.vote_id = n.vote_id, n.share_query && (this.share_in = 1), 
                                e.next = 7, this.reload();

                              case 7:
                                t.setNavigationBarTitle({
                                    title: this.details.name
                                });

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    callPhone: function(e) {
                        t.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    previe: function(e) {
                        var n = e, a = [ e ];
                        n && a.length > 0 && t.previewImage({
                            current: n,
                            urls: a
                        });
                    },
                    previewImg: function(e) {
                        var n = e, a = this.details.img;
                        n && a.length > 0 && t.previewImage({
                            current: n,
                            urls: a
                        });
                    },
                    vote_in: function() {
                        var t = d(a.default.mark(function t() {
                            var e, n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.userVote(this.details.id, this.details.vote_id);

                                  case 2:
                                    e = t.sent, this.details.vote_num = e && e.data && e.data.num ? e.data.num : 0, 
                                    e && e.data && "投票成功" === e.data.data && (this.details.total_vote += 1, this.voteSuccess = !0, 
                                    setTimeout(function() {
                                        n.voteSuccess = !1;
                                    }, 1500));

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    open_details: function() {
                        this.type = 1 === parseInt(this.type, 10) ? "" : 1;
                    },
                    canvassingFun: function() {
                        this.canvassing = !0;
                    },
                    quxiao: function() {
                        this.canvassing = !1;
                    },
                    getDetails: function() {
                        var e = d(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, i.default.eventDetails(this.id, this.vote_id, this.is_share);

                                  case 3:
                                    n = e.sent, this.details = n.data, this.endTime = n.data.vote_end_time, this.voteNumber = this.details.number, 
                                    t.hideLoading();

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
                    stopMove: function() {
                        return !1;
                    },
                    draw: function() {
                        var e = d(a.default.mark(function e() {
                            var n = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.canvassing = !1, this.hidePoster = !1, e.next = 4, this.drawPoster().catch(function() {
                                        n.hidePoster = !0, t.hideLoading(), s.tip.toast("楼盘海报生成失败", "", "none");
                                    });

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
                    closePoster: function() {
                        this.hidePoster = !0;
                    },
                    switchPoster: function() {
                        var t = d(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.posterIndex >= this.canvasLength - 1 ? this.posterIndex = 0 : this.posterIndex += 1;

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
                    savePoster: function() {
                        var t = d(a.default.mark(function t() {
                            var e, n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.drawContext.saveCanvasToTempFile(this.posterIndex).catch(function() {
                                        n.hidePoster = !0, s.tip.toast("保存失败", "", "none");
                                    });

                                  case 2:
                                    e = t.sent, this.hidePoster = !0, e && s.tip.success("保存成功");

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var t = d(a.default.mark(function t() {
                            var e, n, i, r, s, c, o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.voteStop = !1, t.next = 3, this.getDetails.call(this);

                                  case 3:
                                    this.endTime && (e = new Date(this.endTime.replace(/-/g, "/")).getTime(), n = new Date().getTime(), 
                                    i = (e - n) / 1e3, r = parseInt(i / 86400, 10), s = parseInt(i % 86400 / 3600, 10), 
                                    c = parseInt(i % 3600 / 60, 10), o = parseInt(i % 60, 10), s = s < 0 ? 0 : s, c = c < 0 ? 0 : c, 
                                    o = o < 0 ? 0 : o, 0 === (r = r < 0 ? 0 : r) && 0 === s && 0 === c && 0 === o && (this.voteStop = !0)), 
                                    this.computedEndTime();

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    computedEndTime: function() {
                        var t = this;
                        if (this.endTime) {
                            var e = new Date(this.endTime.replace(/-/g, "/")).getTime();
                            this.time && clearInterval(this.time), this.time = setInterval(function() {
                                var n = new Date().getTime(), a = (e - n) / 1e3, i = parseInt(a / 86400, 10), r = parseInt(a % 86400 / 3600, 10), s = parseInt(a % 3600 / 60, 10), c = parseInt(a % 60, 10);
                                r = r < 0 ? 0 : r, s = s < 0 ? 0 : s, c = c < 0 ? 0 : c, 0 === (i = i < 0 ? 0 : i) && 0 === r && 0 === s && 0 === c && (t.voteStop = !0, 
                                clearInterval(t.time));
                            }, 1e3);
                        }
                    },
                    getCanvasSize: function() {
                        var e = d(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new Promise(function(e) {
                                        t.createSelectorQuery().select(".create-canvas-box").boundingClientRect(function(t) {
                                            e(t);
                                        }).exec();
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    drawPoster: function() {
                        var e = d(a.default.mark(function e() {
                            var n, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.showLoading({
                                        title: "生成中..."
                                    }), this.drawContext) {
                                        e.next = 11;
                                        break;
                                    }
                                    return e.next = 4, this.getCanvasSize();

                                  case 4:
                                    n = e.sent, i = n.width / 680, this.canvasWidth = n.width, this.canvasHeight = n.height, 
                                    this.drawContext = new r.default({
                                        canvasWidth: this.canvasWidth,
                                        canvasHeight: this.canvasHeight,
                                        canvasScale: i,
                                        canvasIDs: [ "myCanvas1", "myCanvas2", "myCanvas3", "myCanvas4", "myCanvas5" ]
                                    }), this.canvasLength = this.drawContext.canvasIDs.length;

                                  case 11:
                                    return e.next = 13, this.drawContext.start({
                                        cover: this.details.cover,
                                        voteNum: this.details.total_vote,
                                        num: this.details.number,
                                        title: this.details.name,
                                        id: this.details.id,
                                        vote_id: this.details.vote_id
                                    }).catch(function() {});

                                  case 13:
                                    return e.next = 15, this.drawContext.drawImage().catch(function() {});

                                  case 15:
                                    t.hideLoading();

                                  case 16:
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
            e.default = h;
        }).call(this, n("543d").default);
    },
    d9bb: function(t, e, n) {},
    ee9c: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("af34"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    eeac: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    }
}, [ [ "01b1", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);