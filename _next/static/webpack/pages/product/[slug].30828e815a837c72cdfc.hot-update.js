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

  var slug = router.query.slug;
  console.log("data", data);

  var fetchApi = /*#__PURE__*/function () {
    var _ref2 = Object(D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res, products;
      return D_du_an_jamstack_blog_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://6321206282f8687273ad17ab.mockapi.io/test/products/".concat(slug));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              products = _context.sent;
              setData(products);

            case 7:
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
      children: "Welcome To Our Blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["S\u1ED1 ng\u1EABu nhi\xEAn : ", Random]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
/**
 * Get all of the posts and pass it as the "posts" prop
 */

_s(Home, "LRVCm0MyF6mUS6v6gclOrtiG+1c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNsdWciLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaEFwaSIsImZldGNoIiwicmVzIiwianNvbiIsInVzZUVmZmVjdCIsIlJhbmRvbSIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVDLGtCQUdmQyxzREFBUSxDQUFDLEVBQUQsQ0FITztBQUFBLE1BR2hDQyxJQUhnQztBQUFBLE1BRzFCQyxPQUgwQjs7QUFBQSxNQUsvQkMsSUFMK0IsR0FLdEJMLE1BQU0sQ0FBQ00sS0FMZSxDQUsvQkQsSUFMK0I7QUFNdkNFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JMLElBQXBCOztBQUVBLE1BQU1NLFFBQVE7QUFBQSxtUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNLQyxLQUFLLHFFQUE4REwsSUFBOUQsRUFEVjs7QUFBQTtBQUNQTSxpQkFETztBQUFBO0FBQUEscUJBRVVBLEdBQUcsQ0FBQ0MsSUFBSixFQUZWOztBQUFBO0FBRVBiLHNCQUZPO0FBR2JLLHFCQUFPLENBQUNMLFFBQUQsQ0FBUDs7QUFIYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSVSxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBS0FJLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlSLElBQUosRUFBVTtBQUNOSSxjQUFRO0FBQ1g7QUFDSixHQUpRLEVBSU4sQ0FBQ0osSUFBRCxDQUpNLENBQVQ7QUFLQSxNQUFNUyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFmO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSxrREFBcUJGLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREo7QUFRSDtBQUVEO0FBQ0E7QUFDQTs7R0EvQndCaEIsSTtVQUNMRyxxRDs7O0tBREtILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9bc2x1Z10uMzA4MjhlODE1YTgzN2M3MmNkZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpXHJcblxyXG4gICAgY29uc3QgZmV0Y2hBcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vNjMyMTIwNjI4MmY4Njg3MjczYWQxN2FiLm1vY2thcGkuaW8vdGVzdC9wcm9kdWN0cy8ke3NsdWd9YCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGEocHJvZHVjdHMpO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2x1Zykge1xyXG4gICAgICAgICAgICBmZXRjaEFwaSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzbHVnXSlcclxuICAgIGNvbnN0IFJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0zMiB0ZXh0LTd4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIFRvIE91ciBCbG9nXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMz5T4buRIG5n4bqrdSBuaGnDqm4gOiB7UmFuZG9tfTwvaDM+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFsbCBvZiB0aGUgcG9zdHMgYW5kIHBhc3MgaXQgYXMgdGhlIFwicG9zdHNcIiBwcm9wXHJcbiAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9