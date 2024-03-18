"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/AboutMe.js":
/*!*******************************!*\
  !*** ./components/AboutMe.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/context */ \"(app-pages-browser)/./context/context.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar AboutMe = function() {\n    _s();\n    var aboutData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context).aboutData;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), userData = _useState[0], setUserData = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setUserData(data.user.about);\n        });\n    }, []);\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"iknow_tm_about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"left_inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/img/thumbs/35-44.jpg\",\n                                    alt: \"image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main\",\n                                    \"data-img-url\": userData.avatar.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"details\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: userData.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Mail\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"portfolio3@gmail.com\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Phone\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: userData.phoneNumber\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Address\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: userData.address\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"iknow_tm_main_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"About Me\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: userData.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bigger_text\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: userData.subTitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: userData.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ritwi\\\\Downloads\\\\iknow\\\\iknow\\\\components\\\\AboutMe.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(AboutMe, \"CL36RLZxuoyX5NJ+H7KAfohpGGQ=\");\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXRNZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdEO0FBQ1o7QUFFNUMsSUFBTUksVUFBVTs7SUFDZCxJQUFNLFlBQWdCSixpREFBVUEsQ0FBQ0cscURBQU9BLEVBQWhDRTtJQUNSLElBQWdDSCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBbENJLFdBQXlCSixjQUFmSyxjQUFlTDtJQUVoQ0QsZ0RBQVNBLENBQUM7UUFDUk8sTUFBTSx3RkFDSEMsSUFBSSxDQUFDQyxTQUFBQTttQkFBWUEsU0FBU0MsSUFBSTtXQUM5QkYsSUFBSSxDQUFDRyxTQUFBQTttQkFBUUwsWUFBWUssS0FBS0MsSUFBSSxDQUFDQyxLQUFLOztJQUM3QyxHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNSLFVBQVU7UUFDYixxQkFBTyw4REFBQ1M7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFJQyxLQUFJO29DQUF3QkMsS0FBSTs7Ozs7OzhDQUNyQyw4REFBQ0o7b0NBQUlDLFdBQVU7b0NBQU9JLGdCQUFjZCxTQUFTZSxNQUFNLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7OztzQ0FFekQsOERBQUNQOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDTzs7a0RBQ0MsOERBQUNDOzswREFDQyw4REFBQ0M7MERBQUc7Ozs7OzswREFDSiw4REFBQ0M7MERBQU1wQixTQUFTcUIsSUFBSTs7Ozs7Ozs7Ozs7O2tEQUV0Qiw4REFBQ0g7OzBEQUNDLDhEQUFDQzswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBSzs7Ozs7Ozs7Ozs7O2tEQUVSLDhEQUFDRjs7MERBQ0MsOERBQUNDOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFNcEIsU0FBU3NCLFdBQVc7Ozs7Ozs7Ozs7OztrREFFN0IsOERBQUNKOzswREFDQyw4REFBQ0M7MERBQUc7Ozs7OzswREFDSiw4REFBQ0M7MERBQU1wQixTQUFTdUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNakMsOERBQUNkO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDRDswQ0FBSW5CLFNBQVN3QixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRXJCLDhEQUFDZjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2U7c0NBQUd6QixTQUFTMEIsUUFBUTs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDakI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNlO3NDQUFHekIsU0FBUzJCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBMURNN0I7S0FBQUE7QUE0RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BYm91dE1lLmpzPzhkYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBBYm91dE1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWJvdXREYXRhIH0gPSB1c2VDb250ZXh0KGNvbnRleHQpO1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHNldFVzZXJEYXRhKGRhdGEudXNlci5hYm91dCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCF1c2VyRGF0YSkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlrbm93X3RtX2Fib3V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvdGh1bWJzLzM1LTQ0LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgZGF0YS1pbWctdXJsPXt1c2VyRGF0YS5hdmF0YXIudXJsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxoMz5OYW1lPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyRGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxoMz5NYWlsPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnBvcnRmb2xpbzNAZ21haWwuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBob25lPC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyRGF0YS5waG9uZU51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aDM+QWRkcmVzczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dXNlckRhdGEuYWRkcmVzc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWtub3dfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4+QWJvdXQgTWU8L3NwYW4+XHJcbiAgICAgICAgICA8aDM+e3VzZXJEYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdnZXJfdGV4dFwiPlxyXG4gICAgICAgICAgPHA+e3VzZXJEYXRhLnN1YlRpdGxlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDxwPnt1c2VyRGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250ZXh0IiwiQWJvdXRNZSIsImFib3V0RGF0YSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXNlciIsImFib3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiZGF0YS1pbWctdXJsIiwiYXZhdGFyIiwidXJsIiwidWwiLCJsaSIsImgzIiwic3BhbiIsIm5hbWUiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJ0aXRsZSIsInAiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AboutMe.js\n"));

/***/ })

});