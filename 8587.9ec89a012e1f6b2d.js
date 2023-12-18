"use strict";
(self.webpackChunkdorkl = self.webpackChunkdorkl || []).push([
    [8587], {
        8587: (w, g, r) => {
            r.r(g), r.d(g, {
                DashboardModule: () => S
            });
            var e = r(6814),
                h = r(5195),
                k = r(3348),
                x = r(2972),
                m = r(6903),
                u = r(2272),
                f = r(6223),
                b = r(6208),
                i = r(2009),
                t = r(5879),
                c = r(4414);

            function p(n, C) {
                1 & n && (t.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6)(5, "span", 7), t._uU(6, "Are you ready?"), t.qZA()(), t.TgZ(7, "h5", 6)(8, "span", 8), t._uU(9, "Join the Dork Side "), t.qZA(), t._uU(10, "Now!"), t.qZA(), t.TgZ(11, "a", 9)(12, "button", 10), t._uU(13, "Buy $DORKL"), t.qZA()()(), t.TgZ(14, "div", 5)(15, "div", 11), t._UZ(16, "img", 12), t.qZA()()()()())
            }

            function d(n, C) {
                1 & n && (t.TgZ(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "a", 17), t._UZ(5, "img", 18), t.qZA()()(), t.TgZ(6, "a", 19)(7, "span"), t._uU(8, " Tweets by DorkLordToken "), t.qZA()()()())
            }
            let Z = (() => {
                    class n {
                        innerWidth;
                        loadScript() {
                            let a = document.body,
                                o = document.createElement("script");
                            o.innerHTML = "", o.src = "https://platform.twitter.com/widgets.js", o.defer = !0, a.appendChild(o)
                        }
                        ngOnInit() {
                            this.innerWidth = window.innerWidth, this.innerWidth > 1e3 && this.loadScript()
                        }
                        static\ u0275fac = function(o) {
                            return new(o || n)
                        };
                        static\ u0275cmp = t.Xpm({
                            type: n,
                            selectors: [
                                ["app-social-user-profile"]
                            ],
                            decls: 2,
                            vars: 2,
                            consts: [
                                ["class", "card mobile-app-card", 4, "ngIf"],
                                ["class", "card social-profile", 4, "ngIf"],
                                [1, "card", "mobile-app-card"],
                                [1, "card-header", "card-no-border", "pb-0", 2, "width", "100%"],
                                [1, "row"],
                                [1, "col-6", "col-md-6", "col-sm-12", "col-xxl-6", "col-ed-6", "col-xl-6", "box-col-6"],
                                [1, "mb-3"],
                                [1, "f-16", "f-bold"],
                                [1, "f-16", "f-light"],
                                ["href", "/blog/uniswap"],
                                ["type", "button", 1, "purchase-btn", "btn", "btn-success", "btn-hover-effect", "f-w-500", "mb-2"],
                                [1, "card-body", "p-0", "text-end"],
                                ["src", "assets/images/dorkl/memes/File58.jpg", "alt", "", 2, "max-width", "100%", "padding", "5px", "border-radius", "10px"],
                                [1, "card", "social-profile"],
                                [1, "card-body"],
                                [1, "social-img-wrap", 2, "margin-bottom", "15px"],
                                [1, "social-img"],
                                ["href", "https://twitter.com/DorkLordToken", "target", "_blank"],
                                ["src", "assets/images/dorkl/dorkl_twitter.jpg", "alt", "profile"],
                                ["data-height", "1100", "href", "https://twitter.com/DorkLordToken?ref_src=twsrc%5Etfw", "target", "_blank", 1, "twitter-timeline"]
                            ],
                            template: function(o, l) {
                                1 & o && (t.YNc(0, p, 17, 0, "div", 0), t.YNc(1, d, 9, 0, "div", 1)), 2 & o && (t.Q6J("ngIf", l.innerWidth <= 1e3), t.xp6(1), t.Q6J("ngIf", l.innerWidth > 1e3))
                            },
                            dependencies: [e.O5],
                            styles: [".purchase-btn[_ngcontent-%COMP%]{background:transparent}"]
                        })
                    }
                    return n
                })(),
                v = (() => {
                    class n {
                        static\ u0275fac = function(o) {
                            return new(o || n)
                        };
                        static\ u0275cmp = t.Xpm({
                            type: n,
                            selectors: [
                                ["app-mobile-application"]
                            ],
                            decls: 45,
                            vars: 0,
                            consts: [
                                [1, "card", "mobile-app-card", "py-0"],
                                [1, "card-header", "card-no-border", "pb-0", 2, "width", "100%"],
                                [1, "row"],
                                [1, "col-12", "col-md-6", "col-sm-12", "col-xxl-6", "col-ed-6", "col-xl-6", "box-col-6", "p-1", "py-0"],
                                [1, "mb-3"],
                                [1, "f-16", "f-bold"],
                                [1, "f-16", "f-light"],
                                [2, "font-size", "14px"],
                                ["href", "https://dorklevents.gitbook.io/dork-lord-events/", "target", "_blank"],
                                ["type", "button", 1, "purchase-btn", "btn", "btn-primary", "btn-hover-effect", "f-w-500", "mb-2"],
                                [1, "col-12", "col-md-6", "col-sm-12", "col-xxl-6", "col-ed-6", "col-xl-6", "box-col-6", "p-0", "py-1", "d-flex", "justify-content-center"],
                                [1, "card-body", "p-0", "text-center"],
                                ["src", "assets/images/dorkl/soulja.jpg", "alt", "", 2, "width", "100%", "max-width", "360px", "padding", "0px", "border-radius", "10px"],
                                [1, "card", "mobile-app-card"],
                                ["href", "https://twitter.com/Kalvin_luv", "target", "_blank"],
                                ["href", "https://twitter.com/MEECHWELLS", "target", "_blank"],
                                [1, "card-body", "p-0", "text-end"],
                                ["controls", "", "width", "100%"],
                                ["src", "assets/video/dorkl_song.mp4", "type", "video/mp4"]
                            ],
                            template: function(o, l) {
                                1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4)(5, "span", 5), t._uU(6, "Welcome "), t.qZA(), t._uU(7, "Dork Lord!"), t.qZA(), t.TgZ(8, "h5", 4)(9, "span", 6), t._uU(10, "Our "), t.qZA(), t._uU(11, "Gitbook"), t.TgZ(12, "span", 6), t._uU(13, " is released!"), t.qZA()(), t.TgZ(14, "p", 7), t._uU(15, " Here, you will find everything you need to know about our upcoming event, starring @souljaboy and soon more well known artists! Be ready for a unique experience! "), t.qZA(), t.TgZ(16, "a", 8)(17, "button", 9), t._uU(18, "Check it here!"), t.qZA()()(), t.TgZ(19, "div", 10)(20, "div", 11), t._UZ(21, "img", 12), t.qZA()()()()(), t.TgZ(22, "div", 13)(23, "div", 1)(24, "div", 2)(25, "div", 3)(26, "h5", 4)(27, "span", 5), t._uU(28, "Are You Not Entertained Enough?"), t.qZA()(), t.TgZ(29, "h5", 4)(30, "span", 6), t._uU(31, " \u{1f399}\ufe0f Check Our "), t.qZA(), t._uU(32, "DORKL anthem "), t.qZA(), t.TgZ(33, "p", 7), t._uU(34, " The Dork Lord anthem ft "), t.TgZ(35, "a", 14), t._uU(36, "@Kalvin_luv "), t.qZA(), t._uU(37, " produced by "), t.TgZ(38, "a", 15), t._uU(39, "@MEECHWELLS"), t.qZA(), t._uU(40, " for the DORK LORD community! "), t.qZA()(), t.TgZ(41, "div", 10)(42, "div", 16)(43, "video", 17), t._UZ(44, "source", 18), t.qZA()()()()()())
                            }
                        })
                    }
                    return n
                })();
            var _ = r(8108),
                M = r(6676),
                O = r(1207),
                P = r(1221);

            function T(n, C) {
                if (1 & n && (t.TgZ(0, "tr")(1, "td"), t._UZ(2, "img", 29), t.TgZ(3, "span", 30)(4, "small"), t._uU(5), t.qZA()()(), t.TgZ(6, "td"), t._uU(7), t.ALo(8, "number"), t.qZA(), t.TgZ(9, "td")(10, "small"), t._uU(11), t.qZA()(), t.TgZ(12, "td")(13, "small"), t._uU(14), t.qZA()()()), 2 & n) {
                    const a = C.$implicit;
                    t.xp6(2), t.Q6J("src", a.icon, t.LSH), t.xp6(3), t.Oqu(a.name), t.xp6(2), t.hij("", t.xi3(8, 5, a.ethAmount, "1.0-0"), " \u{1f525}"), t.xp6(4), t.Oqu(a.walletAddressWithAsterisk), t.xp6(3), t.Oqu(a.date)
                }
            }
            let A = (() => {
                class n {
                    _dashboardService;
                    paramValue;
                    holders = _.sW;
                    lastPrice = _.Uo;
                    burntTokens = _.H8;
                    burn_transactions = {
                        count: 0,
                        data: []
                    };
                    topTenBurnTransactions = [];
                    photoClicks = _.HZ;
                    likeClicks = _.zm;
                    constructor(a) {
                        this._dashboardService = a, this.paramValue = ""
                    }
                    ngOnInit() {
                        this.getData()
                    }
                    walletAddressWithAsterisk(a) {
                        return a.substring(0, 4) + "***" + a.substring(a.length - 4, a.length)
                    }
                    getData() {
                        setTimeout(() => {
                            this._dashboardService.fetchHoldersCount().subscribe(o => {
                                o.success && (this.holders.count = o.data.holdersCount)
                            })
                        }, 555), setTimeout(() => {
                            this._dashboardService.fetchBurntTokens().subscribe(o => {
                                o.success && (this.burntTokens.count = o.data.burntTokens.count.toFixed(0), this.burntTokens.usdValue = o.data.burntTokens.usdValue, this.burntTokens.subtitle = "$" + this.burntTokens.usdValue)
                            })
                        }, 2222), setTimeout(() => {
                            this._dashboardService.fetchLastPrice().subscribe(o => {
                                if (o.success && (this.lastPrice.count = "$" + o.data.lastPrice.toFixed(7), o.data.count24hBack)) {
                                    const l = 100 * (o.data.lastPrice - o.data.count24hBack) / o.data.count24hBack;
                                    this.lastPrice.priceDifference = l > 0 ? "+" + l.toFixed(2) : +l.toFixed(2), this.lastPrice.color = l > 0 ? "green" : "red"
                                }
                            })
                        }, 1111), setTimeout(() => {
                            this._dashboardService.fetchBurnTransactions().subscribe(o => {
                                if (o.data ? .burn_transactions ? .data)
                                    for (let l in o.data.burn_transactions.data) {
                                        let s = o.data.burn_transactions.data[l];
                                        s.ethAmount = Number(s.value / 1e18).toString(), s.walletAddressWithAsterisk = this.walletAddressWithAsterisk(s.from_address), s.date = M(s.block_timestamp).fromNow(), "0xb0c673d59eda423a1bad7a9023f03f80d21e12fd" === s.from_address ? (s.icon = "assets/images/logo/dorkl_logo.jpg", s.name = "Farms") : "0xb330d1b36ea0be40071e33938ed5c6b7cbffba7b" === s.from_address ? (s.icon = "assets/images/logo/dorkl_logo.jpg", s.name = "Dorkl Star") : "0x94be6962be41377d5beda8dfe1b100f3bf0eacf3" === s.from_address ? (s.icon = "assets/images/logo/dorkl_logo.jpg", s.name = "DORK LORD") : "0xc99b43041868784240645c080aa2a68549e3d1f5" === s.from_address || "0xfdf973b4c7573429553aa8e6259731260d30422d" === s.from_address ? (s.icon = "assets/images/logo/dorkl_logo.jpg", s.name = "DORKL STAR") : (s.icon = "assets/images/user/user.png", s.name = "Community"), parseInt(l) < 10 && this.topTenBurnTransactions.push(s)
                                    }
                                this.burn_transactions.count = o.data ? .burn_transactions ? .count || "n/a", this.burn_transactions.data = o.data ? .burn_transactions ? .data || []
                            })
                        }, 2222)
                    }
                    static\ u0275fac = function(o) {
                        return new(o || n)(t.Y36(O.s))
                    };
                    static\ u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["app-social-media"]
                        ],
                        decls: 55,
                        vars: 4,
                        consts: [
                            [1, "row"],
                            [1, "col-md-4", "col-sm-6"],
                            [3, "data"],
                            [1, "col-md-4"],
                            [1, "d-none", "d-lg-block", "mb-4"],
                            [1, "container-fluid"],
                            [1, "col-12", "p-1"],
                            [1, "table-responsive"],
                            [1, "table", "bg-primary", "table-striped"],
                            [1, "tbl-strip-thad-bdr"],
                            ["scope", "col"],
                            [4, "ngFor", "ngForOf"],
                            [1, "row", "mb-4", "social-images"],
                            [1, "col-6", "col-md-2", "col-sm-4", "d-flex", "justify-content-center", "mb-5"],
                            ["href", "https://t.me/DorkLordToken", "target", "_blank"],
                            ["src", "assets/images/dorkl/telegram.png", "alt", "Dork Lord Telegram", 1, "m-2"],
                            ["href", "https://etherscan.io/token/0x94be6962be41377d5beda8dfe1b100f3bf0eacf3", "target", "_blank"],
                            ["src", "assets/images/dorkl/etherscan.png", "alt", "Dork Lord Etherscan", 1, "m-2"],
                            ["href", "https://www.dextools.io/app/en/ether/pair-explorer/0xef9ef6e07602e1e0419a5788f1d85e0698eab077", "target", "_blank"],
                            ["src", "assets/images/dorkl/dextools.png", "alt", "Dork Lord Dextools", 1, "m-2"],
                            ["href", "https://app.uniswap.org/swap?outputCurrency=0x94be6962be41377d5beda8dfe1b100f3bf0eacf3", "target", "_blank"],
                            ["src", "assets/images/dorkl/uniswap.png", "alt", "Dork Lord Uniswap", 1, "m-2"],
                            ["href", "https://www.coingecko.com/en/coins/dork-lord", "target", "_blank"],
                            ["src", "assets/images/dorkl/CoinGecko_logo.png", "alt", "Dork Lord Coingecko", 1, "m-2"],
                            ["href", "https://coinmarketcap.com/currencies/dork-lord/", "target", "_blank"],
                            ["src", "assets/images/dorkl/coinmarketcaplogo.png", "alt", "Dork Lord CoinMarketCap", 1, "m-2", 2, "border-radius", "50%"],
                            [1, "col-12", "d-flex", "justify-content-center", "mb-1"],
                            ["href", "https://app.solidproof.io/projects/dork-lord", "target", "_blank"],
                            ["src", "assets/images/dorkl/solidproof.jpeg", "alt", "Dork Lord solid proof audited", 1, "m-2", 2, "width", "100%", "border-radius", "7px"],
                            ["alt", "Dork lord burn", 1, "img-fluid", 2, "max-width", "35px", "border-radius", "5px", 3, "src"],
                            [1, "px-2"]
                        ],
                        template: function(o, l) {
                            1 & o && (t.TgZ(0, "div", 0)(1, "h3"), t._uU(2, "Token stats"), t.qZA(), t.TgZ(3, "div", 1), t._UZ(4, "app-social-media-chart", 2), t.qZA(), t.TgZ(5, "div", 1), t._UZ(6, "app-social-media-chart", 2), t.qZA(), t.TgZ(7, "div", 3), t._UZ(8, "app-social-media-chart", 2), t.qZA(), t.TgZ(9, "div", 4)(10, "h3"), t._uU(11, "Last 10 burn transactions \u{1f525}"), t.qZA(), t.TgZ(12, "div", 5)(13, "div", 0)(14, "div", 6)(15, "div", 7)(16, "table", 8)(17, "thead", 9)(18, "tr")(19, "th", 10), t._uU(20, "Burner"), t.qZA(), t.TgZ(21, "th", 10), t._uU(22, "$DORKL Amount"), t.qZA(), t.TgZ(23, "th", 10), t._uU(24, "Address"), t.qZA(), t.TgZ(25, "th", 10), t._uU(26, "Burned at"), t.qZA()()(), t.TgZ(27, "tbody"), t.YNc(28, T, 15, 8, "tr", 11), t.qZA()()()()()()()(), t.TgZ(29, "div", 12)(30, "h3"), t._uU(31, "Find us at"), t.qZA(), t.TgZ(32, "div", 13)(33, "a", 14), t._UZ(34, "img", 15), t.qZA()(), t.TgZ(35, "div", 13)(36, "a", 16), t._UZ(37, "img", 17), t.qZA()(), t.TgZ(38, "div", 13)(39, "a", 18), t._UZ(40, "img", 19), t.qZA()(), t.TgZ(41, "div", 13)(42, "a", 20), t._UZ(43, "img", 21), t.qZA()(), t.TgZ(44, "div", 13)(45, "a", 22), t._UZ(46, "img", 23), t.qZA()(), t.TgZ(47, "div", 13)(48, "a", 24), t._UZ(49, "img", 25), t.qZA()(), t.TgZ(50, "h3"), t._uU(51, "\u{1f512} Audited by"), t.qZA(), t.TgZ(52, "div", 26)(53, "a", 27), t._UZ(54, "img", 28), t.qZA()()()), 2 & o && (t.xp6(4), t.Q6J("data", l.holders), t.xp6(2), t.Q6J("data", l.lastPrice), t.xp6(2), t.Q6J("data", l.burntTokens), t.xp6(20), t.Q6J("ngForOf", l.topTenBurnTransactions))
                        },
                        dependencies: [e.sg, P.m, e.JJ],
                        styles: [".social-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff9;border-color:#ffffff1a!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border-color:#ffffff1a!important}"]
                    })
                }
                return n
            })();
            const U = function() {
                return ["Dashboard"]
            };
            let y = (() => {
                class n {
                    static\ u0275fac = function(o) {
                        return new(o || n)
                    };
                    static\ u0275cmp = t.Xpm({
                        type: n,
                        selectors: [
                            ["app-social"]
                        ],
                        decls: 17,
                        vars: 4,
                        consts: [
                            [3, "title", "items", "active_item"],
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "d-none", "d-lg-block", "col-xxl-6", "col-ed-6", "col-xl-6", "box-col-6"],
                            [1, "col-xl-12", "col-md-6"],
                            [1, "col-xxl-6", "col-ed-6", "col-xl-6", "box-col-6e"],
                            [1, "d-lg-none", "col-xxl-6", "col-ed-6", "col-xl-6", "box-col-6"]
                        ],
                        template: function(o, l) {
                            1 & o && (t._UZ(0, "app-breadcrumb", 0), t.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4), t._UZ(6, "app-mobile-application"), t.qZA(), t.TgZ(7, "div", 4), t._UZ(8, "app-social-user-profile"), t.qZA()()(), t.TgZ(9, "div", 5), t._UZ(10, "app-social-media"), t.qZA(), t.TgZ(11, "div", 6)(12, "div", 2)(13, "div", 4), t._UZ(14, "app-mobile-application"), t.qZA(), t.TgZ(15, "div", 4), t._UZ(16, "app-social-user-profile"), t.qZA()()()()()), 2 & o && t.Q6J("title", "Dork Lord Dashboard")("items", t.DdM(3, U))("active_item", "Dork Lord Dashboard")
                        },
                        dependencies: [c.L, Z, v, A]
                    })
                }
                return n
            })();
            const D = [{
                path: "",
                children: [{
                    path: "default",
                    component: y
                }, {
                    path: "home",
                    component: (() => {
                        class n {
                            constructor() {}
                            static\ u0275fac = function(o) {
                                return new(o || n)
                            };
                            static\ u0275cmp = t.Xpm({
                                type: n,
                                selectors: [
                                    ["app-home"]
                                ],
                                decls: 189,
                                vars: 0,
                                consts: [
                                    ["id", "animate-area", 1, "container-fluid", "mt-5", "mb-5", "main"],
                                    [1, "container"],
                                    [1, "row", "head", "my-5"],
                                    [1, "col-12", "text-center", "first"],
                                    [1, "ticker"],
                                    [1, "btn-wrapper", "my-5"],
                                    [1, "dropdown"],
                                    [1, "button_dorkl", "exchange", "m-1", "m-md-2"],
                                    [1, "arrow", "down"],
                                    [1, "dropdown-content", "m-1", "m-md-2", "mr-3"],
                                    ["href", "https://www.bitmart.com/trade/en-US?layout=pro&theme=dark&symbol=DORKL_USDT", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/bitmart.png", "alt", "Dork Lord bitmart"],
                                    ["href", "https://www.gate.io/trade/DORKL_USDT", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/gateio.png", "alt", "Dork Lord gateio"],
                                    ["href", "https://www.lbank.com/trade/dorkl_usdt/", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/lbank.jpeg", "alt", "Dork Lord lbank"],
                                    ["href", "https://www.mexc.com/exchange/DORKL_USDT", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/mexc.jpeg", "alt", "Dork Lord mexc"],
                                    ["href", "https://www.novadax.com", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/novadax.jpg", "alt", "Dork Lord novadax"],
                                    ["href", "https://ascendex.com/en/cashtrade-spottrading/usdt/dorkl", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/ascendex.png", "alt", "Dork Lord Ascendex"],
                                    ["href", "https://poloniex.com/trade/DORKL_USDT/?type=spot", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/poloniex.jpg", "alt", "Dork Lord poloniex"],
                                    ["href", "https://www.superex.com/", "target", "_blank"],
                                    ["src", "assets/images/dorkl/exchangers/superex.png", "alt", "Dork Lord superex"],
                                    [1, "button_dorkl", "uniswap", "m-1", "m-md-2"],
                                    ["routerLink", "/blog/uniswap"],
                                    [1, "button_dorkl", "card", "m-1", "m-md-2", "my-2", "text-center"],
                                    [1, "text-center"],
                                    ["href", "https://flooz.xyz/trade/0x94Be6962be41377d5BedA8dFe1b100F3BF0eaCf3", "target", "_blank"],
                                    [1, "col-12", "text-center", "my-4"],
                                    ["src", "assets/images/dorkl/dorklmain3.png", 1, "dorkl"],
                                    [1, "legend", "mt-2"],
                                    ["href", "https://twitter.com/Matt_Furie", "target", "_blank"],
                                    [1, "row", "my-5"],
                                    [1, "col-12", "text-center", "second"],
                                    [1, "jeeti"],
                                    [1, "col-12", "text-center", "links"],
                                    [1, "row", "mb-4", "social-images"],
                                    [1, "col-4", "col-md-2", "col-sm-4", "d-flex", "justify-content-center", "mb-5"],
                                    ["href", "https://t.me/DorkLordToken", "target", "_blank"],
                                    ["src", "assets/images/dorkl/telegram.png", "alt", "Dork Lord Telegram", 1, "m-2"],
                                    ["href", "https://etherscan.io/token/0x94be6962be41377d5beda8dfe1b100f3bf0eacf3", "target", "_blank"],
                                    ["src", "assets/images/dorkl/etherscan.png", "alt", "Dork Lord Etherscan", 1, "m-2"],
                                    ["href", "https://www.dextools.io/app/en/ether/pair-explorer/0xef9ef6e07602e1e0419a5788f1d85e0698eab077", "target", "_blank"],
                                    ["src", "assets/images/dorkl/dextools.png", "alt", "Dork Lord Dextools", 1, "m-2"],
                                    ["href", "https://app.uniswap.org/swap?outputCurrency=0x94be6962be41377d5beda8dfe1b100f3bf0eacf3", "target", "_blank"],
                                    ["src", "assets/images/dorkl/uniswap.png", "alt", "Dork Lord Uniswap", 1, "m-2"],
                                    ["href", "https://www.coingecko.com/en/coins/dork-lord", "target", "_blank"],
                                    ["src", "assets/images/dorkl/CoinGecko_logo.png", "alt", "Dork Lord Coingecko", 1, "m-2"],
                                    ["href", "https://coinmarketcap.com/currencies/dork-lord/", "target", "_blank"],
                                    ["src", "assets/images/dorkl/coinmarketcaplogo.png", "alt", "Dork Lord CoinMarketCap", 1, "m-2", 2, "border-radius", "50%"],
                                    [1, "col-12", "text-center", "paragraph"],
                                    [1, "my-3"],
                                    [1, "purple"],
                                    [1, "col-12", "text-center", "my-5"],
                                    ["src", "assets/images/dorkl/File6.jpg", 1, "dorkl"],
                                    ["src", "assets/images/dorkl/soulja.jpg", 1, "dorkl"],
                                    ["href", "https://twitter.com/DeFi_Degen14", "target", "_blank"],
                                    ["src", "assets/images/dorkl/events_small.png", 1, "dorkl"],
                                    ["href", "https://dorklevents.gitbook.io/dork-lord-events/dork-lord-events", "target", "_blank"],
                                    ["type", "button", 1, "purchase-btn", "btn", "btn-primary", "btn-hover-effect", "f-w-500", "m-2"],
                                    ["href", "https://dorklord.marswap.exchange/", "target", "_blank"],
                                    [1, "col-12", "text-center", "my-5", "py-5"],
                                    ["src", "assets/images/dorkl/spotify.png", 1, "dorkl"],
                                    ["href", "https://twitter.com/Kalvin_luv", "target", "_blank"],
                                    ["href", "https://twitter.com/MEECHWELLS", "target", "_blank"],
                                    ["src", "assets/images/dorkl/solidproof.jpeg", 1, "dorkl", 2, "width", "100%", "max-width", "800px!important"],
                                    ["href", "https://app.solidproof.io/projects/dork-lord", "target", "_blank"],
                                    ["src", "assets/images/dorkl/nice.jpeg", 1, "dorkl", 2, "width", "100%"]
                                ],
                                template: function(o, l) {
                                    1 & o && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1"), t._uU(5, "\u15eaO\u1587K \u14aaO\u1587\u15ea "), t.TgZ(6, "span", 4), t._uU(7, " The empire is rising "), t.qZA()(), t.TgZ(8, "div", 5)(9, "div", 6)(10, "button", 7)(11, "span"), t._uU(12, " Buy on Exchange "), t.qZA(), t._UZ(13, "i", 8), t.qZA(), t.TgZ(14, "div", 9)(15, "ul")(16, "li")(17, "a", 10), t._UZ(18, "img", 11), t.TgZ(19, "span"), t._uU(20, "Bitmart"), t.qZA()()(), t.TgZ(21, "li")(22, "a", 12), t._UZ(23, "img", 13), t.TgZ(24, "span"), t._uU(25, "Gateio"), t.qZA()()(), t.TgZ(26, "li")(27, "a", 14), t._UZ(28, "img", 15), t.TgZ(29, "span"), t._uU(30, "Lbank"), t.qZA()()(), t.TgZ(31, "li")(32, "a", 16), t._UZ(33, "img", 17), t.TgZ(34, "span"), t._uU(35, "Mexc"), t.qZA()()(), t.TgZ(36, "li")(37, "a", 18), t._UZ(38, "img", 19), t.TgZ(39, "span"), t._uU(40, "Novadax"), t.qZA()()(), t.TgZ(41, "li")(42, "a", 20), t._UZ(43, "img", 21), t.TgZ(44, "span"), t._uU(45, "Ascendex"), t.qZA()()(), t.TgZ(46, "li")(47, "a", 22), t._UZ(48, "img", 23), t.TgZ(49, "span"), t._uU(50, "Poloniex"), t.qZA()()(), t.TgZ(51, "li")(52, "a", 24), t._UZ(53, "img", 25), t.TgZ(54, "span"), t._uU(55, "Superex"), t.qZA()()()()()(), t.TgZ(56, "button", 26)(57, "a", 27)(58, "span"), t._uU(59, "Buy on Dorkled.com"), t.qZA()()(), t.TgZ(60, "button", 28)(61, "div", 29)(62, "a", 30)(63, "span"), t._uU(64, "Buy with Card"), t.qZA()()()()()(), t.TgZ(65, "div", 31), t._UZ(66, "img", 32), t.TgZ(67, "p", 33), t._uU(68, " Dork Lord by "), t.TgZ(69, "a", 34), t._uU(70, " Matt_Furie"), t.qZA(), t.TgZ(71, "span"), t._uU(72, " 2023"), t.qZA()()()(), t.TgZ(73, "div", 35)(74, "div", 36)(75, "h1"), t._uU(76, "EXECUTE ORDER 69 "), t.TgZ(77, "span", 37), t._uU(78, " Destroy the Jeeti! "), t.qZA()()()(), t.TgZ(79, "div", 35)(80, "div", 38)(81, "div", 39)(82, "div", 40)(83, "a", 41), t._UZ(84, "img", 42), t.qZA()(), t.TgZ(85, "div", 40)(86, "a", 43), t._UZ(87, "img", 44), t.qZA()(), t.TgZ(88, "div", 40)(89, "a", 45), t._UZ(90, "img", 46), t.qZA()(), t.TgZ(91, "div", 40)(92, "a", 47), t._UZ(93, "img", 48), t.qZA()(), t.TgZ(94, "div", 40)(95, "a", 49), t._UZ(96, "img", 50), t.qZA()(), t.TgZ(97, "div", 40)(98, "a", 51), t._UZ(99, "img", 52), t.qZA()()()()(), t.TgZ(100, "div", 35)(101, "div", 53)(102, "p", 54)(103, "span", 55), t._uU(104, "\u15eaO\u1587K \u14aaO\u1587\u15ea"), t.qZA(), t._uU(105, " - the ultimate memecoin sensation from the dankest depths of the internet. "), t.qZA(), t.TgZ(106, "p", 54), t._uU(107, " Just like the beloved Pepe meme, \u15eaO\u1587K \u14aaO\u1587\u15ea is here to conquer the internet with its unparalleled memeability and charm. "), t.qZA(), t.TgZ(108, "p", 54), t._uU(109, " Dork Lord is built for the people and owned by the community. "), t.qZA()()(), t.TgZ(110, "div", 56), t._UZ(111, "img", 57), t.TgZ(112, "p", 33), t._uU(113, " Dork Lord is held by Diamond hands"), t.qZA()(), t.TgZ(114, "div", 35)(115, "div", 53)(116, "p", 54)(117, "span", 55), t._uU(118, "Zero percent Taxes, No Bullshit."), t.qZA(), t._uU(119, " It\u2019s that simple. "), t.qZA(), t.TgZ(120, "p", 54), t._uU(121, " 97% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. "), t.qZA(), t.TgZ(122, "p", 54), t._uU(123, " The remaining 3% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. "), t.qZA()()(), t.TgZ(124, "div", 56), t._UZ(125, "img", 58), t.TgZ(126, "p", 33), t._uU(127, " Real life events "), t.TgZ(128, "a", 59), t._uU(129, " Soulja boy"), t.qZA(), t.TgZ(130, "span"), t._uU(131, " 2023"), t.qZA()()(), t.TgZ(132, "div", 35)(133, "div", 53)(134, "p", 54)(135, "span", 55), t._uU(136, "Real life events,"), t.qZA(), t._uU(137, " when crypto meets real life and music! "), t.qZA(), t.TgZ(138, "div", 56), t._UZ(139, "img", 60), t.qZA(), t.TgZ(140, "p", 54), t._uU(141, " Experience the unique opportunity to connect crypto with real life. This is exactly what Dorkl Events stand for. Get ready for breathtaking places, high quality content and switch off from everyday life. "), t.qZA(), t.TgZ(142, "a", 61)(143, "button", 62), t._uU(144, "Read more about Dork Lord events! \u{1f525}"), t.qZA()(), t.TgZ(145, "a", 63)(146, "button", 62), t._uU(147, "Mint your NFT ticket \u{1f3ab} "), t.qZA()()()(), t.TgZ(148, "div", 64), t._UZ(149, "img", 65), t.TgZ(150, "p", 33), t._uU(151, " Dork Lord Anthem ft "), t.TgZ(152, "a", 66), t._uU(153, "@Kalvin_luv"), t.qZA(), t._uU(154, "(Snoop Dog's Son) produced by "), t.TgZ(155, "a", 67), t._uU(156, "@MEECHWELLS"), t.qZA(), t.TgZ(157, "span"), t._uU(158, " 2023"), t.qZA()()(), t.TgZ(159, "div", 35)(160, "div", 53)(161, "p", 54)(162, "span", 55), t._uU(163, "The Dork Lord Anthem"), t.qZA(), t._uU(164, ", a groundbreaking collaboration featuring none other than Kalvin Luv, the son of legendary rapper Snoop Dogg, and the renowned producer MEECHWELLS. "), t.qZA(), t.TgZ(165, "p", 54), t._uU(166, " This dynamic duo has come together to craft a unique and powerful anthem that celebrates our cutting-edge crypto token. "), t.qZA()()(), t.TgZ(167, "div", 64), t._UZ(168, "img", 68), t.TgZ(169, "p", 33), t._uU(170, " Security audit by "), t.TgZ(171, "a", 69), t._uU(172, "Solid Proof"), t.qZA(), t.TgZ(173, "span"), t._uU(174, " 2023"), t.qZA()()(), t.TgZ(175, "div", 35)(176, "div", 53)(177, "p", 54), t._uU(178, " DORK LORD token has succesfully passed security audits by the well known auditing firm Solid Proof. "), t.qZA(), t.TgZ(179, "p", 54), t._uU(180, " No rugs, no honeypots, no bullshit. "), t.qZA()()(), t.TgZ(181, "div", 35)(182, "div", 53)(183, "p", 54), t._uU(184, " Are you Ready to get Dorkled? "), t.qZA()()(), t.TgZ(185, "div", 64), t._UZ(186, "img", 70), t.TgZ(187, "p", 33), t._uU(188, " DORK LORD to the moon!"), t.qZA()()()())
                                },
                                dependencies: [i.rH],
                                styles: ['.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;opacity:.5;z-index:-1;background-image:url(sky.92ea7918f3f1f9f4.jpg);background-size:contain;animation:_ngcontent-%COMP%_mymove 555s linear infinite}@keyframes _ngcontent-%COMP%_mymove{0%{background-position:0% 0%}to{background-position:0% 100%}}.main[_ngcontent-%COMP%]{position:relative;z-index:1;padding-top:20px;padding-bottom:10px;margin-bottom:0!important}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:100px;line-height:70px;letter-spacing:1px}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span.ticker[_ngcontent-%COMP%]{color:#7366ff;display:block;font-size:36px}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{text-align:center}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl[_ngcontent-%COMP%]{display:inline-block;border:none;border-radius:10px;color:#ebeae3;cursor:pointer;font-size:32px;padding:15px 20px 15px 30px;margin-bottom:0!important}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl.exchange[_ngcontent-%COMP%]{background-color:#0dcaf0}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl.uniswap[_ngcontent-%COMP%]{background-color:#ff2cd1}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl.card[_ngcontent-%COMP%]{background-color:#563ee0}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ebeae3;text-decoration:none;font-size:32px}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p.legend[_ngcontent-%COMP%]{font-size:15px;font-style:italic}.main[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:80px;line-height:50px}.main[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span.jeeti[_ngcontent-%COMP%]{color:#7366ff;font-size:20px;display:block}.main[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .social-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px}.main[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{padding:0 75px 10px}.main[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:32px;-webkit-text-stroke-width:.75px}.main[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.purple[_ngcontent-%COMP%]{color:#7366ff}.main[_ngcontent-%COMP%]   img.dorkl[_ngcontent-%COMP%]{max-width:550px;border-radius:20px;text-align:center}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block}.dropdown-content[_ngcontent-%COMP%]{margin-top:0!important;display:none;position:absolute;padding:15px 20px 15px 30px;min-width:95%;z-index:1;background-color:#0d59f0;border-radius:10px}.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;text-align:left;margin-bottom:10px;border-bottom:1px solid #7366ff;padding:12px 0}.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;border-radius:5px}.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:35px;letter-spacing:1px;position:relative;top:5px;margin-left:20px}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.arrow[_ngcontent-%COMP%]{border:solid #ebeae3;border-width:0 3px 3px 0;display:inline-block;padding:8px;position:relative;top:-5px;margin-left:15px}.down[_ngcontent-%COMP%]{transform:rotate(45deg);-webkit-transform:rotate(45deg)}@media screen and (max-width: 1200px){.container[_ngcontent-%COMP%]{padding:0!important}.arrow[_ngcontent-%COMP%]{border:solid #ebeae3;border-width:0 3px 3px 0;display:inline-block;padding:3px;position:relative;top:-1px;margin-left:10px}.main[_ngcontent-%COMP%]{position:relative;z-index:1;padding-top:1px!important;padding-bottom:5px!important;margin-bottom:0!important}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;line-height:50px}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span.ticker[_ngcontent-%COMP%]{color:#7366ff;font-size:26px}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl[_ngcontent-%COMP%]{font-size:14px;padding:15px;text-align:center;margin-bottom:0!important}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl.exchange[_ngcontent-%COMP%]{background-color:#0dcaf0}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl.uniswap[_ngcontent-%COMP%]{background-color:#ff2cd1}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl.card[_ngcontent-%COMP%]{background-color:#563ee0}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   button.button_dorkl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}.main[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p.legend[_ngcontent-%COMP%]{font-size:15px;font-style:italic}.main[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;line-height:30px}.main[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span.jeeti[_ngcontent-%COMP%]{color:#7366ff;font-size:18px}.main[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .social-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}.main[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{padding:0 15px 10px}.main[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;-webkit-text-stroke-width:.75px}.main[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.purple[_ngcontent-%COMP%]{color:#7366ff}.main[_ngcontent-%COMP%]   img.dorkl[_ngcontent-%COMP%]{max-width:270px}.my-5[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1rem!important}.py-5[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1rem!important}.dropdown-content[_ngcontent-%COMP%]{padding:7px}.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;padding:12px 7px}.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35px}.dropdown-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;top:5px;margin-left:15px}}']
                            })
                        }
                        return n
                    })()
                }, {
                    path: "social",
                    component: y
                }]
            }];
            let q = (() => {
                class n {
                    static\ u0275fac = function(o) {
                        return new(o || n)
                    };
                    static\ u0275mod = t.oAB({
                        type: n
                    });
                    static\ u0275inj = t.cJS({
                        imports: [i.Bz.forChild(D), i.Bz]
                    })
                }
                return n
            })();
            var L = r(9025);
            let S = (() => {
                class n {
                    static\ u0275fac = function(o) {
                        return new(o || n)
                    };
                    static\ u0275mod = t.oAB({
                        type: n
                    });
                    static\ u0275inj = t.cJS({
                        imports: [e.ez, h.f, x.bB, k.vQ, m.X, b.m, L.Y4, u.IJ, f.u5, q]
                    })
                }
                return n
            })()
        },
        1221: (w, g, r) => {
            r.d(g, {
                m: () => b
            });
            var e = r(5879),
                h = r(6814);

            function k(i, t) {
                if (1 & i && (e.TgZ(0, "span", 12), e._uU(1), e.qZA()), 2 & i) {
                    const c = e.oxw(2);
                    e.xp6(1), e.hij("", c.data.priceDifference, "%")
                }
            }

            function x(i, t) {
                if (1 & i && (e.TgZ(0, "span", 13), e._uU(1), e.qZA()), 2 & i) {
                    const c = e.oxw(2);
                    e.xp6(1), e.hij("", c.data.priceDifference, "%")
                }
            }

            function m(i, t) {
                if (1 & i && (e.TgZ(0, "div"), e.YNc(1, k, 2, 1, "span", 10), e.YNc(2, x, 2, 1, "span", 11), e.qZA()), 2 & i) {
                    const c = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", "green" === c.data.color), e.xp6(1), e.Q6J("ngIf", "red" === c.data.color)
                }
            }

            function u(i, t) {
                if (1 & i && (e.TgZ(0, "h5", 14), e._uU(1), e.ALo(2, "number"), e.qZA()), 2 & i) {
                    const c = e.oxw();
                    e.xp6(1), e.Oqu(e.Dn7(2, 1, c.data.count, "1.0", "en-US"))
                }
            }

            function f(i, t) {
                if (1 & i && (e.TgZ(0, "h5", 14), e._uU(1), e.qZA()), 2 & i) {
                    const c = e.oxw();
                    e.xp6(1), e.Oqu(c.data.count)
                }
            }
            let b = (() => {
                class i {
                    data;
                    static\ u0275fac = function(p) {
                        return new(p || i)
                    };
                    static\ u0275cmp = e.Xpm({
                        type: i,
                        selectors: [
                            ["app-social-media-chart"]
                        ],
                        inputs: {
                            data: "data"
                        },
                        decls: 15,
                        vars: 7,
                        consts: [
                            [1, "card", "social-widget", "widget-hover"],
                            [1, "card-body"],
                            [1, "d-flex", "align-items-center", "justify-content-between"],
                            [1, "d-flex", "align-items-center", "gap-2"],
                            [1, "social-icons"],
                            [2, "height", "auto", "max-width", "35px", 3, "src", "alt"],
                            [4, "ngIf"],
                            [1, "social-content"],
                            ["class", "mb-1", 4, "ngIf"],
                            [1, "f-light"],
                            ["style", "font-weight: 900;", "class", "font-success f-12 d-xxl-block d-xl-none", 4, "ngIf"],
                            ["style", "color:red;", "class", "f-12 d-xxl-block d-xl-none", 4, "ngIf"],
                            [1, "font-success", "f-12", "d-xxl-block", "d-xl-none", 2, "font-weight", "900"],
                            [1, "f-12", "d-xxl-block", "d-xl-none", 2, "color", "red"],
                            [1, "mb-1"]
                        ],
                        template: function(p, d) {
                            1 & p && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), e._UZ(5, "img", 5), e.qZA(), e.TgZ(6, "span"), e._uU(7), e.qZA()(), e.YNc(8, m, 3, 2, "div", 6), e.qZA(), e.TgZ(9, "div", 7)(10, "div"), e.YNc(11, u, 3, 5, "h5", 8), e.YNc(12, f, 2, 1, "h5", 8), e.TgZ(13, "span", 9), e._uU(14), e.qZA()()()()()), 2 & p && (e.xp6(5), e.s9C("src", d.data.icon, e.LSH), e.s9C("alt", d.data.socialMediaName), e.xp6(2), e.Oqu(d.data.platform || d.data.socialMediaName), e.xp6(1), e.Q6J("ngIf", d.data.priceDifference), e.xp6(3), e.Q6J("ngIf", d.data.count > 0 && "$DORKL price" !== d.data.socialMediaName), e.xp6(1), e.Q6J("ngIf", d.data.count <= 0 || "$DORKL price" === d.data.socialMediaName), e.xp6(2), e.Oqu(d.data.subtitle))
                        },
                        dependencies: [h.O5, h.JJ]
                    })
                }
                return i
            })()
        },
        8108: (w, g, r) => {
            r.d(g, {
                H8: () => m,
                HZ: () => c,
                Uo: () => f,
                ZB: () => i,
                km: () => b,
                sW: () => u,
                zm: () => p
            });
            var e = r(6676);
            localStorage.getItem("primary_color"), localStorage.getItem("secondary_color");
            let m = {
                    count: "-",
                    usdValue: 0,
                    socialMediaName: "Burnt tokens",
                    subtitle: "",
                    icon: "assets/images/dorkl/flame.png"
                },
                u = {
                    socialMediaName: "Holders",
                    subtitle: "Lords",
                    count: "-",
                    growth: "-",
                    icon: "assets/images/dorkl/diamond-hands.png"
                },
                f = {
                    series: [70],
                    chart: {
                        height: 130,
                        type: "radialBar",
                        dropShadow: {
                            enabled: !0,
                            top: 3,
                            left: 0,
                            blur: 10,
                            color: "#FFA941",
                            opacity: .35
                        }
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "60%"
                            },
                            track: {
                                strokeWidth: "60%",
                                opacity: 1,
                                margin: 5
                            },
                            dataLabels: {
                                showOn: "always",
                                value: {
                                    color: "var(--body-font-color)",
                                    fontSize: "14px",
                                    show: !0,
                                    offsetY: -10
                                }
                            }
                        }
                    },
                    colors: ["#FFA941"],
                    stroke: {
                        lineCap: "round"
                    },
                    responsive: [{
                        breakpoint: 1500,
                        options: {
                            chart: {
                                height: 130
                            }
                        }
                    }],
                    socialMediaName: "$DORKL price",
                    subtitle: "refreshes every 1'",
                    count: "-",
                    growth: "-",
                    difference: 0,
                    count24hBack: "-",
                    icon: "assets/images/dorkl/price.png"
                },
                b = {
                    series: [50],
                    chart: {
                        height: 130,
                        type: "radialBar",
                        dropShadow: {
                            enabled: !0,
                            top: 3,
                            left: 0,
                            blur: 10,
                            color: "#57B9F6",
                            opacity: .35
                        }
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "60%"
                            },
                            track: {
                                strokeWidth: "60%",
                                opacity: 1,
                                margin: 5
                            },
                            dataLabels: {
                                showOn: "always",
                                value: {
                                    color: "var(--body-font-color)",
                                    fontSize: "14px",
                                    show: !0,
                                    offsetY: -10
                                }
                            }
                        }
                    },
                    colors: ["#57B9F6"],
                    stroke: {
                        lineCap: "round"
                    },
                    responsive: [{
                        breakpoint: 1500,
                        options: {
                            chart: {
                                height: 130
                            }
                        }
                    }],
                    socialMediaName: "Twitter",
                    count: "-",
                    growth: "+14.09%",
                    icon: "assets/images/dashboard-5/social/3.png"
                },
                i = {
                    series: [80],
                    chart: {
                        height: 130,
                        type: "radialBar",
                        dropShadow: {
                            enabled: !0,
                            top: 3,
                            left: 0,
                            blur: 10,
                            color: "#FF3364",
                            opacity: .35
                        }
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "60%"
                            },
                            track: {
                                strokeWidth: "60%",
                                opacity: 1,
                                margin: 5
                            },
                            dataLabels: {
                                showOn: "always",
                                value: {
                                    color: "var(--body-font-color)",
                                    fontSize: "14px",
                                    show: !0,
                                    offsetY: -10
                                }
                            }
                        }
                    },
                    colors: ["#FF3364"],
                    stroke: {
                        lineCap: "round"
                    },
                    responsive: [{
                        breakpoint: 1500,
                        options: {
                            chart: {
                                height: 130
                            }
                        }
                    }],
                    socialMediaName: "Youtube",
                    count: "-",
                    growth: "+22.9%",
                    icon: "assets/images/dashboard-5/social/4.png"
                },
                c = {
                    series: [{
                        name: "photo",
                        data: [10, 12, 41, 36, 60, 58]
                    }],
                    chart: {
                        width: 125,
                        height: 150,
                        type: "line",
                        zoom: {
                            enabled: !1
                        },
                        toolbar: {
                            show: !1
                        },
                        dropShadow: {
                            enabled: !0,
                            top: 8,
                            left: 0,
                            blur: 3,
                            color: "#54BA4A",
                            opacity: .2
                        }
                    },
                    markers: {
                        hover: {
                            size: 3
                        }
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        curve: "smooth",
                        width: 2
                    },
                    grid: {
                        show: !1
                    },
                    tooltip: {
                        x: {
                            show: !1
                        },
                        z: {
                            show: !1
                        }
                    },
                    annotations: {
                        points: [{
                            x: 90,
                            y: 58,
                            marker: {
                                size: 4,
                                fillColor: "#54BA4A",
                                strokeColor: "var(--white)",
                                radius: 2
                            }
                        }]
                    },
                    colors: ["#54BA4A"],
                    fill: {
                        opacity: 1,
                        type: "gradient",
                        gradient: {
                            shade: "light",
                            type: "vertical",
                            shadeIntensity: 1,
                            opacityFrom: .95,
                            opacityTo: 1,
                            colorStops: [{
                                offset: 0,
                                color: "#54BA4A",
                                opacity: .1
                            }, {
                                offset: 30,
                                color: "#54BA4A",
                                opacity: .8
                            }, {
                                offset: 80,
                                color: "#54BA4A",
                                opacity: 1
                            }, {
                                offset: 100,
                                color: "#54BA4A",
                                opacity: .1
                            }]
                        }
                    },
                    xaxis: {
                        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        labels: {
                            show: !1
                        },
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        },
                        tooltip: {
                            enabled: !1
                        }
                    },
                    yaxis: {
                        labels: {
                            show: !1
                        },
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        }
                    },
                    responsive: [{
                        breakpoint: 1694,
                        options: {
                            chart: {
                                width: 100
                            },
                            annotations: {
                                points: [{
                                    x: 75,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "#54BA4A",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1661,
                        options: {
                            chart: {
                                width: 120
                            },
                            annotations: {
                                points: [{
                                    x: 90,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "#54BA4A",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1378,
                        options: {
                            chart: {
                                width: 100
                            },
                            annotations: {
                                points: [{
                                    x: 75,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "#54BA4A",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1288,
                        options: {
                            chart: {
                                width: 80
                            },
                            annotations: {
                                points: [{
                                    x: 50,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "#54BA4A",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1200,
                        options: {
                            chart: {
                                width: 110
                            },
                            annotations: {
                                points: [{
                                    x: 85,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "#54BA4A",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }],
                    clickParsonage: "76",
                    growth: "+72.9%",
                    colorClass: "success",
                    clicks: "Photo Clicks"
                },
                p = {
                    series: [{
                        name: "photo",
                        data: [10, 12, 41, 36, 60, 58]
                    }],
                    chart: {
                        width: 125,
                        height: 150,
                        type: "line",
                        zoom: {
                            enabled: !1
                        },
                        toolbar: {
                            show: !1
                        },
                        dropShadow: {
                            enabled: !0,
                            top: 8,
                            left: 0,
                            blur: 3,
                            color: "var(--theme-secondary)",
                            opacity: .2
                        }
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        curve: "smooth",
                        width: 2
                    },
                    grid: {
                        show: !1
                    },
                    tooltip: {
                        x: {
                            show: !1
                        },
                        z: {
                            show: !1
                        }
                    },
                    colors: ["var(--theme-secondary)"],
                    annotations: {
                        points: [{
                            x: 90,
                            y: 58,
                            marker: {
                                size: 4,
                                fillColor: "var(--theme-secondary)",
                                strokeColor: "var(--white)",
                                radius: 2
                            }
                        }]
                    },
                    fill: {
                        opacity: 1,
                        type: "gradient",
                        gradient: {
                            shade: "light",
                            type: "vertical",
                            shadeIntensity: 1,
                            opacityFrom: .95,
                            opacityTo: 1,
                            colorStops: [{
                                offset: 0,
                                color: "var(--theme-secondary)",
                                opacity: .1
                            }, {
                                offset: 30,
                                color: "var(--theme-secondary)",
                                opacity: .8
                            }, {
                                offset: 80,
                                color: "var(--theme-secondary)",
                                opacity: 1
                            }, {
                                offset: 100,
                                color: "var(--theme-secondary)",
                                opacity: .1
                            }]
                        }
                    },
                    xaxis: {
                        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        labels: {
                            show: !1
                        },
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        },
                        tooltip: {
                            enabled: !1
                        }
                    },
                    yaxis: {
                        labels: {
                            show: !1
                        },
                        axisBorder: {
                            show: !1
                        },
                        axisTicks: {
                            show: !1
                        }
                    },
                    responsive: [{
                        breakpoint: 1694,
                        options: {
                            chart: {
                                width: 100
                            },
                            annotations: {
                                points: [{
                                    x: 75,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "var(--theme-secondary)",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1661,
                        options: {
                            chart: {
                                width: 120
                            },
                            annotations: {
                                points: [{
                                    x: 90,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "var(--theme-secondary)",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1378,
                        options: {
                            chart: {
                                width: 100
                            },
                            annotations: {
                                points: [{
                                    x: 75,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "var(--theme-secondary)",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1288,
                        options: {
                            chart: {
                                width: 80
                            },
                            annotations: {
                                points: [{
                                    x: 50,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "var(--theme-secondary)",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }, {
                        breakpoint: 1200,
                        options: {
                            chart: {
                                width: 110
                            },
                            annotations: {
                                points: [{
                                    x: 85,
                                    y: 58,
                                    marker: {
                                        size: 4,
                                        fillColor: "var(--theme-secondary)",
                                        strokeColor: "var(--white)",
                                        radius: 2
                                    }
                                }]
                            }
                        }
                    }],
                    clicks: "Like Clicks",
                    clickParsonage: "89",
                    growth: "+79.9%",
                    colorClass: "secondary"
                };
            (new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), (new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), (new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), (new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), (new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), e().add(-12, "days").format("MMM DD"), e().add(-9, "days").format("MMM DD"), e().add(-7, "days").format("MMM DD"), e().add(-5, "days").format("MMM DD"), e().add(-2, "days").format("MMM DD")
        }
    }
]);