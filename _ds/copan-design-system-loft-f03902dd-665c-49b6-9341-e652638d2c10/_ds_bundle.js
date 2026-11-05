/* @ds-bundle: {"format":4,"namespace":"CopanDesignSystemLoft_f03902","components":[],"sourceHashes":{"ui_kits/marketing-site/app-root.jsx":"36101dc59335","ui_kits/marketing-site/components.jsx":"31aaed05d792","ui_kits/marketing-site/detail.jsx":"b53e617efb65","ui_kits/marketing-site/doc-page.js":"f52ae9c02fca","ui_kits/marketing-site/home.jsx":"5d1b40957a42","ui_kits/marketing-site/screens.jsx":"5120eca33088","ui_kits/marketing-site/search.jsx":"714c4a54af70","ui_kits/transaction-app/app-root.jsx":"1bb30bc1cc10","ui_kits/transaction-app/components.jsx":"cd0d9968e97f","ui_kits/transaction-app/dashboard.jsx":"ae715bc12823","ui_kits/transaction-app/documents.jsx":"a48454510543","ui_kits/transaction-app/messages.jsx":"a2c7244e8d78","ui_kits/transaction-app/proposal.jsx":"568255e1a075"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CopanDesignSystemLoft_f03902 = window.CopanDesignSystemLoft_f03902 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing-site/app-root.jsx
try { (() => {
// app-root.jsx — orchestrator

const {
  useState: useStApp,
  useEffect: useEfApp
} = React;
function App() {
  const [state, setState] = useStApp(() => {
    try {
      const saved = localStorage.getItem("copan_uikit_state");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      route: "home",
      property: null
    };
  });
  useEfApp(() => {
    localStorage.setItem("copan_uikit_state", JSON.stringify(state));
    // re-render Lucide icons whenever screen changes
    if (window.lucide) setTimeout(() => window.lucide.createIcons(), 50);
  }, [state]);
  const goto = (route, property = null) => setState({
    route,
    property
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: state.route,
    goto: goto
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, state.route === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    goto: goto
  }), state.route === "search" && /*#__PURE__*/React.createElement(SearchScreen, {
    goto: goto
  }), state.route === "detail" && /*#__PURE__*/React.createElement(DetailScreen, {
    goto: goto,
    property: state.property
  })), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/app-root.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// components.jsx — Copan UI kit for Loft
// All shared components. Exported to window at the bottom.
// Source of truth: Copan-Components.fig (Button, Chips, Tags, Feedback-banner).

const {
  useState
} = React;

// ───────── Logo ─────────
function LoftLogo({
  size = 28,
  color = "currentColor"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size * 72 / 61,
    height: size,
    viewBox: "0 0 72 61.411",
    fill: color,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40.159 61.411 L 46.651 61.411 L 46.651 29.139 L 55.847 29.139 L 57.688 22.676 L 46.651 22.676 L 46.651 13.787 C 46.651 9.749 49.951 6.463 54.007 6.463 L 54.007 0 C 46.371 0 40.159 6.185 40.159 13.787 L 40.159 22.676 L 36.885 22.676 C 35.432 16.927 30.196 12.658 23.976 12.658 C 16.638 12.658 10.667 18.601 10.667 25.908 C 10.667 33.214 16.638 39.157 23.976 39.157 C 30.196 39.157 35.432 34.888 36.885 29.139 L 40.159 29.139 L 40.159 61.411 Z M 67.456 22.676 L 72 22.676 L 72 29.139 L 67.456 29.139 L 67.456 50.419 L 60.963 50.419 L 60.963 14.225 L 67.456 14.225 L 67.456 22.676 Z M 23.976 18.475 C 19.86 18.475 16.51 21.809 16.51 25.908 C 16.51 30.006 19.86 33.34 23.976 33.34 C 28.093 33.34 31.442 30.006 31.442 25.908 C 31.442 21.809 28.093 18.475 23.976 18.475 Z M 0 32.097 C 0 41.961 8.061 49.986 17.968 49.986 L 17.968 43.523 C 11.64 43.523 6.492 38.397 6.492 32.097 L 6.492 14.224 L 0 14.224 L 0 32.097 Z",
    fillRule: "evenodd"
  }));
}

// ───────── Icon wrapper (Lucide) ─────────
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      ...style
    },
    "data-stroke-width": strokeWidth
  });
}

// ───────── Button ─────────
// Copan API: variant(primary|secondary) × modifier(none|inverted|premium) × size(default|contextual) × state(enabled|hover|pressed|disabled|loading)
// Primary  = filled orange, no border
// Secondary = outlined, #121619 border, white fill
// Default size = 48h, 12/24 padding, 16/24 label. Contextual = 32h, 8/16 padding, 14/20 label.
function Button({
  children,
  variant = "primary",
  modifier = "none",
  size = "default",
  icon,
  iconPosition = "before",
  disabled,
  loading,
  fullWidth,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sizes = {
    default: {
      h: 48,
      px: 24,
      py: 12,
      fs: 16,
      lh: 24,
      gap: 8,
      iconSize: 24,
      radius: 8
    },
    contextual: {
      h: 32,
      px: 16,
      py: 8,
      fs: 14,
      lh: 20,
      gap: 6,
      iconSize: 16,
      radius: 8
    }
  };
  const sizeAlias = {
    md: "default",
    lg: "default",
    sm: "contextual",
    small: "contextual"
  };
  const s = sizes[size] ?? sizes[sizeAlias[size]] ?? sizes.default;

  // Color matrix
  const palette = {
    primary: {
      none: {
        bg: "#F56738",
        bgHover: "#D94616",
        bgPressed: "#8A2606",
        fg: "#FFFFFF",
        border: "transparent",
        bgDisabled: "#C1C7CD",
        fgDisabled: "#FFFFFF"
      },
      inverted: {
        bg: "#FFFFFF",
        bgHover: "#F2F4F8",
        bgPressed: "#E1E9EF",
        fg: "#121619",
        border: "transparent",
        bgDisabled: "#5A6A75",
        fgDisabled: "#C1C7CD"
      },
      premium: {
        bg: "#121619",
        bgHover: "#343A3F",
        bgPressed: "#000000",
        fg: "#E4B266",
        border: "transparent",
        bgDisabled: "#C1C7CD",
        fgDisabled: "#FFFFFF"
      }
    },
    secondary: {
      none: {
        bg: "#FFFFFF",
        bgHover: "#F2F4F8",
        bgPressed: "#E1E9EF",
        fg: "#121619",
        border: "#121619",
        bgDisabled: "#FFFFFF",
        fgDisabled: "#C1C7CD",
        borderDisabled: "#C1C7CD"
      },
      inverted: {
        bg: "transparent",
        bgHover: "rgba(255,255,255,0.1)",
        bgPressed: "rgba(255,255,255,0.2)",
        fg: "#FFFFFF",
        border: "#FFFFFF",
        bgDisabled: "transparent",
        fgDisabled: "#5A6A75",
        borderDisabled: "#5A6A75"
      },
      premium: {
        bg: "transparent",
        bgHover: "#FDF4E4",
        bgPressed: "#F7E6B8",
        fg: "#121619",
        border: "#E4B266",
        bgDisabled: "#FFFFFF",
        fgDisabled: "#C1C7CD",
        borderDisabled: "#C1C7CD"
      }
    }
  };
  const variantAlias = {
    outline: ["secondary", "none"],
    dark: ["primary", "premium"],
    ghost: ["secondary", "none"]
  };
  const [vKey, mKey] = variantAlias[variant] ?? [variant, modifier];
  const p = palette[vKey]?.[mKey] ?? palette[vKey]?.none ?? palette.primary.none;
  const state = disabled ? "disabled" : pressed ? "pressed" : hover ? "hover" : "enabled";
  const bg = state === "disabled" ? p.bgDisabled : state === "pressed" ? p.bgPressed : state === "hover" ? p.bgHover : p.bg;
  const fg = state === "disabled" ? p.fgDisabled : p.fg;
  const bd = state === "disabled" ? p.borderDisabled ?? p.border : p.border;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    disabled: disabled || loading,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      background: bg,
      border: bd === "transparent" ? "none" : `1px solid ${bd}`,
      color: fg,
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: s.fs,
      lineHeight: `${s.lh}px`,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: s.radius,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      outline: "none",
      transition: "background 180ms ease-out, border-color 180ms ease-out",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Icon, {
    name: "loader-2",
    size: s.iconSize,
    style: {
      animation: "spin 1s linear infinite"
    }
  }), !loading && icon && iconPosition === "before" && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: s.iconSize
  }), /*#__PURE__*/React.createElement("span", null, children), !loading && icon && iconPosition === "after" && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: s.iconSize
  }));
}

// ───────── Action Button (icon-only) ─────────
function ActionButton({
  icon,
  variant = "primary",
  size = "default",
  disabled,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    default: {
      h: 48,
      iconSize: 24
    },
    contextual: {
      h: 32,
      iconSize: 16
    }
  };
  const sizeAlias = {
    md: "default",
    lg: "default",
    sm: "contextual",
    small: "contextual"
  };
  const s = sizes[size] ?? sizes[sizeAlias[size]] ?? sizes.default;
  return /*#__PURE__*/React.createElement(Button, _extends({
    variant: variant,
    size: size,
    disabled: disabled,
    onClick: onClick,
    style: {
      width: s.h,
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: s.iconSize
  }));
}

// ───────── Chip (filter / choice) ─────────
// API: state(enabled|hover|pressed|disabled|selected) × modifier(none|inverted)
function Chip({
  children,
  selected = false,
  icon,
  iconPosition = "left",
  disabled,
  onClick,
  closable,
  onClose
}) {
  const [hover, setHover] = useState(false);
  const bg = disabled ? "#F2F4F8" : selected ? "#121619" : hover ? "#F2F4F8" : "#FFFFFF";
  const fg = disabled ? "#A2A9B0" : selected ? "#FFFFFF" : "#121619";
  const bd = disabled ? "#E1E9EF" : selected ? "#121619" : "#C1C7CD";
  return /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      border: `1px solid ${bd}`,
      color: fg,
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      padding: "6px 14px",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      cursor: disabled ? "not-allowed" : "pointer",
      whiteSpace: "nowrap",
      userSelect: "none",
      transition: "all 150ms ease-out"
    }
  }, icon && iconPosition === "left" && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), children, icon && iconPosition === "right" && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), closable && /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14,
    style: {
      opacity: 0.7,
      marginLeft: 2,
      cursor: "pointer"
    },
    onClick: e => {
      e.stopPropagation();
      onClose && onClose();
    }
  }));
}

// ───────── Tag (status badge) ─────────
// API: variant(neutral|informative|positive|negative|attention) × modifier(none|inverted|premium|muted)
function Tag({
  children,
  variant = "neutral",
  modifier = "none",
  icon
}) {
  const palettes = {
    neutral: {
      bg: "#F2F4F8",
      fg: "#121619"
    },
    informative: {
      bg: "#EDF6FC",
      fg: "#225C8A"
    },
    positive: {
      bg: "#E8F5F0",
      fg: "#115644"
    },
    negative: {
      bg: "#FDECEC",
      fg: "#991818"
    },
    attention: {
      bg: "#FFF4DF",
      fg: "#7A5200"
    }
  };
  let {
    bg,
    fg
  } = palettes[variant] ?? palettes.neutral;
  if (modifier === "inverted") {
    bg = "#121619";
    fg = "#FFFFFF";
  } else if (modifier === "premium") {
    bg = "#121619";
    fg = "#E4B266";
  } else if (modifier === "muted") {
    bg = "transparent";
    fg = "#A2A9B0";
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: bg,
      color: fg,
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.02em",
      padding: "4px 10px",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      whiteSpace: "nowrap"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 12
  }), children);
}

// ───────── Input ─────────
function Input({
  label,
  caption,
  error,
  icon,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const borderColor = error ? "#CE4242" : focused ? "#F56738" : "#C1C7CD";
  const borderWidth = focused || error ? 2 : 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 500,
      color: "#121619"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      display: "flex",
      color: "#697077"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      height: 48,
      padding: `0 ${14 - (borderWidth - 1)}px 0 ${(icon ? 38 : 14) - (borderWidth - 1)}px`,
      border: `${borderWidth}px solid ${borderColor}`,
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 16,
      color: "#121619",
      background: error ? "#FDECEC" : "#FFFFFF",
      outline: "none"
    }
  }, rest))), (caption || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter",
      fontSize: 12,
      color: error ? "#CE4242" : "#697077"
    }
  }, error || caption));
}

// ───────── Feedback Banner ─────────
function FeedbackBanner({
  variant = "informative",
  icon,
  title,
  children,
  action,
  onDismiss
}) {
  const palettes = {
    informative: {
      bg: "#EDF6FC",
      fg: "#121619",
      iconColor: "#387BA8",
      icon: "info"
    },
    positive: {
      bg: "#E8F5F0",
      fg: "#121619",
      iconColor: "#20A483",
      icon: "check-circle-2"
    },
    negative: {
      bg: "#FDECEC",
      fg: "#121619",
      iconColor: "#CE4242",
      icon: "alert-circle"
    },
    attention: {
      bg: "#FFF4DF",
      fg: "#121619",
      iconColor: "#FFC04C",
      icon: "alert-triangle"
    }
  };
  const p = palettes[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.bg,
      color: p.fg,
      borderRadius: 8,
      padding: "16px 20px",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      fontFamily: "Inter, sans-serif"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon || p.icon,
    size: 20,
    color: p.iconColor,
    style: {
      marginTop: 2,
      flex: "0 0 20px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: "20px"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px"
    }
  }, children)), action && /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      background: "transparent",
      border: "none",
      padding: 0,
      color: "#20A483",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 14,
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: 3
    }
  }, action.label), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: "transparent",
      border: "none",
      padding: 4,
      cursor: "pointer",
      color: "#697077",
      display: "flex"
    },
    "aria-label": "Fechar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })));
}

// ───────── Link ─────────
function Link({
  children,
  href = "#",
  variant = "default",
  size = "md",
  onClick,
  icon
}) {
  const variants = {
    default: {
      color: "#20A483",
      hover: "#115644"
    },
    informative: {
      color: "#387BA8",
      hover: "#225C8A"
    },
    inverted: {
      color: "#FFFFFF",
      hover: "#E1E9EF"
    }
  };
  const sizes = {
    sm: 12,
    md: 14,
    lg: 16
  };
  const [hover, setHover] = useState(false);
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? v.hover : v.color,
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: sizes[size],
      lineHeight: `${sizes[size] + 6}px`,
      textDecoration: "underline",
      textUnderlineOffset: 3,
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: sizes[size]
  }));
}
Object.assign(window, {
  LoftLogo,
  Icon,
  Button,
  ActionButton,
  Chip,
  Tag,
  Input,
  FeedbackBanner,
  Link
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/detail.jsx
try { (() => {
// detail.jsx — Property detail screen with photo gallery and proposal drawer

const {
  useState: _useStD
} = React;
function DetailScreen({
  goto,
  property
}) {
  const p = property || PHOTOS[0];
  const [tab, setTab] = _useStD(0);
  const [drawer, setDrawer] = _useStD(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1232,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    },
    onClick: () => goto("home")
  }, "Home"), " / ", /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    },
    onClick: () => goto("search")
  }, "Comprar"), " / ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#121619"
    }
  }, p.neigh)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gridTemplateRows: "220px 220px",
      gap: 8,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: "1 / 3",
      background: p.grad,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      display: "flex",
      gap: 8
    }
  }, p.tag && /*#__PURE__*/React.createElement(Tag, {
    variant: "dark"
  }, p.tag), p.badge && /*#__PURE__*/React.createElement(Tag, {
    variant: "orange"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #FFD9C7 0%, #F56738 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #E4B266 0%, #BD7B00 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #E1E9EF 0%, #A2A9B0 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #7351BA 0%, #4A2E85 100%)",
      position: "relative",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 15,
      color: "#FFFFFF"
    }
  }, "Ver todas as 24 fotos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077"
    }
  }, "Apartamento \xB7 ", p.neigh, ", S\xE3o Paulo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "44px",
      letterSpacing: "-0.01em",
      color: "#121619",
      marginTop: 4
    }
  }, p.rooms, " ", p.rooms === 1 ? "quarto" : "quartos", " com ", p.area, "m\xB2 em ", p.neigh), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 20,
      paddingBottom: 24,
      borderBottom: "1px solid #E1E9EF"
    }
  }, [{
    label: "Área",
    val: `${p.area} m²`
  }, {
    label: "Quartos",
    val: p.rooms
  }, {
    label: "Banheiros",
    val: p.rooms >= 2 ? 2 : 1
  }, {
    label: "Vagas",
    val: 1
  }, {
    label: "Andar",
    val: `${Math.floor(Math.random() * 15) + 3}º`
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 12,
      color: "#697077",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 18,
      color: "#121619",
      marginTop: 2
    }
  }, m.val))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      borderBottom: "1px solid #E1E9EF",
      marginTop: 32
    }
  }, ["Sobre", "Comodidades", "Localização", "Financiamento"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(i),
    style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "12px 0",
      fontFamily: "Inter",
      fontWeight: tab === i ? 700 : 500,
      fontSize: 15,
      color: tab === i ? "#121619" : "#697077",
      borderBottom: `2px solid ${tab === i ? "#F56738" : "transparent"}`,
      marginBottom: -1
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      minHeight: 220
    }
  }, tab === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter",
      fontSize: 16,
      lineHeight: "26px",
      color: "#343A3F"
    }
  }, "Apartamento reformado pela Loft em ", p.neigh, ", um dos bairros mais procurados de S\xE3o Paulo. Com ", p.area, "m\xB2 distribu\xEDdos em ", p.rooms, " ", p.rooms === 1 ? "quarto" : "quartos", ", o im\xF3vel oferece acabamento padr\xE3o Loft e est\xE1 pronto para morar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter",
      fontSize: 16,
      lineHeight: "26px",
      color: "#343A3F",
      marginTop: 16
    }
  }, "O pr\xE9dio conta com infraestrutura completa e est\xE1 a poucos metros do metr\xF4, ciclovia e parques da regi\xE3o.")), tab === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, ["Piscina", "Academia", "Portaria 24h", "Salão de festas", "Churrasqueira", "Playground", "Bicicletário", "Pet space", "Lavanderia compartilhada"].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 999,
      background: "#FFF2EC",
      color: "#F56738",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter",
      fontSize: 15,
      color: "#121619"
    }
  }, c)))), tab === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #EDF6FC 0%, #D9E9F5 100%)",
      height: 280,
      borderRadius: 12,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 280",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 100 L 600 140",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 100 0 L 200 280",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 380 0 L 340 280",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "140",
    r: "24",
    fill: "#F56738",
    stroke: "#FFFFFF",
    strokeWidth: "3"
  }))), tab === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F2F4F8",
      padding: 24,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 18,
      color: "#121619"
    }
  }, "Simulador de financiamento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Entrada",
    caption: "20% do valor do im\xF3vel",
    defaultValue: `R$ ${Math.round(p.price * 0.2).toLocaleString("pt-BR")}`
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Prazo",
    caption: "At\xE9 420 meses",
    defaultValue: "360 meses"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: "16px 20px",
      background: "#FFFFFF",
      borderRadius: 8,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077"
    }
  }, "Parcela estimada"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 22,
      color: "#F56738",
      marginTop: 2
    }
  }, "R$ ", Math.round(p.price * 0.8 / 360 * 1.8).toLocaleString("pt-BR"), "/m\xEAs")), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "md"
  }, "Simular com bancos"))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 96,
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: "1px solid #E1E9EF",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 8px 24px -6px rgba(25,31,35,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "34px",
      color: "#121619"
    }
  }, currency(p.price)), p.discount && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "line-through"
    }
  }, currency(p.discount)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#20A483",
      fontWeight: 700,
      marginLeft: 8
    }
  }, "\u2212", Math.round((1 - p.price / p.discount) * 100), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#536470",
      marginTop: 16,
      padding: "12px 14px",
      background: "#F2F4F8",
      borderRadius: 8
    }
  }, "Condom\xEDnio R$ 680 \xB7 IPTU R$ 215"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setDrawer(true)
  }, "Enviar proposta"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    icon: "calendar"
  }, "Agendar visita")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: "12px 0",
      borderTop: "1px solid #E1E9EF",
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: "linear-gradient(135deg, #F56738, #D94616)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 14,
      color: "#121619"
    }
  }, "Mariana Costa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 12,
      color: "#697077"
    }
  }, "Consultora Loft \xB7 responde em ~2h"))))))), drawer && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setDrawer(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(25,31,35,0.5)",
      zIndex: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: 480,
      background: "#FFFFFF",
      zIndex: 21,
      padding: 40,
      overflow: "auto",
      boxShadow: "0 24px 48px -12px rgba(25,31,35,0.24)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDrawer(false),
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "#F2F4F8",
      border: "none",
      cursor: "pointer",
      fontSize: 18,
      color: "#121619"
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#F56738"
    }
  }, "Nova proposta"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "32px",
      letterSpacing: "-0.01em",
      color: "#121619",
      marginTop: 8
    }
  }, "Proposta para ", p.neigh), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter",
      fontSize: 14,
      color: "#536470",
      marginTop: 8
    }
  }, "O propriet\xE1rio tem at\xE9 48h para responder."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Valor da proposta",
    defaultValue: currency(Math.round(p.price * 0.97)),
    caption: `Valor anunciado: ${currency(p.price)}`
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Forma de pagamento",
    defaultValue: "Financiamento"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Condi\xE7\xF5es adicionais",
    placeholder: "Ex.: condicionado \xE0 vistoria",
    caption: "Opcional."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: "12px 14px",
      background: "#EDF6FC",
      borderLeft: "3px solid #20A483",
      borderRadius: 4,
      fontFamily: "Inter",
      fontSize: 13,
      lineHeight: "18px",
      color: "#115644"
    }
  }, "Sua proposta \xE9 v\xE1lida por 7 dias corridos a partir do envio."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => setDrawer(false)
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => {
      alert("Proposta enviada!");
      setDrawer(false);
    }
  }, "Enviar proposta")))));
}
Object.assign(window, {
  DetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/home.jsx
try { (() => {
// app.jsx — top-level App with routing and the 3 screens

const {
  useState,
  useEffect
} = React;

// ───────── Home Screen ─────────
function HomeScreen({
  goto
}) {
  const [intent, setIntent] = useState("comprar");
  const [where, setWhere] = useState("São Paulo");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg, #FFF2EC 0%, #FFFFFF 100%)",
      padding: "72px 48px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1232,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#F56738",
      marginBottom: 16
    }
  }, "Moradia sem complica\xE7\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Inter",
      fontWeight: 800,
      fontSize: 64,
      lineHeight: "68px",
      letterSpacing: "-0.02em",
      color: "#121619",
      maxWidth: 840
    }
  }, "Encontre seu pr\xF3ximo lar ", /*#__PURE__*/React.createElement("br", null), "em S\xE3o Paulo e Rio."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter",
      fontSize: 18,
      lineHeight: "28px",
      color: "#536470",
      marginTop: 20,
      maxWidth: 560
    }
  }, "Apartamentos prontos para morar, reformados pela Loft em locais privilegiados."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      background: "#FFFFFF",
      padding: 12,
      borderRadius: 16,
      boxShadow: "0 16px 32px -8px rgba(25,31,35,0.12)",
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      padding: "0 4px"
    }
  }, ["comprar", "alugar", "lançamentos"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setIntent(t),
    style: {
      background: intent === t ? "#121619" : "transparent",
      color: intent === t ? "#FFFFFF" : "#121619",
      border: "none",
      borderRadius: 999,
      padding: "6px 14px",
      cursor: "pointer",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 13,
      textTransform: "capitalize"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2,
      padding: "8px 14px",
      borderRight: "1px solid #E1E9EF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 11,
      fontWeight: 700,
      color: "#697077",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "Onde"), /*#__PURE__*/React.createElement("input", {
    value: where,
    onChange: e => setWhere(e.target.value),
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: 500,
      color: "#121619",
      padding: "4px 0",
      background: "transparent"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "8px 14px",
      borderRight: "1px solid #E1E9EF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 11,
      fontWeight: 700,
      color: "#697077",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "Quartos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: 500,
      color: "#121619",
      padding: "4px 0"
    }
  }, "1 ou mais")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.2,
      padding: "8px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 11,
      fontWeight: 700,
      color: "#697077",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "Pre\xE7o at\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: 500,
      color: "#121619",
      padding: "4px 0"
    }
  }, "R$ 1.500.000")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "search",
    onClick: () => goto("search")
  }, "Buscar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077",
      alignSelf: "center",
      marginRight: 4
    }
  }, "Populares:"), ["Pinheiros", "2 quartos", "Até R$ 1M", "Com varanda", "Pet-friendly"].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    onClick: () => goto("search")
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1232,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#F56738",
      marginBottom: 8
    }
  }, "Em destaque"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "44px",
      letterSpacing: "-0.01em",
      color: "#121619"
    }
  }, "Apartamentos prontos pela Loft")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    onClick: () => goto("search")
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, PHOTOS.slice(0, 4).map(p => /*#__PURE__*/React.createElement(PropertyCard, {
    key: p.id,
    p: p,
    onClick: () => goto("detail", p)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1232,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 48
    }
  }, [{
    h: "Reformado pela Loft",
    p: "Apartamentos entregues prontos para morar, com acabamento padrão Loft e garantia de 1 ano."
  }, {
    h: "Proposta 100% online",
    p: "Você envia a proposta, a Loft avalia em até 48h e assina o contrato digitalmente."
  }, {
    h: "Financiamento sem complicação",
    p: "Simulamos com os principais bancos e acompanhamos todo o processo até a entrega da chave."
  }].map((vp, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "#FFF2EC",
      color: "#F56738",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 20
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "28px",
      color: "#121619"
    }
  }, vp.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter",
      fontSize: 15,
      lineHeight: "24px",
      color: "#536470",
      marginTop: 8
    }
  }, vp.p))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/screens.jsx
try { (() => {
// screens.jsx — Header, Footer, PropertyCard, and the 3 screens

const {
  useState: _useState,
  useEffect: _useEffect
} = React;

// Stock "photos" — duotone gradients named by mood
const PHOTOS = [{
  id: 1,
  neigh: "Pinheiros",
  rooms: 2,
  area: 62,
  price: 1245000,
  discount: null,
  grad: "linear-gradient(135deg, #E4B266 0%, #F56738 100%)",
  tag: "Pronto p/ morar",
  badge: null
}, {
  id: 2,
  neigh: "Vila Madalena",
  rooms: 1,
  area: 48,
  price: 890000,
  discount: 950000,
  grad: "linear-gradient(135deg, #7351BA 0%, #20A483 100%)",
  tag: null,
  badge: "Oferta Loft"
}, {
  id: 3,
  neigh: "Itaim Bibi",
  rooms: 3,
  area: 98,
  price: 2180000,
  discount: null,
  grad: "linear-gradient(135deg, #536470 0%, #191F23 100%)",
  tag: "Pronto p/ morar",
  badge: null
}, {
  id: 4,
  neigh: "Jardins",
  rooms: 2,
  area: 72,
  price: 1560000,
  discount: null,
  grad: "linear-gradient(135deg, #FFA782 0%, #D94616 100%)",
  tag: null,
  badge: null
}, {
  id: 5,
  neigh: "Perdizes",
  rooms: 2,
  area: 68,
  price: 1120000,
  discount: 1180000,
  grad: "linear-gradient(135deg, #20A483 0%, #115644 100%)",
  tag: null,
  badge: "Oferta Loft"
}, {
  id: 6,
  neigh: "Moema",
  rooms: 3,
  area: 104,
  price: 1890000,
  discount: null,
  grad: "linear-gradient(135deg, #E4B266 0%, #7A5200 100%)",
  tag: "Pronto p/ morar",
  badge: null
}, {
  id: 7,
  neigh: "Pinheiros",
  rooms: 1,
  area: 42,
  price: 720000,
  discount: null,
  grad: "linear-gradient(135deg, #FFD9C7 0%, #F56738 100%)",
  tag: null,
  badge: null
}, {
  id: 8,
  neigh: "Vila Mariana",
  rooms: 2,
  area: 58,
  price: 950000,
  discount: null,
  grad: "linear-gradient(135deg, #C1C7CD 0%, #536470 100%)",
  tag: null,
  badge: null
}];
function currency(n) {
  return "R$ " + n.toLocaleString("pt-BR");
}

// ───────── Header ─────────
function Header({
  route,
  goto
}) {
  const links = [{
    k: "home",
    label: "Comprar"
  }, {
    k: "search",
    label: "Alugar"
  }, {
    k: "sell",
    label: "Vender"
  }, {
    k: "finance",
    label: "Financiar"
  }, {
    k: "about",
    label: "Sobre"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "#FFFFFF",
      borderBottom: "1px solid #E1E9EF",
      height: 72,
      display: "flex",
      alignItems: "center",
      padding: "0 48px",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => goto("home"),
    style: {
      cursor: "pointer",
      color: "#121619"
    }
  }, /*#__PURE__*/React.createElement(LoftLogo, {
    size: 28
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.k,
    onClick: () => goto(l.k === "sell" || l.k === "finance" || l.k === "about" ? "home" : l.k),
    style: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 14,
      cursor: "pointer",
      color: route === l.k ? "#F56738" : "#121619",
      textDecoration: route === l.k ? "underline" : "none",
      textDecorationStyle: "dashed",
      textUnderlineOffset: 4,
      fontWeight: route === l.k ? 700 : 500
    }
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "none",
      color: "#121619",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 14,
      cursor: "pointer"
    }
  }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Anunciar im\xF3vel"));
}

// ───────── Footer ─────────
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#121619",
      color: "#FFFFFF",
      padding: "56px 48px 32px",
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1232,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement(LoftLogo, {
    size: 32,
    color: "#FFFFFF"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter",
      fontSize: 14,
      lineHeight: "22px",
      color: "#A2A9B0",
      marginTop: 16,
      maxWidth: 240
    }
  }, "Um jeito novo de morar. Moradia pronta em S\xE3o Paulo e Rio de Janeiro.")), [{
    title: "Produtos",
    links: ["Comprar imóvel", "Alugar imóvel", "Financiamento", "Simulador"]
  }, {
    title: "Empresa",
    links: ["Sobre a Loft", "Carreiras", "Imprensa", "Blog"]
  }, {
    title: "Ajuda",
    links: ["Central de ajuda", "Fale com a Loft", "Termos", "Privacidade"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 13,
      color: "#FFFFFF",
      marginBottom: 14,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontFamily: "Inter",
      fontSize: 14,
      lineHeight: "28px",
      color: "#C1C7CD",
      cursor: "pointer"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1232,
      margin: "48px auto 0",
      paddingTop: 24,
      borderTop: "1px solid #343A3F",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Inter",
      fontSize: 12,
      color: "#697077"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Loft Holding S.A. \xB7 CNPJ 29.132.572/0001-98"), /*#__PURE__*/React.createElement("span", null, "S\xE3o Paulo \xB7 Rio de Janeiro")));
}

// ───────── Property Card ─────────
function PropertyCard({
  p,
  onClick
}) {
  const [hover, setHover] = _useState(false);
  const [fav, setFav] = _useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "#FFFFFF",
      borderRadius: 12,
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: hover ? "0 8px 24px -6px rgba(25,31,35,0.16)" : "0 2px 6px 0 rgba(25,31,35,0.08)",
      transition: "box-shadow 180ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: p.grad,
      position: "relative"
    }
  }, p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "dark"
  }, p.tag)), p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "orange"
  }, p.badge)), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setFav(!fav);
    },
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      width: 36,
      height: 36,
      borderRadius: 999,
      background: "rgba(255,255,255,0.92)",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: fav ? "#F56738" : "none",
    stroke: fav ? "#F56738" : "#121619",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "24px"
    }
  }, currency(p.price), p.discount && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 13,
      color: "#697077",
      textDecoration: "line-through",
      marginLeft: 8
    }
  }, currency(p.discount))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 14,
      lineHeight: "20px",
      color: "#697077",
      marginTop: 4
    }
  }, p.neigh, " \xB7 ", p.area, "m\xB2 \xB7 ", p.rooms, " ", p.rooms === 1 ? "quarto" : "quartos")));
}
Object.assign(window, {
  PHOTOS,
  currency,
  Header,
  Footer,
  PropertyCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/search.jsx
try { (() => {
// search.jsx — Search results with filter rail

const {
  useState: _useSt
} = React;
function FilterRail({
  filters,
  setFilters
}) {
  const toggle = (key, val) => {
    const cur = filters[key] || [];
    setFilters({
      ...filters,
      [key]: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val]
    });
  };
  const Section = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 0",
      borderBottom: "1px solid #E1E9EF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 14,
      color: "#121619",
      marginBottom: 12
    }
  }, title), children);
  const Check = ({
    k,
    v,
    label,
    count
  }) => {
    const on = (filters[k] || []).includes(v);
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => toggle(k, v),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        padding: "6px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        border: `1.5px solid ${on ? "#F56738" : "#C1C7CD"}`,
        background: on ? "#F56738" : "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#FFFFFF",
      strokeWidth: "4"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Inter",
        fontSize: 14,
        color: "#121619",
        flex: 1
      }
    }, label), count && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Inter",
        fontSize: 12,
        color: "#697077"
      }
    }, count));
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 260,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 16,
      color: "#121619"
    }
  }, "Filtros"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFilters({}),
    style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontFamily: "Inter",
      fontSize: 13,
      color: "#20A483",
      textDecoration: "underline",
      textDecorationStyle: "dashed",
      textUnderlineOffset: 3
    }
  }, "Limpar")), /*#__PURE__*/React.createElement(Section, {
    title: "Tipo"
  }, /*#__PURE__*/React.createElement(Check, {
    k: "type",
    v: "apt",
    label: "Apartamento",
    count: "1.243"
  }), /*#__PURE__*/React.createElement(Check, {
    k: "type",
    v: "casa",
    label: "Casa",
    count: "312"
  }), /*#__PURE__*/React.createElement(Check, {
    k: "type",
    v: "studio",
    label: "Studio",
    count: "188"
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Quartos"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [1, 2, 3, "4+"].map(n => {
    const on = (filters.rooms || []).includes(String(n));
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => toggle("rooms", String(n)),
      style: {
        flex: 1,
        padding: "8px 0",
        borderRadius: 6,
        border: `1px solid ${on ? "#121619" : "#E1E9EF"}`,
        background: on ? "#121619" : "#FFFFFF",
        color: on ? "#FFFFFF" : "#121619",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 14,
        cursor: "pointer"
      }
    }, n);
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Pre\xE7o"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "R$ m\xEDn"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "R$ m\xE1x"
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Caracter\xEDsticas"
  }, /*#__PURE__*/React.createElement(Check, {
    k: "feats",
    v: "pet",
    label: "Pet-friendly",
    count: "421"
  }), /*#__PURE__*/React.createElement(Check, {
    k: "feats",
    v: "var",
    label: "Com varanda",
    count: "687"
  }), /*#__PURE__*/React.createElement(Check, {
    k: "feats",
    v: "pool",
    label: "Piscina",
    count: "294"
  }), /*#__PURE__*/React.createElement(Check, {
    k: "feats",
    v: "gym",
    label: "Academia",
    count: "512"
  })));
}
function SearchScreen({
  goto
}) {
  const [filters, setFilters] = _useSt({
    rooms: ["2"]
  });
  const [sort, setSort] = _useSt("relevance");
  const activeChips = [{
    label: "Pinheiros",
    key: "neigh"
  }, ...(filters.rooms || []).map(r => ({
    label: `${r} ${r === "1" ? "quarto" : "quartos"}`,
    key: "rooms",
    val: r
  })), ...(filters.feats || []).map(f => ({
    label: {
      pet: "Pet-friendly",
      var: "Com varanda",
      pool: "Piscina",
      gym: "Academia"
    }[f],
    key: "feats",
    val: f
  }))];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    },
    onClick: () => goto("home")
  }, "Home"), " / ", /*#__PURE__*/React.createElement("span", null, "Comprar"), " / ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#121619"
    }
  }, "S\xE3o Paulo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "38px",
      letterSpacing: "-0.01em",
      color: "#121619"
    }
  }, "Apartamentos em S\xE3o Paulo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter",
      fontSize: 14,
      color: "#536470",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#121619"
    }
  }, "1.243 im\xF3veis"), " encontrados")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter",
      fontSize: 13,
      color: "#697077"
    }
  }, "Ordenar por"), /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: e => setSort(e.target.value),
    style: {
      padding: "8px 12px",
      border: "1px solid #E1E9EF",
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 14,
      color: "#121619",
      background: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "relevance"
  }, "Relev\xE2ncia"), /*#__PURE__*/React.createElement("option", {
    value: "price-asc"
  }, "Menor pre\xE7o"), /*#__PURE__*/React.createElement("option", {
    value: "price-desc"
  }, "Maior pre\xE7o"), /*#__PURE__*/React.createElement("option", {
    value: "area-desc"
  }, "Maior \xE1rea")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 24
    }
  }, activeChips.map((c, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i,
    active: true,
    closable: true,
    onClose: () => {
      if (c.key === "rooms") setFilters({
        ...filters,
        rooms: filters.rooms.filter(r => r !== c.val)
      });
      if (c.key === "feats") setFilters({
        ...filters,
        feats: (filters.feats || []).filter(r => r !== c.val)
      });
    }
  }, c.label)), /*#__PURE__*/React.createElement(Chip, {
    onClick: () => {}
  }, "+ adicionar filtro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(FilterRail, {
    filters: filters,
    setFilters: setFilters
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, PHOTOS.map(p => /*#__PURE__*/React.createElement(PropertyCard, {
    key: p.id,
    p: p,
    onClick: () => goto("detail", p)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      margin: "40px 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md"
  }, "Carregar mais"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      position: "sticky",
      top: 96,
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid #E1E9EF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320,
      position: "relative",
      background: "linear-gradient(135deg, #EDF6FC 0%, #D9E9F5 100%)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 320",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 80 L 240 120",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 80 320",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 180 0 L 160 320",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 200 L 240 180",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 260 L 240 280",
    stroke: "#C1C7CD",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "140",
    r: "36",
    fill: "#D1E8D9"
  }), [[70, 90], [140, 120], [90, 180], [170, 200], [110, 250], [180, 150]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "14",
    fill: "#F56738",
    stroke: "#FFFFFF",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + 4,
    fontFamily: "Inter",
    fontSize: "10",
    fontWeight: "700",
    fill: "#FFFFFF",
    textAnchor: "middle"
  }, i + 1)))), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 12,
      right: 12,
      padding: "10px",
      borderRadius: 8,
      border: "1px solid #121619",
      background: "#FFFFFF",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer"
    }
  }, "Abrir mapa"))))));
}
Object.assign(window, {
  SearchScreen,
  FilterRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/search.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transaction-app/app-root.jsx
try { (() => {
// app-root.jsx — orchestrator do UI kit Transaction app

const {
  useState: useStR,
  useEffect: useEfR
} = React;
function App() {
  const [route, setRoute] = useStR(() => {
    try {
      return localStorage.getItem("copan_tx_route") || "dashboard";
    } catch (e) {
      return "dashboard";
    }
  });
  useEfR(() => {
    try {
      localStorage.setItem("copan_tx_route", route);
    } catch (e) {}
    if (window.lucide) setTimeout(() => window.lucide.createIcons(), 60);
  }, [route]);
  const goto = r => setRoute(r);
  const titles = {
    dashboard: {
      t: "Sua transação",
      s: "Pinheiros · 62m² · Apto 142 · Proposta #2841",
      b: ["Início", "Transações", "Proposta #2841"]
    },
    proposal: {
      t: "Proposta",
      s: "Detalhes financeiros e termos negociados",
      b: ["Início", "Transações", "Proposta #2841", "Detalhes"]
    },
    documents: {
      t: "Documentos",
      s: "Envio e validação dos documentos da transação",
      b: ["Início", "Transações", "Proposta #2841", "Documentos"]
    },
    messages: {
      t: "Mensagens",
      s: "Converse com o time Loft que cuida da sua transação",
      b: ["Início", "Transações", "Proposta #2841", "Mensagens"]
    }
  };
  const cur = titles[route];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "#F2F4F8"
    },
    "data-screen-label": `tx-${route}`
  }, /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    goto: goto
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: cur.t,
    subtitle: cur.s,
    breadcrumbs: cur.b
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, route === "dashboard" && /*#__PURE__*/React.createElement(DashboardScreen, {
    goto: goto
  }), route === "proposal" && /*#__PURE__*/React.createElement(ProposalScreen, {
    goto: goto
  }), route === "documents" && /*#__PURE__*/React.createElement(DocumentsScreen, {
    goto: goto
  }), route === "messages" && /*#__PURE__*/React.createElement(MessagesScreen, {
    goto: goto
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transaction-app/app-root.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transaction-app/components.jsx
try { (() => {
// components.jsx — Copan UI kit · Transaction app
// Shared shell pieces. Heavier components are inlined in screen files.

const {
  useState: useStC,
  useEffect: useEfC
} = React;

// Loft logo
function LoftLogo({
  size = 24,
  color = "currentColor"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size * 72 / 61,
    height: size,
    viewBox: "0 0 72 61.411",
    fill: color,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40.159 61.411 L 46.651 61.411 L 46.651 29.139 L 55.847 29.139 L 57.688 22.676 L 46.651 22.676 L 46.651 13.787 C 46.651 9.749 49.951 6.463 54.007 6.463 L 54.007 0 C 46.371 0 40.159 6.185 40.159 13.787 L 40.159 22.676 L 36.885 22.676 C 35.432 16.927 30.196 12.658 23.976 12.658 C 16.638 12.658 10.667 18.601 10.667 25.908 C 10.667 33.214 16.638 39.157 23.976 39.157 C 30.196 39.157 35.432 34.888 36.885 29.139 L 40.159 29.139 L 40.159 61.411 Z M 67.456 22.676 L 72 22.676 L 72 29.139 L 67.456 29.139 L 67.456 50.419 L 60.963 50.419 L 60.963 14.225 L 67.456 14.225 L 67.456 22.676 Z M 23.976 18.475 C 19.86 18.475 16.51 21.809 16.51 25.908 C 16.51 30.006 19.86 33.34 23.976 33.34 C 28.093 33.34 31.442 30.006 31.442 25.908 C 31.442 21.809 28.093 18.475 23.976 18.475 Z M 0 32.097 C 0 41.961 8.061 49.986 17.968 49.986 L 17.968 43.523 C 11.64 43.523 6.492 38.397 6.492 32.097 L 6.492 14.224 L 0 14.224 L 0 32.097 Z",
    fillRule: "evenodd"
  }));
}
function Ico({
  name,
  size = 18,
  color = "currentColor",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      ...style
    }
  });
}

// ───────── Sidebar ─────────
function Sidebar({
  route,
  goto
}) {
  const items = [{
    id: "dashboard",
    label: "Dashboard",
    icon: "layout-dashboard"
  }, {
    id: "proposal",
    label: "Proposta",
    icon: "file-signature",
    badge: "5"
  }, {
    id: "documents",
    label: "Documentos",
    icon: "folder",
    badge: "2"
  }, {
    id: "messages",
    label: "Mensagens",
    icon: "message-square"
  }];
  const support = [{
    id: "contracts",
    label: "Contratos",
    icon: "scroll-text",
    disabled: true
  }, {
    id: "settings",
    label: "Configurações",
    icon: "settings-2",
    disabled: true
  }];
  const Item = ({
    it
  }) => {
    const active = route === it.id;
    return /*#__PURE__*/React.createElement("button", {
      disabled: it.disabled,
      onClick: () => !it.disabled && goto(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        borderRadius: 10,
        border: "none",
        background: active ? "#FFE5D6" : "transparent",
        color: active ? "#8A2606" : it.disabled ? "#A2A9B0" : "#121619",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        cursor: it.disabled ? "not-allowed" : "pointer",
        width: "100%",
        textAlign: "left",
        position: "relative"
      },
      onMouseEnter: e => {
        if (!active && !it.disabled) e.currentTarget.style.background = "#F2F4F8";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      name: it.icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        background: active ? "#F56738" : "#E1E9EF",
        color: active ? "#FFF" : "#121619",
        fontSize: 11,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 999
      }
    }, it.badge));
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      background: "#FFFFFF",
      borderRight: "1px solid #E1E9EF",
      display: "flex",
      flexDirection: "column",
      padding: "20px 14px",
      position: "sticky",
      top: 0,
      height: "100vh",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 6px 20px",
      borderBottom: "1px solid #E1E9EF",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(LoftLogo, {
    size: 26,
    color: "#121619"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#121619",
      lineHeight: "16px"
    }
  }, "Transa\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      lineHeight: "14px"
    }
  }, "Proposta #2841"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#878D96",
      padding: "20px 14px 8px"
    }
  }, "Suporte"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, support.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F2F4F8",
      borderRadius: 10,
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "#115644",
      color: "#FFF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700
    }
  }, "CT"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#121619",
      lineHeight: "16px"
    }
  }, "Carla Tavares"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      lineHeight: "14px"
    }
  }, "Sua especialista")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#F56738",
      color: "#FFF",
      border: "none",
      borderRadius: 6,
      width: 28,
      height: 28,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 14
  })))));
}

// ───────── Topbar ─────────
function Topbar({
  title,
  subtitle,
  breadcrumbs
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "#FFFFFF",
      borderBottom: "1px solid #E1E9EF",
      padding: "20px 32px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, breadcrumbs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "#697077",
      marginBottom: 4
    }
  }, breadcrumbs.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === breadcrumbs.length - 1 ? "#121619" : "#697077",
      fontWeight: i === breadcrumbs.length - 1 ? 600 : 400
    }
  }, b), i < breadcrumbs.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#C1C7CD"
    }
  }, "/")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "#121619",
      lineHeight: "28px"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#697077",
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar propostas, im\xF3veis\u2026",
    style: {
      width: 280,
      height: 40,
      padding: "0 14px 0 38px",
      border: "1px solid #C1C7CD",
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 14,
      color: "#121619",
      background: "#FAFBFC",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Ico, {
    name: "search",
    size: 16,
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      color: "#697077"
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#121619"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#F56738",
      border: "2px solid #FFF"
    }
  })));
}

// ───────── Stat card ─────────
function StatCard({
  label,
  value,
  delta,
  hint,
  icon,
  accent = "neutral"
}) {
  const accents = {
    neutral: {
      bg: "#F2F4F8",
      fg: "#121619"
    },
    orange: {
      bg: "#FFE5D6",
      fg: "#D94616"
    },
    green: {
      bg: "#DEF5E5",
      fg: "#115644"
    },
    blue: {
      bg: "#DDEEF8",
      fg: "#225C8A"
    },
    purple: {
      bg: "#EAF3F9",
      fg: "#1F4E73"
    }
  };
  const a = accents[accent];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#697077",
      letterSpacing: "0.02em"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: a.bg,
      color: a.fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: icon,
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: "#121619",
      lineHeight: "32px",
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      color: delta.startsWith("+") ? "#115644" : "#8F2828",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: delta.startsWith("+") ? "trending-up" : "trending-down",
    size: 12
  }), " ", delta), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#697077"
    }
  }, hint)));
}

// ───────── Status pill ─────────
function StatusPill({
  tone = "neutral",
  children,
  dot = true
}) {
  const tones = {
    positive: {
      bg: "#DEF5E5",
      fg: "#115644",
      dot: "#20A483"
    },
    attention: {
      bg: "#FFF4DF",
      fg: "#7A5200",
      dot: "#FFC04C"
    },
    negative: {
      bg: "#FDECEC",
      fg: "#8F2828",
      dot: "#CE4242"
    },
    info: {
      bg: "#EAF3F9",
      fg: "#1F4E73",
      dot: "#4B94C5"
    },
    pending: {
      bg: "#EAF3F9",
      fg: "#1F4E73",
      dot: "#4B94C5"
    },
    neutral: {
      bg: "#F2F4F8",
      fg: "#121619",
      dot: "#878D96"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: t.bg,
      color: t.fg,
      fontSize: 12,
      fontWeight: 600,
      padding: "3px 10px",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      lineHeight: "18px",
      whiteSpace: "nowrap"
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: t.dot
    }
  }), children);
}

// ───────── Stepper (vertical timeline) ─────────
function Stepper({
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, steps.map((s, i) => {
    const status = i < current ? "done" : i === current ? "active" : "pending";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 14,
        position: "relative",
        paddingBottom: i === steps.length - 1 ? 0 : 22
      }
    }, i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 13,
        top: 28,
        bottom: 0,
        width: 2,
        background: i < current ? "#20A483" : "#E1E9EF"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 999,
        flexShrink: 0,
        background: status === "done" ? "#20A483" : status === "active" ? "#FFF" : "#FFF",
        border: status === "active" ? "2px solid #F56738" : status === "pending" ? "2px solid #C1C7CD" : "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: status === "done" ? "#FFF" : status === "active" ? "#F56738" : "#878D96",
        fontSize: 12,
        fontWeight: 700,
        boxShadow: status === "active" ? "0 0 0 4px #FFE5D6" : "none"
      }
    }, status === "done" ? /*#__PURE__*/React.createElement(Ico, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: status === "active" ? 700 : 600,
        color: status === "pending" ? "#878D96" : "#121619",
        lineHeight: "18px"
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#697077",
        marginTop: 2,
        lineHeight: "18px"
      }
    }, s.desc), s.meta && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#878D96",
        marginTop: 4,
        fontVariantNumeric: "tabular-nums"
      }
    }, s.meta)));
  }));
}
Object.assign(window, {
  LoftLogo,
  Ico,
  Sidebar,
  Topbar,
  StatCard,
  StatusPill,
  Stepper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transaction-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transaction-app/dashboard.jsx
try { (() => {
// dashboard.jsx — visão geral da transação

const {
  useState: useStD
} = React;
function DashboardScreen({
  goto
}) {
  const steps = [{
    title: "Proposta enviada",
    desc: "Você fez uma proposta de R$ 1.245.000",
    meta: "14 abr · 09:32"
  }, {
    title: "Proposta aceita",
    desc: "O vendedor aceitou os termos da proposta",
    meta: "15 abr · 14:08"
  }, {
    title: "Análise de documentos",
    desc: "Estamos validando seus documentos pessoais e de renda",
    meta: "Em andamento"
  }, {
    title: "Vistoria técnica",
    desc: "Visita do engenheiro para laudo do imóvel",
    meta: "Aguardando"
  }, {
    title: "Análise jurídica",
    desc: "Verificação de matrícula e ônus do imóvel",
    meta: "Aguardando"
  }, {
    title: "Assinatura digital",
    desc: "Contrato de compra e venda no Gov.br",
    meta: "Aguardando"
  }, {
    title: "Registro em cartório",
    desc: "Loft envia ao cartório e acompanha o registro",
    meta: "Aguardando"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Etapa atual",
    value: "3 de 7",
    hint: "An\xE1lise de documentos",
    icon: "git-merge",
    accent: "orange"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Valor da proposta",
    value: "R$ 1.245.000",
    delta: "+2,1%",
    hint: "vs. avalia\xE7\xE3o",
    icon: "banknote",
    accent: "green"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Documentos pendentes",
    value: "2",
    hint: "prazo at\xE9 22 abr",
    icon: "file-text",
    accent: "blue"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Previs\xE3o de fechamento",
    value: "22 dias",
    hint: "estimativa Loft",
    icon: "calendar-clock",
    accent: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "#121619"
    }
  }, "Linha do tempo da transa\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#697077",
      marginTop: 2
    }
  }, "Pinheiros \xB7 62m\xB2 \xB7 2 quartos \xB7 1 vaga")), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "attention"
  }, "Documentos")), /*#__PURE__*/React.createElement(Stepper, {
    steps: steps,
    current: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF7F2",
      border: "1px solid #FFD9C7",
      borderRadius: 12,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "alert-circle",
    size: 18,
    color: "#D94616"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#8A2606"
    }
  }, "A\xE7\xE3o necess\xE1ria")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#121619",
      lineHeight: "22px",
      marginBottom: 14
    }
  }, "Voc\xEA tem ", /*#__PURE__*/React.createElement("strong", null, "2 documentos pendentes"), ". Envie at\xE9 ", /*#__PURE__*/React.createElement("strong", null, "22 abr"), " para n\xE3o atrasar a an\xE1lise."), /*#__PURE__*/React.createElement("button", {
    onClick: () => goto("documents"),
    style: {
      background: "#F56738",
      color: "#FFF",
      border: "none",
      height: 40,
      padding: "0 16px",
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "Enviar documentos ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#121619",
      marginBottom: 12
    }
  }, "Pr\xF3ximas atividades"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [{
    dot: "#E5A300",
    title: "Vistoria técnica",
    date: "23 abr · 10h",
    who: "Eng. Paulo R."
  }, {
    dot: "#4B94C5",
    title: "Análise jurídica",
    date: "26 abr",
    who: "Time Loft"
  }, {
    dot: "#387BA8",
    title: "Reunião com Carla",
    date: "29 abr · 15h",
    who: "Videochamada"
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: a.dot,
      marginTop: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#121619"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginTop: 2
    }
  }, a.date, " \xB7 ", a.who)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "#121619"
    }
  }, "Resumo financeiro"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "none",
      color: "#387BA8",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, "Ver detalhes ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-up-right",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      borderTop: "1px solid #E1E9EF",
      borderBottom: "1px solid #E1E9EF"
    }
  }, [{
    lbl: "Valor da compra",
    val: "R$ 1.245.000",
    note: ""
  }, {
    lbl: "Entrada (20%)",
    val: "R$ 249.000",
    note: "Já comprovada"
  }, {
    lbl: "Financiamento",
    val: "R$ 996.000",
    note: "Caixa · 360m"
  }, {
    lbl: "Custos de transação",
    val: "R$ 38.420",
    note: "ITBI + cartório"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "18px 20px",
      borderRight: i < 3 ? "1px solid #E1E9EF" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#697077",
      marginBottom: 6
    }
  }, r.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "#121619",
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "-0.01em"
    }
  }, r.val), r.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#878D96",
      marginTop: 4
    }
  }, r.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 16,
      padding: "16px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#697077"
    }
  }, "Total estimado da opera\xE7\xE3o"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "#D94616",
      fontVariantNumeric: "tabular-nums"
    }
  }, "R$ 1.283.420"))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transaction-app/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transaction-app/documents.jsx
try { (() => {
// documents.jsx — Lista de documentos da transação

const {
  useState: useStDoc
} = React;
function DocumentsScreen({
  goto
}) {
  const [filter, setFilter] = useStDoc("all");
  const docs = [{
    id: 1,
    name: "RG · Comprador",
    size: "1.2 MB",
    who: "Mariana Castro",
    date: "14 abr · 09:34",
    status: "approved",
    category: "pessoal",
    uploadPct: 100
  }, {
    id: 2,
    name: "CPF · Comprador",
    size: "0.8 MB",
    who: "Mariana Castro",
    date: "14 abr · 09:34",
    status: "approved",
    category: "pessoal",
    uploadPct: 100
  }, {
    id: 3,
    name: "Comprovante de residência",
    size: "2.4 MB",
    who: "Mariana Castro",
    date: "14 abr · 09:35",
    status: "approved",
    category: "pessoal",
    uploadPct: 100
  }, {
    id: 4,
    name: "Holerite · março/2026",
    size: "0.6 MB",
    who: "Mariana Castro",
    date: "14 abr · 09:36",
    status: "review",
    category: "renda",
    uploadPct: 100
  }, {
    id: 5,
    name: "Holerite · fevereiro/2026",
    size: "—",
    who: "—",
    date: "—",
    status: "missing",
    category: "renda"
  }, {
    id: 6,
    name: "Imposto de renda · 2025",
    size: "—",
    who: "—",
    date: "—",
    status: "missing",
    category: "renda"
  }, {
    id: 7,
    name: "Extrato bancário · últimos 90 dias",
    size: "3.8 MB",
    who: "Mariana Castro",
    date: "16 abr · 18:42",
    status: "uploading",
    category: "renda",
    uploadPct: 64
  }, {
    id: 8,
    name: "Matrícula atualizada",
    size: "1.1 MB",
    who: "Loft (vendedor)",
    date: "13 abr · 11:02",
    status: "approved",
    category: "imovel",
    uploadPct: 100
  }, {
    id: 9,
    name: "Certidão negativa de débitos · IPTU",
    size: "0.9 MB",
    who: "Loft (vendedor)",
    date: "13 abr · 11:04",
    status: "approved",
    category: "imovel",
    uploadPct: 100
  }, {
    id: 10,
    name: "Habite-se",
    size: "—",
    who: "—",
    date: "—",
    status: "rejected",
    category: "imovel",
    reason: "Documento ilegível. Reenviar em PDF colorido."
  }];
  const filtered = filter === "all" ? docs : docs.filter(d => d.status === filter || d.category === filter);
  const counts = {
    all: docs.length,
    missing: docs.filter(d => d.status === "missing" || d.status === "rejected").length,
    review: docs.filter(d => d.status === "review" || d.status === "uploading").length,
    approved: docs.filter(d => d.status === "approved").length
  };
  const sectionFor = cat => ({
    pessoal: "Documentos pessoais",
    renda: "Comprovação de renda",
    imovel: "Documentos do imóvel"
  })[cat];
  const grouped = filtered.reduce((acc, d) => {
    (acc[d.category] = acc[d.category] || []).push(d);
    return acc;
  }, {});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF7F2",
      border: "1px solid #FFD9C7",
      borderRadius: 12,
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: "#FFD9C7",
      color: "#D94616",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "alert-triangle",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#121619"
    }
  }, "3 documentos precisam da sua aten\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#697077",
      marginTop: 2
    }
  }, "2 est\xE3o pendentes de envio e 1 foi recusado. Prazo final: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#121619"
    }
  }, "22 abr 2026"), ".")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#FFF",
      color: "#121619",
      border: "1px solid #121619",
      height: 40,
      padding: "0 16px",
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Falar com Carla"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#F56738",
      color: "#FFF",
      border: "none",
      height: 40,
      padding: "0 16px",
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "upload",
    size: 14
  }), " Enviar agora")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid #E1E9EF",
      gap: 0
    }
  }, [{
    k: "all",
    l: "Todos",
    c: counts.all
  }, {
    k: "missing",
    l: "Pendentes",
    c: counts.missing
  }, {
    k: "review",
    l: "Em análise",
    c: counts.review
  }, {
    k: "approved",
    l: "Aprovados",
    c: counts.approved
  }].map(t => {
    const active = filter === t.k;
    return /*#__PURE__*/React.createElement("button", {
      key: t.k,
      onClick: () => setFilter(t.k),
      style: {
        padding: "12px 18px",
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        color: active ? "#121619" : "#697077",
        borderBottom: active ? "3px solid #F56738" : "3px solid transparent",
        marginBottom: -1,
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, t.l, /*#__PURE__*/React.createElement("span", {
      style: {
        background: active ? "#FFD9C7" : "#E1E9EF",
        color: active ? "#8B2D0B" : "#121619",
        fontSize: 11,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 999
      }
    }, t.c));
  })), ["pessoal", "renda", "imovel"].map(cat => grouped[cat] && /*#__PURE__*/React.createElement("section", {
    key: cat
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#697077",
      marginBottom: 10
    }
  }, sectionFor(cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, grouped[cat].map((d, i) => /*#__PURE__*/React.createElement(DocRow, {
    key: d.id,
    d: d,
    last: i === grouped[cat].length - 1
  }))))));
}
function DocRow({
  d,
  last
}) {
  const ICONS = {
    approved: {
      ic: "check-circle-2",
      color: "#20A483",
      bg: "#DEF5E5"
    },
    review: {
      ic: "clock",
      color: "#1F4E73",
      bg: "#EAF3F9"
    },
    uploading: {
      ic: "loader-2",
      color: "#4B94C5",
      bg: "#EAF3F9"
    },
    missing: {
      ic: "circle-dashed",
      color: "#878D96",
      bg: "#F2F4F8"
    },
    rejected: {
      ic: "x-circle",
      color: "#CE4242",
      bg: "#FDECEC"
    }
  };
  const meta = ICONS[d.status];
  const labels = {
    approved: "Aprovado",
    review: "Em análise",
    uploading: "Enviando…",
    missing: "Pendente",
    rejected: "Recusado"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: last ? "none" : "1px solid #F2F4F8",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: meta.bg,
      color: meta.color,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: d.status === "uploading" ? "loader-2" : "file-text",
    size: 18,
    style: d.status === "uploading" ? {
      animation: "spin 1s linear infinite"
    } : {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#121619"
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginTop: 2,
      display: "flex",
      gap: 10
    }
  }, d.size !== "—" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, d.size), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#C1C7CD"
    }
  }, "\xB7")), /*#__PURE__*/React.createElement("span", null, d.who), d.date !== "—" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#C1C7CD"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, d.date))), d.status === "uploading" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      height: 4,
      background: "#E1E9EF",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${d.uploadPct}%`,
      height: "100%",
      background: "#F56738",
      borderRadius: 999
    }
  })), d.status === "rejected" && d.reason && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: "6px 10px",
      background: "#FDECEC",
      borderRadius: 6,
      fontSize: 12,
      color: "#8F2828",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "info",
    size: 12
  }), " ", d.reason)), /*#__PURE__*/React.createElement(StatusPill, {
    tone: d.status === "approved" ? "positive" : d.status === "review" ? "pending" : d.status === "uploading" ? "info" : d.status === "rejected" ? "negative" : "neutral"
  }, labels[d.status]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, d.status === "missing" || d.status === "rejected" ? /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#F56738",
      color: "#FFF",
      border: "none",
      height: 32,
      padding: "0 14px",
      borderRadius: 6,
      fontFamily: "Inter",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "upload",
    size: 12
  }), " Enviar") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    title: "Ver",
    style: {
      width: 32,
      height: 32,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 6,
      cursor: "pointer",
      color: "#697077",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "eye",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    title: "Mais",
    style: {
      width: 32,
      height: 32,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 6,
      cursor: "pointer",
      color: "#697077",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "more-horizontal",
    size: 14
  })))));
}
window.DocumentsScreen = DocumentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transaction-app/documents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transaction-app/messages.jsx
try { (() => {
// messages.jsx — Conversa entre comprador e time Loft

const {
  useState: useStM,
  useRef: useRfM,
  useEffect: useEfM
} = React;
function MessagesScreen({
  goto
}) {
  const [active, setActive] = useStM("carla");
  const [draft, setDraft] = useStM("");
  const threads = [{
    id: "carla",
    name: "Carla Tavares",
    role: "Especialista de transação",
    initials: "CT",
    color: "#115644",
    last: "Recebi os documentos, vou validar agora.",
    at: "agora",
    unread: 0,
    online: true
  }, {
    id: "rafael",
    name: "Rafael Andrade",
    role: "Análise jurídica",
    initials: "RA",
    color: "#4B94C5",
    last: "Posso revisar a matrícula amanhã às 10h?",
    at: "13:42",
    unread: 2,
    online: true
  }, {
    id: "caixa",
    name: "João Mauro · Caixa",
    role: "Banco financiador",
    initials: "JM",
    color: "#225C8A",
    last: "Aprovação preliminar enviada por e-mail.",
    at: "ontem",
    unread: 0,
    online: false
  }, {
    id: "vistoria",
    name: "Eng. Paulo Reis",
    role: "Vistoria técnica",
    initials: "PR",
    color: "#D94616",
    last: "Confirmado para 23 abr às 10h.",
    at: "ontem",
    unread: 0,
    online: false
  }];
  const messages = [{
    kind: "system",
    text: "Conversa iniciada · Proposta #2841",
    at: "14 abr · 09:33"
  }, {
    from: "them",
    text: "Oi Mariana! Sou a Carla, vou te acompanhar em todo o processo de compra do apartamento em Pinheiros. Bem-vinda à Loft 🏡",
    at: "14 abr · 09:35"
  }, {
    from: "me",
    text: "Obrigada, Carla! Estou animada. Acabei de enviar os primeiros documentos.",
    at: "14 abr · 09:38",
    read: true
  }, {
    from: "them",
    text: "Recebido. Já comecei a validar. Posso te confirmar o prazo da próxima etapa por aqui ainda hoje.",
    at: "14 abr · 09:42"
  }, {
    kind: "card",
    at: "15 abr · 14:08",
    title: "Proposta aceita pelo vendedor",
    subtitle: "Loft Holding S.A. · R$ 1.245.000",
    icon: "handshake",
    color: "#D94616",
    bg: "#FFE5D6",
    action: "Ver proposta"
  }, {
    from: "them",
    text: "🎉 O vendedor aceitou! Agora precisamos dos documentos de comprovação de renda para liberar a próxima etapa. Veja a lista no painel.",
    at: "15 abr · 14:10"
  }, {
    from: "me",
    text: "Vou enviar até amanhã. Os holerites de fevereiro estão na minha empresa, peço hoje.",
    at: "15 abr · 16:55",
    read: true
  }, {
    from: "them",
    text: "Perfeito! Você tem até 22 abr para enviar todos. Qualquer dúvida me chama.",
    at: "15 abr · 16:58"
  }, {
    kind: "card",
    at: "16 abr · 18:42",
    title: "Documento enviado · Extrato bancário",
    subtitle: "3.8 MB · em análise",
    icon: "file-up",
    color: "#387BA8",
    bg: "#DDEEF8"
  }, {
    from: "them",
    text: "Recebi os documentos, vou validar agora.",
    at: "16 abr · 18:45"
  }];
  const scrollerRef = useRfM(null);
  useEfM(() => {
    if (scrollerRef.current) scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    if (window.lucide) setTimeout(() => window.lucide.createIcons(), 50);
  }, [active]);
  const sel = threads.find(t => t.id === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      height: "calc(100vh - 88px)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      height: "100%",
      display: "grid",
      gridTemplateColumns: "320px 1fr 280px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid #E1E9EF",
      display: "flex",
      flexDirection: "column",
      background: "#FAFBFC"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      borderBottom: "1px solid #E1E9EF",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#121619"
    }
  }, "Conversas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "#697077",
      background: "#E1E9EF",
      padding: "2px 8px",
      borderRadius: 999
    }
  }, threads.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px",
      borderBottom: "1px solid #E1E9EF",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar\u2026",
    style: {
      width: "100%",
      height: 36,
      padding: "0 12px 0 32px",
      border: "1px solid #E1E9EF",
      borderRadius: 6,
      fontFamily: "Inter",
      fontSize: 13,
      background: "#FFF",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Ico, {
    name: "search",
    size: 14,
    style: {
      position: "absolute",
      left: 22,
      top: 21,
      color: "#697077"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto"
    }
  }, threads.map(t => {
    const sel = active === t.id;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: () => setActive(t.id),
      style: {
        padding: "12px 16px",
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        cursor: "pointer",
        background: sel ? "#FFF" : "transparent",
        borderLeft: sel ? "3px solid #F56738" : "3px solid transparent",
        borderBottom: "1px solid #F2F4F8"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 999,
        background: t.color,
        color: "#FFF",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 700
      }
    }, t.initials), t.online && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 999,
        background: "#20A483",
        border: "2px solid #FFF"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "#121619",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#878D96",
        flexShrink: 0
      }
    }, t.at)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#697077"
      }
    }, t.role), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#697077",
        marginTop: 4,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t.last)), t.unread > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#F56738",
        color: "#FFF",
        fontSize: 10,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 999,
        alignSelf: "center"
      }
    }, t.unread));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px",
      borderBottom: "1px solid #E1E9EF",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: sel.color,
      color: "#FFF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700
    }
  }, sel.initials), sel.online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 12,
      height: 12,
      borderRadius: 999,
      background: "#20A483",
      border: "2px solid #FFF"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#121619"
    }
  }, sel.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: sel.online ? "#115644" : "#697077",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, sel.online && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#20A483"
    }
  }), sel.online ? `${sel.role} · online · responde em ~5min` : sel.role)), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 8,
      cursor: "pointer",
      color: "#121619",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 8,
      cursor: "pointer",
      color: "#121619",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "video",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 8,
      cursor: "pointer",
      color: "#697077",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "more-horizontal",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    ref: scrollerRef,
    style: {
      flex: 1,
      overflow: "auto",
      padding: "20px 24px",
      background: "#FAFBFC",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, messages.map((m, i) => {
    if (m.kind === "system") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          alignSelf: "center",
          fontSize: 11,
          color: "#878D96",
          background: "#E1E9EF",
          padding: "4px 12px",
          borderRadius: 999
        }
      }, m.text, " \xB7 ", m.at);
    }
    if (m.kind === "card") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          alignSelf: "center",
          maxWidth: "70%",
          background: "#FFF",
          border: "1px solid #E1E9EF",
          borderRadius: 10,
          padding: "12px 16px",
          display: "flex",
          gap: 12,
          alignItems: "center",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 36,
          height: 36,
          borderRadius: 8,
          background: m.bg,
          color: m.color,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        name: m.icon,
        size: 16
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          color: "#121619"
        }
      }, m.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "#697077",
          marginTop: 2
        }
      }, m.subtitle)), m.action && /*#__PURE__*/React.createElement("button", {
        style: {
          background: "transparent",
          border: "none",
          color: "#387BA8",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer"
        }
      }, m.action, " \u2192"));
    }
    const me = m.from === "me";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        alignSelf: me ? "flex-end" : "flex-start",
        maxWidth: "65%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: me ? "#121619" : "#FFF",
        color: me ? "#FFF" : "#121619",
        padding: "10px 14px",
        borderRadius: me ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
        fontSize: 14,
        lineHeight: "20px",
        border: me ? "none" : "1px solid #E1E9EF"
      }
    }, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#878D96",
        marginTop: 4,
        padding: me ? "0 4px 0 0" : "0 0 0 4px",
        textAlign: me ? "right" : "left",
        display: "flex",
        justifyContent: me ? "flex-end" : "flex-start",
        gap: 4,
        alignItems: "center"
      }
    }, m.at, me && m.read && /*#__PURE__*/React.createElement(Ico, {
      name: "check-check",
      size: 11,
      color: "#387BA8"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 24px",
      borderTop: "1px solid #E1E9EF",
      display: "flex",
      gap: 10,
      alignItems: "flex-end",
      background: "#FFF"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 8,
      cursor: "pointer",
      color: "#697077",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "paperclip",
    size: 16
  })), /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: "Escreva uma mensagem\u2026",
    rows: 1,
    style: {
      flex: 1,
      padding: "10px 14px",
      border: "1px solid #C1C7CD",
      borderRadius: 8,
      fontFamily: "Inter",
      fontSize: 14,
      lineHeight: "20px",
      color: "#121619",
      outline: "none",
      resize: "none",
      minHeight: 40,
      maxHeight: 120
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      border: "1px solid #E1E9EF",
      background: "#FFF",
      borderRadius: 8,
      cursor: "pointer",
      color: "#697077",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "smile",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    disabled: !draft.trim(),
    style: {
      width: 40,
      height: 40,
      border: "none",
      background: draft.trim() ? "#F56738" : "#C1C7CD",
      borderRadius: 8,
      cursor: draft.trim() ? "pointer" : "not-allowed",
      color: "#FFF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "send-horizontal",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid #E1E9EF",
      padding: 20,
      background: "#FAFBFC",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#697077",
      marginBottom: 10
    }
  }, "Sobre a transa\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 10,
      padding: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      marginBottom: 4
    }
  }, "Proposta #2841"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#121619",
      lineHeight: "18px"
    }
  }, "Pinheiros \xB7 62m\xB2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginTop: 2
    }
  }, "Rua Cardeal Arcoverde, 1200"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: "attention"
  }, "Documentos pendentes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#697077",
      marginBottom: 10
    }
  }, "Pr\xF3ximos prazos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 16
    }
  }, [{
    label: "Envio de documentos",
    date: "22 abr",
    urgent: true
  }, {
    label: "Vistoria técnica",
    date: "23 abr · 10h"
  }, {
    label: "Análise jurídica",
    date: "26 abr"
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 12px",
      background: d.urgent ? "#FFF7F2" : "#FFF",
      border: `1px solid ${d.urgent ? "#FFD9C7" : "#E1E9EF"}`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077"
    }
  }, d.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: d.urgent ? "#D94616" : "#121619"
    }
  }, d.date)), d.urgent && /*#__PURE__*/React.createElement(Ico, {
    name: "alert-circle",
    size: 14,
    color: "#D94616",
    style: {
      alignSelf: "center"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#697077",
      marginBottom: 10
    }
  }, "Arquivos compartilhados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, [{
    name: "Proposta-2841.pdf",
    size: "184 KB"
  }, {
    name: "Matricula-imovel.pdf",
    size: "1.1 MB"
  }, {
    name: "Simulacao-Caixa.pdf",
    size: "92 KB"
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 10px",
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 8,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      background: "#FDECEC",
      color: "#8F2828",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "file-text",
    size: 13
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#121619",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#878D96"
    }
  }, f.size)), /*#__PURE__*/React.createElement(Ico, {
    name: "download",
    size: 13,
    color: "#697077"
  })))))));
}
window.MessagesScreen = MessagesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transaction-app/messages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transaction-app/proposal.jsx
try { (() => {
// proposal.jsx — Detalhes da proposta + simulação

const {
  useState: useStP
} = React;
function ProposalScreen({
  goto
}) {
  const [tab, setTab] = useStP("overview");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "320px 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #FFE5D6 0%, #FFD9C7 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#D94616",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "80",
    height: "80",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22V12h6v10"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      background: "#121619",
      color: "#E4B266",
      fontSize: 11,
      fontWeight: 700,
      padding: "4px 10px",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "sparkles",
    size: 11
  }), " Loft premium")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#697077",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Proposta #2841 \xB7 Pinheiros"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "#121619",
      lineHeight: "28px"
    }
  }, "Rua Cardeal Arcoverde, 1200 \u2014 Apto 142"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#697077",
      marginTop: 4
    }
  }, "62m\xB2 \xB7 2 quartos \xB7 1 su\xEDte \xB7 1 vaga \xB7 Reformado pela Loft em 2024")), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "attention"
  }, "Aguardando documentos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      borderTop: "1px solid #E1E9EF",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      marginBottom: 2
    }
  }, "Valor proposto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#121619"
    }
  }, "R$ 1.245.000")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      marginBottom: 2
    }
  }, "Avalia\xE7\xE3o Loft"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#121619"
    }
  }, "R$ 1.219.000 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#115644",
      fontWeight: 600
    }
  }, "+2,1%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      marginBottom: 2
    }
  }, "Reservada em"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#121619"
    }
  }, "14 abr 2026")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077",
      marginBottom: 2
    }
  }, "Validade"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#D94616"
    }
  }, "22 abr 2026"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid #E1E9EF"
    }
  }, [{
    k: "overview",
    l: "Visão geral"
  }, {
    k: "financing",
    l: "Financiamento"
  }, {
    k: "people",
    l: "Compradores e vendedores"
  }, {
    k: "history",
    l: "Histórico"
  }].map(t => {
    const active = tab === t.k;
    return /*#__PURE__*/React.createElement("button", {
      key: t.k,
      onClick: () => setTab(t.k),
      style: {
        padding: "12px 18px",
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        color: active ? "#121619" : "#697077",
        borderBottom: active ? "3px solid #F56738" : "3px solid transparent",
        marginBottom: -1
      }
    }, t.l);
  })), tab === "overview" && /*#__PURE__*/React.createElement(OverviewTab, null), tab === "financing" && /*#__PURE__*/React.createElement(FinancingTab, null), tab === "people" && /*#__PURE__*/React.createElement(PeopleTab, null), tab === "history" && /*#__PURE__*/React.createElement(HistoryTab, null));
}
function OverviewTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#121619",
      marginBottom: 14
    }
  }, "Termos da proposta"), /*#__PURE__*/React.createElement(Row, {
    k: "Valor da proposta",
    v: "R$ 1.245.000"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Forma de pagamento",
    v: "Entrada + financiamento"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Entrada",
    v: "R$ 249.000 (20%)"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Sinal",
    v: "R$ 12.450 (1%)",
    sub: "Pago em 14 abr \xB7 transfer\xEAncia"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Prazo de fechamento",
    v: "At\xE9 60 dias"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Inclusos",
    v: "M\xF3veis planejados de cozinha e quartos"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Vistoria",
    v: "Solicitada \xB7 23 abr \xB7 10h",
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#121619",
      marginBottom: 14
    }
  }, "Custos de transa\xE7\xE3o"), /*#__PURE__*/React.createElement(Row, {
    k: "ITBI (3% do im\xF3vel)",
    v: "R$ 37.350"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Cart\xF3rio \xB7 escritura",
    v: "R$ 4.870"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Cart\xF3rio \xB7 registro",
    v: "R$ 6.180"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Avalia\xE7\xE3o do banco",
    v: "R$ 3.500",
    sub: "Caixa Econ\xF4mica"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Taxa Loft",
    v: "Isenta",
    sub: "Reforma inclu\xEDda",
    highlight: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "16px 0 0",
      borderTop: "2px solid #121619",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#121619"
    }
  }, "Total estimado"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#D94616",
      fontVariantNumeric: "tabular-nums"
    }
  }, "R$ 51.900"))));
}
function Row({
  k,
  v,
  sub,
  highlight,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 0",
      borderBottom: last ? "none" : "1px solid #F2F4F8",
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#697077"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: highlight ? "#115644" : "#121619"
    }
  }, v), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#878D96",
      marginTop: 2
    }
  }, sub)));
}
function FinancingTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#121619",
      marginBottom: 14
    }
  }, "Simula\xE7\xE3o Caixa"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F2F4F8",
      borderRadius: 8,
      padding: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginBottom: 4
    }
  }, "Parcela mensal estimada"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: "#121619",
      lineHeight: "36px",
      letterSpacing: "-0.01em"
    }
  }, "R$ 7.412"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginTop: 4
    }
  }, "SAC \xB7 360 meses \xB7 Taxa 9,99% a.a. + TR")), /*#__PURE__*/React.createElement(Row, {
    k: "Valor financiado",
    v: "R$ 996.000"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Taxa de juros",
    v: "9,99% a.a.",
    sub: "+ TR"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Sistema de amortiza\xE7\xE3o",
    v: "SAC"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Prazo",
    v: "360 meses"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Comprometimento de renda",
    v: "22%",
    sub: "Limite Caixa: 30%",
    highlight: true,
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#121619"
    }
  }, "Comparar bancos"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "none",
      color: "#387BA8",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Adicionar banco +")), [{
    bank: "Caixa",
    rate: "9,99%",
    parcel: "R$ 7.412",
    best: true
  }, {
    bank: "Itaú",
    rate: "10,49%",
    parcel: "R$ 7.728",
    best: false
  }, {
    bank: "Bradesco",
    rate: "10,89%",
    parcel: "R$ 7.984",
    best: false
  }, {
    bank: "Santander",
    rate: "11,29%",
    parcel: "R$ 8.245",
    best: false
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "12px 14px",
      marginBottom: 8,
      border: b.best ? "2px solid #20A483" : "1px solid #E1E9EF",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: b.best ? "#DEF5E5" : "#FFF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: "#FFF",
      border: "1px solid #E1E9EF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700,
      color: "#121619"
    }
  }, b.bank.substring(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#121619",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, b.bank, b.best && /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#115644",
      color: "#FFF",
      fontSize: 10,
      fontWeight: 700,
      padding: "2px 6px",
      borderRadius: 4,
      letterSpacing: "0.04em"
    }
  }, "MELHOR OP\xC7\xC3O")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077"
    }
  }, "Taxa ", b.rate, " a.a. \xB7 360m")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#697077"
    }
  }, "parcela"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#121619",
      fontVariantNumeric: "tabular-nums"
    }
  }, b.parcel))))));
}
function PeopleTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PeopleCard, {
    title: "Comprador",
    people: [{
      name: "Mariana Castro de Oliveira",
      role: "Titular · Engenheira de software",
      doc: "CPF 123.456.789-00",
      initials: "MC",
      color: "#387BA8"
    }]
  }), /*#__PURE__*/React.createElement(PeopleCard, {
    title: "Vendedor",
    people: [{
      name: "Loft Holding S.A.",
      role: "Vendedor · CNPJ 27.058.181/0001-70",
      doc: "Contato: Vendas · vendas@loft.com.br",
      initials: "LF",
      color: "#121619",
      company: true
    }]
  }), /*#__PURE__*/React.createElement(PeopleCard, {
    title: "Time Loft acompanhando voc\xEA",
    people: [{
      name: "Carla Tavares",
      role: "Especialista de transação",
      doc: "carla.t@loft.com.br · (11) 9 9282-1142",
      initials: "CT",
      color: "#115644"
    }, {
      name: "Rafael Andrade",
      role: "Análise jurídica",
      doc: "Disponível 9h–18h",
      initials: "RA",
      color: "#1F4E73"
    }]
  }), /*#__PURE__*/React.createElement(PeopleCard, {
    title: "Banco",
    people: [{
      name: "Caixa Econômica Federal",
      role: "Banco financiador · agência 0285",
      doc: "Gerente: João Mauro · (11) 3030-1102",
      initials: "CX",
      color: "#225C8A",
      company: true
    }]
  }));
}
function PeopleCard({
  title,
  people
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#697077",
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, people.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: p.company ? 8 : 999,
      background: p.color,
      color: "#FFF",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      flexShrink: 0
    }
  }, p.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#121619"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginTop: 2
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#878D96",
      marginTop: 4,
      fontFamily: "Monaco, monospace"
    }
  }, p.doc))))));
}
function HistoryTab() {
  const events = [{
    who: "Sistema Loft",
    what: "Documentos pendentes notificados",
    when: "16 abr · 18:42",
    icon: "bell",
    color: "#7A5200",
    bg: "#FFF4DF"
  }, {
    who: "Mariana Castro",
    what: "Enviou extrato bancário (3.8 MB)",
    when: "16 abr · 18:42",
    icon: "upload-cloud",
    color: "#1F4E73",
    bg: "#EAF3F9"
  }, {
    who: "Carla Tavares",
    what: "Validou documentos pessoais e renda parcial",
    when: "15 abr · 16:20",
    icon: "check-circle-2",
    color: "#115644",
    bg: "#DEF5E5"
  }, {
    who: "Loft Holding S.A.",
    what: "Aceitou a proposta no valor de R$ 1.245.000",
    when: "15 abr · 14:08",
    icon: "handshake",
    color: "#D94616",
    bg: "#FFE5D6"
  }, {
    who: "Mariana Castro",
    what: "Enviou proposta inicial · Pagamento sinal R$ 12.450",
    when: "14 abr · 09:32",
    icon: "file-signature",
    color: "#1F4E73",
    bg: "#EAF3F9"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFF",
      border: "1px solid #E1E9EF",
      borderRadius: 12,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "#121619"
    }
  }, "Hist\xF3rico de eventos"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "1px solid #C1C7CD",
      color: "#121619",
      height: 32,
      padding: "0 12px",
      borderRadius: 6,
      fontFamily: "Inter",
      fontSize: 13,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "download",
    size: 12
  }), " Exportar PDF")), events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      padding: "16px 0",
      borderBottom: i === events.length - 1 ? "none" : "1px solid #F2F4F8",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: e.bg,
      color: e.color,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: e.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#121619"
    }
  }, /*#__PURE__*/React.createElement("strong", null, e.who), " ", e.what), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#697077",
      marginTop: 2
    }
  }, e.when)))));
}
window.ProposalScreen = ProposalScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transaction-app/proposal.jsx", error: String((e && e.message) || e) }); }

})();
