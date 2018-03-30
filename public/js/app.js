/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, t) {
 var n, r, i = typeof t,
  o = e.document,
  a = e.location,
  s = e.jQuery,
  u = e.$,
  l = {},
  c = [],
  p = "1.9.1",
  f = c.concat,
  d = c.push,
  h = c.slice,
  g = c.indexOf,
  m = l.toString,
  y = l.hasOwnProperty,
  v = p.trim,
  b = function(e, t) {
   return new b.fn.init(e, t, r)
  },
  x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  w = /\S+/g,
  T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  k = /^[\],:{}\s]*$/,
  E = /(?:^|:|,)(?:\s*\[)+/g,
  S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
  j = /^-ms-/,
  D = /-([\da-z])/gi,
  L = function(e, t) {
   return t.toUpperCase()
  },
  H = function(e) {
   (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
  },
  q = function() {
   o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
  };
 b.fn = b.prototype = {
  jquery: p,
  constructor: b,
  init: function(e, n, r) {
   var i, a;
   if (!e) return this;
   if ("string" == typeof e) {
    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
    if (i[1]) {
     if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
      for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
     return this
    }
    if (a = o.getElementById(i[2]), a && a.parentNode) {
     if (a.id !== i[2]) return r.find(e);
     this.length = 1, this[0] = a
    }
    return this.context = o, this.selector = e, this
   }
   return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
  },
  selector: "",
  length: 0,
  size: function() {
   return this.length
  },
  toArray: function() {
   return h.call(this)
  },
  get: function(e) {
   return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
  },
  pushStack: function(e) {
   var t = b.merge(this.constructor(), e);
   return t.prevObject = this, t.context = this.context, t
  },
  each: function(e, t) {
   return b.each(this, e, t)
  },
  ready: function(e) {
   return b.ready.promise().done(e), this
  },
  slice: function() {
   return this.pushStack(h.apply(this, arguments))
  },
  first: function() {
   return this.eq(0)
  },
  last: function() {
   return this.eq(-1)
  },
  eq: function(e) {
   var t = this.length,
    n = +e + (0 > e ? t : 0);
   return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
  },
  map: function(e) {
   return this.pushStack(b.map(this, function(t, n) {
    return e.call(t, n, t)
   }))
  },
  end: function() {
   return this.prevObject || this.constructor(null)
  },
  push: d,
  sort: [].sort,
  splice: [].splice
 }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
  var e, n, r, i, o, a, s = arguments[0] || {},
   u = 1,
   l = arguments.length,
   c = !1;
  for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
   if (null != (o = arguments[u]))
    for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
  return s
 }, b.extend({
  noConflict: function(t) {
   return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
  },
  isReady: !1,
  readyWait: 1,
  holdReady: function(e) {
   e ? b.readyWait++ : b.ready(!0)
  },
  ready: function(e) {
   if (e === !0 ? !--b.readyWait : !b.isReady) {
    if (!o.body) return setTimeout(b.ready);
    b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
   }
  },
  isFunction: function(e) {
   return "function" === b.type(e)
  },
  isArray: Array.isArray || function(e) {
   return "array" === b.type(e)
  },
  isWindow: function(e) {
   return null != e && e == e.window
  },
  isNumeric: function(e) {
   return !isNaN(parseFloat(e)) && isFinite(e)
  },
  type: function(e) {
   return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
  },
  isPlainObject: function(e) {
   if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
   try {
    if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
   } catch (n) {
    return !1
   }
   var r;
   for (r in e);
   return r === t || y.call(e, r)
  },
  isEmptyObject: function(e) {
   var t;
   for (t in e) return !1;
   return !0
  },
  error: function(e) {
   throw Error(e)
  },
  parseHTML: function(e, t, n) {
   if (!e || "string" != typeof e) return null;
   "boolean" == typeof t && (n = t, t = !1), t = t || o;
   var r = C.exec(e),
    i = !n && [];
   return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
  },
  parseJSON: function(n) {
   return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
  },
  parseXML: function(n) {
   var r, i;
   if (!n || "string" != typeof n) return null;
   try {
    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
   } catch (o) {
    r = t
   }
   return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
  },
  noop: function() {},
  globalEval: function(t) {
   t && b.trim(t) && (e.execScript || function(t) {
    e.eval.call(e, t)
   })(t)
  },
  camelCase: function(e) {
   return e.replace(j, "ms-").replace(D, L)
  },
  nodeName: function(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  },
  each: function(e, t, n) {
   var r, i = 0,
    o = e.length,
    a = M(e);
   if (n) {
    if (a) {
     for (; o > i; i++)
      if (r = t.apply(e[i], n), r === !1) break
    } else
     for (i in e)
      if (r = t.apply(e[i], n), r === !1) break
   } else if (a) {
    for (; o > i; i++)
     if (r = t.call(e[i], i, e[i]), r === !1) break
   } else
    for (i in e)
     if (r = t.call(e[i], i, e[i]), r === !1) break; return e
  },
  trim: v && !v.call("\ufeff\u00a0") ? function(e) {
   return null == e ? "" : v.call(e)
  } : function(e) {
   return null == e ? "" : (e + "").replace(T, "")
  },
  makeArray: function(e, t) {
   var n = t || [];
   return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
  },
  inArray: function(e, t, n) {
   var r;
   if (t) {
    if (g) return g.call(t, e, n);
    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
     if (n in t && t[n] === e) return n
   }
   return -1
  },
  merge: function(e, n) {
   var r = n.length,
    i = e.length,
    o = 0;
   if ("number" == typeof r)
    for (; r > o; o++) e[i++] = n[o];
   else
    while (n[o] !== t) e[i++] = n[o++];
   return e.length = i, e
  },
  grep: function(e, t, n) {
   var r, i = [],
    o = 0,
    a = e.length;
   for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
   return i
  },
  map: function(e, t, n) {
   var r, i = 0,
    o = e.length,
    a = M(e),
    s = [];
   if (a)
    for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
   else
    for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
   return f.apply([], s)
  },
  guid: 1,
  proxy: function(e, n) {
   var r, i, o;
   return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
    return e.apply(n || this, r.concat(h.call(arguments)))
   }, i.guid = e.guid = e.guid || b.guid++, i) : t
  },
  access: function(e, n, r, i, o, a, s) {
   var u = 0,
    l = e.length,
    c = null == r;
   if ("object" === b.type(r)) {
    o = !0;
    for (u in r) b.access(e, n, u, r[u], !0, a, s)
   } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
     return c.call(b(e), n)
    })), n))
    for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
   return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
  },
  now: function() {
   return (new Date).getTime()
  }
 }), b.ready.promise = function(t) {
  if (!n)
   if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
   else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
  else {
   o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
   var r = !1;
   try {
    r = null == e.frameElement && o.documentElement
   } catch (i) {}
   r && r.doScroll && function a() {
    if (!b.isReady) {
     try {
      r.doScroll("left")
     } catch (e) {
      return setTimeout(a, 50)
     }
     q(), b.ready()
    }
   }()
  }
  return n.promise(t)
 }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
  l["[object " + t + "]"] = t.toLowerCase()
 });

 function M(e) {
  var t = e.length,
   n = b.type(e);
  return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
 }
 r = b(o);
 var _ = {};

 function F(e) {
  var t = _[e] = {};
  return b.each(e.match(w) || [], function(e, n) {
   t[n] = !0
  }), t
 }
 b.Callbacks = function(e) {
  e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
  var n, r, i, o, a, s, u = [],
   l = !e.once && [],
   c = function(t) {
    for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
     if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
      r = !1;
      break
     }
    n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
   },
   p = {
    add: function() {
     if (u) {
      var t = u.length;
      (function i(t) {
       b.each(t, function(t, n) {
        var r = b.type(n);
        "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
       })
      })(arguments), n ? o = u.length : r && (s = t, c(r))
     }
     return this
    },
    remove: function() {
     return u && b.each(arguments, function(e, t) {
      var r;
      while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
     }), this
    },
    has: function(e) {
     return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
    },
    empty: function() {
     return u = [], this
    },
    disable: function() {
     return u = l = r = t, this
    },
    disabled: function() {
     return !u
    },
    lock: function() {
     return l = t, r || p.disable(), this
    },
    locked: function() {
     return !l
    },
    fireWith: function(e, t) {
     return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
    },
    fire: function() {
     return p.fireWith(this, arguments), this
    },
    fired: function() {
     return !!i
    }
   };
  return p
 }, b.extend({
  Deferred: function(e) {
   var t = [
     ["resolve", "done", b.Callbacks("once memory"), "resolved"],
     ["reject", "fail", b.Callbacks("once memory"), "rejected"],
     ["notify", "progress", b.Callbacks("memory")]
    ],
    n = "pending",
    r = {
     state: function() {
      return n
     },
     always: function() {
      return i.done(arguments).fail(arguments), this
     },
     then: function() {
      var e = arguments;
      return b.Deferred(function(n) {
       b.each(t, function(t, o) {
        var a = o[0],
         s = b.isFunction(e[t]) && e[t];
        i[o[1]](function() {
         var e = s && s.apply(this, arguments);
         e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
        })
       }), e = null
      }).promise()
     },
     promise: function(e) {
      return null != e ? b.extend(e, r) : r
     }
    },
    i = {};
   return r.pipe = r.then, b.each(t, function(e, o) {
    var a = o[2],
     s = o[3];
    r[o[1]] = a.add, s && a.add(function() {
     n = s
    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
     return i[o[0] + "With"](this === i ? r : this, arguments), this
    }, i[o[0] + "With"] = a.fireWith
   }), r.promise(i), e && e.call(i, i), i
  },
  when: function(e) {
   var t = 0,
    n = h.call(arguments),
    r = n.length,
    i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
    o = 1 === i ? e : b.Deferred(),
    a = function(e, t, n) {
     return function(r) {
      t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
     }
    },
    s, u, l;
   if (r > 1)
    for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
   return i || o.resolveWith(l, n), o.promise()
  }
 }), b.support = function() {
  var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
  if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
  s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
   getSetAttribute: "t" !== d.className,
   leadingWhitespace: 3 === d.firstChild.nodeType,
   tbody: !d.getElementsByTagName("tbody").length,
   htmlSerialize: !!d.getElementsByTagName("link").length,
   style: /top/.test(r.getAttribute("style")),
   hrefNormalized: "/a" === r.getAttribute("href"),
   opacity: /^0.5/.test(r.style.opacity),
   cssFloat: !!r.style.cssFloat,
   checkOn: !!a.value,
   optSelected: l.selected,
   enctype: !!o.createElement("form").enctype,
   html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
   boxModel: "CSS1Compat" === o.compatMode,
   deleteExpando: !0,
   noCloneEvent: !0,
   inlineBlockNeedsLayout: !1,
   shrinkWrapBlocks: !1,
   reliableMarginRight: !0,
   boxSizingReliable: !0,
   pixelPosition: !1
  }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
  try {
   delete d.test
  } catch (h) {
   t.deleteExpando = !1
  }
  a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
   t.noCloneEvent = !1
  }), d.cloneNode(!0).click());
  for (f in {
    submit: !0,
    change: !0,
    focusin: !0
   }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
  return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
   var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
    u = o.getElementsByTagName("body")[0];
   u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
    width: "4px"
   }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
  }), n = s = u = l = r = a = null, t
 }();
 var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  B = /([A-Z])/g;

 function P(e, n, r, i) {
  if (b.acceptData(e)) {
   var o, a, s = b.expando,
    u = "string" == typeof n,
    l = e.nodeType,
    p = l ? b.cache : e,
    f = l ? e[s] : e[s] && s;
   if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
  }
 }

 function R(e, t, n) {
  if (b.acceptData(e)) {
   var r, i, o, a = e.nodeType,
    s = a ? b.cache : e,
    u = a ? e[b.expando] : b.expando;
   if (s[u]) {
    if (t && (o = n ? s[u] : s[u].data)) {
     b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
     for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
     if (!(n ? $ : b.isEmptyObject)(o)) return
    }(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
   }
  }
 }
 b.extend({
  cache: {},
  expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
  noData: {
   embed: !0,
   object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
   applet: !0
  },
  hasData: function(e) {
   return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
  },
  data: function(e, t, n) {
   return P(e, t, n)
  },
  removeData: function(e, t) {
   return R(e, t)
  },
  _data: function(e, t, n) {
   return P(e, t, n, !0)
  },
  _removeData: function(e, t) {
   return R(e, t, !0)
  },
  acceptData: function(e) {
   if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
   var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
   return !t || t !== !0 && e.getAttribute("classid") === t
  }
 }), b.fn.extend({
  data: function(e, n) {
   var r, i, o = this[0],
    a = 0,
    s = null;
   if (e === t) {
    if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
     for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
     b._data(o, "parsedAttrs", !0)
    }
    return s
   }
   return "object" == typeof e ? this.each(function() {
    b.data(this, e)
   }) : b.access(this, function(n) {
    return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
     b.data(this, e, n)
    }), t)
   }, null, n, arguments.length > 1, null, !0)
  },
  removeData: function(e) {
   return this.each(function() {
    b.removeData(this, e)
   })
  }
 });

 function W(e, n, r) {
  if (r === t && 1 === e.nodeType) {
   var i = "data-" + n.replace(B, "-$1").toLowerCase();
   if (r = e.getAttribute(i), "string" == typeof r) {
    try {
     r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
    } catch (o) {}
    b.data(e, n, r)
   } else r = t
  }
  return r
 }

 function $(e) {
  var t;
  for (t in e)
   if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
  return !0
 }
 b.extend({
  queue: function(e, n, r) {
   var i;
   return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
  },
  dequeue: function(e, t) {
   t = t || "fx";
   var n = b.queue(e, t),
    r = n.length,
    i = n.shift(),
    o = b._queueHooks(e, t),
    a = function() {
     b.dequeue(e, t)
    };
   "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
  },
  _queueHooks: function(e, t) {
   var n = t + "queueHooks";
   return b._data(e, n) || b._data(e, n, {
    empty: b.Callbacks("once memory").add(function() {
     b._removeData(e, t + "queue"), b._removeData(e, n)
    })
   })
  }
 }), b.fn.extend({
  queue: function(e, n) {
   var r = 2;
   return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
    var t = b.queue(this, e, n);
    b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
   })
  },
  dequeue: function(e) {
   return this.each(function() {
    b.dequeue(this, e)
   })
  },
  delay: function(e, t) {
   return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
    var r = setTimeout(t, e);
    n.stop = function() {
     clearTimeout(r)
    }
   })
  },
  clearQueue: function(e) {
   return this.queue(e || "fx", [])
  },
  promise: function(e, n) {
   var r, i = 1,
    o = b.Deferred(),
    a = this,
    s = this.length,
    u = function() {
     --i || o.resolveWith(a, [a])
    };
   "string" != typeof e && (n = e, e = t), e = e || "fx";
   while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
   return u(), o.promise(n)
  }
 });
 var I, z, X = /[\t\r\n]/g,
  U = /\r/g,
  V = /^(?:input|select|textarea|button|object)$/i,
  Y = /^(?:a|area)$/i,
  J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
  G = /^(?:checked|selected)$/i,
  Q = b.support.getSetAttribute,
  K = b.support.input;
 b.fn.extend({
  attr: function(e, t) {
   return b.access(this, b.attr, e, t, arguments.length > 1)
  },
  removeAttr: function(e) {
   return this.each(function() {
    b.removeAttr(this, e)
   })
  },
  prop: function(e, t) {
   return b.access(this, b.prop, e, t, arguments.length > 1)
  },
  removeProp: function(e) {
   return e = b.propFix[e] || e, this.each(function() {
    try {
     this[e] = t, delete this[e]
    } catch (n) {}
   })
  },
  addClass: function(e) {
   var t, n, r, i, o, a = 0,
    s = this.length,
    u = "string" == typeof e && e;
   if (b.isFunction(e)) return this.each(function(t) {
    b(this).addClass(e.call(this, t, this.className))
   });
   if (u)
    for (t = (e || "").match(w) || []; s > a; a++)
     if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
      o = 0;
      while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
      n.className = b.trim(r)
     }
   return this
  },
  removeClass: function(e) {
   var t, n, r, i, o, a = 0,
    s = this.length,
    u = 0 === arguments.length || "string" == typeof e && e;
   if (b.isFunction(e)) return this.each(function(t) {
    b(this).removeClass(e.call(this, t, this.className))
   });
   if (u)
    for (t = (e || "").match(w) || []; s > a; a++)
     if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
      o = 0;
      while (i = t[o++])
       while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
      n.className = e ? b.trim(r) : ""
     }
   return this
  },
  toggleClass: function(e, t) {
   var n = typeof e,
    r = "boolean" == typeof t;
   return b.isFunction(e) ? this.each(function(n) {
    b(this).toggleClass(e.call(this, n, this.className, t), t)
   }) : this.each(function() {
    if ("string" === n) {
     var o, a = 0,
      s = b(this),
      u = t,
      l = e.match(w) || [];
     while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
    } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
   })
  },
  hasClass: function(e) {
   var t = " " + e + " ",
    n = 0,
    r = this.length;
   for (; r > n; n++)
    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
   return !1
  },
  val: function(e) {
   var n, r, i, o = this[0]; {
    if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
     var o, a = b(this);
     1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
      return null == e ? "" : e + ""
     })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
    });
    if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
   }
  }
 }), b.extend({
  valHooks: {
   option: {
    get: function(e) {
     var t = e.attributes.value;
     return !t || t.specified ? e.value : e.text
    }
   },
   select: {
    get: function(e) {
     var t, n, r = e.options,
      i = e.selectedIndex,
      o = "select-one" === e.type || 0 > i,
      a = o ? null : [],
      s = o ? i + 1 : r.length,
      u = 0 > i ? s : o ? i : 0;
     for (; s > u; u++)
      if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
       if (t = b(n).val(), o) return t;
       a.push(t)
      }
     return a
    },
    set: function(e, t) {
     var n = b.makeArray(t);
     return b(e).find("option").each(function() {
      this.selected = b.inArray(b(this).val(), n) >= 0
     }), n.length || (e.selectedIndex = -1), n
    }
   }
  },
  attr: function(e, n, r) {
   var o, a, s, u = e.nodeType;
   if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
  },
  removeAttr: function(e, t) {
   var n, r, i = 0,
    o = t && t.match(w);
   if (o && 1 === e.nodeType)
    while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
  },
  attrHooks: {
   type: {
    set: function(e, t) {
     if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t
     }
    }
   }
  },
  propFix: {
   tabindex: "tabIndex",
   readonly: "readOnly",
   "for": "htmlFor",
   "class": "className",
   maxlength: "maxLength",
   cellspacing: "cellSpacing",
   cellpadding: "cellPadding",
   rowspan: "rowSpan",
   colspan: "colSpan",
   usemap: "useMap",
   frameborder: "frameBorder",
   contenteditable: "contentEditable"
  },
  prop: function(e, n, r) {
   var i, o, a, s = e.nodeType;
   if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
  },
  propHooks: {
   tabIndex: {
    get: function(e) {
     var n = e.getAttributeNode("tabindex");
     return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
    }
   }
  }
 }), z = {
  get: function(e, n) {
   var r = b.prop(e, n),
    i = "boolean" == typeof r && e.getAttribute(n),
    o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
   return o && o.value !== !1 ? n.toLowerCase() : t
  },
  set: function(e, t, n) {
   return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
  }
 }, K && Q || (b.attrHooks.value = {
  get: function(e, n) {
   var r = e.getAttributeNode(n);
   return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
  },
  set: function(e, n, r) {
   return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
  }
 }), Q || (I = b.valHooks.button = {
  get: function(e, n) {
   var r = e.getAttributeNode(n);
   return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
  },
  set: function(e, n, r) {
   var i = e.getAttributeNode(r);
   return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
  }
 }, b.attrHooks.contenteditable = {
  get: I.get,
  set: function(e, t, n) {
   I.set(e, "" === t ? !1 : t, n)
  }
 }, b.each(["width", "height"], function(e, n) {
  b.attrHooks[n] = b.extend(b.attrHooks[n], {
   set: function(e, r) {
    return "" === r ? (e.setAttribute(n, "auto"), r) : t
   }
  })
 })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
  b.attrHooks[n] = b.extend(b.attrHooks[n], {
   get: function(e) {
    var r = e.getAttribute(n, 2);
    return null == r ? t : r
   }
  })
 }), b.each(["href", "src"], function(e, t) {
  b.propHooks[t] = {
   get: function(e) {
    return e.getAttribute(t, 4)
   }
  }
 })), b.support.style || (b.attrHooks.style = {
  get: function(e) {
   return e.style.cssText || t
  },
  set: function(e, t) {
   return e.style.cssText = t + ""
  }
 }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
  get: function(e) {
   var t = e.parentNode;
   return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
  }
 })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
  b.valHooks[this] = {
   get: function(e) {
    return null === e.getAttribute("value") ? "on" : e.value
   }
  }
 }), b.each(["radio", "checkbox"], function() {
  b.valHooks[this] = b.extend(b.valHooks[this], {
   set: function(e, n) {
    return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
   }
  })
 });
 var Z = /^(?:input|select|textarea)$/i,
  et = /^key/,
  tt = /^(?:mouse|contextmenu)|click/,
  nt = /^(?:focusinfocus|focusoutblur)$/,
  rt = /^([^.]*)(?:\.(.+)|)$/;

 function it() {
  return !0
 }

 function ot() {
  return !1
 }
 b.event = {
   global: {},
   add: function(e, n, r, o, a) {
    var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
    if (v) {
     r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
      return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
     }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
     while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
      type: g,
      origType: y,
      data: o,
      handler: r,
      guid: r.guid,
      selector: a,
      needsContext: a && b.expr.match.needsContext.test(a),
      namespace: m.join(".")
     }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
     e = null
    }
   },
   remove: function(e, t, n, r, i) {
    var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
    if (m && (c = m.events)) {
     t = (t || "").match(w) || [""], l = t.length;
     while (l--)
      if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
       p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
       while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
       u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
      } else
       for (d in c) b.event.remove(e, d + t[l], n, r, !0);
     b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
    }
   },
   trigger: function(n, r, i, a) {
    var s, u, l, c, p, f, d, h = [i || o],
     g = y.call(n, "type") ? n.type : n,
     m = y.call(n, "namespace") ? n.namespace.split(".") : [];
    if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
     if (!a && !p.noBubble && !b.isWindow(i)) {
      for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
      f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
     }
     d = 0;
     while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
     if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
      f = i[u], f && (i[u] = null), b.event.triggered = g;
      try {
       i[g]()
      } catch (v) {}
      b.event.triggered = t, f && (i[u] = f)
     }
     return n.result
    }
   },
   dispatch: function(e) {
    e = b.event.fix(e);
    var n, r, i, o, a, s = [],
     u = h.call(arguments),
     l = (b._data(this, "events") || {})[e.type] || [],
     c = b.event.special[e.type] || {};
    if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
     s = b.event.handlers.call(this, e, l), n = 0;
     while ((o = s[n++]) && !e.isPropagationStopped()) {
      e.currentTarget = o.elem, a = 0;
      while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
     }
     return c.postDispatch && c.postDispatch.call(this, e), e.result
    }
   },
   handlers: function(e, n) {
    var r, i, o, a, s = [],
     u = n.delegateCount,
     l = e.target;
    if (u && l.nodeType && (!e.button || "click" !== e.type))
     for (; l != this; l = l.parentNode || this)
      if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
       for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
       o.length && s.push({
        elem: l,
        handlers: o
       })
      }
    return n.length > u && s.push({
     elem: this,
     handlers: n.slice(u)
    }), s
   },
   fix: function(e) {
    if (e[b.expando]) return e;
    var t, n, r, i = e.type,
     a = e,
     s = this.fixHooks[i];
    s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
    while (t--) n = r[t], e[n] = a[n];
    return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
   },
   props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
   fixHooks: {},
   keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function(e, t) {
     return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }
   },
   mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function(e, n) {
     var r, i, a, s = n.button,
      u = n.fromElement;
     return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }
   },
   special: {
    load: {
     noBubble: !0
    },
    click: {
     trigger: function() {
      return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
     }
    },
    focus: {
     trigger: function() {
      if (this !== o.activeElement && this.focus) try {
       return this.focus(), !1
      } catch (e) {}
     },
     delegateType: "focusin"
    },
    blur: {
     trigger: function() {
      return this === o.activeElement && this.blur ? (this.blur(), !1) : t
     },
     delegateType: "focusout"
    },
    beforeunload: {
     postDispatch: function(e) {
      e.result !== t && (e.originalEvent.returnValue = e.result)
     }
    }
   },
   simulate: function(e, t, n, r) {
    var i = b.extend(new b.Event, n, {
     type: e,
     isSimulated: !0,
     originalEvent: {}
    });
    r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
   }
  }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
   e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
   var r = "on" + t;
   e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
  }, b.Event = function(e, n) {
   return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
  }, b.Event.prototype = {
   isDefaultPrevented: ot,
   isPropagationStopped: ot,
   isImmediatePropagationStopped: ot,
   preventDefault: function() {
    var e = this.originalEvent;
    this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
   },
   stopPropagation: function() {
    var e = this.originalEvent;
    this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
   },
   stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = it, this.stopPropagation()
   }
  }, b.each({
   mouseenter: "mouseover",
   mouseleave: "mouseout"
  }, function(e, t) {
   b.event.special[e] = {
    delegateType: t,
    bindType: t,
    handle: function(e) {
     var n, r = this,
      i = e.relatedTarget,
      o = e.handleObj;
     return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
    }
   }
  }), b.support.submitBubbles || (b.event.special.submit = {
   setup: function() {
    return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
     var n = e.target,
      r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
     r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
      e._submit_bubble = !0
     }), b._data(r, "submitBubbles", !0))
    }), t)
   },
   postDispatch: function(e) {
    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
   },
   teardown: function() {
    return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
   }
  }), b.support.changeBubbles || (b.event.special.change = {
   setup: function() {
    return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
     "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
    }), b.event.add(this, "click._change", function(e) {
     this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
    })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
     var t = e.target;
     Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
      !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
     }), b._data(t, "changeBubbles", !0))
    }), t)
   },
   handle: function(e) {
    var n = e.target;
    return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
   },
   teardown: function() {
    return b.event.remove(this, "._change"), !Z.test(this.nodeName)
   }
  }), b.support.focusinBubbles || b.each({
   focus: "focusin",
   blur: "focusout"
  }, function(e, t) {
   var n = 0,
    r = function(e) {
     b.event.simulate(t, e.target, b.event.fix(e), !0)
    };
   b.event.special[t] = {
    setup: function() {
     0 === n++ && o.addEventListener(e, r, !0)
    },
    teardown: function() {
     0 === --n && o.removeEventListener(e, r, !0)
    }
   }
  }), b.fn.extend({
   on: function(e, n, r, i, o) {
    var a, s;
    if ("object" == typeof e) {
     "string" != typeof n && (r = r || n, n = t);
     for (a in e) this.on(a, n, r, e[a], o);
     return this
    }
    if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
    else if (!i) return this;
    return 1 === o && (s = i, i = function(e) {
     return b().off(e), s.apply(this, arguments)
    }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
     b.event.add(this, e, i, r, n)
    })
   },
   one: function(e, t, n, r) {
    return this.on(e, t, n, r, 1)
   },
   off: function(e, n, r) {
    var i, o;
    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
    if ("object" == typeof e) {
     for (o in e) this.off(o, n, e[o]);
     return this
    }
    return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
     b.event.remove(this, e, r, n)
    })
   },
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
   trigger: function(e, t) {
    return this.each(function() {
     b.event.trigger(e, t, this)
    })
   },
   triggerHandler: function(e, n) {
    var r = this[0];
    return r ? b.event.trigger(e, n, r, !0) : t
   }
  }),
  function(e, t) {
   var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
    w = e.document,
    T = {},
    N = 0,
    C = 0,
    k = it(),
    E = it(),
    S = it(),
    A = typeof t,
    j = 1 << 31,
    D = [],
    L = D.pop,
    H = D.push,
    q = D.slice,
    M = D.indexOf || function(e) {
     var t = 0,
      n = this.length;
     for (; n > t; t++)
      if (this[t] === e) return t;
     return -1
    },
    _ = "[\\x20\\t\\r\\n\\f]",
    F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    O = F.replace("w", "w#"),
    B = "([*^$|!~]?=)",
    P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
    R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
    W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
    $ = RegExp("^" + _ + "*," + _ + "*"),
    I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
    z = RegExp(R),
    X = RegExp("^" + O + "$"),
    U = {
     ID: RegExp("^#(" + F + ")"),
     CLASS: RegExp("^\\.(" + F + ")"),
     NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
     TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
     ATTR: RegExp("^" + P),
     PSEUDO: RegExp("^" + R),
     CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
     needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
    },
    V = /[\x20\t\r\n\f]*[+~]/,
    Y = /^[^{]+\{\s*\[native code/,
    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    G = /^(?:input|select|textarea|button)$/i,
    Q = /^h\d$/i,
    K = /'|\\/g,
    Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
    et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
    tt = function(e, t) {
     var n = "0x" + t - 65536;
     return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
    };
   try {
    q.call(w.documentElement.childNodes, 0)[0].nodeType
   } catch (nt) {
    q = function(e) {
     var t, n = [];
     while (t = this[e++]) n.push(t);
     return n
    }
   }

   function rt(e) {
    return Y.test(e + "")
   }

   function it() {
    var e, t = [];
    return e = function(n, r) {
     return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
    }
   }

   function ot(e) {
    return e[x] = !0, e
   }

   function at(e) {
    var t = p.createElement("div");
    try {
     return e(t)
    } catch (n) {
     return !1
    } finally {
     t = null
    }
   }

   function st(e, t, n, r) {
    var i, o, a, s, u, l, f, g, m, v;
    if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
    if (1 !== (s = t.nodeType) && 9 !== s) return [];
    if (!d && !r) {
     if (i = J.exec(e))
      if (a = i[1]) {
       if (9 === s) {
        if (o = t.getElementById(a), !o || !o.parentNode) return n;
        if (o.id === a) return n.push(o), n
       } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
      } else {
       if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
       if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
      }
     if (T.qsa && !h.test(e)) {
      if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
       l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
       while (u--) l[u] = g + dt(l[u]);
       m = V.test(e) && t.parentNode || t, v = l.join(",")
      }
      if (v) try {
       return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
      } catch (b) {} finally {
       f || t.removeAttribute("id")
      }
     }
    }
    return wt(e.replace(W, "$1"), t, n, r)
   }
   a = st.isXML = function(e) {
    var t = e && (e.ownerDocument || e).documentElement;
    return t ? "HTML" !== t.nodeName : !1
   }, c = st.setDocument = function(e) {
    var n = e ? e.ownerDocument || e : w;
    return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
     return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
    }), T.attributes = at(function(e) {
     e.innerHTML = "<select></select>";
     var t = typeof e.lastChild.getAttribute("multiple");
     return "boolean" !== t && "string" !== t
    }), T.getByClassName = at(function(e) {
     return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
    }), T.getByName = at(function(e) {
     e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
     var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
     return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
    }), i.attrHandle = at(function(e) {
     return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
    }) ? {} : {
     href: function(e) {
      return e.getAttribute("href", 2)
     },
     type: function(e) {
      return e.getAttribute("type")
     }
    }, T.getIdNotName ? (i.find.ID = function(e, t) {
     if (typeof t.getElementById !== A && !d) {
      var n = t.getElementById(e);
      return n && n.parentNode ? [n] : []
     }
    }, i.filter.ID = function(e) {
     var t = e.replace(et, tt);
     return function(e) {
      return e.getAttribute("id") === t
     }
    }) : (i.find.ID = function(e, n) {
     if (typeof n.getElementById !== A && !d) {
      var r = n.getElementById(e);
      return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
     }
    }, i.filter.ID = function(e) {
     var t = e.replace(et, tt);
     return function(e) {
      var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
      return n && n.value === t
     }
    }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
     return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
    } : function(e, t) {
     var n, r = [],
      i = 0,
      o = t.getElementsByTagName(e);
     if ("*" === e) {
      while (n = o[i++]) 1 === n.nodeType && r.push(n);
      return r
     }
     return o
    }, i.find.NAME = T.getByName && function(e, n) {
     return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
    }, i.find.CLASS = T.getByClassName && function(e, n) {
     return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
    }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
     e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
    }), at(function(e) {
     e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
    })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
     T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
    }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
     var n = 9 === e.nodeType ? e.documentElement : e,
      r = t && t.parentNode;
     return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
    } : function(e, t) {
     if (t)
      while (t = t.parentNode)
       if (t === e) return !0;
     return !1
    }, v = f.compareDocumentPosition ? function(e, t) {
     var r;
     return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
    } : function(e, t) {
     var r, i = 0,
      o = e.parentNode,
      a = t.parentNode,
      s = [e],
      l = [t];
     if (e === t) return u = !0, 0;
     if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
     if (o === a) return ut(e, t);
     r = e;
     while (r = r.parentNode) s.unshift(r);
     r = t;
     while (r = r.parentNode) l.unshift(r);
     while (s[i] === l[i]) i++;
     return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
    }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
   }, st.matches = function(e, t) {
    return st(e, null, null, t)
   }, st.matchesSelector = function(e, t) {
    if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
     var n = m.call(e, t);
     if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
    } catch (r) {}
    return st(t, p, null, [e]).length > 0
   }, st.contains = function(e, t) {
    return (e.ownerDocument || e) !== p && c(e), y(e, t)
   }, st.attr = function(e, t) {
    var n;
    return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
   }, st.error = function(e) {
    throw Error("Syntax error, unrecognized expression: " + e)
   }, st.uniqueSort = function(e) {
    var t, n = [],
     r = 1,
     i = 0;
    if (u = !T.detectDuplicates, e.sort(v), u) {
     for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
     while (i--) e.splice(n[i], 1)
    }
    return e
   };

   function ut(e, t) {
    var n = t && e,
     r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
    if (r) return r;
    if (n)
     while (n = n.nextSibling)
      if (n === t) return -1;
    return e ? 1 : -1
   }

   function lt(e) {
    return function(t) {
     var n = t.nodeName.toLowerCase();
     return "input" === n && t.type === e
    }
   }

   function ct(e) {
    return function(t) {
     var n = t.nodeName.toLowerCase();
     return ("input" === n || "button" === n) && t.type === e
    }
   }

   function pt(e) {
    return ot(function(t) {
     return t = +t, ot(function(n, r) {
      var i, o = e([], n.length, t),
       a = o.length;
      while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
     })
    })
   }
   o = st.getText = function(e) {
    var t, n = "",
     r = 0,
     i = e.nodeType;
    if (i) {
     if (1 === i || 9 === i || 11 === i) {
      if ("string" == typeof e.textContent) return e.textContent;
      for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
     } else if (3 === i || 4 === i) return e.nodeValue
    } else
     for (; t = e[r]; r++) n += o(t);
    return n
   }, i = st.selectors = {
    cacheLength: 50,
    createPseudo: ot,
    match: U,
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
     ATTR: function(e) {
      return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
     },
     CHILD: function(e) {
      return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
     },
     PSEUDO: function(e) {
      var t, n = !e[5] && e[2];
      return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
     }
    },
    filter: {
     TAG: function(e) {
      return "*" === e ? function() {
       return !0
      } : (e = e.replace(et, tt).toLowerCase(), function(t) {
       return t.nodeName && t.nodeName.toLowerCase() === e
      })
     },
     CLASS: function(e) {
      var t = k[e + " "];
      return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
       return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
      })
     },
     ATTR: function(e, t, n) {
      return function(r) {
       var i = st.attr(r, e);
       return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
      }
     },
     CHILD: function(e, t, n, r, i) {
      var o = "nth" !== e.slice(0, 3),
       a = "last" !== e.slice(-4),
       s = "of-type" === t;
      return 1 === r && 0 === i ? function(e) {
       return !!e.parentNode
      } : function(t, n, u) {
       var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
        m = t.parentNode,
        y = s && t.nodeName.toLowerCase(),
        v = !u && !s;
       if (m) {
        if (o) {
         while (g) {
          p = t;
          while (p = p[g])
           if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
          h = g = "only" === e && !h && "nextSibling"
         }
         return !0
        }
        if (h = [a ? m.firstChild : m.lastChild], a && v) {
         c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
         while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
          if (1 === p.nodeType && ++f && p === t) {
           c[e] = [N, d, f];
           break
          }
        } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
        else
         while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
          if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
       }
      }
     },
     PSEUDO: function(e, t) {
      var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
      return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
       var i, o = r(e, t),
        a = o.length;
       while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
      }) : function(e) {
       return r(e, 0, n)
      }) : r
     }
    },
    pseudos: {
     not: ot(function(e) {
      var t = [],
       n = [],
       r = s(e.replace(W, "$1"));
      return r[x] ? ot(function(e, t, n, i) {
       var o, a = r(e, null, i, []),
        s = e.length;
       while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
      }) : function(e, i, o) {
       return t[0] = e, r(t, null, o, n), !n.pop()
      }
     }),
     has: ot(function(e) {
      return function(t) {
       return st(e, t).length > 0
      }
     }),
     contains: ot(function(e) {
      return function(t) {
       return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
      }
     }),
     lang: ot(function(e) {
      return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
       function(t) {
        var n;
        do
         if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
        while ((t = t.parentNode) && 1 === t.nodeType);
        return !1
       }
     }),
     target: function(t) {
      var n = e.location && e.location.hash;
      return n && n.slice(1) === t.id
     },
     root: function(e) {
      return e === f
     },
     focus: function(e) {
      return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
     },
     enabled: function(e) {
      return e.disabled === !1
     },
     disabled: function(e) {
      return e.disabled === !0
     },
     checked: function(e) {
      var t = e.nodeName.toLowerCase();
      return "input" === t && !!e.checked || "option" === t && !!e.selected
     },
     selected: function(e) {
      return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
     },
     empty: function(e) {
      for (e = e.firstChild; e; e = e.nextSibling)
       if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
      return !0
     },
     parent: function(e) {
      return !i.pseudos.empty(e)
     },
     header: function(e) {
      return Q.test(e.nodeName)
     },
     input: function(e) {
      return G.test(e.nodeName)
     },
     button: function(e) {
      var t = e.nodeName.toLowerCase();
      return "input" === t && "button" === e.type || "button" === t
     },
     text: function(e) {
      var t;
      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
     },
     first: pt(function() {
      return [0]
     }),
     last: pt(function(e, t) {
      return [t - 1]
     }),
     eq: pt(function(e, t, n) {
      return [0 > n ? n + t : n]
     }),
     even: pt(function(e, t) {
      var n = 0;
      for (; t > n; n += 2) e.push(n);
      return e
     }),
     odd: pt(function(e, t) {
      var n = 1;
      for (; t > n; n += 2) e.push(n);
      return e
     }),
     lt: pt(function(e, t, n) {
      var r = 0 > n ? n + t : n;
      for (; --r >= 0;) e.push(r);
      return e
     }),
     gt: pt(function(e, t, n) {
      var r = 0 > n ? n + t : n;
      for (; t > ++r;) e.push(r);
      return e
     })
    }
   };
   for (n in {
     radio: !0,
     checkbox: !0,
     file: !0,
     password: !0,
     image: !0
    }) i.pseudos[n] = lt(n);
   for (n in {
     submit: !0,
     reset: !0
    }) i.pseudos[n] = ct(n);

   function ft(e, t) {
    var n, r, o, a, s, u, l, c = E[e + " "];
    if (c) return t ? 0 : c.slice(0);
    s = e, u = [], l = i.preFilter;
    while (s) {
     (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
      value: n,
      type: r[0].replace(W, " ")
     }), s = s.slice(n.length));
     for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
      value: n,
      type: a,
      matches: r
     }), s = s.slice(n.length));
     if (!n) break
    }
    return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
   }

   function dt(e) {
    var t = 0,
     n = e.length,
     r = "";
    for (; n > t; t++) r += e[t].value;
    return r
   }

   function ht(e, t, n) {
    var i = t.dir,
     o = n && "parentNode" === i,
     a = C++;
    return t.first ? function(t, n, r) {
     while (t = t[i])
      if (1 === t.nodeType || o) return e(t, n, r)
    } : function(t, n, s) {
     var u, l, c, p = N + " " + a;
     if (s) {
      while (t = t[i])
       if ((1 === t.nodeType || o) && e(t, n, s)) return !0
     } else
      while (t = t[i])
       if (1 === t.nodeType || o)
        if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
         if ((u = l[1]) === !0 || u === r) return u === !0
        } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
    }
   }

   function gt(e) {
    return e.length > 1 ? function(t, n, r) {
     var i = e.length;
     while (i--)
      if (!e[i](t, n, r)) return !1;
     return !0
    } : e[0]
   }

   function mt(e, t, n, r, i) {
    var o, a = [],
     s = 0,
     u = e.length,
     l = null != t;
    for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
    return a
   }

   function yt(e, t, n, r, i, o) {
    return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
     var l, c, p, f = [],
      d = [],
      h = a.length,
      g = o || xt(t || "*", s.nodeType ? [s] : s, []),
      m = !e || !o && t ? g : mt(g, f, e, s, u),
      y = n ? i || (o ? e : h || r) ? [] : a : m;
     if (n && n(m, y, s, u), r) {
      l = mt(y, d), r(l, [], s, u), c = l.length;
      while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
     }
     if (o) {
      if (i || e) {
       if (i) {
        l = [], c = y.length;
        while (c--)(p = y[c]) && l.push(m[c] = p);
        i(null, y = [], l, u)
       }
       c = y.length;
       while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
      }
     } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
    })
   }

   function vt(e) {
    var t, n, r, o = e.length,
     a = i.relative[e[0].type],
     s = a || i.relative[" "],
     u = a ? 1 : 0,
     c = ht(function(e) {
      return e === t
     }, s, !0),
     p = ht(function(e) {
      return M.call(t, e) > -1
     }, s, !0),
     f = [function(e, n, r) {
      return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
     }];
    for (; o > u; u++)
     if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
     else {
      if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
       for (r = ++u; o > r; r++)
        if (i.relative[e[r].type]) break;
       return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
      }
      f.push(n)
     }
    return gt(f)
   }

   function bt(e, t) {
    var n = 0,
     o = t.length > 0,
     a = e.length > 0,
     s = function(s, u, c, f, d) {
      var h, g, m, y = [],
       v = 0,
       b = "0",
       x = s && [],
       w = null != d,
       T = l,
       C = s || a && i.find.TAG("*", d && u.parentNode || u),
       k = N += null == T ? 1 : Math.random() || .1;
      for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
       if (a && h) {
        g = 0;
        while (m = e[g++])
         if (m(h, u, c)) {
          f.push(h);
          break
         }
        w && (N = k, r = ++n)
       }
       o && ((h = !m && h) && v--, s && x.push(h))
      }
      if (v += b, o && b !== v) {
       g = 0;
       while (m = t[g++]) m(x, y, u, c);
       if (s) {
        if (v > 0)
         while (b--) x[b] || y[b] || (y[b] = L.call(f));
        y = mt(y)
       }
       H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
      }
      return w && (N = k, l = T), x
     };
    return o ? ot(s) : s
   }
   s = st.compile = function(e, t) {
    var n, r = [],
     i = [],
     o = S[e + " "];
    if (!o) {
     t || (t = ft(e)), n = t.length;
     while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
     o = S(e, bt(i, r))
    }
    return o
   };

   function xt(e, t, n) {
    var r = 0,
     i = t.length;
    for (; i > r; r++) st(e, t[r], n);
    return n
   }

   function wt(e, t, n, r) {
    var o, a, u, l, c, p = ft(e);
    if (!r && 1 === p.length) {
     if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
      if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
      e = e.slice(a.shift().value.length)
     }
     o = U.needsContext.test(e) ? 0 : a.length;
     while (o--) {
      if (u = a[o], i.relative[l = u.type]) break;
      if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
       if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
       break
      }
     }
    }
    return s(e, p)(r, t, d, n, V.test(e)), n
   }
   i.pseudos.nth = i.pseudos.eq;

   function Tt() {}
   i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
  }(e);
 var at = /Until$/,
  st = /^(?:parents|prev(?:Until|All))/,
  ut = /^.[^:#\[\.,]*$/,
  lt = b.expr.match.needsContext,
  ct = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };
 b.fn.extend({
  find: function(e) {
   var t, n, r, i = this.length;
   if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
    for (t = 0; i > t; t++)
     if (b.contains(r[t], this)) return !0
   }));
   for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
   return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
  },
  has: function(e) {
   var t, n = b(e, this),
    r = n.length;
   return this.filter(function() {
    for (t = 0; r > t; t++)
     if (b.contains(this, n[t])) return !0
   })
  },
  not: function(e) {
   return this.pushStack(ft(this, e, !1))
  },
  filter: function(e) {
   return this.pushStack(ft(this, e, !0))
  },
  is: function(e) {
   return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
  },
  closest: function(e, t) {
   var n, r = 0,
    i = this.length,
    o = [],
    a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
   for (; i > r; r++) {
    n = this[r];
    while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
     if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
      o.push(n);
      break
     }
     n = n.parentNode
    }
   }
   return this.pushStack(o.length > 1 ? b.unique(o) : o)
  },
  index: function(e) {
   return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  },
  add: function(e, t) {
   var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
    r = b.merge(this.get(), n);
   return this.pushStack(b.unique(r))
  },
  addBack: function(e) {
   return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }
 }), b.fn.andSelf = b.fn.addBack;

 function pt(e, t) {
  do e = e[t]; while (e && 1 !== e.nodeType);
  return e
 }
 b.each({
  parent: function(e) {
   var t = e.parentNode;
   return t && 11 !== t.nodeType ? t : null
  },
  parents: function(e) {
   return b.dir(e, "parentNode")
  },
  parentsUntil: function(e, t, n) {
   return b.dir(e, "parentNode", n)
  },
  next: function(e) {
   return pt(e, "nextSibling")
  },
  prev: function(e) {
   return pt(e, "previousSibling")
  },
  nextAll: function(e) {
   return b.dir(e, "nextSibling")
  },
  prevAll: function(e) {
   return b.dir(e, "previousSibling")
  },
  nextUntil: function(e, t, n) {
   return b.dir(e, "nextSibling", n)
  },
  prevUntil: function(e, t, n) {
   return b.dir(e, "previousSibling", n)
  },
  siblings: function(e) {
   return b.sibling((e.parentNode || {}).firstChild, e)
  },
  children: function(e) {
   return b.sibling(e.firstChild)
  },
  contents: function(e) {
   return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
  }
 }, function(e, t) {
  b.fn[e] = function(n, r) {
   var i = b.map(this, t, n);
   return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
  }
 }), b.extend({
  filter: function(e, t, n) {
   return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
  },
  dir: function(e, n, r) {
   var i = [],
    o = e[n];
   while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
   return i
  },
  sibling: function(e, t) {
   var n = [];
   for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
   return n
  }
 });

 function ft(e, t, n) {
  if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
   var i = !!t.call(e, r, e);
   return i === n
  });
  if (t.nodeType) return b.grep(e, function(e) {
   return e === t === n
  });
  if ("string" == typeof t) {
   var r = b.grep(e, function(e) {
    return 1 === e.nodeType
   });
   if (ut.test(t)) return b.filter(t, r, !n);
   t = b.filter(t, r)
  }
  return b.grep(e, function(e) {
   return b.inArray(e, t) >= 0 === n
  })
 }

 function dt(e) {
  var t = ht.split("|"),
   n = e.createDocumentFragment();
  if (n.createElement)
   while (t.length) n.createElement(t.pop());
  return n
 }
 var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  gt = / jQuery\d+="(?:null|\d+)"/g,
  mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
  yt = /^\s+/,
  vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  bt = /<([\w:]+)/,
  xt = /<tbody/i,
  wt = /<|&#?\w+;/,
  Tt = /<(?:script|style|link)/i,
  Nt = /^(?:checkbox|radio)$/i,
  Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
  kt = /^$|\/(?:java|ecma)script/i,
  Et = /^true\/(.*)/,
  St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  At = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   legend: [1, "<fieldset>", "</fieldset>"],
   area: [1, "<map>", "</map>"],
   param: [1, "<object>", "</object>"],
   thead: [1, "<table>", "</table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
  jt = dt(o),
  Dt = jt.appendChild(o.createElement("div"));
 At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
  text: function(e) {
   return b.access(this, function(e) {
    return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
   }, null, e, arguments.length)
  },
  wrapAll: function(e) {
   if (b.isFunction(e)) return this.each(function(t) {
    b(this).wrapAll(e.call(this, t))
   });
   if (this[0]) {
    var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
     var e = this;
     while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
     return e
    }).append(this)
   }
   return this
  },
  wrapInner: function(e) {
   return b.isFunction(e) ? this.each(function(t) {
    b(this).wrapInner(e.call(this, t))
   }) : this.each(function() {
    var t = b(this),
     n = t.contents();
    n.length ? n.wrapAll(e) : t.append(e)
   })
  },
  wrap: function(e) {
   var t = b.isFunction(e);
   return this.each(function(n) {
    b(this).wrapAll(t ? e.call(this, n) : e)
   })
  },
  unwrap: function() {
   return this.parent().each(function() {
    b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
   }).end()
  },
  append: function() {
   return this.domManip(arguments, !0, function(e) {
    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
   })
  },
  prepend: function() {
   return this.domManip(arguments, !0, function(e) {
    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
   })
  },
  before: function() {
   return this.domManip(arguments, !1, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this)
   })
  },
  after: function() {
   return this.domManip(arguments, !1, function(e) {
    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
   })
  },
  remove: function(e, t) {
   var n, r = 0;
   for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
   return this
  },
  empty: function() {
   var e, t = 0;
   for (; null != (e = this[t]); t++) {
    1 === e.nodeType && b.cleanData(Ot(e, !1));
    while (e.firstChild) e.removeChild(e.firstChild);
    e.options && b.nodeName(e, "select") && (e.options.length = 0)
   }
   return this
  },
  clone: function(e, t) {
   return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
    return b.clone(this, e, t)
   })
  },
  html: function(e) {
   return b.access(this, function(e) {
    var n = this[0] || {},
     r = 0,
     i = this.length;
    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
    if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
     e = e.replace(vt, "<$1></$2>");
     try {
      for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
      n = 0
     } catch (o) {}
    }
    n && this.empty().append(e)
   }, null, e, arguments.length)
  },
  replaceWith: function(e) {
   var t = b.isFunction(e);
   return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
    var t = this.nextSibling,
     n = this.parentNode;
    n && (b(this).remove(), n.insertBefore(e, t))
   })
  },
  detach: function(e) {
   return this.remove(e, !0)
  },
  domManip: function(e, n, r) {
   e = f.apply([], e);
   var i, o, a, s, u, l, c = 0,
    p = this.length,
    d = this,
    h = p - 1,
    g = e[0],
    m = b.isFunction(g);
   if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
    var o = d.eq(i);
    m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
   });
   if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
    for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
    if (a)
     for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
      url: o.src,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
     }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
    l = i = null
   }
   return this
  }
 });

 function Lt(e, t) {
  return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
 }

 function Ht(e) {
  var t = e.getAttributeNode("type");
  return e.type = (t && t.specified) + "/" + e.type, e
 }

 function qt(e) {
  var t = Et.exec(e.type);
  return t ? e.type = t[1] : e.removeAttribute("type"), e
 }

 function Mt(e, t) {
  var n, r = 0;
  for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
 }

 function _t(e, t) {
  if (1 === t.nodeType && b.hasData(e)) {
   var n, r, i, o = b._data(e),
    a = b._data(t, o),
    s = o.events;
   if (s) {
    delete a.handle, a.events = {};
    for (n in s)
     for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
   }
   a.data && (a.data = b.extend({}, a.data))
  }
 }

 function Ft(e, t) {
  var n, r, i;
  if (1 === t.nodeType) {
   if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
    i = b._data(t);
    for (r in i.events) b.removeEvent(t, r, i.handle);
    t.removeAttribute(b.expando)
   }
   "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
  }
 }
 b.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(e, t) {
  b.fn[e] = function(e) {
   var n, r = 0,
    i = [],
    o = b(e),
    a = o.length - 1;
   for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
   return this.pushStack(i)
  }
 });

 function Ot(e, n) {
  var r, o, a = 0,
   s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
  if (!s)
   for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
  return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
 }

 function Bt(e) {
  Nt.test(e.type) && (e.defaultChecked = e.checked)
 }
 b.extend({
  clone: function(e, t, n) {
   var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
   if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
    for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
   if (t)
    if (n)
     for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
    else _t(e, o);
   return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
  },
  buildFragment: function(e, t, n, r) {
   var i, o, a, s, u, l, c, p = e.length,
    f = dt(t),
    d = [],
    h = 0;
   for (; p > h; h++)
    if (o = e[h], o || 0 === o)
     if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
     else if (wt.test(o)) {
    s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
    while (i--) s = s.lastChild;
    if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
     o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
     while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
    }
    b.merge(d, s.childNodes), s.textContent = "";
    while (s.firstChild) s.removeChild(s.firstChild);
    s = f.lastChild
   } else d.push(t.createTextNode(o));
   s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
   while (o = d[h++])
    if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
     i = 0;
     while (o = s[i++]) kt.test(o.type || "") && n.push(o)
    }
   return s = null, f
  },
  cleanData: function(e, t) {
   var n, r, o, a, s = 0,
    u = b.expando,
    l = b.cache,
    p = b.support.deleteExpando,
    f = b.event.special;
   for (; null != (n = e[s]); s++)
    if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
     if (a.events)
      for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
     l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
    }
  }
 });
 var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
  It = /opacity\s*=\s*([^)]*)/,
  zt = /^(top|right|bottom|left)$/,
  Xt = /^(none|table(?!-c[ea]).+)/,
  Ut = /^margin/,
  Vt = RegExp("^(" + x + ")(.*)$", "i"),
  Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
  Jt = RegExp("^([+-])=(" + x + ")", "i"),
  Gt = {
   BODY: "block"
  },
  Qt = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  Kt = {
   letterSpacing: 0,
   fontWeight: 400
  },
  Zt = ["Top", "Right", "Bottom", "Left"],
  en = ["Webkit", "O", "Moz", "ms"];

 function tn(e, t) {
  if (t in e) return t;
  var n = t.charAt(0).toUpperCase() + t.slice(1),
   r = t,
   i = en.length;
  while (i--)
   if (t = en[i] + n, t in e) return t;
  return r
 }

 function nn(e, t) {
  return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
 }

 function rn(e, t) {
  var n, r, i, o = [],
   a = 0,
   s = e.length;
  for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
  for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
  return e
 }
 b.fn.extend({
  css: function(e, n) {
   return b.access(this, function(e, n, r) {
    var i, o, a = {},
     s = 0;
    if (b.isArray(n)) {
     for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
     return a
    }
    return r !== t ? b.style(e, n, r) : b.css(e, n)
   }, e, n, arguments.length > 1)
  },
  show: function() {
   return rn(this, !0)
  },
  hide: function() {
   return rn(this)
  },
  toggle: function(e) {
   var t = "boolean" == typeof e;
   return this.each(function() {
    (t ? e : nn(this)) ? b(this).show(): b(this).hide()
   })
  }
 }), b.extend({
  cssHooks: {
   opacity: {
    get: function(e, t) {
     if (t) {
      var n = Wt(e, "opacity");
      return "" === n ? "1" : n
     }
    }
   }
  },
  cssNumber: {
   columnCount: !0,
   fillOpacity: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
  },
  style: function(e, n, r, i) {
   if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
    var o, a, s, u = b.camelCase(n),
     l = e.style;
    if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
    if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
     l[n] = r
    } catch (c) {}
   }
  },
  css: function(e, n, r, i) {
   var o, a, s, u = b.camelCase(n);
   return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
  },
  swap: function(e, t, n, r) {
   var i, o, a = {};
   for (o in t) a[o] = e.style[o], e.style[o] = t[o];
   i = n.apply(e, r || []);
   for (o in t) e.style[o] = a[o];
   return i
  }
 }), e.getComputedStyle ? (Rt = function(t) {
  return e.getComputedStyle(t, null)
 }, Wt = function(e, n, r) {
  var i, o, a, s = r || Rt(e),
   u = s ? s.getPropertyValue(n) || s[n] : t,
   l = e.style;
  return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
 }) : o.documentElement.currentStyle && (Rt = function(e) {
  return e.currentStyle
 }, Wt = function(e, n, r) {
  var i, o, a, s = r || Rt(e),
   u = s ? s[n] : t,
   l = e.style;
  return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
 });

 function on(e, t, n) {
  var r = Vt.exec(t);
  return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
 }

 function an(e, t, n, r, i) {
  var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
   a = 0;
  for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
  return a
 }

 function sn(e, t, n) {
  var r = !0,
   i = "width" === t ? e.offsetWidth : e.offsetHeight,
   o = Rt(e),
   a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
  if (0 >= i || null == i) {
   if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
   r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
  }
  return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
 }

 function un(e) {
  var t = o,
   n = Gt[e];
  return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
 }

 function ln(e, t) {
  var n = b(t.createElement(e)).appendTo(t.body),
   r = b.css(n[0], "display");
  return n.remove(), r
 }
 b.each(["height", "width"], function(e, n) {
  b.cssHooks[n] = {
   get: function(e, r, i) {
    return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
     return sn(e, n, i)
    }) : sn(e, n, i) : t
   },
   set: function(e, t, r) {
    var i = r && Rt(e);
    return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
   }
  }
 }), b.support.opacity || (b.cssHooks.opacity = {
  get: function(e, t) {
   return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
  },
  set: function(e, t) {
   var n = e.style,
    r = e.currentStyle,
    i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
    o = r && r.filter || n.filter || "";
   n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
  }
 }), b(function() {
  b.support.reliableMarginRight || (b.cssHooks.marginRight = {
   get: function(e, n) {
    return n ? b.swap(e, {
     display: "inline-block"
    }, Wt, [e, "marginRight"]) : t
   }
  }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
   b.cssHooks[n] = {
    get: function(e, r) {
     return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
    }
   }
  })
 }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
  return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
 }, b.expr.filters.visible = function(e) {
  return !b.expr.filters.hidden(e)
 }), b.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(e, t) {
  b.cssHooks[e + t] = {
   expand: function(n) {
    var r = 0,
     i = {},
     o = "string" == typeof n ? n.split(" ") : [n];
    for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
    return i
   }
  }, Ut.test(e) || (b.cssHooks[e + t].set = on)
 });
 var cn = /%20/g,
  pn = /\[\]$/,
  fn = /\r?\n/g,
  dn = /^(?:submit|button|image|reset|file)$/i,
  hn = /^(?:input|select|textarea|keygen)/i;
 b.fn.extend({
  serialize: function() {
   return b.param(this.serializeArray())
  },
  serializeArray: function() {
   return this.map(function() {
    var e = b.prop(this, "elements");
    return e ? b.makeArray(e) : this
   }).filter(function() {
    var e = this.type;
    return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
   }).map(function(e, t) {
    var n = b(this).val();
    return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
     return {
      name: t.name,
      value: e.replace(fn, "\r\n")
     }
    }) : {
     name: t.name,
     value: n.replace(fn, "\r\n")
    }
   }).get()
  }
 }), b.param = function(e, n) {
  var r, i = [],
   o = function(e, t) {
    t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
   };
  if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
   o(this.name, this.value)
  });
  else
   for (r in e) gn(r, e[r], n, o);
  return i.join("&").replace(cn, "+")
 };

 function gn(e, t, n, r) {
  var i;
  if (b.isArray(t)) b.each(t, function(t, i) {
   n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
  });
  else if (n || "object" !== b.type(t)) r(e, t);
  else
   for (i in t) gn(e + "[" + i + "]", t[i], n, r)
 }
 b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
  b.fn[t] = function(e, n) {
   return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
  }
 }), b.fn.hover = function(e, t) {
  return this.mouseenter(e).mouseleave(t || e)
 };
 var mn, yn, vn = b.now(),
  bn = /\?/,
  xn = /#.*$/,
  wn = /([?&])_=[^&]*/,
  Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Cn = /^(?:GET|HEAD)$/,
  kn = /^\/\//,
  En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
  Sn = b.fn.load,
  An = {},
  jn = {},
  Dn = "*/".concat("*");
 try {
  yn = a.href
 } catch (Ln) {
  yn = o.createElement("a"), yn.href = "", yn = yn.href
 }
 mn = En.exec(yn.toLowerCase()) || [];

 function Hn(e) {
  return function(t, n) {
   "string" != typeof t && (n = t, t = "*");
   var r, i = 0,
    o = t.toLowerCase().match(w) || [];
   if (b.isFunction(n))
    while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
  }
 }

 function qn(e, n, r, i) {
  var o = {},
   a = e === jn;

  function s(u) {
   var l;
   return o[u] = !0, b.each(e[u] || [], function(e, u) {
    var c = u(n, r, i);
    return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
   }), l
  }
  return s(n.dataTypes[0]) || !o["*"] && s("*")
 }

 function Mn(e, n) {
  var r, i, o = b.ajaxSettings.flatOptions || {};
  for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
  return r && b.extend(!0, e, r), e
 }
 b.fn.load = function(e, n, r) {
  if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
  var i, o, a, s = this,
   u = e.indexOf(" ");
  return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
   url: e,
   type: a,
   dataType: "html",
   data: n
  }).done(function(e) {
   o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
  }).complete(r && function(e, t) {
   s.each(r, o || [e.responseText, t, e])
  }), this
 }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
  b.fn[t] = function(e) {
   return this.on(t, e)
  }
 }), b.each(["get", "post"], function(e, n) {
  b[n] = function(e, r, i, o) {
   return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
    url: e,
    type: n,
    dataType: o,
    data: r,
    success: i
   })
  }
 }), b.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: yn,
   type: "GET",
   isLocal: Nn.test(mn[1]),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": Dn,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /xml/,
    html: /html/,
    json: /json/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText"
   },
   converters: {
    "* text": e.String,
    "text html": !0,
    "text json": b.parseJSON,
    "text xml": b.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(e, t) {
   return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
  },
  ajaxPrefilter: Hn(An),
  ajaxTransport: Hn(jn),
  ajax: function(e, n) {
   "object" == typeof e && (n = e, e = t), n = n || {};
   var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
    f = p.context || p,
    d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
    h = b.Deferred(),
    g = b.Callbacks("once memory"),
    m = p.statusCode || {},
    y = {},
    v = {},
    x = 0,
    T = "canceled",
    N = {
     readyState: 0,
     getResponseHeader: function(e) {
      var t;
      if (2 === x) {
       if (!c) {
        c = {};
        while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
       }
       t = c[e.toLowerCase()]
      }
      return null == t ? null : t
     },
     getAllResponseHeaders: function() {
      return 2 === x ? a : null
     },
     setRequestHeader: function(e, t) {
      var n = e.toLowerCase();
      return x || (e = v[n] = v[n] || e, y[e] = t), this
     },
     overrideMimeType: function(e) {
      return x || (p.mimeType = e), this
     },
     statusCode: function(e) {
      var t;
      if (e)
       if (2 > x)
        for (t in e) m[t] = [m[t], e[t]];
       else N.always(e[N.status]);
      return this
     },
     abort: function(e) {
      var t = e || T;
      return l && l.abort(t), k(0, t), this
     }
    };
   if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
   u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
   for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
   if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
   T = "abort";
   for (i in {
     success: 1,
     error: 1,
     complete: 1
    }) N[i](p[i]);
   if (l = qn(jn, p, n, N)) {
    N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
     N.abort("timeout")
    }, p.timeout));
    try {
     x = 1, l.send(y, k)
    } catch (C) {
     if (!(2 > x)) throw C;
     k(-1, C)
    }
   } else k(-1, "No Transport");

   function k(e, n, r, i) {
    var c, y, v, w, T, C = n;
    2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
   }
   return N
  },
  getScript: function(e, n) {
   return b.get(e, t, n, "script")
  },
  getJSON: function(e, t, n) {
   return b.get(e, t, n, "json")
  }
 });

 function _n(e, n, r) {
  var i, o, a, s, u = e.contents,
   l = e.dataTypes,
   c = e.responseFields;
  for (s in c) s in r && (n[c[s]] = r[s]);
  while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
  if (o)
   for (s in u)
    if (u[s] && u[s].test(o)) {
     l.unshift(s);
     break
    }
  if (l[0] in r) a = l[0];
  else {
   for (s in r) {
    if (!l[0] || e.converters[s + " " + l[0]]) {
     a = s;
     break
    }
    i || (i = s)
   }
   a = a || i
  }
  return a ? (a !== l[0] && l.unshift(a), r[a]) : t
 }

 function Fn(e, t) {
  var n, r, i, o, a = {},
   s = 0,
   u = e.dataTypes.slice(),
   l = u[0];
  if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
   for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
  for (; r = u[++s];)
   if ("*" !== r) {
    if ("*" !== l && l !== r) {
     if (i = a[l + " " + r] || a["* " + r], !i)
      for (n in a)
       if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
        i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
        break
       }
     if (i !== !0)
      if (i && e["throws"]) t = i(t);
      else try {
       t = i(t)
      } catch (c) {
       return {
        state: "parsererror",
        error: i ? c : "No conversion from " + l + " to " + r
       }
      }
    }
    l = r
   }
  return {
   state: "success",
   data: t
  }
 }
 b.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /(?:java|ecma)script/
  },
  converters: {
   "text script": function(e) {
    return b.globalEval(e), e
   }
  }
 }), b.ajaxPrefilter("script", function(e) {
  e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
 }), b.ajaxTransport("script", function(e) {
  if (e.crossDomain) {
   var n, r = o.head || b("head")[0] || o.documentElement;
   return {
    send: function(t, i) {
     n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
      (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
     }, r.insertBefore(n, r.firstChild)
    },
    abort: function() {
     n && n.onload(t, !0)
    }
   }
  }
 });
 var On = [],
  Bn = /(=)\?(?=&|$)|\?\?/;
 b.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var e = On.pop() || b.expando + "_" + vn++;
   return this[e] = !0, e
  }
 }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
  var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
  return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
   return s || b.error(o + " was not called"), s[0]
  }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
   s = arguments
  }, i.always(function() {
   e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
  }), "script") : t
 });
 var Pn, Rn, Wn = 0,
  $n = e.ActiveXObject && function() {
   var e;
   for (e in Pn) Pn[e](t, !0)
  };

 function In() {
  try {
   return new e.XMLHttpRequest
  } catch (t) {}
 }

 function zn() {
  try {
   return new e.ActiveXObject("Microsoft.XMLHTTP")
  } catch (t) {}
 }
 b.ajaxSettings.xhr = e.ActiveXObject ? function() {
  return !this.isLocal && In() || zn()
 } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
  if (!n.crossDomain || b.support.cors) {
   var r;
   return {
    send: function(i, o) {
     var a, s, u = n.xhr();
     if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
      for (s in n.xhrFields) u[s] = n.xhrFields[s];
     n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
     try {
      for (s in i) u.setRequestHeader(s, i[s])
     } catch (l) {}
     u.send(n.hasContent && n.data || null), r = function(e, i) {
      var s, l, c, p;
      try {
       if (r && (i || 4 === u.readyState))
        if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
        else {
         p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
         try {
          c = u.statusText
         } catch (f) {
          c = ""
         }
         s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
        }
      } catch (d) {
       i || o(-1, d)
      }
      p && o(s, c, p, l)
     }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
    },
    abort: function() {
     r && r(t, !0)
    }
   }
  }
 });
 var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
  Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
  Jn = /queueHooks$/,
  Gn = [nr],
  Qn = {
   "*": [function(e, t) {
    var n, r, i = this.createTween(e, t),
     o = Yn.exec(t),
     a = i.cur(),
     s = +a || 0,
     u = 1,
     l = 20;
    if (o) {
     if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
      s = b.css(i.elem, e, !0) || n || 1;
      do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
     }
     i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
    }
    return i
   }]
  };

 function Kn() {
  return setTimeout(function() {
   Xn = t
  }), Xn = b.now()
 }

 function Zn(e, t) {
  b.each(t, function(t, n) {
   var r = (Qn[t] || []).concat(Qn["*"]),
    i = 0,
    o = r.length;
   for (; o > i; i++)
    if (r[i].call(e, t, n)) return
  })
 }

 function er(e, t, n) {
  var r, i, o = 0,
   a = Gn.length,
   s = b.Deferred().always(function() {
    delete u.elem
   }),
   u = function() {
    if (i) return !1;
    var t = Xn || Kn(),
     n = Math.max(0, l.startTime + l.duration - t),
     r = n / l.duration || 0,
     o = 1 - r,
     a = 0,
     u = l.tweens.length;
    for (; u > a; a++) l.tweens[a].run(o);
    return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
   },
   l = s.promise({
    elem: e,
    props: b.extend({}, t),
    opts: b.extend(!0, {
     specialEasing: {}
    }, n),
    originalProperties: t,
    originalOptions: n,
    startTime: Xn || Kn(),
    duration: n.duration,
    tweens: [],
    createTween: function(t, n) {
     var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
     return l.tweens.push(r), r
    },
    stop: function(t) {
     var n = 0,
      r = t ? l.tweens.length : 0;
     if (i) return this;
     for (i = !0; r > n; n++) l.tweens[n].run(1);
     return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
    }
   }),
   c = l.props;
  for (tr(c, l.opts.specialEasing); a > o; o++)
   if (r = Gn[o].call(l, e, c, l.opts)) return r;
  return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
   elem: e,
   anim: l,
   queue: l.opts.queue
  })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
 }

 function tr(e, t) {
  var n, r, i, o, a;
  for (i in e)
   if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
    n = a.expand(n), delete e[r];
    for (i in n) i in e || (e[i] = n[i], t[i] = o)
   } else t[r] = o
 }
 b.Animation = b.extend(er, {
  tweener: function(e, t) {
   b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
   var n, r = 0,
    i = e.length;
   for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
  },
  prefilter: function(e, t) {
   t ? Gn.unshift(e) : Gn.push(e)
  }
 });

 function nr(e, t, n) {
  var r, i, o, a, s, u, l, c, p, f = this,
   d = e.style,
   h = {},
   g = [],
   m = e.nodeType && nn(e);
  n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
   c.unqueued || p()
  }), c.unqueued++, f.always(function() {
   f.always(function() {
    c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
   })
  })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
   d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
  }));
  for (i in t)
   if (a = t[i], Vn.exec(a)) {
    if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
    g.push(i)
   }
  if (o = g.length) {
   s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
    b(e).hide()
   }), f.done(function() {
    var t;
    b._removeData(e, "fxshow");
    for (t in h) b.style(e, t, h[t])
   });
   for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
  }
 }

 function rr(e, t, n, r, i) {
  return new rr.prototype.init(e, t, n, r, i)
 }
 b.Tween = rr, rr.prototype = {
  constructor: rr,
  init: function(e, t, n, r, i, o) {
   this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
  },
  cur: function() {
   var e = rr.propHooks[this.prop];
   return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
  },
  run: function(e) {
   var t, n = rr.propHooks[this.prop];
   return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
  }
 }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
  _default: {
   get: function(e) {
    var t;
    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
   },
   set: function(e) {
    b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
   }
  }
 }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
  set: function(e) {
   e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
  }
 }, b.each(["toggle", "show", "hide"], function(e, t) {
  var n = b.fn[t];
  b.fn[t] = function(e, r, i) {
   return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
  }
 }), b.fn.extend({
  fadeTo: function(e, t, n, r) {
   return this.filter(nn).css("opacity", 0).show().end().animate({
    opacity: t
   }, e, n, r)
  },
  animate: function(e, t, n, r) {
   var i = b.isEmptyObject(e),
    o = b.speed(t, n, r),
    a = function() {
     var t = er(this, b.extend({}, e), o);
     a.finish = function() {
      t.stop(!0)
     }, (i || b._data(this, "finish")) && t.stop(!0)
    };
   return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
  },
  stop: function(e, n, r) {
   var i = function(e) {
    var t = e.stop;
    delete e.stop, t(r)
   };
   return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
    var t = !0,
     n = null != e && e + "queueHooks",
     o = b.timers,
     a = b._data(this);
    if (n) a[n] && a[n].stop && i(a[n]);
    else
     for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
    (t || !r) && b.dequeue(this, e)
   })
  },
  finish: function(e) {
   return e !== !1 && (e = e || "fx"), this.each(function() {
    var t, n = b._data(this),
     r = n[e + "queue"],
     i = n[e + "queueHooks"],
     o = b.timers,
     a = r ? r.length : 0;
    for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
    delete n.finish
   })
  }
 });

 function ir(e, t) {
  var n, r = {
    height: e
   },
   i = 0;
  for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
  return t && (r.opacity = r.width = e), r
 }
 b.each({
  slideDown: ir("show"),
  slideUp: ir("hide"),
  slideToggle: ir("toggle"),
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
  b.fn[e] = function(e, n, r) {
   return this.animate(t, e, n, r)
  }
 }), b.speed = function(e, t, n) {
  var r = e && "object" == typeof e ? b.extend({}, e) : {
   complete: n || !n && t || b.isFunction(e) && e,
   duration: e,
   easing: n && t || t && !b.isFunction(t) && t
  };
  return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
   b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
  }, r
 }, b.easing = {
  linear: function(e) {
   return e
  },
  swing: function(e) {
   return .5 - Math.cos(e * Math.PI) / 2
  }
 }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
  var e, n = b.timers,
   r = 0;
  for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
  n.length || b.fx.stop(), Xn = t
 }, b.fx.timer = function(e) {
  e() && b.timers.push(e) && b.fx.start()
 }, b.fx.interval = 13, b.fx.start = function() {
  Un || (Un = setInterval(b.fx.tick, b.fx.interval))
 }, b.fx.stop = function() {
  clearInterval(Un), Un = null
 }, b.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
  return b.grep(b.timers, function(t) {
   return e === t.elem
  }).length
 }), b.fn.offset = function(e) {
  if (arguments.length) return e === t ? this : this.each(function(t) {
   b.offset.setOffset(this, e, t)
  });
  var n, r, o = {
    top: 0,
    left: 0
   },
   a = this[0],
   s = a && a.ownerDocument;
  if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
   top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
   left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
  }) : o
 }, b.offset = {
  setOffset: function(e, t, n) {
   var r = b.css(e, "position");
   "static" === r && (e.style.position = "relative");
   var i = b(e),
    o = i.offset(),
    a = b.css(e, "top"),
    s = b.css(e, "left"),
    u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
    l = {},
    c = {},
    p, f;
   u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
  }
 }, b.fn.extend({
  position: function() {
   if (this[0]) {
    var e, t, n = {
      top: 0,
      left: 0
     },
     r = this[0];
    return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
     top: t.top - n.top - b.css(r, "marginTop", !0),
     left: t.left - n.left - b.css(r, "marginLeft", !0)
    }
   }
  },
  offsetParent: function() {
   return this.map(function() {
    var e = this.offsetParent || o.documentElement;
    while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
    return e || o.documentElement
   })
  }
 }), b.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(e, n) {
  var r = /Y/.test(n);
  b.fn[e] = function(i) {
   return b.access(this, function(e, i, o) {
    var a = or(e);
    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
   }, e, i, arguments.length, null)
  }
 });

 function or(e) {
  return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
 }
 b.each({
  Height: "height",
  Width: "width"
 }, function(e, n) {
  b.each({
   padding: "inner" + e,
   content: n,
   "": "outer" + e
  }, function(r, i) {
   b.fn[i] = function(i, o) {
    var a = arguments.length && (r || "boolean" != typeof i),
     s = r || (i === !0 || o === !0 ? "margin" : "border");
    return b.access(this, function(n, r, i) {
     var o;
     return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
    }, n, a ? i : t, a, null)
   }
  })
 }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
  return b
 })
})(window);
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
 'use strict';

 function e(e) {
  return e && '[object Function]' === {}.toString.call(e)
 }

 function t(e, t) {
  if (1 !== e.nodeType) return [];
  var o = getComputedStyle(e, null);
  return t ? o[t] : o
 }

 function o(e) {
  return 'HTML' === e.nodeName ? e : e.parentNode || e.host
 }

 function n(e) {
  if (!e) return document.body;
  switch (e.nodeName) {
   case 'HTML':
   case 'BODY':
    return e.ownerDocument.body;
   case '#document':
    return e.body;
  }
  var i = t(e),
   r = i.overflow,
   p = i.overflowX,
   s = i.overflowY;
  return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
 }

 function r(e) {
  var o = e && e.offsetParent,
   i = o && o.nodeName;
  return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement
 }

 function p(e) {
  var t = e.nodeName;
  return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
 }

 function s(e) {
  return null === e.parentNode ? e : s(e.parentNode)
 }

 function d(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
  var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
   i = o ? e : t,
   n = o ? t : e,
   a = document.createRange();
  a.setStart(i, 0), a.setEnd(n, 0);
  var l = a.commonAncestorContainer;
  if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
  var f = s(e);
  return f.host ? d(f.host, t) : d(e, s(t).host)
 }

 function a(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
   o = 'top' === t ? 'scrollTop' : 'scrollLeft',
   i = e.nodeName;
  if ('BODY' === i || 'HTML' === i) {
   var n = e.ownerDocument.documentElement,
    r = e.ownerDocument.scrollingElement || n;
   return r[o]
  }
  return e[o]
 }

 function l(e, t) {
  var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
   i = a(t, 'top'),
   n = a(t, 'left'),
   r = o ? -1 : 1;
  return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
 }

 function f(e, t) {
  var o = 'x' === t ? 'Left' : 'Top',
   i = 'Left' == o ? 'Right' : 'Bottom';
  return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10)
 }

 function m(e, t, o, i) {
  return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
 }

 function h() {
  var e = document.body,
   t = document.documentElement,
   o = ie() && getComputedStyle(t);
  return {
   height: m('Height', e, t, o),
   width: m('Width', e, t, o)
  }
 }

 function c(e) {
  return se({}, e, {
   right: e.left + e.width,
   bottom: e.top + e.height
  })
 }

 function g(e) {
  var o = {};
  if (ie()) try {
   o = e.getBoundingClientRect();
   var i = a(e, 'top'),
    n = a(e, 'left');
   o.top += i, o.left += n, o.bottom += i, o.right += n
  } catch (e) {} else o = e.getBoundingClientRect();
  var r = {
    left: o.left,
    top: o.top,
    width: o.right - o.left,
    height: o.bottom - o.top
   },
   p = 'HTML' === e.nodeName ? h() : {},
   s = p.width || e.clientWidth || r.right - r.left,
   d = p.height || e.clientHeight || r.bottom - r.top,
   l = e.offsetWidth - s,
   m = e.offsetHeight - d;
  if (l || m) {
   var g = t(e);
   l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
  }
  return c(r)
 }

 function u(e, o) {
  var i = ie(),
   r = 'HTML' === o.nodeName,
   p = g(e),
   s = g(o),
   d = n(e),
   a = t(o),
   f = parseFloat(a.borderTopWidth, 10),
   m = parseFloat(a.borderLeftWidth, 10),
   h = c({
    top: p.top - s.top - f,
    left: p.left - s.left - m,
    width: p.width,
    height: p.height
   });
  if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
   var u = parseFloat(a.marginTop, 10),
    b = parseFloat(a.marginLeft, 10);
   h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
  }
  return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h
 }

 function b(e) {
  var t = e.ownerDocument.documentElement,
   o = u(e, t),
   i = J(t.clientWidth, window.innerWidth || 0),
   n = J(t.clientHeight, window.innerHeight || 0),
   r = a(t),
   p = a(t, 'left'),
   s = {
    top: r - o.top + o.marginTop,
    left: p - o.left + o.marginLeft,
    width: i,
    height: n
   };
  return c(s)
 }

 function w(e) {
  var i = e.nodeName;
  return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e))
 }

 function y(e, t, i, r) {
  var p = {
    top: 0,
    left: 0
   },
   s = d(e, t);
  if ('viewport' === r) p = b(s);
  else {
   var a;
   'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
   var l = u(a, s);
   if ('HTML' === a.nodeName && !w(s)) {
    var f = h(),
     m = f.height,
     c = f.width;
    p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left
   } else p = l
  }
  return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
 }

 function E(e) {
  var t = e.width,
   o = e.height;
  return t * o
 }

 function v(e, t, o, i, n) {
  var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
  if (-1 === e.indexOf('auto')) return e;
  var p = y(o, i, r, n),
   s = {
    top: {
     width: p.width,
     height: t.top - p.top
    },
    right: {
     width: p.right - t.right,
     height: p.height
    },
    bottom: {
     width: p.width,
     height: p.bottom - t.bottom
    },
    left: {
     width: t.left - p.left,
     height: p.height
    }
   },
   d = Object.keys(s).map(function(e) {
    return se({
     key: e
    }, s[e], {
     area: E(s[e])
    })
   }).sort(function(e, t) {
    return t.area - e.area
   }),
   a = d.filter(function(e) {
    var t = e.width,
     i = e.height;
    return t >= o.clientWidth && i >= o.clientHeight
   }),
   l = 0 < a.length ? a[0].key : d[0].key,
   f = e.split('-')[1];
  return l + (f ? '-' + f : '')
 }

 function O(e, t, o) {
  var i = d(t, o);
  return u(o, i)
 }

 function L(e) {
  var t = getComputedStyle(e),
   o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
   i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
   n = {
    width: e.offsetWidth + i,
    height: e.offsetHeight + o
   };
  return n
 }

 function x(e) {
  var t = {
   left: 'right',
   right: 'left',
   bottom: 'top',
   top: 'bottom'
  };
  return e.replace(/left|right|bottom|top/g, function(e) {
   return t[e]
  })
 }

 function S(e, t, o) {
  o = o.split('-')[0];
  var i = L(e),
   n = {
    width: i.width,
    height: i.height
   },
   r = -1 !== ['right', 'left'].indexOf(o),
   p = r ? 'top' : 'left',
   s = r ? 'left' : 'top',
   d = r ? 'height' : 'width',
   a = r ? 'width' : 'height';
  return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n
 }

 function T(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0]
 }

 function D(e, t, o) {
  if (Array.prototype.findIndex) return e.findIndex(function(e) {
   return e[t] === o
  });
  var i = T(e, function(e) {
   return e[t] === o
  });
  return e.indexOf(i)
 }

 function C(t, o, i) {
  var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));
  return n.forEach(function(t) {
   t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
   var i = t['function'] || t.fn;
   t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
  }), o
 }

 function N() {
  if (!this.state.isDestroyed) {
   var e = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: !1,
    offsets: {}
   };
   e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
  }
 }

 function k(e, t) {
  return e.some(function(e) {
   var o = e.name,
    i = e.enabled;
   return i && o === t
  })
 }

 function W(e) {
  for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
   var i = t[n],
    r = i ? '' + i + o : e;
   if ('undefined' != typeof document.body.style[r]) return r
  }
  return null
 }

 function P() {
  return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
 }

 function B(e) {
  var t = e.ownerDocument;
  return t ? t.defaultView : window
 }

 function H(e, t, o, i) {
  var r = 'BODY' === e.nodeName,
   p = r ? e.ownerDocument.defaultView : e;
  p.addEventListener(t, o, {
   passive: !0
  }), r || H(n(p.parentNode), t, o, i), i.push(p)
 }

 function A(e, t, o, i) {
  o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
   passive: !0
  });
  var r = n(e);
  return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
 }

 function I() {
  this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
 }

 function M(e, t) {
  return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
   e.removeEventListener('scroll', t.updateBound)
  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
 }

 function R() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
 }

 function U(e) {
  return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
 }

 function Y(e, t) {
  Object.keys(t).forEach(function(o) {
   var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i
  })
 }

 function j(e, t) {
  Object.keys(t).forEach(function(o) {
   var i = t[o];
   !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
  })
 }

 function F(e, t, o) {
  var i = T(e, function(e) {
    var o = e.name;
    return o === t
   }),
   n = !!i && e.some(function(e) {
    return e.name === o && e.enabled && e.order < i.order
   });
  if (!n) {
   var r = '`' + t + '`';
   console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
  }
  return n
 }

 function K(e) {
  return 'end' === e ? 'start' : 'start' === e ? 'end' : e
 }

 function q(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
   o = ae.indexOf(e),
   i = ae.slice(o + 1).concat(ae.slice(0, o));
  return t ? i.reverse() : i
 }

 function V(e, t, o, i) {
  var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
   r = +n[1],
   p = n[2];
  if (!r) return e;
  if (0 === p.indexOf('%')) {
   var s;
   switch (p) {
    case '%p':
     s = o;
     break;
    case '%':
    case '%r':
    default:
     s = i;
   }
   var d = c(s);
   return d[t] / 100 * r
  }
  if ('vh' === p || 'vw' === p) {
   var a;
   return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
  }
  return r
 }

 function z(e, t, o, i) {
  var n = [0, 0],
   r = -1 !== ['right', 'left'].indexOf(i),
   p = e.split(/(\+|\-)/).map(function(e) {
    return e.trim()
   }),
   s = p.indexOf(T(p, function(e) {
    return -1 !== e.search(/,|\s/)
   }));
  p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  var d = /\s*,\s*|\s+/,
   a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
  return a = a.map(function(e, i) {
   var n = (1 === i ? !r : r) ? 'height' : 'width',
    p = !1;
   return e.reduce(function(e, t) {
    return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
   }, []).map(function(e) {
    return V(e, n, t, o)
   })
  }), a.forEach(function(e, t) {
   e.forEach(function(o, i) {
    U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
   })
  }), n
 }

 function G(e, t) {
  var o, i = t.offset,
   n = e.placement,
   r = e.offsets,
   p = r.popper,
   s = r.reference,
   d = n.split('-')[0];
  return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
 }
 for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
  if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
   $ = 1;
   break
  }
 var i, te = Q && window.Promise,
  oe = te ? function(e) {
   var t = !1;
   return function() {
    t || (t = !0, window.Promise.resolve().then(function() {
     t = !1, e()
    }))
   }
  } : function(e) {
   var t = !1;
   return function() {
    t || (t = !0, setTimeout(function() {
     t = !1, e()
    }, $))
   }
  },
  ie = function() {
   return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
  },
  ne = function(e, t) {
   if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  },
  re = function() {
   function e(e, t) {
    for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
   }
   return function(t, o, i) {
    return o && e(t.prototype, o), i && e(t, i), t
   }
  }(),
  pe = function(e, t, o) {
   return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
   }) : e[t] = o, e
  },
  se = Object.assign || function(e) {
   for (var t, o = 1; o < arguments.length; o++)
    for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
   return e
  },
  de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
  ae = de.slice(3),
  le = {
   FLIP: 'flip',
   CLOCKWISE: 'clockwise',
   COUNTERCLOCKWISE: 'counterclockwise'
  },
  fe = function() {
   function t(o, i) {
    var n = this,
     r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    ne(this, t), this.scheduleUpdate = function() {
     return requestAnimationFrame(n.update)
    }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
     isDestroyed: !1,
     isCreated: !1,
     scrollParents: []
    }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
     n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
     return se({
      name: e
     }, n.options.modifiers[e])
    }).sort(function(e, t) {
     return e.order - t.order
    }), this.modifiers.forEach(function(t) {
     t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
    }), this.update();
    var p = this.options.eventsEnabled;
    p && this.enableEventListeners(), this.state.eventsEnabled = p
   }
   return re(t, [{
    key: 'update',
    value: function() {
     return N.call(this)
    }
   }, {
    key: 'destroy',
    value: function() {
     return P.call(this)
    }
   }, {
    key: 'enableEventListeners',
    value: function() {
     return I.call(this)
    }
   }, {
    key: 'disableEventListeners',
    value: function() {
     return R.call(this)
    }
   }]), t
  }();
 return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
  placement: 'bottom',
  eventsEnabled: !0,
  removeOnDestroy: !1,
  onCreate: function() {},
  onUpdate: function() {},
  modifiers: {
   shift: {
    order: 100,
    enabled: !0,
    fn: function(e) {
     var t = e.placement,
      o = t.split('-')[0],
      i = t.split('-')[1];
     if (i) {
      var n = e.offsets,
       r = n.reference,
       p = n.popper,
       s = -1 !== ['bottom', 'top'].indexOf(o),
       d = s ? 'left' : 'top',
       a = s ? 'width' : 'height',
       l = {
        start: pe({}, d, r[d]),
        end: pe({}, d, r[d] + r[a] - p[a])
       };
      e.offsets.popper = se({}, p, l[i])
     }
     return e
    }
   },
   offset: {
    order: 200,
    enabled: !0,
    fn: G,
    offset: 0
   },
   preventOverflow: {
    order: 300,
    enabled: !0,
    fn: function(e, t) {
     var o = t.boundariesElement || r(e.instance.popper);
     e.instance.reference === o && (o = r(o));
     var i = y(e.instance.popper, e.instance.reference, t.padding, o);
     t.boundaries = i;
     var n = t.priority,
      p = e.offsets.popper,
      s = {
       primary: function(e) {
        var o = p[e];
        return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o)
       },
       secondary: function(e) {
        var o = 'right' === e ? 'left' : 'top',
         n = p[o];
        return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
       }
      };
     return n.forEach(function(e) {
      var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
      p = se({}, p, s[t](e))
     }), e.offsets.popper = p, e
    },
    priority: ['left', 'right', 'top', 'bottom'],
    padding: 5,
    boundariesElement: 'scrollParent'
   },
   keepTogether: {
    order: 400,
    enabled: !0,
    fn: function(e) {
     var t = e.offsets,
      o = t.popper,
      i = t.reference,
      n = e.placement.split('-')[0],
      r = X,
      p = -1 !== ['top', 'bottom'].indexOf(n),
      s = p ? 'right' : 'bottom',
      d = p ? 'left' : 'top',
      a = p ? 'width' : 'height';
     return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
    }
   },
   arrow: {
    order: 500,
    enabled: !0,
    fn: function(e, o) {
     var i;
     if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
     var n = o.element;
     if ('string' == typeof n) {
      if (n = e.instance.popper.querySelector(n), !n) return e;
     } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
     var r = e.placement.split('-')[0],
      p = e.offsets,
      s = p.popper,
      d = p.reference,
      a = -1 !== ['left', 'right'].indexOf(r),
      l = a ? 'height' : 'width',
      f = a ? 'Top' : 'Left',
      m = f.toLowerCase(),
      h = a ? 'left' : 'top',
      g = a ? 'bottom' : 'right',
      u = L(n)[l];
     d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
     var b = d[m] + d[l] / 2 - u / 2,
      w = t(e.instance.popper),
      y = parseFloat(w['margin' + f], 10),
      E = parseFloat(w['border' + f + 'Width'], 10),
      v = b - e.offsets.popper[m] - y - E;
     return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e
    },
    element: '[x-arrow]'
   },
   flip: {
    order: 600,
    enabled: !0,
    fn: function(e, t) {
     if (k(e.instance.modifiers, 'inner')) return e;
     if (e.flipped && e.placement === e.originalPlacement) return e;
     var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
      i = e.placement.split('-')[0],
      n = x(i),
      r = e.placement.split('-')[1] || '',
      p = [];
     switch (t.behavior) {
      case le.FLIP:
       p = [i, n];
       break;
      case le.CLOCKWISE:
       p = q(i);
       break;
      case le.COUNTERCLOCKWISE:
       p = q(i, !0);
       break;
      default:
       p = t.behavior;
     }
     return p.forEach(function(s, d) {
      if (i !== s || p.length === d + 1) return e;
      i = e.placement.split('-')[0], n = x(i);
      var a = e.offsets.popper,
       l = e.offsets.reference,
       f = X,
       m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
       h = f(a.left) < f(o.left),
       c = f(a.right) > f(o.right),
       g = f(a.top) < f(o.top),
       u = f(a.bottom) > f(o.bottom),
       b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
       w = -1 !== ['top', 'bottom'].indexOf(i),
       y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
      (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'))
     }), e
    },
    behavior: 'flip',
    padding: 5,
    boundariesElement: 'viewport'
   },
   inner: {
    order: 700,
    enabled: !1,
    fn: function(e) {
     var t = e.placement,
      o = t.split('-')[0],
      i = e.offsets,
      n = i.popper,
      r = i.reference,
      p = -1 !== ['left', 'right'].indexOf(o),
      s = -1 === ['top', 'left'].indexOf(o);
     return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e
    }
   },
   hide: {
    order: 800,
    enabled: !0,
    fn: function(e) {
     if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
     var t = e.offsets.reference,
      o = T(e.instance.modifiers, function(e) {
       return 'preventOverflow' === e.name
      }).boundaries;
     if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
      if (!0 === e.hide) return e;
      e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
     } else {
      if (!1 === e.hide) return e;
      e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
     }
     return e
    }
   },
   computeStyle: {
    order: 850,
    enabled: !0,
    fn: function(e, t) {
     var o = t.x,
      i = t.y,
      n = e.offsets.popper,
      p = T(e.instance.modifiers, function(e) {
       return 'applyStyle' === e.name
      }).gpuAcceleration;
     void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
     var s, d, a = void 0 === p ? t.gpuAcceleration : p,
      l = r(e.instance.popper),
      f = g(l),
      m = {
       position: n.position
      },
      h = {
       left: X(n.left),
       top: X(n.top),
       bottom: X(n.bottom),
       right: X(n.right)
      },
      c = 'bottom' === o ? 'top' : 'bottom',
      u = 'right' === i ? 'left' : 'right',
      b = W('transform');
     if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
     else {
      var w = 'bottom' == c ? -1 : 1,
       y = 'right' == u ? -1 : 1;
      m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u
     }
     var E = {
      "x-placement": e.placement
     };
     return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e
    },
    gpuAcceleration: !0,
    x: 'bottom',
    y: 'right'
   },
   applyStyle: {
    order: 900,
    enabled: !0,
    fn: function(e) {
     return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
    },
    onLoad: function(e, t, o, i, n) {
     var r = O(n, t, e),
      p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
     return t.setAttribute('x-placement', p), Y(t, {
      position: 'absolute'
     }), o
    },
    gpuAcceleration: void 0
   }
  }
 }, fe
});
//# sourceMappingURL=popper.min.js.map
/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
 "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
 "use strict";

 function i(t, e) {
  for (var n = 0; n < e.length; n++) {
   var i = e[n];
   i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
  }
 }

 function s(t, e, n) {
  return e && i(t.prototype, e), n && i(t, n), t
 }

 function r() {
  return (r = Object.assign || function(t) {
   for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
   }
   return t
  }).apply(this, arguments)
 }
 e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
 var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function(t) {
   var e = !1;

   function n(e) {
    var n = this,
     s = !1;
    return t(this).one(i.TRANSITION_END, function() {
     s = !0
    }), setTimeout(function() {
     s || i.triggerTransitionEnd(n)
    }, e), this
   }
   var i = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function(t) {
     do {
      t += ~~(1e6 * Math.random())
     } while (document.getElementById(t));
     return t
    },
    getSelectorFromElement: function(e) {
     var n, i = e.getAttribute("data-target");
     i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
     try {
      return t(document).find(i).length > 0 ? i : null
     } catch (t) {
      return null
     }
    },
    reflow: function(t) {
     return t.offsetHeight
    },
    triggerTransitionEnd: function(n) {
     t(n).trigger(e.end)
    },
    supportsTransitionEnd: function() {
     return Boolean(e)
    },
    isElement: function(t) {
     return (t[0] || t).nodeType
    },
    typeCheckConfig: function(t, e, n) {
     for (var s in n)
      if (Object.prototype.hasOwnProperty.call(n, s)) {
       var r = n[s],
        o = e[s],
        a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
       if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
      }
     var l
    }
   };
   return e = ("undefined" == typeof window || !window.QUnit) && {
    end: "transitionend"
   }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
    bindType: e.end,
    delegateType: e.end,
    handle: function(e) {
     if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
    }
   }), i
  }(e),
  L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
   CLOSE: "close" + h,
   CLOSED: "closed" + h,
   CLICK_DATA_API: "click" + h + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function() {
   function t(t) {
    this._element = t
   }
   var e = t.prototype;
   return e.close = function(t) {
    t = t || this._element;
    var e = this._getRootElement(t);
    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
   }, e.dispose = function() {
    o.removeData(this._element, l), this._element = null
   }, e._getRootElement = function(t) {
    var e = P.getSelectorFromElement(t),
     n = !1;
    return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
   }, e._triggerCloseEvent = function(t) {
    var e = o.Event(u.CLOSE);
    return o(t).trigger(e), e
   }, e._removeElement = function(t) {
    var e = this;
    o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function(n) {
     return e._destroyElement(t, n)
    }).emulateTransitionEnd(150) : this._destroyElement(t)
   }, e._destroyElement = function(t) {
    o(t).detach().trigger(u.CLOSED).remove()
   }, t._jQueryInterface = function(e) {
    return this.each(function() {
     var n = o(this),
      i = n.data(l);
     i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
    })
   }, t._handleDismiss = function(t) {
    return function(e) {
     e && e.preventDefault(), t.close(this)
    }
   }, s(t, null, [{
    key: "VERSION",
    get: function() {
     return "4.0.0"
    }
   }]), t
  }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function() {
   return o.fn[a] = c, g._jQueryInterface
  }, g),
  R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
   CLICK_DATA_API: "click" + E + T,
   FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
  }, k = function() {
   function t(t) {
    this._element = t
   }
   var e = t.prototype;
   return e.toggle = function() {
    var t = !0,
     e = !0,
     n = p(this._element).closest(D)[0];
    if (n) {
     var i = p(this._element).find(S)[0];
     if (i) {
      if ("radio" === i.type)
       if (i.checked && p(this._element).hasClass(C)) t = !1;
       else {
        var s = p(n).find(w)[0];
        s && p(s).removeClass(C)
       }
      if (t) {
       if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
       i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
      }
      i.focus(), e = !1
     }
    }
    e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
   }, e.dispose = function() {
    p.removeData(this._element, v), this._element = null
   }, t._jQueryInterface = function(e) {
    return this.each(function() {
     var n = p(this).data(v);
     n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
    })
   }, s(t, null, [{
    key: "VERSION",
    get: function() {
     return "4.0.0"
    }
   }]), t
  }(), p(document).on(O.CLICK_DATA_API, b, function(t) {
   t.preventDefault();
   var e = t.target;
   p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
  }).on(O.FOCUS_BLUR_DATA_API, b, function(t) {
   var e = p(t.target).closest(N)[0];
   p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
  }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function() {
   return p.fn[m] = y, k._jQueryInterface
  }, k),
  j = function(t) {
   var e = "carousel",
    n = "bs.carousel",
    i = "." + n,
    o = t.fn[e],
    a = {
     interval: 5e3,
     keyboard: !0,
     slide: !1,
     pause: "hover",
     wrap: !0
    },
    l = {
     interval: "(number|boolean)",
     keyboard: "boolean",
     slide: "(boolean|string)",
     pause: "(string|boolean)",
     wrap: "boolean"
    },
    h = "next",
    c = "prev",
    u = "left",
    f = "right",
    d = {
     SLIDE: "slide" + i,
     SLID: "slid" + i,
     KEYDOWN: "keydown" + i,
     MOUSEENTER: "mouseenter" + i,
     MOUSELEAVE: "mouseleave" + i,
     TOUCHEND: "touchend" + i,
     LOAD_DATA_API: "load" + i + ".data-api",
     CLICK_DATA_API: "click" + i + ".data-api"
    },
    _ = "carousel",
    g = "active",
    p = "slide",
    m = "carousel-item-right",
    v = "carousel-item-left",
    E = "carousel-item-next",
    T = "carousel-item-prev",
    y = {
     ACTIVE: ".active",
     ACTIVE_ITEM: ".active.carousel-item",
     ITEM: ".carousel-item",
     NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
     INDICATORS: ".carousel-indicators",
     DATA_SLIDE: "[data-slide], [data-slide-to]",
     DATA_RIDE: '[data-ride="carousel"]'
    },
    C = function() {
     function o(e, n) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
     }
     var C = o.prototype;
     return C.next = function() {
      this._isSliding || this._slide(h)
     }, C.nextWhenVisible = function() {
      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
     }, C.prev = function() {
      this._isSliding || this._slide(c)
     }, C.pause = function(e) {
      e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
     }, C.cycle = function(t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
     }, C.to = function(e) {
      var n = this;
      this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
      var i = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1 || e < 0))
       if (this._isSliding) t(this._element).one(d.SLID, function() {
        return n.to(e)
       });
       else {
        if (i === e) return this.pause(), void this.cycle();
        var s = e > i ? h : c;
        this._slide(s, this._items[e])
       }
     }, C.dispose = function() {
      t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
     }, C._getConfig = function(t) {
      return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
     }, C._addEventListeners = function() {
      var e = this;
      this._config.keyboard && t(this._element).on(d.KEYDOWN, function(t) {
       return e._keydown(t)
      }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function(t) {
       return e.pause(t)
      }).on(d.MOUSELEAVE, function(t) {
       return e.cycle(t)
      }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function() {
       e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
        return e.cycle(t)
       }, 500 + e._config.interval)
      }))
     }, C._keydown = function(t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
       case 37:
        t.preventDefault(), this.prev();
        break;
       case 39:
        t.preventDefault(), this.next()
      }
     }, C._getItemIndex = function(e) {
      return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
     }, C._getItemByDirection = function(t, e) {
      var n = t === h,
       i = t === c,
       s = this._getItemIndex(e),
       r = this._items.length - 1;
      if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
      var o = (s + (t === c ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o]
     }, C._triggerSlideEvent = function(e, n) {
      var i = this._getItemIndex(e),
       s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
       r = t.Event(d.SLIDE, {
        relatedTarget: e,
        direction: n,
        from: s,
        to: i
       });
      return t(this._element).trigger(r), r
     }, C._setActiveIndicatorElement = function(e) {
      if (this._indicatorsElement) {
       t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
       var n = this._indicatorsElement.children[this._getItemIndex(e)];
       n && t(n).addClass(g)
      }
     }, C._slide = function(e, n) {
      var i, s, r, o = this,
       a = t(this._element).find(y.ACTIVE_ITEM)[0],
       l = this._getItemIndex(a),
       c = n || a && this._getItemByDirection(e, a),
       _ = this._getItemIndex(c),
       C = Boolean(this._interval);
      if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;
      else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
       this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
       var I = t.Event(d.SLID, {
        relatedTarget: c,
        direction: r,
        from: l,
        to: _
       });
       P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function() {
        t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function() {
         return t(o._element).trigger(I)
        }, 0)
       }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle()
      }
     }, o._jQueryInterface = function(e) {
      return this.each(function() {
       var i = t(this).data(n),
        s = r({}, a, t(this).data());
       "object" == typeof e && (s = r({}, s, e));
       var l = "string" == typeof e ? e : s.slide;
       if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
       else if ("string" == typeof l) {
        if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
        i[l]()
       } else s.interval && (i.pause(), i.cycle())
      })
     }, o._dataApiClickHandler = function(e) {
      var i = P.getSelectorFromElement(this);
      if (i) {
       var s = t(i)[0];
       if (s && t(s).hasClass(_)) {
        var a = r({}, t(s).data(), t(this).data()),
         l = this.getAttribute("data-slide-to");
        l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
       }
      }
     }, s(o, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), o
    }();
   return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function() {
    t(y.DATA_RIDE).each(function() {
     var e = t(this);
     C._jQueryInterface.call(e, e.data())
    })
   }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function() {
    return t.fn[e] = o, C._jQueryInterface
   }, C
  }(e),
  H = function(t) {
   var e = "collapse",
    n = "bs.collapse",
    i = "." + n,
    o = t.fn[e],
    a = {
     toggle: !0,
     parent: ""
    },
    l = {
     toggle: "boolean",
     parent: "(string|element)"
    },
    h = {
     SHOW: "show" + i,
     SHOWN: "shown" + i,
     HIDE: "hide" + i,
     HIDDEN: "hidden" + i,
     CLICK_DATA_API: "click" + i + ".data-api"
    },
    c = "show",
    u = "collapse",
    f = "collapsing",
    d = "collapsed",
    _ = "width",
    g = "height",
    p = {
     ACTIVES: ".show, .collapsing",
     DATA_TOGGLE: '[data-toggle="collapse"]'
    },
    m = function() {
     function i(e, n) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
      for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
       var r = i[s],
        o = P.getSelectorFromElement(r);
       null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
     }
     var o = i.prototype;
     return o.toggle = function() {
      t(this._element).hasClass(c) ? this.hide() : this.show()
     }, o.show = function() {
      var e, s, r = this;
      if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
       var o = t.Event(h.SHOW);
       if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
        var a = this._getDimension();
        t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
        var l = function() {
         t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
        };
        if (P.supportsTransitionEnd()) {
         var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
         t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px"
        } else l()
       }
      }
     }, o.hide = function() {
      var e = this;
      if (!this._isTransitioning && t(this._element).hasClass(c)) {
       var n = t.Event(h.HIDE);
       if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
        var i = this._getDimension();
        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
         for (var s = 0; s < this._triggerArray.length; s++) {
          var r = this._triggerArray[s],
           o = P.getSelectorFromElement(r);
          if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
         }
        this.setTransitioning(!0);
        var a = function() {
         e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
        };
        this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
       }
      }
     }, o.setTransitioning = function(t) {
      this._isTransitioning = t
     }, o.dispose = function() {
      t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
     }, o._getConfig = function(t) {
      return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
     }, o._getDimension = function() {
      return t(this._element).hasClass(_) ? _ : g
     }, o._getParent = function() {
      var e = this,
       n = null;
      P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
      var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return t(n).find(s).each(function(t, n) {
       e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
      }), n
     }, o._addAriaAndCollapsedClass = function(e, n) {
      if (e) {
       var i = t(e).hasClass(c);
       n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
      }
     }, i._getTargetFromElement = function(e) {
      var n = P.getSelectorFromElement(e);
      return n ? t(n)[0] : null
     }, i._jQueryInterface = function(e) {
      return this.each(function() {
       var s = t(this),
        o = s.data(n),
        l = r({}, a, s.data(), "object" == typeof e && e);
       if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
        o[e]()
       }
      })
     }, s(i, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), i
    }();
   return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var i = t(this),
     s = P.getSelectorFromElement(this);
    t(s).each(function() {
     var e = t(this),
      s = e.data(n) ? "toggle" : i.data();
     m._jQueryInterface.call(e, s)
    })
   }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
    return t.fn[e] = o, m._jQueryInterface
   }, m
  }(e),
  W = function(t) {
   var e = "dropdown",
    i = "bs.dropdown",
    o = "." + i,
    a = ".data-api",
    l = t.fn[e],
    h = new RegExp("38|40|27"),
    c = {
     HIDE: "hide" + o,
     HIDDEN: "hidden" + o,
     SHOW: "show" + o,
     SHOWN: "shown" + o,
     CLICK: "click" + o,
     CLICK_DATA_API: "click" + o + a,
     KEYDOWN_DATA_API: "keydown" + o + a,
     KEYUP_DATA_API: "keyup" + o + a
    },
    u = "disabled",
    f = "show",
    d = "dropup",
    _ = "dropright",
    g = "dropleft",
    p = "dropdown-menu-right",
    m = "dropdown-menu-left",
    v = "position-static",
    E = '[data-toggle="dropdown"]',
    T = ".dropdown form",
    y = ".dropdown-menu",
    C = ".navbar-nav",
    I = ".dropdown-menu .dropdown-item:not(.disabled)",
    A = "top-start",
    b = "top-end",
    D = "bottom-start",
    S = "bottom-end",
    w = "right-start",
    N = "left-start",
    O = {
     offset: 0,
     flip: !0,
     boundary: "scrollParent"
    },
    k = {
     offset: "(number|string|function)",
     flip: "boolean",
     boundary: "(string|element)"
    },
    L = function() {
     function a(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
     }
     var l = a.prototype;
     return l.toggle = function() {
      if (!this._element.disabled && !t(this._element).hasClass(u)) {
       var e = a._getParentFromElement(this._element),
        i = t(this._menu).hasClass(f);
       if (a._clearMenus(), !i) {
        var s = {
          relatedTarget: this._element
         },
         r = t.Event(c.SHOW, s);
        if (t(e).trigger(r), !r.isDefaultPrevented()) {
         if (!this._inNavbar) {
          if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
          var o = this._element;
          t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
         }
         "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
        }
       }
      }
     }, l.dispose = function() {
      t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
     }, l.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
     }, l._addEventListeners = function() {
      var e = this;
      t(this._element).on(c.CLICK, function(t) {
       t.preventDefault(), t.stopPropagation(), e.toggle()
      })
     }, l._getConfig = function(n) {
      return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
     }, l._getMenuElement = function() {
      if (!this._menu) {
       var e = a._getParentFromElement(this._element);
       this._menu = t(e).find(y)[0]
      }
      return this._menu
     }, l._getPlacement = function() {
      var e = t(this._element).parent(),
       n = D;
      return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
     }, l._detectNavbar = function() {
      return t(this._element).closest(".navbar").length > 0
     }, l._getPopperConfig = function() {
      var t = this,
       e = {};
      return "function" == typeof this._config.offset ? e.fn = function(e) {
       return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
      } : e.offset = this._config.offset, {
       placement: this._getPlacement(),
       modifiers: {
        offset: e,
        flip: {
         enabled: this._config.flip
        },
        preventOverflow: {
         boundariesElement: this._config.boundary
        }
       }
      }
     }, a._jQueryInterface = function(e) {
      return this.each(function() {
       var n = t(this).data(i);
       if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
        n[e]()
       }
      })
     }, a._clearMenus = function(e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
       for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
        var r = a._getParentFromElement(n[s]),
         o = t(n[s]).data(i),
         l = {
          relatedTarget: n[s]
         };
        if (o) {
         var h = o._menu;
         if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
          var u = t.Event(c.HIDE, l);
          t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
         }
        }
       }
     }, a._getParentFromElement = function(e) {
      var n, i = P.getSelectorFromElement(e);
      return i && (n = t(i)[0]), n || e.parentNode
     }, a._dataApiKeydownHandler = function(e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
       var n = a._getParentFromElement(this),
        i = t(n).hasClass(f);
       if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
        var s = t(n).find(I).get();
        if (0 !== s.length) {
         var r = s.indexOf(e.target);
         38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
        }
       } else {
        if (27 === e.which) {
         var o = t(n).find(E)[0];
         t(o).trigger("focus")
        }
        t(this).trigger("click")
       }
      }
     }, s(a, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return O
      }
     }, {
      key: "DefaultType",
      get: function() {
       return k
      }
     }]), a
    }();
   return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function(e) {
    e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
   }).on(c.CLICK_DATA_API, T, function(t) {
    t.stopPropagation()
   }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function() {
    return t.fn[e] = l, L._jQueryInterface
   }, L
  }(e),
  M = function(t) {
   var e = "modal",
    n = "bs.modal",
    i = "." + n,
    o = t.fn.modal,
    a = {
     backdrop: !0,
     keyboard: !0,
     focus: !0,
     show: !0
    },
    l = {
     backdrop: "(boolean|string)",
     keyboard: "boolean",
     focus: "boolean",
     show: "boolean"
    },
    h = {
     HIDE: "hide" + i,
     HIDDEN: "hidden" + i,
     SHOW: "show" + i,
     SHOWN: "shown" + i,
     FOCUSIN: "focusin" + i,
     RESIZE: "resize" + i,
     CLICK_DISMISS: "click.dismiss" + i,
     KEYDOWN_DISMISS: "keydown.dismiss" + i,
     MOUSEUP_DISMISS: "mouseup.dismiss" + i,
     MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
     CLICK_DATA_API: "click" + i + ".data-api"
    },
    c = "modal-scrollbar-measure",
    u = "modal-backdrop",
    f = "modal-open",
    d = "fade",
    _ = "show",
    g = {
     DIALOG: ".modal-dialog",
     DATA_TOGGLE: '[data-toggle="modal"]',
     DATA_DISMISS: '[data-dismiss="modal"]',
     FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
     STICKY_CONTENT: ".sticky-top",
     NAVBAR_TOGGLER: ".navbar-toggler"
    },
    p = function() {
     function o(e, n) {
      this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
     }
     var p = o.prototype;
     return p.toggle = function(t) {
      return this._isShown ? this.hide() : this.show(t)
     }, p.show = function(e) {
      var n = this;
      if (!this._isTransitioning && !this._isShown) {
       P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
       var i = t.Event(h.SHOW, {
        relatedTarget: e
       });
       t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function(t) {
        return n.hide(t)
       }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function() {
        t(n._element).one(h.MOUSEUP_DISMISS, function(e) {
         t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
        })
       }), this._showBackdrop(function() {
        return n._showElement(e)
       }))
      }
     }, p.hide = function(e) {
      var n = this;
      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
       var i = t.Event(h.HIDE);
       if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
        this._isShown = !1;
        var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
        s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function(t) {
         return n._hideModal(t)
        }).emulateTransitionEnd(300) : this._hideModal()
       }
      }
     }, p.dispose = function() {
      t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
     }, p.handleUpdate = function() {
      this._adjustDialog()
     }, p._getConfig = function(t) {
      return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
     }, p._showElement = function(e) {
      var n = this,
       i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
      var s = t.Event(h.SHOWN, {
        relatedTarget: e
       }),
       r = function() {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
       };
      i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
     }, p._enforceFocus = function() {
      var e = this;
      t(document).off(h.FOCUSIN).on(h.FOCUSIN, function(n) {
       document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
      })
     }, p._setEscapeEvent = function() {
      var e = this;
      this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function(t) {
       27 === t.which && (t.preventDefault(), e.hide())
      }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
     }, p._setResizeEvent = function() {
      var e = this;
      this._isShown ? t(window).on(h.RESIZE, function(t) {
       return e.handleUpdate(t)
      }) : t(window).off(h.RESIZE)
     }, p._hideModal = function() {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
       t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
      })
     }, p._removeBackdrop = function() {
      this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
     }, p._showBackdrop = function(e) {
      var n = this,
       i = t(this._element).hasClass(d) ? d : "";
      if (this._isShown && this._config.backdrop) {
       var s = P.supportsTransitionEnd() && i;
       if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function(t) {
         n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
        }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
       if (!s) return void e();
       t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
      } else if (!this._isShown && this._backdrop) {
       t(this._backdrop).removeClass(_);
       var r = function() {
        n._removeBackdrop(), e && e()
       };
       P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
      } else e && e()
     }, p._adjustDialog = function() {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
     }, p._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
     }, p._checkScrollbar = function() {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
     }, p._setScrollbar = function() {
      var e = this;
      if (this._isBodyOverflowing) {
       t(g.FIXED_CONTENT).each(function(n, i) {
        var s = t(i)[0].style.paddingRight,
         r = t(i).css("padding-right");
        t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
       }), t(g.STICKY_CONTENT).each(function(n, i) {
        var s = t(i)[0].style.marginRight,
         r = t(i).css("margin-right");
        t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
       }), t(g.NAVBAR_TOGGLER).each(function(n, i) {
        var s = t(i)[0].style.marginRight,
         r = t(i).css("margin-right");
        t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
       });
       var n = document.body.style.paddingRight,
        i = t("body").css("padding-right");
       t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
      }
     }, p._resetScrollbar = function() {
      t(g.FIXED_CONTENT).each(function(e, n) {
       var i = t(n).data("padding-right");
       "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
      }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function(e, n) {
       var i = t(n).data("margin-right");
       "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
      });
      var e = t("body").data("padding-right");
      "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
     }, p._getScrollbarWidth = function() {
      var t = document.createElement("div");
      t.className = c, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e
     }, o._jQueryInterface = function(e, i) {
      return this.each(function() {
       var s = t(this).data(n),
        a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
       if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
        if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
        s[e](i)
       } else a.show && s.show(i)
      })
     }, s(o, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), o
    }();
   return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
    var i, s = this,
     o = P.getSelectorFromElement(this);
    o && (i = t(o)[0]);
    var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var l = t(i).one(h.SHOW, function(e) {
     e.isDefaultPrevented() || l.one(h.HIDDEN, function() {
      t(s).is(":visible") && s.focus()
     })
    });
    p._jQueryInterface.call(t(i), a, this)
   }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function() {
    return t.fn.modal = o, p._jQueryInterface
   }, p
  }(e),
  U = function(t) {
   var e = "tooltip",
    i = "bs.tooltip",
    o = "." + i,
    a = t.fn[e],
    l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    h = {
     animation: "boolean",
     template: "string",
     title: "(string|element|function)",
     trigger: "string",
     delay: "(number|object)",
     html: "boolean",
     selector: "(string|boolean)",
     placement: "(string|function)",
     offset: "(number|string)",
     container: "(string|element|boolean)",
     fallbackPlacement: "(string|array)",
     boundary: "(string|element)"
    },
    c = {
     AUTO: "auto",
     TOP: "top",
     RIGHT: "right",
     BOTTOM: "bottom",
     LEFT: "left"
    },
    u = {
     animation: !0,
     template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
     trigger: "hover focus",
     title: "",
     delay: 0,
     html: !1,
     selector: !1,
     placement: "top",
     offset: 0,
     container: !1,
     fallbackPlacement: "flip",
     boundary: "scrollParent"
    },
    f = "show",
    d = "out",
    _ = {
     HIDE: "hide" + o,
     HIDDEN: "hidden" + o,
     SHOW: "show" + o,
     SHOWN: "shown" + o,
     INSERTED: "inserted" + o,
     CLICK: "click" + o,
     FOCUSIN: "focusin" + o,
     FOCUSOUT: "focusout" + o,
     MOUSEENTER: "mouseenter" + o,
     MOUSELEAVE: "mouseleave" + o
    },
    g = "fade",
    p = "show",
    m = ".tooltip-inner",
    v = ".arrow",
    E = "hover",
    T = "focus",
    y = "click",
    C = "manual",
    I = function() {
     function a(t, e) {
      if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
     }
     var I = a.prototype;
     return I.enable = function() {
      this._isEnabled = !0
     }, I.disable = function() {
      this._isEnabled = !1
     }, I.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled
     }, I.toggle = function(e) {
      if (this._isEnabled)
       if (e) {
        var n = this.constructor.DATA_KEY,
         i = t(e.currentTarget).data(n);
        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
       } else {
        if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
        this._enter(null, this)
       }
     }, I.dispose = function() {
      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
     }, I.show = function() {
      var e = this;
      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
      var i = t.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
       t(this.element).trigger(i);
       var s = t.contains(this.element.ownerDocument.documentElement, this.element);
       if (i.isDefaultPrevented() || !s) return;
       var r = this.getTipElement(),
        o = P.getUID(this.constructor.NAME);
       r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
       var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
        h = this._getAttachment(l);
       this.addAttachmentClass(h);
       var c = !1 === this.config.container ? document.body : t(this.config.container);
       t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
        placement: h,
        modifiers: {
         offset: {
          offset: this.config.offset
         },
         flip: {
          behavior: this.config.fallbackPlacement
         },
         arrow: {
          element: v
         },
         preventOverflow: {
          boundariesElement: this.config.boundary
         }
        },
        onCreate: function(t) {
         t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
        },
        onUpdate: function(t) {
         e._handlePopperPlacementChange(t)
        }
       }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
       var u = function() {
        e.config.animation && e._fixTransition();
        var n = e._hoverState;
        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
       };
       P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
      }
     }, I.hide = function(e) {
      var n = this,
       i = this.getTipElement(),
       s = t.Event(this.constructor.Event.HIDE),
       r = function() {
        n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
       };
      t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
     }, I.update = function() {
      null !== this._popper && this._popper.scheduleUpdate()
     }, I.isWithContent = function() {
      return Boolean(this.getTitle())
     }, I.addAttachmentClass = function(e) {
      t(this.getTipElement()).addClass("bs-tooltip-" + e)
     }, I.getTipElement = function() {
      return this.tip = this.tip || t(this.config.template)[0], this.tip
     }, I.setContent = function() {
      var e = t(this.getTipElement());
      this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
     }, I.setElementContent = function(e, n) {
      var i = this.config.html;
      "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
     }, I.getTitle = function() {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
     }, I._getAttachment = function(t) {
      return c[t.toUpperCase()]
     }, I._setListeners = function() {
      var e = this;
      this.config.trigger.split(" ").forEach(function(n) {
       if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
        return e.toggle(t)
       });
       else if (n !== C) {
        var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
         s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
        t(e.element).on(i, e.config.selector, function(t) {
         return e._enter(t)
        }).on(s, e.config.selector, function(t) {
         return e._leave(t)
        })
       }
       t(e.element).closest(".modal").on("hide.bs.modal", function() {
        return e.hide()
       })
      }), this.config.selector ? this.config = r({}, this.config, {
       trigger: "manual",
       selector: ""
      }) : this._fixTitle()
     }, I._fixTitle = function() {
      var t = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
     }, I._enter = function(e, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
       n._hoverState === f && n.show()
      }, n.config.delay.show) : n.show())
     }, I._leave = function(e, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
       n._hoverState === d && n.hide()
      }, n.config.delay.hide) : n.hide())
     }, I._isWithActiveTrigger = function() {
      for (var t in this._activeTrigger)
       if (this._activeTrigger[t]) return !0;
      return !1
     }, I._getConfig = function(n) {
      return "number" == typeof(n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
       show: n.delay,
       hide: n.delay
      }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
     }, I._getDelegateConfig = function() {
      var t = {};
      if (this.config)
       for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      return t
     }, I._cleanTipClass = function() {
      var e = t(this.getTipElement()),
       n = e.attr("class").match(l);
      null !== n && n.length > 0 && e.removeClass(n.join(""))
     }, I._handlePopperPlacementChange = function(t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
     }, I._fixTransition = function() {
      var e = this.getTipElement(),
       n = this.config.animation;
      null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
     }, a._jQueryInterface = function(e) {
      return this.each(function() {
       var n = t(this).data(i),
        s = "object" == typeof e && e;
       if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
        n[e]()
       }
      })
     }, s(a, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return u
      }
     }, {
      key: "NAME",
      get: function() {
       return e
      }
     }, {
      key: "DATA_KEY",
      get: function() {
       return i
      }
     }, {
      key: "Event",
      get: function() {
       return _
      }
     }, {
      key: "EVENT_KEY",
      get: function() {
       return o
      }
     }, {
      key: "DefaultType",
      get: function() {
       return h
      }
     }]), a
    }();
   return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
    return t.fn[e] = a, I._jQueryInterface
   }, I
  }(e),
  x = function(t) {
   var e = "popover",
    n = "bs.popover",
    i = "." + n,
    o = t.fn[e],
    a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    l = r({}, U.Default, {
     placement: "right",
     trigger: "click",
     content: "",
     template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    h = r({}, U.DefaultType, {
     content: "(string|element|function)"
    }),
    c = "fade",
    u = "show",
    f = ".popover-header",
    d = ".popover-body",
    _ = {
     HIDE: "hide" + i,
     HIDDEN: "hidden" + i,
     SHOW: "show" + i,
     SHOWN: "shown" + i,
     INSERTED: "inserted" + i,
     CLICK: "click" + i,
     FOCUSIN: "focusin" + i,
     FOCUSOUT: "focusout" + i,
     MOUSEENTER: "mouseenter" + i,
     MOUSELEAVE: "mouseleave" + i
    },
    g = function(r) {
     var o, g;

     function p() {
      return r.apply(this, arguments) || this
     }
     g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
     var m = p.prototype;
     return m.isWithContent = function() {
      return this.getTitle() || this._getContent()
     }, m.addAttachmentClass = function(e) {
      t(this.getTipElement()).addClass("bs-popover-" + e)
     }, m.getTipElement = function() {
      return this.tip = this.tip || t(this.config.template)[0], this.tip
     }, m.setContent = function() {
      var e = t(this.getTipElement());
      this.setElementContent(e.find(f), this.getTitle());
      var n = this._getContent();
      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
     }, m._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content
     }, m._cleanTipClass = function() {
      var e = t(this.getTipElement()),
       n = e.attr("class").match(a);
      null !== n && n.length > 0 && e.removeClass(n.join(""))
     }, p._jQueryInterface = function(e) {
      return this.each(function() {
       var i = t(this).data(n),
        s = "object" == typeof e ? e : null;
       if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
        i[e]()
       }
      })
     }, s(p, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return l
      }
     }, {
      key: "NAME",
      get: function() {
       return e
      }
     }, {
      key: "DATA_KEY",
      get: function() {
       return n
      }
     }, {
      key: "Event",
      get: function() {
       return _
      }
     }, {
      key: "EVENT_KEY",
      get: function() {
       return i
      }
     }, {
      key: "DefaultType",
      get: function() {
       return h
      }
     }]), p
    }(U);
   return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
    return t.fn[e] = o, g._jQueryInterface
   }, g
  }(e),
  K = function(t) {
   var e = "scrollspy",
    n = "bs.scrollspy",
    i = "." + n,
    o = t.fn[e],
    a = {
     offset: 10,
     method: "auto",
     target: ""
    },
    l = {
     offset: "number",
     method: "string",
     target: "(string|element)"
    },
    h = {
     ACTIVATE: "activate" + i,
     SCROLL: "scroll" + i,
     LOAD_DATA_API: "load" + i + ".data-api"
    },
    c = "dropdown-item",
    u = "active",
    f = {
     DATA_SPY: '[data-spy="scroll"]',
     ACTIVE: ".active",
     NAV_LIST_GROUP: ".nav, .list-group",
     NAV_LINKS: ".nav-link",
     NAV_ITEMS: ".nav-item",
     LIST_ITEMS: ".list-group-item",
     DROPDOWN: ".dropdown",
     DROPDOWN_ITEMS: ".dropdown-item",
     DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
    d = "offset",
    _ = "position",
    g = function() {
     function o(e, n) {
      var i = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function(t) {
       return i._process(t)
      }), this.refresh(), this._process()
     }
     var g = o.prototype;
     return g.refresh = function() {
      var e = this,
       n = this._scrollElement === this._scrollElement.window ? d : _,
       i = "auto" === this._config.method ? n : this._config.method,
       s = i === _ ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
       var n, r = P.getSelectorFromElement(e);
       if (r && (n = t(r)[0]), n) {
        var o = n.getBoundingClientRect();
        if (o.width || o.height) return [t(n)[i]().top + s, r]
       }
       return null
      }).filter(function(t) {
       return t
      }).sort(function(t, e) {
       return t[0] - e[0]
      }).forEach(function(t) {
       e._offsets.push(t[0]), e._targets.push(t[1])
      })
     }, g.dispose = function() {
      t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
     }, g._getConfig = function(n) {
      if ("string" != typeof(n = r({}, a, n)).target) {
       var i = t(n.target).attr("id");
       i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
      }
      return P.typeCheckConfig(e, n, l), n
     }, g._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
     }, g._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
     }, g._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
     }, g._process = function() {
      var t = this._getScrollTop() + this._config.offset,
       e = this._getScrollHeight(),
       n = this._config.offset + e - this._getOffsetHeight();
      if (this._scrollHeight !== e && this.refresh(), t >= n) {
       var i = this._targets[this._targets.length - 1];
       this._activeTarget !== i && this._activate(i)
      } else {
       if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
       for (var s = this._offsets.length; s--;) {
        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
       }
      }
     }, g._activate = function(e) {
      this._activeTarget = e, this._clear();
      var n = this._selector.split(",");
      n = n.map(function(t) {
       return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
      });
      var i = t(n.join(","));
      i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
       relatedTarget: e
      })
     }, g._clear = function() {
      t(this._selector).filter(f.ACTIVE).removeClass(u)
     }, o._jQueryInterface = function(e) {
      return this.each(function() {
       var i = t(this).data(n);
       if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
        i[e]()
       }
      })
     }, s(o, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), o
    }();
   return t(window).on(h.LOAD_DATA_API, function() {
    for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
     var i = t(e[n]);
     g._jQueryInterface.call(i, i.data())
    }
   }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
    return t.fn[e] = o, g._jQueryInterface
   }, g
  }(e),
  V = function(t) {
   var e = "bs.tab",
    n = "." + e,
    i = t.fn.tab,
    r = {
     HIDE: "hide" + n,
     HIDDEN: "hidden" + n,
     SHOW: "show" + n,
     SHOWN: "shown" + n,
     CLICK_DATA_API: "click.bs.tab.data-api"
    },
    o = "dropdown-menu",
    a = "active",
    l = "disabled",
    h = "fade",
    c = "show",
    u = ".dropdown",
    f = ".nav, .list-group",
    d = ".active",
    _ = "> li > .active",
    g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    p = ".dropdown-toggle",
    m = "> .dropdown-menu .active",
    v = function() {
     function n(t) {
      this._element = t
     }
     var i = n.prototype;
     return i.show = function() {
      var e = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
       var n, i, s = t(this._element).closest(f)[0],
        o = P.getSelectorFromElement(this._element);
       if (s) {
        var h = "UL" === s.nodeName ? _ : d;
        i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
       }
       var c = t.Event(r.HIDE, {
         relatedTarget: this._element
        }),
        u = t.Event(r.SHOW, {
         relatedTarget: i
        });
       if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
        o && (n = t(o)[0]), this._activate(this._element, s);
        var g = function() {
         var n = t.Event(r.HIDDEN, {
           relatedTarget: e._element
          }),
          s = t.Event(r.SHOWN, {
           relatedTarget: i
          });
         t(i).trigger(n), t(e._element).trigger(s)
        };
        n ? this._activate(n, n.parentNode, g) : g()
       }
      }
     }, i.dispose = function() {
      t.removeData(this._element, e), this._element = null
     }, i._activate = function(e, n, i) {
      var s = this,
       r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
       o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
       a = function() {
        return s._transitionComplete(e, r, i)
       };
      r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
     }, i._transitionComplete = function(e, n, i) {
      if (n) {
       t(n).removeClass(c + " " + a);
       var s = t(n.parentNode).find(m)[0];
       s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
      }
      if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
       var r = t(e).closest(u)[0];
       r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
      }
      i && i()
     }, n._jQueryInterface = function(i) {
      return this.each(function() {
       var s = t(this),
        r = s.data(e);
       if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
        r[i]()
       }
      })
     }, s(n, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }]), n
    }();
   return t(document).on(r.CLICK_DATA_API, g, function(e) {
    e.preventDefault(), v._jQueryInterface.call(t(this), "show")
   }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function() {
    return t.fn.tab = i, v._jQueryInterface
   }, v
  }(e);
 ! function(t) {
  if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
 }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
  value: !0
 })
});
//# sourceMappingURL=bootstrap.min.js.map
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
(function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.4',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass);

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,
                    closeOnHover: true,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: 'toast-close-button',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false,
                    progressClass: 'toast-progress',
                    rtl: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null) {
                        source = '';
                    }

                    return source
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setRTL();
                    setSequence();
                    setAria();
                }

                function setAria() {
                    var ariaValue = '';
                    switch (map.iconClass) {
                        case 'toast-success':
                        case 'toast-info':
                            ariaValue =  'polite';
                            break;
                        default:
                            ariaValue = 'assertive';
                    }
                    $toastElement.attr('aria-live', ariaValue);
                }

                function handleEvents() {
                    if (options.closeOnHover) {
                        $toastElement.hover(stickAround, delayedHideToast);
                    }

                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }

                            if (options.onCloseClick) {
                                options.onCloseClick(event);
                            }

                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        var suffix = map.title;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.title);
                        }
                        $titleElement.append(suffix).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        var suffix = map.message;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.message);
                        }
                        $messageElement.append(suffix).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass(options.closeClass).attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass(options.progressClass);
                        $toastElement.prepend($progressElement);
                    }
                }

                function setRTL() {
                    if (options.rtl) {
                        $toastElement.addClass('rtl');
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            clearTimeout(intervalId);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));

/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}

function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* axios v0.17.1 | (c) 2017 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(20);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(2);
	var InterceptorManager = __webpack_require__(17);
	var dispatchRequest = __webpack_require__(18);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(7);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(8);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(8);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(9);
	var buildURL = __webpack_require__(12);
	var parseHeaders = __webpack_require__(13);
	var isURLSameOrigin = __webpack_require__(14);
	var createError = __webpack_require__(10);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(16);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(10);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(11);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(19);
	var isCancel = __webpack_require__(20);
	var defaults = __webpack_require__(6);
	var isAbsoluteURL = __webpack_require__(21);
	var combineURLs = __webpack_require__(22);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
new Vue({
	el: "#crud",
	created: function(){
		this.getKeeps();
	},
	data: {
		keeps: [],
		newKeep: '',
		pagination: {
			'total': 0,
            'current_page': 0,
            'per_page': 0,
            'last_page': 0,
            'from': 0,
            'to': 0,
		},
		errors: [],
		fillKeep: {'id' : '', 'keep' : ''},
		offset: 5,
	},
	computed: {
		isActived: function (){
			return this.pagination.current_page;
		},
		pagesNumber: function (){
			if(!this.pagination.to){
				return [];
			}

			var from = this.pagination.current_page - this.offset;
			if(from < 1){
				from = 1;
			}

			var to = from + (this.offset * 2); 

			if(to >= this.pagination.last_page){
				to = this.pagination.last_page;
			}

			var pageArray = [];
			while(from <= to){
				pageArray.push(from);
				from++;
			}

			return pageArray;
		}
	},
	methods: {
		getKeeps: function(page){
			var urlKeeps = 'task?page='+page;
			axios.get(urlKeeps)
				.then(response => {
					this.keeps = response.data.tasks.data;
					this.pagination = response.data.pagination;
				});
		},
		editKeep: function(keep){
			this.fillKeep.id = keep.id;
			this.fillKeep.keep = keep.keep;
			$('#edit').modal('show');
		},
		updateKeep: function(id){
			var url = 'task/' + id;
			axios.put(url, this.fillKeep)
				.then(response => {
					this.getKeeps();
					this.fillKeep = {'id' : '', 'keep' : ''},
					this.errors = [],
					$('#edit').modal('hide');
					toastr.success('Tarea Actualizada con exito');
				})
				.catch(error => {
					this.errors = error.response.data;
				});
		},
		deleteKeeps: function(keep){
			var url = 'task/' + keep.id;
			axios.delete(url)
				.then(reponse => {
					this.getKeeps();
					toastr.success('Eliminado Correctamente');
				});
		},
		createKeep: function(){
			var url = 'task';
			axios.post(url, {
				keep: this.newKeep
			})
				.then(response => {
					this.getKeeps();
					this.newKeep = '';
					this.errors = [];
					$('#create').modal('hide');
					toastr.success('Tarea Agregada Correctamente');
				})
				.catch(error => {
					// this.errors = error.response.data;
					this.errors = error.response.data.errors.keep;
				});
		},
		changePage: function(page){
			this.pagination.current_page = page;
			this.getKeeps(page);
		},
	}

})