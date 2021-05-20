(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    Wp6G: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = {
                name: "create",
                data: () => ({
                    text_title: "Create",
                    tab: "upload",
                    avatar: null,
                    background: null,
                    product: null,
                    processing: !1,
                    radius: 2.5,
                    size: 900,
                    max_size: 1e3,
                    precision: 180,
                    shadow: 0,
                    create_border: null,
                    language_pack: language_pack,
                    state: {
                        preset_image_downloading: !1,
                        font_downloading: !1
                    },
                    avatar_text: {
                        content: "",
                        size: 64,
                        weight: 4,
                        font: "Arial",
                        color: "#000000",
                        border_color: "#ffffff",
                        x: 0,
                        y: 350,
                        border_width: 6
                    },
                    font: {
                        arial: null,
                        openhuninn: "https://cdn.jsdelivr.net/gh/marsnow/open-huninn-font@1.1/font/jf-openhuninn.woff2",
                        naikai: "https://cdn.jsdelivr.net/gh/max32002/naikaifont/webfont/NaikaiFont-Regular.woff2",
                        jasonhandwriting3: "https://cdn.jsdelivr.net/gh/jasonhandwriting/JasonHandwriting/JasonHandwriting3.ttf"
                    }
                }),
                methods: {
                    text(t="app_name", e=this.$store.state.lang) {
                        return this.$store.state.language_pack[e] || (console.log(`[Language] language "${e}" is not supported, falled back to language "en".`), e = "en"), this.$store.state.language_pack[e][t] ? this.$store.state.language_pack[e][t] : this.$store.state.language_pack.en[t] ? (console.log(`[Language] cannot find "${t}" in "${e}" language pack, falled back to "en" language pack.`), this.$store.state.language_pack.en[t]) : ""
                    },
                    switch_tab(t="upload") {
                        this.tab = t;
                        let e = this;
                        ["upload", "text", "settings"].forEach((t => {
                            e.$refs["tab_c_" + t].classList.remove("active")
                        })),
                        e.$refs["tab_c_" + t].classList.add("active")
                    },
                    upload_avatar() {
                        let t = this,
                            e = new FileReader;
                        e.onload = function(e) {
                            t.avatar = e.target.result,
                            console.log("Avatar uploaded."),
                            t.draw()
                        },
                        e.readAsDataURL(this.$refs.avatar.files[0])
                    },
                    upload_background() {
                        let t = this,
                            e = new FileReader;
                        e.onload = function(e) {
                            t.background = e.target.result,
                            console.log("Background uploaded."),
                            t.draw()
                        },
                        e.readAsDataURL(this.$refs.background.files[0])
                    },
                    async init_border_creator() {
                        console.log("Init Border Creator.");
                        let t = this;
                        t.create_border ? setTimeout((() => {
                            t.$refs.create_border.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }), 100) : t.create_border = {
                            template: 2,
                            color: ["#66c9ff", "#66fec2", "#d357fe", "#ffc677"],
                            preset_img: "instagram",
                            img: null
                        },
                        await t.border_creator_render()
                    },
                    async border_creator_render() {
                        let t = parseInt(this.create_border.template),
                            e = document.createElement("canvas");
                        e.width = e.height = 1e3;
                        let a = e.getContext("2d");
                        if (console.log({
                            template: t,
                            color: this.create_border.color
                        }), 1 == t)
                            a.fillStyle = this.create_border.color[0],
                            a.fillRect(0, 0, 1e3, 1e3);
                        else if (2 == t) {
                            a.fillStyle = this.create_border.color[0],
                            a.fillRect(0, 0, 1e3, 1e3);
                            let t = a.createRadialGradient(1e3, 0, 0, 1e3, 0, 800),
                                e = this.create_border.color[1];
                            Math.pow(parseInt(e.substr(1, 2), 16), 2),
                            Math.pow(parseInt(e.substr(3, 2), 16), 2),
                            Math.pow(parseInt(e.substr(5, 2), 16), 2);
                            t.addColorStop(0, e),
                            t.addColorStop(1, e + "00"),
                            a.fillStyle = t,
                            a.fillRect(0, 0, 1e3, 1e3);
                            let r = a.createRadialGradient(0, 1e3, 0, 0, 1e3, 800);
                            r.addColorStop(0, e),
                            r.addColorStop(1, e + "00"),
                            a.fillStyle = r,
                            a.fillRect(0, 0, 1e3, 1e3)
                        } else if (3 == t) {
                            a.fillStyle = this.create_border.color[0],
                            a.fillRect(0, 0, 1e3, 1e3);
                            let t = a.createRadialGradient(1e3, 0, 0, 1e3, 0, 800);
                            t.addColorStop(0, this.create_border.color[1]),
                            t.addColorStop(1, this.create_border.color[1] + "00"),
                            a.fillStyle = t,
                            a.fillRect(0, 0, 1e3, 1e3);
                            let e = a.createRadialGradient(0, 1e3, 0, 0, 1e3, 800);
                            e.addColorStop(0, this.create_border.color[2]),
                            e.addColorStop(1, this.create_border.color[2] + "00"),
                            a.fillStyle = e,
                            a.fillRect(0, 0, 1e3, 1e3)
                        } else if (4 == t) {
                            a.fillStyle = this.create_border.color[0],
                            a.fillRect(0, 0, 1e3, 1e3);
                            let t = a.createRadialGradient(1e3, 0, 0, 1e3, 0, 800);
                            t.addColorStop(0, this.create_border.color[1]),
                            t.addColorStop(1, this.create_border.color[1] + "00"),
                            a.fillStyle = t,
                            a.fillRect(0, 0, 1e3, 1e3);
                            let e = a.createRadialGradient(0, 1e3, 0, 0, 1e3, 800);
                            e.addColorStop(0, this.create_border.color[2]),
                            e.addColorStop(1, this.create_border.color[2] + "00"),
                            a.fillStyle = e,
                            a.fillRect(0, 0, 1e3, 1e3);
                            let r = a.createRadialGradient(1e3, 1e3, 0, 1e3, 1e3, 800);
                            r.addColorStop(0, this.create_border.color[3]),
                            r.addColorStop(1, this.create_border.color[3] + "00"),
                            a.fillStyle = r,
                            a.fillRect(0, 0, 1e3, 1e3)
                        } else if (-1 == t) {
                            this.state.preset_image_downloading = !0,
                            a.clearRect(0, 0, 1e3, 1e3);
                            let t = new Image,
                                e = new Promise(((e, a) => {
                                    t.addEventListener("load", (function() {
                                        e()
                                    }), !1)
                                }));
                            t.src = `/static/images/preset/${this.create_border.preset_img}.jpg`,
                            await e,
                            a.drawImage(t, 0, 0, 1e3, 1e3),
                            this.state.preset_image_downloading = !1
                        }
                        this.background = this.create_border.img = e.toDataURL("image/png"),
                        this.draw()
                    },
                    async draw() {
                        let t = this;
                        if (!t.avatar || !t.background)
                            return;
                        if (1 == t.processing)
                            return;
                        t.processing = !0;
                        let e = t.$refs.canvas.getContext("2d"),
                            a = new Image,
                            r = new Promise(((t, e) => {
                                a.addEventListener("load", (function() {
                                    t()
                                }), !1)
                            }));
                        a.src = t.background;
                        let o = new Image,
                            s = new Promise(((t, e) => {
                                o.addEventListener("load", (function() {
                                    t()
                                }), !1)
                            }));
                        o.src = t.avatar;
                        let i = parseInt(t.max_size) / 2,
                            n = parseInt(t.precision),
                            l = parseInt(t.max_size),
                            c = parseInt(t.size),
                            d = parseFloat(t.radius);
                        e.clearRect(0, 0, l, l),
                        await r,
                        t.DRAW.drawClippedImage(e, a, i, i, i, d, n),
                        await s,
                        parseInt(t.shadow) && (e.shadowColor = "black", e.shadowBlur = parseInt(t.shadow)),
                        t.DRAW.drawClippedImage(e, o, i, i, c / 2, d, n),
                        e.save(),
                        t.DRAW.clipAvatarShape(e, i, i, i, d, n),
                        await t.load_font(t.avatar_text.font, t.font[t.avatar_text.font]),
                        e.font = `${100 * parseInt(t.avatar_text.weight)} ${5 * parseInt(t.avatar_text.size)}px ${t.avatar_text.font}`,
                        e.textAlign = "center",
                        e.textBaseline = "middle",
                        e.lineJoin = "round",
                        e.lineWidth = t.avatar_text.border_width,
                        e.strokeStyle = t.avatar_text.border_color,
                        e.strokeText(t.avatar_text.content, .5 * l + parseFloat(t.avatar_text.x), .5 * l + parseFloat(t.avatar_text.y)),
                        e.fillStyle = t.avatar_text.color,
                        e.fillText(t.avatar_text.content, .5 * l + parseFloat(t.avatar_text.x), .5 * l + parseFloat(t.avatar_text.y)),
                        e.restore(),
                        t.product = t.$refs.canvas.toDataURL("image/png"),
                        t.processing = !1
                    },
                    async download() {
                        let t = await new Promise((t => {
                                self.$refs.canvas.toBlob((e => {
                                    t(e)
                                }))
                            })),
                            e = document.createElement("a");
                        e.download = "avatar.png",
                        e.href = URL.createObjectURL(t),
                        e.click()
                    },
                    async load_font(t, e) {
                        let a = this;
                        return !this.font[t] || (this.state.font_downloading = !0, console.log("[Font Loader] Loading Font", {
                                fontface: t,
                                url: e
                            }), new FontFace(t, `url(${e})`).load().then((e => {
                                document.fonts.add(e),
                                this.font[t] = !1,
                                a.state.font_downloading = !1
                            })).catch((t => {
                                console.log(`[Font Loader] Error: ${t}`)
                            })))
                    },
                    default_avatar() {
                        let t = document.createElement("canvas");
                        t.width = t.height = 1e3;
                        let e = t.getContext("2d");
                        return e.fillStyle = "#fff", e.fillRect(0, 0, 1e3, 1e3), e.font = "300px Arial", e.textAlign = "center", e.textBaseline = "middle", e.fillText("👋", 500, 500), t.toDataURL("image/jpg")
                    },
                    set_tips() {
                        let t = this;
                        t.$tip(t.$refs.product, {
                            content: t.text("save_guide"),
                            onShow(e) {
                                e.setContent(t.text("save_guide"))
                            }
                        })
                    },
                    export_settings() {
                        let t = {
                            ver: this.version,
                            bdc: {
                                tpl: this.create_border.template,
                                clr: this.create_border.color,
                                psi: this.create_border.preset_img
                            },
                            txt: {
                                cnt: this.avatar_text.content,
                                sze: this.avatar_text.size,
                                wgt: this.avatar_text.weight,
                                fnt: this.avatar_text.font,
                                clr: this.avatar_text.color,
                                bdc: this.avatar_text.border_color,
                                x: this.avatar_text.x,
                                y: this.avatar_text.y,
                                bdw: this.avatar_text.border_width
                            },
                            adv: {
                                rds: this.radius,
                                sze: this.size,
                                pcs: this.precision
                            }
                        };
                        return JSON.stringify(t)
                    },
                    import_settings(t) {
                        t = JSON.parse(t);
                        let e = Number(this.version.substring(1).split(".").map((t => t.padStart(2, "0"))).join(""));
                        return !(Number(t.ver.substring(1).split(".").map((t => t.padStart(2, "0"))).join("")) > e) && (this.radius = t.adv.rds, this.size = t.adv.sze, this.precision = t.adv.pcs, this.avatar_text.content = t.txt.cnt, this.avatar_text.size = t.txt.sze, this.avatar_text.weight = t.txt.wgt, this.avatar_text.font = t.txt.fnt, this.avatar_text.color = t.txt.clr, this.avatar_text.border_color = t.txt.bdc, this.avatar_text.x = t.txt.x, this.avatar_text.y = t.txt.y, this.avatar_text.border_width = t.txt.bdw, this.create_border.template = t.bdc.tpl, this.create_border.color = t.bdc.clr, this.create_border.preset_img = t.bdc.psi, this.border_creator_render(), this.draw(), !0)
                    },
                    check_type() {
                        let t = this.$route.params.type;
                        this.radius = "club" == t ? 6 : 2.5
                    }
                },
                async mounted() {
                    document.title = (this.title || this.text_title || document.title || "") + " | " + info.name,
                    this.check_type(),
                    await this.init_border_creator(),
                    this.avatar = this.default_avatar(),
                    await wait(300),
                    this.draw(),
                    this.set_tips()
                }
            },
            o = a("KHd+"),
            s = Object(o.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "create"
                }, [a("div", {
                    staticClass: "mb-3",
                    attrs: {
                        id: "intro_area"
                    }
                }, [a("p", {
                    staticStyle: {
                        "white-space": "pre-wrap"
                    }
                }, [t._v(t._s(t.text("app_guide")))])]), t._v(" "), a("div", {
                    staticClass: "mb-3 d-flex flex-column justify-content-center align-items-between",
                    attrs: {
                        id: "main_content"
                    }
                }, [a("div", {
                    attrs: {
                        id: "preview"
                    }
                }, [a("div", {
                    staticClass: "mb-3 d-flex flex-column justify-content-center align-items-center",
                    staticStyle: {
                        "min-height": "160px"
                    },
                    attrs: {
                        id: "product_area"
                    }
                }, [a("img", {
                    ref: "product",
                    staticClass: "my-3",
                    staticStyle: {
                        "max-width": "300px",
                        width: "50%"
                    },
                    attrs: {
                        src: t.product
                    }
                }), t._v(" "), a("canvas", {
                    ref: "canvas",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        width: "1000",
                        height: "1000"
                    }
                }), t._v(" "), a("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1,
                        expression: "false"
                    }],
                    staticClass: "btn btn-outline-primary",
                    on: {
                        click: function(e) {
                            return t.download()
                        }
                    }
                }, [t._v(t._s(t.text("download")))])])]), t._v(" "), a("div", {
                    attrs: {
                        id: "tools"
                    }
                }, [a("div", {
                    staticClass: "mb-2 d-flex flex-column justify-content-center align-items-center",
                    attrs: {
                        id: "tab-control"
                    }
                }, [a("div", {
                    staticClass: "btn-group",
                    attrs: {
                        role: "group"
                    }
                }, [a("button", {
                    ref: "tab_c_upload",
                    staticClass: "btn btn-outline-primary active",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.switch_tab("upload")
                        }
                    }
                }, [t._v("\n                        " + t._s(t.text("upload_images")) + "\n                    ")]), t._v(" "), a("button", {
                    ref: "tab_c_text",
                    staticClass: "btn btn-outline-primary",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.switch_tab("text")
                        }
                    }
                }, [t._v(t._s(t.text("set_text")))]), t._v(" "), a("button", {
                    ref: "tab_c_settings",
                    staticClass: "btn btn-outline-primary",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.switch_tab("settings")
                        }
                    }
                }, [t._v("\n                        " + t._s(t.text("settings")) + "\n                    ")])])]), t._v(" "), a("div", {
                    attrs: {
                        id: "tabs"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, ["upload" == t.tab ? a("div", {
                    key: "upload",
                    staticClass: "mb-3",
                    attrs: {
                        id: "upload_area"
                    }
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col"
                }, [a("span", {
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [t._v(t._s(t.text("avatar_image")))]), a("br"), t._v(" "), a("label", {
                    ref: "avatar_label",
                    staticClass: "btn btn-outline-primary"
                }, [a("span", [t._v(t._s(t.text("upload_avatar")))]), t._v(" "), a("input", {
                    ref: "avatar",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        type: "file"
                    },
                    on: {
                        change: function(e) {
                            return t.upload_avatar()
                        }
                    }
                })]), a("br"), a("br"), t._v(" "), t.avatar ? a("img", {
                    staticClass: "mt-2",
                    staticStyle: {
                        "max-width": "300px",
                        width: "100%",
                        "border-radius": "3px",
                        border: "1px solid lightgray"
                    },
                    attrs: {
                        src: t.avatar
                    }
                }) : t._e(), t._v(" "), a("br")]), t._v(" "), a("div", {
                    staticClass: "col"
                }, [a("span", {
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [t._v(t._s(t.text("border_image")))]), a("br"), t._v(" "), a("label", {
                    ref: "border_label",
                    staticClass: "btn btn-outline-primary"
                }, [a("span", [t._v(t._s(t.text("upload_border")))]), t._v(" "), a("input", {
                    ref: "background",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        type: "file"
                    },
                    on: {
                        change: function(e) {
                            return t.upload_background()
                        }
                    }
                })]), a("br"), t._v(" "), a("span", [t._v("\n                                    " + t._s(t.text("or")) + "\n                                    "), a("a", {
                    attrs: {
                        href: "javascript:null"
                    },
                    on: {
                        click: function(e) {
                            return t.init_border_creator()
                        }
                    }
                }, [t._v(t._s(t.text("create_one")))])]), t._v(" "), a("br"), t._v(" "), t.background ? a("img", {
                    staticClass: "mt-2",
                    staticStyle: {
                        "max-width": "300px",
                        width: "100%",
                        "border-radius": "3px",
                        border: "1px solid lightgray"
                    },
                    attrs: {
                        src: t.background
                    }
                }) : t._e()])]), t._v(" "), a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col"
                }, [t.create_border ? a("div", {
                    ref: "create_border",
                    staticClass: "my-3",
                    attrs: {
                        id: "create_border"
                    }
                }, [a("h2", [t._v(t._s(t.text("create_your_border")))]), t._v(" "), a("div", {
                    staticClass: "form-group",
                    staticStyle: {
                        "max-width": "300px"
                    }
                }, [a("label", {
                    attrs: {
                        for: "select_template"
                    }
                }, [t._v(t._s(t.text("select_template")))]), t._v(" "), a("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.create_border.template,
                        expression: "create_border.template"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        id: "select_template"
                    },
                    on: {
                        change: [function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.$set(t.create_border, "template", e.target.multiple ? a : a[0])
                        }, function(e) {
                            return t.border_creator_render()
                        }]
                    }
                }, [a("option", {
                    attrs: {
                        selected: "",
                        value: "1"
                    }
                }, [t._v("1 Color")]), t._v(" "), a("option", {
                    attrs: {
                        value: "2"
                    }
                }, [t._v("2 Colors")]), t._v(" "), a("option", {
                    attrs: {
                        value: "3"
                    }
                }, [t._v("3 Colors")]), t._v(" "), a("option", {
                    attrs: {
                        value: "4"
                    }
                }, [t._v("4 Colors")]), t._v(" "), a("option", {
                    attrs: {
                        value: "-1"
                    }
                }, [t._v("Preset Images")])])]), t._v(" "), a("transition", {
                    attrs: {
                        name: "preset-img-select"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.create_border.template < 0,
                        expression: "create_border.template < 0"
                    }],
                    staticClass: "border-preset-img-select"
                }, [a("div", {
                    staticClass: "form-group",
                    staticStyle: {
                        "max-width": "300px"
                    }
                }, [a("label", {
                    attrs: {
                        for: "b_preset_img"
                    }
                }, [t._v(t._s(t.text("choose_image")) + "\n                                                    "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.state.preset_image_downloading,
                        expression: "state.preset_image_downloading"
                    }],
                    staticClass: "text-muted"
                }, [t._v(t._s(t.text("preset_image_downloading")) + "...")])]), t._v(" "), a("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.create_border.preset_img,
                        expression: "create_border.preset_img"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        id: "b_preset_img"
                    },
                    on: {
                        change: [function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.$set(t.create_border, "preset_img", e.target.multiple ? a : a[0])
                        }, function(e) {
                            return t.border_creator_render()
                        }]
                    }
                }, [a("option", {
                    attrs: {
                        value: "instagram",
                        select: ""
                    }
                }, [t._v("Instagram Palette")]), t._v(" "), a("option", {
                    attrs: {
                        value: "wood_texture",
                        select: ""
                    }
                }, [t._v("Wood Texture")]), t._v(" "), a("option", {
                    attrs: {
                        value: "leaves_texture",
                        select: ""
                    }
                }, [t._v("Leaves Texture")]), t._v(" "), a("option", {
                    attrs: {
                        value: "colorful_stripes",
                        select: ""
                    }
                }, [t._v("Colorful Stripes")]), t._v(" "), a("option", {
                    attrs: {
                        value: "road_yellow",
                        select: ""
                    }
                }, [t._v("Road & Yellow Lines")]), t._v(" "), a("option", {
                    attrs: {
                        value: "old_wood",
                        select: ""
                    }
                }, [t._v("Old Wood")]), t._v(" "), a("option", {
                    attrs: {
                        value: "sand_wave",
                        select: ""
                    }
                }, [t._v("Sand Waves")]), t._v(" "), a("option", {
                    attrs: {
                        value: "strings",
                        select: ""
                    }
                }, [t._v("Strings")])])])])]), t._v(" "), a("transition", {
                    attrs: {
                        name: "color-select"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.create_border.template > 0,
                        expression: "create_border.template > 0"
                    }],
                    staticClass: "border-color-select"
                }, [a("label", {
                    attrs: {
                        for: "b_color_0"
                    }
                }, [t._v(t._s(t.text("color")) + " 1")]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.create_border.color[0],
                        expression: "create_border.color[0]"
                    }],
                    attrs: {
                        type: "color",
                        id: "b_color_0"
                    },
                    domProps: {
                        value: t.create_border.color[0]
                    },
                    on: {
                        change: function(e) {
                            return t.border_creator_render()
                        },
                        input: function(e) {
                            e.target.composing || t.$set(t.create_border.color, 0, e.target.value)
                        }
                    }
                })])]), t._v(" "), a("transition", {
                    attrs: {
                        name: "color-select"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.create_border.template > 1,
                        expression: "create_border.template > 1"
                    }],
                    staticClass: "border-color-select"
                }, [a("label", {
                    attrs: {
                        for: "b_color_1"
                    }
                }, [t._v(t._s(t.text("color")) + " 2")]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.create_border.color[1],
                        expression: "create_border.color[1]"
                    }],
                    attrs: {
                        type: "color",
                        id: "b_color_1"
                    },
                    domProps: {
                        value: t.create_border.color[1]
                    },
                    on: {
                        change: function(e) {
                            return t.border_creator_render()
                        },
                        input: function(e) {
                            e.target.composing || t.$set(t.create_border.color, 1, e.target.value)
                        }
                    }
                })])]), t._v(" "), a("transition", {
                    attrs: {
                        name: "color-select"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.create_border.template > 2,
                        expression: "create_border.template > 2"
                    }],
                    staticClass: "border-color-select"
                }, [a("label", {
                    attrs: {
                        for: "b_color_1"
                    }
                }, [t._v(t._s(t.text("color")) + " 3")]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.create_border.color[2],
                        expression: "create_border.color[2]"
                    }],
                    attrs: {
                        type: "color",
                        id: "b_color_2"
                    },
                    domProps: {
                        value: t.create_border.color[2]
                    },
                    on: {
                        change: function(e) {
                            return t.border_creator_render()
                        },
                        input: function(e) {
                            e.target.composing || t.$set(t.create_border.color, 2, e.target.value)
                        }
                    }
                })])]), t._v(" "), a("transition", {
                    attrs: {
                        name: "color-select"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.create_border.template > 3,
                        expression: "create_border.template > 3"
                    }],
                    staticClass: "border-color-select"
                }, [a("label", {
                    attrs: {
                        for: "b_color_1"
                    }
                }, [t._v(t._s(t.text("color")) + " 4")]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.create_border.color[3],
                        expression: "create_border.color[3]"
                    }],
                    attrs: {
                        type: "color",
                        id: "b_color_3"
                    },
                    domProps: {
                        value: t.create_border.color[3]
                    },
                    on: {
                        change: function(e) {
                            return t.border_creator_render()
                        },
                        input: function(e) {
                            e.target.composing || t.$set(t.create_border.color, 3, e.target.value)
                        }
                    }
                })])]), t._v(" "), t.create_border.img ? a("img", {
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        src: t.create_border.img
                    }
                }) : t._e()], 1) : t._e()])])]) : "text" == t.tab ? a("div", {
                    key: "text",
                    staticClass: "mb-3",
                    attrs: {
                        id: "text_area"
                    }
                }, [a("div", {
                    staticClass: "form-group"
                }, [a("label", {
                    attrs: {
                        for: "text_content"
                    }
                }, [t._v(t._s(t.text("text_content")))]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.content,
                        expression: "avatar_text.content"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "text",
                        id: "text_content",
                        placeholder: t.text("text_content_placeholder")
                    },
                    domProps: {
                        value: t.avatar_text.content
                    },
                    on: {
                        input: [function(e) {
                            e.target.composing || t.$set(t.avatar_text, "content", e.target.value)
                        }, function(e) {
                            return t.draw()
                        }]
                    }
                })]), t._v(" "), a("div", [a("label", {
                    attrs: {
                        for: "t_color"
                    }
                }, [t._v(t._s(t.text("text_color")))]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.color,
                        expression: "avatar_text.color"
                    }],
                    attrs: {
                        type: "color",
                        id: "t_color"
                    },
                    domProps: {
                        value: t.avatar_text.color
                    },
                    on: {
                        change: function(e) {
                            return t.draw()
                        },
                        input: function(e) {
                            e.target.composing || t.$set(t.avatar_text, "color", e.target.value)
                        }
                    }
                }), t._v(" "), a("label", {
                    staticClass: "ml-3",
                    attrs: {
                        for: "t_border_color"
                    }
                }, [t._v(t._s(t.text("text_border_color")))]), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.border_color,
                        expression: "avatar_text.border_color"
                    }],
                    attrs: {
                        type: "color",
                        id: "t_border_color"
                    },
                    domProps: {
                        value: t.avatar_text.border_color
                    },
                    on: {
                        change: function(e) {
                            return t.draw()
                        },
                        input: function(e) {
                            e.target.composing || t.$set(t.avatar_text, "border_color", e.target.value)
                        }
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "form-group mb-2",
                    staticStyle: {
                        "max-width": "300px"
                    }
                }, [a("label", {
                    attrs: {
                        for: "text_font"
                    }
                }, [t._v(t._s(t.text("text_font")) + "\n                                "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.state.font_downloading,
                        expression: "state.font_downloading"
                    }],
                    staticClass: "text-muted"
                }, [t._v(t._s(t.text("font_downloading")) + "...")])]), t._v(" "), a("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.font,
                        expression: "avatar_text.font"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        id: "text_font"
                    },
                    on: {
                        change: [function(e) {
                            var a = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.$set(t.avatar_text, "font", e.target.multiple ? a : a[0])
                        }, function(e) {
                            return t.draw()
                        }]
                    }
                }, [a("option", {
                    attrs: {
                        selected: "",
                        value: "arial"
                    }
                }, [t._v("Arial")]), t._v(" "), a("option", {
                    attrs: {
                        value: "openhuninn"
                    }
                }, [t._v("Open Huninn (3.0 M)")]), t._v(" "), a("option", {
                    attrs: {
                        value: "naikai"
                    }
                }, [t._v("Naikai Font (12.2 M)")]), t._v(" "), a("option", {
                    attrs: {
                        value: "jasonhandwriting3"
                    }
                }, [t._v("Jason Handwriting 3 (2.2 M)")])])]), t._v(" "), a("div", {
                    staticClass: "form-group mb-2"
                }, [a("label", {
                    attrs: {
                        for: "text_size"
                    }
                }, [t._v(t._s(t.text("text_size")) + ": " + t._s(t.avatar_text.size))]), t._v(" "), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.size,
                        expression: "avatar_text.size"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "range",
                        id: "text_size",
                        max: "144",
                        min: "1",
                        step: "1"
                    },
                    domProps: {
                        value: t.avatar_text.size
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            return t.$set(t.avatar_text, "size", e.target.value)
                        }
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "form-group mb-2"
                }, [a("label", {
                    attrs: {
                        for: "text_weight"
                    }
                }, [t._v(t._s(t.text("text_weight")) + ": " + t._s(t.avatar_text.weight))]), t._v(" "), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.weight,
                        expression: "avatar_text.weight"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "range",
                        id: "text_weight",
                        max: "9",
                        min: "1",
                        step: "1"
                    },
                    domProps: {
                        value: t.avatar_text.weight
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            return t.$set(t.avatar_text, "weight", e.target.value)
                        }
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "form-group mb-2"
                }, [a("label", {
                    attrs: {
                        for: "text_border"
                    }
                }, [t._v(t._s(t.text("text_border")) + ": " + t._s(t.avatar_text.border_width))]), t._v(" "), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.border_width,
                        expression: "avatar_text.border_width"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "range",
                        id: "text_border",
                        max: "30",
                        min: "0",
                        step: "1"
                    },
                    domProps: {
                        value: t.avatar_text.border_width
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            return t.$set(t.avatar_text, "border_width", e.target.value)
                        }
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "form-group mb-2"
                }, [a("label", {
                    attrs: {
                        for: "text_x"
                    }
                }, [t._v(t._s(t.text("text_x")) + ": " + t._s(t.avatar_text.x))]), t._v(" "), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.x,
                        expression: "avatar_text.x"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "range",
                        id: "text_x",
                        max: "400",
                        min: "-400",
                        step: "5"
                    },
                    domProps: {
                        value: t.avatar_text.x
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            return t.$set(t.avatar_text, "x", e.target.value)
                        }
                    }
                })]), t._v(" "), a("div", {
                    staticClass: "form-group mb-2"
                }, [a("label", {
                    attrs: {
                        for: "text_y"
                    }
                }, [t._v(t._s(t.text("text_y")) + ": " + t._s(t.avatar_text.y))]), t._v(" "), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.avatar_text.y,
                        expression: "avatar_text.y"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "range",
                        id: "text_y",
                        max: "450",
                        min: "-450",
                        step: "5"
                    },
                    domProps: {
                        value: t.avatar_text.y
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            return t.$set(t.avatar_text, "y", e.target.value)
                        }
                    }
                })]), t._v(" "), a("br")]) : "settings" == t.tab ? a("div", {
                    key: "settings",
                    staticClass: "mb-3",
                    attrs: {
                        id: "settings_area"
                    }
                }, [a("label", {
                    attrs: {
                        for: "avatar_radius"
                    }
                }, [t._v(t._s(t.text("avatar_radius")) + ": " + t._s(t.radius) + " ")]), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.radius,
                        expression: "radius"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        id: "avatar_radius",
                        type: "range",
                        min: "1",
                        max: "6",
                        step: "0.05"
                    },
                    domProps: {
                        value: t.radius
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            t.radius = e.target.value
                        }
                    }
                }), t._v(" "), a("br"), t._v(" "), a("label", {
                    attrs: {
                        for: "avatar_size"
                    }
                }, [t._v(t._s(t.text("avatar_size")) + ": " + t._s(t.size) + " ")]), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.size,
                        expression: "size"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        id: "avatar_size",
                        type: "range",
                        min: "0",
                        max: "1000",
                        step: "1"
                    },
                    domProps: {
                        value: t.size
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            t.size = e.target.value
                        }
                    }
                }), t._v(" "), a("br"), t._v(" "), a("label", {
                    attrs: {
                        for: "avatar_precision"
                    }
                }, [t._v(t._s(t.text("avatar_precision")) + ": " + t._s(t.precision) + " ")]), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.precision,
                        expression: "precision"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        id: "avatar_precision",
                        type: "range",
                        min: "60",
                        max: "720",
                        step: "60"
                    },
                    domProps: {
                        value: t.precision
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            t.precision = e.target.value
                        }
                    }
                }), t._v(" "), a("br"), t._v(" "), a("label", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1,
                        expression: "false"
                    }]
                }, [t._v("Shadow Strength: " + t._s(t.shadow) + " ")]), a("br"), t._v(" "), a("input", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1,
                        expression: "false"
                    }, {
                        name: "model",
                        rawName: "v-model",
                        value: t.shadow,
                        expression: "shadow"
                    }],
                    staticClass: "custom-range",
                    staticStyle: {
                        "max-width": "300px"
                    },
                    attrs: {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "1"
                    },
                    domProps: {
                        value: t.shadow
                    },
                    on: {
                        input: function(e) {
                            return t.draw()
                        },
                        __r: function(e) {
                            t.shadow = e.target.value
                        }
                    }
                }), t._v(" "), a("br"), t._v(" "), a("button", {
                    staticClass: "btn btn-outline-primary",
                    on: {
                        click: function(e) {
                            t.window.prompt("Copy Settings", t.export_settings())
                        }
                    }
                }, [t._v("\n                            " + t._s(t.text("export_settings")) + "\n                        ")]), t._v(" "), a("button", {
                    staticClass: "btn btn-outline-primary",
                    on: {
                        click: function(e) {
                            t.import_settings(t.window.prompt("Paste Settings", ""))
                        }
                    }
                }, [t._v("\n                            " + t._s(t.text("import_settings")) + "\n                        ")])]) : t._e()])], 1)])])])
            }), [], !1, null, "554205f2", null);
        e.default = s.exports
    }
}]);