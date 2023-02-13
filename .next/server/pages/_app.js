(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,761];
exports.modules = {

/***/ 1623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewAccordin)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@material-tailwind/react"
const react_namespaceObject = require("@material-tailwind/react");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Accordin/NewAccordin.tsx






function Icon({
  id,
  open
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: `${id === open ? 'rotate-180' : ''} h-3 w-3 transition-transform`,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19 9l-7 7-7-7"
    })
  });
}

function NewAccordin({
  list
}) {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  const router = (0,router_.useRouter)();

  const navigateTo = path => {
    router.push(path);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Accordion, {
      open: open === 1,
      icon: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        id: 1,
        open: open
      }),
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.AccordionHeader, {
        onClick: () => handleOpen(1),
        className: "text-md border-none py-0",
        children: list?.name
      }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.AccordionBody, {
        children: list && list?.list?.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            navigateTo(item.href);
          },
          className: "-m-2 gap-2 group flex  border-b-2 ml-2 py-3 p-2 text-sm font-medium text-gray-900 hover:text-gray-600 cursor-pointer",
          children: [/*#__PURE__*/jsx_runtime_.jsx(item.icon, {
            className: classNames(open ? 'text-gray-900' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-primary ')
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "group-hover:text-primary",
            children: item.name
          })]
        }, index))
      })]
    })
  });
}

/***/ }),

/***/ 1769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ NewFooter)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const NewFooter = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "relative mt-16 bg-secondary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "grid gap-16 row-gap-10 mb-8 lg:grid-cols-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "md:max-w-md lg:col-span-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            "aria-label": "Go home",
            title: "Company",
            className: "inline-flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              className: "w-8 text-primary",
              viewBox: "0 0 24 24",
              strokeLinejoin: "round",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              stroke: "currentColor",
              fill: "none",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
                x: "3",
                y: "1",
                width: "7",
                height: "12"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
                x: "3",
                y: "17",
                width: "7",
                height: "6"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
                x: "14",
                y: "1",
                width: "7",
                height: "6"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
                x: "14",
                y: "11",
                width: "7",
                height: "12"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
              className: "ml-2 text-xl font-bold tracking-wide text-primary uppercase",
              children: "About Us"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "mt-4 lg:max-w-sm",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "text-sm  text-white",
              children: "Established in 1981 Rosemary Institutions mark excellenceinall the realms of education. The Sprawling campus located in NGO New Colony, Perumalpuram is Uniquely placed intheheart of the city yet offers a serene environment for schooling. We are founded on the core competencies that are pertinent today and will be relevant for years to come. The Rosemary Education Network strives to create modern citizens who are equipped to take on challenges and primed to make global changes"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "font-semibold tracking-wide text-primary",
              children: "Admissions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              className: "mt-2 space-y-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: "/admission/application",
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: "Application Form"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: "/admission/enquiry",
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: "Enquiry Form"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: "/admission/schedule",
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: "Shedule a Visit"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "font-semibold tracking-wide text-primary",
              children: "Quick Links"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              className: "mt-2 space-y-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: "/about-us/philosophy",
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: "Our Philosophy"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: "/",
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: "Home"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: "/about-us/vision",
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: "Vision and Mission"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "font-semibold tracking-wide text-primary",
              children: "Contact Us"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              className: "mt-2 space-y-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  className: "transition-colors duration-300 text-sm text-white hover:text-sky-900",
                  children: "SR. No. 808/2, Issac Nagar, NGO New Colony, Perumalpuram post, Tirunelveli - 627007, Tamilnadu."
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "text-primary",
                children: ["Email:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: ["rmseoffice@gmail.com", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), "rosemaryschoolofexcellence@gmail.com"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "text-primary",
                children: ["Phone:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  className: "transition-colors duration-300 text-white hover:text-sky-900",
                  children: ["+0462 2901215,", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), "+0462 2915601,", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), "+0462 2915602"]
                })]
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
          className: "text-sm text-gray-100",
          children: "\xA9 Copyright 2022 Rosemary School Of Excellence. All rights reserved."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center mt-4 space-x-4 sm:mt-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
            className: "italic text-white",
            children: "Created by Anish Ali"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "https://www.github.com/anishali2",
            passHref: true,
            className: "transition-colors duration-300 text-white hover:text-sky-900",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
              className: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
                d: "M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.82 1.11.82 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.79 24 17.293 24 12c0-6.627-5.373-12-12-12"
              })
            })
          })]
        })]
      })]
    })
  });
};

/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactUsHeader)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function ContactUsHeader() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const navigateTo = path => {
    router.push(path);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "bg-indigo-600",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-wrap items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "md:flex w-0  flex-1 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex pb-2 md:pb-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "flex rounded-lg ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__.EnvelopeIcon, {
                className: "h-6 w-6 text-white",
                "aria-hidden": "true"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: "ml-1 truncate font-medium text-white",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: "inline",
                children: "rmseoffice@gmail.com"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex pt-4 md:pt-0 md:pl-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "flex rounded-lg ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__.PhoneIcon, {
                className: "h-6 w-6 text-white",
                "aria-hidden": "true"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "ml-1 truncate font-medium text-white",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: "inline",
                children: "+0462 2901215"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "block md:flex ",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "cursor-pointer order-3 mt-2 mb-1 md:mb-0 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              onClick: () => navigateTo('/admission/schedule'),
              className: " flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50",
              children: "Schedule a Visit"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "cursor-pointer order-3 md:ml-2 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              onClick: () => navigateTo('/about-us/payfees'),
              className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50",
              children: "Pay Fees"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
            type: "button",
            className: "-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "sr-only",
              children: "Dismiss"
            })
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 7008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Dropdown = ({
  list
}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Group, {
    as: "nav",
    className: "hidden space-x-10 md:flex",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      className: "relative",
      children: ({
        open
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
          className: classNames(open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-xs xl:text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2'),
          children: [list.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon, {
            className: classNames(open ? 'text-gray-900 rotate-180' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-900 transition-transform'),
            "aria-hidden": "true"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
          as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
            className: "absolute  z-50 -ml-4 mt-3 w-screen max-w-[300px] transform px-2 sm:px-0  lg:ml-0 lg:-translate-x-1/2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",
                children: list.list.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  href: item.href,
                  className: "-m-3 flex items-start group rounded-lg p-3 hover:bg-primary ",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(item.icon, {
                    className: "h-6 w-6 flex-shrink-0 text-indigo-600 group-hover:text-white",
                    "aria-hidden": "true"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "ml-4",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                      className: "text-base group-hover:text-white font-medium text-gray-900",
                      children: item.name
                    })
                  })]
                }, item.name))
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5605);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ContactUsHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(490);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7008);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Accordin_NewAccordin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1623);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _Dropdown__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _Dropdown__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const navigation = {
  categories: [{
    id: 'men',
    name: 'Mean',
    featured: [{
      name: 'New Arrivals',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
      imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.'
    }, {
      name: 'Artwork Tees',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
      imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.'
    }],
    sections: [{
      id: 'clothing',
      name: 'Clothing',
      items: []
    }, {
      id: 'accessories',
      name: 'Accessories',
      items: []
    }, {
      id: 'brands',
      name: 'Brands',
      items: []
    }]
  }],
  pages: [{
    name: 'Company',
    href: '#'
  }, {
    name: 'Stores',
    href: '#'
  }]
};
function Example() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const aboutusList = {
    name: 'About Us',
    list: [{
      name: 'Principals corner',
      href: '/about-us/principals',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.TrophyIcon
    }, {
      name: 'Philosophy',
      href: '/about-us/philosophy',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CubeTransparentIcon
    }, {
      name: 'Vision',
      href: '/about-us/vision',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.EyeIcon
    }]
  };
  const academicsList = {
    name: 'Academics',
    list: [{
      name: 'Academic team',
      href: '/academics/academic',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.BookmarkSquareIcon
    }, {
      name: 'Curriculum',
      href: '/academics/curriculum',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.DocumentMagnifyingGlassIcon
    }, {
      name: 'Spotlight',
      href: '/academics/spotlight',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ViewfinderCircleIcon
    }, {
      name: 'Books',
      href: '/academics/books',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.BookOpenIcon
    }, {
      name: 'KG-Corner',
      href: '/academics/kg-corner',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.UserPlusIcon
    }]
  };
  const admissionsList = {
    name: 'Admissions',
    list: [{
      name: 'Application',
      href: '/admission/application',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ClipboardDocumentIcon
    }, {
      name: 'Enquiry',
      href: '/admission/enquiry',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.MagnifyingGlassIcon
    }, {
      name: 'Schedule a Visit',
      href: '/admission/schedule',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.NewspaperIcon
    }]
  };
  const beyondList = {
    name: 'Beyond Academics',
    list: [{
      name: 'Sports',
      href: '/beyond-academics/sports',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.PuzzlePieceIcon
    }, {
      name: 'Students Clubs',
      href: '/beyond-academics/studentsclubs',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.RectangleGroupIcon
    }, {
      name: 'Student Senate',
      href: '/beyond-academics/studentssenate',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.TicketIcon
    }]
  }; // campus =  computer, library , math , science

  const campusList = {
    name: 'Campus',
    list: [{
      name: 'Computer Lab',
      href: '/campus/computer',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ComputerDesktopIcon
    }, {
      name: 'Library',
      href: '/campus/library',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.BuildingLibraryIcon
    }, {
      name: 'Math Lab',
      href: '/campus/math',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CogIcon
    }, {
      name: 'Science Lab',
      href: '/campus/science',
      icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.WifiIcon
    }]
  }; // create a type interface for aboutusList

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "bg-white",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Root, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        as: "div",
        className: "relative z-40 lg:hidden",
        onClose: setOpen,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
          as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          enter: "transition-opacity ease-linear duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-linear duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-25"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "fixed inset-0 z-40 flex ",
          style: {
            justifyContent: 'right'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "transition ease-in-out duration-300 transform",
            enterFrom: "translate-x-full",
            enterTo: "translate-x-0",
            leave: "transition ease-in-out duration-300 transform",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {
              className: "relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "flex px-4 pt-5 pb-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                  type: "button",
                  className: "-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",
                  onClick: () => setOpen(false),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: "sr-only",
                    children: "Close menu"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.XMarkIcon, {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
                as: "div",
                className: "mt-2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                  className: "border-b border-gray-200",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
                    className: "-mb-px flex space-x-8 px-4"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "space-y-6 border-t border-gray-200 py-3 px-4",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accordin_NewAccordin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  list: aboutusList
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "space-y-6 border-t border-gray-200 py-3 px-4",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accordin_NewAccordin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  list: academicsList
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "space-y-6 border-t border-gray-200 py-3 px-4",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accordin_NewAccordin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  list: admissionsList
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "space-y-6 border-t border-gray-200 py-3 px-4",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accordin_NewAccordin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  list: beyondList
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "space-y-6 border-t border-gray-200 py-3 px-4",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accordin_NewAccordin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  list: campusList
                })
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("header", {
      className: "relative bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ContactUsHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("nav", {
        "aria-label": "Top",
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "border-b border-gray-200",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex h-16 items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "ml-4 flex lg:ml-0 mt-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "sr-only",
                  children: "Your Company"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                  height: 50,
                  onClick: () => navigate.push('/'),
                  width: 140,
                  src: _images_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                  alt: ""
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Group, {
              className: "hidden lg:ml-8 lg:block lg:self-stretch",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "flex h-full space-x-8",
                children: navigation.categories.map(category => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                  className: "flex",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                      enter: "transition ease-out duration-200",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "transition ease-in duration-150",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                        className: "absolute inset-x-0 top-full text-sm text-gray-500",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                          className: "absolute inset-0 top-1/2 bg-white shadow",
                          "aria-hidden": "true"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                          className: "relative bg-white",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                            className: "mx-auto max-w-7xl px-8",
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                              className: "grid grid-cols-2 gap-y-10 gap-x-8 py-16",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                                className: "col-start-2 grid grid-cols-2 gap-x-8",
                                children: category.featured.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                                  className: "group relative text-base sm:text-sm",
                                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                                    className: "aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75",
                                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("img", {
                                      src: item.imageSrc,
                                      alt: item.imageAlt,
                                      className: "object-cover object-center"
                                    })
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                                    href: item.href,
                                    className: "mt-6 block font-medium text-gray-900",
                                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                                      className: "absolute inset-0 z-10",
                                      "aria-hidden": "true"
                                    }), item.name]
                                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
                                    "aria-hidden": "true",
                                    className: "mt-1",
                                    children: "Shop now"
                                  })]
                                }, item.name))
                              })
                            })
                          })
                        })]
                      })
                    })
                  })
                }, category.name))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "ml-auto flex items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  href: "#",
                  className: "text-sm font-medium text-gray-700 hover:text-gray-800",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    list: academicsList
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "h-6 w-px bg-gray-200",
                  "aria-hidden": "true"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  href: "#",
                  className: "text-sm font-medium text-gray-700 hover:text-gray-800",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    list: admissionsList
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "h-6 w-px bg-gray-200",
                  "aria-hidden": "true"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  href: "#",
                  className: "text-sm font-medium text-gray-700 hover:text-gray-800",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    list: beyondList
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "h-6 w-px bg-gray-200",
                  "aria-hidden": "true"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  href: "#",
                  className: "text-sm font-medium text-gray-700 hover:text-gray-800",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    list: campusList
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "h-6 w-px bg-gray-200",
                  "aria-hidden": "true"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                  href: "#",
                  className: "text-sm font-medium text-gray-700 hover:text-gray-800",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    list: aboutusList
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "ml-4 flow-root lg:ml-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                  type: "button",
                  className: "rounded-md border  bg-white p-2 text-gray-400 lg:hidden",
                  onClick: () => setOpen(true),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: "sr-only",
                    children: "Open menu"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.QueueListIcon, {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  })]
                })
              })]
            })]
          })
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_HeaderDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2068);
/* harmony import */ var _components_Footer_NewFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1769);
/* harmony import */ var _pages_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8507);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_HeaderDemo__WEBPACK_IMPORTED_MODULE_5__]);
_components_Header_HeaderDemo__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function App({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    aos__WEBPACK_IMPORTED_MODULE_2___default().init();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_pages_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Header_HeaderDemo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Footer_NewFooter__WEBPACK_IMPORTED_MODULE_6__/* .NewFooter */ .U, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.41237e97.png","height":112,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGNcvGDhNFYObv2IiJB+S/sYMyaG/z8YGRlZ//1n+M3KzPCUceqkyS3/mTiMOR6lVnOKBuv/+PH7BSMjE+d/BiY2bo6/HwEKIhgTJLxIPAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 2135:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,693,507], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();