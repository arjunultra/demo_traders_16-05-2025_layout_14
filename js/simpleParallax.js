(function (r, a) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = a())
    : typeof define == "function" && define.amd
    ? define(a)
    : ((r = typeof globalThis < "u" ? globalThis : r || self),
      (r.SimpleParallax = a()));
})(this, function () {
  "use strict";
  const r = (i) =>
      NodeList.prototype.isPrototypeOf(i) ||
      HTMLCollection.prototype.isPrototypeOf(i)
        ? Array.from(i)
        : typeof i == "string" || i instanceof String
        ? document.querySelectorAll(i)
        : [i],
    a = () => Element.prototype.closest && "IntersectionObserver" in window;
  class c {
    constructor() {
      this.positions = { top: 0, bottom: 0, height: 0 };
    }
    setViewportTop(e) {
      return (
        (this.positions.top = e ? e.scrollTop : window.pageYOffset),
        this.positions
      );
    }
    setViewportBottom() {
      return (
        (this.positions.bottom = this.positions.top + this.positions.height),
        this.positions
      );
    }
    setViewportAll(e) {
      return (
        (this.positions.top = e ? e.scrollTop : window.pageYOffset),
        (this.positions.height = e
          ? e.clientHeight
          : document.documentElement.clientHeight),
        (this.positions.bottom = this.positions.top + this.positions.height),
        this.positions
      );
    }
  }
  const s = new c(),
    l = (() => {
      const i =
        "transform webkitTransform mozTransform oTransform msTransform".split(
          " "
        );
      let e,
        t = 0;
      for (; e === void 0; )
        (e =
          document.createElement("div").style[i[t]] !== void 0 ? i[t] : void 0),
          (t += 1);
      return e;
    })(),
    m = (i) =>
      i.tagName.toLowerCase() !== "img" && i.tagName.toLowerCase() !== "picture"
        ? !0
        : !(
            !i ||
            !i.complete ||
            (typeof i.naturalWidth < "u" && i.naturalWidth === 0)
          );
  class p {
    constructor(e, t, o = !1) {
      (this.element = e),
        (this.elementContainer = e),
        (this.settings = t),
        (this.isVisible = !0),
        (this.isInit = !1),
        (this.oldTranslateValue = -1),
        (this.prefersReducedMotion = o),
        (this.init = this.init.bind(this)),
        (this.customWrapper =
          this.settings.customWrapper &&
          this.element.closest(this.settings.customWrapper)
            ? this.element.closest(this.settings.customWrapper)
            : null),
        !this.prefersReducedMotion &&
          (m(e)
            ? this.init()
            : this.element.addEventListener("load", () => {
                setTimeout(() => {
                  this.init(!0);
                }, 50);
              }));
    }
    init(e) {
      this.prefersReducedMotion ||
        this.isInit ||
        (e && (this.rangeMax = null),
        !this.element.closest(".simpleParallax") &&
          (this.settings.overflow === !1 && this.wrapElement(this.element),
          this.setTransformCSS(),
          this.getElementOffset(),
          this.intersectionObserver(),
          this.getTranslateValue(),
          this.animate(),
          this.settings.delay > 0
            ? setTimeout(() => {
                this.setTransitionCSS(),
                  this.elementContainer.classList.add(
                    "simple-parallax-initialized"
                  );
              }, 10)
            : this.elementContainer.classList.add(
                "simple-parallax-initialized"
              ),
          (this.isInit = !0)));
    }
    wrapElement() {
      const e = this.element.closest("picture") || this.element;
      let t = this.customWrapper || document.createElement("div");
      t.classList.add("simpleParallax"),
        (t.style.overflow = "hidden"),
        this.customWrapper ||
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (this.elementContainer = t);
    }
    unWrapElement() {
      const e = this.elementContainer;
      this.customWrapper
        ? (e.classList.remove("simpleParallax"), (e.style.overflow = ""))
        : e.replaceWith(...e.childNodes);
    }
    setTransformCSS() {
      this.settings.overflow === !1 &&
        (this.element.style[l] = `scale(${this.settings.scale})`),
        (this.element.style.willChange = "transform");
    }
    setTransitionCSS() {
      this.element.style.transition = `transform ${this.settings.delay}s ${this.settings.transition}`;
    }
    unSetStyle() {
      (this.element.style.willChange = ""),
        (this.element.style[l] = ""),
        (this.element.style.transition = "");
    }
    getElementOffset() {
      const e = this.elementContainer.getBoundingClientRect();
      if (
        ((this.elementHeight = e.height),
        (this.elementTop = e.top + s.positions.top),
        this.settings.customContainer)
      ) {
        const t = this.settings.customContainer.getBoundingClientRect();
        this.elementTop = e.top - t.top + s.positions.top;
      }
      this.elementBottom = this.elementHeight + this.elementTop;
    }
    buildThresholdList() {
      const e = [];
      for (let t = 1; t <= this.elementHeight; t++) {
        const o = t / this.elementHeight;
        e.push(o);
      }
      return e;
    }
    intersectionObserver() {
      const e = { root: null, threshold: this.buildThresholdList() };
      (this.observer = new IntersectionObserver(
        this.intersectionObserverCallback.bind(this),
        e
      )),
        this.observer.observe(this.element);
    }
    intersectionObserverCallback(e) {
      e.forEach((t) => {
        t.isIntersecting ? (this.isVisible = !0) : (this.isVisible = !1);
      });
    }
    checkIfVisible() {
      return (
        this.elementBottom > s.positions.top &&
        this.elementTop < s.positions.bottom
      );
    }
    getRangeMax() {
      const e = this.element.clientHeight;
      this.rangeMax = e * this.settings.scale - e;
    }
    getTranslateValue() {
      let e = (
        (s.positions.bottom - this.elementTop) /
        ((s.positions.height + this.elementHeight) / 100)
      ).toFixed(1);
      return (
        (e = Math.min(100, Math.max(0, e))),
        this.settings.maxTransition !== 0 &&
          e > this.settings.maxTransition &&
          (e = this.settings.maxTransition),
        this.oldPercentage === e ||
        (this.rangeMax || this.getRangeMax(),
        (this.translateValue = (
          (e / 100) * this.rangeMax -
          this.rangeMax / 2
        ).toFixed(0)),
        this.oldTranslateValue === this.translateValue)
          ? !1
          : ((this.oldPercentage = e),
            (this.oldTranslateValue = this.translateValue),
            !0)
      );
    }
    animate() {
      let e = 0,
        t = 0,
        o;
      (this.settings.orientation.includes("left") ||
        this.settings.orientation.includes("right")) &&
        (t = `${
          this.settings.orientation.includes("left")
            ? this.translateValue * -1
            : this.translateValue
        }px`),
        (this.settings.orientation.includes("up") ||
          this.settings.orientation.includes("down")) &&
          (e = `${
            this.settings.orientation.includes("up")
              ? this.translateValue * -1
              : this.translateValue
          }px`),
        this.settings.overflow === !1
          ? (o = `translate3d(${t}, ${e}, 0) scale(${this.settings.scale})`)
          : (o = `translate3d(${t}, ${e}, 0)`),
        (this.element.style[l] = o);
    }
  }
  let h = !1,
    n = [],
    u,
    d;
  class f {
    constructor(e, t) {
      e &&
        a() &&
        ((this.prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches),
        (this.reducedMotionMediaQuery = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        )),
        (this.handleReducedMotionChange =
          this.handleReducedMotionChange.bind(this)),
        this.reducedMotionMediaQuery.addEventListener(
          "change",
          this.handleReducedMotionChange
        ),
        !this.prefersReducedMotion &&
          ((this.elements = r(e)),
          (this.defaults = {
            delay: 0,
            orientation: "up",
            scale: 1.3,
            overflow: !1,
            transition: "cubic-bezier(0,0,0,1)",
            customContainer: "",
            customWrapper: "",
            maxTransition: 0,
          }),
          (this.settings = Object.assign(this.defaults, t)),
          this.settings.customContainer &&
            ([this.customContainer] = r(this.settings.customContainer)),
          (this.lastPosition = -1),
          (this.resizeIsDone = this.resizeIsDone.bind(this)),
          (this.refresh = this.refresh.bind(this)),
          (this.proceedRequestAnimationFrame =
            this.proceedRequestAnimationFrame.bind(this)),
          this.init()));
    }
    handleReducedMotionChange(e) {
      (this.prefersReducedMotion = e.matches),
        this.prefersReducedMotion ? this.destroy() : this.init();
    }
    init() {
      this.prefersReducedMotion ||
        (s.setViewportAll(this.customContainer),
        (n = [
          ...this.elements.map(
            (e) => new p(e, this.settings, this.prefersReducedMotion)
          ),
          ...n,
        ]),
        h ||
          (this.proceedRequestAnimationFrame(),
          window.addEventListener("resize", this.resizeIsDone),
          (h = !0)));
    }
    resizeIsDone() {
      clearTimeout(d), (d = setTimeout(this.refresh, 200));
    }
    proceedRequestAnimationFrame() {
      if (
        (s.setViewportTop(this.customContainer),
        this.lastPosition === s.positions.top)
      ) {
        u = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
        return;
      }
      s.setViewportBottom(),
        n.forEach((e) => {
          this.proceedElement(e);
        }),
        (u = window.requestAnimationFrame(this.proceedRequestAnimationFrame)),
        (this.lastPosition = s.positions.top);
    }
    proceedElement(e) {
      let t = !1;
      this.customContainer ? (t = e.checkIfVisible()) : (t = e.isVisible),
        t && e.getTranslateValue() && e.animate();
    }
    refresh() {
      s.setViewportAll(this.customContainer),
        n.forEach((e) => {
          e.getElementOffset(), e.getRangeMax();
        }),
        (this.lastPosition = -1);
    }
    destroy() {
      this.reducedMotionMediaQuery &&
        this.reducedMotionMediaQuery.removeEventListener(
          "change",
          this.handleReducedMotionChange
        );
      const e = [];
      (n = n.filter((t) =>
        this.elements && this.elements.includes(t.element) ? (e.push(t), !1) : t
      )),
        e.forEach((t) => {
          t.unSetStyle(),
            this.settings && this.settings.overflow === !1 && t.unWrapElement();
        }),
        n.length ||
          (window.cancelAnimationFrame(u),
          window.removeEventListener("resize", this.refresh),
          (h = !1));
    }
  }
  return f;
});
