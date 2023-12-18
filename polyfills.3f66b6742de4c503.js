"use strict";
(self.webpackChunkdorkl = self.webpackChunkdorkl || []).push([
    [6429], {
        1253: (Te, Re, Ce) => {
            const ke = ":";
            const Fe = function(s, ...o) {
                    if (Fe.translate) {
                        const e = Fe.translate(s, o);
                        s = e[0], o = e[1]
                    }
                    let l = Pe(s[0], s.raw[0]);
                    for (let e = 1; e < s.length; e++) l += o[e - 1] + Pe(s[e], s.raw[e]);
                    return l
                },
                dt = ":";

            function Pe(s, o) {
                return o.charAt(0) === dt ? s.substring(function ze(s, o) {
                    for (let l = 1, e = 1; l < s.length; l++, e++)
                        if ("\\" === o[e]) e++;
                        else if (s[l] === ke) return l;
                    throw new Error(`Unterminated $localize metadata block in "${o}".`)
                }(s, o) + 1) : s
            }
            globalThis.$localize = Fe, Ce(8332), window.global = window
        },
        8332: () => {
            ! function(e) {
                const t = e.performance;

                function r(j) {
                    t && t.mark && t.mark(j)
                }

                function i(j, k) {
                    t && t.measure && t.measure(j, k)
                }
                r("Zone");
                const a = e.__Zone_symbol_prefix || "__zone_symbol__";

                function f(j) {
                    return a + j
                }
                const T = !0 === e[f("forceDuplicateZoneCheck")];
                if (e.Zone) {
                    if (T || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
                    return e.Zone
                }
                let g = (() => {
                    class j {
                        static# e = this.__symbol__ = f;
                        static assertZonePatched() {
                            if (e.Promise !== de.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let n = j.current;
                            for (; n.parent;) n = n.parent;
                            return n
                        }
                        static get current() {
                            return q.zone
                        }
                        static get currentTask() {
                            return fe
                        }
                        static __load_patch(n, c, O = !1) {
                            if (de.hasOwnProperty(n)) {
                                if (!O && T) throw Error("Already loaded patch: " + n)
                            } else if (!e["__Zone_disable_" + n]) {
                                const Z = "Zone:" + n;
                                r(Z), de[n] = c(e, j, J), i(Z, Z)
                            }
                        }
                        get parent() {
                            return this._parent
                        }
                        get name() {
                            return this._name
                        }
                        constructor(n, c) {
                            this._parent = n, this._name = c ? c.name || "unnamed" : "<root>", this._properties = c && c.properties || {}, this._zoneDelegate = new b(this, this._parent && this._parent._zoneDelegate, c)
                        }
                        get(n) {
                            const c = this.getZoneWith(n);
                            if (c) return c._properties[n]
                        }
                        getZoneWith(n) {
                            let c = this;
                            for (; c;) {
                                if (c._properties.hasOwnProperty(n)) return c;
                                c = c._parent
                            }
                            return null
                        }
                        fork(n) {
                            if (!n) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, n)
                        }
                        wrap(n, c) {
                            if ("function" != typeof n) throw new Error("Expecting function got: " + n);
                            const O = this._zoneDelegate.intercept(this, n, c),
                                Z = this;
                            return function() {
                                return Z.runGuarded(O, this, arguments, c)
                            }
                        }
                        run(n, c, O, Z) {
                            q = {
                                parent: q,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, n, c, O, Z)
                            } finally {
                                q = q.parent
                            }
                        }
                        runGuarded(n, c = null, O, Z) {
                            q = {
                                parent: q,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, n, c, O, Z)
                                } catch (ee) {
                                    if (this._zoneDelegate.handleError(this, ee)) throw ee
                                }
                            } finally {
                                q = q.parent
                            }
                        }
                        runTask(n, c, O) {
                            if (n.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (n.zone || te).name + "; Execution: " + this.name + ")");
                            if (n.state === V && (n.type === re || n.type === C)) return;
                            const Z = n.state != y;
                            Z && n._transitionTo(y, B), n.runCount++;
                            const ee = fe;
                            fe = n, q = {
                                parent: q,
                                zone: this
                            };
                            try {
                                n.type == C && n.data && !n.data.isPeriodic && (n.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, n, c, O)
                                } catch (h) {
                                    if (this._zoneDelegate.handleError(this, h)) throw h
                                }
                            } finally {
                                n.state !== V && n.state !== E && (n.type == re || n.data && n.data.isPeriodic ? Z && n._transitionTo(B, y) : (n.runCount = 0, this._updateTaskCount(n, -1), Z && n._transitionTo(V, y, V))), q = q.parent, fe = ee
                            }
                        }
                        scheduleTask(n) {
                            if (n.zone && n.zone !== this) {
                                let O = this;
                                for (; O;) {
                                    if (O === n.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);
                                    O = O.parent
                                }
                            }
                            n._transitionTo(K, V);
                            const c = [];
                            n._zoneDelegates = c, n._zone = this;
                            try {
                                n = this._zoneDelegate.scheduleTask(this, n)
                            } catch (O) {
                                throw n._transitionTo(E, K, V), this._zoneDelegate.handleError(this, O), O
                            }
                            return n._zoneDelegates === c && this._updateTaskCount(n, 1), n.state == K && n._transitionTo(B, K), n
                        }
                        scheduleMicroTask(n, c, O, Z) {
                            return this.scheduleTask(new p(x, n, c, O, Z, void 0))
                        }
                        scheduleMacroTask(n, c, O, Z, ee) {
                            return this.scheduleTask(new p(C, n, c, O, Z, ee))
                        }
                        scheduleEventTask(n, c, O, Z, ee) {
                            return this.scheduleTask(new p(re, n, c, O, Z, ee))
                        }
                        cancelTask(n) {
                            if (n.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (n.zone || te).name + "; Execution: " + this.name + ")");
                            if (n.state === B || n.state === y) {
                                n._transitionTo(z, B, y);
                                try {
                                    this._zoneDelegate.cancelTask(this, n)
                                } catch (c) {
                                    throw n._transitionTo(E, z), this._zoneDelegate.handleError(this, c), c
                                }
                                return this._updateTaskCount(n, -1), n._transitionTo(V, z), n.runCount = 0, n
                            }
                        }
                        _updateTaskCount(n, c) {
                            const O = n._zoneDelegates; - 1 == c && (n._zoneDelegates = null);
                            for (let Z = 0; Z < O.length; Z++) O[Z]._updateTaskCount(n.type, c)
                        }
                    }
                    return j
                })();
                const S = {
                    name: "",
                    onHasTask: (j, k, n, c) => j.hasTask(n, c),
                    onScheduleTask: (j, k, n, c) => j.scheduleTask(n, c),
                    onInvokeTask: (j, k, n, c, O, Z) => j.invokeTask(n, c, O, Z),
                    onCancelTask: (j, k, n, c) => j.cancelTask(n, c)
                };
                class b {
                    constructor(k, n, c) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        }, this.zone = k, this._parentDelegate = n, this._forkZS = c && (c && c.onFork ? c : n._forkZS), this._forkDlgt = c && (c.onFork ? n : n._forkDlgt), this._forkCurrZone = c && (c.onFork ? this.zone : n._forkCurrZone), this._interceptZS = c && (c.onIntercept ? c : n._interceptZS), this._interceptDlgt = c && (c.onIntercept ? n : n._interceptDlgt), this._interceptCurrZone = c && (c.onIntercept ? this.zone : n._interceptCurrZone), this._invokeZS = c && (c.onInvoke ? c : n._invokeZS), this._invokeDlgt = c && (c.onInvoke ? n : n._invokeDlgt), this._invokeCurrZone = c && (c.onInvoke ? this.zone : n._invokeCurrZone), this._handleErrorZS = c && (c.onHandleError ? c : n._handleErrorZS), this._handleErrorDlgt = c && (c.onHandleError ? n : n._handleErrorDlgt), this._handleErrorCurrZone = c && (c.onHandleError ? this.zone : n._handleErrorCurrZone), this._scheduleTaskZS = c && (c.onScheduleTask ? c : n._scheduleTaskZS), this._scheduleTaskDlgt = c && (c.onScheduleTask ? n : n._scheduleTaskDlgt), this._scheduleTaskCurrZone = c && (c.onScheduleTask ? this.zone : n._scheduleTaskCurrZone), this._invokeTaskZS = c && (c.onInvokeTask ? c : n._invokeTaskZS), this._invokeTaskDlgt = c && (c.onInvokeTask ? n : n._invokeTaskDlgt), this._invokeTaskCurrZone = c && (c.onInvokeTask ? this.zone : n._invokeTaskCurrZone), this._cancelTaskZS = c && (c.onCancelTask ? c : n._cancelTaskZS), this._cancelTaskDlgt = c && (c.onCancelTask ? n : n._cancelTaskDlgt), this._cancelTaskCurrZone = c && (c.onCancelTask ? this.zone : n._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                        const O = c && c.onHasTask;
                        (O || n && n._hasTaskZS) && (this._hasTaskZS = O ? c : S, this._hasTaskDlgt = n, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = k, c.onScheduleTask || (this._scheduleTaskZS = S, this._scheduleTaskDlgt = n, this._scheduleTaskCurrZone = this.zone), c.onInvokeTask || (this._invokeTaskZS = S, this._invokeTaskDlgt = n, this._invokeTaskCurrZone = this.zone), c.onCancelTask || (this._cancelTaskZS = S, this._cancelTaskDlgt = n, this._cancelTaskCurrZone = this.zone))
                    }
                    fork(k, n) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, k, n) : new g(k, n)
                    }
                    intercept(k, n, c) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, k, n, c) : n
                    }
                    invoke(k, n, c, O, Z) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, k, n, c, O, Z) : n.apply(c, O)
                    }
                    handleError(k, n) {
                        return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, k, n)
                    }
                    scheduleTask(k, n) {
                        let c = n;
                        if (this._scheduleTaskZS) this._hasTaskZS && c._zoneDelegates.push(this._hasTaskDlgtOwner), c = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, k, n), c || (c = n);
                        else if (n.scheduleFn) n.scheduleFn(n);
                        else {
                            if (n.type != x) throw new Error("Task is missing scheduleFn.");
                            D(n)
                        }
                        return c
                    }
                    invokeTask(k, n, c, O) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, k, n, c, O) : n.callback.apply(c, O)
                    }
                    cancelTask(k, n) {
                        let c;
                        if (this._cancelTaskZS) c = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, k, n);
                        else {
                            if (!n.cancelFn) throw Error("Task is not cancelable");
                            c = n.cancelFn(n)
                        }
                        return c
                    }
                    hasTask(k, n) {
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, k, n)
                        } catch (c) {
                            this.handleError(k, c)
                        }
                    }
                    _updateTaskCount(k, n) {
                        const c = this._taskCounts,
                            O = c[k],
                            Z = c[k] = O + n;
                        if (Z < 0) throw new Error("More tasks executed then were scheduled.");
                        0 != O && 0 != Z || this.hasTask(this.zone, {
                            microTask: c.microTask > 0,
                            macroTask: c.macroTask > 0,
                            eventTask: c.eventTask > 0,
                            change: k
                        })
                    }
                }
                class p {
                    constructor(k, n, c, O, Z, ee) {
                        if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = k, this.source = n, this.data = O, this.scheduleFn = Z, this.cancelFn = ee, !c) throw new Error("callback is not defined");
                        this.callback = c;
                        const h = this;
                        this.invoke = k === re && O && O.useG ? p.invokeTask : function() {
                            return p.invokeTask.call(e, h, this, arguments)
                        }
                    }
                    static invokeTask(k, n, c) {
                        k || (k = this), ie++;
                        try {
                            return k.runCount++, k.zone.runTask(k, n, c)
                        } finally {
                            1 == ie && m(), ie--
                        }
                    }
                    get zone() {
                        return this._zone
                    }
                    get state() {
                        return this._state
                    }
                    cancelScheduleRequest() {
                        this._transitionTo(V, K)
                    }
                    _transitionTo(k, n, c) {
                        if (this._state !== n && this._state !== c) throw new Error(`${this.type} '${this.source}': can not transition to '${k}', expecting state '${n}'${c?" or '"+c+"'":""}, was '${this._state}'.`);
                        this._state = k, k == V && (this._zoneDelegates = null)
                    }
                    toString() {
                        return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                    }
                    toJSON() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        }
                    }
                }
                const R = f("setTimeout"),
                    I = f("Promise"),
                    w = f("then");
                let Q, U = [],
                    H = !1;

                function W(j) {
                    if (Q || e[I] && (Q = e[I].resolve(0)), Q) {
                        let k = Q[w];
                        k || (k = Q.then), k.call(Q, j)
                    } else e[R](j, 0)
                }

                function D(j) {
                    0 === ie && 0 === U.length && W(m), j && U.push(j)
                }

                function m() {
                    if (!H) {
                        for (H = !0; U.length;) {
                            const j = U;
                            U = [];
                            for (let k = 0; k < j.length; k++) {
                                const n = j[k];
                                try {
                                    n.zone.runTask(n, null, null)
                                } catch (c) {
                                    J.onUnhandledError(c)
                                }
                            }
                        }
                        J.microtaskDrainDone(), H = !1
                    }
                }
                const te = {
                        name: "NO ZONE"
                    },
                    V = "notScheduled",
                    K = "scheduling",
                    B = "scheduled",
                    y = "running",
                    z = "canceling",
                    E = "unknown",
                    x = "microTask",
                    C = "macroTask",
                    re = "eventTask",
                    de = {},
                    J = {
                        symbol: f,
                        currentZoneFrame: () => q,
                        onUnhandledError: X,
                        microtaskDrainDone: X,
                        scheduleMicroTask: D,
                        showUncaughtError: () => !g[f("ignoreConsoleErrorUncaughtError")],
                        patchEventTarget: () => [],
                        patchOnProperties: X,
                        patchMethod: () => X,
                        bindArguments: () => [],
                        patchThen: () => X,
                        patchMacroTask: () => X,
                        patchEventPrototype: () => X,
                        isIEOrEdge: () => !1,
                        getGlobalObjects: () => {},
                        ObjectDefineProperty: () => X,
                        ObjectGetOwnPropertyDescriptor: () => {},
                        ObjectCreate: () => {},
                        ArraySlice: () => [],
                        patchClass: () => X,
                        wrapWithCurrentZone: () => X,
                        filterProperties: () => [],
                        attachOriginToPatched: () => X,
                        _redefineProperty: () => X,
                        patchCallbacks: () => X,
                        nativeScheduleMicroTask: W
                    };
                let q = {
                        parent: null,
                        zone: new g(null, null)
                    },
                    fe = null,
                    ie = 0;

                function X() {}
                i("Zone", "Zone"), e.Zone = g
            }(typeof window < "u" && window || typeof self < "u" && self || global);
            const Te = Object.getOwnPropertyDescriptor,
                Re = Object.defineProperty,
                Ce = Object.getPrototypeOf,
                ke = Object.create,
                ot = Array.prototype.slice,
                Ne = "addEventListener",
                Le = "removeEventListener",
                he = Zone.__symbol__(Ne),
                Ie = Zone.__symbol__(Le),
                ce = "true",
                oe = "false",
                De = Zone.__symbol__("");

            function xe(e, t) {
                return Zone.current.wrap(e, t)
            }

            function qe(e, t, r, i, a) {
                return Zone.current.scheduleMacroTask(e, t, r, i, a)
            }
            const $ = Zone.__symbol__,
                Ze = typeof window < "u",
                ge = Ze ? window : void 0,
                Y = Ze && ge || "object" == typeof self && self || global,
                st = "removeAttribute";

            function je(e, t) {
                for (let r = e.length - 1; r >= 0; r--) "function" == typeof e[r] && (e[r] = xe(e[r], t + "_" + r));
                return e
            }

            function Xe(e) {
                return !e || !1 !== e.writable && !("function" == typeof e.get && typeof e.set > "u")
            }
            const $e = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
                we = !("nw" in Y) && typeof Y.process < "u" && "[object process]" === {}.toString.call(Y.process),
                Me = !we && !$e && !(!Ze || !ge.HTMLElement),
                He = typeof Y.process < "u" && "[object process]" === {}.toString.call(Y.process) && !$e && !(!Ze || !ge.HTMLElement),
                Ee = {},
                ae = function(e) {
                    if (!(e = e || Y.event)) return;
                    let t = Ee[e.type];
                    t || (t = Ee[e.type] = $("ON_PROPERTY" + e.type));
                    const r = this || e.target || Y,
                        i = r[t];
                    let a;
                    return Me && r === ge && "error" === e.type ? (a = i && i.call(this, e.message, e.filename, e.lineno, e.colno, e.error), !0 === a && e.preventDefault()) : (a = i && i.apply(this, arguments), null != a && !a && e.preventDefault()), a
                };

            function Be(e, t, r) {
                let i = Te(e, t);
                if (!i && r && Te(r, t) && (i = {
                        enumerable: !0,
                        configurable: !0
                    }), !i || !i.configurable) return;
                const a = $("on" + t + "patched");
                if (e.hasOwnProperty(a) && e[a]) return;
                delete i.writable, delete i.value;
                const f = i.get,
                    T = i.set,
                    g = t.slice(2);
                let S = Ee[g];
                S || (S = Ee[g] = $("ON_PROPERTY" + g)), i.set = function(b) {
                    let p = this;
                    !p && e === Y && (p = Y), p && ("function" == typeof p[S] && p.removeEventListener(g, ae), T && T.call(p, null), p[S] = b, "function" == typeof b && p.addEventListener(g, ae, !1))
                }, i.get = function() {
                    let b = this;
                    if (!b && e === Y && (b = Y), !b) return null;
                    const p = b[S];
                    if (p) return p;
                    if (f) {
                        let R = f.call(this);
                        if (R) return i.set.call(this, R), "function" == typeof b[st] && b.removeAttribute(t), R
                    }
                    return null
                }, Re(e, t, i), e[a] = !0
            }

            function Ye(e, t, r) {
                if (t)
                    for (let i = 0; i < t.length; i++) Be(e, "on" + t[i], r);
                else {
                    const i = [];
                    for (const a in e) "on" == a.slice(0, 2) && i.push(a);
                    for (let a = 0; a < i.length; a++) Be(e, i[a], r)
                }
            }
            const ne = $("originalInstance");

            function be(e) {
                const t = Y[e];
                if (!t) return;
                Y[$(e)] = t, Y[e] = function() {
                    const a = je(arguments, e);
                    switch (a.length) {
                        case 0:
                            this[ne] = new t;
                            break;
                        case 1:
                            this[ne] = new t(a[0]);
                            break;
                        case 2:
                            this[ne] = new t(a[0], a[1]);
                            break;
                        case 3:
                            this[ne] = new t(a[0], a[1], a[2]);
                            break;
                        case 4:
                            this[ne] = new t(a[0], a[1], a[2], a[3]);
                            break;
                        default:
                            throw new Error("Arg list too long.")
                    }
                }, ue(Y[e], t);
                const r = new t(function() {});
                let i;
                for (i in r) "XMLHttpRequest" === e && "responseBlob" === i || function(a) {
                    "function" == typeof r[a] ? Y[e].prototype[a] = function() {
                        return this[ne][a].apply(this[ne], arguments)
                    } : Re(Y[e].prototype, a, {
                        set: function(f) {
                            "function" == typeof f ? (this[ne][a] = xe(f, e + "." + a), ue(this[ne][a], f)) : this[ne][a] = f
                        },
                        get: function() {
                            return this[ne][a]
                        }
                    })
                }(i);
                for (i in t) "prototype" !== i && t.hasOwnProperty(i) && (Y[e][i] = t[i])
            }

            function le(e, t, r) {
                let i = e;
                for (; i && !i.hasOwnProperty(t);) i = Ce(i);
                !i && e[t] && (i = e);
                const a = $(t);
                let f = null;
                if (i && (!(f = i[a]) || !i.hasOwnProperty(a)) && (f = i[a] = i[t], Xe(i && Te(i, t)))) {
                    const g = r(f, a, t);
                    i[t] = function() {
                        return g(this, arguments)
                    }, ue(i[t], f)
                }
                return f
            }

            function Ke(e, t, r) {
                let i = null;

                function a(f) {
                    const T = f.data;
                    return T.args[T.cbIdx] = function() {
                        f.invoke.apply(this, arguments)
                    }, i.apply(T.target, T.args), f
                }
                i = le(e, t, f => function(T, g) {
                    const S = r(T, g);
                    return S.cbIdx >= 0 && "function" == typeof g[S.cbIdx] ? qe(S.name, g[S.cbIdx], S, a) : f.apply(T, g)
                })
            }

            function ue(e, t) {
                e[$("OriginalDelegate")] = t
            }
            let Ue = !1,
                Ve = !1;

            function ct() {
                if (Ue) return Ve;
                Ue = !0;
                try {
                    const e = ge.navigator.userAgent;
                    (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/") || -1 !== e.indexOf("Edge/")) && (Ve = !0)
                } catch {}
                return Ve
            }
            Zone.__load_patch("ZoneAwarePromise", (e, t, r) => {
                const i = Object.getOwnPropertyDescriptor,
                    a = Object.defineProperty,
                    T = r.symbol,
                    g = [],
                    S = !0 === e[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                    b = T("Promise"),
                    p = T("then"),
                    R = "__creationTrace__";
                r.onUnhandledError = h => {
                    if (r.showUncaughtError()) {
                        const d = h && h.rejection;
                        d ? console.error("Unhandled Promise rejection:", d instanceof Error ? d.message : d, "; Zone:", h.zone.name, "; Task:", h.task && h.task.source, "; Value:", d, d instanceof Error ? d.stack : void 0) : console.error(h)
                    }
                }, r.microtaskDrainDone = () => {
                    for (; g.length;) {
                        const h = g.shift();
                        try {
                            h.zone.runGuarded(() => {
                                throw h.throwOriginal ? h.rejection : h
                            })
                        } catch (d) {
                            w(d)
                        }
                    }
                };
                const I = T("unhandledPromiseRejectionHandler");

                function w(h) {
                    r.onUnhandledError(h);
                    try {
                        const d = t[I];
                        "function" == typeof d && d.call(this, h)
                    } catch {}
                }

                function U(h) {
                    return h && h.then
                }

                function H(h) {
                    return h
                }

                function Q(h) {
                    return n.reject(h)
                }
                const W = T("state"),
                    D = T("value"),
                    m = T("finally"),
                    te = T("parentPromiseValue"),
                    V = T("parentPromiseState"),
                    K = "Promise.then",
                    B = null,
                    y = !0,
                    z = !1,
                    E = 0;

                function x(h, d) {
                    return u => {
                        try {
                            J(h, d, u)
                        } catch (_) {
                            J(h, !1, _)
                        }
                    }
                }
                const C = function() {
                        let h = !1;
                        return function(u) {
                            return function() {
                                h || (h = !0, u.apply(null, arguments))
                            }
                        }
                    },
                    re = "Promise resolved with itself",
                    de = T("currentTaskTrace");

                function J(h, d, u) {
                    const _ = C();
                    if (h === u) throw new TypeError(re);
                    if (h[W] === B) {
                        let P = null;
                        try {
                            ("object" == typeof u || "function" == typeof u) && (P = u && u.then)
                        } catch (N) {
                            return _(() => {
                                J(h, !1, N)
                            })(), h
                        }
                        if (d !== z && u instanceof n && u.hasOwnProperty(W) && u.hasOwnProperty(D) && u[W] !== B) fe(u), J(h, u[W], u[D]);
                        else if (d !== z && "function" == typeof P) try {
                            P.call(u, _(x(h, d)), _(x(h, !1)))
                        } catch (N) {
                            _(() => {
                                J(h, !1, N)
                            })()
                        } else {
                            h[W] = d;
                            const N = h[D];
                            if (h[D] = u, h[m] === m && d === y && (h[W] = h[V], h[D] = h[te]), d === z && u instanceof Error) {
                                const v = t.currentTask && t.currentTask.data && t.currentTask.data[R];
                                v && a(u, de, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: v
                                })
                            }
                            for (let v = 0; v < N.length;) ie(h, N[v++], N[v++], N[v++], N[v++]);
                            if (0 == N.length && d == z) {
                                h[W] = E;
                                let v = u;
                                try {
                                    throw new Error("Uncaught (in promise): " + function f(h) {
                                        return h && h.toString === Object.prototype.toString ? (h.constructor && h.constructor.name || "") + ": " + JSON.stringify(h) : h ? h.toString() : Object.prototype.toString.call(h)
                                    }(u) + (u && u.stack ? "\n" + u.stack : ""))
                                } catch (M) {
                                    v = M
                                }
                                S && (v.throwOriginal = !0), v.rejection = u, v.promise = h, v.zone = t.current, v.task = t.currentTask, g.push(v), r.scheduleMicroTask()
                            }
                        }
                    }
                    return h
                }
                const q = T("rejectionHandledHandler");

                function fe(h) {
                    if (h[W] === E) {
                        try {
                            const d = t[q];
                            d && "function" == typeof d && d.call(this, {
                                rejection: h[D],
                                promise: h
                            })
                        } catch {}
                        h[W] = z;
                        for (let d = 0; d < g.length; d++) h === g[d].promise && g.splice(d, 1)
                    }
                }

                function ie(h, d, u, _, P) {
                    fe(h);
                    const N = h[W],
                        v = N ? "function" == typeof _ ? _ : H : "function" == typeof P ? P : Q;
                    d.scheduleMicroTask(K, () => {
                        try {
                            const M = h[D],
                                A = !!u && m === u[m];
                            A && (u[te] = M, u[V] = N);
                            const L = d.run(v, void 0, A && v !== Q && v !== H ? [] : [M]);
                            J(u, !0, L)
                        } catch (M) {
                            J(u, !1, M)
                        }
                    }, u)
                }
                const j = function() {},
                    k = e.AggregateError;
                class n {
                    static toString() {
                        return "function ZoneAwarePromise() { [native code] }"
                    }
                    static resolve(d) {
                        return J(new this(null), y, d)
                    }
                    static reject(d) {
                        return J(new this(null), z, d)
                    }
                    static any(d) {
                        if (!d || "function" != typeof d[Symbol.iterator]) return Promise.reject(new k([], "All promises were rejected"));
                        const u = [];
                        let _ = 0;
                        try {
                            for (let v of d) _++, u.push(n.resolve(v))
                        } catch {
                            return Promise.reject(new k([], "All promises were rejected"))
                        }
                        if (0 === _) return Promise.reject(new k([], "All promises were rejected"));
                        let P = !1;
                        const N = [];
                        return new n((v, M) => {
                            for (let A = 0; A < u.length; A++) u[A].then(L => {
                                P || (P = !0, v(L))
                            }, L => {
                                N.push(L), _--, 0 === _ && (P = !0, M(new k(N, "All promises were rejected")))
                            })
                        })
                    }
                    static race(d) {
                        let u, _, P = new this((M, A) => {
                            u = M, _ = A
                        });

                        function N(M) {
                            u(M)
                        }

                        function v(M) {
                            _(M)
                        }
                        for (let M of d) U(M) || (M = this.resolve(M)), M.then(N, v);
                        return P
                    }
                    static all(d) {
                        return n.allWithCallback(d)
                    }
                    static allSettled(d) {
                        return (this && this.prototype instanceof n ? this : n).allWithCallback(d, {
                            thenCallback: _ => ({
                                status: "fulfilled",
                                value: _
                            }),
                            errorCallback: _ => ({
                                status: "rejected",
                                reason: _
                            })
                        })
                    }
                    static allWithCallback(d, u) {
                        let _, P, N = new this((L, G) => {
                                _ = L, P = G
                            }),
                            v = 2,
                            M = 0;
                        const A = [];
                        for (let L of d) {
                            U(L) || (L = this.resolve(L));
                            const G = M;
                            try {
                                L.then(F => {
                                    A[G] = u ? u.thenCallback(F) : F, v--, 0 === v && _(A)
                                }, F => {
                                    u ? (A[G] = u.errorCallback(F), v--, 0 === v && _(A)) : P(F)
                                })
                            } catch (F) {
                                P(F)
                            }
                            v++, M++
                        }
                        return v -= 2, 0 === v && _(A), N
                    }
                    constructor(d) {
                        const u = this;
                        if (!(u instanceof n)) throw new Error("Must be an instanceof Promise.");
                        u[W] = B, u[D] = [];
                        try {
                            const _ = C();
                            d && d(_(x(u, y)), _(x(u, z)))
                        } catch (_) {
                            J(u, !1, _)
                        }
                    }
                    get[Symbol.toStringTag]() {
                        return "Promise"
                    }
                    get[Symbol.species]() {
                        return n
                    }
                    then(d, u) {
                        let _ = this.constructor ? .[Symbol.species];
                        (!_ || "function" != typeof _) && (_ = this.constructor || n);
                        const P = new _(j),
                            N = t.current;
                        return this[W] == B ? this[D].push(N, P, d, u) : ie(this, N, P, d, u), P
                    } catch (d) {
                        return this.then(null, d)
                    } finally(d) {
                        let u = this.constructor ? .[Symbol.species];
                        (!u || "function" != typeof u) && (u = n);
                        const _ = new u(j);
                        _[m] = m;
                        const P = t.current;
                        return this[W] == B ? this[D].push(P, _, d, d) : ie(this, P, _, d, d), _
                    }
                }
                n.resolve = n.resolve, n.reject = n.reject, n.race = n.race, n.all = n.all;
                const c = e[b] = e.Promise;
                e.Promise = n;
                const O = T("thenPatched");

                function Z(h) {
                    const d = h.prototype,
                        u = i(d, "then");
                    if (u && (!1 === u.writable || !u.configurable)) return;
                    const _ = d.then;
                    d[p] = _, h.prototype.then = function(P, N) {
                        return new n((M, A) => {
                            _.call(this, M, A)
                        }).then(P, N)
                    }, h[O] = !0
                }
                return r.patchThen = Z, c && (Z(c), le(e, "fetch", h => function ee(h) {
                    return function(d, u) {
                        let _ = h.apply(d, u);
                        if (_ instanceof n) return _;
                        let P = _.constructor;
                        return P[O] || Z(P), _
                    }
                }(h))), Promise[t.__symbol__("uncaughtPromiseErrors")] = g, n
            }), Zone.__load_patch("toString", e => {
                const t = Function.prototype.toString,
                    r = $("OriginalDelegate"),
                    i = $("Promise"),
                    a = $("Error"),
                    f = function() {
                        if ("function" == typeof this) {
                            const b = this[r];
                            if (b) return "function" == typeof b ? t.call(b) : Object.prototype.toString.call(b);
                            if (this === Promise) {
                                const p = e[i];
                                if (p) return t.call(p)
                            }
                            if (this === Error) {
                                const p = e[a];
                                if (p) return t.call(p)
                            }
                        }
                        return t.call(this)
                    };
                f[r] = t, Function.prototype.toString = f;
                const T = Object.prototype.toString;
                Object.prototype.toString = function() {
                    return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : T.call(this)
                }
            });
            let pe = !1;
            if (typeof window < "u") try {
                const e = Object.defineProperty({}, "passive", {
                    get: function() {
                        pe = !0
                    }
                });
                window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
            } catch {
                pe = !1
            }
            const Je = {
                    useG: !0
                },
                se = {},
                ze = {},
                Qe = new RegExp("^" + De + "(\\w+)(true|false)$"),
                at = $("propagationStopped");

            function et(e, t) {
                const r = (t ? t(e) : e) + oe,
                    i = (t ? t(e) : e) + ce,
                    a = De + r,
                    f = De + i;
                se[e] = {}, se[e][oe] = a, se[e][ce] = f
            }

            function lt(e, t, r, i) {
                const a = i && i.add || Ne,
                    f = i && i.rm || Le,
                    T = i && i.listeners || "eventListeners",
                    g = i && i.rmAll || "removeAllListeners",
                    S = $(a),
                    b = "." + a + ":",
                    p = "prependListener",
                    R = "." + p + ":",
                    I = function(D, m, te) {
                        if (D.isRemoved) return;
                        const V = D.callback;
                        let K;
                        "object" == typeof V && V.handleEvent && (D.callback = y => V.handleEvent(y), D.originalDelegate = V);
                        try {
                            D.invoke(D, m, [te])
                        } catch (y) {
                            K = y
                        }
                        const B = D.options;
                        return B && "object" == typeof B && B.once && m[f].call(m, te.type, D.originalDelegate ? D.originalDelegate : D.callback, B), K
                    };

                function w(D, m, te) {
                    if (!(m = m || e.event)) return;
                    const V = D || m.target || e,
                        K = V[se[m.type][te ? ce : oe]];
                    if (K) {
                        const B = [];
                        if (1 === K.length) {
                            const y = I(K[0], V, m);
                            y && B.push(y)
                        } else {
                            const y = K.slice();
                            for (let z = 0; z < y.length && (!m || !0 !== m[at]); z++) {
                                const E = I(y[z], V, m);
                                E && B.push(E)
                            }
                        }
                        if (1 === B.length) throw B[0];
                        for (let y = 0; y < B.length; y++) {
                            const z = B[y];
                            t.nativeScheduleMicroTask(() => {
                                throw z
                            })
                        }
                    }
                }
                const U = function(D) {
                        return w(this, D, !1)
                    },
                    H = function(D) {
                        return w(this, D, !0)
                    };

                function Q(D, m) {
                    if (!D) return !1;
                    let te = !0;
                    m && void 0 !== m.useG && (te = m.useG);
                    const V = m && m.vh;
                    let K = !0;
                    m && void 0 !== m.chkDup && (K = m.chkDup);
                    let B = !1;
                    m && void 0 !== m.rt && (B = m.rt);
                    let y = D;
                    for (; y && !y.hasOwnProperty(a);) y = Ce(y);
                    if (!y && D[a] && (y = D), !y || y[S]) return !1;
                    const z = m && m.eventNameToString,
                        E = {},
                        x = y[S] = y[a],
                        C = y[$(f)] = y[f],
                        re = y[$(T)] = y[T],
                        de = y[$(g)] = y[g];
                    let J;
                    m && m.prepend && (J = y[$(m.prepend)] = y[m.prepend]);
                    const n = te ? function(u) {
                            if (!E.isExisting) return x.call(E.target, E.eventName, E.capture ? H : U, E.options)
                        } : function(u) {
                            return x.call(E.target, E.eventName, u.invoke, E.options)
                        },
                        c = te ? function(u) {
                            if (!u.isRemoved) {
                                const _ = se[u.eventName];
                                let P;
                                _ && (P = _[u.capture ? ce : oe]);
                                const N = P && u.target[P];
                                if (N)
                                    for (let v = 0; v < N.length; v++)
                                        if (N[v] === u) {
                                            N.splice(v, 1), u.isRemoved = !0, 0 === N.length && (u.allRemoved = !0, u.target[P] = null);
                                            break
                                        }
                            }
                            if (u.allRemoved) return C.call(u.target, u.eventName, u.capture ? H : U, u.options)
                        } : function(u) {
                            return C.call(u.target, u.eventName, u.invoke, u.options)
                        },
                        Z = m && m.diff ? m.diff : function(u, _) {
                            const P = typeof _;
                            return "function" === P && u.callback === _ || "object" === P && u.originalDelegate === _
                        },
                        ee = Zone[$("UNPATCHED_EVENTS")],
                        h = e[$("PASSIVE_EVENTS")],
                        d = function(u, _, P, N, v = !1, M = !1) {
                            return function() {
                                const A = this || e;
                                let L = arguments[0];
                                m && m.transferEventName && (L = m.transferEventName(L));
                                let G = arguments[1];
                                if (!G) return u.apply(this, arguments);
                                if (we && "uncaughtException" === L) return u.apply(this, arguments);
                                let F = !1;
                                if ("function" != typeof G) {
                                    if (!G.handleEvent) return u.apply(this, arguments);
                                    F = !0
                                }
                                if (V && !V(u, G, A, arguments)) return;
                                const me = pe && !!h && -1 !== h.indexOf(L),
                                    _e = function q(u, _) {
                                        return !pe && "object" == typeof u && u ? !!u.capture : pe && _ ? "boolean" == typeof u ? {
                                            capture: u,
                                            passive: !0
                                        } : u ? "object" == typeof u && !1 !== u.passive ? { ...u,
                                            passive: !0
                                        } : u : {
                                            passive: !0
                                        } : u
                                    }(arguments[2], me);
                                if (ee)
                                    for (let Oe = 0; Oe < ee.length; Oe++)
                                        if (L === ee[Oe]) return me ? u.call(A, L, G, _e) : u.apply(this, arguments);
                                const _t = !!_e && ("boolean" == typeof _e || _e.capture),
                                    gt = !(!_e || "object" != typeof _e) && _e.once,
                                    kt = Zone.current;
                                let Tt = se[L];
                                Tt || (et(L, z), Tt = se[L]);
                                const Et = Tt[_t ? ce : oe];
                                let rt, Ae = A[Et],
                                    pt = !1;
                                if (Ae) {
                                    if (pt = !0, K)
                                        for (let Oe = 0; Oe < Ae.length; Oe++)
                                            if (Z(Ae[Oe], G)) return
                                } else Ae = A[Et] = [];
                                const mt = A.constructor.name,
                                    yt = ze[mt];
                                yt && (rt = yt[L]), rt || (rt = mt + _ + (z ? z(L) : L)), E.options = _e, gt && (E.options.once = !1), E.target = A, E.capture = _t, E.eventName = L, E.isExisting = pt;
                                const We = te ? Je : void 0;
                                We && (We.taskData = E);
                                const ye = kt.scheduleEventTask(rt, G, We, P, N);
                                return E.target = null, We && (We.taskData = null), gt && (_e.once = !0), !pe && "boolean" == typeof ye.options || (ye.options = _e), ye.target = A, ye.capture = _t, ye.eventName = L, F && (ye.originalDelegate = G), M ? Ae.unshift(ye) : Ae.push(ye), v ? A : void 0
                            }
                        };
                    return y[a] = d(x, b, n, c, B), J && (y[p] = d(J, R, function(u) {
                        return J.call(E.target, E.eventName, u.invoke, E.options)
                    }, c, B, !0)), y[f] = function() {
                        const u = this || e;
                        let _ = arguments[0];
                        m && m.transferEventName && (_ = m.transferEventName(_));
                        const P = arguments[2],
                            N = !!P && ("boolean" == typeof P || P.capture),
                            v = arguments[1];
                        if (!v) return C.apply(this, arguments);
                        if (V && !V(C, v, u, arguments)) return;
                        const M = se[_];
                        let A;
                        M && (A = M[N ? ce : oe]);
                        const L = A && u[A];
                        if (L)
                            for (let G = 0; G < L.length; G++) {
                                const F = L[G];
                                if (Z(F, v)) return L.splice(G, 1), F.isRemoved = !0, 0 === L.length && (F.allRemoved = !0, u[A] = null, "string" == typeof _) && (u[De + "ON_PROPERTY" + _] = null), F.zone.cancelTask(F), B ? u : void 0
                            }
                        return C.apply(this, arguments)
                    }, y[T] = function() {
                        const u = this || e;
                        let _ = arguments[0];
                        m && m.transferEventName && (_ = m.transferEventName(_));
                        const P = [],
                            N = ut(u, z ? z(_) : _);
                        for (let v = 0; v < N.length; v++) {
                            const M = N[v];
                            P.push(M.originalDelegate ? M.originalDelegate : M.callback)
                        }
                        return P
                    }, y[g] = function() {
                        const u = this || e;
                        let _ = arguments[0];
                        if (_) {
                            m && m.transferEventName && (_ = m.transferEventName(_));
                            const P = se[_];
                            if (P) {
                                const M = u[P[oe]],
                                    A = u[P[ce]];
                                if (M) {
                                    const L = M.slice();
                                    for (let G = 0; G < L.length; G++) {
                                        const F = L[G];
                                        this[f].call(this, _, F.originalDelegate ? F.originalDelegate : F.callback, F.options)
                                    }
                                }
                                if (A) {
                                    const L = A.slice();
                                    for (let G = 0; G < L.length; G++) {
                                        const F = L[G];
                                        this[f].call(this, _, F.originalDelegate ? F.originalDelegate : F.callback, F.options)
                                    }
                                }
                            }
                        } else {
                            const P = Object.keys(u);
                            for (let N = 0; N < P.length; N++) {
                                const M = Qe.exec(P[N]);
                                let A = M && M[1];
                                A && "removeListener" !== A && this[g].call(this, A)
                            }
                            this[g].call(this, "removeListener")
                        }
                        if (B) return this
                    }, ue(y[a], x), ue(y[f], C), de && ue(y[g], de), re && ue(y[T], re), !0
                }
                let W = [];
                for (let D = 0; D < r.length; D++) W[D] = Q(r[D], i);
                return W
            }

            function ut(e, t) {
                if (!t) {
                    const f = [];
                    for (let T in e) {
                        const g = Qe.exec(T);
                        let S = g && g[1];
                        if (S && (!t || S === t)) {
                            const b = e[T];
                            if (b)
                                for (let p = 0; p < b.length; p++) f.push(b[p])
                        }
                    }
                    return f
                }
                let r = se[t];
                r || (et(t), r = se[t]);
                const i = e[r[oe]],
                    a = e[r[ce]];
                return i ? a ? i.concat(a) : i.slice() : a ? a.slice() : []
            }

            function tt(e, t) {
                const r = e.Event;
                r && r.prototype && t.patchMethod(r.prototype, "stopImmediatePropagation", i => function(a, f) {
                    a[at] = !0, i && i.apply(a, f)
                })
            }

            function nt(e, t, r, i, a) {
                const f = Zone.__symbol__(i);
                if (t[f]) return;
                const T = t[f] = t[i];
                t[i] = function(g, S, b) {
                    return S && S.prototype && a.forEach(function(p) {
                        const R = `${r}.${i}::` + p,
                            I = S.prototype;
                        try {
                            if (I.hasOwnProperty(p)) {
                                const w = e.ObjectGetOwnPropertyDescriptor(I, p);
                                w && w.value ? (w.value = e.wrapWithCurrentZone(w.value, R), e._redefineProperty(S.prototype, p, w)) : I[p] && (I[p] = e.wrapWithCurrentZone(I[p], R))
                            } else I[p] && (I[p] = e.wrapWithCurrentZone(I[p], R))
                        } catch {}
                    }), T.call(t, g, S, b)
                }, e.attachOriginToPatched(t[i], T)
            }

            function ft(e, t, r) {
                if (!r || 0 === r.length) return t;
                const i = r.filter(f => f.target === e);
                if (!i || 0 === i.length) return t;
                const a = i[0].ignoreProperties;
                return t.filter(f => -1 === a.indexOf(f))
            }

            function ht(e, t, r, i) {
                e && Ye(e, ft(e, t, r), i)
            }

            function Ge(e) {
                return Object.getOwnPropertyNames(e).filter(t => t.startsWith("on") && t.length > 2).map(t => t.substring(2))
            }
            Zone.__load_patch("util", (e, t, r) => {
                const i = Ge(e);
                r.patchOnProperties = Ye, r.patchMethod = le, r.bindArguments = je, r.patchMacroTask = Ke;
                const a = t.__symbol__("BLACK_LISTED_EVENTS"),
                    f = t.__symbol__("UNPATCHED_EVENTS");
                e[f] && (e[a] = e[f]), e[a] && (t[a] = t[f] = e[a]), r.patchEventPrototype = tt, r.patchEventTarget = lt, r.isIEOrEdge = ct, r.ObjectDefineProperty = Re, r.ObjectGetOwnPropertyDescriptor = Te, r.ObjectCreate = ke, r.ArraySlice = ot, r.patchClass = be, r.wrapWithCurrentZone = xe, r.filterProperties = ft, r.attachOriginToPatched = ue, r._redefineProperty = Object.defineProperty, r.patchCallbacks = nt, r.getGlobalObjects = () => ({
                    globalSources: ze,
                    zoneSymbolEventNames: se,
                    eventNames: i,
                    isBrowser: Me,
                    isMix: He,
                    isNode: we,
                    TRUE_STR: ce,
                    FALSE_STR: oe,
                    ZONE_SYMBOL_PREFIX: De,
                    ADD_EVENT_LISTENER_STR: Ne,
                    REMOVE_EVENT_LISTENER_STR: Le
                })
            });
            const Pe = $("zoneTask");

            function Se(e, t, r, i) {
                let a = null,
                    f = null;
                r += i;
                const T = {};

                function g(b) {
                    const p = b.data;
                    return p.args[0] = function() {
                        return b.invoke.apply(this, arguments)
                    }, p.handleId = a.apply(e, p.args), b
                }

                function S(b) {
                    return f.call(e, b.data.handleId)
                }
                a = le(e, t += i, b => function(p, R) {
                    if ("function" == typeof R[0]) {
                        const I = {
                                isPeriodic: "Interval" === i,
                                delay: "Timeout" === i || "Interval" === i ? R[1] || 0 : void 0,
                                args: R
                            },
                            w = R[0];
                        R[0] = function() {
                            try {
                                return w.apply(this, arguments)
                            } finally {
                                I.isPeriodic || ("number" == typeof I.handleId ? delete T[I.handleId] : I.handleId && (I.handleId[Pe] = null))
                            }
                        };
                        const U = qe(t, R[0], I, g, S);
                        if (!U) return U;
                        const H = U.data.handleId;
                        return "number" == typeof H ? T[H] = U : H && (H[Pe] = U), H && H.ref && H.unref && "function" == typeof H.ref && "function" == typeof H.unref && (U.ref = H.ref.bind(H), U.unref = H.unref.bind(H)), "number" == typeof H || H ? H : U
                    }
                    return b.apply(e, R)
                }), f = le(e, r, b => function(p, R) {
                    const I = R[0];
                    let w;
                    "number" == typeof I ? w = T[I] : (w = I && I[Pe], w || (w = I)), w && "string" == typeof w.type ? "notScheduled" !== w.state && (w.cancelFn && w.data.isPeriodic || 0 === w.runCount) && ("number" == typeof I ? delete T[I] : I && (I[Pe] = null), w.zone.cancelTask(w)) : b.apply(e, R)
                })
            }
            Zone.__load_patch("legacy", e => {
                const t = e[Zone.__symbol__("legacyPatch")];
                t && t()
            }), Zone.__load_patch("timers", e => {
                const t = "set",
                    r = "clear";
                Se(e, t, r, "Timeout"), Se(e, t, r, "Interval"), Se(e, t, r, "Immediate")
            }), Zone.__load_patch("requestAnimationFrame", e => {
                Se(e, "request", "cancel", "AnimationFrame"), Se(e, "mozRequest", "mozCancel", "AnimationFrame"), Se(e, "webkitRequest", "webkitCancel", "AnimationFrame")
            }), Zone.__load_patch("blocking", (e, t) => {
                const r = ["alert", "prompt", "confirm"];
                for (let i = 0; i < r.length; i++) le(e, r[i], (f, T, g) => function(S, b) {
                    return t.current.run(f, e, b, g)
                })
            }), Zone.__load_patch("EventTarget", (e, t, r) => {
                (function l(e, t) {
                    t.patchEventPrototype(e, t)
                })(e, r),
                function o(e, t) {
                    if (Zone[t.symbol("patchEventTarget")]) return;
                    const {
                        eventNames: r,
                        zoneSymbolEventNames: i,
                        TRUE_STR: a,
                        FALSE_STR: f,
                        ZONE_SYMBOL_PREFIX: T
                    } = t.getGlobalObjects();
                    for (let S = 0; S < r.length; S++) {
                        const b = r[S],
                            I = T + (b + f),
                            w = T + (b + a);
                        i[b] = {}, i[b][f] = I, i[b][a] = w
                    }
                    const g = e.EventTarget;
                    g && g.prototype && t.patchEventTarget(e, t, [g && g.prototype])
                }(e, r);
                const i = e.XMLHttpRequestEventTarget;
                i && i.prototype && r.patchEventTarget(e, r, [i.prototype])
            }), Zone.__load_patch("MutationObserver", (e, t, r) => {
                be("MutationObserver"), be("WebKitMutationObserver")
            }), Zone.__load_patch("IntersectionObserver", (e, t, r) => {
                be("IntersectionObserver")
            }), Zone.__load_patch("FileReader", (e, t, r) => {
                be("FileReader")
            }), Zone.__load_patch("on_property", (e, t, r) => {
                ! function Fe(e, t) {
                    if (we && !He || Zone[e.symbol("patchEvents")]) return;
                    const r = t.__Zone_ignore_on_properties;
                    let i = [];
                    if (Me) {
                        const a = window;
                        i = i.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
                        const f = function it() {
                            try {
                                const e = ge.navigator.userAgent;
                                if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/")) return !0
                            } catch {}
                            return !1
                        }() ? [{
                            target: a,
                            ignoreProperties: ["error"]
                        }] : [];
                        ht(a, Ge(a), r && r.concat(f), Ce(a))
                    }
                    i = i.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
                    for (let a = 0; a < i.length; a++) {
                        const f = t[i[a]];
                        f && f.prototype && ht(f.prototype, Ge(f.prototype), r)
                    }
                }(r, e)
            }), Zone.__load_patch("customElements", (e, t, r) => {
                ! function s(e, t) {
                    const {
                        isBrowser: r,
                        isMix: i
                    } = t.getGlobalObjects();
                    (r || i) && e.customElements && "customElements" in e && t.patchCallbacks(t, e.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"])
                }(e, r)
            }), Zone.__load_patch("XHR", (e, t) => {
                ! function S(b) {
                    const p = b.XMLHttpRequest;
                    if (!p) return;
                    const R = p.prototype;
                    let w = R[he],
                        U = R[Ie];
                    if (!w) {
                        const E = b.XMLHttpRequestEventTarget;
                        if (E) {
                            const x = E.prototype;
                            w = x[he], U = x[Ie]
                        }
                    }
                    const H = "readystatechange",
                        Q = "scheduled";

                    function W(E) {
                        const x = E.data,
                            C = x.target;
                        C[f] = !1, C[g] = !1;
                        const re = C[a];
                        w || (w = C[he], U = C[Ie]), re && U.call(C, H, re);
                        const de = C[a] = () => {
                            if (C.readyState === C.DONE)
                                if (!x.aborted && C[f] && E.state === Q) {
                                    const q = C[t.__symbol__("loadfalse")];
                                    if (0 !== C.status && q && q.length > 0) {
                                        const fe = E.invoke;
                                        E.invoke = function() {
                                            const ie = C[t.__symbol__("loadfalse")];
                                            for (let X = 0; X < ie.length; X++) ie[X] === E && ie.splice(X, 1);
                                            !x.aborted && E.state === Q && fe.call(E)
                                        }, q.push(E)
                                    } else E.invoke()
                                } else !x.aborted && !1 === C[f] && (C[g] = !0)
                        };
                        return w.call(C, H, de), C[r] || (C[r] = E), y.apply(C, x.args), C[f] = !0, E
                    }

                    function D() {}

                    function m(E) {
                        const x = E.data;
                        return x.aborted = !0, z.apply(x.target, x.args)
                    }
                    const te = le(R, "open", () => function(E, x) {
                            return E[i] = 0 == x[2], E[T] = x[1], te.apply(E, x)
                        }),
                        K = $("fetchTaskAborting"),
                        B = $("fetchTaskScheduling"),
                        y = le(R, "send", () => function(E, x) {
                            if (!0 === t.current[B] || E[i]) return y.apply(E, x); {
                                const C = {
                                        target: E,
                                        url: E[T],
                                        isPeriodic: !1,
                                        args: x,
                                        aborted: !1
                                    },
                                    re = qe("XMLHttpRequest.send", D, C, W, m);
                                E && !0 === E[g] && !C.aborted && re.state === Q && re.invoke()
                            }
                        }),
                        z = le(R, "abort", () => function(E, x) {
                            const C = function I(E) {
                                return E[r]
                            }(E);
                            if (C && "string" == typeof C.type) {
                                if (null == C.cancelFn || C.data && C.data.aborted) return;
                                C.zone.cancelTask(C)
                            } else if (!0 === t.current[K]) return z.apply(E, x)
                        })
                }(e);
                const r = $("xhrTask"),
                    i = $("xhrSync"),
                    a = $("xhrListener"),
                    f = $("xhrScheduled"),
                    T = $("xhrURL"),
                    g = $("xhrErrorBeforeScheduled")
            }), Zone.__load_patch("geolocation", e => {
                e.navigator && e.navigator.geolocation && function ve(e, t) {
                    const r = e.constructor.name;
                    for (let i = 0; i < t.length; i++) {
                        const a = t[i],
                            f = e[a];
                        if (f) {
                            if (!Xe(Te(e, a))) continue;
                            e[a] = (g => {
                                const S = function() {
                                    return g.apply(this, je(arguments, r + "." + a))
                                };
                                return ue(S, g), S
                            })(f)
                        }
                    }
                }(e.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
            }), Zone.__load_patch("PromiseRejectionEvent", (e, t) => {
                function r(i) {
                    return function(a) {
                        ut(e, i).forEach(T => {
                            const g = e.PromiseRejectionEvent;
                            if (g) {
                                const S = new g(i, {
                                    promise: a.promise,
                                    reason: a.rejection
                                });
                                T.invoke(S)
                            }
                        })
                    }
                }
                e.PromiseRejectionEvent && (t[$("unhandledPromiseRejectionHandler")] = r("unhandledrejection"), t[$("rejectionHandledHandler")] = r("rejectionhandled"))
            }), Zone.__load_patch("queueMicrotask", (e, t, r) => {
                ! function dt(e, t) {
                    t.patchMethod(e, "queueMicrotask", r => function(i, a) {
                        Zone.current.scheduleMicroTask("queueMicrotask", a[0])
                    })
                }(e, r)
            })
        }
    },
    Te => {
        Te(Te.s = 1253)
    }
]);