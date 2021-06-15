require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/addHouseIn" ], {
    "19b5": function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(r("a34a")), n = i(r("4ec3")), o = r("b628");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, r, a, n, o, i) {
                try {
                    var s = e[o](i), u = s.value;
                } catch (e) {
                    return void r(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(a, n);
            }
            function u(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(a, n) {
                        var o = e.apply(t, r);
                        function i(e) {
                            s(o, a, n, i, u, "next", e);
                        }
                        function u(e) {
                            s(o, a, n, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var c = r("79b9"), h = {
                components: {
                    Authorization: function() {
                        r.e("components/Authorization").then(function() {
                            return resolve(r("5326"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                data: function() {
                    return {
                        num: [ "1" ],
                        dataArr: [ {
                            house_live: "",
                            shi: "",
                            ting: "",
                            wei: "",
                            house_class: "",
                            house_area: "",
                            house_shared: "",
                            house_item: "",
                            imageList: []
                        } ],
                        itemList: [],
                        type: 1,
                        newList: [],
                        project_id: "",
                        projectData: [],
                        projectIndex: 0,
                        projectShow: !1,
                        dialogShow: !1
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onLoad: function() {
                    var e = u(a.default.mark(function e(t) {
                        var r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.project_id = t.project_id || "", this.project_id) {
                                    e.next = 7;
                                    break;
                                }
                                return this.projectShow = !0, e.next = 5, n.default.getProjectListWithUser();

                              case 5:
                                (r = e.sent) && r.data && (this.projectData = r.data, this.project_id = this.projectData[0].project_id);

                              case 7:
                                this.getLabel.call(this);

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
                methods: {
                    changType: function() {
                        this.dialogShow = !1;
                    },
                    toUrl: function() {
                        this.dialogShow = !1, e.navigateTo({
                            url: "/pages/webview2?redirect=".concat(c.webviewHost, "/followServices")
                        });
                    },
                    getLabel: function() {
                        var e = u(a.default.mark(function e() {
                            var t;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.default.getLabel(this.type);

                                  case 2:
                                    (t = e.sent) && t.data && (this.itemList = t.data);

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
                    submit: function() {
                        var t = u(a.default.mark(function t() {
                            var r, i, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = [], this.dataArr.forEach(function(e) {
                                        e.shi && e.house_class && e.house_area && e.imageList[0] && !(e.imageList[0].length < 1) ? r.push({
                                            tag: "",
                                            num_bed_room: e.shi,
                                            num_living_room: e.ting,
                                            num_rest_room: e.wei,
                                            name: e.house_class,
                                            outer_square: e.house_area,
                                            public_square: e.house_shared,
                                            price_avg: e.house_item,
                                            img: e.imageList[0]
                                        }) : o.tip.toast("内容不能为空，请审查", "", "none");
                                    }), t.next = 4, this.checkUploadPermission();

                                  case 4:
                                    if (t.sent) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 7:
                                    if (r.length) {
                                        t.next = 10;
                                        break;
                                    }
                                    return o.tip.toast("请添加户型图", "", "none"), t.abrupt("return");

                                  case 10:
                                    return t.next = 12, n.default.submit_buiding({
                                        arr: r,
                                        project_id: this.project_id
                                    });

                                  case 12:
                                    i = t.sent, 0 === Math.floor(i.code) && (this.dataArr = [ {
                                        house_live: "",
                                        shi: "",
                                        ting: "",
                                        wei: "",
                                        house_class: "",
                                        house_area: "",
                                        house_shared: "",
                                        house_item: "",
                                        imageList: []
                                    } ], (s = (s = e.getStorageSync("server_guide_times")) || 0) < 1 ? (s += 1, e.setStorageSync("server_guide_times", s), 
                                    this.dialogShow = !0) : o.tip.toast("上传成功", function() {
                                        e.navigateBack();
                                    }));

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    inputValue: function(e, t, r) {
                        var a = this.dataArr[e], n = r.detail.value;
                        switch (t) {
                          case "shi":
                            n = !n || Math.floor(n) <= 0 ? 0 : Math.floor(n), a.shi = n;
                            break;

                          case "ting":
                            n = !n || Math.floor(n) <= 0 ? 0 : Math.floor(n), a.ting = n;
                            break;

                          case "wei":
                            n = !n || Math.floor(n) <= 0 ? 0 : Math.floor(n), a.wei = n;
                            break;

                          case "house_class":
                            a.house_class = r.detail.value;
                            break;

                          case "house_area":
                            n = !n || Math.floor(n) <= 0 ? 0 : Math.floor(n), a.house_area = n;
                            break;

                          case "house_shared":
                            n = !n || Math.floor(n) <= 0 ? 0 : Math.floor(n), a.house_shared = n;
                            break;

                          case "house_item":
                            n = !n || Math.floor(n) <= 0 ? 0 : Math.floor(n), a.house_item = n;
                        }
                    },
                    appendHouse: function() {
                        this.dataArr.push({
                            house_live: "",
                            shi: "",
                            ting: "",
                            wei: "",
                            house_style: "",
                            house_class: "",
                            house_area: "",
                            house_shared: "",
                            house_item: "",
                            imageList: []
                        });
                    },
                    deleteHouse: function(e) {
                        this.dataArr.splice(e, 1);
                    },
                    uploadFile: function() {
                        var t = u(a.default.mark(function t(r) {
                            var n, i, s, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.checkUploadPermission();

                                  case 2:
                                    if (t.sent) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 5:
                                    if (!((n = this.dataArr[r]).imageList.length > 0)) {
                                        t.next = 9;
                                        break;
                                    }
                                    return o.tip.toast("最多上传1张", "", "none"), t.abrupt("return");

                                  case 9:
                                    return t.prev = 9, t.next = 12, o.foundation.chooseImageSync();

                                  case 12:
                                    return i = t.sent, e.showLoading({
                                        title: "上传中"
                                    }), t.next = 16, o.foundation.uploadFileSync(i.tempFilePaths[0]);

                                  case 16:
                                    if (s = t.sent, 200 === Math.floor(s.statusCode)) {
                                        t.next = 21;
                                        break;
                                    }
                                    o.tip.error("图片上传失败"), t.next = 26;
                                    break;

                                  case 21:
                                    if (u = s.data, 0 === Math.floor(u.status)) {
                                        t.next = 25;
                                        break;
                                    }
                                    return o.tip.error("图片上传失败"), t.abrupt("return");

                                  case 25:
                                    n.imageList.push(u.data.url);

                                  case 26:
                                    e.hideLoading(), t.next = 32;
                                    break;

                                  case 29:
                                    t.prev = 29, t.t0 = t.catch(9), console.error(t.t0);

                                  case 32:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 9, 29 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    deletePic: function(e, t) {
                        var r = [], a = this.dataArr[e];
                        Object.keys(a.imageList).forEach(function(e) {
                            Math.floor(e) !== Math.floor(t) && r.push(a.imageList[e]);
                        }), a.imageList = r;
                    },
                    preview: function(t) {
                        e.previewImage({
                            urls: [ t ]
                        });
                    },
                    optHouse: function(t) {
                        var r = this.dataArr[t], a = this;
                        a.newList = [], a.itemList.forEach(function(e) {
                            a.newList.push(e.text);
                        }), e.showActionSheet({
                            itemList: a.newList,
                            success: function(e) {
                                r.house_live = a.newList[e.tapIndex];
                            },
                            fail: function() {}
                        });
                    },
                    optProject: function() {
                        var t = this;
                        t.newList = [], t.projectData.forEach(function(e) {
                            t.newList.push(e.project_name);
                        }), e.showActionSheet({
                            itemList: t.newList,
                            success: function(e) {
                                t.projectIndex = e.tapIndex, t.project_id = t.projectData[t.projectIndex].project_id;
                            },
                            fail: function() {}
                        });
                    },
                    checkUploadPermission: function() {
                        var e = u(a.default.mark(function e() {
                            var t, r, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.default.uploadPermission(this.project_id);

                                  case 2:
                                    if (t = e.sent, r = t.code, i = t.data, 0 !== r || !i.uploadable) {
                                        e.next = 6;
                                        break;
                                    }
                                    return e.abrupt("return", Promise.resolve(!0));

                                  case 6:
                                    return o.tip.toast("【本楼盘只接受官方资料，请您谅解！】", null, "none"), e.abrupt("return", Promise.resolve(!1));

                                  case 8:
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
            t.default = h;
        }).call(this, r("543d").default);
    },
    "573e": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = r("c93d"), n = r("71bb");
        for (var o in n) "default" !== o && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(o);
        r("73d6");
        var i = r("f0c5"), s = Object(i.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "71bb": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = r("19b5"), n = r.n(a);
        for (var o in a) "default" !== o && function(e) {
            r.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = n.a;
    },
    "73d6": function(e, t, r) {
        "use strict";
        var a = r("8bd2");
        r.n(a).a;
    },
    "8bd2": function(e, t, r) {},
    "8f6d": function(e, t, r) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            r("6cdc"), t(r("66fd")), e(t(r("573e")).default);
        }).call(this, r("543d").createPage);
    },
    c93d: function(e, t, r) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, n = [];
        r.d(t, "b", function() {
            return a;
        }), r.d(t, "c", function() {
            return n;
        }), r.d(t, "a", function() {});
    }
}, [ [ "8f6d", "common/runtime", "common/vendor" ] ] ]);