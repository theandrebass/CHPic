(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    w7AK: function(t, a, e) {
        "use strict";
        e.r(a);
        var s = {
                name: "home",
                data: () => ({
                    text_title: "Clubhouse Profile Pro"
                }),
                methods: {
                    text(t="app_name", a=this.$store.state.lang) {
                        return this.$store.state.language_pack[a] || (console.log(`[Language] language "${a}" is not supported, falled back to language "en".`), a = "en"), this.$store.state.language_pack[a][t] ? this.$store.state.language_pack[a][t] : this.$store.state.language_pack.en[t] ? (console.log(`[Language] cannot find "${t}" in "${a}" language pack, falled back to "en" language pack.`), this.$store.state.language_pack.en[t]) : ""
                    }
                },
                mounted: function() {
                    document.title = (this.title || this.text_title || document.title || "") + " | " + info.name
                }
            },
            n = e("KHd+"),
            i = Object(n.a)(s, (function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "home"
                }, [e("div", {
                    staticClass: "box",
                    on: {
                        click: function(a) {
                            return t.$router.push("/create/personal")
                        }
                    }
                }, [e("h2", [t._v(t._s(t.text("personal_avatar")))]), t._v(" "), e("span", [t._v(t._s(t.text("personal_avatar_description")))]), t._v(" "), t._m(0)]), t._v(" "), e("div", {
                    staticClass: "box",
                    on: {
                        click: function(a) {
                            return t.$router.push("/create/club")
                        }
                    }
                }, [e("h2", [t._v(t._s(t.text("club_icon")))]), t._v(" "), e("span", [t._v(t._s(t.text("club_icon_description")))]), t._v(" "), t._m(1)]), t._v(" "), e("div", {
                    staticClass: "box",
                    staticStyle: {
                        display: "none"
                    },
                    on: {
                        click: function(a) {
                            t.window.location.href = "https://chpic.xyz"
                        }
                    }
                }, [e("h2", [t._v(t._s(t.text("legacy_version")))]), t._v(" "), e("span", [t._v(t._s(t.text("legacy_version_description")))])])])
            }), [function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "img-set"
                }, [e("img", {
                    attrs: {
                        src: "/static/images/personal-1.png"
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/images/personal-2.png"
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/images/personal-3.png"
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/images/personal-4.png"
                    }
                })])
            }, function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "img-set"
                }, [e("img", {
                    attrs: {
                        src: "/static/images/club-1.png"
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/images/club-2.png"
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/images/club-3.png"
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/images/club-4.png"
                    }
                })])
            }], !1, null, "9bb670f6", null);
        a.default = i.exports
    }
}]);