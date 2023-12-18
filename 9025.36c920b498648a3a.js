"use strict";
(self.webpackChunkdorkl = self.webpackChunkdorkl || []).push([
    [9025], {
        9025: (re, Z, c) => {
            c.d(Z, {
                O_: () => v,
                Y4: () => ae,
                b6: () => l
            });
            var i = c(5879),
                G = c(6814),
                r = c(5619),
                B = c(5592),
                U = (c(8645), c(2572), c(4664));
            c(8180), c(7398), c(9773);
            const C = ["*"];
            class d {
                _clearListeners() {
                    for (const p of this._listeners) p.remove();
                    this._listeners = []
                }
                constructor(p) {
                    this._ngZone = p, this._pending = [], this._listeners = [], this._targetStream = new r.X(void 0)
                }
                getLazyEmitter(p) {
                    return this._targetStream.pipe((0, U.w)(e => {
                        const t = new B.y(n => {
                            if (!e) return void this._pending.push({
                                observable: t,
                                observer: n
                            });
                            const a = e.addListener(p, h => {
                                this._ngZone.run(() => n.next(h))
                            });
                            if (a) return this._listeners.push(a), () => a.remove();
                            n.complete()
                        });
                        return t
                    }))
                }
                setTarget(p) {
                    const e = this._targetStream.value;
                    p !== e && (e && (this._clearListeners(), this._pending = []), this._targetStream.next(p), this._pending.forEach(t => t.observable.subscribe(t.observer)), this._pending = [])
                }
                destroy() {
                    this._clearListeners(), this._pending = [], this._targetStream.complete()
                }
            }
            const y = {
                    center: {
                        lat: 37.421995,
                        lng: -122.084092
                    },
                    zoom: 17,
                    mapTypeId: "roadmap"
                },
                w = "500px",
                I = "500px";
            let l = (() => {
                class s {
                    set center(e) {
                        this._center = e
                    }
                    set zoom(e) {
                        this._zoom = e
                    }
                    set options(e) {
                        this._options = e || y
                    }
                    constructor(e, t, n) {
                        if (this._elementRef = e, this._ngZone = t, this._eventManager = new d((0, i.f3M)(i.R0b)), this.height = w, this.width = I, this._options = y, this.mapInitialized = new i.vpe, this.authFailure = new i.vpe, this.boundsChanged = this._eventManager.getLazyEmitter("bounds_changed"), this.centerChanged = this._eventManager.getLazyEmitter("center_changed"), this.mapClick = this._eventManager.getLazyEmitter("click"), this.mapDblclick = this._eventManager.getLazyEmitter("dblclick"), this.mapDrag = this._eventManager.getLazyEmitter("drag"), this.mapDragend = this._eventManager.getLazyEmitter("dragend"), this.mapDragstart = this._eventManager.getLazyEmitter("dragstart"), this.headingChanged = this._eventManager.getLazyEmitter("heading_changed"), this.idle = this._eventManager.getLazyEmitter("idle"), this.maptypeidChanged = this._eventManager.getLazyEmitter("maptypeid_changed"), this.mapMousemove = this._eventManager.getLazyEmitter("mousemove"), this.mapMouseout = this._eventManager.getLazyEmitter("mouseout"), this.mapMouseover = this._eventManager.getLazyEmitter("mouseover"), this.projectionChanged = this._eventManager.getLazyEmitter("projection_changed"), this.mapRightclick = this._eventManager.getLazyEmitter("rightclick"), this.tilesloaded = this._eventManager.getLazyEmitter("tilesloaded"), this.tiltChanged = this._eventManager.getLazyEmitter("tilt_changed"), this.zoomChanged = this._eventManager.getLazyEmitter("zoom_changed"), this._isBrowser = (0, G.NF)(n), this._isBrowser) {
                            const a = window;
                            this._existingAuthFailureCallback = a.gm_authFailure, a.gm_authFailure = () => {
                                this._existingAuthFailureCallback && this._existingAuthFailureCallback(), this.authFailure.emit()
                            }
                        }
                    }
                    ngOnChanges(e) {
                        (e.height || e.width) && this._setSize();
                        const t = this.googleMap;
                        t && (e.options && t.setOptions(this._combineOptions()), e.center && this._center && t.setCenter(this._center), e.zoom && null != this._zoom && t.setZoom(this._zoom), e.mapTypeId && this.mapTypeId && t.setMapTypeId(this.mapTypeId))
                    }
                    ngOnInit() {
                        this._isBrowser && (this._mapEl = this._elementRef.nativeElement.querySelector(".map-container"), this._setSize(), this._ngZone.runOutsideAngular(() => {
                            this.googleMap = new google.maps.Map(this._mapEl, this._combineOptions())
                        }), this._eventManager.setTarget(this.googleMap), this.mapInitialized.emit(this.googleMap))
                    }
                    ngOnDestroy() {
                        this._eventManager.destroy(), this._isBrowser && (window.gm_authFailure = this._existingAuthFailureCallback)
                    }
                    fitBounds(e, t) {
                        this._assertInitialized(), this.googleMap.fitBounds(e, t)
                    }
                    panBy(e, t) {
                        this._assertInitialized(), this.googleMap.panBy(e, t)
                    }
                    panTo(e) {
                        this._assertInitialized(), this.googleMap.panTo(e)
                    }
                    panToBounds(e, t) {
                        this._assertInitialized(), this.googleMap.panToBounds(e, t)
                    }
                    getBounds() {
                        return this._assertInitialized(), this.googleMap.getBounds() || null
                    }
                    getCenter() {
                        return this._assertInitialized(), this.googleMap.getCenter()
                    }
                    getClickableIcons() {
                        return this._assertInitialized(), this.googleMap.getClickableIcons()
                    }
                    getHeading() {
                        return this._assertInitialized(), this.googleMap.getHeading()
                    }
                    getMapTypeId() {
                        return this._assertInitialized(), this.googleMap.getMapTypeId()
                    }
                    getProjection() {
                        return this._assertInitialized(), this.googleMap.getProjection() || null
                    }
                    getStreetView() {
                        return this._assertInitialized(), this.googleMap.getStreetView()
                    }
                    getTilt() {
                        return this._assertInitialized(), this.googleMap.getTilt()
                    }
                    getZoom() {
                        return this._assertInitialized(), this.googleMap.getZoom()
                    }
                    get controls() {
                        return this._assertInitialized(), this.googleMap.controls
                    }
                    get data() {
                        return this._assertInitialized(), this.googleMap.data
                    }
                    get mapTypes() {
                        return this._assertInitialized(), this.googleMap.mapTypes
                    }
                    get overlayMapTypes() {
                        return this._assertInitialized(), this.googleMap.overlayMapTypes
                    }
                    _setSize() {
                        if (this._mapEl) {
                            const e = this._mapEl.style;
                            e.height = null === this.height ? "" : k(this.height) || w, e.width = null === this.width ? "" : k(this.width) || I
                        }
                    }
                    _combineOptions() {
                        const e = this._options || {};
                        return { ...e,
                            center: this._center || e.center || y.center,
                            zoom: this._zoom ? ? e.zoom ? ? y.zoom,
                            mapTypeId: this.mapTypeId || e.mapTypeId || y.mapTypeId
                        }
                    }
                    _assertInitialized() {}
                    static# e = this.\u0275fac = function(t) {
                        return new(t || s)(i.Y36(i.SBq), i.Y36(i.R0b), i.Y36(i.Lbi))
                    };
                    static# t = this.\u0275cmp = i.Xpm({
                        type: s,
                        selectors: [
                            ["google-map"]
                        ],
                        inputs: {
                            height: "height",
                            width: "width",
                            mapTypeId: "mapTypeId",
                            center: "center",
                            zoom: "zoom",
                            options: "options"
                        },
                        outputs: {
                            mapInitialized: "mapInitialized",
                            authFailure: "authFailure",
                            boundsChanged: "boundsChanged",
                            centerChanged: "centerChanged",
                            mapClick: "mapClick",
                            mapDblclick: "mapDblclick",
                            mapDrag: "mapDrag",
                            mapDragend: "mapDragend",
                            mapDragstart: "mapDragstart",
                            headingChanged: "headingChanged",
                            idle: "idle",
                            maptypeidChanged: "maptypeidChanged",
                            mapMousemove: "mapMousemove",
                            mapMouseout: "mapMouseout",
                            mapMouseover: "mapMouseover",
                            projectionChanged: "projectionChanged",
                            mapRightclick: "mapRightclick",
                            tilesloaded: "tilesloaded",
                            tiltChanged: "tiltChanged",
                            zoomChanged: "zoomChanged"
                        },
                        exportAs: ["googleMap"],
                        features: [i.TTD],
                        ngContentSelectors: C,
                        decls: 2,
                        vars: 0,
                        consts: [
                            [1, "map-container"]
                        ],
                        template: function(t, n) {
                            1 & t && (i.F$t(), i._UZ(0, "div", 0), i.Hsn(1))
                        },
                        encapsulation: 2,
                        changeDetection: 0
                    })
                }
                return s
            })();
            const Y = /([A-Za-z%]+)$/;

            function k(s) {
                return null == s ? "" : Y.test(s) ? s : `${s}px`
            }
            const N = {
                position: {
                    lat: 37.421995,
                    lng: -122.084092
                }
            };
            let v = (() => {
                    class s {
                        set title(e) {
                            this._title = e
                        }
                        set position(e) {
                            this._position = e
                        }
                        set label(e) {
                            this._label = e
                        }
                        set clickable(e) {
                            this._clickable = e
                        }
                        set options(e) {
                            this._options = e
                        }
                        set icon(e) {
                            this._icon = e
                        }
                        set visible(e) {
                            this._visible = e
                        }
                        constructor(e, t) {
                            this._googleMap = e, this._ngZone = t, this._eventManager = new d((0, i.f3M)(i.R0b)), this.animationChanged = this._eventManager.getLazyEmitter("animation_changed"), this.mapClick = this._eventManager.getLazyEmitter("click"), this.clickableChanged = this._eventManager.getLazyEmitter("clickable_changed"), this.cursorChanged = this._eventManager.getLazyEmitter("cursor_changed"), this.mapDblclick = this._eventManager.getLazyEmitter("dblclick"), this.mapDrag = this._eventManager.getLazyEmitter("drag"), this.mapDragend = this._eventManager.getLazyEmitter("dragend"), this.draggableChanged = this._eventManager.getLazyEmitter("draggable_changed"), this.mapDragstart = this._eventManager.getLazyEmitter("dragstart"), this.flatChanged = this._eventManager.getLazyEmitter("flat_changed"), this.iconChanged = this._eventManager.getLazyEmitter("icon_changed"), this.mapMousedown = this._eventManager.getLazyEmitter("mousedown"), this.mapMouseout = this._eventManager.getLazyEmitter("mouseout"), this.mapMouseover = this._eventManager.getLazyEmitter("mouseover"), this.mapMouseup = this._eventManager.getLazyEmitter("mouseup"), this.positionChanged = this._eventManager.getLazyEmitter("position_changed"), this.mapRightclick = this._eventManager.getLazyEmitter("rightclick"), this.shapeChanged = this._eventManager.getLazyEmitter("shape_changed"), this.titleChanged = this._eventManager.getLazyEmitter("title_changed"), this.visibleChanged = this._eventManager.getLazyEmitter("visible_changed"), this.zindexChanged = this._eventManager.getLazyEmitter("zindex_changed")
                        }
                        ngOnInit() {
                            this._googleMap._isBrowser && (this._ngZone.runOutsideAngular(() => {
                                this.marker = new google.maps.Marker(this._combineOptions())
                            }), this._assertInitialized(), this.marker.setMap(this._googleMap.googleMap), this._eventManager.setTarget(this.marker))
                        }
                        ngOnChanges(e) {
                            const {
                                marker: t,
                                _title: n,
                                _position: a,
                                _label: h,
                                _clickable: g,
                                _icon: f,
                                _visible: b
                            } = this;
                            t && (e.options && t.setOptions(this._combineOptions()), e.title && void 0 !== n && t.setTitle(n), e.position && a && t.setPosition(a), e.label && void 0 !== h && t.setLabel(h), e.clickable && void 0 !== g && t.setClickable(g), e.icon && f && t.setIcon(f), e.visible && void 0 !== b && t.setVisible(b))
                        }
                        ngOnDestroy() {
                            this._eventManager.destroy(), this.marker && this.marker.setMap(null)
                        }
                        getAnimation() {
                            return this._assertInitialized(), this.marker.getAnimation() || null
                        }
                        getClickable() {
                            return this._assertInitialized(), this.marker.getClickable()
                        }
                        getCursor() {
                            return this._assertInitialized(), this.marker.getCursor() || null
                        }
                        getDraggable() {
                            return this._assertInitialized(), !!this.marker.getDraggable()
                        }
                        getIcon() {
                            return this._assertInitialized(), this.marker.getIcon() || null
                        }
                        getLabel() {
                            return this._assertInitialized(), this.marker.getLabel() || null
                        }
                        getOpacity() {
                            return this._assertInitialized(), this.marker.getOpacity() || null
                        }
                        getPosition() {
                            return this._assertInitialized(), this.marker.getPosition() || null
                        }
                        getShape() {
                            return this._assertInitialized(), this.marker.getShape() || null
                        }
                        getTitle() {
                            return this._assertInitialized(), this.marker.getTitle() || null
                        }
                        getVisible() {
                            return this._assertInitialized(), this.marker.getVisible()
                        }
                        getZIndex() {
                            return this._assertInitialized(), this.marker.getZIndex() || null
                        }
                        getAnchor() {
                            return this._assertInitialized(), this.marker
                        }
                        _combineOptions() {
                            const e = this._options || N;
                            return { ...e,
                                title: this._title || e.title,
                                position: this._position || e.position,
                                label: this._label || e.label,
                                clickable: this._clickable ? ? e.clickable,
                                map: this._googleMap.googleMap,
                                icon: this._icon || e.icon,
                                visible: this._visible ? ? e.visible
                            }
                        }
                        _assertInitialized() {}
                        static# e = this.\u0275fac = function(t) {
                            return new(t || s)(i.Y36(l), i.Y36(i.R0b))
                        };
                        static# t = this.\u0275dir = i.lG2({
                            type: s,
                            selectors: [
                                ["map-marker"]
                            ],
                            inputs: {
                                title: "title",
                                position: "position",
                                label: "label",
                                clickable: "clickable",
                                options: "options",
                                icon: "icon",
                                visible: "visible"
                            },
                            outputs: {
                                animationChanged: "animationChanged",
                                mapClick: "mapClick",
                                clickableChanged: "clickableChanged",
                                cursorChanged: "cursorChanged",
                                mapDblclick: "mapDblclick",
                                mapDrag: "mapDrag",
                                mapDragend: "mapDragend",
                                draggableChanged: "draggableChanged",
                                mapDragstart: "mapDragstart",
                                flatChanged: "flatChanged",
                                iconChanged: "iconChanged",
                                mapMousedown: "mapMousedown",
                                mapMouseout: "mapMouseout",
                                mapMouseover: "mapMouseover",
                                mapMouseup: "mapMouseup",
                                positionChanged: "positionChanged",
                                mapRightclick: "mapRightclick",
                                shapeChanged: "shapeChanged",
                                titleChanged: "titleChanged",
                                visibleChanged: "visibleChanged",
                                zindexChanged: "zindexChanged"
                            },
                            exportAs: ["mapMarker"],
                            features: [i.TTD]
                        })
                    }
                    return s
                })(),
                ae = (() => {
                    class s {
                        static# e = this.\u0275fac = function(t) {
                            return new(t || s)
                        };
                        static# t = this.\u0275mod = i.oAB({
                            type: s
                        });
                        static# i = this.\u0275inj = i.cJS({})
                    }
                    return s
                })()
        }
    }
]);