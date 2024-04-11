"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);
  function IndecisionApp(props) {
    var _this;
    _classCallCheck(this, IndecisionApp);
    _this = _callSuper(this, IndecisionApp, [props]);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  }
  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        //why try catch? as {JSON.parse('{12}')}  throws an error unexpected token '{'
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          }); //to update options array, as both the variable name is same therefore options only, and not (options : options).
        }
      } catch (e) {
        // if error, do nothing!
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(perpProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json); //'key',data
      }
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var select = this.state.options[randomNumber];
      alert(select);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(option)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      //const title = 'Indecision App';
      var subtitle = 'Put your life in the hands of a computer.';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header /*title={title}*/, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        handleDeleteOption: this.handleDeleteOption
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);
  return IndecisionApp;
}(React.Component);
IndecisionApp.defaultProps = {
  options: []
};
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subtitle));
};
Header.defaultProps = {
  title: 'Indecision App'
};
/* class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
} */
var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.handlePick
  }, "Let me select an option for you"));
};
/* class Action extends React.Component{
    render(){
        return(
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>Let me select an option for you</button>
            </div>
        );
    }
}  */
var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please add an option to get started!"), /*#__PURE__*/React.createElement(Option, {
    listItem: props.options,
    handleDeleteOption: props.handleDeleteOption
  }), /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All Options"));
};
/* class Options extends React.Component{
    constructor(props){
         super(props);
    }
    render(){
       return(
        <div>
            <p>Here are some options</p>
            <Option listItem={this.props.options}/>
            <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
        </div>
       );
    }
} */
var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ol", null, props.listItem.map(function (Item) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
      key: Item
    }, Item), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        props.handleDeleteOption(Item);
      }
    }, "remove"));
  })));
};
/* class Option extends React.Component{
    render(){
        return(
            <div>
                <ol>
                    {
                        this.props.listItem.map((Item) => {
                            return <li key={Item}>{Item}</li>;
                        })
                    }
                </ol>
            </div>
        );
    }
} */
var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);
  function AddOption(props) {
    var _this2;
    _classCallCheck(this, AddOption);
    _this2 = _callSuper(this, AddOption, [props]);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }
  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      if (!error) {
        e.target.elements.option.value = ''; // to clear the input box after enter.
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);
  return AddOption;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
