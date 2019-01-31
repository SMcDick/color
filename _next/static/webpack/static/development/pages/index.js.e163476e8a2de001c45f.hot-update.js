webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CombinationTools.js":
/*!****************************************!*\
  !*** ./components/CombinationTools.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Icon, Span, Flex) {/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var _jsxFileName = "/Users/sammdc/w/color/components/CombinationTools.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ComboColor = function ComboColor(_ref) {
  var name = _ref.name,
      comboProperty = _ref.comboProperty,
      currentCombination = _ref.currentCombination,
      pinnedColors = _ref.pinnedColors,
      onPinColor = _ref.onPinColor,
      onClick = _ref.onClick,
      _onDrop = _ref.onDrop,
      props = _objectWithoutProperties(_ref, ["name", "comboProperty", "currentCombination", "pinnedColors", "onPinColor", "onClick", "onDrop"]);

  var onColorClick = function onColorClick() {
    return onClick(currentCombination[comboProperty], comboProperty);
  };

  var onDragOver = function onDragOver(e) {
    e.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, _extends({
    onDragOver: onDragOver,
    onDrop: function onDrop() {
      return _onDrop(comboProperty);
    },
    py: 1,
    alignItems: "center",
    display: "flex",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      position: "relative"
    }),
    bg: "white",
    maxWidth: "100%"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    width: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: 1,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      cursor: "pointer",
      ":hover > svg": {
        opacity: 1
      }
    }),
    onClick: onPinColor(comboProperty),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    type: "lock",
    color: "gray.0",
    size: 16,
    mx: "auto",
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      opacity: pinnedColors[comboProperty] ? 1 : 0.25,
      ":hover": {
        opacity: 1
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Div, {
    mr: 2,
    width: [1, 64],
    bg: currentCombination[comboProperty],
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])({
      cursor: "pointer",
      outline: "1px solid rgba(0,0,0,.1)"
    }),
    onClick: onColorClick,
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    fontSize: 1,
    width: [128, "auto"],
    display: ["block", "inline-block"],
    fontWeight: 500,
    pr: 1,
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, name));
};

var CombinationTools = function CombinationTools(_ref2) {
  var currentCombination = _ref2.currentCombination,
      pinnedColors = _ref2.pinnedColors,
      onPrevious = _ref2.onPrevious,
      onNext = _ref2.onNext,
      onPinColor = _ref2.onPinColor,
      onLike = _ref2.onLike,
      onAutoCycling = _ref2.onAutoCycling,
      isRunning = _ref2.isRunning,
      onColorClick = _ref2.onColorClick,
      onDrop = _ref2.onDrop,
      props = _objectWithoutProperties(_ref2, ["currentCombination", "pinnedColors", "onPrevious", "onNext", "onPinColor", "onLike", "onAutoCycling", "isRunning", "onColorClick", "onDrop"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, _extends({
    flexWrap: ["wrap", "nowrap"],
    fontSize: 1,
    justifyContent: "center",
    mb: 2
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Parent Bg",
    comboProperty: "parentBg",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Color",
    comboProperty: "color",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Bg",
    comboProperty: "bg",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComboColor, {
    name: "Border",
    comboProperty: "borderColor",
    currentCombination: currentCombination,
    pinnedColors: pinnedColors,
    onPinColor: onPinColor,
    onClick: onColorClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CombinationTools);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./elements/Div.js */ "./elements/Div.js")["default"], __webpack_require__(/*! ./components/Icon.js */ "./components/Icon.js")["default"], __webpack_require__(/*! ./elements/Span.js */ "./elements/Span.js")["default"], __webpack_require__(/*! ./components/Flex.js */ "./components/Flex.js")["default"]))

/***/ })

})
//# sourceMappingURL=index.js.e163476e8a2de001c45f.hot-update.js.map