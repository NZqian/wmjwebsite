// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm
function k() { if (document.body) { var a = document.body, b = document.documentElement, c = window.innerHeight, d = a.scrollHeight; m = 0 <= document.compatMode.indexOf("CSS") ? b : a; p = a; r = !0; top != self ? s = !0 : d > c && (a.offsetHeight <= c || b.offsetHeight <= c) && (m.style.height = "auto", m.offsetHeight <= c && (c = document.createElement("div"), c.style.clear = "both", a.appendChild(c))); t || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll"); v && window.addEventListener("keydown", w, !1) } }
function x(a, b, c) {
    var d; d || (d = 1E3); y(b, c); z.push({ x: b, y: c, a: 0 > b ? 0.99 : -0.99, b: 0 > c ? 0.99 : -0.99, start: +new Date }); if (!A) {
        var e = function () {
            for (var u = +new Date, l = 0, q = 0, n = 0; n < z.length; n++) { var f = z[n], g = u - f.start, C = g >= B, h = C ? 1 : g / B; D && (g = h, 1 <= g ? h = 1 : 0 >= g ? h = 0 : (1 == E && (E /= F(1)), h = F(g))); g = f.x * h - f.a >> 0; h = f.y * h - f.b >> 0; l += g; q += h; f.a += g; f.b += h; C && (z.splice(n, 1), n--) } b && (u = a.scrollLeft, a.scrollLeft += l, l && a.scrollLeft === u && (b = 0)); c && (l = a.scrollTop, a.scrollTop += q, q && a.scrollTop === l && (c = 0)); b || c || (z = []); z.length ? setTimeout(e,
            d / G + 1) : A = !1
        }; setTimeout(e, 0); A = !0
    }
} function H(a) { r || k(); var b = a.target, c = I(b); if (!c || a.defaultPrevented || "embed" === p.nodeName.toLowerCase() || "embed" === b.nodeName.toLowerCase() && /\.pdf/i.test(b.src)) return !0; var b = a.wheelDeltaX || 0, d = a.wheelDeltaY || 0; b || d || (d = a.wheelDelta || 0); 1.2 < Math.abs(b) && (b *= J / 120); 1.2 < Math.abs(d) && (d *= J / 120); x(c, -b, -d); a.preventDefault() }
function w(a) {
    var b = a.target, c = a.ctrlKey || a.altKey || a.metaKey; if (/input|textarea|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || c || "button" === b.nodeName.toLowerCase() && a.keyCode === K) return !0; var d; d = b = 0; var c = I(p), e = c.clientHeight; c == document.body && (e = window.innerHeight); switch (a.keyCode) {
        case L: d = -M; break; case N: d = M; break; case K: d = a.shiftKey ? 1 : -1; d = -d * e * 0.9; break; case O: d = 0.9 * -e; break; case P: d = 0.9 * e; break; case Q: d = -c.scrollTop; break; case R: e = c.scrollHeight - c.scrollTop - e; d = 0 < e ?
        e + 10 : 0; break; case S: b = -M; break; case T: b = M; break; default: return !0
    } x(c, b, d); a.preventDefault()
} function U(a) { p = a.target } function V(a, b) { for (var c = a.length; c--;) W[X(a[c])] = b; return b }
function I(a) { var b = [], c = m.scrollHeight; do { var d = W[X(a)]; if (d) return V(b, d); b.push(a); if (c === a.scrollHeight) { if (!s || m.clientHeight + 10 < c) return V(b, document.body) } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return V(b, a) } while (a = a.parentNode) } function y(a, b) { a = 0 < a ? 1 : -1; b = 0 < b ? 1 : -1; if (Y !== a || Z !== b) Y = a, Z = b, z = [] }
function F(a) { var b; a *= $; 1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b)); return b * E } var G = 150, B = 500, J = 150, D = !0, $ = 6, E = 1, v = !0, M = 50, s = !1, Y = 0, Z = 0, r = !1, t = !0, m = document.documentElement, p, S = 37, L = 38, T = 39, N = 40, K = 32, O = 33, P = 34, R = 35, Q = 36, z = [], A = !1, W = {}; setInterval(function () { W = {} }, 1E4); var X = function () { var a = 0; return function (b) { return b.c || (b.c = a++) } }();
/chrome/.test(navigator.userAgent.toLowerCase()) && (window.addEventListener("mousedown", U, !1), window.addEventListener("mousewheel", H, !1), window.addEventListener("load", k, !1));
