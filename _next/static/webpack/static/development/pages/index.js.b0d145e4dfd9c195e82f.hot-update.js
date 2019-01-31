webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Svg, Path, Polygon, Rect, Polyline, Circle) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mrmrs/w/color/components/Icon.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Icon = function Icon(_ref) {
  var type = _ref.type,
      color = _ref.color,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["type", "color", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    height: size,
    width: size
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), type == "door" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.39,1.34H2.58V13.48l8.35,2v-2h2.49V1.34ZM7.67,8.93A1.17,1.17,0,0,1,8.76,7.84,1.08,1.08,0,1,1,7.67,8.93ZM7.11,2.26h5.39V12.53H10.93V3.18Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), type == "firebolt" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.54,6.5a7.07,7.07,0,0,0-1.85-1L.84,1.36l.86,2L8.3,6l.65.26L8.53,7.35,7.21,6.82,2.65,5,3.75,7,6.37,8l2.56,1L8.5,10.16,6,9.19l-1.29-.5a13.36,13.36,0,0,0,2.13,4.09,4.61,4.61,0,0,0,3.71,1.86h.1a4.62,4.62,0,0,0,2.9-8.14Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), type == "chart" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M7.32,7.36v-6a7,7,0,0,0-6,6Zm7.36,1.49a5.71,5.71,0,0,1-5.74,5.81A5.85,5.85,0,0,1,3.07,8.71h5.6V3A5.85,5.85,0,0,1,14.68,8.84Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), type == "flowchart" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "13.48 10.428 13.48 7.777 13.48 7.777 8.514 7.777 8.514 5.573 10.243 5.573 10.243 1.201 5.871 1.201 5.871 5.573 7.618 5.573 7.618 7.777 2.52 7.777 2.52 10.428 0.782 10.428 0.782 14.799 5.154 14.799 5.154 10.428 3.416 10.428 3.416 8.673 12.584 8.673 12.584 10.428 10.846 10.428 10.846 14.799 15.218 14.799 15.218 10.428 13.48 10.428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), type == "bolt" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.35 6.41 10.38 6.41 11.97 0.07 1.66 9.59 5.62 9.59 4.03 15.93 14.35 6.41",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), type == "caretDown" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2.78,5.81l4.95,4.95a.39.39,0,0,0,.56,0l4.95-4.95a.39.39,0,0,0-.28-.67H3.05A.39.39,0,0,0,2.78,5.81Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), type == "caretDownSmall" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M12.107,6.2a.591.591,0,0,1-.141.366l-3.6,3.6a.546.546,0,0,1-.732,0l-3.6-3.6a.546.546,0,0,1,0-.732A.591.591,0,0,1,4.4,5.693h7.2a.591.591,0,0,1,.366.141A.591.591,0,0,1,12.107,6.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), type == "caretLeft" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M10.19,2.78,5.25,7.72a.39.39,0,0,0,0,.56l4.95,4.95a.39.39,0,0,0,.67-.28V3.05A.39.39,0,0,0,10.19,2.78Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), type == "caretRight" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M5.81,13.22l4.95-4.95a.39.39,0,0,0,0-.56L5.81,2.78a.39.39,0,0,0-.67.28v9.89A.39.39,0,0,0,5.81,13.22Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), type == "caretUp" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.29,10.35,8.34,5.4a.39.39,0,0,0-.56,0L2.84,10.35a.39.39,0,0,0,.28.67H13A.39.39,0,0,0,13.29,10.35Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), type == "pop" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.11,3A3.1,3.1,0,0,0,4.87,6.8c.37,2,3.24,6.49,3.24,6.49s3-4.73,3.24-6.46A3.11,3.11,0,0,0,8.11,3Zm0,4.56A1.49,1.49,0,1,1,9.6,6.07,1.49,1.49,0,0,1,8.11,7.55Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), type == "cost" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M9.6,8.29a4.84,4.84,0,0,0-1.08-.46v-2a4.77,4.77,0,0,1,1.4.33l.24-.6a4.64,4.64,0,0,0-1.64-.35V4.37h-.6v.84a2.31,2.31,0,0,0-1.24.47,1.23,1.23,0,0,0-.47,1,1.42,1.42,0,0,0,.38,1,3.29,3.29,0,0,0,1.33.69v2.06A4.27,4.27,0,0,1,7,10.33a5,5,0,0,1-.88-.27v.71a3.59,3.59,0,0,0,.8.22,6,6,0,0,0,1,.07v1h.6V11a2.4,2.4,0,0,0,1.31-.51,1.33,1.33,0,0,0,.47-1,.92.92,0,0,0-.2-.66A1.43,1.43,0,0,0,9.6,8.29ZM7.93,7.62a2.09,2.09,0,0,1-.71-.4A.82.82,0,0,1,7,6.65a.74.74,0,0,1,.22-.53,1.35,1.35,0,0,1,.69-.29Zm.62,2.75V8.58a2,2,0,0,1,.8.4.73.73,0,0,1,.2.53C9.55,10,9.22,10.26,8.55,10.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1a7,7,0,1,0,7,7A7,7,0,0,0,8,1ZM8,14.07A6.07,6.07,0,1,1,14.07,8,6.07,6.07,0,0,1,8,14.07Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), type == "creditCard" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14,2.54H2A1.43,1.43,0,0,0,.54,4V12A1.43,1.43,0,0,0,2,13.46H14A1.43,1.43,0,0,0,15.46,12V4A1.43,1.43,0,0,0,14,2.54ZM14.46,12a.43.43,0,0,1-.43.43H2A.43.43,0,0,1,1.54,12V8.11H14.46Zm0-6.59H1.54V4A.43.43,0,0,1,2,3.54H14a.43.43,0,0,1,.43.43Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), type == "shield" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2,1.31V8.43H2a5.17,5.17,0,0,0,1.17,3.15,5.92,5.92,0,0,0,1.91,1.54h0L8,14.69l3-1.59h0a5.9,5.9,0,0,0,1.83-1.5A5.17,5.17,0,0,0,14,8.43h0V1.31Zm10.76,7h0a4.09,4.09,0,0,1-.92,2.49A4.67,4.67,0,0,1,10.38,12h0L8,13.28V2.72h4.75Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), type == "upload" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.64,7.34a2.13,2.13,0,0,0-3.28-2.59A4.25,4.25,0,0,0,2.2,6.42s0,.07,0,.1A3.46,3.46,0,0,0,3.3,13.2H6.57V10.08H4.48L8,6.75l3.54,3.33H9.45V13.2h3.73a3,3,0,0,0,.46-5.85Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), type == "drive" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "11.24",
    y: "10.99",
    width: "1.11",
    height: "1.11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "11.24",
    y: "6.19",
    width: "1.11",
    height: "1.11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.52,4.85a1,1,0,0,0-.11-.43h0L12.26,1.65H3.74L1.58,4.42h0a.9.9,0,0,0-.12.43V8.63a.91.91,0,0,0,.15.51h0a.91.91,0,0,0-.15.51v3.79a.91.91,0,0,0,.91.91H13.61a.91.91,0,0,0,.91-.91V9.65a1.17,1.17,0,0,0-.15-.52.91.91,0,0,0,.15-.5Zm-1.09,8.41H2.57V9.83H13.43Zm0-4.8H2.57V5H13.43Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), type == "exclamationOutline" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M.28,13.79H15.72L8,1.15ZM1.76,13,8,2.74,14.24,13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "7.5 10.01 8.52 10.01 8.74 5.9 7.28 5.9 7.5 10.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,10.73a.77.77,0,0,0-.55.18.83.83,0,0,0,0,1.06.76.76,0,0,0,.55.19A.73.73,0,0,0,8.54,12a.82.82,0,0,0,0-1.05A.74.74,0,0,0,8,10.73Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), type == "exclamation" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.2,1.39S.71,13.62.47,14H15.91C15.67,13.62,8.21,1.4,8.2,1.39ZM7.41,5.74H9a0,0,0,0,1,0,0H9l0,.77,0,.66L8.85,8.75v.11c0,.59-.07,1.24-.08,1.44H7.64c0-.2,0-.68-.06-1.07l-.05-1L7.46,7,7.4,6V5.77h0A0,0,0,0,1,7.41,5.74Zm1.38,6.74a.81.81,0,0,1-.6.21.84.84,0,0,1-.61-.21.92.92,0,0,1,0-1.18.85.85,0,0,1,.61-.2.83.83,0,0,1,.6.21.91.91,0,0,1,0,1.17Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), type == "collapse" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "7.19 3.45 7.19 7.17 3.46 7.17 4.45 6.18 1.17 2.9 2.89 1.17 6.18 4.45 7.18 3.45 7.19 3.45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.83 13.11 13.11 14.84 9.83 11.56 8.84 12.54 8.83 12.54 8.83 8.83 12.56 8.83 11.55 9.83 14.83 13.11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "11.56 6.17 12.55 7.17 8.84 7.17 8.84 3.45 9.83 4.44 13.11 1.17 14.83 2.9 11.56 6.17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "7.18 8.82 7.18 12.55 6.18 11.55 2.89 14.84 1.17 13.11 4.46 9.83 3.46 8.83 3.46 8.82 7.18 8.82",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), type == "expand" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.83 1.17 14.83 4.89 13.84 3.9 10.56 7.17 8.84 5.45 12.11 2.17 11.12 1.18 11.12 1.17 14.83 1.17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "3.89 13.84 4.88 14.83 4.88 14.84 1.17 14.84 1.17 11.11 2.16 12.11 5.45 8.82 7.18 10.55 3.89 13.84",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.83 11.12 14.83 14.84 11.11 14.84 12.11 13.84 8.83 10.55 10.56 8.83 13.84 12.11 14.83 11.12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "7.19 5.44 5.46 7.17 2.17 3.89 1.17 4.89 1.17 1.17 4.89 1.17 3.9 2.16 7.19 5.44",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), type == "retarget" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14,7.09A6.04,6.04,0,0,0,8.917,1.908V.777H7.083v1.13A6.04,6.04,0,0,0,2,7.09H.781V8.913H2.029a6.032,6.032,0,0,0,5.054,4.98v1.333H8.917V13.893a6.032,6.032,0,0,0,5.054-4.98h1.248V7.09ZM8.917,12.038V9.862H7.083v2.175a4.215,4.215,0,0,1-3.2-3.124h2.25V7.09h-2.3A4.239,4.239,0,0,1,7.083,3.774V6.141H8.917V3.774A4.239,4.239,0,0,1,12.169,7.09h-2.3V8.913h2.25A4.215,4.215,0,0,1,8.917,12.038Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), type == "file" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "13.61 5.09 10.02 5.09 10.02 1.51 13.61 5.09",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.55,5.88H9.19V1.4H2.39V14.6H13.61V5.94Zm-8.77-1H7.88V6.11H4.79Zm6.45,7.3H4.79V10.94h6.45Zm0-3H4.79V7.95h6.45Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), type == "file2" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M12.45,1.88H3.55A1.09,1.09,0,0,0,2.46,3v10.4a1.09,1.09,0,0,0,1.09,1.09h8.9a1.09,1.09,0,0,0,1.09-1.09V3A1.09,1.09,0,0,0,12.45,1.88Zm.34,11.48a.34.34,0,0,1-.34.34H3.55a.34.34,0,0,1-.34-.34V3a.34.34,0,0,1,.34-.34h8.9a.34.34,0,0,1,.34.34Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.44,10.78H4.75a.19.19,0,0,0,0,.38H8.44a.19.19,0,1,0,0-.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M10.78,7.48h-6a.19.19,0,0,0,0,.38h6a.19.19,0,0,0,0-.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M10.78,9.13h-6a.19.19,0,0,0,0,.38h6a.19.19,0,1,0,0-.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M4.75,4.58H9.68a.19.19,0,0,0,0-.37H4.75a.19.19,0,0,0,0,.38Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M10.78,5.83h-6a.19.19,0,0,0,0,.38h6a.19.19,0,0,0,0-.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), type == "filter" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.33,4V1.63H1.67V4h0l5,3.69v4.81l2.68,1.84V7.72l5-3.69Zm-1-.46H2.65V2.47H13.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), type == "forward" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "9.15 13.62 14.77 8 9.15 2.38 9.15 4.61 11.77 7.22 1.23 7.22 1.23 8.78 11.77 8.78 9.15 11.39 9.15 13.62",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), type == "backward" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "6.846 13.616 1.23 8 6.846 2.384 6.846 4.608 4.233 7.221 14.77 7.221 14.77 8.779 4.233 8.779 6.846 11.392 6.846 13.616",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }), type == "left" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "10.77 4.61 10.77 2.38 5.15 8 10.77 13.62 10.77 11.39 7.38 8 10.77 4.61",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }), type == "right" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "5.23 4.61 8.62 8 5.23 11.39 5.23 13.62 10.85 8 5.23 2.38 5.23 4.61",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polyline, {
    points: "-4.75 13.7 -3.12 12.07 2.61 6.34",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })), type == "down" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2.684,4.843,8,9.99l5.344-5.147c.225-.253.45-.253.7,0,.253.225.253.45,0,.7L8.338,11.2a.458.458,0,0,1-.675,0L1.953,5.546c-.253-.253-.253-.478,0-.7a.48.48,0,0,1,.731,0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), type == "gear" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M15.12,6.38h-1.7a5.69,5.69,0,0,0-1.31-2.26L13,2.64A7.29,7.29,0,0,0,10.16,1L9.31,2.5a5.65,5.65,0,0,0-2.62,0L5.84,1A7.29,7.29,0,0,0,3,2.64l.85,1.47A5.64,5.64,0,0,0,2.58,6.38H.88a7.35,7.35,0,0,0,0,3.23h1.7a5.69,5.69,0,0,0,1.31,2.26L3,13.36A7.29,7.29,0,0,0,5.84,15l.85-1.48a5.65,5.65,0,0,0,2.61,0L10.16,15A7.29,7.29,0,0,0,13,13.36l-.85-1.48a5.64,5.64,0,0,0,1.31-2.27h1.71a7.35,7.35,0,0,0,0-3.23ZM8,11.19A3.19,3.19,0,1,1,11.19,8,3.19,3.19,0,0,1,8,11.19Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), type == "edit" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M1.715 11.418l8.91-8.911 2.828 2.828-8.91 8.911zM.8 15.3l3.1-.4-2.7-2.8zM13 .8c-.2-.2-.5-.2-.7 0l-1.1 1.1L14 4.7l1.1-1.1c.2-.2.2-.5 0-.7L13 .8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), type == "global" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M15.12,6.38h-1.7a5.69,5.69,0,0,0-1.31-2.26L13,2.64A7.29,7.29,0,0,0,10.16,1L9.31,2.5a5.65,5.65,0,0,0-2.62,0L5.84,1A7.29,7.29,0,0,0,3,2.64l.85,1.47A5.64,5.64,0,0,0,2.58,6.38H.88a7.35,7.35,0,0,0,0,3.23h1.7a5.69,5.69,0,0,0,1.31,2.26L3,13.36A7.29,7.29,0,0,0,5.84,15l.85-1.48a5.65,5.65,0,0,0,2.61,0L10.16,15A7.29,7.29,0,0,0,13,13.36l-.85-1.48a5.64,5.64,0,0,0,1.31-2.27h1.71a7.35,7.35,0,0,0,0-3.23ZM8,11.19A3.19,3.19,0,1,1,11.19,8,3.19,3.19,0,0,1,8,11.19Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), type == "support" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.18a6.56,6.56,0,1,0,1.46,13,3.11,3.11,0,0,1-.25-.26h0A3.11,3.11,0,0,1,9,13.59l-.14-.24a1.56,1.56,0,0,1-.86.28c-.9,0-1.71-.88-2.25-2.23H8.53a3.09,3.09,0,0,1,.17-.62H5.54A10.41,10.41,0,0,1,5.12,8.2h5.76q0,.34,0,.68a3.1,3.1,0,0,1,.64-.09q0-.29,0-.59h2.41a5.9,5.9,0,0,1-.27,1.36l.25.25a3.12,3.12,0,0,1,.23.28A6.56,6.56,0,0,0,8,1.18Zm0,.67c.93,0,1.77.94,2.3,2.38H5.7C6.23,2.79,7.07,1.85,8,1.85Zm-1.75.22A5.85,5.85,0,0,0,5,4.23H3.22A6,6,0,0,1,6.25,2.07ZM2.82,4.85h2a11.44,11.44,0,0,0-.35,2.72H2.07A5.9,5.9,0,0,1,2.82,4.85ZM2.08,8.2H4.49a11.17,11.17,0,0,0,.38,2.58h-2A5.89,5.89,0,0,1,2.08,8.2Zm4.16,5.22a6,6,0,0,1-2.92-2H5.07A5.72,5.72,0,0,0,6.25,13.42ZM5.11,7.57A10.62,10.62,0,0,1,5.5,4.85h5a10.62,10.62,0,0,1,.38,2.72Zm8.82,0H11.51a11.44,11.44,0,0,0-.35-2.72h2A5.9,5.9,0,0,1,13.93,7.57ZM11,4.23A5.85,5.85,0,0,0,9.75,2.07a6,6,0,0,1,3,2.16Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), type == "hamburger" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.3,1.7V4.22H1.7V1.7ZM1.7,14.3H14.3V11.78H1.7Zm0-5H14.3V6.74H1.7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), type == "generalInfo" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    d: "M8,3.52a4.47,4.47,0,0,0-3.58,7.17l-.29,1.68,1.63-.49A4.48,4.48,0,1,0,8,3.52Zm.42,6.87H7.59V7.19h.82ZM8,6.63a.49.49,0,0,1-.5-.51A.5.5,0,0,1,8,5.61a.51.51,0,1,1,0,1Z",
    style: {
      fill: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.27A6.73,6.73,0,1,0,14.73,8,6.73,6.73,0,0,0,8,1.27ZM8,12.48a4.45,4.45,0,0,1-2.23-.6l-1.63.49.29-1.68A4.48,4.48,0,1,1,8,12.48Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,5.61a.5.5,0,0,0-.51.51A.51.51,0,1,0,8,5.61Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "7.59",
    y: "7.19",
    width: "0.82",
    height: "3.19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  })), type == "info" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.15,1a7,7,0,1,0,7,7A7,7,0,0,0,8.15,1ZM9,12.44H7.26V6.93H9ZM9,5.37a.23.23,0,0,1-.23.23H7.49a.23.23,0,0,1-.23-.23V4.12a.23.23,0,0,1,.23-.23H8.74A.23.23,0,0,1,9,4.12Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }), type == "help" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,.83A7.17,7.17,0,1,0,15.17,8,7.17,7.17,0,0,0,8,.83Zm-.4,12a1,1,0,1,1,1-1A1,1,0,0,1,7.6,12.85Zm3-6.54a2.47,2.47,0,0,1-.43.72,6.93,6.93,0,0,1-1,.89,3.8,3.8,0,0,0-.8.78,1.5,1.5,0,0,0-.2.83v.29H6.94V9.41A2.44,2.44,0,0,1,7.2,8.23a3.37,3.37,0,0,1,.9-1,5,5,0,0,0,1-.94,1.42,1.42,0,0,0,.22-.8A1,1,0,0,0,9,4.68a1.63,1.63,0,0,0-1-.29,3.57,3.57,0,0,0-1.14.17,8.06,8.06,0,0,0-1,.42L5.22,3.85A5.69,5.69,0,0,1,8,3.12a3,3,0,0,1,2,.62,2.11,2.11,0,0,1,.74,1.71A2.44,2.44,0,0,1,10.64,6.31Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }), type == "list" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "1.59",
    y: "2.54",
    width: "1.98",
    height: "1.98",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "5.43",
    y: "2.54",
    width: "8.99",
    height: "1.98",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "1.59",
    y: "6.98",
    width: "1.98",
    height: "1.98",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "5.43",
    y: "6.98",
    width: "8.99",
    height: "1.98",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "1.59",
    y: "11.48",
    width: "1.98",
    height: "1.98",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "5.43",
    y: "11.48",
    width: "4.99",
    height: "1.98",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })), type == "search" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.69,13.68l-3.25-3.25a5.79,5.79,0,1,0-1.31,1.17l3.32,3.32a.37.37,0,0,0,.52,0l.72-.72A.37.37,0,0,0,14.69,13.68ZM4.14,9.59a4,4,0,1,1,5.8-.13l-.24.24a4,4,0,0,1-5.56-.11Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }), type == "mail" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.836,3.137a.843.843,0,0,0-.589-.236H1.753a.843.843,0,0,0-.562.213L8.036,8.656Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.037,10.261.925,4.387v7.989a.81.81,0,0,0,.828.792H14.247a.81.81,0,0,0,.828-.792V4.435Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  })), type == "refresh" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.18,6.6a.27.27,0,0,1-.26.27H9.3a.26.26,0,0,1-.19-.45l1.66-1.66A4.16,4.16,0,0,0,8,3.77a4.31,4.31,0,1,0,3.62,6.65l.8.52.8.51a.35.35,0,0,1,0,.08A6.21,6.21,0,1,1,12,3.33l.1.08,1.68-1.68a.26.26,0,0,1,.35.25Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }), type == "reorder" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2.78,9.68l4.95,4.95a.39.39,0,0,0,.56,0l4.95-4.95A.39.39,0,0,0,12.95,9H3.05A.39.39,0,0,0,2.78,9.68Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.22,6.24,8.28,1.29a.39.39,0,0,0-.56,0L2.78,6.24a.39.39,0,0,0,.28.67h9.89A.39.39,0,0,0,13.22,6.24Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  })), type == "resizeHorizontal" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M6.28,2.73,1.33,7.68a.39.39,0,0,0,0,.56l4.95,4.95A.39.39,0,0,0,7,12.9V3A.39.39,0,0,0,6.28,2.73Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M9.72,13.18l4.95-4.95a.39.39,0,0,0,0-.56L9.72,2.73A.39.39,0,0,0,9,3V12.9A.39.39,0,0,0,9.72,13.18Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  })), type == "minus" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "1.32",
    y: "6.5",
    width: "13.36",
    height: "2.99",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), type == "plus" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.68 6.6 9.4 6.6 9.4 1.32 6.6 1.32 6.6 6.6 1.32 6.6 1.32 9.4 6.6 9.4 6.6 14.68 9.4 14.68 9.4 9.4 14.68 9.4 14.68 6.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }), type == "remove" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.3 3.63 12.38 1.7 8 6.08 3.63 1.7 1.7 3.63 6.08 8 1.7 12.38 3.63 14.3 8 9.93 12.38 14.3 14.3 12.38 9.93 8 14.3 3.63",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }), type == "pause" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "9.27",
    y: "3.13",
    width: "3.86",
    height: "9.74",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "2.89",
    y: "3.13",
    width: "3.86",
    height: "9.74",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  })), type == "checkmark" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M5.187,13.6.8,9.209,1.953,8.028l3.235,3.235,8.86-8.86L15.2,3.584Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }), type == "ok" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "15.74 3.87 13.7 1.84 5.76 9.78 2.3 6.32 0.26 8.35 5.76 13.85 15.74 3.87",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }), type == "okSign" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,.75A7.25,7.25,0,1,0,15.25,8,7.25,7.25,0,0,0,8,.75ZM6.64,11.8,3.49,8.65,4.66,7.48l2,2L11.2,4.91l1.17,1.17Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }), type == "activation" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,.8A7.2,7.2,0,1,0,15.2,8,7.2,7.2,0,0,0,8,.8ZM8,14.34A6.34,6.34,0,1,1,14.34,8,6.35,6.35,0,0,1,8,14.34Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M7,9.88,5.74,7.76,5,8.2l1.58,2.63a.43.43,0,0,0,.33.21h0a.43.43,0,0,0,.32-.15l4-4.73-.65-.55Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  })), type == "validator" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M12.37,12.74a.44.44,0,0,1-.1.61l-.06,0a8.52,8.52,0,0,1-.93.62A6.77,6.77,0,0,1,1.42,7.25L-.05,6.84,2.36,5.38,3.68,7.87,2.27,7.48a5.9,5.9,0,0,0,8.6,5.76,8.12,8.12,0,0,0,.82-.55l.06,0A.44.44,0,0,1,12.37,12.74Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.67,9.82A6.77,6.77,0,0,0,3.34,3.23.43.43,0,1,0,4,3.84a5.9,5.9,0,0,1,9.9,5.68L12.4,9l1.14,2.58,2.52-1.28Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M7.31,10.36h0a.36.36,0,0,0,.28-.13l3.31-3.88-.55-.47-3,3.5-1-1.72L5.73,8,7,10.19A.36.36,0,0,0,7.31,10.36Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  })), type == "safeOutline" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.12,1.22A6.78,6.78,0,1,0,14.9,8,6.79,6.79,0,0,0,8.12,1.22Zm0,12.62A5.84,5.84,0,1,1,14,8,5.85,5.85,0,0,1,8.12,13.84Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M7.2,9.79,5.8,7.46l-.64.39,1.66,2.77a.38.38,0,0,0,.29.18h0a.38.38,0,0,0,.29-.13l4-4.7-.57-.49Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  })), type == "safe" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.69A6.31,6.31,0,1,0,14.31,8,6.31,6.31,0,0,0,8,1.69Zm-.69,9A.38.38,0,0,1,7,10.8H7a.38.38,0,0,1-.29-.18L5,7.85l.64-.39,1.4,2.33,3.66-4.3.57.49Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }), type == "warningOutline" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.22A6.78,6.78,0,1,0,14.78,8,6.79,6.79,0,0,0,8,1.22ZM8,13.84A5.84,5.84,0,1,1,13.84,8,5.85,5.85,0,0,1,8,13.84Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "10.37 5.1 8 7.47 5.63 5.1 5.1 5.63 7.47 8 5.1 10.37 5.63 10.9 8 8.53 10.37 10.9 10.9 10.37 8.53 8 10.9 5.63 10.37 5.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  })), type == "warning" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.69A6.31,6.31,0,1,0,14.31,8,6.31,6.31,0,0,0,8,1.69Zm2.9,8.68-.53.53L8,8.53,5.63,10.9l-.53-.53L7.47,8,5.1,5.63l.53-.53L8,7.47,10.37,5.1l.53.53L8.53,8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }), type == "stopOutline" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.22A6.78,6.78,0,1,0,14.78,8,6.79,6.79,0,0,0,8,1.22ZM2.16,8A5.83,5.83,0,0,1,11.8,3.57L3.66,11.9A5.81,5.81,0,0,1,2.16,8ZM8,13.84a5.81,5.81,0,0,1-3.8-1.41L12.34,4.1A5.83,5.83,0,0,1,8,13.84Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }), type == "stop" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.2A6.8,6.8,0,1,0,14.8,8,6.8,6.8,0,0,0,8,1.2ZM8,13.92a5.89,5.89,0,0,1-4-1.55.34.34,0,0,1-.3-.29A5.91,5.91,0,0,1,12.1,3.74l0,0,0,0A5.91,5.91,0,0,1,8,13.92Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2.83,8a5.16,5.16,0,0,1,8.5-3.95L4.14,11.42A5.14,5.14,0,0,1,2.83,8ZM8,13.17a5.14,5.14,0,0,1-3.33-1.22l7.19-7.37A5.16,5.16,0,0,1,8,13.17Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,2.83a5.16,5.16,0,0,0-3.86,8.59l7.19-7.37A5.14,5.14,0,0,0,8,2.83Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M11.86,4.58,4.67,11.95a5.16,5.16,0,0,0,7.19-7.37Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  })), type == "lock" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M12,6.36V4.63a3.7,3.7,0,0,0-1.26-2.55,4.18,4.18,0,0,0-5.47,0A3.7,3.7,0,0,0,4,4.63V6.36H1.88v8.58H14.12V6.36H12ZM8.67,10.79v2.12H7.33V10.79a1.33,1.33,0,1,1,1.35,0Zm-3-4.43V4.72a2,2,0,0,1,.68-1.35,2.46,2.46,0,0,1,3.19,0,2,2,0,0,1,.68,1.35V6.36Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }), type == "speech" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.61,2.64H2.39a1,1,0,0,0-1,1V15.36l2.48-2.57h9.73a1,1,0,0,0,1-1V3.63A1,1,0,0,0,13.61,2.64ZM12,9.88H4V8.76h8Zm0-3.21H4V5.55h8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }), type == "time" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.95,8A6.95,6.95,0,1,0,8,14.95,6.95,6.95,0,0,0,14.95,8ZM8,13.64A5.64,5.64,0,1,1,12,12,5.62,5.62,0,0,1,8,13.64Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.07,8.31l3.52,2a4.07,4.07,0,0,0,.64-1.14L9,7.37V3.78a3.77,3.77,0,0,0-1.3,0V8.13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  })), type == "user" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.013.747A7.253,7.253,0,1,0,15.266,8,7.253,7.253,0,0,0,8.013.747Zm0,2.385A2.776,2.776,0,0,1,10.635,6.04,2.776,2.776,0,0,1,8.013,8.948,2.776,2.776,0,0,1,5.391,6.04,2.776,2.776,0,0,1,8.013,3.131Zm4.253,9.2a6.049,6.049,0,0,1-8.506,0v-.354A2.686,2.686,0,0,1,5.508,9.522a.807.807,0,0,1,.52,0,7.744,7.744,0,0,0,1.984.223A7.743,7.743,0,0,0,10,9.518a.807.807,0,0,1,.52,0,2.686,2.686,0,0,1,1.749,2.457Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }), type == "signup" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    fill: "none",
    cx: "7.643",
    cy: "4.562",
    r: "2.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M1.086,13.684a.368.368,0,0,0,.368.377h7.79a3.473,3.473,0,0,1-.409-.736H1.843a5.834,5.834,0,0,1,8.8-4.48,3.456,3.456,0,0,1,.921-.265A6.516,6.516,0,0,0,9.384,7.52a3.436,3.436,0,1,0-3.481,0A6.516,6.516,0,0,0,1.086,13.684ZM4.943,4.562a2.7,2.7,0,1,1,2.7,2.7A2.7,2.7,0,0,1,4.943,4.562Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M12.064,9.174a2.85,2.85,0,1,0,2.85,2.85A2.85,2.85,0,0,0,12.064,9.174Zm1.451,3.079H12.281v1.293h-.349V12.253H10.7v-.327h1.233V10.643h.349v1.283h1.233Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  })), type == "quotes" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M5.812,13.345A10.325,10.325,0,0,1,2.127,10.56,6.562,6.562,0,0,1,.89,6.313a3.75,3.75,0,0,1,.844-2.7,3.464,3.464,0,0,1,4.528-.2,2.677,2.677,0,0,1,.816,2.11,2.623,2.623,0,0,1-.619,1.912,2.259,2.259,0,0,1-1.828.7.579.579,0,0,0-.478.2.54.54,0,0,0-.112.506A2.644,2.644,0,0,0,4.6,10.364a5.516,5.516,0,0,0,2.053,1.547Zm8.015,0a10.471,10.471,0,0,1-3.656-2.785A6.588,6.588,0,0,1,8.905,6.313a3.732,3.732,0,0,1,.872-2.7,3.243,3.243,0,0,1,2.391-.956,3,3,0,0,1,2.11.76,2.7,2.7,0,0,1,.844,2.11A2.945,2.945,0,0,1,14.5,7.439a2.375,2.375,0,0,1-1.885.7.664.664,0,0,0-.45.2.651.651,0,0,0-.113.506,2.644,2.644,0,0,0,.563,1.519,5.516,5.516,0,0,0,2.053,1.547Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }), type == "twitter" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.8,4.207a5.834,5.834,0,0,1-1.4,1.441q.009.121.009.362a7.915,7.915,0,0,1-.328,2.239A8.07,8.07,0,0,1,9.823,12.7,7.918,7.918,0,0,1,5.48,13.941,7.741,7.741,0,0,1,1.2,12.69a6,6,0,0,0,.673.034,5.458,5.458,0,0,0,3.46-1.191A2.794,2.794,0,0,1,2.727,9.6a3.539,3.539,0,0,0,.526.043,2.89,2.89,0,0,0,.734-.095,2.744,2.744,0,0,1-1.6-.962,2.692,2.692,0,0,1-.634-1.773V6.779a2.76,2.76,0,0,0,1.26.354,2.783,2.783,0,0,1-.906-.993A2.794,2.794,0,0,1,2.149,3.4,7.9,7.9,0,0,0,4.69,5.462,7.769,7.769,0,0,0,7.9,6.321a3.094,3.094,0,0,1-.069-.638A2.785,2.785,0,0,1,10.614,2.9a2.687,2.687,0,0,1,2.036.88A5.468,5.468,0,0,0,14.42,3.1a2.707,2.707,0,0,1-1.225,1.536A5.586,5.586,0,0,0,14.8,4.207Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }), type == "facebook" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M11.471,1.411V3.532H10.21a1.18,1.18,0,0,0-.932.289,1.334,1.334,0,0,0-.241.868V6.208h2.354l-.313,2.379H9.037v6.1H6.578v-6.1H4.529V6.208H6.578V4.456a3.109,3.109,0,0,1,.836-2.318,3.03,3.03,0,0,1,2.226-.823,13.306,13.306,0,0,1,1.832.1Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }), type == "google" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M15.42,7H14.07V5.66H12.72V7H11.37V8.36h1.35V9.71h1.35V8.36h1.35ZM5.3,7V8.63H8a2.55,2.55,0,0,1-2.68,2,3,3,0,0,1,0-6,2.66,2.66,0,0,1,1.88.73L8.47,4.2A4.53,4.53,0,0,0,5.3,3a4.72,4.72,0,0,0,0,9.44A4.35,4.35,0,0,0,9.83,7.79,4.34,4.34,0,0,0,9.76,7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }), type == "github" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,.859A7.208,7.208,0,0,0,5.721,14.9c.36.063.5-.153.5-.342,0-.171-.009-.739-.009-1.342-1.811.333-2.279-.441-2.424-.847a2.621,2.621,0,0,0-.739-1.018c-.252-.135-.613-.468-.009-.478a1.442,1.442,0,0,1,1.108.739,1.541,1.541,0,0,0,2.1.595,1.516,1.516,0,0,1,.459-.964c-1.6-.18-3.279-.8-3.279-3.559a2.805,2.805,0,0,1,.739-1.937,2.59,2.59,0,0,1,.072-1.91s.6-.189,1.982.739a6.8,6.8,0,0,1,3.6,0C11.2,3.643,11.8,3.841,11.8,3.841a2.59,2.59,0,0,1,.072,1.91,2.789,2.789,0,0,1,.739,1.937c0,2.766-1.685,3.379-3.288,3.559a1.707,1.707,0,0,1,.487,1.333c0,.964-.009,1.739-.009,1.982,0,.189.135.414.5.342A7.211,7.211,0,0,0,8,.859Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }), type == "linkedin" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M4.412,5.8v8.485H1.587V5.8Zm.18-2.62A1.355,1.355,0,0,1,4.16,4.224,1.614,1.614,0,0,1,3,4.644H2.982a1.545,1.545,0,0,1-1.13-.42A1.4,1.4,0,0,1,1.424,3.18a1.38,1.38,0,0,1,.441-1.049,1.609,1.609,0,0,1,1.152-.415,1.569,1.569,0,0,1,1.139.415A1.427,1.427,0,0,1,4.592,3.18Zm9.983,6.242v4.863H11.759V9.747a2.479,2.479,0,0,0-.347-1.409,1.218,1.218,0,0,0-1.083-.51,1.387,1.387,0,0,0-.9.3,1.82,1.82,0,0,0-.544.732,2.074,2.074,0,0,0-.094.693v4.735H5.971q.017-3.416.017-5.54T5.98,6.21L5.971,5.8H8.788V7.032H8.771a3.741,3.741,0,0,1,.351-.479,3.64,3.64,0,0,1,.484-.445,2.226,2.226,0,0,1,.745-.373,3.393,3.393,0,0,1,.98-.133,3.041,3.041,0,0,1,2.355.972,4.078,4.078,0,0,1,.89,2.847Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }), type == "clipboard" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.07,2H11.73V3.61H4.49V2H2.93a.58.58,0,0,0-.57.57V14a.58.58,0,0,0,.57.57H13.07a.58.58,0,0,0,.57-.57V2.62A.58.58,0,0,0,13.07,2ZM8,11.93H4.89V10.8H8Zm3.11-2.61H4.86V8.19h6.27Zm0-2.61H4.86V5.58h6.27Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rect, {
    color: color,
    x: "5.24",
    y: "1.45",
    width: "5.52",
    height: "1.34",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  })), type == "dns" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "13.31 10.35 13.31 7.78 13.31 7.78 8.5 7.78 8.5 5.65 10.17 5.65 10.17 1.41 5.94 1.41 5.94 5.65 7.63 5.65 7.63 7.78 2.69 7.78 2.69 10.35 1 10.35 1 14.59 5.24 14.59 5.24 10.35 3.56 10.35 3.56 8.65 12.44 8.65 12.44 10.35 10.76 10.35 10.76 14.59 15 14.59 15 10.35 13.31 10.35",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }), type == "network" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8,1.4A5.2,5.2,0,0,0,3,7.84,10,10,0,0,0,4.1,10,31.4,31.4,0,0,0,8,14.6,31.34,31.34,0,0,0,11.9,10,10,10,0,0,0,13,7.84,5.2,5.2,0,0,0,8,1.4Zm0,3A2.27,2.27,0,1,1,5.73,6.66,2.25,2.25,0,0,1,8,4.39Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }), type == "pagerules" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.33,4V1.63H1.67V4h0l5,3.69v4.81l2.68,1.84V7.72l5-3.69Zm-1-.46H2.65V2.47H13.32Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), type == "analytics" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M7.325 7.359v-6.01a7.011 7.011 0 0 0-6.01 6.01zm7.36 1.485a5.708 5.708 0 0 1-5.739 5.807A5.852 5.852 0 0 1 3.07 8.709h5.6V3.037a5.853 5.853 0 0 1 6.015 5.807z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: this
  }), type == "crypto" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M12 6.363V4.631a3.7 3.7 0 0 0-1.263-2.552 4.176 4.176 0 0 0-5.467 0A3.7 3.7 0 0 0 4 4.631v1.732H2v8.577h12.125V6.363H12zm-3.327 4.43v2.12H7.326v-2.12a1.33 1.33 0 1 1 1.346 0zM5.72 6.363V4.719a1.972 1.972 0 0 1 .683-1.351 2.459 2.459 0 0 1 3.191 0 1.974 1.974 0 0 1 .683 1.351v1.644z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }), type == "firewall" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M1.98 1.312V8.43a5.172 5.172 0 0 0 1.168 3.153 5.921 5.921 0 0 0 1.908 1.54l.01.012L8 14.688l3.008-1.593.016-.013a5.9 5.9 0 0 0 1.825-1.5 5.172 5.172 0 0 0 1.168-3.152V1.312zm10.761 7.03a4.086 4.086 0 0 1-.921 2.489 4.668 4.668 0 0 1-1.441 1.183l-.013.01-2.377 1.258V2.724h4.751z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }), type == "access" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.39 1.339H2.58v12.14l8.346 1.951v-1.951h2.494V1.339zM7.675 8.926a1.166 1.166 0 0 1 1.084-1.084 1.084 1.084 0 1 1-1.084 1.084zm-.569-6.662h5.388v10.269h-1.567V3.181z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
    },
    __self: this
  }), type == "speed" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.345 6.413h-3.966L11.966.068 1.655 9.587h3.966l-1.587 6.345 10.311-9.519z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }), type == "caching" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M11.243 10.987h1.11v1.11h-1.11zM11.243 6.185h1.11v1.11h-1.11z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.523 4.848a1.033 1.033 0 0 0-.112-.429H14.4l-2.136-2.768H3.745L1.58 4.419h.015a.9.9 0 0 0-.117.43v3.785a.914.914 0 0 0 .155.508.914.914 0 0 0-.154.506v3.785a.915.915 0 0 0 .914.914h11.215a.915.915 0 0 0 .914-.914V9.649a1.168 1.168 0 0 0-.149-.517.907.907 0 0 0 .149-.5zm-1.092 8.407H2.571V9.827h10.86zm0-4.8H2.571V5.026h10.86z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  })), type == "workers" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M4.92 9.18v1.16a1.18 1.18 0 0 0 .41 1 2.32 2.32 0 0 0 1.35.32v-.75a1.09 1.09 0 0 1-.68-.16.62.62 0 0 1-.21-.5V9q0-.82-.93-1 .93-.16.93-1V5.83a.61.61 0 0 1 .21-.5 1.16 1.16 0 0 1 .67-.19V4.4a2.38 2.38 0 0 0-1.33.3 1 1 0 0 0-.44.93V6.9a.64.64 0 0 1-.27.56 1.44 1.44 0 0 1-.82.19v.78q1.11 0 1.11.75zM11.14 10.43V9.18a.65.65 0 0 1 .26-.58 1.39 1.39 0 0 1 .76-.17v-.78a1.4 1.4 0 0 1-.77-.17.64.64 0 0 1-.26-.58V5.73a1.22 1.22 0 0 0-.4-1 2.14 2.14 0 0 0-1.3-.31v.74a1 1 0 0 1 .63.19.65.65 0 0 1 .19.5V7q0 .81.93 1a1.12 1.12 0 0 0-.72.35 1.19 1.19 0 0 0-.22.76v1.07a.6.6 0 0 1-.22.53 1 1 0 0 1-.6.16v.75a2.26 2.26 0 0 0 1.3-.31 1.08 1.08 0 0 0 .42-.88zM4.45 2.19a.6.6 0 0 0 .37-.14.61.61 0 1 0-.74 0 .6.6 0 0 0 .37.14zM6.28 2.19a.6.6 0 0 0 .37-.14.61.61 0 1 0-.74 0 .6.6 0 0 0 .37.14zM8.1 2.19a.6.6 0 0 0 .37-.14.61.61 0 1 0-.74 0 .6.6 0 0 0 .37.14z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M13.93 1H9.44v1.11h4.49V14H2.07V2.11h1V1h-1A1.07 1.07 0 0 0 1 2.11V14a1.07 1.07 0 0 0 1.07 1h11.86A1.07 1.07 0 0 0 15 14V2.11A1.07 1.07 0 0 0 13.93 1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  })), type == "traffic" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M1.589 2.539h1.98v1.98h-1.98zM5.425 2.539h8.986v1.98H5.425zM1.589 6.979h1.98v1.98h-1.98zM5.425 6.979h8.986v1.98H5.425zM1.589 11.481h1.98v1.98h-1.98zM5.425 11.481h4.992v1.98H5.425z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }), type == "stream" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2.5 10.9c-1 0-1.7-.8-1.7-1.8 0-.8.5-1.5 1.3-1.7V7c0-1.4 1.1-2.6 2.5-2.6.2 0 .5.1.7.1C5.9 3 7.4 2 9.1 2c2.1 0 3.9 1.7 4 3.8 1.3.2 2.2 1.3 2.2 2.6 0 1.2-1.2 2.5-2.2 2.5H2.5zM10 7.4l.1-.1c.1-.1 0-.3-.1-.4L7.6 5.2c-.1 0-.1-.1-.2-.1-.2 0-.3.2-.3.4V9c.1.1.3.1.5 0L10 7.4zm-.4 7.1c-.7 0-1.3-.6-1.3-1.3 0-.6.6-1.2 1.3-1.2.6 0 1.2.6 1.2 1.2 0 .7-.6 1.3-1.2 1.3zm-7.9-1.7h5.1c.3 0 .5.2.5.5s-.2.5-.5.5H1.7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm10.7 0h1.3c.3 0 .5.2.5.5s-.2.5-.5.5h-1.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: this
  }), type == "custom" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.417 3.979l-3.332 3.333L8.677 4.9l3.328-3.328a4.791 4.791 0 0 0-6.661 5.273 2.39 2.39 0 0 1-.665 2.069l-3.52 3.52 2.406 2.406 3.521-3.518a2.391 2.391 0 0 1 2.1-.661 4.79 4.79 0 0 0 5.234-6.682z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }), type == "apps" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.68 6.599H9.401V1.32H6.599v5.279H1.32v2.802h5.279v5.279h2.802V9.401h5.279V6.599z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: this
  }), type == "info" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M8.15,1a7,7,0,1,0,7,7A7,7,0,0,0,8.15,1ZM9,12.44H7.26V6.93H9ZM9,5.37a.23.23,0,0,1-.23.23H7.49a.23.23,0,0,1-.23-.23V4.12a.23.23,0,0,1,.23-.23H8.74A.23.23,0,0,1,9,4.12Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }), type == "download" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M4.24,2.48h7.52V4.4H4.24Zm7.52,5.84V5.36H4.24V8.32H0l8,5.2,8-5.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: this
  }), type == "remove" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Polygon, {
    color: color,
    points: "14.3 3.63 12.38 1.7 8 6.08 3.63 1.7 1.7 3.63 6.08 8 1.7 12.38 3.63 14.3 8 9.93 12.38 14.3 14.3 12.38 9.93 8 14.3 3.63",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }), type == "wrench" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M14.42,4,11.08,7.31,8.68,4.9,12,1.58A4.79,4.79,0,0,0,5.34,6.84a2.39,2.39,0,0,1-.67,2.07h0L1.16,12.44l2.41,2.41,3.52-3.52a2.39,2.39,0,0,1,2.1-.66A4.79,4.79,0,0,0,14.42,4Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }), type == "play" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M2 2 L14 8 L2 14 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }), type == "like" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    color: color,
    d: "M0 5 C0 3, 1.5 1, 4 1 C6 1, 7.5 2.5, 8 3 C8.5 2.5, 10 1, 12 1 C15 1,  16 3, 16 5 C16 9, 9 14.5, 8 15 C7 14.5, 0 9, 0 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }), type == "unsplash" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    d: "M39.036 34.311h45.297V.179H39.036v34.132zm83.865 20.017v68.264H.467V54.328h38.569v34.133h45.297V54.328h38.568z",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }), type == "next" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    fill: color,
    d: "M2 2 L12 7 V2 H14 V14 H12 V9 L2 14 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }), type == "previous" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    fill: color,
    d: "M2 2 H4 V7 L14 2 V14 L4 8 V14 H2 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: this
  }), type == "previous" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    fill: color,
    d: "M2 2 H4 V7 L14 2 V14 L4 8 V14 H2 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }));
};

Icon.defaultProps = {
  variant: "twitter",
  display: "block",
  size: 24,
  fill: "currentColor"
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Svg.js */ "./elements/Svg.js")["default"], __webpack_require__(/*! ./elements/Path.js */ "./elements/Path.js")["default"], __webpack_require__(/*! ./elements/Polygon.js */ "./elements/Polygon.js")["default"], __webpack_require__(/*! ./elements/Rect.js */ "./elements/Rect.js")["default"], __webpack_require__(/*! ./elements/Polyline.js */ "./elements/Polyline.js")["default"], __webpack_require__(/*! ./elements/Circle.js */ "./elements/Circle.js")["default"]))

/***/ }),

/***/ "./components/IconBlock.js":
/*!*********************************!*\
  !*** ./components/IconBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Icon) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mrmrs/w/color/components/IconBlock.js";



var IconBlock = function IconBlock(_ref) {
  var boxPadding = _ref.boxPadding,
      currentCombination = _ref.currentCombination,
      borderWidth = _ref.borderWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    p: boxPadding,
    bg: currentCombination.bg,
    display: "grid",
    style: {
      justifyItems: "center",
      justifyContent: "space-around",
      gridTemplateColumns: "repeat(auto-fill, minmax(32px,64px))",
      rowGap: '16px'
    },
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "down caret",
    size: 24,
    color: currentCombination.color,
    type: "caretDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "right caret",
    size: 24,
    color: currentCombination.color,
    type: "caretRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "left caret",
    size: 24,
    color: currentCombination.color,
    type: "caretLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "up caret",
    size: 24,
    color: currentCombination.color,
    type: "caretUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "backward",
    size: 24,
    color: currentCombination.color,
    type: "backward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "forward",
    size: 24,
    color: currentCombination.color,
    type: "forward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "left",
    size: 24,
    color: currentCombination.color,
    type: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "right",
    size: 24,
    color: currentCombination.color,
    type: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "reorder",
    size: 24,
    color: currentCombination.color,
    type: "reorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "horizontal resize",
    size: 24,
    color: currentCombination.color,
    type: "resizeHorizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "minus",
    size: 24,
    color: currentCombination.color,
    type: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "plus",
    size: 24,
    color: currentCombination.color,
    type: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "remove",
    size: 24,
    color: currentCombination.color,
    type: "remove",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "hamburger menu",
    size: 24,
    color: currentCombination.color,
    type: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "refresh",
    size: 24,
    color: currentCombination.color,
    type: "refresh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "checkmark",
    size: 24,
    color: currentCombination.color,
    type: "ok",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "server rack",
    size: 24,
    color: currentCombination.color,
    type: "drive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "download",
    size: 24,
    color: currentCombination.color,
    type: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "wrench",
    size: 24,
    color: currentCombination.color,
    type: "wrench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "location pin",
    size: 24,
    color: currentCombination.color,
    type: "network",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "speech bubble",
    size: 24,
    color: currentCombination.color,
    type: "speech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "credit card",
    size: 24,
    color: currentCombination.color,
    type: "creditCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "upload",
    size: 24,
    color: currentCombination.color,
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "pie chart",
    size: 24,
    color: currentCombination.color,
    type: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "collapse arrows",
    size: 24,
    color: currentCombination.color,
    type: "collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "expand arrows",
    size: 24,
    color: currentCombination.color,
    type: "expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "file",
    size: 24,
    color: currentCombination.color,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "filter",
    size: 24,
    color: currentCombination.color,
    type: "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "gear",
    size: 24,
    color: currentCombination.color,
    type: "gear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "shield",
    size: 24,
    color: currentCombination.color,
    type: "shield",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "info",
    size: 24,
    color: currentCombination.color,
    type: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "mail envelope",
    size: 24,
    color: currentCombination.color,
    type: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "list",
    size: 24,
    color: currentCombination.color,
    type: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "ok sign",
    size: 24,
    color: currentCombination.color,
    type: "okSign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "pause",
    size: 24,
    color: currentCombination.color,
    type: "pause",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "lightning bolt",
    size: 24,
    color: currentCombination.color,
    type: "bolt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "flow chart",
    size: 24,
    color: currentCombination.color,
    type: "flowchart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "clipboard",
    size: 24,
    color: currentCombination.color,
    type: "clipboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "lock",
    size: 24,
    color: currentCombination.color,
    type: "lock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "help",
    size: 24,
    color: currentCombination.color,
    type: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "clock",
    size: 24,
    color: currentCombination.color,
    type: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "door",
    size: 24,
    color: currentCombination.color,
    type: "door",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "user",
    size: 24,
    color: currentCombination.color,
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "quotes",
    size: 24,
    color: currentCombination.color,
    type: "quotes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "github",
    size: 24,
    color: currentCombination.color,
    type: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "linkedin",
    size: 24,
    color: currentCombination.color,
    type: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "facebook",
    size: 24,
    color: currentCombination.color,
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "twitter",
    size: 24,
    color: currentCombination.color,
    type: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"]))

/***/ }),

/***/ "./components/IconOutlineBlock.js":
/*!****************************************!*\
  !*** ./components/IconOutlineBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Icon) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getContrastScore */ "./utils/getContrastScore.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
var _jsxFileName = "/Users/mrmrs/w/color/components/IconOutlineBlock.js";




var IconSolid =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e4p84oy0"
})(styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["width"], styled_system__WEBPACK_IMPORTED_MODULE_3__["height"], styled_system__WEBPACK_IMPORTED_MODULE_3__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_3__["position"], styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], {
  transition: "all .25s ease-in"
});
IconSolid.defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
  borderRadius: "100%"
};
var IconOutline =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e4p84oy1"
})(styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["width"], styled_system__WEBPACK_IMPORTED_MODULE_3__["height"], styled_system__WEBPACK_IMPORTED_MODULE_3__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_3__["position"], styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], {
  transition: "all .25s ease-in"
});
IconOutline.defaultProps = {
  border: "1px solid currentColor",
  borderRadius: "100%",
  height: 32,
  width: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

var IconOutlineBlock = function IconOutlineBlock(_ref) {
  var boxPadding = _ref.boxPadding,
      currentCombination = _ref.currentCombination,
      borderWidth = _ref.borderWidth;
  var colorParentBgContrastValue = Object(_utils_getContrastScore__WEBPACK_IMPORTED_MODULE_2__["default"])(currentCombination.color, currentCombination.parentBg);
  var iconOutlineColor = colorParentBgContrastValue < 4.5 ? currentCombination.bg : currentCombination.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    p: boxPadding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    display: "grid",
    style: {
      justifyContent: 'space-around',
      justifyItems: "center",
      gridTemplateColumns: "repeat(auto-fill, minmax(32px,64px))",
      rowGap: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "down caret",
    size: 16,
    color: currentCombination.color,
    type: "caretDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "right caret",
    size: 16,
    color: currentCombination.color,
    type: "caretRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "left caret",
    size: 16,
    color: currentCombination.color,
    type: "caretLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "up caret",
    size: 16,
    color: currentCombination.color,
    type: "caretUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "backward",
    size: 16,
    color: currentCombination.color,
    type: "backward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "forward",
    size: 16,
    color: currentCombination.color,
    type: "forward",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "left",
    size: 16,
    color: currentCombination.color,
    type: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "right",
    size: 16,
    color: currentCombination.color,
    type: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "reorder",
    size: 16,
    color: currentCombination.color,
    type: "reorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "horizontal resize",
    size: 16,
    color: currentCombination.color,
    type: "resizeHorizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "minus",
    size: 16,
    color: currentCombination.color,
    type: "minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "plus",
    size: 16,
    color: currentCombination.color,
    type: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "remove",
    size: 16,
    color: currentCombination.color,
    type: "remove",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "hamburger menu",
    size: 16,
    color: currentCombination.color,
    type: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "refresh",
    size: 16,
    color: currentCombination.color,
    type: "refresh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "checkmark",
    size: 16,
    color: currentCombination.color,
    type: "ok",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "server rack",
    size: 16,
    color: currentCombination.color,
    type: "drive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "download",
    size: 16,
    color: currentCombination.color,
    type: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "wrench",
    size: 16,
    color: currentCombination.color,
    type: "wrench",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "location pin",
    size: 16,
    color: currentCombination.color,
    type: "network",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "speech bubble",
    size: 16,
    color: currentCombination.color,
    type: "speech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "credit card",
    size: 16,
    color: currentCombination.color,
    type: "creditCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "upload",
    size: 16,
    color: currentCombination.color,
    type: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "pie chart",
    size: 16,
    color: currentCombination.color,
    type: "chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconSolid, {
    bg: currentCombination.bg,
    borderColor: currentCombination.borderColor,
    border: "".concat(borderWidth, "px solid"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "collapse arrows",
    size: 16,
    color: currentCombination.color,
    type: "collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "expand arrows",
    size: 16,
    color: iconOutlineColor,
    type: "expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "file",
    size: 16,
    color: iconOutlineColor,
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "filter",
    size: 16,
    color: iconOutlineColor,
    type: "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "gear",
    size: 16,
    color: iconOutlineColor,
    type: "gear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "shield",
    size: 16,
    color: iconOutlineColor,
    type: "shield",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "info",
    size: 16,
    color: iconOutlineColor,
    type: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "mail",
    size: 16,
    color: iconOutlineColor,
    type: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "list",
    size: 16,
    color: iconOutlineColor,
    type: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "ok sign",
    size: 16,
    color: iconOutlineColor,
    type: "okSign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "pause",
    size: 16,
    color: iconOutlineColor,
    type: "pause",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "lightning bolt",
    size: 16,
    color: iconOutlineColor,
    type: "bolt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "flow chart",
    size: 16,
    color: iconOutlineColor,
    type: "flowchart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "clipboard",
    size: 16,
    color: iconOutlineColor,
    type: "clipboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "lock",
    size: 16,
    color: iconOutlineColor,
    type: "lock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "help",
    size: 16,
    color: iconOutlineColor,
    type: "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "time",
    size: 16,
    color: iconOutlineColor,
    type: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "door",
    size: 16,
    color: iconOutlineColor,
    type: "door",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "user",
    size: 16,
    color: iconOutlineColor,
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "quotes",
    size: 16,
    color: iconOutlineColor,
    type: "quotes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "github",
    size: 16,
    color: iconOutlineColor,
    type: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "linkedin",
    size: 16,
    color: iconOutlineColor,
    type: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "facebook",
    size: 16,
    color: iconOutlineColor,
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOutline, {
    border: "".concat(borderWidth + 2, "px solid"),
    color: iconOutlineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    title: "twitter",
    size: 16,
    color: iconOutlineColor,
    type: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconOutlineBlock);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"]))

/***/ }),

/***/ "./components/SiteFooter.js":
/*!**********************************!*\
  !*** ./components/SiteFooter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Footer, Div, A, Logo, Span, P, H4, Icon) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mrmrs/w/color/components/SiteFooter.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var SiteFooter = function SiteFooter(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["variant"]);

  switch (variant) {
    case 1:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, _extends({
        bg: "white",
        color: "gray.0",
        display: "flex",
        flexWrap: "wrap",
        py: 4,
        px: 4,
        borderTop: "1px solid rgba(0,0,0,.1)"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        width: [1, 1 / 2],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        display: "inline-flex",
        alignItems: "center",
        href: "https://cloudflare.design",
        fontWeight: 700,
        fontSize: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        variant: "mark",
        width: 32,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
        ml: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Cloudflare Design")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
        fontSize: 2,
        mt: 2,
        mb: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "We're growing our teams in San Francisco, London, and Austin! We welcome applications from everyone and especially encourage underrepresented minorities to apply."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "To apply, please email ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        href: "mailto:designjobs@cloudflare.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "designjobs@cloudflare.com"), " with your portfolio and 3-5 sentences about why you're interested in joining our team.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        width: [1, 1 / 4],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, {
        fontWeight: 600,
        fontSize: 2,
        mt: [4, 0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Colophon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        py: 1,
        lineHeight: 1.5,
        fontSize: 2,
        display: "block",
        href: "https://github.com/gka/chroma.js/",
        children: "Chroma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        py: 1,
        lineHeight: 1.5,
        fontSize: 2,
        display: "block",
        href: "https://github.com/jxnblk/colorable",
        children: "Colorable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        py: 1,
        lineHeight: 1.5,
        fontSize: 2,
        display: "block",
        href: "https://github.com/lyft/coloralgorithm",
        children: "ColorBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        py: 1,
        lineHeight: 1.5,
        fontSize: 2,
        display: "block",
        href: "https://cssstats.com",
        children: "Css Stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        py: 1,
        lineHeight: 1.5,
        fontSize: 2,
        display: "block",
        href: "https://github.com/jxnblk/palx",
        children: "Palx",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        py: 1,
        lineHeight: 1.5,
        fontSize: 2,
        display: "block",
        href: "https://unsplash.com/developers",
        children: "Unsplash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        mt: [3, 0],
        width: [1, 1 / 4],
        textAlign: ['left', 'right'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
        href: "https://github.com/cloudflare-design",
        fontSize: 2,
        color: "blue.4",
        display: "inline-flex",
        alignItems: "center",
        fontWeight: 700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        title: "github",
        color: "gray.2",
        size: "20",
        type: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
        ml: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "GitHub"))));
  }
};

SiteFooter.defaultProps = {
  variant: 1
};
/* harmony default export */ __webpack_exports__["default"] = (SiteFooter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Footer.js */ "./elements/Footer.js")["default"], __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./elements/A.js */ "./elements/A.js")["default"], __webpack_require__(/*! ./components/Logo.js */ "./components/Logo.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./elements/P.js */ "./elements/P.js")["default"], __webpack_require__(/*! ./elements/H4.js */ "./elements/H4.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.b0d145e4dfd9c195e82f.hot-update.js.map