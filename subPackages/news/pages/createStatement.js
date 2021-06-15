require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/createStatement" ], {
    3790: function(t, e, n) {},
    "3cd5": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("de1c")).default);
        }).call(this, n("543d").createPage);
    },
    "4ca2f": function(t, e, n) {
        "use strict";
        var i = n("3790");
        n.n(i).a;
    },
    "5c36": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "8dca": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("e7bb"), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    },
    de1c: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("5c36"), a = n("8dca");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("4ca2f");
        var o = n("f0c5"), c = Object(o.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    },
    e7bb: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = c(n("a34a")), a = c(n("b3ad")), r = c(n("4ec3")), o = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, i, a, r, o) {
                try {
                    var c = t[r](o), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(i, a);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, a) {
                        var r = t.apply(e, n);
                        function o(t) {
                            s(r, i, a, o, c, "next", t);
                        }
                        function c(t) {
                            s(r, i, a, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = n("f4fd").updateUserInfo, h = n("ca00"), l = n("79b9"), d = n("79b9"), p = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ a.default ],
                data: function() {
                    return {
                        serveicesWechat: d.SERVICES_WECHAT_NUMBER,
                        uploadIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAS1BMVEUAAADi4uLl5eXg4ODg4ODf39/g4OD////i4uLg4ODg4ODg4ODg4ODg4ODg4ODh4eHf39/s7Ozg4ODj4+Pf39/g4ODg4ODf39/Y2NhLQ2/+AAAAF3RSTlMAThNi7LGdBDf03deliplVRA3nGrJzIe2t6WYAAAFZSURBVHja7dzLbsIwFEXRk5TWIQ8I0Nb9/y/t9aCVCzFIFcgX2GtgJpHYcjJILMv60fVxgY7c4pr1MG6D/vhc1YpJ+ka5sK8YY6agzFA3pm+VCapk121iHA7yYn5vBdy9tm39PMnRyAtiiCHmChrjJiYaYoghhpgMMSVPELMycsDLpBBDDDFX9WoEAItY0ztFTAkxl3wZYkoxbtb0UoybL0piiCGGGGLuPmZl3MT8788vI4YYtw/ww8e8GjcxCTE5YkqIKfEb0xo3MV7e9Ih5rhhXC4wPF8M+PWKIIeYIMSXEnMM+vSXElBBTQsx57NMDcG/Yp0cMMcQcYU1vwRPErG3YqbqdZaw12Nipus4yBo02blTdxjJGbdP8VJ+aOZqtQm8/+8o1894i+iA10YyqJx0TlDQyk92ng3Iv8dSbdNtrJiVhih+qHvN7tNQcasf0jTL1YrLjyL4BxXiBQQ/mtYYAAAAASUVORK5CYII=",
                        deleteIcon: "https://imgcdn.huanjutang.com/assets/img/20191017161178081.png",
                        maxLength: 6,
                        imgNum: 0,
                        comment_show: !1,
                        content: "",
                        type: "",
                        lottery_id: 0,
                        project_id: 0,
                        project_name: "",
                        typeIndex: -1,
                        inputTitle: "",
                        titleLen: 0,
                        maxTitleLen: 30,
                        isThisProjectSalesMan: !1,
                        inputContent: "",
                        contentLen: 0,
                        maxContentLength: 300,
                        userInfo: null,
                        imageList: []
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("快来发【".concat(this.project_name, "】楼盘的动态"));
                },
                onLoad: function() {
                    var e = u(i.default.mark(function e(n) {
                        var a, c;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.lottery_id = n.lottery_id, this.project_id = n.project_id, this.project_name = n.project_name, 
                                this.type = n.type, a = n.status, this.userInfo = o.cache.get("userinfo"), e.next = 8, 
                                r.default.isSaleMan(this.project_id);

                              case 8:
                                if (c = e.sent, this.isThisProjectSalesMan = 1 === Math.floor(c.data), 1 === Math.floor(c.data)) {
                                    e.next = 15;
                                    break;
                                }
                                return e.next = 13, o.tip.confirm("你不是该楼盘置业顾问，无法发布动态");

                              case 13:
                                return t.navigateBack(), e.abrupt("return");

                              case 15:
                                if (2 !== Math.floor(a)) {
                                    e.next = 18;
                                    break;
                                }
                                return e.next = 18, this.showModel();

                              case 18:
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
                    },
                    reliefUrl: function() {
                        return h.webview2Url("".concat(l.webviewHost, "/user/statement?id=15"));
                    }
                },
                methods: {
                    copyWechat: function() {
                        var e = this.serveicesWechat;
                        t.setClipboardData({
                            data: e,
                            success: function() {}
                        });
                    },
                    deleteImage: function() {
                        var t = u(i.default.mark(function t(e) {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.tip.confirm("请确认是否删除该图片？", "提示");

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
                        var t = u(i.default.mark(function t() {
                            var e, n, a = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.imgNum = 6 - this.imageList.length, t.next = 3, o.foundation.chooseImageSync({
                                        num: this.imgNum
                                    });

                                  case 3:
                                    return e = t.sent, n = e.tempFilePaths.map(function(t) {
                                        return o.foundation.uploadFileSync(t).catch(function(t) {
                                            return t;
                                        });
                                    }), t.prev = 5, t.next = 8, Promise.all(n);

                                  case 8:
                                    t.sent.forEach(function(t) {
                                        if (t.statusCode && t.data) if (200 !== Math.floor(t.statusCode)) o.tip.error("图片上传失败"); else {
                                            var e = t.data;
                                            if (0 !== Math.floor(e.status)) return void o.tip.error("图片上传失败");
                                            a.imageList = a.imageList.concat(e.data.url);
                                        }
                                    }), t.next = 15;
                                    break;

                                  case 12:
                                    t.prev = 12, t.t0 = t.catch(5), console.error(t.t0);

                                  case 15:
                                    this.imageList.length > this.maxLength && (o.tip.toast("单次最多上传".concat(this.maxLength, "图片"), "", "none", 3e3), 
                                    this.imageList = this.imageList.slice(0, this.maxLength));

                                  case 16:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 5, 12 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    previewImage: function(e) {
                        t.previewImage({
                            urls: [ e ]
                        });
                    },
                    handleConfirm: function() {
                        var t = u(i.default.mark(function t() {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.isThisProjectSalesMan) {
                                        t.next = 4;
                                        break;
                                    }
                                    return t.next = 3, o.tip.confirm("你不是该楼盘置业顾问，无法发布动态");

                                  case 3:
                                    return t.abrupt("return");

                                  case 4:
                                    this.submit();

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
                    getUserInfo: function() {
                        var t = this;
                        f().then(function(e) {
                            t.userInfo = e, t.submit.call(t);
                        }).catch(function() {});
                    },
                    cancelCommentShow: function() {
                        this.comment_show = !1;
                    },
                    choiceType: function(t, e) {
                        this.typeIndex = e;
                    },
                    bindTitleChange: function(t) {
                        this.inputTitle = t.detail.value, this.titleLen = this.inputTitle.length;
                    },
                    bindContentChange: function(t) {
                        this.inputContent = t.detail.value, this.contentLen = this.inputContent.length;
                    },
                    navigato: function(e) {
                        return t.navigateTo({
                            url: e
                        }), !1;
                    },
                    submit: function() {
                        var e = u(i.default.mark(function e() {
                            var n, a;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ((n = {
                                        project_id: this.project_id,
                                        title: this.inputTitle,
                                        content: this.inputContent,
                                        type: Math.floor(this.typeIndex) + 1,
                                        images: this.imageList
                                    }).type) {
                                        e.next = 4;
                                        break;
                                    }
                                    return o.tip.toast("请选择动态类型", "", "none"), e.abrupt("return");

                                  case 4:
                                    if (n.title) {
                                        e.next = 7;
                                        break;
                                    }
                                    return o.tip.toast("请填写动态标题", "", "none"), e.abrupt("return");

                                  case 7:
                                    if (n.content) {
                                        e.next = 10;
                                        break;
                                    }
                                    return o.tip.toast("请填写动态内容", "", "none"), e.abrupt("return");

                                  case 10:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 13, r.default.addDynamic(n);

                                  case 13:
                                    a = e.sent, t.hideLoading(), a && 0 === Math.floor(a.code) && t.showModal({
                                        title: "提示",
                                        showCancel: !1,
                                        content: "动态发布成功，等待客服人员审核",
                                        success: function() {
                                            t.navigateBack();
                                        }
                                    });

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    showModel: function() {
                        var e = u(i.default.mark(function e() {
                            var n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, r.default.getDynamic(this.project_id, this.type, 2, 1);

                                  case 3:
                                    n = e.sent, t.hideLoading(), this.comment_show = !0, this.content = n.data.content, 
                                    this.content = this.content.split("。"), this.content = this.content.filter(function(t) {
                                        return t.trimLeft();
                                    });

                                  case 9:
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
            e.default = p;
        }).call(this, n("543d").default);
    }
}, [ [ "3cd5", "common/runtime", "common/vendor", "subPackages/news/common/vendor" ] ] ]);