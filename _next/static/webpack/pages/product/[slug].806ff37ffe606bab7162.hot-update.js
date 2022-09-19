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

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-32 text-7xl font-extrabold text-black",
      children: "No Seo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["S\u1ED1 ng\u1EABu nhi\xEAn : ", Random]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "Go Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "block text-9xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-800 bg-clip-text text-transparent",
      children: data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: data.avatar,
      alt: "Picture of the author",
      width: 200,
      height: 200
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9haW5nIiwic2x1ZyIsInF1ZXJ5IiwiZmV0Y2hBcGkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ1c2VFZmZlY3QiLCJSYW5kb20iLCJNYXRoIiwicmFuZG9tIiwibmFtZSIsImF2YXRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUMsa0JBR2ZDLHNEQUFRLENBQUMsRUFBRCxDQUhPO0FBQUEsTUFHaENDLElBSGdDO0FBQUEsTUFHMUJDLE9BSDBCOztBQUFBLG1CQUlORixzREFBUSxDQUFDLElBQUQsQ0FKRjtBQUFBLE1BSWhDRyxTQUpnQztBQUFBLE1BSXJCQyxXQUpxQjs7QUFBQSxNQU0vQkMsSUFOK0IsR0FNdEJQLE1BQU0sQ0FBQ1EsS0FOZSxDQU0vQkQsSUFOK0I7O0FBUXZDLE1BQU1FLFFBQVE7QUFBQSxtUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkgseUJBQVcsQ0FBQyxJQUFELENBQVg7QUFEYTtBQUFBLHFCQUVLSSxLQUFLLHFFQUE4REgsSUFBOUQsRUFGVjs7QUFBQTtBQUVQSSxpQkFGTztBQUFBO0FBQUEscUJBR1VBLEdBQUcsQ0FBQ0MsSUFBSixFQUhWOztBQUFBO0FBR1BiLHNCQUhPO0FBSWJLLHFCQUFPLENBQUNMLFFBQUQsQ0FBUDtBQUNBTyx5QkFBVyxDQUFDLEtBQUQsQ0FBWDs7QUFMYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBT0FJLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlOLElBQUosRUFBVTtBQUNORSxjQUFRO0FBQ1g7QUFDSixHQUpRLEVBSU4sQ0FBQ0YsSUFBRCxDQUpNLENBQVQ7QUFLQSxNQUFNTyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFmOztBQUNBLE1BQUlYLFNBQUosRUFBZTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFDRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFBLGtEQUFxQlMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFTSTtBQUFJLGVBQVMsRUFBQyw2R0FBZDtBQUFBLGdCQUNLWCxJQUFJLENBQUNjO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLGVBWUk7QUFDSSxTQUFHLEVBQUVkLElBQUksQ0FBQ2UsTUFEZDtBQUVJLFNBQUcsRUFBQyx1QkFGUjtBQUdJLFdBQUssRUFBRSxHQUhYO0FBSUksWUFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUEsa0JBREo7QUFxQkg7QUFFRDtBQUNBO0FBQ0E7O0dBakR3QnBCLEk7VUFDTEcscUQ7OztLQURLSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLjgwNmZmMzdmZmU2MDZiYWI3MTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9haW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGZldGNoQXBpID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9haW5nKHRydWUpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vNjMyMTIwNjI4MmY4Njg3MjczYWQxN2FiLm1vY2thcGkuaW8vdGVzdC9wcm9kdWN0cy8ke3NsdWd9YCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGEocHJvZHVjdHMpO1xyXG4gICAgICAgIHNldElzTG9haW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNsdWcpIHtcclxuICAgICAgICAgICAgZmV0Y2hBcGkoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2x1Z10pXHJcbiAgICBjb25zdCBSYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItMzIgdGV4dC03eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgTm8gU2VvXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMz5T4buRIG5n4bqrdSBuaGnDqm4gOiB7UmFuZG9tfTwvaDM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5HbyBIb21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC05eGwgZm9udC1leHRyYWJvbGQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpZ28tNjAwIHRvLXB1cnBsZS04MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgb2YgdGhlIHBvc3RzIGFuZCBwYXNzIGl0IGFzIHRoZSBcInBvc3RzXCIgcHJvcFxyXG4gKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==