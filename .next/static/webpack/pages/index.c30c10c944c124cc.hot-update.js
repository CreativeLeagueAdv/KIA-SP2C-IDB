"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/color-variants/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/color-variants/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ColorVariants; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.module.css */ \"./src/components/color-variants/styles/styles.module.css\");\n/* harmony import */ var _styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\nfunction ColorVariants() {\n    _s();\n    const [selectedColorImage, setSelectedColorImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Black\");\n    const colors = [\n        \"Blue\",\n        \"White\",\n        \"Green\",\n        \"Orange\",\n        \"Silver\",\n        \"Bronze\",\n        \"Black\",\n        \"Red\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"mainColor\",\n        className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorsMainContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: \"color\",\n                className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainImage),\n                width: 100,\n                height: 100,\n                src: \"/assets/car-colors/\".concat(selectedColorImage, \".png\")\n            }, void 0, false, {\n                fileName: \"/Users/ag/Documents/develop/KIA-SP2C-IDB/src/components/color-variants/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorBallContainer),\n                children: colors.map((color, index)=>// eslint-disable-next-line @next/next/no-img-element\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: \"100px\",\n                        height: \"100px\",\n                        alt: \"colorBall\",\n                        className: selectedColorImage == (_styles_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorBall),\n                        src: \"/assets/color-balls/\".concat(color, \".png\"),\n                        onClick: ()=>{\n                            setSelectedColorImage(color);\n                        }\n                    }, \"color-ball-\".concat(index), false, {\n                        fileName: \"/Users/ag/Documents/develop/KIA-SP2C-IDB/src/components/color-variants/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ag/Documents/develop/KIA-SP2C-IDB/src/components/color-variants/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ag/Documents/develop/KIA-SP2C-IDB/src/components/color-variants/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(ColorVariants, \"9Ry2Z8O7T/bjHi7PBqW8a3sTblk=\");\n_c = ColorVariants;\nvar _c;\n$RefreshReg$(_c, \"ColorVariants\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb2xvci12YXJpYW50cy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRDQUE0Qzs7QUFFWDtBQUNlO0FBRWpDLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdELE1BQU1LLFNBQVM7UUFDYjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztRQUFZQyxXQUFXUCxzRkFBMEI7OzBCQUN2RCw4REFBQ1M7Z0JBQ0NDLEtBQUk7Z0JBQ0pILFdBQVdQLDRFQUFnQjtnQkFDM0JZLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUssc0JBQXlDLE9BQW5CWixvQkFBbUI7Ozs7OzswQkFFaEQsOERBQUNHO2dCQUFJRSxXQUFXUCxxRkFBeUI7MEJBQ3RDSSxPQUFPWSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0MsUUFDbEIscURBQXFEO2tDQUNyRCw4REFBQ1Q7d0JBQ0NHLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JILEtBQUk7d0JBRUpILFdBQVdMLHNCQUFzQkYsNEVBQWdCO3dCQUNqRGMsS0FBSyx1QkFBNkIsT0FBTkcsT0FBTTt3QkFDbENHLFNBQVM7NEJBQ1BqQixzQkFBc0JjO3dCQUN4Qjt1QkFMSyxjQUFvQixPQUFOQzs7Ozs7Ozs7Ozs7Ozs7OztBQVcvQjtHQXZDd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb2xvci12YXJpYW50cy9pbmRleC50c3g/OWJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvclZhcmlhbnRzKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDb2xvckltYWdlLCBzZXRTZWxlY3RlZENvbG9ySW1hZ2VdID0gdXNlU3RhdGUoXCJCbGFja1wiKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIFwiQmx1ZVwiLFxuICAgIFwiV2hpdGVcIixcbiAgICBcIkdyZWVuXCIsXG4gICAgXCJPcmFuZ2VcIixcbiAgICBcIlNpbHZlclwiLFxuICAgIFwiQnJvbnplXCIsXG4gICAgXCJCbGFja1wiLFxuICAgIFwiUmVkXCIsXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nbWFpbkNvbG9yJyBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcnNNYWluQ29udGFpbmVyfT5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PSdjb2xvcidcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkltYWdlfVxuICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgc3JjPXtgL2Fzc2V0cy9jYXItY29sb3JzLyR7c2VsZWN0ZWRDb2xvckltYWdlfS5wbmdgfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JCYWxsQ29udGFpbmVyfT5cbiAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgd2lkdGg9e1wiMTAwcHhcIn1cbiAgICAgICAgICAgIGhlaWdodD17XCIxMDBweFwifVxuICAgICAgICAgICAgYWx0PSdjb2xvckJhbGwnXG4gICAgICAgICAgICBrZXk9e2Bjb2xvci1iYWxsLSR7aW5kZXh9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWRDb2xvckltYWdlPT0gIHN0eWxlcy5jb2xvckJhbGx9XG4gICAgICAgICAgICBzcmM9e2AvYXNzZXRzL2NvbG9yLWJhbGxzLyR7Y29sb3J9LnBuZ2B9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQ29sb3JJbWFnZShjb2xvcik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJDb2xvclZhcmlhbnRzIiwic2VsZWN0ZWRDb2xvckltYWdlIiwic2V0U2VsZWN0ZWRDb2xvckltYWdlIiwiY29sb3JzIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJjb2xvcnNNYWluQ29udGFpbmVyIiwiaW1nIiwiYWx0IiwibWFpbkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJjb2xvckJhbGxDb250YWluZXIiLCJtYXAiLCJjb2xvciIsImluZGV4IiwiY29sb3JCYWxsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/color-variants/index.tsx\n"));

/***/ })

});