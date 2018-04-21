webpackJsonp([2],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _reactRedux = __webpack_require__(2);

var _main = __webpack_require__(297);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(343);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COMPONENTS
window.alertify = _alertifyjs2.default;

// STORE


// REDUX PROVIDER


_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_main2.default, null)
), document.getElementById('app-container'));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


// COMPONENTS

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _actions = __webpack_require__(323);

var _topBar = __webpack_require__(66);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(67);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _body = __webpack_require__(342);

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    profile: store.user.profile
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _actions.fecthProfile)());
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var unlocked = _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_sideMenu2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'mainContainer', className: 'mainContainer' },
            _react2.default.createElement(_topBar2.default, null),
            _react2.default.createElement(_body2.default, null)
          )
        )
      );

      // const content = this.props.adminLocked ? locked : unlocked
      var content = unlocked;

      return _react2.default.createElement(
        'div',
        null,
        content
      );
    }
  }]);

  return Main;
}(_react2.default.Component)) || _class);
exports.default = Main;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/github/iFact3/frontend/home/main/main.jsx');
}();

;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fecthProfile = fecthProfile;
exports.fecthIsAdminLocked = fecthIsAdminLocked;

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fecthProfile() {

  return function (dispatch) {
    _axios2.default.get('/profile/').then(function (response) {
      dispatch({ type: 'FETCH_PROFILE_FULFILLED', payload: { user: response.data[0].fields, profile: response.data[1].fields } });
    }).catch(function (error) {
      dispatch({ type: 'FETCH_PROFILE_REJECTED', payload: error });
    });
  };
}

function fecthIsAdminLocked() {

  return function (dispatch) {
    _axios2.default.get('/api/userprefs/admin__is_admin_locked/').then(function (response) {
      dispatch({ type: 'FETCH_IS_ADMIN_LOCKED_FULFILLED', payload: response.data.value });
    }).catch(function (error) {
      dispatch({ type: 'FETCH_IS_ADMIN_LOCKED_REJECTED', payload: error });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fecthProfile, 'fecthProfile', '/Volumes/DATOS/github/iFact3/frontend/home/main/actions.js');

  __REACT_HOT_LOADER__.register(fecthIsAdminLocked, 'fecthIsAdminLocked', '/Volumes/DATOS/github/iFact3/frontend/home/main/actions.js');
}();

;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('loader').remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 row landing' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2 landing-container' },
          _react2.default.createElement(
            'h1',
            null,
            'Bienvenido'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'h3',
            null,
            'Elija una opcion para iniciar'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'buttons-container' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/admin' },
                'Administraci\xF3n'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/sales' },
                'Ventas'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/buys' },
                'Compras'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'buttons-container' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/inventories' },
                'Inventarios'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/reports' },
                'Reportes'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'btn btn-default btn-lg landing-btn', href: '/' },
                'Home'
              )
            )
          )
        )
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Body, 'Body', '/Volumes/DATOS/github/iFact3/frontend/home/body/body.jsx');
}();

;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxLogger = __webpack_require__(40);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(41);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(42);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducer = __webpack_require__(345);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, _reduxLogger2.default);

// const middleware = applyMiddleware(promise(), thunk)

var _default = (0, _redux.createStore)(_reducer2.default, middleware);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Volumes/DATOS/github/iFact3/frontend/home/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/home/store.js');
}();

;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reducer = __webpack_require__(346);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(347);

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  body: _reducer2.default,
  user: _reducer4.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/github/iFact3/frontend/home/reducer.js');
}();

;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
var stateConst = {
  bodyLocked: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {} // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, "stateConst", "/Volumes/DATOS/github/iFact3/frontend/home/body/reducer.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "/Volumes/DATOS/github/iFact3/frontend/home/body/reducer.js");
}();

;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  user: {},
  profile: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_PROFILE_FULFILLED':
      {
        return _extends({}, state, {
          user: action.payload.user,
          profile: action.payload.profile
        });
      } // case

    case 'FETCH_PROFILE_REJECTED':
      {
        return _extends({}, state, {
          user: {},
          profile: {}
        });
      } // case

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/github/iFact3/frontend/home/user/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/github/iFact3/frontend/home/user/reducer.js');
}();

;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TopBar = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'menuClick',
    value: function menuClick(ev) {

      var mainContainer = document.getElementById('mainContainer');
      var sideMenu = document.getElementById('sideMenu');

      if (mainContainer.classList.contains('pulled')) {

        mainContainer.classList.remove('pulled');
        sideMenu.classList.remove('visible');
        return true;
      }

      mainContainer.classList.add('pulled');
      sideMenu.classList.add('visible');
    }
  }, {
    key: 'logOut',
    value: function logOut() {

      // ALERTIFY CONFIRM
      _alertifyjs2.default.confirm('Cerrar Sesión', '\xBFDesea Cerrar su sesi\xF3n en el sistema?', function () {
        window.location.replace('/logout');
      }, function () {
        return true;
      }).set('labels', {
        ok: 'Cerrar',
        cancel: 'Permanecer'
      });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'topBar' },
        _react2.default.createElement(
          'div',
          { onClick: this.menuClick.bind(this), className: 'topBar-button topBar-button-collapse not-visible' },
          _react2.default.createElement('span', { className: 'fa fa-bars' })
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.logOut.bind(this), className: 'topBar-button topBar-button-logout' },
          _react2.default.createElement('span', { className: 'fa fa-power-off' })
        )
      );
    }
  }]);

  return TopBar;
}(_react2.default.Component);

exports.default = TopBar;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopBar, 'TopBar', '/Volumes/DATOS/github/iFact3/frontend/layout/topBar/topBar.jsx');
}();

;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(68);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SideMenu = function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
  }

  _createClass(SideMenu, [{
    key: 'render',


    // Main Layout
    value: function render() {
      // const title = this.props.userCompanyConfig.comercialName || this.props.defaultCompanyConfig.comercialName || 'APP'

      return _react2.default.createElement(
        'div',
        { id: 'sideMenu', className: 'sideMenu' },
        _react2.default.createElement(_user2.default, null),
        _react2.default.createElement(
          'ul',
          { className: 'sideMenu-items' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement('span', { className: 'fa fa-home' }),
              'Inicio'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/admin/' },
              _react2.default.createElement('span', { className: 'fa fa-area-chart' }),
              'Sitio Administrador'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/sales/' },
              _react2.default.createElement('span', { className: 'fa fa-shopping-cart' }),
              'Ventas'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/inventories/' },
              _react2.default.createElement('span', { className: 'fa fa-gift' }),
              'Inventarios'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/reports/' },
              _react2.default.createElement('span', { className: 'fa fa-list' }),
              'Reportes'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/logout/' },
              _react2.default.createElement('span', { className: 'fa fa-power-off' }),
              'Cerrar sesi\xF3n'
            )
          )
        )
      );
    }
  }]);

  return SideMenu;
}(_react2.default.Component);

exports.default = SideMenu;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SideMenu, 'SideMenu', '/Volumes/DATOS/github/iFact3/frontend/layout/sideMenu/sideMenu.jsx');
}();

;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * Module dependencies
                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    user: store.user.user,
    profile: store.user.profile
  };
}), _dec(_class = function (_React$Component) {
  _inherits(User, _React$Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',


    // Main Layout
    value: function render() {

      var avatar = this.props.profile.avatar ? '/media/' + this.props.profile.avatar : '/media/default/profile.jpg';

      var name = this.props.user.first_name ? this.props.user.first_name : this.props.user.username ? this.props.user.username : '';

      var lastName = this.props.user.last_name ? this.props.user.last_name : '';

      var fullName = name + ' ' + lastName;
      if (fullName.length > 22) fullName = fullName.substring(0, 22);

      return _react2.default.createElement(
        'div',
        { className: 'sideMenu-user col-xs-12 ' },
        _react2.default.createElement(
          'div',
          { className: 'sideMenu-user-avatar' },
          _react2.default.createElement('img', { src: avatar })
        ),
        _react2.default.createElement(
          'div',
          { className: 'sideMenu-user-name' },
          _react2.default.createElement(
            'span',
            null,
            fullName
          ),
          _react2.default.createElement('hr', null)
        )
      );
    }
  }]);

  return User;
}(_react2.default.Component)) || _class);
exports.default = User;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(User, 'User', '/Volumes/DATOS/github/iFact3/frontend/layout/sideMenu/user/user.jsx');
}();

;

/***/ })

},[261]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2Zyb250ZW5kL2hvbWUvYXBwLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9tYWluL21haW4uanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL2JvZHkvYm9keS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL3N0b3JlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9ib2R5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL3VzZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9mcm9udGVuZC9sYXlvdXQvc2lkZU1lbnUvdXNlci91c2VyLmpzeCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhbGVydGlmeSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYWluIiwic3RvcmUiLCJwcm9maWxlIiwidXNlciIsInByb3BzIiwiZGlzcGF0Y2giLCJ1bmxvY2tlZCIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiLCJmaWVsZHMiLCJjYXRjaCIsImVycm9yIiwidmFsdWUiLCJCb2R5IiwicmVtb3ZlIiwibWlkZGxld2FyZSIsImJvZHkiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImJvZHlMb2NrZWQiLCJzdGF0ZSIsImFjdGlvbiIsIlRvcEJhciIsImV2IiwibWFpbkNvbnRhaW5lciIsInNpZGVNZW51IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJjb25maXJtIiwibG9jYXRpb24iLCJyZXBsYWNlIiwic2V0Iiwib2siLCJjYW5jZWwiLCJtZW51Q2xpY2siLCJiaW5kIiwibG9nT3V0IiwiU2lkZU1lbnUiLCJVc2VyIiwiYXZhdGFyIiwibmFtZSIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwiZnVsbE5hbWUiLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBRUE7Ozs7QUFHQTs7Ozs7O0FBSkE7QUFNQUEsT0FBT0MsUUFBUDs7QUFIQTs7O0FBTEE7OztBQVVBLG1CQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLElBQVUsc0JBQVY7QUFDRTtBQURGLENBREYsRUFHZUMsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUhmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNkQTs7Ozs7QUFRQTs7QUFMQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBT3FCQyxJLFdBTHBCLHlCQUFRLFVBQUNDLEtBQUQsRUFBVztBQUNsQixTQUFPO0FBQ0xDLGFBQVNELE1BQU1FLElBQU4sQ0FBV0Q7QUFEZixHQUFQO0FBR0QsQ0FKQSxDOzs7Ozs7Ozs7Ozt5Q0FPc0I7QUFDbkIsV0FBS0UsS0FBTCxDQUFXQyxRQUFYLENBQW9CLDRCQUFwQjtBQUNEOztBQUVEOzs7OzZCQUNTOztBQUVQLFVBQU1DLFdBQVc7QUFBQTtBQUFBO0FBQ2Y7QUFBQTtBQUFBO0FBQ0UsaUVBREY7QUFFRTtBQUFBO0FBQUEsY0FB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QU87QUFBQTtBQUFBLFVBQUssV0FBVSwwQkFBZjtBQUVMO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRSxpREFBSyxLQUFLUixNQUFWO0FBREYsU0FGSztBQU1MO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBT007QUFBUCxXQURGO0FBRUU7QUFGRjtBQU5LLE9BQVA7QUFnQkQ7Ozs7RUFqQytCLGdCQUFNOUMsUztrQkFBbkJ1QyxJOzs7Ozs7OztnQ0FBQUEsSSIsImZpbGUiOiJob21lLWQyOTg4ZjEwMTUzNGEzMzcwOGZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG4vLyBSRURVWCBQUk9WSURFUlxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4vbWFpbi5qc3gnXG5cbi8vIFNUT1JFXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcydcblxud2luZG93LmFsZXJ0aWZ5ID0gYWxlcnRpZnlcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TWFpbiAvPlxuICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2hvbWUvYXBwLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL2FwcC5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtmZWN0aFByb2ZpbGV9IGZyb20gJy4vYWN0aW9ucydcblxuLy8gQ09NUE9ORU5UU1xuXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4uLy4uL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCdcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuLi8uLi9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4J1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vYm9keS9ib2R5LmpzeCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZmlsZTogc3RvcmUudXNlci5wcm9maWxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZWN0aFByb2ZpbGUoKSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHVubG9ja2VkID0gPFJvdXRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICA8ZGl2IGlkPSdtYWluQ29udGFpbmVyJyBjbGFzc05hbWU9J21haW5Db250YWluZXInPlxuICAgICAgICAgIDxUb3BCYXIgLz5cbiAgICAgICAgICA8Qm9keSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuXG4gICAgLy8gY29uc3QgY29udGVudCA9IHRoaXMucHJvcHMuYWRtaW5Mb2NrZWQgPyBsb2NrZWQgOiB1bmxvY2tlZFxuICAgIGNvbnN0IGNvbnRlbnQgPSB1bmxvY2tlZFxuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICB7Y29udGVudH1cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9ob21lL21haW4vbWFpbi5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2Zyb250ZW5kL2hvbWUvbWFpbi9tYWluLmpzeCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoUHJvZmlsZSgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9wcm9maWxlLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnLCBwYXlsb2FkOiB7dXNlcjogcmVzcG9uc2UuZGF0YVswXS5maWVsZHMsIHByb2ZpbGU6IHJlc3BvbnNlLmRhdGFbMV0uZmllbGRzfX0pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZWN0aElzQWRtaW5Mb2NrZWQoKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL3VzZXJwcmVmcy9hZG1pbl9faXNfYWRtaW5fbG9ja2VkLycpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudmFsdWV9KVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENIX0lTX0FETUlOX0xPQ0tFRF9SRUpFQ1RFRCcsIHBheWxvYWQ6IGVycm9yfSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9ob21lL21haW4vYWN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5yZW1vdmUoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyBsYW5kaW5nJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTAgY29sLXNtLTggY29sLXhzLW9mZnNldC0xIGNvbC1zbS1vZmZzZXQtMiBsYW5kaW5nLWNvbnRhaW5lcic+XG4gICAgICAgIDxoMT5CaWVudmVuaWRvPC9oMT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxoMz5FbGlqYSB1bmEgb3BjaW9uIHBhcmEgaW5pY2lhcjwvaDM+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nYnV0dG9ucy1jb250YWluZXInPlxuICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidG4tbGcgbGFuZGluZy1idG4nIGhyZWY9Jy9hZG1pbic+QWRtaW5pc3RyYWNpw7NuPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZyBsYW5kaW5nLWJ0bicgaHJlZj0nL3NhbGVzJz5WZW50YXM8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnRuLWxnIGxhbmRpbmctYnRuJyBocmVmPScvYnV5cyc+Q29tcHJhczwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdidXR0b25zLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZyBsYW5kaW5nLWJ0bicgaHJlZj0nL2ludmVudG9yaWVzJz5JbnZlbnRhcmlvczwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidG4tbGcgbGFuZGluZy1idG4nIGhyZWY9Jy9yZXBvcnRzJz5SZXBvcnRlczwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidG4tbGcgbGFuZGluZy1idG4nIGhyZWY9Jy8nPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2hvbWUvYm9keS9ib2R5LmpzeFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9ib2R5L2JvZHkuanN4IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHByb21pc2UoKSwgdGh1bmssIGxvZ2dlcilcblxuLy8gY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBtaWRkbGV3YXJlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvaG9tZS9zdG9yZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgYm9keSBmcm9tICcuL2JvZHkvcmVkdWNlci5qcydcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBib2R5LFxuICB1c2VyXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvaG9tZS9yZWR1Y2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vLi9mcm9udGVuZC9ob21lL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBib2R5TG9ja2VkOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvaG9tZS9ib2R5L3JlZHVjZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2Zyb250ZW5kL2hvbWUvYm9keS9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdXNlcjoge30sXG4gIHByb2ZpbGU6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9SRUpFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICBwcm9maWxlOiB7fVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9ob21lL3VzZXIvcmVkdWNlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaG9tZS91c2VyL3JlZHVjZXIuanMiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBtZW51Q2xpY2soZXYpIHtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpXG4gICAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZU1lbnUnKVxuXG4gICAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwdWxsZWQnKSkge1xuXG4gICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXG4gICAgICBzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwdWxsZWQnKVxuICAgIHNpZGVNZW51LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuXG4gIH1cblxuICBsb2dPdXQoKSB7XG5cbiAgICAvLyBBTEVSVElGWSBDT05GSVJNXG4gICAgYWxlcnRpZnkuY29uZmlybSgnQ2VycmFyIFNlc2nDs24nLCBgwr9EZXNlYSBDZXJyYXIgc3Ugc2VzacOzbiBlbiBlbCBzaXN0ZW1hP2AsIGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dvdXQnKVxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KS5zZXQoJ2xhYmVscycsIHtcbiAgICAgIG9rOiAnQ2VycmFyJyxcbiAgICAgIGNhbmNlbDogJ1Blcm1hbmVjZXInXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyJz5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5tZW51Q2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2Ugbm90LXZpc2libGUnID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubG9nT3V0LmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtcG93ZXItb2ZmJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlci91c2VyLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudXNlckNvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRDb21wYW55Q29uZmlnLmNvbWVyY2lhbE5hbWUgfHwgJ0FQUCdcblxuICAgIHJldHVybiA8ZGl2IGlkPSdzaWRlTWVudScgY2xhc3NOYW1lPSdzaWRlTWVudSc+XG5cbiAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPSdzaWRlTWVudS1oZWFkZXInPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+ICovfVxuICAgICAgPFVzZXIgLz5cblxuICAgICAgPHVsIGNsYXNzTmFtZT0nc2lkZU1lbnUtaXRlbXMnPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj0nLyc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWhvbWUnIC8+XG4gICAgICAgICAgICBJbmljaW88L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPScvYWRtaW4vJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgIFNpdGlvIEFkbWluaXN0cmFkb3I8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPScvc2FsZXMvJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2hvcHBpbmctY2FydCcgLz5cbiAgICAgICAgICAgIFZlbnRhczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9Jy9pbnZlbnRvcmllcy8nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1naWZ0JyAvPlxuICAgICAgICAgICAgSW52ZW50YXJpb3M8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPScvcmVwb3J0cy8nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1saXN0JyAvPlxuICAgICAgICAgICAgUmVwb3J0ZXM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPScvbG9nb3V0Lyc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXBvd2VyLW9mZicgLz5cbiAgICAgICAgICAgIENlcnJhciBzZXNpw7NuPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC9zaWRlTWVudS9zaWRlTWVudS5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdG9yZS51c2VyLnVzZXIsXG4gICAgcHJvZmlsZTogc3RvcmUudXNlci5wcm9maWxlXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBhdmF0YXIgPSB0aGlzLnByb3BzLnByb2ZpbGUuYXZhdGFyID8gYC9tZWRpYS8ke3RoaXMucHJvcHMucHJvZmlsZS5hdmF0YXJ9YCA6ICcvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgPyB0aGlzLnByb3BzLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgOiAodGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lXG4gICAgICAgID8gdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lIDogJycpXG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgPyB0aGlzLnByb3BzLnVzZXIubGFzdF9uYW1lIDogJydcblxuICAgIGxldCBmdWxsTmFtZSA9IGAke25hbWV9ICR7bGFzdE5hbWV9YFxuICAgIGlmIChmdWxsTmFtZS5sZW5ndGggPiAyMikgZnVsbE5hbWUgPSBmdWxsTmFtZS5zdWJzdHJpbmcoMCwgMjIpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXIgY29sLXhzLTEyICc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlTWVudS11c2VyLWF2YXRhcic+XG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItbmFtZSc+XG4gICAgICAgIDxzcGFuPntmdWxsTmFtZX08L3NwYW4+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1sb2NrJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1sb2NrJyAvPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZnJvbnRlbmQvbGF5b3V0L3NpZGVNZW51L3VzZXIvdXNlci5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy8uL2Zyb250ZW5kL2xheW91dC9zaWRlTWVudS91c2VyL3VzZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==