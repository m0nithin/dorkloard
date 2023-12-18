! function(q, Ge) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = q.document ? Ge(q, !0) : function(Z) {
        if (!Z.document) throw new Error("jQuery requires a window with a document");
        return Ge(Z)
    } : Ge(q)
}(typeof window < "u" ? window : this, function(q, Ge) {
    "use strict";
    var Z = [],
        Vt = Object.getPrototypeOf,
        ae = Z.slice,
        Gt = Z.flat ? function(e) {
            return Z.flat.call(e)
        } : function(e) {
            return Z.concat.apply([], e)
        },
        ut = Z.push,
        be = Z.indexOf,
        lt = {},
        Yt = lt.toString,
        Ye = lt.hasOwnProperty,
        Qt = Ye.toString,
        _n = Qt.call(Object),
        O = {},
        P = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        Pe = function(e) {
            return null != e && e === e.window
        },
        L = q.document,
        zn = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function Jt(e, t, n) {
        var r, o, a = (n = n || L).createElement("script");
        if (a.text = e, t)
            for (r in zn)(o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function Me(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? lt[Yt.call(e)] || "object" : typeof e
    }
    var Xn = /HTML$/i,
        i = function(e, t) {
            return new i.fn.init(e, t)
        };

    function Ct(e) {
        var t = !!e && "length" in e && e.length,
            n = Me(e);
        return !P(e) && !Pe(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function $(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    i.fn = i.prototype = {
        jquery: "3.7.1",
        constructor: i,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = i.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return i.each(this, e)
        },
        map: function(e) {
            return this.pushStack(i.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(i.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(i.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ut,
        sort: Z.sort,
        splice: Z.splice
    }, i.extend = i.fn.extend = function() {
        var e, t, n, r, o, a, s = arguments[0] || {},
            c = 1,
            l = arguments.length,
            p = !1;
        for ("boolean" == typeof s && (p = s, s = arguments[c] || {}, c++), "object" == typeof s || P(s) || (s = {}), c === l && (s = this, c--); c < l; c++)
            if (null != (e = arguments[c]))
                for (t in e) r = e[t], "__proto__" !== t && s !== r && (p && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], a = o && !Array.isArray(n) ? [] : o || i.isPlainObject(n) ? n : {}, o = !1, s[t] = i.extend(p, a, r)) : void 0 !== r && (s[t] = r));
        return s
    }, i.extend({
        expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== Yt.call(e) || (t = Vt(e)) && ("function" != typeof(n = Ye.call(t, "constructor") && t.constructor) || Qt.call(n) !== _n))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            Jt(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (Ct(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (!o)
                for (; t = e[r++];) n += i.text(t);
            return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (Ct(Object(e)) ? i.merge(n, "string" == typeof e ? [e] : e) : ut.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : be.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var n = e && (e.ownerDocument || e).documentElement;
            return !Xn.test(e && e.namespaceURI || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, a = e.length, s = !n; o < a; o++) !t(e[o], o) !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0,
                s = [];
            if (Ct(e))
                for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return Gt(s)
        },
        guid: 1,
        support: O
    }), "function" == typeof Symbol && (i.fn[Symbol.iterator] = Z[Symbol.iterator]), i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        lt["[object " + t + "]"] = t.toLowerCase()
    });
    var Un = Z.pop,
        Vn = Z.sort,
        Gn = Z.splice,
        F = "[\\x20\\t\\r\\n\\f]",
        Qe = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g");
    i.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var Yn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function Qn(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    i.escapeSelector = function(e) {
        return (e + "").replace(Yn, Qn)
    };
    var we = L,
        kt = ut;
    ! function() {
        var e, t, n, r, o, a, s, c, l, p, g = kt,
            v = i.expando,
            d = 0,
            x = 0,
            k = U(),
            A = U(),
            D = U(),
            X = U(),
            Q = function(u, f) {
                return u === f && (o = !0), 0
            },
            me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ve = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + F + "*(" + ve + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ve + "))|)" + F + "*\\]",
            Le = ":(" + ve + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            I = new RegExp(F + "+", "g"),
            z = new RegExp("^" + F + "*," + F + "*"),
            ot = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            $t = new RegExp(F + "|>"),
            ye = new RegExp(Le),
            at = new RegExp("^" + ve + "$"),
            ke = {
                ID: new RegExp("^#(" + ve + ")"),
                CLASS: new RegExp("^\\.(" + ve + ")"),
                TAG: new RegExp("^(" + ve + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + Le),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + me + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            Se = /^(?:input|select|textarea|button)$/i,
            Ue = /^h\d$/i,
            le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            G = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
            te = function(u, f) {
                var h = "0x" + u.slice(1) - 65536;
                return f || (h < 0 ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, 1023 & h | 56320))
            },
            Ee = function() {
                je()
            },
            ne = bt(function(u) {
                return !0 === u.disabled && $(u, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            g.apply(Z = ae.call(we.childNodes), we.childNodes)
        } catch {
            g = {
                apply: function(f, h) {
                    kt.apply(f, ae.call(h))
                },
                call: function(f) {
                    kt.apply(f, ae.call(arguments, 1))
                }
            }
        }

        function E(u, f, h, m) {
            var y, w, T, C, b, W, N, H = f && f.ownerDocument,
                R = f ? f.nodeType : 9;
            if (h = h || [], "string" != typeof u || !u || 1 !== R && 9 !== R && 11 !== R) return h;
            if (!m && (je(f), f = f || a, c)) {
                if (11 !== R && (b = le.exec(u)))
                    if (y = b[1]) {
                        if (9 === R) {
                            if (!(T = f.getElementById(y))) return h;
                            if (T.id === y) return g.call(h, T), h
                        } else if (H && (T = H.getElementById(y)) && E.contains(f, T) && T.id === y) return g.call(h, T), h
                    } else {
                        if (b[2]) return g.apply(h, f.getElementsByTagName(u)), h;
                        if ((y = b[3]) && f.getElementsByClassName) return g.apply(h, f.getElementsByClassName(y)), h
                    }
                if (!(X[u + " "] || l && l.test(u))) {
                    if (N = u, H = f, 1 === R && ($t.test(u) || ot.test(u))) {
                        for ((H = J.test(u) && Bt(f.parentNode) || f) == f && O.scope || ((C = f.getAttribute("id")) ? C = i.escapeSelector(C) : f.setAttribute("id", C = v)), w = (W = st(u)).length; w--;) W[w] = (C ? "#" + C : ":scope") + " " + xt(W[w]);
                        N = W.join(",")
                    }
                    try {
                        return g.apply(h, H.querySelectorAll(N)), h
                    } catch {
                        X(u, !0)
                    } finally {
                        C === v && f.removeAttribute("id")
                    }
                }
            }
            return Fn(u.replace(Qe, "$1"), f, h, m)
        }

        function U() {
            var u = [];
            return function f(h, m) {
                return u.push(h + " ") > t.cacheLength && delete f[u.shift()], f[h + " "] = m
            }
        }

        function V(u) {
            return u[v] = !0, u
        }

        function B(u) {
            var f = a.createElement("fieldset");
            try {
                return !!u(f)
            } catch {
                return !1
            } finally {
                f.parentNode && f.parentNode.removeChild(f), f = null
            }
        }

        function xe(u) {
            return function(f) {
                return $(f, "input") && f.type === u
            }
        }

        function Ve(u) {
            return function(f) {
                return ($(f, "input") || $(f, "button")) && f.type === u
            }
        }

        function yt(u) {
            return function(f) {
                return "form" in f ? f.parentNode && !1 === f.disabled ? "label" in f ? "label" in f.parentNode ? f.parentNode.disabled === u : f.disabled === u : f.isDisabled === u || f.isDisabled !== !u && ne(f) === u : f.disabled === u : "label" in f && f.disabled === u
            }
        }

        function He(u) {
            return V(function(f) {
                return f = +f, V(function(h, m) {
                    for (var y, w = u([], h.length, f), T = w.length; T--;) h[y = w[T]] && (h[y] = !(m[y] = h[y]))
                })
            })
        }

        function Bt(u) {
            return u && typeof u.getElementsByTagName < "u" && u
        }

        function je(u) {
            var f, h = u ? u.ownerDocument || u : we;
            return h != a && 9 === h.nodeType && h.documentElement && (s = (a = h).documentElement, c = !i.isXMLDoc(a), p = s.matches || s.webkitMatchesSelector || s.msMatchesSelector, s.msMatchesSelector && we != a && (f = a.defaultView) && f.top !== f && f.addEventListener("unload", Ee), O.getById = B(function(m) {
                return s.appendChild(m).id = i.expando, !a.getElementsByName || !a.getElementsByName(i.expando).length
            }), O.disconnectedMatch = B(function(m) {
                return p.call(m, "*")
            }), O.scope = B(function() {
                return a.querySelectorAll(":scope")
            }), O.cssHas = B(function() {
                try {
                    return a.querySelector(":has(*,:jqfake)"), !1
                } catch {
                    return !0
                }
            }), O.getById ? (t.filter.ID = function(m) {
                var y = m.replace(G, te);
                return function(w) {
                    return w.getAttribute("id") === y
                }
            }, t.find.ID = function(m, y) {
                if (typeof y.getElementById < "u" && c) {
                    var w = y.getElementById(m);
                    return w ? [w] : []
                }
            }) : (t.filter.ID = function(m) {
                var y = m.replace(G, te);
                return function(w) {
                    var T = typeof w.getAttributeNode < "u" && w.getAttributeNode("id");
                    return T && T.value === y
                }
            }, t.find.ID = function(m, y) {
                if (typeof y.getElementById < "u" && c) {
                    var w, T, C, b = y.getElementById(m);
                    if (b) {
                        if ((w = b.getAttributeNode("id")) && w.value === m) return [b];
                        for (C = y.getElementsByName(m), T = 0; b = C[T++];)
                            if ((w = b.getAttributeNode("id")) && w.value === m) return [b]
                    }
                    return []
                }
            }), t.find.TAG = function(m, y) {
                return typeof y.getElementsByTagName < "u" ? y.getElementsByTagName(m) : y.querySelectorAll(m)
            }, t.find.CLASS = function(m, y) {
                if (typeof y.getElementsByClassName < "u" && c) return y.getElementsByClassName(m)
            }, l = [], B(function(m) {
                var y;
                s.appendChild(m).innerHTML = "<a id='" + v + "' href='' disabled='disabled'></a><select id='" + v + "-\r\\' disabled='disabled'><option selected=''></option></select>", m.querySelectorAll("[selected]").length || l.push("\\[" + F + "*(?:value|" + me + ")"), m.querySelectorAll("[id~=" + v + "-]").length || l.push("~="), m.querySelectorAll("a#" + v + "+*").length || l.push(".#.+[+~]"), m.querySelectorAll(":checked").length || l.push(":checked"), (y = a.createElement("input")).setAttribute("type", "hidden"), m.appendChild(y).setAttribute("name", "D"), s.appendChild(m).disabled = !0, 2 !== m.querySelectorAll(":disabled").length && l.push(":enabled", ":disabled"), (y = a.createElement("input")).setAttribute("name", ""), m.appendChild(y), m.querySelectorAll("[name='']").length || l.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")")
            }), O.cssHas || l.push(":has"), l = l.length && new RegExp(l.join("|")), Q = function(m, y) {
                if (m === y) return o = !0, 0;
                var w = !m.compareDocumentPosition - !y.compareDocumentPosition;
                return w || (1 & (w = (m.ownerDocument || m) == (y.ownerDocument || y) ? m.compareDocumentPosition(y) : 1) || !O.sortDetached && y.compareDocumentPosition(m) === w ? m === a || m.ownerDocument == we && E.contains(we, m) ? -1 : y === a || y.ownerDocument == we && E.contains(we, y) ? 1 : r ? be.call(r, m) - be.call(r, y) : 0 : 4 & w ? -1 : 1)
            }), a
        }
        for (e in E.matches = function(u, f) {
                return E(u, null, null, f)
            }, E.matchesSelector = function(u, f) {
                if (je(u), c && !X[f + " "] && (!l || !l.test(f))) try {
                    var h = p.call(u, f);
                    if (h || O.disconnectedMatch || u.document && 11 !== u.document.nodeType) return h
                } catch {
                    X(f, !0)
                }
                return 0 < E(f, a, null, [u]).length
            }, E.contains = function(u, f) {
                return (u.ownerDocument || u) != a && je(u), i.contains(u, f)
            }, E.attr = function(u, f) {
                (u.ownerDocument || u) != a && je(u);
                var h = t.attrHandle[f.toLowerCase()],
                    m = h && Ye.call(t.attrHandle, f.toLowerCase()) ? h(u, f, !c) : void 0;
                return void 0 !== m ? m : u.getAttribute(f)
            }, E.error = function(u) {
                throw new Error("Syntax error, unrecognized expression: " + u)
            }, i.uniqueSort = function(u) {
                var f, h = [],
                    m = 0,
                    y = 0;
                if (o = !O.sortStable, r = !O.sortStable && ae.call(u, 0), Vn.call(u, Q), o) {
                    for (; f = u[y++];) f === u[y] && (m = h.push(y));
                    for (; m--;) Gn.call(u, h[m], 1)
                }
                return r = null, u
            }, i.fn.uniqueSort = function() {
                return this.pushStack(i.uniqueSort(ae.apply(this)))
            }, (t = i.expr = {
                cacheLength: 50,
                createPseudo: V,
                match: ke,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(u) {
                        return u[1] = u[1].replace(G, te), u[3] = (u[3] || u[4] || u[5] || "").replace(G, te), "~=" === u[2] && (u[3] = " " + u[3] + " "), u.slice(0, 4)
                    },
                    CHILD: function(u) {
                        return u[1] = u[1].toLowerCase(), "nth" === u[1].slice(0, 3) ? (u[3] || E.error(u[0]), u[4] = +(u[4] ? u[5] + (u[6] || 1) : 2 * ("even" === u[3] || "odd" === u[3])), u[5] = +(u[7] + u[8] || "odd" === u[3])) : u[3] && E.error(u[0]), u
                    },
                    PSEUDO: function(u) {
                        var f, h = !u[6] && u[2];
                        return ke.CHILD.test(u[0]) ? null : (u[3] ? u[2] = u[4] || u[5] || "" : h && ye.test(h) && (f = st(h, !0)) && (f = h.indexOf(")", h.length - f) - h.length) && (u[0] = u[0].slice(0, f), u[2] = h.slice(0, f)), u.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(u) {
                        var f = u.replace(G, te).toLowerCase();
                        return "*" === u ? function() {
                            return !0
                        } : function(h) {
                            return $(h, f)
                        }
                    },
                    CLASS: function(u) {
                        var f = k[u + " "];
                        return f || (f = new RegExp("(^|" + F + ")" + u + "(" + F + "|$)")) && k(u, function(h) {
                            return f.test("string" == typeof h.className && h.className || typeof h.getAttribute < "u" && h.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(u, f, h) {
                        return function(m) {
                            var y = E.attr(m, u);
                            return null == y ? "!=" === f : !f || (y += "", "=" === f ? y === h : "!=" === f ? y !== h : "^=" === f ? h && 0 === y.indexOf(h) : "*=" === f ? h && -1 < y.indexOf(h) : "$=" === f ? h && y.slice(-h.length) === h : "~=" === f ? -1 < (" " + y.replace(I, " ") + " ").indexOf(h) : "|=" === f && (y === h || y.slice(0, h.length + 1) === h + "-"))
                        }
                    },
                    CHILD: function(u, f, h, m, y) {
                        var w = "nth" !== u.slice(0, 3),
                            T = "last" !== u.slice(-4),
                            C = "of-type" === f;
                        return 1 === m && 0 === y ? function(b) {
                            return !!b.parentNode
                        } : function(b, W, N) {
                            var H, R, j, Y, ee, K = w !== T ? "nextSibling" : "previousSibling",
                                oe = b.parentNode,
                                se = C && b.nodeName.toLowerCase(),
                                pe = !N && !C,
                                _ = !1;
                            if (oe) {
                                if (w) {
                                    for (; K;) {
                                        for (j = b; j = j[K];)
                                            if (C ? $(j, se) : 1 === j.nodeType) return !1;
                                        ee = K = "only" === u && !ee && "nextSibling"
                                    }
                                    return !0
                                }
                                if (ee = [T ? oe.firstChild : oe.lastChild], T && pe) {
                                    for (_ = (Y = (H = (R = oe[v] || (oe[v] = {}))[u] || [])[0] === d && H[1]) && H[2], j = Y && oe.childNodes[Y]; j = ++Y && j && j[K] || (_ = Y = 0) || ee.pop();)
                                        if (1 === j.nodeType && ++_ && j === b) {
                                            R[u] = [d, Y, _];
                                            break
                                        }
                                } else if (pe && (_ = Y = (H = (R = b[v] || (b[v] = {}))[u] || [])[0] === d && H[1]), !1 === _)
                                    for (;
                                        (j = ++Y && j && j[K] || (_ = Y = 0) || ee.pop()) && (!(C ? $(j, se) : 1 === j.nodeType) || !++_ || (pe && ((R = j[v] || (j[v] = {}))[u] = [d, _]), j !== b)););
                                return (_ -= y) === m || _ % m == 0 && 0 <= _ / m
                            }
                        }
                    },
                    PSEUDO: function(u, f) {
                        var h, m = t.pseudos[u] || t.setFilters[u.toLowerCase()] || E.error("unsupported pseudo: " + u);
                        return m[v] ? m(f) : 1 < m.length ? (h = [u, u, "", f], t.setFilters.hasOwnProperty(u.toLowerCase()) ? V(function(y, w) {
                            for (var T, C = m(y, f), b = C.length; b--;) y[T = be.call(y, C[b])] = !(w[T] = C[b])
                        }) : function(y) {
                            return m(y, 0, h)
                        }) : m
                    }
                },
                pseudos: {
                    not: V(function(u) {
                        var f = [],
                            h = [],
                            m = Ut(u.replace(Qe, "$1"));
                        return m[v] ? V(function(y, w, T, C) {
                            for (var b, W = m(y, null, C, []), N = y.length; N--;)(b = W[N]) && (y[N] = !(w[N] = b))
                        }) : function(y, w, T) {
                            return f[0] = y, m(f, null, T, h), f[0] = null, !h.pop()
                        }
                    }),
                    has: V(function(u) {
                        return function(f) {
                            return 0 < E(u, f).length
                        }
                    }),
                    contains: V(function(u) {
                        return u = u.replace(G, te),
                            function(f) {
                                return -1 < (f.textContent || i.text(f)).indexOf(u)
                            }
                    }),
                    lang: V(function(u) {
                        return at.test(u || "") || E.error("unsupported lang: " + u), u = u.replace(G, te).toLowerCase(),
                            function(f) {
                                var h;
                                do {
                                    if (h = c ? f.lang : f.getAttribute("xml:lang") || f.getAttribute("lang")) return (h = h.toLowerCase()) === u || 0 === h.indexOf(u + "-")
                                } while ((f = f.parentNode) && 1 === f.nodeType);
                                return !1
                            }
                    }),
                    target: function(u) {
                        var f = q.location && q.location.hash;
                        return f && f.slice(1) === u.id
                    },
                    root: function(u) {
                        return u === s
                    },
                    focus: function(u) {
                        return u === function() {
                            try {
                                return a.activeElement
                            } catch {}
                        }() && a.hasFocus() && !!(u.type || u.href || ~u.tabIndex)
                    },
                    enabled: yt(!1),
                    disabled: yt(!0),
                    checked: function(u) {
                        return $(u, "input") && !!u.checked || $(u, "option") && !!u.selected
                    },
                    selected: function(u) {
                        return !0 === u.selected
                    },
                    empty: function(u) {
                        for (u = u.firstChild; u; u = u.nextSibling)
                            if (u.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(u) {
                        return !t.pseudos.empty(u)
                    },
                    header: function(u) {
                        return Ue.test(u.nodeName)
                    },
                    input: function(u) {
                        return Se.test(u.nodeName)
                    },
                    button: function(u) {
                        return $(u, "input") && "button" === u.type || $(u, "button")
                    },
                    text: function(u) {
                        var f;
                        return $(u, "input") && "text" === u.type && (null == (f = u.getAttribute("type")) || "text" === f.toLowerCase())
                    },
                    first: He(function() {
                        return [0]
                    }),
                    last: He(function(u, f) {
                        return [f - 1]
                    }),
                    eq: He(function(u, f, h) {
                        return [h < 0 ? h + f : h]
                    }),
                    even: He(function(u, f) {
                        for (var h = 0; h < f; h += 2) u.push(h);
                        return u
                    }),
                    odd: He(function(u, f) {
                        for (var h = 1; h < f; h += 2) u.push(h);
                        return u
                    }),
                    lt: He(function(u, f, h) {
                        var m;
                        for (m = h < 0 ? h + f : f < h ? f : h; 0 <= --m;) u.push(m);
                        return u
                    }),
                    gt: He(function(u, f, h) {
                        for (var m = h < 0 ? h + f : h; ++m < f;) u.push(m);
                        return u
                    })
                }
            }).pseudos.nth = t.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[e] = xe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) t.pseudos[e] = Ve(e);

        function Wn() {}

        function st(u, f) {
            var h, m, y, w, T, C, b, W = A[u + " "];
            if (W) return f ? 0 : W.slice(0);
            for (T = u, C = [], b = t.preFilter; T;) {
                for (w in h && !(m = z.exec(T)) || (m && (T = T.slice(m[0].length) || T), C.push(y = [])), h = !1, (m = ot.exec(T)) && (h = m.shift(), y.push({
                        value: h,
                        type: m[0].replace(Qe, " ")
                    }), T = T.slice(h.length)), t.filter) !(m = ke[w].exec(T)) || b[w] && !(m = b[w](m)) || (h = m.shift(), y.push({
                    value: h,
                    type: w,
                    matches: m
                }), T = T.slice(h.length));
                if (!h) break
            }
            return f ? T.length : T ? E.error(u) : A(u, C).slice(0)
        }

        function xt(u) {
            for (var f = 0, h = u.length, m = ""; f < h; f++) m += u[f].value;
            return m
        }

        function bt(u, f, h) {
            var m = f.dir,
                y = f.next,
                w = y || m,
                T = h && "parentNode" === w,
                C = x++;
            return f.first ? function(b, W, N) {
                for (; b = b[m];)
                    if (1 === b.nodeType || T) return u(b, W, N);
                return !1
            } : function(b, W, N) {
                var H, R, j = [d, C];
                if (N) {
                    for (; b = b[m];)
                        if ((1 === b.nodeType || T) && u(b, W, N)) return !0
                } else
                    for (; b = b[m];)
                        if (1 === b.nodeType || T)
                            if (R = b[v] || (b[v] = {}), y && $(b, y)) b = b[m] || b;
                            else {
                                if ((H = R[w]) && H[0] === d && H[1] === C) return j[2] = H[2];
                                if ((R[w] = j)[2] = u(b, W, N)) return !0
                            } return !1
            }
        }

        function _t(u) {
            return 1 < u.length ? function(f, h, m) {
                for (var y = u.length; y--;)
                    if (!u[y](f, h, m)) return !1;
                return !0
            } : u[0]
        }

        function wt(u, f, h, m, y) {
            for (var w, T = [], C = 0, b = u.length, W = null != f; C < b; C++)(w = u[C]) && (h && !h(w, m, y) || (T.push(w), W && f.push(C)));
            return T
        }

        function zt(u, f, h, m, y, w) {
            return m && !m[v] && (m = zt(m)), y && !y[v] && (y = zt(y, w)), V(function(T, C, b, W) {
                var N, H, R, j, Y = [],
                    ee = [],
                    K = C.length,
                    oe = T || function(pe, _, Oe) {
                        for (var de = 0, Tt = _.length; de < Tt; de++) E(pe, _[de], Oe);
                        return Oe
                    }(f || "*", b.nodeType ? [b] : b, []),
                    se = !u || !T && f ? oe : wt(oe, Y, u, b, W);
                if (h ? h(se, j = y || (T ? u : K || m) ? [] : C, b, W) : j = se, m)
                    for (N = wt(j, ee), m(N, [], b, W), H = N.length; H--;)(R = N[H]) && (j[ee[H]] = !(se[ee[H]] = R));
                if (T) {
                    if (y || u) {
                        if (y) {
                            for (N = [], H = j.length; H--;)(R = j[H]) && N.push(se[H] = R);
                            y(null, j = [], N, W)
                        }
                        for (H = j.length; H--;)(R = j[H]) && -1 < (N = y ? be.call(T, R) : Y[H]) && (T[N] = !(C[N] = R))
                    }
                } else j = wt(j === C ? j.splice(K, j.length) : j), y ? y(null, C, j, W) : g.apply(C, j)
            })
        }

        function Xt(u) {
            for (var f, h, m, y = u.length, w = t.relative[u[0].type], T = w || t.relative[" "], C = w ? 1 : 0, b = bt(function(H) {
                    return H === f
                }, T, !0), W = bt(function(H) {
                    return -1 < be.call(f, H)
                }, T, !0), N = [function(H, R, j) {
                    var Y = !w && (j || R != n) || ((f = R).nodeType ? b(H, R, j) : W(H, R, j));
                    return f = null, Y
                }]; C < y; C++)
                if (h = t.relative[u[C].type]) N = [bt(_t(N), h)];
                else {
                    if ((h = t.filter[u[C].type].apply(null, u[C].matches))[v]) {
                        for (m = ++C; m < y && !t.relative[u[m].type]; m++);
                        return zt(1 < C && _t(N), 1 < C && xt(u.slice(0, C - 1).concat({
                            value: " " === u[C - 2].type ? "*" : ""
                        })).replace(Qe, "$1"), h, C < m && Xt(u.slice(C, m)), m < y && Xt(u = u.slice(m)), m < y && xt(u))
                    }
                    N.push(h)
                }
            return _t(N)
        }

        function Ut(u, f) {
            var h, m, y, w, T, C, b = [],
                W = [],
                N = D[u + " "];
            if (!N) {
                for (f || (f = st(u)), h = f.length; h--;)(N = Xt(f[h]))[v] ? b.push(N) : W.push(N);
                (N = D(u, (m = W, w = 0 < (y = b).length, T = 0 < m.length, C = function(H, R, j, Y, ee) {
                    var K, oe, se, pe = 0,
                        _ = "0",
                        Oe = H && [],
                        de = [],
                        Tt = n,
                        $n = H || T && t.find.TAG("*", ee),
                        Bn = d += null == Tt ? 1 : Math.random() || .1,
                        Or = $n.length;
                    for (ee && (n = R == a || R || ee); _ !== Or && null != (K = $n[_]); _++) {
                        if (T && K) {
                            for (oe = 0, R || K.ownerDocument == a || (je(K), j = !c); se = m[oe++];)
                                if (se(K, R || a, j)) {
                                    g.call(Y, K);
                                    break
                                }
                            ee && (d = Bn)
                        }
                        w && ((K = !se && K) && pe--, H && Oe.push(K))
                    }
                    if (pe += _, w && _ !== pe) {
                        for (oe = 0; se = y[oe++];) se(Oe, de, R, j);
                        if (H) {
                            if (0 < pe)
                                for (; _--;) Oe[_] || de[_] || (de[_] = Un.call(Y));
                            de = wt(de)
                        }
                        g.apply(Y, de), ee && !H && 0 < de.length && 1 < pe + y.length && i.uniqueSort(Y)
                    }
                    return ee && (d = Bn, n = Tt), Oe
                }, w ? V(C) : C))).selector = u
            }
            return N
        }

        function Fn(u, f, h, m) {
            var y, w, T, C, b, W = "function" == typeof u && u,
                N = !m && st(u = W.selector || u);
            if (h = h || [], 1 === N.length) {
                if (2 < (w = N[0] = N[0].slice(0)).length && "ID" === (T = w[0]).type && 9 === f.nodeType && c && t.relative[w[1].type]) {
                    if (!(f = (t.find.ID(T.matches[0].replace(G, te), f) || [])[0])) return h;
                    W && (f = f.parentNode), u = u.slice(w.shift().value.length)
                }
                for (y = ke.needsContext.test(u) ? 0 : w.length; y-- && !t.relative[C = (T = w[y]).type];)
                    if ((b = t.find[C]) && (m = b(T.matches[0].replace(G, te), J.test(w[0].type) && Bt(f.parentNode) || f))) {
                        if (w.splice(y, 1), !(u = m.length && xt(w))) return g.apply(h, m), h;
                        break
                    }
            }
            return (W || Ut(u, N))(m, f, !c, h, !f || J.test(u) && Bt(f.parentNode) || f), h
        }
        Wn.prototype = t.filters = t.pseudos, t.setFilters = new Wn, O.sortStable = v.split("").sort(Q).join("") === v, je(), O.sortDetached = B(function(u) {
            return 1 & u.compareDocumentPosition(a.createElement("fieldset"))
        }), i.find = E, i.expr[":"] = i.expr.pseudos, i.unique = i.uniqueSort, E.compile = Ut, E.select = Fn, E.setDocument = je, E.tokenize = st, E.escape = i.escapeSelector, E.getText = i.text, E.isXML = i.isXMLDoc, E.selectors = i.expr, E.support = i.support, E.uniqueSort = i.uniqueSort
    }();
    var Re = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && i(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        Zt = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        en = i.expr.match.needsContext,
        tn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function St(e, t, n) {
        return P(t) ? i.grep(e, function(r, o) {
            return !!t.call(r, o, r) !== n
        }) : t.nodeType ? i.grep(e, function(r) {
            return r === t !== n
        }) : "string" != typeof t ? i.grep(e, function(r) {
            return -1 < be.call(t, r) !== n
        }) : i.filter(t, e, n)
    }
    i.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function(o) {
            return 1 === o.nodeType
        }))
    }, i.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(i(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (i.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
            return 1 < r ? i.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(St(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(St(this, e || [], !0))
        },
        is: function(e) {
            return !!St(this, "string" == typeof e && en.test(e) ? i(e) : e || [], !1).length
        }
    });
    var nn, Jn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || nn, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Jn.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (i.merge(this, i.parseHTML(r[1], (t = t instanceof i ? t[0] : t) && t.nodeType ? t.ownerDocument || t : L, !0)), tn.test(r[1]) && i.isPlainObject(t))
                    for (r in t) P(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = L.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : P(e) ? void 0 !== n.ready ? n.ready(e) : e(i) : i.makeArray(e, this)
    }).prototype = i.fn, nn = i(L);
    var Kn = /^(?:parents|prev(?:Until|All))/,
        Zn = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function rn(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    i.fn.extend({
        has: function(e) {
            var t = i(e, this),
                n = t.length;
            return this.filter(function() {
                for (var r = 0; r < n; r++)
                    if (i.contains(this, t[r])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                a = [],
                s = "string" != typeof e && i(e);
            if (!en.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && i.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(1 < a.length ? i.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? be.call(i(e), this[0]) : be.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), i.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Re(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Re(e, "parentNode", n)
        },
        next: function(e) {
            return rn(e, "nextSibling")
        },
        prev: function(e) {
            return rn(e, "previousSibling")
        },
        nextAll: function(e) {
            return Re(e, "nextSibling")
        },
        prevAll: function(e) {
            return Re(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Re(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Re(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Zt((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Zt(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && Vt(e.contentDocument) ? e.contentDocument : ($(e, "template") && (e = e.content || e), i.merge([], e.childNodes))
        }
    }, function(e, t) {
        i.fn[e] = function(n, r) {
            var o = i.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = i.filter(r, o)), 1 < this.length && (Zn[e] || i.uniqueSort(o), Kn.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var he = /[^\x20\t\r\n\f]+/g;

    function Ie(e) {
        return e
    }

    function ct(e) {
        throw e
    }

    function on(e, t, n, r) {
        var o;
        try {
            e && P(o = e.promise) ? o.call(e).done(t).fail(n) : e && P(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (a) {
            n.apply(void 0, [a])
        }
    }
    i.Callbacks = function(e) {
        var n;
        e = "string" == typeof e ? (n = {}, i.each(e.match(he) || [], function(d, x) {
            n[x] = !0
        }), n) : i.extend({}, e);
        var r, o, a, s, c = [],
            l = [],
            p = -1,
            g = function() {
                for (s = s || e.once, a = r = !0; l.length; p = -1)
                    for (o = l.shift(); ++p < c.length;) !1 === c[p].apply(o[0], o[1]) && e.stopOnFalse && (p = c.length, o = !1);
                e.memory || (o = !1), r = !1, s && (c = o ? [] : "")
            },
            v = {
                add: function() {
                    return c && (o && !r && (p = c.length - 1, l.push(o)), function d(x) {
                        i.each(x, function(k, A) {
                            P(A) ? e.unique && v.has(A) || c.push(A) : A && A.length && "string" !== Me(A) && d(A)
                        })
                    }(arguments), o && !r && g()), this
                },
                remove: function() {
                    return i.each(arguments, function(d, x) {
                        for (var k; - 1 < (k = i.inArray(x, c, k));) c.splice(k, 1), k <= p && p--
                    }), this
                },
                has: function(d) {
                    return d ? -1 < i.inArray(d, c) : 0 < c.length
                },
                empty: function() {
                    return c && (c = []), this
                },
                disable: function() {
                    return s = l = [], c = o = "", this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return s = l = [], o || r || (c = o = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(d, x) {
                    return s || (x = [d, (x = x || []).slice ? x.slice() : x], l.push(x), r || g()), this
                },
                fire: function() {
                    return v.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return v
    }, i.extend({
        Deferred: function(e) {
            var t = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(a) {
                        return r.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return i.Deferred(function(s) {
                            i.each(t, function(c, l) {
                                var p = P(a[l[4]]) && a[l[4]];
                                o[l[1]](function() {
                                    var g = p && p.apply(this, arguments);
                                    g && P(g.promise) ? g.promise().progress(s.notify).done(s.resolve).fail(s.reject) : s[l[0] + "With"](this, p ? [g] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(a, s, c) {
                        var l = 0;

                        function p(g, v, d, x) {
                            return function() {
                                var k = this,
                                    A = arguments,
                                    D = function() {
                                        var Q, me;
                                        if (!(g < l)) {
                                            if ((Q = d.apply(k, A)) === v.promise()) throw new TypeError("Thenable self-resolution");
                                            P(me = Q && ("object" == typeof Q || "function" == typeof Q) && Q.then) ? x ? me.call(Q, p(l, v, Ie, x), p(l, v, ct, x)) : (l++, me.call(Q, p(l, v, Ie, x), p(l, v, ct, x), p(l, v, Ie, v.notifyWith))) : (d !== Ie && (k = void 0, A = [Q]), (x || v.resolveWith)(k, A))
                                        }
                                    },
                                    X = x ? D : function() {
                                        try {
                                            D()
                                        } catch (Q) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(Q, X.error), l <= g + 1 && (d !== ct && (k = void 0, A = [Q]), v.rejectWith(k, A))
                                        }
                                    };
                                g ? X() : (i.Deferred.getErrorHook ? X.error = i.Deferred.getErrorHook() : i.Deferred.getStackHook && (X.error = i.Deferred.getStackHook()), q.setTimeout(X))
                            }
                        }
                        return i.Deferred(function(g) {
                            t[0][3].add(p(0, g, P(c) ? c : Ie, g.notifyWith)), t[1][3].add(p(0, g, P(a) ? a : Ie)), t[2][3].add(p(0, g, P(s) ? s : ct))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? i.extend(a, r) : r
                    }
                },
                o = {};
            return i.each(t, function(a, s) {
                var c = s[2],
                    l = s[5];
                r[s[1]] = c.add, l && c.add(function() {
                    n = l
                }, t[3 - a][2].disable, t[3 - a][3].disable, t[0][2].lock, t[0][3].lock), c.add(s[3].fire), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[s[0] + "With"] = c.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = ae.call(arguments),
                a = i.Deferred(),
                s = function(c) {
                    return function(l) {
                        r[c] = this, o[c] = 1 < arguments.length ? ae.call(arguments) : l, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (on(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || P(o[n] && o[n].then))) return a.then();
            for (; n--;) on(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var er = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(e, t) {
        q.console && q.console.warn && e && er.test(e.name) && q.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, i.readyException = function(e) {
        q.setTimeout(function() {
            throw e
        })
    };
    var Et = i.Deferred();

    function ft() {
        L.removeEventListener("DOMContentLoaded", ft), q.removeEventListener("load", ft), i.ready()
    }
    i.fn.ready = function(e) {
        return Et.then(e).catch(function(t) {
            i.readyException(t)
        }), this
    }, i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --i.readyWait : i.isReady) || (i.isReady = !0) !== e && 0 < --i.readyWait || Et.resolveWith(L, [i])
        }
    }), i.ready.then = Et.then, "complete" === L.readyState || "loading" !== L.readyState && !L.documentElement.doScroll ? q.setTimeout(i.ready) : (L.addEventListener("DOMContentLoaded", ft), q.addEventListener("load", ft));
    var Te = function(e, t, n, r, o, a, s) {
            var c = 0,
                l = e.length,
                p = null == n;
            if ("object" === Me(n))
                for (c in o = !0, n) Te(e, t, c, n[c], !0, a, s);
            else if (void 0 !== r && (o = !0, P(r) || (s = !0), p && (s ? (t.call(e, r), t = null) : (p = t, t = function(g, v, d) {
                    return p.call(i(g), d)
                })), t))
                for (; c < l; c++) t(e[c], n, s ? r : r.call(e[c], c, t(e[c], n)));
            return o ? e : p ? t.call(e) : l ? t(e[0], n) : a
        },
        tr = /^-ms-/,
        nr = /-([a-z])/g;

    function rr(e, t) {
        return t.toUpperCase()
    }

    function ge(e) {
        return e.replace(tr, "ms-").replace(nr, rr)
    }
    var Je = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Ke() {
        this.expando = i.expando + Ke.uid++
    }
    Ke.uid = 1, Ke.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[ge(t)] = n;
            else
                for (r in t) o[ge(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for ((n = (t = Array.isArray(t) ? t.map(ge) : (t = ge(t)) in r ? [t] : t.match(he) || []).length); n--;) delete r[t[n]];
                (void 0 === t || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var S = new Ke,
        re = new Ke,
        ir = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        or = /[A-Z]/g;

    function an(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(or, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : ir.test(o) ? JSON.parse(o) : o)
                } catch {}
                re.set(e, t, n)
            } else n = void 0;
        return n
    }
    i.extend({
        hasData: function(e) {
            return re.hasData(e) || S.hasData(e)
        },
        data: function(e, t, n) {
            return re.access(e, t, n)
        },
        removeData: function(e, t) {
            re.remove(e, t)
        },
        _data: function(e, t, n) {
            return S.access(e, t, n)
        },
        _removeData: function(e, t) {
            S.remove(e, t)
        }
    }), i.fn.extend({
        data: function(e, t) {
            var n, r, o, a = this[0],
                s = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (o = re.get(a), 1 === a.nodeType && !S.get(a, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = ge(r.slice(5)), an(a, r, o[r]));
                    S.set(a, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                re.set(this, e)
            }) : Te(this, function(c) {
                var l;
                if (a && void 0 === c) return void 0 !== (l = re.get(a, e)) || void 0 !== (l = an(a, e)) ? l : void 0;
                this.each(function() {
                    re.set(this, e, c)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                re.remove(this, e)
            })
        }
    }), i.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return r = S.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = S.access(e, t, i.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            var n = i.queue(e, t = t || "fx"),
                r = n.length,
                o = n.shift(),
                a = i._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e, function() {
                i.dequeue(e, t)
            }, a)), !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return S.get(e, n) || S.access(e, n, {
                empty: i.Callbacks("once memory").add(function() {
                    S.remove(e, [t + "queue", n])
                })
            })
        }
    }), i.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, e, t);
                i._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && i.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                i.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = i.Deferred(),
                a = this,
                s = this.length,
                c = function() {
                    --r || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = S.get(a[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(c));
            return c(), o.promise(t)
        }
    });
    var sn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ze = new RegExp("^(?:([+-])=|)(" + sn + ")([a-z%]*)$", "i"),
        Ce = ["Top", "Right", "Bottom", "Left"],
        Ae = L.documentElement,
        We = function(e) {
            return i.contains(e.ownerDocument, e)
        },
        ar = {
            composed: !0
        };
    Ae.getRootNode && (We = function(e) {
        return i.contains(e.ownerDocument, e) || e.getRootNode(ar) === e.ownerDocument
    });
    var pt = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && We(e) && "none" === i.css(e, "display")
    };

    function un(e, t, n, r) {
        var o, a, s = 20,
            c = r ? function() {
                return r.cur()
            } : function() {
                return i.css(e, t, "")
            },
            l = c(),
            p = n && n[3] || (i.cssNumber[t] ? "" : "px"),
            g = e.nodeType && (i.cssNumber[t] || "px" !== p && +l) && Ze.exec(i.css(e, t));
        if (g && g[3] !== p) {
            for (p = p || g[3], g = +(l /= 2) || 1; s--;) i.style(e, t, g + p), (1 - a) * (1 - (a = c() / l || .5)) <= 0 && (s = 0), g /= a;
            i.style(e, t, (g *= 2) + p), n = n || []
        }
        return n && (g = +g || +l || 0, o = n[1] ? g + (n[1] + 1) * n[2] : +n[2], r && (r.unit = p, r.start = g, r.end = o)), o
    }
    var ln = {};

    function Fe(e, t) {
        for (var n, r, o, a, s, c, l, p = [], g = 0, v = e.length; g < v; g++)(r = e[g]).style && (n = r.style.display, t ? ("none" === n && (p[g] = S.get(r, "display") || null, p[g] || (r.style.display = "")), "" === r.style.display && pt(r) && (p[g] = (l = s = a = void 0, s = (o = r).ownerDocument, (l = ln[c = o.nodeName]) || (a = s.body.appendChild(s.createElement(c)), l = i.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), ln[c] = l)))) : "none" !== n && (p[g] = "none", S.set(r, "display", n)));
        for (g = 0; g < v; g++) null != p[g] && (e[g].style.display = p[g]);
        return e
    }
    i.fn.extend({
        show: function() {
            return Fe(this, !0)
        },
        hide: function() {
            return Fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                pt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var De, dt, et = /^(?:checkbox|radio)$/i,
        cn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fn = /^$|^module$|\/(?:java|ecma)script/i;
    De = L.createDocumentFragment().appendChild(L.createElement("div")), (dt = L.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), De.appendChild(dt), O.checkClone = De.cloneNode(!0).cloneNode(!0).lastChild.checked, De.innerHTML = "<textarea>x</textarea>", O.noCloneChecked = !!De.cloneNode(!0).lastChild.defaultValue, De.innerHTML = "<option></option>", O.option = !!De.lastChild;
    var ue = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ie(e, t) {
        var n;
        return n = typeof e.getElementsByTagName < "u" ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? i.merge([e], n) : n
    }

    function jt(e, t) {
        for (var n = 0, r = e.length; n < r; n++) S.set(e[n], "globalEval", !t || S.get(t[n], "globalEval"))
    }
    ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td, O.option || (ue.optgroup = ue.option = [1, "<select multiple='multiple'>", "</select>"]);
    var sr = /<|&#?\w+;/;

    function pn(e, t, n, r, o) {
        for (var a, s, c, l, p, g, v = t.createDocumentFragment(), d = [], x = 0, k = e.length; x < k; x++)
            if ((a = e[x]) || 0 === a)
                if ("object" === Me(a)) i.merge(d, a.nodeType ? [a] : a);
                else if (sr.test(a)) {
            for (s = s || v.appendChild(t.createElement("div")), c = (cn.exec(a) || ["", ""])[1].toLowerCase(), s.innerHTML = (l = ue[c] || ue._default)[1] + i.htmlPrefilter(a) + l[2], g = l[0]; g--;) s = s.lastChild;
            i.merge(d, s.childNodes), (s = v.firstChild).textContent = ""
        } else d.push(t.createTextNode(a));
        for (v.textContent = "", x = 0; a = d[x++];)
            if (r && -1 < i.inArray(a, r)) o && o.push(a);
            else if (p = We(a), s = ie(v.appendChild(a), "script"), p && jt(s), n)
            for (g = 0; a = s[g++];) fn.test(a.type || "") && n.push(a);
        return v
    }
    var dn = /^([^.]*)(?:\.(.+)|)/;

    function $e() {
        return !0
    }

    function Be() {
        return !1
    }

    function At(e, t, n, r, o, a) {
        var s, c;
        if ("object" == typeof t) {
            for (c in "string" != typeof n && (r = r || n, n = void 0), t) At(e, c, n, r, t[c], a);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Be;
        else if (!o) return e;
        return 1 === a && (s = o, (o = function(l) {
            return i().off(l), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = i.guid++)), e.each(function() {
            i.event.add(this, t, o, r, n)
        })
    }

    function ht(e, t, n) {
        n ? (S.set(e, t, !1), i.event.add(e, t, {
            namespace: !1,
            handler: function(r) {
                var o, a = S.get(this, t);
                if (1 & r.isTrigger && this[t]) {
                    if (a)(i.event.special[t] || {}).delegateType && r.stopPropagation();
                    else if (a = ae.call(arguments), S.set(this, t, a), this[t](), o = S.get(this, t), S.set(this, t, !1), a !== o) return r.stopImmediatePropagation(), r.preventDefault(), o
                } else a && (S.set(this, t, i.event.trigger(a[0], a.slice(1), this)), r.stopPropagation(), r.isImmediatePropagationStopped = $e)
            }
        })) : void 0 === S.get(e, t) && i.event.add(e, t, $e)
    }
    i.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var a, s, c, l, p, g, v, d, x, k, A, D = S.get(e);
            if (Je(e))
                for (n.handler && (n = (a = n).handler, o = a.selector), o && i.find.matchesSelector(Ae, o), n.guid || (n.guid = i.guid++), (l = D.events) || (l = D.events = Object.create(null)), (s = D.handle) || (s = D.handle = function(X) {
                        return typeof i < "u" && i.event.triggered !== X.type ? i.event.dispatch.apply(e, arguments) : void 0
                    }), p = (t = (t || "").match(he) || [""]).length; p--;) x = A = (c = dn.exec(t[p]) || [])[1], k = (c[2] || "").split(".").sort(), x && (v = i.event.special[x] || {}, v = i.event.special[x = (o ? v.delegateType : v.bindType) || x] || {}, g = i.extend({
                    type: x,
                    origType: A,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: k.join(".")
                }, a), (d = l[x]) || ((d = l[x] = []).delegateCount = 0, v.setup && !1 !== v.setup.call(e, r, k, s) || e.addEventListener && e.addEventListener(x, s)), v.add && (v.add.call(e, g), g.handler.guid || (g.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, g) : d.push(g), i.event.global[x] = !0)
        },
        remove: function(e, t, n, r, o) {
            var a, s, c, l, p, g, v, d, x, k, A, D = S.hasData(e) && S.get(e);
            if (D && (l = D.events)) {
                for (p = (t = (t || "").match(he) || [""]).length; p--;)
                    if (x = A = (c = dn.exec(t[p]) || [])[1], k = (c[2] || "").split(".").sort(), x) {
                        for (v = i.event.special[x] || {}, d = l[x = (r ? v.delegateType : v.bindType) || x] || [], c = c[2] && new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = d.length; a--;) g = d[a], !o && A !== g.origType || n && n.guid !== g.guid || c && !c.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (d.splice(a, 1), g.selector && d.delegateCount--, v.remove && v.remove.call(e, g));
                        s && !d.length && (v.teardown && !1 !== v.teardown.call(e, k, D.handle) || i.removeEvent(e, x, D.handle), delete l[x])
                    } else
                        for (x in l) i.event.remove(e, x + t[p], n, r, !0);
                i.isEmptyObject(l) && S.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, a, s, c = new Array(arguments.length),
                l = i.event.fix(e),
                p = (S.get(this, "events") || Object.create(null))[l.type] || [],
                g = i.event.special[l.type] || {};
            for (c[0] = l, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (l.delegateTarget = this, !g.preDispatch || !1 !== g.preDispatch.call(this, l)) {
                for (s = i.event.handlers.call(this, l, p), t = 0;
                    (o = s[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, n = 0;
                        (a = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (r = ((i.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, c)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                return g.postDispatch && g.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, a, s, c = [],
                l = t.delegateCount,
                p = e.target;
            if (l && p.nodeType && !("click" === e.type && 1 <= e.button))
                for (; p !== this; p = p.parentNode || this)
                    if (1 === p.nodeType && ("click" !== e.type || !0 !== p.disabled)) {
                        for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? -1 < i(o, this).index(p) : i.find(o, this, null, [p]).length), s[o] && a.push(r);
                        a.length && c.push({
                            elem: p,
                            handlers: a
                        })
                    }
            return p = this, l < t.length && c.push({
                elem: p,
                handlers: t.slice(l)
            }), c
        },
        addProp: function(e, t) {
            Object.defineProperty(i.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: P(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(n) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    })
                }
            })
        },
        fix: function(e) {
            return e[i.expando] ? e : new i.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return et.test(t.type) && t.click && $(t, "input") && ht(t, "click", !0), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return et.test(t.type) && t.click && $(t, "input") && ht(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return et.test(t.type) && t.click && $(t, "input") && S.get(t, "click") || $(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, i.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, i.Event = function(e, t) {
        if (!(this instanceof i.Event)) return new i.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? $e : Be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[i.expando] = !0
    }, i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: Be,
        isPropagationStopped: Be,
        isImmediatePropagationStopped: Be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = $e, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = $e, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = $e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, i.event.addProp), i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(r) {
            if (L.documentMode) {
                var o = S.get(this, "handle"),
                    a = i.event.fix(r);
                a.type = "focusin" === r.type ? "focus" : "blur", a.isSimulated = !0, o(r), a.target === a.currentTarget && o(a)
            } else i.event.simulate(t, r.target, i.event.fix(r))
        }
        i.event.special[e] = {
            setup: function() {
                var r;
                if (ht(this, e, !0), !L.documentMode) return !1;
                (r = S.get(this, t)) || this.addEventListener(t, n), S.set(this, t, (r || 0) + 1)
            },
            trigger: function() {
                return ht(this, e), !0
            },
            teardown: function() {
                var r;
                if (!L.documentMode) return !1;
                (r = S.get(this, t) - 1) ? S.set(this, t, r): (this.removeEventListener(t, n), S.remove(this, t))
            },
            _default: function(r) {
                return S.get(r.target, e)
            },
            delegateType: t
        }, i.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    o = L.documentMode ? this : r,
                    a = S.get(o, t);
                a || (L.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), S.set(o, t, (a || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    o = L.documentMode ? this : r,
                    a = S.get(o, t) - 1;
                a ? S.set(o, t, a) : (L.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), S.remove(o, t))
            }
        }
    }), i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var r, o = n.relatedTarget,
                    a = n.handleObj;
                return o && (o === this || i.contains(this, o)) || (n.type = a.origType, r = a.handler.apply(this, arguments), n.type = t), r
            }
        }
    }), i.fn.extend({
        on: function(e, t, n, r) {
            return At(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return At(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Be), this.each(function() {
                i.event.remove(this, e, n, t)
            })
        }
    });
    var ur = /<script|<style|<link/i,
        lr = /checked\s*(?:[^=]|=\s*.checked.)/i,
        cr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function hn(e, t) {
        return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e
    }

    function fr(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function pr(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function gn(e, t) {
        var n, r, o, a, s, c;
        if (1 === t.nodeType) {
            if (S.hasData(e) && (c = S.get(e).events))
                for (o in S.remove(t, "handle events"), c)
                    for (n = 0, r = c[o].length; n < r; n++) i.event.add(t, o, c[o][n]);
            re.hasData(e) && (a = re.access(e), s = i.extend({}, a), re.set(t, s))
        }
    }

    function _e(e, t, n, r) {
        t = Gt(t);
        var o, a, s, c, l, p, g = 0,
            v = e.length,
            d = v - 1,
            x = t[0],
            k = P(x);
        if (k || 1 < v && "string" == typeof x && !O.checkClone && lr.test(x)) return e.each(function(A) {
            var D = e.eq(A);
            k && (t[0] = x.call(this, A, D.html())), _e(D, t, n, r)
        });
        if (v && (a = (o = pn(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
            for (c = (s = i.map(ie(o, "script"), fr)).length; g < v; g++) l = o, g !== d && (l = i.clone(l, !0, !0), c && i.merge(s, ie(l, "script"))), n.call(e[g], l, g);
            if (c)
                for (p = s[s.length - 1].ownerDocument, i.map(s, pr), g = 0; g < c; g++) fn.test((l = s[g]).type || "") && !S.access(l, "globalEval") && i.contains(p, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? i._evalUrl && !l.noModule && i._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, p) : Jt(l.textContent.replace(cr, ""), l, p))
        }
        return e
    }

    function mn(e, t, n) {
        for (var r, o = t ? i.filter(t, e) : e, a = 0; null != (r = o[a]); a++) n || 1 !== r.nodeType || i.cleanData(ie(r)), r.parentNode && (n && We(r) && jt(ie(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    i.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, a, s, c, l, p, g = e.cloneNode(!0),
                v = We(e);
            if (!(O.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || i.isXMLDoc(e)))
                for (s = ie(g), r = 0, o = (a = ie(e)).length; r < o; r++) c = a[r], "input" === (p = (l = s[r]).nodeName.toLowerCase()) && et.test(c.type) ? l.checked = c.checked : "input" !== p && "textarea" !== p || (l.defaultValue = c.defaultValue);
            if (t)
                if (n)
                    for (a = a || ie(e), s = s || ie(g), r = 0, o = a.length; r < o; r++) gn(a[r], s[r]);
                else gn(e, g);
            return 0 < (s = ie(g, "script")).length && jt(s, !v && ie(e, "script")), g
        },
        cleanData: function(e) {
            for (var t, n, r, o = i.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Je(n)) {
                    if (t = n[S.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
                        n[S.expando] = void 0
                    }
                    n[re.expando] && (n[re.expando] = void 0)
                }
        }
    }), i.fn.extend({
        detach: function(e) {
            return mn(this, e, !0)
        },
        remove: function(e) {
            return mn(this, e)
        },
        text: function(e) {
            return Te(this, function(t) {
                return void 0 === t ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return _e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || hn(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return _e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = hn(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return _e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return _e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (i.cleanData(ie(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = t ? ? e, this.map(function() {
                return i.clone(this, e, t)
            })
        },
        html: function(e) {
            return Te(this, function(t) {
                var n = this[0] || {},
                    r = 0,
                    o = this.length;
                if (void 0 === t && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof t && !ur.test(t) && !ue[(cn.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = i.htmlPrefilter(t);
                    try {
                        for (; r < o; r++) 1 === (n = this[r] || {}).nodeType && (i.cleanData(ie(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch {}
                }
                n && this.empty().append(t)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return _e(this, arguments, function(t) {
                var n = this.parentNode;
                i.inArray(this, e) < 0 && (i.cleanData(ie(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        i.fn[e] = function(n) {
            for (var r, o = [], a = i(n), s = a.length - 1, c = 0; c <= s; c++) r = c === s ? this : this.clone(!0), i(a[c])[t](r), ut.apply(o, r.get());
            return this.pushStack(o)
        }
    });
    var Dt = new RegExp("^(" + sn + ")(?!px)[a-z%]+$", "i"),
        Nt = /^--/,
        gt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = q), t.getComputedStyle(e)
        },
        vn = function(e, t, n) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.call(e), t) e.style[o] = a[o];
            return r
        },
        dr = new RegExp(Ce.join("|"), "i");

    function tt(e, t, n) {
        var r, o, a, s, c = Nt.test(t),
            l = e.style;
        return (n = n || gt(e)) && (s = n.getPropertyValue(t) || n[t], c && s && (s = s.replace(Qe, "$1") || void 0), "" !== s || We(e) || (s = i.style(e, t)), !O.pixelBoxStyles() && Dt.test(s) && dr.test(t) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = r, l.minWidth = o, l.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function yn(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (p) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", p.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ae.appendChild(l).appendChild(p);
                var g = q.getComputedStyle(p);
                n = "1%" !== g.top, c = 12 === t(g.marginLeft), p.style.right = "60%", a = 36 === t(g.right), r = 36 === t(g.width), p.style.position = "absolute", o = 12 === t(p.offsetWidth / 3), Ae.removeChild(l), p = null
            }
        }

        function t(g) {
            return Math.round(parseFloat(g))
        }
        var n, r, o, a, s, c, l = L.createElement("div"),
            p = L.createElement("div");
        p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", O.clearCloneStyle = "content-box" === p.style.backgroundClip, i.extend(O, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), c
            },
            scrollboxSize: function() {
                return e(), o
            },
            reliableTrDimensions: function() {
                var g, v, d, x;
                return null == s && (g = L.createElement("table"), v = L.createElement("tr"), d = L.createElement("div"), g.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", v.style.cssText = "box-sizing:content-box;border:1px solid", v.style.height = "1px", d.style.height = "9px", d.style.display = "block", Ae.appendChild(g).appendChild(v).appendChild(d), x = q.getComputedStyle(v), s = parseInt(x.height, 10) + parseInt(x.borderTopWidth, 10) + parseInt(x.borderBottomWidth, 10) === v.offsetHeight, Ae.removeChild(g)), s
            }
        }))
    }();
    var xn = ["Webkit", "Moz", "ms"],
        bn = L.createElement("div").style,
        wn = {};

    function qt(e) {
        return i.cssProps[e] || wn[e] || (e in bn ? e : wn[e] = function(n) {
            for (var r = n[0].toUpperCase() + n.slice(1), o = xn.length; o--;)
                if ((n = xn[o] + r) in bn) return n
        }(e) || e)
    }
    var hr = /^(none|table(?!-c[ea]).+)/,
        gr = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tn = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Cn(e, t, n) {
        var r = Ze.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Lt(e, t, n, r, o, a) {
        var s = "width" === t ? 1 : 0,
            c = 0,
            l = 0,
            p = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (p += i.css(e, n + Ce[s], !0, o)), r ? ("content" === n && (l -= i.css(e, "padding" + Ce[s], !0, o)), "margin" !== n && (l -= i.css(e, "border" + Ce[s] + "Width", !0, o))) : (l += i.css(e, "padding" + Ce[s], !0, o), "padding" !== n ? l += i.css(e, "border" + Ce[s] + "Width", !0, o) : c += i.css(e, "border" + Ce[s] + "Width", !0, o));
        return !r && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - c - .5)) || 0), l + p
    }

    function kn(e, t, n) {
        var r = gt(e),
            o = (!O.boxSizingReliable() || n) && "border-box" === i.css(e, "boxSizing", !1, r),
            a = o,
            s = tt(e, t, r),
            c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Dt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!O.boxSizingReliable() && o || !O.reliableTrDimensions() && $(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === i.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === i.css(e, "boxSizing", !1, r), (a = c in e) && (s = e[c])), (s = parseFloat(s) || 0) + Lt(e, t, n || (o ? "border" : "content"), a, r, s) + "px"
    }

    function ce(e, t, n, r, o) {
        return new ce.prototype.init(e, t, n, r, o)
    }
    i.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, c = ge(t),
                    l = Nt.test(t),
                    p = e.style;
                if (l || (t = qt(c)), s = i.cssHooks[t] || i.cssHooks[c], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : p[t];
                "string" == (a = typeof n) && (o = Ze.exec(n)) && o[1] && (n = un(e, t, o), a = "number"), null != n && n == n && ("number" !== a || l || (n += o && o[3] || (i.cssNumber[c] ? "" : "px")), O.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (p[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? p.setProperty(t, n) : p[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, a, s, c = ge(t);
            return Nt.test(t) || (t = qt(c)), (s = i.cssHooks[t] || i.cssHooks[c]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in Tn && (o = Tn[t]), "" === n || n ? (a = parseFloat(o), !0 === n || isFinite(a) ? a || 0 : o) : o
        }
    }), i.each(["height", "width"], function(e, t) {
        i.cssHooks[t] = {
            get: function(n, r, o) {
                if (r) return !hr.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? kn(n, t, o) : vn(n, gr, function() {
                    return kn(n, t, o)
                })
            },
            set: function(n, r, o) {
                var a, s = gt(n),
                    c = !O.scrollboxSize() && "absolute" === s.position,
                    l = (c || o) && "border-box" === i.css(n, "boxSizing", !1, s),
                    p = o ? Lt(n, t, o, l, s) : 0;
                return l && c && (p -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Lt(n, t, "border", !1, s) - .5)), p && (a = Ze.exec(r)) && "px" !== (a[3] || "px") && (n.style[t] = r, r = i.css(n, t)), Cn(0, r, p)
            }
        }
    }), i.cssHooks.marginLeft = yn(O.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(tt(e, "marginLeft")) || e.getBoundingClientRect().left - vn(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        i.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + Ce[r] + t] = a[r] || a[r - 2] || a[0];
                return o
            }
        }, "margin" !== e && (i.cssHooks[e + t].set = Cn)
    }), i.fn.extend({
        css: function(e, t) {
            return Te(this, function(n, r, o) {
                var a, s, c = {},
                    l = 0;
                if (Array.isArray(r)) {
                    for (a = gt(n), s = r.length; l < s; l++) c[r[l]] = i.css(n, r[l], !1, a);
                    return c
                }
                return void 0 !== o ? i.style(n, r, o) : i.css(n, r)
            }, e, t, 1 < arguments.length)
        }
    }), ((i.Tween = ce).prototype = {
        constructor: ce,
        init: function(e, t, n, r, o, a) {
            this.elem = e, this.prop = n, this.easing = o || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (i.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ce.propHooks[this.prop];
            return e && e.get ? e.get(this) : ce.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ce.propHooks[this.prop];
            return this.pos = t = this.options.duration ? i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ce.propHooks._default.set(this), this
        }
    }).init.prototype = ce.prototype, (ce.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                i.fx.step[e.prop] ? i.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !i.cssHooks[e.prop] && null == e.elem.style[qt(e.prop)] ? e.elem[e.prop] = e.now : i.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ce.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, i.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, i.fx = ce.prototype.init, i.fx.step = {};
    var ze, mt, Xe, Sn, mr = /^(?:toggle|show|hide)$/,
        vr = /queueHooks$/;

    function Ht() {
        mt && (!1 === L.hidden && q.requestAnimationFrame ? q.requestAnimationFrame(Ht) : q.setTimeout(Ht, i.fx.interval), i.fx.tick())
    }

    function En() {
        return q.setTimeout(function() {
            ze = void 0
        }), ze = Date.now()
    }

    function vt(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = Ce[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function jn(e, t, n) {
        for (var r, o = (fe.tweeners[t] || []).concat(fe.tweeners["*"]), a = 0, s = o.length; a < s; a++)
            if (r = o[a].call(n, t, e)) return r
    }

    function fe(e, t, n) {
        var r, o, a = 0,
            s = fe.prefilters.length,
            c = i.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var v = ze || En(), d = Math.max(0, p.startTime + p.duration - v), x = 1 - (d / p.duration || 0), k = 0, A = p.tweens.length; k < A; k++) p.tweens[k].run(x);
                return c.notifyWith(e, [p, x, d]), x < 1 && A ? d : (A || c.notifyWith(e, [p, 1, 0]), c.resolveWith(e, [p]), !1)
            },
            p = c.promise({
                elem: e,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ze || En(),
                duration: n.duration,
                tweens: [],
                createTween: function(v, d) {
                    var x = i.Tween(e, p.opts, v, d, p.opts.specialEasing[v] || p.opts.easing);
                    return p.tweens.push(x), x
                },
                stop: function(v) {
                    var d = 0,
                        x = v ? p.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; d < x; d++) p.tweens[d].run(1);
                    return v ? (c.notifyWith(e, [p, 1, 0]), c.resolveWith(e, [p, v])) : c.rejectWith(e, [p, v]), this
                }
            }),
            g = p.props;
        for (function(v, d) {
                var x, k, A, D, X;
                for (x in v)
                    if (A = d[k = ge(x)], D = v[x], Array.isArray(D) && (A = D[1], D = v[x] = D[0]), x !== k && (v[k] = D, delete v[x]), (X = i.cssHooks[k]) && "expand" in X)
                        for (x in D = X.expand(D), delete v[k], D) x in v || (v[x] = D[x], d[x] = A);
                    else d[k] = A
            }(g, p.opts.specialEasing); a < s; a++)
            if (r = fe.prefilters[a].call(p, e, g, p.opts)) return P(r.stop) && (i._queueHooks(p.elem, p.opts.queue).stop = r.stop.bind(r)), r;
        return i.map(g, jn, p), P(p.opts.start) && p.opts.start.call(e, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), i.fx.timer(i.extend(l, {
            elem: e,
            anim: p,
            queue: p.opts.queue
        })), p
    }
    i.Animation = i.extend(fe, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return un(n.elem, e, Ze.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            P(e) ? (t = e, e = ["*"]) : e = e.match(he);
            for (var n, r = 0, o = e.length; r < o; r++)(fe.tweeners[n = e[r]] = fe.tweeners[n] || []).unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, a, s, c, l, p, g, v = "width" in t || "height" in t,
                d = this,
                x = {},
                k = e.style,
                A = e.nodeType && pt(e),
                D = S.get(e, "fxshow");
            for (r in n.queue || (null == (s = i._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || c()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, i.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (mr.test(o = t[r])) {
                    if (delete t[r], a = a || "toggle" === o, o === (A ? "hide" : "show")) {
                        if ("show" !== o || !D || void 0 === D[r]) continue;
                        A = !0
                    }
                    x[r] = D && D[r] || i.style(e, r)
                }
            if ((l = !i.isEmptyObject(t)) || !i.isEmptyObject(x))
                for (r in v && 1 === e.nodeType && (n.overflow = [k.overflow, k.overflowX, k.overflowY], null == (p = D && D.display) && (p = S.get(e, "display")), "none" === (g = i.css(e, "display")) && (p ? g = p : (Fe([e], !0), p = e.style.display || p, g = i.css(e, "display"), Fe([e]))), ("inline" === g || "inline-block" === g && null != p) && "none" === i.css(e, "float") && (l || (d.done(function() {
                        k.display = p
                    }), null == p && (p = "none" === (g = k.display) ? "" : g)), k.display = "inline-block")), n.overflow && (k.overflow = "hidden", d.always(function() {
                        k.overflow = n.overflow[0], k.overflowX = n.overflow[1], k.overflowY = n.overflow[2]
                    })), l = !1, x) l || (D ? "hidden" in D && (A = D.hidden) : D = S.access(e, "fxshow", {
                    display: p
                }), a && (D.hidden = !A), A && Fe([e], !0), d.done(function() {
                    for (r in A || Fe([e]), S.remove(e, "fxshow"), x) i.style(e, r, x[r])
                })), l = jn(A ? D[r] : 0, r, d), r in D || (D[r] = l.start, A && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? fe.prefilters.unshift(e) : fe.prefilters.push(e)
        }
    }), i.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? i.extend({}, e) : {
            complete: n || !n && t || P(e) && e,
            duration: e,
            easing: n && t || t && !P(t) && t
        };
        return i.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in i.fx.speeds ? i.fx.speeds[r.duration] : i.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            P(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue)
        }, r
    }, i.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(pt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = i.isEmptyObject(e),
                a = i.speed(t, n, r),
                s = function() {
                    var c = fe(this, i.extend({}, e), a);
                    (o || S.get(this, "finish")) && c.stop(!0)
                };
            return s.finish = s, o || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(o) {
                var a = o.stop;
                delete o.stop, a(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                var o = !0,
                    a = null != e && e + "queueHooks",
                    s = i.timers,
                    c = S.get(this);
                if (a) c[a] && c[a].stop && r(c[a]);
                else
                    for (a in c) c[a] && c[a].stop && vr.test(a) && r(c[a]);
                for (a = s.length; a--;) s[a].elem !== this || null != e && s[a].queue !== e || (s[a].anim.stop(n), o = !1, s.splice(a, 1));
                !o && n || i.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = S.get(this),
                    r = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    a = i.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, i.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), i.each(["toggle", "show", "hide"], function(e, t) {
        var n = i.fn[t];
        i.fn[t] = function(r, o, a) {
            return null == r || "boolean" == typeof r ? n.apply(this, arguments) : this.animate(vt(t, !0), r, o, a)
        }
    }), i.each({
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        i.fn[e] = function(n, r, o) {
            return this.animate(t, n, r, o)
        }
    }), i.timers = [], i.fx.tick = function() {
        var e, t = 0,
            n = i.timers;
        for (ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || i.fx.stop(), ze = void 0
    }, i.fx.timer = function(e) {
        i.timers.push(e), i.fx.start()
    }, i.fx.interval = 13, i.fx.start = function() {
        mt || (mt = !0, Ht())
    }, i.fx.stop = function() {
        mt = null
    }, i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, i.fn.delay = function(e, t) {
        return e = i.fx && i.fx.speeds[e] || e, this.queue(t = t || "fx", function(n, r) {
            var o = q.setTimeout(n, e);
            r.stop = function() {
                q.clearTimeout(o)
            }
        })
    }, Xe = L.createElement("input"), Sn = L.createElement("select").appendChild(L.createElement("option")), Xe.type = "checkbox", O.checkOn = "" !== Xe.value, O.optSelected = Sn.selected, (Xe = L.createElement("input")).value = "t", Xe.type = "radio", O.radioValue = "t" === Xe.value;
    var An, nt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(e, t) {
            return Te(this, i.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                i.removeAttr(this, e)
            })
        }
    }), i.extend({
        attr: function(e, t, n) {
            var r, o, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute > "u" ? i.prop(e, t, n) : (1 === a && i.isXMLDoc(e) || (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? An : void 0)), void 0 !== n ? null === n ? void i.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = i.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!O.radioValue && "radio" === t && $(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(he);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), An = {
        set: function(e, t, n) {
            return !1 === t ? i.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = nt[t] || i.find.attr;
        nt[t] = function(r, o, a) {
            var s, c, l = o.toLowerCase();
            return a || (c = nt[l], nt[l] = s, s = null != n(r, o, a) ? l : null, nt[l] = c), s
        }
    });
    var yr = /^(?:input|select|textarea|button)$/i,
        xr = /^(?:a|area)$/i;

    function Ne(e) {
        return (e.match(he) || []).join(" ")
    }

    function qe(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Ot(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(he) || []
    }
    i.fn.extend({
        prop: function(e, t) {
            return Te(this, i.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[i.propFix[e] || e]
            })
        }
    }), i.extend({
        prop: function(e, t, n) {
            var r, o, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && i.isXMLDoc(e) || (o = i.propHooks[t = i.propFix[t] || t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = i.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yr.test(e.nodeName) || xr.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), O.optSelected || (i.propHooks.selected = {
        get: function(e) {
            return null
        },
        set: function(e) {}
    }), i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    }), i.fn.extend({
        addClass: function(e) {
            var t, n, r, o, a, s;
            return P(e) ? this.each(function(c) {
                i(this).addClass(e.call(this, c, qe(this)))
            }) : (t = Ot(e)).length ? this.each(function() {
                if (r = qe(this), n = 1 === this.nodeType && " " + Ne(r) + " ") {
                    for (a = 0; a < t.length; a++) n.indexOf(" " + (o = t[a]) + " ") < 0 && (n += o + " ");
                    s = Ne(n), r !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(e) {
            var t, n, r, o, a, s;
            return P(e) ? this.each(function(c) {
                i(this).removeClass(e.call(this, c, qe(this)))
            }) : arguments.length ? (t = Ot(e)).length ? this.each(function() {
                if (r = qe(this), n = 1 === this.nodeType && " " + Ne(r) + " ") {
                    for (a = 0; a < t.length; a++)
                        for (o = t[a]; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                    s = Ne(n), r !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(e, t) {
            var n, r, o, a, s = typeof e,
                c = "string" === s || Array.isArray(e);
            return P(e) ? this.each(function(l) {
                i(this).toggleClass(e.call(this, l, qe(this), t), t)
            }) : "boolean" == typeof t && c ? t ? this.addClass(e) : this.removeClass(e) : (n = Ot(e), this.each(function() {
                if (c)
                    for (a = i(this), o = 0; o < n.length; o++) a.hasClass(r = n[o]) ? a.removeClass(r) : a.addClass(r);
                else void 0 !== e && "boolean" !== s || ((r = qe(this)) && S.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : S.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + Ne(qe(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var br = /\r/g;
    i.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = P(e), this.each(function(a) {
                var s;
                1 === this.nodeType && (null == (s = r ? e.call(this, a, i(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = i.map(s, function(c) {
                    return null == c ? "" : c + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            })) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(br, "") : n ? ? "" : void 0
        }
    }), i.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return i.find.attr(e, "value") ? ? Ne(i.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        c = s ? null : [],
                        l = s ? a + 1 : o.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))) {
                            if (t = i(n).val(), s) return t;
                            c.push(t)
                        }
                    return c
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, a = i.makeArray(t), s = o.length; s--;)((r = o[s]).selected = -1 < i.inArray(i.valHooks.option.get(r), a)) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < i.inArray(i(e).val(), t)
            }
        }, O.checkOn || (i.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var rt = q.location,
        Dn = {
            guid: Date.now()
        },
        Pt = /\?/;
    i.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new q.DOMParser).parseFromString(e, "text/xml")
        } catch {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || i.error("Invalid XML: " + (n ? i.map(n.childNodes, function(r) {
            return r.textContent
        }).join("\n") : e)), t
    };
    var Nn = /^(?:focusinfocus|focusoutblur)$/,
        qn = function(e) {
            e.stopPropagation()
        };
    i.extend(i.event, {
        trigger: function(e, t, n, r) {
            var o, a, s, c, l, p, g, v, d = [n || L],
                x = Ye.call(e, "type") ? e.type : e,
                k = Ye.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = v = s = n = n || L, 3 !== n.nodeType && 8 !== n.nodeType && !Nn.test(x + i.event.triggered) && (-1 < x.indexOf(".") && (x = (k = x.split(".")).shift(), k.sort()), l = x.indexOf(":") < 0 && "on" + x, (e = e[i.expando] ? e : new i.Event(x, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = k.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : i.makeArray(t, [e]), g = i.event.special[x] || {}, r || !g.trigger || !1 !== g.trigger.apply(n, t))) {
                if (!r && !g.noBubble && !Pe(n)) {
                    for (Nn.test((c = g.delegateType || x) + x) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (n.ownerDocument || L) && d.push(s.defaultView || s.parentWindow || q)
                }
                for (o = 0;
                    (a = d[o++]) && !e.isPropagationStopped();) v = a, e.type = 1 < o ? c : g.bindType || x, (p = (S.get(a, "events") || Object.create(null))[e.type] && S.get(a, "handle")) && p.apply(a, t), (p = l && a[l]) && p.apply && Je(a) && (e.result = p.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = x, r || e.isDefaultPrevented() || g._default && !1 !== g._default.apply(d.pop(), t) || !Je(n) || l && P(n[x]) && !Pe(n) && ((s = n[l]) && (n[l] = null), i.event.triggered = x, e.isPropagationStopped() && v.addEventListener(x, qn), n[x](), e.isPropagationStopped() && v.removeEventListener(x, qn), i.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = i.extend(new i.Event, n, {
                type: e,
                isSimulated: !0
            });
            i.event.trigger(r, null, t)
        }
    }), i.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                i.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return i.event.trigger(e, t, n, !0)
        }
    });
    var wr = /\[\]$/,
        Ln = /\r?\n/g,
        Tr = /^(?:submit|button|image|reset|file)$/i,
        Cr = /^(?:input|select|textarea|keygen)/i;

    function Mt(e, t, n, r) {
        var o;
        if (Array.isArray(t)) i.each(t, function(a, s) {
            n || wr.test(e) ? r(e, s) : Mt(e + "[" + ("object" == typeof s && null != s ? a : "") + "]", s, n, r)
        });
        else if (n || "object" !== Me(t)) r(e, t);
        else
            for (o in t) Mt(e + "[" + o + "]", t[o], n, r)
    }
    i.param = function(e, t) {
        var n, r = [],
            o = function(a, s) {
                var c = P(s) ? s() : s;
                r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c ? ? "")
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !i.isPlainObject(e)) i.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Mt(n, e[n], t, o);
        return r.join("&")
    }, i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = i.prop(this, "elements");
                return e ? i.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !i(this).is(":disabled") && Cr.test(this.nodeName) && !Tr.test(e) && (this.checked || !et.test(e))
            }).map(function(e, t) {
                var n = i(this).val();
                return null == n ? null : Array.isArray(n) ? i.map(n, function(r) {
                    return {
                        name: t.name,
                        value: r.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    });
    var kr = /%20/g,
        Sr = /#.*$/,
        Er = /([?&])_=[^&]*/,
        jr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ar = /^(?:GET|HEAD)$/,
        Dr = /^\/\//,
        Hn = {},
        Rt = {},
        On = "*/".concat("*"),
        It = L.createElement("a");

    function Pn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                a = t.toLowerCase().match(he) || [];
            if (P(n))
                for (; r = a[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Mn(e, t, n, r) {
        var o = {},
            a = e === Rt;

        function s(c) {
            var l;
            return o[c] = !0, i.each(e[c] || [], function(p, g) {
                var v = g(t, n, r);
                return "string" != typeof v || a || o[v] ? a ? !(l = v) : void 0 : (t.dataTypes.unshift(v), s(v), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Wt(e, t) {
        var n, r, o = i.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && i.extend(!0, e, r), e
    }
    It.href = rt.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: rt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(rt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, i.ajaxSettings), t) : Wt(i.ajaxSettings, e)
        },
        ajaxPrefilter: Pn(Hn),
        ajaxTransport: Pn(Rt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0);
            var n, r, o, a, s, c, l, p, g, v, d = i.ajaxSetup({}, t = t || {}),
                x = d.context || d,
                k = d.context && (x.nodeType || x.jquery) ? i(x) : i.event,
                A = i.Deferred(),
                D = i.Callbacks("once memory"),
                X = d.statusCode || {},
                Q = {},
                me = {},
                ve = "canceled",
                M = {
                    readyState: 0,
                    getResponseHeader: function(I) {
                        var z;
                        if (l) {
                            if (!a)
                                for (a = {}; z = jr.exec(o);) a[z[1].toLowerCase() + " "] = (a[z[1].toLowerCase() + " "] || []).concat(z[2]);
                            z = a[I.toLowerCase() + " "]
                        }
                        return null == z ? null : z.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? o : null
                    },
                    setRequestHeader: function(I, z) {
                        return null == l && (I = me[I.toLowerCase()] = me[I.toLowerCase()] || I, Q[I] = z), this
                    },
                    overrideMimeType: function(I) {
                        return null == l && (d.mimeType = I), this
                    },
                    statusCode: function(I) {
                        var z;
                        if (I)
                            if (l) M.always(I[M.status]);
                            else
                                for (z in I) X[z] = [X[z], I[z]];
                        return this
                    },
                    abort: function(I) {
                        var z = I || ve;
                        return n && n.abort(z), Le(0, z), this
                    }
                };
            if (A.promise(M), d.url = ((e || d.url || rt.href) + "").replace(Dr, rt.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain) {
                c = L.createElement("a");
                try {
                    c.href = d.url, c.href = c.href, d.crossDomain = It.protocol + "//" + It.host != c.protocol + "//" + c.host
                } catch {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = i.param(d.data, d.traditional)), Mn(Hn, d, t, M), l) return M;
            for (g in (p = i.event && d.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ar.test(d.type), r = d.url.replace(Sr, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(kr, "+")) : (v = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (Pt.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(Er, "$1"), v = (Pt.test(r) ? "&" : "?") + "_=" + Dn.guid++ + v), d.url = r + v), d.ifModified && (i.lastModified[r] && M.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && M.setRequestHeader("If-None-Match", i.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && M.setRequestHeader("Content-Type", d.contentType), M.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + On + "; q=0.01" : "") : d.accepts["*"]), d.headers) M.setRequestHeader(g, d.headers[g]);
            if (d.beforeSend && (!1 === d.beforeSend.call(x, M, d) || l)) return M.abort();
            if (ve = "abort", D.add(d.complete), M.done(d.success), M.fail(d.error), n = Mn(Rt, d, t, M)) {
                if (M.readyState = 1, p && k.trigger("ajaxSend", [M, d]), l) return M;
                d.async && 0 < d.timeout && (s = q.setTimeout(function() {
                    M.abort("timeout")
                }, d.timeout));
                try {
                    l = !1, n.send(Q, Le)
                } catch (I) {
                    if (l) throw I;
                    Le(-1, I)
                }
            } else Le(-1, "No Transport");

            function Le(I, z, ot, $t) {
                var ye, at, ke, Se, Ue, le = z;
                l || (l = !0, s && q.clearTimeout(s), n = void 0, o = $t || "", M.readyState = 0 < I ? 4 : 0, ye = 200 <= I && I < 300 || 304 === I, ot && (Se = function(J, G, te) {
                    for (var Ee, ne, E, U, V = J.contents, B = J.dataTypes;
                        "*" === B[0];) B.shift(), void 0 === Ee && (Ee = J.mimeType || G.getResponseHeader("Content-Type"));
                    if (Ee)
                        for (ne in V)
                            if (V[ne] && V[ne].test(Ee)) {
                                B.unshift(ne);
                                break
                            }
                    if (B[0] in te) E = B[0];
                    else {
                        for (ne in te) {
                            if (!B[0] || J.converters[ne + " " + B[0]]) {
                                E = ne;
                                break
                            }
                            U || (U = ne)
                        }
                        E = E || U
                    }
                    if (E) return E !== B[0] && B.unshift(E), te[E]
                }(d, M, ot)), !ye && -1 < i.inArray("script", d.dataTypes) && i.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), Se = function(J, G, te, Ee) {
                    var ne, E, U, V, B, xe = {},
                        Ve = J.dataTypes.slice();
                    if (Ve[1])
                        for (U in J.converters) xe[U.toLowerCase()] = J.converters[U];
                    for (E = Ve.shift(); E;)
                        if (J.responseFields[E] && (te[J.responseFields[E]] = G), !B && Ee && J.dataFilter && (G = J.dataFilter(G, J.dataType)), B = E, E = Ve.shift())
                            if ("*" === E) E = B;
                            else if ("*" !== B && B !== E) {
                        if (!(U = xe[B + " " + E] || xe["* " + E]))
                            for (ne in xe)
                                if ((V = ne.split(" "))[1] === E && (U = xe[B + " " + V[0]] || xe["* " + V[0]])) {
                                    !0 === U ? U = xe[ne] : !0 !== xe[ne] && (E = V[0], Ve.unshift(V[1]));
                                    break
                                }
                        if (!0 !== U)
                            if (U && J.throws) G = U(G);
                            else try {
                                G = U(G)
                            } catch (yt) {
                                return {
                                    state: "parsererror",
                                    error: U ? yt : "No conversion from " + B + " to " + E
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: G
                    }
                }(d, Se, M, ye), ye ? (d.ifModified && ((Ue = M.getResponseHeader("Last-Modified")) && (i.lastModified[r] = Ue), (Ue = M.getResponseHeader("etag")) && (i.etag[r] = Ue)), 204 === I || "HEAD" === d.type ? le = "nocontent" : 304 === I ? le = "notmodified" : (le = Se.state, at = Se.data, ye = !(ke = Se.error))) : (ke = le, !I && le || (le = "error", I < 0 && (I = 0))), M.status = I, M.statusText = (z || le) + "", ye ? A.resolveWith(x, [at, le, M]) : A.rejectWith(x, [M, le, ke]), M.statusCode(X), X = void 0, p && k.trigger(ye ? "ajaxSuccess" : "ajaxError", [M, d, ye ? at : ke]), D.fireWith(x, [M, le]), p && (k.trigger("ajaxComplete", [M, d]), --i.active || i.event.trigger("ajaxStop")))
            }
            return M
        },
        getJSON: function(e, t, n) {
            return i.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return i.get(e, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(e, t) {
        i[t] = function(n, r, o, a) {
            return P(r) && (a = a || o, o = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: a,
                data: r,
                success: o
            }, i.isPlainObject(n) && n))
        }
    }), i.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), i._evalUrl = function(e, t, n) {
        return i.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(r) {
                i.globalEval(r, t, n)
            }
        })
    }, i.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (P(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(e) {
            return P(e) ? this.each(function(t) {
                i(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = P(e);
            return this.each(function(n) {
                i(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(e) {
        return !i.expr.pseudos.visible(e)
    }, i.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new q.XMLHttpRequest
        } catch {}
    };
    var Nr = {
            0: 200,
            1223: 204
        },
        it = i.ajaxSettings.xhr();
    O.cors = !!it && "withCredentials" in it, O.ajax = it = !!it, i.ajaxTransport(function(e) {
        var t, n;
        if (O.cors || it && !e.crossDomain) return {
            send: function(r, o) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                t = function(c) {
                    return function() {
                        t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === c ? s.abort() : "error" === c ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Nr[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                    4 === s.readyState && q.setTimeout(function() {
                        t && n()
                    })
                }, t = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (c) {
                    if (t) throw c
                }
            },
            abort: function() {
                t && t()
            }
        }
    }), i.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return i.globalEval(e), e
            }
        }
    }), i.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), i.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, o) {
                t = i("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(a) {
                    t.remove(), n = null, a && o("error" === a.type ? 404 : 200, a.type)
                }), L.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Rn, In = [],
        Ft = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = In.pop() || i.expando + "_" + Dn.guid++;
            return this[e] = !0, e
        }
    }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, o, a, s = !1 !== e.jsonp && (Ft.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = P(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ft, "$1" + r) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || i.error(r + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = q[r], q[r] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === o ? i(q).removeProp(r) : q[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, In.push(r)), a && P(o) && o(a[0]), a = o = void 0
        }), "script"
    }), O.createHTMLDocument = ((Rn = L.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rn.childNodes.length), i.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (O.createHTMLDocument ? ((r = (t = L.implementation.createHTMLDocument("")).createElement("base")).href = L.location.href, t.head.appendChild(r)) : t = L), a = !n && [], (o = tn.exec(e)) ? [t.createElement(o[1])] : (o = pn([e], t, a), a && a.length && i(a).remove(), i.merge([], o.childNodes)));
        var r, o, a
    }, i.fn.load = function(e, t, n) {
        var r, o, a, s = this,
            c = e.indexOf(" ");
        return -1 < c && (r = Ne(e.slice(c)), e = e.slice(0, c)), P(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && i.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(l) {
            a = arguments, s.html(r ? i("<div>").append(i.parseHTML(l)).find(r) : l)
        }).always(n && function(l, p) {
            s.each(function() {
                n.apply(this, a || [l.responseText, p, l])
            })
        }), this
    }, i.expr.pseudos.animated = function(e) {
        return i.grep(i.timers, function(t) {
            return e === t.elem
        }).length
    }, i.offset = {
        setOffset: function(e, t, n) {
            var r, o, a, s, c, l, p = i.css(e, "position"),
                g = i(e),
                v = {};
            "static" === p && (e.style.position = "relative"), c = g.offset(), a = i.css(e, "top"), l = i.css(e, "left"), ("absolute" === p || "fixed" === p) && -1 < (a + l).indexOf("auto") ? (s = (r = g.position()).top, o = r.left) : (s = parseFloat(a) || 0, o = parseFloat(l) || 0), P(t) && (t = t.call(e, n, i.extend({}, c))), null != t.top && (v.top = t.top - c.top + s), null != t.left && (v.left = t.left - c.left + o), "using" in t ? t.using.call(e, v) : g.css(v)
        }
    }, i.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(o) {
                i.offset.setOffset(this, e, o)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? {
                top: (t = r.getBoundingClientRect()).top + (n = r.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === i.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === i.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = i(e).offset()).top += i.css(e, "borderTopWidth", !0), o.left += i.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - i.css(r, "marginTop", !0),
                    left: t.left - o.left - i.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === i.css(e, "position");) e = e.offsetParent;
                return e || Ae
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        i.fn[e] = function(r) {
            return Te(this, function(o, a, s) {
                var c;
                if (Pe(o) ? c = o : 9 === o.nodeType && (c = o.defaultView), void 0 === s) return c ? c[t] : o[a];
                c ? c.scrollTo(n ? c.pageXOffset : s, n ? s : c.pageYOffset) : o[a] = s
            }, e, r, arguments.length)
        }
    }), i.each(["top", "left"], function(e, t) {
        i.cssHooks[t] = yn(O.pixelPosition, function(n, r) {
            if (r) return r = tt(n, t), Dt.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        i.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            i.fn[r] = function(o, a) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    c = n || (!0 === o || !0 === a ? "margin" : "border");
                return Te(this, function(l, p, g) {
                    var v;
                    return Pe(l) ? 0 === r.indexOf("outer") ? l["inner" + e] : l.document.documentElement["client" + e] : 9 === l.nodeType ? (v = l.documentElement, Math.max(l.body["scroll" + e], v["scroll" + e], l.body["offset" + e], v["offset" + e], v["client" + e])) : void 0 === g ? i.css(l, p, c) : i.style(l, p, g, c)
                }, t, s ? o : void 0, s)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        i.fn[t] = function(n, r) {
            return 0 < arguments.length ? this.on(t, null, n, r) : this.trigger(t)
        }
    });
    var qr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    i.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), P(e)) return r = ae.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid = e.guid || i.guid++, o
    }, i.holdReady = function(e) {
        e ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = $, i.isFunction = P, i.isWindow = Pe, i.camelCase = ge, i.type = Me, i.now = Date.now, i.isNumeric = function(e) {
        var t = i.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, i.trim = function(e) {
        return null == e ? "" : (e + "").replace(qr, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    });
    var Lr = q.jQuery,
        Hr = q.$;
    return i.noConflict = function(e) {
        return q.$ === i && (q.$ = Hr), e && q.jQuery === i && (q.jQuery = Lr), i
    }, typeof Ge > "u" && (q.jQuery = q.$ = i), i
});