webpackHotUpdate_N_E("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "D:\\du an\\jamstack-blog-nextjs\\pages\\product\\[slug].js",
    _s = $RefreshSig$();




function Home(_ref) {
  _s();

  var products = _ref.products;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoaing = _useState2[1];

  var slug = router.query.slug;
  console.log("data", data, "isLoading", isLoading);

  var fetchApi = /*#__PURE__*/function () {
    var _ref2 = Object(D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res, products;
      return D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoaing(true);
              _context.next = 3;
              return fetch("https://6321206282f8687273ad17ab.mockapi.io/test/products/".concat(slug));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              products = _context.sent;
              setData(products);
              setIsLoaing(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchApi() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (slug) {
      fetchApi();
    }
  }, [slug]);
  var Random = Math.random();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-32 text-7xl font-extrabold text-black",
      children: "No Seo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["S\u1ED1 ng\u1EABu nhi\xEAn : ", Random]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "Go Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "block text-9xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-800 bg-clip-text text-transparent",
      children: data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: data.avatar,
      alt: "Picture of the author",
      width: 200,
      height: 200
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
/**
 * Get all of the posts and pass it as the "posts" prop
 */

_s(Home, "AUb4/oPsX7bUpI8Y/oMC60QGFL0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9haW5nIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImZldGNoQXBpIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwidXNlRWZmZWN0IiwiUmFuZG9tIiwiTWF0aCIsInJhbmRvbSIsIm5hbWUiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVDLGtCQUdmQyxzREFBUSxDQUFDLEVBQUQsQ0FITztBQUFBLE1BR2hDQyxJQUhnQztBQUFBLE1BRzFCQyxPQUgwQjs7QUFBQSxtQkFJTkYsc0RBQVEsQ0FBQyxJQUFELENBSkY7QUFBQSxNQUloQ0csU0FKZ0M7QUFBQSxNQUlyQkMsV0FKcUI7O0FBQUEsTUFNL0JDLElBTitCLEdBTXRCUCxNQUFNLENBQUNRLEtBTmUsQ0FNL0JELElBTitCO0FBT3ZDRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CUCxJQUFwQixFQUEwQixXQUExQixFQUF1Q0UsU0FBdkM7O0FBRUEsTUFBTU0sUUFBUTtBQUFBLG1SQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiTCx5QkFBVyxDQUFDLElBQUQsQ0FBWDtBQURhO0FBQUEscUJBRUtNLEtBQUsscUVBQThETCxJQUE5RCxFQUZWOztBQUFBO0FBRVBNLGlCQUZPO0FBQUE7QUFBQSxxQkFHVUEsR0FBRyxDQUFDQyxJQUFKLEVBSFY7O0FBQUE7QUFHUGYsc0JBSE87QUFJYksscUJBQU8sQ0FBQ0wsUUFBRCxDQUFQO0FBQ0FPLHlCQUFXLENBQUMsS0FBRCxDQUFYOztBQUxhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJLLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFPQUkseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVIsSUFBSixFQUFVO0FBQ05JLGNBQVE7QUFDWDtBQUNKLEdBSlEsRUFJTixDQUFDSixJQUFELENBSk0sQ0FBVDtBQUtBLE1BQU1TLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEVBQWY7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFBLGtEQUFxQkYsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFTSTtBQUFJLGVBQVMsRUFBQyw2R0FBZDtBQUFBLGdCQUNLYixJQUFJLENBQUNnQjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQVlJO0FBQ0ksU0FBRyxFQUFFaEIsSUFBSSxDQUFDaUIsTUFEZDtBQUVJLFNBQUcsRUFBQyx1QkFGUjtBQUdJLFdBQUssRUFBRSxHQUhYO0FBSUksWUFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUEsa0JBREo7QUFxQkg7QUFFRDtBQUNBO0FBQ0E7O0dBL0N3QnRCLEk7VUFDTEcscUQ7OztLQURLSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLjQ0MzlmOWE1OTdlOTZlMDMyMmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9haW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEsIFwiaXNMb2FkaW5nXCIsIGlzTG9hZGluZylcclxuXHJcbiAgICBjb25zdCBmZXRjaEFwaSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWluZyh0cnVlKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovLzYzMjEyMDYyODJmODY4NzI3M2FkMTdhYi5tb2NrYXBpLmlvL3Rlc3QvcHJvZHVjdHMvJHtzbHVnfWApO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXREYXRhKHByb2R1Y3RzKTtcclxuICAgICAgICBzZXRJc0xvYWluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzbHVnKSB7XHJcbiAgICAgICAgICAgIGZldGNoQXBpKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NsdWddKVxyXG4gICAgY29uc3QgUmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTMyIHRleHQtN3hsIGZvbnQtZXh0cmFib2xkIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgIE5vIFNlb1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDM+U+G7kSBuZ+G6q3Ugbmhpw6puIDoge1JhbmRvbX08L2gzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+R28gSG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtOXhsIGZvbnQtZXh0cmFib2xkIGJnLWdyYWRpZW50LXRvLWJyIGZyb20taW5kaWdvLTYwMCB0by1wdXJwbGUtODAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2RhdGEuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYWxsIG9mIHRoZSBwb3N0cyBhbmQgcGFzcyBpdCBhcyB0aGUgXCJwb3N0c1wiIHByb3BcclxuICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=