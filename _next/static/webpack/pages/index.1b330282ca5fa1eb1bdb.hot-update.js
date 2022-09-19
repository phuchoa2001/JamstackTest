webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\du an\\jamstack-blog-nextjs\\pages\\index.js";

var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var products = _ref.products;
  var Random = Math.random();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-32 text-7xl font-extrabold text-black",
      children: "Xin ch\xE0o \u0111\u1EBFn v\u1EDBi blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["S\u1ED1 ng\u1EABu nhi\xEAn : ", Random]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "space-y-16",
      children: products.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/".concat(item.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              display: "block",
              color: "#000"
            },
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-32 text-7xl font-extrabold text-black",
      children: "Welcome To Our Blog Test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "space-y-16",
      children: products.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/product/".concat(item.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              display: "block",
              color: "#000"
            },
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
/**
 * Get all of the posts and pass it as the "posts" prop
 */

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3RzIiwiUmFuZG9tIiwiTWF0aCIsInJhbmRvbSIsIm1hcCIsIml0ZW0iLCJpZCIsImRpc3BsYXkiLCJjb2xvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxNQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFmO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSxrREFBcUJGLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLGdCQUNHRCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2hCLHFFQUFDLGdEQUFEO0FBQW9CLGNBQUksYUFBTUEsSUFBSSxDQUFDQyxFQUFYLENBQXhCO0FBQUEsaUNBQ0U7QUFBRyxpQkFBSyxFQUFFO0FBQUVDLHFCQUFPLEVBQUUsT0FBWDtBQUFvQkMsbUJBQUssRUFBRTtBQUEzQixhQUFWO0FBQUEsc0JBQWdESCxJQUFJLENBQUNJO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXSixJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFhRTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBZ0JFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSxnQkFDR04sUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLDRCQUNoQixxRUFBQyxnREFBRDtBQUFvQixjQUFJLHFCQUFjQSxJQUFJLENBQUNDLEVBQW5CLENBQXhCO0FBQUEsaUNBQ0U7QUFBRyxpQkFBSyxFQUFFO0FBQUVDLHFCQUFPLEVBQUUsT0FBWDtBQUFvQkMsbUJBQUssRUFBRTtBQUEzQixhQUFWO0FBQUEsc0JBQWdESCxJQUFJLENBQUNJO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXSixJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUEwQkQ7QUFFRDtBQUNBO0FBQ0E7O0tBaEN3QlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYjMzMDI4MmNhNWZhMWViMWJkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcclxuICBjb25zdCBSYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItMzIgdGV4dC03eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgIFhpbiBjaMOgbyDEkeG6v24gduG7m2kgYmxvZ1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDM+U+G7kSBuZ+G6q3Ugbmhpw6puIDoge1JhbmRvbX08L2gzPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTE2XCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gaHJlZj17YC8ke2l0ZW0uaWR9YH0gPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIGNvbG9yOiBcIiMwMDBcIiB9fT57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0zMiB0ZXh0LTd4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgV2VsY29tZSBUbyBPdXIgQmxvZyBUZXN0XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xNlwiPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2AvcHJvZHVjdC8ke2l0ZW0uaWR9YH0gPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIGNvbG9yOiBcIiMwMDBcIiB9fT57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBvZiB0aGUgcG9zdHMgYW5kIHBhc3MgaXQgYXMgdGhlIFwicG9zdHNcIiBwcm9wXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovLzYzMjEyMDYyODJmODY4NzI3M2FkMTdhYi5tb2NrYXBpLmlvL3Rlc3QvcHJvZHVjdHNcIik7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHByb2R1Y3RzIH0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9