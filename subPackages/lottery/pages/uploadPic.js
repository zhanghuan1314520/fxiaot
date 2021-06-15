require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/uploadPic" ], {
    "0a6b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), i = o(n("4ec3")), a = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function c(t, e, n, r, i, a, o) {
                try {
                    var s = t[a](o), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = t.apply(e, n);
                        function o(t) {
                            c(a, r, i, o, s, "next", t);
                        }
                        function s(t) {
                            c(a, r, i, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var p = n("79b9"), d = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        project_id: "",
                        imgNum: 0,
                        houseType: [],
                        projectData: [],
                        projectIndex: 0,
                        projectShow: !1,
                        dialogShow: !1,
                        houseIndex: 0,
                        imageList: [],
                        uploadIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAS1BMVEUAAADi4uLl5eXg4ODg4ODf39/g4OD////i4uLg4ODg4ODg4ODg4ODg4ODg4ODh4eHf39/s7Ozg4ODj4+Pf39/g4ODg4ODf39/Y2NhLQ2/+AAAAF3RSTlMAThNi7LGdBDf03deliplVRA3nGrJzIe2t6WYAAAFZSURBVHja7dzLbsIwFEXRk5TWIQ8I0Nb9/y/t9aCVCzFIFcgX2GtgJpHYcjJILMv60fVxgY7c4pr1MG6D/vhc1YpJ+ka5sK8YY6agzFA3pm+VCapk121iHA7yYn5vBdy9tm39PMnRyAtiiCHmChrjJiYaYoghhpgMMSVPELMycsDLpBBDDDFX9WoEAItY0ztFTAkxl3wZYkoxbtb0UoybL0piiCGGGGLuPmZl3MT8788vI4YYtw/ww8e8GjcxCTE5YkqIKfEb0xo3MV7e9Ih5rhhXC4wPF8M+PWKIIeYIMSXEnMM+vSXElBBTQsx57NMDcG/Yp0cMMcQcYU1vwRPErG3YqbqdZaw12Nipus4yBo02blTdxjJGbdP8VJ+aOZqtQm8/+8o1894i+iA10YyqJx0TlDQyk92ng3Iv8dSbdNtrJiVhih+qHvN7tNQcasf0jTL1YrLjyL4BxXiBQQ/mtYYAAAAASUVORK5CYII=",
                        deleteIcon: "https://imgcdn.huanjutang.com/assets/img/20191017161178081.png",
                        maxLength: 50,
                        uploadDisable: !1
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("我在这里上传相册图");
                },
                onLoad: function() {
                    var t = f(r.default.mark(function t(e) {
                        var n, a;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.project_id = e.project_id, this.project_id) {
                                    t.next = 8;
                                    break;
                                }
                                return this.projectShow = !0, t.next = 5, i.default.getProjectListWithUser();

                              case 5:
                                n = t.sent, this.projectData = n.data, this.project_id = this.projectData[0].project_id;

                              case 8:
                                return t.next = 10, i.default.huxingPhotosType(2);

                              case 10:
                                a = t.sent, this.houseType = a.data;

                              case 12:
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
                    changType: function() {
                        this.dialogShow = !1;
                    },
                    toUrl: function() {
                        this.dialogShow = !1, t.navigateTo({
                            url: "/pages/webview2?redirect=".concat(p.webviewHost, "/followServices")
                        });
                    },
                    optProject: function() {
                        var e = this;
                        e.newList = [], e.projectData.forEach(function(t) {
                            e.newList.push(t.project_name);
                        }), t.showActionSheet({
                            itemList: e.newList,
                            success: function(t) {
                                e.projectIndex = t.tapIndex, e.project_id = e.projectData[e.projectIndex].project_id;
                            },
                            fail: function() {}
                        });
                    },
                    switchType: function(t) {
                        this.houseIndex = t.detail.value;
                    },
                    deleteImage: function() {
                        var t = f(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.tip.confirm("请确认是否删除该图片？", "提示");

                                  case 2:
                                    t.sent && this.imageList.splice(e, 1);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    chooseImage: function() {
                        var t = f(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
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
                                    return t.next = 7, a.foundation.chooseImageSync({
                                        num: 10
                                    });

                                  case 7:
                                    return e = t.sent, t.next = 10, this.upLoadImage(e.tempFilePaths);

                                  case 10:
                                    this.imageList.length > this.maxLength && (a.tip.toast("单次最多上传".concat(this.maxLength, "图片"), "", "none", 3e3), 
                                    this.imageList = this.imageList.slice(0, this.maxLength));

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    upLoadImage: function() {
                        var t = f(r.default.mark(function t(e) {
                            var n, i = this;
                            return r.default.wrap(function(t) {
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
                                    return n = e.map(function(t) {
                                        return a.foundation.uploadFileSync(t).catch(function(t) {
                                            return t;
                                        });
                                    }), t.prev = 6, t.next = 9, Promise.all(n);

                                  case 9:
                                    t.sent.forEach(function(t) {
                                        if (t.statusCode && t.data) if (200 !== Number(t.statusCode)) a.tip.error("图片上传失败"); else {
                                            var e = t.data;
                                            if (0 !== Number(e.status)) return void a.tip.error("图片上传失败");
                                            i.imageList = i.imageList.concat(e.data.url);
                                        }
                                    }), t.next = 16;
                                    break;

                                  case 13:
                                    t.prev = 13, t.t0 = t.catch(6), this.initImageList();

                                  case 16:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 6, 13 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    upFiles: function() {
                        var e = f(r.default.mark(function e() {
                            var n, o, u, c, f;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (0 !== this.imageList.length) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    if (!this.uploadDisable) {
                                        e.next = 4;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 4:
                                    return n = [], o = s(new Set(this.imageList)).join(","), n.push({
                                        img: o,
                                        type: this.houseType[this.houseIndex].id
                                    }), e.next = 9, i.default.setPhotos(n, this.project_id);

                                  case 9:
                                    if (u = e.sent, this.uploadDisable = !0, 0 !== u.code) {
                                        e.next = 27;
                                        break;
                                    }
                                    if (this.initImageList(), c = null, !((f = (f = t.getStorageSync("server_guide_times")) || 0) < 1)) {
                                        e.next = 21;
                                        break;
                                    }
                                    t.setStorageSync("server_guide_times", f + 1), this.dialogShow = !0, e.next = 25;
                                    break;

                                  case 21:
                                    return e.next = 23, a.tip.toast(u.message);

                                  case 23:
                                    clearTimeout(c), c = setTimeout(function() {
                                        t.navigateBack({
                                            url: "/subPackages/project/pages/photos?project_id=".concat(this.project_id)
                                        });
                                    }, 1e3);

                                  case 25:
                                    e.next = 28;
                                    break;

                                  case 27:
                                    this.initImageList();

                                  case 28:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    previewImage: function(e) {
                        t.previewImage({
                            urls: [ e ]
                        });
                    },
                    initImageList: function() {
                        this.imageList = [], this.uploadDisable = !1;
                    },
                    checkUploadPermission: function() {
                        var t = f(r.default.mark(function t() {
                            var e, n, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.uploadPermission(this.project_id);

                                  case 2:
                                    if (e = t.sent, n = e.code, o = e.data, 0 !== n || !o.uploadable) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.abrupt("return", Promise.resolve(!0));

                                  case 6:
                                    return a.tip.toast("【本楼盘只接受官方资料，请您谅解！】", null, "none"), t.abrupt("return", Promise.resolve(!1));

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    "10b1": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("5096"), i = n("9ac0");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("3757");
        var o = n("f0c5"), s = Object(o.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    3757: function(t, e, n) {
        "use strict";
        var r = n("c519");
        n.n(r).a;
    },
    5096: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "9ac0": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("0a6b"), i = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = i.a;
    },
    c519: function(t, e, n) {},
    ef0d: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("10b1")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "ef0d", "common/runtime", "common/vendor" ] ] ]);