"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);
  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);
    return _callSuper(this, IndecisionApp, arguments);
  }
  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = 'Indecision App';
      var subtitle = 'Put your life in the hands of a computer.';
      var options = ['Shashikant', 'Snehal', 'Pranil'];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, null), /*#__PURE__*/React.createElement(Options, {
        options: options
      }), /*#__PURE__*/React.createElement(AddOption, null));
    }
  }]);
  return IndecisionApp;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  function Header() {
    _classCallCheck(this, Header);
    return _callSuper(this, Header, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.subtitle));
    }
  }]);
  return Header;
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component3) {
  _inherits(Action, _React$Component3);
  function Action() {
    _classCallCheck(this, Action);
    return _callSuper(this, Action, arguments);
  }
  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "Let me select an option for you"));
    }
  }]);
  return Action;
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component4) {
  _inherits(Options, _React$Component4);
  function Options() {
    _classCallCheck(this, Options);
    return _callSuper(this, Options, arguments);
  }
  _createClass(Options, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here are some options"), /*#__PURE__*/React.createElement(Option, {
        listItem: this.props.options
      }));
    }
  }]);
  return Options;
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component5) {
  _inherits(Option, _React$Component5);
  function Option() {
    _classCallCheck(this, Option);
    return _callSuper(this, Option, arguments);
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ol", null, this.props.listItem.map(function (Item) {
        return /*#__PURE__*/React.createElement("li", {
          key: Item
        }, Item);
      })));
    }
  }]);
  return Option;
}(React.Component);
var AddOption = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddOption, _React$Component6);
  function AddOption() {
    _classCallCheck(this, AddOption);
    return _callSuper(this, AddOption, arguments);
  }
  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option"));
    }
  }]);
  return AddOption;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
