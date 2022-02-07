var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
try {
  self["workbox:window:6.4.1"] && _();
} catch (n2) {
}
function n$6(n2, t2) {
  return new Promise(function(r2) {
    var e2 = new MessageChannel();
    e2.port1.onmessage = function(n3) {
      r2(n3.data);
    }, n2.postMessage(t2, [e2.port2]);
  });
}
function t$5(n2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var e2 = t2[r2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
  }
}
function r$3(n2, t2) {
  (t2 == null || t2 > n2.length) && (t2 = n2.length);
  for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
    e2[r2] = n2[r2];
  return e2;
}
function e$6(n2, t2) {
  var e2;
  if (typeof Symbol == "undefined" || n2[Symbol.iterator] == null) {
    if (Array.isArray(n2) || (e2 = function(n3, t3) {
      if (n3) {
        if (typeof n3 == "string")
          return r$3(n3, t3);
        var e3 = Object.prototype.toString.call(n3).slice(8, -1);
        return e3 === "Object" && n3.constructor && (e3 = n3.constructor.name), e3 === "Map" || e3 === "Set" ? Array.from(n3) : e3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? r$3(n3, t3) : void 0;
      }
    }(n2)) || t2 && n2 && typeof n2.length == "number") {
      e2 && (n2 = e2);
      var i2 = 0;
      return function() {
        return i2 >= n2.length ? { done: true } : { done: false, value: n2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e2 = n2[Symbol.iterator]()).next.bind(e2);
}
try {
  self["workbox:core:6.4.1"] && _();
} catch (n2) {
}
var i$4 = function() {
  var n2 = this;
  this.promise = new Promise(function(t2, r2) {
    n2.resolve = t2, n2.reject = r2;
  });
};
function o$5(n2, t2) {
  var r2 = location.href;
  return new URL(n2, r2).href === new URL(t2, r2).href;
}
var u$1 = function(n2, t2) {
  this.type = n2, Object.assign(this, t2);
};
function a$2(n2, t2, r2) {
  return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
}
function c$1() {
}
var f$1 = { type: "SKIP_WAITING" };
function s$4(n2, t2) {
  if (!t2)
    return n2 && n2.then ? n2.then(c$1) : Promise.resolve();
}
var v$1 = function(r2) {
  var e2, c2;
  function v2(n2, t2) {
    var e3, c3;
    return t2 === void 0 && (t2 = {}), (e3 = r2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new i$4(), e3.en = new i$4(), e3.on = new i$4(), e3.un = 0, e3.an = new Set(), e3.cn = function() {
      var n3 = e3.fn, t3 = n3.installing;
      e3.tn > 0 || !o$5(t3.scriptURL, e3.sn.toString()) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
    }, e3.ln = function(n3) {
      var t3 = e3.fn, r3 = n3.target, i2 = r3.state, o2 = r3 === e3.vn, a2 = { sw: r3, isExternal: o2, originalEvent: n3 };
      !o2 && e3.mn && (a2.isUpdate = true), e3.dispatchEvent(new u$1(i2, a2)), i2 === "installed" ? e3.wn = self.setTimeout(function() {
        i2 === "installed" && t3.waiting === r3 && e3.dispatchEvent(new u$1("waiting", a2));
      }, 200) : i2 === "activating" && (clearTimeout(e3.wn), o2 || e3.en.resolve(r3));
    }, e3.dn = function(n3) {
      var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
      e3.dispatchEvent(new u$1("controlling", { isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.mn })), r3 || e3.on.resolve(t3);
    }, e3.gn = (c3 = function(n3) {
      var t3 = n3.data, r3 = n3.ports, i2 = n3.source;
      return a$2(e3.getSW(), function() {
        e3.an.has(i2) && e3.dispatchEvent(new u$1("message", { data: t3, originalEvent: n3, ports: r3, sw: i2 }));
      });
    }, function() {
      for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
        n3[t3] = arguments[t3];
      try {
        return Promise.resolve(c3.apply(this, n3));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }), e3.sn = n2, e3.nn = t2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
  }
  c2 = r2, (e2 = v2).prototype = Object.create(c2.prototype), e2.prototype.constructor = e2, e2.__proto__ = c2;
  var h2, l2, w2 = v2.prototype;
  return w2.register = function(n2) {
    var t2 = (n2 === void 0 ? {} : n2).immediate, r3 = t2 !== void 0 && t2;
    try {
      var e3 = this;
      return function(n3, t3) {
        var r4 = n3();
        if (r4 && r4.then)
          return r4.then(t3);
        return t3(r4);
      }(function() {
        if (!r3 && document.readyState !== "complete")
          return s$4(new Promise(function(n3) {
            return window.addEventListener("load", n3);
          }));
      }, function() {
        return e3.mn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), a$2(e3.bn(), function(n3) {
          e3.fn = n3, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, { once: true }));
          var t3 = e3.fn.waiting;
          return t3 && o$5(t3.scriptURL, e3.sn.toString()) && (e3.hn = t3, Promise.resolve().then(function() {
            e3.dispatchEvent(new u$1("waiting", { sw: t3, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.dn), e3.fn;
        });
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w2.update = function() {
    try {
      return this.fn ? s$4(this.fn.update()) : void 0;
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w2.getSW = function() {
    return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
  }, w2.messageSW = function(t2) {
    try {
      return a$2(this.getSW(), function(r3) {
        return n$6(r3, t2);
      });
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w2.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n$6(this.fn.waiting, f$1);
  }, w2.pn = function() {
    var n2 = navigator.serviceWorker.controller;
    return n2 && o$5(n2.scriptURL, this.sn.toString()) ? n2 : void 0;
  }, w2.bn = function() {
    try {
      var n2 = this;
      return function(n3, t2) {
        try {
          var r3 = n3();
        } catch (n4) {
          return t2(n4);
        }
        if (r3 && r3.then)
          return r3.then(void 0, t2);
        return r3;
      }(function() {
        return a$2(navigator.serviceWorker.register(n2.sn, n2.nn), function(t2) {
          return n2.un = performance.now(), t2;
        });
      }, function(n3) {
        throw n3;
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, h2 = v2, (l2 = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t$5(h2.prototype, l2), v2;
}(function() {
  function n2() {
    this.Pn = new Map();
  }
  var t2 = n2.prototype;
  return t2.addEventListener = function(n3, t3) {
    this.Sn(n3).add(t3);
  }, t2.removeEventListener = function(n3, t3) {
    this.Sn(n3).delete(t3);
  }, t2.dispatchEvent = function(n3) {
    n3.target = this;
    for (var t3, r2 = e$6(this.Sn(n3.type)); !(t3 = r2()).done; ) {
      (0, t3.value)(n3);
    }
  }, t2.Sn = function(n3) {
    return this.Pn.has(n3) || this.Pn.set(n3, new Set()), this.Pn.get(n3);
  }, n2;
}());
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await n$6(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new v$1("./sw.js", { scope: "./", type: "classic" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r2) => {
      registration = r2;
      onRegistered == null ? void 0 : onRegistered(r2);
    }).catch((e2) => {
      onRegisterError == null ? void 0 : onRegisterError(e2);
    });
  }
  return updateServiceWorker;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$5 = Symbol(), n$5 = new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$5)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$5.get(this.cssText);
    return t$4 && e2 === void 0 && (n$5.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$4 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$5), r$2 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$5);
}, i$3 = (e2, n2) => {
  t$4 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$1 = t$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$4 = window.trustedTypes, r$1 = e$4 ? e$4.emptyScript : "", h$1 = window.reactiveElementPolyfillSupport, o$3 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r$1 : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$4 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$2 = { attribute: true, type: String, converter: o$3, reflect: false, hasChanged: n$4 };
class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.l) !== null && i2 !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Eh(s2, i2);
      e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$2) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$2;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S$1(i3));
    } else
      i2 !== void 0 && s2.push(S$1(i2));
    return s2;
  }
  static _$Eh(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this._$Eg) !== null && i2 !== void 0 ? i2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Et.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$3(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i2, s2 = l$2) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$3.toAttribute)(i2, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$3.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$4)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$E_ === void 0 && (this._$E_ = new Map()), this._$E_.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i3) => this[i3] = t3), this._$Et = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (t3) {
      throw i2 = false, this._$EU(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$E_ !== void 0 && (this._$E_.forEach((t3, i2) => this._$ES(i2, this[i2], t3)), this._$E_ = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$1.finalized = true, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = { mode: "open" }, h$1 == null || h$1({ ReactiveElement: a$1 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$3;
const i$2 = globalThis.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$3 = `lit$${(Math.random() + "").slice(9)}$`, o$2 = "?" + e$3, n$3 = `<${o$2}>`, l$1 = document, h = (t2 = "") => l$1.createComment(t2), r = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d = Array.isArray, u = (t2) => {
  var i2;
  return d(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _$1 = /'/g, m = /"/g, g = /^(?:script|style|textarea)$/i, p = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), $ = p(1), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), T = new WeakMap(), x = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$1.createTreeWalker(l$1, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, p2 = -1, $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); )
      $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _$1) : d2 === m || d2 === _$1 ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c ? s2 + n$3 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$3 + y) : s2 + e$3 + (p2 === -2 ? (l2.push(void 0), i3) : y);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class E {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = E.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e$3)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$3), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$3), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$2 ? i$2.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$2)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$3, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$3.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r(i2) ? void 0 : i2._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = P(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class V {
  constructor(t2, i2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$1).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i2 = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = P(this, t2, i2), r(t2) ? t2 === w || t2 == null || t2 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.S(t2) : u(t2) ? this.A(t2) : this.$(t2);
  }
  M(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  S(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t2 : this.S(l$1.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new V(o2, this), i3 = t3.p(this.options);
      t3.m(s2), this.S(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = T.get(t2.strings);
    return i2 === void 0 && T.set(t2.strings, i2 = new E(t2)), i2;
  }
  A(t2) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.M(h()), this.M(h()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = P(this, t2, i2, 0), n2 = !r(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r(h2) || h2 !== this._$AH[l2]), h2 === w ? t2 = w : t2 !== w && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.k(t2);
  }
  k(t2) {
    t2 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t2) {
    this.element[this.name] = t2 === w ? void 0 : t2;
  }
}
const k = i$2 ? i$2.emptyScript : "";
class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t2) {
    t2 && t2 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
}
class I extends S {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : w) === b)
      return;
    const e2 = this._$AH, o2 = t2 === w && e2 !== w || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w && (e2 === w || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t$3 = globalThis.litHtmlVersions) !== null && t$3 !== void 0 ? t$3 : globalThis.litHtmlVersions = []).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o$1;
class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = x(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l = globalThis.litElementHydrateSupport) === null || l === void 0 || l.call(globalThis, { LitElement: s });
const n$2 = globalThis.litElementPolyfillSupport;
n$2 == null || n$2({ LitElement: s });
((o$1 = globalThis.litElementVersions) !== null && o$1 !== void 0 ? o$1 : globalThis.litElementVersions = []).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const { kind: t2, elements: i2 } = e3;
  return { kind: t2, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  } };
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1 = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(n2) {
  n2.createProperty(e2.key, i2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e$2(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i$1(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$2(t2) {
  return e$2(__spreadProps(__spreadValues({}, t2), { state: true }));
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
((n = window.HTMLSlotElement) === null || n === void 0 ? void 0 : n.prototype.assignedElements) != null ? (o2, n2) => o2.assignedElements(n2) : (o2, n2) => o2.assignedNodes(n2).filter((o3) => o3.nodeType === Node.ELEMENT_NODE);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var localforage = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(module, exports) {
  (function(f2) {
    {
      module.exports = f2();
    }
  })(function() {
    return function e2(t2, n2, r2) {
      function s2(o3, u2) {
        if (!n2[o3]) {
          if (!t2[o3]) {
            var a2 = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u2 && a2)
              return a2(o3, true);
            if (i2)
              return i2(o3, true);
            var f2 = new Error("Cannot find module '" + o3 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          var l2 = n2[o3] = { exports: {} };
          t2[o3][0].call(l2.exports, function(e3) {
            var n3 = t2[o3][1][e3];
            return s2(n3 ? n3 : e3);
          }, l2, l2.exports, e2, t2, n2, r2);
        }
        return n2[o3].exports;
      }
      var i2 = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o2 = 0; o2 < r2.length; o2++)
        s2(r2[o2]);
      return s2;
    }({ 1: [function(_dereq_, module2, exports2) {
      (function(global2) {
        var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick);
            var element = global2.document.createTextNode("");
            observer.observe(element, {
              characterData: true
            });
            scheduleDrain = function() {
              element.data = called = ++called % 2;
            };
          } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
            var channel = new global2.MessageChannel();
            channel.port1.onmessage = nextTick;
            scheduleDrain = function() {
              channel.port2.postMessage(0);
            };
          } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
            scheduleDrain = function() {
              var scriptEl = global2.document.createElement("script");
              scriptEl.onreadystatechange = function() {
                nextTick();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };
              global2.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function() {
              setTimeout(nextTick, 0);
            };
          }
        }
        var draining;
        var queue = [];
        function nextTick() {
          draining = true;
          var i2, oldQueue;
          var len = queue.length;
          while (len) {
            oldQueue = queue;
            queue = [];
            i2 = -1;
            while (++i2 < len) {
              oldQueue[i2]();
            }
            len = queue.length;
          }
          draining = false;
        }
        module2.exports = immediate;
        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 2: [function(_dereq_, module2, exports2) {
      var immediate = _dereq_(1);
      function INTERNAL() {
      }
      var handlers = {};
      var REJECTED = ["REJECTED"];
      var FULFILLED = ["FULFILLED"];
      var PENDING = ["PENDING"];
      module2.exports = Promise2;
      function Promise2(resolver) {
        if (typeof resolver !== "function") {
          throw new TypeError("resolver must be a function");
        }
        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;
        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }
      Promise2.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      Promise2.prototype.then = function(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
          return this;
        }
        var promise = new this.constructor(INTERNAL);
        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
      };
      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;
        if (typeof onFulfilled === "function") {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }
        if (typeof onRejected === "function") {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }
      QueueItem.prototype.callFulfilled = function(value) {
        handlers.resolve(this.promise, value);
      };
      QueueItem.prototype.otherCallFulfilled = function(value) {
        unwrap(this.promise, this.onFulfilled, value);
      };
      QueueItem.prototype.callRejected = function(value) {
        handlers.reject(this.promise, value);
      };
      QueueItem.prototype.otherCallRejected = function(value) {
        unwrap(this.promise, this.onRejected, value);
      };
      function unwrap(promise, func, value) {
        immediate(function() {
          var returnValue;
          try {
            returnValue = func(value);
          } catch (e2) {
            return handlers.reject(promise, e2);
          }
          if (returnValue === promise) {
            handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }
      handlers.resolve = function(self2, value) {
        var result = tryCatch(getThen, value);
        if (result.status === "error") {
          return handlers.reject(self2, result.value);
        }
        var thenable = result.value;
        if (thenable) {
          safelyResolveThenable(self2, thenable);
        } else {
          self2.state = FULFILLED;
          self2.outcome = value;
          var i2 = -1;
          var len = self2.queue.length;
          while (++i2 < len) {
            self2.queue[i2].callFulfilled(value);
          }
        }
        return self2;
      };
      handlers.reject = function(self2, error) {
        self2.state = REJECTED;
        self2.outcome = error;
        var i2 = -1;
        var len = self2.queue.length;
        while (++i2 < len) {
          self2.queue[i2].callRejected(error);
        }
        return self2;
      };
      function getThen(obj) {
        var then = obj && obj.then;
        if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }
      function safelyResolveThenable(self2, thenable) {
        var called = false;
        function onError(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.reject(self2, value);
        }
        function onSuccess(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.resolve(self2, value);
        }
        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }
        var result = tryCatch(tryToUnwrap);
        if (result.status === "error") {
          onError(result.value);
        }
      }
      function tryCatch(func, value) {
        var out = {};
        try {
          out.value = func(value);
          out.status = "success";
        } catch (e2) {
          out.status = "error";
          out.value = e2;
        }
        return out;
      }
      Promise2.resolve = resolve;
      function resolve(value) {
        if (value instanceof this) {
          return value;
        }
        return handlers.resolve(new this(INTERNAL), value);
      }
      Promise2.reject = reject;
      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }
      Promise2.all = all;
      function all(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var values = new Array(len);
        var resolved = 0;
        var i2 = -1;
        var promise = new this(INTERNAL);
        while (++i2 < len) {
          allResolver(iterable[i2], i2);
        }
        return promise;
        function allResolver(value, i3) {
          self2.resolve(value).then(resolveFromAll, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
          function resolveFromAll(outValue) {
            values[i3] = outValue;
            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }
      Promise2.race = race;
      function race(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var i2 = -1;
        var promise = new this(INTERNAL);
        while (++i2 < len) {
          resolver(iterable[i2]);
        }
        return promise;
        function resolver(value) {
          self2.resolve(value).then(function(response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, { "1": 1 }], 3: [function(_dereq_, module2, exports2) {
      (function(global2) {
        if (typeof global2.Promise !== "function") {
          global2.Promise = _dereq_(2);
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "2": 2 }], 4: [function(_dereq_, module2, exports2) {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function getIDB() {
        try {
          if (typeof indexedDB !== "undefined") {
            return indexedDB;
          }
          if (typeof webkitIndexedDB !== "undefined") {
            return webkitIndexedDB;
          }
          if (typeof mozIndexedDB !== "undefined") {
            return mozIndexedDB;
          }
          if (typeof OIndexedDB !== "undefined") {
            return OIndexedDB;
          }
          if (typeof msIndexedDB !== "undefined") {
            return msIndexedDB;
          }
        } catch (e2) {
          return;
        }
      }
      var idb = getIDB();
      function isIndexedDBValid() {
        try {
          if (!idb || !idb.open) {
            return false;
          }
          var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined";
        } catch (e2) {
          return false;
        }
      }
      function createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e2) {
          if (e2.name !== "TypeError") {
            throw e2;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i2 = 0; i2 < parts.length; i2 += 1) {
            builder.append(parts[i2]);
          }
          return builder.getBlob(properties.type);
        }
      }
      if (typeof Promise === "undefined") {
        _dereq_(3);
      }
      var Promise$1 = Promise;
      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }
      function executeTwoCallbacks(promise, callback, errorCallback) {
        if (typeof callback === "function") {
          promise.then(callback);
        }
        if (typeof errorCallback === "function") {
          promise["catch"](errorCallback);
        }
      }
      function normalizeKey(key2) {
        if (typeof key2 !== "string") {
          console.warn(key2 + " used as a key, but it is not a string.");
          key2 = String(key2);
        }
        return key2;
      }
      function getCallback() {
        if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
          return arguments[arguments.length - 1];
        }
      }
      var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
      var supportsBlobs = void 0;
      var dbContexts = {};
      var toString = Object.prototype.toString;
      var READ_ONLY = "readonly";
      var READ_WRITE = "readwrite";
      function _binStringToArrayBuffer(bin) {
        var length2 = bin.length;
        var buf = new ArrayBuffer(length2);
        var arr = new Uint8Array(buf);
        for (var i2 = 0; i2 < length2; i2++) {
          arr[i2] = bin.charCodeAt(i2);
        }
        return buf;
      }
      function _checkBlobSupportWithoutCaching(idb2) {
        return new Promise$1(function(resolve) {
          var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob([""]);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
          txn.onabort = function(e2) {
            e2.preventDefault();
            e2.stopPropagation();
            resolve(false);
          };
          txn.oncomplete = function() {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
        })["catch"](function() {
          return false;
        });
      }
      function _checkBlobSupport(idb2) {
        if (typeof supportsBlobs === "boolean") {
          return Promise$1.resolve(supportsBlobs);
        }
        return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }
      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = {};
        deferredOperation.promise = new Promise$1(function(resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
        });
        dbContext.deferredOperations.push(deferredOperation);
        if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
        } else {
          dbContext.dbReady = dbContext.dbReady.then(function() {
            return deferredOperation.promise;
          });
        }
      }
      function _advanceReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
        }
      }
      function _rejectReadiness(dbInfo, err) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
        }
      }
      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function(resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
          if (dbInfo.db) {
            if (upgradeNeeded) {
              _deferReadiness(dbInfo);
              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }
          var dbArgs = [dbInfo.name];
          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }
          var openreq = idb.open.apply(idb, dbArgs);
          if (upgradeNeeded) {
            openreq.onupgradeneeded = function(e2) {
              var db = openreq.result;
              try {
                db.createObjectStore(dbInfo.storeName);
                if (e2.oldVersion <= 1) {
                  db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                }
              } catch (ex) {
                if (ex.name === "ConstraintError") {
                  console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e2.oldVersion + " to version " + e2.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }
          openreq.onerror = function(e2) {
            e2.preventDefault();
            reject(openreq.error);
          };
          openreq.onsuccess = function() {
            var db = openreq.result;
            db.onversionchange = function(e2) {
              e2.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
          };
        });
      }
      function _getOriginalConnection(dbInfo) {
        return _getConnection(dbInfo, false);
      }
      function _getUpgradedConnection(dbInfo) {
        return _getConnection(dbInfo, true);
      }
      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }
        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
        var isDowngrade = dbInfo.version < dbInfo.db.version;
        var isUpgrade = dbInfo.version > dbInfo.db.version;
        if (isDowngrade) {
          if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
          }
          dbInfo.version = dbInfo.db.version;
        }
        if (isUpgrade || isNewStore) {
          if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }
          return true;
        }
        return false;
      }
      function _encodeBlob(blob) {
        return new Promise$1(function(resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function(e2) {
            var base64 = btoa(e2.target.result || "");
            resolve({
              __local_forage_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };
          reader.readAsBinaryString(blob);
        });
      }
      function _decodeBlob(encodedBlob) {
        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
        return createBlob([arrayBuff], { type: encodedBlob.type });
      }
      function _isEncodedBlob(value) {
        return value && value.__local_forage_encoded_blob;
      }
      function _fullyReady(callback) {
        var self2 = this;
        var promise = self2._initReady().then(function() {
          var dbContext = dbContexts[self2._dbInfo.name];
          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });
        executeTwoCallbacks(promise, callback, callback);
        return promise;
      }
      function _tryReconnect(dbInfo) {
        _deferReadiness(dbInfo);
        var dbContext = dbContexts[dbInfo.name];
        var forages = dbContext.forages;
        for (var i2 = 0; i2 < forages.length; i2++) {
          var forage = forages[i2];
          if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
          }
        }
        dbInfo.db = null;
        return _getOriginalConnection(dbInfo).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          for (var i3 = 0; i3 < forages.length; i3++) {
            forages[i3]._dbInfo.db = db;
          }
        })["catch"](function(err) {
          _rejectReadiness(dbInfo, err);
          throw err;
        });
      }
      function createTransaction(dbInfo, mode, callback, retries) {
        if (retries === void 0) {
          retries = 1;
        }
        try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
        } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
            return Promise$1.resolve().then(function() {
              if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                if (dbInfo.db) {
                  dbInfo.version = dbInfo.db.version + 1;
                }
                return _getUpgradedConnection(dbInfo);
              }
            }).then(function() {
              return _tryReconnect(dbInfo).then(function() {
                createTransaction(dbInfo, mode, callback, retries - 1);
              });
            })["catch"](callback);
          }
          callback(err);
        }
      }
      function createDbContext() {
        return {
          forages: [],
          db: null,
          dbReady: null,
          deferredOperations: []
        };
      }
      function _initStorage(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i2 in options) {
            dbInfo[i2] = options[i2];
          }
        }
        var dbContext = dbContexts[dbInfo.name];
        if (!dbContext) {
          dbContext = createDbContext();
          dbContexts[dbInfo.name] = dbContext;
        }
        dbContext.forages.push(self2);
        if (!self2._initReady) {
          self2._initReady = self2.ready;
          self2.ready = _fullyReady;
        }
        var initPromises = [];
        function ignoreErrors() {
          return Promise$1.resolve();
        }
        for (var j = 0; j < dbContext.forages.length; j++) {
          var forage = dbContext.forages[j];
          if (forage !== self2) {
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
        }
        var forages = dbContext.forages.slice(0);
        return Promise$1.all(initPromises).then(function() {
          dbInfo.db = dbContext.db;
          return _getOriginalConnection(dbInfo);
        }).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          self2._dbInfo = dbInfo;
          for (var k2 = 0; k2 < forages.length; k2++) {
            var forage2 = forages[k2];
            if (forage2 !== self2) {
              forage2._dbInfo.db = dbInfo.db;
              forage2._dbInfo.version = dbInfo.version;
            }
          }
        });
      }
      function getItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.get(key2);
                req.onsuccess = function() {
                  var value = req.result;
                  if (value === void 0) {
                    value = null;
                  }
                  if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                  }
                  resolve(value);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.openCursor();
                var iterationNumber = 1;
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (cursor) {
                    var value = cursor.value;
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    var result = iterator(value, cursor.key, iterationNumber++);
                    if (result !== void 0) {
                      resolve(result);
                    } else {
                      cursor["continue"]();
                    }
                  } else {
                    resolve();
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          var dbInfo;
          self2.ready().then(function() {
            dbInfo = self2._dbInfo;
            if (toString.call(value) === "[object Blob]") {
              return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                if (blobSupport) {
                  return value;
                }
                return _encodeBlob(value);
              });
            }
            return value;
          }).then(function(value2) {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                if (value2 === null) {
                  value2 = void 0;
                }
                var req = store2.put(value2, key2);
                transaction.oncomplete = function() {
                  if (value2 === void 0) {
                    value2 = null;
                  }
                  resolve(value2);
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2["delete"](key2);
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onerror = function() {
                  reject(req.error);
                };
                transaction.onabort = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.clear();
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.count();
                req.onsuccess = function() {
                  resolve(req.result);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key(n2, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          if (n2 < 0) {
            resolve(null);
            return;
          }
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var advanced = false;
                var req = store2.openKeyCursor();
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  if (n2 === 0) {
                    resolve(cursor.key);
                  } else {
                    if (!advanced) {
                      advanced = true;
                      cursor.advance(n2);
                    } else {
                      resolve(cursor.key);
                    }
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.openKeyCursor();
                var keys2 = [];
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(keys2);
                    return;
                  }
                  keys2.push(cursor.key);
                  cursor["continue"]();
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
          var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i2 = 0; i2 < forages.length; i2++) {
              forages[i2]._dbInfo.db = db;
            }
            return db;
          });
          if (!options.storeName) {
            promise = dbPromise.then(function(db) {
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i2 = 0; i2 < forages.length; i2++) {
                var forage = forages[i2];
                forage._dbInfo.db = null;
              }
              var dropDBPromise = new Promise$1(function(resolve, reject) {
                var req = idb.deleteDatabase(options.name);
                req.onerror = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  reject(req.error);
                };
                req.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  resolve(db2);
                };
              });
              return dropDBPromise.then(function(db2) {
                dbContext.db = db2;
                for (var i3 = 0; i3 < forages.length; i3++) {
                  var _forage = forages[i3];
                  _advanceReadiness(_forage._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          } else {
            promise = dbPromise.then(function(db) {
              if (!db.objectStoreNames.contains(options.storeName)) {
                return;
              }
              var newVersion = db.version + 1;
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i2 = 0; i2 < forages.length; i2++) {
                var forage = forages[i2];
                forage._dbInfo.db = null;
                forage._dbInfo.version = newVersion;
              }
              var dropObjectPromise = new Promise$1(function(resolve, reject) {
                var req = idb.open(options.name, newVersion);
                req.onerror = function(err) {
                  var db2 = req.result;
                  db2.close();
                  reject(err);
                };
                req.onupgradeneeded = function() {
                  var db2 = req.result;
                  db2.deleteObjectStore(options.storeName);
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  db2.close();
                  resolve(db2);
                };
              });
              return dropObjectPromise.then(function(db2) {
                dbContext.db = db2;
                for (var j = 0; j < forages.length; j++) {
                  var _forage2 = forages[j];
                  _forage2._dbInfo.db = db2;
                  _advanceReadiness(_forage2._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          }
        }
        executeCallback(promise, callback);
        return promise;
      }
      var asyncStorage = {
        _driver: "asyncStorage",
        _initStorage,
        _support: isIndexedDBValid(),
        iterate,
        getItem,
        setItem,
        removeItem,
        clear,
        length,
        key,
        keys,
        dropInstance
      };
      function isWebSQLValid() {
        return typeof openDatabase === "function";
      }
      var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var BLOB_TYPE_PREFIX = "~~local_forage_type~";
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      var SERIALIZED_MARKER = "__lfsc__:";
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      var TYPE_ARRAYBUFFER = "arbf";
      var TYPE_BLOB = "blob";
      var TYPE_INT8ARRAY = "si08";
      var TYPE_UINT8ARRAY = "ui08";
      var TYPE_UINT8CLAMPEDARRAY = "uic8";
      var TYPE_INT16ARRAY = "si16";
      var TYPE_INT32ARRAY = "si32";
      var TYPE_UINT16ARRAY = "ur16";
      var TYPE_UINT32ARRAY = "ui32";
      var TYPE_FLOAT32ARRAY = "fl32";
      var TYPE_FLOAT64ARRAY = "fl64";
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      var toString$1 = Object.prototype.toString;
      function stringToBuffer(serializedString) {
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        var i2;
        var p2 = 0;
        var encoded1, encoded2, encoded3, encoded4;
        if (serializedString[serializedString.length - 1] === "=") {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === "=") {
            bufferLength--;
          }
        }
        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);
        for (i2 = 0; i2 < len; i2 += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i2]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i2 + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i2 + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i2 + 3]);
          bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
      }
      function bufferToString(buffer) {
        var bytes = new Uint8Array(buffer);
        var base64String = "";
        var i2;
        for (i2 = 0; i2 < bytes.length; i2 += 3) {
          base64String += BASE_CHARS[bytes[i2] >> 2];
          base64String += BASE_CHARS[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
          base64String += BASE_CHARS[bytes[i2 + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + "=";
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + "==";
        }
        return base64String;
      }
      function serialize(value, callback) {
        var valueType = "";
        if (value) {
          valueType = toString$1.call(value);
        }
        if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
          var buffer;
          var marker = SERIALIZED_MARKER;
          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;
            if (valueType === "[object Int8Array]") {
              marker += TYPE_INT8ARRAY;
            } else if (valueType === "[object Uint8Array]") {
              marker += TYPE_UINT8ARRAY;
            } else if (valueType === "[object Uint8ClampedArray]") {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === "[object Int16Array]") {
              marker += TYPE_INT16ARRAY;
            } else if (valueType === "[object Uint16Array]") {
              marker += TYPE_UINT16ARRAY;
            } else if (valueType === "[object Int32Array]") {
              marker += TYPE_INT32ARRAY;
            } else if (valueType === "[object Uint32Array]") {
              marker += TYPE_UINT32ARRAY;
            } else if (valueType === "[object Float32Array]") {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === "[object Float64Array]") {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error("Failed to get type for BinaryArray"));
            }
          }
          callback(marker + bufferToString(buffer));
        } else if (valueType === "[object Blob]") {
          var fileReader = new FileReader();
          fileReader.onload = function() {
            var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };
          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e2) {
            console.error("Couldn't convert value into a JSON string: ", value);
            callback(null, e2);
          }
        }
      }
      function deserialize(value) {
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        }
        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType;
        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }
        var buffer = stringToBuffer(serializedString);
        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;
          case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
          default:
            throw new Error("Unkown type: " + type);
        }
      }
      var localforageSerializer = {
        serialize,
        deserialize,
        stringToBuffer,
        bufferToString
      };
      function createDbTable(t2, dbInfo, callback, errorCallback) {
        t2.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
      }
      function _initStorage$1(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i2 in options) {
            dbInfo[i2] = typeof options[i2] !== "string" ? options[i2].toString() : options[i2];
          }
        }
        var dbInfoPromise = new Promise$1(function(resolve, reject) {
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e2) {
            return reject(e2);
          }
          dbInfo.db.transaction(function(t2) {
            createDbTable(t2, dbInfo, function() {
              self2._dbInfo = dbInfo;
              resolve();
            }, function(t3, error) {
              reject(error);
            });
          }, reject);
        });
        dbInfo.serializer = localforageSerializer;
        return dbInfoPromise;
      }
      function tryExecuteSql(t2, dbInfo, sqlStatement, args, callback, errorCallback) {
        t2.executeSql(sqlStatement, args, callback, function(t3, error) {
          if (error.code === error.SYNTAX_ERR) {
            t3.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t4, results) {
              if (!results.rows.length) {
                createDbTable(t4, dbInfo, function() {
                  t4.executeSql(sqlStatement, args, callback, errorCallback);
                }, errorCallback);
              } else {
                errorCallback(t4, error);
              }
            }, errorCallback);
          } else {
            errorCallback(t3, error);
          }
        }, errorCallback);
      }
      function getItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t3, results) {
                var result = results.rows.length ? results.rows.item(0).value : null;
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }
                resolve(result);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$1(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t3, results) {
                var rows = results.rows;
                var length2 = rows.length;
                for (var i2 = 0; i2 < length2; i2++) {
                  var item = rows.item(i2);
                  var result = item.value;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  result = iterator(result, item.key, i2 + 1);
                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }
                resolve();
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function _setItem(key2, value, callback, retriesLeft) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function(t2) {
                  tryExecuteSql(t2, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                    resolve(originalValue);
                  }, function(t3, error2) {
                    reject(error2);
                  });
                }, function(sqlError) {
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    if (retriesLeft > 0) {
                      resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                      return;
                    }
                    reject(sqlError);
                  }
                });
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$1(key2, value, callback) {
        return _setItem.apply(this, [key2, value, callback, 1]);
      }
      function removeItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                resolve();
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                resolve();
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t3, results) {
                var result = results.rows.item(0).c;
                resolve(result);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$1(n2, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n2 + 1], function(t3, results) {
                var result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t3, results) {
                var keys2 = [];
                for (var i2 = 0; i2 < results.rows.length; i2++) {
                  keys2.push(results.rows.item(i2).key);
                }
                resolve(keys2);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getAllStoreNames(db) {
        return new Promise$1(function(resolve, reject) {
          db.transaction(function(t2) {
            t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t3, results) {
              var storeNames = [];
              for (var i2 = 0; i2 < results.rows.length; i2++) {
                storeNames.push(results.rows.item(i2).name);
              }
              resolve({
                db,
                storeNames
              });
            }, function(t3, error) {
              reject(error);
            });
          }, function(sqlError) {
            reject(sqlError);
          });
        });
      }
      function dropInstance$1(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            var db;
            if (options.name === currentConfig.name) {
              db = self2._dbInfo.db;
            } else {
              db = openDatabase(options.name, "", "", 0);
            }
            if (!options.storeName) {
              resolve(getAllStoreNames(db));
            } else {
              resolve({
                db,
                storeNames: [options.storeName]
              });
            }
          }).then(function(operationInfo) {
            return new Promise$1(function(resolve, reject) {
              operationInfo.db.transaction(function(t2) {
                function dropTable(storeName) {
                  return new Promise$1(function(resolve2, reject2) {
                    t2.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                      resolve2();
                    }, function(t3, error) {
                      reject2(error);
                    });
                  });
                }
                var operations = [];
                for (var i2 = 0, len = operationInfo.storeNames.length; i2 < len; i2++) {
                  operations.push(dropTable(operationInfo.storeNames[i2]));
                }
                Promise$1.all(operations).then(function() {
                  resolve();
                })["catch"](function(e2) {
                  reject(e2);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var webSQLStorage = {
        _driver: "webSQLStorage",
        _initStorage: _initStorage$1,
        _support: isWebSQLValid(),
        iterate: iterate$1,
        getItem: getItem$1,
        setItem: setItem$1,
        removeItem: removeItem$1,
        clear: clear$1,
        length: length$1,
        key: key$1,
        keys: keys$1,
        dropInstance: dropInstance$1
      };
      function isLocalStorageValid() {
        try {
          return typeof localStorage !== "undefined" && "setItem" in localStorage && !!localStorage.setItem;
        } catch (e2) {
          return false;
        }
      }
      function _getKeyPrefix(options, defaultConfig) {
        var keyPrefix = options.name + "/";
        if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + "/";
        }
        return keyPrefix;
      }
      function checkIfLocalStorageThrows() {
        var localStorageTestKey = "_localforage_support_test";
        try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);
          return false;
        } catch (e2) {
          return true;
        }
      }
      function _isLocalStorageUsable() {
        return !checkIfLocalStorageThrows() || localStorage.length > 0;
      }
      function _initStorage$2(options) {
        var self2 = this;
        var dbInfo = {};
        if (options) {
          for (var i2 in options) {
            dbInfo[i2] = options[i2];
          }
        }
        dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
        if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
        }
        self2._dbInfo = dbInfo;
        dbInfo.serializer = localforageSerializer;
        return Promise$1.resolve();
      }
      function clear$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var keyPrefix = self2._dbInfo.keyPrefix;
          for (var i2 = localStorage.length - 1; i2 >= 0; i2--) {
            var key2 = localStorage.key(i2);
            if (key2.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key2);
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key2);
          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$2(iterator, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length2 = localStorage.length;
          var iterationNumber = 1;
          for (var i2 = 0; i2 < length2; i2++) {
            var key2 = localStorage.key(i2);
            if (key2.indexOf(keyPrefix) !== 0) {
              continue;
            }
            var value = localStorage.getItem(key2);
            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }
            value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
            if (value !== void 0) {
              return value;
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$2(n2, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result;
          try {
            result = localStorage.key(n2);
          } catch (error) {
            result = null;
          }
          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var length2 = localStorage.length;
          var keys2 = [];
          for (var i2 = 0; i2 < length2; i2++) {
            var itemKey = localStorage.key(i2);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
              keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
          }
          return keys2;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$2(callback) {
        var self2 = this;
        var promise = self2.keys().then(function(keys2) {
          return keys2.length;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key2);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$2(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          if (value === void 0) {
            value = null;
          }
          var originalValue = value;
          return new Promise$1(function(resolve, reject) {
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                  resolve(originalValue);
                } catch (e2) {
                  if (e2.name === "QuotaExceededError" || e2.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    reject(e2);
                  }
                  reject(e2);
                }
              }
            });
          });
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance$2(options, callback) {
        callback = getCallback.apply(this, arguments);
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            if (!options.storeName) {
              resolve(options.name + "/");
            } else {
              resolve(_getKeyPrefix(options, self2._defaultConfig));
            }
          }).then(function(keyPrefix) {
            for (var i2 = localStorage.length - 1; i2 >= 0; i2--) {
              var key2 = localStorage.key(i2);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var localStorageWrapper = {
        _driver: "localStorageWrapper",
        _initStorage: _initStorage$2,
        _support: isLocalStorageValid(),
        iterate: iterate$2,
        getItem: getItem$2,
        setItem: setItem$2,
        removeItem: removeItem$2,
        clear: clear$2,
        length: length$2,
        key: key$2,
        keys: keys$2,
        dropInstance: dropInstance$2
      };
      var sameValue = function sameValue2(x2, y) {
        return x2 === y || typeof x2 === "number" && typeof y === "number" && isNaN(x2) && isNaN(y);
      };
      var includes = function includes2(array, searchElement) {
        var len = array.length;
        var i2 = 0;
        while (i2 < len) {
          if (sameValue(array[i2], searchElement)) {
            return true;
          }
          i2++;
        }
        return false;
      };
      var isArray = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      var DefinedDrivers = {};
      var DriverSupport = {};
      var DefaultDrivers = {
        INDEXEDDB: asyncStorage,
        WEBSQL: webSQLStorage,
        LOCALSTORAGE: localStorageWrapper
      };
      var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
      var OptionalDriverMethods = ["dropInstance"];
      var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
      var DefaultConfig = {
        description: "",
        driver: DefaultDriverOrder.slice(),
        name: "localforage",
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function callWhenReady(localForageInstance, libraryMethod) {
        localForageInstance[libraryMethod] = function() {
          var _args = arguments;
          return localForageInstance.ready().then(function() {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
        };
      }
      function extend() {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (arg) {
            for (var _key in arg) {
              if (arg.hasOwnProperty(_key)) {
                if (isArray(arg[_key])) {
                  arguments[0][_key] = arg[_key].slice();
                } else {
                  arguments[0][_key] = arg[_key];
                }
              }
            }
          }
        }
        return arguments[0];
      }
      var LocalForage = function() {
        function LocalForage2(options) {
          _classCallCheck(this, LocalForage2);
          for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
              var driver = DefaultDrivers[driverTypeKey];
              var driverName = driver._driver;
              this[driverTypeKey] = driverName;
              if (!DefinedDrivers[driverName]) {
                this.defineDriver(driver);
              }
            }
          }
          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;
          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver)["catch"](function() {
          });
        }
        LocalForage2.prototype.config = function config2(options) {
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
            if (this._ready) {
              return new Error("Can't call config() after localforage has been used.");
            }
            for (var i2 in options) {
              if (i2 === "storeName") {
                options[i2] = options[i2].replace(/\W/g, "_");
              }
              if (i2 === "version" && typeof options[i2] !== "number") {
                return new Error("Database version must be a number.");
              }
              this._config[i2] = options[i2];
            }
            if ("driver" in options && options.driver) {
              return this.setDriver(this._config.driver);
            }
            return true;
          } else if (typeof options === "string") {
            return this._config[options];
          } else {
            return this._config;
          }
        };
        LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function(resolve, reject) {
            try {
              var driverName = driverObject._driver;
              var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!driverObject._driver) {
                reject(complianceError);
                return;
              }
              var driverMethods = LibraryMethods.concat("_initStorage");
              for (var i2 = 0, len = driverMethods.length; i2 < len; i2++) {
                var driverMethodName = driverMethods[i2];
                var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                  reject(complianceError);
                  return;
                }
              }
              var configureMissingMethods = function configureMissingMethods2() {
                var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                  return function() {
                    var error = new Error("Method " + methodName + " is not implemented by the current driver");
                    var promise2 = Promise$1.reject(error);
                    executeCallback(promise2, arguments[arguments.length - 1]);
                    return promise2;
                  };
                };
                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                  var optionalDriverMethod = OptionalDriverMethods[_i];
                  if (!driverObject[optionalDriverMethod]) {
                    driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                  }
                }
              };
              configureMissingMethods();
              var setDriverSupport = function setDriverSupport2(support) {
                if (DefinedDrivers[driverName]) {
                  console.info("Redefining LocalForage driver: " + driverName);
                }
                DefinedDrivers[driverName] = driverObject;
                DriverSupport[driverName] = support;
                resolve();
              };
              if ("_support" in driverObject) {
                if (driverObject._support && typeof driverObject._support === "function") {
                  driverObject._support().then(setDriverSupport, reject);
                } else {
                  setDriverSupport(!!driverObject._support);
                }
              } else {
                setDriverSupport(true);
              }
            } catch (e2) {
              reject(e2);
            }
          });
          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
        };
        LocalForage2.prototype.driver = function driver() {
          return this._driver || null;
        };
        LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
        };
        LocalForage2.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
        };
        LocalForage2.prototype.ready = function ready(callback) {
          var self2 = this;
          var promise = self2._driverSet.then(function() {
            if (self2._ready === null) {
              self2._ready = self2._initDriver();
            }
            return self2._ready;
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        };
        LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self2 = this;
          if (!isArray(drivers)) {
            drivers = [drivers];
          }
          var supportedDrivers = this._getSupportedDrivers(drivers);
          function setDriverToConfig() {
            self2._config.driver = self2.driver();
          }
          function extendSelfWithDriver(driver) {
            self2._extend(driver);
            setDriverToConfig();
            self2._ready = self2._initStorage(self2._config);
            return self2._ready;
          }
          function initDriver(supportedDrivers2) {
            return function() {
              var currentDriverIndex = 0;
              function driverPromiseLoop() {
                while (currentDriverIndex < supportedDrivers2.length) {
                  var driverName = supportedDrivers2[currentDriverIndex];
                  currentDriverIndex++;
                  self2._dbInfo = null;
                  self2._ready = null;
                  return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                }
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              }
              return driverPromiseLoop();
            };
          }
          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          this._driverSet = oldDriverSetDone.then(function() {
            var driverName = supportedDrivers[0];
            self2._dbInfo = null;
            self2._ready = null;
            return self2.getDriver(driverName).then(function(driver) {
              self2._driver = driver._driver;
              setDriverToConfig();
              self2._wrapLibraryMethodsWithReady();
              self2._initDriver = initDriver(supportedDrivers);
            });
          })["catch"](function() {
            setDriverToConfig();
            var error = new Error("No available storage method found.");
            self2._driverSet = Promise$1.reject(error);
            return self2._driverSet;
          });
          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
        };
        LocalForage2.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
        };
        LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
        };
        LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];
          for (var i2 = 0, len = drivers.length; i2 < len; i2++) {
            var driverName = drivers[i2];
            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }
          return supportedDrivers;
        };
        LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          for (var i2 = 0, len = LibraryMethods.length; i2 < len; i2++) {
            callWhenReady(this, LibraryMethods[i2]);
          }
        };
        LocalForage2.prototype.createInstance = function createInstance(options) {
          return new LocalForage2(options);
        };
        return LocalForage2;
      }();
      var localforage_js = new LocalForage();
      module2.exports = localforage_js;
    }, { "3": 3 }] }, {}, [4])(4);
  });
})(localforage);
var localForage = localforage.exports;
let nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += "_";
    } else {
      id += "-";
    }
  }
  return id;
};
const words = [
  "cigar",
  "rebut",
  "sissy",
  "humph",
  "awake",
  "blush",
  "focal",
  "evade",
  "naval",
  "serve",
  "heath",
  "dwarf",
  "model",
  "karma",
  "stink",
  "grade",
  "quiet",
  "bench",
  "abate",
  "feign",
  "major",
  "death",
  "fresh",
  "crust",
  "stool",
  "colon",
  "abase",
  "marry",
  "react",
  "batty",
  "pride",
  "floss",
  "helix",
  "croak",
  "staff",
  "paper",
  "unfed",
  "whelp",
  "trawl",
  "outdo",
  "adobe",
  "crazy",
  "sower",
  "repay",
  "digit",
  "crate",
  "cluck",
  "spike",
  "mimic",
  "pound",
  "maxim",
  "linen",
  "unmet",
  "flesh",
  "booby",
  "forth",
  "first",
  "stand",
  "belly",
  "ivory",
  "seedy",
  "print",
  "yearn",
  "drain",
  "bribe",
  "stout",
  "panel",
  "crass",
  "flume",
  "offal",
  "agree",
  "error",
  "swirl",
  "argue",
  "bleed",
  "delta",
  "flick",
  "totem",
  "wooer",
  "front",
  "shrub",
  "parry",
  "biome",
  "lapel",
  "start",
  "greet",
  "goner",
  "golem",
  "lusty",
  "loopy",
  "round",
  "audit",
  "lying",
  "gamma",
  "labor",
  "islet",
  "civic",
  "forge",
  "corny",
  "moult",
  "basic",
  "salad",
  "agate",
  "spicy",
  "spray",
  "essay",
  "fjord",
  "spend",
  "kebab",
  "guild",
  "aback",
  "motor",
  "alone",
  "hatch",
  "hyper",
  "thumb",
  "dowry",
  "ought",
  "belch",
  "dutch",
  "pilot",
  "tweed",
  "comet",
  "jaunt",
  "enema",
  "steed",
  "abyss",
  "growl",
  "fling",
  "dozen",
  "boozy",
  "erode",
  "world",
  "gouge",
  "click",
  "briar",
  "great",
  "altar",
  "pulpy",
  "blurt",
  "coast",
  "duchy",
  "groin",
  "fixer",
  "group",
  "rogue",
  "badly",
  "smart",
  "pithy",
  "gaudy",
  "chill",
  "heron",
  "vodka",
  "finer",
  "surer",
  "radio",
  "rouge",
  "perch",
  "retch",
  "wrote",
  "clock",
  "tilde",
  "store",
  "prove",
  "bring",
  "solve",
  "cheat",
  "grime",
  "exult",
  "usher",
  "epoch",
  "triad",
  "break",
  "rhino",
  "viral",
  "conic",
  "masse",
  "sonic",
  "vital",
  "trace",
  "using",
  "peach",
  "champ",
  "baton",
  "brake",
  "pluck",
  "craze",
  "gripe",
  "weary",
  "picky",
  "acute",
  "ferry",
  "aside",
  "tapir",
  "troll",
  "unify",
  "rebus",
  "boost",
  "truss",
  "siege",
  "tiger",
  "banal",
  "slump",
  "crank",
  "gorge",
  "query",
  "drink",
  "favor",
  "abbey",
  "tangy",
  "panic",
  "solar",
  "shire",
  "proxy",
  "point",
  "robot",
  "prick",
  "wince",
  "crimp",
  "knoll",
  "sugar",
  "whack",
  "mount",
  "perky",
  "could",
  "wrung",
  "light",
  "those",
  "moist",
  "shard",
  "pleat",
  "aloft",
  "skill",
  "elder",
  "frame",
  "humor",
  "pause",
  "ulcer",
  "ultra",
  "robin",
  "cynic",
  "agora",
  "aroma",
  "caulk",
  "shake",
  "pupal",
  "dodge",
  "swill",
  "tacit",
  "other",
  "thorn",
  "trove",
  "bloke",
  "vivid",
  "spill",
  "chant",
  "choke",
  "rupee",
  "nasty",
  "mourn",
  "ahead",
  "brine",
  "cloth",
  "hoard",
  "sweet",
  "month",
  "lapse",
  "watch",
  "today",
  "focus",
  "smelt",
  "tease",
  "cater",
  "movie",
  "lynch",
  "saute",
  "allow",
  "renew",
  "their",
  "slosh",
  "purge",
  "chest",
  "depot",
  "epoxy",
  "nymph",
  "found",
  "shall",
  "harry",
  "stove",
  "lowly",
  "snout",
  "trope",
  "fewer",
  "shawl",
  "natal",
  "fibre",
  "comma",
  "foray",
  "scare",
  "stair",
  "black",
  "squad",
  "royal",
  "chunk",
  "mince",
  "slave",
  "shame",
  "cheek",
  "ample",
  "flair",
  "foyer",
  "cargo",
  "oxide",
  "plant",
  "olive",
  "inert",
  "askew",
  "heist",
  "shown",
  "zesty",
  "hasty",
  "trash",
  "fella",
  "larva",
  "forgo",
  "story",
  "hairy",
  "train",
  "homer",
  "badge",
  "midst",
  "canny",
  "fetus",
  "butch",
  "farce",
  "slung",
  "tipsy",
  "metal",
  "yield",
  "delve",
  "being",
  "scour",
  "glass",
  "gamer",
  "scrap",
  "money",
  "hinge",
  "album",
  "vouch",
  "asset",
  "tiara",
  "crept",
  "bayou",
  "atoll",
  "manor",
  "creak",
  "showy",
  "phase",
  "froth",
  "depth",
  "gloom",
  "flood",
  "trait",
  "girth",
  "piety",
  "payer",
  "goose",
  "float",
  "donor",
  "atone",
  "primo",
  "apron",
  "blown",
  "cacao",
  "loser",
  "input",
  "gloat",
  "awful",
  "brink",
  "smite",
  "beady",
  "rusty",
  "retro",
  "droll",
  "gawky",
  "hutch",
  "pinto",
  "gaily",
  "egret",
  "lilac",
  "sever",
  "field",
  "fluff",
  "hydro",
  "flack",
  "agape",
  "wench",
  "voice",
  "stead",
  "stalk",
  "berth",
  "madam",
  "night",
  "bland",
  "liver",
  "wedge",
  "augur",
  "roomy",
  "wacky",
  "flock",
  "angry",
  "bobby",
  "trite",
  "aphid",
  "tryst",
  "midge",
  "power",
  "elope",
  "cinch",
  "motto",
  "stomp",
  "upset",
  "bluff",
  "cramp",
  "quart",
  "coyly",
  "youth",
  "rhyme",
  "buggy",
  "alien",
  "smear",
  "unfit",
  "patty",
  "cling",
  "glean",
  "label",
  "hunky",
  "khaki",
  "poker",
  "gruel",
  "twice",
  "twang",
  "shrug",
  "treat",
  "unlit",
  "waste",
  "merit",
  "woven",
  "octal",
  "needy",
  "clown",
  "widow",
  "irony",
  "ruder",
  "gauze",
  "chief",
  "onset",
  "prize",
  "fungi",
  "charm",
  "gully",
  "inter",
  "whoop",
  "taunt",
  "leery",
  "class",
  "theme",
  "lofty",
  "tibia",
  "booze",
  "alpha",
  "thyme",
  "eclat",
  "doubt",
  "parer",
  "chute",
  "stick",
  "trice",
  "alike",
  "sooth",
  "recap",
  "saint",
  "liege",
  "glory",
  "grate",
  "admit",
  "brisk",
  "soggy",
  "usurp",
  "scald",
  "scorn",
  "leave",
  "twine",
  "sting",
  "bough",
  "marsh",
  "sloth",
  "dandy",
  "vigor",
  "howdy",
  "enjoy",
  "valid",
  "ionic",
  "equal",
  "unset",
  "floor",
  "catch",
  "spade",
  "stein",
  "exist",
  "quirk",
  "denim",
  "grove",
  "spiel",
  "mummy",
  "fault",
  "foggy",
  "flout",
  "carry",
  "sneak",
  "libel",
  "waltz",
  "aptly",
  "piney",
  "inept",
  "aloud",
  "photo",
  "dream",
  "stale",
  "vomit",
  "ombre",
  "fanny",
  "unite",
  "snarl",
  "baker",
  "there",
  "glyph",
  "pooch",
  "hippy",
  "spell",
  "folly",
  "louse",
  "gulch",
  "vault",
  "godly",
  "threw",
  "fleet",
  "grave",
  "inane",
  "shock",
  "crave",
  "spite",
  "valve",
  "skimp",
  "claim",
  "rainy",
  "musty",
  "pique",
  "daddy",
  "quasi",
  "arise",
  "aging",
  "valet",
  "opium",
  "avert",
  "stuck",
  "recut",
  "mulch",
  "genre",
  "plume",
  "rifle",
  "count",
  "incur",
  "total",
  "wrest",
  "mocha",
  "deter",
  "study",
  "lover",
  "safer",
  "rivet",
  "funny",
  "smoke",
  "mound",
  "undue",
  "sedan",
  "pagan",
  "swine",
  "guile",
  "gusty",
  "equip",
  "tough",
  "canoe",
  "chaos",
  "covet",
  "human",
  "udder",
  "lunch",
  "blast",
  "stray",
  "manga",
  "melee",
  "lefty",
  "quick",
  "paste",
  "given",
  "octet",
  "risen",
  "groan",
  "leaky",
  "grind",
  "carve",
  "loose",
  "sadly",
  "spilt",
  "apple",
  "slack",
  "honey",
  "final",
  "sheen",
  "eerie",
  "minty",
  "slick",
  "derby",
  "wharf",
  "spelt",
  "coach",
  "erupt",
  "singe",
  "price",
  "spawn",
  "fairy",
  "jiffy",
  "filmy",
  "stack",
  "chose",
  "sleep",
  "ardor",
  "nanny",
  "niece",
  "woozy",
  "handy",
  "grace",
  "ditto",
  "stank",
  "cream",
  "usual",
  "diode",
  "valor",
  "angle",
  "ninja",
  "muddy",
  "chase",
  "reply",
  "prone",
  "spoil",
  "heart",
  "shade",
  "diner",
  "arson",
  "onion",
  "sleet",
  "dowel",
  "couch",
  "palsy",
  "bowel",
  "smile",
  "evoke",
  "creek",
  "lance",
  "eagle",
  "idiot",
  "siren",
  "built",
  "embed",
  "award",
  "dross",
  "annul",
  "goody",
  "frown",
  "patio",
  "laden",
  "humid",
  "elite",
  "lymph",
  "edify",
  "might",
  "reset",
  "visit",
  "gusto",
  "purse",
  "vapor",
  "crock",
  "write",
  "sunny",
  "loath",
  "chaff",
  "slide",
  "queer",
  "venom",
  "stamp",
  "sorry",
  "still",
  "acorn",
  "aping",
  "pushy",
  "tamer",
  "hater",
  "mania",
  "awoke",
  "brawn",
  "swift",
  "exile",
  "birch",
  "lucky",
  "freer",
  "risky",
  "ghost",
  "plier",
  "lunar",
  "winch",
  "snare",
  "nurse",
  "house",
  "borax",
  "nicer",
  "lurch",
  "exalt",
  "about",
  "savvy",
  "toxin",
  "tunic",
  "pried",
  "inlay",
  "chump",
  "lanky",
  "cress",
  "eater",
  "elude",
  "cycle",
  "kitty",
  "boule",
  "moron",
  "tenet",
  "place",
  "lobby",
  "plush",
  "vigil",
  "index",
  "blink",
  "clung",
  "qualm",
  "croup",
  "clink",
  "juicy",
  "stage",
  "decay",
  "nerve",
  "flier",
  "shaft",
  "crook",
  "clean",
  "china",
  "ridge",
  "vowel",
  "gnome",
  "snuck",
  "icing",
  "spiny",
  "rigor",
  "snail",
  "flown",
  "rabid",
  "prose",
  "thank",
  "poppy",
  "budge",
  "fiber",
  "moldy",
  "dowdy",
  "kneel",
  "track",
  "caddy",
  "quell",
  "dumpy",
  "paler",
  "swore",
  "rebar",
  "scuba",
  "splat",
  "flyer",
  "horny",
  "mason",
  "doing",
  "ozone",
  "amply",
  "molar",
  "ovary",
  "beset",
  "queue",
  "cliff",
  "magic",
  "truce",
  "sport",
  "fritz",
  "edict",
  "twirl",
  "verse",
  "llama",
  "eaten",
  "range",
  "whisk",
  "hovel",
  "rehab",
  "macaw",
  "sigma",
  "spout",
  "verve",
  "sushi",
  "dying",
  "fetid",
  "brain",
  "buddy",
  "thump",
  "scion",
  "candy",
  "chord",
  "basin",
  "march",
  "crowd",
  "arbor",
  "gayly",
  "musky",
  "stain",
  "dally",
  "bless",
  "bravo",
  "stung",
  "title",
  "ruler",
  "kiosk",
  "blond",
  "ennui",
  "layer",
  "fluid",
  "tatty",
  "score",
  "cutie",
  "zebra",
  "barge",
  "matey",
  "bluer",
  "aider",
  "shook",
  "river",
  "privy",
  "betel",
  "frisk",
  "bongo",
  "begun",
  "azure",
  "weave",
  "genie",
  "sound",
  "glove",
  "braid",
  "scope",
  "wryly",
  "rover",
  "assay",
  "ocean",
  "bloom",
  "irate",
  "later",
  "woken",
  "silky",
  "wreck",
  "dwelt",
  "slate",
  "smack",
  "solid",
  "amaze",
  "hazel",
  "wrist",
  "jolly",
  "globe",
  "flint",
  "rouse",
  "civil",
  "vista",
  "relax",
  "cover",
  "alive",
  "beech",
  "jetty",
  "bliss",
  "vocal",
  "often",
  "dolly",
  "eight",
  "joker",
  "since",
  "event",
  "ensue",
  "shunt",
  "diver",
  "poser",
  "worst",
  "sweep",
  "alley",
  "creed",
  "anime",
  "leafy",
  "bosom",
  "dunce",
  "stare",
  "pudgy",
  "waive",
  "choir",
  "stood",
  "spoke",
  "outgo",
  "delay",
  "bilge",
  "ideal",
  "clasp",
  "seize",
  "hotly",
  "laugh",
  "sieve",
  "block",
  "meant",
  "grape",
  "noose",
  "hardy",
  "shied",
  "drawl",
  "daisy",
  "putty",
  "strut",
  "burnt",
  "tulip",
  "crick",
  "idyll",
  "vixen",
  "furor",
  "geeky",
  "cough",
  "naive",
  "shoal",
  "stork",
  "bathe",
  "aunty",
  "check",
  "prime",
  "brass",
  "outer",
  "furry",
  "razor",
  "elect",
  "evict",
  "imply",
  "demur",
  "quota",
  "haven",
  "cavil",
  "swear",
  "crump",
  "dough",
  "gavel",
  "wagon",
  "salon",
  "nudge",
  "harem",
  "pitch",
  "sworn",
  "pupil",
  "excel",
  "stony",
  "cabin",
  "unzip",
  "queen",
  "trout",
  "polyp",
  "earth",
  "storm",
  "until",
  "taper",
  "enter",
  "child",
  "adopt",
  "minor",
  "fatty",
  "husky",
  "brave",
  "filet",
  "slime",
  "glint",
  "tread",
  "steal",
  "regal",
  "guest",
  "every",
  "murky",
  "share",
  "spore",
  "hoist",
  "buxom",
  "inner",
  "otter",
  "dimly",
  "level",
  "sumac",
  "donut",
  "stilt",
  "arena",
  "sheet",
  "scrub",
  "fancy",
  "slimy",
  "pearl",
  "silly",
  "porch",
  "dingo",
  "sepia",
  "amble",
  "shady",
  "bread",
  "friar",
  "reign",
  "dairy",
  "quill",
  "cross",
  "brood",
  "tuber",
  "shear",
  "posit",
  "blank",
  "villa",
  "shank",
  "piggy",
  "freak",
  "which",
  "among",
  "fecal",
  "shell",
  "would",
  "algae",
  "large",
  "rabbi",
  "agony",
  "amuse",
  "bushy",
  "copse",
  "swoon",
  "knife",
  "pouch",
  "ascot",
  "plane",
  "crown",
  "urban",
  "snide",
  "relay",
  "abide",
  "viola",
  "rajah",
  "straw",
  "dilly",
  "crash",
  "amass",
  "third",
  "trick",
  "tutor",
  "woody",
  "blurb",
  "grief",
  "disco",
  "where",
  "sassy",
  "beach",
  "sauna",
  "comic",
  "clued",
  "creep",
  "caste",
  "graze",
  "snuff",
  "frock",
  "gonad",
  "drunk",
  "prong",
  "lurid",
  "steel",
  "halve",
  "buyer",
  "vinyl",
  "utile",
  "smell",
  "adage",
  "worry",
  "tasty",
  "local",
  "trade",
  "finch",
  "ashen",
  "modal",
  "gaunt",
  "clove",
  "enact",
  "adorn",
  "roast",
  "speck",
  "sheik",
  "missy",
  "grunt",
  "snoop",
  "party",
  "touch",
  "mafia",
  "emcee",
  "array",
  "south",
  "vapid",
  "jelly",
  "skulk",
  "angst",
  "tubal",
  "lower",
  "crest",
  "sweat",
  "cyber",
  "adore",
  "tardy",
  "swami",
  "notch",
  "groom",
  "roach",
  "hitch",
  "young",
  "align",
  "ready",
  "frond",
  "strap",
  "puree",
  "realm",
  "venue",
  "swarm",
  "offer",
  "seven",
  "dryer",
  "diary",
  "dryly",
  "drank",
  "acrid",
  "heady",
  "theta",
  "junto",
  "pixie",
  "quoth",
  "bonus",
  "shalt",
  "penne",
  "amend",
  "datum",
  "build",
  "piano",
  "shelf",
  "lodge",
  "suing",
  "rearm",
  "coral",
  "ramen",
  "worth",
  "psalm",
  "infer",
  "overt",
  "mayor",
  "ovoid",
  "glide",
  "usage",
  "poise",
  "randy",
  "chuck",
  "prank",
  "fishy",
  "tooth",
  "ether",
  "drove",
  "idler",
  "swath",
  "stint",
  "while",
  "begat",
  "apply",
  "slang",
  "tarot",
  "radar",
  "credo",
  "aware",
  "canon",
  "shift",
  "timer",
  "bylaw",
  "serum",
  "three",
  "steak",
  "iliac",
  "shirk",
  "blunt",
  "puppy",
  "penal",
  "joist",
  "bunny",
  "shape",
  "beget",
  "wheel",
  "adept",
  "stunt",
  "stole",
  "topaz",
  "chore",
  "fluke",
  "afoot",
  "bloat",
  "bully",
  "dense",
  "caper",
  "sneer",
  "boxer",
  "jumbo",
  "lunge",
  "space",
  "avail",
  "short",
  "slurp",
  "loyal",
  "flirt",
  "pizza",
  "conch",
  "tempo",
  "droop",
  "plate",
  "bible",
  "plunk",
  "afoul",
  "savoy",
  "steep",
  "agile",
  "stake",
  "dwell",
  "knave",
  "beard",
  "arose",
  "motif",
  "smash",
  "broil",
  "glare",
  "shove",
  "baggy",
  "mammy",
  "swamp",
  "along",
  "rugby",
  "wager",
  "quack",
  "squat",
  "snaky",
  "debit",
  "mange",
  "skate",
  "ninth",
  "joust",
  "tramp",
  "spurn",
  "medal",
  "micro",
  "rebel",
  "flank",
  "learn",
  "nadir",
  "maple",
  "comfy",
  "remit",
  "gruff",
  "ester",
  "least",
  "mogul",
  "fetch",
  "cause",
  "oaken",
  "aglow",
  "meaty",
  "gaffe",
  "shyly",
  "racer",
  "prowl",
  "thief",
  "stern",
  "poesy",
  "rocky",
  "tweet",
  "waist",
  "spire",
  "grope",
  "havoc",
  "patsy",
  "truly",
  "forty",
  "deity",
  "uncle",
  "swish",
  "giver",
  "preen",
  "bevel",
  "lemur",
  "draft",
  "slope",
  "annoy",
  "lingo",
  "bleak",
  "ditty",
  "curly",
  "cedar",
  "dirge",
  "grown",
  "horde",
  "drool",
  "shuck",
  "crypt",
  "cumin",
  "stock",
  "gravy",
  "locus",
  "wider",
  "breed",
  "quite",
  "chafe",
  "cache",
  "blimp",
  "deign",
  "fiend",
  "logic",
  "cheap",
  "elide",
  "rigid",
  "false",
  "renal",
  "pence",
  "rowdy",
  "shoot",
  "blaze",
  "envoy",
  "posse",
  "brief",
  "never",
  "abort",
  "mouse",
  "mucky",
  "sulky",
  "fiery",
  "media",
  "trunk",
  "yeast",
  "clear",
  "skunk",
  "scalp",
  "bitty",
  "cider",
  "koala",
  "duvet",
  "segue",
  "creme",
  "super",
  "grill",
  "after",
  "owner",
  "ember",
  "reach",
  "nobly",
  "empty",
  "speed",
  "gipsy",
  "recur",
  "smock",
  "dread",
  "merge",
  "burst",
  "kappa",
  "amity",
  "shaky",
  "hover",
  "carol",
  "snort",
  "synod",
  "faint",
  "haunt",
  "flour",
  "chair",
  "detox",
  "shrew",
  "tense",
  "plied",
  "quark",
  "burly",
  "novel",
  "waxen",
  "stoic",
  "jerky",
  "blitz",
  "beefy",
  "lyric",
  "hussy",
  "towel",
  "quilt",
  "below",
  "bingo",
  "wispy",
  "brash",
  "scone",
  "toast",
  "easel",
  "saucy",
  "value",
  "spice",
  "honor",
  "route",
  "sharp",
  "bawdy",
  "radii",
  "skull",
  "phony",
  "issue",
  "lager",
  "swell",
  "urine",
  "gassy",
  "trial",
  "flora",
  "upper",
  "latch",
  "wight",
  "brick",
  "retry",
  "holly",
  "decal",
  "grass",
  "shack",
  "dogma",
  "mover",
  "defer",
  "sober",
  "optic",
  "crier",
  "vying",
  "nomad",
  "flute",
  "hippo",
  "shark",
  "drier",
  "obese",
  "bugle",
  "tawny",
  "chalk",
  "feast",
  "ruddy",
  "pedal",
  "scarf",
  "cruel",
  "bleat",
  "tidal",
  "slush",
  "semen",
  "windy",
  "dusty",
  "sally",
  "igloo",
  "nerdy",
  "jewel",
  "shone",
  "whale",
  "hymen",
  "abuse",
  "fugue",
  "elbow",
  "crumb",
  "pansy",
  "welsh",
  "syrup",
  "terse",
  "suave",
  "gamut",
  "swung",
  "drake",
  "freed",
  "afire",
  "shirt",
  "grout",
  "oddly",
  "tithe",
  "plaid",
  "dummy",
  "broom",
  "blind",
  "torch",
  "enemy",
  "again",
  "tying",
  "pesky",
  "alter",
  "gazer",
  "noble",
  "ethos",
  "bride",
  "extol",
  "decor",
  "hobby",
  "beast",
  "idiom",
  "utter",
  "these",
  "sixth",
  "alarm",
  "erase",
  "elegy",
  "spunk",
  "piper",
  "scaly",
  "scold",
  "hefty",
  "chick",
  "sooty",
  "canal",
  "whiny",
  "slash",
  "quake",
  "joint",
  "swept",
  "prude",
  "heavy",
  "wield",
  "femme",
  "lasso",
  "maize",
  "shale",
  "screw",
  "spree",
  "smoky",
  "whiff",
  "scent",
  "glade",
  "spent",
  "prism",
  "stoke",
  "riper",
  "orbit",
  "cocoa",
  "guilt",
  "humus",
  "shush",
  "table",
  "smirk",
  "wrong",
  "noisy",
  "alert",
  "shiny",
  "elate",
  "resin",
  "whole",
  "hunch",
  "pixel",
  "polar",
  "hotel",
  "sword",
  "cleat",
  "mango",
  "rumba",
  "puffy",
  "filly",
  "billy",
  "leash",
  "clout",
  "dance",
  "ovate",
  "facet",
  "chili",
  "paint",
  "liner",
  "curio",
  "salty",
  "audio",
  "snake",
  "fable",
  "cloak",
  "navel",
  "spurt",
  "pesto",
  "balmy",
  "flash",
  "unwed",
  "early",
  "churn",
  "weedy",
  "stump",
  "lease",
  "witty",
  "wimpy",
  "spoof",
  "saner",
  "blend",
  "salsa",
  "thick",
  "warty",
  "manic",
  "blare",
  "squib",
  "spoon",
  "probe",
  "crepe",
  "knack",
  "force",
  "debut",
  "order",
  "haste",
  "teeth",
  "agent",
  "widen",
  "icily",
  "slice",
  "ingot",
  "clash",
  "juror",
  "blood",
  "abode",
  "throw",
  "unity",
  "pivot",
  "slept",
  "troop",
  "spare",
  "sewer",
  "parse",
  "morph",
  "cacti",
  "tacky",
  "spool",
  "demon",
  "moody",
  "annex",
  "begin",
  "fuzzy",
  "patch",
  "water",
  "lumpy",
  "admin",
  "omega",
  "limit",
  "tabby",
  "macho",
  "aisle",
  "skiff",
  "basis",
  "plank",
  "verge",
  "botch",
  "crawl",
  "lousy",
  "slain",
  "cubic",
  "raise",
  "wrack",
  "guide",
  "foist",
  "cameo",
  "under",
  "actor",
  "revue",
  "fraud",
  "harpy",
  "scoop",
  "climb",
  "refer",
  "olden",
  "clerk",
  "debar",
  "tally",
  "ethic",
  "cairn",
  "tulle",
  "ghoul",
  "hilly",
  "crude",
  "apart",
  "scale",
  "older",
  "plain",
  "sperm",
  "briny",
  "abbot",
  "rerun",
  "quest",
  "crisp",
  "bound",
  "befit",
  "drawn",
  "suite",
  "itchy",
  "cheer",
  "bagel",
  "guess",
  "broad",
  "axiom",
  "chard",
  "caput",
  "leant",
  "harsh",
  "curse",
  "proud",
  "swing",
  "opine",
  "taste",
  "lupus",
  "gumbo",
  "miner",
  "green",
  "chasm",
  "lipid",
  "topic",
  "armor",
  "brush",
  "crane",
  "mural",
  "abled",
  "habit",
  "bossy",
  "maker",
  "dusky",
  "dizzy",
  "lithe",
  "brook",
  "jazzy",
  "fifty",
  "sense",
  "giant",
  "surly",
  "legal",
  "fatal",
  "flunk",
  "began",
  "prune",
  "small",
  "slant",
  "scoff",
  "torus",
  "ninny",
  "covey",
  "viper",
  "taken",
  "moral",
  "vogue",
  "owing",
  "token",
  "entry",
  "booth",
  "voter",
  "chide",
  "elfin",
  "ebony",
  "neigh",
  "minim",
  "melon",
  "kneed",
  "decoy",
  "voila",
  "ankle",
  "arrow",
  "mushy",
  "tribe",
  "cease",
  "eager",
  "birth",
  "graph",
  "odder",
  "terra",
  "weird",
  "tried",
  "clack",
  "color",
  "rough",
  "weigh",
  "uncut",
  "ladle",
  "strip",
  "craft",
  "minus",
  "dicey",
  "titan",
  "lucid",
  "vicar",
  "dress",
  "ditch",
  "gypsy",
  "pasta",
  "taffy",
  "flame",
  "swoop",
  "aloof",
  "sight",
  "broke",
  "teary",
  "chart",
  "sixty",
  "wordy",
  "sheer",
  "leper",
  "nosey",
  "bulge",
  "savor",
  "clamp",
  "funky",
  "foamy",
  "toxic",
  "brand",
  "plumb",
  "dingy",
  "butte",
  "drill",
  "tripe",
  "bicep",
  "tenor",
  "krill",
  "worse",
  "drama",
  "hyena",
  "think",
  "ratio",
  "cobra",
  "basil",
  "scrum",
  "bused",
  "phone",
  "court",
  "camel",
  "proof",
  "heard",
  "angel",
  "petal",
  "pouty",
  "throb",
  "maybe",
  "fetal",
  "sprig",
  "spine",
  "shout",
  "cadet",
  "macro",
  "dodgy",
  "satyr",
  "rarer",
  "binge",
  "trend",
  "nutty",
  "leapt",
  "amiss",
  "split",
  "myrrh",
  "width",
  "sonar",
  "tower",
  "baron",
  "fever",
  "waver",
  "spark",
  "belie",
  "sloop",
  "expel",
  "smote",
  "baler",
  "above",
  "north",
  "wafer",
  "scant",
  "frill",
  "awash",
  "snack",
  "scowl",
  "frail",
  "drift",
  "limbo",
  "fence",
  "motel",
  "ounce",
  "wreak",
  "revel",
  "talon",
  "prior",
  "knelt",
  "cello",
  "flake",
  "debug",
  "anode",
  "crime",
  "salve",
  "scout",
  "imbue",
  "pinky",
  "stave",
  "vague",
  "chock",
  "fight",
  "video",
  "stone",
  "teach",
  "cleft",
  "frost",
  "prawn",
  "booty",
  "twist",
  "apnea",
  "stiff",
  "plaza",
  "ledge",
  "tweak",
  "board",
  "grant",
  "medic",
  "bacon",
  "cable",
  "brawl",
  "slunk",
  "raspy",
  "forum",
  "drone",
  "women",
  "mucus",
  "boast",
  "toddy",
  "coven",
  "tumor",
  "truer",
  "wrath",
  "stall",
  "steam",
  "axial",
  "purer",
  "daily",
  "trail",
  "niche",
  "mealy",
  "juice",
  "nylon",
  "plump",
  "merry",
  "flail",
  "papal",
  "wheat",
  "berry",
  "cower",
  "erect",
  "brute",
  "leggy",
  "snipe",
  "sinew",
  "skier",
  "penny",
  "jumpy",
  "rally",
  "umbra",
  "scary",
  "modem",
  "gross",
  "avian",
  "greed",
  "satin",
  "tonic",
  "parka",
  "sniff",
  "livid",
  "stark",
  "trump",
  "giddy",
  "reuse",
  "taboo",
  "avoid",
  "quote",
  "devil",
  "liken",
  "gloss",
  "gayer",
  "beret",
  "noise",
  "gland",
  "dealt",
  "sling",
  "rumor",
  "opera",
  "thigh",
  "tonga",
  "flare",
  "wound",
  "white",
  "bulky",
  "etude",
  "horse",
  "circa",
  "paddy",
  "inbox",
  "fizzy",
  "grain",
  "exert",
  "surge",
  "gleam",
  "belle",
  "salvo",
  "crush",
  "fruit",
  "sappy",
  "taker",
  "tract",
  "ovine",
  "spiky",
  "frank",
  "reedy",
  "filth",
  "spasm",
  "heave",
  "mambo",
  "right",
  "clank",
  "trust",
  "lumen",
  "borne",
  "spook",
  "sauce",
  "amber",
  "lathe",
  "carat",
  "corer",
  "dirty",
  "slyly",
  "affix",
  "alloy",
  "taint",
  "sheep",
  "kinky",
  "wooly",
  "mauve",
  "flung",
  "yacht",
  "fried",
  "quail",
  "brunt",
  "grimy",
  "curvy",
  "cagey",
  "rinse",
  "deuce",
  "state",
  "grasp",
  "milky",
  "bison",
  "graft",
  "sandy",
  "baste",
  "flask",
  "hedge",
  "girly",
  "swash",
  "boney",
  "coupe",
  "endow",
  "abhor",
  "welch",
  "blade",
  "tight",
  "geese",
  "miser",
  "mirth",
  "cloud",
  "cabal",
  "leech",
  "close",
  "tenth",
  "pecan",
  "droit",
  "grail",
  "clone",
  "guise",
  "ralph",
  "tango",
  "biddy",
  "smith",
  "mower",
  "payee",
  "serif",
  "drape",
  "fifth",
  "spank",
  "glaze",
  "allot",
  "truck",
  "kayak",
  "virus",
  "testy",
  "tepee",
  "fully",
  "zonal",
  "metro",
  "curry",
  "grand",
  "banjo",
  "axion",
  "bezel",
  "occur",
  "chain",
  "nasal",
  "gooey",
  "filer",
  "brace",
  "allay",
  "pubic",
  "raven",
  "plead",
  "gnash",
  "flaky",
  "munch",
  "dully",
  "eking",
  "thing",
  "slink",
  "hurry",
  "theft",
  "shorn",
  "pygmy",
  "ranch",
  "wring",
  "lemon",
  "shore",
  "mamma",
  "froze",
  "newer",
  "style",
  "moose",
  "antic",
  "drown",
  "vegan",
  "chess",
  "guppy",
  "union",
  "lever",
  "lorry",
  "image",
  "cabby",
  "druid",
  "exact",
  "truth",
  "dopey",
  "spear",
  "cried",
  "chime",
  "crony",
  "stunk",
  "timid",
  "batch",
  "gauge",
  "rotor",
  "crack",
  "curve",
  "latte",
  "witch",
  "bunch",
  "repel",
  "anvil",
  "soapy",
  "meter",
  "broth",
  "madly",
  "dried",
  "scene",
  "known",
  "magma",
  "roost",
  "woman",
  "thong",
  "punch",
  "pasty",
  "downy",
  "knead",
  "whirl",
  "rapid",
  "clang",
  "anger",
  "drive",
  "goofy",
  "email",
  "music",
  "stuff",
  "bleep",
  "rider",
  "mecca",
  "folio",
  "setup",
  "verso",
  "quash",
  "fauna",
  "gummy",
  "happy",
  "newly",
  "fussy",
  "relic",
  "guava",
  "ratty",
  "fudge",
  "femur",
  "chirp",
  "forte",
  "alibi",
  "whine",
  "petty",
  "golly",
  "plait",
  "fleck",
  "felon",
  "gourd",
  "brown",
  "thrum",
  "ficus",
  "stash",
  "decry",
  "wiser",
  "junta",
  "visor",
  "daunt",
  "scree",
  "impel",
  "await",
  "press",
  "whose",
  "turbo",
  "stoop",
  "speak",
  "mangy",
  "eying",
  "inlet",
  "crone",
  "pulse",
  "mossy",
  "staid",
  "hence",
  "pinch",
  "teddy",
  "sully",
  "snore",
  "ripen",
  "snowy",
  "attic",
  "going",
  "leach",
  "mouth",
  "hound",
  "clump",
  "tonal",
  "bigot",
  "peril",
  "piece",
  "blame",
  "haute",
  "spied",
  "undid",
  "intro",
  "basal",
  "shine",
  "gecko",
  "rodeo",
  "guard",
  "steer",
  "loamy",
  "scamp",
  "scram",
  "manly",
  "hello",
  "vaunt",
  "organ",
  "feral",
  "knock",
  "extra",
  "condo",
  "adapt",
  "willy",
  "polka",
  "rayon",
  "skirt",
  "faith",
  "torso",
  "match",
  "mercy",
  "tepid",
  "sleek",
  "riser",
  "twixt",
  "peace",
  "flush",
  "catty",
  "login",
  "eject",
  "roger",
  "rival",
  "untie",
  "refit",
  "aorta",
  "adult",
  "judge",
  "rower",
  "artsy",
  "rural",
  "shave"
];
var config = {
  words
};
const store = localForage.createInstance({
  name: "wordy"
});
const letterKeyMap = {
  q: "empty",
  w: "empty",
  e: "empty",
  r: "empty",
  t: "empty",
  y: "empty",
  u: "empty",
  i: "empty",
  o: "empty",
  p: "empty",
  a: "empty",
  s: "empty",
  d: "empty",
  f: "empty",
  g: "empty",
  h: "empty",
  j: "empty",
  k: "empty",
  l: "empty",
  z: "empty",
  x: "empty",
  c: "empty",
  v: "empty",
  b: "empty",
  n: "empty",
  m: "empty"
};
const controlKeyMap = {
  Enter: true,
  Backspace: true
};
const allowedKeyMap = __spreadValues(__spreadValues({}, letterKeyMap), controlKeyMap);
const WORD_LIST_SIZE = config.words.length;
const WORD_SIZE = 5;
const GUESS_SIZE = 6;
const INVALID_ANIMATION_DURATION = 600;
const WIN_ANIMATION_DURATION = 1e3;
var ValidationReason;
(function(ValidationReason2) {
  ValidationReason2[ValidationReason2["INVALID_CHAR_LEN"] = 0] = "INVALID_CHAR_LEN";
  ValidationReason2[ValidationReason2["INVALID_WORD"] = 1] = "INVALID_WORD";
})(ValidationReason || (ValidationReason = {}));
const fill = (func, length = 0) => Array.from({ length }, func);
const makeGuessResult = () => fill(() => "empty", WORD_SIZE);
const makeGuesses = (letters = "", result = void 0) => fill(() => ({ letters, result: result || [...makeGuessResult()] }), GUESS_SIZE);
const initializeGuesses = makeGuesses();
const initializeGuess = initializeGuesses[0];
const pickRandomWord = () => {
  return config.words[Math.floor(Math.random() * WORD_LIST_SIZE)];
};
const isValidWord = (word) => {
  return config.words.indexOf(word) > -1;
};
const newGame = () => {
  return {
    id: nanoid(),
    guess: 0,
    guesses: initializeGuesses,
    solution: pickRandomWord(),
    letters: letterKeyMap,
    status: "idle",
    start: Date.now()
  };
};
const manager = (async () => {
  const activeGameId = await store.getItem("activeGameId");
  const games = await store.getItem("games") || {};
  const stats = await store.getItem("stats") || {};
  let active = activeGameId && games[activeGameId] || newGame();
  const modal = await store.getItem("shown_help") ? "" : "help";
  if (modal === "help") {
    await store.setItem("shown_help", "1");
  }
  if (!activeGameId) {
    await store.setItem("activeGameId", active.id);
  }
  const saveGame = async (data) => {
    active = __spreadValues(__spreadValues({}, active), data);
    games[active.id] = active;
    await store.setItem("games", games);
  };
  if (!activeGameId) {
    await store.setItem("activeGameId", active.id);
    await saveGame({});
  }
  return {
    active,
    games,
    stats,
    modal,
    saveGame
  };
})();
let Toaster = null;
const initToaster = (node) => {
  Toaster = node;
};
const removeToaster = () => {
  Toaster = null;
};
const createToast = (text) => {
  const node = document.createElement("output");
  node.innerText = text;
  node.classList.add("toast");
  node.setAttribute("role", "status");
  return node;
};
const flipToast = (toast) => {
  const first = (Toaster == null ? void 0 : Toaster.offsetHeight) || 0;
  Toaster == null ? void 0 : Toaster.appendChild(toast);
  const last = (Toaster == null ? void 0 : Toaster.offsetHeight) || 0;
  const invert = last - first;
  Toaster == null ? void 0 : Toaster.animate([{ transform: `translateY(${invert}px)` }, { transform: "translateY(0)" }], {
    duration: 150,
    easing: "ease-out"
  });
};
const addToast = (toast) => {
  const { matches: motionOK } = window.matchMedia("(prefers-reduced-motion: no-preference)");
  (Toaster == null ? void 0 : Toaster.children.length) && motionOK ? flipToast(toast) : Toaster == null ? void 0 : Toaster.appendChild(toast);
};
const Toast = (text) => {
  const toast = createToast(text);
  addToast(toast);
  return new Promise(async (resolve) => {
    await Promise.allSettled(toast.getAnimations().map((animation) => animation.finished));
    Toaster == null ? void 0 : Toaster.removeChild(toast);
    resolve();
  });
};
var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$d(target, key, result);
  return result;
};
let CwTheme = class extends s {
  constructor() {
    super();
    const darkTheme = localStorage.getItem("theme_dark");
    if (darkTheme !== null) {
      this.dark = darkTheme === "on";
    } else {
      this.dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("theme_dark", this.dark ? "on" : "");
    }
  }
  updateTheme(e2) {
    this.dark = e2.detail.on;
  }
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      initToaster(this.renderRoot.querySelector(".toast-layer"));
    }, 0);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    removeToaster();
  }
  render() {
    return $`
      <section class="toast-layer"></section>
      <main @wd-dark-theme=${this.updateTheme}>
        <slot></slot>
      </main>
    `;
  }
};
CwTheme.styles = r$2`
    :host {
      --color-tone-1: #d7e9f8;
      --color-tone-2: #81a8d5;
      --color-tone-3: #577bac;
      --color-tone-4: #345787;
      --color-tone-5: #213d6d;
      --color-tone-6: #142a5a;
      --color-tone-7: #060f1a;
      --shadow-color: rgba(0, 0, 0, 0.16);
      --opacity-50: rgba(0, 0, 0, 0.5);
      --opacity-70: rgba(0, 0, 0, 0.7);

      --green: #6aaa64;
      --darkendGreen: #538d4e;
      --yellow: #c9b458;
      --darkendYellow: #b39200;
      --lightGray: #d8d8d8;
      --gray: #86888a;
      --darkGray: #939598;
      --white: #fff;
      --black: #c40000;
      --orange: #f5793a;
      --blue: #85c0f9;

      --color-present: var(--yellow);
      --color-correct: var(--green);
      --color-absent: var(--color-tone-3);
      --cell-text-color: var(--color-tone-7);
      --key-text-color: var(--color-tone-7);
      --key-evaluated-text-color: var(--white);
      --key-bg: var(--color-tone-1);
      --key-bg-present: var(--color-present);
      --key-bg-correct: var(--color-correct);
      --key-bg-absent: var(--color-absent);
      --modal-content-color: var(--color-tone-7);
      --modal-content-bg: var(--white);

      --wd-background-color: var(--white);
      --wd-color: var(--white);
      --wd-color-faded: var(--color-tone-5);
      --wd-switch-bg: var(--color-tone-2);
      --wd-border-color: var(--color-tone-1);
      --wd-border-color-emphasis: var(--color-tone-2);
      --wd-icon-color: var(--color-tone-7);

      --wd-max-width: 500px;
      --wd-header-height: 50px;
      --wd-keyboard-height: 200px;
      --wd-board-font-size: 32px;
    }
    :host([dark="true"]) {
      --color-present: var(--darkendYellow);
      --color-correct: var(--darkendGreen);
      --color-absent: var(--color-tone-6);
      --cell-text-color: var(--white);
      --key-text-color: var(--white);
      --key-evaluated-text-color: var(--white);
      --key-bg: var(--color-tone-3);
      --key-bg-present: var(--color-present);
      --key-bg-correct: var(--color-correct);
      --key-bg-absent: var(--color-absent);
      --modal-content-bg: var(--color-tone-7);
      --modal-content-color: var(--color-tone-1);
      --shadow-color: rgba(255, 255, 255, 0.16);

      --wd-background-color: var(--color-tone-7);
      --wd-color: var(--white);
      --wd-color-faded: var(--color-tone-2);
      --wd-switch-bg: var(--color-tone-5);
      --wd-border-color: var(--color-tone-6);
      --wd-border-color-emphasis: var(--color-tone-4);
      --wd-icon-color: var(--color-tone-1);
    }
    @media (max-height: 600px) {
      :host {
        --wd-board-font-size: 28px;
      }
    }
    @media (max-height: 500px) {
      :host {
        --wd-board-font-size: 24px;
      }
    }
    main {
      height: 100%;
      background-color: var(--wd-background-color);
      color: var(--wd-color);
    }
    .toast-layer {
      position: fixed;
      z-index: 1;
      inset-block-end: 0;
      inset-inline: 0;
      padding-block-end: 25vh;
      display: grid;
      justify-items: center;
      justify-content: center;
      gap: 1vh;
      pointer-events: none;
    }
    .toast {
      --_duration: 3s;
      --_travel-distance: 0;
      color: var(--modal-content-color);
      background-color: var(--modal-content-bg);
      will-change: transform;
      animation: fade-in 0.3s ease, slide-in 0.3s ease,
        fade-out 0.3s ease var(--_duration);
      max-inline-size: min(25ch, 90vw);
      padding-block: 0.5ch;
      padding-inline: 1ch;
      border-radius: 5px;
      font-size: 1.25rem;
      box-shadow: var(--shadow-color) 0px 1px 4px;
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
    }
    @keyframes fade-out {
      to {
        opacity: 0;
      }
    }
    @keyframes slide-in {
      from {
        transform: translateY(var(--_travel-distance, 10px));
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      .toast {
        --_travel-distance: 5vh;
      }
    }
  `;
__decorateClass$d([
  e$2({ reflect: true })
], CwTheme.prototype, "dark", 2);
CwTheme = __decorateClass$d([
  n$1("wd-theme")
], CwTheme);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e extends i {
  constructor(i2) {
    if (super(i2), this.it = w, i2.type !== t$1.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r2) {
    if (r2 === w || r2 == null)
      return this.vt = void 0, this.it = r2;
    if (r2 === b)
      return r2;
    if (typeof r2 != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r2 === this.it)
      return this.vt;
    this.it = r2;
    const s2 = [r2];
    return s2.raw = s2, this.vt = { _$litType$: this.constructor.resultType, strings: s2, values: [] };
  }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class t extends e {
}
t.directiveName = "unsafeSVG", t.resultType = 2;
const o = e$1(t);
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$c(target, key, result);
  return result;
};
const icons = {
  backspace: `<path fill="currentColor" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>`,
  stats: `<path fill="none" stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
  settings: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
  help: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
  x: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`
};
let CwIcon = class extends s {
  constructor() {
    super(...arguments);
    this.name = "";
  }
  render() {
    return $`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        ${o(icons[this.name])}
      </svg>
    `;
  }
};
CwIcon.styles = r$2`
    :host {
      display: block;
      height: 24px;
      width: 24px;
      pointer-events: none;
      user-select: none;
    }
  `;
__decorateClass$c([
  e$2()
], CwIcon.prototype, "name", 2);
CwIcon = __decorateClass$c([
  n$1("wd-icon")
], CwIcon);
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target, key, result);
  return result;
};
let CwHeader = class extends s {
  showHelp(e2) {
    e2.preventDefault();
    this.dispatchEvent(new CustomEvent("wd-page", {
      detail: {
        content: "help",
        open: true
      },
      bubbles: true,
      composed: true
    }));
  }
  showStats(e2) {
    e2.preventDefault();
    this.dispatchEvent(new CustomEvent("wd-modal", {
      detail: {
        content: "stats",
        open: true
      },
      bubbles: true,
      composed: true
    }));
  }
  showSettings(e2) {
    e2.preventDefault();
    this.dispatchEvent(new CustomEvent("wd-page", {
      detail: {
        content: "settings",
        open: true
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return $`
      <header>
        <div class="menu">
          <button
            @click=${this.showHelp}
            id="help-button"
            class="icon"
            aria-label="help"
          >
            <wd-icon name="help"></wd-icon>
          </button>
        </div>
        <div class="title">🟨🟩🟨🟩🟩</div>
        <div class="menu">
          <button
            @click=${this.showStats}
            id="statistics-button"
            class="icon"
            aria-label="statistics"
          >
            <wd-icon name="stats"></wd-icon>
          </button>
          <button
            @click=${this.showSettings}
            id="settings-button"
            class="icon"
            aria-label="settings"
          >
            <wd-icon name="settings"></wd-icon>
          </button>
        </div>
      </header>
    `;
  }
};
CwHeader.styles = r$2`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--wd-header-height);
      color: var(--wd-icon-color);
      border-bottom: 1px solid var(--wd-border-color);
      gap: 4px;
      padding-inline: 2px;
    }
    .title {
      font-weight: 400;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: 0.1em;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      pointer-events: none;
    }
    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-icon-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }
  `;
CwHeader = __decorateClass$b([
  n$1("wd-header")
], CwHeader);
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target, key, result);
  return result;
};
let CwCell = class extends s {
  constructor() {
    super(...arguments);
    this.status = "empty";
    this.animation = "";
    this.letter = "";
  }
  render() {
    return $` <div class="cell">${this.letter}</div> `;
  }
};
CwCell.styles = r$2`
    :host {
      display: inline-block;
    }
    .cell {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      vertical-align: middle;
      box-sizing: border-box;
      color: var(--cell-text-color);
      text-transform: uppercase;
      user-select: none;
      font-size: var(--wd-board-font-size);
      line-height: var(--wd-board-font-size);
      border: 2px solid transparent;

      will-change: color, background-color, border-color;
      transition-property: color, background-color, border-color;
      transition-duration: 0ms;
      transition-delay: var(--transition-delay, 250ms);
      transition-timing-function: ease-out;
    }
    .cell::before {
      content: "";
      display: inline-block;
      padding-bottom: 100%;
    }
    :host([status="empty"]) > .cell {
      border-color: var(--wd-border-color);
    }
    :host([status="tbd"]) > .cell {
      background-color: var(--wd-background-color);
      border-color: var(--wd-border-color-emphasis);
    }
    :host([status="correct"]) > .cell {
      background-color: var(--color-correct);
      color: var(--key-evaluated-text-color);
    }
    :host([status="present"]) > .cell {
      background-color: var(--color-present);
      color: var(--key-evaluated-text-color);
    }
    :host([status="absent"]) > .cell {
      background-color: var(--color-absent);
      color: var(--key-evaluated-text-color);
    }
    :host([animation="pop"]) > .cell {
      animation-name: PopIn;
      animation-duration: 100ms;
    }
    :host([animation="bounce"]) > .cell {
      animation-name: Bounce;
      animation-duration: ${WIN_ANIMATION_DURATION}ms;
      animation-delay: var(--animation-delay, 0ms);
      animation-timing-function: ease-in;
    }

    @keyframes Bounce {
      0%,
      20% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      50% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(-15px);
      }
      80% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes PopIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }

      40% {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    :host([animation="flip"]) > .cell {
      animation-name: Flip;
      animation-duration: 500ms;
      animation-delay: var(--animation-delay, 0ms);
      animation-timing-function: ease-in;
    }
    @keyframes Flip {
      0% {
        transform: rotateY(0);
      }
      50% {
        transform: rotateY(-90deg);
      }
      100% {
        transform: rotateY(0);
      }
    }
  `;
__decorateClass$a([
  e$2({ reflect: true })
], CwCell.prototype, "status", 2);
__decorateClass$a([
  e$2({ reflect: true })
], CwCell.prototype, "animation", 2);
__decorateClass$a([
  e$2()
], CwCell.prototype, "letter", 2);
CwCell = __decorateClass$a([
  n$1("wd-cell")
], CwCell);
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target, key, result);
  return result;
};
let CwRow = class extends s {
  constructor() {
    super(...arguments);
    this.guess = initializeGuess.letters;
    this.result = initializeGuess.result;
    this.status = "idle";
    this.revealed = false;
  }
  updated() {
    if (!this.revealed && this.status === "reveal") {
      this.revealed = true;
    }
  }
  render() {
    let letters = this.guess.split("");
    letters = [
      ...letters,
      ...fill(() => "", WORD_SIZE - letters.length)
    ];
    const revealing = this.status === "reveal" && !this.revealed;
    return $`
      <div class="row">
        <wd-cell
          style="--transition-delay:${revealing ? "250ms" : "0ms"};"
          .letter=${letters[0]}
          .status=${this.status === "reveal" || this.status === "win" || this.revealed ? this.result[0] : letters[0] !== "" ? "tbd" : "empty"}
          .animation=${letters[0] !== "" ? revealing ? "flip" : this.status === "win" ? "bounce" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:500ms;--transition-delay:${revealing ? "750ms" : "0ms"};"
          .letter=${letters[1]}
          .status=${this.status === "reveal" || this.status === "win" || this.revealed ? this.result[1] : letters[1] !== "" ? "tbd" : "empty"}
          .animation=${letters[1] !== "" ? revealing ? "flip" : this.status === "win" ? "bounce" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1000ms;--transition-delay:${revealing ? "1250ms" : "0ms"};"
          .letter=${letters[2]}
          .status=${this.status === "reveal" || this.status === "win" || this.revealed ? this.result[2] : letters[2] !== "" ? "tbd" : "empty"}
          .animation=${letters[2] !== "" ? revealing ? "flip" : this.status === "win" ? "bounce" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:1500ms;--transition-delay:${revealing ? "1750ms" : "0ms"};"
          .letter=${letters[3]}
          .status=${this.status === "reveal" || this.status === "win" || this.revealed ? this.result[3] : letters[3] !== "" ? "tbd" : "empty"}
          .animation=${letters[3] !== "" ? revealing ? "flip" : this.status === "win" ? "bounce" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
        <wd-cell
          style="--animation-delay:2000ms;--transition-delay:${revealing ? "2250ms" : "0ms"};"
          .letter=${letters[4]}
          .status=${this.status === "reveal" || this.status === "win" || this.revealed ? this.result[4] : letters[4] !== "" ? "tbd" : "empty"}
          .animation=${letters[4] !== "" ? revealing ? "flip" : this.status === "win" ? "bounce" : this.revealed ? "" : "pop" : ""}
        ></wd-cell>
      </div>
    `;
  }
};
CwRow.styles = r$2`
    :host {
      display: block;
    }
    :host([status="invalid"]) {
      animation-name: Shake;
      animation-duration: ${INVALID_ANIMATION_DURATION}ms;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(${WORD_SIZE}, 1fr);
      grid-gap: 5px;
    }
    @keyframes Shake {
      10%,
      90% {
        transform: translateX(-1px);
      }

      20%,
      80% {
        transform: translateX(2px);
      }

      30%,
      50%,
      70% {
        transform: translateX(-4px);
      }

      40%,
      60% {
        transform: translateX(4px);
      }
    }
  `;
__decorateClass$9([
  e$2()
], CwRow.prototype, "guess", 2);
__decorateClass$9([
  e$2()
], CwRow.prototype, "result", 2);
__decorateClass$9([
  e$2({ reflect: true })
], CwRow.prototype, "status", 2);
CwRow = __decorateClass$9([
  n$1("wd-row")
], CwRow);
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
let CwBoard = class extends s {
  constructor() {
    super(...arguments);
    this.guess = 0;
    this.status = "idle";
    this.guesses = initializeGuesses;
  }
  render() {
    const gameOver = ["win", "lose"].indexOf(this.status) > -1;
    return $`
      <div class="board">
        <wd-row
          .guess=${this.guesses[0].letters}
          .result=${this.guesses[0].result}
          .status=${this.guess === 0 ? this.status : gameOver ? "reveal" : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[1].letters}
          .result=${this.guesses[1].result}
          .status=${this.guess === 1 ? this.status : gameOver ? "reveal" : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[2].letters}
          .result=${this.guesses[2].result}
          .status=${this.guess === 2 ? this.status : gameOver ? "reveal" : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[3].letters}
          .result=${this.guesses[3].result}
          .status=${this.guess === 3 ? this.status : gameOver ? "reveal" : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[4].letters}
          .result=${this.guesses[4].result}
          .status=${this.guess === 4 ? this.status : gameOver ? "reveal" : void 0}
        ></wd-row>
        <wd-row
          .guess=${this.guesses[5].letters}
          .result=${this.guesses[5].result}
          .status=${this.guess === 5 ? this.status : gameOver ? "reveal" : void 0}
        ></wd-row>
      </div>
    `;
  }
};
CwBoard.styles = r$2`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
      box-sizing: border-box;
      font-size: var(--wd-board-font-size);
      line-height: var(--wd-board-font-size);
    }
    .board {
      width: 10.9375em;
      height: 13.125em;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 5px;
      padding: 10px;
      box-sizing: border-box;
    }
  `;
__decorateClass$8([
  e$2()
], CwBoard.prototype, "guess", 2);
__decorateClass$8([
  e$2()
], CwBoard.prototype, "status", 2);
__decorateClass$8([
  e$2()
], CwBoard.prototype, "guesses", 2);
CwBoard = __decorateClass$8([
  n$1("wd-board")
], CwBoard);
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
let CwKeyboard = class extends s {
  constructor() {
    super(...arguments);
    this.letters = letterKeyMap;
  }
  createRenderRoot() {
    const root = super.createRenderRoot();
    const dispatchKey = (e2) => {
      var _a;
      e2.preventDefault();
      const { key = "", state = "empty" } = ((_a = e2 == null ? void 0 : e2.target) == null ? void 0 : _a.dataset) || {};
      if (state === "empty" && allowedKeyMap[key]) {
        window.dispatchEvent(new KeyboardEvent("keydown", { key }));
      }
    };
    root.addEventListener("click", dispatchKey);
    return root;
  }
  render() {
    return $`
      <div id="keyboard">
        <div class="row">
          <button data-key="q" data-state=${this.letters.q}>q</button>
          <button data-key="w" data-state=${this.letters.w}>w</button>
          <button data-key="e" data-state=${this.letters.e}>e</button>
          <button data-key="r" data-state=${this.letters.r}>r</button>
          <button data-key="t" data-state=${this.letters.t}>t</button>
          <button data-key="y" data-state=${this.letters.y}>y</button>
          <button data-key="u" data-state=${this.letters.u}>u</button>
          <button data-key="i" data-state=${this.letters.i}>i</button>
          <button data-key="o" data-state=${this.letters.o}>o</button>
          <button data-key="p" data-state=${this.letters.p}>p</button>
        </div>
        <div class="row">
          <div class="spacer half"></div>
          <button data-key="a" data-state=${this.letters.a}>a</button>
          <button data-key="s" data-state=${this.letters.s}>s</button>
          <button data-key="d" data-state=${this.letters.d}>d</button>
          <button data-key="f" data-state=${this.letters.f}>f</button>
          <button data-key="g" data-state=${this.letters.g}>g</button>
          <button data-key="h" data-state=${this.letters.h}>h</button>
          <button data-key="j" data-state=${this.letters.j}>j</button>
          <button data-key="k" data-state=${this.letters.k}>k</button>
          <button data-key="l" data-state=${this.letters.l}>l</button>
          <div class="spacer half"></div>
        </div>
        <div class="row">
          <button data-key="Enter" class="one-and-a-half">enter</button
          ><button data-key="z" data-state=${this.letters.z}>z</button>
          <button data-key="x" data-state=${this.letters.x}>x</button>
          <button data-key="c" data-state=${this.letters.c}>c</button>
          <button data-key="v" data-state=${this.letters.v}>v</button>
          <button data-key="b" data-state=${this.letters.b}>b</button>
          <button data-key="n" data-state=${this.letters.n}>n</button>
          <button data-key="m" data-state=${this.letters.m}>m</button>
          <button data-key="Backspace" class="one-and-a-half">
            <wd-icon name="backspace"></wd-icon>
          </button>
        </div>
      </div>
    `;
  }
};
CwKeyboard.styles = r$2`
    :host {
      height: var(--keyboard-height);
    }
    #keyboard {
      margin: 0 8px;
      user-select: none;
    }

    .row {
      display: flex;
      width: 100%;
      margin: 0 auto 8px;
      touch-action: manipulation;
    }

    button {
      font-family: inherit;
      font-weight: bold;
      border: 0;
      padding: 0;
      margin: 0 6px 0 0;
      height: 58px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      background-color: var(--key-bg);
      color: var(--key-text-color);
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    }

    button:focus {
      outline: none;
    }

    button.fade {
      transition: background-color 0.1s ease, color 0.1s ease;
    }

    button:last-of-type {
      margin: 0;
    }

    .half {
      flex: 0.5;
    }

    .one {
      flex: 1;
    }

    .one-and-a-half {
      flex: 1.5;
      font-size: 12px;
    }

    .two {
      flex: 2;
    }

    button[data-state="correct"] {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
    }

    button[data-state="present"] {
      background-color: var(--key-bg-present);
      color: var(--key-evaluated-text-color);
    }

    button[data-state="absent"] {
      background-color: var(--key-bg-absent);
      color: var(--key-evaluated-text-color);
    }
  `;
__decorateClass$7([
  e$2()
], CwKeyboard.prototype, "letters", 2);
CwKeyboard = __decorateClass$7([
  n$1("wd-keyboard")
], CwKeyboard);
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
let CwHelp = class extends s {
  render() {
    return $`
      <section>
        <div class="instructions">
          <p>Guess the <strong>WORD</strong> in 6 tries.</p>
          <p>
            Each guess must be a valid 5 letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the cells will change to show how
            close your guess was to the word.
          </p>
          <p>
            Revealed letters which are not found within the hidden word cannot
            be used in further guesses.
          </p>
          <div class="examples">
            <p><strong>Examples</strong></p>
            <div class="example">
              <div class="row">
                <wd-cell letter="b" status="correct" animation="flip"></wd-cell>
                <wd-cell letter="r"></wd-cell>
                <wd-cell letter="i"></wd-cell>
                <wd-cell letter="n"></wd-cell>
                <wd-cell letter="g"></wd-cell>
              </div>
              <p>
                The letter <strong>B</strong> is in the word and in the correct
                spot.
              </p>
            </div>
            <div class="example">
              <div class="row">
                <wd-cell letter="w"></wd-cell>
                <wd-cell letter="o" status="present" animation="flip"></wd-cell>
                <wd-cell letter="r"></wd-cell>
                <wd-cell letter="d"></wd-cell>
                <wd-cell letter="y"></wd-cell>
              </div>
              <p>
                The letter <strong>O</strong> is in the word but in the wrong
                spot.
              </p>
            </div>
            <div class="example">
              <div class="row">
                <wd-cell letter="b"></wd-cell>
                <wd-cell letter="r"></wd-cell>
                <wd-cell letter="a"></wd-cell>
                <wd-cell letter="i" status="absent" animation="flip"></wd-cell>
                <wd-cell letter="n"></wd-cell>
              </div>
              <p>
                The letter <strong>I</strong> is not in the word in any spot.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
CwHelp.styles = r$2`
    :host {
      color: var(--modal-content-color);
    }

    .instructions {
      font-size: 14px;
    }

    .examples {
      border-bottom: 1px solid var(--wd-border-color);
      border-top: 1px solid var(--wd-border-color);
    }

    .example {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    wd-cell {
      width: 40px;
      height: 40px;
    }

    :host([page]) section {
      padding: 16px;
      padding-top: 0px;
    }
  `;
CwHelp = __decorateClass$6([
  n$1("wd-help")
], CwHelp);
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let CwSwitch = class extends s {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.disabled = false;
  }
  render() {
    return $`
      <div class="container">
        <label><slot></slot></label>
        <div class="switch">
          <span class="knob"></span>
        </div>
      </div>
    `;
  }
};
CwSwitch.styles = r$2`
    .container {
      display: flex;
      justify-content: space-between;
    }
    .switch {
      height: 20px;
      width: 32px;
      vertical-align: middle;
      background: var(--wd-switch-bg);
      border-radius: 999px;
      display: block;
      position: relative;
    }
    .knob {
      display: block;
      position: absolute;
      left: 2px;
      top: 2px;
      height: calc(100% - 4px);
      width: 50%;
      border-radius: 8px;
      background: var(--white);
      transform: translateX(0);
      transition: transform 0.3s;
    }
    :host([checked="true"]) .switch {
      background: var(--color-correct);
    }
    :host([checked="true"]) .knob {
      transform: translateX(calc(100% - 4px));
    }
    :host([disabled="true"]) .switch {
      opacity: 0.5;
    }
  `;
__decorateClass$5([
  e$2({ reflect: true })
], CwSwitch.prototype, "checked", 2);
__decorateClass$5([
  e$2({ reflect: true })
], CwSwitch.prototype, "disabled", 2);
CwSwitch = __decorateClass$5([
  n$1("wd-switch")
], CwSwitch);
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let CwSettings = class extends s {
  constructor() {
    super(...arguments);
    this.darkTheme = localStorage.getItem("theme_dark") || "";
  }
  toggleDarkTheme(e2) {
    e2.preventDefault();
    this.darkTheme = this.darkTheme === "on" ? "" : "on";
    localStorage.setItem("theme_dark", this.darkTheme);
    this.dispatchEvent(new CustomEvent("wd-dark-theme", {
      detail: { on: this.darkTheme === "on" },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return $`
      <div class="sections">
        <section>
          <div class="setting">
            <div class="text">
              <div class="title">Dark Theme</div>
            </div>
            <div class="control">
              <wd-switch
                @click=${this.toggleDarkTheme}
                id="dark-theme"
                name="dark-theme"
                .checked=${this.darkTheme === "on"}
              ></wd-switch>
            </div>
          </div>
        </section>
      </div>
    `;
  }
};
CwSettings.styles = r$2`
    .setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--wd-border-color);
      padding: 16px 0;
    }

    a,
    a:visited {
      color: var(--wd-color-faded);
    }

    .title {
      font-size: 18px;
    }
    .text {
      padding-right: 8px;
    }
    .description {
      font-size: 12px;
      color: var(--wd-color-faded);
    }

    #footnote {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      color: var(--wd-color-faded);
      font-size: 12px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    #privacy-policy,
    #copyright {
      text-align: left;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .setting {
        padding: 16px;
      }
    }
  `;
__decorateClass$4([
  t$2()
], CwSettings.prototype, "darkTheme", 2);
CwSettings = __decorateClass$4([
  n$1("wd-settings")
], CwSettings);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let CwStats = class extends s {
  render() {
    return $`
      <div class="container">
        <h1>Statistics</h1>
        <div id="statistics">
          <div class="statistic-container">
            <div class="statistic">0</div>
            <div class="label">Played</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">0</div>
            <div class="label">Win %</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">0</div>
            <div class="label">Current Streak</div>
          </div>

          <div class="statistic-container">
            <div class="statistic">0</div>
            <div class="label">Max Streak</div>
          </div>
        </div>
        <h1>Guess Distribution</h1>
        <div id="guess-distribution"><div class="no-data">No Data</div></div>
        <div class="footer"></div>
      </div>
    `;
  }
};
CwStats.styles = r$2`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
    }
    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }

    #statistics {
      display: flex;
      margin-bottom: ;
    }

    .statistic-container {
      flex: 1;
    }

    .statistic-container .statistic {
      font-size: 36px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 0.05em;
      font-variant-numeric: proportional-nums;
    }

    .statistic.timer {
      font-variant-numeric: initial;
    }

    .statistic-container .label {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    #guess-distribution {
      width: 80%;
    }

    .graph-container {
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
      padding-bottom: 4px;
      font-size: 14px;
      line-height: 20px;
    }

    .graph-container .graph {
      width: 100%;
      height: 100%;
      padding-left: 4px;
    }

    .graph-container .graph .graph-bar {
      height: 100%;
      /* Assume no wins */
      width: 0%;
      position: relative;
      background-color: var(--color-absent);
      display: flex;
      justify-content: center;
    }

    .graph-container .graph .graph-bar.highlight {
      background-color: var(--color-correct);
    }

    .graph-container .graph .graph-bar.align-right {
      justify-content: flex-end;
      padding-right: 8px;
    }

    .graph-container .graph .num-guesses {
      font-weight: bold;
      color: var(--tile-text-color);
    }

    #statistics,
    #guess-distribution {
      padding-bottom: 10px;
    }

    .footer {
      display: flex;
      width: 100%;
    }

    .countdown {
      border-right: 1px solid var(--color-tone-1);
      padding-right: 12px;
      width: 50%;
    }

    .share {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 12px;
      width: 50%;
    }

    .no-data {
      text-align: center;
    }

    button#share-button {
      background-color: var(--key-bg-correct);
      color: var(--key-evaluated-text-color);
      font-family: inherit;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
      width: 80%;
      font-size: 20px;
      height: 52px;
      -webkit-filter: brightness(100%);
    }
    button#share-button:hover {
      opacity: 0.9;
    }
    button#share-button game-icon {
      width: 24px;
      height: 24px;
      padding-left: 8px;
    }
  `;
CwStats = __decorateClass$3([
  n$1("wd-stats")
], CwStats);
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let CwPage = class extends s {
  constructor() {
    super(...arguments);
    this.open = false;
    this.closing = false;
  }
  updated() {
    if (this.open)
      ;
  }
  closePage() {
    this.dispatchEvent(new CustomEvent("wd-page", {
      detail: { open: false },
      composed: true,
      bubbles: true
    }));
  }
  render() {
    return $`
      <div class="overlay">
        <div class="content">
          <header>
            <h1><slot></slot></h1>
            <button @click=${this.closePage} class="close-icon">
              <wd-icon name="x"></wd-icon>
            </button>
          </header>
          <div class="content-container">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
CwPage.styles = r$2`
    .overlay {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
      background-color: var(--wd-background-color);
      animation: SlideIn 100ms linear;
      z-index: 2000;
    }

    :host([open="true"]) .overlay,
    :host([closing="true"]) .overlay {
      display: flex;
    }

    :host([closing="true"]) .overlay {
      animation: SlideOut 150ms linear;
    }

    .content {
      position: relative;
      color: var(--modal-content-color);
      padding: 0 32px;
      max-width: var(--wd-max-width);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .content-container {
      flex: 1;
      overflow-y: auto;
    }

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    h1 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
    }

    .close-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-icon-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .content {
        max-width: 100%;
        padding: 0;
      }
      wd-icon {
        padding: 0 16px;
      }
    }

    @keyframes SlideIn {
      0% {
        transform: translateY(30px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes SlideOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateY(60px);
      }
    }
  `;
__decorateClass$2([
  e$2({ reflect: true })
], CwPage.prototype, "open", 2);
__decorateClass$2([
  e$2({ reflect: true })
], CwPage.prototype, "closing", 2);
CwPage = __decorateClass$2([
  n$1("wd-page")
], CwPage);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let CwModal = class extends s {
  constructor() {
    super(...arguments);
    this.open = false;
    this.closing = false;
  }
  closeModal(e2) {
    e2.preventDefault();
    this.dispatchEvent(new CustomEvent("wd-modal", {
      detail: { open: false },
      composed: true,
      bubbles: true
    }));
  }
  preventClose(e2) {
    e2.preventDefault();
    e2.stopPropagation();
  }
  render() {
    return $`
      <div class="overlay" @click=${this.closeModal}>
        <div class="content" @click=${this.preventClose}>
          <slot></slot>
          <button @click=${this.closeModal} class="close-icon">
            <wd-icon name="x"></wd-icon>
          </button>
        </div>
      </div>
    `;
  }
};
CwModal.styles = r$2`
    .overlay {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      background-color: var(--opacity-70);
      z-index: 3000;
    }

    :host([open="true"]) .overlay,
    :host([closing="true"]) .overlay {
      display: flex;
    }

    :host([closing="true"]) .content {
      animation: SlideOut 200ms;
    }

    .content {
      position: relative;
      border-radius: 8px;
      border: 1px solid var(--wd-border-color);
      background-color: var(--modal-content-bg);
      color: var(--modal-content-color);
      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      animation: SlideIn 200ms;
      max-width: var(--wd-max-width);
      padding: 16px;
      box-sizing: border-box;
    }

    .close-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--wd-color);
      height: 36px;
      width: 36px;
      opacity: 0.5;
      background: none;
      border: none;
      cursor: pointer;
    }

    @keyframes SlideIn {
      0% {
        transform: translateY(30px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes SlideOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateY(60px);
      }
    }
  `;
__decorateClass$1([
  e$2({ reflect: true })
], CwModal.prototype, "open", 2);
__decorateClass$1([
  e$2({ reflect: true })
], CwModal.prototype, "closing", 2);
CwModal = __decorateClass$1([
  n$1("wd-modal")
], CwModal);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let CwApp = class extends s {
  constructor() {
    super(...arguments);
    this.guess = 0;
    this.guesses = initializeGuesses;
    this.letters = letterKeyMap;
    this.solution = "";
    this.status = "idle";
    this.page = "";
    this.modal = "";
    this.toast = "";
    this.closingPage = false;
    this.closingModal = false;
    this.closingToast = false;
    this._clearTimeout = null;
    this._autosaveTimeout = null;
    this._handleKeydown = async (e2) => {
      if (e2.isComposing || e2.ctrlKey || e2.altKey || this.status !== "idle")
        return;
      switch (e2.key) {
        case "Escape":
          this.page = "";
          this.modal = "";
          return;
        case "Backspace":
          return this.removeLetter();
        case "Enter":
          return await this.attemptGuess();
        default:
          return this.insertLetter(e2.key.toLowerCase());
      }
    };
  }
  handleModal(e2) {
    const { open = false, content = "" } = e2.detail;
    if (open) {
      this.modal = content;
    } else {
      this.closingModal = true;
      setTimeout(() => {
        this.modal = "";
        this.closingModal = false;
      }, 200);
    }
  }
  handleToast(e2) {
    const { content = "" } = e2.detail;
    Toast(content);
  }
  handlePage(e2) {
    const { open = false, content = "" } = e2.detail;
    if (open) {
      this.page = content;
    } else {
      this.closingPage = true;
      setTimeout(() => {
        this.page = "";
        this.closingPage = false;
      }, 150);
    }
  }
  get activeGuess() {
    return this.guesses[this.guess].letters;
  }
  set activeGuess(value) {
    const guess = this.guesses[this.guess];
    guess.letters = value;
    this.guesses = this.guesses.map((g2, i2) => {
      if (i2 === this.guess) {
        return guess;
      }
      return g2;
    });
  }
  get activeResult() {
    return this.guesses[this.guess].result;
  }
  set activeResult(value) {
    const guess = this.guesses[this.guess];
    guess.result = value;
    this.guesses = this.guesses.map((g2, i2) => {
      if (i2 === this.guess) {
        return guess;
      }
      return g2;
    });
  }
  removeLetter() {
    if (this.activeGuess.length > 0) {
      this.activeGuess = this.activeGuess.slice(0, -1);
    }
  }
  insertLetter(key) {
    if (this.activeGuess.length < WORD_SIZE && key in letterKeyMap) {
      this.activeGuess += key;
    }
  }
  win() {
    this.status = "win";
  }
  lose() {
    this.status = "lose";
  }
  nextRow() {
    this.guess++;
    this.status = "idle";
  }
  invalidGuess(_guess, reason) {
    this.status = "invalid";
    switch (reason) {
      case ValidationReason.INVALID_CHAR_LEN:
        this.handleToast({
          detail: {
            content: "Not enough letters!"
          }
        });
        break;
      case ValidationReason.INVALID_WORD:
        this.handleToast({
          detail: { content: "Not a valid word!" }
        });
        break;
    }
    this._clearTimeout = setTimeout(() => {
      this.status = "idle";
    }, INVALID_ANIMATION_DURATION);
  }
  validate(guess) {
    if (guess.length < WORD_SIZE) {
      return {
        success: false,
        reason: ValidationReason.INVALID_CHAR_LEN
      };
    }
    if (!isValidWord(guess)) {
      return {
        success: false,
        reason: ValidationReason.INVALID_WORD
      };
    }
    return { success: true };
  }
  updateKeyboard() {
    const guess = this.activeGuess;
    const result = this.activeResult;
    const letters = {};
    for (let r2 = 0; r2 < result.length; r2++) {
      letters[guess.charAt(r2)] = result[r2];
    }
    this.letters = __spreadValues(__spreadValues({}, this.letters), letters);
  }
  determineResults(guess) {
    const word = this.solution;
    const result = this.activeResult;
    this.status = "reveal";
    for (let c2 = 0; c2 < guess.length; c2++) {
      const char = guess.charAt(c2);
      const w2 = word.indexOf(char);
      result[c2] = w2 === c2 ? "correct" : w2 > -1 ? "present" : "absent";
    }
    this.activeResult = result;
  }
  updateGameStatus() {
    this._clearTimeout = setTimeout(() => {
      this.updateKeyboard();
      if (this.activeResult.some((r2) => r2 !== "correct")) {
        if (this.guess < 5) {
          this.nextRow();
        } else {
          this.lose();
        }
      } else {
        this.win();
      }
    }, 5 * 500);
  }
  async attemptGuess() {
    if (this._clearTimeout)
      clearTimeout(this._clearTimeout);
    const guess = this.activeGuess;
    const result = this.validate(guess);
    if (result.success) {
      this.determineResults(guess);
      this.updateGameStatus();
    } else {
      this.invalidGuess(guess, result.reason);
    }
    this.saveGame();
  }
  async saveGame() {
    if (this._autosaveTimeout)
      clearTimeout(this._autosaveTimeout);
    const { saveGame } = await manager;
    this._autosaveTimeout = setTimeout(() => {
      saveGame({
        guess: this.guess,
        guesses: this.guesses,
        letters: this.letters,
        solution: this.solution,
        status: this.status === "win" || this.status === "lose" ? this.status : "idle"
      });
    }, 5 * 500);
  }
  async connectedCallback() {
    super.connectedCallback();
    const { active, modal } = await manager;
    this.guess = active.guess;
    this.guesses = active.guesses;
    this.solution = active.solution;
    this.status = active.status;
    this.letters = active.letters;
    this.modal = modal;
    window.addEventListener("keydown", this._handleKeydown);
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this._handleKeydown);
    super.disconnectedCallback();
  }
  render() {
    return $`
      <wd-header
        @wd-modal=${this.handleModal}
        @wd-page=${this.handlePage}
      ></wd-header>
      <wd-board
        .guesses=${this.guesses}
        .guess=${this.guess}
        .status=${this.status}
      ></wd-board>
      <wd-keyboard .letters=${this.letters}></wd-keyboard>
      <wd-page
        .open=${this.page !== ""}
        .closing=${this.closingPage}
        @wd-page=${this.handlePage}
      >
        ${this.page === "help" ? $`<span>How To Play</span>
              <wd-help page slot="content"></wd-help>` : null}
        ${this.page === "settings" ? $`<span>Settings</span>
              <wd-settings page slot="content"></wd-settings>` : null}
      </wd-page>
      <wd-modal
        .open=${this.modal !== ""}
        .closing=${this.closingModal}
        @wd-modal=${this.handleModal}
      >
        ${this.modal === "help" ? $`<wd-help></wd-help>` : null}
        ${this.modal === "stats" ? $`<wd-stats></wd-stats>` : null}
      </wd-modal>
    `;
  }
};
CwApp.styles = r$2`
    :host {
      width: 100%;
      max-width: var(--wd-max-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    #toast-layer-1 {
      z-index: 5000;
    }
    #toast-layer-2 {
      z-index: 6000;
    }
    .wd-toasts {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
      pointer-events: none;
      width: fit-content;
    }
  `;
__decorateClass([
  t$2()
], CwApp.prototype, "guess", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "guesses", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "letters", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "solution", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "status", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "page", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "modal", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "toast", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "closingPage", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "closingModal", 2);
__decorateClass([
  t$2()
], CwApp.prototype, "closingToast", 2);
CwApp = __decorateClass([
  n$1("wd-app")
], CwApp);
registerSW({
  onNeedRefresh() {
  },
  onOfflineReady() {
  }
});
