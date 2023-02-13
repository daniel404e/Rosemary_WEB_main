"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 5489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Heading = ({
  first,
  second,
  third
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "text-center mt-10",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1", {
      className: "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white",
      children: [first, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        className: "text-primary",
        children: [" ", second]
      }), third]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ 3818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": () => (/* binding */ InputLabel),
/* harmony export */   "Cn": () => (/* binding */ InputSet),
/* harmony export */   "IK": () => (/* binding */ GrayText),
/* harmony export */   "IW": () => (/* binding */ BlueText),
/* harmony export */   "Lb": () => (/* binding */ FlexCenter),
/* harmony export */   "Mm": () => (/* binding */ SubmitButton),
/* harmony export */   "S8": () => (/* binding */ FlexColCenter),
/* harmony export */   "T": () => (/* binding */ Space)
/* harmony export */ });
/* unused harmony exports Text, HeaderText, SubHeaderText, LinkText, FlexColumn, BlackText, headingBook */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__Text",
  componentId: "sc-1qqmtue-0"
})({
  "width": "50%"
});
const HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__HeaderText",
  componentId: "sc-1qqmtue-1"
})({
  "width": "50%",
  "fontSize": "1.5rem",
  "lineHeight": "2rem",
  "fontWeight": "700",
  "--tw-text-opacity": "1",
  "color": "rgb(238 238 238 / var(--tw-text-opacity))"
});
const SubHeaderText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__SubHeaderText",
  componentId: "sc-1qqmtue-2"
})({
  "width": "50%",
  "--tw-text-opacity": "1",
  "color": "rgb(0 0 0 / var(--tw-text-opacity))"
});
const LinkText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__LinkText",
  componentId: "sc-1qqmtue-3"
})({
  "width": "50%",
  "--tw-text-opacity": "1",
  "color": "rgb(5 122 255 / var(--tw-text-opacity))"
});
const FlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__FlexColumn",
  componentId: "sc-1qqmtue-4"
})({
  "display": "flex",
  "flexDirection": "column"
});
const FlexColCenter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__FlexColCenter",
  componentId: "sc-1qqmtue-5"
})({
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center"
});
const FlexCenter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__FlexCenter",
  componentId: "sc-1qqmtue-6"
})({
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center"
});
const GrayText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "twin__GrayText",
  componentId: "sc-1qqmtue-7"
})({
  "marginTop": "1.25rem",
  "width": "66.666667%",
  "textAlign": "justify",
  "fontSize": "12px",
  "fontWeight": "700",
  "lineHeight": "1.625",
  "--tw-text-opacity": "1",
  "color": "rgb(136 136 136 / var(--tw-text-opacity))",
  "@media (min-width: 720px)": {
    "fontSize": "1rem",
    "lineHeight": "1.5rem"
  },
  "@media (min-width: 960px)": {
    "fontSize": "1.2rem"
  }
});
const BlackText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "twin__BlackText",
  componentId: "sc-1qqmtue-8"
})({
  "width": "66.666667%",
  "textAlign": "justify",
  "fontSize": "12px",
  "lineHeight": "1.625",
  "--tw-text-opacity": "1",
  "color": "rgb(0 0 0 / var(--tw-text-opacity))",
  "@media (min-width: 720px)": {
    "fontSize": "1rem",
    "lineHeight": "1.5rem"
  },
  "@media (min-width: 960px)": {
    "fontSize": "1.2rem"
  }
});
const headingBook = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "twin__headingBook",
  componentId: "sc-1qqmtue-9"
})({
  "display": "flex",
  "fontSize": "1.875rem",
  "lineHeight": "1.625",
  "fontWeight": "600",
  "--tw-text-opacity": "1",
  "color": "rgb(5 122 255 / var(--tw-text-opacity))"
});
const InputSet = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__InputSet",
  componentId: "sc-1qqmtue-10"
})({
  "marginBottom": "1.5rem",
  "width": "100%",
  "paddingLeft": "0.75rem",
  "paddingRight": "0.75rem",
  "paddingBottom": "1.5rem",
  "@media (min-width: 720px)": {
    "marginBottom": "0px"
  }
});
const InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "twin__InputLabel",
  componentId: "sc-1qqmtue-11"
})({
  "marginBottom": "0.5rem",
  "display": "block",
  "fontSize": "0.75rem",
  "lineHeight": "1rem",
  "fontWeight": "700",
  "textTransform": "uppercase",
  "letterSpacing": "0.025em",
  "--tw-text-opacity": "1",
  "color": "rgb(97 97 97 / var(--tw-text-opacity))"
});
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "twin__SubmitButton",
  componentId: "sc-1qqmtue-12"
})({
  "marginLeft": "0.75rem",
  "marginTop": "0.75rem",
  "display": "inline-flex",
  "width": "30%",
  "alignItems": "center",
  "borderRadius": "0.375rem",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "transparent",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(48 63 159 / var(--tw-bg-opacity))",
  "paddingLeft": "1.5rem",
  "paddingRight": "1.5rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "textAlign": "center",
  "fontSize": "1rem",
  "lineHeight": "1.5rem",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgb(253 248 245 / var(--tw-text-opacity))",
  "--tw-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
}); // create a new component for Space between two elements

const Space = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "twin__Space",
  componentId: "sc-1qqmtue-13"
})({
  "height": "2.5rem"
});
const BlueText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(GrayText).withConfig({
  displayName: "twin__BlueText",
  componentId: "sc-1qqmtue-14"
})({
  "--tw-text-opacity": "1",
  "color": "rgb(5 122 255 / var(--tw-text-opacity))"
});

/***/ })

};
;