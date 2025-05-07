const {
  SvelteComponent: _1,
  assign: N1,
  children: I1,
  claim_element: O1,
  create_slot: B1,
  detach: Hu,
  element: L1,
  get_all_dirty_from_scope: R1,
  get_slot_changes: z1,
  get_spread_update: P1,
  init: q1,
  insert_hydration: H1,
  safe_not_equal: U1,
  set_dynamic_element_data: Uu,
  set_style: Je,
  toggle_class: Ot,
  transition_in: Bo,
  transition_out: Lo,
  update_slot_base: j1
} = window.__gradio__svelte__internal;
function G1(n) {
  let t, e, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = B1(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    { "data-testid": (
      /*test_id*/
      n[9]
    ) },
    { id: (
      /*elem_id*/
      n[4]
    ) },
    {
      class: e = "block " + /*elem_classes*/
      n[5].join(" ") + " svelte-1ezsyiy"
    }
  ], o = {};
  for (let s = 0; s < u.length; s += 1)
    o = N1(o, u[s]);
  return {
    c() {
      t = L1(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(s) {
      t = O1(
        s,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var c = I1(t);
      i && i.l(c), c.forEach(Hu), this.h();
    },
    h() {
      Uu(
        /*tag*/
        n[18]
      )(t, o), Ot(
        t,
        "hidden",
        /*visible*/
        n[12] === !1
      ), Ot(
        t,
        "padded",
        /*padding*/
        n[8]
      ), Ot(
        t,
        "flex",
        /*flex*/
        n[17]
      ), Ot(
        t,
        "border_focus",
        /*border_mode*/
        n[7] === "focus"
      ), Ot(
        t,
        "border_contrast",
        /*border_mode*/
        n[7] === "contrast"
      ), Ot(t, "hide-container", !/*explicit_call*/
      n[10] && !/*container*/
      n[11]), Je(
        t,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[0]
        )
      ), Je(
        t,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[1]
        )
      ), Je(
        t,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[2]
        )
      ), Je(t, "width", typeof /*width*/
      n[3] == "number" ? `calc(min(${/*width*/
      n[3]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[3]
        )
      )), Je(
        t,
        "border-style",
        /*variant*/
        n[6]
      ), Je(
        t,
        "overflow",
        /*allow_overflow*/
        n[13] ? (
          /*overflow_behavior*/
          n[14]
        ) : "hidden"
      ), Je(
        t,
        "flex-grow",
        /*scale*/
        n[15]
      ), Je(t, "min-width", `calc(min(${/*min_width*/
      n[16]}px, 100%))`), Je(t, "border-width", "var(--block-border-width)");
    },
    m(s, c) {
      H1(s, t, c), i && i.m(t, null), r = !0;
    },
    p(s, c) {
      i && i.p && (!r || c & /*$$scope*/
      2097152) && j1(
        i,
        a,
        s,
        /*$$scope*/
        s[21],
        r ? z1(
          a,
          /*$$scope*/
          s[21],
          c,
          null
        ) : R1(
          /*$$scope*/
          s[21]
        ),
        null
      ), Uu(
        /*tag*/
        s[18]
      )(t, o = P1(u, [
        (!r || c & /*test_id*/
        512) && { "data-testid": (
          /*test_id*/
          s[9]
        ) },
        (!r || c & /*elem_id*/
        16) && { id: (
          /*elem_id*/
          s[4]
        ) },
        (!r || c & /*elem_classes*/
        32 && e !== (e = "block " + /*elem_classes*/
        s[5].join(" ") + " svelte-1ezsyiy")) && { class: e }
      ])), Ot(
        t,
        "hidden",
        /*visible*/
        s[12] === !1
      ), Ot(
        t,
        "padded",
        /*padding*/
        s[8]
      ), Ot(
        t,
        "flex",
        /*flex*/
        s[17]
      ), Ot(
        t,
        "border_focus",
        /*border_mode*/
        s[7] === "focus"
      ), Ot(
        t,
        "border_contrast",
        /*border_mode*/
        s[7] === "contrast"
      ), Ot(t, "hide-container", !/*explicit_call*/
      s[10] && !/*container*/
      s[11]), c & /*height*/
      1 && Je(
        t,
        "height",
        /*get_dimension*/
        s[19](
          /*height*/
          s[0]
        )
      ), c & /*min_height*/
      2 && Je(
        t,
        "min-height",
        /*get_dimension*/
        s[19](
          /*min_height*/
          s[1]
        )
      ), c & /*max_height*/
      4 && Je(
        t,
        "max-height",
        /*get_dimension*/
        s[19](
          /*max_height*/
          s[2]
        )
      ), c & /*width*/
      8 && Je(t, "width", typeof /*width*/
      s[3] == "number" ? `calc(min(${/*width*/
      s[3]}px, 100%))` : (
        /*get_dimension*/
        s[19](
          /*width*/
          s[3]
        )
      )), c & /*variant*/
      64 && Je(
        t,
        "border-style",
        /*variant*/
        s[6]
      ), c & /*allow_overflow, overflow_behavior*/
      24576 && Je(
        t,
        "overflow",
        /*allow_overflow*/
        s[13] ? (
          /*overflow_behavior*/
          s[14]
        ) : "hidden"
      ), c & /*scale*/
      32768 && Je(
        t,
        "flex-grow",
        /*scale*/
        s[15]
      ), c & /*min_width*/
      65536 && Je(t, "min-width", `calc(min(${/*min_width*/
      s[16]}px, 100%))`);
    },
    i(s) {
      r || (Bo(i, s), r = !0);
    },
    o(s) {
      Lo(i, s), r = !1;
    },
    d(s) {
      s && Hu(t), i && i.d(s);
    }
  };
}
function V1(n) {
  let t, e = (
    /*tag*/
    n[18] && G1(n)
  );
  return {
    c() {
      e && e.c();
    },
    l(r) {
      e && e.l(r);
    },
    m(r, a) {
      e && e.m(r, a), t = !0;
    },
    p(r, [a]) {
      /*tag*/
      r[18] && e.p(r, a);
    },
    i(r) {
      t || (Bo(e, r), t = !0);
    },
    o(r) {
      Lo(e, r), t = !1;
    },
    d(r) {
      e && e.d(r);
    }
  };
}
function $1(n, t, e) {
  let { $$slots: r = {}, $$scope: a } = t, { height: i = void 0 } = t, { min_height: u = void 0 } = t, { max_height: o = void 0 } = t, { width: s = void 0 } = t, { elem_id: c = "" } = t, { elem_classes: h = [] } = t, { variant: b = "solid" } = t, { border_mode: d = "base" } = t, { padding: m = !0 } = t, { type: T = "normal" } = t, { test_id: A = void 0 } = t, { explicit_call: S = !1 } = t, { container: I = !0 } = t, { visible: D = !0 } = t, { allow_overflow: k = !0 } = t, { overflow_behavior: M = "auto" } = t, { scale: O = null } = t, { min_width: N = 0 } = t, { flex: R = !1 } = t, j = T === "fieldset" ? "fieldset" : "div";
  const q = (H) => {
    if (H !== void 0) {
      if (typeof H == "number")
        return H + "px";
      if (typeof H == "string")
        return H;
    }
  };
  return n.$$set = (H) => {
    "height" in H && e(0, i = H.height), "min_height" in H && e(1, u = H.min_height), "max_height" in H && e(2, o = H.max_height), "width" in H && e(3, s = H.width), "elem_id" in H && e(4, c = H.elem_id), "elem_classes" in H && e(5, h = H.elem_classes), "variant" in H && e(6, b = H.variant), "border_mode" in H && e(7, d = H.border_mode), "padding" in H && e(8, m = H.padding), "type" in H && e(20, T = H.type), "test_id" in H && e(9, A = H.test_id), "explicit_call" in H && e(10, S = H.explicit_call), "container" in H && e(11, I = H.container), "visible" in H && e(12, D = H.visible), "allow_overflow" in H && e(13, k = H.allow_overflow), "overflow_behavior" in H && e(14, M = H.overflow_behavior), "scale" in H && e(15, O = H.scale), "min_width" in H && e(16, N = H.min_width), "flex" in H && e(17, R = H.flex), "$$scope" in H && e(21, a = H.$$scope);
  }, [
    i,
    u,
    o,
    s,
    c,
    h,
    b,
    d,
    m,
    A,
    S,
    I,
    D,
    k,
    M,
    O,
    N,
    R,
    j,
    q,
    T,
    a,
    r
  ];
}
class W1 extends _1 {
  constructor(t) {
    super(), q1(this, t, $1, V1, U1, {
      height: 0,
      min_height: 1,
      max_height: 2,
      width: 3,
      elem_id: 4,
      elem_classes: 5,
      variant: 6,
      border_mode: 7,
      padding: 8,
      type: 20,
      test_id: 9,
      explicit_call: 10,
      container: 11,
      visible: 12,
      allow_overflow: 13,
      overflow_behavior: 14,
      scale: 15,
      min_width: 16,
      flex: 17
    });
  }
}
const Y1 = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], ju = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Y1.reduce(
  (n, { color: t, primary: e, secondary: r }) => ({
    ...n,
    [t]: {
      primary: ju[t][e],
      secondary: ju[t][r]
    }
  }),
  {}
);
class Tt {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(t, e, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = t, this.start = e, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(t, e) {
    return e ? !t || !t.loc || !e.loc || t.loc.lexer !== e.loc.lexer ? null : new Tt(t.loc.lexer, t.loc.start, e.loc.end) : t && t.loc;
  }
}
class zt {
  // don't expand the token
  // used in \noexpand
  constructor(t, e) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = t, this.loc = e;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(t, e) {
    return new zt(e, Tt.range(this, t));
  }
}
class Y {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(t, e) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + t, a, i, u = e && e.loc;
    if (u && u.start <= u.end) {
      var o = u.lexer.input;
      a = u.start, i = u.end, a === o.length ? r += " at end of input: " : r += " at position " + (a + 1) + ": ";
      var s = o.slice(a, i).replace(/[^]/g, "$&̲"), c;
      a > 15 ? c = "…" + o.slice(a - 15, a) : c = o.slice(0, a);
      var h;
      i + 15 < o.length ? h = o.slice(i, i + 15) + "…" : h = o.slice(i), r += c + s + h;
    }
    var b = new Error(r);
    return b.name = "ParseError", b.__proto__ = Y.prototype, b.position = a, a != null && i != null && (b.length = i - a), b.rawMessage = t, b;
  }
}
Y.prototype.__proto__ = Error.prototype;
var X1 = function(t, e) {
  return t.indexOf(e) !== -1;
}, Z1 = function(t, e) {
  return t === void 0 ? e : t;
}, K1 = /([A-Z])/g, J1 = function(t) {
  return t.replace(K1, "-$1").toLowerCase();
}, Q1 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, ef = /[&><"']/g;
function tf(n) {
  return String(n).replace(ef, (t) => Q1[t]);
}
var Ro = function n(t) {
  return t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? n(t.body[0]) : t : t.type === "font" ? n(t.body) : t;
}, rf = function(t) {
  var e = Ro(t);
  return e.type === "mathord" || e.type === "textord" || e.type === "atom";
}, nf = function(t) {
  if (!t)
    throw new Error("Expected non-null, but got " + String(t));
  return t;
}, af = function(t) {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, ce = {
  contains: X1,
  deflt: Z1,
  escape: tf,
  hyphenate: J1,
  getBaseElem: Ro,
  isCharacterBox: rf,
  protocolFromUrl: af
}, qn = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (n) => "#" + n
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (n, t) => (t.push(n), t)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (n) => Math.max(0, n),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (n) => Math.max(0, n),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (n) => Math.max(0, n),
    cli: "-e, --max-expand <n>",
    cliProcessor: (n) => n === "Infinity" ? 1 / 0 : parseInt(n)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function uf(n) {
  if (n.default)
    return n.default;
  var t = n.type, e = Array.isArray(t) ? t[0] : t;
  if (typeof e != "string")
    return e.enum[0];
  switch (e) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Wi {
  constructor(t) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, t = t || {};
    for (var e in qn)
      if (qn.hasOwnProperty(e)) {
        var r = qn[e];
        this[e] = t[e] !== void 0 ? r.processor ? r.processor(t[e]) : t[e] : uf(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(t, e, r) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(t, e, r)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new Y("LaTeX-incompatible input and strict mode is set to 'error': " + (e + " [" + t + "]"), r);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (e + " [" + t + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + e + " [" + t + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(t, e, r) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(t, e, r);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (e + " [" + t + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + e + " [" + t + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(t) {
    if (t.url && !t.protocol) {
      var e = ce.protocolFromUrl(t.url);
      if (e == null)
        return !1;
      t.protocol = e;
    }
    var r = typeof this.trust == "function" ? this.trust(t) : this.trust;
    return !!r;
  }
}
class k0 {
  constructor(t, e, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = e, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Qt[sf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Qt[of[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Qt[lf[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Qt[cf[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Qt[ff[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Qt[df[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Yi = 0, Kn = 1, rr = 2, d0 = 3, Lr = 4, Rt = 5, ir = 6, ct = 7, Qt = [new k0(Yi, 0, !1), new k0(Kn, 0, !0), new k0(rr, 1, !1), new k0(d0, 1, !0), new k0(Lr, 2, !1), new k0(Rt, 2, !0), new k0(ir, 3, !1), new k0(ct, 3, !0)], sf = [Lr, Rt, Lr, Rt, ir, ct, ir, ct], of = [Rt, Rt, Rt, Rt, ct, ct, ct, ct], lf = [rr, d0, Lr, Rt, ir, ct, ir, ct], cf = [d0, d0, Rt, Rt, ct, ct, ct, ct], ff = [Kn, Kn, d0, d0, Rt, Rt, ct, ct], df = [Yi, Kn, rr, d0, rr, d0, rr, d0], he = {
  DISPLAY: Qt[Yi],
  TEXT: Qt[rr],
  SCRIPT: Qt[Lr],
  SCRIPTSCRIPT: Qt[ir]
}, mi = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function hf(n) {
  for (var t = 0; t < mi.length; t++)
    for (var e = mi[t], r = 0; r < e.blocks.length; r++) {
      var a = e.blocks[r];
      if (n >= a[0] && n <= a[1])
        return e.name;
    }
  return null;
}
var Hn = [];
mi.forEach((n) => n.blocks.forEach((t) => Hn.push(...t)));
function zo(n) {
  for (var t = 0; t < Hn.length; t += 2)
    if (n >= Hn[t] && n <= Hn[t + 1])
      return !0;
  return !1;
}
var J0 = 80, mf = function(t, e) {
  return "M95," + (622 + t + e) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + t / 2.075 + " -" + t + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
}, pf = function(t, e) {
  return "M263," + (601 + t + e) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t / 2.084 + " -" + t + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + t) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
}, gf = function(t, e) {
  return "M983 " + (10 + t + e) + `
l` + t / 3.13 + " -" + t + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
}, bf = function(t, e) {
  return "M424," + (2398 + t + e) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t / 4.223 + " -" + t + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t) + " " + e + `
h400000v` + (40 + t) + "h-400000z";
}, vf = function(t, e) {
  return "M473," + (2713 + t + e) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t / 5.298 + " -" + t + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + t) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "H1017.7z";
}, yf = function(t) {
  var e = t / 2;
  return "M400000 " + t + " H0 L" + e + " 0 l65 45 L145 " + (t - 80) + " H400000z";
}, wf = function(t, e, r) {
  var a = r - 54 - e - t;
  return "M702 " + (t + e) + "H400000" + (40 + t) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + e + "H400000v" + (40 + t) + "H742z";
}, xf = function(t, e, r) {
  e = 1e3 * e;
  var a = "";
  switch (t) {
    case "sqrtMain":
      a = mf(e, J0);
      break;
    case "sqrtSize1":
      a = pf(e, J0);
      break;
    case "sqrtSize2":
      a = gf(e, J0);
      break;
    case "sqrtSize3":
      a = bf(e, J0);
      break;
    case "sqrtSize4":
      a = vf(e, J0);
      break;
    case "sqrtTall":
      a = wf(e, J0, r);
  }
  return a;
}, Df = function(t, e) {
  switch (t) {
    case "⎜":
      return "M291 0 H417 V" + e + " H291z M291 0 H417 V" + e + " H291z";
    case "∣":
      return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z";
    case "∥":
      return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z" + ("M367 0 H410 V" + e + " H367z M367 0 H410 V" + e + " H367z");
    case "⎟":
      return "M457 0 H583 V" + e + " H457z M457 0 H583 V" + e + " H457z";
    case "⎢":
      return "M319 0 H403 V" + e + " H319z M319 0 H403 V" + e + " H319z";
    case "⎥":
      return "M263 0 H347 V" + e + " H263z M263 0 H347 V" + e + " H263z";
    case "⎪":
      return "M384 0 H504 V" + e + " H384z M384 0 H504 V" + e + " H384z";
    case "⏐":
      return "M312 0 H355 V" + e + " H312z M312 0 H355 V" + e + " H312z";
    case "‖":
      return "M257 0 H300 V" + e + " H257z M257 0 H300 V" + e + " H257z" + ("M478 0 H521 V" + e + " H478z M478 0 H521 V" + e + " H478z");
    default:
      return "";
  }
}, Gu = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Af = function(t, e) {
  switch (t) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + e + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + e + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + ` v585 h43z
M367 15 v585 v` + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + e + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + e + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + e + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v602 h84z
M403 1759 V0 H319 V1759 v` + e + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + e + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (e + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (e + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (e + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (e + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class Wr {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(t) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(t) {
    return ce.contains(this.classes, t);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var t = document.createDocumentFragment(), e = 0; e < this.children.length; e++)
      t.appendChild(this.children[e].toNode());
    return t;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var t = "", e = 0; e < this.children.length; e++)
      t += this.children[e].toMarkup();
    return t;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var t = (e) => e.toText();
    return this.children.map(t).join("");
  }
}
var e0 = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, dn = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, Vu = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Sf(n, t) {
  e0[n] = t;
}
function Xi(n, t, e) {
  if (!e0[t])
    throw new Error("Font metrics not found for font: " + t + ".");
  var r = n.charCodeAt(0), a = e0[t][r];
  if (!a && n[0] in Vu && (r = Vu[n[0]].charCodeAt(0), a = e0[t][r]), !a && e === "text" && zo(r) && (a = e0[t][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Oa = {};
function kf(n) {
  var t;
  if (n >= 5 ? t = 0 : n >= 3 ? t = 1 : t = 2, !Oa[t]) {
    var e = Oa[t] = {
      cssEmPerMu: dn.quad[t] / 18
    };
    for (var r in dn)
      dn.hasOwnProperty(r) && (e[r] = dn[r][t]);
  }
  return Oa[t];
}
var Ef = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], $u = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], Wu = function(t, e) {
  return e.size < 2 ? t : Ef[t - 1][e.size - 1];
};
class f0 {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(t) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || f0.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = $u[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(t) {
    var e = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
    return new f0(e);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(t) {
    return this.style === t ? this : this.extend({
      style: t,
      size: Wu(this.textSize, t)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(t) {
    return this.size === t && this.textSize === t ? this : this.extend({
      style: this.style.text(),
      size: t,
      textSize: t,
      sizeMultiplier: $u[t - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(t) {
    t = t || this.style.text();
    var e = Wu(f0.BASESIZE, t);
    return this.size === e && this.textSize === f0.BASESIZE && this.style === t ? this : this.extend({
      style: t,
      size: e
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var t;
    switch (this.style.id) {
      case 4:
      case 5:
        t = 3;
        break;
      case 6:
      case 7:
        t = 1;
        break;
      default:
        t = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: t
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(t) {
    return this.extend({
      color: t
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(t) {
    return this.extend({
      font: t
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(t) {
    return this.extend({
      fontFamily: t,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(t) {
    return this.extend({
      fontWeight: t,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(t) {
    return this.extend({
      fontShape: t,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(t) {
    return t.size !== this.size ? ["sizing", "reset-size" + t.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== f0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + f0.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = kf(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
f0.BASESIZE = 6;
var pi = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, Tf = {
  ex: !0,
  em: !0,
  mu: !0
}, Po = function(t) {
  return typeof t != "string" && (t = t.unit), t in pi || t in Tf || t === "ex";
}, Ue = function(t, e) {
  var r;
  if (t.unit in pi)
    r = pi[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
  else if (t.unit === "mu")
    r = e.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (e.style.isTight() ? a = e.havingStyle(e.style.text()) : a = e, t.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (t.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new Y("Invalid unit: '" + t.unit + "'");
    a !== e && (r *= a.sizeMultiplier / e.sizeMultiplier);
  }
  return Math.min(t.number * r, e.maxSize);
}, J = function(t) {
  return +t.toFixed(4) + "em";
}, F0 = function(t) {
  return t.filter((e) => e).join(" ");
}, qo = function(t, e, r) {
  if (this.classes = t || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, e) {
    e.style.isTight() && this.classes.push("mtight");
    var a = e.getColor();
    a && (this.style.color = a);
  }
}, Ho = function(t) {
  var e = document.createElement(t);
  e.className = F0(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && e.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    e.appendChild(this.children[i].toNode());
  return e;
}, Uo = function(t) {
  var e = "<" + t;
  this.classes.length && (e += ' class="' + ce.escape(F0(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += ce.hyphenate(a) + ":" + this.style[a] + ";");
  r && (e += ' style="' + ce.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (e += " " + i + '="' + ce.escape(this.attributes[i]) + '"');
  e += ">";
  for (var u = 0; u < this.children.length; u++)
    e += this.children[u].toMarkup();
  return e += "</" + t + ">", e;
};
class Yr {
  constructor(t, e, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, qo.call(this, t, r, a), this.children = e || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(t, e) {
    this.attributes[t] = e;
  }
  hasClass(t) {
    return ce.contains(this.classes, t);
  }
  toNode() {
    return Ho.call(this, "span");
  }
  toMarkup() {
    return Uo.call(this, "span");
  }
}
class Zi {
  constructor(t, e, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, qo.call(this, e, a), this.children = r || [], this.setAttribute("href", t);
  }
  setAttribute(t, e) {
    this.attributes[t] = e;
  }
  hasClass(t) {
    return ce.contains(this.classes, t);
  }
  toNode() {
    return Ho.call(this, "a");
  }
  toMarkup() {
    return Uo.call(this, "a");
  }
}
class Cf {
  constructor(t, e, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = e, this.src = t, this.classes = ["mord"], this.style = r;
  }
  hasClass(t) {
    return ce.contains(this.classes, t);
  }
  toNode() {
    var t = document.createElement("img");
    t.src = this.src, t.alt = this.alt, t.className = "mord";
    for (var e in this.style)
      this.style.hasOwnProperty(e) && (t.style[e] = this.style[e]);
    return t;
  }
  toMarkup() {
    var t = '<img src="' + ce.escape(this.src) + '"' + (' alt="' + ce.escape(this.alt) + '"'), e = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (e += ce.hyphenate(r) + ":" + this.style[r] + ";");
    return e && (t += ' style="' + ce.escape(e) + '"'), t += "'/>", t;
  }
}
var Mf = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Pt {
  constructor(t, e, r, a, i, u, o, s) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = e || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = u || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0;
    var c = hf(this.text.charCodeAt(0));
    c && this.classes.push(c + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Mf[this.text]);
  }
  hasClass(t) {
    return ce.contains(this.classes, t);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var t = document.createTextNode(this.text), e = null;
    this.italic > 0 && (e = document.createElement("span"), e.style.marginRight = J(this.italic)), this.classes.length > 0 && (e = e || document.createElement("span"), e.className = F0(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (e = e || document.createElement("span"), e.style[r] = this.style[r]);
    return e ? (e.appendChild(t), e) : t;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var t = !1, e = "<span";
    this.classes.length && (t = !0, e += ' class="', e += ce.escape(F0(this.classes)), e += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += ce.hyphenate(a) + ":" + this.style[a] + ";");
    r && (t = !0, e += ' style="' + ce.escape(r) + '"');
    var i = ce.escape(this.text);
    return t ? (e += ">", e += i, e += "</span>", e) : i;
  }
}
class m0 {
  constructor(t, e) {
    this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = e || {};
  }
  toNode() {
    var t = "http://www.w3.org/2000/svg", e = document.createElementNS(t, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
    for (var a = 0; a < this.children.length; a++)
      e.appendChild(this.children[a].toNode());
    return e;
  }
  toMarkup() {
    var t = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var e in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="' + ce.escape(this.attributes[e]) + '"');
    t += ">";
    for (var r = 0; r < this.children.length; r++)
      t += this.children[r].toMarkup();
    return t += "</svg>", t;
  }
}
class _0 {
  constructor(t, e) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = e;
  }
  toNode() {
    var t = "http://www.w3.org/2000/svg", e = document.createElementNS(t, "path");
    return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", Gu[this.pathName]), e;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ce.escape(this.alternate) + '"/>' : '<path d="' + ce.escape(Gu[this.pathName]) + '"/>';
  }
}
class gi {
  constructor(t) {
    this.attributes = void 0, this.attributes = t || {};
  }
  toNode() {
    var t = "http://www.w3.org/2000/svg", e = document.createElementNS(t, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
    return e;
  }
  toMarkup() {
    var t = "<line";
    for (var e in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="' + ce.escape(this.attributes[e]) + '"');
    return t += "/>", t;
  }
}
function Yu(n) {
  if (n instanceof Pt)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function Ff(n) {
  if (n instanceof Yr)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var _f = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, Nf = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, ze = {
  math: {},
  text: {}
};
function l(n, t, e, r, a, i) {
  ze[n][a] = {
    font: t,
    group: e,
    replace: r
  }, i && r && (ze[n][r] = ze[n][a]);
}
var f = "math", V = "text", p = "main", w = "ams", qe = "accent-token", ae = "bin", dt = "close", fr = "inner", de = "mathord", We = "op-token", Nt = "open", ma = "punct", x = "rel", y0 = "spacing", E = "textord";
l(f, p, x, "≡", "\\equiv", !0);
l(f, p, x, "≺", "\\prec", !0);
l(f, p, x, "≻", "\\succ", !0);
l(f, p, x, "∼", "\\sim", !0);
l(f, p, x, "⊥", "\\perp");
l(f, p, x, "⪯", "\\preceq", !0);
l(f, p, x, "⪰", "\\succeq", !0);
l(f, p, x, "≃", "\\simeq", !0);
l(f, p, x, "∣", "\\mid", !0);
l(f, p, x, "≪", "\\ll", !0);
l(f, p, x, "≫", "\\gg", !0);
l(f, p, x, "≍", "\\asymp", !0);
l(f, p, x, "∥", "\\parallel");
l(f, p, x, "⋈", "\\bowtie", !0);
l(f, p, x, "⌣", "\\smile", !0);
l(f, p, x, "⊑", "\\sqsubseteq", !0);
l(f, p, x, "⊒", "\\sqsupseteq", !0);
l(f, p, x, "≐", "\\doteq", !0);
l(f, p, x, "⌢", "\\frown", !0);
l(f, p, x, "∋", "\\ni", !0);
l(f, p, x, "∝", "\\propto", !0);
l(f, p, x, "⊢", "\\vdash", !0);
l(f, p, x, "⊣", "\\dashv", !0);
l(f, p, x, "∋", "\\owns");
l(f, p, ma, ".", "\\ldotp");
l(f, p, ma, "⋅", "\\cdotp");
l(f, p, E, "#", "\\#");
l(V, p, E, "#", "\\#");
l(f, p, E, "&", "\\&");
l(V, p, E, "&", "\\&");
l(f, p, E, "ℵ", "\\aleph", !0);
l(f, p, E, "∀", "\\forall", !0);
l(f, p, E, "ℏ", "\\hbar", !0);
l(f, p, E, "∃", "\\exists", !0);
l(f, p, E, "∇", "\\nabla", !0);
l(f, p, E, "♭", "\\flat", !0);
l(f, p, E, "ℓ", "\\ell", !0);
l(f, p, E, "♮", "\\natural", !0);
l(f, p, E, "♣", "\\clubsuit", !0);
l(f, p, E, "℘", "\\wp", !0);
l(f, p, E, "♯", "\\sharp", !0);
l(f, p, E, "♢", "\\diamondsuit", !0);
l(f, p, E, "ℜ", "\\Re", !0);
l(f, p, E, "♡", "\\heartsuit", !0);
l(f, p, E, "ℑ", "\\Im", !0);
l(f, p, E, "♠", "\\spadesuit", !0);
l(f, p, E, "§", "\\S", !0);
l(V, p, E, "§", "\\S");
l(f, p, E, "¶", "\\P", !0);
l(V, p, E, "¶", "\\P");
l(f, p, E, "†", "\\dag");
l(V, p, E, "†", "\\dag");
l(V, p, E, "†", "\\textdagger");
l(f, p, E, "‡", "\\ddag");
l(V, p, E, "‡", "\\ddag");
l(V, p, E, "‡", "\\textdaggerdbl");
l(f, p, dt, "⎱", "\\rmoustache", !0);
l(f, p, Nt, "⎰", "\\lmoustache", !0);
l(f, p, dt, "⟯", "\\rgroup", !0);
l(f, p, Nt, "⟮", "\\lgroup", !0);
l(f, p, ae, "∓", "\\mp", !0);
l(f, p, ae, "⊖", "\\ominus", !0);
l(f, p, ae, "⊎", "\\uplus", !0);
l(f, p, ae, "⊓", "\\sqcap", !0);
l(f, p, ae, "∗", "\\ast");
l(f, p, ae, "⊔", "\\sqcup", !0);
l(f, p, ae, "◯", "\\bigcirc", !0);
l(f, p, ae, "∙", "\\bullet", !0);
l(f, p, ae, "‡", "\\ddagger");
l(f, p, ae, "≀", "\\wr", !0);
l(f, p, ae, "⨿", "\\amalg");
l(f, p, ae, "&", "\\And");
l(f, p, x, "⟵", "\\longleftarrow", !0);
l(f, p, x, "⇐", "\\Leftarrow", !0);
l(f, p, x, "⟸", "\\Longleftarrow", !0);
l(f, p, x, "⟶", "\\longrightarrow", !0);
l(f, p, x, "⇒", "\\Rightarrow", !0);
l(f, p, x, "⟹", "\\Longrightarrow", !0);
l(f, p, x, "↔", "\\leftrightarrow", !0);
l(f, p, x, "⟷", "\\longleftrightarrow", !0);
l(f, p, x, "⇔", "\\Leftrightarrow", !0);
l(f, p, x, "⟺", "\\Longleftrightarrow", !0);
l(f, p, x, "↦", "\\mapsto", !0);
l(f, p, x, "⟼", "\\longmapsto", !0);
l(f, p, x, "↗", "\\nearrow", !0);
l(f, p, x, "↩", "\\hookleftarrow", !0);
l(f, p, x, "↪", "\\hookrightarrow", !0);
l(f, p, x, "↘", "\\searrow", !0);
l(f, p, x, "↼", "\\leftharpoonup", !0);
l(f, p, x, "⇀", "\\rightharpoonup", !0);
l(f, p, x, "↙", "\\swarrow", !0);
l(f, p, x, "↽", "\\leftharpoondown", !0);
l(f, p, x, "⇁", "\\rightharpoondown", !0);
l(f, p, x, "↖", "\\nwarrow", !0);
l(f, p, x, "⇌", "\\rightleftharpoons", !0);
l(f, w, x, "≮", "\\nless", !0);
l(f, w, x, "", "\\@nleqslant");
l(f, w, x, "", "\\@nleqq");
l(f, w, x, "⪇", "\\lneq", !0);
l(f, w, x, "≨", "\\lneqq", !0);
l(f, w, x, "", "\\@lvertneqq");
l(f, w, x, "⋦", "\\lnsim", !0);
l(f, w, x, "⪉", "\\lnapprox", !0);
l(f, w, x, "⊀", "\\nprec", !0);
l(f, w, x, "⋠", "\\npreceq", !0);
l(f, w, x, "⋨", "\\precnsim", !0);
l(f, w, x, "⪹", "\\precnapprox", !0);
l(f, w, x, "≁", "\\nsim", !0);
l(f, w, x, "", "\\@nshortmid");
l(f, w, x, "∤", "\\nmid", !0);
l(f, w, x, "⊬", "\\nvdash", !0);
l(f, w, x, "⊭", "\\nvDash", !0);
l(f, w, x, "⋪", "\\ntriangleleft");
l(f, w, x, "⋬", "\\ntrianglelefteq", !0);
l(f, w, x, "⊊", "\\subsetneq", !0);
l(f, w, x, "", "\\@varsubsetneq");
l(f, w, x, "⫋", "\\subsetneqq", !0);
l(f, w, x, "", "\\@varsubsetneqq");
l(f, w, x, "≯", "\\ngtr", !0);
l(f, w, x, "", "\\@ngeqslant");
l(f, w, x, "", "\\@ngeqq");
l(f, w, x, "⪈", "\\gneq", !0);
l(f, w, x, "≩", "\\gneqq", !0);
l(f, w, x, "", "\\@gvertneqq");
l(f, w, x, "⋧", "\\gnsim", !0);
l(f, w, x, "⪊", "\\gnapprox", !0);
l(f, w, x, "⊁", "\\nsucc", !0);
l(f, w, x, "⋡", "\\nsucceq", !0);
l(f, w, x, "⋩", "\\succnsim", !0);
l(f, w, x, "⪺", "\\succnapprox", !0);
l(f, w, x, "≆", "\\ncong", !0);
l(f, w, x, "", "\\@nshortparallel");
l(f, w, x, "∦", "\\nparallel", !0);
l(f, w, x, "⊯", "\\nVDash", !0);
l(f, w, x, "⋫", "\\ntriangleright");
l(f, w, x, "⋭", "\\ntrianglerighteq", !0);
l(f, w, x, "", "\\@nsupseteqq");
l(f, w, x, "⊋", "\\supsetneq", !0);
l(f, w, x, "", "\\@varsupsetneq");
l(f, w, x, "⫌", "\\supsetneqq", !0);
l(f, w, x, "", "\\@varsupsetneqq");
l(f, w, x, "⊮", "\\nVdash", !0);
l(f, w, x, "⪵", "\\precneqq", !0);
l(f, w, x, "⪶", "\\succneqq", !0);
l(f, w, x, "", "\\@nsubseteqq");
l(f, w, ae, "⊴", "\\unlhd");
l(f, w, ae, "⊵", "\\unrhd");
l(f, w, x, "↚", "\\nleftarrow", !0);
l(f, w, x, "↛", "\\nrightarrow", !0);
l(f, w, x, "⇍", "\\nLeftarrow", !0);
l(f, w, x, "⇏", "\\nRightarrow", !0);
l(f, w, x, "↮", "\\nleftrightarrow", !0);
l(f, w, x, "⇎", "\\nLeftrightarrow", !0);
l(f, w, x, "△", "\\vartriangle");
l(f, w, E, "ℏ", "\\hslash");
l(f, w, E, "▽", "\\triangledown");
l(f, w, E, "◊", "\\lozenge");
l(f, w, E, "Ⓢ", "\\circledS");
l(f, w, E, "®", "\\circledR");
l(V, w, E, "®", "\\circledR");
l(f, w, E, "∡", "\\measuredangle", !0);
l(f, w, E, "∄", "\\nexists");
l(f, w, E, "℧", "\\mho");
l(f, w, E, "Ⅎ", "\\Finv", !0);
l(f, w, E, "⅁", "\\Game", !0);
l(f, w, E, "‵", "\\backprime");
l(f, w, E, "▲", "\\blacktriangle");
l(f, w, E, "▼", "\\blacktriangledown");
l(f, w, E, "■", "\\blacksquare");
l(f, w, E, "⧫", "\\blacklozenge");
l(f, w, E, "★", "\\bigstar");
l(f, w, E, "∢", "\\sphericalangle", !0);
l(f, w, E, "∁", "\\complement", !0);
l(f, w, E, "ð", "\\eth", !0);
l(V, p, E, "ð", "ð");
l(f, w, E, "╱", "\\diagup");
l(f, w, E, "╲", "\\diagdown");
l(f, w, E, "□", "\\square");
l(f, w, E, "□", "\\Box");
l(f, w, E, "◊", "\\Diamond");
l(f, w, E, "¥", "\\yen", !0);
l(V, w, E, "¥", "\\yen", !0);
l(f, w, E, "✓", "\\checkmark", !0);
l(V, w, E, "✓", "\\checkmark");
l(f, w, E, "ℶ", "\\beth", !0);
l(f, w, E, "ℸ", "\\daleth", !0);
l(f, w, E, "ℷ", "\\gimel", !0);
l(f, w, E, "ϝ", "\\digamma", !0);
l(f, w, E, "ϰ", "\\varkappa");
l(f, w, Nt, "┌", "\\@ulcorner", !0);
l(f, w, dt, "┐", "\\@urcorner", !0);
l(f, w, Nt, "└", "\\@llcorner", !0);
l(f, w, dt, "┘", "\\@lrcorner", !0);
l(f, w, x, "≦", "\\leqq", !0);
l(f, w, x, "⩽", "\\leqslant", !0);
l(f, w, x, "⪕", "\\eqslantless", !0);
l(f, w, x, "≲", "\\lesssim", !0);
l(f, w, x, "⪅", "\\lessapprox", !0);
l(f, w, x, "≊", "\\approxeq", !0);
l(f, w, ae, "⋖", "\\lessdot");
l(f, w, x, "⋘", "\\lll", !0);
l(f, w, x, "≶", "\\lessgtr", !0);
l(f, w, x, "⋚", "\\lesseqgtr", !0);
l(f, w, x, "⪋", "\\lesseqqgtr", !0);
l(f, w, x, "≑", "\\doteqdot");
l(f, w, x, "≓", "\\risingdotseq", !0);
l(f, w, x, "≒", "\\fallingdotseq", !0);
l(f, w, x, "∽", "\\backsim", !0);
l(f, w, x, "⋍", "\\backsimeq", !0);
l(f, w, x, "⫅", "\\subseteqq", !0);
l(f, w, x, "⋐", "\\Subset", !0);
l(f, w, x, "⊏", "\\sqsubset", !0);
l(f, w, x, "≼", "\\preccurlyeq", !0);
l(f, w, x, "⋞", "\\curlyeqprec", !0);
l(f, w, x, "≾", "\\precsim", !0);
l(f, w, x, "⪷", "\\precapprox", !0);
l(f, w, x, "⊲", "\\vartriangleleft");
l(f, w, x, "⊴", "\\trianglelefteq");
l(f, w, x, "⊨", "\\vDash", !0);
l(f, w, x, "⊪", "\\Vvdash", !0);
l(f, w, x, "⌣", "\\smallsmile");
l(f, w, x, "⌢", "\\smallfrown");
l(f, w, x, "≏", "\\bumpeq", !0);
l(f, w, x, "≎", "\\Bumpeq", !0);
l(f, w, x, "≧", "\\geqq", !0);
l(f, w, x, "⩾", "\\geqslant", !0);
l(f, w, x, "⪖", "\\eqslantgtr", !0);
l(f, w, x, "≳", "\\gtrsim", !0);
l(f, w, x, "⪆", "\\gtrapprox", !0);
l(f, w, ae, "⋗", "\\gtrdot");
l(f, w, x, "⋙", "\\ggg", !0);
l(f, w, x, "≷", "\\gtrless", !0);
l(f, w, x, "⋛", "\\gtreqless", !0);
l(f, w, x, "⪌", "\\gtreqqless", !0);
l(f, w, x, "≖", "\\eqcirc", !0);
l(f, w, x, "≗", "\\circeq", !0);
l(f, w, x, "≜", "\\triangleq", !0);
l(f, w, x, "∼", "\\thicksim");
l(f, w, x, "≈", "\\thickapprox");
l(f, w, x, "⫆", "\\supseteqq", !0);
l(f, w, x, "⋑", "\\Supset", !0);
l(f, w, x, "⊐", "\\sqsupset", !0);
l(f, w, x, "≽", "\\succcurlyeq", !0);
l(f, w, x, "⋟", "\\curlyeqsucc", !0);
l(f, w, x, "≿", "\\succsim", !0);
l(f, w, x, "⪸", "\\succapprox", !0);
l(f, w, x, "⊳", "\\vartriangleright");
l(f, w, x, "⊵", "\\trianglerighteq");
l(f, w, x, "⊩", "\\Vdash", !0);
l(f, w, x, "∣", "\\shortmid");
l(f, w, x, "∥", "\\shortparallel");
l(f, w, x, "≬", "\\between", !0);
l(f, w, x, "⋔", "\\pitchfork", !0);
l(f, w, x, "∝", "\\varpropto");
l(f, w, x, "◀", "\\blacktriangleleft");
l(f, w, x, "∴", "\\therefore", !0);
l(f, w, x, "∍", "\\backepsilon");
l(f, w, x, "▶", "\\blacktriangleright");
l(f, w, x, "∵", "\\because", !0);
l(f, w, x, "⋘", "\\llless");
l(f, w, x, "⋙", "\\gggtr");
l(f, w, ae, "⊲", "\\lhd");
l(f, w, ae, "⊳", "\\rhd");
l(f, w, x, "≂", "\\eqsim", !0);
l(f, p, x, "⋈", "\\Join");
l(f, w, x, "≑", "\\Doteq", !0);
l(f, w, ae, "∔", "\\dotplus", !0);
l(f, w, ae, "∖", "\\smallsetminus");
l(f, w, ae, "⋒", "\\Cap", !0);
l(f, w, ae, "⋓", "\\Cup", !0);
l(f, w, ae, "⩞", "\\doublebarwedge", !0);
l(f, w, ae, "⊟", "\\boxminus", !0);
l(f, w, ae, "⊞", "\\boxplus", !0);
l(f, w, ae, "⋇", "\\divideontimes", !0);
l(f, w, ae, "⋉", "\\ltimes", !0);
l(f, w, ae, "⋊", "\\rtimes", !0);
l(f, w, ae, "⋋", "\\leftthreetimes", !0);
l(f, w, ae, "⋌", "\\rightthreetimes", !0);
l(f, w, ae, "⋏", "\\curlywedge", !0);
l(f, w, ae, "⋎", "\\curlyvee", !0);
l(f, w, ae, "⊝", "\\circleddash", !0);
l(f, w, ae, "⊛", "\\circledast", !0);
l(f, w, ae, "⋅", "\\centerdot");
l(f, w, ae, "⊺", "\\intercal", !0);
l(f, w, ae, "⋒", "\\doublecap");
l(f, w, ae, "⋓", "\\doublecup");
l(f, w, ae, "⊠", "\\boxtimes", !0);
l(f, w, x, "⇢", "\\dashrightarrow", !0);
l(f, w, x, "⇠", "\\dashleftarrow", !0);
l(f, w, x, "⇇", "\\leftleftarrows", !0);
l(f, w, x, "⇆", "\\leftrightarrows", !0);
l(f, w, x, "⇚", "\\Lleftarrow", !0);
l(f, w, x, "↞", "\\twoheadleftarrow", !0);
l(f, w, x, "↢", "\\leftarrowtail", !0);
l(f, w, x, "↫", "\\looparrowleft", !0);
l(f, w, x, "⇋", "\\leftrightharpoons", !0);
l(f, w, x, "↶", "\\curvearrowleft", !0);
l(f, w, x, "↺", "\\circlearrowleft", !0);
l(f, w, x, "↰", "\\Lsh", !0);
l(f, w, x, "⇈", "\\upuparrows", !0);
l(f, w, x, "↿", "\\upharpoonleft", !0);
l(f, w, x, "⇃", "\\downharpoonleft", !0);
l(f, p, x, "⊶", "\\origof", !0);
l(f, p, x, "⊷", "\\imageof", !0);
l(f, w, x, "⊸", "\\multimap", !0);
l(f, w, x, "↭", "\\leftrightsquigarrow", !0);
l(f, w, x, "⇉", "\\rightrightarrows", !0);
l(f, w, x, "⇄", "\\rightleftarrows", !0);
l(f, w, x, "↠", "\\twoheadrightarrow", !0);
l(f, w, x, "↣", "\\rightarrowtail", !0);
l(f, w, x, "↬", "\\looparrowright", !0);
l(f, w, x, "↷", "\\curvearrowright", !0);
l(f, w, x, "↻", "\\circlearrowright", !0);
l(f, w, x, "↱", "\\Rsh", !0);
l(f, w, x, "⇊", "\\downdownarrows", !0);
l(f, w, x, "↾", "\\upharpoonright", !0);
l(f, w, x, "⇂", "\\downharpoonright", !0);
l(f, w, x, "⇝", "\\rightsquigarrow", !0);
l(f, w, x, "⇝", "\\leadsto");
l(f, w, x, "⇛", "\\Rrightarrow", !0);
l(f, w, x, "↾", "\\restriction");
l(f, p, E, "‘", "`");
l(f, p, E, "$", "\\$");
l(V, p, E, "$", "\\$");
l(V, p, E, "$", "\\textdollar");
l(f, p, E, "%", "\\%");
l(V, p, E, "%", "\\%");
l(f, p, E, "_", "\\_");
l(V, p, E, "_", "\\_");
l(V, p, E, "_", "\\textunderscore");
l(f, p, E, "∠", "\\angle", !0);
l(f, p, E, "∞", "\\infty", !0);
l(f, p, E, "′", "\\prime");
l(f, p, E, "△", "\\triangle");
l(f, p, E, "Γ", "\\Gamma", !0);
l(f, p, E, "Δ", "\\Delta", !0);
l(f, p, E, "Θ", "\\Theta", !0);
l(f, p, E, "Λ", "\\Lambda", !0);
l(f, p, E, "Ξ", "\\Xi", !0);
l(f, p, E, "Π", "\\Pi", !0);
l(f, p, E, "Σ", "\\Sigma", !0);
l(f, p, E, "Υ", "\\Upsilon", !0);
l(f, p, E, "Φ", "\\Phi", !0);
l(f, p, E, "Ψ", "\\Psi", !0);
l(f, p, E, "Ω", "\\Omega", !0);
l(f, p, E, "A", "Α");
l(f, p, E, "B", "Β");
l(f, p, E, "E", "Ε");
l(f, p, E, "Z", "Ζ");
l(f, p, E, "H", "Η");
l(f, p, E, "I", "Ι");
l(f, p, E, "K", "Κ");
l(f, p, E, "M", "Μ");
l(f, p, E, "N", "Ν");
l(f, p, E, "O", "Ο");
l(f, p, E, "P", "Ρ");
l(f, p, E, "T", "Τ");
l(f, p, E, "X", "Χ");
l(f, p, E, "¬", "\\neg", !0);
l(f, p, E, "¬", "\\lnot");
l(f, p, E, "⊤", "\\top");
l(f, p, E, "⊥", "\\bot");
l(f, p, E, "∅", "\\emptyset");
l(f, w, E, "∅", "\\varnothing");
l(f, p, de, "α", "\\alpha", !0);
l(f, p, de, "β", "\\beta", !0);
l(f, p, de, "γ", "\\gamma", !0);
l(f, p, de, "δ", "\\delta", !0);
l(f, p, de, "ϵ", "\\epsilon", !0);
l(f, p, de, "ζ", "\\zeta", !0);
l(f, p, de, "η", "\\eta", !0);
l(f, p, de, "θ", "\\theta", !0);
l(f, p, de, "ι", "\\iota", !0);
l(f, p, de, "κ", "\\kappa", !0);
l(f, p, de, "λ", "\\lambda", !0);
l(f, p, de, "μ", "\\mu", !0);
l(f, p, de, "ν", "\\nu", !0);
l(f, p, de, "ξ", "\\xi", !0);
l(f, p, de, "ο", "\\omicron", !0);
l(f, p, de, "π", "\\pi", !0);
l(f, p, de, "ρ", "\\rho", !0);
l(f, p, de, "σ", "\\sigma", !0);
l(f, p, de, "τ", "\\tau", !0);
l(f, p, de, "υ", "\\upsilon", !0);
l(f, p, de, "ϕ", "\\phi", !0);
l(f, p, de, "χ", "\\chi", !0);
l(f, p, de, "ψ", "\\psi", !0);
l(f, p, de, "ω", "\\omega", !0);
l(f, p, de, "ε", "\\varepsilon", !0);
l(f, p, de, "ϑ", "\\vartheta", !0);
l(f, p, de, "ϖ", "\\varpi", !0);
l(f, p, de, "ϱ", "\\varrho", !0);
l(f, p, de, "ς", "\\varsigma", !0);
l(f, p, de, "φ", "\\varphi", !0);
l(f, p, ae, "∗", "*", !0);
l(f, p, ae, "+", "+");
l(f, p, ae, "−", "-", !0);
l(f, p, ae, "⋅", "\\cdot", !0);
l(f, p, ae, "∘", "\\circ", !0);
l(f, p, ae, "÷", "\\div", !0);
l(f, p, ae, "±", "\\pm", !0);
l(f, p, ae, "×", "\\times", !0);
l(f, p, ae, "∩", "\\cap", !0);
l(f, p, ae, "∪", "\\cup", !0);
l(f, p, ae, "∖", "\\setminus", !0);
l(f, p, ae, "∧", "\\land");
l(f, p, ae, "∨", "\\lor");
l(f, p, ae, "∧", "\\wedge", !0);
l(f, p, ae, "∨", "\\vee", !0);
l(f, p, E, "√", "\\surd");
l(f, p, Nt, "⟨", "\\langle", !0);
l(f, p, Nt, "∣", "\\lvert");
l(f, p, Nt, "∥", "\\lVert");
l(f, p, dt, "?", "?");
l(f, p, dt, "!", "!");
l(f, p, dt, "⟩", "\\rangle", !0);
l(f, p, dt, "∣", "\\rvert");
l(f, p, dt, "∥", "\\rVert");
l(f, p, x, "=", "=");
l(f, p, x, ":", ":");
l(f, p, x, "≈", "\\approx", !0);
l(f, p, x, "≅", "\\cong", !0);
l(f, p, x, "≥", "\\ge");
l(f, p, x, "≥", "\\geq", !0);
l(f, p, x, "←", "\\gets");
l(f, p, x, ">", "\\gt", !0);
l(f, p, x, "∈", "\\in", !0);
l(f, p, x, "", "\\@not");
l(f, p, x, "⊂", "\\subset", !0);
l(f, p, x, "⊃", "\\supset", !0);
l(f, p, x, "⊆", "\\subseteq", !0);
l(f, p, x, "⊇", "\\supseteq", !0);
l(f, w, x, "⊈", "\\nsubseteq", !0);
l(f, w, x, "⊉", "\\nsupseteq", !0);
l(f, p, x, "⊨", "\\models");
l(f, p, x, "←", "\\leftarrow", !0);
l(f, p, x, "≤", "\\le");
l(f, p, x, "≤", "\\leq", !0);
l(f, p, x, "<", "\\lt", !0);
l(f, p, x, "→", "\\rightarrow", !0);
l(f, p, x, "→", "\\to");
l(f, w, x, "≱", "\\ngeq", !0);
l(f, w, x, "≰", "\\nleq", !0);
l(f, p, y0, " ", "\\ ");
l(f, p, y0, " ", "\\space");
l(f, p, y0, " ", "\\nobreakspace");
l(V, p, y0, " ", "\\ ");
l(V, p, y0, " ", " ");
l(V, p, y0, " ", "\\space");
l(V, p, y0, " ", "\\nobreakspace");
l(f, p, y0, null, "\\nobreak");
l(f, p, y0, null, "\\allowbreak");
l(f, p, ma, ",", ",");
l(f, p, ma, ";", ";");
l(f, w, ae, "⊼", "\\barwedge", !0);
l(f, w, ae, "⊻", "\\veebar", !0);
l(f, p, ae, "⊙", "\\odot", !0);
l(f, p, ae, "⊕", "\\oplus", !0);
l(f, p, ae, "⊗", "\\otimes", !0);
l(f, p, E, "∂", "\\partial", !0);
l(f, p, ae, "⊘", "\\oslash", !0);
l(f, w, ae, "⊚", "\\circledcirc", !0);
l(f, w, ae, "⊡", "\\boxdot", !0);
l(f, p, ae, "△", "\\bigtriangleup");
l(f, p, ae, "▽", "\\bigtriangledown");
l(f, p, ae, "†", "\\dagger");
l(f, p, ae, "⋄", "\\diamond");
l(f, p, ae, "⋆", "\\star");
l(f, p, ae, "◃", "\\triangleleft");
l(f, p, ae, "▹", "\\triangleright");
l(f, p, Nt, "{", "\\{");
l(V, p, E, "{", "\\{");
l(V, p, E, "{", "\\textbraceleft");
l(f, p, dt, "}", "\\}");
l(V, p, E, "}", "\\}");
l(V, p, E, "}", "\\textbraceright");
l(f, p, Nt, "{", "\\lbrace");
l(f, p, dt, "}", "\\rbrace");
l(f, p, Nt, "[", "\\lbrack", !0);
l(V, p, E, "[", "\\lbrack", !0);
l(f, p, dt, "]", "\\rbrack", !0);
l(V, p, E, "]", "\\rbrack", !0);
l(f, p, Nt, "(", "\\lparen", !0);
l(f, p, dt, ")", "\\rparen", !0);
l(V, p, E, "<", "\\textless", !0);
l(V, p, E, ">", "\\textgreater", !0);
l(f, p, Nt, "⌊", "\\lfloor", !0);
l(f, p, dt, "⌋", "\\rfloor", !0);
l(f, p, Nt, "⌈", "\\lceil", !0);
l(f, p, dt, "⌉", "\\rceil", !0);
l(f, p, E, "\\", "\\backslash");
l(f, p, E, "∣", "|");
l(f, p, E, "∣", "\\vert");
l(V, p, E, "|", "\\textbar", !0);
l(f, p, E, "∥", "\\|");
l(f, p, E, "∥", "\\Vert");
l(V, p, E, "∥", "\\textbardbl");
l(V, p, E, "~", "\\textasciitilde");
l(V, p, E, "\\", "\\textbackslash");
l(V, p, E, "^", "\\textasciicircum");
l(f, p, x, "↑", "\\uparrow", !0);
l(f, p, x, "⇑", "\\Uparrow", !0);
l(f, p, x, "↓", "\\downarrow", !0);
l(f, p, x, "⇓", "\\Downarrow", !0);
l(f, p, x, "↕", "\\updownarrow", !0);
l(f, p, x, "⇕", "\\Updownarrow", !0);
l(f, p, We, "∐", "\\coprod");
l(f, p, We, "⋁", "\\bigvee");
l(f, p, We, "⋀", "\\bigwedge");
l(f, p, We, "⨄", "\\biguplus");
l(f, p, We, "⋂", "\\bigcap");
l(f, p, We, "⋃", "\\bigcup");
l(f, p, We, "∫", "\\int");
l(f, p, We, "∫", "\\intop");
l(f, p, We, "∬", "\\iint");
l(f, p, We, "∭", "\\iiint");
l(f, p, We, "∏", "\\prod");
l(f, p, We, "∑", "\\sum");
l(f, p, We, "⨂", "\\bigotimes");
l(f, p, We, "⨁", "\\bigoplus");
l(f, p, We, "⨀", "\\bigodot");
l(f, p, We, "∮", "\\oint");
l(f, p, We, "∯", "\\oiint");
l(f, p, We, "∰", "\\oiiint");
l(f, p, We, "⨆", "\\bigsqcup");
l(f, p, We, "∫", "\\smallint");
l(V, p, fr, "…", "\\textellipsis");
l(f, p, fr, "…", "\\mathellipsis");
l(V, p, fr, "…", "\\ldots", !0);
l(f, p, fr, "…", "\\ldots", !0);
l(f, p, fr, "⋯", "\\@cdots", !0);
l(f, p, fr, "⋱", "\\ddots", !0);
l(f, p, E, "⋮", "\\varvdots");
l(f, p, qe, "ˊ", "\\acute");
l(f, p, qe, "ˋ", "\\grave");
l(f, p, qe, "¨", "\\ddot");
l(f, p, qe, "~", "\\tilde");
l(f, p, qe, "ˉ", "\\bar");
l(f, p, qe, "˘", "\\breve");
l(f, p, qe, "ˇ", "\\check");
l(f, p, qe, "^", "\\hat");
l(f, p, qe, "⃗", "\\vec");
l(f, p, qe, "˙", "\\dot");
l(f, p, qe, "˚", "\\mathring");
l(f, p, de, "", "\\@imath");
l(f, p, de, "", "\\@jmath");
l(f, p, E, "ı", "ı");
l(f, p, E, "ȷ", "ȷ");
l(V, p, E, "ı", "\\i", !0);
l(V, p, E, "ȷ", "\\j", !0);
l(V, p, E, "ß", "\\ss", !0);
l(V, p, E, "æ", "\\ae", !0);
l(V, p, E, "œ", "\\oe", !0);
l(V, p, E, "ø", "\\o", !0);
l(V, p, E, "Æ", "\\AE", !0);
l(V, p, E, "Œ", "\\OE", !0);
l(V, p, E, "Ø", "\\O", !0);
l(V, p, qe, "ˊ", "\\'");
l(V, p, qe, "ˋ", "\\`");
l(V, p, qe, "ˆ", "\\^");
l(V, p, qe, "˜", "\\~");
l(V, p, qe, "ˉ", "\\=");
l(V, p, qe, "˘", "\\u");
l(V, p, qe, "˙", "\\.");
l(V, p, qe, "¸", "\\c");
l(V, p, qe, "˚", "\\r");
l(V, p, qe, "ˇ", "\\v");
l(V, p, qe, "¨", '\\"');
l(V, p, qe, "˝", "\\H");
l(V, p, qe, "◯", "\\textcircled");
var jo = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
l(V, p, E, "–", "--", !0);
l(V, p, E, "–", "\\textendash");
l(V, p, E, "—", "---", !0);
l(V, p, E, "—", "\\textemdash");
l(V, p, E, "‘", "`", !0);
l(V, p, E, "‘", "\\textquoteleft");
l(V, p, E, "’", "'", !0);
l(V, p, E, "’", "\\textquoteright");
l(V, p, E, "“", "``", !0);
l(V, p, E, "“", "\\textquotedblleft");
l(V, p, E, "”", "''", !0);
l(V, p, E, "”", "\\textquotedblright");
l(f, p, E, "°", "\\degree", !0);
l(V, p, E, "°", "\\degree");
l(V, p, E, "°", "\\textdegree", !0);
l(f, p, E, "£", "\\pounds");
l(f, p, E, "£", "\\mathsterling", !0);
l(V, p, E, "£", "\\pounds");
l(V, p, E, "£", "\\textsterling", !0);
l(f, w, E, "✠", "\\maltese");
l(V, w, E, "✠", "\\maltese");
var Xu = '0123456789/@."';
for (var Ba = 0; Ba < Xu.length; Ba++) {
  var Zu = Xu.charAt(Ba);
  l(f, p, E, Zu, Zu);
}
var Ku = '0123456789!@*()-=+";:?/.,';
for (var La = 0; La < Ku.length; La++) {
  var Ju = Ku.charAt(La);
  l(V, p, E, Ju, Ju);
}
var Jn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Ra = 0; Ra < Jn.length; Ra++) {
  var hn = Jn.charAt(Ra);
  l(f, p, de, hn, hn), l(V, p, E, hn, hn);
}
l(f, w, E, "C", "ℂ");
l(V, w, E, "C", "ℂ");
l(f, w, E, "H", "ℍ");
l(V, w, E, "H", "ℍ");
l(f, w, E, "N", "ℕ");
l(V, w, E, "N", "ℕ");
l(f, w, E, "P", "ℙ");
l(V, w, E, "P", "ℙ");
l(f, w, E, "Q", "ℚ");
l(V, w, E, "Q", "ℚ");
l(f, w, E, "R", "ℝ");
l(V, w, E, "R", "ℝ");
l(f, w, E, "Z", "ℤ");
l(V, w, E, "Z", "ℤ");
l(f, p, de, "h", "ℎ");
l(V, p, de, "h", "ℎ");
var pe = "";
for (var ut = 0; ut < Jn.length; ut++) {
  var je = Jn.charAt(ut);
  pe = String.fromCharCode(55349, 56320 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56372 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56424 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56580 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56684 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56736 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56788 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56840 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56944 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), ut < 26 && (pe = String.fromCharCode(55349, 56632 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe), pe = String.fromCharCode(55349, 56476 + ut), l(f, p, de, je, pe), l(V, p, E, je, pe));
}
pe = "𝕜";
l(f, p, de, "k", pe);
l(V, p, E, "k", pe);
for (var P0 = 0; P0 < 10; P0++) {
  var E0 = P0.toString();
  pe = String.fromCharCode(55349, 57294 + P0), l(f, p, de, E0, pe), l(V, p, E, E0, pe), pe = String.fromCharCode(55349, 57314 + P0), l(f, p, de, E0, pe), l(V, p, E, E0, pe), pe = String.fromCharCode(55349, 57324 + P0), l(f, p, de, E0, pe), l(V, p, E, E0, pe), pe = String.fromCharCode(55349, 57334 + P0), l(f, p, de, E0, pe), l(V, p, E, E0, pe);
}
var bi = "ÐÞþ";
for (var za = 0; za < bi.length; za++) {
  var mn = bi.charAt(za);
  l(f, p, de, mn, mn), l(V, p, E, mn, mn);
}
var pn = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Qu = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], If = function(t, e) {
  var r = t.charCodeAt(0), a = t.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, u = e === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [pn[o][2], pn[o][u]];
  } else if (120782 <= i && i <= 120831) {
    var s = Math.floor((i - 120782) / 10);
    return [Qu[s][2], Qu[s][u]];
  } else {
    if (i === 120485 || i === 120486)
      return [pn[0][2], pn[0][u]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new Y("Unsupported character: " + t);
  }
}, pa = function(t, e, r) {
  return ze[r][t] && ze[r][t].replace && (t = ze[r][t].replace), {
    value: t,
    metrics: Xi(t, e, r)
  };
}, Wt = function(t, e, r, a, i) {
  var u = pa(t, e, r), o = u.metrics;
  t = u.value;
  var s;
  if (o) {
    var c = o.italic;
    (r === "text" || a && a.font === "mathit") && (c = 0), s = new Pt(t, o.height, o.depth, c, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + t + "' in style '" + e + "' and mode '" + r + "'")), s = new Pt(t, 0, 0, 0, 0, 0, i);
  if (a) {
    s.maxFontSize = a.sizeMultiplier, a.style.isTight() && s.classes.push("mtight");
    var h = a.getColor();
    h && (s.style.color = h);
  }
  return s;
}, Of = function(t, e, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && pa(t, "Main-Bold", e).metrics ? Wt(t, "Main-Bold", e, r, a.concat(["mathbf"])) : t === "\\" || ze[e][t].font === "main" ? Wt(t, "Main-Regular", e, r, a) : Wt(t, "AMS-Regular", e, r, a.concat(["amsrm"]));
}, Bf = function(t, e, r, a, i) {
  return i !== "textord" && pa(t, "Math-BoldItalic", e).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Lf = function(t, e, r) {
  var a = t.mode, i = t.text, u = ["mord"], o = a === "math" || a === "text" && e.font, s = o ? e.font : e.fontFamily, c = "", h = "";
  if (i.charCodeAt(0) === 55349 && ([c, h] = If(i, a)), c.length > 0)
    return Wt(i, c, a, e, u.concat(h));
  if (s) {
    var b, d;
    if (s === "boldsymbol") {
      var m = Bf(i, a, e, u, r);
      b = m.fontName, d = [m.fontClass];
    } else o ? (b = $o[s].fontName, d = [s]) : (b = gn(s, e.fontWeight, e.fontShape), d = [s, e.fontWeight, e.fontShape]);
    if (pa(i, b, a).metrics)
      return Wt(i, b, a, e, u.concat(d));
    if (jo.hasOwnProperty(i) && b.slice(0, 10) === "Typewriter") {
      for (var T = [], A = 0; A < i.length; A++)
        T.push(Wt(i[A], b, a, e, u.concat(d)));
      return Vo(T);
    }
  }
  if (r === "mathord")
    return Wt(i, "Math-Italic", a, e, u.concat(["mathnormal"]));
  if (r === "textord") {
    var S = ze[a][i] && ze[a][i].font;
    if (S === "ams") {
      var I = gn("amsrm", e.fontWeight, e.fontShape);
      return Wt(i, I, a, e, u.concat("amsrm", e.fontWeight, e.fontShape));
    } else if (S === "main" || !S) {
      var D = gn("textrm", e.fontWeight, e.fontShape);
      return Wt(i, D, a, e, u.concat(e.fontWeight, e.fontShape));
    } else {
      var k = gn(S, e.fontWeight, e.fontShape);
      return Wt(i, k, a, e, u.concat(k, e.fontWeight, e.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, Rf = (n, t) => {
  if (F0(n.classes) !== F0(t.classes) || n.skew !== t.skew || n.maxFontSize !== t.maxFontSize)
    return !1;
  if (n.classes.length === 1) {
    var e = n.classes[0];
    if (e === "mbin" || e === "mord")
      return !1;
  }
  for (var r in n.style)
    if (n.style.hasOwnProperty(r) && n.style[r] !== t.style[r])
      return !1;
  for (var a in t.style)
    if (t.style.hasOwnProperty(a) && n.style[a] !== t.style[a])
      return !1;
  return !0;
}, zf = (n) => {
  for (var t = 0; t < n.length - 1; t++) {
    var e = n[t], r = n[t + 1];
    e instanceof Pt && r instanceof Pt && Rf(e, r) && (e.text += r.text, e.height = Math.max(e.height, r.height), e.depth = Math.max(e.depth, r.depth), e.italic = r.italic, n.splice(t + 1, 1), t--);
  }
  return n;
}, Ki = function(t) {
  for (var e = 0, r = 0, a = 0, i = 0; i < t.children.length; i++) {
    var u = t.children[i];
    u.height > e && (e = u.height), u.depth > r && (r = u.depth), u.maxFontSize > a && (a = u.maxFontSize);
  }
  t.height = e, t.depth = r, t.maxFontSize = a;
}, gt = function(t, e, r, a) {
  var i = new Yr(t, e, r, a);
  return Ki(i), i;
}, Go = (n, t, e, r) => new Yr(n, t, e, r), Pf = function(t, e, r) {
  var a = gt([t], [], e);
  return a.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness), a.style.borderBottomWidth = J(a.height), a.maxFontSize = 1, a;
}, qf = function(t, e, r, a) {
  var i = new Zi(t, e, r, a);
  return Ki(i), i;
}, Vo = function(t) {
  var e = new Wr(t);
  return Ki(e), e;
}, Hf = function(t, e) {
  return t instanceof Wr ? gt([], [t], e) : t;
}, Uf = function(t) {
  if (t.positionType === "individualShift") {
    for (var e = t.children, r = [e[0]], a = -e[0].shift - e[0].elem.depth, i = a, u = 1; u < e.length; u++) {
      var o = -e[u].shift - i - e[u].elem.depth, s = o - (e[u - 1].elem.height + e[u - 1].elem.depth);
      i = i + o, r.push({
        type: "kern",
        size: s
      }), r.push(e[u]);
    }
    return {
      children: r,
      depth: a
    };
  }
  var c;
  if (t.positionType === "top") {
    for (var h = t.positionData, b = 0; b < t.children.length; b++) {
      var d = t.children[b];
      h -= d.type === "kern" ? d.size : d.elem.height + d.elem.depth;
    }
    c = h;
  } else if (t.positionType === "bottom")
    c = -t.positionData;
  else {
    var m = t.children[0];
    if (m.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (t.positionType === "shift")
      c = -m.elem.depth - t.positionData;
    else if (t.positionType === "firstBaseline")
      c = -m.elem.depth;
    else
      throw new Error("Invalid positionType " + t.positionType + ".");
  }
  return {
    children: t.children,
    depth: c
  };
}, jf = function(t, e) {
  for (var {
    children: r,
    depth: a
  } = Uf(t), i = 0, u = 0; u < r.length; u++) {
    var o = r[u];
    if (o.type === "elem") {
      var s = o.elem;
      i = Math.max(i, s.maxFontSize, s.height);
    }
  }
  i += 2;
  var c = gt(["pstrut"], []);
  c.style.height = J(i);
  for (var h = [], b = a, d = a, m = a, T = 0; T < r.length; T++) {
    var A = r[T];
    if (A.type === "kern")
      m += A.size;
    else {
      var S = A.elem, I = A.wrapperClasses || [], D = A.wrapperStyle || {}, k = gt(I, [c, S], void 0, D);
      k.style.top = J(-i - m - S.depth), A.marginLeft && (k.style.marginLeft = A.marginLeft), A.marginRight && (k.style.marginRight = A.marginRight), h.push(k), m += S.height + S.depth;
    }
    b = Math.min(b, m), d = Math.max(d, m);
  }
  var M = gt(["vlist"], h);
  M.style.height = J(d);
  var O;
  if (b < 0) {
    var N = gt([], []), R = gt(["vlist"], [N]);
    R.style.height = J(-b);
    var j = gt(["vlist-s"], [new Pt("​")]);
    O = [gt(["vlist-r"], [M, j]), gt(["vlist-r"], [R])];
  } else
    O = [gt(["vlist-r"], [M])];
  var q = gt(["vlist-t"], O);
  return O.length === 2 && q.classes.push("vlist-t2"), q.height = d, q.depth = -b, q;
}, Gf = (n, t) => {
  var e = gt(["mspace"], [], t), r = Ue(n, t);
  return e.style.marginRight = J(r), e;
}, gn = function(t, e, r) {
  var a = "";
  switch (t) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = t;
  }
  var i;
  return e === "textbf" && r === "textit" ? i = "BoldItalic" : e === "textbf" ? i = "Bold" : e === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, $o = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Wo = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Vf = function(t, e) {
  var [r, a, i] = Wo[t], u = new _0(r), o = new m0([u], {
    width: J(a),
    height: J(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + J(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), s = Go(["overlay"], [o], e);
  return s.height = i, s.style.height = J(i), s.style.width = J(a), s;
}, L = {
  fontMap: $o,
  makeSymbol: Wt,
  mathsym: Of,
  makeSpan: gt,
  makeSvgSpan: Go,
  makeLineSpan: Pf,
  makeAnchor: qf,
  makeFragment: Vo,
  wrapFragment: Hf,
  makeVList: jf,
  makeOrd: Lf,
  makeGlue: Gf,
  staticSvg: Vf,
  svgData: Wo,
  tryCombineChars: zf
}, He = {
  number: 3,
  unit: "mu"
}, q0 = {
  number: 4,
  unit: "mu"
}, o0 = {
  number: 5,
  unit: "mu"
}, $f = {
  mord: {
    mop: He,
    mbin: q0,
    mrel: o0,
    minner: He
  },
  mop: {
    mord: He,
    mop: He,
    mrel: o0,
    minner: He
  },
  mbin: {
    mord: q0,
    mop: q0,
    mopen: q0,
    minner: q0
  },
  mrel: {
    mord: o0,
    mop: o0,
    mopen: o0,
    minner: o0
  },
  mopen: {},
  mclose: {
    mop: He,
    mbin: q0,
    mrel: o0,
    minner: He
  },
  mpunct: {
    mord: He,
    mop: He,
    mrel: o0,
    mopen: He,
    mclose: He,
    mpunct: He,
    minner: He
  },
  minner: {
    mord: He,
    mop: He,
    mbin: q0,
    mrel: o0,
    mopen: He,
    mpunct: He,
    minner: He
  }
}, Wf = {
  mord: {
    mop: He
  },
  mop: {
    mord: He,
    mop: He
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: He
  },
  mpunct: {},
  minner: {
    mop: He
  }
}, Yo = {}, Qn = {}, ea = {};
function te(n) {
  for (var {
    type: t,
    names: e,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: u
  } = n, o = {
    type: t,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: a
  }, s = 0; s < e.length; ++s)
    Yo[e[s]] = o;
  t && (i && (Qn[t] = i), u && (ea[t] = u));
}
function W0(n) {
  var {
    type: t,
    htmlBuilder: e,
    mathmlBuilder: r
  } = n;
  te({
    type: t,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: e,
    mathmlBuilder: r
  });
}
var ta = function(t) {
  return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
}, Ge = function(t) {
  return t.type === "ordgroup" ? t.body : [t];
}, p0 = L.makeSpan, Yf = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Xf = ["rightmost", "mrel", "mclose", "mpunct"], Zf = {
  display: he.DISPLAY,
  text: he.TEXT,
  script: he.SCRIPT,
  scriptscript: he.SCRIPTSCRIPT
}, Kf = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Ye = function(t, e, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], u = 0; u < t.length; u++) {
    var o = Ee(t[u], e);
    if (o instanceof Wr) {
      var s = o.children;
      i.push(...s);
    } else
      i.push(o);
  }
  if (L.tryCombineChars(i), !r)
    return i;
  var c = e;
  if (t.length === 1) {
    var h = t[0];
    h.type === "sizing" ? c = e.havingSize(h.size) : h.type === "styling" && (c = e.havingStyle(Zf[h.style]));
  }
  var b = p0([a[0] || "leftmost"], [], e), d = p0([a[1] || "rightmost"], [], e), m = r === "root";
  return es(i, (T, A) => {
    var S = A.classes[0], I = T.classes[0];
    S === "mbin" && ce.contains(Xf, I) ? A.classes[0] = "mord" : I === "mbin" && ce.contains(Yf, S) && (T.classes[0] = "mord");
  }, {
    node: b
  }, d, m), es(i, (T, A) => {
    var S = vi(A), I = vi(T), D = S && I ? T.hasClass("mtight") ? Wf[S][I] : $f[S][I] : null;
    if (D)
      return L.makeGlue(D, c);
  }, {
    node: b
  }, d, m), i;
}, es = function n(t, e, r, a, i) {
  a && t.push(a);
  for (var u = 0; u < t.length; u++) {
    var o = t[u], s = Xo(o);
    if (s) {
      n(s.children, e, r, null, i);
      continue;
    }
    var c = !o.hasClass("mspace");
    if (c) {
      var h = e(o, r.node);
      h && (r.insertAfter ? r.insertAfter(h) : (t.unshift(h), u++));
    }
    c ? r.node = o : i && o.hasClass("newline") && (r.node = p0(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((b) => (d) => {
      t.splice(b + 1, 0, d), u++;
    })(u);
  }
  a && t.pop();
}, Xo = function(t) {
  return t instanceof Wr || t instanceof Zi || t instanceof Yr && t.hasClass("enclosing") ? t : null;
}, Jf = function n(t, e) {
  var r = Xo(t);
  if (r) {
    var a = r.children;
    if (a.length) {
      if (e === "right")
        return n(a[a.length - 1], "right");
      if (e === "left")
        return n(a[0], "left");
    }
  }
  return t;
}, vi = function(t, e) {
  return t ? (e && (t = Jf(t, e)), Kf[t.classes[0]] || null) : null;
}, Rr = function(t, e) {
  var r = ["nulldelimiter"].concat(t.baseSizingClasses());
  return p0(e.concat(r));
}, Ee = function(t, e, r) {
  if (!t)
    return p0();
  if (Qn[t.type]) {
    var a = Qn[t.type](t, e);
    if (r && e.size !== r.size) {
      a = p0(e.sizingClasses(r), [a], e);
      var i = e.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new Y("Got group of unknown type: '" + t.type + "'");
};
function bn(n, t) {
  var e = p0(["base"], n, t), r = p0(["strut"]);
  return r.style.height = J(e.height + e.depth), e.depth && (r.style.verticalAlign = J(-e.depth)), e.children.unshift(r), e;
}
function yi(n, t) {
  var e = null;
  n.length === 1 && n[0].type === "tag" && (e = n[0].tag, n = n[0].body);
  var r = Ye(n, t, "root"), a;
  r.length === 2 && r[1].hasClass("tag") && (a = r.pop());
  for (var i = [], u = [], o = 0; o < r.length; o++)
    if (u.push(r[o]), r[o].hasClass("mbin") || r[o].hasClass("mrel") || r[o].hasClass("allowbreak")) {
      for (var s = !1; o < r.length - 1 && r[o + 1].hasClass("mspace") && !r[o + 1].hasClass("newline"); )
        o++, u.push(r[o]), r[o].hasClass("nobreak") && (s = !0);
      s || (i.push(bn(u, t)), u = []);
    } else r[o].hasClass("newline") && (u.pop(), u.length > 0 && (i.push(bn(u, t)), u = []), i.push(r[o]));
  u.length > 0 && i.push(bn(u, t));
  var c;
  e ? (c = bn(Ye(e, t, !0)), c.classes = ["tag"], i.push(c)) : a && i.push(a);
  var h = p0(["katex-html"], i);
  if (h.setAttribute("aria-hidden", "true"), c) {
    var b = c.children[0];
    b.style.height = J(h.height + h.depth), h.depth && (b.style.verticalAlign = J(-h.depth));
  }
  return h;
}
function Zo(n) {
  return new Wr(n);
}
class Lt {
  constructor(t, e, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = t, this.attributes = {}, this.children = e || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(t, e) {
    this.attributes[t] = e;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var e in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
    this.classes.length > 0 && (t.className = F0(this.classes));
    for (var r = 0; r < this.children.length; r++)
      t.appendChild(this.children[r].toNode());
    return t;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var t = "<" + this.type;
    for (var e in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="', t += ce.escape(this.attributes[e]), t += '"');
    this.classes.length > 0 && (t += ' class ="' + ce.escape(F0(this.classes)) + '"'), t += ">";
    for (var r = 0; r < this.children.length; r++)
      t += this.children[r].toMarkup();
    return t += "</" + this.type + ">", t;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((t) => t.toText()).join("");
  }
}
class _r {
  constructor(t) {
    this.text = void 0, this.text = t;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return ce.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Qf {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(t) {
    this.width = void 0, this.character = void 0, this.width = t, t >= 0.05555 && t <= 0.05556 ? this.character = " " : t >= 0.1666 && t <= 0.1667 ? this.character = " " : t >= 0.2222 && t <= 0.2223 ? this.character = " " : t >= 0.2777 && t <= 0.2778 ? this.character = "  " : t >= -0.05556 && t <= -0.05555 ? this.character = " ⁣" : t >= -0.1667 && t <= -0.1666 ? this.character = " ⁣" : t >= -0.2223 && t <= -0.2222 ? this.character = " ⁣" : t >= -0.2778 && t <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return t.setAttribute("width", J(this.width)), t;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + J(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var W = {
  MathNode: Lt,
  TextNode: _r,
  SpaceNode: Qf,
  newDocumentFragment: Zo
}, qt = function(t, e, r) {
  return ze[e][t] && ze[e][t].replace && t.charCodeAt(0) !== 55349 && !(jo.hasOwnProperty(t) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (t = ze[e][t].replace), new W.TextNode(t);
}, Ji = function(t) {
  return t.length === 1 ? t[0] : new W.MathNode("mrow", t);
}, Qi = function(t, e) {
  if (e.fontFamily === "texttt")
    return "monospace";
  if (e.fontFamily === "textsf")
    return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (e.fontShape === "textit" && e.fontWeight === "textbf")
    return "bold-italic";
  if (e.fontShape === "textit")
    return "italic";
  if (e.fontWeight === "textbf")
    return "bold";
  var r = e.font;
  if (!r || r === "mathnormal")
    return null;
  var a = t.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return t.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var i = t.text;
  if (ce.contains(["\\imath", "\\jmath"], i))
    return null;
  ze[a][i] && ze[a][i].replace && (i = ze[a][i].replace);
  var u = L.fontMap[r].fontName;
  return Xi(i, u, a) ? L.fontMap[r].variant : null;
}, xt = function(t, e, r) {
  if (t.length === 1) {
    var a = Re(t[0], e);
    return r && a instanceof Lt && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], u, o = 0; o < t.length; o++) {
    var s = Re(t[o], e);
    if (s instanceof Lt && u instanceof Lt) {
      if (s.type === "mtext" && u.type === "mtext" && s.getAttribute("mathvariant") === u.getAttribute("mathvariant")) {
        u.children.push(...s.children);
        continue;
      } else if (s.type === "mn" && u.type === "mn") {
        u.children.push(...s.children);
        continue;
      } else if (s.type === "mi" && s.children.length === 1 && u.type === "mn") {
        var c = s.children[0];
        if (c instanceof _r && c.text === ".") {
          u.children.push(...s.children);
          continue;
        }
      } else if (u.type === "mi" && u.children.length === 1) {
        var h = u.children[0];
        if (h instanceof _r && h.text === "̸" && (s.type === "mo" || s.type === "mi" || s.type === "mn")) {
          var b = s.children[0];
          b instanceof _r && b.text.length > 0 && (b.text = b.text.slice(0, 1) + "̸" + b.text.slice(1), i.pop());
        }
      }
    }
    i.push(s), u = s;
  }
  return i;
}, N0 = function(t, e, r) {
  return Ji(xt(t, e, r));
}, Re = function(t, e) {
  if (!t)
    return new W.MathNode("mrow");
  if (ea[t.type]) {
    var r = ea[t.type](t, e);
    return r;
  } else
    throw new Y("Got group of unknown type: '" + t.type + "'");
};
function ts(n, t, e, r, a) {
  var i = xt(n, e), u;
  i.length === 1 && i[0] instanceof Lt && ce.contains(["mrow", "mtable"], i[0].type) ? u = i[0] : u = new W.MathNode("mrow", i);
  var o = new W.MathNode("annotation", [new W.TextNode(t)]);
  o.setAttribute("encoding", "application/x-tex");
  var s = new W.MathNode("semantics", [u, o]), c = new W.MathNode("math", [s]);
  c.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && c.setAttribute("display", "block");
  var h = a ? "katex" : "katex-mathml";
  return L.makeSpan([h], [c]);
}
var Ko = function(t) {
  return new f0({
    style: t.displayMode ? he.DISPLAY : he.TEXT,
    maxSize: t.maxSize,
    minRuleThickness: t.minRuleThickness
  });
}, Jo = function(t, e) {
  if (e.displayMode) {
    var r = ["katex-display"];
    e.leqno && r.push("leqno"), e.fleqn && r.push("fleqn"), t = L.makeSpan(r, [t]);
  }
  return t;
}, ed = function(t, e, r) {
  var a = Ko(r), i;
  if (r.output === "mathml")
    return ts(t, e, a, r.displayMode, !0);
  if (r.output === "html") {
    var u = yi(t, a);
    i = L.makeSpan(["katex"], [u]);
  } else {
    var o = ts(t, e, a, r.displayMode, !1), s = yi(t, a);
    i = L.makeSpan(["katex"], [o, s]);
  }
  return Jo(i, r);
}, td = function(t, e, r) {
  var a = Ko(r), i = yi(t, a), u = L.makeSpan(["katex"], [i]);
  return Jo(u, r);
}, rd = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, nd = function(t) {
  var e = new W.MathNode("mo", [new W.TextNode(rd[t.replace(/^\\/, "")])]);
  return e.setAttribute("stretchy", "true"), e;
}, ad = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, id = function(t) {
  return t.type === "ordgroup" ? t.body.length : 1;
}, ud = function(t, e) {
  function r() {
    var o = 4e5, s = t.label.slice(1);
    if (ce.contains(["widehat", "widecheck", "widetilde", "utilde"], s)) {
      var c = t, h = id(c.base), b, d, m;
      if (h > 5)
        s === "widehat" || s === "widecheck" ? (b = 420, o = 2364, m = 0.42, d = s + "4") : (b = 312, o = 2340, m = 0.34, d = "tilde4");
      else {
        var T = [1, 1, 2, 2, 3, 3][h];
        s === "widehat" || s === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][T], b = [0, 239, 300, 360, 420][T], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][T], d = s + T) : (o = [0, 600, 1033, 2339, 2340][T], b = [0, 260, 286, 306, 312][T], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][T], d = "tilde" + T);
      }
      var A = new _0(d), S = new m0([A], {
        width: "100%",
        height: J(m),
        viewBox: "0 0 " + o + " " + b,
        preserveAspectRatio: "none"
      });
      return {
        span: L.makeSvgSpan([], [S], e),
        minWidth: 0,
        height: m
      };
    } else {
      var I = [], D = ad[s], [k, M, O] = D, N = O / 1e3, R = k.length, j, q;
      if (R === 1) {
        var H = D[3];
        j = ["hide-tail"], q = [H];
      } else if (R === 2)
        j = ["halfarrow-left", "halfarrow-right"], q = ["xMinYMin", "xMaxYMin"];
      else if (R === 3)
        j = ["brace-left", "brace-center", "brace-right"], q = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + R + " children.");
      for (var _ = 0; _ < R; _++) {
        var P = new _0(k[_]), $ = new m0([P], {
          width: "400em",
          height: J(N),
          viewBox: "0 0 " + o + " " + O,
          preserveAspectRatio: q[_] + " slice"
        }), Q = L.makeSvgSpan([j[_]], [$], e);
        if (R === 1)
          return {
            span: Q,
            minWidth: M,
            height: N
          };
        Q.style.height = J(N), I.push(Q);
      }
      return {
        span: L.makeSpan(["stretchy"], I, e),
        minWidth: M,
        height: N
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: u
  } = r();
  return a.height = u, a.style.height = J(u), i > 0 && (a.style.minWidth = J(i)), a;
}, sd = function(t, e, r, a, i) {
  var u, o = t.height + t.depth + r + a;
  if (/fbox|color|angl/.test(e)) {
    if (u = L.makeSpan(["stretchy", e], [], i), e === "fbox") {
      var s = i.color && i.getColor();
      s && (u.style.borderColor = s);
    }
  } else {
    var c = [];
    /^[bx]cancel$/.test(e) && c.push(new gi({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(e) && c.push(new gi({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new m0(c, {
      width: "100%",
      height: J(o)
    });
    u = L.makeSvgSpan([], [h], i);
  }
  return u.height = o, u.style.height = J(o), u;
}, g0 = {
  encloseSpan: sd,
  mathMLnode: nd,
  svgSpan: ud
};
function xe(n, t) {
  if (!n || n.type !== t)
    throw new Error("Expected node of type " + t + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function eu(n) {
  var t = ga(n);
  if (!t)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return t;
}
function ga(n) {
  return n && (n.type === "atom" || Nf.hasOwnProperty(n.type)) ? n : null;
}
var tu = (n, t) => {
  var e, r, a;
  n && n.type === "supsub" ? (r = xe(n.base, "accent"), e = r.base, n.base = e, a = Ff(Ee(n, t)), n.base = r) : (r = xe(n, "accent"), e = r.base);
  var i = Ee(e, t.havingCrampedStyle()), u = r.isShifty && ce.isCharacterBox(e), o = 0;
  if (u) {
    var s = ce.getBaseElem(e), c = Ee(s, t.havingCrampedStyle());
    o = Yu(c).skew;
  }
  var h = r.label === "\\c", b = h ? i.height + i.depth : Math.min(i.height, t.fontMetrics().xHeight), d;
  if (r.isStretchy)
    d = g0.svgSpan(r, t), d = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: d,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + J(2 * o) + ")",
          marginLeft: J(2 * o)
        } : void 0
      }]
    }, t);
  else {
    var m, T;
    r.label === "\\vec" ? (m = L.staticSvg("vec", t), T = L.svgData.vec[1]) : (m = L.makeOrd({
      mode: r.mode,
      text: r.label
    }, t, "textord"), m = Yu(m), m.italic = 0, T = m.width, h && (b += m.depth)), d = L.makeSpan(["accent-body"], [m]);
    var A = r.label === "\\textcircled";
    A && (d.classes.push("accent-full"), b = i.height);
    var S = o;
    A || (S -= T / 2), d.style.left = J(S), r.label === "\\textcircled" && (d.style.top = ".2em"), d = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -b
      }, {
        type: "elem",
        elem: d
      }]
    }, t);
  }
  var I = L.makeSpan(["mord", "accent"], [d], t);
  return a ? (a.children[0] = I, a.height = Math.max(I.height, a.height), a.classes[0] = "mord", a) : I;
}, Qo = (n, t) => {
  var e = n.isStretchy ? g0.mathMLnode(n.label) : new W.MathNode("mo", [qt(n.label, n.mode)]), r = new W.MathNode("mover", [Re(n.base, t), e]);
  return r.setAttribute("accent", "true"), r;
}, od = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
te({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, t) => {
    var e = ta(t[0]), r = !od.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: e
    };
  },
  htmlBuilder: tu,
  mathmlBuilder: Qo
});
te({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (n, t) => {
    var e = t[0], r = n.parser.mode;
    return r === "math" && (n.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + n.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: n.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: e
    };
  },
  htmlBuilder: tu,
  mathmlBuilder: Qo
});
te({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    return {
      type: "accentUnder",
      mode: e.mode,
      label: r,
      base: a
    };
  },
  htmlBuilder: (n, t) => {
    var e = Ee(n.base, t), r = g0.svgSpan(n, t), a = n.label === "\\utilde" ? 0.12 : 0, i = L.makeVList({
      positionType: "top",
      positionData: e.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: e
      }]
    }, t);
    return L.makeSpan(["mord", "accentunder"], [i], t);
  },
  mathmlBuilder: (n, t) => {
    var e = g0.mathMLnode(n.label), r = new W.MathNode("munder", [Re(n.base, t), e]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var vn = (n) => {
  var t = new W.MathNode("mpadded", n ? [n] : []);
  return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
};
te({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, t, e) {
    var {
      parser: r,
      funcName: a
    } = n;
    return {
      type: "xArrow",
      mode: r.mode,
      label: a,
      body: t[0],
      below: e[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(n, t) {
    var e = t.style, r = t.havingStyle(e.sup()), a = L.wrapFragment(Ee(n.body, r, t), t), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var u;
    n.below && (r = t.havingStyle(e.sub()), u = L.wrapFragment(Ee(n.below, r, t), t), u.classes.push(i + "-arrow-pad"));
    var o = g0.svgSpan(n, t), s = -t.fontMetrics().axisHeight + 0.5 * o.height, c = -t.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || n.label === "\\xleftequilibrium") && (c -= a.depth);
    var h;
    if (u) {
      var b = -t.fontMetrics().axisHeight + u.height + 0.5 * o.height + 0.111;
      h = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: c
        }, {
          type: "elem",
          elem: o,
          shift: s
        }, {
          type: "elem",
          elem: u,
          shift: b
        }]
      }, t);
    } else
      h = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: c
        }, {
          type: "elem",
          elem: o,
          shift: s
        }]
      }, t);
    return h.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [h], t);
  },
  mathmlBuilder(n, t) {
    var e = g0.mathMLnode(n.label);
    e.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = vn(Re(n.body, t));
      if (n.below) {
        var i = vn(Re(n.below, t));
        r = new W.MathNode("munderover", [e, i, a]);
      } else
        r = new W.MathNode("mover", [e, a]);
    } else if (n.below) {
      var u = vn(Re(n.below, t));
      r = new W.MathNode("munder", [e, u]);
    } else
      r = vn(), r = new W.MathNode("mover", [e, r]);
    return r;
  }
});
var ld = L.makeSpan;
function el(n, t) {
  var e = Ye(n.body, t, !0);
  return ld([n.mclass], e, t);
}
function tl(n, t) {
  var e, r = xt(n.body, t);
  return n.mclass === "minner" ? e = new W.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (e = r[0], e.type = "mi") : e = new W.MathNode("mi", r) : (n.isCharacterBox ? (e = r[0], e.type = "mo") : e = new W.MathNode("mo", r), n.mclass === "mbin" ? (e.attributes.lspace = "0.22em", e.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (e.attributes.lspace = "0em", e.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (e.attributes.lspace = "0em", e.attributes.rspace = "0em") : n.mclass === "minner" && (e.attributes.lspace = "0.0556em", e.attributes.width = "+0.1111em")), e;
}
te({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    return {
      type: "mclass",
      mode: e.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: Ge(a),
      isCharacterBox: ce.isCharacterBox(a)
    };
  },
  htmlBuilder: el,
  mathmlBuilder: tl
});
var ba = (n) => {
  var t = n.type === "ordgroup" && n.body.length ? n.body[0] : n;
  return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
};
te({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "mclass",
      mode: e.mode,
      mclass: ba(t[0]),
      body: Ge(t[1]),
      isCharacterBox: ce.isCharacterBox(t[1])
    };
  }
});
te({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n, a = t[1], i = t[0], u;
    r !== "\\stackrel" ? u = ba(a) : u = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: Ge(a)
    }, s = {
      type: "supsub",
      mode: i.mode,
      base: o,
      sup: r === "\\underset" ? null : i,
      sub: r === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: e.mode,
      mclass: u,
      body: [s],
      isCharacterBox: ce.isCharacterBox(s)
    };
  },
  htmlBuilder: el,
  mathmlBuilder: tl
});
te({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "pmb",
      mode: e.mode,
      mclass: ba(t[0]),
      body: Ge(t[0])
    };
  },
  htmlBuilder(n, t) {
    var e = Ye(n.body, t, !0), r = L.makeSpan([n.mclass], e, t);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, t) {
    var e = xt(n.body, t), r = new W.MathNode("mstyle", e);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var cd = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, rs = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), ns = (n) => n.type === "textord" && n.text === "@", fd = (n, t) => (n.type === "mathord" || n.type === "atom") && n.text === t;
function dd(n, t, e) {
  var r = cd[n];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return e.callFunction(r, [t[0]], [t[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = e.callFunction("\\\\cdleft", [t[0]], []), i = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, u = e.callFunction("\\Big", [i], []), o = e.callFunction("\\\\cdright", [t[1]], []), s = {
        type: "ordgroup",
        mode: "math",
        body: [a, u, o]
      };
      return e.callFunction("\\\\cdparent", [s], []);
    }
    case "\\\\cdlongequal":
      return e.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var c = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return e.callFunction("\\Big", [c], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function hd(n) {
  var t = [];
  for (n.gullet.beginGroup(), n.gullet.macros.set("\\cr", "\\\\\\relax"), n.gullet.beginGroup(); ; ) {
    t.push(n.parseExpression(!1, "\\\\")), n.gullet.endGroup(), n.gullet.beginGroup();
    var e = n.fetch().text;
    if (e === "&" || e === "\\\\")
      n.consume();
    else if (e === "\\end") {
      t[t.length - 1].length === 0 && t.pop();
      break;
    } else
      throw new Y("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < t.length; i++) {
    for (var u = t[i], o = rs(), s = 0; s < u.length; s++)
      if (!ns(u[s]))
        o.body.push(u[s]);
      else {
        r.push(o), s += 1;
        var c = eu(u[s]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(c) > -1)) if ("<>AV".indexOf(c) > -1)
          for (var b = 0; b < 2; b++) {
            for (var d = !0, m = s + 1; m < u.length; m++) {
              if (fd(u[m], c)) {
                d = !1, s = m;
                break;
              }
              if (ns(u[m]))
                throw new Y("Missing a " + c + " character to complete a CD arrow.", u[m]);
              h[b].body.push(u[m]);
            }
            if (d)
              throw new Y("Missing a " + c + " character to complete a CD arrow.", u[s]);
          }
        else
          throw new Y('Expected one of "<>AV=|." after @', u[s]);
        var T = dd(c, h, n), A = {
          type: "styling",
          body: [T],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(A), o = rs();
      }
    i % 2 === 0 ? r.push(o) : r.shift(), r = [], a.push(r);
  }
  n.gullet.endGroup(), n.gullet.endGroup();
  var S = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: S,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
te({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n;
    return {
      type: "cdlabel",
      mode: e.mode,
      side: r.slice(4),
      label: t[0]
    };
  },
  htmlBuilder(n, t) {
    var e = t.havingStyle(t.style.sup()), r = L.wrapFragment(Ee(n.label, e, t), t);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = J(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mrow", [Re(n.label, t)]);
    return e = new W.MathNode("mpadded", [e]), e.setAttribute("width", "0"), n.side === "left" && e.setAttribute("lspace", "-1width"), e.setAttribute("voffset", "0.7em"), e = new W.MathNode("mstyle", [e]), e.setAttribute("displaystyle", "false"), e.setAttribute("scriptlevel", "1"), e;
  }
});
te({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "cdlabelparent",
      mode: e.mode,
      fragment: t[0]
    };
  },
  htmlBuilder(n, t) {
    var e = L.wrapFragment(Ee(n.fragment, t), t);
    return e.classes.push("cd-vert-arrow"), e;
  },
  mathmlBuilder(n, t) {
    return new W.MathNode("mrow", [Re(n.fragment, t)]);
  }
});
te({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, t) {
    for (var {
      parser: e
    } = n, r = xe(t[0], "ordgroup"), a = r.body, i = "", u = 0; u < a.length; u++) {
      var o = xe(a[u], "textord");
      i += o.text;
    }
    var s = parseInt(i), c;
    if (isNaN(s))
      throw new Y("\\@char has non-numeric argument " + i);
    if (s < 0 || s >= 1114111)
      throw new Y("\\@char with invalid code point " + i);
    return s <= 65535 ? c = String.fromCharCode(s) : (s -= 65536, c = String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320)), {
      type: "textord",
      mode: e.mode,
      text: c
    };
  }
});
var rl = (n, t) => {
  var e = Ye(n.body, t.withColor(n.color), !1);
  return L.makeFragment(e);
}, nl = (n, t) => {
  var e = xt(n.body, t.withColor(n.color)), r = new W.MathNode("mstyle", e);
  return r.setAttribute("mathcolor", n.color), r;
};
te({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(n, t) {
    var {
      parser: e
    } = n, r = xe(t[0], "color-token").color, a = t[1];
    return {
      type: "color",
      mode: e.mode,
      color: r,
      body: Ge(a)
    };
  },
  htmlBuilder: rl,
  mathmlBuilder: nl
});
te({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(n, t) {
    var {
      parser: e,
      breakOnTokenText: r
    } = n, a = xe(t[0], "color-token").color;
    e.gullet.macros.set("\\current@color", a);
    var i = e.parseExpression(!0, r);
    return {
      type: "color",
      mode: e.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: rl,
  mathmlBuilder: nl
});
te({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(n, t, e) {
    var {
      parser: r
    } = n, a = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, i = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: i,
      size: a && xe(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, t) {
    var e = L.makeSpan(["mspace"], [], t);
    return n.newLine && (e.classes.push("newline"), n.size && (e.style.marginTop = J(Ue(n.size, t)))), e;
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mspace");
    return n.newLine && (e.setAttribute("linebreak", "newline"), n.size && e.setAttribute("height", J(Ue(n.size, t)))), e;
  }
});
var wi = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, al = (n) => {
  var t = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(t))
    throw new Y("Expected a control sequence", n);
  return t;
}, md = (n) => {
  var t = n.gullet.popToken();
  return t.text === "=" && (t = n.gullet.popToken(), t.text === " " && (t = n.gullet.popToken())), t;
}, il = (n, t, e, r) => {
  var a = n.gullet.macros.get(e.text);
  a == null && (e.noexpand = !0, a = {
    tokens: [e],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !n.gullet.isExpandable(e.text)
  }), n.gullet.macros.set(t, a, r);
};
te({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n;
    t.consumeSpaces();
    var r = t.fetch();
    if (wi[r.text])
      return (e === "\\global" || e === "\\\\globallong") && (r.text = wi[r.text]), xe(t.parseFunction(), "internal");
    throw new Y("Invalid token after macro prefix", r);
  }
});
te({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n, r = t.gullet.popToken(), a = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new Y("Expected a control sequence", r);
    for (var i = 0, u, o = [[]]; t.gullet.future().text !== "{"; )
      if (r = t.gullet.popToken(), r.text === "#") {
        if (t.gullet.future().text === "{") {
          u = t.gullet.future(), o[i].push("{");
          break;
        }
        if (r = t.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new Y('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new Y('Argument number "' + r.text + '" out of order');
        i++, o.push([]);
      } else {
        if (r.text === "EOF")
          throw new Y("Expected a macro definition");
        o[i].push(r.text);
      }
    var {
      tokens: s
    } = t.gullet.consumeArg();
    return u && s.unshift(u), (e === "\\edef" || e === "\\xdef") && (s = t.gullet.expandTokens(s), s.reverse()), t.gullet.macros.set(a, {
      tokens: s,
      numArgs: i,
      delimiters: o
    }, e === wi[e]), {
      type: "internal",
      mode: t.mode
    };
  }
});
te({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n, r = al(t.gullet.popToken());
    t.gullet.consumeSpaces();
    var a = md(t);
    return il(t, r, a, e === "\\\\globallet"), {
      type: "internal",
      mode: t.mode
    };
  }
});
te({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n, r = al(t.gullet.popToken()), a = t.gullet.popToken(), i = t.gullet.popToken();
    return il(t, r, i, e === "\\\\globalfuture"), t.gullet.pushToken(i), t.gullet.pushToken(a), {
      type: "internal",
      mode: t.mode
    };
  }
});
var Cr = function(t, e, r) {
  var a = ze.math[t] && ze.math[t].replace, i = Xi(a || t, e, r);
  if (!i)
    throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
  return i;
}, ru = function(t, e, r, a) {
  var i = r.havingBaseStyle(e), u = L.makeSpan(a.concat(i.sizingClasses(r)), [t], r), o = i.sizeMultiplier / r.sizeMultiplier;
  return u.height *= o, u.depth *= o, u.maxFontSize = i.sizeMultiplier, u;
}, ul = function(t, e, r) {
  var a = e.havingBaseStyle(r), i = (1 - e.sizeMultiplier / a.sizeMultiplier) * e.fontMetrics().axisHeight;
  t.classes.push("delimcenter"), t.style.top = J(i), t.height -= i, t.depth += i;
}, pd = function(t, e, r, a, i, u) {
  var o = L.makeSymbol(t, "Main-Regular", i, a), s = ru(o, e, a, u);
  return r && ul(s, a, e), s;
}, gd = function(t, e, r, a) {
  return L.makeSymbol(t, "Size" + e + "-Regular", r, a);
}, sl = function(t, e, r, a, i, u) {
  var o = gd(t, e, i, a), s = ru(L.makeSpan(["delimsizing", "size" + e], [o], a), he.TEXT, a, u);
  return r && ul(s, a, he.TEXT), s;
}, Pa = function(t, e, r) {
  var a;
  e === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = L.makeSpan(["delimsizinginner", a], [L.makeSpan([], [L.makeSymbol(t, e, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, qa = function(t, e, r) {
  var a = e0["Size4-Regular"][t.charCodeAt(0)] ? e0["Size4-Regular"][t.charCodeAt(0)][4] : e0["Size1-Regular"][t.charCodeAt(0)][4], i = new _0("inner", Df(t, Math.round(1e3 * e))), u = new m0([i], {
    width: J(a),
    height: J(e),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + J(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * e),
    preserveAspectRatio: "xMinYMin"
  }), o = L.makeSvgSpan([], [u], r);
  return o.height = e, o.style.height = J(e), o.style.width = J(a), {
    type: "elem",
    elem: o
  };
}, xi = 8e-3, yn = {
  type: "kern",
  size: -1 * xi
}, bd = ["|", "\\lvert", "\\rvert", "\\vert"], vd = ["\\|", "\\lVert", "\\rVert", "\\Vert"], ol = function(t, e, r, a, i, u) {
  var o, s, c, h, b = "", d = 0;
  o = c = h = t, s = null;
  var m = "Size1-Regular";
  t === "\\uparrow" ? c = h = "⏐" : t === "\\Uparrow" ? c = h = "‖" : t === "\\downarrow" ? o = c = "⏐" : t === "\\Downarrow" ? o = c = "‖" : t === "\\updownarrow" ? (o = "\\uparrow", c = "⏐", h = "\\downarrow") : t === "\\Updownarrow" ? (o = "\\Uparrow", c = "‖", h = "\\Downarrow") : ce.contains(bd, t) ? (c = "∣", b = "vert", d = 333) : ce.contains(vd, t) ? (c = "∥", b = "doublevert", d = 556) : t === "[" || t === "\\lbrack" ? (o = "⎡", c = "⎢", h = "⎣", m = "Size4-Regular", b = "lbrack", d = 667) : t === "]" || t === "\\rbrack" ? (o = "⎤", c = "⎥", h = "⎦", m = "Size4-Regular", b = "rbrack", d = 667) : t === "\\lfloor" || t === "⌊" ? (c = o = "⎢", h = "⎣", m = "Size4-Regular", b = "lfloor", d = 667) : t === "\\lceil" || t === "⌈" ? (o = "⎡", c = h = "⎢", m = "Size4-Regular", b = "lceil", d = 667) : t === "\\rfloor" || t === "⌋" ? (c = o = "⎥", h = "⎦", m = "Size4-Regular", b = "rfloor", d = 667) : t === "\\rceil" || t === "⌉" ? (o = "⎤", c = h = "⎥", m = "Size4-Regular", b = "rceil", d = 667) : t === "(" || t === "\\lparen" ? (o = "⎛", c = "⎜", h = "⎝", m = "Size4-Regular", b = "lparen", d = 875) : t === ")" || t === "\\rparen" ? (o = "⎞", c = "⎟", h = "⎠", m = "Size4-Regular", b = "rparen", d = 875) : t === "\\{" || t === "\\lbrace" ? (o = "⎧", s = "⎨", h = "⎩", c = "⎪", m = "Size4-Regular") : t === "\\}" || t === "\\rbrace" ? (o = "⎫", s = "⎬", h = "⎭", c = "⎪", m = "Size4-Regular") : t === "\\lgroup" || t === "⟮" ? (o = "⎧", h = "⎩", c = "⎪", m = "Size4-Regular") : t === "\\rgroup" || t === "⟯" ? (o = "⎫", h = "⎭", c = "⎪", m = "Size4-Regular") : t === "\\lmoustache" || t === "⎰" ? (o = "⎧", h = "⎭", c = "⎪", m = "Size4-Regular") : (t === "\\rmoustache" || t === "⎱") && (o = "⎫", h = "⎩", c = "⎪", m = "Size4-Regular");
  var T = Cr(o, m, i), A = T.height + T.depth, S = Cr(c, m, i), I = S.height + S.depth, D = Cr(h, m, i), k = D.height + D.depth, M = 0, O = 1;
  if (s !== null) {
    var N = Cr(s, m, i);
    M = N.height + N.depth, O = 2;
  }
  var R = A + k + M, j = Math.max(0, Math.ceil((e - R) / (O * I))), q = R + j * O * I, H = a.fontMetrics().axisHeight;
  r && (H *= a.sizeMultiplier);
  var _ = q / 2 - H, P = [];
  if (b.length > 0) {
    var $ = q - A - k, Q = Math.round(q * 1e3), B = Af(b, Math.round($ * 1e3)), G = new _0(b, B), U = (d / 1e3).toFixed(3) + "em", Z = (Q / 1e3).toFixed(3) + "em", ye = new m0([G], {
      width: U,
      height: Z,
      viewBox: "0 0 " + d + " " + Q
    }), ve = L.makeSvgSpan([], [ye], a);
    ve.height = Q / 1e3, ve.style.width = U, ve.style.height = Z, P.push({
      type: "elem",
      elem: ve
    });
  } else {
    if (P.push(Pa(h, m, i)), P.push(yn), s === null) {
      var ie = q - A - k + 2 * xi;
      P.push(qa(c, ie, a));
    } else {
      var oe = (q - A - k - M) / 2 + 2 * xi;
      P.push(qa(c, oe, a)), P.push(yn), P.push(Pa(s, m, i)), P.push(yn), P.push(qa(c, oe, a));
    }
    P.push(yn), P.push(Pa(o, m, i));
  }
  var Te = a.havingBaseStyle(he.TEXT), ge = L.makeVList({
    positionType: "bottom",
    positionData: _,
    children: P
  }, Te);
  return ru(L.makeSpan(["delimsizing", "mult"], [ge], Te), he.TEXT, a, u);
}, Ha = 80, Ua = 0.08, ja = function(t, e, r, a, i) {
  var u = xf(t, a, r), o = new _0(t, u), s = new m0([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: J(e),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return L.makeSvgSpan(["hide-tail"], [s], i);
}, yd = function(t, e) {
  var r = e.havingBaseSizing(), a = dl("\\surd", t * r.sizeMultiplier, fl, r), i = r.sizeMultiplier, u = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness), o, s = 0, c = 0, h = 0, b;
  return a.type === "small" ? (h = 1e3 + 1e3 * u + Ha, t < 1 ? i = 1 : t < 1.4 && (i = 0.7), s = (1 + u + Ua) / i, c = (1 + u) / i, o = ja("sqrtMain", s, h, u, e), o.style.minWidth = "0.853em", b = 0.833 / i) : a.type === "large" ? (h = (1e3 + Ha) * Nr[a.size], c = (Nr[a.size] + u) / i, s = (Nr[a.size] + u + Ua) / i, o = ja("sqrtSize" + a.size, s, h, u, e), o.style.minWidth = "1.02em", b = 1 / i) : (s = t + u + Ua, c = t + u, h = Math.floor(1e3 * t + u) + Ha, o = ja("sqrtTall", s, h, u, e), o.style.minWidth = "0.742em", b = 1.056), o.height = c, o.style.height = J(s), {
    span: o,
    advanceWidth: b,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (e.fontMetrics().sqrtRuleThickness + u) * i
  };
}, ll = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], wd = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], cl = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Nr = [0, 1.2, 1.8, 2.4, 3], xd = function(t, e, r, a, i) {
  if (t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle"), ce.contains(ll, t) || ce.contains(cl, t))
    return sl(t, e, !1, r, a, i);
  if (ce.contains(wd, t))
    return ol(t, Nr[e], !1, r, a, i);
  throw new Y("Illegal delimiter: '" + t + "'");
}, Dd = [{
  type: "small",
  style: he.SCRIPTSCRIPT
}, {
  type: "small",
  style: he.SCRIPT
}, {
  type: "small",
  style: he.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], Ad = [{
  type: "small",
  style: he.SCRIPTSCRIPT
}, {
  type: "small",
  style: he.SCRIPT
}, {
  type: "small",
  style: he.TEXT
}, {
  type: "stack"
}], fl = [{
  type: "small",
  style: he.SCRIPTSCRIPT
}, {
  type: "small",
  style: he.SCRIPT
}, {
  type: "small",
  style: he.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], Sd = function(t) {
  if (t.type === "small")
    return "Main-Regular";
  if (t.type === "large")
    return "Size" + t.size + "-Regular";
  if (t.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + t.type + "' here.");
}, dl = function(t, e, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), u = i; u < r.length && r[u].type !== "stack"; u++) {
    var o = Cr(t, Sd(r[u]), "math"), s = o.height + o.depth;
    if (r[u].type === "small") {
      var c = a.havingBaseStyle(r[u].style);
      s *= c.sizeMultiplier;
    }
    if (s > e)
      return r[u];
  }
  return r[r.length - 1];
}, hl = function(t, e, r, a, i, u) {
  t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle");
  var o;
  ce.contains(cl, t) ? o = Dd : ce.contains(ll, t) ? o = fl : o = Ad;
  var s = dl(t, e, o, a);
  return s.type === "small" ? pd(t, s.style, r, a, i, u) : s.type === "large" ? sl(t, s.size, r, a, i, u) : ol(t, e, r, a, i, u);
}, kd = function(t, e, r, a, i, u) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, s = 901, c = 5 / a.fontMetrics().ptPerEm, h = Math.max(e - o, r + o), b = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * s,
    2 * h - c
  );
  return hl(t, b, !0, a, i, u);
}, h0 = {
  sqrtImage: yd,
  sizedDelim: xd,
  sizeToMaxHeight: Nr,
  customSizedDelim: hl,
  leftRightDelim: kd
}, as = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, Ed = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function va(n, t) {
  var e = ga(n);
  if (e && ce.contains(Ed, e.text))
    return e;
  throw e ? new Y("Invalid delimiter '" + e.text + "' after '" + t.funcName + "'", n) : new Y("Invalid delimiter type '" + n.type + "'", n);
}
te({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, t) => {
    var e = va(t[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: as[n.funcName].size,
      mclass: as[n.funcName].mclass,
      delim: e.text
    };
  },
  htmlBuilder: (n, t) => n.delim === "." ? L.makeSpan([n.mclass]) : h0.sizedDelim(n.delim, n.size, t, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var t = [];
    n.delim !== "." && t.push(qt(n.delim, n.mode));
    var e = new W.MathNode("mo", t);
    n.mclass === "mopen" || n.mclass === "mclose" ? e.setAttribute("fence", "true") : e.setAttribute("fence", "false"), e.setAttribute("stretchy", "true");
    var r = J(h0.sizeToMaxHeight[n.size]);
    return e.setAttribute("minsize", r), e.setAttribute("maxsize", r), e;
  }
});
function is(n) {
  if (!n.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
te({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, t) => {
    var e = n.parser.gullet.macros.get("\\current@color");
    if (e && typeof e != "string")
      throw new Y("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: va(t[0], n).text,
      color: e
      // undefined if not set via \color
    };
  }
});
te({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, t) => {
    var e = va(t[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = xe(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: a,
      left: e.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (n, t) => {
    is(n);
    for (var e = Ye(n.body, t, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, u = 0; u < e.length; u++)
      e[u].isMiddle ? i = !0 : (r = Math.max(e[u].height, r), a = Math.max(e[u].depth, a));
    r *= t.sizeMultiplier, a *= t.sizeMultiplier;
    var o;
    if (n.left === "." ? o = Rr(t, ["mopen"]) : o = h0.leftRightDelim(n.left, r, a, t, n.mode, ["mopen"]), e.unshift(o), i)
      for (var s = 1; s < e.length; s++) {
        var c = e[s], h = c.isMiddle;
        h && (e[s] = h0.leftRightDelim(h.delim, r, a, h.options, n.mode, []));
      }
    var b;
    if (n.right === ".")
      b = Rr(t, ["mclose"]);
    else {
      var d = n.rightColor ? t.withColor(n.rightColor) : t;
      b = h0.leftRightDelim(n.right, r, a, d, n.mode, ["mclose"]);
    }
    return e.push(b), L.makeSpan(["minner"], e, t);
  },
  mathmlBuilder: (n, t) => {
    is(n);
    var e = xt(n.body, t);
    if (n.left !== ".") {
      var r = new W.MathNode("mo", [qt(n.left, n.mode)]);
      r.setAttribute("fence", "true"), e.unshift(r);
    }
    if (n.right !== ".") {
      var a = new W.MathNode("mo", [qt(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), e.push(a);
    }
    return Ji(e);
  }
});
te({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, t) => {
    var e = va(t[0], n);
    if (!n.parser.leftrightDepth)
      throw new Y("\\middle without preceding \\left", e);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: e.text
    };
  },
  htmlBuilder: (n, t) => {
    var e;
    if (n.delim === ".")
      e = Rr(t, []);
    else {
      e = h0.sizedDelim(n.delim, 1, t, n.mode, []);
      var r = {
        delim: n.delim,
        options: t
      };
      e.isMiddle = r;
    }
    return e;
  },
  mathmlBuilder: (n, t) => {
    var e = n.delim === "\\vert" || n.delim === "|" ? qt("|", "text") : qt(n.delim, n.mode), r = new W.MathNode("mo", [e]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var nu = (n, t) => {
  var e = L.wrapFragment(Ee(n.body, t), t), r = n.label.slice(1), a = t.sizeMultiplier, i, u = 0, o = ce.isCharacterBox(n.body);
  if (r === "sout")
    i = L.makeSpan(["stretchy", "sout"]), i.height = t.fontMetrics().defaultRuleThickness / a, u = -0.5 * t.fontMetrics().xHeight;
  else if (r === "phase") {
    var s = Ue({
      number: 0.6,
      unit: "pt"
    }, t), c = Ue({
      number: 0.35,
      unit: "ex"
    }, t), h = t.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var b = e.height + e.depth + s + c;
    e.style.paddingLeft = J(b / 2 + s);
    var d = Math.floor(1e3 * b * a), m = yf(d), T = new m0([new _0("phase", m)], {
      width: "400em",
      height: J(d / 1e3),
      viewBox: "0 0 400000 " + d,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = L.makeSvgSpan(["hide-tail"], [T], t), i.style.height = J(b), u = e.depth + s + c;
  } else {
    /cancel/.test(r) ? o || e.classes.push("cancel-pad") : r === "angl" ? e.classes.push("anglpad") : e.classes.push("boxpad");
    var A = 0, S = 0, I = 0;
    /box/.test(r) ? (I = Math.max(
      t.fontMetrics().fboxrule,
      // default
      t.minRuleThickness
      // User override.
    ), A = t.fontMetrics().fboxsep + (r === "colorbox" ? 0 : I), S = A) : r === "angl" ? (I = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), A = 4 * I, S = Math.max(0, 0.25 - e.depth)) : (A = o ? 0.2 : 0, S = A), i = g0.encloseSpan(e, r, A, S, t), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = J(I)) : r === "angl" && I !== 0.049 && (i.style.borderTopWidth = J(I), i.style.borderRightWidth = J(I)), u = e.depth + S, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
  }
  var D;
  if (n.backgroundColor)
    D = L.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: u
        },
        {
          type: "elem",
          elem: e,
          shift: 0
        }
      ]
    }, t);
  else {
    var k = /cancel|phase/.test(r) ? ["svg-align"] : [];
    D = L.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: e,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: u,
          wrapperClasses: k
        }
      ]
    }, t);
  }
  return /cancel/.test(r) && (D.height = e.height, D.depth = e.depth), /cancel/.test(r) && !o ? L.makeSpan(["mord", "cancel-lap"], [D], t) : L.makeSpan(["mord"], [D], t);
}, au = (n, t) => {
  var e = 0, r = new W.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Re(n.body, t)]);
  switch (n.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (e = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * e + "pt"), r.setAttribute("height", "+" + 2 * e + "pt"), r.setAttribute("lspace", e + "pt"), r.setAttribute("voffset", e + "pt"), n.label === "\\fcolorbox") {
        var a = Math.max(
          t.fontMetrics().fboxrule,
          // default
          t.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + a + "em solid " + String(n.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return n.backgroundColor && r.setAttribute("mathbackground", n.backgroundColor), r;
};
te({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(n, t, e) {
    var {
      parser: r,
      funcName: a
    } = n, i = xe(t[0], "color-token").color, u = t[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: u
    };
  },
  htmlBuilder: nu,
  mathmlBuilder: au
});
te({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(n, t, e) {
    var {
      parser: r,
      funcName: a
    } = n, i = xe(t[0], "color-token").color, u = xe(t[1], "color-token").color, o = t[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: u,
      borderColor: i,
      body: o
    };
  },
  htmlBuilder: nu,
  mathmlBuilder: au
});
te({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "enclose",
      mode: e.mode,
      label: "\\fbox",
      body: t[0]
    };
  }
});
te({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    return {
      type: "enclose",
      mode: e.mode,
      label: r,
      body: a
    };
  },
  htmlBuilder: nu,
  mathmlBuilder: au
});
te({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "enclose",
      mode: e.mode,
      label: "\\angl",
      body: t[0]
    };
  }
});
var ml = {};
function a0(n) {
  for (var {
    type: t,
    names: e,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: u
  } = n, o = {
    type: t,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, s = 0; s < e.length; ++s)
    ml[e[s]] = o;
  i && (Qn[t] = i), u && (ea[t] = u);
}
var pl = {};
function g(n, t) {
  pl[n] = t;
}
function us(n) {
  var t = [];
  n.consumeSpaces();
  var e = n.fetch().text;
  for (e === "\\relax" && (n.consume(), n.consumeSpaces(), e = n.fetch().text); e === "\\hline" || e === "\\hdashline"; )
    n.consume(), t.push(e === "\\hdashline"), n.consumeSpaces(), e = n.fetch().text;
  return t;
}
var ya = (n) => {
  var t = n.parser.settings;
  if (!t.displayMode)
    throw new Y("{" + n.envName + "} can be used only in display mode.");
};
function iu(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function I0(n, t, e) {
  var {
    hskipBeforeAndAfter: r,
    addJot: a,
    cols: i,
    arraystretch: u,
    colSeparationType: o,
    autoTag: s,
    singleRow: c,
    emptySingleRow: h,
    maxNumCols: b,
    leqno: d
  } = t;
  if (n.gullet.beginGroup(), c || n.gullet.macros.set("\\cr", "\\\\\\relax"), !u) {
    var m = n.gullet.expandMacroAsText("\\arraystretch");
    if (m == null)
      u = 1;
    else if (u = parseFloat(m), !u || u < 0)
      throw new Y("Invalid \\arraystretch: " + m);
  }
  n.gullet.beginGroup();
  var T = [], A = [T], S = [], I = [], D = s != null ? [] : void 0;
  function k() {
    s && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function M() {
    D && (n.gullet.macros.get("\\df@tag") ? (D.push(n.subparse([new zt("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : D.push(!!s && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (k(), I.push(us(n)); ; ) {
    var O = n.parseExpression(!1, c ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), O = {
      type: "ordgroup",
      mode: n.mode,
      body: O
    }, e && (O = {
      type: "styling",
      mode: n.mode,
      style: e,
      body: [O]
    }), T.push(O);
    var N = n.fetch().text;
    if (N === "&") {
      if (b && T.length === b) {
        if (c || o)
          throw new Y("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (N === "\\end") {
      M(), T.length === 1 && O.type === "styling" && O.body[0].body.length === 0 && (A.length > 1 || !h) && A.pop(), I.length < A.length + 1 && I.push([]);
      break;
    } else if (N === "\\\\") {
      n.consume();
      var R = void 0;
      n.gullet.future().text !== " " && (R = n.parseSizeGroup(!0)), S.push(R ? R.value : null), M(), I.push(us(n)), T = [], A.push(T), k();
    } else
      throw new Y("Expected & or \\\\ or \\cr or \\end", n.nextToken);
  }
  return n.gullet.endGroup(), n.gullet.endGroup(), {
    type: "array",
    mode: n.mode,
    addJot: a,
    arraystretch: u,
    body: A,
    cols: i,
    rowGaps: S,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: I,
    colSeparationType: o,
    tags: D,
    leqno: d
  };
}
function uu(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var i0 = function(t, e) {
  var r, a, i = t.body.length, u = t.hLinesBeforeRow, o = 0, s = new Array(i), c = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    e.fontMetrics().arrayRuleWidth,
    e.minRuleThickness
    // User override.
  ), b = 1 / e.fontMetrics().ptPerEm, d = 5 * b;
  if (t.colSeparationType && t.colSeparationType === "small") {
    var m = e.havingStyle(he.SCRIPT).sizeMultiplier;
    d = 0.2778 * (m / e.sizeMultiplier);
  }
  var T = t.colSeparationType === "CD" ? Ue({
    number: 3,
    unit: "ex"
  }, e) : 12 * b, A = 3 * b, S = t.arraystretch * T, I = 0.7 * S, D = 0.3 * S, k = 0;
  function M(It) {
    for (var mt = 0; mt < It.length; ++mt)
      mt > 0 && (k += 0.25), c.push({
        pos: k,
        isDashed: It[mt]
      });
  }
  for (M(u[0]), r = 0; r < t.body.length; ++r) {
    var O = t.body[r], N = I, R = D;
    o < O.length && (o = O.length);
    var j = new Array(O.length);
    for (a = 0; a < O.length; ++a) {
      var q = Ee(O[a], e);
      R < q.depth && (R = q.depth), N < q.height && (N = q.height), j[a] = q;
    }
    var H = t.rowGaps[r], _ = 0;
    H && (_ = Ue(H, e), _ > 0 && (_ += D, R < _ && (R = _), _ = 0)), t.addJot && (R += A), j.height = N, j.depth = R, k += N, j.pos = k, k += R + _, s[r] = j, M(u[r + 1]);
  }
  var P = k / 2 + e.fontMetrics().axisHeight, $ = t.cols || [], Q = [], B, G, U = [];
  if (t.tags && t.tags.some((It) => It))
    for (r = 0; r < i; ++r) {
      var Z = s[r], ye = Z.pos - P, ve = t.tags[r], ie = void 0;
      ve === !0 ? ie = L.makeSpan(["eqn-num"], [], e) : ve === !1 ? ie = L.makeSpan([], [], e) : ie = L.makeSpan([], Ye(ve, e, !0), e), ie.depth = Z.depth, ie.height = Z.height, U.push({
        type: "elem",
        elem: ie,
        shift: ye
      });
    }
  for (
    a = 0, G = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || G < $.length;
    ++a, ++G
  ) {
    for (var oe = $[G] || {}, Te = !0; oe.type === "separator"; ) {
      if (Te || (B = L.makeSpan(["arraycolsep"], []), B.style.width = J(e.fontMetrics().doubleRuleSep), Q.push(B)), oe.separator === "|" || oe.separator === ":") {
        var ge = oe.separator === "|" ? "solid" : "dashed", ne = L.makeSpan(["vertical-separator"], [], e);
        ne.style.height = J(k), ne.style.borderRightWidth = J(h), ne.style.borderRightStyle = ge, ne.style.margin = "0 " + J(-h / 2);
        var Pe = k - P;
        Pe && (ne.style.verticalAlign = J(-Pe)), Q.push(ne);
      } else
        throw new Y("Invalid separator type: " + oe.separator);
      G++, oe = $[G] || {}, Te = !1;
    }
    if (!(a >= o)) {
      var Me = void 0;
      (a > 0 || t.hskipBeforeAndAfter) && (Me = ce.deflt(oe.pregap, d), Me !== 0 && (B = L.makeSpan(["arraycolsep"], []), B.style.width = J(Me), Q.push(B)));
      var ke = [];
      for (r = 0; r < i; ++r) {
        var Xe = s[r], Qe = Xe[a];
        if (Qe) {
          var ht = Xe.pos - P;
          Qe.depth = Xe.depth, Qe.height = Xe.height, ke.push({
            type: "elem",
            elem: Qe,
            shift: ht
          });
        }
      }
      ke = L.makeVList({
        positionType: "individualShift",
        children: ke
      }, e), ke = L.makeSpan(["col-align-" + (oe.align || "c")], [ke]), Q.push(ke), (a < o - 1 || t.hskipBeforeAndAfter) && (Me = ce.deflt(oe.postgap, d), Me !== 0 && (B = L.makeSpan(["arraycolsep"], []), B.style.width = J(Me), Q.push(B)));
    }
  }
  if (s = L.makeSpan(["mtable"], Q), c.length > 0) {
    for (var at = L.makeLineSpan("hline", e, h), Ut = L.makeLineSpan("hdashline", e, h), Dt = [{
      type: "elem",
      elem: s,
      shift: 0
    }]; c.length > 0; ) {
      var s0 = c.pop(), w0 = s0.pos - P;
      s0.isDashed ? Dt.push({
        type: "elem",
        elem: Ut,
        shift: w0
      }) : Dt.push({
        type: "elem",
        elem: at,
        shift: w0
      });
    }
    s = L.makeVList({
      positionType: "individualShift",
      children: Dt
    }, e);
  }
  if (U.length === 0)
    return L.makeSpan(["mord"], [s], e);
  var At = L.makeVList({
    positionType: "individualShift",
    children: U
  }, e);
  return At = L.makeSpan(["tag"], [At], e), L.makeFragment([s, At]);
}, Td = {
  c: "center ",
  l: "left ",
  r: "right "
}, u0 = function(t, e) {
  for (var r = [], a = new W.MathNode("mtd", [], ["mtr-glue"]), i = new W.MathNode("mtd", [], ["mml-eqn-num"]), u = 0; u < t.body.length; u++) {
    for (var o = t.body[u], s = [], c = 0; c < o.length; c++)
      s.push(new W.MathNode("mtd", [Re(o[c], e)]));
    t.tags && t.tags[u] && (s.unshift(a), s.push(a), t.leqno ? s.unshift(i) : s.push(i)), r.push(new W.MathNode("mtr", s));
  }
  var h = new W.MathNode("mtable", r), b = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", J(b));
  var d = "", m = "";
  if (t.cols && t.cols.length > 0) {
    var T = t.cols, A = "", S = !1, I = 0, D = T.length;
    T[0].type === "separator" && (d += "top ", I = 1), T[T.length - 1].type === "separator" && (d += "bottom ", D -= 1);
    for (var k = I; k < D; k++)
      T[k].type === "align" ? (m += Td[T[k].align], S && (A += "none "), S = !0) : T[k].type === "separator" && S && (A += T[k].separator === "|" ? "solid " : "dashed ", S = !1);
    h.setAttribute("columnalign", m.trim()), /[sd]/.test(A) && h.setAttribute("columnlines", A.trim());
  }
  if (t.colSeparationType === "align") {
    for (var M = t.cols || [], O = "", N = 1; N < M.length; N++)
      O += N % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", O.trim());
  } else t.colSeparationType === "alignat" || t.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : t.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : t.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var R = "", j = t.hLinesBeforeRow;
  d += j[0].length > 0 ? "left " : "", d += j[j.length - 1].length > 0 ? "right " : "";
  for (var q = 1; q < j.length - 1; q++)
    R += j[q].length === 0 ? "none " : j[q][0] ? "dashed " : "solid ";
  return /[sd]/.test(R) && h.setAttribute("rowlines", R.trim()), d !== "" && (h = new W.MathNode("menclose", [h]), h.setAttribute("notation", d.trim())), t.arraystretch && t.arraystretch < 1 && (h = new W.MathNode("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, gl = function(t, e) {
  t.envName.indexOf("ed") === -1 && ya(t);
  var r = [], a = t.envName.indexOf("at") > -1 ? "alignat" : "align", i = t.envName === "split", u = I0(t.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : iu(t.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: t.parser.settings.leqno
  }, "display"), o, s = 0, c = {
    type: "ordgroup",
    mode: t.mode,
    body: []
  };
  if (e[0] && e[0].type === "ordgroup") {
    for (var h = "", b = 0; b < e[0].body.length; b++) {
      var d = xe(e[0].body[b], "textord");
      h += d.text;
    }
    o = Number(h), s = o * 2;
  }
  var m = !s;
  u.body.forEach(function(I) {
    for (var D = 1; D < I.length; D += 2) {
      var k = xe(I[D], "styling"), M = xe(k.body[0], "ordgroup");
      M.body.unshift(c);
    }
    if (m)
      s < I.length && (s = I.length);
    else {
      var O = I.length / 2;
      if (o < O)
        throw new Y("Too many math in a row: " + ("expected " + o + ", but got " + O), I[0]);
    }
  });
  for (var T = 0; T < s; ++T) {
    var A = "r", S = 0;
    T % 2 === 1 ? A = "l" : T > 0 && m && (S = 1), r[T] = {
      type: "align",
      align: A,
      pregap: S,
      postgap: 0
    };
  }
  return u.colSeparationType = m ? "align" : "alignat", u;
};
a0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var e = ga(t[0]), r = e ? [t[0]] : xe(t[0], "ordgroup").body, a = r.map(function(u) {
      var o = eu(u), s = o.text;
      if ("lcr".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      if (s === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (s === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new Y("Unknown column alignment: " + s, u);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return I0(n.parser, i, uu(n.envName));
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var t = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[n.envName.replace("*", "")], e = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: e
      }]
    };
    if (n.envName.charAt(n.envName.length - 1) === "*") {
      var a = n.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), e = a.fetch().text, "lcr".indexOf(e) === -1)
          throw new Y("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: e
        }];
      }
    }
    var i = I0(n.parser, r, uu(n.envName)), u = Math.max(0, ...i.body.map((o) => o.length));
    return i.cols = new Array(u).fill({
      type: "align",
      align: e
    }), t ? {
      type: "leftright",
      mode: n.mode,
      body: [i],
      left: t[0],
      right: t[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var t = {
      arraystretch: 0.5
    }, e = I0(n.parser, t, "script");
    return e.colSeparationType = "small", e;
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var e = ga(t[0]), r = e ? [t[0]] : xe(t[0], "ordgroup").body, a = r.map(function(u) {
      var o = eu(u), s = o.text;
      if ("lc".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      throw new Y("Unknown column alignment: " + s, u);
    });
    if (a.length > 1)
      throw new Y("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = I0(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new Y("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var t = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, e = I0(n.parser, t, uu(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [e],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: gl,
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ce.contains(["gather", "gather*"], n.envName) && ya(n);
    var t = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: iu(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return I0(n.parser, t, "display");
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: gl,
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    ya(n);
    var t = {
      autoTag: iu(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return I0(n.parser, t, "display");
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
a0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return ya(n), hd(n.parser);
  },
  htmlBuilder: i0,
  mathmlBuilder: u0
});
g("\\nonumber", "\\gdef\\@eqnsw{0}");
g("\\notag", "\\nonumber");
te({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(n, t) {
    throw new Y(n.funcName + " valid only within array environment");
  }
});
var ss = ml;
te({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    if (a.type !== "ordgroup")
      throw new Y("Invalid environment name", a);
    for (var i = "", u = 0; u < a.body.length; ++u)
      i += xe(a.body[u], "textord").text;
    if (r === "\\begin") {
      if (!ss.hasOwnProperty(i))
        throw new Y("No such environment: " + i, a);
      var o = ss[i], {
        args: s,
        optArgs: c
      } = e.parseArguments("\\begin{" + i + "}", o), h = {
        mode: e.mode,
        envName: i,
        parser: e
      }, b = o.handler(h, s, c);
      e.expect("\\end", !1);
      var d = e.nextToken, m = xe(e.parseFunction(), "environment");
      if (m.name !== i)
        throw new Y("Mismatch: \\begin{" + i + "} matched by \\end{" + m.name + "}", d);
      return b;
    }
    return {
      type: "environment",
      mode: e.mode,
      name: i,
      nameGroup: a
    };
  }
});
var bl = (n, t) => {
  var e = n.font, r = t.withFont(e);
  return Ee(n.body, r);
}, vl = (n, t) => {
  var e = n.font, r = t.withFont(e);
  return Re(n.body, r);
}, os = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
te({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = ta(t[0]), i = r;
    return i in os && (i = os[i]), {
      type: "font",
      mode: e.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: bl,
  mathmlBuilder: vl
});
te({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = t[0], a = ce.isCharacterBox(r);
    return {
      type: "mclass",
      mode: e.mode,
      mclass: ba(r),
      body: [{
        type: "font",
        mode: e.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: a
    };
  }
});
te({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r,
      breakOnTokenText: a
    } = n, {
      mode: i
    } = e, u = e.parseExpression(!0, a), o = "math" + r.slice(1);
    return {
      type: "font",
      mode: i,
      font: o,
      body: {
        type: "ordgroup",
        mode: e.mode,
        body: u
      }
    };
  },
  htmlBuilder: bl,
  mathmlBuilder: vl
});
var yl = (n, t) => {
  var e = t;
  return n === "display" ? e = e.id >= he.SCRIPT.id ? e.text() : he.DISPLAY : n === "text" && e.size === he.DISPLAY.size ? e = he.TEXT : n === "script" ? e = he.SCRIPT : n === "scriptscript" && (e = he.SCRIPTSCRIPT), e;
}, su = (n, t) => {
  var e = yl(n.size, t.style), r = e.fracNum(), a = e.fracDen(), i;
  i = t.havingStyle(r);
  var u = Ee(n.numer, i, t);
  if (n.continued) {
    var o = 8.5 / t.fontMetrics().ptPerEm, s = 3.5 / t.fontMetrics().ptPerEm;
    u.height = u.height < o ? o : u.height, u.depth = u.depth < s ? s : u.depth;
  }
  i = t.havingStyle(a);
  var c = Ee(n.denom, i, t), h, b, d;
  n.hasBarLine ? (n.barSize ? (b = Ue(n.barSize, t), h = L.makeLineSpan("frac-line", t, b)) : h = L.makeLineSpan("frac-line", t), b = h.height, d = h.height) : (h = null, b = 0, d = t.fontMetrics().defaultRuleThickness);
  var m, T, A;
  e.size === he.DISPLAY.size || n.size === "display" ? (m = t.fontMetrics().num1, b > 0 ? T = 3 * d : T = 7 * d, A = t.fontMetrics().denom1) : (b > 0 ? (m = t.fontMetrics().num2, T = d) : (m = t.fontMetrics().num3, T = 3 * d), A = t.fontMetrics().denom2);
  var S;
  if (h) {
    var D = t.fontMetrics().axisHeight;
    m - u.depth - (D + 0.5 * b) < T && (m += T - (m - u.depth - (D + 0.5 * b))), D - 0.5 * b - (c.height - A) < T && (A += T - (D - 0.5 * b - (c.height - A)));
    var k = -(D - 0.5 * b);
    S = L.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: A
      }, {
        type: "elem",
        elem: h,
        shift: k
      }, {
        type: "elem",
        elem: u,
        shift: -m
      }]
    }, t);
  } else {
    var I = m - u.depth - (c.height - A);
    I < T && (m += 0.5 * (T - I), A += 0.5 * (T - I)), S = L.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: A
      }, {
        type: "elem",
        elem: u,
        shift: -m
      }]
    }, t);
  }
  i = t.havingStyle(e), S.height *= i.sizeMultiplier / t.sizeMultiplier, S.depth *= i.sizeMultiplier / t.sizeMultiplier;
  var M;
  e.size === he.DISPLAY.size ? M = t.fontMetrics().delim1 : e.size === he.SCRIPTSCRIPT.size ? M = t.havingStyle(he.SCRIPT).fontMetrics().delim2 : M = t.fontMetrics().delim2;
  var O, N;
  return n.leftDelim == null ? O = Rr(t, ["mopen"]) : O = h0.customSizedDelim(n.leftDelim, M, !0, t.havingStyle(e), n.mode, ["mopen"]), n.continued ? N = L.makeSpan([]) : n.rightDelim == null ? N = Rr(t, ["mclose"]) : N = h0.customSizedDelim(n.rightDelim, M, !0, t.havingStyle(e), n.mode, ["mclose"]), L.makeSpan(["mord"].concat(i.sizingClasses(t)), [O, L.makeSpan(["mfrac"], [S]), N], t);
}, ou = (n, t) => {
  var e = new W.MathNode("mfrac", [Re(n.numer, t), Re(n.denom, t)]);
  if (!n.hasBarLine)
    e.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = Ue(n.barSize, t);
    e.setAttribute("linethickness", J(r));
  }
  var a = yl(n.size, t.style);
  if (a.size !== t.style.size) {
    e = new W.MathNode("mstyle", [e]);
    var i = a.size === he.DISPLAY.size ? "true" : "false";
    e.setAttribute("displaystyle", i), e.setAttribute("scriptlevel", "0");
  }
  if (n.leftDelim != null || n.rightDelim != null) {
    var u = [];
    if (n.leftDelim != null) {
      var o = new W.MathNode("mo", [new W.TextNode(n.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), u.push(o);
    }
    if (u.push(e), n.rightDelim != null) {
      var s = new W.MathNode("mo", [new W.TextNode(n.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), u.push(s);
    }
    return Ji(u);
  }
  return e;
};
te({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0], i = t[1], u, o = null, s = null, c = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        u = !0;
        break;
      case "\\\\atopfrac":
        u = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        u = !1, o = "(", s = ")";
        break;
      case "\\\\bracefrac":
        u = !1, o = "\\{", s = "\\}";
        break;
      case "\\\\brackfrac":
        u = !1, o = "[", s = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        c = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        c = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: e.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: u,
      leftDelim: o,
      rightDelim: s,
      size: c,
      barSize: null
    };
  },
  htmlBuilder: su,
  mathmlBuilder: ou
});
te({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0], i = t[1];
    return {
      type: "genfrac",
      mode: e.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
te({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e,
      token: r
    } = n, a;
    switch (e) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: a,
      token: r
    };
  }
});
var ls = ["display", "text", "script", "scriptscript"], cs = function(t) {
  var e = null;
  return t.length > 0 && (e = t, e = e === "." ? null : e), e;
};
te({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(n, t) {
    var {
      parser: e
    } = n, r = t[4], a = t[5], i = ta(t[0]), u = i.type === "atom" && i.family === "open" ? cs(i.text) : null, o = ta(t[1]), s = o.type === "atom" && o.family === "close" ? cs(o.text) : null, c = xe(t[2], "size"), h, b = null;
    c.isBlank ? h = !0 : (b = c.value, h = b.number > 0);
    var d = "auto", m = t[3];
    if (m.type === "ordgroup") {
      if (m.body.length > 0) {
        var T = xe(m.body[0], "textord");
        d = ls[Number(T.text)];
      }
    } else
      m = xe(m, "textord"), d = ls[Number(m.text)];
    return {
      type: "genfrac",
      mode: e.mode,
      numer: r,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: b,
      leftDelim: u,
      rightDelim: s,
      size: d
    };
  },
  htmlBuilder: su,
  mathmlBuilder: ou
});
te({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r,
      token: a
    } = n;
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: "\\\\abovefrac",
      size: xe(t[0], "size").value,
      token: a
    };
  }
});
te({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0], i = nf(xe(t[1], "infix").size), u = t[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: e.mode,
      numer: a,
      denom: u,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: su,
  mathmlBuilder: ou
});
var wl = (n, t) => {
  var e = t.style, r, a;
  n.type === "supsub" ? (r = n.sup ? Ee(n.sup, t.havingStyle(e.sup()), t) : Ee(n.sub, t.havingStyle(e.sub()), t), a = xe(n.base, "horizBrace")) : a = xe(n, "horizBrace");
  var i = Ee(a.base, t.havingBaseStyle(he.DISPLAY)), u = g0.svgSpan(a, t), o;
  if (a.isOver ? (o = L.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: u
    }]
  }, t), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = L.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + u.height,
    children: [{
      type: "elem",
      elem: u
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, t), o.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var s = L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], t);
    a.isOver ? o = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, t) : o = L.makeVList({
      positionType: "bottom",
      positionData: s.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: s
      }]
    }, t);
  }
  return L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], t);
}, Cd = (n, t) => {
  var e = g0.mathMLnode(n.label);
  return new W.MathNode(n.isOver ? "mover" : "munder", [Re(n.base, t), e]);
};
te({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n;
    return {
      type: "horizBrace",
      mode: e.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: t[0]
    };
  },
  htmlBuilder: wl,
  mathmlBuilder: Cd
});
te({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = t[1], a = xe(t[0], "url").url;
    return e.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: e.mode,
      href: a,
      body: Ge(r)
    } : e.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, t) => {
    var e = Ye(n.body, t, !1);
    return L.makeAnchor(n.href, [], e, t);
  },
  mathmlBuilder: (n, t) => {
    var e = N0(n.body, t);
    return e instanceof Lt || (e = new Lt("mrow", [e])), e.setAttribute("href", n.href), e;
  }
});
te({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = xe(t[0], "url").url;
    if (!e.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return e.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < r.length; i++) {
      var u = r[i];
      u === "~" && (u = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: u
      });
    }
    var o = {
      type: "text",
      mode: e.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: e.mode,
      href: r,
      body: Ge(o)
    };
  }
});
te({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "hbox",
      mode: e.mode,
      body: Ge(t[0])
    };
  },
  htmlBuilder(n, t) {
    var e = Ye(n.body, t, !1);
    return L.makeFragment(e);
  },
  mathmlBuilder(n, t) {
    return new W.MathNode("mrow", xt(n.body, t));
  }
});
te({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r,
      token: a
    } = n, i = xe(t[0], "raw").string, u = t[1];
    e.settings.strict && e.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, s = {};
    switch (r) {
      case "\\htmlClass":
        s.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        s.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        s.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var c = i.split(","), h = 0; h < c.length; h++) {
          var b = c[h].split("=");
          if (b.length !== 2)
            throw new Y("Error parsing key-value for \\htmlData");
          s["data-" + b[0].trim()] = b[1].trim();
        }
        o = {
          command: "\\htmlData",
          attributes: s
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return e.settings.isTrusted(o) ? {
      type: "html",
      mode: e.mode,
      attributes: s,
      body: Ge(u)
    } : e.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, t) => {
    var e = Ye(n.body, t, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = L.makeSpan(r, e, t);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, t) => N0(n.body, t)
});
te({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n;
    return {
      type: "htmlmathml",
      mode: e.mode,
      html: Ge(t[0]),
      mathml: Ge(t[1])
    };
  },
  htmlBuilder: (n, t) => {
    var e = Ye(n.html, t, !1);
    return L.makeFragment(e);
  },
  mathmlBuilder: (n, t) => N0(n.mathml, t)
});
var Ga = function(t) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
    return {
      number: +t,
      unit: "bp"
    };
  var e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
  if (!e)
    throw new Y("Invalid size: '" + t + "' in \\includegraphics");
  var r = {
    number: +(e[1] + e[2]),
    // sign + magnitude, cast to number
    unit: e[3]
  };
  if (!Po(r))
    throw new Y("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
te({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (n, t, e) => {
    var {
      parser: r
    } = n, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, u = {
      number: 0,
      unit: "em"
    }, o = "";
    if (e[0])
      for (var s = xe(e[0], "raw").string, c = s.split(","), h = 0; h < c.length; h++) {
        var b = c[h].split("=");
        if (b.length === 2) {
          var d = b[1].trim();
          switch (b[0].trim()) {
            case "alt":
              o = d;
              break;
            case "width":
              a = Ga(d);
              break;
            case "height":
              i = Ga(d);
              break;
            case "totalheight":
              u = Ga(d);
              break;
            default:
              throw new Y("Invalid key: '" + b[0] + "' in \\includegraphics.");
          }
        }
      }
    var m = xe(t[0], "url").url;
    return o === "" && (o = m, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: m
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: o,
      width: a,
      height: i,
      totalheight: u,
      src: m
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (n, t) => {
    var e = Ue(n.height, t), r = 0;
    n.totalheight.number > 0 && (r = Ue(n.totalheight, t) - e);
    var a = 0;
    n.width.number > 0 && (a = Ue(n.width, t));
    var i = {
      height: J(e + r)
    };
    a > 0 && (i.width = J(a)), r > 0 && (i.verticalAlign = J(-r));
    var u = new Cf(n.src, n.alt, i);
    return u.height = e, u.depth = r, u;
  },
  mathmlBuilder: (n, t) => {
    var e = new W.MathNode("mglyph", []);
    e.setAttribute("alt", n.alt);
    var r = Ue(n.height, t), a = 0;
    if (n.totalheight.number > 0 && (a = Ue(n.totalheight, t) - r, e.setAttribute("valign", J(-a))), e.setAttribute("height", J(r + a)), n.width.number > 0) {
      var i = Ue(n.width, t);
      e.setAttribute("width", J(i));
    }
    return e.setAttribute("src", n.src), e;
  }
});
te({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n, a = xe(t[0], "size");
    if (e.settings.strict) {
      var i = r[1] === "m", u = a.value.unit === "mu";
      i ? (u || e.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + a.value.unit + " units")), e.mode !== "math" && e.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : u && e.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: e.mode,
      dimension: a.value
    };
  },
  htmlBuilder(n, t) {
    return L.makeGlue(n.dimension, t);
  },
  mathmlBuilder(n, t) {
    var e = Ue(n.dimension, t);
    return new W.SpaceNode(e);
  }
});
te({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    return {
      type: "lap",
      mode: e.mode,
      alignment: r.slice(5),
      body: a
    };
  },
  htmlBuilder: (n, t) => {
    var e;
    n.alignment === "clap" ? (e = L.makeSpan([], [Ee(n.body, t)]), e = L.makeSpan(["inner"], [e], t)) : e = L.makeSpan(["inner"], [Ee(n.body, t)]);
    var r = L.makeSpan(["fix"], []), a = L.makeSpan([n.alignment], [e, r], t), i = L.makeSpan(["strut"]);
    return i.style.height = J(a.height + a.depth), a.depth && (i.style.verticalAlign = J(-a.depth)), a.children.unshift(i), a = L.makeSpan(["thinbox"], [a], t), L.makeSpan(["mord", "vbox"], [a], t);
  },
  mathmlBuilder: (n, t) => {
    var e = new W.MathNode("mpadded", [Re(n.body, t)]);
    if (n.alignment !== "rlap") {
      var r = n.alignment === "llap" ? "-1" : "-0.5";
      e.setAttribute("lspace", r + "width");
    }
    return e.setAttribute("width", "0px"), e;
  }
});
te({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, t) {
    var {
      funcName: e,
      parser: r
    } = n, a = r.mode;
    r.switchMode("math");
    var i = e === "\\(" ? "\\)" : "$", u = r.parseExpression(!1, i);
    return r.expect(i), r.switchMode(a), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: u
    };
  }
});
te({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, t) {
    throw new Y("Mismatched " + n.funcName);
  }
});
var fs = (n, t) => {
  switch (t.style.size) {
    case he.DISPLAY.size:
      return n.display;
    case he.TEXT.size:
      return n.text;
    case he.SCRIPT.size:
      return n.script;
    case he.SCRIPTSCRIPT.size:
      return n.scriptscript;
    default:
      return n.text;
  }
};
te({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n;
    return {
      type: "mathchoice",
      mode: e.mode,
      display: Ge(t[0]),
      text: Ge(t[1]),
      script: Ge(t[2]),
      scriptscript: Ge(t[3])
    };
  },
  htmlBuilder: (n, t) => {
    var e = fs(n, t), r = Ye(e, t, !1);
    return L.makeFragment(r);
  },
  mathmlBuilder: (n, t) => {
    var e = fs(n, t);
    return N0(e, t);
  }
});
var xl = (n, t, e, r, a, i, u) => {
  n = L.makeSpan([], [n]);
  var o = e && ce.isCharacterBox(e), s, c;
  if (t) {
    var h = Ee(t, r.havingStyle(a.sup()), r);
    c = {
      elem: h,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (e) {
    var b = Ee(e, r.havingStyle(a.sub()), r);
    s = {
      elem: b,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - b.height)
    };
  }
  var d;
  if (c && s) {
    var m = r.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + n.depth + u;
    d = L.makeVList({
      positionType: "bottom",
      positionData: m,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: J(-i)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: J(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (s) {
    var T = n.height - u;
    d = L.makeVList({
      positionType: "top",
      positionData: T,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: J(-i)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: n
      }]
    }, r);
  } else if (c) {
    var A = n.depth + u;
    d = L.makeVList({
      positionType: "bottom",
      positionData: A,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: J(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return n;
  var S = [d];
  if (s && i !== 0 && !o) {
    var I = L.makeSpan(["mspace"], [], r);
    I.style.marginRight = J(i), S.unshift(I);
  }
  return L.makeSpan(["mop", "op-limits"], S, r);
}, Dl = ["\\smallint"], dr = (n, t) => {
  var e, r, a = !1, i;
  n.type === "supsub" ? (e = n.sup, r = n.sub, i = xe(n.base, "op"), a = !0) : i = xe(n, "op");
  var u = t.style, o = !1;
  u.size === he.DISPLAY.size && i.symbol && !ce.contains(Dl, i.name) && (o = !0);
  var s;
  if (i.symbol) {
    var c = o ? "Size2-Regular" : "Size1-Regular", h = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (h = i.name.slice(1), i.name = h === "oiint" ? "\\iint" : "\\iiint"), s = L.makeSymbol(i.name, c, "math", t, ["mop", "op-symbol", o ? "large-op" : "small-op"]), h.length > 0) {
      var b = s.italic, d = L.staticSvg(h + "Size" + (o ? "2" : "1"), t);
      s = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: 0
        }, {
          type: "elem",
          elem: d,
          shift: o ? 0.08 : 0
        }]
      }, t), i.name = "\\" + h, s.classes.unshift("mop"), s.italic = b;
    }
  } else if (i.body) {
    var m = Ye(i.body, t, !0);
    m.length === 1 && m[0] instanceof Pt ? (s = m[0], s.classes[0] = "mop") : s = L.makeSpan(["mop"], m, t);
  } else {
    for (var T = [], A = 1; A < i.name.length; A++)
      T.push(L.mathsym(i.name[A], i.mode, t));
    s = L.makeSpan(["mop"], T, t);
  }
  var S = 0, I = 0;
  return (s instanceof Pt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (S = (s.height - s.depth) / 2 - t.fontMetrics().axisHeight, I = s.italic), a ? xl(s, e, r, t, u, I, S) : (S && (s.style.position = "relative", s.style.top = J(S)), s);
}, Xr = (n, t) => {
  var e;
  if (n.symbol)
    e = new Lt("mo", [qt(n.name, n.mode)]), ce.contains(Dl, n.name) && e.setAttribute("largeop", "false");
  else if (n.body)
    e = new Lt("mo", xt(n.body, t));
  else {
    e = new Lt("mi", [new _r(n.name.slice(1))]);
    var r = new Lt("mo", [qt("⁡", "text")]);
    n.parentIsSupSub ? e = new Lt("mrow", [e, r]) : e = Zo([e, r]);
  }
  return e;
}, Md = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
te({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = r;
    return a.length === 1 && (a = Md[a]), {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: dr,
  mathmlBuilder: Xr
});
te({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = t[0];
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: Ge(r)
    };
  },
  htmlBuilder: dr,
  mathmlBuilder: Xr
});
var Fd = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
te({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n;
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: e
    };
  },
  htmlBuilder: dr,
  mathmlBuilder: Xr
});
te({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n;
    return {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: e
    };
  },
  htmlBuilder: dr,
  mathmlBuilder: Xr
});
te({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: t,
      funcName: e
    } = n, r = e;
    return r.length === 1 && (r = Fd[r]), {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: dr,
  mathmlBuilder: Xr
});
var Al = (n, t) => {
  var e, r, a = !1, i;
  n.type === "supsub" ? (e = n.sup, r = n.sub, i = xe(n.base, "operatorname"), a = !0) : i = xe(n, "operatorname");
  var u;
  if (i.body.length > 0) {
    for (var o = i.body.map((b) => {
      var d = b.text;
      return typeof d == "string" ? {
        type: "textord",
        mode: b.mode,
        text: d
      } : b;
    }), s = Ye(o, t.withFont("mathrm"), !0), c = 0; c < s.length; c++) {
      var h = s[c];
      h instanceof Pt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    u = L.makeSpan(["mop"], s, t);
  } else
    u = L.makeSpan(["mop"], [], t);
  return a ? xl(u, e, r, t, t.style, 0, 0) : u;
}, _d = (n, t) => {
  for (var e = xt(n.body, t.withFont("mathrm")), r = !0, a = 0; a < e.length; a++) {
    var i = e[a];
    if (!(i instanceof W.SpaceNode)) if (i instanceof W.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var u = i.children[0];
          i.children.length === 1 && u instanceof W.TextNode ? u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var o = e.map((h) => h.toText()).join("");
    e = [new W.TextNode(o)];
  }
  var s = new W.MathNode("mi", e);
  s.setAttribute("mathvariant", "normal");
  var c = new W.MathNode("mo", [qt("⁡", "text")]);
  return n.parentIsSupSub ? new W.MathNode("mrow", [s, c]) : W.newDocumentFragment([s, c]);
};
te({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (n, t) => {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    return {
      type: "operatorname",
      mode: e.mode,
      body: Ge(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Al,
  mathmlBuilder: _d
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
W0({
  type: "ordgroup",
  htmlBuilder(n, t) {
    return n.semisimple ? L.makeFragment(Ye(n.body, t, !1)) : L.makeSpan(["mord"], Ye(n.body, t, !0), t);
  },
  mathmlBuilder(n, t) {
    return N0(n.body, t, !0);
  }
});
te({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(n, t) {
    var {
      parser: e
    } = n, r = t[0];
    return {
      type: "overline",
      mode: e.mode,
      body: r
    };
  },
  htmlBuilder(n, t) {
    var e = Ee(n.body, t.havingCrampedStyle()), r = L.makeLineSpan("overline-line", t), a = t.fontMetrics().defaultRuleThickness, i = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: e
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: a
      }]
    }, t);
    return L.makeSpan(["mord", "overline"], [i], t);
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mo", [new W.TextNode("‾")]);
    e.setAttribute("stretchy", "true");
    var r = new W.MathNode("mover", [Re(n.body, t), e]);
    return r.setAttribute("accent", "true"), r;
  }
});
te({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = t[0];
    return {
      type: "phantom",
      mode: e.mode,
      body: Ge(r)
    };
  },
  htmlBuilder: (n, t) => {
    var e = Ye(n.body, t.withPhantom(), !1);
    return L.makeFragment(e);
  },
  mathmlBuilder: (n, t) => {
    var e = xt(n.body, t);
    return new W.MathNode("mphantom", e);
  }
});
te({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = t[0];
    return {
      type: "hphantom",
      mode: e.mode,
      body: r
    };
  },
  htmlBuilder: (n, t) => {
    var e = L.makeSpan([], [Ee(n.body, t.withPhantom())]);
    if (e.height = 0, e.depth = 0, e.children)
      for (var r = 0; r < e.children.length; r++)
        e.children[r].height = 0, e.children[r].depth = 0;
    return e = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: e
      }]
    }, t), L.makeSpan(["mord"], [e], t);
  },
  mathmlBuilder: (n, t) => {
    var e = xt(Ge(n.body), t), r = new W.MathNode("mphantom", e), a = new W.MathNode("mpadded", [r]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
te({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      parser: e
    } = n, r = t[0];
    return {
      type: "vphantom",
      mode: e.mode,
      body: r
    };
  },
  htmlBuilder: (n, t) => {
    var e = L.makeSpan(["inner"], [Ee(n.body, t.withPhantom())]), r = L.makeSpan(["fix"], []);
    return L.makeSpan(["mord", "rlap"], [e, r], t);
  },
  mathmlBuilder: (n, t) => {
    var e = xt(Ge(n.body), t), r = new W.MathNode("mphantom", e), a = new W.MathNode("mpadded", [r]);
    return a.setAttribute("width", "0px"), a;
  }
});
te({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(n, t) {
    var {
      parser: e
    } = n, r = xe(t[0], "size").value, a = t[1];
    return {
      type: "raisebox",
      mode: e.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, t) {
    var e = Ee(n.body, t), r = Ue(n.dy, t);
    return L.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: e
      }]
    }, t);
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mpadded", [Re(n.body, t)]), r = n.dy.number + n.dy.unit;
    return e.setAttribute("voffset", r), e;
  }
});
te({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: t
    } = n;
    return {
      type: "internal",
      mode: t.mode
    };
  }
});
te({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(n, t, e) {
    var {
      parser: r
    } = n, a = e[0], i = xe(t[0], "size"), u = xe(t[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && xe(a, "size").value,
      width: i.value,
      height: u.value
    };
  },
  htmlBuilder(n, t) {
    var e = L.makeSpan(["mord", "rule"], [], t), r = Ue(n.width, t), a = Ue(n.height, t), i = n.shift ? Ue(n.shift, t) : 0;
    return e.style.borderRightWidth = J(r), e.style.borderTopWidth = J(a), e.style.bottom = J(i), e.width = r, e.height = a + i, e.depth = -i, e.maxFontSize = a * 1.125 * t.sizeMultiplier, e;
  },
  mathmlBuilder(n, t) {
    var e = Ue(n.width, t), r = Ue(n.height, t), a = n.shift ? Ue(n.shift, t) : 0, i = t.color && t.getColor() || "black", u = new W.MathNode("mspace");
    u.setAttribute("mathbackground", i), u.setAttribute("width", J(e)), u.setAttribute("height", J(r));
    var o = new W.MathNode("mpadded", [u]);
    return a >= 0 ? o.setAttribute("height", J(a)) : (o.setAttribute("height", J(a)), o.setAttribute("depth", J(-a))), o.setAttribute("voffset", J(a)), o;
  }
});
function Sl(n, t, e) {
  for (var r = Ye(n, t, !1), a = t.sizeMultiplier / e.sizeMultiplier, i = 0; i < r.length; i++) {
    var u = r[i].classes.indexOf("sizing");
    u < 0 ? Array.prototype.push.apply(r[i].classes, t.sizingClasses(e)) : r[i].classes[u + 1] === "reset-size" + t.size && (r[i].classes[u + 1] = "reset-size" + e.size), r[i].height *= a, r[i].depth *= a;
  }
  return L.makeFragment(r);
}
var ds = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Nd = (n, t) => {
  var e = t.havingSize(n.size);
  return Sl(n.body, e, t);
};
te({
  type: "sizing",
  names: ds,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, t) => {
    var {
      breakOnTokenText: e,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!1, e);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: ds.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: Nd,
  mathmlBuilder: (n, t) => {
    var e = t.havingSize(n.size), r = xt(n.body, e), a = new W.MathNode("mstyle", r);
    return a.setAttribute("mathsize", J(e.sizeMultiplier)), a;
  }
});
te({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (n, t, e) => {
    var {
      parser: r
    } = n, a = !1, i = !1, u = e[0] && xe(e[0], "ordgroup");
    if (u)
      for (var o = "", s = 0; s < u.body.length; ++s) {
        var c = u.body[s];
        if (o = c.text, o === "t")
          a = !0;
        else if (o === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var h = t[0];
    return {
      type: "smash",
      mode: r.mode,
      body: h,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (n, t) => {
    var e = L.makeSpan([], [Ee(n.body, t)]);
    if (!n.smashHeight && !n.smashDepth)
      return e;
    if (n.smashHeight && (e.height = 0, e.children))
      for (var r = 0; r < e.children.length; r++)
        e.children[r].height = 0;
    if (n.smashDepth && (e.depth = 0, e.children))
      for (var a = 0; a < e.children.length; a++)
        e.children[a].depth = 0;
    var i = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: e
      }]
    }, t);
    return L.makeSpan(["mord"], [i], t);
  },
  mathmlBuilder: (n, t) => {
    var e = new W.MathNode("mpadded", [Re(n.body, t)]);
    return n.smashHeight && e.setAttribute("height", "0px"), n.smashDepth && e.setAttribute("depth", "0px"), e;
  }
});
te({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, t, e) {
    var {
      parser: r
    } = n, a = e[0], i = t[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(n, t) {
    var e = Ee(n.body, t.havingCrampedStyle());
    e.height === 0 && (e.height = t.fontMetrics().xHeight), e = L.wrapFragment(e, t);
    var r = t.fontMetrics(), a = r.defaultRuleThickness, i = a;
    t.style.id < he.TEXT.id && (i = t.fontMetrics().xHeight);
    var u = a + i / 4, o = e.height + e.depth + u + a, {
      span: s,
      ruleWidth: c,
      advanceWidth: h
    } = h0.sqrtImage(o, t), b = s.height - c;
    b > e.height + e.depth + u && (u = (u + b - e.height - e.depth) / 2);
    var d = s.height - e.height - u - c;
    e.style.paddingLeft = J(h);
    var m = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: e,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(e.height + d)
      }, {
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: c
      }]
    }, t);
    if (n.index) {
      var T = t.havingStyle(he.SCRIPTSCRIPT), A = Ee(n.index, T, t), S = 0.6 * (m.height - m.depth), I = L.makeVList({
        positionType: "shift",
        positionData: -S,
        children: [{
          type: "elem",
          elem: A
        }]
      }, t), D = L.makeSpan(["root"], [I]);
      return L.makeSpan(["mord", "sqrt"], [D, m], t);
    } else
      return L.makeSpan(["mord", "sqrt"], [m], t);
  },
  mathmlBuilder(n, t) {
    var {
      body: e,
      index: r
    } = n;
    return r ? new W.MathNode("mroot", [Re(e, t), Re(r, t)]) : new W.MathNode("msqrt", [Re(e, t)]);
  }
});
var hs = {
  display: he.DISPLAY,
  text: he.TEXT,
  script: he.SCRIPT,
  scriptscript: he.SCRIPTSCRIPT
};
te({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n, t) {
    var {
      breakOnTokenText: e,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!0, e), u = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: u,
      body: i
    };
  },
  htmlBuilder(n, t) {
    var e = hs[n.style], r = t.havingStyle(e).withFont("");
    return Sl(n.body, r, t);
  },
  mathmlBuilder(n, t) {
    var e = hs[n.style], r = t.havingStyle(e), a = xt(n.body, r), i = new W.MathNode("mstyle", a), u = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = u[n.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var Id = function(t, e) {
  var r = t.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (e.style.size === he.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? dr : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (e.style.size === he.DISPLAY.size || r.limits);
      return i ? Al : null;
    } else {
      if (r.type === "accent")
        return ce.isCharacterBox(r.base) ? tu : null;
      if (r.type === "horizBrace") {
        var u = !t.sub;
        return u === r.isOver ? wl : null;
      } else
        return null;
    }
  else return null;
};
W0({
  type: "supsub",
  htmlBuilder(n, t) {
    var e = Id(n, t);
    if (e)
      return e(n, t);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, u = Ee(r, t), o, s, c = t.fontMetrics(), h = 0, b = 0, d = r && ce.isCharacterBox(r);
    if (a) {
      var m = t.havingStyle(t.style.sup());
      o = Ee(a, m, t), d || (h = u.height - m.fontMetrics().supDrop * m.sizeMultiplier / t.sizeMultiplier);
    }
    if (i) {
      var T = t.havingStyle(t.style.sub());
      s = Ee(i, T, t), d || (b = u.depth + T.fontMetrics().subDrop * T.sizeMultiplier / t.sizeMultiplier);
    }
    var A;
    t.style === he.DISPLAY ? A = c.sup1 : t.style.cramped ? A = c.sup3 : A = c.sup2;
    var S = t.sizeMultiplier, I = J(0.5 / c.ptPerEm / S), D = null;
    if (s) {
      var k = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (u instanceof Pt || k) && (D = J(-u.italic));
    }
    var M;
    if (o && s) {
      h = Math.max(h, A, o.depth + 0.25 * c.xHeight), b = Math.max(b, c.sub2);
      var O = c.defaultRuleThickness, N = 4 * O;
      if (h - o.depth - (s.height - b) < N) {
        b = N - (h - o.depth) + s.height;
        var R = 0.8 * c.xHeight - (h - o.depth);
        R > 0 && (h += R, b -= R);
      }
      var j = [{
        type: "elem",
        elem: s,
        shift: b,
        marginRight: I,
        marginLeft: D
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: I
      }];
      M = L.makeVList({
        positionType: "individualShift",
        children: j
      }, t);
    } else if (s) {
      b = Math.max(b, c.sub1, s.height - 0.8 * c.xHeight);
      var q = [{
        type: "elem",
        elem: s,
        marginLeft: D,
        marginRight: I
      }];
      M = L.makeVList({
        positionType: "shift",
        positionData: b,
        children: q
      }, t);
    } else if (o)
      h = Math.max(h, A, o.depth + 0.25 * c.xHeight), M = L.makeVList({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: I
        }]
      }, t);
    else
      throw new Error("supsub must have either sup or sub.");
    var H = vi(u, "right") || "mord";
    return L.makeSpan([H], [u, L.makeSpan(["msupsub"], [M])], t);
  },
  mathmlBuilder(n, t) {
    var e = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (e = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [Re(n.base, t)];
    n.sub && i.push(Re(n.sub, t)), n.sup && i.push(Re(n.sup, t));
    var u;
    if (e)
      u = r ? "mover" : "munder";
    else if (n.sub)
      if (n.sup) {
        var c = n.base;
        c && c.type === "op" && c.limits && t.style === he.DISPLAY || c && c.type === "operatorname" && c.alwaysHandleSupSub && (t.style === he.DISPLAY || c.limits) ? u = "munderover" : u = "msubsup";
      } else {
        var s = n.base;
        s && s.type === "op" && s.limits && (t.style === he.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || t.style === he.DISPLAY) ? u = "munder" : u = "msub";
      }
    else {
      var o = n.base;
      o && o.type === "op" && o.limits && (t.style === he.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || t.style === he.DISPLAY) ? u = "mover" : u = "msup";
    }
    return new W.MathNode(u, i);
  }
});
W0({
  type: "atom",
  htmlBuilder(n, t) {
    return L.mathsym(n.text, n.mode, t, ["m" + n.family]);
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mo", [qt(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Qi(n, t);
      r === "bold-italic" && e.setAttribute("mathvariant", r);
    } else n.family === "punct" ? e.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && e.setAttribute("stretchy", "false");
    return e;
  }
});
var kl = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
W0({
  type: "mathord",
  htmlBuilder(n, t) {
    return L.makeOrd(n, t, "mathord");
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mi", [qt(n.text, n.mode, t)]), r = Qi(n, t) || "italic";
    return r !== kl[e.type] && e.setAttribute("mathvariant", r), e;
  }
});
W0({
  type: "textord",
  htmlBuilder(n, t) {
    return L.makeOrd(n, t, "textord");
  },
  mathmlBuilder(n, t) {
    var e = qt(n.text, n.mode, t), r = Qi(n, t) || "normal", a;
    return n.mode === "text" ? a = new W.MathNode("mtext", [e]) : /[0-9]/.test(n.text) ? a = new W.MathNode("mn", [e]) : n.text === "\\prime" ? a = new W.MathNode("mo", [e]) : a = new W.MathNode("mi", [e]), r !== kl[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var Va = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, $a = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
W0({
  type: "spacing",
  htmlBuilder(n, t) {
    if ($a.hasOwnProperty(n.text)) {
      var e = $a[n.text].className || "";
      if (n.mode === "text") {
        var r = L.makeOrd(n, t, "textord");
        return r.classes.push(e), r;
      } else
        return L.makeSpan(["mspace", e], [L.mathsym(n.text, n.mode, t)], t);
    } else {
      if (Va.hasOwnProperty(n.text))
        return L.makeSpan(["mspace", Va[n.text]], [], t);
      throw new Y('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, t) {
    var e;
    if ($a.hasOwnProperty(n.text))
      e = new W.MathNode("mtext", [new W.TextNode(" ")]);
    else {
      if (Va.hasOwnProperty(n.text))
        return new W.MathNode("mspace");
      throw new Y('Unknown type of space "' + n.text + '"');
    }
    return e;
  }
});
var ms = () => {
  var n = new W.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
W0({
  type: "tag",
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mtable", [new W.MathNode("mtr", [ms(), new W.MathNode("mtd", [N0(n.body, t)]), ms(), new W.MathNode("mtd", [N0(n.tag, t)])])]);
    return e.setAttribute("width", "100%"), e;
  }
});
var ps = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, gs = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Od = {
  "\\textit": "textit",
  "\\textup": "textup"
}, bs = (n, t) => {
  var e = n.font;
  if (e) {
    if (ps[e])
      return t.withTextFontFamily(ps[e]);
    if (gs[e])
      return t.withTextFontWeight(gs[e]);
    if (e === "\\emph")
      return t.fontShape === "textit" ? t.withTextFontShape("textup") : t.withTextFontShape("textit");
  } else return t;
  return t.withTextFontShape(Od[e]);
};
te({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(n, t) {
    var {
      parser: e,
      funcName: r
    } = n, a = t[0];
    return {
      type: "text",
      mode: e.mode,
      body: Ge(a),
      font: r
    };
  },
  htmlBuilder(n, t) {
    var e = bs(n, t), r = Ye(n.body, e, !0);
    return L.makeSpan(["mord", "text"], r, e);
  },
  mathmlBuilder(n, t) {
    var e = bs(n, t);
    return N0(n.body, e);
  }
});
te({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "underline",
      mode: e.mode,
      body: t[0]
    };
  },
  htmlBuilder(n, t) {
    var e = Ee(n.body, t), r = L.makeLineSpan("underline-line", t), a = t.fontMetrics().defaultRuleThickness, i = L.makeVList({
      positionType: "top",
      positionData: e.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: e
      }]
    }, t);
    return L.makeSpan(["mord", "underline"], [i], t);
  },
  mathmlBuilder(n, t) {
    var e = new W.MathNode("mo", [new W.TextNode("‾")]);
    e.setAttribute("stretchy", "true");
    var r = new W.MathNode("munder", [Re(n.body, t), e]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
te({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(n, t) {
    var {
      parser: e
    } = n;
    return {
      type: "vcenter",
      mode: e.mode,
      body: t[0]
    };
  },
  htmlBuilder(n, t) {
    var e = Ee(n.body, t), r = t.fontMetrics().axisHeight, a = 0.5 * (e.height - r - (e.depth + r));
    return L.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: e
      }]
    }, t);
  },
  mathmlBuilder(n, t) {
    return new W.MathNode("mpadded", [Re(n.body, t)], ["vcenter"]);
  }
});
te({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n, t, e) {
    throw new Y("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, t) {
    for (var e = vs(n), r = [], a = t.havingStyle(t.style.text()), i = 0; i < e.length; i++) {
      var u = e[i];
      u === "~" && (u = "\\textasciitilde"), r.push(L.makeSymbol(u, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return L.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), L.tryCombineChars(r), a);
  },
  mathmlBuilder(n, t) {
    var e = new W.TextNode(vs(n)), r = new W.MathNode("mtext", [e]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var vs = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), C0 = Yo, El = `[ \r
	]`, Bd = "\\\\[a-zA-Z@]+", Ld = "\\\\[^\uD800-\uDFFF]", Rd = "(" + Bd + ")" + El + "*", zd = `\\\\(
|[ \r	]+
?)[ \r	]*`, Di = "[̀-ͯ]", Pd = new RegExp(Di + "+$"), qd = "(" + El + "+)|" + // whitespace
(zd + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Di + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Di + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Rd) + // \macroName + spaces
("|" + Ld + ")");
class ys {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(t, e) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = t, this.settings = e, this.tokenRegex = new RegExp(qd, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(t, e) {
    this.catcodes[t] = e;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var t = this.input, e = this.tokenRegex.lastIndex;
    if (e === t.length)
      return new zt("EOF", new Tt(this, e, e));
    var r = this.tokenRegex.exec(t);
    if (r === null || r.index !== e)
      throw new Y("Unexpected character: '" + t[e] + "'", new zt(t[e], new Tt(this, e, e + 1)));
    var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = t.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = t.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new zt(a, new Tt(this, e, this.tokenRegex.lastIndex));
  }
}
class Hd {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(t, e) {
    t === void 0 && (t = {}), e === void 0 && (e = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = e, this.builtins = t, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new Y("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var t = this.undefStack.pop();
    for (var e in t)
      t.hasOwnProperty(e) && (t[e] == null ? delete this.current[e] : this.current[e] = t[e]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(t) {
    return this.current.hasOwnProperty(t) || this.builtins.hasOwnProperty(t);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(t) {
    return this.current.hasOwnProperty(t) ? this.current[t] : this.builtins[t];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(t, e, r) {
    if (r === void 0 && (r = !1), r) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][t];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t] = e);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(t) && (i[t] = this.current[t]);
    }
    e == null ? delete this.current[t] : this.current[t] = e;
  }
}
var Ud = pl;
g("\\noexpand", function(n) {
  var t = n.popToken();
  return n.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
    tokens: [t],
    numArgs: 0
  };
});
g("\\expandafter", function(n) {
  var t = n.popToken();
  return n.expandOnce(!0), {
    tokens: [t],
    numArgs: 0
  };
});
g("\\@firstoftwo", function(n) {
  var t = n.consumeArgs(2);
  return {
    tokens: t[0],
    numArgs: 0
  };
});
g("\\@secondoftwo", function(n) {
  var t = n.consumeArgs(2);
  return {
    tokens: t[1],
    numArgs: 0
  };
});
g("\\@ifnextchar", function(n) {
  var t = n.consumeArgs(3);
  n.consumeSpaces();
  var e = n.future();
  return t[0].length === 1 && t[0][0].text === e.text ? {
    tokens: t[1],
    numArgs: 0
  } : {
    tokens: t[2],
    numArgs: 0
  };
});
g("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
g("\\TextOrMath", function(n) {
  var t = n.consumeArgs(2);
  return n.mode === "text" ? {
    tokens: t[0],
    numArgs: 0
  } : {
    tokens: t[1],
    numArgs: 0
  };
});
var ws = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
g("\\char", function(n) {
  var t = n.popToken(), e, r = "";
  if (t.text === "'")
    e = 8, t = n.popToken();
  else if (t.text === '"')
    e = 16, t = n.popToken();
  else if (t.text === "`")
    if (t = n.popToken(), t.text[0] === "\\")
      r = t.text.charCodeAt(1);
    else {
      if (t.text === "EOF")
        throw new Y("\\char` missing argument");
      r = t.text.charCodeAt(0);
    }
  else
    e = 10;
  if (e) {
    if (r = ws[t.text], r == null || r >= e)
      throw new Y("Invalid base-" + e + " digit " + t.text);
    for (var a; (a = ws[n.future().text]) != null && a < e; )
      r *= e, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var lu = (n, t, e) => {
  var r = n.consumeArg().tokens;
  if (r.length !== 1)
    throw new Y("\\newcommand's first argument must be a macro name");
  var a = r[0].text, i = n.isDefined(a);
  if (i && !t)
    throw new Y("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !e)
    throw new Y("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var u = 0;
  if (r = n.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var o = "", s = n.expandNextToken(); s.text !== "]" && s.text !== "EOF"; )
      o += s.text, s = n.expandNextToken();
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new Y("Invalid number of arguments: " + o);
    u = parseInt(o), r = n.consumeArg().tokens;
  }
  return n.macros.set(a, {
    tokens: r,
    numArgs: u
  }), "";
};
g("\\newcommand", (n) => lu(n, !1, !0));
g("\\renewcommand", (n) => lu(n, !0, !1));
g("\\providecommand", (n) => lu(n, !0, !0));
g("\\message", (n) => {
  var t = n.consumeArgs(1)[0];
  return console.log(t.reverse().map((e) => e.text).join("")), "";
});
g("\\errmessage", (n) => {
  var t = n.consumeArgs(1)[0];
  return console.error(t.reverse().map((e) => e.text).join("")), "";
});
g("\\show", (n) => {
  var t = n.popToken(), e = t.text;
  return console.log(t, n.macros.get(e), C0[e], ze.math[e], ze.text[e]), "";
});
g("\\bgroup", "{");
g("\\egroup", "}");
g("~", "\\nobreakspace");
g("\\lq", "`");
g("\\rq", "'");
g("\\aa", "\\r a");
g("\\AA", "\\r A");
g("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
g("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
g("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
g("ℬ", "\\mathscr{B}");
g("ℰ", "\\mathscr{E}");
g("ℱ", "\\mathscr{F}");
g("ℋ", "\\mathscr{H}");
g("ℐ", "\\mathscr{I}");
g("ℒ", "\\mathscr{L}");
g("ℳ", "\\mathscr{M}");
g("ℛ", "\\mathscr{R}");
g("ℭ", "\\mathfrak{C}");
g("ℌ", "\\mathfrak{H}");
g("ℨ", "\\mathfrak{Z}");
g("\\Bbbk", "\\Bbb{k}");
g("·", "\\cdotp");
g("\\llap", "\\mathllap{\\textrm{#1}}");
g("\\rlap", "\\mathrlap{\\textrm{#1}}");
g("\\clap", "\\mathclap{\\textrm{#1}}");
g("\\mathstrut", "\\vphantom{(}");
g("\\underbar", "\\underline{\\text{#1}}");
g("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
g("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
g("\\ne", "\\neq");
g("≠", "\\neq");
g("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
g("∉", "\\notin");
g("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
g("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
g("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
g("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
g("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
g("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
g("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
g("⟂", "\\perp");
g("‼", "\\mathclose{!\\mkern-0.8mu!}");
g("∌", "\\notni");
g("⌜", "\\ulcorner");
g("⌝", "\\urcorner");
g("⌞", "\\llcorner");
g("⌟", "\\lrcorner");
g("©", "\\copyright");
g("®", "\\textregistered");
g("️", "\\textregistered");
g("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
g("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
g("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
g("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
g("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
g("⋮", "\\vdots");
g("\\varGamma", "\\mathit{\\Gamma}");
g("\\varDelta", "\\mathit{\\Delta}");
g("\\varTheta", "\\mathit{\\Theta}");
g("\\varLambda", "\\mathit{\\Lambda}");
g("\\varXi", "\\mathit{\\Xi}");
g("\\varPi", "\\mathit{\\Pi}");
g("\\varSigma", "\\mathit{\\Sigma}");
g("\\varUpsilon", "\\mathit{\\Upsilon}");
g("\\varPhi", "\\mathit{\\Phi}");
g("\\varPsi", "\\mathit{\\Psi}");
g("\\varOmega", "\\mathit{\\Omega}");
g("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
g("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
g("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
g("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
g("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
g("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var xs = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
g("\\dots", function(n) {
  var t = "\\dotso", e = n.expandAfterFuture().text;
  return e in xs ? t = xs[e] : (e.slice(0, 4) === "\\not" || e in ze.math && ce.contains(["bin", "rel"], ze.math[e].group)) && (t = "\\dotsb"), t;
});
var cu = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
g("\\dotso", function(n) {
  var t = n.future().text;
  return t in cu ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(n) {
  var t = n.future().text;
  return t in cu && t !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(n) {
  var t = n.future().text;
  return t in cu ? "\\@cdots\\," : "\\@cdots";
});
g("\\dotsb", "\\cdots");
g("\\dotsm", "\\cdots");
g("\\dotsi", "\\!\\cdots");
g("\\dotsx", "\\ldots\\,");
g("\\DOTSI", "\\relax");
g("\\DOTSB", "\\relax");
g("\\DOTSX", "\\relax");
g("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
g("\\,", "\\tmspace+{3mu}{.1667em}");
g("\\thinspace", "\\,");
g("\\>", "\\mskip{4mu}");
g("\\:", "\\tmspace+{4mu}{.2222em}");
g("\\medspace", "\\:");
g("\\;", "\\tmspace+{5mu}{.2777em}");
g("\\thickspace", "\\;");
g("\\!", "\\tmspace-{3mu}{.1667em}");
g("\\negthinspace", "\\!");
g("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
g("\\negthickspace", "\\tmspace-{5mu}{.277em}");
g("\\enspace", "\\kern.5em ");
g("\\enskip", "\\hskip.5em\\relax");
g("\\quad", "\\hskip1em\\relax");
g("\\qquad", "\\hskip2em\\relax");
g("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
g("\\tag@paren", "\\tag@literal{({#1})}");
g("\\tag@literal", (n) => {
  if (n.macros.get("\\df@tag"))
    throw new Y("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
g("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
g("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
g("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
g("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
g("\\newline", "\\\\\\relax");
g("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Tl = J(e0["Main-Regular"][84][1] - 0.7 * e0["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Tl + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Tl + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
g("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
g("\\@hspace", "\\hskip #1\\relax");
g("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
g("\\ordinarycolon", ":");
g("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
g("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
g("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
g("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
g("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
g("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
g("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
g("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
g("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
g("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
g("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
g("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
g("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
g("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
g("∷", "\\dblcolon");
g("∹", "\\eqcolon");
g("≔", "\\coloneqq");
g("≕", "\\eqqcolon");
g("⩴", "\\Coloneqq");
g("\\ratio", "\\vcentcolon");
g("\\coloncolon", "\\dblcolon");
g("\\colonequals", "\\coloneqq");
g("\\coloncolonequals", "\\Coloneqq");
g("\\equalscolon", "\\eqqcolon");
g("\\equalscoloncolon", "\\Eqqcolon");
g("\\colonminus", "\\coloneq");
g("\\coloncolonminus", "\\Coloneq");
g("\\minuscolon", "\\eqcolon");
g("\\minuscoloncolon", "\\Eqcolon");
g("\\coloncolonapprox", "\\Colonapprox");
g("\\coloncolonsim", "\\Colonsim");
g("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
g("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
g("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
g("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
g("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
g("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
g("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
g("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
g("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
g("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
g("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
g("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
g("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
g("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
g("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
g("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
g("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
g("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
g("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
g("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
g("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
g("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
g("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
g("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
g("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
g("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
g("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
g("\\imath", "\\html@mathml{\\@imath}{ı}");
g("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
g("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
g("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
g("⟦", "\\llbracket");
g("⟧", "\\rrbracket");
g("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
g("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
g("⦃", "\\lBrace");
g("⦄", "\\rBrace");
g("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
g("⦵", "\\minuso");
g("\\darr", "\\downarrow");
g("\\dArr", "\\Downarrow");
g("\\Darr", "\\Downarrow");
g("\\lang", "\\langle");
g("\\rang", "\\rangle");
g("\\uarr", "\\uparrow");
g("\\uArr", "\\Uparrow");
g("\\Uarr", "\\Uparrow");
g("\\N", "\\mathbb{N}");
g("\\R", "\\mathbb{R}");
g("\\Z", "\\mathbb{Z}");
g("\\alef", "\\aleph");
g("\\alefsym", "\\aleph");
g("\\Alpha", "\\mathrm{A}");
g("\\Beta", "\\mathrm{B}");
g("\\bull", "\\bullet");
g("\\Chi", "\\mathrm{X}");
g("\\clubs", "\\clubsuit");
g("\\cnums", "\\mathbb{C}");
g("\\Complex", "\\mathbb{C}");
g("\\Dagger", "\\ddagger");
g("\\diamonds", "\\diamondsuit");
g("\\empty", "\\emptyset");
g("\\Epsilon", "\\mathrm{E}");
g("\\Eta", "\\mathrm{H}");
g("\\exist", "\\exists");
g("\\harr", "\\leftrightarrow");
g("\\hArr", "\\Leftrightarrow");
g("\\Harr", "\\Leftrightarrow");
g("\\hearts", "\\heartsuit");
g("\\image", "\\Im");
g("\\infin", "\\infty");
g("\\Iota", "\\mathrm{I}");
g("\\isin", "\\in");
g("\\Kappa", "\\mathrm{K}");
g("\\larr", "\\leftarrow");
g("\\lArr", "\\Leftarrow");
g("\\Larr", "\\Leftarrow");
g("\\lrarr", "\\leftrightarrow");
g("\\lrArr", "\\Leftrightarrow");
g("\\Lrarr", "\\Leftrightarrow");
g("\\Mu", "\\mathrm{M}");
g("\\natnums", "\\mathbb{N}");
g("\\Nu", "\\mathrm{N}");
g("\\Omicron", "\\mathrm{O}");
g("\\plusmn", "\\pm");
g("\\rarr", "\\rightarrow");
g("\\rArr", "\\Rightarrow");
g("\\Rarr", "\\Rightarrow");
g("\\real", "\\Re");
g("\\reals", "\\mathbb{R}");
g("\\Reals", "\\mathbb{R}");
g("\\Rho", "\\mathrm{P}");
g("\\sdot", "\\cdot");
g("\\sect", "\\S");
g("\\spades", "\\spadesuit");
g("\\sub", "\\subset");
g("\\sube", "\\subseteq");
g("\\supe", "\\supseteq");
g("\\Tau", "\\mathrm{T}");
g("\\thetasym", "\\vartheta");
g("\\weierp", "\\wp");
g("\\Zeta", "\\mathrm{Z}");
g("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
g("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
g("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
g("\\bra", "\\mathinner{\\langle{#1}|}");
g("\\ket", "\\mathinner{|{#1}\\rangle}");
g("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
g("\\Bra", "\\left\\langle#1\\right|");
g("\\Ket", "\\left|#1\\right\\rangle");
var Cl = (n) => (t) => {
  var e = t.consumeArg().tokens, r = t.consumeArg().tokens, a = t.consumeArg().tokens, i = t.consumeArg().tokens, u = t.macros.get("|"), o = t.macros.get("\\|");
  t.macros.beginGroup();
  var s = (b) => (d) => {
    n && (d.macros.set("|", u), a.length && d.macros.set("\\|", o));
    var m = b;
    if (!b && a.length) {
      var T = d.future();
      T.text === "|" && (d.popToken(), m = !0);
    }
    return {
      tokens: m ? a : r,
      numArgs: 0
    };
  };
  t.macros.set("|", s(!1)), a.length && t.macros.set("\\|", s(!0));
  var c = t.consumeArg().tokens, h = t.expandTokens([
    ...i,
    ...c,
    ...e
    // reversed
  ]);
  return t.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
g("\\bra@ket", Cl(!1));
g("\\bra@set", Cl(!0));
g("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
g("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
g("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
g("\\angln", "{\\angl n}");
g("\\blue", "\\textcolor{##6495ed}{#1}");
g("\\orange", "\\textcolor{##ffa500}{#1}");
g("\\pink", "\\textcolor{##ff00af}{#1}");
g("\\red", "\\textcolor{##df0030}{#1}");
g("\\green", "\\textcolor{##28ae7b}{#1}");
g("\\gray", "\\textcolor{gray}{#1}");
g("\\purple", "\\textcolor{##9d38bd}{#1}");
g("\\blueA", "\\textcolor{##ccfaff}{#1}");
g("\\blueB", "\\textcolor{##80f6ff}{#1}");
g("\\blueC", "\\textcolor{##63d9ea}{#1}");
g("\\blueD", "\\textcolor{##11accd}{#1}");
g("\\blueE", "\\textcolor{##0c7f99}{#1}");
g("\\tealA", "\\textcolor{##94fff5}{#1}");
g("\\tealB", "\\textcolor{##26edd5}{#1}");
g("\\tealC", "\\textcolor{##01d1c1}{#1}");
g("\\tealD", "\\textcolor{##01a995}{#1}");
g("\\tealE", "\\textcolor{##208170}{#1}");
g("\\greenA", "\\textcolor{##b6ffb0}{#1}");
g("\\greenB", "\\textcolor{##8af281}{#1}");
g("\\greenC", "\\textcolor{##74cf70}{#1}");
g("\\greenD", "\\textcolor{##1fab54}{#1}");
g("\\greenE", "\\textcolor{##0d923f}{#1}");
g("\\goldA", "\\textcolor{##ffd0a9}{#1}");
g("\\goldB", "\\textcolor{##ffbb71}{#1}");
g("\\goldC", "\\textcolor{##ff9c39}{#1}");
g("\\goldD", "\\textcolor{##e07d10}{#1}");
g("\\goldE", "\\textcolor{##a75a05}{#1}");
g("\\redA", "\\textcolor{##fca9a9}{#1}");
g("\\redB", "\\textcolor{##ff8482}{#1}");
g("\\redC", "\\textcolor{##f9685d}{#1}");
g("\\redD", "\\textcolor{##e84d39}{#1}");
g("\\redE", "\\textcolor{##bc2612}{#1}");
g("\\maroonA", "\\textcolor{##ffbde0}{#1}");
g("\\maroonB", "\\textcolor{##ff92c6}{#1}");
g("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
g("\\maroonD", "\\textcolor{##ca337c}{#1}");
g("\\maroonE", "\\textcolor{##9e034e}{#1}");
g("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
g("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
g("\\purpleC", "\\textcolor{##aa87ff}{#1}");
g("\\purpleD", "\\textcolor{##7854ab}{#1}");
g("\\purpleE", "\\textcolor{##543b78}{#1}");
g("\\mintA", "\\textcolor{##f5f9e8}{#1}");
g("\\mintB", "\\textcolor{##edf2df}{#1}");
g("\\mintC", "\\textcolor{##e0e5cc}{#1}");
g("\\grayA", "\\textcolor{##f6f7f7}{#1}");
g("\\grayB", "\\textcolor{##f0f1f2}{#1}");
g("\\grayC", "\\textcolor{##e3e5e6}{#1}");
g("\\grayD", "\\textcolor{##d6d8da}{#1}");
g("\\grayE", "\\textcolor{##babec2}{#1}");
g("\\grayF", "\\textcolor{##888d93}{#1}");
g("\\grayG", "\\textcolor{##626569}{#1}");
g("\\grayH", "\\textcolor{##3b3e40}{#1}");
g("\\grayI", "\\textcolor{##21242c}{#1}");
g("\\kaBlue", "\\textcolor{##314453}{#1}");
g("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Ml = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class jd {
  constructor(t, e, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = e, this.expansionCount = 0, this.feed(t), this.macros = new Hd(Ud, e.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(t) {
    this.lexer = new ys(t, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(t) {
    this.mode = t;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(t) {
    this.stack.push(t);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(t) {
    this.stack.push(...t);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(t) {
    var e, r, a;
    if (t) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      e = this.popToken(), {
        tokens: a,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: e,
        end: r
      } = this.consumeArg());
    return this.pushToken(new zt("EOF", r.loc)), this.pushTokens(a), e.range(r, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var t = this.future();
      if (t.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(t) {
    var e = [], r = t && t.length > 0;
    r || this.consumeSpaces();
    var a = this.future(), i, u = 0, o = 0;
    do {
      if (i = this.popToken(), e.push(i), i.text === "{")
        ++u;
      else if (i.text === "}") {
        if (--u, u === -1)
          throw new Y("Extra }", i);
      } else if (i.text === "EOF")
        throw new Y("Unexpected end of input in a macro argument, expected '" + (t && r ? t[o] : "}") + "'", i);
      if (t && r)
        if ((u === 0 || u === 1 && t[o] === "{") && i.text === t[o]) {
          if (++o, o === t.length) {
            e.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (u !== 0 || r);
    return a.text === "{" && e[e.length - 1].text === "}" && (e.pop(), e.shift()), e.reverse(), {
      tokens: e,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(t, e) {
    if (e) {
      if (e.length !== t + 1)
        throw new Y("The length of delimiters doesn't match the number of args!");
      for (var r = e[0], a = 0; a < r.length; a++) {
        var i = this.popToken();
        if (r[a] !== i.text)
          throw new Y("Use of the macro doesn't match its definition", i);
      }
    }
    for (var u = [], o = 0; o < t; o++)
      u.push(this.consumeArg(e && e[o + 1]).tokens);
    return u;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(t) {
    if (this.expansionCount += t, this.expansionCount > this.settings.maxExpand)
      throw new Y("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(t) {
    var e = this.popToken(), r = e.text, a = e.noexpand ? null : this._getExpansion(r);
    if (a == null || t && a.unexpandable) {
      if (t && a == null && r[0] === "\\" && !this.isDefined(r))
        throw new Y("Undefined control sequence: " + r);
      return this.pushToken(e), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, u = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var o = i.length - 1; o >= 0; --o) {
        var s = i[o];
        if (s.text === "#") {
          if (o === 0)
            throw new Y("Incomplete placeholder at end of macro body", s);
          if (s = i[--o], s.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(s.text))
            i.splice(o, 2, ...u[+s.text - 1]);
          else
            throw new Y("Not a valid argument number", s);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var t = this.stack.pop();
        return t.treatAsRelax && (t.text = "\\relax"), t;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(t) {
    return this.macros.has(t) ? this.expandTokens([new zt(t)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(t) {
    var e = [], r = this.stack.length;
    for (this.pushTokens(t); this.stack.length > r; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), e.push(a);
      }
    return this.countExpansion(e.length), e;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(t) {
    var e = this.expandMacro(t);
    return e && e.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(t) {
    var e = this.macros.get(t);
    if (e == null)
      return e;
    if (t.length === 1) {
      var r = this.lexer.catcodes[t];
      if (r != null && r !== 13)
        return;
    }
    var a = typeof e == "function" ? e(this) : e;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var u = a.replace(/##/g, ""); u.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var o = new ys(a, this.settings), s = [], c = o.lex(); c.text !== "EOF"; )
        s.push(c), c = o.lex();
      s.reverse();
      var h = {
        tokens: s,
        numArgs: i
      };
      return h;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(t) {
    return this.macros.has(t) || C0.hasOwnProperty(t) || ze.math.hasOwnProperty(t) || ze.text.hasOwnProperty(t) || Ml.hasOwnProperty(t);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(t) {
    var e = this.macros.get(t);
    return e != null ? typeof e == "string" || typeof e == "function" || !e.unexpandable : C0.hasOwnProperty(t) && !C0[t].primitive;
  }
}
var Ds = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, wn = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), Wa = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, As = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
let Fl = class _l {
  constructor(t, e) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new jd(t, e, this.mode), this.settings = e, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(t, e) {
    if (e === void 0 && (e = !0), this.fetch().text !== t)
      throw new Y("Expected '" + t + "', got '" + this.fetch().text + "'", this.fetch());
    e && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(t) {
    this.mode = t, this.gullet.switchMode(t);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var t = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), t;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(t) {
    var e = this.nextToken;
    this.consume(), this.gullet.pushToken(new zt("}")), this.gullet.pushTokens(t);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = e, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(t, e) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (_l.endOfExpression.indexOf(a.text) !== -1 || e && a.text === e || t && C0[a.text] && C0[a.text].infix)
        break;
      var i = this.parseAtom(e);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      r.push(i);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(t) {
    for (var e = -1, r, a = 0; a < t.length; a++)
      if (t[a].type === "infix") {
        if (e !== -1)
          throw new Y("only one infix operator per group", t[a].token);
        e = a, r = t[a].replaceWith;
      }
    if (e !== -1 && r) {
      var i, u, o = t.slice(0, e), s = t.slice(e + 1);
      o.length === 1 && o[0].type === "ordgroup" ? i = o[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: o
      }, s.length === 1 && s[0].type === "ordgroup" ? u = s[0] : u = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      };
      var c;
      return r === "\\\\abovefrac" ? c = this.callFunction(r, [i, t[e], u], []) : c = this.callFunction(r, [i, u], []), [c];
    } else
      return t;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(t) {
    var e = this.fetch(), r = e.text;
    this.consume(), this.consumeSpaces();
    var a = this.parseGroup(t);
    if (!a)
      throw new Y("Expected group after '" + r + "'", e);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(t) {
    for (var e = [], r = 0; r < t.length; r++)
      e.push({
        type: "textord",
        mode: "text",
        text: t[r]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: e
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(t) {
    var e = this.parseGroup("atom", t);
    if (this.mode === "text")
      return e;
    for (var r, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (e && e.type === "op") {
          var u = i.text === "\\limits";
          e.limits = u, e.alwaysHandleSupSub = !0;
        } else if (e && e.type === "operatorname")
          e.alwaysHandleSupSub && (e.limits = i.text === "\\limits");
        else
          throw new Y("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new Y("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new Y("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new Y("Double superscript", i);
        var o = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, s = [o];
        for (this.consume(); this.fetch().text === "'"; )
          s.push(o), this.consume();
        this.fetch().text === "^" && s.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: s
        };
      } else if (wn[i.text]) {
        var c = Ds.test(i.text), h = [];
        for (h.push(new zt(wn[i.text])), this.consume(); ; ) {
          var b = this.fetch().text;
          if (!wn[b] || Ds.test(b) !== c)
            break;
          h.unshift(new zt(wn[b])), this.consume();
        }
        var d = this.subparse(h);
        c ? a = {
          type: "ordgroup",
          mode: "math",
          body: d
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: d
        };
      } else
        break;
    }
    return r || a ? {
      type: "supsub",
      mode: this.mode,
      base: e,
      sup: r,
      sub: a
    } : e;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(t, e) {
    var r = this.fetch(), a = r.text, i = C0[a];
    if (!i)
      return null;
    if (this.consume(), e && e !== "atom" && !i.allowedInArgument)
      throw new Y("Got function '" + a + "' with no arguments" + (e ? " as " + e : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new Y("Can't use function '" + a + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new Y("Can't use function '" + a + "' in math mode", r);
    var {
      args: u,
      optArgs: o
    } = this.parseArguments(a, i);
    return this.callFunction(a, u, o, r, t);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(t, e, r, a, i) {
    var u = {
      funcName: t,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, o = C0[t];
    if (o && o.handler)
      return o.handler(u, e, r);
    throw new Y("No function handler for " + t);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(t, e) {
    var r = e.numArgs + e.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var a = [], i = [], u = 0; u < r; u++) {
      var o = e.argTypes && e.argTypes[u], s = u < e.numOptionalArgs;
      (e.primitive && o == null || // \sqrt expands into primitive if optional argument doesn't exist
      e.type === "sqrt" && u === 1 && i[0] == null) && (o = "primitive");
      var c = this.parseGroupOfType("argument to '" + t + "'", o, s);
      if (s)
        i.push(c);
      else if (c != null)
        a.push(c);
      else
        throw new Y("Null argument, please report this as a bug");
    }
    return {
      args: a,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(t, e, r) {
    switch (e) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, e);
      case "hbox": {
        var a = this.parseArgumentGroup(r, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", r);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new Y("A primitive argument cannot be optional");
        var u = this.parseGroup(t);
        if (u == null)
          throw new Y("Expected group as " + t, this.fetch());
        return u;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new Y("Unknown group type as " + t, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(t, e) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      a += i.text, this.consume();
    return this.consume(), r.text = a, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(t, e) {
    for (var r = this.fetch(), a = r, i = "", u; (u = this.fetch()).text !== "EOF" && t.test(i + u.text); )
      a = u, i += a.text, this.consume();
    if (i === "")
      throw new Y("Invalid " + e + ": '" + r.text + "'", r);
    return r.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(t) {
    var e = this.parseStringGroup("color", t);
    if (e == null)
      return null;
    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(e.text);
    if (!r)
      throw new Y("Invalid color: '" + e.text + "'", e);
    var a = r[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(t) {
    var e, r = !1;
    if (this.gullet.consumeSpaces(), !t && this.gullet.future().text !== "{" ? e = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : e = this.parseStringGroup("size", t), !e)
      return null;
    !t && e.text.length === 0 && (e.text = "0pt", r = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e.text);
    if (!a)
      throw new Y("Invalid size: '" + e.text + "'", e);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!Po(i))
      throw new Y("Invalid unit: '" + i.unit + "'", e);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(t) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var e = this.parseStringGroup("url", t);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), e == null)
      return null;
    var r = e.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(t, e) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    var a = this.mode;
    e && this.switchMode(e), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var u = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: i
    };
    return e && this.switchMode(a), u;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(t, e) {
    var r = this.fetch(), a = r.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var u = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, u), s = this.fetch();
      this.expect(u), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Tt.range(r, s),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(e, t) || this.parseSymbol(), i == null && a[0] === "\\" && !Ml.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new Y("Undefined control sequence: " + a, r);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(t) {
    for (var e = t.length - 1, r = 0; r < e; ++r) {
      var a = t[r], i = a.text;
      i === "-" && t[r + 1].text === "-" && (r + 1 < e && t[r + 2].text === "-" ? (t.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: Tt.range(a, t[r + 2]),
        text: "---"
      }), e -= 2) : (t.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Tt.range(a, t[r + 1]),
        text: "--"
      }), e -= 1)), (i === "'" || i === "`") && t[r + 1].text === i && (t.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Tt.range(a, t[r + 1]),
        text: i + i
      }), e -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var t = this.fetch(), e = t.text;
    if (/^\\verb[^a-zA-Z]/.test(e)) {
      this.consume();
      var r = e.slice(5), a = r.charAt(0) === "*";
      if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new Y(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: a
      };
    }
    As.hasOwnProperty(e[0]) && !ze[this.mode][e[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + e[0] + '" used in math mode', t), e = As[e[0]] + e.slice(1));
    var i = Pd.exec(e);
    i && (e = e.substring(0, i.index), e === "i" ? e = "ı" : e === "j" && (e = "ȷ"));
    var u;
    if (ze[this.mode][e]) {
      this.settings.strict && this.mode === "math" && bi.indexOf(e) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + e[0] + '" used in math mode', t);
      var o = ze[this.mode][e].group, s = Tt.range(t), c;
      if (_f.hasOwnProperty(o)) {
        var h = o;
        c = {
          type: "atom",
          mode: this.mode,
          family: h,
          loc: s,
          text: e
        };
      } else
        c = {
          type: o,
          mode: this.mode,
          loc: s,
          text: e
        };
      u = c;
    } else if (e.charCodeAt(0) >= 128)
      this.settings.strict && (zo(e.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + e[0] + '" used in math mode', t) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + e[0] + '"' + (" (" + e.charCodeAt(0) + ")"), t)), u = {
        type: "textord",
        mode: "text",
        loc: Tt.range(t),
        text: e
      };
    else
      return null;
    if (this.consume(), i)
      for (var b = 0; b < i[0].length; b++) {
        var d = i[0][b];
        if (!Wa[d])
          throw new Y("Unknown accent ' " + d + "'", t);
        var m = Wa[d][this.mode] || Wa[d].text;
        if (!m)
          throw new Y("Accent " + d + " unsupported in " + this.mode + " mode", t);
        u = {
          type: "accent",
          mode: this.mode,
          loc: Tt.range(t),
          label: m,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: u
        };
      }
    return u;
  }
};
Fl.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var fu = function(t, e) {
  if (!(typeof t == "string" || t instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new Fl(t, e);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!e.displayMode)
      throw new Y("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new zt("\\df@tag")])
    }];
  }
  return a;
}, Nl = function(t, e, r) {
  e.textContent = "";
  var a = du(t, r).toNode();
  e.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Nl = function() {
  throw new Y("KaTeX doesn't work in quirks mode.");
});
var Gd = function(t, e) {
  var r = du(t, e).toMarkup();
  return r;
}, Vd = function(t, e) {
  var r = new Wi(e);
  return fu(t, r);
}, Il = function(t, e, r) {
  if (r.throwOnError || !(t instanceof Y))
    throw t;
  var a = L.makeSpan(["katex-error"], [new Pt(e)]);
  return a.setAttribute("title", t.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
}, du = function(t, e) {
  var r = new Wi(e);
  try {
    var a = fu(t, r);
    return ed(a, t, r);
  } catch (i) {
    return Il(i, t, r);
  }
}, $d = function(t, e) {
  var r = new Wi(e);
  try {
    var a = fu(t, r);
    return td(a, t, r);
  } catch (i) {
    return Il(i, t, r);
  }
}, Ss = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Nl,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: Gd,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: Y,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: qn,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: Vd,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: du,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: $d,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Sf,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: l,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: te,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: g,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: Yr,
    Anchor: Zi,
    SymbolNode: Pt,
    SvgNode: m0,
    PathNode: _0,
    LineNode: gi
  }
}, Wd = function(t, e, r) {
  for (var a = r, i = 0, u = t.length; a < e.length; ) {
    var o = e[a];
    if (i <= 0 && e.slice(a, a + u) === t)
      return a;
    o === "\\" ? a++ : o === "{" ? i++ : o === "}" && i--, a++;
  }
  return -1;
}, Yd = function(t) {
  return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, Xd = /^\\begin{/, Zd = function(t, e) {
  for (var r, a = [], i = new RegExp("(" + e.map((c) => Yd(c.left)).join("|") + ")"); r = t.search(i), r !== -1; ) {
    r > 0 && (a.push({
      type: "text",
      data: t.slice(0, r)
    }), t = t.slice(r));
    var u = e.findIndex((c) => t.startsWith(c.left));
    if (r = Wd(e[u].right, t, e[u].left.length), r === -1)
      break;
    var o = t.slice(0, r + e[u].right.length), s = Xd.test(o) ? o : t.slice(e[u].left.length, r);
    a.push({
      type: "math",
      data: s,
      rawData: o,
      display: e[u].display
    }), t = t.slice(r + e[u].right.length);
  }
  return t !== "" && a.push({
    type: "text",
    data: t
  }), a;
}, Kd = function(t, e) {
  var r = Zd(t, e.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var a = document.createDocumentFragment(), i = 0; i < r.length; i++)
    if (r[i].type === "text")
      a.appendChild(document.createTextNode(r[i].data));
    else {
      var u = document.createElement("span"), o = r[i].data;
      e.displayMode = r[i].display;
      try {
        e.preProcess && (o = e.preProcess(o)), Ss.render(o, u, e);
      } catch (s) {
        if (!(s instanceof Ss.ParseError))
          throw s;
        e.errorCallback("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", s), a.appendChild(document.createTextNode(r[i].rawData));
        continue;
      }
      a.appendChild(u);
    }
  return a;
}, Jd = function n(t, e) {
  for (var r = 0; r < t.childNodes.length; r++) {
    var a = t.childNodes[r];
    if (a.nodeType === 3) {
      for (var i = a.textContent, u = a.nextSibling, o = 0; u && u.nodeType === Node.TEXT_NODE; )
        i += u.textContent, u = u.nextSibling, o++;
      var s = Kd(i, e);
      if (s) {
        for (var c = 0; c < o; c++)
          a.nextSibling.remove();
        r += s.childNodes.length - 1, t.replaceChild(s, a);
      } else
        r += o;
    } else a.nodeType === 1 && function() {
      var h = " " + a.className + " ", b = e.ignoredTags.indexOf(a.nodeName.toLowerCase()) === -1 && e.ignoredClasses.every((d) => h.indexOf(" " + d + " ") === -1);
      b && n(a, e);
    }();
  }
}, Qd = function(t, e) {
  if (!t)
    throw new Error("No element provided to render");
  var r = {};
  for (var a in e)
    e.hasOwnProperty(a) && (r[a] = e[a]);
  r.delimiters = r.delimiters || [
    {
      left: "$$",
      right: "$$",
      display: !0
    },
    {
      left: "\\(",
      right: "\\)",
      display: !1
    },
    // LaTeX uses $…$, but it ruins the display of normal `$` in text:
    // {left: "$", right: "$", display: false},
    // $ must come after $$
    // Render AMS environments even if outside $$…$$ delimiters.
    {
      left: "\\begin{equation}",
      right: "\\end{equation}",
      display: !0
    },
    {
      left: "\\begin{align}",
      right: "\\end{align}",
      display: !0
    },
    {
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
      display: !0
    },
    {
      left: "\\begin{gather}",
      right: "\\end{gather}",
      display: !0
    },
    {
      left: "\\begin{CD}",
      right: "\\end{CD}",
      display: !0
    },
    {
      left: "\\[",
      right: "\\]",
      display: !0
    }
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, Jd(t, r);
};
function hu() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Y0 = hu();
function Ol(n) {
  Y0 = n;
}
const Bl = /[&<>"']/, eh = new RegExp(Bl.source, "g"), Ll = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, th = new RegExp(Ll.source, "g"), rh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ks = (n) => rh[n];
function Ct(n, t) {
  if (t) {
    if (Bl.test(n))
      return n.replace(eh, ks);
  } else if (Ll.test(n))
    return n.replace(th, ks);
  return n;
}
const nh = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function ah(n) {
  return n.replace(nh, (t, e) => (e = e.toLowerCase(), e === "colon" ? ":" : e.charAt(0) === "#" ? e.charAt(1) === "x" ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""));
}
const ih = /(^|[^\[])\^/g;
function Le(n, t) {
  let e = typeof n == "string" ? n : n.source;
  t = t || "";
  const r = {
    replace: (a, i) => {
      let u = typeof i == "string" ? i : i.source;
      return u = u.replace(ih, "$1"), e = e.replace(a, u), r;
    },
    getRegex: () => new RegExp(e, t)
  };
  return r;
}
function Es(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Ir = { exec: () => null };
function Ts(n, t) {
  const e = n.replace(/\|/g, (i, u, o) => {
    let s = !1, c = u;
    for (; --c >= 0 && o[c] === "\\"; )
      s = !s;
    return s ? "|" : " |";
  }), r = e.split(/ \|/);
  let a = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), t)
    if (r.length > t)
      r.splice(t);
    else
      for (; r.length < t; )
        r.push("");
  for (; a < r.length; a++)
    r[a] = r[a].trim().replace(/\\\|/g, "|");
  return r;
}
function xn(n, t, e) {
  const r = n.length;
  if (r === 0)
    return "";
  let a = 0;
  for (; a < r; ) {
    const i = n.charAt(r - a - 1);
    if (i === t && !e)
      a++;
    else if (i !== t && e)
      a++;
    else
      break;
  }
  return n.slice(0, r - a);
}
function uh(n, t) {
  if (n.indexOf(t[1]) === -1)
    return -1;
  let e = 0;
  for (let r = 0; r < n.length; r++)
    if (n[r] === "\\")
      r++;
    else if (n[r] === t[0])
      e++;
    else if (n[r] === t[1] && (e--, e < 0))
      return r;
  return -1;
}
function Cs(n, t, e, r) {
  const a = t.href, i = t.title ? Ct(t.title) : null, u = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const o = {
      type: "link",
      raw: e,
      href: a,
      title: i,
      text: u,
      tokens: r.inlineTokens(u)
    };
    return r.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: e,
    href: a,
    title: i,
    text: Ct(u)
  };
}
function sh(n, t) {
  const e = n.match(/^(\s+)(?:```)/);
  if (e === null)
    return t;
  const r = e[1];
  return t.split(`
`).map((a) => {
    const i = a.match(/^\s+/);
    if (i === null)
      return a;
    const [u] = i;
    return u.length >= r.length ? a.slice(r.length) : a;
  }).join(`
`);
}
class ra {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || Y0;
  }
  space(t) {
    const e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0)
      return {
        type: "space",
        raw: e[0]
      };
  }
  code(t) {
    const e = this.rules.block.code.exec(t);
    if (e) {
      const r = e[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: e[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : xn(r, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const r = e[0], a = sh(r, e[3] || "");
      return {
        type: "code",
        raw: r,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: a
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let r = e[2].trim();
      if (/#$/.test(r)) {
        const a = xn(r, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (r = a.trim());
      }
      return {
        type: "heading",
        raw: e[0],
        depth: e[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(t) {
    const e = this.rules.block.hr.exec(t);
    if (e)
      return {
        type: "hr",
        raw: e[0]
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let r = e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = xn(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(r);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: e[0],
        tokens: i,
        text: r
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let r = e[1].trim();
      const a = r.length > 1, i = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = a ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = a ? r : "[*+-]");
      const u = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", s = "", c = !1;
      for (; t; ) {
        let h = !1;
        if (!(e = u.exec(t)) || this.rules.block.hr.test(t))
          break;
        o = e[0], t = t.substring(o.length);
        let b = e[2].split(`
`, 1)[0].replace(/^\t+/, (I) => " ".repeat(3 * I.length)), d = t.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, s = b.trimStart()) : (m = e[2].search(/[^ ]/), m = m > 4 ? 1 : m, s = b.slice(m), m += e[1].length);
        let T = !1;
        if (!b && /^ *$/.test(d) && (o += d + `
`, t = t.substring(d.length + 1), h = !0), !h) {
          const I = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), D = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), k = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), M = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; t; ) {
            const O = t.split(`
`, 1)[0];
            if (d = O, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), k.test(d) || M.test(d) || I.test(d) || D.test(t))
              break;
            if (d.search(/[^ ]/) >= m || !d.trim())
              s += `
` + d.slice(m);
            else {
              if (T || b.search(/[^ ]/) >= 4 || k.test(b) || M.test(b) || D.test(b))
                break;
              s += `
` + d;
            }
            !T && !d.trim() && (T = !0), o += O + `
`, t = t.substring(O.length + 1), b = d.slice(m);
          }
        }
        i.loose || (c ? i.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let A = null, S;
        this.options.gfm && (A = /^\[[ xX]\] /.exec(s), A && (S = A[0] !== "[ ] ", s = s.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: o,
          task: !!A,
          checked: S,
          loose: !1,
          text: s,
          tokens: []
        }), i.raw += o;
      }
      i.items[i.items.length - 1].raw = o.trimEnd(), i.items[i.items.length - 1].text = s.trimEnd(), i.raw = i.raw.trimEnd();
      for (let h = 0; h < i.items.length; h++)
        if (this.lexer.state.top = !1, i.items[h].tokens = this.lexer.blockTokens(i.items[h].text, []), !i.loose) {
          const b = i.items[h].tokens.filter((m) => m.type === "space"), d = b.length > 0 && b.some((m) => /\n.*\n/.test(m.raw));
          i.loose = d;
        }
      if (i.loose)
        for (let h = 0; h < i.items.length; h++)
          i.items[h].loose = !0;
      return i;
    }
  }
  html(t) {
    const e = this.rules.block.html.exec(t);
    if (e)
      return {
        type: "html",
        block: !0,
        raw: e[0],
        pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
        text: e[0]
      };
  }
  def(t) {
    const e = this.rules.block.def.exec(t);
    if (e) {
      const r = e[1].toLowerCase().replace(/\s+/g, " "), a = e[2] ? e[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: r,
        raw: e[0],
        href: a,
        title: i
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !/[:|]/.test(e[2]))
      return;
    const r = Ts(e[1]), a = e[2].replace(/^\||\| *$/g, "").split("|"), i = e[3] && e[3].trim() ? e[3].replace(/\n[ \t]*$/, "").split(`
`) : [], u = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === a.length) {
      for (const o of a)
        /^ *-+: *$/.test(o) ? u.align.push("right") : /^ *:-+: *$/.test(o) ? u.align.push("center") : /^ *:-+ *$/.test(o) ? u.align.push("left") : u.align.push(null);
      for (const o of r)
        u.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of i)
        u.rows.push(Ts(o, u.header.length).map((s) => ({
          text: s,
          tokens: this.lexer.inline(s)
        })));
      return u;
    }
  }
  lheading(t) {
    const e = this.rules.block.lheading.exec(t);
    if (e)
      return {
        type: "heading",
        raw: e[0],
        depth: e[2].charAt(0) === "=" ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1])
      };
  }
  paragraph(t) {
    const e = this.rules.block.paragraph.exec(t);
    if (e) {
      const r = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return {
        type: "paragraph",
        raw: e[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(t) {
    const e = this.rules.block.text.exec(t);
    if (e)
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        tokens: this.lexer.inline(e[0])
      };
  }
  escape(t) {
    const e = this.rules.inline.escape.exec(t);
    if (e)
      return {
        type: "escape",
        raw: e[0],
        text: Ct(e[1])
      };
  }
  tag(t) {
    const e = this.rules.inline.tag.exec(t);
    if (e)
      return !this.lexer.state.inLink && /^<a /i.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: e[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: e[0]
      };
  }
  link(t) {
    const e = this.rules.inline.link.exec(t);
    if (e) {
      const r = e[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const u = xn(r.slice(0, -1), "\\");
        if ((r.length - u.length) % 2 === 0)
          return;
      } else {
        const u = uh(e[2], "()");
        if (u > -1) {
          const s = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + u;
          e[2] = e[2].substring(0, u), e[0] = e[0].substring(0, s).trim(), e[3] = "";
        }
      }
      let a = e[2], i = "";
      if (this.options.pedantic) {
        const u = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        u && (a = u[1], i = u[3]);
      } else
        i = e[3] ? e[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), Cs(e, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer);
    }
  }
  reflink(t, e) {
    let r;
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      const a = (r[2] || r[1]).replace(/\s+/g, " "), i = e[a.toLowerCase()];
      if (!i) {
        const u = r[0].charAt(0);
        return {
          type: "text",
          raw: u,
          text: u
        };
      }
      return Cs(r, i, r[0], this.lexer);
    }
  }
  emStrong(t, e, r = "") {
    let a = this.rules.inline.emStrongLDelim.exec(t);
    if (!a || a[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const u = [...a[0]].length - 1;
      let o, s, c = u, h = 0;
      const b = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (b.lastIndex = 0, e = e.slice(-1 * t.length + u); (a = b.exec(e)) != null; ) {
        if (o = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !o)
          continue;
        if (s = [...o].length, a[3] || a[4]) {
          c += s;
          continue;
        } else if ((a[5] || a[6]) && u % 3 && !((u + s) % 3)) {
          h += s;
          continue;
        }
        if (c -= s, c > 0)
          continue;
        s = Math.min(s, s + c + h);
        const d = [...a[0]][0].length, m = t.slice(0, u + a.index + d + s);
        if (Math.min(u, s) % 2) {
          const A = m.slice(1, -1);
          return {
            type: "em",
            raw: m,
            text: A,
            tokens: this.lexer.inlineTokens(A)
          };
        }
        const T = m.slice(2, -2);
        return {
          type: "strong",
          raw: m,
          text: T,
          tokens: this.lexer.inlineTokens(T)
        };
      }
    }
  }
  codespan(t) {
    const e = this.rules.inline.code.exec(t);
    if (e) {
      let r = e[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return a && i && (r = r.substring(1, r.length - 1)), r = Ct(r, !0), {
        type: "codespan",
        raw: e[0],
        text: r
      };
    }
  }
  br(t) {
    const e = this.rules.inline.br.exec(t);
    if (e)
      return {
        type: "br",
        raw: e[0]
      };
  }
  del(t) {
    const e = this.rules.inline.del.exec(t);
    if (e)
      return {
        type: "del",
        raw: e[0],
        text: e[2],
        tokens: this.lexer.inlineTokens(e[2])
      };
  }
  autolink(t) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let r, a;
      return e[2] === "@" ? (r = Ct(e[1]), a = "mailto:" + r) : (r = Ct(e[1]), a = r), {
        type: "link",
        raw: e[0],
        text: r,
        href: a,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let r, a;
      if (e[2] === "@")
        r = Ct(e[0]), a = "mailto:" + r;
      else {
        let i;
        do
          i = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (i !== e[0]);
        r = Ct(e[0]), e[1] === "www." ? a = "http://" + e[0] : a = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: r,
        href: a,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(t) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      let r;
      return this.lexer.state.inRawBlock ? r = e[0] : r = Ct(e[0]), {
        type: "text",
        raw: e[0],
        text: r
      };
    }
  }
}
const oh = /^(?: *(?:\n|$))+/, lh = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, ch = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Zr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, fh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Rl = /(?:[*+-]|\d{1,9}[.)])/, zl = Le(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Rl).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), mu = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, dh = /^[^\n]+/, pu = /(?!\s*\])(?:\\.|[^\[\]\\])+/, hh = Le(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", pu).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), mh = Le(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Rl).getRegex(), wa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gu = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ph = Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", gu).replace("tag", wa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Pl = Le(mu).replace("hr", Zr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex(), gh = Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Pl).getRegex(), bu = {
  blockquote: gh,
  code: lh,
  def: hh,
  fences: ch,
  heading: fh,
  hr: Zr,
  html: ph,
  lheading: zl,
  list: mh,
  newline: oh,
  paragraph: Pl,
  table: Ir,
  text: dh
}, Ms = Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Zr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex(), bh = {
  ...bu,
  table: Ms,
  paragraph: Le(mu).replace("hr", Zr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ms).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wa).getRegex()
}, vh = {
  ...bu,
  html: Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gu).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ir,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Le(mu).replace("hr", Zr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", zl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ql = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, yh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Hl = /^( {2,}|\\)\n(?!\s*$)/, wh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Kr = "\\p{P}\\p{S}", xh = Le(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Kr).getRegex(), Dh = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Ah = Le(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Kr).getRegex(), Sh = Le("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Kr).getRegex(), kh = Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Kr).getRegex(), Eh = Le(/\\([punct])/, "gu").replace(/punct/g, Kr).getRegex(), Th = Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ch = Le(gu).replace("(?:-->|$)", "-->").getRegex(), Mh = Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ch).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), na = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Fh = Le(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", na).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ul = Le(/^!?\[(label)\]\[(ref)\]/).replace("label", na).replace("ref", pu).getRegex(), jl = Le(/^!?\[(ref)\](?:\[\])?/).replace("ref", pu).getRegex(), _h = Le("reflink|nolink(?!\\()", "g").replace("reflink", Ul).replace("nolink", jl).getRegex(), vu = {
  _backpedal: Ir,
  // only used for GFM url
  anyPunctuation: Eh,
  autolink: Th,
  blockSkip: Dh,
  br: Hl,
  code: yh,
  del: Ir,
  emStrongLDelim: Ah,
  emStrongRDelimAst: Sh,
  emStrongRDelimUnd: kh,
  escape: ql,
  link: Fh,
  nolink: jl,
  punctuation: xh,
  reflink: Ul,
  reflinkSearch: _h,
  tag: Mh,
  text: wh,
  url: Ir
}, Nh = {
  ...vu,
  link: Le(/^!?\[(label)\]\((.*?)\)/).replace("label", na).getRegex(),
  reflink: Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", na).getRegex()
}, Ai = {
  ...vu,
  escape: Le(ql).replace("])", "~|])").getRegex(),
  url: Le(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Ih = {
  ...Ai,
  br: Le(Hl).replace("{2,}", "*").getRegex(),
  text: Le(Ai.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Dn = {
  normal: bu,
  gfm: bh,
  pedantic: vh
}, yr = {
  normal: vu,
  gfm: Ai,
  breaks: Ih,
  pedantic: Nh
};
class t0 {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Y0, this.options.tokenizer = this.options.tokenizer || new ra(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const e = {
      block: Dn.normal,
      inline: yr.normal
    };
    this.options.pedantic ? (e.block = Dn.pedantic, e.inline = yr.pedantic) : this.options.gfm && (e.block = Dn.gfm, this.options.breaks ? e.inline = yr.breaks : e.inline = yr.gfm), this.tokenizer.rules = e;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Dn,
      inline: yr
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, e) {
    return new t0(e).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, e) {
    return new t0(e).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let e = 0; e < this.inlineQueue.length; e++) {
      const r = this.inlineQueue[e];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, e = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (o, s, c) => s + "    ".repeat(c.length));
    let r, a, i, u;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (r = o.call({ lexer: this }, t, e)) ? (t = t.substring(r.raw.length), e.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(t)) {
          t = t.substring(r.raw.length), r.raw.length === 1 && e.length > 0 ? e[e.length - 1].raw += `
` : e.push(r);
          continue;
        }
        if (r = this.tokenizer.code(t)) {
          t = t.substring(r.raw.length), a = e[e.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : e.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.list(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.html(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.def(t)) {
          t = t.substring(r.raw.length), a = e[e.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (i = t, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const s = t.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((h) => {
            c = h.call({ lexer: this }, s), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
          }), o < 1 / 0 && o >= 0 && (i = t.substring(0, o + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          a = e[e.length - 1], u && a.type === "paragraph" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : e.push(r), u = i.length !== t.length, t = t.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(t)) {
          t = t.substring(r.raw.length), a = e[e.length - 1], a && a.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : e.push(r);
          continue;
        }
        if (t) {
          const o = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, e;
  }
  inline(t, e = []) {
    return this.inlineQueue.push({ src: t, tokens: e }), e;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, e = []) {
    let r, a, i, u = t, o, s, c;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(u)) != null; )
          h.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (u = u.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(u)) != null; )
      u = u.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(u)) != null; )
      u = u.slice(0, o.index) + "++" + u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (s || (c = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((h) => (r = h.call({ lexer: this }, t, e)) ? (t = t.substring(r.raw.length), e.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(t)) {
          t = t.substring(r.raw.length), a = e[e.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : e.push(r);
          continue;
        }
        if (r = this.tokenizer.link(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(r.raw.length), a = e[e.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : e.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(t, u, c)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.br(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.del(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(t)) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(t))) {
          t = t.substring(r.raw.length), e.push(r);
          continue;
        }
        if (i = t, this.options.extensions && this.options.extensions.startInline) {
          let h = 1 / 0;
          const b = t.slice(1);
          let d;
          this.options.extensions.startInline.forEach((m) => {
            d = m.call({ lexer: this }, b), typeof d == "number" && d >= 0 && (h = Math.min(h, d));
          }), h < 1 / 0 && h >= 0 && (i = t.substring(0, h + 1));
        }
        if (r = this.tokenizer.inlineText(i)) {
          t = t.substring(r.raw.length), r.raw.slice(-1) !== "_" && (c = r.raw.slice(-1)), s = !0, a = e[e.length - 1], a && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : e.push(r);
          continue;
        }
        if (t) {
          const h = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
    return e;
  }
}
class aa {
  options;
  constructor(t) {
    this.options = t || Y0;
  }
  code(t, e, r) {
    const a = (e || "").match(/^\S*/)?.[0];
    return t = t.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + Ct(a) + '">' + (r ? t : Ct(t, !0)) + `</code></pre>
` : "<pre><code>" + (r ? t : Ct(t, !0)) + `</code></pre>
`;
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t, e) {
    return t;
  }
  heading(t, e, r) {
    return `<h${e}>${t}</h${e}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(t, e, r) {
    const a = e ? "ol" : "ul", i = e && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + i + `>
` + t + "</" + a + `>
`;
  }
  listitem(t, e, r) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, e) {
    return e && (e = `<tbody>${e}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + e + `</table>
`;
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, e) {
    const r = e.header ? "th" : "td";
    return (e.align ? `<${r} align="${e.align}">` : `<${r}>`) + t + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return "<br>";
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, e, r) {
    const a = Es(t);
    if (a === null)
      return r;
    t = a;
    let i = '<a href="' + t + '"';
    return e && (i += ' title="' + e + '"'), i += ">" + r + "</a>", i;
  }
  image(t, e, r) {
    const a = Es(t);
    if (a === null)
      return r;
    t = a;
    let i = `<img src="${t}" alt="${r}"`;
    return e && (i += ` title="${e}"`), i += ">", i;
  }
  text(t) {
    return t;
  }
}
class yu {
  // no need for block level renderers
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, e, r) {
    return "" + r;
  }
  image(t, e, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class r0 {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || Y0, this.options.renderer = this.options.renderer || new aa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new yu();
  }
  /**
   * Static Parse Method
   */
  static parse(t, e) {
    return new r0(e).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, e) {
    return new r0(e).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, e = !0) {
    let r = "";
    for (let a = 0; a < t.length; a++) {
      const i = t[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const u = i, o = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          r += o || "";
          continue;
        }
      }
      switch (i.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const u = i;
          r += this.renderer.heading(this.parseInline(u.tokens), u.depth, ah(this.parseInline(u.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const u = i;
          r += this.renderer.code(u.text, u.lang, !!u.escaped);
          continue;
        }
        case "table": {
          const u = i;
          let o = "", s = "";
          for (let h = 0; h < u.header.length; h++)
            s += this.renderer.tablecell(this.parseInline(u.header[h].tokens), { header: !0, align: u.align[h] });
          o += this.renderer.tablerow(s);
          let c = "";
          for (let h = 0; h < u.rows.length; h++) {
            const b = u.rows[h];
            s = "";
            for (let d = 0; d < b.length; d++)
              s += this.renderer.tablecell(this.parseInline(b[d].tokens), { header: !1, align: u.align[d] });
            c += this.renderer.tablerow(s);
          }
          r += this.renderer.table(o, c);
          continue;
        }
        case "blockquote": {
          const u = i, o = this.parse(u.tokens);
          r += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const u = i, o = u.ordered, s = u.start, c = u.loose;
          let h = "";
          for (let b = 0; b < u.items.length; b++) {
            const d = u.items[b], m = d.checked, T = d.task;
            let A = "";
            if (d.task) {
              const S = this.renderer.checkbox(!!m);
              c ? d.tokens.length > 0 && d.tokens[0].type === "paragraph" ? (d.tokens[0].text = S + " " + d.tokens[0].text, d.tokens[0].tokens && d.tokens[0].tokens.length > 0 && d.tokens[0].tokens[0].type === "text" && (d.tokens[0].tokens[0].text = S + " " + d.tokens[0].tokens[0].text)) : d.tokens.unshift({
                type: "text",
                text: S + " "
              }) : A += S + " ";
            }
            A += this.parse(d.tokens, c), h += this.renderer.listitem(A, T, !!m);
          }
          r += this.renderer.list(h, o, s);
          continue;
        }
        case "html": {
          const u = i;
          r += this.renderer.html(u.text, u.block);
          continue;
        }
        case "paragraph": {
          const u = i;
          r += this.renderer.paragraph(this.parseInline(u.tokens));
          continue;
        }
        case "text": {
          let u = i, o = u.tokens ? this.parseInline(u.tokens) : u.text;
          for (; a + 1 < t.length && t[a + 1].type === "text"; )
            u = t[++a], o += `
` + (u.tokens ? this.parseInline(u.tokens) : u.text);
          r += e ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const u = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, e) {
    e = e || this.renderer;
    let r = "";
    for (let a = 0; a < t.length; a++) {
      const i = t[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const u = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          r += u || "";
          continue;
        }
      }
      switch (i.type) {
        case "escape": {
          const u = i;
          r += e.text(u.text);
          break;
        }
        case "html": {
          const u = i;
          r += e.html(u.text);
          break;
        }
        case "link": {
          const u = i;
          r += e.link(u.href, u.title, this.parseInline(u.tokens, e));
          break;
        }
        case "image": {
          const u = i;
          r += e.image(u.href, u.title, u.text);
          break;
        }
        case "strong": {
          const u = i;
          r += e.strong(this.parseInline(u.tokens, e));
          break;
        }
        case "em": {
          const u = i;
          r += e.em(this.parseInline(u.tokens, e));
          break;
        }
        case "codespan": {
          const u = i;
          r += e.codespan(u.text);
          break;
        }
        case "br": {
          r += e.br();
          break;
        }
        case "del": {
          const u = i;
          r += e.del(this.parseInline(u.tokens, e));
          break;
        }
        case "text": {
          const u = i;
          r += e.text(u.text);
          break;
        }
        default: {
          const u = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
}
class Un {
  options;
  constructor(t) {
    this.options = t || Y0;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
}
class Gl {
  defaults = hu();
  options = this.setOptions;
  parse = this.#e(t0.lex, r0.parse);
  parseInline = this.#e(t0.lexInline, r0.parseInline);
  Parser = r0;
  Renderer = aa;
  TextRenderer = yu;
  Lexer = t0;
  Tokenizer = ra;
  Hooks = Un;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, e) {
    let r = [];
    for (const a of t)
      switch (r = r.concat(e.call(this, a)), a.type) {
        case "table": {
          const i = a;
          for (const u of i.header)
            r = r.concat(this.walkTokens(u.tokens, e));
          for (const u of i.rows)
            for (const o of u)
              r = r.concat(this.walkTokens(o.tokens, e));
          break;
        }
        case "list": {
          const i = a;
          r = r.concat(this.walkTokens(i.items, e));
          break;
        }
        default: {
          const i = a;
          this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((u) => {
            const o = i[u].flat(1 / 0);
            r = r.concat(this.walkTokens(o, e));
          }) : i.tokens && (r = r.concat(this.walkTokens(i.tokens, e)));
        }
      }
    return r;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      const a = { ...r };
      if (a.async = this.defaults.async || a.async || !1, r.extensions && (r.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const u = e.renderers[i.name];
          u ? e.renderers[i.name] = function(...o) {
            let s = i.renderer.apply(this, o);
            return s === !1 && (s = u.apply(this, o)), s;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const u = e[i.level];
          u ? u.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), a.extensions = e), r.renderer) {
        const i = this.defaults.renderer || new aa(this.defaults);
        for (const u in r.renderer) {
          if (!(u in i))
            throw new Error(`renderer '${u}' does not exist`);
          if (u === "options")
            continue;
          const o = u, s = r.renderer[o], c = i[o];
          i[o] = (...h) => {
            let b = s.apply(i, h);
            return b === !1 && (b = c.apply(i, h)), b || "";
          };
        }
        a.renderer = i;
      }
      if (r.tokenizer) {
        const i = this.defaults.tokenizer || new ra(this.defaults);
        for (const u in r.tokenizer) {
          if (!(u in i))
            throw new Error(`tokenizer '${u}' does not exist`);
          if (["options", "rules", "lexer"].includes(u))
            continue;
          const o = u, s = r.tokenizer[o], c = i[o];
          i[o] = (...h) => {
            let b = s.apply(i, h);
            return b === !1 && (b = c.apply(i, h)), b;
          };
        }
        a.tokenizer = i;
      }
      if (r.hooks) {
        const i = this.defaults.hooks || new Un();
        for (const u in r.hooks) {
          if (!(u in i))
            throw new Error(`hook '${u}' does not exist`);
          if (u === "options")
            continue;
          const o = u, s = r.hooks[o], c = i[o];
          Un.passThroughHooks.has(u) ? i[o] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(s.call(i, h)).then((d) => c.call(i, d));
            const b = s.call(i, h);
            return c.call(i, b);
          } : i[o] = (...h) => {
            let b = s.apply(i, h);
            return b === !1 && (b = c.apply(i, h)), b;
          };
        }
        a.hooks = i;
      }
      if (r.walkTokens) {
        const i = this.defaults.walkTokens, u = r.walkTokens;
        a.walkTokens = function(o) {
          let s = [];
          return s.push(u.call(this, o)), i && (s = s.concat(i.call(this, o))), s;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return t0.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return r0.parse(t, e ?? this.defaults);
  }
  #e(t, e) {
    return (r, a) => {
      const i = { ...a }, u = { ...this.defaults, ...i };
      this.defaults.async === !0 && i.async === !1 && (u.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), u.async = !0);
      const o = this.#t(!!u.silent, !!u.async);
      if (typeof r > "u" || r === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (u.hooks && (u.hooks.options = u), u.async)
        return Promise.resolve(u.hooks ? u.hooks.preprocess(r) : r).then((s) => t(s, u)).then((s) => u.hooks ? u.hooks.processAllTokens(s) : s).then((s) => u.walkTokens ? Promise.all(this.walkTokens(s, u.walkTokens)).then(() => s) : s).then((s) => e(s, u)).then((s) => u.hooks ? u.hooks.postprocess(s) : s).catch(o);
      try {
        u.hooks && (r = u.hooks.preprocess(r));
        let s = t(r, u);
        u.hooks && (s = u.hooks.processAllTokens(s)), u.walkTokens && this.walkTokens(s, u.walkTokens);
        let c = e(s, u);
        return u.hooks && (c = u.hooks.postprocess(c)), c;
      } catch (s) {
        return o(s);
      }
    };
  }
  #t(t, e) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const a = "<p>An error occurred:</p><pre>" + Ct(r.message + "", !0) + "</pre>";
        return e ? Promise.resolve(a) : a;
      }
      if (e)
        return Promise.reject(r);
      throw r;
    };
  }
}
const V0 = new Gl();
function Be(n, t) {
  return V0.parse(n, t);
}
Be.options = Be.setOptions = function(n) {
  return V0.setOptions(n), Be.defaults = V0.defaults, Ol(Be.defaults), Be;
};
Be.getDefaults = hu;
Be.defaults = Y0;
Be.use = function(...n) {
  return V0.use(...n), Be.defaults = V0.defaults, Ol(Be.defaults), Be;
};
Be.walkTokens = function(n, t) {
  return V0.walkTokens(n, t);
};
Be.parseInline = V0.parseInline;
Be.Parser = r0;
Be.parser = r0.parse;
Be.Renderer = aa;
Be.TextRenderer = yu;
Be.Lexer = t0;
Be.lexer = t0.lex;
Be.Tokenizer = ra;
Be.Hooks = Un;
Be.parse = Be;
Be.options;
Be.setOptions;
Be.use;
Be.walkTokens;
Be.parseInline;
r0.parse;
t0.lex;
function Oh(n) {
  if (typeof n == "function" && (n = {
    highlight: n
  }), !n || typeof n.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof n.langPrefix != "string" && (n.langPrefix = "language-"), {
    async: !!n.async,
    walkTokens(t) {
      if (t.type !== "code")
        return;
      const e = Fs(t.lang);
      if (n.async)
        return Promise.resolve(n.highlight(t.text, e, t.lang || "")).then(_s(t));
      const r = n.highlight(t.text, e, t.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      _s(t)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(t, e, r) {
        typeof t == "object" && (r = t.escaped, e = t.lang, t = t.text);
        const a = Fs(e), i = a ? ` class="${n.langPrefix}${Is(a)}"` : "";
        return t = t.replace(/\n$/, ""), `<pre><code${i}>${r ? t : Is(t, !0)}
</code></pre>`;
      }
    }
  };
}
function Fs(n) {
  return (n || "").match(/\S*/)[0];
}
function _s(n) {
  return (t) => {
    typeof t == "string" && t !== n.text && (n.escaped = !0, n.text = t);
  };
}
const Vl = /[&<>"']/, Bh = new RegExp(Vl.source, "g"), $l = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Lh = new RegExp($l.source, "g"), Rh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ns = (n) => Rh[n];
function Is(n, t) {
  if (t) {
    if (Vl.test(n))
      return n.replace(Bh, Ns);
  } else if ($l.test(n))
    return n.replace(Lh, Ns);
  return n;
}
const zh = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Ph = Object.hasOwnProperty;
class wu {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(t, e) {
    const r = this;
    let a = qh(t, e === !0);
    const i = a;
    for (; Ph.call(r.occurrences, a); )
      r.occurrences[i]++, a = i + "-" + r.occurrences[i];
    return r.occurrences[a] = 0, a;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function qh(n, t) {
  return typeof n != "string" ? "" : (t || (n = n.toLowerCase()), n.replace(zh, "").replace(/ /g, "-"));
}
let Wl = new wu(), Yl = [];
function Hh({ prefix: n = "", globalSlugs: t = !1 } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(e) {
        return t || Uh(), e;
      }
    },
    renderer: {
      heading(e, r, a) {
        a = a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const i = `${n}${Wl.slug(a)}`, u = { level: r, text: e, id: i };
        return Yl.push(u), `<h${r} id="${i}">${e}</h${r}>
`;
      }
    }
  };
}
function Uh() {
  Yl = [], Wl = new wu();
}
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Gh(n) {
  if (n.__esModule) return n;
  var t = n.default;
  if (typeof t == "function") {
    var e = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(e, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), e;
}
var Xl = { exports: {} };
(function(n) {
  var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var e = function(r) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, u = {}, o = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function D(k) {
          return k instanceof s ? new s(k.type, D(k.content), k.alias) : Array.isArray(k) ? k.map(D) : k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(D) {
          return Object.prototype.toString.call(D).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(D) {
          return D.__id || Object.defineProperty(D, "__id", { value: ++i }), D.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function D(k, M) {
          M = M || {};
          var O, N;
          switch (o.util.type(k)) {
            case "Object":
              if (N = o.util.objId(k), M[N])
                return M[N];
              O = /** @type {Record<string, any>} */
              {}, M[N] = O;
              for (var R in k)
                k.hasOwnProperty(R) && (O[R] = D(k[R], M));
              return (
                /** @type {any} */
                O
              );
            case "Array":
              return N = o.util.objId(k), M[N] ? M[N] : (O = [], M[N] = O, /** @type {Array} */
              /** @type {any} */
              k.forEach(function(j, q) {
                O[q] = D(j, M);
              }), /** @type {any} */
              O);
            default:
              return k;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(D) {
          for (; D; ) {
            var k = a.exec(D.className);
            if (k)
              return k[1].toLowerCase();
            D = D.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(D, k) {
          D.className = D.className.replace(RegExp(a, "gi"), ""), D.classList.add("language-" + k);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (O) {
            var D = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(O.stack) || [])[1];
            if (D) {
              var k = document.getElementsByTagName("script");
              for (var M in k)
                if (k[M].src == D)
                  return k[M];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(D, k, M) {
          for (var O = "no-" + k; D; ) {
            var N = D.classList;
            if (N.contains(k))
              return !0;
            if (N.contains(O))
              return !1;
            D = D.parentElement;
          }
          return !!M;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: u,
        plaintext: u,
        text: u,
        txt: u,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(D, k) {
          var M = o.util.clone(o.languages[D]);
          for (var O in k)
            M[O] = k[O];
          return M;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(D, k, M, O) {
          O = O || /** @type {any} */
          o.languages;
          var N = O[D], R = {};
          for (var j in N)
            if (N.hasOwnProperty(j)) {
              if (j == k)
                for (var q in M)
                  M.hasOwnProperty(q) && (R[q] = M[q]);
              M.hasOwnProperty(j) || (R[j] = N[j]);
            }
          var H = O[D];
          return O[D] = R, o.languages.DFS(o.languages, function(_, P) {
            P === H && _ != D && (this[_] = R);
          }), R;
        },
        // Traverse a language definition with Depth First Search
        DFS: function D(k, M, O, N) {
          N = N || {};
          var R = o.util.objId;
          for (var j in k)
            if (k.hasOwnProperty(j)) {
              M.call(k, j, k[j], O || j);
              var q = k[j], H = o.util.type(q);
              H === "Object" && !N[R(q)] ? (N[R(q)] = !0, D(q, M, null, N)) : H === "Array" && !N[R(q)] && (N[R(q)] = !0, D(q, M, j, N));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(D, k) {
        o.highlightAllUnder(document, D, k);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(D, k, M) {
        var O = {
          callback: M,
          container: D,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", O), O.elements = Array.prototype.slice.apply(O.container.querySelectorAll(O.selector)), o.hooks.run("before-all-elements-highlight", O);
        for (var N = 0, R; R = O.elements[N++]; )
          o.highlightElement(R, k === !0, O.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(D, k, M) {
        var O = o.util.getLanguage(D), N = o.languages[O];
        o.util.setLanguage(D, O);
        var R = D.parentElement;
        R && R.nodeName.toLowerCase() === "pre" && o.util.setLanguage(R, O);
        var j = D.textContent, q = {
          element: D,
          language: O,
          grammar: N,
          code: j
        };
        function H(P) {
          q.highlightedCode = P, o.hooks.run("before-insert", q), q.element.innerHTML = q.highlightedCode, o.hooks.run("after-highlight", q), o.hooks.run("complete", q), M && M.call(q.element);
        }
        if (o.hooks.run("before-sanity-check", q), R = q.element.parentElement, R && R.nodeName.toLowerCase() === "pre" && !R.hasAttribute("tabindex") && R.setAttribute("tabindex", "0"), !q.code) {
          o.hooks.run("complete", q), M && M.call(q.element);
          return;
        }
        if (o.hooks.run("before-highlight", q), !q.grammar) {
          H(o.util.encode(q.code));
          return;
        }
        if (k && r.Worker) {
          var _ = new Worker(o.filename);
          _.onmessage = function(P) {
            H(P.data);
          }, _.postMessage(JSON.stringify({
            language: q.language,
            code: q.code,
            immediateClose: !0
          }));
        } else
          H(o.highlight(q.code, q.grammar, q.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(D, k, M) {
        var O = {
          code: D,
          grammar: k,
          language: M
        };
        if (o.hooks.run("before-tokenize", O), !O.grammar)
          throw new Error('The language "' + O.language + '" has no grammar.');
        return O.tokens = o.tokenize(O.code, O.grammar), o.hooks.run("after-tokenize", O), s.stringify(o.util.encode(O.tokens), O.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(D, k) {
        var M = k.rest;
        if (M) {
          for (var O in M)
            k[O] = M[O];
          delete k.rest;
        }
        var N = new b();
        return d(N, N.head, D), h(D, N, k, N.head, 0), T(N);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(D, k) {
          var M = o.hooks.all;
          M[D] = M[D] || [], M[D].push(k);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(D, k) {
          var M = o.hooks.all[D];
          if (!(!M || !M.length))
            for (var O = 0, N; N = M[O++]; )
              N(k);
        }
      },
      Token: s
    };
    r.Prism = o;
    function s(D, k, M, O) {
      this.type = D, this.content = k, this.alias = M, this.length = (O || "").length | 0;
    }
    s.stringify = function D(k, M) {
      if (typeof k == "string")
        return k;
      if (Array.isArray(k)) {
        var O = "";
        return k.forEach(function(H) {
          O += D(H, M);
        }), O;
      }
      var N = {
        type: k.type,
        content: D(k.content, M),
        tag: "span",
        classes: ["token", k.type],
        attributes: {},
        language: M
      }, R = k.alias;
      R && (Array.isArray(R) ? Array.prototype.push.apply(N.classes, R) : N.classes.push(R)), o.hooks.run("wrap", N);
      var j = "";
      for (var q in N.attributes)
        j += " " + q + '="' + (N.attributes[q] || "").replace(/"/g, "&quot;") + '"';
      return "<" + N.tag + ' class="' + N.classes.join(" ") + '"' + j + ">" + N.content + "</" + N.tag + ">";
    };
    function c(D, k, M, O) {
      D.lastIndex = k;
      var N = D.exec(M);
      if (N && O && N[1]) {
        var R = N[1].length;
        N.index += R, N[0] = N[0].slice(R);
      }
      return N;
    }
    function h(D, k, M, O, N, R) {
      for (var j in M)
        if (!(!M.hasOwnProperty(j) || !M[j])) {
          var q = M[j];
          q = Array.isArray(q) ? q : [q];
          for (var H = 0; H < q.length; ++H) {
            if (R && R.cause == j + "," + H)
              return;
            var _ = q[H], P = _.inside, $ = !!_.lookbehind, Q = !!_.greedy, B = _.alias;
            if (Q && !_.pattern.global) {
              var G = _.pattern.toString().match(/[imsuy]*$/)[0];
              _.pattern = RegExp(_.pattern.source, G + "g");
            }
            for (var U = _.pattern || _, Z = O.next, ye = N; Z !== k.tail && !(R && ye >= R.reach); ye += Z.value.length, Z = Z.next) {
              var ve = Z.value;
              if (k.length > D.length)
                return;
              if (!(ve instanceof s)) {
                var ie = 1, oe;
                if (Q) {
                  if (oe = c(U, ye, D, $), !oe || oe.index >= D.length)
                    break;
                  var Pe = oe.index, Te = oe.index + oe[0].length, ge = ye;
                  for (ge += Z.value.length; Pe >= ge; )
                    Z = Z.next, ge += Z.value.length;
                  if (ge -= Z.value.length, ye = ge, Z.value instanceof s)
                    continue;
                  for (var ne = Z; ne !== k.tail && (ge < Te || typeof ne.value == "string"); ne = ne.next)
                    ie++, ge += ne.value.length;
                  ie--, ve = D.slice(ye, ge), oe.index -= ye;
                } else if (oe = c(U, 0, ve, $), !oe)
                  continue;
                var Pe = oe.index, Me = oe[0], ke = ve.slice(0, Pe), Xe = ve.slice(Pe + Me.length), Qe = ye + ve.length;
                R && Qe > R.reach && (R.reach = Qe);
                var ht = Z.prev;
                ke && (ht = d(k, ht, ke), ye += ke.length), m(k, ht, ie);
                var at = new s(j, P ? o.tokenize(Me, P) : Me, B, Me);
                if (Z = d(k, ht, at), Xe && d(k, Z, Xe), ie > 1) {
                  var Ut = {
                    cause: j + "," + H,
                    reach: Qe
                  };
                  h(D, k, M, Z.prev, ye, Ut), R && Ut.reach > R.reach && (R.reach = Ut.reach);
                }
              }
            }
          }
        }
    }
    function b() {
      var D = { value: null, prev: null, next: null }, k = { value: null, prev: D, next: null };
      D.next = k, this.head = D, this.tail = k, this.length = 0;
    }
    function d(D, k, M) {
      var O = k.next, N = { value: M, prev: k, next: O };
      return k.next = N, O.prev = N, D.length++, N;
    }
    function m(D, k, M) {
      for (var O = k.next, N = 0; N < M && O !== D.tail; N++)
        O = O.next;
      k.next = O, O.prev = k, D.length -= N;
    }
    function T(D) {
      for (var k = [], M = D.head.next; M !== D.tail; )
        k.push(M.value), M = M.next;
      return k;
    }
    if (!r.document)
      return r.addEventListener && (o.disableWorkerMessageHandler || r.addEventListener("message", function(D) {
        var k = JSON.parse(D.data), M = k.language, O = k.code, N = k.immediateClose;
        r.postMessage(o.highlight(O, o.languages[M], M)), N && r.close();
      }, !1)), o;
    var A = o.util.currentScript();
    A && (o.filename = A.src, A.hasAttribute("data-manual") && (o.manual = !0));
    function S() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var I = document.readyState;
      I === "loading" || I === "interactive" && A && A.defer ? document.addEventListener("DOMContentLoaded", S) : window.requestAnimationFrame ? window.requestAnimationFrame(S) : window.setTimeout(S, 16);
    }
    return o;
  }(t);
  n.exports && (n.exports = e), typeof me < "u" && (me.Prism = e), e.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(a, i) {
      var u = {};
      u["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: e.languages[i]
      }, u.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var o = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: u
        }
      };
      o["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: e.languages[i]
      };
      var s = {};
      s[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: o
      }, e.languages.insertBefore("markup", "cdata", s);
    }
  }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, a) {
      e.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: e.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml, function(r) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var i = r.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(e), e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: e.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: e.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), e.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: e.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), e.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), e.languages.js = e.languages.javascript, function() {
    if (typeof e > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", a = function(A, S) {
      return "✖ Error " + A + " while fetching file: " + S;
    }, i = "✖ Error: File does not exist or is empty", u = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, o = "data-src-status", s = "loading", c = "loaded", h = "failed", b = "pre[data-src]:not([" + o + '="' + c + '"]):not([' + o + '="' + s + '"])';
    function d(A, S, I) {
      var D = new XMLHttpRequest();
      D.open("GET", A, !0), D.onreadystatechange = function() {
        D.readyState == 4 && (D.status < 400 && D.responseText ? S(D.responseText) : D.status >= 400 ? I(a(D.status, D.statusText)) : I(i));
      }, D.send(null);
    }
    function m(A) {
      var S = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A || "");
      if (S) {
        var I = Number(S[1]), D = S[2], k = S[3];
        return D ? k ? [I, Number(k)] : [I, void 0] : [I, I];
      }
    }
    e.hooks.add("before-highlightall", function(A) {
      A.selector += ", " + b;
    }), e.hooks.add("before-sanity-check", function(A) {
      var S = (
        /** @type {HTMLPreElement} */
        A.element
      );
      if (S.matches(b)) {
        A.code = "", S.setAttribute(o, s);
        var I = S.appendChild(document.createElement("CODE"));
        I.textContent = r;
        var D = S.getAttribute("data-src"), k = A.language;
        if (k === "none") {
          var M = (/\.(\w+)$/.exec(D) || [, "none"])[1];
          k = u[M] || M;
        }
        e.util.setLanguage(I, k), e.util.setLanguage(S, k);
        var O = e.plugins.autoloader;
        O && O.loadLanguages(k), d(
          D,
          function(N) {
            S.setAttribute(o, c);
            var R = m(S.getAttribute("data-range"));
            if (R) {
              var j = N.split(/\r\n?|\n/g), q = R[0], H = R[1] == null ? j.length : R[1];
              q < 0 && (q += j.length), q = Math.max(0, Math.min(q - 1, j.length)), H < 0 && (H += j.length), H = Math.max(0, Math.min(H, j.length)), N = j.slice(q, H).join(`
`), S.hasAttribute("data-start") || S.setAttribute("data-start", String(q + 1));
            }
            I.textContent = N, e.highlightElement(I);
          },
          function(N) {
            S.setAttribute(o, h), I.textContent = N;
          }
        );
      }
    }), e.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(S) {
        for (var I = (S || document).querySelectorAll(b), D = 0, k; k = I[D++]; )
          e.highlightElement(k);
      }
    };
    var T = !1;
    e.fileHighlight = function() {
      T || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), T = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Xl);
var Ya = Xl.exports;
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(n) {
  var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, e = {
    "equation-command": {
      pattern: t,
      alias: "regex"
    }
  };
  n.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: e,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: e,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: t,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, n.languages.tex = n.languages.latex, n.languages.context = n.languages.latex;
})(Prism);
(function(n) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", e = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: e,
    environment: {
      pattern: RegExp("\\$" + t),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + t),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  n.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: e
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: r.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, e.inside = n.languages.bash;
  for (var a = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], i = r.variable[1].inside, u = 0; u < a.length; u++)
    i[a[u]] = n.languages.bash[a[u]];
  n.languages.sh = n.languages.bash, n.languages.shell = n.languages.bash;
})(Prism);
const Vh = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', $h = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" color="currentColor" aria-hidden="true" aria-label="Copy" stroke-width="1.3" width="15" height="15">
  <path fill="currentColor" d="M12.728 4.545v8.182H4.545V4.545zm0 -0.909H4.545a0.909 0.909 0 0 0 -0.909 0.909v8.182a0.909 0.909 0 0 0 0.909 0.909h8.182a0.909 0.909 0 0 0 0.909 -0.909V4.545a0.909 0.909 0 0 0 -0.909 -0.909"/>
  <path fill="currentColor" d="M1.818 8.182H0.909V1.818a0.909 0.909 0 0 1 0.909 -0.909h6.364v0.909H1.818Z"/>
</svg>

`, Wh = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" aria-label="Copied" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="m13.813 4.781 -7.438 7.438 -3.188 -3.188"/>
</svg>
`, Os = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${$h}</span>
  <span class="check">${Wh}</span>
</button>`, Zl = /[&<>"']/, Yh = new RegExp(Zl.source, "g"), Kl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Xh = new RegExp(Kl.source, "g"), Zh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Bs = (n) => Zh[n] || "";
function Xa(n, t) {
  if (t) {
    if (Zl.test(n))
      return n.replace(Yh, Bs);
  } else if (Kl.test(n))
    return n.replace(Xh, Bs);
  return n;
}
function Kh(n) {
  const t = n.map((e) => ({
    start: new RegExp(e.left.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
    end: new RegExp(e.right.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
  }));
  return {
    name: "latex",
    level: "block",
    start(e) {
      for (const r of t) {
        const a = e.match(r.start);
        if (a)
          return a.index;
      }
      return -1;
    },
    tokenizer(e, r) {
      for (const a of t) {
        const i = new RegExp(
          `${a.start.source}([\\s\\S]+?)${a.end.source}`
        ).exec(e);
        if (i)
          return {
            type: "latex",
            raw: i[0],
            text: i[1].trim()
          };
      }
    },
    renderer(e) {
      return `<div class="latex-block">${e.text}</div>`;
    }
  };
}
const Jh = {
  code(n, t, e) {
    const r = (t ?? "").match(/\S*/)?.[0] ?? "";
    return n = n.replace(/\n$/, "") + `
`, r ? '<div class="code_wrap">' + Os + '<pre><code class="language-' + Xa(r) + '">' + (e ? n : Xa(n, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + Os + "<pre><code>" + (e ? n : Xa(n, !0)) + `</code></pre></div>
`;
  }
}, Qh = new wu();
function e2({
  header_links: n,
  line_breaks: t,
  latex_delimiters: e
}) {
  const r = new Gl();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: t
    },
    Oh({
      highlight: (i, u) => Ya.languages[u] ? Ya.highlight(i, Ya.languages[u], u) : i
    }),
    { renderer: Jh }
  ), n && (r.use(Hh()), r.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(i) {
          const u = i.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), o = "h" + Qh.slug(u), s = i.depth, c = this.parser.parseInline(i.tokens);
          return `<h${s} id="${o}"><a class="md-header-anchor" href="#${o}">${Vh}</a>${c}</h${s}>
`;
        }
      }
    ]
  }));
  const a = Kh(e);
  return r.use({
    extensions: [a]
  }), r;
}
var Jl = {}, zr = {}, xu = {}, Pr = {}, Du = {};
Object.defineProperty(Du, "__esModule", { value: !0 });
Du.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(n) {
    return n.charCodeAt(0);
  })
);
var Au = {};
Object.defineProperty(Au, "__esModule", { value: !0 });
Au.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(n) {
    return n.charCodeAt(0);
  })
);
var Si = {};
(function(n) {
  var t;
  Object.defineProperty(n, "__esModule", { value: !0 }), n.replaceCodePoint = n.fromCodePoint = void 0;
  var e = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  n.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (t = String.fromCodePoint) !== null && t !== void 0 ? t : function(i) {
    var u = "";
    return i > 65535 && (i -= 65536, u += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), u += String.fromCharCode(i), u;
  };
  function r(i) {
    var u;
    return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (u = e.get(i)) !== null && u !== void 0 ? u : i;
  }
  n.replaceCodePoint = r;
  function a(i) {
    return (0, n.fromCodePoint)(r(i));
  }
  n.default = a;
})(Si);
(function(n) {
  var t = me && me.__createBinding || (Object.create ? function(_, P, $, Q) {
    Q === void 0 && (Q = $);
    var B = Object.getOwnPropertyDescriptor(P, $);
    (!B || ("get" in B ? !P.__esModule : B.writable || B.configurable)) && (B = { enumerable: !0, get: function() {
      return P[$];
    } }), Object.defineProperty(_, Q, B);
  } : function(_, P, $, Q) {
    Q === void 0 && (Q = $), _[Q] = P[$];
  }), e = me && me.__setModuleDefault || (Object.create ? function(_, P) {
    Object.defineProperty(_, "default", { enumerable: !0, value: P });
  } : function(_, P) {
    _.default = P;
  }), r = me && me.__importStar || function(_) {
    if (_ && _.__esModule) return _;
    var P = {};
    if (_ != null) for (var $ in _) $ !== "default" && Object.prototype.hasOwnProperty.call(_, $) && t(P, _, $);
    return e(P, _), P;
  }, a = me && me.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.decodeXML = n.decodeHTMLStrict = n.decodeHTMLAttribute = n.decodeHTML = n.determineBranch = n.EntityDecoder = n.DecodingMode = n.BinTrieFlags = n.fromCodePoint = n.replaceCodePoint = n.decodeCodePoint = n.xmlDecodeTree = n.htmlDecodeTree = void 0;
  var i = a(Du);
  n.htmlDecodeTree = i.default;
  var u = a(Au);
  n.xmlDecodeTree = u.default;
  var o = r(Si);
  n.decodeCodePoint = o.default;
  var s = Si;
  Object.defineProperty(n, "replaceCodePoint", { enumerable: !0, get: function() {
    return s.replaceCodePoint;
  } }), Object.defineProperty(n, "fromCodePoint", { enumerable: !0, get: function() {
    return s.fromCodePoint;
  } });
  var c;
  (function(_) {
    _[_.NUM = 35] = "NUM", _[_.SEMI = 59] = "SEMI", _[_.EQUALS = 61] = "EQUALS", _[_.ZERO = 48] = "ZERO", _[_.NINE = 57] = "NINE", _[_.LOWER_A = 97] = "LOWER_A", _[_.LOWER_F = 102] = "LOWER_F", _[_.LOWER_X = 120] = "LOWER_X", _[_.LOWER_Z = 122] = "LOWER_Z", _[_.UPPER_A = 65] = "UPPER_A", _[_.UPPER_F = 70] = "UPPER_F", _[_.UPPER_Z = 90] = "UPPER_Z";
  })(c || (c = {}));
  var h = 32, b;
  (function(_) {
    _[_.VALUE_LENGTH = 49152] = "VALUE_LENGTH", _[_.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _[_.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(b = n.BinTrieFlags || (n.BinTrieFlags = {}));
  function d(_) {
    return _ >= c.ZERO && _ <= c.NINE;
  }
  function m(_) {
    return _ >= c.UPPER_A && _ <= c.UPPER_F || _ >= c.LOWER_A && _ <= c.LOWER_F;
  }
  function T(_) {
    return _ >= c.UPPER_A && _ <= c.UPPER_Z || _ >= c.LOWER_A && _ <= c.LOWER_Z || d(_);
  }
  function A(_) {
    return _ === c.EQUALS || T(_);
  }
  var S;
  (function(_) {
    _[_.EntityStart = 0] = "EntityStart", _[_.NumericStart = 1] = "NumericStart", _[_.NumericDecimal = 2] = "NumericDecimal", _[_.NumericHex = 3] = "NumericHex", _[_.NamedEntity = 4] = "NamedEntity";
  })(S || (S = {}));
  var I;
  (function(_) {
    _[_.Legacy = 0] = "Legacy", _[_.Strict = 1] = "Strict", _[_.Attribute = 2] = "Attribute";
  })(I = n.DecodingMode || (n.DecodingMode = {}));
  var D = (
    /** @class */
    function() {
      function _(P, $, Q) {
        this.decodeTree = P, this.emitCodePoint = $, this.errors = Q, this.state = S.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = I.Strict;
      }
      return _.prototype.startEntity = function(P) {
        this.decodeMode = P, this.state = S.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, _.prototype.write = function(P, $) {
        switch (this.state) {
          case S.EntityStart:
            return P.charCodeAt($) === c.NUM ? (this.state = S.NumericStart, this.consumed += 1, this.stateNumericStart(P, $ + 1)) : (this.state = S.NamedEntity, this.stateNamedEntity(P, $));
          case S.NumericStart:
            return this.stateNumericStart(P, $);
          case S.NumericDecimal:
            return this.stateNumericDecimal(P, $);
          case S.NumericHex:
            return this.stateNumericHex(P, $);
          case S.NamedEntity:
            return this.stateNamedEntity(P, $);
        }
      }, _.prototype.stateNumericStart = function(P, $) {
        return $ >= P.length ? -1 : (P.charCodeAt($) | h) === c.LOWER_X ? (this.state = S.NumericHex, this.consumed += 1, this.stateNumericHex(P, $ + 1)) : (this.state = S.NumericDecimal, this.stateNumericDecimal(P, $));
      }, _.prototype.addToNumericResult = function(P, $, Q, B) {
        if ($ !== Q) {
          var G = Q - $;
          this.result = this.result * Math.pow(B, G) + parseInt(P.substr($, G), B), this.consumed += G;
        }
      }, _.prototype.stateNumericHex = function(P, $) {
        for (var Q = $; $ < P.length; ) {
          var B = P.charCodeAt($);
          if (d(B) || m(B))
            $ += 1;
          else
            return this.addToNumericResult(P, Q, $, 16), this.emitNumericEntity(B, 3);
        }
        return this.addToNumericResult(P, Q, $, 16), -1;
      }, _.prototype.stateNumericDecimal = function(P, $) {
        for (var Q = $; $ < P.length; ) {
          var B = P.charCodeAt($);
          if (d(B))
            $ += 1;
          else
            return this.addToNumericResult(P, Q, $, 10), this.emitNumericEntity(B, 2);
        }
        return this.addToNumericResult(P, Q, $, 10), -1;
      }, _.prototype.emitNumericEntity = function(P, $) {
        var Q;
        if (this.consumed <= $)
          return (Q = this.errors) === null || Q === void 0 || Q.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (P === c.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === I.Strict)
          return 0;
        return this.emitCodePoint((0, o.replaceCodePoint)(this.result), this.consumed), this.errors && (P !== c.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, _.prototype.stateNamedEntity = function(P, $) {
        for (var Q = this.decodeTree, B = Q[this.treeIndex], G = (B & b.VALUE_LENGTH) >> 14; $ < P.length; $++, this.excess++) {
          var U = P.charCodeAt($);
          if (this.treeIndex = M(Q, B, this.treeIndex + Math.max(1, G), U), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === I.Attribute && // We shouldn't have consumed any characters after the entity,
            (G === 0 || // And there should be no invalid characters.
            A(U)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (B = Q[this.treeIndex], G = (B & b.VALUE_LENGTH) >> 14, G !== 0) {
            if (U === c.SEMI)
              return this.emitNamedEntityData(this.treeIndex, G, this.consumed + this.excess);
            this.decodeMode !== I.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, _.prototype.emitNotTerminatedNamedEntity = function() {
        var P, $ = this, Q = $.result, B = $.decodeTree, G = (B[Q] & b.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(Q, G, this.consumed), (P = this.errors) === null || P === void 0 || P.missingSemicolonAfterCharacterReference(), this.consumed;
      }, _.prototype.emitNamedEntityData = function(P, $, Q) {
        var B = this.decodeTree;
        return this.emitCodePoint($ === 1 ? B[P] & ~b.VALUE_LENGTH : B[P + 1], Q), $ === 3 && this.emitCodePoint(B[P + 2], Q), Q;
      }, _.prototype.end = function() {
        var P;
        switch (this.state) {
          case S.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== I.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case S.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case S.NumericHex:
            return this.emitNumericEntity(0, 3);
          case S.NumericStart:
            return (P = this.errors) === null || P === void 0 || P.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case S.EntityStart:
            return 0;
        }
      }, _;
    }()
  );
  n.EntityDecoder = D;
  function k(_) {
    var P = "", $ = new D(_, function(Q) {
      return P += (0, o.fromCodePoint)(Q);
    });
    return function(B, G) {
      for (var U = 0, Z = 0; (Z = B.indexOf("&", Z)) >= 0; ) {
        P += B.slice(U, Z), $.startEntity(G);
        var ye = $.write(
          B,
          // Skip the "&"
          Z + 1
        );
        if (ye < 0) {
          U = Z + $.end();
          break;
        }
        U = Z + ye, Z = ye === 0 ? U + 1 : U;
      }
      var ve = P + B.slice(U);
      return P = "", ve;
    };
  }
  function M(_, P, $, Q) {
    var B = (P & b.BRANCH_LENGTH) >> 7, G = P & b.JUMP_TABLE;
    if (B === 0)
      return G !== 0 && Q === G ? $ : -1;
    if (G) {
      var U = Q - G;
      return U < 0 || U >= B ? -1 : _[$ + U] - 1;
    }
    for (var Z = $, ye = Z + B - 1; Z <= ye; ) {
      var ve = Z + ye >>> 1, ie = _[ve];
      if (ie < Q)
        Z = ve + 1;
      else if (ie > Q)
        ye = ve - 1;
      else
        return _[ve + B];
    }
    return -1;
  }
  n.determineBranch = M;
  var O = k(i.default), N = k(u.default);
  function R(_, P) {
    return P === void 0 && (P = I.Legacy), O(_, P);
  }
  n.decodeHTML = R;
  function j(_) {
    return O(_, I.Attribute);
  }
  n.decodeHTMLAttribute = j;
  function q(_) {
    return O(_, I.Strict);
  }
  n.decodeHTMLStrict = q;
  function H(_) {
    return N(_, I.Strict);
  }
  n.decodeXML = H;
})(Pr);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.QuoteType = void 0;
  var t = Pr, e;
  (function(d) {
    d[d.Tab = 9] = "Tab", d[d.NewLine = 10] = "NewLine", d[d.FormFeed = 12] = "FormFeed", d[d.CarriageReturn = 13] = "CarriageReturn", d[d.Space = 32] = "Space", d[d.ExclamationMark = 33] = "ExclamationMark", d[d.Number = 35] = "Number", d[d.Amp = 38] = "Amp", d[d.SingleQuote = 39] = "SingleQuote", d[d.DoubleQuote = 34] = "DoubleQuote", d[d.Dash = 45] = "Dash", d[d.Slash = 47] = "Slash", d[d.Zero = 48] = "Zero", d[d.Nine = 57] = "Nine", d[d.Semi = 59] = "Semi", d[d.Lt = 60] = "Lt", d[d.Eq = 61] = "Eq", d[d.Gt = 62] = "Gt", d[d.Questionmark = 63] = "Questionmark", d[d.UpperA = 65] = "UpperA", d[d.LowerA = 97] = "LowerA", d[d.UpperF = 70] = "UpperF", d[d.LowerF = 102] = "LowerF", d[d.UpperZ = 90] = "UpperZ", d[d.LowerZ = 122] = "LowerZ", d[d.LowerX = 120] = "LowerX", d[d.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  })(e || (e = {}));
  var r;
  (function(d) {
    d[d.Text = 1] = "Text", d[d.BeforeTagName = 2] = "BeforeTagName", d[d.InTagName = 3] = "InTagName", d[d.InSelfClosingTag = 4] = "InSelfClosingTag", d[d.BeforeClosingTagName = 5] = "BeforeClosingTagName", d[d.InClosingTagName = 6] = "InClosingTagName", d[d.AfterClosingTagName = 7] = "AfterClosingTagName", d[d.BeforeAttributeName = 8] = "BeforeAttributeName", d[d.InAttributeName = 9] = "InAttributeName", d[d.AfterAttributeName = 10] = "AfterAttributeName", d[d.BeforeAttributeValue = 11] = "BeforeAttributeValue", d[d.InAttributeValueDq = 12] = "InAttributeValueDq", d[d.InAttributeValueSq = 13] = "InAttributeValueSq", d[d.InAttributeValueNq = 14] = "InAttributeValueNq", d[d.BeforeDeclaration = 15] = "BeforeDeclaration", d[d.InDeclaration = 16] = "InDeclaration", d[d.InProcessingInstruction = 17] = "InProcessingInstruction", d[d.BeforeComment = 18] = "BeforeComment", d[d.CDATASequence = 19] = "CDATASequence", d[d.InSpecialComment = 20] = "InSpecialComment", d[d.InCommentLike = 21] = "InCommentLike", d[d.BeforeSpecialS = 22] = "BeforeSpecialS", d[d.SpecialStartSequence = 23] = "SpecialStartSequence", d[d.InSpecialTag = 24] = "InSpecialTag", d[d.BeforeEntity = 25] = "BeforeEntity", d[d.BeforeNumericEntity = 26] = "BeforeNumericEntity", d[d.InNamedEntity = 27] = "InNamedEntity", d[d.InNumericEntity = 28] = "InNumericEntity", d[d.InHexEntity = 29] = "InHexEntity";
  })(r || (r = {}));
  function a(d) {
    return d === e.Space || d === e.NewLine || d === e.Tab || d === e.FormFeed || d === e.CarriageReturn;
  }
  function i(d) {
    return d === e.Slash || d === e.Gt || a(d);
  }
  function u(d) {
    return d >= e.Zero && d <= e.Nine;
  }
  function o(d) {
    return d >= e.LowerA && d <= e.LowerZ || d >= e.UpperA && d <= e.UpperZ;
  }
  function s(d) {
    return d >= e.UpperA && d <= e.UpperF || d >= e.LowerA && d <= e.LowerF;
  }
  var c;
  (function(d) {
    d[d.NoValue = 0] = "NoValue", d[d.Unquoted = 1] = "Unquoted", d[d.Single = 2] = "Single", d[d.Double = 3] = "Double";
  })(c = n.QuoteType || (n.QuoteType = {}));
  var h = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    // `</title`
  }, b = (
    /** @class */
    function() {
      function d(m, T) {
        var A = m.xmlMode, S = A === void 0 ? !1 : A, I = m.decodeEntities, D = I === void 0 ? !0 : I;
        this.cbs = T, this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = S, this.decodeEntities = D, this.entityTrie = S ? t.xmlDecodeTree : t.htmlDecodeTree;
      }
      return d.prototype.reset = function() {
        this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
      }, d.prototype.write = function(m) {
        this.offset += this.buffer.length, this.buffer = m, this.parse();
      }, d.prototype.end = function() {
        this.running && this.finish();
      }, d.prototype.pause = function() {
        this.running = !1;
      }, d.prototype.resume = function() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
      }, d.prototype.getIndex = function() {
        return this.index;
      }, d.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, d.prototype.stateText = function(m) {
        m === e.Lt || !this.decodeEntities && this.fastForwardTo(e.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = r.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && m === e.Amp && (this.state = r.BeforeEntity);
      }, d.prototype.stateSpecialStartSequence = function(m) {
        var T = this.sequenceIndex === this.currentSequence.length, A = T ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          i(m)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (m | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!A)
          this.isSpecial = !1;
        else if (!T) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = r.InTagName, this.stateInTagName(m);
      }, d.prototype.stateInSpecialTag = function(m) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (m === e.Gt || a(m)) {
            var T = this.index - this.currentSequence.length;
            if (this.sectionStart < T) {
              var A = this.index;
              this.index = T, this.cbs.ontext(this.sectionStart, T), this.index = A;
            }
            this.isSpecial = !1, this.sectionStart = T + 2, this.stateInClosingTagName(m);
            return;
          }
          this.sequenceIndex = 0;
        }
        (m | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === h.TitleEnd ? this.decodeEntities && m === e.Amp && (this.state = r.BeforeEntity) : this.fastForwardTo(e.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(m === e.Lt);
      }, d.prototype.stateCDATASequence = function(m) {
        m === h.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === h.Cdata.length && (this.state = r.InCommentLike, this.currentSequence = h.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = r.InDeclaration, this.stateInDeclaration(m));
      }, d.prototype.fastForwardTo = function(m) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === m)
            return !0;
        return this.index = this.buffer.length + this.offset - 1, !1;
      }, d.prototype.stateInCommentLike = function(m) {
        m === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === h.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = r.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : m !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, d.prototype.isTagStartChar = function(m) {
        return this.xmlMode ? !i(m) : o(m);
      }, d.prototype.startSpecial = function(m, T) {
        this.isSpecial = !0, this.currentSequence = m, this.sequenceIndex = T, this.state = r.SpecialStartSequence;
      }, d.prototype.stateBeforeTagName = function(m) {
        if (m === e.ExclamationMark)
          this.state = r.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (m === e.Questionmark)
          this.state = r.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(m)) {
          var T = m | 32;
          this.sectionStart = this.index, !this.xmlMode && T === h.TitleEnd[2] ? this.startSpecial(h.TitleEnd, 3) : this.state = !this.xmlMode && T === h.ScriptEnd[2] ? r.BeforeSpecialS : r.InTagName;
        } else m === e.Slash ? this.state = r.BeforeClosingTagName : (this.state = r.Text, this.stateText(m));
      }, d.prototype.stateInTagName = function(m) {
        i(m) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m));
      }, d.prototype.stateBeforeClosingTagName = function(m) {
        a(m) || (m === e.Gt ? this.state = r.Text : (this.state = this.isTagStartChar(m) ? r.InClosingTagName : r.InSpecialComment, this.sectionStart = this.index));
      }, d.prototype.stateInClosingTagName = function(m) {
        (m === e.Gt || a(m)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterClosingTagName, this.stateAfterClosingTagName(m));
      }, d.prototype.stateAfterClosingTagName = function(m) {
        (m === e.Gt || this.fastForwardTo(e.Gt)) && (this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1);
      }, d.prototype.stateBeforeAttributeName = function(m) {
        m === e.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = r.InSpecialTag, this.sequenceIndex = 0) : this.state = r.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : m === e.Slash ? this.state = r.InSelfClosingTag : a(m) || (this.state = r.InAttributeName, this.sectionStart = this.index);
      }, d.prototype.stateInSelfClosingTag = function(m) {
        m === e.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : a(m) || (this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m));
      }, d.prototype.stateInAttributeName = function(m) {
        (m === e.Eq || i(m)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterAttributeName, this.stateAfterAttributeName(m));
      }, d.prototype.stateAfterAttributeName = function(m) {
        m === e.Eq ? this.state = r.BeforeAttributeValue : m === e.Slash || m === e.Gt ? (this.cbs.onattribend(c.NoValue, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m)) : a(m) || (this.cbs.onattribend(c.NoValue, this.index), this.state = r.InAttributeName, this.sectionStart = this.index);
      }, d.prototype.stateBeforeAttributeValue = function(m) {
        m === e.DoubleQuote ? (this.state = r.InAttributeValueDq, this.sectionStart = this.index + 1) : m === e.SingleQuote ? (this.state = r.InAttributeValueSq, this.sectionStart = this.index + 1) : a(m) || (this.sectionStart = this.index, this.state = r.InAttributeValueNq, this.stateInAttributeValueNoQuotes(m));
      }, d.prototype.handleInAttributeValue = function(m, T) {
        m === T || !this.decodeEntities && this.fastForwardTo(T) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(T === e.DoubleQuote ? c.Double : c.Single, this.index), this.state = r.BeforeAttributeName) : this.decodeEntities && m === e.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, d.prototype.stateInAttributeValueDoubleQuotes = function(m) {
        this.handleInAttributeValue(m, e.DoubleQuote);
      }, d.prototype.stateInAttributeValueSingleQuotes = function(m) {
        this.handleInAttributeValue(m, e.SingleQuote);
      }, d.prototype.stateInAttributeValueNoQuotes = function(m) {
        a(m) || m === e.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(c.Unquoted, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m)) : this.decodeEntities && m === e.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, d.prototype.stateBeforeDeclaration = function(m) {
        m === e.OpeningSquareBracket ? (this.state = r.CDATASequence, this.sequenceIndex = 0) : this.state = m === e.Dash ? r.BeforeComment : r.InDeclaration;
      }, d.prototype.stateInDeclaration = function(m) {
        (m === e.Gt || this.fastForwardTo(e.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, d.prototype.stateInProcessingInstruction = function(m) {
        (m === e.Gt || this.fastForwardTo(e.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, d.prototype.stateBeforeComment = function(m) {
        m === e.Dash ? (this.state = r.InCommentLike, this.currentSequence = h.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = r.InDeclaration;
      }, d.prototype.stateInSpecialComment = function(m) {
        (m === e.Gt || this.fastForwardTo(e.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = r.Text, this.sectionStart = this.index + 1);
      }, d.prototype.stateBeforeSpecialS = function(m) {
        var T = m | 32;
        T === h.ScriptEnd[3] ? this.startSpecial(h.ScriptEnd, 4) : T === h.StyleEnd[3] ? this.startSpecial(h.StyleEnd, 4) : (this.state = r.InTagName, this.stateInTagName(m));
      }, d.prototype.stateBeforeEntity = function(m) {
        this.entityExcess = 1, this.entityResult = 0, m === e.Number ? this.state = r.BeforeNumericEntity : m === e.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = r.InNamedEntity, this.stateInNamedEntity(m));
      }, d.prototype.stateInNamedEntity = function(m) {
        if (this.entityExcess += 1, this.trieIndex = (0, t.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, m), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var T = this.trieCurrent & t.BinTrieFlags.VALUE_LENGTH;
        if (T) {
          var A = (T >> 14) - 1;
          if (!this.allowLegacyEntity() && m !== e.Semi)
            this.trieIndex += A;
          else {
            var S = this.index - this.entityExcess + 1;
            S > this.sectionStart && this.emitPartial(this.sectionStart, S), this.entityResult = this.trieIndex, this.trieIndex += A, this.entityExcess = 0, this.sectionStart = this.index + 1, A === 0 && this.emitNamedEntity();
          }
        }
      }, d.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var m = (this.entityTrie[this.entityResult] & t.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (m) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~t.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, d.prototype.stateBeforeNumericEntity = function(m) {
        (m | 32) === e.LowerX ? (this.entityExcess++, this.state = r.InHexEntity) : (this.state = r.InNumericEntity, this.stateInNumericEntity(m));
      }, d.prototype.emitNumericEntity = function(m) {
        var T = this.index - this.entityExcess - 1, A = T + 2 + +(this.state === r.InHexEntity);
        A !== this.index && (T > this.sectionStart && this.emitPartial(this.sectionStart, T), this.sectionStart = this.index + Number(m), this.emitCodePoint((0, t.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, d.prototype.stateInNumericEntity = function(m) {
        m === e.Semi ? this.emitNumericEntity(!0) : u(m) ? (this.entityResult = this.entityResult * 10 + (m - e.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, d.prototype.stateInHexEntity = function(m) {
        m === e.Semi ? this.emitNumericEntity(!0) : u(m) ? (this.entityResult = this.entityResult * 16 + (m - e.Zero), this.entityExcess++) : s(m) ? (this.entityResult = this.entityResult * 16 + ((m | 32) - e.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, d.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === r.Text || this.baseState === r.InSpecialTag);
      }, d.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === r.Text || this.state === r.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === r.InAttributeValueDq || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, d.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, d.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var m = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case r.Text: {
              this.stateText(m);
              break;
            }
            case r.SpecialStartSequence: {
              this.stateSpecialStartSequence(m);
              break;
            }
            case r.InSpecialTag: {
              this.stateInSpecialTag(m);
              break;
            }
            case r.CDATASequence: {
              this.stateCDATASequence(m);
              break;
            }
            case r.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(m);
              break;
            }
            case r.InAttributeName: {
              this.stateInAttributeName(m);
              break;
            }
            case r.InCommentLike: {
              this.stateInCommentLike(m);
              break;
            }
            case r.InSpecialComment: {
              this.stateInSpecialComment(m);
              break;
            }
            case r.BeforeAttributeName: {
              this.stateBeforeAttributeName(m);
              break;
            }
            case r.InTagName: {
              this.stateInTagName(m);
              break;
            }
            case r.InClosingTagName: {
              this.stateInClosingTagName(m);
              break;
            }
            case r.BeforeTagName: {
              this.stateBeforeTagName(m);
              break;
            }
            case r.AfterAttributeName: {
              this.stateAfterAttributeName(m);
              break;
            }
            case r.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(m);
              break;
            }
            case r.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(m);
              break;
            }
            case r.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(m);
              break;
            }
            case r.AfterClosingTagName: {
              this.stateAfterClosingTagName(m);
              break;
            }
            case r.BeforeSpecialS: {
              this.stateBeforeSpecialS(m);
              break;
            }
            case r.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(m);
              break;
            }
            case r.InSelfClosingTag: {
              this.stateInSelfClosingTag(m);
              break;
            }
            case r.InDeclaration: {
              this.stateInDeclaration(m);
              break;
            }
            case r.BeforeDeclaration: {
              this.stateBeforeDeclaration(m);
              break;
            }
            case r.BeforeComment: {
              this.stateBeforeComment(m);
              break;
            }
            case r.InProcessingInstruction: {
              this.stateInProcessingInstruction(m);
              break;
            }
            case r.InNamedEntity: {
              this.stateInNamedEntity(m);
              break;
            }
            case r.BeforeEntity: {
              this.stateBeforeEntity(m);
              break;
            }
            case r.InHexEntity: {
              this.stateInHexEntity(m);
              break;
            }
            case r.InNumericEntity: {
              this.stateInNumericEntity(m);
              break;
            }
            default:
              this.stateBeforeNumericEntity(m);
          }
          this.index++;
        }
        this.cleanup();
      }, d.prototype.finish = function() {
        this.state === r.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, d.prototype.handleTrailingData = function() {
        var m = this.buffer.length + this.offset;
        this.state === r.InCommentLike ? this.currentSequence === h.CdataEnd ? this.cbs.oncdata(this.sectionStart, m, 0) : this.cbs.oncomment(this.sectionStart, m, 0) : this.state === r.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InTagName || this.state === r.BeforeAttributeName || this.state === r.BeforeAttributeValue || this.state === r.AfterAttributeName || this.state === r.InAttributeName || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueDq || this.state === r.InAttributeValueNq || this.state === r.InClosingTagName || this.cbs.ontext(this.sectionStart, m);
      }, d.prototype.emitPartial = function(m, T) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribdata(m, T) : this.cbs.ontext(m, T);
      }, d.prototype.emitCodePoint = function(m) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribentity(m) : this.cbs.ontextentity(m);
      }, d;
    }()
  );
  n.default = b;
})(xu);
var t2 = me && me.__createBinding || (Object.create ? function(n, t, e, r) {
  r === void 0 && (r = e);
  var a = Object.getOwnPropertyDescriptor(t, e);
  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return t[e];
  } }), Object.defineProperty(n, r, a);
} : function(n, t, e, r) {
  r === void 0 && (r = e), n[r] = t[e];
}), r2 = me && me.__setModuleDefault || (Object.create ? function(n, t) {
  Object.defineProperty(n, "default", { enumerable: !0, value: t });
} : function(n, t) {
  n.default = t;
}), n2 = me && me.__importStar || function(n) {
  if (n && n.__esModule) return n;
  var t = {};
  if (n != null) for (var e in n) e !== "default" && Object.prototype.hasOwnProperty.call(n, e) && t2(t, n, e);
  return r2(t, n), t;
};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.Parser = void 0;
var An = n2(xu), Ls = Pr, Q0 = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), Oe = /* @__PURE__ */ new Set(["p"]), Rs = /* @__PURE__ */ new Set(["thead", "tbody"]), zs = /* @__PURE__ */ new Set(["dd", "dt"]), Ps = /* @__PURE__ */ new Set(["rt", "rp"]), a2 = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", Oe],
  ["h1", Oe],
  ["h2", Oe],
  ["h3", Oe],
  ["h4", Oe],
  ["h5", Oe],
  ["h6", Oe],
  ["select", Q0],
  ["input", Q0],
  ["output", Q0],
  ["button", Q0],
  ["datalist", Q0],
  ["textarea", Q0],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", zs],
  ["dt", zs],
  ["address", Oe],
  ["article", Oe],
  ["aside", Oe],
  ["blockquote", Oe],
  ["details", Oe],
  ["div", Oe],
  ["dl", Oe],
  ["fieldset", Oe],
  ["figcaption", Oe],
  ["figure", Oe],
  ["footer", Oe],
  ["form", Oe],
  ["header", Oe],
  ["hr", Oe],
  ["main", Oe],
  ["nav", Oe],
  ["ol", Oe],
  ["pre", Oe],
  ["section", Oe],
  ["table", Oe],
  ["ul", Oe],
  ["rt", Ps],
  ["rp", Ps],
  ["tbody", Rs],
  ["tfoot", Rs]
]), i2 = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), qs = /* @__PURE__ */ new Set(["math", "svg"]), Hs = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), u2 = /\s|\//, s2 = (
  /** @class */
  function() {
    function n(t, e) {
      e === void 0 && (e = {});
      var r, a, i, u, o;
      this.options = e, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t ?? {}, this.lowerCaseTagNames = (r = e.lowerCaseTags) !== null && r !== void 0 ? r : !e.xmlMode, this.lowerCaseAttributeNames = (a = e.lowerCaseAttributeNames) !== null && a !== void 0 ? a : !e.xmlMode, this.tokenizer = new ((i = e.Tokenizer) !== null && i !== void 0 ? i : An.default)(this.options, this), (o = (u = this.cbs).onparserinit) === null || o === void 0 || o.call(u, this);
    }
    return n.prototype.ontext = function(t, e) {
      var r, a, i = this.getSlice(t, e);
      this.endIndex = e - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, i), this.startIndex = e;
    }, n.prototype.ontextentity = function(t) {
      var e, r, a = this.tokenizer.getSectionStart();
      this.endIndex = a - 1, (r = (e = this.cbs).ontext) === null || r === void 0 || r.call(e, (0, Ls.fromCodePoint)(t)), this.startIndex = a;
    }, n.prototype.isVoidElement = function(t) {
      return !this.options.xmlMode && i2.has(t);
    }, n.prototype.onopentagname = function(t, e) {
      this.endIndex = e;
      var r = this.getSlice(t, e);
      this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r);
    }, n.prototype.emitOpenTag = function(t) {
      var e, r, a, i;
      this.openTagStart = this.startIndex, this.tagname = t;
      var u = !this.options.xmlMode && a2.get(t);
      if (u)
        for (; this.stack.length > 0 && u.has(this.stack[this.stack.length - 1]); ) {
          var o = this.stack.pop();
          (r = (e = this.cbs).onclosetag) === null || r === void 0 || r.call(e, o, !0);
        }
      this.isVoidElement(t) || (this.stack.push(t), qs.has(t) ? this.foreignContext.push(!0) : Hs.has(t) && this.foreignContext.push(!1)), (i = (a = this.cbs).onopentagname) === null || i === void 0 || i.call(a, t), this.cbs.onopentag && (this.attribs = {});
    }, n.prototype.endOpenTag = function(t) {
      var e, r;
      this.startIndex = this.openTagStart, this.attribs && ((r = (e = this.cbs).onopentag) === null || r === void 0 || r.call(e, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
    }, n.prototype.onopentagend = function(t) {
      this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1;
    }, n.prototype.onclosetag = function(t, e) {
      var r, a, i, u, o, s;
      this.endIndex = e;
      var c = this.getSlice(t, e);
      if (this.lowerCaseTagNames && (c = c.toLowerCase()), (qs.has(c) || Hs.has(c)) && this.foreignContext.pop(), this.isVoidElement(c))
        !this.options.xmlMode && c === "br" && ((a = (r = this.cbs).onopentagname) === null || a === void 0 || a.call(r, "br"), (u = (i = this.cbs).onopentag) === null || u === void 0 || u.call(i, "br", {}, !0), (s = (o = this.cbs).onclosetag) === null || s === void 0 || s.call(o, "br", !1));
      else {
        var h = this.stack.lastIndexOf(c);
        if (h !== -1)
          if (this.cbs.onclosetag)
            for (var b = this.stack.length - h; b--; )
              this.cbs.onclosetag(this.stack.pop(), b !== 0);
          else
            this.stack.length = h;
        else !this.options.xmlMode && c === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = e + 1;
    }, n.prototype.onselfclosingtag = function(t) {
      this.endIndex = t, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t);
    }, n.prototype.closeCurrentTag = function(t) {
      var e, r, a = this.tagname;
      this.endOpenTag(t), this.stack[this.stack.length - 1] === a && ((r = (e = this.cbs).onclosetag) === null || r === void 0 || r.call(e, a, !t), this.stack.pop());
    }, n.prototype.onattribname = function(t, e) {
      this.startIndex = t;
      var r = this.getSlice(t, e);
      this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
    }, n.prototype.onattribdata = function(t, e) {
      this.attribvalue += this.getSlice(t, e);
    }, n.prototype.onattribentity = function(t) {
      this.attribvalue += (0, Ls.fromCodePoint)(t);
    }, n.prototype.onattribend = function(t, e) {
      var r, a;
      this.endIndex = e, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, t === An.QuoteType.Double ? '"' : t === An.QuoteType.Single ? "'" : t === An.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, n.prototype.getInstructionName = function(t) {
      var e = t.search(u2), r = e < 0 ? t : t.substr(0, e);
      return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
    }, n.prototype.ondeclaration = function(t, e) {
      this.endIndex = e;
      var r = this.getSlice(t, e);
      if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
      }
      this.startIndex = e + 1;
    }, n.prototype.onprocessinginstruction = function(t, e) {
      this.endIndex = e;
      var r = this.getSlice(t, e);
      if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
      }
      this.startIndex = e + 1;
    }, n.prototype.oncomment = function(t, e, r) {
      var a, i, u, o;
      this.endIndex = e, (i = (a = this.cbs).oncomment) === null || i === void 0 || i.call(a, this.getSlice(t, e - r)), (o = (u = this.cbs).oncommentend) === null || o === void 0 || o.call(u), this.startIndex = e + 1;
    }, n.prototype.oncdata = function(t, e, r) {
      var a, i, u, o, s, c, h, b, d, m;
      this.endIndex = e;
      var T = this.getSlice(t, e - r);
      this.options.xmlMode || this.options.recognizeCDATA ? ((i = (a = this.cbs).oncdatastart) === null || i === void 0 || i.call(a), (o = (u = this.cbs).ontext) === null || o === void 0 || o.call(u, T), (c = (s = this.cbs).oncdataend) === null || c === void 0 || c.call(s)) : ((b = (h = this.cbs).oncomment) === null || b === void 0 || b.call(h, "[CDATA[".concat(T, "]]")), (m = (d = this.cbs).oncommentend) === null || m === void 0 || m.call(d)), this.startIndex = e + 1;
    }, n.prototype.onend = function() {
      var t, e;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = this.stack.length; r > 0; this.cbs.onclosetag(this.stack[--r], !0))
          ;
      }
      (e = (t = this.cbs).onend) === null || e === void 0 || e.call(t);
    }, n.prototype.reset = function() {
      var t, e, r, a;
      (e = (t = this.cbs).onreset) === null || e === void 0 || e.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }, n.prototype.parseComplete = function(t) {
      this.reset(), this.end(t);
    }, n.prototype.getSlice = function(t, e) {
      for (; t - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      for (var r = this.buffers[0].slice(t - this.bufferOffset, e - this.bufferOffset); e - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(), r += this.buffers[0].slice(0, e - this.bufferOffset);
      return r;
    }, n.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, n.prototype.write = function(t) {
      var e, r;
      if (this.ended) {
        (r = (e = this.cbs).onerror) === null || r === void 0 || r.call(e, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++);
    }, n.prototype.end = function(t) {
      var e, r;
      if (this.ended) {
        (r = (e = this.cbs).onerror) === null || r === void 0 || r.call(e, new Error(".end() after done!"));
        return;
      }
      t && this.write(t), this.ended = !0, this.tokenizer.end();
    }, n.prototype.pause = function() {
      this.tokenizer.pause();
    }, n.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, n.prototype.parseChunk = function(t) {
      this.write(t);
    }, n.prototype.done = function(t) {
      this.end(t);
    }, n;
  }()
);
zr.Parser = s2;
var b0 = {}, hr = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Doctype = n.CDATA = n.Tag = n.Style = n.Script = n.Comment = n.Directive = n.Text = n.Root = n.isTag = n.ElementType = void 0;
  var t;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(t = n.ElementType || (n.ElementType = {}));
  function e(r) {
    return r.type === t.Tag || r.type === t.Script || r.type === t.Style;
  }
  n.isTag = e, n.Root = t.Root, n.Text = t.Text, n.Directive = t.Directive, n.Comment = t.Comment, n.Script = t.Script, n.Style = t.Style, n.Tag = t.Tag, n.CDATA = t.CDATA, n.Doctype = t.Doctype;
})(hr);
var Se = {}, O0 = me && me.__extends || /* @__PURE__ */ function() {
  var n = function(t, e) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
    }, n(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    n(t, e);
    function r() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  };
}(), Or = me && me.__assign || function() {
  return Or = Object.assign || function(n) {
    for (var t, e = 1, r = arguments.length; e < r; e++) {
      t = arguments[e];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, Or.apply(this, arguments);
};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.cloneNode = Se.hasChildren = Se.isDocument = Se.isDirective = Se.isComment = Se.isText = Se.isCDATA = Se.isTag = Se.Element = Se.Document = Se.CDATA = Se.NodeWithChildren = Se.ProcessingInstruction = Se.Comment = Se.Text = Se.DataNode = Se.Node = void 0;
var wt = hr, Su = (
  /** @class */
  function() {
    function n() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(n.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(t) {
        this.parent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(t) {
        this.prev = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(t) {
        this.next = t;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.cloneNode = function(t) {
      return t === void 0 && (t = !1), ku(this, t);
    }, n;
  }()
);
Se.Node = Su;
var xa = (
  /** @class */
  function(n) {
    O0(t, n);
    function t(e) {
      var r = n.call(this) || this;
      return r.data = e, r;
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(e) {
        this.data = e;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Su)
);
Se.DataNode = xa;
var Ql = (
  /** @class */
  function(n) {
    O0(t, n);
    function t() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = wt.ElementType.Text, e;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(xa)
);
Se.Text = Ql;
var ec = (
  /** @class */
  function(n) {
    O0(t, n);
    function t() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = wt.ElementType.Comment, e;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(xa)
);
Se.Comment = ec;
var tc = (
  /** @class */
  function(n) {
    O0(t, n);
    function t(e, r) {
      var a = n.call(this, r) || this;
      return a.name = e, a.type = wt.ElementType.Directive, a;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(xa)
);
Se.ProcessingInstruction = tc;
var Da = (
  /** @class */
  function(n) {
    O0(t, n);
    function t(e) {
      var r = n.call(this) || this;
      return r.children = e, r;
    }
    return Object.defineProperty(t.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var e;
        return (e = this.children[0]) !== null && e !== void 0 ? e : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(e) {
        this.children = e;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Su)
);
Se.NodeWithChildren = Da;
var rc = (
  /** @class */
  function(n) {
    O0(t, n);
    function t() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = wt.ElementType.CDATA, e;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Da)
);
Se.CDATA = rc;
var nc = (
  /** @class */
  function(n) {
    O0(t, n);
    function t() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = wt.ElementType.Root, e;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Da)
);
Se.Document = nc;
var ac = (
  /** @class */
  function(n) {
    O0(t, n);
    function t(e, r, a, i) {
      a === void 0 && (a = []), i === void 0 && (i = e === "script" ? wt.ElementType.Script : e === "style" ? wt.ElementType.Style : wt.ElementType.Tag);
      var u = n.call(this, a) || this;
      return u.name = e, u.attribs = r, u.type = i, u;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(e) {
        this.name = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var e = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, i;
          return {
            name: r,
            value: e.attribs[r],
            namespace: (a = e["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (i = e["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Da)
);
Se.Element = ac;
function ic(n) {
  return (0, wt.isTag)(n);
}
Se.isTag = ic;
function uc(n) {
  return n.type === wt.ElementType.CDATA;
}
Se.isCDATA = uc;
function sc(n) {
  return n.type === wt.ElementType.Text;
}
Se.isText = sc;
function oc(n) {
  return n.type === wt.ElementType.Comment;
}
Se.isComment = oc;
function lc(n) {
  return n.type === wt.ElementType.Directive;
}
Se.isDirective = lc;
function cc(n) {
  return n.type === wt.ElementType.Root;
}
Se.isDocument = cc;
function o2(n) {
  return Object.prototype.hasOwnProperty.call(n, "children");
}
Se.hasChildren = o2;
function ku(n, t) {
  t === void 0 && (t = !1);
  var e;
  if (sc(n))
    e = new Ql(n.data);
  else if (oc(n))
    e = new ec(n.data);
  else if (ic(n)) {
    var r = t ? Za(n.children) : [], a = new ac(n.name, Or({}, n.attribs), r);
    r.forEach(function(s) {
      return s.parent = a;
    }), n.namespace != null && (a.namespace = n.namespace), n["x-attribsNamespace"] && (a["x-attribsNamespace"] = Or({}, n["x-attribsNamespace"])), n["x-attribsPrefix"] && (a["x-attribsPrefix"] = Or({}, n["x-attribsPrefix"])), e = a;
  } else if (uc(n)) {
    var r = t ? Za(n.children) : [], i = new rc(r);
    r.forEach(function(c) {
      return c.parent = i;
    }), e = i;
  } else if (cc(n)) {
    var r = t ? Za(n.children) : [], u = new nc(r);
    r.forEach(function(c) {
      return c.parent = u;
    }), n["x-mode"] && (u["x-mode"] = n["x-mode"]), e = u;
  } else if (lc(n)) {
    var o = new tc(n.name, n.data);
    n["x-name"] != null && (o["x-name"] = n["x-name"], o["x-publicId"] = n["x-publicId"], o["x-systemId"] = n["x-systemId"]), e = o;
  } else
    throw new Error("Not implemented yet: ".concat(n.type));
  return e.startIndex = n.startIndex, e.endIndex = n.endIndex, n.sourceCodeLocation != null && (e.sourceCodeLocation = n.sourceCodeLocation), e;
}
Se.cloneNode = ku;
function Za(n) {
  for (var t = n.map(function(r) {
    return ku(r, !0);
  }), e = 1; e < t.length; e++)
    t[e].prev = t[e - 1], t[e - 1].next = t[e];
  return t;
}
(function(n) {
  var t = me && me.__createBinding || (Object.create ? function(o, s, c, h) {
    h === void 0 && (h = c);
    var b = Object.getOwnPropertyDescriptor(s, c);
    (!b || ("get" in b ? !s.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return s[c];
    } }), Object.defineProperty(o, h, b);
  } : function(o, s, c, h) {
    h === void 0 && (h = c), o[h] = s[c];
  }), e = me && me.__exportStar || function(o, s) {
    for (var c in o) c !== "default" && !Object.prototype.hasOwnProperty.call(s, c) && t(s, o, c);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.DomHandler = void 0;
  var r = hr, a = Se;
  e(Se, n);
  var i = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, u = (
    /** @class */
    function() {
      function o(s, c, h) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof c == "function" && (h = c, c = i), typeof s == "object" && (c = s, s = void 0), this.callback = s ?? null, this.options = c ?? i, this.elementCB = h ?? null;
      }
      return o.prototype.onparserinit = function(s) {
        this.parser = s;
      }, o.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, o.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, o.prototype.onerror = function(s) {
        this.handleCallback(s);
      }, o.prototype.onclosetag = function() {
        this.lastNode = null;
        var s = this.tagStack.pop();
        this.options.withEndIndices && (s.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(s);
      }, o.prototype.onopentag = function(s, c) {
        var h = this.options.xmlMode ? r.ElementType.Tag : void 0, b = new a.Element(s, c, void 0, h);
        this.addNode(b), this.tagStack.push(b);
      }, o.prototype.ontext = function(s) {
        var c = this.lastNode;
        if (c && c.type === r.ElementType.Text)
          c.data += s, this.options.withEndIndices && (c.endIndex = this.parser.endIndex);
        else {
          var h = new a.Text(s);
          this.addNode(h), this.lastNode = h;
        }
      }, o.prototype.oncomment = function(s) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += s;
          return;
        }
        var c = new a.Comment(s);
        this.addNode(c), this.lastNode = c;
      }, o.prototype.oncommentend = function() {
        this.lastNode = null;
      }, o.prototype.oncdatastart = function() {
        var s = new a.Text(""), c = new a.CDATA([s]);
        this.addNode(c), s.parent = c, this.lastNode = s;
      }, o.prototype.oncdataend = function() {
        this.lastNode = null;
      }, o.prototype.onprocessinginstruction = function(s, c) {
        var h = new a.ProcessingInstruction(s, c);
        this.addNode(h);
      }, o.prototype.handleCallback = function(s) {
        if (typeof this.callback == "function")
          this.callback(s, this.dom);
        else if (s)
          throw s;
      }, o.prototype.addNode = function(s) {
        var c = this.tagStack[this.tagStack.length - 1], h = c.children[c.children.length - 1];
        this.options.withStartIndices && (s.startIndex = this.parser.startIndex), this.options.withEndIndices && (s.endIndex = this.parser.endIndex), c.children.push(s), h && (s.prev = h, h.next = s), s.parent = c, this.lastNode = null;
      }, o;
    }()
  );
  n.DomHandler = u, n.default = u;
})(b0);
var jn = {}, Mt = {}, Jr = {}, fc = {}, $0 = {}, Eu = {};
Object.defineProperty(Eu, "__esModule", { value: !0 });
function Sn(n) {
  for (var t = 1; t < n.length; t++)
    n[t][0] += n[t - 1][0] + 1;
  return n;
}
Eu.default = new Map(/* @__PURE__ */ Sn([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ Sn([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ Sn([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ Sn([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ia = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.escapeText = n.escapeAttribute = n.escapeUTF8 = n.escape = n.encodeXML = n.getCodePoint = n.xmlReplacer = void 0, n.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var t = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  n.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, i) {
    return a.codePointAt(i);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, i) {
      return (a.charCodeAt(i) & 64512) === 55296 ? (a.charCodeAt(i) - 55296) * 1024 + a.charCodeAt(i + 1) - 56320 + 65536 : a.charCodeAt(i);
    }
  );
  function e(a) {
    for (var i = "", u = 0, o; (o = n.xmlReplacer.exec(a)) !== null; ) {
      var s = o.index, c = a.charCodeAt(s), h = t.get(c);
      h !== void 0 ? (i += a.substring(u, s) + h, u = s + 1) : (i += "".concat(a.substring(u, s), "&#x").concat((0, n.getCodePoint)(a, s).toString(16), ";"), u = n.xmlReplacer.lastIndex += +((c & 64512) === 55296));
    }
    return i + a.substr(u);
  }
  n.encodeXML = e, n.escape = e;
  function r(a, i) {
    return function(o) {
      for (var s, c = 0, h = ""; s = a.exec(o); )
        c !== s.index && (h += o.substring(c, s.index)), h += i.get(s[0].charCodeAt(0)), c = s.index + 1;
      return h + o.substring(c);
    };
  }
  n.escapeUTF8 = r(/[&<>'"]/g, t), n.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), n.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(ia);
var l2 = me && me.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty($0, "__esModule", { value: !0 });
$0.encodeNonAsciiHTML = $0.encodeHTML = void 0;
var c2 = l2(Eu), dc = ia, f2 = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function d2(n) {
  return hc(f2, n);
}
$0.encodeHTML = d2;
function h2(n) {
  return hc(dc.xmlReplacer, n);
}
$0.encodeNonAsciiHTML = h2;
function hc(n, t) {
  for (var e = "", r = 0, a; (a = n.exec(t)) !== null; ) {
    var i = a.index;
    e += t.substring(r, i);
    var u = t.charCodeAt(i), o = c2.default.get(u);
    if (typeof o == "object") {
      if (i + 1 < t.length) {
        var s = t.charCodeAt(i + 1), c = typeof o.n == "number" ? o.n === s ? o.o : void 0 : o.n.get(s);
        if (c !== void 0) {
          e += c, r = n.lastIndex += 1;
          continue;
        }
      }
      o = o.v;
    }
    if (o !== void 0)
      e += o, r = i + 1;
    else {
      var h = (0, dc.getCodePoint)(t, i);
      e += "&#x".concat(h.toString(16), ";"), r = n.lastIndex += +(h !== u);
    }
  }
  return e + t.substr(r);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.decodeXMLStrict = n.decodeHTML5Strict = n.decodeHTML4Strict = n.decodeHTML5 = n.decodeHTML4 = n.decodeHTMLAttribute = n.decodeHTMLStrict = n.decodeHTML = n.decodeXML = n.DecodingMode = n.EntityDecoder = n.encodeHTML5 = n.encodeHTML4 = n.encodeNonAsciiHTML = n.encodeHTML = n.escapeText = n.escapeAttribute = n.escapeUTF8 = n.escape = n.encodeXML = n.encode = n.decodeStrict = n.decode = n.EncodingMode = n.EntityLevel = void 0;
  var t = Pr, e = $0, r = ia, a;
  (function(d) {
    d[d.XML = 0] = "XML", d[d.HTML = 1] = "HTML";
  })(a = n.EntityLevel || (n.EntityLevel = {}));
  var i;
  (function(d) {
    d[d.UTF8 = 0] = "UTF8", d[d.ASCII = 1] = "ASCII", d[d.Extensive = 2] = "Extensive", d[d.Attribute = 3] = "Attribute", d[d.Text = 4] = "Text";
  })(i = n.EncodingMode || (n.EncodingMode = {}));
  function u(d, m) {
    m === void 0 && (m = a.XML);
    var T = typeof m == "number" ? m : m.level;
    if (T === a.HTML) {
      var A = typeof m == "object" ? m.mode : void 0;
      return (0, t.decodeHTML)(d, A);
    }
    return (0, t.decodeXML)(d);
  }
  n.decode = u;
  function o(d, m) {
    var T;
    m === void 0 && (m = a.XML);
    var A = typeof m == "number" ? { level: m } : m;
    return (T = A.mode) !== null && T !== void 0 || (A.mode = t.DecodingMode.Strict), u(d, A);
  }
  n.decodeStrict = o;
  function s(d, m) {
    m === void 0 && (m = a.XML);
    var T = typeof m == "number" ? { level: m } : m;
    return T.mode === i.UTF8 ? (0, r.escapeUTF8)(d) : T.mode === i.Attribute ? (0, r.escapeAttribute)(d) : T.mode === i.Text ? (0, r.escapeText)(d) : T.level === a.HTML ? T.mode === i.ASCII ? (0, e.encodeNonAsciiHTML)(d) : (0, e.encodeHTML)(d) : (0, r.encodeXML)(d);
  }
  n.encode = s;
  var c = ia;
  Object.defineProperty(n, "encodeXML", { enumerable: !0, get: function() {
    return c.encodeXML;
  } }), Object.defineProperty(n, "escape", { enumerable: !0, get: function() {
    return c.escape;
  } }), Object.defineProperty(n, "escapeUTF8", { enumerable: !0, get: function() {
    return c.escapeUTF8;
  } }), Object.defineProperty(n, "escapeAttribute", { enumerable: !0, get: function() {
    return c.escapeAttribute;
  } }), Object.defineProperty(n, "escapeText", { enumerable: !0, get: function() {
    return c.escapeText;
  } });
  var h = $0;
  Object.defineProperty(n, "encodeHTML", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } }), Object.defineProperty(n, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return h.encodeNonAsciiHTML;
  } }), Object.defineProperty(n, "encodeHTML4", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } }), Object.defineProperty(n, "encodeHTML5", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } });
  var b = Pr;
  Object.defineProperty(n, "EntityDecoder", { enumerable: !0, get: function() {
    return b.EntityDecoder;
  } }), Object.defineProperty(n, "DecodingMode", { enumerable: !0, get: function() {
    return b.DecodingMode;
  } }), Object.defineProperty(n, "decodeXML", { enumerable: !0, get: function() {
    return b.decodeXML;
  } }), Object.defineProperty(n, "decodeHTML", { enumerable: !0, get: function() {
    return b.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return b.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return b.decodeHTMLAttribute;
  } }), Object.defineProperty(n, "decodeHTML4", { enumerable: !0, get: function() {
    return b.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTML5", { enumerable: !0, get: function() {
    return b.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return b.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return b.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeXMLStrict", { enumerable: !0, get: function() {
    return b.decodeXML;
  } });
})(fc);
var ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.attributeNames = ur.elementNames = void 0;
ur.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(n) {
  return [n.toLowerCase(), n];
}));
ur.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(n) {
  return [n.toLowerCase(), n];
}));
var tr = me && me.__assign || function() {
  return tr = Object.assign || function(n) {
    for (var t, e = 1, r = arguments.length; e < r; e++) {
      t = arguments[e];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, tr.apply(this, arguments);
}, m2 = me && me.__createBinding || (Object.create ? function(n, t, e, r) {
  r === void 0 && (r = e);
  var a = Object.getOwnPropertyDescriptor(t, e);
  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return t[e];
  } }), Object.defineProperty(n, r, a);
} : function(n, t, e, r) {
  r === void 0 && (r = e), n[r] = t[e];
}), p2 = me && me.__setModuleDefault || (Object.create ? function(n, t) {
  Object.defineProperty(n, "default", { enumerable: !0, value: t });
} : function(n, t) {
  n.default = t;
}), g2 = me && me.__importStar || function(n) {
  if (n && n.__esModule) return n;
  var t = {};
  if (n != null) for (var e in n) e !== "default" && Object.prototype.hasOwnProperty.call(n, e) && m2(t, n, e);
  return p2(t, n), t;
};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.render = void 0;
var l0 = g2(hr), ua = fc, mc = ur, b2 = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function v2(n) {
  return n.replace(/"/g, "&quot;");
}
function y2(n, t) {
  var e;
  if (n) {
    var r = ((e = t.encodeEntities) !== null && e !== void 0 ? e : t.decodeEntities) === !1 ? v2 : t.xmlMode || t.encodeEntities !== "utf8" ? ua.encodeXML : ua.escapeAttribute;
    return Object.keys(n).map(function(a) {
      var i, u, o = (i = n[a]) !== null && i !== void 0 ? i : "";
      return t.xmlMode === "foreign" && (a = (u = mc.attributeNames.get(a)) !== null && u !== void 0 ? u : a), !t.emptyAttrs && !t.xmlMode && o === "" ? a : "".concat(a, '="').concat(r(o), '"');
    }).join(" ");
  }
}
var Us = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Aa(n, t) {
  t === void 0 && (t = {});
  for (var e = ("length" in n) ? n : [n], r = "", a = 0; a < e.length; a++)
    r += w2(e[a], t);
  return r;
}
Jr.render = Aa;
Jr.default = Aa;
function w2(n, t) {
  switch (n.type) {
    case l0.Root:
      return Aa(n.children, t);
    case l0.Doctype:
    case l0.Directive:
      return S2(n);
    case l0.Comment:
      return T2(n);
    case l0.CDATA:
      return E2(n);
    case l0.Script:
    case l0.Style:
    case l0.Tag:
      return A2(n, t);
    case l0.Text:
      return k2(n, t);
  }
}
var x2 = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), D2 = /* @__PURE__ */ new Set(["svg", "math"]);
function A2(n, t) {
  var e;
  t.xmlMode === "foreign" && (n.name = (e = mc.elementNames.get(n.name)) !== null && e !== void 0 ? e : n.name, n.parent && x2.has(n.parent.name) && (t = tr(tr({}, t), { xmlMode: !1 }))), !t.xmlMode && D2.has(n.name) && (t = tr(tr({}, t), { xmlMode: "foreign" }));
  var r = "<".concat(n.name), a = y2(n.attribs, t);
  return a && (r += " ".concat(a)), n.children.length === 0 && (t.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    t.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    t.selfClosingTags && Us.has(n.name)
  )) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", n.children.length > 0 && (r += Aa(n.children, t)), (t.xmlMode || !Us.has(n.name)) && (r += "</".concat(n.name, ">"))), r;
}
function S2(n) {
  return "<".concat(n.data, ">");
}
function k2(n, t) {
  var e, r = n.data || "";
  return ((e = t.encodeEntities) !== null && e !== void 0 ? e : t.decodeEntities) !== !1 && !(!t.xmlMode && n.parent && b2.has(n.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? (0, ua.encodeXML)(r) : (0, ua.escapeText)(r)), r;
}
function E2(n) {
  return "<![CDATA[".concat(n.children[0].data, "]]>");
}
function T2(n) {
  return "<!--".concat(n.data, "-->");
}
var C2 = me && me.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.innerText = Mt.textContent = Mt.getText = Mt.getInnerHTML = Mt.getOuterHTML = void 0;
var n0 = b0, M2 = C2(Jr), F2 = hr;
function pc(n, t) {
  return (0, M2.default)(n, t);
}
Mt.getOuterHTML = pc;
function _2(n, t) {
  return (0, n0.hasChildren)(n) ? n.children.map(function(e) {
    return pc(e, t);
  }).join("") : "";
}
Mt.getInnerHTML = _2;
function Gn(n) {
  return Array.isArray(n) ? n.map(Gn).join("") : (0, n0.isTag)(n) ? n.name === "br" ? `
` : Gn(n.children) : (0, n0.isCDATA)(n) ? Gn(n.children) : (0, n0.isText)(n) ? n.data : "";
}
Mt.getText = Gn;
function ki(n) {
  return Array.isArray(n) ? n.map(ki).join("") : (0, n0.hasChildren)(n) && !(0, n0.isComment)(n) ? ki(n.children) : (0, n0.isText)(n) ? n.data : "";
}
Mt.textContent = ki;
function Ei(n) {
  return Array.isArray(n) ? n.map(Ei).join("") : (0, n0.hasChildren)(n) && (n.type === F2.ElementType.Tag || (0, n0.isCDATA)(n)) ? Ei(n.children) : (0, n0.isText)(n) ? n.data : "";
}
Mt.innerText = Ei;
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.prevElementSibling = Ze.nextElementSibling = Ze.getName = Ze.hasAttrib = Ze.getAttributeValue = Ze.getSiblings = Ze.getParent = Ze.getChildren = void 0;
var Tu = b0;
function gc(n) {
  return (0, Tu.hasChildren)(n) ? n.children : [];
}
Ze.getChildren = gc;
function bc(n) {
  return n.parent || null;
}
Ze.getParent = bc;
function N2(n) {
  var t, e, r = bc(n);
  if (r != null)
    return gc(r);
  for (var a = [n], i = n.prev, u = n.next; i != null; )
    a.unshift(i), t = i, i = t.prev;
  for (; u != null; )
    a.push(u), e = u, u = e.next;
  return a;
}
Ze.getSiblings = N2;
function I2(n, t) {
  var e;
  return (e = n.attribs) === null || e === void 0 ? void 0 : e[t];
}
Ze.getAttributeValue = I2;
function O2(n, t) {
  return n.attribs != null && Object.prototype.hasOwnProperty.call(n.attribs, t) && n.attribs[t] != null;
}
Ze.hasAttrib = O2;
function B2(n) {
  return n.name;
}
Ze.getName = B2;
function L2(n) {
  for (var t, e = n.next; e !== null && !(0, Tu.isTag)(e); )
    t = e, e = t.next;
  return e;
}
Ze.nextElementSibling = L2;
function R2(n) {
  for (var t, e = n.prev; e !== null && !(0, Tu.isTag)(e); )
    t = e, e = t.prev;
  return e;
}
Ze.prevElementSibling = R2;
var yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.prepend = yt.prependChild = yt.append = yt.appendChild = yt.replaceElement = yt.removeElement = void 0;
function Qr(n) {
  if (n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.parent) {
    var t = n.parent.children, e = t.lastIndexOf(n);
    e >= 0 && t.splice(e, 1);
  }
  n.next = null, n.prev = null, n.parent = null;
}
yt.removeElement = Qr;
function z2(n, t) {
  var e = t.prev = n.prev;
  e && (e.next = t);
  var r = t.next = n.next;
  r && (r.prev = t);
  var a = t.parent = n.parent;
  if (a) {
    var i = a.children;
    i[i.lastIndexOf(n)] = t, n.parent = null;
  }
}
yt.replaceElement = z2;
function P2(n, t) {
  if (Qr(t), t.next = null, t.parent = n, n.children.push(t) > 1) {
    var e = n.children[n.children.length - 2];
    e.next = t, t.prev = e;
  } else
    t.prev = null;
}
yt.appendChild = P2;
function q2(n, t) {
  Qr(t);
  var e = n.parent, r = n.next;
  if (t.next = r, t.prev = n, n.next = t, t.parent = e, r) {
    if (r.prev = t, e) {
      var a = e.children;
      a.splice(a.lastIndexOf(r), 0, t);
    }
  } else e && e.children.push(t);
}
yt.append = q2;
function H2(n, t) {
  if (Qr(t), t.parent = n, t.prev = null, n.children.unshift(t) !== 1) {
    var e = n.children[1];
    e.prev = t, t.next = e;
  } else
    t.next = null;
}
yt.prependChild = H2;
function U2(n, t) {
  Qr(t);
  var e = n.parent;
  if (e) {
    var r = e.children;
    r.splice(r.indexOf(n), 0, t);
  }
  n.prev && (n.prev.next = t), t.parent = e, t.prev = n.prev, t.next = n, n.prev = t;
}
yt.prepend = U2;
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.findAll = lt.existsOne = lt.findOne = lt.findOneChild = lt.find = lt.filter = void 0;
var Sa = b0;
function j2(n, t, e, r) {
  return e === void 0 && (e = !0), r === void 0 && (r = 1 / 0), vc(n, Array.isArray(t) ? t : [t], e, r);
}
lt.filter = j2;
function vc(n, t, e, r) {
  for (var a = [], i = [t], u = [0]; ; ) {
    if (u[0] >= i[0].length) {
      if (u.length === 1)
        return a;
      i.shift(), u.shift();
      continue;
    }
    var o = i[0][u[0]++];
    if (n(o) && (a.push(o), --r <= 0))
      return a;
    e && (0, Sa.hasChildren)(o) && o.children.length > 0 && (u.unshift(0), i.unshift(o.children));
  }
}
lt.find = vc;
function G2(n, t) {
  return t.find(n);
}
lt.findOneChild = G2;
function yc(n, t, e) {
  e === void 0 && (e = !0);
  for (var r = null, a = 0; a < t.length && !r; a++) {
    var i = t[a];
    if ((0, Sa.isTag)(i))
      n(i) ? r = i : e && i.children.length > 0 && (r = yc(n, i.children, !0));
    else continue;
  }
  return r;
}
lt.findOne = yc;
function wc(n, t) {
  return t.some(function(e) {
    return (0, Sa.isTag)(e) && (n(e) || wc(n, e.children));
  });
}
lt.existsOne = wc;
function V2(n, t) {
  for (var e = [], r = [t], a = [0]; ; ) {
    if (a[0] >= r[0].length) {
      if (r.length === 1)
        return e;
      r.shift(), a.shift();
      continue;
    }
    var i = r[0][a[0]++];
    (0, Sa.isTag)(i) && (n(i) && e.push(i), i.children.length > 0 && (a.unshift(0), r.unshift(i.children)));
  }
}
lt.findAll = V2;
var Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.getElementsByTagType = Ft.getElementsByTagName = Ft.getElementById = Ft.getElements = Ft.testElement = void 0;
var j0 = b0, ka = lt, sa = {
  tag_name: function(n) {
    return typeof n == "function" ? function(t) {
      return (0, j0.isTag)(t) && n(t.name);
    } : n === "*" ? j0.isTag : function(t) {
      return (0, j0.isTag)(t) && t.name === n;
    };
  },
  tag_type: function(n) {
    return typeof n == "function" ? function(t) {
      return n(t.type);
    } : function(t) {
      return t.type === n;
    };
  },
  tag_contains: function(n) {
    return typeof n == "function" ? function(t) {
      return (0, j0.isText)(t) && n(t.data);
    } : function(t) {
      return (0, j0.isText)(t) && t.data === n;
    };
  }
};
function xc(n, t) {
  return typeof t == "function" ? function(e) {
    return (0, j0.isTag)(e) && t(e.attribs[n]);
  } : function(e) {
    return (0, j0.isTag)(e) && e.attribs[n] === t;
  };
}
function $2(n, t) {
  return function(e) {
    return n(e) || t(e);
  };
}
function Dc(n) {
  var t = Object.keys(n).map(function(e) {
    var r = n[e];
    return Object.prototype.hasOwnProperty.call(sa, e) ? sa[e](r) : xc(e, r);
  });
  return t.length === 0 ? null : t.reduce($2);
}
function W2(n, t) {
  var e = Dc(n);
  return e ? e(t) : !0;
}
Ft.testElement = W2;
function Y2(n, t, e, r) {
  r === void 0 && (r = 1 / 0);
  var a = Dc(n);
  return a ? (0, ka.filter)(a, t, e, r) : [];
}
Ft.getElements = Y2;
function X2(n, t, e) {
  return e === void 0 && (e = !0), Array.isArray(t) || (t = [t]), (0, ka.findOne)(xc("id", n), t, e);
}
Ft.getElementById = X2;
function Z2(n, t, e, r) {
  return e === void 0 && (e = !0), r === void 0 && (r = 1 / 0), (0, ka.filter)(sa.tag_name(n), t, e, r);
}
Ft.getElementsByTagName = Z2;
function K2(n, t, e, r) {
  return e === void 0 && (e = !0), r === void 0 && (r = 1 / 0), (0, ka.filter)(sa.tag_type(n), t, e, r);
}
Ft.getElementsByTagType = K2;
var Ac = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.uniqueSort = n.compareDocumentPosition = n.DocumentPosition = n.removeSubsets = void 0;
  var t = b0;
  function e(u) {
    for (var o = u.length; --o >= 0; ) {
      var s = u[o];
      if (o > 0 && u.lastIndexOf(s, o - 1) >= 0) {
        u.splice(o, 1);
        continue;
      }
      for (var c = s.parent; c; c = c.parent)
        if (u.includes(c)) {
          u.splice(o, 1);
          break;
        }
    }
    return u;
  }
  n.removeSubsets = e;
  var r;
  (function(u) {
    u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = n.DocumentPosition || (n.DocumentPosition = {}));
  function a(u, o) {
    var s = [], c = [];
    if (u === o)
      return 0;
    for (var h = (0, t.hasChildren)(u) ? u : u.parent; h; )
      s.unshift(h), h = h.parent;
    for (h = (0, t.hasChildren)(o) ? o : o.parent; h; )
      c.unshift(h), h = h.parent;
    for (var b = Math.min(s.length, c.length), d = 0; d < b && s[d] === c[d]; )
      d++;
    if (d === 0)
      return r.DISCONNECTED;
    var m = s[d - 1], T = m.children, A = s[d], S = c[d];
    return T.indexOf(A) > T.indexOf(S) ? m === o ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : m === u ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  n.compareDocumentPosition = a;
  function i(u) {
    return u = u.filter(function(o, s, c) {
      return !c.includes(o, s + 1);
    }), u.sort(function(o, s) {
      var c = a(o, s);
      return c & r.PRECEDING ? -1 : c & r.FOLLOWING ? 1 : 0;
    }), u;
  }
  n.uniqueSort = i;
})(Ac);
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.getFeed = void 0;
var J2 = Mt, en = Ft;
function Q2(n) {
  var t = oa(a4, n);
  return t ? t.name === "feed" ? e4(t) : t4(t) : null;
}
Ea.getFeed = Q2;
function e4(n) {
  var t, e = n.children, r = {
    type: "atom",
    items: (0, en.getElementsByTagName)("entry", e).map(function(u) {
      var o, s = u.children, c = { media: Sc(s) };
      bt(c, "id", "id", s), bt(c, "title", "title", s);
      var h = (o = oa("link", s)) === null || o === void 0 ? void 0 : o.attribs.href;
      h && (c.link = h);
      var b = M0("summary", s) || M0("content", s);
      b && (c.description = b);
      var d = M0("updated", s);
      return d && (c.pubDate = new Date(d)), c;
    })
  };
  bt(r, "id", "id", e), bt(r, "title", "title", e);
  var a = (t = oa("link", e)) === null || t === void 0 ? void 0 : t.attribs.href;
  a && (r.link = a), bt(r, "description", "subtitle", e);
  var i = M0("updated", e);
  return i && (r.updated = new Date(i)), bt(r, "author", "email", e, !0), r;
}
function t4(n) {
  var t, e, r = (e = (t = oa("channel", n.children)) === null || t === void 0 ? void 0 : t.children) !== null && e !== void 0 ? e : [], a = {
    type: n.name.substr(0, 3),
    id: "",
    items: (0, en.getElementsByTagName)("item", n.children).map(function(u) {
      var o = u.children, s = { media: Sc(o) };
      bt(s, "id", "guid", o), bt(s, "title", "title", o), bt(s, "link", "link", o), bt(s, "description", "description", o);
      var c = M0("pubDate", o) || M0("dc:date", o);
      return c && (s.pubDate = new Date(c)), s;
    })
  };
  bt(a, "title", "title", r), bt(a, "link", "link", r), bt(a, "description", "description", r);
  var i = M0("lastBuildDate", r);
  return i && (a.updated = new Date(i)), bt(a, "author", "managingEditor", r, !0), a;
}
var r4 = ["url", "type", "lang"], n4 = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Sc(n) {
  return (0, en.getElementsByTagName)("media:content", n).map(function(t) {
    for (var e = t.attribs, r = {
      medium: e.medium,
      isDefault: !!e.isDefault
    }, a = 0, i = r4; a < i.length; a++) {
      var u = i[a];
      e[u] && (r[u] = e[u]);
    }
    for (var o = 0, s = n4; o < s.length; o++) {
      var u = s[o];
      e[u] && (r[u] = parseInt(e[u], 10));
    }
    return e.expression && (r.expression = e.expression), r;
  });
}
function oa(n, t) {
  return (0, en.getElementsByTagName)(n, t, !0, 1)[0];
}
function M0(n, t, e) {
  return e === void 0 && (e = !1), (0, J2.textContent)((0, en.getElementsByTagName)(n, t, e, 1)).trim();
}
function bt(n, t, e, r, a) {
  a === void 0 && (a = !1);
  var i = M0(e, r, a);
  i && (n[t] = i);
}
function a4(n) {
  return n === "rss" || n === "feed" || n === "rdf:RDF";
}
(function(n) {
  var t = me && me.__createBinding || (Object.create ? function(a, i, u, o) {
    o === void 0 && (o = u);
    var s = Object.getOwnPropertyDescriptor(i, u);
    (!s || ("get" in s ? !i.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return i[u];
    } }), Object.defineProperty(a, o, s);
  } : function(a, i, u, o) {
    o === void 0 && (o = u), a[o] = i[u];
  }), e = me && me.__exportStar || function(a, i) {
    for (var u in a) u !== "default" && !Object.prototype.hasOwnProperty.call(i, u) && t(i, a, u);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.hasChildren = n.isDocument = n.isComment = n.isText = n.isCDATA = n.isTag = void 0, e(Mt, n), e(Ze, n), e(yt, n), e(lt, n), e(Ft, n), e(Ac, n), e(Ea, n);
  var r = b0;
  Object.defineProperty(n, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(n, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(n, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(n, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(n, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(n, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(jn);
(function(n) {
  var t = me && me.__createBinding || (Object.create ? function(I, D, k, M) {
    M === void 0 && (M = k);
    var O = Object.getOwnPropertyDescriptor(D, k);
    (!O || ("get" in O ? !D.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
      return D[k];
    } }), Object.defineProperty(I, M, O);
  } : function(I, D, k, M) {
    M === void 0 && (M = k), I[M] = D[k];
  }), e = me && me.__setModuleDefault || (Object.create ? function(I, D) {
    Object.defineProperty(I, "default", { enumerable: !0, value: D });
  } : function(I, D) {
    I.default = D;
  }), r = me && me.__importStar || function(I) {
    if (I && I.__esModule) return I;
    var D = {};
    if (I != null) for (var k in I) k !== "default" && Object.prototype.hasOwnProperty.call(I, k) && t(D, I, k);
    return e(D, I), D;
  }, a = me && me.__importDefault || function(I) {
    return I && I.__esModule ? I : { default: I };
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.DomUtils = n.parseFeed = n.getFeed = n.ElementType = n.Tokenizer = n.createDomStream = n.parseDOM = n.parseDocument = n.DefaultHandler = n.DomHandler = n.Parser = void 0;
  var i = zr, u = zr;
  Object.defineProperty(n, "Parser", { enumerable: !0, get: function() {
    return u.Parser;
  } });
  var o = b0, s = b0;
  Object.defineProperty(n, "DomHandler", { enumerable: !0, get: function() {
    return s.DomHandler;
  } }), Object.defineProperty(n, "DefaultHandler", { enumerable: !0, get: function() {
    return s.DomHandler;
  } });
  function c(I, D) {
    var k = new o.DomHandler(void 0, D);
    return new i.Parser(k, D).end(I), k.root;
  }
  n.parseDocument = c;
  function h(I, D) {
    return c(I, D).children;
  }
  n.parseDOM = h;
  function b(I, D, k) {
    var M = new o.DomHandler(I, D, k);
    return new i.Parser(M, D);
  }
  n.createDomStream = b;
  var d = xu;
  Object.defineProperty(n, "Tokenizer", { enumerable: !0, get: function() {
    return a(d).default;
  } }), n.ElementType = r(hr);
  var m = jn, T = jn;
  Object.defineProperty(n, "getFeed", { enumerable: !0, get: function() {
    return T.getFeed;
  } });
  var A = { xmlMode: !0 };
  function S(I, D) {
    return D === void 0 && (D = A), (0, m.getFeed)(h(I, D));
  }
  n.parseFeed = S, n.DomUtils = r(jn);
})(Jl);
var i4 = (n) => {
  if (typeof n != "string")
    throw new TypeError("Expected a string");
  return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function js(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function u4(n) {
  var t, e;
  return js(n) === !1 ? !1 : (t = n.constructor, t === void 0 ? !0 : (e = t.prototype, !(js(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
Cu.isPlainObject = u4;
var s4 = function(t) {
  return o4(t) && !l4(t);
};
function o4(n) {
  return !!n && typeof n == "object";
}
function l4(n) {
  var t = Object.prototype.toString.call(n);
  return t === "[object RegExp]" || t === "[object Date]" || d4(n);
}
var c4 = typeof Symbol == "function" && Symbol.for, f4 = c4 ? Symbol.for("react.element") : 60103;
function d4(n) {
  return n.$$typeof === f4;
}
function h4(n) {
  return Array.isArray(n) ? [] : {};
}
function qr(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? sr(h4(n), n, t) : n;
}
function m4(n, t, e) {
  return n.concat(t).map(function(r) {
    return qr(r, e);
  });
}
function p4(n, t) {
  if (!t.customMerge)
    return sr;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : sr;
}
function g4(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
    return Object.propertyIsEnumerable.call(n, t);
  }) : [];
}
function Gs(n) {
  return Object.keys(n).concat(g4(n));
}
function kc(n, t) {
  try {
    return t in n;
  } catch {
    return !1;
  }
}
function b4(n, t) {
  return kc(n, t) && !(Object.hasOwnProperty.call(n, t) && Object.propertyIsEnumerable.call(n, t));
}
function v4(n, t, e) {
  var r = {};
  return e.isMergeableObject(n) && Gs(n).forEach(function(a) {
    r[a] = qr(n[a], e);
  }), Gs(t).forEach(function(a) {
    b4(n, a) || (kc(n, a) && e.isMergeableObject(t[a]) ? r[a] = p4(a, e)(n[a], t[a], e) : r[a] = qr(t[a], e));
  }), r;
}
function sr(n, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || m4, e.isMergeableObject = e.isMergeableObject || s4, e.cloneUnlessOtherwiseSpecified = qr;
  var r = Array.isArray(t), a = Array.isArray(n), i = r === a;
  return i ? r ? e.arrayMerge(n, t, e) : v4(n, t, e) : qr(t, e);
}
sr.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, a) {
    return sr(r, a, e);
  }, {});
};
var y4 = sr, w4 = y4, Ec = { exports: {} };
(function(n) {
  (function(t, e) {
    n.exports ? n.exports = e() : t.parseSrcset = e();
  })(me, function() {
    return function(t) {
      function e(M) {
        return M === " " || // space
        M === "	" || // horizontal tab
        M === `
` || // new line
        M === "\f" || // form feed
        M === "\r";
      }
      function r(M) {
        var O, N = M.exec(t.substring(S));
        if (N)
          return O = N[0], S += O.length, O;
      }
      for (var a = t.length, i = /^[ \t\n\r\u000c]+/, u = /^[, \t\n\r\u000c]+/, o = /^[^ \t\n\r\u000c]+/, s = /[,]+$/, c = /^\d+$/, h = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, b, d, m, T, A, S = 0, I = []; ; ) {
        if (r(u), S >= a)
          return I;
        b = r(o), d = [], b.slice(-1) === "," ? (b = b.replace(s, ""), k()) : D();
      }
      function D() {
        for (r(i), m = "", T = "in descriptor"; ; ) {
          if (A = t.charAt(S), T === "in descriptor")
            if (e(A))
              m && (d.push(m), m = "", T = "after descriptor");
            else if (A === ",") {
              S += 1, m && d.push(m), k();
              return;
            } else if (A === "(")
              m = m + A, T = "in parens";
            else if (A === "") {
              m && d.push(m), k();
              return;
            } else
              m = m + A;
          else if (T === "in parens")
            if (A === ")")
              m = m + A, T = "in descriptor";
            else if (A === "") {
              d.push(m), k();
              return;
            } else
              m = m + A;
          else if (T === "after descriptor" && !e(A))
            if (A === "") {
              k();
              return;
            } else
              T = "in descriptor", S -= 1;
          S += 1;
        }
      }
      function k() {
        var M = !1, O, N, R, j, q = {}, H, _, P, $, Q;
        for (j = 0; j < d.length; j++)
          H = d[j], _ = H[H.length - 1], P = H.substring(0, H.length - 1), $ = parseInt(P, 10), Q = parseFloat(P), c.test(P) && _ === "w" ? ((O || N) && (M = !0), $ === 0 ? M = !0 : O = $) : h.test(P) && _ === "x" ? ((O || N || R) && (M = !0), Q < 0 ? M = !0 : N = Q) : c.test(P) && _ === "h" ? ((R || N) && (M = !0), $ === 0 ? M = !0 : R = $) : M = !0;
        M ? console && console.log && console.log("Invalid srcset descriptor found in '" + t + "' at '" + H + "'.") : (q.url = b, O && (q.w = O), N && (q.d = N), R && (q.h = R), I.push(q));
      }
    };
  });
})(Ec);
var x4 = Ec.exports, Mu = { exports: {} }, we = String, Tc = function() {
  return { isColorSupported: !1, reset: we, bold: we, dim: we, italic: we, underline: we, inverse: we, hidden: we, strikethrough: we, black: we, red: we, green: we, yellow: we, blue: we, magenta: we, cyan: we, white: we, gray: we, bgBlack: we, bgRed: we, bgGreen: we, bgYellow: we, bgBlue: we, bgMagenta: we, bgCyan: we, bgWhite: we, blackBright: we, redBright: we, greenBright: we, yellowBright: we, blueBright: we, magentaBright: we, cyanBright: we, whiteBright: we, bgBlackBright: we, bgRedBright: we, bgGreenBright: we, bgYellowBright: we, bgBlueBright: we, bgMagentaBright: we, bgCyanBright: we, bgWhiteBright: we };
};
Mu.exports = Tc();
Mu.exports.createColors = Tc;
var D4 = Mu.exports;
const A4 = {}, S4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A4
}, Symbol.toStringTag, { value: "Module" })), Xt = /* @__PURE__ */ Gh(S4);
let Vs = D4, $s = Xt, Ti = class Cc extends Error {
  constructor(t, e, r, a, i, u) {
    super(t), this.name = "CssSyntaxError", this.reason = t, i && (this.file = i), a && (this.source = a), u && (this.plugin = u), typeof e < "u" && typeof r < "u" && (typeof e == "number" ? (this.line = e, this.column = r) : (this.line = e.line, this.column = e.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Cc);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(t) {
    if (!this.source) return "";
    let e = this.source;
    t == null && (t = Vs.isColorSupported);
    let r = (h) => h, a = (h) => h, i = (h) => h;
    if (t) {
      let { bold: h, gray: b, red: d } = Vs.createColors(!0);
      a = (m) => h(d(m)), r = (m) => b(m), $s && (i = (m) => $s(m));
    }
    let u = e.split(/\r?\n/), o = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, u.length), c = String(s).length;
    return u.slice(o, s).map((h, b) => {
      let d = o + 1 + b, m = " " + (" " + d).slice(-c) + " | ";
      if (d === this.line) {
        if (h.length > 160) {
          let A = 20, S = Math.max(0, this.column - A), I = Math.max(
            this.column + A,
            this.endColumn + A
          ), D = h.slice(S, I), k = r(m.replace(/\d/g, " ")) + h.slice(0, Math.min(this.column - 1, A - 1)).replace(/[^\t]/g, " ");
          return a(">") + r(m) + i(D) + `
 ` + k + a("^");
        }
        let T = r(m.replace(/\d/g, " ")) + h.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return a(">") + r(m) + i(h) + `
 ` + T + a("^");
      }
      return " " + r(m) + i(h);
    }).join(`
`);
  }
  toString() {
    let t = this.showSourceCode();
    return t && (t = `

` + t + `
`), this.name + ": " + this.message + t;
  }
};
var Fu = Ti;
Ti.default = Ti;
const Ws = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function k4(n) {
  return n[0].toUpperCase() + n.slice(1);
}
let Ci = class {
  constructor(t) {
    this.builder = t;
  }
  atrule(t, e) {
    let r = "@" + t.name, a = t.params ? this.rawValue(t, "params") : "";
    if (typeof t.raws.afterName < "u" ? r += t.raws.afterName : a && (r += " "), t.nodes)
      this.block(t, r + a);
    else {
      let i = (t.raws.between || "") + (e ? ";" : "");
      this.builder(r + a + i, t);
    }
  }
  beforeAfter(t, e) {
    let r;
    t.type === "decl" ? r = this.raw(t, null, "beforeDecl") : t.type === "comment" ? r = this.raw(t, null, "beforeComment") : e === "before" ? r = this.raw(t, null, "beforeRule") : r = this.raw(t, null, "beforeClose");
    let a = t.parent, i = 0;
    for (; a && a.type !== "root"; )
      i += 1, a = a.parent;
    if (r.includes(`
`)) {
      let u = this.raw(t, null, "indent");
      if (u.length)
        for (let o = 0; o < i; o++) r += u;
    }
    return r;
  }
  block(t, e) {
    let r = this.raw(t, "between", "beforeOpen");
    this.builder(e + r + "{", t, "start");
    let a;
    t.nodes && t.nodes.length ? (this.body(t), a = this.raw(t, "after")) : a = this.raw(t, "after", "emptyBody"), a && this.builder(a), this.builder("}", t, "end");
  }
  body(t) {
    let e = t.nodes.length - 1;
    for (; e > 0 && t.nodes[e].type === "comment"; )
      e -= 1;
    let r = this.raw(t, "semicolon");
    for (let a = 0; a < t.nodes.length; a++) {
      let i = t.nodes[a], u = this.raw(i, "before");
      u && this.builder(u), this.stringify(i, e !== a || r);
    }
  }
  comment(t) {
    let e = this.raw(t, "left", "commentLeft"), r = this.raw(t, "right", "commentRight");
    this.builder("/*" + e + t.text + r + "*/", t);
  }
  decl(t, e) {
    let r = this.raw(t, "between", "colon"), a = t.prop + r + this.rawValue(t, "value");
    t.important && (a += t.raws.important || " !important"), e && (a += ";"), this.builder(a, t);
  }
  document(t) {
    this.body(t);
  }
  raw(t, e, r) {
    let a;
    if (r || (r = e), e && (a = t.raws[e], typeof a < "u"))
      return a;
    let i = t.parent;
    if (r === "before" && (!i || i.type === "root" && i.first === t || i && i.type === "document"))
      return "";
    if (!i) return Ws[r];
    let u = t.root();
    if (u.rawCache || (u.rawCache = {}), typeof u.rawCache[r] < "u")
      return u.rawCache[r];
    if (r === "before" || r === "after")
      return this.beforeAfter(t, r);
    {
      let o = "raw" + k4(r);
      this[o] ? a = this[o](u, t) : u.walk((s) => {
        if (a = s.raws[e], typeof a < "u") return !1;
      });
    }
    return typeof a > "u" && (a = Ws[r]), u.rawCache[r] = a, a;
  }
  rawBeforeClose(t) {
    let e;
    return t.walk((r) => {
      if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
        return e = r.raws.after, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1;
    }), e && (e = e.replace(/\S/g, "")), e;
  }
  rawBeforeComment(t, e) {
    let r;
    return t.walkComments((a) => {
      if (typeof a.raws.before < "u")
        return r = a.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(e, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeDecl(t, e) {
    let r;
    return t.walkDecls((a) => {
      if (typeof a.raws.before < "u")
        return r = a.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(e, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeOpen(t) {
    let e;
    return t.walk((r) => {
      if (r.type !== "decl" && (e = r.raws.between, typeof e < "u"))
        return !1;
    }), e;
  }
  rawBeforeRule(t) {
    let e;
    return t.walk((r) => {
      if (r.nodes && (r.parent !== t || t.first !== r) && typeof r.raws.before < "u")
        return e = r.raws.before, e.includes(`
`) && (e = e.replace(/[^\n]+$/, "")), !1;
    }), e && (e = e.replace(/\S/g, "")), e;
  }
  rawColon(t) {
    let e;
    return t.walkDecls((r) => {
      if (typeof r.raws.between < "u")
        return e = r.raws.between.replace(/[^\s:]/g, ""), !1;
    }), e;
  }
  rawEmptyBody(t) {
    let e;
    return t.walk((r) => {
      if (r.nodes && r.nodes.length === 0 && (e = r.raws.after, typeof e < "u"))
        return !1;
    }), e;
  }
  rawIndent(t) {
    if (t.raws.indent) return t.raws.indent;
    let e;
    return t.walk((r) => {
      let a = r.parent;
      if (a && a !== t && a.parent && a.parent === t && typeof r.raws.before < "u") {
        let i = r.raws.before.split(`
`);
        return e = i[i.length - 1], e = e.replace(/\S/g, ""), !1;
      }
    }), e;
  }
  rawSemicolon(t) {
    let e;
    return t.walk((r) => {
      if (r.nodes && r.nodes.length && r.last.type === "decl" && (e = r.raws.semicolon, typeof e < "u"))
        return !1;
    }), e;
  }
  rawValue(t, e) {
    let r = t[e], a = t.raws[e];
    return a && a.value === r ? a.raw : r;
  }
  root(t) {
    this.body(t), t.raws.after && this.builder(t.raws.after);
  }
  rule(t) {
    this.block(t, this.rawValue(t, "selector")), t.raws.ownSemicolon && this.builder(t.raws.ownSemicolon, t, "end");
  }
  stringify(t, e) {
    if (!this[t.type])
      throw new Error(
        "Unknown AST node type " + t.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[t.type](t, e);
  }
};
var Mc = Ci;
Ci.default = Ci;
let E4 = Mc;
function Mi(n, t) {
  new E4(t).stringify(n);
}
var Ta = Mi;
Mi.default = Mi;
var tn = {};
tn.isClean = Symbol("isClean");
tn.my = Symbol("my");
let T4 = Fu, C4 = Mc, M4 = Ta, { isClean: wr, my: F4 } = tn;
function Fi(n, t) {
  let e = new n.constructor();
  for (let r in n) {
    if (!Object.prototype.hasOwnProperty.call(n, r) || r === "proxyCache") continue;
    let a = n[r], i = typeof a;
    r === "parent" && i === "object" ? t && (e[r] = t) : r === "source" ? e[r] = a : Array.isArray(a) ? e[r] = a.map((u) => Fi(u, e)) : (i === "object" && a !== null && (a = Fi(a)), e[r] = a);
  }
  return e;
}
let _i = class {
  constructor(t = {}) {
    this.raws = {}, this[wr] = !1, this[F4] = !0;
    for (let e in t)
      if (e === "nodes") {
        this.nodes = [];
        for (let r of t[e])
          typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
      } else
        this[e] = t[e];
  }
  addToError(t) {
    if (t.postcssNode = this, t.stack && this.source && /\n\s{4}at /.test(t.stack)) {
      let e = this.source;
      t.stack = t.stack.replace(
        /\n\s{4}at /,
        `$&${e.input.from}:${e.start.line}:${e.start.column}$&`
      );
    }
    return t;
  }
  after(t) {
    return this.parent.insertAfter(this, t), this;
  }
  assign(t = {}) {
    for (let e in t)
      this[e] = t[e];
    return this;
  }
  before(t) {
    return this.parent.insertBefore(this, t), this;
  }
  cleanRaws(t) {
    delete this.raws.before, delete this.raws.after, t || delete this.raws.between;
  }
  clone(t = {}) {
    let e = Fi(this);
    for (let r in t)
      e[r] = t[r];
    return e;
  }
  cloneAfter(t = {}) {
    let e = this.clone(t);
    return this.parent.insertAfter(this, e), e;
  }
  cloneBefore(t = {}) {
    let e = this.clone(t);
    return this.parent.insertBefore(this, e), e;
  }
  error(t, e = {}) {
    if (this.source) {
      let { end: r, start: a } = this.rangeBy(e);
      return this.source.input.error(
        t,
        { column: a.column, line: a.line },
        { column: r.column, line: r.line },
        e
      );
    }
    return new T4(t);
  }
  getProxyProcessor() {
    return {
      get(t, e) {
        return e === "proxyOf" ? t : e === "root" ? () => t.root().toProxy() : t[e];
      },
      set(t, e, r) {
        return t[e] === r || (t[e] = r, (e === "prop" || e === "value" || e === "name" || e === "params" || e === "important" || /* c8 ignore next */
        e === "text") && t.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[wr] = !0;
  }
  markDirty() {
    if (this[wr]) {
      this[wr] = !1;
      let t = this;
      for (; t = t.parent; )
        t[wr] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let t = this.parent.index(this);
    return this.parent.nodes[t + 1];
  }
  positionBy(t, e) {
    let r = this.source.start;
    if (t.index)
      r = this.positionInside(t.index, e);
    else if (t.word) {
      e = this.toString();
      let a = e.indexOf(t.word);
      a !== -1 && (r = this.positionInside(a, e));
    }
    return r;
  }
  positionInside(t, e) {
    let r = e || this.toString(), a = this.source.start.column, i = this.source.start.line;
    for (let u = 0; u < t; u++)
      r[u] === `
` ? (a = 1, i += 1) : a += 1;
    return { column: a, line: i };
  }
  prev() {
    if (!this.parent) return;
    let t = this.parent.index(this);
    return this.parent.nodes[t - 1];
  }
  rangeBy(t) {
    let e = {
      column: this.source.start.column,
      line: this.source.start.line
    }, r = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: e.column + 1,
      line: e.line
    };
    if (t.word) {
      let a = this.toString(), i = a.indexOf(t.word);
      i !== -1 && (e = this.positionInside(i, a), r = this.positionInside(
        i + t.word.length,
        a
      ));
    } else
      t.start ? e = {
        column: t.start.column,
        line: t.start.line
      } : t.index && (e = this.positionInside(t.index)), t.end ? r = {
        column: t.end.column,
        line: t.end.line
      } : typeof t.endIndex == "number" ? r = this.positionInside(t.endIndex) : t.index && (r = this.positionInside(t.index + 1));
    return (r.line < e.line || r.line === e.line && r.column <= e.column) && (r = { column: e.column + 1, line: e.line }), { end: r, start: e };
  }
  raw(t, e) {
    return new C4().raw(this, t, e);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...t) {
    if (this.parent) {
      let e = this, r = !1;
      for (let a of t)
        a === this ? r = !0 : r ? (this.parent.insertAfter(e, a), e = a) : this.parent.insertBefore(e, a);
      r || this.remove();
    }
    return this;
  }
  root() {
    let t = this;
    for (; t.parent && t.parent.type !== "document"; )
      t = t.parent;
    return t;
  }
  toJSON(t, e) {
    let r = {}, a = e == null;
    e = e || /* @__PURE__ */ new Map();
    let i = 0;
    for (let u in this) {
      if (!Object.prototype.hasOwnProperty.call(this, u) || u === "parent" || u === "proxyCache") continue;
      let o = this[u];
      if (Array.isArray(o))
        r[u] = o.map((s) => typeof s == "object" && s.toJSON ? s.toJSON(null, e) : s);
      else if (typeof o == "object" && o.toJSON)
        r[u] = o.toJSON(null, e);
      else if (u === "source") {
        let s = e.get(o.input);
        s == null && (s = i, e.set(o.input, i), i++), r[u] = {
          end: o.end,
          inputId: s,
          start: o.start
        };
      } else
        r[u] = o;
    }
    return a && (r.inputs = [...e.keys()].map((u) => u.toJSON())), r;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(t = M4) {
    t.stringify && (t = t.stringify);
    let e = "";
    return t(this, (r) => {
      e += r;
    }), e;
  }
  warn(t, e, r) {
    let a = { node: this };
    for (let i in r) a[i] = r[i];
    return t.warn(e, a);
  }
  get proxyOf() {
    return this;
  }
};
var Ca = _i;
_i.default = _i;
let _4 = Ca, Ni = class extends _4 {
  constructor(t) {
    super(t), this.type = "comment";
  }
};
var Ma = Ni;
Ni.default = Ni;
let N4 = Ca, Ii = class extends N4 {
  constructor(t) {
    t && typeof t.value < "u" && typeof t.value != "string" && (t = { ...t, value: String(t.value) }), super(t), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Fa = Ii;
Ii.default = Ii;
let Fc = Ma, _c = Fa, I4 = Ca, { isClean: Nc, my: Ic } = tn, _u, Oc, Bc, Nu;
function Lc(n) {
  return n.map((t) => (t.nodes && (t.nodes = Lc(t.nodes)), delete t.source, t));
}
function Rc(n) {
  if (n[Nc] = !1, n.proxyOf.nodes)
    for (let t of n.proxyOf.nodes)
      Rc(t);
}
let v0 = class zc extends I4 {
  append(...t) {
    for (let e of t) {
      let r = this.normalize(e, this.last);
      for (let a of r) this.proxyOf.nodes.push(a);
    }
    return this.markDirty(), this;
  }
  cleanRaws(t) {
    if (super.cleanRaws(t), this.nodes)
      for (let e of this.nodes) e.cleanRaws(t);
  }
  each(t) {
    if (!this.proxyOf.nodes) return;
    let e = this.getIterator(), r, a;
    for (; this.indexes[e] < this.proxyOf.nodes.length && (r = this.indexes[e], a = t(this.proxyOf.nodes[r], r), a !== !1); )
      this.indexes[e] += 1;
    return delete this.indexes[e], a;
  }
  every(t) {
    return this.nodes.every(t);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let t = this.lastEach;
    return this.indexes[t] = 0, t;
  }
  getProxyProcessor() {
    return {
      get(t, e) {
        return e === "proxyOf" ? t : t[e] ? e === "each" || typeof e == "string" && e.startsWith("walk") ? (...r) => t[e](
          ...r.map((a) => typeof a == "function" ? (i, u) => a(i.toProxy(), u) : a)
        ) : e === "every" || e === "some" ? (r) => t[e](
          (a, ...i) => r(a.toProxy(), ...i)
        ) : e === "root" ? () => t.root().toProxy() : e === "nodes" ? t.nodes.map((r) => r.toProxy()) : e === "first" || e === "last" ? t[e].toProxy() : t[e] : t[e];
      },
      set(t, e, r) {
        return t[e] === r || (t[e] = r, (e === "name" || e === "params" || e === "selector") && t.markDirty()), !0;
      }
    };
  }
  index(t) {
    return typeof t == "number" ? t : (t.proxyOf && (t = t.proxyOf), this.proxyOf.nodes.indexOf(t));
  }
  insertAfter(t, e) {
    let r = this.index(t), a = this.normalize(e, this.proxyOf.nodes[r]).reverse();
    r = this.index(t);
    for (let u of a) this.proxyOf.nodes.splice(r + 1, 0, u);
    let i;
    for (let u in this.indexes)
      i = this.indexes[u], r < i && (this.indexes[u] = i + a.length);
    return this.markDirty(), this;
  }
  insertBefore(t, e) {
    let r = this.index(t), a = r === 0 ? "prepend" : !1, i = this.normalize(
      e,
      this.proxyOf.nodes[r],
      a
    ).reverse();
    r = this.index(t);
    for (let o of i) this.proxyOf.nodes.splice(r, 0, o);
    let u;
    for (let o in this.indexes)
      u = this.indexes[o], r <= u && (this.indexes[o] = u + i.length);
    return this.markDirty(), this;
  }
  normalize(t, e) {
    if (typeof t == "string")
      t = Lc(Oc(t).nodes);
    else if (typeof t > "u")
      t = [];
    else if (Array.isArray(t)) {
      t = t.slice(0);
      for (let a of t)
        a.parent && a.parent.removeChild(a, "ignore");
    } else if (t.type === "root" && this.type !== "document") {
      t = t.nodes.slice(0);
      for (let a of t)
        a.parent && a.parent.removeChild(a, "ignore");
    } else if (t.type)
      t = [t];
    else if (t.prop) {
      if (typeof t.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof t.value != "string" && (t.value = String(t.value)), t = [new _c(t)];
    } else if (t.selector || t.selectors)
      t = [new Nu(t)];
    else if (t.name)
      t = [new _u(t)];
    else if (t.text)
      t = [new Fc(t)];
    else
      throw new Error("Unknown node type in node creation");
    return t.map((a) => (a[Ic] || zc.rebuild(a), a = a.proxyOf, a.parent && a.parent.removeChild(a), a[Nc] && Rc(a), a.raws || (a.raws = {}), typeof a.raws.before > "u" && e && typeof e.raws.before < "u" && (a.raws.before = e.raws.before.replace(/\S/g, "")), a.parent = this.proxyOf, a));
  }
  prepend(...t) {
    t = t.reverse();
    for (let e of t) {
      let r = this.normalize(e, this.first, "prepend").reverse();
      for (let a of r) this.proxyOf.nodes.unshift(a);
      for (let a in this.indexes)
        this.indexes[a] = this.indexes[a] + r.length;
    }
    return this.markDirty(), this;
  }
  push(t) {
    return t.parent = this, this.proxyOf.nodes.push(t), this;
  }
  removeAll() {
    for (let t of this.proxyOf.nodes) t.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(t) {
    t = this.index(t), this.proxyOf.nodes[t].parent = void 0, this.proxyOf.nodes.splice(t, 1);
    let e;
    for (let r in this.indexes)
      e = this.indexes[r], e >= t && (this.indexes[r] = e - 1);
    return this.markDirty(), this;
  }
  replaceValues(t, e, r) {
    return r || (r = e, e = {}), this.walkDecls((a) => {
      e.props && !e.props.includes(a.prop) || e.fast && !a.value.includes(e.fast) || (a.value = a.value.replace(t, r));
    }), this.markDirty(), this;
  }
  some(t) {
    return this.nodes.some(t);
  }
  walk(t) {
    return this.each((e, r) => {
      let a;
      try {
        a = t(e, r);
      } catch (i) {
        throw e.addToError(i);
      }
      return a !== !1 && e.walk && (a = e.walk(t)), a;
    });
  }
  walkAtRules(t, e) {
    return e ? t instanceof RegExp ? this.walk((r, a) => {
      if (r.type === "atrule" && t.test(r.name))
        return e(r, a);
    }) : this.walk((r, a) => {
      if (r.type === "atrule" && r.name === t)
        return e(r, a);
    }) : (e = t, this.walk((r, a) => {
      if (r.type === "atrule")
        return e(r, a);
    }));
  }
  walkComments(t) {
    return this.walk((e, r) => {
      if (e.type === "comment")
        return t(e, r);
    });
  }
  walkDecls(t, e) {
    return e ? t instanceof RegExp ? this.walk((r, a) => {
      if (r.type === "decl" && t.test(r.prop))
        return e(r, a);
    }) : this.walk((r, a) => {
      if (r.type === "decl" && r.prop === t)
        return e(r, a);
    }) : (e = t, this.walk((r, a) => {
      if (r.type === "decl")
        return e(r, a);
    }));
  }
  walkRules(t, e) {
    return e ? t instanceof RegExp ? this.walk((r, a) => {
      if (r.type === "rule" && t.test(r.selector))
        return e(r, a);
    }) : this.walk((r, a) => {
      if (r.type === "rule" && r.selector === t)
        return e(r, a);
    }) : (e = t, this.walk((r, a) => {
      if (r.type === "rule")
        return e(r, a);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
v0.registerParse = (n) => {
  Oc = n;
};
v0.registerRule = (n) => {
  Nu = n;
};
v0.registerAtRule = (n) => {
  _u = n;
};
v0.registerRoot = (n) => {
  Bc = n;
};
var X0 = v0;
v0.default = v0;
v0.rebuild = (n) => {
  n.type === "atrule" ? Object.setPrototypeOf(n, _u.prototype) : n.type === "rule" ? Object.setPrototypeOf(n, Nu.prototype) : n.type === "decl" ? Object.setPrototypeOf(n, _c.prototype) : n.type === "comment" ? Object.setPrototypeOf(n, Fc.prototype) : n.type === "root" && Object.setPrototypeOf(n, Bc.prototype), n[Ic] = !0, n.nodes && n.nodes.forEach((t) => {
    v0.rebuild(t);
  });
};
let Pc = X0, la = class extends Pc {
  constructor(t) {
    super(t), this.type = "atrule";
  }
  append(...t) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...t);
  }
  prepend(...t) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...t);
  }
};
var Iu = la;
la.default = la;
Pc.registerAtRule(la);
let O4 = X0, qc, Hc, Hr = class extends O4 {
  constructor(t) {
    super({ type: "document", ...t }), this.nodes || (this.nodes = []);
  }
  toResult(t = {}) {
    return new qc(new Hc(), this, t).stringify();
  }
};
Hr.registerLazyResult = (n) => {
  qc = n;
};
Hr.registerProcessor = (n) => {
  Hc = n;
};
var Ou = Hr;
Hr.default = Hr;
let B4 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", L4 = (n, t = 21) => (e = t) => {
  let r = "", a = e;
  for (; a--; )
    r += n[Math.random() * n.length | 0];
  return r;
}, R4 = (n = 21) => {
  let t = "", e = n;
  for (; e--; )
    t += B4[Math.random() * 64 | 0];
  return t;
};
var z4 = { nanoid: R4, customAlphabet: L4 };
let { existsSync: P4, readFileSync: q4 } = Xt, { dirname: Ka, join: H4 } = Xt, { SourceMapConsumer: Ys, SourceMapGenerator: Xs } = Xt;
function U4(n) {
  return Buffer ? Buffer.from(n, "base64").toString() : window.atob(n);
}
let Oi = class {
  constructor(t, e) {
    if (e.map === !1) return;
    this.loadAnnotation(t), this.inline = this.startWith(this.annotation, "data:");
    let r = e.map ? e.map.prev : void 0, a = this.loadMap(e.from, r);
    !this.mapFile && e.from && (this.mapFile = e.from), this.mapFile && (this.root = Ka(this.mapFile)), a && (this.text = a);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Ys(this.text)), this.consumerCache;
  }
  decodeInline(t) {
    let e = /^data:application\/json;charset=utf-?8;base64,/, r = /^data:application\/json;base64,/, a = /^data:application\/json;charset=utf-?8,/, i = /^data:application\/json,/, u = t.match(a) || t.match(i);
    if (u)
      return decodeURIComponent(t.substr(u[0].length));
    let o = t.match(e) || t.match(r);
    if (o)
      return U4(t.substr(o[0].length));
    let s = t.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
  }
  getAnnotationURL(t) {
    return t.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(t) {
    return typeof t != "object" ? !1 : typeof t.mappings == "string" || typeof t._mappings == "string" || Array.isArray(t.sections);
  }
  loadAnnotation(t) {
    let e = t.match(/\/\*\s*# sourceMappingURL=/g);
    if (!e) return;
    let r = t.lastIndexOf(e.pop()), a = t.indexOf("*/", r);
    r > -1 && a > -1 && (this.annotation = this.getAnnotationURL(t.substring(r, a)));
  }
  loadFile(t) {
    if (this.root = Ka(t), P4(t))
      return this.mapFile = t, q4(t, "utf-8").toString().trim();
  }
  loadMap(t, e) {
    if (e === !1) return !1;
    if (e) {
      if (typeof e == "string")
        return e;
      if (typeof e == "function") {
        let r = e(t);
        if (r) {
          let a = this.loadFile(r);
          if (!a)
            throw new Error(
              "Unable to load previous source map: " + r.toString()
            );
          return a;
        }
      } else {
        if (e instanceof Ys)
          return Xs.fromSourceMap(e).toString();
        if (e instanceof Xs)
          return e.toString();
        if (this.isMap(e))
          return JSON.stringify(e);
        throw new Error(
          "Unsupported previous source map format: " + e.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let r = this.annotation;
        return t && (r = H4(Ka(t), r)), this.loadFile(r);
      }
    }
  }
  startWith(t, e) {
    return t ? t.substr(0, e.length) === e : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var Uc = Oi;
Oi.default = Oi;
let { nanoid: j4 } = z4, { isAbsolute: Bi, resolve: Li } = Xt, { SourceMapConsumer: G4, SourceMapGenerator: V4 } = Xt, { fileURLToPath: Zs, pathToFileURL: kn } = Xt, Ks = Fu, $4 = Uc, Ja = Xt, Qa = Symbol("fromOffsetCache"), W4 = !!(G4 && V4), Js = !!(Li && Bi), ca = class {
  constructor(t, e = {}) {
    if (t === null || typeof t > "u" || typeof t == "object" && !t.toString)
      throw new Error(`PostCSS received ${t} instead of CSS string`);
    if (this.css = t.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, e.from && (!Js || /^\w+:\/\//.test(e.from) || Bi(e.from) ? this.file = e.from : this.file = Li(e.from)), Js && W4) {
      let r = new $4(this.css, e);
      if (r.text) {
        this.map = r;
        let a = r.consumer().file;
        !this.file && a && (this.file = this.mapResolve(a));
      }
    }
    this.file || (this.id = "<input css " + j4(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(t, e, r, a = {}) {
    let i, u, o;
    if (e && typeof e == "object") {
      let c = e, h = r;
      if (typeof c.offset == "number") {
        let b = this.fromOffset(c.offset);
        e = b.line, r = b.col;
      } else
        e = c.line, r = c.column;
      if (typeof h.offset == "number") {
        let b = this.fromOffset(h.offset);
        u = b.line, i = b.col;
      } else
        u = h.line, i = h.column;
    } else if (!r) {
      let c = this.fromOffset(e);
      e = c.line, r = c.col;
    }
    let s = this.origin(e, r, u, i);
    return s ? o = new Ks(
      t,
      s.endLine === void 0 ? s.line : { column: s.column, line: s.line },
      s.endLine === void 0 ? s.column : { column: s.endColumn, line: s.endLine },
      s.source,
      s.file,
      a.plugin
    ) : o = new Ks(
      t,
      u === void 0 ? e : { column: r, line: e },
      u === void 0 ? r : { column: i, line: u },
      this.css,
      this.file,
      a.plugin
    ), o.input = { column: r, endColumn: i, endLine: u, line: e, source: this.css }, this.file && (kn && (o.input.url = kn(this.file).toString()), o.input.file = this.file), o;
  }
  fromOffset(t) {
    let e, r;
    if (this[Qa])
      r = this[Qa];
    else {
      let i = this.css.split(`
`);
      r = new Array(i.length);
      let u = 0;
      for (let o = 0, s = i.length; o < s; o++)
        r[o] = u, u += i[o].length + 1;
      this[Qa] = r;
    }
    e = r[r.length - 1];
    let a = 0;
    if (t >= e)
      a = r.length - 1;
    else {
      let i = r.length - 2, u;
      for (; a < i; )
        if (u = a + (i - a >> 1), t < r[u])
          i = u - 1;
        else if (t >= r[u + 1])
          a = u + 1;
        else {
          a = u;
          break;
        }
    }
    return {
      col: t - r[a] + 1,
      line: a + 1
    };
  }
  mapResolve(t) {
    return /^\w+:\/\//.test(t) ? t : Li(this.map.consumer().sourceRoot || this.map.root || ".", t);
  }
  origin(t, e, r, a) {
    if (!this.map) return !1;
    let i = this.map.consumer(), u = i.originalPositionFor({ column: e, line: t });
    if (!u.source) return !1;
    let o;
    typeof r == "number" && (o = i.originalPositionFor({ column: a, line: r }));
    let s;
    Bi(u.source) ? s = kn(u.source) : s = new URL(
      u.source,
      this.map.consumer().sourceRoot || kn(this.map.mapFile)
    );
    let c = {
      column: u.column,
      endColumn: o && o.column,
      endLine: o && o.line,
      line: u.line,
      url: s.toString()
    };
    if (s.protocol === "file:")
      if (Zs)
        c.file = Zs(s);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let h = i.sourceContentFor(u.source);
    return h && (c.source = h), c;
  }
  toJSON() {
    let t = {};
    for (let e of ["hasBOM", "css", "file", "id"])
      this[e] != null && (t[e] = this[e]);
    return this.map && (t.map = { ...this.map }, t.map.consumerCache && (t.map.consumerCache = void 0)), t;
  }
  get from() {
    return this.file || this.id;
  }
};
var _a = ca;
ca.default = ca;
Ja && Ja.registerInput && Ja.registerInput(ca);
let jc = X0, Gc, Vc, or = class extends jc {
  constructor(t) {
    super(t), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(t, e, r) {
    let a = super.normalize(t);
    if (e) {
      if (r === "prepend")
        this.nodes.length > 1 ? e.raws.before = this.nodes[1].raws.before : delete e.raws.before;
      else if (this.first !== e)
        for (let i of a)
          i.raws.before = e.raws.before;
    }
    return a;
  }
  removeChild(t, e) {
    let r = this.index(t);
    return !e && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(t);
  }
  toResult(t = {}) {
    return new Gc(new Vc(), this, t).stringify();
  }
};
or.registerLazyResult = (n) => {
  Gc = n;
};
or.registerProcessor = (n) => {
  Vc = n;
};
var rn = or;
or.default = or;
jc.registerRoot(or);
let Ur = {
  comma(n) {
    return Ur.split(n, [","], !0);
  },
  space(n) {
    let t = [" ", `
`, "	"];
    return Ur.split(n, t);
  },
  split(n, t, e) {
    let r = [], a = "", i = !1, u = 0, o = !1, s = "", c = !1;
    for (let h of n)
      c ? c = !1 : h === "\\" ? c = !0 : o ? h === s && (o = !1) : h === '"' || h === "'" ? (o = !0, s = h) : h === "(" ? u += 1 : h === ")" ? u > 0 && (u -= 1) : u === 0 && t.includes(h) && (i = !0), i ? (a !== "" && r.push(a.trim()), a = "", i = !1) : a += h;
    return (e || a !== "") && r.push(a.trim()), r;
  }
};
var $c = Ur;
Ur.default = Ur;
let Wc = X0, Y4 = $c, fa = class extends Wc {
  constructor(t) {
    super(t), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return Y4.comma(this.selector);
  }
  set selectors(t) {
    let e = this.selector ? this.selector.match(/,\s*/) : null, r = e ? e[0] : "," + this.raw("between", "beforeOpen");
    this.selector = t.join(r);
  }
};
var Bu = fa;
fa.default = fa;
Wc.registerRule(fa);
let X4 = Iu, Z4 = Ma, K4 = Fa, J4 = _a, Q4 = Uc, em = rn, tm = Bu;
function jr(n, t) {
  if (Array.isArray(n)) return n.map((a) => jr(a));
  let { inputs: e, ...r } = n;
  if (e) {
    t = [];
    for (let a of e) {
      let i = { ...a, __proto__: J4.prototype };
      i.map && (i.map = {
        ...i.map,
        __proto__: Q4.prototype
      }), t.push(i);
    }
  }
  if (r.nodes && (r.nodes = n.nodes.map((a) => jr(a, t))), r.source) {
    let { inputId: a, ...i } = r.source;
    r.source = i, a != null && (r.source.input = t[a]);
  }
  if (r.type === "root")
    return new em(r);
  if (r.type === "decl")
    return new K4(r);
  if (r.type === "rule")
    return new tm(r);
  if (r.type === "comment")
    return new Z4(r);
  if (r.type === "atrule")
    return new X4(r);
  throw new Error("Unknown node type: " + n.type);
}
var rm = jr;
jr.default = jr;
let { dirname: Vn, relative: Yc, resolve: Xc, sep: Zc } = Xt, { SourceMapConsumer: Kc, SourceMapGenerator: $n } = Xt, { pathToFileURL: Qs } = Xt, nm = _a, am = !!(Kc && $n), im = !!(Vn && Xc && Yc && Zc), um = class {
  constructor(t, e, r, a) {
    this.stringify = t, this.mapOpts = r.map || {}, this.root = e, this.opts = r, this.css = a, this.originalCSS = a, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let t;
    this.isInline() ? t = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? t = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? t = this.mapOpts.annotation(this.opts.to, this.root) : t = this.outputFile() + ".map";
    let e = `
`;
    this.css.includes(`\r
`) && (e = `\r
`), this.css += e + "/*# sourceMappingURL=" + t + " */";
  }
  applyPrevMaps() {
    for (let t of this.previous()) {
      let e = this.toUrl(this.path(t.file)), r = t.root || Vn(t.file), a;
      this.mapOpts.sourcesContent === !1 ? (a = new Kc(t.text), a.sourcesContent && (a.sourcesContent = null)) : a = t.consumer(), this.map.applySourceMap(a, e, this.toUrl(this.path(r)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let t;
        for (let e = this.root.nodes.length - 1; e >= 0; e--)
          t = this.root.nodes[e], t.type === "comment" && t.text.startsWith("# sourceMappingURL=") && this.root.removeChild(e);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), im && am && this.isMap())
      return this.generateMap();
    {
      let t = "";
      return this.stringify(this.root, (e) => {
        t += e;
      }), [t];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let t = this.previous()[0].consumer();
      t.file = this.outputFile(), this.map = $n.fromSourceMap(t, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new $n({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new $n({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let t = 1, e = 1, r = "<no source>", a = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, i, u;
    this.stringify(this.root, (o, s, c) => {
      if (this.css += o, s && c !== "end" && (a.generated.line = t, a.generated.column = e - 1, s.source && s.source.start ? (a.source = this.sourcePath(s), a.original.line = s.source.start.line, a.original.column = s.source.start.column - 1, this.map.addMapping(a)) : (a.source = r, a.original.line = 1, a.original.column = 0, this.map.addMapping(a))), u = o.match(/\n/g), u ? (t += u.length, i = o.lastIndexOf(`
`), e = o.length - i) : e += o.length, s && c !== "start") {
        let h = s.parent || { raws: {} };
        (!(s.type === "decl" || s.type === "atrule" && !s.nodes) || s !== h.last || h.raws.semicolon) && (s.source && s.source.end ? (a.source = this.sourcePath(s), a.original.line = s.source.end.line, a.original.column = s.source.end.column - 1, a.generated.line = t, a.generated.column = e - 2, this.map.addMapping(a)) : (a.source = r, a.original.line = 1, a.original.column = 0, a.generated.line = t, a.generated.column = e - 1, this.map.addMapping(a)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((t) => t.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let t = this.mapOpts.annotation;
    return typeof t < "u" && t !== !0 ? !1 : this.previous().length ? this.previous().some((e) => e.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((t) => t.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(t) {
    if (this.mapOpts.absolute || t.charCodeAt(0) === 60 || /^\w+:\/\//.test(t)) return t;
    let e = this.memoizedPaths.get(t);
    if (e) return e;
    let r = this.opts.to ? Vn(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (r = Vn(Xc(r, this.mapOpts.annotation)));
    let a = Yc(r, t);
    return this.memoizedPaths.set(t, a), a;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((t) => {
          if (t.source && t.source.input.map) {
            let e = t.source.input.map;
            this.previousMaps.includes(e) || this.previousMaps.push(e);
          }
        });
      else {
        let t = new nm(this.originalCSS, this.opts);
        t.map && this.previousMaps.push(t.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let t = {};
    if (this.root)
      this.root.walk((e) => {
        if (e.source) {
          let r = e.source.input.from;
          if (r && !t[r]) {
            t[r] = !0;
            let a = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
            this.map.setSourceContent(a, e.source.input.css);
          }
        }
      });
    else if (this.css) {
      let e = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(e, this.css);
    }
  }
  sourcePath(t) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(t.source.input.from) : this.toUrl(this.path(t.source.input.from));
  }
  toBase64(t) {
    return Buffer ? Buffer.from(t).toString("base64") : window.btoa(unescape(encodeURIComponent(t)));
  }
  toFileUrl(t) {
    let e = this.memoizedFileURLs.get(t);
    if (e) return e;
    if (Qs) {
      let r = Qs(t).toString();
      return this.memoizedFileURLs.set(t, r), r;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(t) {
    let e = this.memoizedURLs.get(t);
    if (e) return e;
    Zc === "\\" && (t = t.replace(/\\/g, "/"));
    let r = encodeURI(t).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(t, r), r;
  }
};
var Jc = um;
const ei = 39, eo = 34, En = 92, to = 47, Tn = 10, xr = 32, Cn = 12, Mn = 9, Fn = 13, sm = 91, om = 93, lm = 40, cm = 41, fm = 123, dm = 125, hm = 59, mm = 42, pm = 58, gm = 64, _n = /[\t\n\f\r "#'()/;[\\\]{}]/g, Nn = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, bm = /.[\r\n"'(/\\]/, ro = /[\da-f]/i;
var vm = function(t, e = {}) {
  let r = t.css.valueOf(), a = e.ignoreErrors, i, u, o, s, c, h, b, d, m, T, A = r.length, S = 0, I = [], D = [];
  function k() {
    return S;
  }
  function M(j) {
    throw t.error("Unclosed " + j, S);
  }
  function O() {
    return D.length === 0 && S >= A;
  }
  function N(j) {
    if (D.length) return D.pop();
    if (S >= A) return;
    let q = j ? j.ignoreUnclosed : !1;
    switch (i = r.charCodeAt(S), i) {
      case Tn:
      case xr:
      case Mn:
      case Fn:
      case Cn: {
        s = S;
        do
          s += 1, i = r.charCodeAt(s);
        while (i === xr || i === Tn || i === Mn || i === Fn || i === Cn);
        h = ["space", r.slice(S, s)], S = s - 1;
        break;
      }
      case sm:
      case om:
      case fm:
      case dm:
      case pm:
      case hm:
      case cm: {
        let H = String.fromCharCode(i);
        h = [H, H, S];
        break;
      }
      case lm: {
        if (T = I.length ? I.pop()[1] : "", m = r.charCodeAt(S + 1), T === "url" && m !== ei && m !== eo && m !== xr && m !== Tn && m !== Mn && m !== Cn && m !== Fn) {
          s = S;
          do {
            if (b = !1, s = r.indexOf(")", s + 1), s === -1)
              if (a || q) {
                s = S;
                break;
              } else
                M("bracket");
            for (d = s; r.charCodeAt(d - 1) === En; )
              d -= 1, b = !b;
          } while (b);
          h = ["brackets", r.slice(S, s + 1), S, s], S = s;
        } else
          s = r.indexOf(")", S + 1), u = r.slice(S, s + 1), s === -1 || bm.test(u) ? h = ["(", "(", S] : (h = ["brackets", u, S, s], S = s);
        break;
      }
      case ei:
      case eo: {
        c = i === ei ? "'" : '"', s = S;
        do {
          if (b = !1, s = r.indexOf(c, s + 1), s === -1)
            if (a || q) {
              s = S + 1;
              break;
            } else
              M("string");
          for (d = s; r.charCodeAt(d - 1) === En; )
            d -= 1, b = !b;
        } while (b);
        h = ["string", r.slice(S, s + 1), S, s], S = s;
        break;
      }
      case gm: {
        _n.lastIndex = S + 1, _n.test(r), _n.lastIndex === 0 ? s = r.length - 1 : s = _n.lastIndex - 2, h = ["at-word", r.slice(S, s + 1), S, s], S = s;
        break;
      }
      case En: {
        for (s = S, o = !0; r.charCodeAt(s + 1) === En; )
          s += 1, o = !o;
        if (i = r.charCodeAt(s + 1), o && i !== to && i !== xr && i !== Tn && i !== Mn && i !== Fn && i !== Cn && (s += 1, ro.test(r.charAt(s)))) {
          for (; ro.test(r.charAt(s + 1)); )
            s += 1;
          r.charCodeAt(s + 1) === xr && (s += 1);
        }
        h = ["word", r.slice(S, s + 1), S, s], S = s;
        break;
      }
      default: {
        i === to && r.charCodeAt(S + 1) === mm ? (s = r.indexOf("*/", S + 2) + 1, s === 0 && (a || q ? s = r.length : M("comment")), h = ["comment", r.slice(S, s + 1), S, s], S = s) : (Nn.lastIndex = S + 1, Nn.test(r), Nn.lastIndex === 0 ? s = r.length - 1 : s = Nn.lastIndex - 2, h = ["word", r.slice(S, s + 1), S, s], I.push(h), S = s);
        break;
      }
    }
    return S++, h;
  }
  function R(j) {
    D.push(j);
  }
  return {
    back: R,
    endOfFile: O,
    nextToken: N,
    position: k
  };
};
let ym = Iu, wm = Ma, xm = Fa, Dm = rn, no = Bu, Am = vm;
const ao = {
  empty: !0,
  space: !0
};
function Sm(n) {
  for (let t = n.length - 1; t >= 0; t--) {
    let e = n[t], r = e[3] || e[2];
    if (r) return r;
  }
}
let km = class {
  constructor(t) {
    this.input = t, this.root = new Dm(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: t, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(t) {
    let e = new ym();
    e.name = t[1].slice(1), e.name === "" && this.unnamedAtrule(e, t), this.init(e, t[2]);
    let r, a, i, u = !1, o = !1, s = [], c = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (t = this.tokenizer.nextToken(), r = t[0], r === "(" || r === "[" ? c.push(r === "(" ? ")" : "]") : r === "{" && c.length > 0 ? c.push("}") : r === c[c.length - 1] && c.pop(), c.length === 0)
        if (r === ";") {
          e.source.end = this.getPosition(t[2]), e.source.end.offset++, this.semicolon = !0;
          break;
        } else if (r === "{") {
          o = !0;
          break;
        } else if (r === "}") {
          if (s.length > 0) {
            for (i = s.length - 1, a = s[i]; a && a[0] === "space"; )
              a = s[--i];
            a && (e.source.end = this.getPosition(a[3] || a[2]), e.source.end.offset++);
          }
          this.end(t);
          break;
        } else
          s.push(t);
      else
        s.push(t);
      if (this.tokenizer.endOfFile()) {
        u = !0;
        break;
      }
    }
    e.raws.between = this.spacesAndCommentsFromEnd(s), s.length ? (e.raws.afterName = this.spacesAndCommentsFromStart(s), this.raw(e, "params", s), u && (t = s[s.length - 1], e.source.end = this.getPosition(t[3] || t[2]), e.source.end.offset++, this.spaces = e.raws.between, e.raws.between = "")) : (e.raws.afterName = "", e.params = ""), o && (e.nodes = [], this.current = e);
  }
  checkMissedSemicolon(t) {
    let e = this.colon(t);
    if (e === !1) return;
    let r = 0, a;
    for (let i = e - 1; i >= 0 && (a = t[i], !(a[0] !== "space" && (r += 1, r === 2))); i--)
      ;
    throw this.input.error(
      "Missed semicolon",
      a[0] === "word" ? a[3] + 1 : a[2]
    );
  }
  colon(t) {
    let e = 0, r, a, i;
    for (let [u, o] of t.entries()) {
      if (a = o, i = a[0], i === "(" && (e += 1), i === ")" && (e -= 1), e === 0 && i === ":")
        if (!r)
          this.doubleColon(a);
        else {
          if (r[0] === "word" && r[1] === "progid")
            continue;
          return u;
        }
      r = a;
    }
    return !1;
  }
  comment(t) {
    let e = new wm();
    this.init(e, t[2]), e.source.end = this.getPosition(t[3] || t[2]), e.source.end.offset++;
    let r = t[1].slice(2, -2);
    if (/^\s*$/.test(r))
      e.text = "", e.raws.left = r, e.raws.right = "";
    else {
      let a = r.match(/^(\s*)([^]*\S)(\s*)$/);
      e.text = a[2], e.raws.left = a[1], e.raws.right = a[3];
    }
  }
  createTokenizer() {
    this.tokenizer = Am(this.input);
  }
  decl(t, e) {
    let r = new xm();
    this.init(r, t[0][2]);
    let a = t[t.length - 1];
    for (a[0] === ";" && (this.semicolon = !0, t.pop()), r.source.end = this.getPosition(
      a[3] || a[2] || Sm(t)
    ), r.source.end.offset++; t[0][0] !== "word"; )
      t.length === 1 && this.unknownWord(t), r.raws.before += t.shift()[1];
    for (r.source.start = this.getPosition(t[0][2]), r.prop = ""; t.length; ) {
      let c = t[0][0];
      if (c === ":" || c === "space" || c === "comment")
        break;
      r.prop += t.shift()[1];
    }
    r.raws.between = "";
    let i;
    for (; t.length; )
      if (i = t.shift(), i[0] === ":") {
        r.raws.between += i[1];
        break;
      } else
        i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]), r.raws.between += i[1];
    (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
    let u = [], o;
    for (; t.length && (o = t[0][0], !(o !== "space" && o !== "comment")); )
      u.push(t.shift());
    this.precheckMissedSemicolon(t);
    for (let c = t.length - 1; c >= 0; c--) {
      if (i = t[c], i[1].toLowerCase() === "!important") {
        r.important = !0;
        let h = this.stringFrom(t, c);
        h = this.spacesFromEnd(t) + h, h !== " !important" && (r.raws.important = h);
        break;
      } else if (i[1].toLowerCase() === "important") {
        let h = t.slice(0), b = "";
        for (let d = c; d > 0; d--) {
          let m = h[d][0];
          if (b.trim().startsWith("!") && m !== "space")
            break;
          b = h.pop()[1] + b;
        }
        b.trim().startsWith("!") && (r.important = !0, r.raws.important = b, t = h);
      }
      if (i[0] !== "space" && i[0] !== "comment")
        break;
    }
    t.some((c) => c[0] !== "space" && c[0] !== "comment") && (r.raws.between += u.map((c) => c[1]).join(""), u = []), this.raw(r, "value", u.concat(t), e), r.value.includes(":") && !e && this.checkMissedSemicolon(t);
  }
  doubleColon(t) {
    throw this.input.error(
      "Double colon",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
  emptyRule(t) {
    let e = new no();
    this.init(e, t[2]), e.selector = "", e.raws.between = "", this.current = e;
  }
  end(t) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(t[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(t);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(t) {
    if (this.spaces += t[1], this.current.nodes) {
      let e = this.current.nodes[this.current.nodes.length - 1];
      e && e.type === "rule" && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(t) {
    let e = this.input.fromOffset(t);
    return {
      column: e.col,
      line: e.line,
      offset: t
    };
  }
  init(t, e) {
    this.current.push(t), t.source = {
      input: this.input,
      start: this.getPosition(e)
    }, t.raws.before = this.spaces, this.spaces = "", t.type !== "comment" && (this.semicolon = !1);
  }
  other(t) {
    let e = !1, r = null, a = !1, i = null, u = [], o = t[1].startsWith("--"), s = [], c = t;
    for (; c; ) {
      if (r = c[0], s.push(c), r === "(" || r === "[")
        i || (i = c), u.push(r === "(" ? ")" : "]");
      else if (o && a && r === "{")
        i || (i = c), u.push("}");
      else if (u.length === 0)
        if (r === ";")
          if (a) {
            this.decl(s, o);
            return;
          } else
            break;
        else if (r === "{") {
          this.rule(s);
          return;
        } else if (r === "}") {
          this.tokenizer.back(s.pop()), e = !0;
          break;
        } else r === ":" && (a = !0);
      else r === u[u.length - 1] && (u.pop(), u.length === 0 && (i = null));
      c = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (e = !0), u.length > 0 && this.unclosedBracket(i), e && a) {
      if (!o)
        for (; s.length && (c = s[s.length - 1][0], !(c !== "space" && c !== "comment")); )
          this.tokenizer.back(s.pop());
      this.decl(s, o);
    } else
      this.unknownWord(s);
  }
  parse() {
    let t;
    for (; !this.tokenizer.endOfFile(); )
      switch (t = this.tokenizer.nextToken(), t[0]) {
        case "space":
          this.spaces += t[1];
          break;
        case ";":
          this.freeSemicolon(t);
          break;
        case "}":
          this.end(t);
          break;
        case "comment":
          this.comment(t);
          break;
        case "at-word":
          this.atrule(t);
          break;
        case "{":
          this.emptyRule(t);
          break;
        default:
          this.other(t);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(t, e, r, a) {
    let i, u, o = r.length, s = "", c = !0, h, b;
    for (let d = 0; d < o; d += 1)
      i = r[d], u = i[0], u === "space" && d === o - 1 && !a ? c = !1 : u === "comment" ? (b = r[d - 1] ? r[d - 1][0] : "empty", h = r[d + 1] ? r[d + 1][0] : "empty", !ao[b] && !ao[h] ? s.slice(-1) === "," ? c = !1 : s += i[1] : c = !1) : s += i[1];
    if (!c) {
      let d = r.reduce((m, T) => m + T[1], "");
      t.raws[e] = { raw: d, value: s };
    }
    t[e] = s;
  }
  rule(t) {
    t.pop();
    let e = new no();
    this.init(e, t[0][2]), e.raws.between = this.spacesAndCommentsFromEnd(t), this.raw(e, "selector", t), this.current = e;
  }
  spacesAndCommentsFromEnd(t) {
    let e, r = "";
    for (; t.length && (e = t[t.length - 1][0], !(e !== "space" && e !== "comment")); )
      r = t.pop()[1] + r;
    return r;
  }
  // Errors
  spacesAndCommentsFromStart(t) {
    let e, r = "";
    for (; t.length && (e = t[0][0], !(e !== "space" && e !== "comment")); )
      r += t.shift()[1];
    return r;
  }
  spacesFromEnd(t) {
    let e, r = "";
    for (; t.length && (e = t[t.length - 1][0], e === "space"); )
      r = t.pop()[1] + r;
    return r;
  }
  stringFrom(t, e) {
    let r = "";
    for (let a = e; a < t.length; a++)
      r += t[a][1];
    return t.splice(e, t.length - e), r;
  }
  unclosedBlock() {
    let t = this.current.source.start;
    throw this.input.error("Unclosed block", t.line, t.column);
  }
  unclosedBracket(t) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: t[2] },
      { offset: t[2] + 1 }
    );
  }
  unexpectedClose(t) {
    throw this.input.error(
      "Unexpected }",
      { offset: t[2] },
      { offset: t[2] + 1 }
    );
  }
  unknownWord(t) {
    throw this.input.error(
      "Unknown word",
      { offset: t[0][2] },
      { offset: t[0][2] + t[0][1].length }
    );
  }
  unnamedAtrule(t, e) {
    throw this.input.error(
      "At-rule without name",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
};
var Em = km;
let Tm = X0, Cm = _a, Mm = Em;
function da(n, t) {
  let e = new Cm(n, t), r = new Mm(e);
  try {
    r.parse();
  } catch (a) {
    throw process.env.NODE_ENV !== "production" && a.name === "CssSyntaxError" && t && t.from && (/\.scss$/i.test(t.from) ? a.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(t.from) ? a.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(t.from) && (a.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), a;
  }
  return r.root;
}
var Lu = da;
da.default = da;
Tm.registerParse(da);
let Ri = class {
  constructor(t, e = {}) {
    if (this.type = "warning", this.text = t, e.node && e.node.source) {
      let r = e.node.rangeBy(e);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (let r in e) this[r] = e[r];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var Qc = Ri;
Ri.default = Ri;
let Fm = Qc, zi = class {
  constructor(t, e, r) {
    this.processor = t, this.messages = [], this.root = e, this.opts = r, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(t, e = {}) {
    e.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (e.plugin = this.lastPlugin.postcssPlugin);
    let r = new Fm(t, e);
    return this.messages.push(r), r;
  }
  warnings() {
    return this.messages.filter((t) => t.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Ru = zi;
zi.default = zi;
let io = {};
var e1 = function(t) {
  io[t] || (io[t] = !0, typeof console < "u" && console.warn && console.warn(t));
};
let _m = X0, Nm = Ou, Im = Jc, Om = Lu, uo = Ru, Bm = rn, Lm = Ta, { isClean: Jt, my: Rm } = tn, zm = e1;
const Pm = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, qm = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, Hm = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, lr = 0;
function Dr(n) {
  return typeof n == "object" && typeof n.then == "function";
}
function t1(n) {
  let t = !1, e = Pm[n.type];
  return n.type === "decl" ? t = n.prop.toLowerCase() : n.type === "atrule" && (t = n.name.toLowerCase()), t && n.append ? [
    e,
    e + "-" + t,
    lr,
    e + "Exit",
    e + "Exit-" + t
  ] : t ? [e, e + "-" + t, e + "Exit", e + "Exit-" + t] : n.append ? [e, lr, e + "Exit"] : [e, e + "Exit"];
}
function so(n) {
  let t;
  return n.type === "document" ? t = ["Document", lr, "DocumentExit"] : n.type === "root" ? t = ["Root", lr, "RootExit"] : t = t1(n), {
    eventIndex: 0,
    events: t,
    iterator: 0,
    node: n,
    visitorIndex: 0,
    visitors: []
  };
}
function Pi(n) {
  return n[Jt] = !1, n.nodes && n.nodes.forEach((t) => Pi(t)), n;
}
let qi = {}, cr = class r1 {
  constructor(t, e, r) {
    this.stringified = !1, this.processed = !1;
    let a;
    if (typeof e == "object" && e !== null && (e.type === "root" || e.type === "document"))
      a = Pi(e);
    else if (e instanceof r1 || e instanceof uo)
      a = Pi(e.root), e.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = e.map);
    else {
      let i = Om;
      r.syntax && (i = r.syntax.parse), r.parser && (i = r.parser), i.parse && (i = i.parse);
      try {
        a = i(e, r);
      } catch (u) {
        this.processed = !0, this.error = u;
      }
      a && !a[Rm] && _m.rebuild(a);
    }
    this.result = new uo(t, a, r), this.helpers = { ...qi, postcss: qi, result: this.result }, this.plugins = this.processor.plugins.map((i) => typeof i == "object" && i.prepare ? { ...i, ...i.prepare(this.result) } : i);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(t) {
    return this.async().catch(t);
  }
  finally(t) {
    return this.async().then(t, t);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(t, e) {
    let r = this.result.lastPlugin;
    try {
      if (e && e.addToError(t), this.error = t, t.name === "CssSyntaxError" && !t.plugin)
        t.plugin = r.postcssPlugin, t.setMessage();
      else if (r.postcssVersion && process.env.NODE_ENV !== "production") {
        let a = r.postcssPlugin, i = r.postcssVersion, u = this.result.processor.version, o = i.split("."), s = u.split(".");
        (o[0] !== s[0] || parseInt(o[1]) > parseInt(s[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + u + ", but " + a + " uses " + i + ". Perhaps this is the source of the error below."
        );
      }
    } catch (a) {
      console && console.error && console.error(a);
    }
    return t;
  }
  prepareVisitors() {
    this.listeners = {};
    let t = (e, r, a) => {
      this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([e, a]);
    };
    for (let e of this.plugins)
      if (typeof e == "object")
        for (let r in e) {
          if (!qm[r] && /^[A-Z]/.test(r))
            throw new Error(
              `Unknown event ${r} in ${e.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Hm[r])
            if (typeof e[r] == "object")
              for (let a in e[r])
                a === "*" ? t(e, r, e[r][a]) : t(
                  e,
                  r + "-" + a.toLowerCase(),
                  e[r][a]
                );
            else typeof e[r] == "function" && t(e, r, e[r]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let t = 0; t < this.plugins.length; t++) {
      let e = this.plugins[t], r = this.runOnRoot(e);
      if (Dr(r))
        try {
          await r;
        } catch (a) {
          throw this.handleError(a);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let t = this.result.root;
      for (; !t[Jt]; ) {
        t[Jt] = !0;
        let e = [so(t)];
        for (; e.length > 0; ) {
          let r = this.visitTick(e);
          if (Dr(r))
            try {
              await r;
            } catch (a) {
              let i = e[e.length - 1].node;
              throw this.handleError(a, i);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [e, r] of this.listeners.OnceExit) {
          this.result.lastPlugin = e;
          try {
            if (t.type === "document") {
              let a = t.nodes.map(
                (i) => r(i, this.helpers)
              );
              await Promise.all(a);
            } else
              await r(t, this.helpers);
          } catch (a) {
            throw this.handleError(a);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(t) {
    this.result.lastPlugin = t;
    try {
      if (typeof t == "object" && t.Once) {
        if (this.result.root.type === "document") {
          let e = this.result.root.nodes.map(
            (r) => t.Once(r, this.helpers)
          );
          return Dr(e[0]) ? Promise.all(e) : e;
        }
        return t.Once(this.result.root, this.helpers);
      } else if (typeof t == "function")
        return t(this.result.root, this.result);
    } catch (e) {
      throw this.handleError(e);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let t = this.result.opts, e = Lm;
    t.syntax && (e = t.syntax.stringify), t.stringifier && (e = t.stringifier), e.stringify && (e = e.stringify);
    let a = new Im(e, this.result.root, this.result.opts).generate();
    return this.result.css = a[0], this.result.map = a[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let t of this.plugins) {
      let e = this.runOnRoot(t);
      if (Dr(e))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let t = this.result.root;
      for (; !t[Jt]; )
        t[Jt] = !0, this.walkSync(t);
      if (this.listeners.OnceExit)
        if (t.type === "document")
          for (let e of t.nodes)
            this.visitSync(this.listeners.OnceExit, e);
        else
          this.visitSync(this.listeners.OnceExit, t);
    }
    return this.result;
  }
  then(t, e) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || zm(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(t, e);
  }
  toString() {
    return this.css;
  }
  visitSync(t, e) {
    for (let [r, a] of t) {
      this.result.lastPlugin = r;
      let i;
      try {
        i = a(e, this.helpers);
      } catch (u) {
        throw this.handleError(u, e.proxyOf);
      }
      if (e.type !== "root" && e.type !== "document" && !e.parent)
        return !0;
      if (Dr(i))
        throw this.getAsyncError();
    }
  }
  visitTick(t) {
    let e = t[t.length - 1], { node: r, visitors: a } = e;
    if (r.type !== "root" && r.type !== "document" && !r.parent) {
      t.pop();
      return;
    }
    if (a.length > 0 && e.visitorIndex < a.length) {
      let [u, o] = a[e.visitorIndex];
      e.visitorIndex += 1, e.visitorIndex === a.length && (e.visitors = [], e.visitorIndex = 0), this.result.lastPlugin = u;
      try {
        return o(r.toProxy(), this.helpers);
      } catch (s) {
        throw this.handleError(s, r);
      }
    }
    if (e.iterator !== 0) {
      let u = e.iterator, o;
      for (; o = r.nodes[r.indexes[u]]; )
        if (r.indexes[u] += 1, !o[Jt]) {
          o[Jt] = !0, t.push(so(o));
          return;
        }
      e.iterator = 0, delete r.indexes[u];
    }
    let i = e.events;
    for (; e.eventIndex < i.length; ) {
      let u = i[e.eventIndex];
      if (e.eventIndex += 1, u === lr) {
        r.nodes && r.nodes.length && (r[Jt] = !0, e.iterator = r.getIterator());
        return;
      } else if (this.listeners[u]) {
        e.visitors = this.listeners[u];
        return;
      }
    }
    t.pop();
  }
  walkSync(t) {
    t[Jt] = !0;
    let e = t1(t);
    for (let r of e)
      if (r === lr)
        t.nodes && t.each((a) => {
          a[Jt] || this.walkSync(a);
        });
      else {
        let a = this.listeners[r];
        if (a && this.visitSync(a, t.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
cr.registerPostcss = (n) => {
  qi = n;
};
var n1 = cr;
cr.default = cr;
Bm.registerLazyResult(cr);
Nm.registerLazyResult(cr);
let Um = Jc, jm = Lu;
const Gm = Ru;
let Vm = Ta, $m = e1, Hi = class {
  constructor(t, e, r) {
    e = e.toString(), this.stringified = !1, this._processor = t, this._css = e, this._opts = r, this._map = void 0;
    let a, i = Vm;
    this.result = new Gm(this._processor, a, this._opts), this.result.css = e;
    let u = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return u.root;
      }
    });
    let o = new Um(i, a, this._opts, e);
    if (o.isMap()) {
      let [s, c] = o.generate();
      s && (this.result.css = s), c && (this.result.map = c);
    } else
      o.clearAnnotation(), this.result.css = o.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(t) {
    return this.async().catch(t);
  }
  finally(t) {
    return this.async().then(t, t);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(t, e) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || $m(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(t, e);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let t, e = jm;
    try {
      t = e(this._css, this._opts);
    } catch (r) {
      this.error = r;
    }
    if (this.error)
      throw this.error;
    return this._root = t, t;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var Wm = Hi;
Hi.default = Hi;
let Ym = Ou, Xm = n1, Zm = Wm, Km = rn, Gr = class {
  constructor(t = []) {
    this.version = "8.4.47", this.plugins = this.normalize(t);
  }
  normalize(t) {
    let e = [];
    for (let r of t)
      if (r.postcss === !0 ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins))
        e = e.concat(r.plugins);
      else if (typeof r == "object" && r.postcssPlugin)
        e.push(r);
      else if (typeof r == "function")
        e.push(r);
      else if (typeof r == "object" && (r.parse || r.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(r + " is not a PostCSS plugin");
    return e;
  }
  process(t, e = {}) {
    return !this.plugins.length && !e.parser && !e.stringifier && !e.syntax ? new Zm(this, t, e) : new Xm(this, t, e);
  }
  use(t) {
    return this.plugins = this.plugins.concat(this.normalize([t])), this;
  }
};
var Jm = Gr;
Gr.default = Gr;
Km.registerProcessor(Gr);
Ym.registerProcessor(Gr);
let a1 = Iu, i1 = Ma, Qm = X0, ep = Fu, u1 = Fa, s1 = Ou, tp = rm, rp = _a, np = n1, ap = $c, ip = Ca, up = Lu, zu = Jm, sp = Ru, o1 = rn, l1 = Bu, op = Ta, lp = Qc;
function Ne(...n) {
  return n.length === 1 && Array.isArray(n[0]) && (n = n[0]), new zu(n);
}
Ne.plugin = function(t, e) {
  let r = !1;
  function a(...u) {
    console && console.warn && !r && (r = !0, console.warn(
      t + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      t + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let o = e(...u);
    return o.postcssPlugin = t, o.postcssVersion = new zu().version, o;
  }
  let i;
  return Object.defineProperty(a, "postcss", {
    get() {
      return i || (i = a()), i;
    }
  }), a.process = function(u, o, s) {
    return Ne([a(s)]).process(u, o);
  }, a;
};
Ne.stringify = op;
Ne.parse = up;
Ne.fromJSON = tp;
Ne.list = ap;
Ne.comment = (n) => new i1(n);
Ne.atRule = (n) => new a1(n);
Ne.decl = (n) => new u1(n);
Ne.rule = (n) => new l1(n);
Ne.root = (n) => new o1(n);
Ne.document = (n) => new s1(n);
Ne.CssSyntaxError = ep;
Ne.Declaration = u1;
Ne.Container = Qm;
Ne.Processor = zu;
Ne.Document = s1;
Ne.Comment = i1;
Ne.Warning = lp;
Ne.AtRule = a1;
Ne.Result = sp;
Ne.Input = rp;
Ne.Rule = l1;
Ne.Root = o1;
Ne.Node = ip;
np.registerPostcss(Ne);
var cp = Ne;
Ne.default = Ne;
const fp = Jl, oo = i4, { isPlainObject: dp } = Cu, lo = w4, hp = x4, { parse: mp } = cp, pp = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], gp = ["script", "style"];
function Mr(n, t) {
  n && Object.keys(n).forEach(function(e) {
    t(n[e], e);
  });
}
function c0(n, t) {
  return {}.hasOwnProperty.call(n, t);
}
function co(n, t) {
  const e = [];
  return Mr(n, function(r) {
    t(r) && e.push(r);
  }), e;
}
function bp(n) {
  for (const t in n)
    if (c0(n, t))
      return !1;
  return !0;
}
function vp(n) {
  return n.map(function(t) {
    if (!t.url)
      throw new Error("URL missing");
    return t.url + (t.w ? ` ${t.w}w` : "") + (t.h ? ` ${t.h}h` : "") + (t.d ? ` ${t.d}x` : "");
  }).join(", ");
}
var yp = Vr;
const wp = /^[^\0\t\n\f\r /<=>]+$/;
function Vr(n, t, e) {
  if (n == null)
    return "";
  typeof n == "number" && (n = n.toString());
  let r = "", a = "";
  function i(B, G) {
    const U = this;
    this.tag = B, this.attribs = G || {}, this.tagPosition = r.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (S.length) {
        const Z = S[S.length - 1];
        Z.text += U.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      S.length && pp.includes(this.tag) && S[S.length - 1].mediaChildren.push(this.tag);
    };
  }
  t = Object.assign({}, Vr.defaults, t), t.parser = Object.assign({}, xp, t.parser);
  const u = function(B) {
    return t.allowedTags === !1 || (t.allowedTags || []).indexOf(B) > -1;
  };
  gp.forEach(function(B) {
    u(B) && !t.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${B}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const o = t.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let s, c;
  t.allowedAttributes && (s = {}, c = {}, Mr(t.allowedAttributes, function(B, G) {
    s[G] = [];
    const U = [];
    B.forEach(function(Z) {
      typeof Z == "string" && Z.indexOf("*") >= 0 ? U.push(oo(Z).replace(/\\\*/g, ".*")) : s[G].push(Z);
    }), U.length && (c[G] = new RegExp("^(" + U.join("|") + ")$"));
  }));
  const h = {}, b = {}, d = {};
  Mr(t.allowedClasses, function(B, G) {
    if (s && (c0(s, G) || (s[G] = []), s[G].push("class")), h[G] = B, Array.isArray(B)) {
      const U = [];
      h[G] = [], d[G] = [], B.forEach(function(Z) {
        typeof Z == "string" && Z.indexOf("*") >= 0 ? U.push(oo(Z).replace(/\\\*/g, ".*")) : Z instanceof RegExp ? d[G].push(Z) : h[G].push(Z);
      }), U.length && (b[G] = new RegExp("^(" + U.join("|") + ")$"));
    }
  });
  const m = {};
  let T;
  Mr(t.transformTags, function(B, G) {
    let U;
    typeof B == "function" ? U = B : typeof B == "string" && (U = Vr.simpleTransform(B)), G === "*" ? T = U : m[G] = U;
  });
  let A, S, I, D, k, M, O = !1;
  R();
  const N = new fp.Parser({
    onopentag: function(B, G) {
      if (t.enforceHtmlBoundary && B === "html" && R(), k) {
        M++;
        return;
      }
      const U = new i(B, G);
      S.push(U);
      let Z = !1;
      const ye = !!U.text;
      let ve;
      if (c0(m, B) && (ve = m[B](B, G), U.attribs = G = ve.attribs, ve.text !== void 0 && (U.innerText = ve.text), B !== ve.tagName && (U.name = B = ve.tagName, D[A] = ve.tagName)), T && (ve = T(B, G), U.attribs = G = ve.attribs, B !== ve.tagName && (U.name = B = ve.tagName, D[A] = ve.tagName)), (!u(B) || t.disallowedTagsMode === "recursiveEscape" && !bp(I) || t.nestingLimit != null && A >= t.nestingLimit) && (Z = !0, I[A] = !0, (t.disallowedTagsMode === "discard" || t.disallowedTagsMode === "completelyDiscard") && o.indexOf(B) !== -1 && (k = !0, M = 1), I[A] = !0), A++, Z) {
        if (t.disallowedTagsMode === "discard" || t.disallowedTagsMode === "completelyDiscard")
          return;
        a = r, r = "";
      }
      r += "<" + B, B === "script" && (t.allowedScriptHostnames || t.allowedScriptDomains) && (U.innerText = ""), (!s || c0(s, B) || s["*"]) && Mr(G, function(ie, oe) {
        if (!wp.test(oe)) {
          delete U.attribs[oe];
          return;
        }
        if (ie === "" && !t.allowedEmptyAttributes.includes(oe) && (t.nonBooleanAttributes.includes(oe) || t.nonBooleanAttributes.includes("*"))) {
          delete U.attribs[oe];
          return;
        }
        let Te = !1;
        if (!s || c0(s, B) && s[B].indexOf(oe) !== -1 || s["*"] && s["*"].indexOf(oe) !== -1 || c0(c, B) && c[B].test(oe) || c["*"] && c["*"].test(oe))
          Te = !0;
        else if (s && s[B]) {
          for (const ge of s[B])
            if (dp(ge) && ge.name && ge.name === oe) {
              Te = !0;
              let ne = "";
              if (ge.multiple === !0) {
                const Pe = ie.split(" ");
                for (const Me of Pe)
                  ge.values.indexOf(Me) !== -1 && (ne === "" ? ne = Me : ne += " " + Me);
              } else ge.values.indexOf(ie) >= 0 && (ne = ie);
              ie = ne;
            }
        }
        if (Te) {
          if (t.allowedSchemesAppliedToAttributes.indexOf(oe) !== -1 && q(B, ie)) {
            delete U.attribs[oe];
            return;
          }
          if (B === "script" && oe === "src") {
            let ge = !0;
            try {
              const ne = H(ie);
              if (t.allowedScriptHostnames || t.allowedScriptDomains) {
                const Pe = (t.allowedScriptHostnames || []).find(function(ke) {
                  return ke === ne.url.hostname;
                }), Me = (t.allowedScriptDomains || []).find(function(ke) {
                  return ne.url.hostname === ke || ne.url.hostname.endsWith(`.${ke}`);
                });
                ge = Pe || Me;
              }
            } catch {
              ge = !1;
            }
            if (!ge) {
              delete U.attribs[oe];
              return;
            }
          }
          if (B === "iframe" && oe === "src") {
            let ge = !0;
            try {
              const ne = H(ie);
              if (ne.isRelativeUrl)
                ge = c0(t, "allowIframeRelativeUrls") ? t.allowIframeRelativeUrls : !t.allowedIframeHostnames && !t.allowedIframeDomains;
              else if (t.allowedIframeHostnames || t.allowedIframeDomains) {
                const Pe = (t.allowedIframeHostnames || []).find(function(ke) {
                  return ke === ne.url.hostname;
                }), Me = (t.allowedIframeDomains || []).find(function(ke) {
                  return ne.url.hostname === ke || ne.url.hostname.endsWith(`.${ke}`);
                });
                ge = Pe || Me;
              }
            } catch {
              ge = !1;
            }
            if (!ge) {
              delete U.attribs[oe];
              return;
            }
          }
          if (oe === "srcset")
            try {
              let ge = hp(ie);
              if (ge.forEach(function(ne) {
                q("srcset", ne.url) && (ne.evil = !0);
              }), ge = co(ge, function(ne) {
                return !ne.evil;
              }), ge.length)
                ie = vp(co(ge, function(ne) {
                  return !ne.evil;
                })), U.attribs[oe] = ie;
              else {
                delete U.attribs[oe];
                return;
              }
            } catch {
              delete U.attribs[oe];
              return;
            }
          if (oe === "class") {
            const ge = h[B], ne = h["*"], Pe = b[B], Me = d[B], ke = d["*"], Xe = b["*"], Qe = [
              Pe,
              Xe
            ].concat(Me, ke).filter(function(ht) {
              return ht;
            });
            if (ge && ne ? ie = Q(ie, lo(ge, ne), Qe) : ie = Q(ie, ge || ne, Qe), !ie.length) {
              delete U.attribs[oe];
              return;
            }
          }
          if (oe === "style") {
            if (t.parseStyleAttributes)
              try {
                const ge = mp(B + " {" + ie + "}", { map: !1 }), ne = _(ge, t.allowedStyles);
                if (ie = P(ne), ie.length === 0) {
                  delete U.attribs[oe];
                  return;
                }
              } catch {
                typeof window < "u" && console.warn('Failed to parse "' + B + " {" + ie + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete U.attribs[oe];
                return;
              }
            else if (t.allowedStyles)
              throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          r += " " + oe, ie && ie.length ? r += '="' + j(ie, !0) + '"' : t.allowedEmptyAttributes.includes(oe) && (r += '=""');
        } else
          delete U.attribs[oe];
      }), t.selfClosing.indexOf(B) !== -1 ? r += " />" : (r += ">", U.innerText && !ye && !t.textFilter && (r += j(U.innerText), O = !0)), Z && (r = a + j(r), a = "");
    },
    ontext: function(B) {
      if (k)
        return;
      const G = S[S.length - 1];
      let U;
      if (G && (U = G.tag, B = G.innerText !== void 0 ? G.innerText : B), t.disallowedTagsMode === "completelyDiscard" && !u(U))
        B = "";
      else if ((t.disallowedTagsMode === "discard" || t.disallowedTagsMode === "completelyDiscard") && (U === "script" || U === "style"))
        r += B;
      else {
        const Z = j(B, !1);
        t.textFilter && !O ? r += t.textFilter(Z, U) : O || (r += Z);
      }
      if (S.length) {
        const Z = S[S.length - 1];
        Z.text += B;
      }
    },
    onclosetag: function(B, G) {
      if (k)
        if (M--, !M)
          k = !1;
        else
          return;
      const U = S.pop();
      if (!U)
        return;
      if (U.tag !== B) {
        S.push(U);
        return;
      }
      k = t.enforceHtmlBoundary ? B === "html" : !1, A--;
      const Z = I[A];
      if (Z) {
        if (delete I[A], t.disallowedTagsMode === "discard" || t.disallowedTagsMode === "completelyDiscard") {
          U.updateParentNodeText();
          return;
        }
        a = r, r = "";
      }
      if (D[A] && (B = D[A], delete D[A]), t.exclusiveFilter && t.exclusiveFilter(U)) {
        r = r.substr(0, U.tagPosition);
        return;
      }
      if (U.updateParentNodeMediaChildren(), U.updateParentNodeText(), // Already output />
      t.selfClosing.indexOf(B) !== -1 || // Escaped tag, closing tag is implied
      G && !u(B) && ["escape", "recursiveEscape"].indexOf(t.disallowedTagsMode) >= 0) {
        Z && (r = a, a = "");
        return;
      }
      r += "</" + B + ">", Z && (r = a + j(r), a = ""), O = !1;
    }
  }, t.parser);
  return N.write(n), N.end(), r;
  function R() {
    r = "", A = 0, S = [], I = {}, D = {}, k = !1, M = 0;
  }
  function j(B, G) {
    return typeof B != "string" && (B = B + ""), t.parser.decodeEntities && (B = B.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), G && (B = B.replace(/"/g, "&quot;"))), B = B.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), G && (B = B.replace(/"/g, "&quot;")), B;
  }
  function q(B, G) {
    for (G = G.replace(/[\x00-\x20]+/g, ""); ; ) {
      const ye = G.indexOf("<!--");
      if (ye === -1)
        break;
      const ve = G.indexOf("-->", ye + 4);
      if (ve === -1)
        break;
      G = G.substring(0, ye) + G.substring(ve + 3);
    }
    const U = G.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!U)
      return G.match(/^[/\\]{2}/) ? !t.allowProtocolRelative : !1;
    const Z = U[1].toLowerCase();
    return c0(t.allowedSchemesByTag, B) ? t.allowedSchemesByTag[B].indexOf(Z) === -1 : !t.allowedSchemes || t.allowedSchemes.indexOf(Z) === -1;
  }
  function H(B) {
    if (B = B.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), B.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let G = "relative://relative-site";
    for (let ye = 0; ye < 100; ye++)
      G += `/${ye}`;
    const U = new URL(B, G);
    return {
      isRelativeUrl: U && U.hostname === "relative-site" && U.protocol === "relative:",
      url: U
    };
  }
  function _(B, G) {
    if (!G)
      return B;
    const U = B.nodes[0];
    let Z;
    return G[U.selector] && G["*"] ? Z = lo(
      G[U.selector],
      G["*"]
    ) : Z = G[U.selector] || G["*"], Z && (B.nodes[0].nodes = U.nodes.reduce($(Z), [])), B;
  }
  function P(B) {
    return B.nodes[0].nodes.reduce(function(G, U) {
      return G.push(
        `${U.prop}:${U.value}${U.important ? " !important" : ""}`
      ), G;
    }, []).join(";");
  }
  function $(B) {
    return function(G, U) {
      return c0(B, U.prop) && B[U.prop].some(function(ye) {
        return ye.test(U.value);
      }) && G.push(U), G;
    };
  }
  function Q(B, G, U) {
    return G ? (B = B.split(/\s+/), B.filter(function(Z) {
      return G.indexOf(Z) !== -1 || U.some(function(ye) {
        return ye.test(Z);
      });
    }).join(" ")) : B;
  }
}
const xp = {
  decodeEntities: !0
};
Vr.defaults = {
  allowedTags: [
    // Sections derived from MDN element categories and limited to the more
    // benign categories.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // Content sectioning
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    // Text content
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    // Inline text semantics
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    // Table content
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  // Tags that cannot be boolean
  nonBooleanAttributes: [
    "abbr",
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "allow",
    "alt",
    "as",
    "autocapitalize",
    "autocomplete",
    "blocking",
    "charset",
    "cite",
    "class",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "coords",
    "crossorigin",
    "data",
    "datetime",
    "decoding",
    "dir",
    "dirname",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "fetchpriority",
    "for",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "id",
    "imagesizes",
    "imagesrcset",
    "inputmode",
    "integrity",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "name",
    "nonce",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "referrerpolicy",
    "rel",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    // Event handlers
    "onauxclick",
    "onafterprint",
    "onbeforematch",
    "onbeforeprint",
    "onbeforeunload",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onlanguagechange",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmessageerror",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onrejectionhandled",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onunhandledrejection",
    "onunload",
    "onvolumechange",
    "onwaiting",
    "onwheel"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  allowedEmptyAttributes: [
    "alt"
  ],
  // Lots of these won't come up by default because we don't allow them
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1,
  parseStyleAttributes: !0
};
Vr.simpleTransform = function(n, t, e) {
  return e = e === void 0 ? !0 : e, t = t || {}, function(r, a) {
    let i;
    if (e)
      for (i in t)
        a[i] = t[i];
    else
      a = t;
    return {
      tagName: n,
      attribs: a
    };
  };
};
const Dp = /* @__PURE__ */ jh(yp), Ui = (n) => JSON.parse(JSON.stringify(n)), Ap = (n) => n.nodeType === 1, Sp = (n) => Vp.has(n.tagName), kp = (n) => "action" in n, Ep = (n) => n.tagName === "IFRAME", Tp = (n) => "formAction" in n, Cp = (n) => "protocol" in n, In = /* @__PURE__ */ (() => {
  const n = /^(?:\w+script|data):/i;
  return (t) => n.test(t);
})(), Mp = /* @__PURE__ */ (() => {
  const n = /(?:script|data):/i;
  return (t) => n.test(t);
})(), Fp = (n) => {
  const t = {};
  for (let e = 0, r = n.length; e < r; e++) {
    const a = n[e];
    for (const i in a)
      t[i] ? t[i] = t[i].concat(a[i]) : t[i] = a[i];
  }
  return t;
}, c1 = (n, t) => {
  let e = n.firstChild;
  for (; e; ) {
    const r = e.nextSibling;
    Ap(e) && (t(e, n), e.parentNode && c1(e, t)), e = r;
  }
}, _p = (n, t) => {
  const e = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = e.nextNode(); ) {
    const a = r.parentNode;
    a && t(r, a);
  }
}, Np = (n, t) => !!globalThis.document && !!globalThis.document.createNodeIterator ? _p(n, t) : c1(n, t), f1 = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], Ip = [
  "basefont",
  "command",
  "data",
  "iframe",
  "image",
  "plaintext",
  "portal",
  "slot",
  // 'template', //TODO: Not exactly correct to never allow this, too strict
  "textarea",
  "title",
  "xmp"
], Op = /* @__PURE__ */ new Set([
  ...f1,
  ...Ip
]), d1 = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], Bp = [
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "fedropshadow",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
], Lp = /* @__PURE__ */ new Set([
  ...d1,
  ...Bp
]), h1 = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], Rp = [
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
], zp = /* @__PURE__ */ new Set([
  ...h1,
  ...Rp
]), Pp = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], qp = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], Hp = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
], Yt = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, Up = {
  [Yt.HTML]: Op,
  [Yt.SVG]: Lp,
  [Yt.MATH]: zp
}, jp = {
  [Yt.HTML]: "html",
  [Yt.SVG]: "svg",
  [Yt.MATH]: "math"
}, Gp = {
  [Yt.HTML]: "",
  [Yt.SVG]: "svg:",
  [Yt.MATH]: "math:"
}, Vp = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), m1 = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...f1,
    ...d1.map((n) => `svg:${n}`),
    ...h1.map((n) => `math:${n}`)
  ],
  allowAttributes: Fp([
    Object.fromEntries(Pp.map((n) => [n, ["*"]])),
    Object.fromEntries(qp.map((n) => [n, ["svg:*"]])),
    Object.fromEntries(Hp.map((n) => [n, ["math:*"]]))
  ])
};
var ti = function(n, t, e, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? n !== t || !a : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(n, e) : a ? a.value = e : t.set(n, e), e;
}, H0 = function(n, t, e, r) {
  if (e === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? n !== t || !r : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? r : e === "a" ? r.call(n) : r ? r.value : t.get(n);
}, T0, Wn, Yn;
class p1 {
  /* CONSTRUCTOR */
  constructor(t = {}) {
    T0.set(this, void 0), Wn.set(this, void 0), Yn.set(this, void 0), this.getConfiguration = () => Ui(H0(this, T0, "f")), this.sanitize = (h) => {
      const b = H0(this, Wn, "f"), d = H0(this, Yn, "f");
      return Np(h, (m, T) => {
        const A = m.namespaceURI || Yt.HTML, S = T.namespaceURI || Yt.HTML, I = Up[A], D = jp[A], k = Gp[A], M = m.tagName.toLowerCase(), O = `${k}${M}`, R = `${k}*`;
        if (!I.has(M) || !b.has(O) || A !== S && M !== D)
          T.removeChild(m);
        else {
          const j = m.getAttributeNames(), q = j.length;
          if (q) {
            for (let H = 0; H < q; H++) {
              const _ = j[H], P = d[_];
              (!P || !P.has(R) && !P.has(O)) && m.removeAttribute(_);
            }
            if (Sp(m))
              if (Cp(m)) {
                const H = m.getAttribute("href");
                H && Mp(H) && In(m.protocol) && m.removeAttribute("href");
              } else kp(m) ? In(m.action) && m.removeAttribute("action") : Tp(m) ? In(m.formAction) && m.removeAttribute("formaction") : Ep(m) && (In(m.src) && m.removeAttribute("formaction"), m.setAttribute("sandbox", "allow-scripts"));
          }
        }
      }), h;
    }, this.sanitizeFor = (h, b) => {
      throw new Error('"sanitizeFor" is not implemented yet');
    };
    const { allowComments: e, allowCustomElements: r, allowUnknownMarkup: a, blockElements: i, dropElements: u, dropAttributes: o } = t;
    if (e === !1)
      throw new Error('A false "allowComments" is not supported yet');
    if (r)
      throw new Error('A true "allowCustomElements" is not supported yet');
    if (a)
      throw new Error('A true "allowUnknownMarkup" is not supported yet');
    if (i)
      throw new Error('"blockElements" is not supported yet, use "allowElements" instead');
    if (u)
      throw new Error('"dropElements" is not supported yet, use "allowElements" instead');
    if (o)
      throw new Error('"dropAttributes" is not supported yet, use "allowAttributes" instead');
    ti(this, T0, Ui(m1), "f");
    const { allowElements: s, allowAttributes: c } = t;
    s && (H0(this, T0, "f").allowElements = t.allowElements), c && (H0(this, T0, "f").allowAttributes = t.allowAttributes), ti(this, Wn, new Set(H0(this, T0, "f").allowElements), "f"), ti(this, Yn, Object.fromEntries(Object.entries(H0(this, T0, "f").allowAttributes || {}).map(([h, b]) => [h, new Set(b)])), "f");
  }
}
T0 = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap();
p1.getDefaultConfiguration = () => Ui(m1);
const {
  HtmlTagHydration: $p,
  SvelteComponent: Wp,
  attr: Yp,
  binding_callbacks: Xp,
  children: Zp,
  claim_element: Kp,
  claim_html_tag: Jp,
  detach: fo,
  element: Qp,
  init: e3,
  insert_hydration: t3,
  noop: ho,
  safe_not_equal: r3,
  toggle_class: On
} = window.__gradio__svelte__internal, { afterUpdate: n3 } = window.__gradio__svelte__internal;
function a3(n) {
  let t, e;
  return {
    c() {
      t = Qp("span"), e = new $p(!1), this.h();
    },
    l(r) {
      t = Kp(r, "SPAN", { class: !0 });
      var a = Zp(t);
      e = Jp(a, !1), a.forEach(fo), this.h();
    },
    h() {
      e.a = null, Yp(t, "class", "md svelte-1m32c2s"), On(
        t,
        "chatbot",
        /*chatbot*/
        n[0]
      ), On(
        t,
        "prose",
        /*render_markdown*/
        n[1]
      );
    },
    m(r, a) {
      t3(r, t, a), e.m(
        /*html*/
        n[3],
        t
      ), n[10](t);
    },
    p(r, [a]) {
      a & /*html*/
      8 && e.p(
        /*html*/
        r[3]
      ), a & /*chatbot*/
      1 && On(
        t,
        "chatbot",
        /*chatbot*/
        r[0]
      ), a & /*render_markdown*/
      2 && On(
        t,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: ho,
    o: ho,
    d(r) {
      r && fo(t), n[10](null);
    }
  };
}
function g1(n, t, e) {
  n && (n.nodeName === t || typeof t == "function") && e(n);
  const r = n?.childNodes || [];
  for (let a = 0; a < r.length; a++)
    g1(r[a], t, e);
}
function mo(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function i3(n, t, e) {
  var r = this && this.__awaiter || function(R, j, q, H) {
    function _(P) {
      return P instanceof q ? P : new q(function($) {
        $(P);
      });
    }
    return new (q || (q = Promise))(function(P, $) {
      function Q(U) {
        try {
          G(H.next(U));
        } catch (Z) {
          $(Z);
        }
      }
      function B(U) {
        try {
          G(H.throw(U));
        } catch (Z) {
          $(Z);
        }
      }
      function G(U) {
        U.done ? P(U.value) : _(U.value).then(Q, B);
      }
      G((H = H.apply(R, j || [])).next());
    });
  };
  let { chatbot: a = !0 } = t, { message: i } = t, { sanitize_html: u = !0 } = t, { latex_delimiters: o = [] } = t, { render_markdown: s = !0 } = t, { line_breaks: c = !0 } = t, { header_links: h = !1 } = t, { root: b } = t, d, m;
  const T = e2({
    header_links: h,
    line_breaks: c,
    latex_delimiters: o
  }), A = new p1();
  let I = typeof window < "u" ? D : Dp;
  function D(R) {
    const j = new DOMParser().parseFromString(R, "text/html");
    return g1(j.body, "A", (q) => {
      q instanceof HTMLElement && "target" in q && k(q.getAttribute("href")) && (q.setAttribute("target", "_blank"), q.setAttribute("rel", "noopener noreferrer"));
    }), A.sanitize(j).body.innerHTML;
  }
  const k = (R) => {
    try {
      return !!R && new URL(R).origin !== new URL(b).origin;
    } catch {
      return !1;
    }
  };
  function M(R) {
    let j = R;
    if (s) {
      const q = [];
      o.forEach((H, _) => {
        const P = mo(H.left), $ = mo(H.right), Q = new RegExp(`${P}([\\s\\S]+?)${$}`, "g");
        j = j.replace(Q, (B, G) => (q.push(B), `%%%LATEX_BLOCK_${q.length - 1}%%%`));
      }), j = T.parse(j), j = j.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (H, _) => q[parseInt(_, 10)]);
    }
    return u && I && (j = I(j)), j;
  }
  function O(R) {
    return r(this, void 0, void 0, function* () {
      o.length > 0 && R && o.some((q) => R.includes(q.left) && R.includes(q.right)) && Qd(d, {
        delimiters: o,
        throwOnError: !1
      });
    });
  }
  n3(() => r(void 0, void 0, void 0, function* () {
    d && document.body.contains(d) ? yield O(i) : console.error("Element is not in the DOM");
  }));
  function N(R) {
    Xp[R ? "unshift" : "push"](() => {
      d = R, e(2, d);
    });
  }
  return n.$$set = (R) => {
    "chatbot" in R && e(0, a = R.chatbot), "message" in R && e(4, i = R.message), "sanitize_html" in R && e(5, u = R.sanitize_html), "latex_delimiters" in R && e(6, o = R.latex_delimiters), "render_markdown" in R && e(1, s = R.render_markdown), "line_breaks" in R && e(7, c = R.line_breaks), "header_links" in R && e(8, h = R.header_links), "root" in R && e(9, b = R.root);
  }, n.$$.update = () => {
    n.$$.dirty & /*message*/
    16 && (i && i.trim() ? e(3, m = M(i)) : e(3, m = ""));
  }, [
    a,
    s,
    d,
    m,
    i,
    u,
    o,
    c,
    h,
    b,
    N
  ];
}
class u3 extends Wp {
  constructor(t) {
    super(), e3(this, t, i3, a3, r3, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7,
      header_links: 8,
      root: 9
    });
  }
}
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: b1,
  setPrototypeOf: po,
  isFrozen: s3,
  getPrototypeOf: o3,
  getOwnPropertyDescriptor: l3
} = Object;
let {
  freeze: ft,
  seal: Ht,
  create: v1
} = Object, {
  apply: ji,
  construct: Gi
} = typeof Reflect < "u" && Reflect;
ft || (ft = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
ji || (ji = function(t, e, r) {
  return t.apply(e, r);
});
Gi || (Gi = function(t, e) {
  return new t(...e);
});
const Bn = _t(Array.prototype.forEach), go = _t(Array.prototype.pop), Ar = _t(Array.prototype.push), Xn = _t(String.prototype.toLowerCase), ri = _t(String.prototype.toString), bo = _t(String.prototype.match), Sr = _t(String.prototype.replace), c3 = _t(String.prototype.indexOf), f3 = _t(String.prototype.trim), $t = _t(Object.prototype.hasOwnProperty), st = _t(RegExp.prototype.test), kr = d3(TypeError);
function _t(n) {
  return function(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
      r[a - 1] = arguments[a];
    return ji(n, t, r);
  };
}
function d3(n) {
  return function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return Gi(n, e);
  };
}
function Ae(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xn;
  po && po(n, null);
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const i = e(a);
      i !== a && (s3(t) || (t[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function h3(n) {
  for (let t = 0; t < n.length; t++)
    $t(n, t) || (n[t] = null);
  return n;
}
function U0(n) {
  const t = v1(null);
  for (const [e, r] of b1(n))
    $t(n, e) && (Array.isArray(r) ? t[e] = h3(r) : r && typeof r == "object" && r.constructor === Object ? t[e] = U0(r) : t[e] = r);
  return t;
}
function Er(n, t) {
  for (; n !== null; ) {
    const r = l3(n, t);
    if (r) {
      if (r.get)
        return _t(r.get);
      if (typeof r.value == "function")
        return _t(r.value);
    }
    n = o3(n);
  }
  function e() {
    return null;
  }
  return e;
}
const vo = ft(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ni = ft(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ai = ft(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), m3 = ft(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ii = ft(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), p3 = ft(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), yo = ft(["#text"]), wo = ft(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ui = ft(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xo = ft(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ln = ft(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), g3 = Ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm), b3 = Ht(/<%[\w\W]*|[\w\W]*%>/gm), v3 = Ht(/\${[\w\W]*}/gm), y3 = Ht(/^data-[\-\w.\u00B7-\uFFFF]/), w3 = Ht(/^aria-[\-\w]+$/), y1 = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), x3 = Ht(/^(?:\w+script|data):/i), D3 = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), w1 = Ht(/^html$/i), A3 = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Do = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: g3,
  ERB_EXPR: b3,
  TMPLIT_EXPR: v3,
  DATA_ATTR: y3,
  ARIA_ATTR: w3,
  IS_ALLOWED_URI: y1,
  IS_SCRIPT_OR_DATA: x3,
  ATTR_WHITESPACE: D3,
  DOCTYPE_NAME: w1,
  CUSTOM_ELEMENT: A3
});
const Tr = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, S3 = function() {
  return typeof window > "u" ? null : window;
}, k3 = function(t, e) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  e && e.hasAttribute(a) && (r = e.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(u) {
        return u;
      },
      createScriptURL(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function x1() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S3();
  const t = (le) => x1(le);
  if (t.version = "3.1.7", t.removed = [], !n || !n.document || n.document.nodeType !== Tr.document)
    return t.isSupported = !1, t;
  let {
    document: e
  } = n;
  const r = e, a = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: u,
    Node: o,
    Element: s,
    NodeFilter: c,
    NamedNodeMap: h = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: b,
    DOMParser: d,
    trustedTypes: m
  } = n, T = s.prototype, A = Er(T, "cloneNode"), S = Er(T, "remove"), I = Er(T, "nextSibling"), D = Er(T, "childNodes"), k = Er(T, "parentNode");
  if (typeof u == "function") {
    const le = e.createElement("template");
    le.content && le.content.ownerDocument && (e = le.content.ownerDocument);
  }
  let M, O = "";
  const {
    implementation: N,
    createNodeIterator: R,
    createDocumentFragment: j,
    getElementsByTagName: q
  } = e, {
    importNode: H
  } = r;
  let _ = {};
  t.isSupported = typeof b1 == "function" && typeof k == "function" && N && N.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: $,
    TMPLIT_EXPR: Q,
    DATA_ATTR: B,
    ARIA_ATTR: G,
    IS_SCRIPT_OR_DATA: U,
    ATTR_WHITESPACE: Z,
    CUSTOM_ELEMENT: ye
  } = Do;
  let {
    IS_ALLOWED_URI: ve
  } = Do, ie = null;
  const oe = Ae({}, [...vo, ...ni, ...ai, ...ii, ...yo]);
  let Te = null;
  const ge = Ae({}, [...wo, ...ui, ...xo, ...Ln]);
  let ne = Object.seal(v1(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Pe = null, Me = null, ke = !0, Xe = !0, Qe = !1, ht = !0, at = !1, Ut = !0, Dt = !1, s0 = !1, w0 = !1, At = !1, It = !1, mt = !1, nn = !0, an = !1;
  const un = "user-content-";
  let B0 = !0, x0 = !1, jt = {}, D0 = null;
  const mr = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let sn = null;
  const pr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let gr = null;
  const on = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), L0 = "http://www.w3.org/1998/Math/MathML", Z0 = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml";
  let Fe = Gt, R0 = !1, z0 = null;
  const Na = Ae({}, [L0, Z0, Gt], ri);
  let Zt = null;
  const br = ["application/xhtml+xml", "text/html"], Vt = "text/html";
  let Ve = null, A0 = null;
  const v = e.createElement("form"), y = function(C) {
    return C instanceof RegExp || C instanceof Function;
  }, F = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(A0 && A0 === C)) {
      if ((!C || typeof C != "object") && (C = {}), C = U0(C), Zt = // eslint-disable-next-line unicorn/prefer-includes
      br.indexOf(C.PARSER_MEDIA_TYPE) === -1 ? Vt : C.PARSER_MEDIA_TYPE, Ve = Zt === "application/xhtml+xml" ? ri : Xn, ie = $t(C, "ALLOWED_TAGS") ? Ae({}, C.ALLOWED_TAGS, Ve) : oe, Te = $t(C, "ALLOWED_ATTR") ? Ae({}, C.ALLOWED_ATTR, Ve) : ge, z0 = $t(C, "ALLOWED_NAMESPACES") ? Ae({}, C.ALLOWED_NAMESPACES, ri) : Na, gr = $t(C, "ADD_URI_SAFE_ATTR") ? Ae(
        U0(on),
        // eslint-disable-line indent
        C.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Ve
        // eslint-disable-line indent
      ) : on, sn = $t(C, "ADD_DATA_URI_TAGS") ? Ae(
        U0(pr),
        // eslint-disable-line indent
        C.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Ve
        // eslint-disable-line indent
      ) : pr, D0 = $t(C, "FORBID_CONTENTS") ? Ae({}, C.FORBID_CONTENTS, Ve) : mr, Pe = $t(C, "FORBID_TAGS") ? Ae({}, C.FORBID_TAGS, Ve) : {}, Me = $t(C, "FORBID_ATTR") ? Ae({}, C.FORBID_ATTR, Ve) : {}, jt = $t(C, "USE_PROFILES") ? C.USE_PROFILES : !1, ke = C.ALLOW_ARIA_ATTR !== !1, Xe = C.ALLOW_DATA_ATTR !== !1, Qe = C.ALLOW_UNKNOWN_PROTOCOLS || !1, ht = C.ALLOW_SELF_CLOSE_IN_ATTR !== !1, at = C.SAFE_FOR_TEMPLATES || !1, Ut = C.SAFE_FOR_XML !== !1, Dt = C.WHOLE_DOCUMENT || !1, At = C.RETURN_DOM || !1, It = C.RETURN_DOM_FRAGMENT || !1, mt = C.RETURN_TRUSTED_TYPE || !1, w0 = C.FORCE_BODY || !1, nn = C.SANITIZE_DOM !== !1, an = C.SANITIZE_NAMED_PROPS || !1, B0 = C.KEEP_CONTENT !== !1, x0 = C.IN_PLACE || !1, ve = C.ALLOWED_URI_REGEXP || y1, Fe = C.NAMESPACE || Gt, ne = C.CUSTOM_ELEMENT_HANDLING || {}, C.CUSTOM_ELEMENT_HANDLING && y(C.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ne.tagNameCheck = C.CUSTOM_ELEMENT_HANDLING.tagNameCheck), C.CUSTOM_ELEMENT_HANDLING && y(C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ne.attributeNameCheck = C.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), C.CUSTOM_ELEMENT_HANDLING && typeof C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = C.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), at && (Xe = !1), It && (At = !0), jt && (ie = Ae({}, yo), Te = [], jt.html === !0 && (Ae(ie, vo), Ae(Te, wo)), jt.svg === !0 && (Ae(ie, ni), Ae(Te, ui), Ae(Te, Ln)), jt.svgFilters === !0 && (Ae(ie, ai), Ae(Te, ui), Ae(Te, Ln)), jt.mathMl === !0 && (Ae(ie, ii), Ae(Te, xo), Ae(Te, Ln))), C.ADD_TAGS && (ie === oe && (ie = U0(ie)), Ae(ie, C.ADD_TAGS, Ve)), C.ADD_ATTR && (Te === ge && (Te = U0(Te)), Ae(Te, C.ADD_ATTR, Ve)), C.ADD_URI_SAFE_ATTR && Ae(gr, C.ADD_URI_SAFE_ATTR, Ve), C.FORBID_CONTENTS && (D0 === mr && (D0 = U0(D0)), Ae(D0, C.FORBID_CONTENTS, Ve)), B0 && (ie["#text"] = !0), Dt && Ae(ie, ["html", "head", "body"]), ie.table && (Ae(ie, ["tbody"]), delete Pe.tbody), C.TRUSTED_TYPES_POLICY) {
        if (typeof C.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw kr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof C.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw kr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        M = C.TRUSTED_TYPES_POLICY, O = M.createHTML("");
      } else
        M === void 0 && (M = k3(m, a)), M !== null && typeof O == "string" && (O = M.createHTML(""));
      ft && ft(C), A0 = C;
    }
  }, z = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), K = Ae({}, ["annotation-xml"]), re = Ae({}, ["title", "style", "font", "a", "script"]), be = Ae({}, [...ni, ...ai, ...m3]), ue = Ae({}, [...ii, ...p3]), De = function(C) {
    let X = k(C);
    (!X || !X.tagName) && (X = {
      namespaceURI: Fe,
      tagName: "template"
    });
    const se = Xn(C.tagName), Ie = Xn(X.tagName);
    return z0[C.namespaceURI] ? C.namespaceURI === Z0 ? X.namespaceURI === Gt ? se === "svg" : X.namespaceURI === L0 ? se === "svg" && (Ie === "annotation-xml" || z[Ie]) : !!be[se] : C.namespaceURI === L0 ? X.namespaceURI === Gt ? se === "math" : X.namespaceURI === Z0 ? se === "math" && K[Ie] : !!ue[se] : C.namespaceURI === Gt ? X.namespaceURI === Z0 && !K[Ie] || X.namespaceURI === L0 && !z[Ie] ? !1 : !ue[se] && (re[se] || !be[se]) : !!(Zt === "application/xhtml+xml" && z0[C.namespaceURI]) : !1;
  }, ee = function(C) {
    Ar(t.removed, {
      element: C
    });
    try {
      k(C).removeChild(C);
    } catch {
      S(C);
    }
  }, fe = function(C, X) {
    try {
      Ar(t.removed, {
        attribute: X.getAttributeNode(C),
        from: X
      });
    } catch {
      Ar(t.removed, {
        attribute: null,
        from: X
      });
    }
    if (X.removeAttribute(C), C === "is" && !Te[C])
      if (At || It)
        try {
          ee(X);
        } catch {
        }
      else
        try {
          X.setAttribute(C, "");
        } catch {
        }
  }, _e = function(C) {
    let X = null, se = null;
    if (w0)
      C = "<remove></remove>" + C;
    else {
      const Ke = bo(C, /^[\r\n\t ]+/);
      se = Ke && Ke[0];
    }
    Zt === "application/xhtml+xml" && Fe === Gt && (C = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + C + "</body></html>");
    const Ie = M ? M.createHTML(C) : C;
    if (Fe === Gt)
      try {
        X = new d().parseFromString(Ie, Zt);
      } catch {
      }
    if (!X || !X.documentElement) {
      X = N.createDocument(Fe, "template", null);
      try {
        X.documentElement.innerHTML = R0 ? O : Ie;
      } catch {
      }
    }
    const rt = X.body || X.documentElement;
    return C && se && rt.insertBefore(e.createTextNode(se), rt.childNodes[0] || null), Fe === Gt ? q.call(X, Dt ? "html" : "body")[0] : Dt ? X.documentElement : rt;
  }, St = function(C) {
    return R.call(
      C.ownerDocument || C,
      C,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, et = function(C) {
    return C instanceof b && (typeof C.nodeName != "string" || typeof C.textContent != "string" || typeof C.removeChild != "function" || !(C.attributes instanceof h) || typeof C.removeAttribute != "function" || typeof C.setAttribute != "function" || typeof C.namespaceURI != "string" || typeof C.insertBefore != "function" || typeof C.hasChildNodes != "function");
  }, S0 = function(C) {
    return typeof o == "function" && C instanceof o;
  }, tt = function(C, X, se) {
    _[C] && Bn(_[C], (Ie) => {
      Ie.call(t, X, se, A0);
    });
  }, ln = function(C) {
    let X = null;
    if (tt("beforeSanitizeElements", C, null), et(C))
      return ee(C), !0;
    const se = Ve(C.nodeName);
    if (tt("uponSanitizeElement", C, {
      tagName: se,
      allowedTags: ie
    }), C.hasChildNodes() && !S0(C.firstElementChild) && st(/<[/\w]/g, C.innerHTML) && st(/<[/\w]/g, C.textContent) || C.nodeType === Tr.progressingInstruction || Ut && C.nodeType === Tr.comment && st(/<[/\w]/g, C.data))
      return ee(C), !0;
    if (!ie[se] || Pe[se]) {
      if (!Pe[se] && cn(se) && (ne.tagNameCheck instanceof RegExp && st(ne.tagNameCheck, se) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(se)))
        return !1;
      if (B0 && !D0[se]) {
        const Ie = k(C) || C.parentNode, rt = D(C) || C.childNodes;
        if (rt && Ie) {
          const Ke = rt.length;
          for (let pt = Ke - 1; pt >= 0; --pt) {
            const Kt = A(rt[pt], !0);
            Kt.__removalCount = (C.__removalCount || 0) + 1, Ie.insertBefore(Kt, I(C));
          }
        }
      }
      return ee(C), !0;
    }
    return C instanceof s && !De(C) || (se === "noscript" || se === "noembed" || se === "noframes") && st(/<\/no(script|embed|frames)/i, C.innerHTML) ? (ee(C), !0) : (at && C.nodeType === Tr.text && (X = C.textContent, Bn([P, $, Q], (Ie) => {
      X = Sr(X, Ie, " ");
    }), C.textContent !== X && (Ar(t.removed, {
      element: C.cloneNode()
    }), C.textContent = X)), tt("afterSanitizeElements", C, null), !1);
  }, K0 = function(C, X, se) {
    if (nn && (X === "id" || X === "name") && (se in e || se in v))
      return !1;
    if (!(Xe && !Me[X] && st(B, X))) {
      if (!(ke && st(G, X))) {
        if (!Te[X] || Me[X]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(cn(C) && (ne.tagNameCheck instanceof RegExp && st(ne.tagNameCheck, C) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(C)) && (ne.attributeNameCheck instanceof RegExp && st(ne.attributeNameCheck, X) || ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(X)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            X === "is" && ne.allowCustomizedBuiltInElements && (ne.tagNameCheck instanceof RegExp && st(ne.tagNameCheck, se) || ne.tagNameCheck instanceof Function && ne.tagNameCheck(se)))
          ) return !1;
        } else if (!gr[X]) {
          if (!st(ve, Sr(se, Z, ""))) {
            if (!((X === "src" || X === "xlink:href" || X === "href") && C !== "script" && c3(se, "data:") === 0 && sn[C])) {
              if (!(Qe && !st(U, Sr(se, Z, "")))) {
                if (se)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, cn = function(C) {
    return C !== "annotation-xml" && bo(C, ye);
  }, fn = function(C) {
    tt("beforeSanitizeAttributes", C, null);
    const {
      attributes: X
    } = C;
    if (!X)
      return;
    const se = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Te
    };
    let Ie = X.length;
    for (; Ie--; ) {
      const rt = X[Ie], {
        name: Ke,
        namespaceURI: pt,
        value: Kt
      } = rt, vr = Ve(Ke);
      let it = Ke === "value" ? Kt : f3(Kt);
      if (se.attrName = vr, se.attrValue = it, se.keepAttr = !0, se.forceKeepAttr = void 0, tt("uponSanitizeAttribute", C, se), it = se.attrValue, se.forceKeepAttr || (fe(Ke, C), !se.keepAttr))
        continue;
      if (!ht && st(/\/>/i, it)) {
        fe(Ke, C);
        continue;
      }
      at && Bn([P, $, Q], (qu) => {
        it = Sr(it, qu, " ");
      });
      const Pu = Ve(C.nodeName);
      if (K0(Pu, vr, it)) {
        if (an && (vr === "id" || vr === "name") && (fe(Ke, C), it = un + it), Ut && st(/((--!?|])>)|<\/(style|title)/i, it)) {
          fe(Ke, C);
          continue;
        }
        if (M && typeof m == "object" && typeof m.getAttributeType == "function" && !pt)
          switch (m.getAttributeType(Pu, vr)) {
            case "TrustedHTML": {
              it = M.createHTML(it);
              break;
            }
            case "TrustedScriptURL": {
              it = M.createScriptURL(it);
              break;
            }
          }
        try {
          pt ? C.setAttributeNS(pt, Ke, it) : C.setAttribute(Ke, it), et(C) ? ee(C) : go(t.removed);
        } catch {
        }
      }
    }
    tt("afterSanitizeAttributes", C, null);
  }, Ia = function le(C) {
    let X = null;
    const se = St(C);
    for (tt("beforeSanitizeShadowDOM", C, null); X = se.nextNode(); )
      tt("uponSanitizeShadowNode", X, null), !ln(X) && (X.content instanceof i && le(X.content), fn(X));
    tt("afterSanitizeShadowDOM", C, null);
  };
  return t.sanitize = function(le) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = null, se = null, Ie = null, rt = null;
    if (R0 = !le, R0 && (le = "<!-->"), typeof le != "string" && !S0(le))
      if (typeof le.toString == "function") {
        if (le = le.toString(), typeof le != "string")
          throw kr("dirty is not a string, aborting");
      } else
        throw kr("toString is not a function");
    if (!t.isSupported)
      return le;
    if (s0 || F(C), t.removed = [], typeof le == "string" && (x0 = !1), x0) {
      if (le.nodeName) {
        const Kt = Ve(le.nodeName);
        if (!ie[Kt] || Pe[Kt])
          throw kr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (le instanceof o)
      X = _e("<!---->"), se = X.ownerDocument.importNode(le, !0), se.nodeType === Tr.element && se.nodeName === "BODY" || se.nodeName === "HTML" ? X = se : X.appendChild(se);
    else {
      if (!At && !at && !Dt && // eslint-disable-next-line unicorn/prefer-includes
      le.indexOf("<") === -1)
        return M && mt ? M.createHTML(le) : le;
      if (X = _e(le), !X)
        return At ? null : mt ? O : "";
    }
    X && w0 && ee(X.firstChild);
    const Ke = St(x0 ? le : X);
    for (; Ie = Ke.nextNode(); )
      ln(Ie) || (Ie.content instanceof i && Ia(Ie.content), fn(Ie));
    if (x0)
      return le;
    if (At) {
      if (It)
        for (rt = j.call(X.ownerDocument); X.firstChild; )
          rt.appendChild(X.firstChild);
      else
        rt = X;
      return (Te.shadowroot || Te.shadowrootmode) && (rt = H.call(r, rt, !0)), rt;
    }
    let pt = Dt ? X.outerHTML : X.innerHTML;
    return Dt && ie["!doctype"] && X.ownerDocument && X.ownerDocument.doctype && X.ownerDocument.doctype.name && st(w1, X.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + X.ownerDocument.doctype.name + `>
` + pt), at && Bn([P, $, Q], (Kt) => {
      pt = Sr(pt, Kt, " ");
    }), M && mt ? M.createHTML(pt) : pt;
  }, t.setConfig = function() {
    let le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    F(le), s0 = !0;
  }, t.clearConfig = function() {
    A0 = null, s0 = !1;
  }, t.isValidAttribute = function(le, C, X) {
    A0 || F({});
    const se = Ve(le), Ie = Ve(C);
    return K0(se, Ie, X);
  }, t.addHook = function(le, C) {
    typeof C == "function" && (_[le] = _[le] || [], Ar(_[le], C));
  }, t.removeHook = function(le) {
    if (_[le])
      return go(_[le]);
  }, t.removeHooks = function(le) {
    _[le] && (_[le] = []);
  }, t.removeAllHooks = function() {
    _ = {};
  }, t;
}
x1();
const {
  SvelteComponent: E3,
  attr: T3,
  children: C3,
  claim_component: M3,
  claim_element: F3,
  create_component: _3,
  destroy_component: N3,
  detach: Ao,
  element: I3,
  init: O3,
  insert_hydration: B3,
  mount_component: L3,
  safe_not_equal: R3,
  transition_in: z3,
  transition_out: P3
} = window.__gradio__svelte__internal;
function q3(n) {
  let t, e, r;
  return e = new u3({
    props: {
      root: (
        /*root*/
        n[1]
      ),
      message: (
        /*info*/
        n[0]
      ),
      sanitize_html: !0
    }
  }), {
    c() {
      t = I3("div"), _3(e.$$.fragment), this.h();
    },
    l(a) {
      t = F3(a, "DIV", { class: !0 });
      var i = C3(t);
      M3(e.$$.fragment, i), i.forEach(Ao), this.h();
    },
    h() {
      T3(t, "class", "svelte-1hnfib2");
    },
    m(a, i) {
      B3(a, t, i), L3(e, t, null), r = !0;
    },
    p(a, [i]) {
      const u = {};
      i & /*root*/
      2 && (u.root = /*root*/
      a[1]), i & /*info*/
      1 && (u.message = /*info*/
      a[0]), e.$set(u);
    },
    i(a) {
      r || (z3(e.$$.fragment, a), r = !0);
    },
    o(a) {
      P3(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Ao(t), N3(e);
    }
  };
}
function H3(n, t, e) {
  let { info: r } = t, { root: a } = t;
  return n.$$set = (i) => {
    "info" in i && e(0, r = i.info), "root" in i && e(1, a = i.root);
  }, [r, a];
}
class U3 extends E3 {
  constructor(t) {
    super(), O3(this, t, H3, q3, R3, { info: 0, root: 1 });
  }
}
const {
  SvelteComponent: j3,
  attr: So,
  check_outros: G3,
  children: V3,
  claim_component: $3,
  claim_element: W3,
  claim_space: Y3,
  create_component: X3,
  create_slot: Z3,
  destroy_component: K3,
  detach: Rn,
  element: J3,
  empty: ko,
  get_all_dirty_from_scope: Q3,
  get_slot_changes: e6,
  group_outros: t6,
  init: r6,
  insert_hydration: si,
  mount_component: n6,
  safe_not_equal: a6,
  space: i6,
  toggle_class: er,
  transition_in: Fr,
  transition_out: Zn,
  update_slot_base: u6
} = window.__gradio__svelte__internal;
function Eo(n) {
  let t, e;
  return t = new U3({
    props: {
      root: (
        /*root*/
        n[2]
      ),
      info: (
        /*info*/
        n[1]
      )
    }
  }), {
    c() {
      X3(t.$$.fragment);
    },
    l(r) {
      $3(t.$$.fragment, r);
    },
    m(r, a) {
      n6(t, r, a), e = !0;
    },
    p(r, a) {
      const i = {};
      a & /*root*/
      4 && (i.root = /*root*/
      r[2]), a & /*info*/
      2 && (i.info = /*info*/
      r[1]), t.$set(i);
    },
    i(r) {
      e || (Fr(t.$$.fragment, r), e = !0);
    },
    o(r) {
      Zn(t.$$.fragment, r), e = !1;
    },
    d(r) {
      K3(t, r);
    }
  };
}
function s6(n) {
  let t, e, r, a;
  const i = (
    /*#slots*/
    n[4].default
  ), u = Z3(
    i,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let o = (
    /*info*/
    n[1] && Eo(n)
  );
  return {
    c() {
      t = J3("span"), u && u.c(), e = i6(), o && o.c(), r = ko(), this.h();
    },
    l(s) {
      t = W3(s, "SPAN", { "data-testid": !0, class: !0 });
      var c = V3(t);
      u && u.l(c), c.forEach(Rn), e = Y3(s), o && o.l(s), r = ko(), this.h();
    },
    h() {
      So(t, "data-testid", "block-info"), So(t, "class", "svelte-22c38v"), er(t, "sr-only", !/*show_label*/
      n[0]), er(t, "hide", !/*show_label*/
      n[0]), er(
        t,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(s, c) {
      si(s, t, c), u && u.m(t, null), si(s, e, c), o && o.m(s, c), si(s, r, c), a = !0;
    },
    p(s, [c]) {
      u && u.p && (!a || c & /*$$scope*/
      8) && u6(
        u,
        i,
        s,
        /*$$scope*/
        s[3],
        a ? e6(
          i,
          /*$$scope*/
          s[3],
          c,
          null
        ) : Q3(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!a || c & /*show_label*/
      1) && er(t, "sr-only", !/*show_label*/
      s[0]), (!a || c & /*show_label*/
      1) && er(t, "hide", !/*show_label*/
      s[0]), (!a || c & /*info*/
      2) && er(
        t,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? o ? (o.p(s, c), c & /*info*/
      2 && Fr(o, 1)) : (o = Eo(s), o.c(), Fr(o, 1), o.m(r.parentNode, r)) : o && (t6(), Zn(o, 1, 1, () => {
        o = null;
      }), G3());
    },
    i(s) {
      a || (Fr(u, s), Fr(o), a = !0);
    },
    o(s) {
      Zn(u, s), Zn(o), a = !1;
    },
    d(s) {
      s && (Rn(t), Rn(e), Rn(r)), u && u.d(s), o && o.d(s);
    }
  };
}
function o6(n, t, e) {
  let { $$slots: r = {}, $$scope: a } = t, { show_label: i = !0 } = t, { info: u = void 0 } = t, { root: o } = t;
  return n.$$set = (s) => {
    "show_label" in s && e(0, i = s.show_label), "info" in s && e(1, u = s.info), "root" in s && e(2, o = s.root), "$$scope" in s && e(3, a = s.$$scope);
  }, [i, u, o, a, r];
}
class l6 extends j3 {
  constructor(t) {
    super(), r6(this, t, o6, s6, a6, { show_label: 0, info: 1, root: 2 });
  }
}
var oi = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
], nr = {
  _disable: [],
  allowInput: !1,
  allowInvalidPreload: !1,
  altFormat: "F j, Y",
  altInput: !1,
  altInputClass: "form-control input",
  animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: !0,
  clickOpens: !0,
  closeOnSelect: !0,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: !1,
  enableSeconds: !1,
  enableTime: !1,
  errorHandler: function(n) {
    return typeof console < "u" && console.warn(n);
  },
  getWeek: function(n) {
    var t = new Date(n.getTime());
    t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
    var e = new Date(t.getFullYear(), 0, 4);
    return 1 + Math.round(((t.getTime() - e.getTime()) / 864e5 - 3 + (e.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: !1,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: !1,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: !1,
  showMonths: 1,
  static: !1,
  time_24hr: !1,
  weekNumbers: !1,
  wrap: !1
}, $r = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(n) {
    var t = n % 100;
    if (t > 3 && t < 21)
      return "th";
    switch (t % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: !1
}, vt = function(n, t) {
  return t === void 0 && (t = 2), ("000" + n).slice(t * -1);
}, Bt = function(n) {
  return n === !0 ? 1 : 0;
};
function To(n, t) {
  var e;
  return function() {
    var r = this, a = arguments;
    clearTimeout(e), e = setTimeout(function() {
      return n.apply(r, a);
    }, t);
  };
}
var li = function(n) {
  return n instanceof Array ? n : [n];
};
function ot(n, t, e) {
  if (e === !0)
    return n.classList.add(t);
  n.classList.remove(t);
}
function Ce(n, t, e) {
  var r = window.document.createElement(n);
  return t = t || "", e = e || "", r.className = t, e !== void 0 && (r.textContent = e), r;
}
function zn(n) {
  for (; n.firstChild; )
    n.removeChild(n.firstChild);
}
function D1(n, t) {
  if (t(n))
    return n;
  if (n.parentNode)
    return D1(n.parentNode, t);
}
function Pn(n, t) {
  var e = Ce("div", "numInputWrapper"), r = Ce("input", "numInput " + n), a = Ce("span", "arrowUp"), i = Ce("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? r.type = "number" : (r.type = "text", r.pattern = "\\d*"), t !== void 0)
    for (var u in t)
      r.setAttribute(u, t[u]);
  return e.appendChild(r), e.appendChild(a), e.appendChild(i), e;
}
function kt(n) {
  try {
    if (typeof n.composedPath == "function") {
      var t = n.composedPath();
      return t[0];
    }
    return n.target;
  } catch {
    return n.target;
  }
}
var ci = function() {
}, ha = function(n, t, e) {
  return e.months[t ? "shorthand" : "longhand"][n];
}, c6 = {
  D: ci,
  F: function(n, t, e) {
    n.setMonth(e.months.longhand.indexOf(t));
  },
  G: function(n, t) {
    n.setHours((n.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  H: function(n, t) {
    n.setHours(parseFloat(t));
  },
  J: function(n, t) {
    n.setDate(parseFloat(t));
  },
  K: function(n, t, e) {
    n.setHours(n.getHours() % 12 + 12 * Bt(new RegExp(e.amPM[1], "i").test(t)));
  },
  M: function(n, t, e) {
    n.setMonth(e.months.shorthand.indexOf(t));
  },
  S: function(n, t) {
    n.setSeconds(parseFloat(t));
  },
  U: function(n, t) {
    return new Date(parseFloat(t) * 1e3);
  },
  W: function(n, t, e) {
    var r = parseInt(t), a = new Date(n.getFullYear(), 0, 2 + (r - 1) * 7, 0, 0, 0, 0);
    return a.setDate(a.getDate() - a.getDay() + e.firstDayOfWeek), a;
  },
  Y: function(n, t) {
    n.setFullYear(parseFloat(t));
  },
  Z: function(n, t) {
    return new Date(t);
  },
  d: function(n, t) {
    n.setDate(parseFloat(t));
  },
  h: function(n, t) {
    n.setHours((n.getHours() >= 12 ? 12 : 0) + parseFloat(t));
  },
  i: function(n, t) {
    n.setMinutes(parseFloat(t));
  },
  j: function(n, t) {
    n.setDate(parseFloat(t));
  },
  l: ci,
  m: function(n, t) {
    n.setMonth(parseFloat(t) - 1);
  },
  n: function(n, t) {
    n.setMonth(parseFloat(t) - 1);
  },
  s: function(n, t) {
    n.setSeconds(parseFloat(t));
  },
  u: function(n, t) {
    return new Date(parseFloat(t));
  },
  w: ci,
  y: function(n, t) {
    n.setFullYear(2e3 + parseFloat(t));
  }
}, G0 = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
}, Br = {
  Z: function(n) {
    return n.toISOString();
  },
  D: function(n, t, e) {
    return t.weekdays.shorthand[Br.w(n, t, e)];
  },
  F: function(n, t, e) {
    return ha(Br.n(n, t, e) - 1, !1, t);
  },
  G: function(n, t, e) {
    return vt(Br.h(n, t, e));
  },
  H: function(n) {
    return vt(n.getHours());
  },
  J: function(n, t) {
    return t.ordinal !== void 0 ? n.getDate() + t.ordinal(n.getDate()) : n.getDate();
  },
  K: function(n, t) {
    return t.amPM[Bt(n.getHours() > 11)];
  },
  M: function(n, t) {
    return ha(n.getMonth(), !0, t);
  },
  S: function(n) {
    return vt(n.getSeconds());
  },
  U: function(n) {
    return n.getTime() / 1e3;
  },
  W: function(n, t, e) {
    return e.getWeek(n);
  },
  Y: function(n) {
    return vt(n.getFullYear(), 4);
  },
  d: function(n) {
    return vt(n.getDate());
  },
  h: function(n) {
    return n.getHours() % 12 ? n.getHours() % 12 : 12;
  },
  i: function(n) {
    return vt(n.getMinutes());
  },
  j: function(n) {
    return n.getDate();
  },
  l: function(n, t) {
    return t.weekdays.longhand[n.getDay()];
  },
  m: function(n) {
    return vt(n.getMonth() + 1);
  },
  n: function(n) {
    return n.getMonth() + 1;
  },
  s: function(n) {
    return n.getSeconds();
  },
  u: function(n) {
    return n.getTime();
  },
  w: function(n) {
    return n.getDay();
  },
  y: function(n) {
    return String(n.getFullYear()).substring(2);
  }
}, A1 = function(n) {
  var t = n.config, e = t === void 0 ? nr : t, r = n.l10n, a = r === void 0 ? $r : r, i = n.isMobile, u = i === void 0 ? !1 : i;
  return function(o, s, c) {
    var h = c || a;
    return e.formatDate !== void 0 && !u ? e.formatDate(o, s, h) : s.split("").map(function(b, d, m) {
      return Br[b] && m[d - 1] !== "\\" ? Br[b](o, h, e) : b !== "\\" ? b : "";
    }).join("");
  };
}, Vi = function(n) {
  var t = n.config, e = t === void 0 ? nr : t, r = n.l10n, a = r === void 0 ? $r : r;
  return function(i, u, o, s) {
    if (!(i !== 0 && !i)) {
      var c = s || a, h, b = i;
      if (i instanceof Date)
        h = new Date(i.getTime());
      else if (typeof i != "string" && i.toFixed !== void 0)
        h = new Date(i);
      else if (typeof i == "string") {
        var d = u || (e || nr).dateFormat, m = String(i).trim();
        if (m === "today")
          h = /* @__PURE__ */ new Date(), o = !0;
        else if (e && e.parseDate)
          h = e.parseDate(i, d);
        else if (/Z$/.test(m) || /GMT$/.test(m))
          h = new Date(i);
        else {
          for (var T = void 0, A = [], S = 0, I = 0, D = ""; S < d.length; S++) {
            var k = d[S], M = k === "\\", O = d[S - 1] === "\\" || M;
            if (G0[k] && !O) {
              D += G0[k];
              var N = new RegExp(D).exec(i);
              N && (T = !0) && A[k !== "Y" ? "push" : "unshift"]({
                fn: c6[k],
                val: N[++I]
              });
            } else M || (D += ".");
          }
          h = !e || !e.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), A.forEach(function(R) {
            var j = R.fn, q = R.val;
            return h = j(h, q, c) || h;
          }), h = T ? h : void 0;
        }
      }
      if (!(h instanceof Date && !isNaN(h.getTime()))) {
        e.errorHandler(new Error("Invalid date provided: " + b));
        return;
      }
      return o === !0 && h.setHours(0, 0, 0, 0), h;
    }
  };
};
function Et(n, t, e) {
  return e === void 0 && (e = !0), e !== !1 ? new Date(n.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : n.getTime() - t.getTime();
}
var f6 = function(n, t, e) {
  return n > Math.min(t, e) && n < Math.max(t, e);
}, fi = function(n, t, e) {
  return n * 3600 + t * 60 + e;
}, d6 = function(n) {
  var t = Math.floor(n / 3600), e = (n - t * 3600) / 60;
  return [t, e, n - t * 3600 - e * 60];
}, h6 = {
  DAY: 864e5
};
function di(n) {
  var t = n.defaultHour, e = n.defaultMinute, r = n.defaultSeconds;
  if (n.minDate !== void 0) {
    var a = n.minDate.getHours(), i = n.minDate.getMinutes(), u = n.minDate.getSeconds();
    t < a && (t = a), t === a && e < i && (e = i), t === a && e === i && r < u && (r = n.minDate.getSeconds());
  }
  if (n.maxDate !== void 0) {
    var o = n.maxDate.getHours(), s = n.maxDate.getMinutes();
    t = Math.min(t, o), t === o && (e = Math.min(s, e)), t === o && e === s && (r = n.maxDate.getSeconds());
  }
  return { hours: t, minutes: e, seconds: r };
}
typeof Object.assign != "function" && (Object.assign = function(n) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  if (!n)
    throw TypeError("Cannot convert undefined or null to object");
  for (var r = function(o) {
    o && Object.keys(o).forEach(function(s) {
      return n[s] = o[s];
    });
  }, a = 0, i = t; a < i.length; a++) {
    var u = i[a];
    r(u);
  }
  return n;
});
var nt = function() {
  return nt = Object.assign || function(n) {
    for (var t, e = 1, r = arguments.length; e < r; e++) {
      t = arguments[e];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, nt.apply(this, arguments);
}, Co = function() {
  for (var n = 0, t = 0, e = arguments.length; t < e; t++) n += arguments[t].length;
  for (var r = Array(n), a = 0, t = 0; t < e; t++)
    for (var i = arguments[t], u = 0, o = i.length; u < o; u++, a++)
      r[a] = i[u];
  return r;
}, m6 = 300;
function p6(n, t) {
  var e = {
    config: nt(nt({}, nr), $e.defaultConfig),
    l10n: $r
  };
  e.parseDate = Vi({ config: e.config, l10n: e.l10n }), e._handlers = [], e.pluginElements = [], e.loadedPlugins = [], e._bind = A, e._setHoursFromDate = d, e._positionCalendar = mt, e.changeMonth = ie, e.changeYear = Me, e.clear = oe, e.close = Te, e.onMouseOver = at, e._createElement = Ce, e.createDay = N, e.destroy = ge, e.isEnabled = ke, e.jumpToDate = D, e.updateValue = Vt, e.open = Dt, e.redraw = un, e.set = D0, e.setDate = sn, e.toggle = Gt;
  function r() {
    e.utils = {
      getDaysInMonth: function(v, y) {
        return v === void 0 && (v = e.currentMonth), y === void 0 && (y = e.currentYear), v === 1 && (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) ? 29 : e.l10n.daysInMonth[v];
      }
    };
  }
  function a() {
    e.element = e.input = n, e.isOpen = !1, w0(), It(), on(), gr(), r(), e.isMobile || O(), I(), (e.selectedDates.length || e.config.noCalendar) && (e.config.enableTime && d(e.config.noCalendar ? e.latestSelectedDateObj : void 0), Vt(!1)), o();
    var v = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && v && mt(), Fe("onReady");
  }
  function i() {
    var v;
    return ((v = e.calendarContainer) === null || v === void 0 ? void 0 : v.getRootNode()).activeElement || document.activeElement;
  }
  function u(v) {
    return v.bind(e);
  }
  function o() {
    var v = e.config;
    v.weekNumbers === !1 && v.showMonths === 1 || v.noCalendar !== !0 && window.requestAnimationFrame(function() {
      if (e.calendarContainer !== void 0 && (e.calendarContainer.style.visibility = "hidden", e.calendarContainer.style.display = "block"), e.daysContainer !== void 0) {
        var y = (e.days.offsetWidth + 1) * v.showMonths;
        e.daysContainer.style.width = y + "px", e.calendarContainer.style.width = y + (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) + "px", e.calendarContainer.style.removeProperty("visibility"), e.calendarContainer.style.removeProperty("display");
      }
    });
  }
  function s(v) {
    if (e.selectedDates.length === 0) {
      var y = e.config.minDate === void 0 || Et(/* @__PURE__ */ new Date(), e.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(e.config.minDate.getTime()), F = di(e.config);
      y.setHours(F.hours, F.minutes, F.seconds, y.getMilliseconds()), e.selectedDates = [y], e.latestSelectedDateObj = y;
    }
    v !== void 0 && v.type !== "blur" && A0(v);
    var z = e._input.value;
    b(), Vt(), e._input.value !== z && e._debouncedChange();
  }
  function c(v, y) {
    return v % 12 + 12 * Bt(y === e.l10n.amPM[1]);
  }
  function h(v) {
    switch (v % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return v % 12;
    }
  }
  function b() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
      var v = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24, y = (parseInt(e.minuteElement.value, 10) || 0) % 60, F = e.secondElement !== void 0 ? (parseInt(e.secondElement.value, 10) || 0) % 60 : 0;
      e.amPM !== void 0 && (v = c(v, e.amPM.textContent));
      var z = e.config.minTime !== void 0 || e.config.minDate && e.minDateHasTime && e.latestSelectedDateObj && Et(e.latestSelectedDateObj, e.config.minDate, !0) === 0, K = e.config.maxTime !== void 0 || e.config.maxDate && e.maxDateHasTime && e.latestSelectedDateObj && Et(e.latestSelectedDateObj, e.config.maxDate, !0) === 0;
      if (e.config.maxTime !== void 0 && e.config.minTime !== void 0 && e.config.minTime > e.config.maxTime) {
        var re = fi(e.config.minTime.getHours(), e.config.minTime.getMinutes(), e.config.minTime.getSeconds()), be = fi(e.config.maxTime.getHours(), e.config.maxTime.getMinutes(), e.config.maxTime.getSeconds()), ue = fi(v, y, F);
        if (ue > be && ue < re) {
          var De = d6(re);
          v = De[0], y = De[1], F = De[2];
        }
      } else {
        if (K) {
          var ee = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
          v = Math.min(v, ee.getHours()), v === ee.getHours() && (y = Math.min(y, ee.getMinutes())), y === ee.getMinutes() && (F = Math.min(F, ee.getSeconds()));
        }
        if (z) {
          var fe = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
          v = Math.max(v, fe.getHours()), v === fe.getHours() && y < fe.getMinutes() && (y = fe.getMinutes()), y === fe.getMinutes() && (F = Math.max(F, fe.getSeconds()));
        }
      }
      m(v, y, F);
    }
  }
  function d(v) {
    var y = v || e.latestSelectedDateObj;
    y && y instanceof Date && m(y.getHours(), y.getMinutes(), y.getSeconds());
  }
  function m(v, y, F) {
    e.latestSelectedDateObj !== void 0 && e.latestSelectedDateObj.setHours(v % 24, y, F || 0, 0), !(!e.hourElement || !e.minuteElement || e.isMobile) && (e.hourElement.value = vt(e.config.time_24hr ? v : (12 + v) % 12 + 12 * Bt(v % 12 === 0)), e.minuteElement.value = vt(y), e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[Bt(v >= 12)]), e.secondElement !== void 0 && (e.secondElement.value = vt(F)));
  }
  function T(v) {
    var y = kt(v), F = parseInt(y.value) + (v.delta || 0);
    (F / 1e3 > 1 || v.key === "Enter" && !/[^\d]/.test(F.toString())) && Me(F);
  }
  function A(v, y, F, z) {
    if (y instanceof Array)
      return y.forEach(function(K) {
        return A(v, K, F, z);
      });
    if (v instanceof Array)
      return v.forEach(function(K) {
        return A(K, y, F, z);
      });
    v.addEventListener(y, F, z), e._handlers.push({
      remove: function() {
        return v.removeEventListener(y, F, z);
      }
    });
  }
  function S() {
    Fe("onChange");
  }
  function I() {
    if (e.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(F) {
      Array.prototype.forEach.call(e.element.querySelectorAll("[data-" + F + "]"), function(z) {
        return A(z, "click", e[F]);
      });
    }), e.isMobile) {
      Z0();
      return;
    }
    var v = To(Ut, 50);
    if (e._debouncedChange = To(S, m6), e.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && A(e.daysContainer, "mouseover", function(F) {
      e.config.mode === "range" && at(kt(F));
    }), A(e._input, "keydown", ht), e.calendarContainer !== void 0 && A(e.calendarContainer, "keydown", ht), !e.config.inline && !e.config.static && A(window, "resize", v), window.ontouchstart !== void 0 ? A(window.document, "touchstart", Pe) : A(window.document, "mousedown", Pe), A(window.document, "focus", Pe, { capture: !0 }), e.config.clickOpens === !0 && (A(e._input, "focus", e.open), A(e._input, "click", e.open)), e.daysContainer !== void 0 && (A(e.monthNav, "click", Ve), A(e.monthNav, ["keyup", "increment"], T), A(e.daysContainer, "click", x0)), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0) {
      var y = function(F) {
        return kt(F).select();
      };
      A(e.timeContainer, ["increment"], s), A(e.timeContainer, "blur", s, { capture: !0 }), A(e.timeContainer, "click", k), A([e.hourElement, e.minuteElement], ["focus", "click"], y), e.secondElement !== void 0 && A(e.secondElement, "focus", function() {
        return e.secondElement && e.secondElement.select();
      }), e.amPM !== void 0 && A(e.amPM, "click", function(F) {
        s(F);
      });
    }
    e.config.allowInput && A(e._input, "blur", Qe);
  }
  function D(v, y) {
    var F = v !== void 0 ? e.parseDate(v) : e.latestSelectedDateObj || (e.config.minDate && e.config.minDate > e.now ? e.config.minDate : e.config.maxDate && e.config.maxDate < e.now ? e.config.maxDate : e.now), z = e.currentYear, K = e.currentMonth;
    try {
      F !== void 0 && (e.currentYear = F.getFullYear(), e.currentMonth = F.getMonth());
    } catch (re) {
      re.message = "Invalid date supplied: " + F, e.config.errorHandler(re);
    }
    y && e.currentYear !== z && (Fe("onYearChange"), $()), y && (e.currentYear !== z || e.currentMonth !== K) && Fe("onMonthChange"), e.redraw();
  }
  function k(v) {
    var y = kt(v);
    ~y.className.indexOf("arrow") && M(v, y.classList.contains("arrowUp") ? 1 : -1);
  }
  function M(v, y, F) {
    var z = v && kt(v), K = F || z && z.parentNode && z.parentNode.firstChild, re = R0("increment");
    re.delta = y, K && K.dispatchEvent(re);
  }
  function O() {
    var v = window.document.createDocumentFragment();
    if (e.calendarContainer = Ce("div", "flatpickr-calendar"), e.calendarContainer.tabIndex = -1, !e.config.noCalendar) {
      if (v.appendChild(G()), e.innerContainer = Ce("div", "flatpickr-innerContainer"), e.config.weekNumbers) {
        var y = ve(), F = y.weekWrapper, z = y.weekNumbers;
        e.innerContainer.appendChild(F), e.weekNumbers = z, e.weekWrapper = F;
      }
      e.rContainer = Ce("div", "flatpickr-rContainer"), e.rContainer.appendChild(Z()), e.daysContainer || (e.daysContainer = Ce("div", "flatpickr-days"), e.daysContainer.tabIndex = -1), P(), e.rContainer.appendChild(e.daysContainer), e.innerContainer.appendChild(e.rContainer), v.appendChild(e.innerContainer);
    }
    e.config.enableTime && v.appendChild(U()), ot(e.calendarContainer, "rangeMode", e.config.mode === "range"), ot(e.calendarContainer, "animate", e.config.animate === !0), ot(e.calendarContainer, "multiMonth", e.config.showMonths > 1), e.calendarContainer.appendChild(v);
    var K = e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if ((e.config.inline || e.config.static) && (e.calendarContainer.classList.add(e.config.inline ? "inline" : "static"), e.config.inline && (!K && e.element.parentNode ? e.element.parentNode.insertBefore(e.calendarContainer, e._input.nextSibling) : e.config.appendTo !== void 0 && e.config.appendTo.appendChild(e.calendarContainer)), e.config.static)) {
      var re = Ce("div", "flatpickr-wrapper");
      e.element.parentNode && e.element.parentNode.insertBefore(re, e.element), re.appendChild(e.element), e.altInput && re.appendChild(e.altInput), re.appendChild(e.calendarContainer);
    }
    !e.config.static && !e.config.inline && (e.config.appendTo !== void 0 ? e.config.appendTo : window.document.body).appendChild(e.calendarContainer);
  }
  function N(v, y, F, z) {
    var K = ke(y, !0), re = Ce("span", v, y.getDate().toString());
    return re.dateObj = y, re.$i = z, re.setAttribute("aria-label", e.formatDate(y, e.config.ariaDateFormat)), v.indexOf("hidden") === -1 && Et(y, e.now) === 0 && (e.todayDateElem = re, re.classList.add("today"), re.setAttribute("aria-current", "date")), K ? (re.tabIndex = -1, z0(y) && (re.classList.add("selected"), e.selectedDateElem = re, e.config.mode === "range" && (ot(re, "startRange", e.selectedDates[0] && Et(y, e.selectedDates[0], !0) === 0), ot(re, "endRange", e.selectedDates[1] && Et(y, e.selectedDates[1], !0) === 0), v === "nextMonthDay" && re.classList.add("inRange")))) : re.classList.add("flatpickr-disabled"), e.config.mode === "range" && Na(y) && !z0(y) && re.classList.add("inRange"), e.weekNumbers && e.config.showMonths === 1 && v !== "prevMonthDay" && z % 7 === 6 && e.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + e.config.getWeek(y) + "</span>"), Fe("onDayCreate", re), re;
  }
  function R(v) {
    v.focus(), e.config.mode === "range" && at(v);
  }
  function j(v) {
    for (var y = v > 0 ? 0 : e.config.showMonths - 1, F = v > 0 ? e.config.showMonths : -1, z = y; z != F; z += v)
      for (var K = e.daysContainer.children[z], re = v > 0 ? 0 : K.children.length - 1, be = v > 0 ? K.children.length : -1, ue = re; ue != be; ue += v) {
        var De = K.children[ue];
        if (De.className.indexOf("hidden") === -1 && ke(De.dateObj))
          return De;
      }
  }
  function q(v, y) {
    for (var F = v.className.indexOf("Month") === -1 ? v.dateObj.getMonth() : e.currentMonth, z = y > 0 ? e.config.showMonths : -1, K = y > 0 ? 1 : -1, re = F - e.currentMonth; re != z; re += K)
      for (var be = e.daysContainer.children[re], ue = F - e.currentMonth === re ? v.$i + y : y < 0 ? be.children.length - 1 : 0, De = be.children.length, ee = ue; ee >= 0 && ee < De && ee != (y > 0 ? De : -1); ee += K) {
        var fe = be.children[ee];
        if (fe.className.indexOf("hidden") === -1 && ke(fe.dateObj) && Math.abs(v.$i - ee) >= Math.abs(y))
          return R(fe);
      }
    e.changeMonth(K), H(j(K), 0);
  }
  function H(v, y) {
    var F = i(), z = Xe(F || document.body), K = v !== void 0 ? v : z ? F : e.selectedDateElem !== void 0 && Xe(e.selectedDateElem) ? e.selectedDateElem : e.todayDateElem !== void 0 && Xe(e.todayDateElem) ? e.todayDateElem : j(y > 0 ? 1 : -1);
    K === void 0 ? e._input.focus() : z ? q(K, y) : R(K);
  }
  function _(v, y) {
    for (var F = (new Date(v, y, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7, z = e.utils.getDaysInMonth((y - 1 + 12) % 12, v), K = e.utils.getDaysInMonth(y, v), re = window.document.createDocumentFragment(), be = e.config.showMonths > 1, ue = be ? "prevMonthDay hidden" : "prevMonthDay", De = be ? "nextMonthDay hidden" : "nextMonthDay", ee = z + 1 - F, fe = 0; ee <= z; ee++, fe++)
      re.appendChild(N("flatpickr-day " + ue, new Date(v, y - 1, ee), ee, fe));
    for (ee = 1; ee <= K; ee++, fe++)
      re.appendChild(N("flatpickr-day", new Date(v, y, ee), ee, fe));
    for (var _e = K + 1; _e <= 42 - F && (e.config.showMonths === 1 || fe % 7 !== 0); _e++, fe++)
      re.appendChild(N("flatpickr-day " + De, new Date(v, y + 1, _e % K), _e, fe));
    var St = Ce("div", "dayContainer");
    return St.appendChild(re), St;
  }
  function P() {
    if (e.daysContainer !== void 0) {
      zn(e.daysContainer), e.weekNumbers && zn(e.weekNumbers);
      for (var v = document.createDocumentFragment(), y = 0; y < e.config.showMonths; y++) {
        var F = new Date(e.currentYear, e.currentMonth, 1);
        F.setMonth(e.currentMonth + y), v.appendChild(_(F.getFullYear(), F.getMonth()));
      }
      e.daysContainer.appendChild(v), e.days = e.daysContainer.firstChild, e.config.mode === "range" && e.selectedDates.length === 1 && at();
    }
  }
  function $() {
    if (!(e.config.showMonths > 1 || e.config.monthSelectorType !== "dropdown")) {
      var v = function(z) {
        return e.config.minDate !== void 0 && e.currentYear === e.config.minDate.getFullYear() && z < e.config.minDate.getMonth() ? !1 : !(e.config.maxDate !== void 0 && e.currentYear === e.config.maxDate.getFullYear() && z > e.config.maxDate.getMonth());
      };
      e.monthsDropdownContainer.tabIndex = -1, e.monthsDropdownContainer.innerHTML = "";
      for (var y = 0; y < 12; y++)
        if (v(y)) {
          var F = Ce("option", "flatpickr-monthDropdown-month");
          F.value = new Date(e.currentYear, y).getMonth().toString(), F.textContent = ha(y, e.config.shorthandCurrentMonth, e.l10n), F.tabIndex = -1, e.currentMonth === y && (F.selected = !0), e.monthsDropdownContainer.appendChild(F);
        }
    }
  }
  function Q() {
    var v = Ce("div", "flatpickr-month"), y = window.document.createDocumentFragment(), F;
    e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? F = Ce("span", "cur-month") : (e.monthsDropdownContainer = Ce("select", "flatpickr-monthDropdown-months"), e.monthsDropdownContainer.setAttribute("aria-label", e.l10n.monthAriaLabel), A(e.monthsDropdownContainer, "change", function(be) {
      var ue = kt(be), De = parseInt(ue.value, 10);
      e.changeMonth(De - e.currentMonth), Fe("onMonthChange");
    }), $(), F = e.monthsDropdownContainer);
    var z = Pn("cur-year", { tabindex: "-1" }), K = z.getElementsByTagName("input")[0];
    K.setAttribute("aria-label", e.l10n.yearAriaLabel), e.config.minDate && K.setAttribute("min", e.config.minDate.getFullYear().toString()), e.config.maxDate && (K.setAttribute("max", e.config.maxDate.getFullYear().toString()), K.disabled = !!e.config.minDate && e.config.minDate.getFullYear() === e.config.maxDate.getFullYear());
    var re = Ce("div", "flatpickr-current-month");
    return re.appendChild(F), re.appendChild(z), y.appendChild(re), v.appendChild(y), {
      container: v,
      yearElement: K,
      monthElement: F
    };
  }
  function B() {
    zn(e.monthNav), e.monthNav.appendChild(e.prevMonthNav), e.config.showMonths && (e.yearElements = [], e.monthElements = []);
    for (var v = e.config.showMonths; v--; ) {
      var y = Q();
      e.yearElements.push(y.yearElement), e.monthElements.push(y.monthElement), e.monthNav.appendChild(y.container);
    }
    e.monthNav.appendChild(e.nextMonthNav);
  }
  function G() {
    return e.monthNav = Ce("div", "flatpickr-months"), e.yearElements = [], e.monthElements = [], e.prevMonthNav = Ce("span", "flatpickr-prev-month"), e.prevMonthNav.innerHTML = e.config.prevArrow, e.nextMonthNav = Ce("span", "flatpickr-next-month"), e.nextMonthNav.innerHTML = e.config.nextArrow, B(), Object.defineProperty(e, "_hidePrevMonthArrow", {
      get: function() {
        return e.__hidePrevMonthArrow;
      },
      set: function(v) {
        e.__hidePrevMonthArrow !== v && (ot(e.prevMonthNav, "flatpickr-disabled", v), e.__hidePrevMonthArrow = v);
      }
    }), Object.defineProperty(e, "_hideNextMonthArrow", {
      get: function() {
        return e.__hideNextMonthArrow;
      },
      set: function(v) {
        e.__hideNextMonthArrow !== v && (ot(e.nextMonthNav, "flatpickr-disabled", v), e.__hideNextMonthArrow = v);
      }
    }), e.currentYearElement = e.yearElements[0], Zt(), e.monthNav;
  }
  function U() {
    e.calendarContainer.classList.add("hasTime"), e.config.noCalendar && e.calendarContainer.classList.add("noCalendar");
    var v = di(e.config);
    e.timeContainer = Ce("div", "flatpickr-time"), e.timeContainer.tabIndex = -1;
    var y = Ce("span", "flatpickr-time-separator", ":"), F = Pn("flatpickr-hour", {
      "aria-label": e.l10n.hourAriaLabel
    });
    e.hourElement = F.getElementsByTagName("input")[0];
    var z = Pn("flatpickr-minute", {
      "aria-label": e.l10n.minuteAriaLabel
    });
    if (e.minuteElement = z.getElementsByTagName("input")[0], e.hourElement.tabIndex = e.minuteElement.tabIndex = -1, e.hourElement.value = vt(e.latestSelectedDateObj ? e.latestSelectedDateObj.getHours() : e.config.time_24hr ? v.hours : h(v.hours)), e.minuteElement.value = vt(e.latestSelectedDateObj ? e.latestSelectedDateObj.getMinutes() : v.minutes), e.hourElement.setAttribute("step", e.config.hourIncrement.toString()), e.minuteElement.setAttribute("step", e.config.minuteIncrement.toString()), e.hourElement.setAttribute("min", e.config.time_24hr ? "0" : "1"), e.hourElement.setAttribute("max", e.config.time_24hr ? "23" : "12"), e.hourElement.setAttribute("maxlength", "2"), e.minuteElement.setAttribute("min", "0"), e.minuteElement.setAttribute("max", "59"), e.minuteElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(F), e.timeContainer.appendChild(y), e.timeContainer.appendChild(z), e.config.time_24hr && e.timeContainer.classList.add("time24hr"), e.config.enableSeconds) {
      e.timeContainer.classList.add("hasSeconds");
      var K = Pn("flatpickr-second");
      e.secondElement = K.getElementsByTagName("input")[0], e.secondElement.value = vt(e.latestSelectedDateObj ? e.latestSelectedDateObj.getSeconds() : v.seconds), e.secondElement.setAttribute("step", e.minuteElement.getAttribute("step")), e.secondElement.setAttribute("min", "0"), e.secondElement.setAttribute("max", "59"), e.secondElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(Ce("span", "flatpickr-time-separator", ":")), e.timeContainer.appendChild(K);
    }
    return e.config.time_24hr || (e.amPM = Ce("span", "flatpickr-am-pm", e.l10n.amPM[Bt((e.latestSelectedDateObj ? e.hourElement.value : e.config.defaultHour) > 11)]), e.amPM.title = e.l10n.toggleTitle, e.amPM.tabIndex = -1, e.timeContainer.appendChild(e.amPM)), e.timeContainer;
  }
  function Z() {
    e.weekdayContainer ? zn(e.weekdayContainer) : e.weekdayContainer = Ce("div", "flatpickr-weekdays");
    for (var v = e.config.showMonths; v--; ) {
      var y = Ce("div", "flatpickr-weekdaycontainer");
      e.weekdayContainer.appendChild(y);
    }
    return ye(), e.weekdayContainer;
  }
  function ye() {
    if (e.weekdayContainer) {
      var v = e.l10n.firstDayOfWeek, y = Co(e.l10n.weekdays.shorthand);
      v > 0 && v < y.length && (y = Co(y.splice(v, y.length), y.splice(0, v)));
      for (var F = e.config.showMonths; F--; )
        e.weekdayContainer.children[F].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + y.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `;
    }
  }
  function ve() {
    e.calendarContainer.classList.add("hasWeeks");
    var v = Ce("div", "flatpickr-weekwrapper");
    v.appendChild(Ce("span", "flatpickr-weekday", e.l10n.weekAbbreviation));
    var y = Ce("div", "flatpickr-weeks");
    return v.appendChild(y), {
      weekWrapper: v,
      weekNumbers: y
    };
  }
  function ie(v, y) {
    y === void 0 && (y = !0);
    var F = y ? v : v - e.currentMonth;
    F < 0 && e._hidePrevMonthArrow === !0 || F > 0 && e._hideNextMonthArrow === !0 || (e.currentMonth += F, (e.currentMonth < 0 || e.currentMonth > 11) && (e.currentYear += e.currentMonth > 11 ? 1 : -1, e.currentMonth = (e.currentMonth + 12) % 12, Fe("onYearChange"), $()), P(), Fe("onMonthChange"), Zt());
  }
  function oe(v, y) {
    if (v === void 0 && (v = !0), y === void 0 && (y = !0), e.input.value = "", e.altInput !== void 0 && (e.altInput.value = ""), e.mobileInput !== void 0 && (e.mobileInput.value = ""), e.selectedDates = [], e.latestSelectedDateObj = void 0, y === !0 && (e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth()), e.config.enableTime === !0) {
      var F = di(e.config), z = F.hours, K = F.minutes, re = F.seconds;
      m(z, K, re);
    }
    e.redraw(), v && Fe("onChange");
  }
  function Te() {
    e.isOpen = !1, e.isMobile || (e.calendarContainer !== void 0 && e.calendarContainer.classList.remove("open"), e._input !== void 0 && e._input.classList.remove("active")), Fe("onClose");
  }
  function ge() {
    e.config !== void 0 && Fe("onDestroy");
    for (var v = e._handlers.length; v--; )
      e._handlers[v].remove();
    if (e._handlers = [], e.mobileInput)
      e.mobileInput.parentNode && e.mobileInput.parentNode.removeChild(e.mobileInput), e.mobileInput = void 0;
    else if (e.calendarContainer && e.calendarContainer.parentNode)
      if (e.config.static && e.calendarContainer.parentNode) {
        var y = e.calendarContainer.parentNode;
        if (y.lastChild && y.removeChild(y.lastChild), y.parentNode) {
          for (; y.firstChild; )
            y.parentNode.insertBefore(y.firstChild, y);
          y.parentNode.removeChild(y);
        }
      } else
        e.calendarContainer.parentNode.removeChild(e.calendarContainer);
    e.altInput && (e.input.type = "text", e.altInput.parentNode && e.altInput.parentNode.removeChild(e.altInput), delete e.altInput), e.input && (e.input.type = e.input._type, e.input.classList.remove("flatpickr-input"), e.input.removeAttribute("readonly")), [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(F) {
      try {
        delete e[F];
      } catch {
      }
    });
  }
  function ne(v) {
    return e.calendarContainer.contains(v);
  }
  function Pe(v) {
    if (e.isOpen && !e.config.inline) {
      var y = kt(v), F = ne(y), z = y === e.input || y === e.altInput || e.element.contains(y) || v.path && v.path.indexOf && (~v.path.indexOf(e.input) || ~v.path.indexOf(e.altInput)), K = !z && !F && !ne(v.relatedTarget), re = !e.config.ignoredFocusElements.some(function(be) {
        return be.contains(y);
      });
      K && re && (e.config.allowInput && e.setDate(e._input.value, !1, e.config.altInput ? e.config.altFormat : e.config.dateFormat), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0 && e.input.value !== "" && e.input.value !== void 0 && s(), e.close(), e.config && e.config.mode === "range" && e.selectedDates.length === 1 && e.clear(!1));
    }
  }
  function Me(v) {
    if (!(!v || e.config.minDate && v < e.config.minDate.getFullYear() || e.config.maxDate && v > e.config.maxDate.getFullYear())) {
      var y = v, F = e.currentYear !== y;
      e.currentYear = y || e.currentYear, e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth = Math.min(e.config.maxDate.getMonth(), e.currentMonth) : e.config.minDate && e.currentYear === e.config.minDate.getFullYear() && (e.currentMonth = Math.max(e.config.minDate.getMonth(), e.currentMonth)), F && (e.redraw(), Fe("onYearChange"), $());
    }
  }
  function ke(v, y) {
    var F;
    y === void 0 && (y = !0);
    var z = e.parseDate(v, void 0, y);
    if (e.config.minDate && z && Et(z, e.config.minDate, y !== void 0 ? y : !e.minDateHasTime) < 0 || e.config.maxDate && z && Et(z, e.config.maxDate, y !== void 0 ? y : !e.maxDateHasTime) > 0)
      return !1;
    if (!e.config.enable && e.config.disable.length === 0)
      return !0;
    if (z === void 0)
      return !1;
    for (var K = !!e.config.enable, re = (F = e.config.enable) !== null && F !== void 0 ? F : e.config.disable, be = 0, ue = void 0; be < re.length; be++) {
      if (ue = re[be], typeof ue == "function" && ue(z))
        return K;
      if (ue instanceof Date && z !== void 0 && ue.getTime() === z.getTime())
        return K;
      if (typeof ue == "string") {
        var De = e.parseDate(ue, void 0, !0);
        return De && De.getTime() === z.getTime() ? K : !K;
      } else if (typeof ue == "object" && z !== void 0 && ue.from && ue.to && z.getTime() >= ue.from.getTime() && z.getTime() <= ue.to.getTime())
        return K;
    }
    return !K;
  }
  function Xe(v) {
    return e.daysContainer !== void 0 ? v.className.indexOf("hidden") === -1 && v.className.indexOf("flatpickr-disabled") === -1 && e.daysContainer.contains(v) : !1;
  }
  function Qe(v) {
    var y = v.target === e._input, F = e._input.value.trimEnd() !== br();
    y && F && !(v.relatedTarget && ne(v.relatedTarget)) && e.setDate(e._input.value, !0, v.target === e.altInput ? e.config.altFormat : e.config.dateFormat);
  }
  function ht(v) {
    var y = kt(v), F = e.config.wrap ? n.contains(y) : y === e._input, z = e.config.allowInput, K = e.isOpen && (!z || !F), re = e.config.inline && F && !z;
    if (v.keyCode === 13 && F) {
      if (z)
        return e.setDate(e._input.value, !0, y === e.altInput ? e.config.altFormat : e.config.dateFormat), e.close(), y.blur();
      e.open();
    } else if (ne(y) || K || re) {
      var be = !!e.timeContainer && e.timeContainer.contains(y);
      switch (v.keyCode) {
        case 13:
          be ? (v.preventDefault(), s(), B0()) : x0(v);
          break;
        case 27:
          v.preventDefault(), B0();
          break;
        case 8:
        case 46:
          F && !e.config.allowInput && (v.preventDefault(), e.clear());
          break;
        case 37:
        case 39:
          if (!be && !F) {
            v.preventDefault();
            var ue = i();
            if (e.daysContainer !== void 0 && (z === !1 || ue && Xe(ue))) {
              var De = v.keyCode === 39 ? 1 : -1;
              v.ctrlKey ? (v.stopPropagation(), ie(De), H(j(1), 0)) : H(void 0, De);
            }
          } else e.hourElement && e.hourElement.focus();
          break;
        case 38:
        case 40:
          v.preventDefault();
          var ee = v.keyCode === 40 ? 1 : -1;
          e.daysContainer && y.$i !== void 0 || y === e.input || y === e.altInput ? v.ctrlKey ? (v.stopPropagation(), Me(e.currentYear - ee), H(j(1), 0)) : be || H(void 0, ee * 7) : y === e.currentYearElement ? Me(e.currentYear - ee) : e.config.enableTime && (!be && e.hourElement && e.hourElement.focus(), s(v), e._debouncedChange());
          break;
        case 9:
          if (be) {
            var fe = [
              e.hourElement,
              e.minuteElement,
              e.secondElement,
              e.amPM
            ].concat(e.pluginElements).filter(function(et) {
              return et;
            }), _e = fe.indexOf(y);
            if (_e !== -1) {
              var St = fe[_e + (v.shiftKey ? -1 : 1)];
              v.preventDefault(), (St || e._input).focus();
            }
          } else !e.config.noCalendar && e.daysContainer && e.daysContainer.contains(y) && v.shiftKey && (v.preventDefault(), e._input.focus());
          break;
      }
    }
    if (e.amPM !== void 0 && y === e.amPM)
      switch (v.key) {
        case e.l10n.amPM[0].charAt(0):
        case e.l10n.amPM[0].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[0], b(), Vt();
          break;
        case e.l10n.amPM[1].charAt(0):
        case e.l10n.amPM[1].charAt(0).toLowerCase():
          e.amPM.textContent = e.l10n.amPM[1], b(), Vt();
          break;
      }
    (F || ne(y)) && Fe("onKeyDown", v);
  }
  function at(v, y) {
    if (y === void 0 && (y = "flatpickr-day"), !(e.selectedDates.length !== 1 || v && (!v.classList.contains(y) || v.classList.contains("flatpickr-disabled")))) {
      for (var F = v ? v.dateObj.getTime() : e.days.firstElementChild.dateObj.getTime(), z = e.parseDate(e.selectedDates[0], void 0, !0).getTime(), K = Math.min(F, e.selectedDates[0].getTime()), re = Math.max(F, e.selectedDates[0].getTime()), be = !1, ue = 0, De = 0, ee = K; ee < re; ee += h6.DAY)
        ke(new Date(ee), !0) || (be = be || ee > K && ee < re, ee < z && (!ue || ee > ue) ? ue = ee : ee > z && (!De || ee < De) && (De = ee));
      var fe = Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+" + e.config.showMonths + ") > ." + y));
      fe.forEach(function(_e) {
        var St = _e.dateObj, et = St.getTime(), S0 = ue > 0 && et < ue || De > 0 && et > De;
        if (S0) {
          _e.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(tt) {
            _e.classList.remove(tt);
          });
          return;
        } else if (be && !S0)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(tt) {
          _e.classList.remove(tt);
        }), v !== void 0 && (v.classList.add(F <= e.selectedDates[0].getTime() ? "startRange" : "endRange"), z < F && et === z ? _e.classList.add("startRange") : z > F && et === z && _e.classList.add("endRange"), et >= ue && (De === 0 || et <= De) && f6(et, z, F) && _e.classList.add("inRange"));
      });
    }
  }
  function Ut() {
    e.isOpen && !e.config.static && !e.config.inline && mt();
  }
  function Dt(v, y) {
    if (y === void 0 && (y = e._positionElement), e.isMobile === !0) {
      if (v) {
        v.preventDefault();
        var F = kt(v);
        F && F.blur();
      }
      e.mobileInput !== void 0 && (e.mobileInput.focus(), e.mobileInput.click()), Fe("onOpen");
      return;
    } else if (e._input.disabled || e.config.inline)
      return;
    var z = e.isOpen;
    e.isOpen = !0, z || (e.calendarContainer.classList.add("open"), e._input.classList.add("active"), Fe("onOpen"), mt(y)), e.config.enableTime === !0 && e.config.noCalendar === !0 && e.config.allowInput === !1 && (v === void 0 || !e.timeContainer.contains(v.relatedTarget)) && setTimeout(function() {
      return e.hourElement.select();
    }, 50);
  }
  function s0(v) {
    return function(y) {
      var F = e.config["_" + v + "Date"] = e.parseDate(y, e.config.dateFormat), z = e.config["_" + (v === "min" ? "max" : "min") + "Date"];
      F !== void 0 && (e[v === "min" ? "minDateHasTime" : "maxDateHasTime"] = F.getHours() > 0 || F.getMinutes() > 0 || F.getSeconds() > 0), e.selectedDates && (e.selectedDates = e.selectedDates.filter(function(K) {
        return ke(K);
      }), !e.selectedDates.length && v === "min" && d(F), Vt()), e.daysContainer && (un(), F !== void 0 ? e.currentYearElement[v] = F.getFullYear().toString() : e.currentYearElement.removeAttribute(v), e.currentYearElement.disabled = !!z && F !== void 0 && z.getFullYear() === F.getFullYear());
    };
  }
  function w0() {
    var v = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ], y = nt(nt({}, JSON.parse(JSON.stringify(n.dataset || {}))), t), F = {};
    e.config.parseDate = y.parseDate, e.config.formatDate = y.formatDate, Object.defineProperty(e.config, "enable", {
      get: function() {
        return e.config._enable;
      },
      set: function(fe) {
        e.config._enable = pr(fe);
      }
    }), Object.defineProperty(e.config, "disable", {
      get: function() {
        return e.config._disable;
      },
      set: function(fe) {
        e.config._disable = pr(fe);
      }
    });
    var z = y.mode === "time";
    if (!y.dateFormat && (y.enableTime || z)) {
      var K = $e.defaultConfig.dateFormat || nr.dateFormat;
      F.dateFormat = y.noCalendar || z ? "H:i" + (y.enableSeconds ? ":S" : "") : K + " H:i" + (y.enableSeconds ? ":S" : "");
    }
    if (y.altInput && (y.enableTime || z) && !y.altFormat) {
      var re = $e.defaultConfig.altFormat || nr.altFormat;
      F.altFormat = y.noCalendar || z ? "h:i" + (y.enableSeconds ? ":S K" : " K") : re + (" h:i" + (y.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(e.config, "minDate", {
      get: function() {
        return e.config._minDate;
      },
      set: s0("min")
    }), Object.defineProperty(e.config, "maxDate", {
      get: function() {
        return e.config._maxDate;
      },
      set: s0("max")
    });
    var be = function(fe) {
      return function(_e) {
        e.config[fe === "min" ? "_minTime" : "_maxTime"] = e.parseDate(_e, "H:i:S");
      };
    };
    Object.defineProperty(e.config, "minTime", {
      get: function() {
        return e.config._minTime;
      },
      set: be("min")
    }), Object.defineProperty(e.config, "maxTime", {
      get: function() {
        return e.config._maxTime;
      },
      set: be("max")
    }), y.mode === "time" && (e.config.noCalendar = !0, e.config.enableTime = !0), Object.assign(e.config, F, y);
    for (var ue = 0; ue < v.length; ue++)
      e.config[v[ue]] = e.config[v[ue]] === !0 || e.config[v[ue]] === "true";
    oi.filter(function(fe) {
      return e.config[fe] !== void 0;
    }).forEach(function(fe) {
      e.config[fe] = li(e.config[fe] || []).map(u);
    }), e.isMobile = !e.config.disableMobile && !e.config.inline && e.config.mode === "single" && !e.config.disable.length && !e.config.enable && !e.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var ue = 0; ue < e.config.plugins.length; ue++) {
      var De = e.config.plugins[ue](e) || {};
      for (var ee in De)
        oi.indexOf(ee) > -1 ? e.config[ee] = li(De[ee]).map(u).concat(e.config[ee]) : typeof y[ee] > "u" && (e.config[ee] = De[ee]);
    }
    y.altInputClass || (e.config.altInputClass = At().className + " " + e.config.altInputClass), Fe("onParseConfig");
  }
  function At() {
    return e.config.wrap ? n.querySelector("[data-input]") : n;
  }
  function It() {
    typeof e.config.locale != "object" && typeof $e.l10ns[e.config.locale] > "u" && e.config.errorHandler(new Error("flatpickr: invalid locale " + e.config.locale)), e.l10n = nt(nt({}, $e.l10ns.default), typeof e.config.locale == "object" ? e.config.locale : e.config.locale !== "default" ? $e.l10ns[e.config.locale] : void 0), G0.D = "(" + e.l10n.weekdays.shorthand.join("|") + ")", G0.l = "(" + e.l10n.weekdays.longhand.join("|") + ")", G0.M = "(" + e.l10n.months.shorthand.join("|") + ")", G0.F = "(" + e.l10n.months.longhand.join("|") + ")", G0.K = "(" + e.l10n.amPM[0] + "|" + e.l10n.amPM[1] + "|" + e.l10n.amPM[0].toLowerCase() + "|" + e.l10n.amPM[1].toLowerCase() + ")";
    var v = nt(nt({}, t), JSON.parse(JSON.stringify(n.dataset || {})));
    v.time_24hr === void 0 && $e.defaultConfig.time_24hr === void 0 && (e.config.time_24hr = e.l10n.time_24hr), e.formatDate = A1(e), e.parseDate = Vi({ config: e.config, l10n: e.l10n });
  }
  function mt(v) {
    if (typeof e.config.position == "function")
      return void e.config.position(e, v);
    if (e.calendarContainer !== void 0) {
      Fe("onPreCalendarPosition");
      var y = v || e._positionElement, F = Array.prototype.reduce.call(e.calendarContainer.children, function(se, Ie) {
        return se + Ie.offsetHeight;
      }, 0), z = e.calendarContainer.offsetWidth, K = e.config.position.split(" "), re = K[0], be = K.length > 1 ? K[1] : null, ue = y.getBoundingClientRect(), De = window.innerHeight - ue.bottom, ee = re === "above" || re !== "below" && De < F && ue.top > F, fe = window.pageYOffset + ue.top + (ee ? -F - 2 : y.offsetHeight + 2);
      if (ot(e.calendarContainer, "arrowTop", !ee), ot(e.calendarContainer, "arrowBottom", ee), !e.config.inline) {
        var _e = window.pageXOffset + ue.left, St = !1, et = !1;
        be === "center" ? (_e -= (z - ue.width) / 2, St = !0) : be === "right" && (_e -= z - ue.width, et = !0), ot(e.calendarContainer, "arrowLeft", !St && !et), ot(e.calendarContainer, "arrowCenter", St), ot(e.calendarContainer, "arrowRight", et);
        var S0 = window.document.body.offsetWidth - (window.pageXOffset + ue.right), tt = _e + z > window.document.body.offsetWidth, ln = S0 + z > window.document.body.offsetWidth;
        if (ot(e.calendarContainer, "rightMost", tt), !e.config.static)
          if (e.calendarContainer.style.top = fe + "px", !tt)
            e.calendarContainer.style.left = _e + "px", e.calendarContainer.style.right = "auto";
          else if (!ln)
            e.calendarContainer.style.left = "auto", e.calendarContainer.style.right = S0 + "px";
          else {
            var K0 = nn();
            if (K0 === void 0)
              return;
            var cn = window.document.body.offsetWidth, fn = Math.max(0, cn / 2 - z / 2), Ia = ".flatpickr-calendar.centerMost:before", le = ".flatpickr-calendar.centerMost:after", C = K0.cssRules.length, X = "{left:" + ue.left + "px;right:auto;}";
            ot(e.calendarContainer, "rightMost", !1), ot(e.calendarContainer, "centerMost", !0), K0.insertRule(Ia + "," + le + X, C), e.calendarContainer.style.left = fn + "px", e.calendarContainer.style.right = "auto";
          }
      }
    }
  }
  function nn() {
    for (var v = null, y = 0; y < document.styleSheets.length; y++) {
      var F = document.styleSheets[y];
      if (F.cssRules) {
        try {
          F.cssRules;
        } catch {
          continue;
        }
        v = F;
        break;
      }
    }
    return v ?? an();
  }
  function an() {
    var v = document.createElement("style");
    return document.head.appendChild(v), v.sheet;
  }
  function un() {
    e.config.noCalendar || e.isMobile || ($(), Zt(), P());
  }
  function B0() {
    e._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(e.close, 0) : e.close();
  }
  function x0(v) {
    v.preventDefault(), v.stopPropagation();
    var y = function(fe) {
      return fe.classList && fe.classList.contains("flatpickr-day") && !fe.classList.contains("flatpickr-disabled") && !fe.classList.contains("notAllowed");
    }, F = D1(kt(v), y);
    if (F !== void 0) {
      var z = F, K = e.latestSelectedDateObj = new Date(z.dateObj.getTime()), re = (K.getMonth() < e.currentMonth || K.getMonth() > e.currentMonth + e.config.showMonths - 1) && e.config.mode !== "range";
      if (e.selectedDateElem = z, e.config.mode === "single")
        e.selectedDates = [K];
      else if (e.config.mode === "multiple") {
        var be = z0(K);
        be ? e.selectedDates.splice(parseInt(be), 1) : e.selectedDates.push(K);
      } else e.config.mode === "range" && (e.selectedDates.length === 2 && e.clear(!1, !1), e.latestSelectedDateObj = K, e.selectedDates.push(K), Et(K, e.selectedDates[0], !0) !== 0 && e.selectedDates.sort(function(fe, _e) {
        return fe.getTime() - _e.getTime();
      }));
      if (b(), re) {
        var ue = e.currentYear !== K.getFullYear();
        e.currentYear = K.getFullYear(), e.currentMonth = K.getMonth(), ue && (Fe("onYearChange"), $()), Fe("onMonthChange");
      }
      if (Zt(), P(), Vt(), !re && e.config.mode !== "range" && e.config.showMonths === 1 ? R(z) : e.selectedDateElem !== void 0 && e.hourElement === void 0 && e.selectedDateElem && e.selectedDateElem.focus(), e.hourElement !== void 0 && e.hourElement !== void 0 && e.hourElement.focus(), e.config.closeOnSelect) {
        var De = e.config.mode === "single" && !e.config.enableTime, ee = e.config.mode === "range" && e.selectedDates.length === 2 && !e.config.enableTime;
        (De || ee) && B0();
      }
      S();
    }
  }
  var jt = {
    locale: [It, ye],
    showMonths: [B, o, Z],
    minDate: [D],
    maxDate: [D],
    positionElement: [L0],
    clickOpens: [
      function() {
        e.config.clickOpens === !0 ? (A(e._input, "focus", e.open), A(e._input, "click", e.open)) : (e._input.removeEventListener("focus", e.open), e._input.removeEventListener("click", e.open));
      }
    ]
  };
  function D0(v, y) {
    if (v !== null && typeof v == "object") {
      Object.assign(e.config, v);
      for (var F in v)
        jt[F] !== void 0 && jt[F].forEach(function(z) {
          return z();
        });
    } else
      e.config[v] = y, jt[v] !== void 0 ? jt[v].forEach(function(z) {
        return z();
      }) : oi.indexOf(v) > -1 && (e.config[v] = li(y));
    e.redraw(), Vt(!0);
  }
  function mr(v, y) {
    var F = [];
    if (v instanceof Array)
      F = v.map(function(z) {
        return e.parseDate(z, y);
      });
    else if (v instanceof Date || typeof v == "number")
      F = [e.parseDate(v, y)];
    else if (typeof v == "string")
      switch (e.config.mode) {
        case "single":
        case "time":
          F = [e.parseDate(v, y)];
          break;
        case "multiple":
          F = v.split(e.config.conjunction).map(function(z) {
            return e.parseDate(z, y);
          });
          break;
        case "range":
          F = v.split(e.l10n.rangeSeparator).map(function(z) {
            return e.parseDate(z, y);
          });
          break;
      }
    else
      e.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(v)));
    e.selectedDates = e.config.allowInvalidPreload ? F : F.filter(function(z) {
      return z instanceof Date && ke(z, !1);
    }), e.config.mode === "range" && e.selectedDates.sort(function(z, K) {
      return z.getTime() - K.getTime();
    });
  }
  function sn(v, y, F) {
    if (y === void 0 && (y = !1), F === void 0 && (F = e.config.dateFormat), v !== 0 && !v || v instanceof Array && v.length === 0)
      return e.clear(y);
    mr(v, F), e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1], e.redraw(), D(void 0, y), d(), e.selectedDates.length === 0 && e.clear(!1), Vt(y), y && Fe("onChange");
  }
  function pr(v) {
    return v.slice().map(function(y) {
      return typeof y == "string" || typeof y == "number" || y instanceof Date ? e.parseDate(y, void 0, !0) : y && typeof y == "object" && y.from && y.to ? {
        from: e.parseDate(y.from, void 0),
        to: e.parseDate(y.to, void 0)
      } : y;
    }).filter(function(y) {
      return y;
    });
  }
  function gr() {
    e.selectedDates = [], e.now = e.parseDate(e.config.now) || /* @__PURE__ */ new Date();
    var v = e.config.defaultDate || ((e.input.nodeName === "INPUT" || e.input.nodeName === "TEXTAREA") && e.input.placeholder && e.input.value === e.input.placeholder ? null : e.input.value);
    v && mr(v, e.config.dateFormat), e._initialDate = e.selectedDates.length > 0 ? e.selectedDates[0] : e.config.minDate && e.config.minDate.getTime() > e.now.getTime() ? e.config.minDate : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime() ? e.config.maxDate : e.now, e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth(), e.selectedDates.length > 0 && (e.latestSelectedDateObj = e.selectedDates[0]), e.config.minTime !== void 0 && (e.config.minTime = e.parseDate(e.config.minTime, "H:i")), e.config.maxTime !== void 0 && (e.config.maxTime = e.parseDate(e.config.maxTime, "H:i")), e.minDateHasTime = !!e.config.minDate && (e.config.minDate.getHours() > 0 || e.config.minDate.getMinutes() > 0 || e.config.minDate.getSeconds() > 0), e.maxDateHasTime = !!e.config.maxDate && (e.config.maxDate.getHours() > 0 || e.config.maxDate.getMinutes() > 0 || e.config.maxDate.getSeconds() > 0);
  }
  function on() {
    if (e.input = At(), !e.input) {
      e.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    e.input._type = e.input.type, e.input.type = "text", e.input.classList.add("flatpickr-input"), e._input = e.input, e.config.altInput && (e.altInput = Ce(e.input.nodeName, e.config.altInputClass), e._input = e.altInput, e.altInput.placeholder = e.input.placeholder, e.altInput.disabled = e.input.disabled, e.altInput.required = e.input.required, e.altInput.tabIndex = e.input.tabIndex, e.altInput.type = "text", e.input.setAttribute("type", "hidden"), !e.config.static && e.input.parentNode && e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)), e.config.allowInput || e._input.setAttribute("readonly", "readonly"), L0();
  }
  function L0() {
    e._positionElement = e.config.positionElement || e._input;
  }
  function Z0() {
    var v = e.config.enableTime ? e.config.noCalendar ? "time" : "datetime-local" : "date";
    e.mobileInput = Ce("input", e.input.className + " flatpickr-mobile"), e.mobileInput.tabIndex = 1, e.mobileInput.type = v, e.mobileInput.disabled = e.input.disabled, e.mobileInput.required = e.input.required, e.mobileInput.placeholder = e.input.placeholder, e.mobileFormatStr = v === "datetime-local" ? "Y-m-d\\TH:i:S" : v === "date" ? "Y-m-d" : "H:i:S", e.selectedDates.length > 0 && (e.mobileInput.defaultValue = e.mobileInput.value = e.formatDate(e.selectedDates[0], e.mobileFormatStr)), e.config.minDate && (e.mobileInput.min = e.formatDate(e.config.minDate, "Y-m-d")), e.config.maxDate && (e.mobileInput.max = e.formatDate(e.config.maxDate, "Y-m-d")), e.input.getAttribute("step") && (e.mobileInput.step = String(e.input.getAttribute("step"))), e.input.type = "hidden", e.altInput !== void 0 && (e.altInput.type = "hidden");
    try {
      e.input.parentNode && e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling);
    } catch {
    }
    A(e.mobileInput, "change", function(y) {
      e.setDate(kt(y).value, !1, e.mobileFormatStr), Fe("onChange"), Fe("onClose");
    });
  }
  function Gt(v) {
    if (e.isOpen === !0)
      return e.close();
    e.open(v);
  }
  function Fe(v, y) {
    if (e.config !== void 0) {
      var F = e.config[v];
      if (F !== void 0 && F.length > 0)
        for (var z = 0; F[z] && z < F.length; z++)
          F[z](e.selectedDates, e.input.value, e, y);
      v === "onChange" && (e.input.dispatchEvent(R0("change")), e.input.dispatchEvent(R0("input")));
    }
  }
  function R0(v) {
    var y = document.createEvent("Event");
    return y.initEvent(v, !0, !0), y;
  }
  function z0(v) {
    for (var y = 0; y < e.selectedDates.length; y++) {
      var F = e.selectedDates[y];
      if (F instanceof Date && Et(F, v) === 0)
        return "" + y;
    }
    return !1;
  }
  function Na(v) {
    return e.config.mode !== "range" || e.selectedDates.length < 2 ? !1 : Et(v, e.selectedDates[0]) >= 0 && Et(v, e.selectedDates[1]) <= 0;
  }
  function Zt() {
    e.config.noCalendar || e.isMobile || !e.monthNav || (e.yearElements.forEach(function(v, y) {
      var F = new Date(e.currentYear, e.currentMonth, 1);
      F.setMonth(e.currentMonth + y), e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? e.monthElements[y].textContent = ha(F.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + " " : e.monthsDropdownContainer.value = F.getMonth().toString(), v.value = F.getFullYear().toString();
    }), e._hidePrevMonthArrow = e.config.minDate !== void 0 && (e.currentYear === e.config.minDate.getFullYear() ? e.currentMonth <= e.config.minDate.getMonth() : e.currentYear < e.config.minDate.getFullYear()), e._hideNextMonthArrow = e.config.maxDate !== void 0 && (e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth + 1 > e.config.maxDate.getMonth() : e.currentYear > e.config.maxDate.getFullYear()));
  }
  function br(v) {
    var y = v || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
    return e.selectedDates.map(function(F) {
      return e.formatDate(F, y);
    }).filter(function(F, z, K) {
      return e.config.mode !== "range" || e.config.enableTime || K.indexOf(F) === z;
    }).join(e.config.mode !== "range" ? e.config.conjunction : e.l10n.rangeSeparator);
  }
  function Vt(v) {
    v === void 0 && (v = !0), e.mobileInput !== void 0 && e.mobileFormatStr && (e.mobileInput.value = e.latestSelectedDateObj !== void 0 ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr) : ""), e.input.value = br(e.config.dateFormat), e.altInput !== void 0 && (e.altInput.value = br(e.config.altFormat)), v !== !1 && Fe("onValueUpdate");
  }
  function Ve(v) {
    var y = kt(v), F = e.prevMonthNav.contains(y), z = e.nextMonthNav.contains(y);
    F || z ? ie(F ? -1 : 1) : e.yearElements.indexOf(y) >= 0 ? y.select() : y.classList.contains("arrowUp") ? e.changeYear(e.currentYear + 1) : y.classList.contains("arrowDown") && e.changeYear(e.currentYear - 1);
  }
  function A0(v) {
    v.preventDefault();
    var y = v.type === "keydown", F = kt(v), z = F;
    e.amPM !== void 0 && F === e.amPM && (e.amPM.textContent = e.l10n.amPM[Bt(e.amPM.textContent === e.l10n.amPM[0])]);
    var K = parseFloat(z.getAttribute("min")), re = parseFloat(z.getAttribute("max")), be = parseFloat(z.getAttribute("step")), ue = parseInt(z.value, 10), De = v.delta || (y ? v.which === 38 ? 1 : -1 : 0), ee = ue + be * De;
    if (typeof z.value < "u" && z.value.length === 2) {
      var fe = z === e.hourElement, _e = z === e.minuteElement;
      ee < K ? (ee = re + ee + Bt(!fe) + (Bt(fe) && Bt(!e.amPM)), _e && M(void 0, -1, e.hourElement)) : ee > re && (ee = z === e.hourElement ? ee - re - Bt(!e.amPM) : K, _e && M(void 0, 1, e.hourElement)), e.amPM && fe && (be === 1 ? ee + ue === 23 : Math.abs(ee - ue) > be) && (e.amPM.textContent = e.l10n.amPM[Bt(e.amPM.textContent === e.l10n.amPM[0])]), z.value = vt(ee);
    }
  }
  return a(), e;
}
function ar(n, t) {
  for (var e = Array.prototype.slice.call(n).filter(function(u) {
    return u instanceof HTMLElement;
  }), r = [], a = 0; a < e.length; a++) {
    var i = e[a];
    try {
      if (i.getAttribute("data-fp-omit") !== null)
        continue;
      i._flatpickr !== void 0 && (i._flatpickr.destroy(), i._flatpickr = void 0), i._flatpickr = p6(i, t || {}), r.push(i._flatpickr);
    } catch (u) {
      console.error(u);
    }
  }
  return r.length === 1 ? r[0] : r;
}
typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(n) {
  return ar(this, n);
}, HTMLElement.prototype.flatpickr = function(n) {
  return ar([this], n);
});
var $e = function(n, t) {
  return typeof n == "string" ? ar(window.document.querySelectorAll(n), t) : n instanceof Node ? ar([n], t) : ar(n, t);
};
$e.defaultConfig = {};
$e.l10ns = {
  en: nt({}, $r),
  default: nt({}, $r)
};
$e.localize = function(n) {
  $e.l10ns.default = nt(nt({}, $e.l10ns.default), n);
};
$e.setDefaults = function(n) {
  $e.defaultConfig = nt(nt({}, $e.defaultConfig), n);
};
$e.parseDate = Vi({});
$e.formatDate = A1({});
$e.compareDates = Et;
typeof jQuery < "u" && typeof jQuery.fn < "u" && (jQuery.fn.flatpickr = function(n) {
  return ar(this, n);
});
Date.prototype.fp_incr = function(n) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof n == "string" ? parseInt(n, 10) : n));
};
typeof window < "u" && (window.flatpickr = $e);
const {
  SvelteComponent: g6,
  append_hydration: Mo,
  attr: hi,
  binding_callbacks: b6,
  children: v6,
  claim_component: S1,
  claim_element: Fo,
  claim_space: y6,
  claim_text: w6,
  create_component: k1,
  destroy_component: E1,
  detach: $i,
  element: _o,
  init: x6,
  insert_hydration: T1,
  listen: No,
  mount_component: C1,
  run_all: D6,
  safe_not_equal: A6,
  set_data: S6,
  set_input_value: Io,
  space: k6,
  text: E6,
  toggle_class: Oo,
  transition_in: M1,
  transition_out: F1
} = window.__gradio__svelte__internal, { onMount: T6 } = window.__gradio__svelte__internal;
function C6(n) {
  let t;
  return {
    c() {
      t = E6(
        /*label*/
        n[1]
      );
    },
    l(e) {
      t = w6(
        e,
        /*label*/
        n[1]
      );
    },
    m(e, r) {
      T1(e, t, r);
    },
    p(e, r) {
      r & /*label*/
      2 && S6(
        t,
        /*label*/
        e[1]
      );
    },
    d(e) {
      e && $i(t);
    }
  };
}
function M6(n) {
  let t, e, r, a, i, u, o, s;
  return e = new l6({
    props: {
      show_label: (
        /*show_label*/
        n[8]
      ),
      info: (
        /*info*/
        n[6]
      ),
      $$slots: { default: [C6] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      t = _o("label"), k1(e.$$.fragment), r = k6(), a = _o("input"), this.h();
    },
    l(c) {
      t = Fo(c, "LABEL", { class: !0 });
      var h = v6(t);
      S1(e.$$.fragment, h), r = y6(h), a = Fo(h, "INPUT", { type: !0, class: !0 }), h.forEach($i), this.h();
    },
    h() {
      hi(a, "type", "text"), a.disabled = i = !/*interactive*/
      n[10], hi(a, "class", "svelte-jydqsf"), hi(t, "class", "svelte-jydqsf"), Oo(
        t,
        "container",
        /*container*/
        n[9]
      );
    },
    m(c, h) {
      T1(c, t, h), C1(e, t, null), Mo(t, r), Mo(t, a), n[17](a), Io(
        a,
        /*value*/
        n[0]
      ), u = !0, o || (s = [
        No(
          a,
          "input",
          /*input_input_handler*/
          n[18]
        ),
        No(
          a,
          "change",
          /*handle_change*/
          n[12]
        )
      ], o = !0);
    },
    p(c, h) {
      const b = {};
      h & /*show_label*/
      256 && (b.show_label = /*show_label*/
      c[8]), h & /*info*/
      64 && (b.info = /*info*/
      c[6]), h & /*$$scope, label*/
      524290 && (b.$$scope = { dirty: h, ctx: c }), e.$set(b), (!u || h & /*interactive*/
      1024 && i !== (i = !/*interactive*/
      c[10])) && (a.disabled = i), h & /*value*/
      1 && a.value !== /*value*/
      c[0] && Io(
        a,
        /*value*/
        c[0]
      ), (!u || h & /*container*/
      512) && Oo(
        t,
        "container",
        /*container*/
        c[9]
      );
    },
    i(c) {
      u || (M1(e.$$.fragment, c), u = !0);
    },
    o(c) {
      F1(e.$$.fragment, c), u = !1;
    },
    d(c) {
      c && $i(t), E1(e), n[17](null), o = !1, D6(s);
    }
  };
}
function F6(n) {
  let t, e;
  return t = new W1({
    props: {
      visible: (
        /*visible*/
        n[2]
      ),
      elem_id: (
        /*elem_id*/
        n[4]
      ),
      elem_classes: (
        /*elem_classes*/
        n[3]
      ),
      scale: (
        /*scale*/
        n[5]
      ),
      min_width: (
        /*min_width*/
        n[7]
      ),
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [M6] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      k1(t.$$.fragment);
    },
    l(r) {
      S1(t.$$.fragment, r);
    },
    m(r, a) {
      C1(t, r, a), e = !0;
    },
    p(r, [a]) {
      const i = {};
      a & /*visible*/
      4 && (i.visible = /*visible*/
      r[2]), a & /*elem_id*/
      16 && (i.elem_id = /*elem_id*/
      r[4]), a & /*elem_classes*/
      8 && (i.elem_classes = /*elem_classes*/
      r[3]), a & /*scale*/
      32 && (i.scale = /*scale*/
      r[5]), a & /*min_width*/
      128 && (i.min_width = /*min_width*/
      r[7]), a & /*$$scope, container, interactive, el, value, show_label, info, label*/
      528195 && (i.$$scope = { dirty: a, ctx: r }), t.$set(i);
    },
    i(r) {
      e || (M1(t.$$.fragment, r), e = !0);
    },
    o(r) {
      F1(t.$$.fragment, r), e = !1;
    },
    d(r) {
      E1(t, r);
    }
  };
}
function _6(n, t, e) {
  let { value: r = null } = t, { value_is_output: a = !1 } = t, { label: i } = t, { visible: u = !0 } = t, { elem_classes: o } = t, { elem_id: s } = t, { scale: c } = t, { info: h } = t, { min_width: b } = t, { show_label: d = !0 } = t, { container: m = !0 } = t, { interactive: T = !0 } = t, { gradio: A } = t, { mode: S = "single" } = t, { date_format: I = "%Y-%m-%d" } = t, D;
  function k() {
    A.dispatch("change"), a || (A.dispatch("submit"), A.dispatch("input"));
  }
  T6(() => {
    const N = I.replace(/%Y/g, "Y").replace(/%m/g, "m").replace(/%d/g, "d");
    $e(D, {
      mode: S === "range" ? "range" : "single",
      dateFormat: N,
      onChange: (j, q) => {
        S === "range" ? e(0, r = q.split(" to ")) : e(0, r = q), k();
      }
    });
  });
  function M(N) {
    b6[N ? "unshift" : "push"](() => {
      D = N, e(11, D);
    });
  }
  function O() {
    r = this.value, e(0, r);
  }
  return n.$$set = (N) => {
    "value" in N && e(0, r = N.value), "value_is_output" in N && e(13, a = N.value_is_output), "label" in N && e(1, i = N.label), "visible" in N && e(2, u = N.visible), "elem_classes" in N && e(3, o = N.elem_classes), "elem_id" in N && e(4, s = N.elem_id), "scale" in N && e(5, c = N.scale), "info" in N && e(6, h = N.info), "min_width" in N && e(7, b = N.min_width), "show_label" in N && e(8, d = N.show_label), "container" in N && e(9, m = N.container), "interactive" in N && e(10, T = N.interactive), "gradio" in N && e(14, A = N.gradio), "mode" in N && e(15, S = N.mode), "date_format" in N && e(16, I = N.date_format);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && k();
  }, [
    r,
    i,
    u,
    o,
    s,
    c,
    h,
    b,
    d,
    m,
    T,
    D,
    k,
    a,
    A,
    S,
    I,
    M,
    O
  ];
}
class Y6 extends g6 {
  constructor(t) {
    super(), x6(this, t, _6, F6, A6, {
      value: 0,
      value_is_output: 13,
      label: 1,
      visible: 2,
      elem_classes: 3,
      elem_id: 4,
      scale: 5,
      info: 6,
      min_width: 7,
      show_label: 8,
      container: 9,
      interactive: 10,
      gradio: 14,
      mode: 15,
      date_format: 16
    });
  }
}
export {
  Y6 as default
};
