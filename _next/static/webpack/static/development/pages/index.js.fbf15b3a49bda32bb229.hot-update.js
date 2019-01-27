webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Svg, Path, Polygon) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./theme.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/Logo.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Logo = function Logo(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["variant"]);

  var textColor = props.light ? _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white : _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.marketing.gray[0];

  switch (variant) {
    case 'default':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, {
        viewBox: "4 0 102 40",
        maxWidth: "6rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white,
        d: "M98.6 14.2L93 12.9l-1-.4-25.7.2v12.4l32.3.1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.marketing.orange,
        d: "M88.1 24c.3-1 .2-2-.3-2.6-.5-.6-1.2-1-2.1-1.1l-17.4-.2c-.1 0-.2-.1-.3-.1-.1-.1-.1-.2 0-.3.1-.2.2-.3.4-.3l17.5-.2c2.1-.1 4.3-1.8 5.1-3.8l1-2.6c0-.1.1-.2 0-.3-1.1-5.1-5.7-8.9-11.1-8.9-5 0-9.3 3.2-10.8 7.7-1-.7-2.2-1.1-3.6-1-2.4.2-4.3 2.2-4.6 4.6-.1.6 0 1.2.1 1.8-3.9.1-7.1 3.3-7.1 7.3 0 .4 0 .7.1 1.1 0 .2.2.3.3.3h32.1c.2 0 .4-.1.4-.3l.3-1.1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.marketing.lightOrange,
        d: "M93.6 12.8h-.5c-.1 0-.2.1-.3.2l-.7 2.4c-.3 1-.2 2 .3 2.6.5.6 1.2 1 2.1 1.1l3.7.2c.1 0 .2.1.3.1.1.1.1.2 0 .3-.1.2-.2.3-.4.3l-3.8.2c-2.1.1-4.3 1.8-5.1 3.8l-.2.9c-.1.1 0 .3.2.3h13.2c.2 0 .3-.1.3-.3.2-.8.4-1.7.4-2.6 0-5.2-4.3-9.5-9.5-9.5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M104.4 30.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m0-1.6c-.4 0-.7.3-.7.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7m.4 1.2h-.2l-.2-.3h-.2v.3h-.2v-.9h.5c.2 0 .3.1.3.3 0 .1-.1.2-.2.3l.2.3zm-.3-.5c.1 0 .1 0 .1-.1s-.1-.1-.1-.1h-.3v.3h.3zM14.8 29H17v6h3.8v1.9h-6zM23.1 32.9c0-2.3 1.8-4.1 4.3-4.1s4.2 1.8 4.2 4.1-1.8 4.1-4.3 4.1c-2.4 0-4.2-1.8-4.2-4.1m6.3 0c0-1.2-.8-2.2-2-2.2s-2 1-2 2.1.8 2.1 2 2.1c1.2.2 2-.8 2-2M34.3 33.4V29h2.2v4.4c0 1.1.6 1.7 1.5 1.7s1.5-.5 1.5-1.6V29h2.2v4.4c0 2.6-1.5 3.7-3.7 3.7-2.3-.1-3.7-1.2-3.7-3.7M45 29h3.1c2.8 0 4.5 1.6 4.5 3.9s-1.7 4-4.5 4h-3V29zm3.1 5.9c1.3 0 2.2-.7 2.2-2s-.9-2-2.2-2h-.9v4h.9zM55.7 29H62v1.9h-4.1v1.3h3.7V34h-3.7v2.9h-2.2zM65.1 29h2.2v6h3.8v1.9h-6zM76.8 28.9H79l3.4 8H80l-.6-1.4h-3.1l-.6 1.4h-2.3l3.4-8zm2 4.9l-.9-2.2-.9 2.2h1.8zM85.2 29h3.7c1.2 0 2 .3 2.6.9.5.5.7 1.1.7 1.8 0 1.2-.6 2-1.6 2.4l1.9 2.8H90l-1.6-2.4h-1v2.4h-2.2V29zm3.6 3.8c.7 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.2-.9h-1.4v1.9h1.4zM95.3 29h6.4v1.8h-4.2V32h3.8v1.8h-3.8V35h4.3v1.9h-6.5zM10 33.9c-.3.7-1 1.2-1.8 1.2-1.2 0-2-1-2-2.1s.8-2.1 2-2.1c.9 0 1.6.6 1.9 1.3h2.3c-.4-1.9-2-3.3-4.2-3.3-2.4 0-4.3 1.8-4.3 4.1s1.8 4.1 4.2 4.1c2.1 0 3.7-1.4 4.2-3.2H10z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));

    case 'inline':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, {
        viewBox: "0 0 1179.5 271.2",
        maxWidth: "12rem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
        fill: textColor,
        points: "503.2,155.6 518.7,155.6 518.7,198.1 545.9,198.1 545.9,211.7 503.2,211.7   ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M562,183.8v-0.2c0-16.1,13-29.2,30.3-29.2c17.3,0,30.1,12.9,30.1,29v0.2c0,16.1-13,29.2-30.3,29.2    C574.8,212.9,562,200,562,183.8 M606.5,183.8v-0.2c0-8.1-5.8-15.1-14.4-15.1c-8.5,0-14.2,6.9-14.2,15v0.2    c0,8.1,5.8,15.1,14.3,15.1C600.9,198.8,606.5,191.9,606.5,183.8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M641.4,187.1v-31.5h15.8v31.2c0,8.1,4.1,11.9,10.3,11.9c6.2,0,10.3-3.7,10.3-11.5v-31.6h15.8v31.1    c0,18.1-10.3,26-26.3,26C651.5,212.8,641.4,204.7,641.4,187.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M717.5,155.6h21.6c20,0,31.7,11.5,31.7,27.7v0.2c0,16.2-11.8,28.2-32,28.2h-21.3V155.6z M739.4,198    c9.3,0,15.5-5.1,15.5-14.2v-0.2c0-9-6.2-14.2-15.5-14.2H733V198H739.4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
        fill: textColor,
        points: "793.4,155.6 838.2,155.6 838.2,169.3 808.9,169.3 808.9,178.8 835.4,178.8 835.4,191.7 808.9,191.7     808.9,211.7 793.4,211.7   ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
        fill: textColor,
        points: "859.9,155.6 875.4,155.6 875.4,198.1 902.6,198.1 902.6,211.7 859.9,211.7   ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M943.2,155.2h15l23.9,56.5h-16.7l-4.1-10h-21.6l-4,10h-16.3L943.2,155.2z M956.8,189.6l-6.2-15.9l-6.3,15.9    H956.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M1002.1,155.6h26.5c8.6,0,14.5,2.2,18.3,6.1c3.3,3.2,5,7.5,5,13.1v0.2c0,8.6-4.6,14.3-11.5,17.2l13.4,19.6    h-18l-11.3-17h-6.8v17h-15.5V155.6z M1027.9,182.6c5.3,0,8.3-2.6,8.3-6.7v-0.2c0-4.4-3.2-6.7-8.4-6.7h-10.2v13.5H1027.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
        fill: textColor,
        points: "1074.3,155.6 1119.4,155.6 1119.4,168.9 1089.7,168.9 1089.7,177.4 1116.6,177.4 1116.6,189.6     1089.7,189.6 1089.7,198.5 1119.8,198.5 1119.8,211.7 1074.3,211.7   ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: textColor,
        d: "M469.1,190.4c-2.2,4.9-6.8,8.4-12.8,8.4c-8.5,0-14.3-7.1-14.3-15.1v-0.2c0-8.1,5.7-15,14.2-15    c6.4,0,11.3,3.9,13.3,9.3h16.4c-2.6-13.4-14.4-23.3-29.6-23.3c-17.3,0-30.3,13.1-30.3,29.2v0.2c0,16.1,12.8,29,30.1,29    c14.8,0,26.4-9.6,29.4-22.4H469.1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        id: "flare",
        fill: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white,
        d: "M370.9,150.2l-40.7-24.7c-0.6-0.1-4.4,0.3-6.4-0.7c-1.4-0.7-2.5-1.9-3.2-4c-3.2,0-175.5,0-175.5,0    v91.8h225.8V150.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        fill: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lightOrange,
        d: "M328.6,125.6c-0.8,0-1.5,0.6-1.8,1.4l-4.8,16.7c-2.1,7.2-1.3,13.8,2.2,18.7    c3.2,4.5,8.6,7.1,15.1,7.4l26.2,1.6c0.8,0,1.5,0.4,1.9,1c0.4,0.6,0.5,1.5,0.3,2.2c-0.4,1.2-1.6,2.1-2.9,2.2l-27.3,1.6    c-14.8,0.7-30.7,12.6-36.3,27.2l-2,5.1c-0.4,1,0.3,2,1.4,2h93.8c1.1,0,2.1-0.7,2.4-1.8c1.6-5.8,2.5-11.9,2.5-18.2    c0-37-30.2-67.2-67.3-67.2C330.9,125.5,329.7,125.5,328.6,125.6z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        id: "left-cloud",
        fill: _theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.orange,
        d: "M292.8,204.4c2.1-7.2,1.3-13.8-2.2-18.7c-3.2-4.5-8.6-7.1-15.1-7.4l-123.1-1.6    c-0.8,0-1.5-0.4-1.9-1s-0.5-1.4-0.3-2.2c0.4-1.2,1.6-2.1,2.9-2.2l124.2-1.6c14.7-0.7,30.7-12.6,36.3-27.2l7.1-18.5    c0.3-0.8,0.4-1.6,0.2-2.4c-8-36.2-40.3-63.2-78.9-63.2c-35.6,0-65.8,23-76.6,54.9c-7-5.2-15.9-8-25.5-7.1    c-17.1,1.7-30.8,15.4-32.5,32.5c-0.4,4.4-0.1,8.7,0.9,12.7c-27.9,0.8-50.2,23.6-50.2,51.7c0,2.5,0.2,5,0.5,7.5    c0.2,1.2,1.2,2.1,2.4,2.1h227.2c1.3,0,2.5-0.9,2.9-2.2L292.8,204.4z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })));

    case 'mark':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, _extends({
        viewBox: "0 0 341.2 154.3"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Cloudflare Logo Mark"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Layer_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "Layer_1-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
        color: "white",
        points: "312.8 91.7 269.9 67.1 262.5 63.9 87 65.1 87 154.2 312.8 154.2 312.8 91.7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        color: "#f38020",
        d: "M234.7,146c2.1-7.2,1.3-13.8-2.2-18.7-3.2-4.5-8.6-7.1-15.1-7.4L94.3,118.3a2.28,2.28,0,0,1-1.9-1,2.76,2.76,0,0,1-.3-2.2,3.38,3.38,0,0,1,2.9-2.2l124.2-1.6c14.7-.7,30.7-12.6,36.3-27.2l7.1-18.5a4,4,0,0,0,.2-2.4,80.87,80.87,0,0,0-155.5-8.3,36.35,36.35,0,0,0-58,25.4A38.18,38.18,0,0,0,50.2,93,51.66,51.66,0,0,0,0,144.7a63,63,0,0,0,.5,7.5,2.46,2.46,0,0,0,2.4,2.1H230.1a3.09,3.09,0,0,0,2.9-2.2Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
        color: "fabe40",
        d: "M273.9,66.9c-1.1,0-2.3,0-3.4.1a2,2,0,0,0-1.8,1.4l-4.8,16.7c-2.1,7.2-1.3,13.8,2.2,18.7,3.2,4.5,8.6,7.1,15.1,7.4l26.2,1.6a2.28,2.28,0,0,1,1.9,1,2.82,2.82,0,0,1,.3,2.2,3.38,3.38,0,0,1-2.9,2.2l-27.3,1.6c-14.8.7-30.7,12.6-36.3,27.2l-2,5.1a1.44,1.44,0,0,0,1.4,2h93.8a2.46,2.46,0,0,0,2.4-1.8,68.35,68.35,0,0,0,2.5-18.2,67.37,67.37,0,0,0-67.3-67.2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Svg.js */ "./elements/Svg.js")["default"], __webpack_require__(/*! ./elements/Path.js */ "./elements/Path.js")["default"], __webpack_require__(/*! ./elements/Polygon.js */ "./elements/Polygon.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.fbf15b3a49bda32bb229.hot-update.js.map