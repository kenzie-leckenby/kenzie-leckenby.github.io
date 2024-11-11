var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var ReactDOMServer = __toESM(require("react-dom/server")), import_react = require("@remix-run/react");

// app/src/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/src/theme.ts
var import_styles = require("@mui/material/styles"), import_colors = require("@mui/material/colors"), darkTheme = (0, import_styles.createTheme)({
  cssVariables: !0,
  palette: {
    mode: "dark",
    background: {
      default: "#1b1c27",
      paper: "#2b2c38"
    },
    divider: "#494a55",
    text: {
      primary: "#fef9ec"
    },
    primary: {
      main: "#8aa96a",
      contrastText: "#141521"
    },
    secondary: {
      main: "#53ae9d",
      contrastText: "#141521"
    },
    error: {
      main: import_colors.red.A400
    }
  },
  typography: {
    fontFamily: '"Petrona", serif'
  }
}), theme_default = darkTheme;

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_styles2 = require("@mui/material/styles"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  function MuiRemixServer() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_styles2.ThemeProvider, { theme: theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_CssBaseline.default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
    ] }) });
  }
  let html = ReactDOMServer.renderToString(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MuiRemixServer, {})), { styles } = extractCriticalToChunks(html), stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    let newStyleTag = `<style data-emotion="${`${key} ${ids.join(" ")}`}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  let markup = html.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
var React3 = __toESM(require("react")), import_react3 = require("@remix-run/react"), import_react4 = require("@emotion/react"), import_material2 = require("@mui/material");

// app/src/ClientStyleContext.tsx
var React = __toESM(require("react")), ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/src/Layout.tsx
var import_Container2 = __toESM(require("@mui/material/Container"));

// app/src/appBar.tsx
var React2 = __toESM(require("react")), import_react_router_dom = require("react-router-dom"), import_AppBar = __toESM(require("@mui/material/AppBar")), import_Toolbar = __toESM(require("@mui/material/Toolbar")), import_Typography = __toESM(require("@mui/material/Typography")), import_Container = __toESM(require("@mui/material/Container")), import_material = require("@mui/material"), import_KeyboardArrowDown = __toESM(require("@mui/icons-material/KeyboardArrowDown"));
var import_jsx_runtime2 = require("react/jsx-runtime");
function WebsiteIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.SvgIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 24H0V0H12L5.73913 12.2553L12 24Z", fill: "#8AA96A" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 24V0L24 24H12Z", fill: "#C2D7AD" })
      ]
    }
  ) });
}
var menuItems = [
  { name: "Blog", link: "/blog" },
  { name: "Projects", link: "/projects" }
];
function MenuSpeedDial() {
  let navigate = (0, import_react_router_dom.useNavigate)(), buttonRef = React2.useRef(null), [anchorEl, setAnchorEl] = React2.useState(null), [buttonWidth, setButtonWidth] = React2.useState(0);
  React2.useEffect(() => {
    buttonRef.current && setButtonWidth(buttonRef.current.offsetWidth);
  }, []);
  let handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }, handleClose = () => {
    setAnchorEl(null);
  }, handleMenuItemClick = (link, name) => {
    navigate(link), handleClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material.Button,
      {
        ref: buttonRef,
        sx: {
          borderRadius: "8px",
          // Rounded corners
          paddingTop: 0.1,
          paddingBottom: 0.1,
          paddingLeft: 1.5,
          paddingRight: 1.5,
          border: `1px solid ${theme_default.palette.divider}`,
          color: "#fef9ec",
          // Text color
          fontWeight: "bold",
          textTransform: "none"
        },
        onClick: handleClick,
        endIcon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_KeyboardArrowDown.default, {}),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_Typography.default, { variant: "h6", children: "Navigate" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material.Menu,
      {
        anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        slotProps: {
          paper: {
            style: {
              width: buttonWidth,
              backgroundColor: theme_default.palette.background.paper
            }
          }
        },
        children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_material.MenuItem,
          {
            onClick: () => handleMenuItemClick(item.link, item.name),
            children: item.name
          },
          item.name
        ))
      }
    )
  ] });
}
function ResponsiveAppBar() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_AppBar.default, { position: "static", color: "transparent", sx: {
    borderBottom: `1px solid ${theme_default.palette.divider}`,
    boxShadow: "none"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_Container.default, { maxWidth: "xl", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_Toolbar.default, { disableGutters: !0, sx: { display: "flex", justifyContent: "space-between", width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WebsiteIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_Typography.default,
        {
          variant: "h5",
          noWrap: !0,
          component: "a",
          href: "/",
          sx: {
            ml: 2,
            mr: 2,
            display: "flex",
            fontWeight: 500,
            color: "inherit",
            textDecoration: "none"
          },
          children: "Kenzie Leckenby"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuSpeedDial, {})
  ] }) }) });
}
var appBar_default = ResponsiveAppBar;

// app/src/Layout.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_Container2.default, { maxWidth: !1, disableGutters: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(appBar_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_Container2.default, { maxWidth: "xl", sx: {
      marginTop: "8px"
    }, children })
  ] });
}

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Document = (0, import_react4.withEmotionCache)(({ children, title }, emotionCache) => {
  let clientStyleData = React3.useContext(ClientStyleContext_default);
  return (0, import_material2.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    let tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush(), tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    }), clientStyleData.reset();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "theme-color", content: theme_default.palette.primary.main }),
      title ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("title", { children: title }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Petrona:ital,wght@0,100..900;1,100..900&display=swap"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "emotion-insertion-point", content: "emotion-insertion-point" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Outlet, {}) }) });
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)();
  if ((0, import_react3.isRouteErrorResponse)(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." });
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." });
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }),
      message
    ] }) });
  }
  return error instanceof Error ? (console.error(error), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "There was an error" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: error.message }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Hey, developer, you should replace this with what you want your users to see." })
  ] }) }) })) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { children: "Unknown Error" });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var React4 = __toESM(require("react")), import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material3 = require("@mui/material"), import_jsx_runtime5 = require("react/jsx-runtime"), meta = () => [
  { title: "Kenzie Leckenby" },
  { name: "My own personal website for all my doodads", content: "Welcome to my site!" }
];
function InterestBuffet() {
  let interests = ["graphics enthusiast", "hobby bookbinder", "college student", "game modder", "rocket nerd"], [currentInterest, setCurrentInterest] = React4.useState(""), [isDeleting, setIsDeleting] = React4.useState(!1), [loopIndex, setLoopIndex] = React4.useState(0), [charIndex, setCharIndex] = React4.useState(0);
  return React4.useEffect(() => {
    let currentWord = interests[loopIndex % interests.length], typingTimeout;
    return !isDeleting && charIndex < currentWord.length ? typingTimeout = setTimeout(() => {
      setCurrentInterest((prev) => prev + currentWord[charIndex]), setCharIndex((prev) => prev + 1);
    }, 100) : isDeleting && charIndex > 0 ? typingTimeout = setTimeout(() => {
      setCurrentInterest((prev) => prev.slice(0, -1)), setCharIndex((prev) => prev - 1);
    }, 50) : charIndex === currentWord.length && !isDeleting ? typingTimeout = setTimeout(() => setIsDeleting(!0), 5e3) : isDeleting && charIndex === 0 && (setIsDeleting(!1), setLoopIndex((prev) => prev + 1)), () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, loopIndex, interests]), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Typography2.default, { sx: {
    color: "transparent",
    fontSize: "inherit",
    fontWeight: "inherit",
    backgroundImage: `linear-gradient(.25turn, ${theme_default.palette.primary.main}, ${theme_default.palette.secondary.main})`,
    WebkitBackgroundClip: "text",
    "& .blinking-cursor": {
      color: theme_default.palette.text.primary,
      animation: "blink 1s step-end infinite"
    },
    "@keyframes blink": {
      "0%": { opacity: 1 },
      "50%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "A " }),
    currentInterest,
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "blinking-cursor", children: "|" })
  ] });
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(React4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material3.Container, { disableGutters: !0, maxWidth: "xl", sx: {
      display: { xs: "none", sm: "none", md: "flex" },
      justifyContent: "space-between",
      pb: 3,
      mb: 4,
      mt: 16,
      borderBottom: `2px solid ${theme_default.palette.divider}`
    }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Typography2.default, { variant: "h2", component: "h1", sx: {
      fontWeight: 500
    }, children: [
      "Hello World! ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
      "I'm Kenzie Leckenby ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InterestBuffet, {})
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Typography2.default, { variant: "h4", sx: {
      display: { xs: "none", sm: "none", md: "flex" }
    }, children: "I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality. Who is finally giving some love to their poor website which has been negelected since I first learned html and css." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material3.Container, { disableGutters: !0, maxWidth: "xl", sx: {
      display: { xs: "none", sm: "flex", md: "none" },
      justifyContent: "space-between",
      pb: 2,
      mb: 3,
      mt: 12,
      borderBottom: `2px solid ${theme_default.palette.divider}`
    }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Typography2.default, { variant: "h3", component: "h1", sx: {
      fontWeight: 500
    }, children: [
      "Hello World! ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
      "I'm Kenzie Leckenby ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InterestBuffet, {})
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Typography2.default, { variant: "h5", sx: {
      display: { xs: "none", sm: "flex", md: "none" }
    }, children: "I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality. Who is finally giving some love to their poor website which has been negelected since I first learned html and css." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material3.Container, { disableGutters: !0, maxWidth: "xl", sx: {
      display: { xs: "flex", sm: "none", md: "none" },
      justifyContent: "space-between",
      pb: 1,
      mb: 2,
      mt: 8,
      borderBottom: `2px solid ${theme_default.palette.divider}`
    }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_Typography2.default, { variant: "h4", component: "h1", sx: {
      fontWeight: 500
    }, children: [
      "Hello World! ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
      "I'm Kenzie Leckenby ",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InterestBuffet, {})
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_Typography2.default, { variant: "h6", sx: {
      display: { xs: "flex", sm: "none", md: "none" }
    }, children: "I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality. Who is finally giving some love to their poor website which has been negelected since I first learned html and css." })
  ] });
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => About
});
var React5 = __toESM(require("react")), import_Typography3 = __toESM(require("@mui/material/Typography")), import_jsx_runtime6 = require("react/jsx-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(React5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_Typography3.default, { variant: "h2", component: "h1", sx: { mt: 2, fontWeight: 500 }, children: "Welcome to my blog!" }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/entry.client-7PCETNM3.js", imports: ["https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/_shared/chunk-ZZ6EV5VN.js", "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/_shared/chunk-DZPNVYDZ.js", "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/_shared/chunk-CUCN6HED.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/root-2HHEUA6G.js", imports: ["https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/_shared/chunk-W4DDDOJV.js", "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/_shared/chunk-RE42O6H7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/routes/_index-SWY35475.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/routes/blog-ENCJRGIQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "5a414327", hmr: void 0, url: "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/manifest-5A414327.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1, unstable_routeConfig: !1 }, publicPath = "https://github.com/kenzie-leckenby/kenzie-leckenby.github.io/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
