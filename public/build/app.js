"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _controllers_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/Form */ "./assets/controllers/Form.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "REJESTRACJA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_controllers_Form__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./assets/components/AdditionalFields.js":
/*!***********************************************!*\
  !*** ./assets/components/AdditionalFields.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./assets/components/Checkbox.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./assets/components/Input.js");




var AdditionalFields = function AdditionalFields(_ref) {
  var fields = _ref.fields;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, fields.map(function (field, key) {
    if (field.type === 'checkbox') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: field.id,
        key: key,
        label: field.label,
        name: field.name,
        checked: field.checked
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: 'text',
        key: key,
        name: field.name,
        value: '',
        label: field.label
      });
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdditionalFields);

/***/ }),

/***/ "./assets/components/Button.js":
/*!*************************************!*\
  !*** ./assets/components/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Button = function Button() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button",
    type: "submit"
  }, "Zapisz"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./assets/components/Checkbox.js":
/*!***************************************!*\
  !*** ./assets/components/Checkbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Checkbox = /*#__PURE__*/function (_Component) {
  _inherits(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: _this.props.name,
      label: _this.props.label
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          name = _this$state.name,
          label = _this$state.label;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: name
      }));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./assets/components/Input.js":
/*!************************************!*\
  !*** ./assets/components/Input.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      type: _this.props.type,
      label: _this.props.label,
      value: _this.props.value,
      name: _this.props.name,
      required: _this.props.required,
      error: _this.props.error,
      errorText: _this.props.errorText,
      regex: _this.props.regex
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var required = target.required;

      if (required && value === '') {
        _this.setState({
          error: true,
          errorText: 'Pole nie może byc puste'
        });
      } else {
        _this.setState({
          error: false
        });
      }

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDivBlur", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      if (name === 'email' && value !== "") {
        var regex = new RegExp(/\S+@\S+\.\S+/);

        if (!regex.test(value)) {
          _this.setState({
            error: true,
            errorText: 'Podany email jest nieprawidłowy'
          });
        }
      }
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          label = _this$state.label,
          value = _this$state.value,
          type = _this$state.type,
          name = _this$state.name,
          required = _this$state.required,
          error = _this$state.error,
          errorText = _this$state.errorText,
          regex = _this$state.regex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, label, required ? '*' : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "field",
        type: type,
        name: name,
        onChange: this.handleInputChange,
        onBlur: this.handleDivBlur,
        value: value,
        required: required,
        pattern: regex
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "error",
        style: {
          color: "#ff1e1e",
          fontSize: "14px",
          fontWeight: "bold",
          display: error ? "unset" : 'none'
        }
      }, errorText));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Input, "defaultProps", {
  required: false
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./assets/components/Select.js":
/*!*************************************!*\
  !*** ./assets/components/Select.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      options: [{
        value: 'tester',
        label: 'Tester'
      }, {
        value: 'developer',
        label: 'Developer'
      }, {
        value: 'projectManager',
        label: 'Project Manager'
      }],
      name: _this.props.name,
      label: _this.props.label,
      id: _this.props.id,
      onChange: _this.props.onChange,
      required: _this.props.required
    });

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          label = _this$state.label,
          name = _this$state.name,
          id = _this$state.id,
          options = _this$state.options,
          onChange = _this$state.onChange,
          required = _this$state.required;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, label, required ? '*' : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        name: name,
        id: id,
        onChange: onChange,
        className: "field",
        required: required
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: ""
      }, "-"), options.map(function (option) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
          value: option.value,
          key: option.value
        }, option.label);
      })));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Select, "defaultProps", {
  required: false
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./assets/components/Textarea.js":
/*!***************************************!*\
  !*** ./assets/components/Textarea.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Textarea = /*#__PURE__*/function (_Component) {
  _inherits(Textarea, _Component);

  var _super = _createSuper(Textarea);

  function Textarea() {
    var _this;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      label: _this.props.label,
      value: _this.props.value,
      name: _this.props.name,
      required: _this.props.required,
      error: _this.props.error,
      errorText: _this.props.errorText
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var target = event.target;
      var value = target.value;
      var required = target.required;

      if (required && value === '') {
        _this.setState({
          error: true,
          errorText: 'Pole nie może byc puste'
        });
      } else {
        _this.setState({
          error: false
        });
      }

      _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          label = _this$state.label,
          name = _this$state.name,
          required = _this$state.required,
          error = _this$state.error,
          errorText = _this$state.errorText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, label, required ? '*' : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
        className: "field",
        rows: "3",
        name: name,
        form: "form",
        onChange: this.handleInputChange,
        required: required
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "error",
        style: {
          color: "#ff1e1e",
          fontSize: "14px",
          fontWeight: "bold",
          display: error ? "unset" : 'none'
        }
      }, errorText));
    }
  }]);

  return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Textarea, "defaultProps", {
  required: false
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);

/***/ }),

/***/ "./assets/controllers/Form.js":
/*!************************************!*\
  !*** ./assets/controllers/Form.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Input */ "./assets/components/Input.js");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Select */ "./assets/components/Select.js");
/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textarea */ "./assets/components/Textarea.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./assets/components/Button.js");
/* harmony import */ var _components_AdditionalFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AdditionalFields */ "./assets/components/AdditionalFields.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var fields = [];

      _this.setState({
        fields: fields
      });

      _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      fields: _this.props.fields
    });

    _defineProperty(_assertThisInitialized(_this), "changeFields", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var position, fieldsArray;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                position = event.target.value;
                fieldsArray = [];

                if (position === 'tester') {
                  fieldsArray = [{
                    type: 'input',
                    name: 'testingSystems',
                    label: 'Systemy testujące'
                  }, {
                    type: 'input',
                    name: 'reportSystems',
                    label: 'Systemy raportowe'
                  }, {
                    type: 'checkbox',
                    name: 'selenium',
                    label: 'Zna Selenium'
                  }];
                } else if (position === 'developer') {
                  fieldsArray = [{
                    type: 'input',
                    name: 'ide',
                    label: 'środowiska ide'
                  }, {
                    type: 'input',
                    name: 'languages',
                    label: 'Języki programowania'
                  }, {
                    type: 'checkbox',
                    name: 'mysql',
                    label: 'Zna MySQL'
                  }];
                } else if (position === 'projectManager') {
                  fieldsArray = [{
                    type: 'input',
                    name: 'projectMethods',
                    label: 'metodologie prowadzenia projektów'
                  }, {
                    type: 'input',
                    name: 'reportSystems',
                    label: 'systemy raportowe'
                  }, {
                    type: 'checkbox',
                    name: 'scrum',
                    label: 'Zna Scrum'
                  }];
                }

                _context.next = 5;
                return _this.removeAll(event);

              case 5:
                _this.setState({
                  fields: fieldsArray
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "removeAll", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.next = 3;
                return _this.setState({
                  fields: []
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Form, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var data = {};

      var _iterator = _createForOfIteratorHelper(formData.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          data[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      fetch("/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        dataType: 'JSON',
        body: JSON.stringify(data)
      }).then(function (response) {
        if (response.ok == true) {
          alert('Zarejestrowano!');
        } else {
          alert('Nie udało się zarejestrować!');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.state.options;
      var fields = this.state.fields;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit,
        id: "form",
        style: {
          background: '#2b2b2b',
          margin: '0 auto',
          width: '80%',
          maxWidth: '600px',
          padding: '14px',
          borderRadius: '14px',
          marginTop: '14px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: 'text',
        name: 'name',
        value: '',
        label: 'Imię',
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: 'text',
        name: 'surname',
        value: '',
        label: 'Nazwisko',
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: 'text',
        name: 'email',
        value: '',
        label: 'Email',
        required: true,
        regex: '\\S+@\\S+\\.\\S+'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Textarea__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: 'description',
        value: '',
        label: 'Opis'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        options: options,
        name: 'position',
        value: '',
        label: 'Stanowisko',
        onChange: this.changeFields.bind(this),
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AdditionalFields__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fields: fields
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Form, "defaultProps", {
  fields: []
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0QsUUFBUSxFQUFFLElBQXpFO1FBQStFLEtBQUssRUFBRTtNQUF0RixFQUhKLGVBSUksMkRBQUMsNERBQUQ7UUFBVSxJQUFJLEVBQUUsYUFBaEI7UUFBK0IsS0FBSyxFQUFFLEVBQXRDO1FBQTBDLEtBQUssRUFBRTtNQUFqRCxFQUpKLGVBS0ksMkRBQUMsMERBQUQ7UUFBUSxPQUFPLEVBQUUvQixPQUFqQjtRQUEwQixJQUFJLEVBQUUsVUFBaEM7UUFBNEMsS0FBSyxFQUFFLEVBQW5EO1FBQXVELEtBQUssRUFBRSxZQUE5RDtRQUE0RSxRQUFRLEVBQUUsS0FBS2dDLFlBQUwsQ0FBa0IzQixJQUFsQixDQUF1QixJQUF2QixDQUF0RjtRQUFvSCxRQUFRLEVBQUU7TUFBOUgsRUFMSixlQU1JLDJEQUFDLG9FQUFEO1FBQWtCLE1BQU0sRUFBRXBDO01BQTFCLEVBTkosZUFPSSwyREFBQywwREFBRCxPQVBKLENBREo7SUFXSDs7OztFQS9GY1c7O2dCQUFicEIsc0JBUW9CO0VBQ2xCUyxNQUFNLEVBQUU7QUFEVTs7QUEwRjFCLGlFQUFlVCxJQUFmOzs7Ozs7Ozs7OztBQ3pHQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQWRkaXRpb25hbEZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9jb250cm9sbGVycy9Gb3JtJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xucm9vdC5yZW5kZXIoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxoMT5SRUpFU1RSQUNKQTwvaDE+XG4gICAgICAgIDxGb3JtIC8+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9DaGVja2JveFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuXHJcbmNvbnN0IEFkZGl0aW9uYWxGaWVsZHMgPSAoe2ZpZWxkc30pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q2hlY2tib3ggaWQ9e2ZpZWxkLmlkfSBrZXk9e2tleX0gbGFiZWw9e2ZpZWxkLmxhYmVsfSBuYW1lPXtmaWVsZC5uYW1lfSBjaGVja2VkPXtmaWVsZC5jaGVja2VkfS8+XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPElucHV0IHR5cGU9eyd0ZXh0J30ga2V5PXtrZXl9IG5hbWU9e2ZpZWxkLm5hbWV9IHZhbHVlPXsnJ30gbGFiZWw9e2ZpZWxkLmxhYmVsfS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRpdGlvbmFsRmllbGRzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ3JpZ2h0J319PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlphcGlzejwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmxhYmVsXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbGFiZWwgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBuYW1lPXtuYW1lfSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnR5cGUsXHJcbiAgICAgICAgbGFiZWw6IHRoaXMucHJvcHMubGFiZWwsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0aGlzLnByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgIGVycm9yOiB0aGlzLnByb3BzLmVycm9yLFxyXG4gICAgICAgIGVycm9yVGV4dDogdGhpcy5wcm9wcy5lcnJvclRleHQsXHJcbiAgICAgICAgcmVnZXg6IHRoaXMucHJvcHMucmVnZXhcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkID0gdGFyZ2V0LnJlcXVpcmVkO1xyXG5cclxuICAgICAgICBpZiAocmVxdWlyZWQgJiYgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvclRleHQ6ICdQb2xlIG5pZSBtb8W8ZSBieWMgcHVzdGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRGl2Qmx1ciAgPSBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09PSAnZW1haWwnICYmIHZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXFxTK0BcXFMrXFwuXFxTKy8pO1xyXG4gICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QodmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dDogJ1BvZGFueSBlbWFpbCBqZXN0IG5pZXByYXdpZMWCb3d5J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlLCB0eXBlLCBuYW1lLCByZXF1aXJlZCwgZXJyb3IsIGVycm9yVGV4dCwgcmVnZXggfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfXtyZXF1aXJlZD8nKic6Jyd9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmllbGRcIiB0eXBlPXt0eXBlfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRGl2Qmx1cn0gdmFsdWU9e3ZhbHVlfSByZXF1aXJlZD17cmVxdWlyZWR9IHBhdHRlcm49e3JlZ2V4fS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCIgc3R5bGU9e3tjb2xvcjogXCIjZmYxZTFlXCIsIGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGRpc3BsYXk6IGVycm9yP1widW5zZXRcIjonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JUZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICd0ZXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUZXN0ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGV2ZWxvcGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3Byb2plY3RNYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvamVjdCBNYW5hZ2VyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgbGFiZWw6IHRoaXMucHJvcHMubGFiZWwsXHJcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2UsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIG5hbWUsIGlkLCBvcHRpb25zLCBvbkNoYW5nZSwgcmVxdWlyZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfXtyZXF1aXJlZD8nKic6Jyd9XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9e25hbWV9IGlkPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJmaWVsZFwiIHJlcXVpcmVkPXtyZXF1aXJlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0ga2V5PXtvcHRpb24udmFsdWV9PntvcHRpb24ubGFiZWx9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICByZXF1aXJlZDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5sYWJlbCxcclxuICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRoaXMucHJvcHMucmVxdWlyZWQsXHJcbiAgICAgICAgZXJyb3I6IHRoaXMucHJvcHMuZXJyb3IsXHJcbiAgICAgICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yVGV4dFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCByZXF1aXJlZCA9IHRhcmdldC5yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVpcmVkICYmIHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JUZXh0OiAnUG9sZSBuaWUgbW/FvGUgYnljIHB1c3RlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBuYW1lLCByZXF1aXJlZCwgZXJyb3IsIGVycm9yVGV4dCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9e3JlcXVpcmVkPycqJzonJ31cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmaWVsZFwiIHJvd3M9XCIzXCIgbmFtZT17bmFtZX0gZm9ybT1cImZvcm1cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ9e3JlcXVpcmVkfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiIHN0eWxlPXt7Y29sb3I6IFwiI2ZmMWUxZVwiLCBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBkaXNwbGF5OiBlcnJvcj9cInVuc2V0XCI6J25vbmUnfX0+e2Vycm9yVGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcclxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRhcmVhXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBBZGRpdGlvbmFsRmllbGRzIGZyb20gXCIuLi9jb21wb25lbnRzL0FkZGl0aW9uYWxGaWVsZHNcIjtcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBbXVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpZWxkc30pXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZmllbGRzOiB0aGlzLnByb3BzLmZpZWxkcyxcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VGaWVsZHMgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgbGV0IGZpZWxkc0FycmF5ID0gW107XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAndGVzdGVyJykge1xyXG4gICAgICAgICAgICBmaWVsZHNBcnJheSA9IFtcclxuICAgICAgICAgICAgICAgIHt0eXBlOiAnaW5wdXQnLCBuYW1lOiAndGVzdGluZ1N5c3RlbXMnLCBsYWJlbDogJ1N5c3RlbXkgdGVzdHVqxIVjZSd9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdpbnB1dCcsIG5hbWU6ICdyZXBvcnRTeXN0ZW1zJywgbGFiZWw6ICdTeXN0ZW15IHJhcG9ydG93ZSd9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdjaGVja2JveCcsIG5hbWU6ICdzZWxlbml1bScsIGxhYmVsOiAnWm5hIFNlbGVuaXVtJ31cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdkZXZlbG9wZXInKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc0FycmF5ID0gW1xyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdpbnB1dCcsIG5hbWU6ICdpZGUnLCBsYWJlbDogJ8Wbcm9kb3dpc2thIGlkZSd9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdpbnB1dCcsIG5hbWU6ICdsYW5ndWFnZXMnLCBsYWJlbDogJ0rEmXp5a2kgcHJvZ3JhbW93YW5pYSd9LFxyXG4gICAgICAgICAgICAgICAge3R5cGU6ICdjaGVja2JveCcsIG5hbWU6ICdteXNxbCcsIGxhYmVsOiAnWm5hIE15U1FMJ31cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdwcm9qZWN0TWFuYWdlcicpIHtcclxuICAgICAgICAgICAgZmllbGRzQXJyYXkgPSBbXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ2lucHV0JywgbmFtZTogJ3Byb2plY3RNZXRob2RzJywgbGFiZWw6ICdtZXRvZG9sb2dpZSBwcm93YWR6ZW5pYSBwcm9qZWt0w7N3J30sXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ2lucHV0JywgbmFtZTogJ3JlcG9ydFN5c3RlbXMnLCBsYWJlbDogJ3N5c3RlbXkgcmFwb3J0b3dlJ30sXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogJ2NoZWNrYm94JywgbmFtZTogJ3NjcnVtJywgbGFiZWw6ICdabmEgU2NydW0nfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMucmVtb3ZlQWxsKGV2ZW50KVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZHNBcnJheSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFsbCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaWVsZHM6IFtdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goXCIvcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1phcmVqZXN0cm93YW5vIScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ05pZSB1ZGHFgm8gc2nEmSB6YXJlamVzdHJvd2HEhyEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdGF0ZS5vcHRpb25zXHJcbiAgICAgICAgY29uc3QgeyBmaWVsZHMgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyB0aGlzLmhhbmRsZVN1Ym1pdCB9IGlkPVwiZm9ybVwiIHN0eWxlPXt7YmFja2dyb3VuZDogJyMyYjJiMmInLCBtYXJnaW46ICcwIGF1dG8nLCB3aWR0aDogJzgwJScsIG1heFdpZHRoOiAnNjAwcHgnLCBwYWRkaW5nOiAnMTRweCcsIGJvcmRlclJhZGl1czogJzE0cHgnLCBtYXJnaW5Ub3A6ICcxNHB4J319PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gbmFtZT17J25hbWUnfSB2YWx1ZT17Jyd9IGxhYmVsPXsnSW1pxJknfSByZXF1aXJlZD17dHJ1ZX0vPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gbmFtZT17J3N1cm5hbWUnfSB2YWx1ZT17Jyd9IGxhYmVsPXsnTmF6d2lza28nfSByZXF1aXJlZD17dHJ1ZX0vPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gbmFtZT17J2VtYWlsJ30gdmFsdWU9eycnfSBsYWJlbD17J0VtYWlsJ30gcmVxdWlyZWQ9e3RydWV9IHJlZ2V4PXsnXFxcXFMrQFxcXFxTK1xcXFwuXFxcXFMrJ30gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBuYW1lPXsnZGVzY3JpcHRpb24nfSB2YWx1ZT17Jyd9IGxhYmVsPXsnT3Bpcyd9Lz5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gbmFtZT17J3Bvc2l0aW9uJ30gdmFsdWU9eycnfSBsYWJlbD17J1N0YW5vd2lza28nfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VGaWVsZHMuYmluZCh0aGlzKX0gcmVxdWlyZWQ9e3RydWV9Lz5cclxuICAgICAgICAgICAgICAgIDxBZGRpdGlvbmFsRmllbGRzIGZpZWxkcz17ZmllbGRzfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJGb3JtIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiQ2hlY2tib3giLCJJbnB1dCIsIkFkZGl0aW9uYWxGaWVsZHMiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsImtleSIsInR5cGUiLCJpZCIsImxhYmVsIiwibmFtZSIsImNoZWNrZWQiLCJCdXR0b24iLCJ0ZXh0QWxpZ24iLCJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJyZXF1aXJlZCIsImVycm9yIiwiZXJyb3JUZXh0IiwicmVnZXgiLCJldmVudCIsInRhcmdldCIsInNldFN0YXRlIiwiUmVnRXhwIiwidGVzdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlRGl2Qmx1ciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsIlNlbGVjdCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIlRleHRhcmVhIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInBvc2l0aW9uIiwiZmllbGRzQXJyYXkiLCJyZW1vdmVBbGwiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJkYXRhIiwiZW50cmllcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGFUeXBlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImFsZXJ0IiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsIndpZHRoIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwiY2hhbmdlRmllbGRzIl0sInNvdXJjZVJvb3QiOiIifQ==