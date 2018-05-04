webpackJsonp([1],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientSelected = clientSelected;
exports.userSelected = userSelected;
exports.searchClient = searchClient;
function clientSelected(code, clients) {

  var clientSelected = clients.findIndex(function (client) {
    return client.code == code;
  }); // checks if product exists

  var res = clientSelected == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'CLIENT_NOT_FOUND',
    payload: -1
  } : {
    type: 'CLIENT_SELECTED',
    payload: {
      client: clients[clientSelected]
    }
  };

  return res;
}

function userSelected(_id, users) {

  var userSelected = users.findIndex(function (user) {
    return user._id == _id;
  }); // checks if product exists

  var res = userSelected == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'USER_NOT_FOUND',
    payload: -1
  } : {
    type: 'USER_SELECTED',
    payload: {
      user: users[userSelected]
    }
  };

  return res;
}

function searchClient() {

  return { type: 'CLIENT_SHOW_PANEL', payload: -1 };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clientSelected, 'clientSelected', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/actions.js');

  __REACT_HOT_LOADER__.register(userSelected, 'userSelected', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/actions.js');

  __REACT_HOT_LOADER__.register(searchClient, 'searchClient', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/actions.js');
}();

;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStoreCashAmount = updateStoreCashAmount;
exports.updateStoreCardAuth = updateStoreCardAuth;
exports.updateStoreCardDigits = updateStoreCardDigits;
// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
// import alertify from 'alertifyjs'

// Finds a code in the cart and sends a dispatch to remove it from cart based on index
function updateStoreCashAmount(amount) {

  var res = amount ? // if its a value
  {
    type: 'UPDATE_CASH_AMOUNT',
    payload: parseFloat(amount)
  } : {
    type: 'UPDATE_CASH_AMOUNT',
    payload: 0
  };

  return res;
}

function updateStoreCardAuth(number) {

  var res = number ? // if its a value
  {
    type: 'UPDATE_CARD_AUTH',
    payload: number
  } : {
    type: 'UPDATE_CARD_AUTH',
    payload: ''
  };

  return res;
}

function updateStoreCardDigits(number) {

  var res = number ? // if its a value
  {
    type: 'UPDATE_CARD_DIGITS',
    payload: number
  } : {
    type: 'UPDATE_CARD_DIGITS',
    payload: ''
  };

  return res;
}

// export function loadSale(id, sales) {
//   const filteredSales = sales.filter(sale => {
//     return sale.id == id
//   })
//   return function(dispatch) {
//     if (filteredSales.length) {
//       filteredSales[0]['created'] = new Date(filteredSales[0]['created'])
//       // filteredSales[0]['globalDiscount'] = parseFloat(filteredSales[0]['globalDiscount'])
//       document.getElementById('discountField').value = parseFloat(filteredSales[0]['cart']['globalDiscount'])
//       document.title = `Venta #${id}`
//       filteredSales[0]['client']['saleLoaded'] = true

//       dispatch({type: 'LOADED_SALE', payload: filteredSales[0]})
//       dispatch({type: 'SET_SALE', payload: filteredSales[0]})
//       dispatch({type: 'SET_SALE_ID', payload: filteredSales[0]._id})

//     } else {
//       dispatch({type: 'NOT_FOUND_SALE', payload: id})
//     }
//   }
// }

// export function saveItem(kwargs) {

//   const item = kwargs.item
//   const movements = kwargs.movements
//   return function(dispatch) {
//     const db = new PouchDB(kwargs.db)

//     db.post(item).then((response) => {

//       dispatch({type: 'SET_SALE', payload: item})
//       dispatch({type: 'SET_SALE_ID', payload: response.id})

//       if (item.pay.payMethod == 'CREDIT') { // IF CREDIT CREATE CREDIT MOVEMENT
//         const db2 = new PouchDB('general')
//         const movement = getMovement(movements, response.id, item)

//         db2.post(movement).then(response => {
//           dispatch({type: 'SHOW_INVOICE_PANEL', payload: ''})
//           dispatch({type: 'HIDE_PAY_PANEL', payload: ''})
//         }).catch(err => { // IF ERROR SHOW MESSAGE
//           alertify.alert('Error', `Error al crear el movimiento de crédito, por favor anule la factura y creela
//           de nuevo ERROR: ${err}.`)
//         })

//       } else { // IF NOT CREDIT SHOW PANELS
//         dispatch({type: 'SHOW_INVOICE_PANEL', payload: ''})
//         dispatch({type: 'HIDE_PAY_PANEL', payload: ''})
//       }

//     }).catch((err) => {
//       alertify.alert('Error', `${kwargs.errorMessage} ERROR: ${err}.`)
//     })
//   }
// }

// function getMovement(movements, saleId, sale) {

//   const sortedMovements = movements.length > 1 ? movements.sort((a, b) => {
//     if (a.document < b.document) {
//       return 1
//     }
//     if (a.document > b.document) {
//       return -1
//     }
//     return 0
//   }) : movements

//   const nextId = sortedMovements.length > 0 ? sortedMovements[0].document + 1 : 1

//   const movement = {
//     'document': nextId,
//     'docType': 'CLIENT_MOVEMENT',
//     'clientId': sale.client._id,
//     'type': 'CREDIT',
//     'amount': parseFloat(sale.cart.cartTotal),
//     'date': new Date(),
//     'sale_id': saleId,
//     'saleId': sale.id,
//     'description': `Venta a crédito con factura #${sale.id}`
//   }

//   return movement

// }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateStoreCashAmount, 'updateStoreCashAmount', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardAuth, 'updateStoreCardAuth', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/actions.js');

  __REACT_HOT_LOADER__.register(updateStoreCardDigits, 'updateStoreCardDigits', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/actions.js');
}();

;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemDispatch = getItemDispatch;
exports.getItemDoubleDispatch = getItemDoubleDispatch;
exports.getItemReturn = getItemReturn;
exports.setItem = setItem;
exports.saveItem = saveItem;
exports.updateItem = updateItem;
exports.patchItem = patchItem;
exports.patchItems = patchItems;
exports.deleteItem = deleteItem;
exports.loadGlobalConfig = loadGlobalConfig;
exports.saveLog = saveLog;
exports.getNextNumericCode = getNextNumericCode;
exports.setNextPrevItem = setNextPrevItem;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------------------
// CONFIG DEFAULT AXIOS
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
_axios2.default.defaults.xsrfCookieName = 'csrftoken';
_axios2.default.defaults.xsrfHeaderName = 'X-CSRFToken';

// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// GET FUNCTIONS (RETRIEVE ALL)
// ------------------------------------------------------------------------------------------
function getItemDispatch(kwargs) {

  var url = kwargs.url;
  var successType = kwargs.successType;
  var errorType = kwargs.errorType;

  return function (dispatch) {
    _axios2.default.get(url).then(function (response) {
      dispatch({ type: successType, payload: response.data });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      console.log(error.response.status);
      // IF THE ERROR IS UNAUTORIZED PAGE WILL SHOW THE MESSAGE
      if (error.response.status != 403) {
        _alertifyjs2.default.alert('ERROR', 'Error al obtener un valor del API, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
        dispatch({ type: errorType, payload: error });
      }
    });
  };
}

function getItemDoubleDispatch(kwargs) {

  var url = kwargs.url;
  var successType = kwargs.successType;
  var successType2 = kwargs.successType2;
  var errorType = kwargs.errorType;

  return function (dispatch) {
    _axios2.default.get(url).then(function (response) {
      dispatch({ type: successType, payload: response.data });
      dispatch({ type: successType2, payload: '' });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      console.log(error.response.status);
      if (error.response.status != 403) {
        _alertifyjs2.default.alert('ERROR', 'Error al obtener un valor del API, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
        dispatch({ type: errorType, payload: error });
      }
    });
  };
}

function getItemReturn(kwargs) {

  var url = kwargs.url;

  _axios2.default.get(url).then(function (response) {
    return response.data;
  }).catch(function (error) {
    _alertifyjs2.default.alert('ERROR', 'Error al obtener un valor del API, por favor intente de nuevo o comun\xEDquese con el\n    administrador del sistema con el siguiete error: ' + error);
    return error;
  });
}

// ------------------------------------------------------------------------------------------
// SET FUNCTION (RETRIEVE INDIVIDUAL)
// ------------------------------------------------------------------------------------------
function setItem(kwargs) {

  var lookUpValue = kwargs.lookUpValue;
  var lookUpField = kwargs.lookUpField;
  var history = kwargs.history;
  var redirectUrl = kwargs.redirectUrl;
  var url = kwargs.url;

  return function (dispatch) {
    console.log(url + '?' + lookUpField + '=' + lookUpValue);
    _axios2.default.get(url + '?' + lookUpField + '=' + lookUpValue).then(function (response) {

      console.log(response.data);

      if (response.data.length) {
        // IF THERE IS MORE THAN ONE ELEMENT FILTERED
        if (response.data.length > 1) {
          _alertifyjs2.default.alert('ATENCIÓN', 'Existe mas de un ' + kwargs.modelName + ' con el ' + kwargs.lookUpName + ':\n          ' + kwargs.lookUpValue + ', se utilizar\xE1 el primero en lista, por lo que puede no ser el mismo que ud desea\n          actualizar, esto puede deberse a un error, por favor revise los\n          datos o contacte con el administrador del sistema.');
        }

        dispatch({ type: kwargs.dispatchType, payload: response.data[0] });
        dispatch({ type: kwargs.dispatchType2, payload: response.data[0] });
        dispatch({ type: 'FETCHING_DONE', payload: '' });
      } else {
        dispatch({ type: kwargs.dispatchErrorType, payload: '' });
        _alertifyjs2.default.alert('Error', 'No hay ' + kwargs.modelName + ' con el valor de ' + kwargs.lookUpName + ': ' + kwargs.lookUpValue, function () {
          history.push(redirectUrl);
        });
      }
    }).catch(function (error) {
      _alertifyjs2.default.alert('ERROR', 'Error al obtener el valor del API, por favor intente de nuevo o comun\xEDquese con el\n      administrador del sistema con el siguiete error: ' + error);
    });
  };
}

// ------------------------------------------------------------------------------------------
// SAVE FUNCTION (CREATE)
// ------------------------------------------------------------------------------------------
function saveItem(kwargs) {
  var item = kwargs.item;
  delete item['id'];
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;
  var isSale = kwargs.isSale;
  return function (dispatch) {

    (0, _axios2.default)({
      method: 'post',
      url: url,
      data: item
    }).then(function (response) {
      _alertifyjs2.default.alert('Completado', kwargs.sucessMessage).set('onok', function () {
        if (kwargs.redirectUrl) {
          kwargs.history.push(kwargs.redirectUrl);
        }
      });
      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
      if (isSale) {
        dispatch({ type: 'SET_SALE', payload: response.data });
        dispatch({ type: 'SHOW_INVOICE_PANEL', payload: '' });
      }
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// UPDATE FUNCTION
// ------------------------------------------------------------------------------------------

function updateItem(kwargs) {
  var item = kwargs.item;
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'put',
      url: url,
      data: item
    }).then(function (response) {
      _alertifyjs2.default.alert('Completado', kwargs.sucessMessage).set('onok', function () {
        if (kwargs.redirectUrl) {
          kwargs.history.push(kwargs.redirectUrl);
        }
      });
      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// UPDATE PARTIALLY FUNCTION (PATCH)
// ------------------------------------------------------------------------------------------

function patchItem(kwargs) {
  var item = kwargs.item;
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'patch',
      url: url,
      data: item
    }).then(function (response) {
      if (kwargs.sucessMessage) {
        _alertifyjs2.default.alert('Completado', kwargs.sucessMessage).set('onok', function () {
          if (kwargs.redirectUrl) {
            kwargs.history.push(kwargs.redirectUrl);
          }
        });
      }
      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'SET_SALE_ID', payload: '' });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// DOUBLE UPDATE PARTIALLY FUNCTION (PATCH)
// ------------------------------------------------------------------------------------------

function patchItems(kwargs, kwargs2) {
  var item = kwargs.item;
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  var item2 = kwargs2.item;
  var url2 = kwargs2.url;
  var logCode2 = kwargs2.logCode;
  var itemOld2 = kwargs2.itemOld;
  var logModel2 = kwargs2.logModel;
  var logDescription2 = kwargs2.logDescription;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'patch',
      url: url,
      data: item
    })
    // FIRST PATCH THEN
    .then(function (response) {

      dispatch({ type: kwargs.dispatchType, payload: '' });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);

      // SECOND PATCH
      (0, _axios2.default)({
        method: 'patch',
        url: url2,
        data: item2
      })
      // SECOND PATCH THEN
      .then(function (response) {
        if (kwargs2.sucessMessage) {
          _alertifyjs2.default.alert('Completado', kwargs2.sucessMessage).set('onok', function () {
            if (kwargs2.redirectUrl) {
              kwargs2.history.push(kwargs2.redirectUrl);
            }
          });
        }
        dispatch({ type: kwargs2.dispatchType, payload: '' });
        saveLog(logCode2, logModel2, itemOld2, item2, logDescription2, user);
        dispatch({ type: 'FETCHING_DONE', payload: '' });

        // SECOND PATCH CATCH
      }).catch(function (err) {
        console.log(err);
        if (err.response) {
          console.log(err.response.data);
        }
        _alertifyjs2.default.alert('Error', kwargs2.errorMessage + ' ERROR: ' + err + '.');
      });

      // FIRST PATCH CATCH
    }).catch(function (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// DELETE FUNCTION (DELETE)
// ------------------------------------------------------------------------------------------
function deleteItem(kwargs) {

  var item = kwargs.item;
  var url = kwargs.url;
  var model = kwargs.modelName;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'delete',
      url: url
    }).then(function (response) {

      _alertifyjs2.default.alert('Completado', 'Elemento eliminado satifactoriamente').set('onok', function () {
        if (kwargs.redirectUrl) {
          kwargs.history.push(kwargs.redirectUrl);
        }
      });
      saveLog(logCode, logModel, itemOld, item, logDescription, user);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (err) {
      _alertifyjs2.default.alert('Error', 'Hubo un error al eliminar el ' + model + ' ERROR: ' + err + '.');
    });
  };
}

// ------------------------------------------------------------------------------------------
// LOAD CONFIG FUNCTION
// ------------------------------------------------------------------------------------------
function loadGlobalConfig(section, name, success, fail) {
  return function (dispatch) {
    if (name) {

      _axios2.default.get('/api/globalconf/' + section + '__' + name).then(function (response) {
        // TODO Single config fetch
      }).catch(function (error) {
        dispatch({ type: fail, payload: error });
      });
    } else {
      _axios2.default.get('/api/globalprefs').then(function (response) {
        // The property to modify in reducer
        var config = response.data ? response.data.filter(function (item) {
          return item.section == section;
        }) : {};
        var data = {};
        config.forEach(function (item) {
          data[item.name] = item.value;
        });

        dispatch({ type: success, payload: { data: data, section: section } });
      }).catch(function (error) {
        dispatch({ type: fail, payload: error });
      });
    }
  };
}

// ------------------------------------------------------------------------------------------
// SAVE LOG FUNCTION (CREATE LOG)
// ------------------------------------------------------------------------------------------
function saveLog(code, model, oldObject, object, description, user) {

  var prevObject = JSON.stringify(oldObject);
  var newObject = JSON.stringify(object);
  var user2 = JSON.stringify(user);

  var item = {
    code: code,
    model: model,
    prev_object: prevObject,
    new_object: newObject,
    description: description,
    user: user2
  };

  (0, _axios2.default)({
    method: 'post',
    url: '/api/logs/',
    data: item
  }).then(function (response) {}).catch(function (err) {
    console.log(err);
    if (err.response) {
      console.log(err.response.data);
    }
    _alertifyjs2.default.alert('Error', 'Error al crear el Log del movimiento, ERROR: ' + err + '.');
  });
}

// ------------------------------------------------------------------------------------------
// AUX FUNCTIONS
// ------------------------------------------------------------------------------------------

// NEXT NUMERIC CODE
function getNextNumericCode(elements, field) {

  if (elements.length) {

    var keys = elements.map(function (element) {
      return element[field];
    });

    keys = keys.sort(function (a, b) {
      return a - b;
    });
    var max = keys.pop();
    var next = parseInt(max) + 1;
    return next.toString();
  }

  return 1;
}

// NEXT PREVIOUS ITEMS
function setNextPrevItem(kwargs) {

  var code = kwargs.code;
  var items = kwargs.items;
  var codeField = kwargs.codeField;
  var previous = 0;
  var next = 0;

  items.sort(function (a, b) {
    return a[codeField] - b[codeField];
  });

  items.forEach(function (item, index) {
    if (item[codeField] == code) {
      next = index + 1;
      previous = index - 1;
      return true;
    }
  });

  var nextCode = items[next] ? items[next][codeField] : items[0][codeField];
  var prevCode = items[previous] ? items[previous][codeField] : items.pop()[codeField];

  return function (dispatch) {
    dispatch({ type: kwargs.dispatchType, payload: { next: nextCode, previous: prevCode } });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getItemDispatch, 'getItemDispatch', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getItemDoubleDispatch, 'getItemDoubleDispatch', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getItemReturn, 'getItemReturn', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setItem, 'setItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(saveItem, 'saveItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(updateItem, 'updateItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(patchItem, 'patchItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(patchItems, 'patchItems', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(deleteItem, 'deleteItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(loadGlobalConfig, 'loadGlobalConfig', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(saveLog, 'saveLog', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(getNextNumericCode, 'getNextNumericCode', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');

  __REACT_HOT_LOADER__.register(setNextPrevItem, 'setNextPrevItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/api.js');
}();

;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.1
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = function _default() {

    Number.prototype.formatMoney = function (c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/formatMoney.js");
}();

;

/***/ }),

/***/ 35:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Fetching = function (_React$Component) {
  _inherits(Fetching, _React$Component);

  function Fetching() {
    _classCallCheck(this, Fetching);

    return _possibleConstructorReturn(this, (Fetching.__proto__ || Object.getPrototypeOf(Fetching)).apply(this, arguments));
  }

  _createClass(Fetching, [{
    key: 'render',


    // Main Layout
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'fetcing-container' },
        _react2.default.createElement('img', { src: '/static/vendor/loaders/Eclipse.gif' }),
        _react2.default.createElement(
          'h1',
          null,
          'Cargando elementos'
        )
      );
    }
  }]);

  return Fetching;
}(_react2.default.Component);

exports.default = Fetching;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Fetching, 'Fetching', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/general/fetching/fetching.jsx');
}();

;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  fetching: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCHING_STARTED':
      {
        return _extends({}, state, {
          fetching: true
        });
      } // case

    case 'FETCHING_DONE':
      {
        return _extends({}, state, {
          fetching: false
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/general/fetching/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/general/fetching/reducer.js');
}();

;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recalcCart = recalcCart;
exports.updateItemDiscount = updateItemDiscount;
exports.updateItemLote = updateItemLote;
exports.productSelected = productSelected;
exports.updateQty = updateQty;
exports.updateQtyCode = updateQtyCode;
exports.addSubOne = addSubOne;
// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
var uuidv1 = __webpack_require__(617);
// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS USED IN COMPONENTS
// ------------------------------------------------------------------------------------------

// Function to update the globa; discount of complete storage of items, and reflect it on store, then updating DOME
function recalcCart(itemsInCart, globalDiscount, client) {

  var newCart = itemsInCart.map(function (item) {

    var newItem = item;

    var data = caclSubtotal(item.product, item.qty, item.discount, globalDiscount, client);

    newItem.subtotal = data.subtotal;
    newItem.totalWithIv = data.totalWithIv;
    newItem.discountCurrency = data.discountCurrency;
    newItem.subTotalNoDiscount = data.subTotalNoDiscount;
    newItem.priceToUse = data.priceToUse;

    return newItem;
  });

  return { type: 'REPLACE_CART', payload: newCart };
}

// Function to update the inline discount of an item, and reflect it on store
function updateItemDiscount(itemsInCart, code, discount, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  }); // checks if product exists

  var res = indexInCart == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_IN_CART_NOT_FOUND',
    payload: -1
  } : {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, itemsInCart[indexInCart].qty, discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };

  return res;
}

// Function to update the inline discount of an item, and reflect it on store
function updateItemLote(itemsInCart, code, lote) {
  var loteNum = !lote ? '-' : lote;
  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  }); // checks if product exists

  var res = indexInCart == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_IN_CART_NOT_FOUND',
    payload: -1
  } : {
    type: 'UPDATE_CART_ITEM_LOTE',
    payload: {
      lote: loteNum,
      index: indexInCart
    }
  };

  return res;
}

// When item is selected in code field
function productSelected(code, qty, products, itemsInCart, globalDiscount, client, defaultConfig, userConfig) {

  var perLine = false;

  var productSelected = products.findIndex(function (product) {
    return product.code == code || product.barcode == code;
  }); // checks if product exists

  var res = productSelected == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_NOT_FOUND',
    payload: -1
  } : checkIfInCart(code, qty, products, itemsInCart, globalDiscount, productSelected, client, perLine);

  return res;
}

// Updates Amount based on qty input field

function updateQty(code, qty, itemsInCart, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  });
  var qtyNum = parseFloat(qty);
  var res = {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, qtyNum, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };
  return res;
}

function updateQtyCode(code, qty, itemsInCart, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.product.code == code || item.product.barcode == code;
  });
  var qtyNum = parseFloat(qty);
  var res = {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, qtyNum, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };
  return res;
}

// Updates Amount based on qty input field

function addSubOne(code, subOrAdd, itemsInCart, globalDiscount, client) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.product.code == code;
  });
  var qtyNum = subOrAdd ? parseFloat(itemsInCart[indexInCart].qty + 1) : parseFloat(itemsInCart[indexInCart].qty - 1);
  var res = {
    type: 'UPDATE_CART',
    payload: {
      item: updatedCartItem(itemsInCart, indexInCart, qtyNum, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
      index: indexInCart
    }
  };
  return res;
}

// ------------------------------------------------------------------------------------------
// LOCAL AUX FUNCTIONS
// ------------------------------------------------------------------------------------------

// checks in cart if item already exists
function checkIfInCart(code, qty, products, itemsInCart, globalDiscount, productSelected, client, perLine) {

  // check if product in cart
  var indexInCart = itemsInCart.findIndex(function (cart) {
    return cart.product.code == code || cart.product.barcode == code;
  });

  var dataNewProd = caclSubtotal(products[productSelected], qty, 0, globalDiscount, client);

  // CHECK IF CONFIG ALLOWS MULTIPLE LINES OR NOT
  if (perLine) {
    var uuid = uuidv1();
    var res = indexInCart == -1 ? // if not exists in cart Dispats ADD_TO_TABLE, if exists dispatch cart updated
    {
      type: 'ADD_TO_CART',
      payload: {
        uuid: uuid,
        product: products[productSelected],
        qty: qty,
        discount: 0,
        discountCurrency: dataNewProd.discountCurrency,
        subTotalNoDiscount: dataNewProd.subTotalNoDiscount,
        subtotal: dataNewProd.subtotal,
        totalWithIv: dataNewProd.totalWithIv,
        lote: '-',
        priceToUse: dataNewProd.priceToUse
      }
    } : {
      type: 'UPDATE_CART',
      payload: {
        item: updatedCartItem(itemsInCart, indexInCart, itemsInCart[indexInCart].qty + qty, itemsInCart[indexInCart].discount, globalDiscount, client, itemsInCart[indexInCart].uuid),
        index: indexInCart
      }
    };
    return res;

    // IGNORE IF ALREADY IN CART IF CONFIG SAYS THAT
  } else {
    var _uuid = uuidv1();
    var _res = {
      type: 'ADD_TO_CART',
      payload: {
        uuid: _uuid,
        product: products[productSelected],
        qty: qty,
        discount: 0,
        discountCurrency: dataNewProd.discountCurrency,
        subTotalNoDiscount: dataNewProd.subTotalNoDiscount,
        subtotal: dataNewProd.subtotal,
        totalWithIv: dataNewProd.totalWithIv,
        lote: '-',
        priceToUse: dataNewProd.priceToUse
      }
    };
    return _res;
  }
}

// calculates the subtotal by line, also the total with iv included, the discount in currency format
function caclSubtotal(product, qty, productDiscount, globalDiscount, client) {

  var price = priceToUse(product, client);

  var subTotalNoDiscount = price * qty;

  var subTotal = price * qty * (1 - productDiscount / 100) * (1 - globalDiscount / 100);

  var iv1 = product.use_taxes ? subTotal * (product.taxes / 100) : 0;

  var iv2 = product.use_taxes2 ? subTotal * (product.taxes2 / 100) : 0;

  var iv3 = product.use_taxes3 ? subTotal * (product.taxes3 / 100) : 0;

  var totalWithIv = subTotal + iv1 + iv2 + iv3;

  var discountCurrencyInLine = price * qty * (productDiscount / 100);
  var discountCurrencyGlobal = (price * qty - discountCurrencyInLine) * (globalDiscount / 100);

  var discountCurrency = discountCurrencyInLine + discountCurrencyGlobal;

  return {
    subtotal: subTotal,
    totalWithIv: totalWithIv,
    discountCurrency: discountCurrency,
    subTotalNoDiscount: subTotalNoDiscount,
    priceToUse: price
  };
}

// updates an item in the cart with new information, this aux funtion returns new updated object ready for replace the stored one
function updatedCartItem(itemsInCart, index, newQty, productDiscount, globalDiscount, client, uuid) {

  var data = caclSubtotal(itemsInCart[index].product, newQty, productDiscount, globalDiscount, client);

  return {
    uuid: uuid,
    product: itemsInCart[index].product,
    discountCurrency: data.discountCurrency,
    qty: newQty,
    discount: productDiscount,
    subTotalNoDiscount: data.subTotalNoDiscount,
    subtotal: data.subtotal,
    totalWithIv: data.totalWithIv,
    lote: itemsInCart[index].lote,
    priceToUse: data.priceToUse
  };
}

// function to determin price to use in calculation
function priceToUse(product, client) {

  if (client.clientType == 'GENERAL') return product.price;

  if (client.clientType == 'DISTRIB' && product.usePrice2) return product.price2;
  if (client.clientType == 'DISTRIB') return product.price;

  if (client.clientType == 'WHOLESA' && product.usePrice3) return product.price3;
  if (client.clientType == 'WHOLESA' && product.usePrice2) return product.price2;
  if (client.clientType == 'WHOLESA') return product.price;

  return product.price;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(recalcCart, 'recalcCart', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateItemDiscount, 'updateItemDiscount', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateItemLote, 'updateItemLote', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(productSelected, 'productSelected', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateQty, 'updateQty', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updateQtyCode, 'updateQtyCode', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(addSubOne, 'addSubOne', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(checkIfInCart, 'checkIfInCart', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(caclSubtotal, 'caclSubtotal', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(updatedCartItem, 'updatedCartItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');

  __REACT_HOT_LOADER__.register(priceToUse, 'priceToUse', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/actions.js');
}();

;

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _formatMoney = __webpack_require__(34);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _reactRedux = __webpack_require__(1);

var _main = __webpack_require__(610);

var _main2 = _interopRequireDefault(_main);

var _store = __webpack_require__(661);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COMPONENTS
window.alertify = _alertifyjs2.default;

// STORE


// REDUX PROVIDER

(0, _formatMoney2.default)();

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

/***/ 610:
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

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

var _actions = __webpack_require__(611);

var _routes = __webpack_require__(612);

var _routes2 = _interopRequireDefault(_routes);

var _topBar = __webpack_require__(656);

var _topBar2 = _interopRequireDefault(_topBar);

var _sideMenu = __webpack_require__(658);

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _fetching = __webpack_require__(35);

var _fetching2 = _interopRequireDefault(_fetching);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import routes from './routes.js'

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    fetching: store.fetching.fetching,
    sideMenuVisible: store.layout.sideMenuVisible
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

      var fetching = this.props.fetching ? _react2.default.createElement(_fetching2.default, null) : '';
      var mainContainerClass = this.props.sideMenuVisible ? 'mainContainer' : 'mainContainer sideHidden';
      var content = _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_sideMenu2.default, null),
          _react2.default.createElement(
            'div',
            { id: 'mainContainer', className: mainContainerClass },
            _react2.default.createElement(_topBar2.default, null),
            _react2.default.createElement(
              'div',
              { className: 'mainContainer-content' },
              _routes2.default,
              fetching
            )
          )
        )
      );

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

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/main/main.jsx');
}();

;

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fecthProfile = fecthProfile;
exports.fecthIsAdminLocked = fecthIsAdminLocked;

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fecthProfile() {

  return function (dispatch) {
    _axios2.default.get('/profile/').then(function (response) {
      dispatch({ type: 'FETCH_PROFILE_FULFILLED', payload: { user: response.data[0].fields, profile: response.data[1].fields } });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
    }).catch(function (error) {
      dispatch({ type: 'FETCH_PROFILE_REJECTED', payload: error });
    });
  };
}

function fecthIsAdminLocked() {

  return function (dispatch) {
    _axios2.default.get('/api/userprefs/admin__is_admin_locked/').then(function (response) {
      dispatch({ type: 'FETCH_IS_ADMIN_LOCKED_FULFILLED', payload: response.data.value });
      dispatch({ type: 'FETCHING_DONE', payload: '' });
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

  __REACT_HOT_LOADER__.register(fecthProfile, 'fecthProfile', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/main/actions.js');

  __REACT_HOT_LOADER__.register(fecthIsAdminLocked, 'fecthIsAdminLocked', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/main/actions.js');
}();

;

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _home = __webpack_require__(613);

var _home2 = _interopRequireDefault(_home);

var _main = __webpack_require__(614);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes Components

var routes = _react2.default.createElement(
  'div',
  { className: 'heigh100' },
  _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/sales', component: _home2.default }),
  _react2.default.createElement(_reactRouterDom.Route, { path: '/sales/sale', component: _main2.default })
);

var _default = routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/main/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/main/routes.js');
}();

;

/***/ }),

/***/ 613:
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

// import { checkUserPermissions } from '../../utils/checkPermissions'
// import { getItemDispatch } from '../../utils/api.js'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (store) {
  return {};
}), _dec(_class = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'HOME_PANEL_MOUNTED', payload: '' });
    }
    // *******************************************************************

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'Main heigh100' },
        'HOME'
      );
    }
  }]);

  return Home;
}(_react2.default.Component)) || _class);
exports.default = Home;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/home/home.jsx');
}();

;

/***/ }),

/***/ 614:
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

// import { checkUserPermissions } from '../../utils/checkPermissions'
// import { getItemDispatch } from '../../utils/api.js'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _content = __webpack_require__(615);

var _content2 = _interopRequireDefault(_content);

var _aside = __webpack_require__(623);

var _aside2 = _interopRequireDefault(_aside);

var _searchPanel = __webpack_require__(628);

var _searchPanel2 = _interopRequireDefault(_searchPanel);

var _searchPanel3 = __webpack_require__(631);

var _searchPanel4 = _interopRequireDefault(_searchPanel3);

var _payPanel = __webpack_require__(634);

var _payPanel2 = _interopRequireDefault(_payPanel);

var _invoicePanel = __webpack_require__(643);

var _invoicePanel2 = _interopRequireDefault(_invoicePanel);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sale = (_dec = (0, _reactRedux.connect)(function (store) {
  return {};
}), _dec(_class = function (_React$Component) {
  _inherits(Sale, _React$Component);

  function Sale() {
    _classCallCheck(this, Sale);

    return _possibleConstructorReturn(this, (Sale.__proto__ || Object.getPrototypeOf(Sale)).apply(this, arguments));
  }

  _createClass(Sale, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'SALE_PANEL_MOUNTED', payload: '' });
    }
    // *******************************************************************

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'sale' },
        _react2.default.createElement(_content2.default, null),
        _react2.default.createElement(_aside2.default, null),
        _react2.default.createElement(_searchPanel2.default, null),
        _react2.default.createElement(_searchPanel4.default, null),
        _react2.default.createElement(_payPanel2.default, null),
        _react2.default.createElement(_invoicePanel2.default, null)
      );
    }
  }]);

  return Sale;
}(_react2.default.Component)) || _class);
exports.default = Sale;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Sale, 'Sale', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/main.jsx');
}();

;

/***/ }),

/***/ 615:
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

var _product = __webpack_require__(616);

var _product2 = _interopRequireDefault(_product);

var _cart = __webpack_require__(620);

var _cart2 = _interopRequireDefault(_cart);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    fullWidth: store.sale.fullWidth,
    total: store.cart.cartTotal
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'toggleWidth',
    value: function toggleWidth() {
      this.props.dispatch({ type: 'TOGGLE_FULL_WIDTH', payload: '' });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      var contentClass = this.props.fullWidth ? 'sale-content fullWidth' : 'sale-content';
      var cartClass = this.props.fullWidth ? 'sale-content-cart' : 'sale-content-cart fullHeight';
      var totalClass = this.props.fullWidth ? 'sale-content-total' : 'sale-content-total collapsed';

      return _react2.default.createElement(
        'div',
        { className: contentClass },
        _react2.default.createElement(
          'div',
          { className: 'sale-content-product' },
          _react2.default.createElement(_product2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: cartClass },
          _react2.default.createElement(_cart2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: totalClass },
          '\u20A1 ',
          this.props.total.formatMoney(),
          _react2.default.createElement('i', { className: 'fa fa-chevron-left', onClick: this.toggleWidth.bind(this) })
        )
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

  __REACT_HOT_LOADER__.register(Main, 'Main', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/content/content.jsx');
}();

;

/***/ }),

/***/ 616:
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

var _reactRedux = __webpack_require__(1);

var _api = __webpack_require__(3);

var _actions = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    products: store.products.products,
    client: store.clients.clientSelected,
    itemsInCart: store.cart.cartItems,
    inputVal: store.products.inputVal,
    globalDiscount: store.cart.globalDiscount
    // disabled: store.sales.completed,
    // defaultConfig: store.config.defaultSales,
    // userConfig: store.config.userSales
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
  }

  _createClass(Product, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.codeInput.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // this.codeInput.focus()
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
      this.props.dispatch({ type: 'CLEAR_PRODUCTS', payload: '' });

      var productKwargs = {
        url: '/api/products',
        successType: 'FETCH_PRODUCTS_FULFILLED',
        errorType: 'FETCH_PRODUCTS_REJECTED'
      };

      this.props.dispatch((0, _api.getItemDispatch)(productKwargs));
    }
  }, {
    key: 'searchProductClick',
    value: function searchProductClick() {

      this.props.dispatch({ type: 'PRODUCT_SHOW_PANEL', payload: -1 });
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {
        if (ev.target.value) {
          var code = ev.target.value.split('*')[0]; // Split val [0] is code [1] is qty
          var qty = ev.target.value.split('*')[1];
          qty = isNaN(qty) ? 1 : parseFloat(qty); // if no qty sets to 1

          this.props.dispatch((0, _actions.productSelected)(code, qty, this.props.products, this.props.itemsInCart, this.props.globalDiscount, this.props.client, this.props.defaultConfig, this.props.userConfig));
          // this.props.dispatch(productSelected(code, qty, this.props.products, this.props.itemsInCart,
          //   this.props.globalDiscount, this.props.client, this.props.defaultConfig, this.props.userConfig))
          this.props.dispatch({ type: 'CLEAR_PRODUCT_FIELD_VALUE', payload: 0 });
          this.props.dispatch({ type: 'SET_PRODUCT_ACTIVE_IN_CART', payload: code });
        }
      } else {
        this.props.dispatch({ type: 'SET_PRODUCT_FIELD_VALUE', payload: ev.target.value });
      }
    }

    // Render the product

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'product' },
        _react2.default.createElement(
          'div',
          { className: 'product-inputs' },
          _react2.default.createElement(
            'div',
            { className: 'product-inputs-code' },
            _react2.default.createElement('i', { className: 'fa fa-barcode' }),
            _react2.default.createElement('input', { id: 'productCodeInputField', disabled: this.props.disabled,
              onKeyDown: this.inputKeyPress.bind(this),
              value: this.props.inputVal,
              onChange: this.inputKeyPress.bind(this),
              ref: function ref(input) {
                _this2.codeInput = input;
              },
              type: 'text', placeholder: 'Ingrese el C\xF3digo del Producto',
              className: 'product-inputs-code-input mousetrap form-control input-lg' })
          ),
          _react2.default.createElement(
            'button',
            { disabled: this.props.disabled, onClick: this.searchProductClick.bind(this),
              className: 'product-inputs-search' },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('i', { className: 'fa fa-search' })
            )
          )
        )
      );
    }
  }]);

  return Product;
}(_react2.default.Component)) || _class);
exports.default = Product;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Product, 'Product', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/product.jsx');
}();

;

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(618);
var bytesToUuid = __webpack_require__(619);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 618:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 619:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 620:
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

var _cartItems = __webpack_require__(621);

var _cartItems2 = _interopRequireDefault(_cartItems);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(30);

var Cart = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    // defaultConfig: store.config.defaultSales,
    // userConfig: store.config.userSales,
    // productSearchpanelVisible: store.searchProducts.visible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var _this = this;
      Mousetrap.bind('mod+b', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        _this.props.dispatch({ type: 'SEARCH_PRODUCT_TOGGLE_PANEL', payload: -1 });
        document.getElementById('product-search-input').focus();
        document.getElementById('product-search-input').value = '';

        Mousetrap.bind('esc', function () {
          _this.props.dispatch({ type: 'SEARCH_PRODUCT_TOGGLE_PANEL', payload: -1 });
          document.getElementById('productCodeInputField').focus();
          document.getElementById('productCodeInputField').value = '';
          Mousetrap.unbind('esc');
        });
      });

      Mousetrap.bind('mod+c', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        _this.props.dispatch({ type: 'SEARCH_CLIENT_TOGGLE_PANEL', payload: -1 });
        document.getElementById('client-search-input').focus();
        document.getElementById('client-search-input').value = '';

        Mousetrap.bind('esc', function () {
          _this.props.dispatch({ type: 'SEARCH_CLIENT_TOGGLE_PANEL', payload: -1 });
          document.getElementById('productCodeInputField').focus();
          document.getElementById('productCodeInputField').value = '';
          Mousetrap.unbind('esc');
        });
      });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      // const useLote = this.props.defaultConfig
      //   ? this.props.defaultConfig.cartItemUseLote
      //   : false

      // const loteField = useLote
      //   ? <th>Lote</th>
      //   : <th />

      return _react2.default.createElement(
        'div',
        { className: 'cart' },
        _react2.default.createElement(
          'div',
          { className: 'cart-header' },
          _react2.default.createElement(
            'div',
            { className: 'cart-header-code' },
            _react2.default.createElement(
              'h5',
              null,
              'C\xF3d'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-description' },
            _react2.default.createElement(
              'h5',
              null,
              'Art'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-qty' },
            _react2.default.createElement(
              'h5',
              null,
              'Cant'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-unitPrice' },
            _react2.default.createElement(
              'h5',
              null,
              'P Unit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-discount' },
            _react2.default.createElement(
              'h5',
              null,
              'Desc'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-iva' },
            _react2.default.createElement(
              'h5',
              null,
              'IV'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-header-total' },
            _react2.default.createElement(
              'h5',
              null,
              'Total IVI'
            )
          )
        ),
        _react2.default.createElement(_cartItems2.default, null)
      );
    }
  }]);

  return Cart;
}(_react2.default.Component)) || _class);
exports.default = Cart;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cart, 'Cart', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/cart/cart.jsx');
}();

;

/***/ }),

/***/ 621:
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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(622);

var _actions2 = __webpack_require__(59);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(30);

var CartItems = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    inCart: store.cart.cartItems,
    client: store.clients.clientSelected,
    globalDiscount: store.cart.globalDiscount,
    // disabled: store.sales.completed,
    cartItemActive: store.cart.cartItemActive
    // defaultConfig: store.config.defaultSales,
    // userConfig: store.config.userSales
  };
}), _dec(_class = function (_React$Component) {
  _inherits(CartItems, _React$Component);

  function CartItems() {
    _classCallCheck(this, CartItems);

    return _possibleConstructorReturn(this, (CartItems.__proto__ || Object.getPrototypeOf(CartItems)).apply(this, arguments));
  }

  _createClass(CartItems, [{
    key: 'componentDidUpdate',


    // On component update (The cart has been modified) calls the update totals method in actions file.
    value: function componentDidUpdate(prevProps) {

      this.props.dispatch((0, _actions.updateTotals)(this.props.inCart));

      // Auto Scroll To end of container
      var elem = document.getElementById('cart-body');
      elem.scrollTop = elem.scrollHeight;
    }

    // componentDidUpdate(nextProps) {
    //   if (this.props.cartItemActive != nextProps.cartItemActive) {
    //     console.log(document.getElementById(`qty${nextProps.cartItemActive}`))
    //   }
    // }

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      var _this = this;
      Mousetrap.bind('mod+plus', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        _this.props.dispatch((0, _actions2.addSubOne)(_this.props.cartItemActive, true, _this.props.inCart, _this.props.globalDiscount, _this.props.client));
      });

      Mousetrap.bind('mod+f', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        document.getElementById('qty' + _this.props.cartItemActive).focus();
      });

      Mousetrap.bind('mod+-', function (e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }
        _this.props.dispatch((0, _actions2.addSubOne)(_this.props.cartItemActive, false, _this.props.inCart, _this.props.globalDiscount, _this.props.client));
      });

      Mousetrap.bind('mod+*', function (e) {

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          // internet explorer
          e.returnValue = false;
        }

        var __this = _this;
        _alertifyjs2.default.prompt('Nueva cantidad para el producto seleccionado', 'Ingrese la nueva cantidad para el producto seleccionado', '', function (evt, value) {
          __this.props.dispatch((0, _actions2.updateQtyCode)(__this.props.cartItemActive, value, __this.props.inCart, __this.props.globalDiscount, __this.props.client));
        }, function () {}).set('labels', { ok: 'Ok', cancel: 'Cancelar' });
      });
    }
  }, {
    key: 'discountInputKeyPress',
    value: function discountInputKeyPress(code, ev) {

      if (ev.key == 'Enter') {
        ev.preventDefault();
        var discount = ev.target.value ? ev.target.value : 0;
        this.props.dispatch((0, _actions2.updateItemDiscount)(this.props.inCart, code, discount, this.props.globalDiscount, this.props.client));
      }
    }
  }, {
    key: 'discountInputOnBlur',
    value: function discountInputOnBlur(code, ev) {

      var discount = ev.target.value ? ev.target.value : 0;
      this.props.dispatch((0, _actions2.updateItemDiscount)(this.props.inCart, code, discount, this.props.globalDiscount, this.props.client));
    }
  }, {
    key: 'qtyInputChange',
    value: function qtyInputChange(code, ev) {

      var qty = parseFloat(ev.target.value) ? ev.target.value : 0;
      this.props.dispatch((0, _actions2.updateQty)(code, qty, this.props.inCart, this.props.globalDiscount, this.props.client));
    }
  }, {
    key: 'qtyInputKeyPress',
    value: function qtyInputKeyPress(ev) {
      ev.preventDefault();
      console.log('called');
      if (ev.key == 'Enter') {
        console.log('Presssss', ev.key);
        document.getElementById('productCodeInputField').focus();
      }
    }
  }, {
    key: 'loteInputKeyPress',
    value: function loteInputKeyPress(code, ev) {

      if (ev.key == 'Enter') {
        ev.preventDefault();
        var lote = ev.target.value ? ev.target.value : 0;
        this.props.dispatch((0, _actions2.updateItemLote)(this.props.inCart, code, lote));
      }
    }
  }, {
    key: 'loteInputOnBlur',
    value: function loteInputOnBlur(code, ev) {

      var lote = ev.target.value ? ev.target.value : 0;
      this.props.dispatch((0, _actions2.updateItemLote)(this.props.inCart, code, lote));
    }
  }, {
    key: 'setCartItemActive',
    value: function setCartItemActive(code, ev) {

      this.props.dispatch({ type: 'SET_PRODUCT_ACTIVE_IN_CART', payload: code });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(code, ev) {

      this.props.dispatch((0, _actions.removeFromCart)(this.props.inCart, code));
    }
  }, {
    key: 'fieldFocus',
    value: function fieldFocus(ev) {
      ev.target.select();
    }

    // Render the items in cart using table rows

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var cartItems = this.props.inCart;
      var items2 = cartItems.map(function (item, index) {

        var activeClass = item.product.code == _this3.props.cartItemActive || item.product.barcode == _this3.props.cartItemActive ? 'cart-activeRow cart-body-item' : 'cart-body-item';

        var removeIconClass = _this3.props.disabled ? 'removeItemIcon disabled' : 'removeItemIcon';

        var taxes1 = item.product.use_taxes ? item.product.taxes : 0;

        var qtyField = _react2.default.createElement('input', {
          id: 'qty' + item.product.code,
          disabled: _this3.props.disabled,
          onChange: _this3.qtyInputChange.bind(_this3, item.uuid),
          onFocus: _this3.fieldFocus.bind(_this3),
          onKeyUp: _this3.qtyInputKeyPress.bind(_this3),
          type: 'number',
          className: 'form-control',
          value: item.qty
        });

        var discountField = _this3.props.client.saleLoaded ? _react2.default.createElement('input', {
          disabled: _this3.props.disabled,
          onKeyPress: _this3.discountInputKeyPress.bind(_this3, item.uuid),
          onBlur: _this3.discountInputOnBlur.bind(_this3, item.uuid),
          onFocus: _this3.fieldFocus.bind(_this3),
          type: 'number', className: 'form-control',
          defaultValue: parseFloat(item.discount)
        }) : _react2.default.createElement('input', {
          disabled: _this3.props.disabled,
          onKeyPress: _this3.discountInputKeyPress.bind(_this3, item.uuid),
          onBlur: _this3.discountInputOnBlur.bind(_this3, item.uuid),
          onFocus: _this3.fieldFocus.bind(_this3),
          type: 'number', className: 'form-control'
        });

        return _react2.default.createElement(
          'div',
          { className: activeClass,
            key: item.uuid,
            onClick: _this3.setCartItemActive.bind(_this3, item.product.code) },
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-code' },
            _react2.default.createElement(
              'h5',
              null,
              'C\xF3digo'
            ),
            item.product.code
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-description' },
            _react2.default.createElement(
              'h5',
              null,
              'Desc'
            ),
            item.product.description
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-qty' },
            _react2.default.createElement(
              'h5',
              null,
              'Cantidad'
            ),
            qtyField
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-unitPrice' },
            _react2.default.createElement(
              'h5',
              null,
              'P Unit'
            ),
            '\u20A1 ',
            parseFloat(item.priceToUse).formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-discount' },
            _react2.default.createElement(
              'h5',
              null,
              'Desc'
            ),
            discountField
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-iva' },
            _react2.default.createElement(
              'h5',
              null,
              'IVA'
            ),
            taxes1
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-body-item-total' },
            _react2.default.createElement(
              'h5',
              null,
              'Total'
            ),
            '\u20A1 ',
            item.totalWithIv.formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'span',
            { className: removeIconClass },
            _react2.default.createElement('i', { onClick: _this3.removeItem.bind(_this3, item.uuid), className: 'fa fa-times-circle' })
          )
        );
      });

      // return <tbody className='table-body'>
      //   {items}
      // </tbody>

      return _react2.default.createElement(
        'div',
        { id: 'cart-body', className: 'cart-body' },
        items2
      );
    }
  }]);

  return CartItems;
}(_react2.default.Component)) || _class);
exports.default = CartItems;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CartItems, 'CartItems', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/cart/cartItems.jsx');
}();

;

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTotals = updateTotals;
exports.removeFromCart = removeFromCart;
// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS USED IN COMPONENTS
// ------------------------------------------------------------------------------------------

// This function updates totals the cart store item, generates new values according cart item objects, then push the to store
function updateTotals(inCart) {

  var subtotal = 0;
  var subTotalNoDiscount = 0;
  var taxes = 0;
  var total = 0;
  var discountTotal = 0;

  // for Each element adds the values to get totals
  inCart.forEach(function (item) {

    subTotalNoDiscount = subTotalNoDiscount + item.subTotalNoDiscount;

    subtotal = subtotal + item.subtotal;

    var taxesCalc = item.product.use_taxes ? item.subtotal * (item.product.taxes / 100) : 0;

    var taxesCalc2 = item.product.use_taxes2 ? item.subtotal * (item.product.taxes2 / 100) : 0;

    var taxesCalc3 = item.product.use_taxes3 ? item.subtotal * (item.product.taxes3 / 100) : 0;

    taxes = taxes + taxesCalc + taxesCalc2 + taxesCalc3;

    discountTotal = discountTotal + item.discountCurrency; // this is the value in currency
  });
  // TODO Config for round or not
  // total = Math.round(subtotal + taxes)
  total = subtotal + taxes;
  // returs a dispatch with a payload of the obtained values
  return {
    type: 'UPDATE_CART_TOTALS',
    payload: {
      subtotal: subtotal,
      taxes: taxes,
      total: total,
      discountTotal: discountTotal,
      subTotalNoDiscount: subTotalNoDiscount
    }
  };
}

// Finds a code in the cart and sends a dispatch to remove it from cart based on index
function removeFromCart(itemsInCart, code) {

  var indexInCart = itemsInCart.findIndex(function (item) {
    return item.uuid == code;
  }); // checks if product exists

  var res = indexInCart == -1 ? // if not exists dispatch Not Found, if exists check if already in cart
  {
    type: 'PRODUCT_IN_CART_NOT_FOUND',
    payload: -1
  } : {
    type: 'REMOVE_FROM_CART',
    payload: indexInCart
  };

  return res;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateTotals, 'updateTotals', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/cart/actions.js');

  __REACT_HOT_LOADER__.register(removeFromCart, 'removeFromCart', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/cart/actions.js');
}();

;

/***/ }),

/***/ 623:
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

var _clients = __webpack_require__(624);

var _clients2 = _interopRequireDefault(_clients);

var _totals = __webpack_require__(626);

var _totals2 = _interopRequireDefault(_totals);

var _buttons = __webpack_require__(627);

var _buttons2 = _interopRequireDefault(_buttons);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Aside = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    fullWidth: store.sale.fullWidth,
    total: store.cart.cartTotal
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Aside, _React$Component);

  function Aside() {
    _classCallCheck(this, Aside);

    return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
  }

  _createClass(Aside, [{
    key: 'toggleWidth',
    value: function toggleWidth() {
      this.props.dispatch({ type: 'TOGGLE_FULL_WIDTH', payload: '' });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      var asideClass = this.props.fullWidth ? 'sale-aside collapsed' : 'sale-aside';
      var asideContainerClass = this.props.fullWidth ? 'sale-aside-content collapsed' : 'sale-aside-content';
      return _react2.default.createElement(
        'div',
        { className: asideClass },
        _react2.default.createElement(
          'div',
          { className: asideContainerClass },
          _react2.default.createElement(_clients2.default, null),
          _react2.default.createElement(_totals2.default, null),
          _react2.default.createElement(_buttons2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'sale-aside-total' },
          '\u20A1 ',
          this.props.total.formatMoney(),
          _react2.default.createElement('i', { className: 'fa fa-chevron-right', onClick: this.toggleWidth.bind(this) })
        )
      );
    }
  }]);

  return Aside;
}(_react2.default.Component)) || _class);
exports.default = Aside;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Aside, 'Aside', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/aside/aside.jsx');
}();

;

/***/ }),

/***/ 624:
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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(270);

var _api = __webpack_require__(3);

var _getClientDebt = __webpack_require__(625);

var _actions2 = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clients = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    clients: store.clients.clients,
    clientSelected: store.clients.clientSelected,
    cart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount,
    client: store.clients.clientSelected,
    users: store.clients.users,
    user: store.clients.userSelected,
    // movements: store.clientmovements.movements,
    debt: store.clients.clientSelectedDebt
    // disabled: store.sales.completed
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Clients, _React$Component);

  function Clients() {
    _classCallCheck(this, Clients);

    return _possibleConstructorReturn(this, (Clients.__proto__ || Object.getPrototypeOf(Clients)).apply(this, arguments));
  }

  _createClass(Clients, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.clientSelected != this.props.clientSelected) {
        // set the discount: default value or 0

        if (!nextProps.clientSelected.saleLoaded) {

          var kwargs = {
            client_id: nextProps.clientSelected.id,
            success: 'SET_CLIENT_DEBT',
            fail: 'SET_CLIENT_DEBT_FAILED'
          };

          var discount = nextProps.client.defaultDiscount ? nextProps.client.defaultDiscount : 0;

          this.props.dispatch((0, _actions2.recalcCart)(nextProps.cart, discount, nextProps.client));
          this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });

          this.props.dispatch((0, _getClientDebt.getClientDebt)(kwargs));

          // SETS VALUE OF DEFAULT DISCOUNT TO FIELD OR 0
          if (nextProps.client.defaultDiscount) {
            document.getElementById('discountField').value = discount;
            document.getElementById('discountField').disabled = true;
          } else {
            document.getElementById('discountField').value = '';
            document.getElementById('discountField').disabled = false;
          }
        }
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
      this.props.dispatch({ type: 'CLEAR_CLIENTS', payload: '' });

      var clientKwargs = {
        url: '/api/clients',
        successType: 'FETCH_CLIENTS_FULFILLED',
        errorType: 'FETCH_CLIENTS_REJECTED'
      };

      this.props.dispatch((0, _api.getItemDispatch)(clientKwargs));
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {

        var code = ev.target.value; // Split val [0] is code [1] is qty
        this.props.dispatch((0, _actions.clientSelected)(code, this.props.clients)); // dispatchs action according to result
      }
    }
  }, {
    key: 'userSelect',
    value: function userSelect(ev) {
      var _id = ev.target.value;
      this.props.dispatch((0, _actions.userSelected)(_id, this.props.users)); // dispatchs action according to result
    }
  }, {
    key: 'userUnSelect',
    value: function userUnSelect(ev) {
      this.props.dispatch({ type: 'USER_CLEAR', payload: '' }); // dispatchs action according to result
    }
  }, {
    key: 'searchClientClick',
    value: function searchClientClick() {

      this.props.dispatch((0, _actions.searchClient)());
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      // ********************************************************************
      // SELECT2 DATA
      // ********************************************************************

      var clientToShow = this.props.clientSelected ? this.props.clientSelected.name + ' ' + this.props.clientSelected.last_name : 'Cliente Contado';

      // const creditIcon = (this.props.clientSelected && this.props.clientSelected.has_credit)
      //   ? 'fa fa-check-square'
      //   : 'fa fa-times-circle'

      return _react2.default.createElement(
        'div',
        { className: 'client' },
        _react2.default.createElement(
          'div',
          { className: 'client-img' },
          _react2.default.createElement('img', { disabled: this.props.disabled, onClick: this.searchClientClick.bind(this),
            src: '/media/default/profile.jpg'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'client-data' },
          _react2.default.createElement(
            'div',
            { className: 'client-data-row' },
            _react2.default.createElement(
              'h3',
              null,
              'Cliente :'
            ),
            _react2.default.createElement('input', { disabled: this.props.disabled, onKeyDown: this.inputKeyPress.bind(this),
              type: 'text'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'client-data-row' },
            _react2.default.createElement(
              'h3',
              null,
              'Nombre :'
            ),
            _react2.default.createElement(
              'span',
              null,
              clientToShow
            )
          )
        )
      );
    }
  }]);

  return Clients;
}(_react2.default.Component)) || _class);
exports.default = Clients;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Clients, 'Clients', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/clients.jsx');
}();

;

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientDebt = getClientDebt;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
_axios2.default.defaults.xsrfCookieName = 'csrftoken';
_axios2.default.defaults.xsrfHeaderName = 'X-CSRFToken';

// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------------------------------------------

// CHECK FOR CLIENT DEBT AND DISPATCH
function getClientDebt(kwargs) {
  return function (dispatch) {
    var data = JSON.stringify({ client_id: kwargs.client_id });
    // calls the function in backend to check permissions
    _axios2.default.post('/api/getclientdebt/', data).then(function (response) {
      console.log(response);
      dispatch({ type: 'FETCHING_DONE', payload: '' });
      dispatch({ type: kwargs.success, payload: response.data });
    }).catch(function (error) {
      _alertifyjs2.default.alert('ERROR', 'Error al intentar obtener la deuda del usuario, por favor intente de nuevo o comun\xEDquese con el\n        administrador del sistema con el siguiete error: ' + error);
      dispatch({ type: kwargs.fail, payload: '' });
    });
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getClientDebt, 'getClientDebt', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/utils/getClientDebt.js');
}();

;

/***/ }),

/***/ 626:
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

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(59);

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Totals = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    total: store.cart.cartTotal,
    client: store.clients.clientSelected,
    taxes: store.cart.cartTaxes,
    discountTotal: store.cart.discountTotal,
    subTotalNoDiscount: store.cart.cartSubtotalNoDiscount,
    itemsInCart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount
    // disabled: store.sales.completed
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Totals, _React$Component);

  function Totals(props) {
    _classCallCheck(this, Totals);

    var _this = _possibleConstructorReturn(this, (Totals.__proto__ || Object.getPrototypeOf(Totals)).call(this, props));

    _this.state = {
      discountVal: 0
    };
    return _this;
  }

  _createClass(Totals, [{
    key: 'showInvoicePanel',
    value: function showInvoicePanel() {
      this.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: -1 });
    }
  }, {
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {
      // if Key pressed id Enter
      if (ev.key == 'Enter') {

        var discount = ev.target.value ? ev.target.value : 0;
        // CALC THE MAX DISCOUNT AND CHECKS IT ON FIELD
        var maxDiscount = this.props.client.maxDiscount ? this.props.client.maxDiscount : 100;
        if (discount <= maxDiscount) {
          this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });
          this.props.dispatch((0, _actions.recalcCart)(this.props.itemsInCart, this.state.discountVal, this.props.client));
        } else {
          _alertifyjs2.default.alert('Error', 'El descuento para el cliente seleccionado no puede ser mayor al ' + maxDiscount + '%');
          document.getElementById('discountField').value = parseFloat(this.props.globalDiscount);
        }
      } else {
        this.state.discountVal = ev.target.value ? parseFloat(ev.target.value) : 0;
      }
    }
  }, {
    key: 'inputOnBlur',
    value: function inputOnBlur(ev) {
      // if Key pressed id Enter

      var discount = ev.target.value ? ev.target.value : 0;
      // CALC THE MAX DISCOUNT AND CHECKS IT ON FIELD
      var maxDiscount = this.props.client.maxDiscount ? this.props.client.maxDiscount : 100;
      if (discount <= maxDiscount) {
        this.props.dispatch({ type: 'SET_GLOBAL_DISCOUNT', payload: discount });
        this.props.dispatch((0, _actions.recalcCart)(this.props.itemsInCart, this.state.discountVal, this.props.client));
      } else {
        _alertifyjs2.default.alert('Error', 'El descuento para el cliente seleccionado no puede ser mayor al ' + maxDiscount + '%');
        document.getElementById('discountField').value = parseFloat(this.props.globalDiscount);
      }
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'totals' },
        _react2.default.createElement(
          'div',
          { style: {
              'paddingTop': '0',
              'marginTop': '0'
            }, className: 'bg-white right-item' },
          _react2.default.createElement(
            'table',
            { className: 'table totals-table' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Sub-Total:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.subTotalNoDiscount.formatMoney(2, ',', '.')
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  { style: {
                      'width': '37%'
                    } },
                  'Descuento %'
                ),
                _react2.default.createElement(
                  'td',
                  { style: {
                      'padding': '0'
                    } },
                  _react2.default.createElement('input', {
                    id: 'discountField',
                    disabled: this.props.disabled,
                    onKeyPress: this.inputKeyPress.bind(this),
                    onChange: this.inputKeyPress.bind(this),
                    onBlur: this.inputOnBlur.bind(this),
                    type: 'number',
                    style: {
                      'width': '100%',
                      'height': '37px',
                      'padding': '0 0 0 10px',
                      'fontSize': '15px',
                      'border': '0',
                      'position': 'relative',
                      'display': 'inline-block'
                    },
                    className: 'sale_global_discount_input form-control' })
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Descuento:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.discountTotal.formatMoney(2, ',', '.')
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'IV:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.taxes.formatMoney(2, ',', '.')
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Total:'
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'price' },
                  '\u20A1 ',
                  this.props.total.formatMoney(2, ',', '.')
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Totals;
}(_react2.default.Component)) || _class);
exports.default = Totals;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Totals, 'Totals', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/totals/totals.jsx');
}();

;

/***/ }),

/***/ 627:
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

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = (_dec = (0, _reactRedux.connect)(function (store) {
  return { disabled: store.sales.completed };
}), _dec(_class = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'showPayPanel',
    value: function showPayPanel() {
      this.props.dispatch({ type: 'SHOW_PAY_PANEL', payload: -1 });
    }
  }, {
    key: 'showInoicePanel',
    value: function showInoicePanel() {
      this.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: -1 });
    }
  }, {
    key: 'showSalePanel',
    value: function showSalePanel() {
      this.props.dispatch({ type: 'SHOW_SALES_PANEL', payload: -1 });
    }
  }, {
    key: 'showPresalesPanel',
    value: function showPresalesPanel() {
      this.props.dispatch({ type: 'SHOW_PRESALES_PANEL', payload: -1 });
    }
  }, {
    key: 'newSale',
    value: function newSale() {
      // window.location.reload()
      window.location.href = '/sales/sale';
      // this.props.dispatch({type: 'NEW_SALE', payload: -1})
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var buttons = this.props.disabled ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: this.showInoicePanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Factura',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-money' })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.newSale.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Nueva Venta',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-refresh' })
          )
        )
      ) : '';

      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 buttons' },
        _react2.default.createElement(
          'button',
          {
            disabled: this.props.disabled,
            onClick: this.showPayPanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Cobrar',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-credit-card' })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            disabled: this.props.disabled,
            onClick: this.showSalePanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Ventas del d\xEDa',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-list' })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            disabled: this.props.disabled,
            onClick: this.showPresalesPanel.bind(this),
            style: {
              'height': '48px',
              'width': '49%',
              'marginTop': '10px'
            },
            className: 'btn btn-default buttons-payButton' },
          'Pre-Ventas',
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-list' })
          )
        ),
        buttons
      );
    }
  }]);

  return Buttons;
}(_react2.default.Component)) || _class);
exports.default = Buttons;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Buttons, 'Buttons', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/buttons/buttons.jsx');
}();

;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /* Module dependencies */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(84);

var _searchForm = __webpack_require__(629);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(630);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(30);

var searchProducts = (_dec = (0, _reactRedux.connect)(function (store) {
  return { visible: store.searchProducts.visible };
}), _dec(_class = function (_React$Component) {
  _inherits(searchProducts, _React$Component);

  function searchProducts() {
    _classCallCheck(this, searchProducts);

    return _possibleConstructorReturn(this, (searchProducts.__proto__ || Object.getPrototypeOf(searchProducts)).apply(this, arguments));
  }

  _createClass(searchProducts, [{
    key: 'panelClick',
    value: function panelClick(ev) {

      if (ev.target.classList.contains('cd-panel')) {
        this.props.dispatch((0, _actions.hidePanel)());
        document.getElementById('productCodeInputField').focus();
        Mousetrap.unbind('esc');
      }
    }
    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var visibleOrNot = this.props.visible ? 'cd-panel cd-panel-search-product from-left is-visible' : 'cd-panel cd-panel-search-product from-left';

      return _react2.default.createElement(
        'div',
        { className: visibleOrNot, onClick: this.panelClick.bind(this) },
        _react2.default.createElement(
          'header',
          { className: 'cd-panel-header' },
          _react2.default.createElement(
            'h1',
            null,
            'B\xFAsqueda de Producto'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cd-panel-container' },
          _react2.default.createElement(
            'div',
            { className: 'cd-panel-content' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_searchForm2.default, null),
              _react2.default.createElement(_resultsTable2.default, null)
            )
          )
        )
      );
    }
  }]);

  return searchProducts;
}(_react2.default.Component)) || _class);
exports.default = searchProducts;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchProducts, 'searchProducts', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/searchPanel.jsx');
}();

;

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchForm = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    products: store.products.products,
    searchValue: store.searchProducts.searchValue
  };
}), _dec(_class = function (_React$Component) {
  _inherits(searchForm, _React$Component);

  function searchForm(props) {
    _classCallCheck(this, searchForm);

    var _this = _possibleConstructorReturn(this, (searchForm.__proto__ || Object.getPrototypeOf(searchForm)).call(this, props));

    _this.state = {
      searchVal: ''
    };
    return _this;
  }

  _createClass(searchForm, [{
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {

      if (ev.key == 'Enter') {

        ev.preventDefault();
        this.searchProductAction();
      } else {
        this.props.dispatch({ type: 'SET_PRODUCT_SEARCH_FIELD_VALUE', payload: ev.target.value });
      }
    }
  }, {
    key: 'searchProductAction',
    value: function searchProductAction() {
      this.props.dispatch((0, _actions.searchProduct)(this.props.searchValue, this.props.products));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'product-search-input' },
              'B\xFAsqueda por Descripci\xF3n:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7 col-sm-8' },
              _react2.default.createElement('input', { onKeyDown: this.inputKeyPress.bind(this), onChange: this.inputKeyPress.bind(this), value: this.props.searchValue, type: 'text', style: {
                  'width': '100%'
                }, id: 'product-search-input', className: 'form-control input-lg mousetrap' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2' },
              _react2.default.createElement(
                'button',
                { onClick: this.searchProductAction.bind(this), type: 'button', id: 'product-search-btn', style: {
                    'height': '48px',
                    'width': '48px'
                  }, className: 'btn btn-success form-control marginBtnAdd2' },
                _react2.default.createElement('span', { className: 'fa fa-search' })
              )
            )
          )
        )
      );
    }
  }]);

  return searchForm;
}(_react2.default.Component)) || _class);
exports.default = searchForm;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchForm, 'searchForm', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/searchForm.jsx');
}();

;

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resultsTable = (_dec = (0, _reactRedux.connect)(function (store) {
  return { matches: store.searchProducts.productsMatched, products: store.products.products };
}), _dec(_class = function (_React$Component) {
  _inherits(resultsTable, _React$Component);

  function resultsTable() {
    _classCallCheck(this, resultsTable);

    return _possibleConstructorReturn(this, (resultsTable.__proto__ || Object.getPrototypeOf(resultsTable)).apply(this, arguments));
  }

  _createClass(resultsTable, [{
    key: 'selectProduct',
    value: function selectProduct(code, ev) {
      this.props.dispatch((0, _actions.productSelectedTable)(code)); // dispatchs action according to result
      this.props.dispatch((0, _actions.hidePanel)());
      document.getElementById('productCodeInputField').focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var products = this.props.matches.map(function (item) {

        return _react2.default.createElement(
          'tr',
          { onDoubleClick: _this2.selectProduct.bind(_this2, item.code), key: item.code },
          _react2.default.createElement(
            'td',
            null,
            item.code
          ),
          _react2.default.createElement(
            'td',
            null,
            item.description
          ),
          _react2.default.createElement(
            'td',
            null,
            item.sellprice
          )
        );
      });

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'table',
              { id: 'producte-search-table', className: 'table table-bordered table-hover' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'C\xF3digo'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Descripci\xF3n'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Precio'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                { className: 'product-search-table-body' },
                products
              )
            )
          )
        )
      );
    }
  }]);

  return resultsTable;
}(_react2.default.Component)) || _class);
exports.default = resultsTable;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(resultsTable, 'resultsTable', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/resultsTable.jsx');
}();

;

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /* Module dependencies */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(85);

var _searchForm = __webpack_require__(632);

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsTable = __webpack_require__(633);

var _resultsTable2 = _interopRequireDefault(_resultsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(30);

var searchClients = (_dec = (0, _reactRedux.connect)(function (store) {
  return { visible: store.searchClients.visible };
}), _dec(_class = function (_React$Component) {
  _inherits(searchClients, _React$Component);

  function searchClients() {
    _classCallCheck(this, searchClients);

    return _possibleConstructorReturn(this, (searchClients.__proto__ || Object.getPrototypeOf(searchClients)).apply(this, arguments));
  }

  _createClass(searchClients, [{
    key: 'panelClick',
    value: function panelClick(ev) {

      if (ev.target.classList.contains('cd-panel')) {
        this.props.dispatch((0, _actions.hidePanel)());
        document.getElementById('productCodeInputField').focus();
        Mousetrap.unbind('esc');
      }
    }
    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      var visibleOrNot = this.props.visible ? 'cd-panel cd-panel-search-client from-right is-visible' : 'cd-panel cd-panel-search-client from-right';

      return _react2.default.createElement(
        'div',
        { className: visibleOrNot, onClick: this.panelClick.bind(this) },
        _react2.default.createElement(
          'header',
          { className: 'cd-panel-header' },
          _react2.default.createElement(
            'h1',
            null,
            'B\xFAsqueda de Cliente'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cd-panel-container' },
          _react2.default.createElement(
            'div',
            { className: 'cd-panel-content' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_searchForm2.default, null),
              _react2.default.createElement(_resultsTable2.default, null)
            )
          )
        )
      );
    }
  }]);

  return searchClients;
}(_react2.default.Component)) || _class);
exports.default = searchClients;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchClients, 'searchClients', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/searchPanel.jsx');
}();

;

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchForm = (_dec = (0, _reactRedux.connect)(function (store) {
  return { clients: store.clients.clients };
}), _dec(_class = function (_React$Component) {
  _inherits(searchForm, _React$Component);

  function searchForm(props) {
    _classCallCheck(this, searchForm);

    var _this = _possibleConstructorReturn(this, (searchForm.__proto__ || Object.getPrototypeOf(searchForm)).call(this, props));

    _this.state = {
      searchVal: ''
    };
    return _this;
  }

  _createClass(searchForm, [{
    key: 'inputKeyPress',
    value: function inputKeyPress(ev) {

      if (ev.key == 'Enter') {
        ev.preventDefault();
        this.searchClientAction();
      } else {
        this.state.searchVal = ev.target.value;
      }
    }
  }, {
    key: 'searchClientAction',
    value: function searchClientAction() {
      var val = this.state.searchVal;
      this.props.dispatch((0, _actions.searchClient)(val, this.props.clients));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'client-search-input' },
              'B\xFAsqueda por Nombre:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7 col-sm-8' },
              _react2.default.createElement('input', { onKeyPress: this.inputKeyPress.bind(this), onChange: this.inputKeyPress.bind(this), type: 'text', style: {
                  'width': '100%'
                }, id: 'client-search-input', className: 'form-control input-lg mousetrap' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2' },
              _react2.default.createElement(
                'button',
                { onClick: this.searchClientAction.bind(this), type: 'button', id: 'client-search-btn', style: {
                    'height': '48px',
                    'width': '48px'
                  }, className: 'btn btn-success form-control marginBtnAdd2' },
                _react2.default.createElement('span', { className: 'fa fa-search' })
              )
            )
          )
        )
      );
    }
  }]);

  return searchForm;
}(_react2.default.Component)) || _class);
exports.default = searchForm;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(searchForm, 'searchForm', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/searchForm.jsx');
}();

;

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(270);

var _actions2 = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resultsTable = (_dec = (0, _reactRedux.connect)(function (store) {
  return { matches: store.searchClients.clientsMatched, clients: store.clients.clients };
}), _dec(_class = function (_React$Component) {
  _inherits(resultsTable, _React$Component);

  function resultsTable() {
    _classCallCheck(this, resultsTable);

    return _possibleConstructorReturn(this, (resultsTable.__proto__ || Object.getPrototypeOf(resultsTable)).apply(this, arguments));
  }

  _createClass(resultsTable, [{
    key: 'selectClient',
    value: function selectClient(code, ev) {
      this.props.dispatch((0, _actions.clientSelected)(code, this.props.clients)); // dispatchs action according to result
      this.props.dispatch((0, _actions2.hidePanel)());
      document.getElementById('productCodeInputField').focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var clients = this.props.matches.map(function (item) {

        var hasCredit = item.has_credit ? 'SI' : 'NO';

        return _react2.default.createElement(
          'tr',
          { onDoubleClick: _this2.selectClient.bind(_this2, item.code), key: item.code },
          _react2.default.createElement(
            'td',
            null,
            item.code
          ),
          _react2.default.createElement(
            'td',
            null,
            item.name + ' ' + item.last_name
          ),
          _react2.default.createElement(
            'td',
            null,
            hasCredit
          ),
          _react2.default.createElement(
            'td',
            null,
            '0'
          )
        );
      });

      return _react2.default.createElement(
        'form',
        { action: '', className: 'col-sm-12 form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'table',
              { id: 'cliente-search-table', className: 'table table-bordered table-hover' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'C\xF3digo'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Nombre'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Cr\xE9dito'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Saldo'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                { className: 'client-search-table-body' },
                clients
              )
            )
          )
        )
      );
    }
  }]);

  return resultsTable;
}(_react2.default.Component)) || _class);
exports.default = resultsTable;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(resultsTable, 'resultsTable', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/resultsTable.jsx');
}();

;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _payMethod = __webpack_require__(635);

var _payMethod2 = _interopRequireDefault(_payMethod);

var _payCahs = __webpack_require__(636);

var _payCahs2 = _interopRequireDefault(_payCahs);

var _payCard = __webpack_require__(637);

var _payCard2 = _interopRequireDefault(_payCard);

var _payCredit = __webpack_require__(638);

var _payCredit2 = _interopRequireDefault(_payCredit);

var _payOther = __webpack_require__(639);

var _payOther2 = _interopRequireDefault(_payOther);

var _paySideBar = __webpack_require__(640);

var _paySideBar2 = _interopRequireDefault(_paySideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayPanel = (_dec = (0, _reactRedux.connect)(function (store) {
  return { panelVisible: store.pay.isVisible, payMethod: store.pay.payMethod };
}), _dec(_class = function (_React$Component) {
  _inherits(PayPanel, _React$Component);

  function PayPanel() {
    _classCallCheck(this, PayPanel);

    return _possibleConstructorReturn(this, (PayPanel.__proto__ || Object.getPrototypeOf(PayPanel)).apply(this, arguments));
  }

  _createClass(PayPanel, [{
    key: 'hidePanel',
    value: function hidePanel() {

      this.props.dispatch({ type: 'HIDE_PAY_PANEL', payload: -1 });
    }
  }, {
    key: 'render',
    value: function render() {

      var isVisible = this.props.panelVisible ? 'pay-panel is-visible' : 'pay-panel';

      var payMethod = '';
      switch (this.props.payMethod) {

        case 'CASH':
          {
            payMethod = _react2.default.createElement(_payCahs2.default, null);
            break;
          } // case

        case 'CARD':
          {
            payMethod = _react2.default.createElement(_payCard2.default, null);
            break;
          } // case

        case 'CRED':
          {
            payMethod = _react2.default.createElement(_payCredit2.default, null);
            break;
          } //  case

        case 'OTHE':
          {
            payMethod = _react2.default.createElement(_payOther2.default, null);
            break;
          } // case

      } // switch

      return _react2.default.createElement(
        'div',
        { className: isVisible },
        _react2.default.createElement(
          'div',
          { className: 'pay-panel-main' },
          _react2.default.createElement(
            'div',
            { className: 'pay-panel-header' },
            'Registrar Pago',
            _react2.default.createElement('i', { onClick: this.hidePanel.bind(this), className: 'fa fa-times', 'aria-hidden': 'true' })
          ),
          _react2.default.createElement(_payMethod2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'pay-area-container' },
            payMethod,
            _react2.default.createElement(_paySideBar2.default, null)
          )
        )
      );
    }
  }]);

  return PayPanel;
}(_react2.default.Component)) || _class);
exports.default = PayPanel;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayPanel, 'PayPanel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/payPanel.jsx');
}();

;

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayMethod = (_dec = (0, _reactRedux.connect)(function (store) {
  return { payMethod: store.pay.payMethod };
}), _dec(_class = function (_React$Component) {
  _inherits(PayMethod, _React$Component);

  function PayMethod() {
    _classCallCheck(this, PayMethod);

    return _possibleConstructorReturn(this, (PayMethod.__proto__ || Object.getPrototypeOf(PayMethod)).apply(this, arguments));
  }

  _createClass(PayMethod, [{
    key: 'clickChangePayMethod',
    value: function clickChangePayMethod(method, ev) {

      this.props.dispatch({ type: 'CHANGE_PAY_METHOD', payload: method });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-select' },
        _react2.default.createElement(
          'div',
          { onClick: this.clickChangePayMethod.bind(this, 'CASH'), className: this.props.payMethod == 'CASH' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Efectivo'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-money', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.clickChangePayMethod.bind(this, 'CARD'), className: this.props.payMethod == 'CARD' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Tarjeta'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-credit-card', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.clickChangePayMethod.bind(this, 'CRED'), className: this.props.payMethod == 'CRED' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Cr\xE9dito'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-users', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.payMethod == 'OTHE' ? 'pay-method-select-item selected' : 'pay-method-select-item' },
          _react2.default.createElement(
            'div',
            { className: 'pay-method-select-item-header' },
            _react2.default.createElement(
              'span',
              null,
              'Otro'
            )
          ),
          _react2.default.createElement('i', { className: 'fa fa-share', 'aria-hidden': 'true' })
        )
      );
    }
  }]);

  return PayMethod;
}(_react2.default.Component)) || _class);
exports.default = PayMethod;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayMethod, 'PayMethod', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/components/payMethod.jsx');
}();

;

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(271);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayCash = (_dec = (0, _reactRedux.connect)(function (store) {
  return { cashAmount: store.pay.cashAmount };
}), _dec(_class = function (_React$Component) {
  _inherits(PayCash, _React$Component);

  function PayCash() {
    _classCallCheck(this, PayCash);

    return _possibleConstructorReturn(this, (PayCash.__proto__ || Object.getPrototypeOf(PayCash)).apply(this, arguments));
  }

  _createClass(PayCash, [{
    key: 'payAmountChanged',
    value: function payAmountChanged(ev) {

      this.props.dispatch((0, _actions.updateStoreCashAmount)(ev.target.value));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Efectivo'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'EFECTIVO:'
          ),
          _react2.default.createElement('input', { value: this.props.cashAmount, onChange: this.payAmountChanged.bind(this), type: 'Number', className: 'form-control' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayCash;
}(_react2.default.Component)) || _class);
exports.default = PayCash;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayCash, 'PayCash', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/components/payCahs.jsx');
}();

;

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(271);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayCard = (_dec = (0, _reactRedux.connect)(function (store) {
  return { cardAuth: store.pay.cardAuth, cardDigits: store.pay.cardDigits };
}), _dec(_class = function (_React$Component) {
  _inherits(PayCard, _React$Component);

  function PayCard() {
    _classCallCheck(this, PayCard);

    return _possibleConstructorReturn(this, (PayCard.__proto__ || Object.getPrototypeOf(PayCard)).apply(this, arguments));
  }

  _createClass(PayCard, [{
    key: 'payCardAuthChanged',
    value: function payCardAuthChanged(ev) {

      this.props.dispatch((0, _actions.updateStoreCardAuth)(ev.target.value));
    }
  }, {
    key: 'payCardDigitsChanged',
    value: function payCardDigitsChanged(ev) {

      this.props.dispatch((0, _actions.updateStoreCardDigits)(ev.target.value));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Tarjeta'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            '4 DIGITOS:'
          ),
          _react2.default.createElement('input', { value: this.props.cardDigits, onChange: this.payCardDigitsChanged.bind(this), type: 'Number', className: 'form-control' }),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'AUTORIZACI\xD3N:'
          ),
          _react2.default.createElement('input', { value: this.props.cardAuth, onChange: this.payCardAuthChanged.bind(this), type: 'Number', className: 'form-control' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayCard;
}(_react2.default.Component)) || _class);
exports.default = PayCard;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayCard, 'PayCard', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/components/payCard.jsx');
}();

;

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayCredit = (_dec = (0, _reactRedux.connect)(function (store) {
  return { client: store.clients.clientSelected, debt: store.clients.clientSelectedDebt };
}), _dec(_class = function (_React$Component) {
  _inherits(PayCredit, _React$Component);

  function PayCredit() {
    _classCallCheck(this, PayCredit);

    return _possibleConstructorReturn(this, (PayCredit.__proto__ || Object.getPrototypeOf(PayCredit)).apply(this, arguments));
  }

  _createClass(PayCredit, [{
    key: 'render',
    value: function render() {
      var available = parseFloat(this.props.client.credit_limit) - parseFloat(this.props.debt);
      var clientLimit = this.props.client.has_credit ? '\u20A1 ' + parseFloat(this.props.client.credit_limit).formatMoney(2, ',', '.') : 'SIN CRÉDITO';
      var clientAvailable = this.props.client.has_credit ? '\u20A1 ' + available.formatMoney(2, ',', '.') : 'SIN CRÉDITO';

      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Cr\xE9dito'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'L\xCDMITE:'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            clientLimit
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'DISPONIBLE:'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            clientAvailable
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayCredit;
}(_react2.default.Component)) || _class);
exports.default = PayCredit;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayCredit, 'PayCredit', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/components/payCredit.jsx');
}();

;

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayOther = (_dec = (0, _reactRedux.connect)(function (store) {
  return {};
}), _dec(_class = function (_React$Component) {
  _inherits(PayOther, _React$Component);

  function PayOther() {
    _classCallCheck(this, PayOther);

    return _possibleConstructorReturn(this, (PayOther.__proto__ || Object.getPrototypeOf(PayOther)).apply(this, arguments));
  }

  _createClass(PayOther, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'pay-method-body' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          ' ',
          _react2.default.createElement(
            'span',
            null,
            'Otro'
          ),
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return PayOther;
}(_react2.default.Component)) || _class);
exports.default = PayOther;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PayOther, 'PayOther', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/components/payOther.jsx');
}();

;

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import {saveItem, loadSale} from '../actions'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _save = __webpack_require__(641);

var _save2 = _interopRequireDefault(_save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(30);

var PaySideBar = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    cart: store.cart,
    payMethod: store.pay.payMethod,
    pay: store.pay,
    client: store.clients.clientSelected,
    user: store.clients.userSelected,
    debt: store.clients.clientSelectedDebt
    // sales: store.sales.sales,
    // saleId: store.sales.saleActiveId,
    // sale: store.sales.saleActive,
    // movements: store.clientmovements.movements
  };
}), _dec(_class = function (_React$Component) {
  _inherits(PaySideBar, _React$Component);

  function PaySideBar() {
    _classCallCheck(this, PaySideBar);

    return _possibleConstructorReturn(this, (PaySideBar.__proto__ || Object.getPrototypeOf(PaySideBar)).apply(this, arguments));
  }

  _createClass(PaySideBar, [{
    key: 'saveBtn',
    value: function saveBtn() {
      // const sales = this.props.sales
      var user = this.props.user;
      var sale = {
        cart: JSON.stringify(this.props.cart),
        client: JSON.stringify(this.props.client),
        user: JSON.stringify(this.props.user),
        pay: JSON.stringify(this.props.pay)
      };

      if (this.props.pay.payMethod == 'CREDIT') {
        sale.pay.debt = this.props.cart.cartTotal;
        sale.pay.payed = false;
      }

      var kwargs = {
        url: '/api/sales/',
        item: sale,
        logCode: 'SALE_CREATE',
        logDescription: 'Creación de nueva Venta',
        logModel: 'SALE',
        user: user,
        itemOld: '',
        sucessMessage: 'Venta creada Correctamente.',
        errorMessage: 'Hubo un error al crear la Venta, intente de nuevo.',
        dispatchType: 'CLEAR_SALE',
        isSale: true
      };

      this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
      this.props.dispatch((0, _api.saveItem)(kwargs));
      this.props.dispatch({ type: 'HIDE_PAY_PANEL', payload: '' });

      Mousetrap.reset();
    }
  }, {
    key: 'render',
    value: function render() {

      var change = 0;
      var payButtonClass = 'pay-tag tag-button';
      var total = parseFloat(this.props.cart.cartTotal);
      var cash = parseFloat(this.props.pay.cashAmount);

      switch (this.props.payMethod) {

        case 'CASH':
          {
            change = cash - total;
            payButtonClass = total > 0 && change >= 0 ? 'pay-tag tag-button enable' : 'pay-tag tag-button';
            break;
          }

        case 'CARD':
          {
            var auth = this.props.pay.cardAuth;
            var digits = this.props.pay.cardDigits;
            change = parseFloat(this.props.pay.cashAmount) - parseFloat(this.props.total);
            payButtonClass = total > 0 && auth && digits ? 'pay-tag tag-button enable' : 'pay-tag tag-button';
            break;
          }
        case 'CRED':
          {
            var available = parseFloat(this.props.client.credit_limit) - parseFloat(this.props.debt);
            payButtonClass = total > 0 && total <= available && this.props.client.has_credit ? 'pay-tag tag-button enable' : 'pay-tag tag-button';
            break;
          }

      }

      return _react2.default.createElement(
        'div',
        { className: 'pay-side-bar' },
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-header' },
          _react2.default.createElement(
            'span',
            null,
            'Pago'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pay-method-body-content' },
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'TOTAL :'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            '\u20A1 ',
            this.props.cart.cartTotal.formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag left' },
            'VUELTO :'
          ),
          _react2.default.createElement(
            'div',
            { className: 'pay-tag right' },
            '\u20A1 ',
            change.formatMoney(2, ',', '.')
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_save2.default, { payButtonClass: payButtonClass })
        )
      );
    }
  }]);

  return PaySideBar;
}(_react2.default.Component)) || _class);
exports.default = PaySideBar;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaySideBar, 'PaySideBar', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/components/paySideBar.jsx');
}();

;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import {saveItem, loadSale} from '../actions'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(642);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mousetrap = __webpack_require__(30);

var SaveBtn = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    cart: store.cart,
    payMethod: store.pay.payMethod,
    pay: store.pay,
    client: store.clients.clientSelected,
    user: store.clients.userSelected,
    debt: store.clients.clientSelectedDebt
    // sales: store.sales.sales,
    // saleId: store.sales.saleActiveId,
    // sale: store.sales.saleActive,
    // movements: store.clientmovements.movements
  };
}), _dec(_class = function (_React$Component) {
  _inherits(SaveBtn, _React$Component);

  function SaveBtn() {
    _classCallCheck(this, SaveBtn);

    return _possibleConstructorReturn(this, (SaveBtn.__proto__ || Object.getPrototypeOf(SaveBtn)).apply(this, arguments));
  }

  _createClass(SaveBtn, [{
    key: 'saveBtn',
    value: function saveBtn() {
      var _this3 = this;

      // const sales = this.props.sales
      var user = this.props.user;
      var payed = !(this.props.pay.payMethod == 'CRED');

      var sale = {
        cart: JSON.stringify(this.props.cart),
        client: JSON.stringify(this.props.client),
        user: JSON.stringify(this.props.user),
        pay: JSON.stringify(this.props.pay),
        pay_type: this.props.pay.payMethod,
        payed: payed,
        client_id: this.props.client.id
      };

      var creditMovement = {
        client_id: this.props.client.id,
        movement_type: 'CRED',
        amount: this.props.cart.cartTotal
      };

      var kwargs = {
        url: '/api/sales/',
        item: sale,
        logCode: 'SALE_CREATE',
        logDescription: 'Creación de nueva Venta',
        logModel: 'SALE',
        user: user,
        itemOld: '',
        sucessMessage: 'Venta creada Correctamente.',
        errorMessage: 'Hubo un error al crear la Venta, intente de nuevo.',
        creditMovement: creditMovement
      };

      var _this = this;

      var updatePromise = new Promise(function (resolve, reject) {
        _this.props.dispatch({ type: 'FETCHING_STARTED', payload: '' });
        _this.props.dispatch((0, _actions.saveItem)(kwargs, resolve, reject));
      });

      updatePromise.then(function () {
        _this3.props.dispatch({ type: 'HIDE_PAY_PANEL', payload: '' });
        _this3.props.dispatch({ type: 'FETCHING_DONE', payload: '' });
        _this3.props.dispatch({ type: 'SHOW_INVOICE_PANEL', payload: '' });
        Mousetrap.reset();
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { onClick: this.saveBtn.bind(this), className: this.props.payButtonClass },
        'Registrar',
        _react2.default.createElement('i', { className: 'fa fa-credit-card', 'aria-hidden': 'true' })
      );
    }
  }]);

  return SaveBtn;
}(_react2.default.Component)) || _class);
exports.default = SaveBtn;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SaveBtn, 'SaveBtn', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/save/save.jsx');
}();

;

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveItem = saveItem;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

var _api = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------------------
// SAVE FUNCTION (CREATE)
// ------------------------------------------------------------------------------------------
function saveItem(kwargs, resolve, reject) {
  var item = kwargs.item;
  delete item['id'];
  var url = kwargs.url;
  var logCode = kwargs.logCode;
  var itemOld = kwargs.itemOld;
  var logModel = kwargs.logModel;
  var logDescription = kwargs.logDescription;
  var user = kwargs.user;

  return function (dispatch) {

    (0, _axios2.default)({
      method: 'post',
      url: url,
      data: item
    }).then(function (response) {

      (0, _api.saveLog)(logCode, logModel, itemOld, item, logDescription, user);

      // IF THE SALE IS A CREDIT ONE SAVE CREDIT MOVEMENT
      if (response.data.pay_type == 'CRED') {
        var creditMovement = kwargs.creditMovement;
        creditMovement.bill_id = response.data.id;
        creditMovement.description = 'Venta de cr\xE9dito #' + response.data.bill_number;
        saveCreditMovement(creditMovement, response.data, kwargs, dispatch, resolve, reject);

        // IF IS CASH THEN JUST RESOLVE
      } else {
        dispatch({ type: 'CLEAR_SALE', payload: '' });
        dispatch({ type: 'SET_SALE', payload: response.data });
        _alertifyjs2.default.alert('Completado', kwargs.sucessMessage);
        resolve();
      }
    }).catch(function (err) {
      console.log(err);
      reject();
      if (err.response) {
        console.log(err.response.data);
      }
      _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    });
  };
} // ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------


function saveCreditMovement(movement, sale, kwargs, dispatch, resolve, reject) {
  (0, _axios2.default)({
    method: 'post',
    url: '/api/creditmovements/',
    data: movement
  }).then(function (response) {
    dispatch({ type: 'CLEAR_SALE', payload: '' });
    dispatch({ type: 'SET_SALE', payload: sale });
    _alertifyjs2.default.alert('Completado', kwargs.sucessMessage);
    resolve();
  }).catch(function (err) {
    console.log(err.response.data);
    _alertifyjs2.default.alert('Error', kwargs.errorMessage + ' ERROR: ' + err + '.');
    reject();
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saveItem, 'saveItem', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/save/actions.js');

  __REACT_HOT_LOADER__.register(saveCreditMovement, 'saveCreditMovement', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/save/actions.js');
}();

;

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _api = __webpack_require__(3);

var _fullInvoice = __webpack_require__(644);

var _fullInvoice2 = _interopRequireDefault(_fullInvoice);

var _compactInvoice = __webpack_require__(650);

var _compactInvoice2 = _interopRequireDefault(_compactInvoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvoicePanel = (_dec = (0, _reactRedux.connect)(function (store) {
  return { panelVisible: store.invoice.isVisible, isFull: store.invoice.isFull };
}), _dec(_class = function (_React$Component) {
  _inherits(InvoicePanel, _React$Component);

  function InvoicePanel() {
    _classCallCheck(this, InvoicePanel);

    return _possibleConstructorReturn(this, (InvoicePanel.__proto__ || Object.getPrototypeOf(InvoicePanel)).apply(this, arguments));
  }

  _createClass(InvoicePanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _api.loadGlobalConfig)('company', false, 'FETCH_CONFIG_FULFILLED', 'FETCH_CONFIG_REJECTED'));
    }
  }, {
    key: 'hidePanel',
    value: function hidePanel() {

      this.props.dispatch({ type: 'HIDE_INVOICE_PANEL', payload: -1 });
      // printDiv('full-invoice-print')
    }
  }, {
    key: 'togglePanel',
    value: function togglePanel() {

      this.props.dispatch({ type: 'TOGGLE_INVOICE_PANEL', payload: -1 });
    }
  }, {
    key: 'toggleInvoice',
    value: function toggleInvoice() {

      this.props.dispatch({ type: 'TOGGLE_INVOICE_DESING', payload: -1 });
    }
  }, {
    key: 'printPanel',
    value: function printPanel() {
      window.printDiv('invoice-print');
    }
  }, {
    key: 'render',
    value: function render() {

      var isVisible = this.props.panelVisible ? 'invoice-panel is-visible' : 'invoice-panel';
      var isFullClass = this.props.isFull ? '' : ' compact-invoice-on';

      var componentToMount = this.props.isFull ? _react2.default.createElement(_fullInvoice2.default, null) : _react2.default.createElement(_compactInvoice2.default, null);

      return _react2.default.createElement(
        'div',
        { className: isVisible },
        _react2.default.createElement(
          'div',
          { className: 'invoice-panel-main' + isFullClass },
          _react2.default.createElement(
            'div',
            { className: 'invoice-panel-header' },
            _react2.default.createElement(
              'div',
              null,
              'Factura de Venta'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('i', { onClick: this.hidePanel.bind(this), className: 'fa fa-times', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { onClick: this.togglePanel.bind(this), className: 'fa fa-file-text-o', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { onClick: this.printPanel.bind(this), className: 'fa fa-print', 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'invoice-print', className: 'invoice-panel-container' + isFullClass },
            componentToMount
          )
        )
      );
    }
  }]);

  return InvoicePanel;
}(_react2.default.Component)) || _class);
exports.default = InvoicePanel;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InvoicePanel, 'InvoicePanel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/invoicePanel/invoicePanel.jsx');
}();

;

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(645);

var _header2 = _interopRequireDefault(_header);

var _data = __webpack_require__(646);

var _data2 = _interopRequireDefault(_data);

var _table = __webpack_require__(647);

var _table2 = _interopRequireDefault(_table);

var _totals = __webpack_require__(648);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(649);

var _notes2 = _interopRequireDefault(_notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullInvoice = function (_React$Component) {
  _inherits(FullInvoice, _React$Component);

  function FullInvoice() {
    _classCallCheck(this, FullInvoice);

    return _possibleConstructorReturn(this, (FullInvoice.__proto__ || Object.getPrototypeOf(FullInvoice)).apply(this, arguments));
  }

  _createClass(FullInvoice, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_data2.default, null),
        _react2.default.createElement(_table2.default, null),
        _react2.default.createElement(_totals2.default, null),
        _react2.default.createElement(_notes2.default, null)
      );
    }
  }]);

  return FullInvoice;
}(_react2.default.Component);

exports.default = FullInvoice;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FullInvoice, 'FullInvoice', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/fullInvoice/fullInvoice.jsx');
}();

;

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    sale: store.sales.saleActive,
    company: store.config.company
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      // Credit or cash
      var headertext = this.props.sale.pay.payMethod == 'CREDIT' ? 'Factura de crédito' : 'Factura de contado';
      // LOGO
      var logo = this.props.company.logo || '';
      var logoWidth = this.props.company.logoWidth || '130px';
      var logoUrl = '/media/logos/' + logo;

      // BILL DATA
      var headerName = this.props.company.comercial_name || '';
      var headerName2 = this.props.company.legal_name || '';

      var tels = this.props.company.telephones || '';
      var telsText = tels.split('/').length > 1 ? 'Tels: ' + tels : 'Tel: ' + tels;

      var idType = this.props.company.idType || 'PERSON';
      var id = this.props.company.id || '';
      var idText = idType == 'JURIDI' ? 'C\xE9d Jurid No ' + id : 'C\xE9d No ' + id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'full-invoice-header' },
          _react2.default.createElement(
            'div',
            { className: 'full-invoice-header-logo' },
            _react2.default.createElement('img', { style: { 'width': '' + logoWidth }, src: logoUrl })
          ),
          _react2.default.createElement(
            'div',
            { className: 'full-invoice-header-info' },
            _react2.default.createElement(
              'h2',
              null,
              headerName.toUpperCase()
            ),
            _react2.default.createElement(
              'h3',
              null,
              headerName2
            ),
            _react2.default.createElement(
              'h3',
              null,
              idText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address1 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address2 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.country || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              telsText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.email || ''
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'full-invoice-separator' },
          _react2.default.createElement('span', null),
          _react2.default.createElement(
            'h1',
            null,
            headertext
          ),
          _react2.default.createElement('span', null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component)) || _class);
exports.default = Header;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/fullInvoice/components/header.jsx');
}();

;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = (_dec = (0, _reactRedux.connect)(function (store) {
  return { sale: store.sales.saleActive };
}), _dec(_class = function (_React$Component) {
  _inherits(Data, _React$Component);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {

      var sale = this.props.sale;
      var date = sale.created ? ('0' + sale.created.getDate()).slice(-2) + '/\n      ' + ('0' + (sale.created.getMonth() + 1)).slice(-2) + '/\n      ' + sale.created.getFullYear() : '01/01/1970';
      var client = sale.client ? sale.client.code + ' - ' + sale.client.name + ' ' + sale.client.last_name : '00 - Cliente de Contado';
      var clientAdress = sale.client.adress ? _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'clientAdress' },
          'DIRECCI\xD3N: ',
          sale.client.adress
        )
      ) : _react2.default.createElement('tr', null);
      var id = sale.bill_number ? sale.bill_number : '00001';

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice-data' },
        _react2.default.createElement(
          'table',
          { className: 'client-table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'CLIENTE:'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                client
              )
            ),
            clientAdress
          )
        ),
        _react2.default.createElement(
          'table',
          { className: 'datenum-table' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'N. de factura:'
              ),
              _react2.default.createElement(
                'td',
                null,
                ('00000' + id).slice(-5)
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Fecha:'
              ),
              _react2.default.createElement(
                'td',
                null,
                date
              )
            )
          )
        )
      );
    }
  }]);

  return Data;
}(_react2.default.Component)) || _class);
exports.default = Data;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Data, 'Data', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/fullInvoice/components/data.jsx');
}();

;

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (_dec = (0, _reactRedux.connect)(function (store) {
  return { inCart: store.cart.cartItems, globalDiscount: store.cart.globalDiscount };
}), _dec(_class = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',


    // Main Layout
    value: function render() {

      var cartItems = this.props.inCart;
      var globalDiscount = this.props.globalDiscount ? _react2.default.createElement(
        'td',
        { className: 'right-in-table' },
        this.props.globalDiscount
      ) : _react2.default.createElement(
        'td',
        { style: { 'display': 'none' } },
        '-'
      );
      var items = cartItems.length ? cartItems.map(function (item) {
        var taxesText = item.product.use_taxes ? 'G' : 'E';

        return _react2.default.createElement(
          'tr',
          { key: item.uuid },
          _react2.default.createElement(
            'td',
            null,
            item.product.code
          ),
          _react2.default.createElement(
            'td',
            null,
            item.product.description
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            item.qty
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            '\u20A1 ',
            parseFloat(item.priceToUse).formatMoney(2, ',', '.')
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            item.discount
          ),
          globalDiscount,
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            taxesText
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            '\u20A1 ',
            item.subTotalNoDiscount.formatMoney(2, ',', '.')
          )
        );
      }) : _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          '--'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        ),
        _react2.default.createElement(
          'td',
          null,
          '-'
        )
      );

      var globalDiscountRow = this.props.globalDiscount ? _react2.default.createElement(
        'th',
        { className: 'right-in-table' },
        'Des2 %'
      ) : _react2.default.createElement(
        'th',
        { style: { 'display': 'none' } },
        '-'
      );

      return _react2.default.createElement(
        'table',
        { className: 'full-invoice-table table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'C\xF3digo'
            ),
            _react2.default.createElement(
              'th',
              { className: 'description-row' },
              'Descripci\xF3n'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Cantidad'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'P.U'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Des%'
            ),
            globalDiscountRow,
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'IV'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Precio'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          items
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component)) || _class);
exports.default = Table;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Table, 'Table', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/fullInvoice/components/table.jsx');
}();

;

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Totals = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    total: store.cart.cartTotal,
    taxes: store.cart.cartTaxes,
    discountTotal: store.cart.discountTotal,
    subTotalNoDiscount: store.cart.cartSubtotalNoDiscount,
    itemsInCart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Totals, _React$Component);

  function Totals() {
    _classCallCheck(this, Totals);

    return _possibleConstructorReturn(this, (Totals.__proto__ || Object.getPrototypeOf(Totals)).apply(this, arguments));
  }

  _createClass(Totals, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice-totals' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Sub-total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.subTotalNoDiscount.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Descuento'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.discountTotal.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'IV'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.taxes.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              { className: 'total-row' },
              _react2.default.createElement(
                'th',
                null,
                'Total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.total.formatMoney(2, ',', '.')
              )
            )
          )
        )
      );
    }
  }]);

  return Totals;
}(_react2.default.Component)) || _class);
exports.default = Totals;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Totals, 'Totals', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/fullInvoice/components/totals.jsx');
}();

;

/***/ }),

/***/ 649:
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

var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes() {
    _classCallCheck(this, Notes);

    return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
  }

  _createClass(Notes, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'full-invoice-notes' },
        _react2.default.createElement(
          'h1',
          null,
          'Notas:'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Factura autorizada mediante la resolucion N1197 del 12/08/1997 del DGDT.'
        )
      );
    }
  }]);

  return Notes;
}(_react2.default.Component);

exports.default = Notes;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Notes, 'Notes', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/fullInvoice/components/notes.jsx');
}();

;

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(651);

var _header2 = _interopRequireDefault(_header);

var _table = __webpack_require__(652);

var _table2 = _interopRequireDefault(_table);

var _data = __webpack_require__(653);

var _data2 = _interopRequireDefault(_data);

var _totals = __webpack_require__(654);

var _totals2 = _interopRequireDefault(_totals);

var _notes = __webpack_require__(655);

var _notes2 = _interopRequireDefault(_notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompactInvoice = function (_React$Component) {
  _inherits(CompactInvoice, _React$Component);

  function CompactInvoice() {
    _classCallCheck(this, CompactInvoice);

    return _possibleConstructorReturn(this, (CompactInvoice.__proto__ || Object.getPrototypeOf(CompactInvoice)).apply(this, arguments));
  }

  _createClass(CompactInvoice, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_data2.default, null),
        _react2.default.createElement(_table2.default, null),
        _react2.default.createElement(_totals2.default, null),
        _react2.default.createElement(_notes2.default, null)
      );
    }
  }]);

  return CompactInvoice;
}(_react2.default.Component);

exports.default = CompactInvoice;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CompactInvoice, 'CompactInvoice', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/compactInvoice/compactInvoice.jsx');
}();

;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    sale: store.sales.saleActive,
    company: store.config.company
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {

      var headertext = this.props.sale.pay.payMethod == 'CREDIT' ? 'Factura de crédito' : 'Factura de contado';

      // BILL DATA
      var headerName = this.props.company.comercialName || '';

      var headerName2 = this.props.company.legalName || '';

      var tels = this.props.company.telephones || '';
      var telsText = tels.split('/').length > 1 ? 'Tels: ' + tels : 'Tel: ' + tels;

      var idType = this.props.company.idType || '';
      var id = this.props.company.id || 'PERSON';
      var idText = idType == 'JURIDI' ? 'C\xE9d Jurid No ' + id : 'C\xE9d No ' + id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'compact-invoice-header' },
          _react2.default.createElement(
            'div',
            { className: 'compact-invoice-header-info' },
            _react2.default.createElement(
              'h2',
              null,
              headerName
            ),
            _react2.default.createElement(
              'h3',
              null,
              headerName2
            ),
            _react2.default.createElement(
              'h3',
              null,
              idText
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address1 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.address2 || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.props.company.country || ''
            ),
            _react2.default.createElement(
              'h3',
              null,
              telsText
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'compact-invoice-separator' },
          _react2.default.createElement('span', null),
          _react2.default.createElement(
            'h1',
            null,
            headertext
          ),
          _react2.default.createElement('span', null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component)) || _class);
exports.default = Header;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/compactInvoice/components/header.jsx');
}();

;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (_dec = (0, _reactRedux.connect)(function (store) {
  return { inCart: store.cart.cartItems, globalDiscount: store.cart.globalDiscount };
}), _dec(_class = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',


    // Main Layout
    value: function render() {

      var cartItems = this.props.inCart;
      var items = cartItems.map(function (item) {

        var taxesText = item.product.useTaxes ? 'G' : 'E';

        return _react2.default.createElement(
          'tr',
          { key: item.uuid },
          _react2.default.createElement(
            'td',
            null,
            item.qty
          ),
          _react2.default.createElement(
            'td',
            null,
            item.product.description
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            taxesText
          ),
          _react2.default.createElement(
            'td',
            { className: 'right-in-table' },
            '\u20A1 ',
            item.subTotalNoDiscount.formatMoney(2, ',', '.')
          )
        );
      });

      return _react2.default.createElement(
        'table',
        { className: 'compact-invoice-table table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Cant'
            ),
            _react2.default.createElement(
              'th',
              { className: 'description-row' },
              'Articulo'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'IV'
            ),
            _react2.default.createElement(
              'th',
              { className: 'right-in-table' },
              'Total'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          { className: '' },
          items
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component)) || _class);
exports.default = Table;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Table, 'Table', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/compactInvoice/components/table.jsx');
}();

;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = (_dec = (0, _reactRedux.connect)(function (store) {
  return { sale: store.sales.saleActive };
}), _dec(_class = function (_React$Component) {
  _inherits(Data, _React$Component);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).apply(this, arguments));
  }

  _createClass(Data, [{
    key: 'render',
    value: function render() {
      var sale = this.props.sale;
      var date = sale.created ? ('0' + sale.created.getDate()).slice(-2) + '/\n      ' + ('0' + (sale.created.getMonth() + 1)).slice(-2) + '/\n      ' + sale.created.getFullYear() : '01/01/1970';
      var client = sale.client ? sale.client.code + ' - ' + sale.client.name + ' ' + sale.client.last_name : '00 - Cliente de Contado';
      var id = sale.bill_number ? sale.bill_number : '0001';
      var clientAdress = sale.client.adress ? _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Direc:'
        ),
        _react2.default.createElement(
          'td',
          null,
          sale.client.adress
        )
      ) : _react2.default.createElement('tr', null);

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice-data' },
        _react2.default.createElement(
          'table',
          { className: 'datenum-table' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Fecha:'
              ),
              _react2.default.createElement(
                'td',
                null,
                date
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Factura:'
              ),
              _react2.default.createElement(
                'td',
                null,
                ('00000' + id).slice(-5)
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Cliente:'
              ),
              _react2.default.createElement(
                'td',
                null,
                client
              )
            ),
            clientAdress
          )
        )
      );
    }
  }]);

  return Data;
}(_react2.default.Component)) || _class);
exports.default = Data;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Data, 'Data', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/compactInvoice/components/data.jsx');
}();

;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Totals = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    total: store.cart.cartTotal,
    taxes: store.cart.cartTaxes,
    discountTotal: store.cart.discountTotal,
    subTotalNoDiscount: store.cart.cartSubtotalNoDiscount,
    itemsInCart: store.cart.cartItems,
    globalDiscount: store.cart.globalDiscount
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Totals, _React$Component);

  function Totals() {
    _classCallCheck(this, Totals);

    return _possibleConstructorReturn(this, (Totals.__proto__ || Object.getPrototypeOf(Totals)).apply(this, arguments));
  }

  _createClass(Totals, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice-totals' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Sub-total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.subTotalNoDiscount.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Descuento'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.discountTotal.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'IV'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.taxes.formatMoney(2, ',', '.')
              )
            ),
            _react2.default.createElement(
              'tr',
              { className: 'total-row' },
              _react2.default.createElement(
                'th',
                null,
                'Total'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u20A1 ',
                this.props.total.formatMoney(2, ',', '.')
              )
            )
          )
        )
      );
    }
  }]);

  return Totals;
}(_react2.default.Component)) || _class);
exports.default = Totals;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Totals, 'Totals', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/compactInvoice/components/totals.jsx');
}();

;

/***/ }),

/***/ 655:
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

var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes() {
    _classCallCheck(this, Notes);

    return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
  }

  _createClass(Notes, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'compact-invoice-notes' },
        _react2.default.createElement(
          'h1',
          null,
          'Notas:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'compact-invoice-notes-content' },
          _react2.default.createElement(
            'div',
            null,
            'Factura autorizada mediante la resolucion N1197 del 12/08/1997 del DGDT.'
          )
        )
      );
    }
  }]);

  return Notes;
}(_react2.default.Component);

exports.default = Notes;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Notes, 'Notes', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/compactInvoice/components/notes.jsx');
}();

;

/***/ }),

/***/ 656:
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

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

var _actions = __webpack_require__(657);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    topBarToggleVisible: store.layout.topBarToggleVisible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'menuClick',
    value: function menuClick(ev) {

      (0, _actions.toggleLayout)();
    }
  }, {
    key: 'logOutClick',
    value: function logOutClick() {

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
  }, {
    key: 'homeClick',
    value: function homeClick() {
      // ALERTIFY CONFIRM
      _alertifyjs2.default.confirm('Ir al menú Principal', '\xBFDesea ir al men\xFA principal?', function () {
        window.location.replace('/');
      }, function () {
        return true;
      }).set('labels', {
        ok: 'Ir',
        cancel: 'Permanecer'
      });
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {
      var buttonClass = this.props.topBarToggleVisible ? 'topBar-button topBar-button-collapse visible' : 'topBar-button topBar-button-collapse';

      return _react2.default.createElement(
        'div',
        { className: 'topBar' },
        _react2.default.createElement(
          'div',
          { onClick: this.menuClick.bind(this), className: buttonClass },
          _react2.default.createElement('span', { className: 'fa fa-bars' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'topBar-right' },
          _react2.default.createElement(
            'div',
            { onClick: this.homeClick.bind(this), className: 'topBar-item topBar-item-config' },
            _react2.default.createElement('span', { className: 'fa fa-home' })
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.logOutClick.bind(this), className: 'topBar-button topBar-button-logout' },
            _react2.default.createElement('span', { className: 'fa fa-power-off' })
          )
        )
      );
    }
  }]);

  return TopBar;
}(_react2.default.Component)) || _class);
exports.default = TopBar;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopBar, 'TopBar', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/topBar/topBar.jsx');
}();

;

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleLayout = toggleLayout;
exports.toggleConfigBar = toggleConfigBar;
function toggleLayout() {

  var mainContainer = document.getElementById('mainContainer');
  var sideMenu = document.getElementById('sideMenu');

  if (mainContainer.classList.contains('pulled')) {

    mainContainer.classList.remove('pulled');
    sideMenu.classList.remove('pulled');
    return true;
  }

  mainContainer.classList.add('pulled');
  sideMenu.classList.add('pulled');
}

function toggleConfigBar() {

  var configBar = document.getElementById('configBar');

  if (configBar.classList.contains('not-visible')) {

    configBar.classList.remove('not-visible');
    return true;
  }

  configBar.classList.add('not-visible');
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleLayout, 'toggleLayout', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/topBar/actions.js');

  __REACT_HOT_LOADER__.register(toggleConfigBar, 'toggleConfigBar', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/topBar/actions.js');
}();

;

/***/ }),

/***/ 658:
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

// import ComposedItem from './components/items/composed.jsx'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search = __webpack_require__(659);

var _search2 = _interopRequireDefault(_search);

var _user = __webpack_require__(660);

var _user2 = _interopRequireDefault(_user);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideMenu = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    sideMenuVisible: store.layout.sideMenuVisible
  };
}), _dec(_class = function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
  }

  _createClass(SideMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.getElementById('loader').classList.remove('loader');
    }

    // Main Layout

  }, {
    key: 'render',
    value: function render() {

      // const childProducts = [
      //   {
      //     text: 'Productos',
      //     class: 'fa-gift',
      //     href: '/admin/products'
      //   }, {
      //     text: 'Familias',
      //     class: 'fa-list',
      //     href: '/admin/productdepartments'
      //   }, {
      //     text: 'Sub-Familias',
      //     class: 'fa-outdent',
      //     href: '/admin/productsubdepartments'
      //   }
      // ]

      // const title = this.props.userCompanyConfig.comercialName || this.props.defaultCompanyConfig.comercialName || 'APP'
      var sideMenuClass = this.props.sideMenuVisible ? 'sideMenu' : 'sideMenu hiddenByApp';
      return _react2.default.createElement(
        'div',
        { id: 'sideMenu', className: sideMenuClass },
        _react2.default.createElement(_user2.default, null),
        _react2.default.createElement(_search2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'sideMenu-wrapper col-xs-12' },
          _react2.default.createElement(
            'ul',
            { className: 'sideMenu-items' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales' },
                _react2.default.createElement('span', { className: 'fa fa-area-chart' }),
                'Inicio'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales/sale' },
                _react2.default.createElement('span', { className: 'fa fa-area-chart' }),
                'Nueva Venta'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales/proforma' },
                _react2.default.createElement('span', { className: 'fa fa-user' }),
                'Nueva Cotizaci\xF3n'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/sales/presale' },
                _react2.default.createElement('span', { className: 'fa fa-user' }),
                'Nueva Preventa'
              )
            )
          )
        )
      );
    }
  }]);

  return SideMenu;
}(_react2.default.Component)) || _class);
exports.default = SideMenu;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SideMenu, 'SideMenu', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/sideMenu/sideMenu.jsx');
}();

;

/***/ }),

/***/ 659:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Module dependencies */


var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',


    // Main Layout
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'sideMenu-search col-xs-12' },
        _react2.default.createElement('input', { type: 'text', placeholder: 'Buscar...' })
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Search, 'Search', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/sideMenu/components/search/search.jsx');
}();

;

/***/ }),

/***/ 660:
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

var _reactRedux = __webpack_require__(1);

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

  __REACT_HOT_LOADER__.register(User, 'User', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/sideMenu/components/user/user.jsx');
}();

;

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxLogger = __webpack_require__(46);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(47);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(48);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducer = __webpack_require__(662);

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

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/store.js');
}();

;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reducer = __webpack_require__(41);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(663);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(664);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(665);

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(666);

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(667);

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = __webpack_require__(668);

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = __webpack_require__(669);

var _reducer16 = _interopRequireDefault(_reducer15);

var _reducer17 = __webpack_require__(670);

var _reducer18 = _interopRequireDefault(_reducer17);

var _reducer19 = __webpack_require__(671);

var _reducer20 = _interopRequireDefault(_reducer19);

var _reducer21 = __webpack_require__(672);

var _reducer22 = _interopRequireDefault(_reducer21);

var _reducer23 = __webpack_require__(673);

var _reducer24 = _interopRequireDefault(_reducer23);

var _reducer25 = __webpack_require__(674);

var _reducer26 = _interopRequireDefault(_reducer25);

var _reducer27 = __webpack_require__(675);

var _reducer28 = _interopRequireDefault(_reducer27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  fetching: _reducer2.default,
  layout: _reducer4.default,
  user: _reducer6.default,
  cart: _reducer8.default,
  clients: _reducer10.default,
  products: _reducer12.default,
  sale: _reducer14.default,
  messages: _reducer16.default,
  searchClients: _reducer18.default,
  searchProducts: _reducer20.default,
  pay: _reducer22.default,
  invoice: _reducer24.default,
  sales: _reducer26.default,
  config: _reducer28.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/reducer.js');
}();

;

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  topBarToggleVisible: false,
  sideMenuVisible: true
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SALE_PANEL_MOUNTED':
      {
        return _extends({}, state, {
          topBarToggleVisible: true,
          sideMenuVisible: false
        });
      } // case

    case 'HOME_PANEL_MOUNTED':
      {
        return _extends({}, state, {
          topBarToggleVisible: false,
          sideMenuVisible: true
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/layout/reducer.js');
}();

;

/***/ }),

/***/ 664:
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/user/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/user/reducer.js');
}();

;

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var stateConst = {
  editable: true,
  created: '',
  updated: '',
  isNull: false,
  cartHasItems: false, // var to check if cart has items
  cartItems: [], // the list of items in cart
  cartSubtotalNoDiscount: 0, // subtotal without discount and taxes
  cartSubtotal: 0, // the subtotal including discounts without taxes
  cartTaxes: 0, // total amount of taxes in cart in currency
  cartTotal: 0, // cart total after discount and taxes
  globalDiscount: 0, // discount %
  discountTotal: 0, // discount in currency
  cartItemActive: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'CLEAR_ALL':
      {
        return _extends({}, state, {
          editable: true,
          created: '',
          updated: '',
          isNull: false,
          cartHasItems: false, // var to check if cart has items
          cartItems: [], // the list of items in cart
          cartSubtotalNoDiscount: 0, // subtotal without discount and taxes
          cartSubtotal: 0, // the subtotal including discounts without taxes
          cartTaxes: 0, // total amount of taxes in cart in currency
          cartTotal: 0, // cart total after discount and taxes
          globalDiscount: 0, // discount %
          discountTotal: 0, // discount in currency
          cartItemActive: false
        });
      }

    case 'ADD_TO_CART':
      {

        return _extends({}, state, {
          cartHasItems: true,
          cartItems: [].concat(_toConsumableArray(state.cartItems), [action.payload])
        });
      } // case

    case 'REMOVE_FROM_CART':
      {

        var newCart = [].concat(_toConsumableArray(state.cartItems));

        newCart.splice(action.payload, 1);

        var itemsLeftInCart = newCart.length > 0;
        // ? true
        // : false

        return _extends({}, state, {
          cartHasItems: itemsLeftInCart,
          cartItems: newCart
        });
      } // case

    case 'UPDATE_CART':
      {

        var _newCart = [].concat(_toConsumableArray(state.cartItems));
        _newCart[action.payload.index] = action.payload.item;

        return _extends({}, state, {
          cartItems: _newCart
        });
      } // case

    case 'UPDATE_CART_ITEM_LOTE':
      {

        var _newCart2 = [].concat(_toConsumableArray(state.cartItems));
        _newCart2[action.payload.index]['lote'] = action.payload.lote;

        return _extends({}, state, {
          cartItems: _newCart2
        });
      } // case

    case 'UPDATE_CART_TOTALS':
      {

        return _extends({}, state, {
          cartSubtotal: action.payload.subtotal,
          cartTaxes: action.payload.taxes,
          cartTotal: action.payload.total,
          discountTotal: action.payload.discountTotal,
          cartSubtotalNoDiscount: action.payload.subTotalNoDiscount
        });
      } // case

    case 'SET_GLOBAL_DISCOUNT':
      {

        return _extends({}, state, {
          globalDiscount: action.payload
        });
      } // case

    case 'REPLACE_CART':
      {
        return _extends({}, state, {
          cartItems: action.payload
        });
      }

    case 'UPDATE_LINE_DISCOUNT':
      {
        var _newCart3 = [].concat(_toConsumableArray(state.cartItems));
        _newCart3[action.payload.index].discount = action.payload.value;

        return _extends({}, state, {
          cartItems: _newCart3
        });
      }

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, { stateConst: stateConst
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          created: action.payload.cart.created,
          isNull: action.payload.cart.isNull,
          cartHasItems: action.payload.cart.cartHasItems, // var to check if cart has items
          cartItems: action.payload.cart.cartItems, // the list of items in cart
          cartSubtotalNoDiscount: action.payload.cart.cartSubtotalNoDiscount, // subtotal without discount and taxes
          cartSubtotal: action.payload.cart.cartSubtotal, // the subtotal including discounts without taxes
          cartTaxes: action.payload.cart.cartTaxes, // total amount of taxes in cart in currency
          cartTotal: action.payload.cart.cartTotal, // cart total after discount and taxes
          globalDiscount: action.payload.cart.globalDiscount, // discount %
          discountTotal: action.payload.cart.discountTotal // discount in currency
        });
      }

    case 'LOADED_PROFORMA':
      {
        return _extends({}, state, {
          created: action.payload.cart.created,
          isNull: action.payload.cart.isNull,
          cartHasItems: action.payload.cart.cartHasItems, // var to check if cart has items
          cartItems: action.payload.cart.cartItems, // the list of items in cart
          cartSubtotalNoDiscount: action.payload.cart.cartSubtotalNoDiscount, // subtotal without discount and taxes
          cartSubtotal: action.payload.cart.cartSubtotal, // the subtotal including discounts without taxes
          cartTaxes: action.payload.cart.cartTaxes, // total amount of taxes in cart in currency
          cartTotal: action.payload.cart.cartTotal, // cart total after discount and taxes
          globalDiscount: action.payload.cart.globalDiscount, // discount %
          discountTotal: action.payload.cart.discountTotal // discount in currency
        });
      }

    case 'LOADED_PRESALE':
      {
        return _extends({}, state, {
          created: action.payload.cart.created,
          isNull: action.payload.cart.isNull,
          cartHasItems: action.payload.cart.cartHasItems, // var to check if cart has items
          cartItems: action.payload.cart.cartItems, // the list of items in cart
          cartSubtotalNoDiscount: action.payload.cart.cartSubtotalNoDiscount, // subtotal without discount and taxes
          cartSubtotal: action.payload.cart.cartSubtotal, // the subtotal including discounts without taxes
          cartTaxes: action.payload.cart.cartTaxes, // total amount of taxes in cart in currency
          cartTotal: action.payload.cart.cartTotal, // cart total after discount and taxes
          globalDiscount: action.payload.cart.globalDiscount, // discount %
          discountTotal: action.payload.cart.discountTotal // discount in currency
        });
      }

    case 'SET_PRODUCT_ACTIVE_IN_CART':
      {
        return _extends({}, state, {
          cartItemActive: action.payload
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/cart/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/cart/reducer.js');
}();

;

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var clientSelectedModel = {
  code: '0000',
  clientType: 'GENERAL',
  created: '',
  credit_days: 0,
  credit_limit: 0,
  docType: 'CLIENT',
  has_credit: false,
  id: '000000000',
  last_name: 'Contado',
  name: 'Cliente',
  updated: '',
  saleLoaded: false,
  _id: 0
};

var userSelectedModel = {
  user: '0000',
  name: '',
  last_name: '',
  id: '0000',
  _id: 0
};

var stateConst = {
  clientsFetching: false,
  clientsFected: false,
  clientsFetchError: '',
  clients: [],
  users: [],
  clientSelected: clientSelectedModel,
  userSelected: userSelectedModel,
  clientSelectedDebt: 0
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'CLEAR_ALL':
      {
        return _extends({}, state, {
          clientSelected: clientSelectedModel,
          userSelected: userSelectedModel
        });
      }

    case 'FETCH_CLIENTS':
      {
        return _extends({}, state, {
          clientsFetching: true
        });
      } // case

    case 'FETCH_CLIENTS_REJECTED':
      {
        return _extends({}, state, {
          clientsFetching: false,
          clientsFetchError: action.payload
        });
      } // case

    case 'FETCH_CLIENTS_FULFILLED':
      {
        return _extends({}, state, {
          clientsFetching: false,
          clientsFected: true,
          clients: action.payload
        });
      } // case

    case 'CLIENT_SELECTED':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client
        });
      } // case

    // ******** USERS ********
    case 'FETCH_USERS_REJECTED':
      {
        return _extends({}, state, {
          userSelected: userSelectedModel
        });
      } // case

    case 'FETCH_USERS_FULFILLED':
      {
        return _extends({}, state, {
          users: action.payload
        });
      } // case

    case 'USER_SELECTED':
      {
        return _extends({}, state, {
          userSelected: action.payload.user
        });
      } // case

    case 'USER_CLEAR':
      {
        return _extends({}, state, {
          userSelected: userSelectedModel
        });
      } // case

    // ******** USERS ********

    case 'SET_CLIENT_DEBT':
      {
        return _extends({}, state, {
          clientSelectedDebt: parseFloat(action.payload.debt)
        });
      }

    case 'NEW_SALE':
      {
        var clients = state.clients;
        state = stateConst;
        return _extends({}, state, { clients: clients
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client,
          userSelected: action.payload.user
        });
      }

    case 'LOADED_PRESALE':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client
        });
      }

    case 'LOADED_PROFORMA':
      {
        return _extends({}, state, {
          clientSelected: action.payload.client
        });
      }

    case 'LOADED_TRUE':
      {
        var client = state.clientSelected;
        client.saleLoaded = true;
        return _extends({}, state, {
          clientSelected: client
        });
      }

    case 'LOADED_FALSE':
      {
        var _client = state.clientSelected;
        _client.saleLoaded = false;
        return _extends({}, state, {
          clientSelected: _client
        });
      }

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clientSelectedModel, 'clientSelectedModel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(userSelectedModel, 'userSelectedModel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/clients/reducer.js');
}();

;

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  products: {},
  inputVal: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_PRODUCTS_REJECTED':
      {
        return _extends({}, state, {
          products: {}
        });
      } // case

    case 'FETCH_PRODUCTS_FULFILLED':
      {
        return _extends({}, state, {
          products: action.payload
        });
      } // case

    case 'SET_PRODUCT_FIELD_VALUE':
      {
        return _extends({}, state, {
          inputVal: action.payload
        });
      } // case

    case 'CLEAR_PRODUCT_FIELD_VALUE':
      {
        return _extends({}, state, {
          inputVal: ''
        });
      } // case

    case 'NEW_SALE':
      {
        var products = state.products;
        state = stateConst;
        return _extends({}, state, { products: products
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/product/reducer.js');
}();

;

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  fullWidth: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'TOGGLE_FULL_WIDTH':
      {
        var width = !state.fullWidth;
        return _extends({}, state, {
          fullWidth: width
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/reducer.js');
}();

;

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _alertifyjs = __webpack_require__(5);

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateConst = {
  messages: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'PRODUCT_NOT_FOUND':
      {
        _alertifyjs2.default.alert('ERROR: NO EXISTE PRODUCTO!', 'El código ingresado no existe en el sistema, ingrese un código válido');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'NOT_FOUND_SALE':
      {
        _alertifyjs2.default.alert('ERROR: NO EXISTE LA VENTA!', 'La venta #' + action.payload + ' no existe, o hay un problema para cargarla, por favor intente de nuevo.');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'PRODUCT_IN_CART_NOT_FOUND':
      {
        _alertifyjs2.default.alert('ERROR!', 'Hubo un error al encontrar el producto en la lista de productos agregados,por favor intente de nuevo, si el error persiste comuníquese con soporte técnico.');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'FETCH_PRODUCTS_REJECTED':
      {
        _alertifyjs2.default.alert('ERROR AL CARGAR LOS PRODUCTOS!', 'Hubo un error al cargar los productos, por favor intente\n                          de nuevo, si el error persiste comun\xEDquese con soporte t\xE9cnico.\n                          ERROR: ' + action.payload);

        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'CLIENT_NOT_FOUND':
      {
        _alertifyjs2.default.alert('ERROR: NO EXISTE CLIENTE!', 'El cliente con el código ingresado no existe en el sistema, ingrese un código válido');
        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'FETCH_CLIENTS_REJECTED':
      {
        _alertifyjs2.default.alert('ERROR AL CARGAR LOS CLIENTES!', 'Hubo un error al cargar los clientes, por favor intente\n                          de nuevo, si el error persiste comun\xEDquese con soporte t\xE9cnico.\n                          ERROR: ' + action.payload);

        return _extends({}, state, {
          messages: true
        });
      } // case

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, {
          stateConst: stateConst
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/messages/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/messages/reducer.js');
}();

;

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  visible: false,
  clientsMatched: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SEARCH_CLIENT_TOGGLE_PANEL':
      {
        var visible = !state.visible;
        return _extends({}, state, {
          visible: visible
        });
      } // case

    case 'CLIENT_SHOW_PANEL':
      {
        return _extends({}, state, {
          visible: true
        });
      } // case
    case 'CLIENT_HIDE_PANEL':
      {
        return _extends({}, state, {
          visible: false
        });
      } // case
    case 'CLIENT_SEARCH_SUCCESS':
      {
        return _extends({}, state, {
          clientsMatched: action.payload
        });
      } // case
    case 'CLIENT_SEARCH_FAIL':
      {
        return _extends({}, state, {
          clientsMatched: []
        });
      } // case
    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, {
          stateConst: stateConst
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/reducer.js');
}();

;

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  visible: false,
  productsMatched: [],
  searchValue: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_PRODUCT_SEARCH_FIELD_VALUE':
      {
        return _extends({}, state, {
          searchValue: action.payload
        });
      } // case

    case 'CLEAR_PRODUCT_SEARCH_FIELD_VALUE':
      {
        return _extends({}, state, {
          searchValue: ''
        });
      } // case

    case 'SEARCH_PRODUCT_TOGGLE_PANEL':
      {
        var visible = !state.visible;
        return _extends({}, state, {
          visible: visible,
          searchValue: ''
        });
      } // case

    case 'PRODUCT_SHOW_PANEL':
      {
        return _extends({}, state, {
          visible: true
        });
      } // case
    case 'PRODUCT_HIDE_PANEL':
      {
        return _extends({}, state, {
          visible: false
        });
      } // case
    case 'PRODUCT_SEARCH_SUCCESS':
      {
        return _extends({}, state, {
          productsMatched: action.payload
        });
      } // case
    case 'PRODUCT_SEARCH_FAIL':
      {
        return _extends({}, state, {
          productsMatched: []
        });
      } // case

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, {
          stateConst: stateConst
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/reducer.js');
}();

;

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  isVisible: false,
  payMethod: 'CASH',
  cashAmount: 0,
  cardDigits: '',
  cardAuth: ''
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SHOW_PAY_PANEL':
      {
        return _extends({}, state, {
          isVisible: true
        });
      } // case

    case 'HIDE_PAY_PANEL':
      {
        return _extends({}, state, {
          isVisible: false
        });
      } // case

    case 'CHANGE_PAY_METHOD':
      {
        return _extends({}, state, {
          payMethod: action.payload
        });
      } // case

    case 'UPDATE_CASH_AMOUNT':
      {
        return _extends({}, state, {
          cashAmount: action.payload
        });
      }

    case 'UPDATE_CARD_AUTH':
      {
        return _extends({}, state, {
          cardAuth: action.payload
        });
      }

    case 'UPDATE_CARD_DIGITS':
      {
        return _extends({}, state, {
          cardDigits: action.payload
        });
      }

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, { stateConst: stateConst
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          payMethod: action.payload.pay.payMethod,
          cashAmount: action.payload.pay.cashAmount,
          cardDigits: action.payload.pay.cardDigits,
          cardAuth: action.payload.pay.cardAuth
        });
      }

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/sale/pay/reducer.js');
}();

;

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var stateConst = {
  isVisible: false,
  isFull: true,
  defaultDesing: true
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'SHOW_INVOICE_PANEL':
      {
        return _extends({}, state, {
          isVisible: true
        });
      } // case

    case 'HIDE_INVOICE_PANEL':
      {
        return _extends({}, state, {
          isVisible: false
        });
      } // case

    case 'TOGGLE_INVOICE_PANEL':
      {
        var fullOrNot = state.isFull;
        return _extends({}, state, {
          isFull: !fullOrNot
        });
      } // case

    case 'TOGGLE_INVOICE_DESING':
      {
        var desingOrNot = state.defaultDesing;
        return _extends({}, state, {
          defaultDesing: !desingOrNot
        });
      } // case

    case 'NEW_SALE':
      {
        state = stateConst;
        return _extends({}, state, { stateConst: stateConst
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

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/invoice/reducer.js');
}();

;

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var saleActiveModel = {
  id: 0,
  bill_number: '',
  cart: {},
  client: '',
  user: '',
  client_id: '',
  pay: {},
  payed: false,
  pay_type: 'CASH'

};

var stateConst = {
  sales: [],
  saleActive: saleActiveModel,
  completed: false,
  saleActiveId: 0,
  isSalesPanelVisible: false,
  isPresalesPanelVisible: false

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'CLEAR_ALL':
      {
        return _extends({}, state, {
          saleActive: saleActiveModel,
          completed: false,
          saleActiveId: 0,
          isSalesPanelVisible: false,
          isPresalesPanelVisible: false
        });
      } // case

    case 'SHOW_SALES_PANEL':
      {
        return _extends({}, state, {
          isSalesPanelVisible: true
        });
      } // case

    case 'SHOW_PRESALES_PANEL':
      {
        return _extends({}, state, {
          isPresalesPanelVisible: true
        });
      } // case

    case 'HIDE_SALES_PANEL':
      {
        return _extends({}, state, {
          isSalesPanelVisible: false
        });
      } // case

    case 'HIDE_PRESALES_PANEL':
      {
        return _extends({}, state, {
          isPresalesPanelVisible: false
        });
      } // case

    case 'FETCH_SALES_REJECTED':
      {
        return _extends({}, state, {
          sales: []
        });
      } // case

    case 'FETCH_SALES_FULFILLED':
      {
        return _extends({}, state, {
          sales: action.payload
        });
      } // case

    case 'SET_SALE':
      {
        var cart = JSON.parse(action.payload.cart);
        var client = JSON.parse(action.payload.client);
        var user = JSON.parse(action.payload.user);
        var pay = JSON.parse(action.payload.pay);

        var sale = {
          id: action.payload.id,
          bill_number: action.payload.bill_number,
          cart: cart,
          client: client,
          user: user,
          pay: pay,
          payed: action.payload.payed,
          pay_type: action.payload.pay_type,
          created: new Date(action.payload.created),
          updated: new Date(action.payload.updated)
        };
        return _extends({}, state, {
          saleActive: sale,
          completed: true
        });
      } // case

    case 'SET_SALE_ID':
      {
        return _extends({}, state, {
          completed: true
        });
      } // case

    case 'SET_PRESALE_ID':
      {
        return _extends({}, state, {
          completed: true
        });
      } // case

    case 'SET_PROFORMA_ID':
      {
        return _extends({}, state, {
          completed: true
        });
      } // case

    case 'NEW_SALE':
      {
        var sales = state.sales;
        state = stateConst;
        return _extends({}, state, { sales: sales
        });
      } // case

    case 'LOADED_SALE':
      {
        return _extends({}, state, {
          saleActive: action.payload,
          saleActiveId: action.payload.id
        });
      }

    case 'LOADED_PRESALE':
      {
        var _sale = saleActiveModel;
        _sale.cart = action.payload.cart;
        _sale.client = action.payload.client;
        return _extends({}, state, {
          saleActive: _sale
        });
      }

    case 'LOADED_PROFORMA':
      {
        var _sale2 = saleActiveModel;
        _sale2.cart = action.payload.cart;
        _sale2.client = action.payload.client;
        return _extends({}, state, {
          saleActive: _sale2
        });
      }

  } // switch

  return state; // default return
} // reducer

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saleActiveModel, 'saleActiveModel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/sales/reducer.js');

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/sales/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/sales/reducer.js');
}();

;

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stateConst = {
  company: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateConst;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_CONFIG_FULFILLED':
      {
        return _extends({}, state, _defineProperty({}, action.payload.section, action.payload.data));
      } // case

    case 'FETCH_CONFIG_REJECTED':
      {
        return _extends({}, state, _defineProperty({}, action.payload.section, {}));
      } // case

    case 'SET_CONFIG':
      {
        return _extends({}, state, _defineProperty({}, action.payload.section, action.payload.data));
      } // case

  }

  return state; // default return
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(stateConst, 'stateConst', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/config/reducer.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/config/reducer.js');
}();

;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidePanel = hidePanel;
exports.searchProduct = searchProduct;
exports.productSelectedTable = productSelectedTable;
function hidePanel() {

  return { type: 'PRODUCT_HIDE_PANEL', payload: -1 };
}

function searchProduct(val, products) {

  var text = val.split('%');
  var matchs = [];

  products.forEach(function (product) {
    var control = true;
    var description = product.description.toString();

    text.forEach(function (word) {
      var index = description.toLowerCase().indexOf(word.toLowerCase());

      if (index == -1) {
        control = false;
        return false;
      }
    });

    if (control) {
      matchs.push(product);
    }
  });

  var res = matchs.length ? {
    type: 'PRODUCT_SEARCH_SUCCESS',
    payload: matchs
  } : {
    type: 'PRODUCT_SEARCH_FAIL',
    payload: -1
  };

  return res;
}

function productSelectedTable(code) {

  return { type: 'SET_PRODUCT_FIELD_VALUE', payload: code };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(hidePanel, 'hidePanel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/actions.js');

  __REACT_HOT_LOADER__.register(searchProduct, 'searchProduct', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/actions.js');

  __REACT_HOT_LOADER__.register(productSelectedTable, 'productSelectedTable', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/products/actions.js');
}();

;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidePanel = hidePanel;
exports.searchClient = searchClient;
function hidePanel() {

  return { type: 'CLIENT_HIDE_PANEL', payload: -1 };
}

function searchClient(val, clients) {

  var text = val.split('%');
  var matchs = [];

  console.log(clients);

  clients.forEach(function (client) {
    var control = true;
    var name = client.name.toString() + ' ' + client.last_name.toString();

    text.forEach(function (word) {
      var index = name.toLowerCase().indexOf(word.toLowerCase());

      if (index == -1) {
        control = false;
        return false;
      }
    });

    if (control) {
      matchs.push(client);
    }
  });

  var res = matchs.length ? {
    type: 'CLIENT_SEARCH_SUCCESS',
    payload: matchs
  } : {
    type: 'CLIENT_SEARCH_FAIL',
    payload: -1
  };

  return res;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(hidePanel, 'hidePanel', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/actions.js');

  __REACT_HOT_LOADER__.register(searchClient, 'searchClient', '/Volumes/DATOS/bitbucket/facturaElectronica/frontend/apps/sales/general/search/clients/actions.js');
}();

;

/***/ })

},[609]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJhbC9mZXRjaGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tYWluL21haW4uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbWFpbi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9ob21lL2hvbWUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvcHJvZHVjdC9wcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvYXNpZGUvYXNpZGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL2NsaWVudHMuanN4Iiwid2VicGFjazovLy8uL3V0aWxzL2dldENsaWVudERlYnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3RvdGFscy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9idXR0b25zL2J1dHRvbnMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZXN1bHRzVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvcGF5UGFuZWwuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlNZXRob2QuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYWhzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheUNyZWRpdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvc2F2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBhY3RJbnZvaWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL3RvdGFscy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy9ub3Rlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvdG9wQmFyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvc2lkZU1lbnUuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy91c2VyL3VzZXIuanN4Iiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvbGF5b3V0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9tZXNzYWdlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2NvbmZpZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJjbGllbnRTZWxlY3RlZCIsInVzZXJTZWxlY3RlZCIsInNlYXJjaENsaWVudCIsImNvZGUiLCJjbGllbnRzIiwiZmluZEluZGV4IiwiY2xpZW50IiwicmVzIiwidHlwZSIsInBheWxvYWQiLCJfaWQiLCJ1c2VycyIsInVzZXIiLCJ1cGRhdGVTdG9yZUNhc2hBbW91bnQiLCJ1cGRhdGVTdG9yZUNhcmRBdXRoIiwidXBkYXRlU3RvcmVDYXJkRGlnaXRzIiwiYW1vdW50IiwicGFyc2VGbG9hdCIsIm51bWJlciIsImdldEl0ZW1EaXNwYXRjaCIsImdldEl0ZW1Eb3VibGVEaXNwYXRjaCIsImdldEl0ZW1SZXR1cm4iLCJzZXRJdGVtIiwic2F2ZUl0ZW0iLCJ1cGRhdGVJdGVtIiwicGF0Y2hJdGVtIiwicGF0Y2hJdGVtcyIsImRlbGV0ZUl0ZW0iLCJsb2FkR2xvYmFsQ29uZmlnIiwic2F2ZUxvZyIsImdldE5leHROdW1lcmljQ29kZSIsInNldE5leHRQcmV2SXRlbSIsImRlZmF1bHRzIiwieHNyZkNvb2tpZU5hbWUiLCJ4c3JmSGVhZGVyTmFtZSIsImt3YXJncyIsInVybCIsInN1Y2Nlc3NUeXBlIiwiZXJyb3JUeXBlIiwiZGlzcGF0Y2giLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJhbGVydCIsInN1Y2Nlc3NUeXBlMiIsImxvb2tVcFZhbHVlIiwibG9va1VwRmllbGQiLCJoaXN0b3J5IiwicmVkaXJlY3RVcmwiLCJsZW5ndGgiLCJtb2RlbE5hbWUiLCJsb29rVXBOYW1lIiwiZGlzcGF0Y2hUeXBlIiwiZGlzcGF0Y2hUeXBlMiIsImRpc3BhdGNoRXJyb3JUeXBlIiwicHVzaCIsIml0ZW0iLCJsb2dDb2RlIiwiaXRlbU9sZCIsImxvZ01vZGVsIiwibG9nRGVzY3JpcHRpb24iLCJpc1NhbGUiLCJtZXRob2QiLCJzdWNlc3NNZXNzYWdlIiwic2V0IiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwia3dhcmdzMiIsIml0ZW0yIiwidXJsMiIsImxvZ0NvZGUyIiwiaXRlbU9sZDIiLCJsb2dNb2RlbDIiLCJsb2dEZXNjcmlwdGlvbjIiLCJtb2RlbCIsInNlY3Rpb24iLCJuYW1lIiwic3VjY2VzcyIsImZhaWwiLCJjb25maWciLCJmaWx0ZXIiLCJmb3JFYWNoIiwidmFsdWUiLCJvbGRPYmplY3QiLCJvYmplY3QiLCJkZXNjcmlwdGlvbiIsInByZXZPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3T2JqZWN0IiwidXNlcjIiLCJwcmV2X29iamVjdCIsIm5ld19vYmplY3QiLCJlbGVtZW50cyIsImZpZWxkIiwia2V5cyIsIm1hcCIsImVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJtYXgiLCJwb3AiLCJuZXh0IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIml0ZW1zIiwiY29kZUZpZWxkIiwicHJldmlvdXMiLCJpbmRleCIsIm5leHRDb2RlIiwicHJldkNvZGUiLCJOdW1iZXIiLCJwcm90b3R5cGUiLCJmb3JtYXRNb25leSIsImMiLCJkIiwidCIsIm4iLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJ1bmRlZmluZWQiLCJzIiwiaSIsIlN0cmluZyIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwicmVwbGFjZSIsInNsaWNlIiwiRmV0Y2hpbmciLCJDb21wb25lbnQiLCJyZWR1Y2VyIiwic3RhdGVDb25zdCIsImZldGNoaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJyZWNhbGNDYXJ0IiwidXBkYXRlSXRlbURpc2NvdW50IiwidXBkYXRlSXRlbUxvdGUiLCJwcm9kdWN0U2VsZWN0ZWQiLCJ1cGRhdGVRdHkiLCJ1cGRhdGVRdHlDb2RlIiwiYWRkU3ViT25lIiwidXVpZHYxIiwicmVxdWlyZSIsIml0ZW1zSW5DYXJ0IiwiZ2xvYmFsRGlzY291bnQiLCJuZXdDYXJ0IiwibmV3SXRlbSIsImNhY2xTdWJ0b3RhbCIsInByb2R1Y3QiLCJxdHkiLCJkaXNjb3VudCIsInN1YnRvdGFsIiwidG90YWxXaXRoSXYiLCJkaXNjb3VudEN1cnJlbmN5Iiwic3ViVG90YWxOb0Rpc2NvdW50IiwicHJpY2VUb1VzZSIsImluZGV4SW5DYXJ0IiwidXVpZCIsInVwZGF0ZWRDYXJ0SXRlbSIsImxvdGUiLCJsb3RlTnVtIiwicHJvZHVjdHMiLCJkZWZhdWx0Q29uZmlnIiwidXNlckNvbmZpZyIsInBlckxpbmUiLCJiYXJjb2RlIiwiY2hlY2tJZkluQ2FydCIsInF0eU51bSIsInN1Yk9yQWRkIiwiY2FydCIsImRhdGFOZXdQcm9kIiwicHJvZHVjdERpc2NvdW50IiwicHJpY2UiLCJzdWJUb3RhbCIsIml2MSIsInVzZV90YXhlcyIsInRheGVzIiwiaXYyIiwidXNlX3RheGVzMiIsInRheGVzMiIsIml2MyIsInVzZV90YXhlczMiLCJ0YXhlczMiLCJkaXNjb3VudEN1cnJlbmN5SW5MaW5lIiwiZGlzY291bnRDdXJyZW5jeUdsb2JhbCIsIm5ld1F0eSIsImNsaWVudFR5cGUiLCJ1c2VQcmljZTIiLCJwcmljZTIiLCJ1c2VQcmljZTMiLCJwcmljZTMiLCJ3aW5kb3ciLCJhbGVydGlmeSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYWluIiwic3RvcmUiLCJzaWRlTWVudVZpc2libGUiLCJsYXlvdXQiLCJwcm9wcyIsIm1haW5Db250YWluZXJDbGFzcyIsImNvbnRlbnQiLCJmZWN0aFByb2ZpbGUiLCJmZWN0aElzQWRtaW5Mb2NrZWQiLCJmaWVsZHMiLCJwcm9maWxlIiwicm91dGVzIiwiSG9tZSIsIlNhbGUiLCJmdWxsV2lkdGgiLCJzYWxlIiwidG90YWwiLCJjYXJ0VG90YWwiLCJjb250ZW50Q2xhc3MiLCJjYXJ0Q2xhc3MiLCJ0b3RhbENsYXNzIiwidG9nZ2xlV2lkdGgiLCJiaW5kIiwiUHJvZHVjdCIsImNhcnRJdGVtcyIsImlucHV0VmFsIiwiY29kZUlucHV0IiwiZm9jdXMiLCJwcm9kdWN0S3dhcmdzIiwiZXYiLCJrZXkiLCJ0YXJnZXQiLCJzcGxpdCIsImRpc2FibGVkIiwiaW5wdXRLZXlQcmVzcyIsImlucHV0Iiwic2VhcmNoUHJvZHVjdENsaWNrIiwiTW91c2V0cmFwIiwiQ2FydCIsIl90aGlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ1bmJpbmQiLCJDYXJ0SXRlbXMiLCJpbkNhcnQiLCJjYXJ0SXRlbUFjdGl2ZSIsInByZXZQcm9wcyIsImVsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJfX3RoaXMiLCJwcm9tcHQiLCJldnQiLCJvayIsImNhbmNlbCIsInNlbGVjdCIsIml0ZW1zMiIsImFjdGl2ZUNsYXNzIiwicmVtb3ZlSWNvbkNsYXNzIiwidGF4ZXMxIiwicXR5RmllbGQiLCJxdHlJbnB1dENoYW5nZSIsImZpZWxkRm9jdXMiLCJxdHlJbnB1dEtleVByZXNzIiwiZGlzY291bnRGaWVsZCIsInNhbGVMb2FkZWQiLCJkaXNjb3VudElucHV0S2V5UHJlc3MiLCJkaXNjb3VudElucHV0T25CbHVyIiwic2V0Q2FydEl0ZW1BY3RpdmUiLCJyZW1vdmVJdGVtIiwidXBkYXRlVG90YWxzIiwicmVtb3ZlRnJvbUNhcnQiLCJkaXNjb3VudFRvdGFsIiwidGF4ZXNDYWxjIiwidGF4ZXNDYWxjMiIsInRheGVzQ2FsYzMiLCJBc2lkZSIsImFzaWRlQ2xhc3MiLCJhc2lkZUNvbnRhaW5lckNsYXNzIiwiQ2xpZW50cyIsImRlYnQiLCJjbGllbnRTZWxlY3RlZERlYnQiLCJuZXh0UHJvcHMiLCJjbGllbnRfaWQiLCJpZCIsImRlZmF1bHREaXNjb3VudCIsImNsaWVudEt3YXJncyIsImNsaWVudFRvU2hvdyIsImxhc3RfbmFtZSIsInNlYXJjaENsaWVudENsaWNrIiwiZ2V0Q2xpZW50RGVidCIsInBvc3QiLCJUb3RhbHMiLCJjYXJ0VGF4ZXMiLCJjYXJ0U3VidG90YWxOb0Rpc2NvdW50IiwiZGlzY291bnRWYWwiLCJtYXhEaXNjb3VudCIsImlucHV0T25CbHVyIiwiQnV0dG9ucyIsInNhbGVzIiwiY29tcGxldGVkIiwibG9jYXRpb24iLCJocmVmIiwiYnV0dG9ucyIsInNob3dJbm9pY2VQYW5lbCIsIm5ld1NhbGUiLCJzaG93UGF5UGFuZWwiLCJzaG93U2FsZVBhbmVsIiwic2hvd1ByZXNhbGVzUGFuZWwiLCJzZWFyY2hQcm9kdWN0cyIsInZpc2libGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInZpc2libGVPck5vdCIsInBhbmVsQ2xpY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hWYWwiLCJzZWFyY2hQcm9kdWN0QWN0aW9uIiwicmVzdWx0c1RhYmxlIiwibWF0Y2hlcyIsInByb2R1Y3RzTWF0Y2hlZCIsInNlbGVjdFByb2R1Y3QiLCJzZWxscHJpY2UiLCJzZWFyY2hDbGllbnRzIiwic2VhcmNoQ2xpZW50QWN0aW9uIiwidmFsIiwiY2xpZW50c01hdGNoZWQiLCJoYXNDcmVkaXQiLCJoYXNfY3JlZGl0Iiwic2VsZWN0Q2xpZW50IiwiUGF5UGFuZWwiLCJwYW5lbFZpc2libGUiLCJwYXkiLCJpc1Zpc2libGUiLCJwYXlNZXRob2QiLCJoaWRlUGFuZWwiLCJQYXlNZXRob2QiLCJjbGlja0NoYW5nZVBheU1ldGhvZCIsIlBheUNhc2giLCJjYXNoQW1vdW50IiwicGF5QW1vdW50Q2hhbmdlZCIsIlBheUNhcmQiLCJjYXJkQXV0aCIsImNhcmREaWdpdHMiLCJwYXlDYXJkRGlnaXRzQ2hhbmdlZCIsInBheUNhcmRBdXRoQ2hhbmdlZCIsIlBheUNyZWRpdCIsImF2YWlsYWJsZSIsImNyZWRpdF9saW1pdCIsImNsaWVudExpbWl0IiwiY2xpZW50QXZhaWxhYmxlIiwiUGF5T3RoZXIiLCJQYXlTaWRlQmFyIiwicGF5ZWQiLCJyZXNldCIsImNoYW5nZSIsInBheUJ1dHRvbkNsYXNzIiwiY2FzaCIsImF1dGgiLCJkaWdpdHMiLCJTYXZlQnRuIiwicGF5X3R5cGUiLCJjcmVkaXRNb3ZlbWVudCIsIm1vdmVtZW50X3R5cGUiLCJ1cGRhdGVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzYXZlQnRuIiwiYmlsbF9pZCIsImJpbGxfbnVtYmVyIiwic2F2ZUNyZWRpdE1vdmVtZW50IiwibW92ZW1lbnQiLCJJbnZvaWNlUGFuZWwiLCJpbnZvaWNlIiwiaXNGdWxsIiwicHJpbnREaXYiLCJpc0Z1bGxDbGFzcyIsImNvbXBvbmVudFRvTW91bnQiLCJ0b2dnbGVQYW5lbCIsInByaW50UGFuZWwiLCJGdWxsSW52b2ljZSIsIkhlYWRlciIsInNhbGVBY3RpdmUiLCJjb21wYW55IiwiaGVhZGVydGV4dCIsImxvZ28iLCJsb2dvV2lkdGgiLCJsb2dvVXJsIiwiaGVhZGVyTmFtZSIsImNvbWVyY2lhbF9uYW1lIiwiaGVhZGVyTmFtZTIiLCJsZWdhbF9uYW1lIiwidGVscyIsInRlbGVwaG9uZXMiLCJ0ZWxzVGV4dCIsImlkVHlwZSIsImlkVGV4dCIsInRvVXBwZXJDYXNlIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNvdW50cnkiLCJlbWFpbCIsIkRhdGEiLCJkYXRlIiwiY3JlYXRlZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiY2xpZW50QWRyZXNzIiwiYWRyZXNzIiwiVGFibGUiLCJ0YXhlc1RleHQiLCJnbG9iYWxEaXNjb3VudFJvdyIsIk5vdGVzIiwiQ29tcGFjdEludm9pY2UiLCJjb21lcmNpYWxOYW1lIiwibGVnYWxOYW1lIiwidXNlVGF4ZXMiLCJUb3BCYXIiLCJ0b3BCYXJUb2dnbGVWaXNpYmxlIiwiY29uZmlybSIsImJ1dHRvbkNsYXNzIiwibWVudUNsaWNrIiwiaG9tZUNsaWNrIiwibG9nT3V0Q2xpY2siLCJ0b2dnbGVMYXlvdXQiLCJ0b2dnbGVDb25maWdCYXIiLCJtYWluQ29udGFpbmVyIiwic2lkZU1lbnUiLCJyZW1vdmUiLCJhZGQiLCJjb25maWdCYXIiLCJTaWRlTWVudSIsInNpZGVNZW51Q2xhc3MiLCJTZWFyY2giLCJVc2VyIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsInVzZXJuYW1lIiwibGFzdE5hbWUiLCJmdWxsTmFtZSIsInN1YnN0cmluZyIsIm1pZGRsZXdhcmUiLCJtZXNzYWdlcyIsImVkaXRhYmxlIiwidXBkYXRlZCIsImlzTnVsbCIsImNhcnRIYXNJdGVtcyIsImNhcnRTdWJ0b3RhbCIsInNwbGljZSIsIml0ZW1zTGVmdEluQ2FydCIsImNsaWVudFNlbGVjdGVkTW9kZWwiLCJjcmVkaXRfZGF5cyIsImRvY1R5cGUiLCJ1c2VyU2VsZWN0ZWRNb2RlbCIsImNsaWVudHNGZXRjaGluZyIsImNsaWVudHNGZWN0ZWQiLCJjbGllbnRzRmV0Y2hFcnJvciIsIndpZHRoIiwiZGVmYXVsdERlc2luZyIsImZ1bGxPck5vdCIsImRlc2luZ09yTm90Iiwic2FsZUFjdGl2ZU1vZGVsIiwic2FsZUFjdGl2ZUlkIiwiaXNTYWxlc1BhbmVsVmlzaWJsZSIsImlzUHJlc2FsZXNQYW5lbFZpc2libGUiLCJwYXJzZSIsIkRhdGUiLCJzZWFyY2hQcm9kdWN0IiwicHJvZHVjdFNlbGVjdGVkVGFibGUiLCJ0ZXh0IiwibWF0Y2hzIiwiY29udHJvbCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIndvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQ2dCQSxjLEdBQUFBLGM7UUFvQkFDLFksR0FBQUEsWTtRQW9CQUMsWSxHQUFBQSxZO0FBeENULFNBQVNGLGNBQVQsQ0FBd0JHLElBQXhCLEVBQThCQyxPQUE5QixFQUF1Qzs7QUFFNUMsTUFBTUosaUJBQWlCSSxRQUFRQyxTQUFSLENBQWtCO0FBQUEsV0FBVUMsT0FBT0gsSUFBUCxJQUFlQSxJQUF6QjtBQUFBLEdBQWxCLENBQXZCLENBRjRDLENBRTRCOztBQUV4RSxNQUFNSSxNQUFPUCxrQkFBa0IsQ0FBQyxDQUFwQixHQUF1QjtBQUMvQjtBQUNBUSxVQUFNLGtCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGlCQUROO0FBRUFDLGFBQVM7QUFDUEgsY0FBUUYsUUFBUUosY0FBUjtBQUREO0FBRlQsR0FMSjs7QUFZQSxTQUFPTyxHQUFQO0FBRUQ7O0FBRU0sU0FBU04sWUFBVCxDQUFzQlMsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDOztBQUV2QyxNQUFNVixlQUFlVSxNQUFNTixTQUFOLENBQWdCO0FBQUEsV0FBUU8sS0FBS0YsR0FBTCxJQUFZQSxHQUFwQjtBQUFBLEdBQWhCLENBQXJCLENBRnVDLENBRXVCOztBQUU5RCxNQUFNSCxNQUFPTixnQkFBZ0IsQ0FBQyxDQUFsQixHQUFxQjtBQUM3QjtBQUNBTyxVQUFNLGdCQUROO0FBRUFDLGFBQVMsQ0FBQztBQUZWLEdBRFEsR0FLUjtBQUNBRCxVQUFNLGVBRE47QUFFQUMsYUFBUztBQUNQRyxZQUFNRCxNQUFNVixZQUFOO0FBREM7QUFGVCxHQUxKOztBQVlB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QixRQUFRO0FBQzNCLG1CQUFtQixRQUFRO0FBQzNCLG1CQUFtQixRQUFRO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUIsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE1BQU07QUFDekIsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0JBQXNCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TUFBWjtBQUNEO0FBRUYsR0FqQkQ7O0FBbUJBLE1BQU1DLE1BQU95ZCxPQUFPemEsTUFBUixHQUNSO0FBQ0EvQyxVQUFNLHVCQUROO0FBRUFDLGFBQVN1ZDtBQUZULEdBRFEsR0FLUjtBQUNBeGQsVUFBTSxvQkFETjtBQUVBQyxhQUFTLENBQUM7QUFGVixHQUxKOztBQVVBLFNBQU9GLEdBQVA7QUFDRDs7Ozs7Ozs7Z0NBMUNlZ1YsUzs7Z0NBS0FyVixZIiwiZmlsZSI6InNhbGVzLWE2MmMwNjJlYjc5MzBjNjIxMTI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gY2xpZW50U2VsZWN0ZWQoY29kZSwgY2xpZW50cykge1xuXG4gIGNvbnN0IGNsaWVudFNlbGVjdGVkID0gY2xpZW50cy5maW5kSW5kZXgoY2xpZW50ID0+IGNsaWVudC5jb2RlID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChjbGllbnRTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUxFQ1RFRCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNsaWVudDogY2xpZW50c1tjbGllbnRTZWxlY3RlZF1cbiAgICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyU2VsZWN0ZWQoX2lkLCB1c2Vycykge1xuXG4gIGNvbnN0IHVzZXJTZWxlY3RlZCA9IHVzZXJzLmZpbmRJbmRleCh1c2VyID0+IHVzZXIuX2lkID09IF9pZCkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKHVzZXJTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVU0VSX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVU0VSX1NFTEVDVEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdXNlcjogdXNlcnNbdXNlclNlbGVjdGVkXVxuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gcmVzXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCgpIHtcblxuICByZXR1cm4ge3R5cGU6ICdDTElFTlRfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NsaWVudHMvYWN0aW9ucy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbi8vIEZpbmRzIGEgY29kZSBpbiB0aGUgY2FydCBhbmQgc2VuZHMgYSBkaXNwYXRjaCB0byByZW1vdmUgaXQgZnJvbSBjYXJ0IGJhc2VkIG9uIGluZGV4XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmVDYXNoQW1vdW50KGFtb3VudCkge1xuXG4gIGNvbnN0IHJlcyA9IChhbW91bnQpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBU0hfQU1PVU5UJyxcbiAgICAgIHBheWxvYWQ6IHBhcnNlRmxvYXQoYW1vdW50KVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FTSF9BTU9VTlQnLFxuICAgICAgcGF5bG9hZDogMFxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmRBdXRoKG51bWJlcikge1xuXG4gIGNvbnN0IHJlcyA9IChudW1iZXIpIC8vIGlmIGl0cyBhIHZhbHVlXG4gICAgPyB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXG4gICAgICBwYXlsb2FkOiBudW1iZXJcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUkRfQVVUSCcsXG4gICAgICBwYXlsb2FkOiAnJ1xuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yZUNhcmREaWdpdHMobnVtYmVyKSB7XG5cbiAgY29uc3QgcmVzID0gKG51bWJlcikgLy8gaWYgaXRzIGEgdmFsdWVcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSRF9ESUdJVFMnLFxuICAgICAgcGF5bG9hZDogbnVtYmVyXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1VQREFURV9DQVJEX0RJR0lUUycsXG4gICAgICBwYXlsb2FkOiAnJ1xuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2FkU2FsZShpZCwgc2FsZXMpIHtcbi8vICAgY29uc3QgZmlsdGVyZWRTYWxlcyA9IHNhbGVzLmZpbHRlcihzYWxlID0+IHtcbi8vICAgICByZXR1cm4gc2FsZS5pZCA9PSBpZFxuLy8gICB9KVxuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbi8vICAgICBpZiAoZmlsdGVyZWRTYWxlcy5sZW5ndGgpIHtcbi8vICAgICAgIGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSA9IG5ldyBEYXRlKGZpbHRlcmVkU2FsZXNbMF1bJ2NyZWF0ZWQnXSlcbi8vICAgICAgIC8vIGZpbHRlcmVkU2FsZXNbMF1bJ2dsb2JhbERpc2NvdW50J10gPSBwYXJzZUZsb2F0KGZpbHRlcmVkU2FsZXNbMF1bJ2dsb2JhbERpc2NvdW50J10pXG4vLyAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdChmaWx0ZXJlZFNhbGVzWzBdWydjYXJ0J11bJ2dsb2JhbERpc2NvdW50J10pXG4vLyAgICAgICBkb2N1bWVudC50aXRsZSA9IGBWZW50YSAjJHtpZH1gXG4vLyAgICAgICBmaWx0ZXJlZFNhbGVzWzBdWydjbGllbnQnXVsnc2FsZUxvYWRlZCddID0gdHJ1ZVxuXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0xPQURFRF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXX0pXG4vLyAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogZmlsdGVyZWRTYWxlc1swXS5faWR9KVxuXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9UX0ZPVU5EX1NBTEUnLCBwYXlsb2FkOiBpZH0pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MpIHtcblxuLy8gICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbi8vICAgY29uc3QgbW92ZW1lbnRzID0ga3dhcmdzLm1vdmVtZW50c1xuLy8gICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbi8vICAgICBjb25zdCBkYiA9IG5ldyBQb3VjaERCKGt3YXJncy5kYilcblxuLy8gICAgIGRiLnBvc3QoaXRlbSkudGhlbigocmVzcG9uc2UpID0+IHtcblxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRScsIHBheWxvYWQ6IGl0ZW19KVxuLy8gICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfU0FMRV9JRCcsIHBheWxvYWQ6IHJlc3BvbnNlLmlkfSlcblxuLy8gICAgICAgaWYgKGl0ZW0ucGF5LnBheU1ldGhvZCA9PSAnQ1JFRElUJykgeyAvLyBJRiBDUkVESVQgQ1JFQVRFIENSRURJVCBNT1ZFTUVOVFxuLy8gICAgICAgICBjb25zdCBkYjIgPSBuZXcgUG91Y2hEQignZ2VuZXJhbCcpXG4vLyAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCByZXNwb25zZS5pZCwgaXRlbSlcblxuLy8gICAgICAgICBkYjIucG9zdChtb3ZlbWVudCkudGhlbihyZXNwb25zZSA9PiB7XG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4vLyAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbi8vICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgLy8gSUYgRVJST1IgU0hPVyBNRVNTQUdFXG4vLyAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVycm9yIGFsIGNyZWFyIGVsIG1vdmltaWVudG8gZGUgY3LDqWRpdG8sIHBvciBmYXZvciBhbnVsZSBsYSBmYWN0dXJhIHkgY3JlZWxhXG4vLyAgICAgICAgICAgZGUgbnVldm8gRVJST1I6ICR7ZXJyfS5gKVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICB9IGVsc2UgeyAvLyBJRiBOT1QgQ1JFRElUIFNIT1cgUEFORUxTXG4vLyAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0hPV19JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0hJREVfUEFZX1BBTkVMJywgcGF5bG9hZDogJyd9KVxuLy8gICAgICAgfVxuXG4vLyAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0TW92ZW1lbnQobW92ZW1lbnRzLCBzYWxlSWQsIHNhbGUpIHtcblxuLy8gICBjb25zdCBzb3J0ZWRNb3ZlbWVudHMgPSBtb3ZlbWVudHMubGVuZ3RoID4gMSA/IG1vdmVtZW50cy5zb3J0KChhLCBiKSA9PiB7XG4vLyAgICAgaWYgKGEuZG9jdW1lbnQgPCBiLmRvY3VtZW50KSB7XG4vLyAgICAgICByZXR1cm4gMVxuLy8gICAgIH1cbi8vICAgICBpZiAoYS5kb2N1bWVudCA+IGIuZG9jdW1lbnQpIHtcbi8vICAgICAgIHJldHVybiAtMVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gMFxuLy8gICB9KSA6IG1vdmVtZW50c1xuXG4vLyAgIGNvbnN0IG5leHRJZCA9IHNvcnRlZE1vdmVtZW50cy5sZW5ndGggPiAwID8gc29ydGVkTW92ZW1lbnRzWzBdLmRvY3VtZW50ICsgMSA6IDFcblxuLy8gICBjb25zdCBtb3ZlbWVudCA9IHtcbi8vICAgICAnZG9jdW1lbnQnOiBuZXh0SWQsXG4vLyAgICAgJ2RvY1R5cGUnOiAnQ0xJRU5UX01PVkVNRU5UJyxcbi8vICAgICAnY2xpZW50SWQnOiBzYWxlLmNsaWVudC5faWQsXG4vLyAgICAgJ3R5cGUnOiAnQ1JFRElUJyxcbi8vICAgICAnYW1vdW50JzogcGFyc2VGbG9hdChzYWxlLmNhcnQuY2FydFRvdGFsKSxcbi8vICAgICAnZGF0ZSc6IG5ldyBEYXRlKCksXG4vLyAgICAgJ3NhbGVfaWQnOiBzYWxlSWQsXG4vLyAgICAgJ3NhbGVJZCc6IHNhbGUuaWQsXG4vLyAgICAgJ2Rlc2NyaXB0aW9uJzogYFZlbnRhIGEgY3LDqWRpdG8gY29uIGZhY3R1cmEgIyR7c2FsZS5pZH1gXG4vLyAgIH1cblxuLy8gICByZXR1cm4gbW92ZW1lbnRcblxuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9hY3Rpb25zLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENPTkZJRyBERUZBVUxUIEFYSU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR0VUIEZVTkNUSU9OUyAoUkVUUklFVkUgQUxMKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbURpc3BhdGNoKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3Qgc3VjY2Vzc1R5cGUgPSBrd2FyZ3Muc3VjY2Vzc1R5cGVcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgIC8vIElGIFRIRSBFUlJPUiBJUyBVTkFVVE9SSVpFRCBQQUdFIFdJTEwgU0hPVyBUSEUgTUVTU0FHRVxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPSA0MDMpIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SJywgYEVycm9yIGFsIG9idGVuZXIgdW4gdmFsb3IgZGVsIEFQSSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8gbyBjb211bsOtcXVlc2UgY29uIGVsXG4gICAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBlcnJvclR5cGUsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1Eb3VibGVEaXNwYXRjaChrd2FyZ3MpIHtcblxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlID0ga3dhcmdzLnN1Y2Nlc3NUeXBlXG4gIGNvbnN0IHN1Y2Nlc3NUeXBlMiA9IGt3YXJncy5zdWNjZXNzVHlwZTJcbiAgY29uc3QgZXJyb3JUeXBlID0ga3dhcmdzLmVycm9yVHlwZVxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBzdWNjZXNzVHlwZSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2Vzc1R5cGUyLCBwYXlsb2FkOiAnJ30pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLnN0YXR1cylcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT0gNDAzKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBvYnRlbmVyIHVuIHZhbG9yIGRlbCBBUEksIHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvIG8gY29tdW7DrXF1ZXNlIGNvbiBlbFxuICAgICAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogZXJyb3JUeXBlLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUmV0dXJuKGt3YXJncykge1xuXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcblxuICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciB1biB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICBhZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIGNvbiBlbCBzaWd1aWV0ZSBlcnJvcjogJHtlcnJvcn1gKVxuICAgIHJldHVybiBlcnJvclxuICB9KVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0VUIEZVTkNUSU9OIChSRVRSSUVWRSBJTkRJVklEVUFMKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBsb29rVXBWYWx1ZSA9IGt3YXJncy5sb29rVXBWYWx1ZVxuICBjb25zdCBsb29rVXBGaWVsZCA9IGt3YXJncy5sb29rVXBGaWVsZFxuICBjb25zdCBoaXN0b3J5ID0ga3dhcmdzLmhpc3RvcnlcbiAgY29uc3QgcmVkaXJlY3RVcmwgPSBrd2FyZ3MucmVkaXJlY3RVcmxcbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGNvbnNvbGUubG9nKGAke3VybH0/JHtsb29rVXBGaWVsZH09JHtsb29rVXBWYWx1ZX1gKVxuICAgIGF4aW9zLmdldChgJHt1cmx9PyR7bG9va1VwRmllbGR9PSR7bG9va1VwVmFsdWV9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gSUYgVEhFUkUgSVMgTU9SRSBUSEFOIE9ORSBFTEVNRU5UIEZJTFRFUkVEXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQVRFTkNJw5NOJywgYEV4aXN0ZSBtYXMgZGUgdW4gJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgJHtrd2FyZ3MubG9va1VwTmFtZX06XG4gICAgICAgICAgJHtrd2FyZ3MubG9va1VwVmFsdWV9LCBzZSB1dGlsaXphcsOhIGVsIHByaW1lcm8gZW4gbGlzdGEsIHBvciBsbyBxdWUgcHVlZGUgbm8gc2VyIGVsIG1pc21vIHF1ZSB1ZCBkZXNlYVxuICAgICAgICAgIGFjdHVhbGl6YXIsIGVzdG8gcHVlZGUgZGViZXJzZSBhIHVuIGVycm9yLCBwb3IgZmF2b3IgcmV2aXNlIGxvc1xuICAgICAgICAgIGRhdG9zIG8gY29udGFjdGUgY29uIGVsIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEuYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUyLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhWzBdfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoRXJyb3JUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBObyBoYXkgJHtrd2FyZ3MubW9kZWxOYW1lfSBjb24gZWwgdmFsb3IgZGUgJHtrd2FyZ3MubG9va1VwTmFtZX06ICR7a3dhcmdzLmxvb2tVcFZhbHVlfWAsXG4gICAgICAgICAgZnVuY3Rpb24oKSB7IGhpc3RvcnkucHVzaChyZWRpcmVjdFVybCkgfSlcbiAgICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1InLCBgRXJyb3IgYWwgb2J0ZW5lciBlbCB2YWxvciBkZWwgQVBJLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgIGFkbWluaXN0cmFkb3IgZGVsIHNpc3RlbWEgY29uIGVsIHNpZ3VpZXRlIGVycm9yOiAke2Vycm9yfWApXG4gICAgfSlcbiAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0FWRSBGVU5DVElPTiAoQ1JFQVRFKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBkZWxldGUgaXRlbVsnaWQnXVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG4gIGNvbnN0IGlzU2FsZSA9IGt3YXJncy5pc1NhbGVcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAuc2V0KCdvbm9rJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoa3dhcmdzLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGlmIChpc1NhbGUpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVBEQVRFIEZVTkNUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oa3dhcmdzKSB7XG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IGxvZ0NvZGUgPSBrd2FyZ3MubG9nQ29kZVxuICBjb25zdCBpdGVtT2xkID0ga3dhcmdzLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwgPSBrd2FyZ3MubG9nTW9kZWxcbiAgY29uc3QgbG9nRGVzY3JpcHRpb24gPSBrd2FyZ3MubG9nRGVzY3JpcHRpb25cbiAgY29uc3QgdXNlciA9IGt3YXJncy51c2VyXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAga3dhcmdzLmhpc3RvcnkucHVzaChrd2FyZ3MucmVkaXJlY3RVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVVBEQVRFIFBBUlRJQUxMWSBGVU5DVElPTiAoUEFUQ0gpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSXRlbShrd2FyZ3MpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3BhdGNoJyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogaXRlbVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGt3YXJncy5zdWNlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3Muc3VjZXNzTWVzc2FnZSlcbiAgICAgICAgICAgIC5zZXQoJ29ub2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgIGt3YXJncy5oaXN0b3J5LnB1c2goa3dhcmdzLnJlZGlyZWN0VXJsKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3MuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIHNhdmVMb2cobG9nQ29kZSwgbG9nTW9kZWwsIGl0ZW1PbGQsIGl0ZW0sIGxvZ0Rlc2NyaXB0aW9uLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFX0lEJywgcGF5bG9hZDogJyd9KVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJncy5lcnJvck1lc3NhZ2V9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG5cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERPVUJMRSBVUERBVEUgUEFSVElBTExZIEZVTkNUSU9OIChQQVRDSClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJdGVtcyhrd2FyZ3MsIGt3YXJnczIpIHtcbiAgY29uc3QgaXRlbSA9IGt3YXJncy5pdGVtXG4gIGNvbnN0IHVybCA9IGt3YXJncy51cmxcbiAgY29uc3QgbG9nQ29kZSA9IGt3YXJncy5sb2dDb2RlXG4gIGNvbnN0IGl0ZW1PbGQgPSBrd2FyZ3MuaXRlbU9sZFxuICBjb25zdCBsb2dNb2RlbCA9IGt3YXJncy5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbiA9IGt3YXJncy5sb2dEZXNjcmlwdGlvblxuICBjb25zdCB1c2VyID0ga3dhcmdzLnVzZXJcblxuICBjb25zdCBpdGVtMiA9IGt3YXJnczIuaXRlbVxuICBjb25zdCB1cmwyID0ga3dhcmdzMi51cmxcbiAgY29uc3QgbG9nQ29kZTIgPSBrd2FyZ3MyLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZDIgPSBrd2FyZ3MyLml0ZW1PbGRcbiAgY29uc3QgbG9nTW9kZWwyID0ga3dhcmdzMi5sb2dNb2RlbFxuICBjb25zdCBsb2dEZXNjcmlwdGlvbjIgPSBrd2FyZ3MyLmxvZ0Rlc2NyaXB0aW9uXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLy8gRklSU1QgUEFUQ0ggVEhFTlxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5kaXNwYXRjaFR5cGUsIHBheWxvYWQ6ICcnfSlcbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG5cbiAgICAgICAgLy8gU0VDT05EIFBBVENIXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICAgICAgdXJsOiB1cmwyLFxuICAgICAgICAgIGRhdGE6IGl0ZW0yXG4gICAgICAgIH0pXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIFRIRU5cbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0NvbXBsZXRhZG8nLCBrd2FyZ3MyLnN1Y2Vzc01lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGt3YXJnczIucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAga3dhcmdzMi5oaXN0b3J5LnB1c2goa3dhcmdzMi5yZWRpcmVjdFVybClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJnczIuZGlzcGF0Y2hUeXBlLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgICAgICBzYXZlTG9nKGxvZ0NvZGUyLCBsb2dNb2RlbDIsIGl0ZW1PbGQyLCBpdGVtMiwgbG9nRGVzY3JpcHRpb24yLCB1c2VyKVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICAgICAgLy8gU0VDT05EIFBBVENIIENBVENIXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGAke2t3YXJnczIuZXJyb3JNZXNzYWdlfSBFUlJPUjogJHtlcnJ9LmApXG4gICAgICAgICAgfSlcblxuICAgICAgLy8gRklSU1QgUEFUQ0ggQ0FUQ0hcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gREVMRVRFIEZVTkNUSU9OIChERUxFVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGt3YXJncykge1xuXG4gIGNvbnN0IGl0ZW0gPSBrd2FyZ3MuaXRlbVxuICBjb25zdCB1cmwgPSBrd2FyZ3MudXJsXG4gIGNvbnN0IG1vZGVsID0ga3dhcmdzLm1vZGVsTmFtZVxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdDb21wbGV0YWRvJywgJ0VsZW1lbnRvIGVsaW1pbmFkbyBzYXRpZmFjdG9yaWFtZW50ZScpXG4gICAgICAgICAgLnNldCgnb25vaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGt3YXJncy5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICBrd2FyZ3MuaGlzdG9yeS5wdXNoKGt3YXJncy5yZWRpcmVjdFVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBzYXZlTG9nKGxvZ0NvZGUsIGxvZ01vZGVsLCBpdGVtT2xkLCBpdGVtLCBsb2dEZXNjcmlwdGlvbiwgdXNlcilcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFcnJvcicsIGBIdWJvIHVuIGVycm9yIGFsIGVsaW1pbmFyIGVsICR7bW9kZWx9IEVSUk9SOiAke2Vycn0uYClcbiAgICAgIH0pXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FEIENPTkZJRyBGVU5DVElPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdsb2JhbENvbmZpZyhzZWN0aW9uLCBuYW1lLCBzdWNjZXNzLCBmYWlsKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGlmIChuYW1lKSB7XG5cbiAgICAgIGF4aW9zLmdldChgL2FwaS9nbG9iYWxjb25mLyR7c2VjdGlvbn1fXyR7bmFtZX1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRPRE8gU2luZ2xlIGNvbmZpZyBmZXRjaFxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGZhaWwsIHBheWxvYWQ6IGVycm9yfSlcbiAgICAgIH0pXG5cbiAgICB9IGVsc2Uge1xuICAgICAgYXhpb3MuZ2V0KGAvYXBpL2dsb2JhbHByZWZzYCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyBUaGUgcHJvcGVydHkgdG8gbW9kaWZ5IGluIHJlZHVjZXJcbiAgICAgICAgY29uc3QgY29uZmlnID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgID8gcmVzcG9uc2UuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zZWN0aW9uID09IHNlY3Rpb25cbiAgICAgICAgICB9KVxuICAgICAgICAgIDoge31cbiAgICAgICAgY29uc3QgZGF0YSA9IHt9XG4gICAgICAgIGNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGRhdGFbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogc3VjY2VzcywgcGF5bG9hZDoge2RhdGE6IGRhdGEsIHNlY3Rpb246IHNlY3Rpb259fSlcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBmYWlsLCBwYXlsb2FkOiBlcnJvcn0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNBVkUgTE9HIEZVTkNUSU9OIChDUkVBVEUgTE9HKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvZyAoY29kZSwgbW9kZWwsIG9sZE9iamVjdCwgb2JqZWN0LCBkZXNjcmlwdGlvbiwgdXNlcikge1xuXG4gIGNvbnN0IHByZXZPYmplY3QgPSBKU09OLnN0cmluZ2lmeShvbGRPYmplY3QpXG4gIGNvbnN0IG5ld09iamVjdCA9IEpTT04uc3RyaW5naWZ5KG9iamVjdClcbiAgY29uc3QgdXNlcjIgPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxuXG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgY29kZTogY29kZSxcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgcHJldl9vYmplY3Q6IHByZXZPYmplY3QsXG4gICAgbmV3X29iamVjdDogbmV3T2JqZWN0LFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB1c2VyOiB1c2VyMlxuICB9XG5cbiAgYXhpb3Moe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvbG9ncy8nLFxuICAgIGRhdGE6IGl0ZW1cbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICB9XG4gICAgICBhbGVydGlmeS5hbGVydCgnRXJyb3InLCBgRXJyb3IgYWwgY3JlYXIgZWwgTG9nIGRlbCBtb3ZpbWllbnRvLCBFUlJPUjogJHtlcnJ9LmApXG4gICAgfSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBVVggRlVOQ1RJT05TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTkVYVCBOVU1FUklDIENPREVcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TnVtZXJpY0NvZGUoZWxlbWVudHMsIGZpZWxkKSB7XG5cbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuXG4gICAgbGV0IGtleXMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50W2ZpZWxkXSlcblxuICAgIGtleXMgPSBrZXlzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgIGNvbnN0IG1heCA9IGtleXMucG9wKClcbiAgICBjb25zdCBuZXh0ID0gcGFyc2VJbnQobWF4KSArIDFcbiAgICByZXR1cm4gbmV4dC50b1N0cmluZygpXG5cbiAgfVxuXG4gIHJldHVybiAxXG5cbn1cblxuLy8gTkVYVCBQUkVWSU9VUyBJVEVNU1xuZXhwb3J0IGZ1bmN0aW9uIHNldE5leHRQcmV2SXRlbShrd2FyZ3MpIHtcblxuICBjb25zdCBjb2RlID0ga3dhcmdzLmNvZGVcbiAgY29uc3QgaXRlbXMgPSBrd2FyZ3MuaXRlbXNcbiAgY29uc3QgY29kZUZpZWxkID0ga3dhcmdzLmNvZGVGaWVsZFxuICBsZXQgcHJldmlvdXMgPSAwXG4gIGxldCBuZXh0ID0gMFxuXG4gIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVtjb2RlRmllbGRdIC0gYltjb2RlRmllbGRdXG4gIH0pXG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbVtjb2RlRmllbGRdID09IGNvZGUpIHtcbiAgICAgIG5leHQgPSBpbmRleCArIDFcbiAgICAgIHByZXZpb3VzID0gaW5kZXggLSAxXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBuZXh0Q29kZSA9IGl0ZW1zW25leHRdID8gaXRlbXNbbmV4dF1bY29kZUZpZWxkXSA6IGl0ZW1zWzBdW2NvZGVGaWVsZF1cbiAgY29uc3QgcHJldkNvZGUgPSBpdGVtc1twcmV2aW91c10gPyBpdGVtc1twcmV2aW91c11bY29kZUZpZWxkXSA6IGl0ZW1zLnBvcCgpW2NvZGVGaWVsZF1cblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaCh7dHlwZToga3dhcmdzLmRpc3BhdGNoVHlwZSwgcGF5bG9hZDoge25leHQ6IG5leHRDb2RlLCBwcmV2aW91czogcHJldkNvZGV9fSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvYXBpLmpzIiwiLypnbG9iYWwgZGVmaW5lOmZhbHNlICovXG4vKipcbiAqIENvcHlyaWdodCAyMDEyLTIwMTcgQ3JhaWcgQ2FtcGJlbGxcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBNb3VzZXRyYXAgaXMgYSBzaW1wbGUga2V5Ym9hcmQgc2hvcnRjdXQgbGlicmFyeSBmb3IgSmF2YXNjcmlwdCB3aXRoXG4gKiBubyBleHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqXG4gKiBAdmVyc2lvbiAxLjYuMVxuICogQHVybCBjcmFpZy5pcy9raWxsaW5nL21pY2VcbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG4gICAgLy8gQ2hlY2sgaWYgbW91c2V0cmFwIGlzIHVzZWQgaW5zaWRlIGJyb3dzZXIsIGlmIG5vdCwgcmV0dXJuXG4gICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgb2Ygc3BlY2lhbCBrZXljb2RlcyB0byB0aGVpciBjb3JyZXNwb25kaW5nIGtleXNcbiAgICAgKlxuICAgICAqIGV2ZXJ5dGhpbmcgaW4gdGhpcyBkaWN0aW9uYXJ5IGNhbm5vdCB1c2Uga2V5cHJlc3MgZXZlbnRzXG4gICAgICogc28gaXQgaGFzIHRvIGJlIGhlcmUgdG8gbWFwIHRvIHRoZSBjb3JyZWN0IGtleWNvZGVzIGZvclxuICAgICAqIGtleXVwL2tleWRvd24gZXZlbnRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfTUFQID0ge1xuICAgICAgICA4OiAnYmFja3NwYWNlJyxcbiAgICAgICAgOTogJ3RhYicsXG4gICAgICAgIDEzOiAnZW50ZXInLFxuICAgICAgICAxNjogJ3NoaWZ0JyxcbiAgICAgICAgMTc6ICdjdHJsJyxcbiAgICAgICAgMTg6ICdhbHQnLFxuICAgICAgICAyMDogJ2NhcHNsb2NrJyxcbiAgICAgICAgMjc6ICdlc2MnLFxuICAgICAgICAzMjogJ3NwYWNlJyxcbiAgICAgICAgMzM6ICdwYWdldXAnLFxuICAgICAgICAzNDogJ3BhZ2Vkb3duJyxcbiAgICAgICAgMzU6ICdlbmQnLFxuICAgICAgICAzNjogJ2hvbWUnLFxuICAgICAgICAzNzogJ2xlZnQnLFxuICAgICAgICAzODogJ3VwJyxcbiAgICAgICAgMzk6ICdyaWdodCcsXG4gICAgICAgIDQwOiAnZG93bicsXG4gICAgICAgIDQ1OiAnaW5zJyxcbiAgICAgICAgNDY6ICdkZWwnLFxuICAgICAgICA5MTogJ21ldGEnLFxuICAgICAgICA5MzogJ21ldGEnLFxuICAgICAgICAyMjQ6ICdtZXRhJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBtYXBwaW5nIGZvciBzcGVjaWFsIGNoYXJhY3RlcnMgc28gdGhleSBjYW4gc3VwcG9ydFxuICAgICAqXG4gICAgICogdGhpcyBkaWN0aW9uYXJ5IGlzIG9ubHkgdXNlZCBpbmNhc2UgeW91IHdhbnQgdG8gYmluZCBhXG4gICAgICoga2V5dXAgb3Iga2V5ZG93biBldmVudCB0byBvbmUgb2YgdGhlc2Uga2V5c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX0tFWUNPREVfTUFQID0ge1xuICAgICAgICAxMDY6ICcqJyxcbiAgICAgICAgMTA3OiAnKycsXG4gICAgICAgIDEwOTogJy0nLFxuICAgICAgICAxMTA6ICcuJyxcbiAgICAgICAgMTExIDogJy8nLFxuICAgICAgICAxODY6ICc7JyxcbiAgICAgICAgMTg3OiAnPScsXG4gICAgICAgIDE4ODogJywnLFxuICAgICAgICAxODk6ICctJyxcbiAgICAgICAgMTkwOiAnLicsXG4gICAgICAgIDE5MTogJy8nLFxuICAgICAgICAxOTI6ICdgJyxcbiAgICAgICAgMjE5OiAnWycsXG4gICAgICAgIDIyMDogJ1xcXFwnLFxuICAgICAgICAyMjE6ICddJyxcbiAgICAgICAgMjIyOiAnXFwnJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbWFwcGluZyBvZiBrZXlzIHRoYXQgcmVxdWlyZSBzaGlmdCBvbiBhIFVTIGtleXBhZFxuICAgICAqIGJhY2sgdG8gdGhlIG5vbiBzaGlmdCBlcXVpdmVsZW50c1xuICAgICAqXG4gICAgICogdGhpcyBpcyBzbyB5b3UgY2FuIHVzZSBrZXl1cCBldmVudHMgd2l0aCB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBub3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgd29yayByZWxpYWJseSBvbiBVUyBrZXlib2FyZHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9TSElGVF9NQVAgPSB7XG4gICAgICAgICd+JzogJ2AnLFxuICAgICAgICAnISc6ICcxJyxcbiAgICAgICAgJ0AnOiAnMicsXG4gICAgICAgICcjJzogJzMnLFxuICAgICAgICAnJCc6ICc0JyxcbiAgICAgICAgJyUnOiAnNScsXG4gICAgICAgICdeJzogJzYnLFxuICAgICAgICAnJic6ICc3JyxcbiAgICAgICAgJyonOiAnOCcsXG4gICAgICAgICcoJzogJzknLFxuICAgICAgICAnKSc6ICcwJyxcbiAgICAgICAgJ18nOiAnLScsXG4gICAgICAgICcrJzogJz0nLFxuICAgICAgICAnOic6ICc7JyxcbiAgICAgICAgJ1xcXCInOiAnXFwnJyxcbiAgICAgICAgJzwnOiAnLCcsXG4gICAgICAgICc+JzogJy4nLFxuICAgICAgICAnPyc6ICcvJyxcbiAgICAgICAgJ3wnOiAnXFxcXCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGhpcyBpcyBhIGxpc3Qgb2Ygc3BlY2lhbCBzdHJpbmdzIHlvdSBjYW4gdXNlIHRvIG1hcFxuICAgICAqIHRvIG1vZGlmaWVyIGtleXMgd2hlbiB5b3Ugc3BlY2lmeSB5b3VyIGtleWJvYXJkIHNob3J0Y3V0c1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NQRUNJQUxfQUxJQVNFUyA9IHtcbiAgICAgICAgJ29wdGlvbic6ICdhbHQnLFxuICAgICAgICAnY29tbWFuZCc6ICdtZXRhJyxcbiAgICAgICAgJ3JldHVybic6ICdlbnRlcicsXG4gICAgICAgICdlc2NhcGUnOiAnZXNjJyxcbiAgICAgICAgJ3BsdXMnOiAnKycsXG4gICAgICAgICdtb2QnOiAvTWFjfGlQb2R8aVBob25lfGlQYWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSA/ICdtZXRhJyA6ICdjdHJsJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB2YXJpYWJsZSB0byBzdG9yZSB0aGUgZmxpcHBlZCB2ZXJzaW9uIG9mIF9NQVAgZnJvbSBhYm92ZVxuICAgICAqIG5lZWRlZCB0byBjaGVjayBpZiB3ZSBzaG91bGQgdXNlIGtleXByZXNzIG9yIG5vdCB3aGVuIG5vIGFjdGlvblxuICAgICAqIGlzIHNwZWNpZmllZFxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgdmFyIF9SRVZFUlNFX01BUDtcblxuICAgIC8qKlxuICAgICAqIGxvb3AgdGhyb3VnaCB0aGUgZiBrZXlzLCBmMSB0byBmMTkgYW5kIGFkZCB0aGVtIHRvIHRoZSBtYXBcbiAgICAgKiBwcm9ncmFtYXRpY2FsbHlcbiAgICAgKi9cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDIwOyArK2kpIHtcbiAgICAgICAgX01BUFsxMTEgKyBpXSA9ICdmJyArIGk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRvIG1hcCBudW1iZXJzIG9uIHRoZSBudW1lcmljIGtleXBhZFxuICAgICAqL1xuICAgIGZvciAoaSA9IDA7IGkgPD0gOTsgKytpKSB7XG5cbiAgICAgICAgLy8gVGhpcyBuZWVkcyB0byB1c2UgYSBzdHJpbmcgY2F1c2Ugb3RoZXJ3aXNlIHNpbmNlIDAgaXMgZmFsc2V5XG4gICAgICAgIC8vIG1vdXNldHJhcCB3aWxsIG5ldmVyIGZpcmUgZm9yIG51bXBhZCAwIHByZXNzZWQgYXMgcGFydCBvZiBhIGtleWRvd25cbiAgICAgICAgLy8gZXZlbnQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NjYW1wYmVsbC9tb3VzZXRyYXAvcHVsbC8yNThcbiAgICAgICAgX01BUFtpICsgOTZdID0gaS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyb3NzIGJyb3dzZXIgYWRkIGV2ZW50IG1ldGhvZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fEhUTUxEb2N1bWVudH0gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfYWRkRXZlbnQob2JqZWN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3QuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyB0aGUgZXZlbnQgYW5kIHJldHVybnMgdGhlIGtleSBjaGFyYWN0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NoYXJhY3RlckZyb21FdmVudChlKSB7XG5cbiAgICAgICAgLy8gZm9yIGtleXByZXNzIGV2ZW50cyB3ZSBzaG91bGQgcmV0dXJuIHRoZSBjaGFyYWN0ZXIgYXMgaXNcbiAgICAgICAgaWYgKGUudHlwZSA9PSAna2V5cHJlc3MnKSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIHNoaWZ0IGtleSBpcyBub3QgcHJlc3NlZCB0aGVuIGl0IGlzIHNhZmUgdG8gYXNzdW1lXG4gICAgICAgICAgICAvLyB0aGF0IHdlIHdhbnQgdGhlIGNoYXJhY3RlciB0byBiZSBsb3dlcmNhc2UuICB0aGlzIG1lYW5zIGlmXG4gICAgICAgICAgICAvLyB5b3UgYWNjaWRlbnRhbGx5IGhhdmUgY2FwcyBsb2NrIG9uIHRoZW4geW91ciBrZXkgYmluZGluZ3NcbiAgICAgICAgICAgIC8vIHdpbGwgY29udGludWUgdG8gd29ya1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBvbmx5IHNpZGUgZWZmZWN0IHRoYXQgbWlnaHQgbm90IGJlIGRlc2lyZWQgaXMgaWYgeW91XG4gICAgICAgICAgICAvLyBiaW5kIHNvbWV0aGluZyBsaWtlICdBJyBjYXVzZSB5b3Ugd2FudCB0byB0cmlnZ2VyIGFuXG4gICAgICAgICAgICAvLyBldmVudCB3aGVuIGNhcGl0YWwgQSBpcyBwcmVzc2VkIGNhcHMgbG9jayB3aWxsIG5vIGxvbmdlclxuICAgICAgICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnQuICBzaGlmdCthIHdpbGwgdGhvdWdoLlxuICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyID0gY2hhcmFjdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3Igbm9uIGtleXByZXNzIGV2ZW50cyB0aGUgc3BlY2lhbCBtYXBzIGFyZSBuZWVkZWRcbiAgICAgICAgaWYgKF9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9LRVlDT0RFX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9LRVlDT0RFX01BUFtlLndoaWNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0IGlzIG5vdCBpbiB0aGUgc3BlY2lhbCBtYXBcblxuICAgICAgICAvLyB3aXRoIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cyB0aGUgY2hhcmFjdGVyIHNlZW1zIHRvIGFsd2F5c1xuICAgICAgICAvLyBjb21lIGluIGFzIGFuIHVwcGVyY2FzZSBjaGFyYWN0ZXIgd2hldGhlciB5b3UgYXJlIHByZXNzaW5nIHNoaWZ0XG4gICAgICAgIC8vIG9yIG5vdC4gIHdlIHNob3VsZCBtYWtlIHN1cmUgaXQgaXMgYWx3YXlzIGxvd2VyY2FzZSBmb3IgY29tcGFyaXNvbnNcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVja3MgaWYgdHdvIGFycmF5cyBhcmUgZXF1YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX21vZGlmaWVyc01hdGNoKG1vZGlmaWVyczEsIG1vZGlmaWVyczIpIHtcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVyczEuc29ydCgpLmpvaW4oJywnKSA9PT0gbW9kaWZpZXJzMi5zb3J0KCkuam9pbignLCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIGEga2V5IGV2ZW50IGFuZCBmaWd1cmVzIG91dCB3aGF0IHRoZSBtb2RpZmllcnMgYXJlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ldmVudE1vZGlmaWVycyhlKSB7XG4gICAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcblxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3NoaWZ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdhbHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdjdHJsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnbWV0YScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZGlmaWVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwcmV2ZW50cyBkZWZhdWx0IGZvciB0aGlzIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgcHJvcG9nYXRpb24gZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3N0b3BQcm9wYWdhdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIGlmIHRoZSBrZXljb2RlIHNwZWNpZmllZCBpcyBhIG1vZGlmaWVyIGtleSBvciBub3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNNb2RpZmllcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2hpZnQnIHx8IGtleSA9PSAnY3RybCcgfHwga2V5ID09ICdhbHQnIHx8IGtleSA9PSAnbWV0YSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV2ZXJzZXMgdGhlIG1hcCBsb29rdXAgc28gdGhhdCB3ZSBjYW4gbG9vayBmb3Igc3BlY2lmaWMga2V5c1xuICAgICAqIHRvIHNlZSB3aGF0IGNhbiBhbmQgY2FuJ3QgdXNlIGtleXByZXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldFJldmVyc2VNYXAoKSB7XG4gICAgICAgIGlmICghX1JFVkVSU0VfTUFQKSB7XG4gICAgICAgICAgICBfUkVWRVJTRV9NQVAgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBfTUFQKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBwdWxsIG91dCB0aGUgbnVtZXJpYyBrZXlwYWQgZnJvbSBoZXJlIGNhdXNlIGtleXByZXNzIHNob3VsZFxuICAgICAgICAgICAgICAgIC8vIGJlIGFibGUgdG8gZGV0ZWN0IHRoZSBrZXlzIGZyb20gdGhlIGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPiA5NSAmJiBrZXkgPCAxMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9NQVAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBfUkVWRVJTRV9NQVBbX01BUFtrZXldXSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9SRVZFUlNFX01BUDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwaWNrcyB0aGUgYmVzdCBhY3Rpb24gYmFzZWQgb24gdGhlIGtleSBjb21iaW5hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGNoYXJhY3RlciBmb3Iga2V5XG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb24gcGFzc2VkIGluXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pIHtcblxuICAgICAgICAvLyBpZiBubyBhY3Rpb24gd2FzIHBpY2tlZCBpbiB3ZSBzaG91bGQgdHJ5IHRvIHBpY2sgdGhlIG9uZVxuICAgICAgICAvLyB0aGF0IHdlIHRoaW5rIHdvdWxkIHdvcmsgYmVzdCBmb3IgdGhpcyBrZXlcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IF9nZXRSZXZlcnNlTWFwKClba2V5XSA/ICdrZXlkb3duJyA6ICdrZXlwcmVzcyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb2RpZmllciBrZXlzIGRvbid0IHdvcmsgYXMgZXhwZWN0ZWQgd2l0aCBrZXlwcmVzcyxcbiAgICAgICAgLy8gc3dpdGNoIHRvIGtleWRvd25cbiAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5cHJlc3MnICYmIG1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICdrZXlkb3duJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgZnJvbSBhIHN0cmluZyBrZXkgY29tYmluYXRpb24gdG8gYW4gYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29tYmluYXRpb24gbGlrZSBcImNvbW1hbmQrc2hpZnQrbFwiXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKSB7XG4gICAgICAgIGlmIChjb21iaW5hdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZXR1cm4gWycrJ107XG4gICAgICAgIH1cblxuICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xcK3syfS9nLCAnK3BsdXMnKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0aW9uLnNwbGl0KCcrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpbmZvIGZvciBhIHNwZWNpZmljIGtleSBjb21iaW5hdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBrZXkgY29tYmluYXRpb24gKFwiY29tbWFuZCtzXCIgb3IgXCJhXCIgb3IgXCIqXCIpXG4gICAgICogQHBhcmFtICB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0S2V5SW5mbyhjb21iaW5hdGlvbiwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIC8vIHRha2UgdGhlIGtleXMgZnJvbSB0aGlzIHBhdHRlcm4gYW5kIGZpZ3VyZSBvdXQgd2hhdCB0aGUgYWN0dWFsXG4gICAgICAgIC8vIHBhdHRlcm4gaXMgYWxsIGFib3V0XG4gICAgICAgIGtleXMgPSBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUga2V5IG5hbWVzXG4gICAgICAgICAgICBpZiAoX1NQRUNJQUxfQUxJQVNFU1trZXldKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gX1NQRUNJQUxfQUxJQVNFU1trZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIG5vdCBhIGtleXByZXNzIGV2ZW50IHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyBiZSBzbWFydCBhYm91dCB1c2luZyBzaGlmdCBrZXlzXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgb25seSB3b3JrIGZvciBVUyBrZXlib2FyZHMgaG93ZXZlclxuICAgICAgICAgICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24gIT0gJ2tleXByZXNzJyAmJiBfU0hJRlRfTUFQW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU0hJRlRfTUFQW2tleV07XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3NoaWZ0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMga2V5IGlzIGEgbW9kaWZpZXIgdGhlbiBhZGQgaXQgdG8gdGhlIGxpc3Qgb2YgbW9kaWZpZXJzXG4gICAgICAgICAgICBpZiAoX2lzTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXBlbmRpbmcgb24gd2hhdCB0aGUga2V5IGNvbWJpbmF0aW9uIGlzXG4gICAgICAgIC8vIHdlIHdpbGwgdHJ5IHRvIHBpY2sgdGhlIGJlc3QgZXZlbnQgZm9yIGl0XG4gICAgICAgIGFjdGlvbiA9IF9waWNrQmVzdEFjdGlvbihrZXksIG1vZGlmaWVycywgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2JlbG9uZ3NUbyhlbGVtZW50LCBhbmNlc3Rvcikge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IGFuY2VzdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYmVsb25nc1RvKGVsZW1lbnQucGFyZW50Tm9kZSwgYW5jZXN0b3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCB8fCBkb2N1bWVudDtcblxuICAgICAgICBpZiAoIShzZWxmIGluc3RhbmNlb2YgTW91c2V0cmFwKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3VzZXRyYXAodGFyZ2V0RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZWxlbWVudCB0byBhdHRhY2gga2V5IGV2ZW50cyB0b1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYudGFyZ2V0ID0gdGFyZ2V0RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYSBsaXN0IG9mIGFsbCB0aGUgY2FsbGJhY2tzIHNldHVwIHZpYSBNb3VzZXRyYXAuYmluZCgpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZGlyZWN0IG1hcCBvZiBzdHJpbmcgY29tYmluYXRpb25zIHRvIGNhbGxiYWNrcyB1c2VkIGZvciB0cmlnZ2VyKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBrZWVwcyB0cmFjayBvZiB3aGF0IGxldmVsIGVhY2ggc2VxdWVuY2UgaXMgYXQgc2luY2UgbXVsdGlwbGVcbiAgICAgICAgICogc2VxdWVuY2VzIGNhbiBzdGFydCBvdXQgd2l0aCB0aGUgc2FtZSBzZXF1ZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9zZXF1ZW5jZUxldmVscyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB2YXJpYWJsZSB0byBzdG9yZSB0aGUgc2V0VGltZW91dCBjYWxsXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudWxsfG51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfcmVzZXRUaW1lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXVwXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfaWdub3JlTmV4dEtleXVwID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRlbXBvcmFyeSBzdGF0ZSB3aGVyZSB3ZSB3aWxsIGlnbm9yZSB0aGUgbmV4dCBrZXlwcmVzc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfaWdub3JlTmV4dEtleXByZXNzID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFyZSB3ZSBjdXJyZW50bHkgaW5zaWRlIG9mIGEgc2VxdWVuY2U/XG4gICAgICAgICAqIHR5cGUgb2YgYWN0aW9uIChcImtleXVwXCIgb3IgXCJrZXlkb3duXCIgb3IgXCJrZXlwcmVzc1wiKSBvciBmYWxzZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZXNldHMgYWxsIHNlcXVlbmNlIGNvdW50ZXJzIGV4Y2VwdCBmb3IgdGhlIG9uZXMgcGFzc2VkIGluXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkb05vdFJlc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlcyhkb05vdFJlc2V0KSB7XG4gICAgICAgICAgICBkb05vdFJlc2V0ID0gZG9Ob3RSZXNldCB8fCB7fTtcblxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlcXVlbmNlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtleTtcblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gX3NlcXVlbmNlTGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvTm90UmVzZXRba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXF1ZW5jZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2tleV0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVNlcXVlbmNlcykge1xuICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmaW5kcyBhbGwgY2FsbGJhY2tzIHRoYXQgbWF0Y2ggYmFzZWQgb24gdGhlIGtleWNvZGUsIG1vZGlmaWVycyxcbiAgICAgICAgICogYW5kIGFjdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fE9iamVjdH0gZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IHNlcXVlbmNlTmFtZSAtIG5hbWUgb2YgdGhlIHNlcXVlbmNlIHdlIGFyZSBsb29raW5nIGZvclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWxcbiAgICAgICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUsIHNlcXVlbmNlTmFtZSwgY29tYmluYXRpb24sIGxldmVsKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjaztcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gZS50eXBlO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gZXZlbnRzIHJlbGF0ZWQgdG8gdGhpcyBrZXljb2RlXG4gICAgICAgICAgICBpZiAoIXNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBhIG1vZGlmaWVyIGtleSBpcyBjb21pbmcgdXAgb24gaXRzIG93biB3ZSBzaG91bGQgYWxsb3cgaXRcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT0gJ2tleXVwJyAmJiBfaXNNb2RpZmllcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzID0gW2NoYXJhY3Rlcl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgY2FsbGJhY2tzIGZvciB0aGUga2V5IHRoYXQgd2FzIHByZXNzZWRcbiAgICAgICAgICAgIC8vIGFuZCBzZWUgaWYgYW55IG9mIHRoZW0gbWF0Y2hcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl1baV07XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBhIHNlcXVlbmNlIG5hbWUgaXMgbm90IHNwZWNpZmllZCwgYnV0IHRoaXMgaXMgYSBzZXF1ZW5jZSBhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSB3cm9uZyBsZXZlbCB0aGVuIG1vdmUgb250byB0aGUgbmV4dCBtYXRjaFxuICAgICAgICAgICAgICAgIGlmICghc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSAmJiBfc2VxdWVuY2VMZXZlbHNbY2FsbGJhY2suc2VxXSAhPSBjYWxsYmFjay5sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgYWN0aW9uIHdlIGFyZSBsb29raW5nIGZvciBkb2Vzbid0IG1hdGNoIHRoZSBhY3Rpb24gd2UgZ290XG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBzaG91bGQga2VlcCBnb2luZ1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT0gY2FsbGJhY2suYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBrZXlwcmVzcyBldmVudCBhbmQgdGhlIG1ldGEga2V5IGFuZCBjb250cm9sIGtleVxuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcHJlc3NlZCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBvbmx5IGxvb2sgYXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2hhcmFjdGVyLCBvdGhlcndpc2UgY2hlY2sgdGhlIG1vZGlmaWVycyBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBjaHJvbWUgd2lsbCBub3QgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgLy8gc2FmYXJpIHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgbWV0YStzaGlmdCBpcyBkb3duXG4gICAgICAgICAgICAgICAgLy8gZmlyZWZveCB3aWxsIGZpcmUgYSBrZXlwcmVzcyBpZiBtZXRhIG9yIGNvbnRyb2wgaXMgZG93blxuICAgICAgICAgICAgICAgIGlmICgoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgIWUubWV0YUtleSAmJiAhZS5jdHJsS2V5KSB8fCBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzLCBjYWxsYmFjay5tb2RpZmllcnMpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB5b3UgYmluZCBhIGNvbWJpbmF0aW9uIG9yIHNlcXVlbmNlIGEgc2Vjb25kIHRpbWUgaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lLiAgaWYgYSBzZXF1ZW5jZU5hbWUgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tYmluYXRpb24gaXMgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCBpdCBkb2VzIGp1c3QgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBAdG9kbyBtYWtlIGRlbGV0aW5nIGl0cyBvd24gbWV0aG9kP1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlQ29tYm8gPSAhc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmNvbWJvID09IGNvbWJpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlU2VxdWVuY2UgPSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxID09IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5sZXZlbCA9PSBsZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUNvbWJvIHx8IGRlbGV0ZVNlcXVlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYWN0dWFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIGlmIHlvdXIgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB0aGlzIHdpbGwgdXNlIHRoZSBqcXVlcnlcbiAgICAgICAgICogY29udmVudGlvbiAtIHByZXZlbnQgZGVmYXVsdCBhbmQgc3RvcCBwcm9wb2dhdGlvbiBvbiB0aGUgZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlLCBjb21ibywgc2VxdWVuY2UpIHtcblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBldmVudCBzaG91bGQgbm90IGhhcHBlbiBzdG9wIGhlcmVcbiAgICAgICAgICAgIGlmIChzZWxmLnN0b3BDYWxsYmFjayhlLCBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsIGNvbWJvLCBzZXF1ZW5jZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhlLCBjb21ibykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgX3ByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICAgICAgICAgIF9zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogaGFuZGxlcyBhIGNoYXJhY3RlciBrZXkgZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9oYW5kbGVLZXkgPSBmdW5jdGlvbihjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKTtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGRvTm90UmVzZXQgPSB7fTtcbiAgICAgICAgICAgIHZhciBtYXhMZXZlbCA9IDA7XG4gICAgICAgICAgICB2YXIgcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG1heExldmVsIGZvciBzZXF1ZW5jZXMgc28gd2UgY2FuIG9ubHkgZXhlY3V0ZSB0aGUgbG9uZ2VzdCBjYWxsYmFjayBzZXF1ZW5jZVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0uc2VxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heExldmVsID0gTWF0aC5tYXgobWF4TGV2ZWwsIGNhbGxiYWNrc1tpXS5sZXZlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggbWF0Y2hpbmcgY2FsbGJhY2tzIGZvciB0aGlzIGtleSBldmVudFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7ICsraSkge1xuXG4gICAgICAgICAgICAgICAgLy8gZmlyZSBmb3IgYWxsIHNlcXVlbmNlIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmVjYXVzZSBpZiBmb3IgZXhhbXBsZSB5b3UgaGF2ZSBtdWx0aXBsZSBzZXF1ZW5jZXNcbiAgICAgICAgICAgICAgICAvLyBib3VuZCBzdWNoIGFzIFwiZyBpXCIgYW5kIFwiZyB0XCIgdGhleSBib3RoIG5lZWQgdG8gZmlyZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayBmb3IgbWF0Y2hpbmcgZyBjYXVzZSBvdGhlcndpc2UgeW91IGNhbiBvbmx5IGV2ZXJcbiAgICAgICAgICAgICAgICAvLyBtYXRjaCB0aGUgZmlyc3Qgb25lXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGZpcmUgY2FsbGJhY2tzIGZvciB0aGUgbWF4TGV2ZWwgdG8gcHJldmVudFxuICAgICAgICAgICAgICAgICAgICAvLyBzdWJzZXF1ZW5jZXMgZnJvbSBhbHNvIGZpcmluZ1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAnYSBvcHRpb24gYicgc2hvdWxkIG5vdCBjYXVzZSAnb3B0aW9uIGInIHRvIGZpcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiB0aG91Z2ggJ29wdGlvbiBiJyBpcyBwYXJ0IG9mIHRoZSBvdGhlciBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBhbnkgc2VxdWVuY2VzIHRoYXQgZG8gbm90IG1hdGNoIGhlcmUgd2lsbCBiZSBkaXNjYXJkZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVsb3cgYnkgdGhlIF9yZXNldFNlcXVlbmNlcyBjYWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaV0ubGV2ZWwgIT0gbWF4TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIGxpc3Qgb2Ygd2hpY2ggc2VxdWVuY2VzIHdlcmUgbWF0Y2hlcyBmb3IgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgZG9Ob3RSZXNldFtjYWxsYmFja3NbaV0uc2VxXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2tzW2ldLmNhbGxiYWNrLCBlLCBjYWxsYmFja3NbaV0uY29tYm8sIGNhbGxiYWNrc1tpXS5zZXEpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSB3ZXJlIG5vIHNlcXVlbmNlIG1hdGNoZXMgYnV0IHdlIGFyZSBzdGlsbCBoZXJlXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBtZWFucyB0aGlzIGlzIGEgcmVndWxhciBtYXRjaCBzbyB3ZSBzaG91bGQgZmlyZSB0aGF0XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2tzW2ldLmNhbGxiYWNrLCBlLCBjYWxsYmFja3NbaV0uY29tYm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGtleSB5b3UgcHJlc3NlZCBtYXRjaGVzIHRoZSB0eXBlIG9mIHNlcXVlbmNlIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIGJlaW5nIGEgbW9kaWZpZXIgKGllIFwia2V5dXBcIiBvciBcImtleXByZXNzXCIpIHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyByZXNldCBhbGwgc2VxdWVuY2VzIHRoYXQgd2VyZSBub3QgbWF0Y2hlZCBieSB0aGlzIGV2ZW50XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBzbywgZm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIHRoZSBzZXF1ZW5jZSBcImggYSB0XCIgYW5kIHlvdVxuICAgICAgICAgICAgLy8gdHlwZSBcImggZSBhIHIgdFwiIGl0IGRvZXMgbm90IG1hdGNoLiAgaW4gdGhpcyBjYXNlIHRoZSBcImVcIiB3aWxsXG4gICAgICAgICAgICAvLyBjYXVzZSB0aGUgc2VxdWVuY2UgdG8gcmVzZXRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBtb2RpZmllciBrZXlzIGFyZSBpZ25vcmVkIGJlY2F1c2UgeW91IGNhbiBoYXZlIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRoYXQgY29udGFpbnMgbW9kaWZpZXJzIHN1Y2ggYXMgXCJlbnRlciBjdHJsK3NwYWNlXCIgYW5kIGluIG1vc3RcbiAgICAgICAgICAgIC8vIGNhc2VzIHRoZSBtb2RpZmllciBrZXkgd2lsbCBiZSBwcmVzc2VkIGJlZm9yZSB0aGUgbmV4dCBrZXlcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBhbHNvIGlmIHlvdSBoYXZlIGEgc2VxdWVuY2Ugc3VjaCBhcyBcImN0cmwrYiBhXCIgdGhlbiBwcmVzc2luZyB0aGVcbiAgICAgICAgICAgIC8vIFwiYlwiIGtleSB3aWxsIHRyaWdnZXIgYSBcImtleXByZXNzXCIgYW5kIGEgXCJrZXlkb3duXCJcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGUgXCJrZXlkb3duXCIgaXMgZXhwZWN0ZWQgd2hlbiB0aGVyZSBpcyBhIG1vZGlmaWVyLCBidXQgdGhlXG4gICAgICAgICAgICAvLyBcImtleXByZXNzXCIgZW5kcyB1cCBtYXRjaGluZyB0aGUgX25leHRFeHBlY3RlZEFjdGlvbiBzaW5jZSBpdCBvY2N1cnNcbiAgICAgICAgICAgIC8vIGFmdGVyIGFuZCB0aGF0IGNhdXNlcyB0aGUgc2VxdWVuY2UgdG8gcmVzZXRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB3ZSBpZ25vcmUga2V5cHJlc3NlcyBpbiBhIHNlcXVlbmNlIHRoYXQgZGlyZWN0bHkgZm9sbG93IGEga2V5ZG93blxuICAgICAgICAgICAgLy8gZm9yIHRoZSBzYW1lIGNoYXJhY3RlclxuICAgICAgICAgICAgdmFyIGlnbm9yZVRoaXNLZXlwcmVzcyA9IGUudHlwZSA9PSAna2V5cHJlc3MnICYmIF9pZ25vcmVOZXh0S2V5cHJlc3M7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09IF9uZXh0RXhwZWN0ZWRBY3Rpb24gJiYgIV9pc01vZGlmaWVyKGNoYXJhY3RlcikgJiYgIWlnbm9yZVRoaXNLZXlwcmVzcykge1xuICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlcyhkb05vdFJlc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2lnbm9yZU5leHRLZXlwcmVzcyA9IHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgJiYgZS50eXBlID09ICdrZXlkb3duJztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaGFuZGxlcyBhIGtleWRvd24gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfaGFuZGxlS2V5RXZlbnQoZSkge1xuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgZS53aGljaCBmb3Iga2V5IGV2ZW50c1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyODU2MjcvamF2YXNjcmlwdC1rZXljb2RlLXZzLWNoYXJjb2RlLXV0dGVyLWNvbmZ1c2lvblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlLndoaWNoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGUud2hpY2ggPSBlLmtleUNvZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpO1xuXG4gICAgICAgICAgICAvLyBubyBjaGFyYWN0ZXIgZm91bmQgdGhlbiBzdG9wXG4gICAgICAgICAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbmVlZCB0byB1c2UgPT09IGZvciB0aGUgY2hhcmFjdGVyIGNoZWNrIGJlY2F1c2UgdGhlIGNoYXJhY3RlciBjYW4gYmUgMFxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSAna2V5dXAnICYmIF9pZ25vcmVOZXh0S2V5dXAgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuaGFuZGxlS2V5KGNoYXJhY3RlciwgX2V2ZW50TW9kaWZpZXJzKGUpLCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjYWxsZWQgdG8gc2V0IGEgMSBzZWNvbmQgdGltZW91dCBvbiB0aGUgc3BlY2lmaWVkIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIHRoaXMgaXMgc28gYWZ0ZXIgZWFjaCBrZXkgcHJlc3MgaW4gdGhlIHNlcXVlbmNlIHlvdSBoYXZlIDEgc2Vjb25kXG4gICAgICAgICAqIHRvIHByZXNzIHRoZSBuZXh0IGtleSBiZWZvcmUgeW91IGhhdmUgdG8gc3RhcnQgb3ZlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfcmVzZXRTZXF1ZW5jZVRpbWVyKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9yZXNldFRpbWVyKTtcbiAgICAgICAgICAgIF9yZXNldFRpbWVyID0gc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJpbmRzIGEga2V5IHNlcXVlbmNlIHRvIGFuIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21ibyAtIGNvbWJvIHNwZWNpZmllZCBpbiBiaW5kIGNhbGxcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0ga2V5c1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfYmluZFNlcXVlbmNlKGNvbWJvLCBrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IG9mZiBieSBhZGRpbmcgYSBzZXF1ZW5jZSBsZXZlbCByZWNvcmQgZm9yIHRoaXMgY29tYmluYXRpb25cbiAgICAgICAgICAgIC8vIGFuZCBzZXR0aW5nIHRoZSBsZXZlbCB0byAwXG4gICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNbY29tYm9dID0gMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBjYWxsYmFjayB0byBpbmNyZWFzZSB0aGUgc2VxdWVuY2UgbGV2ZWwgZm9yIHRoaXMgc2VxdWVuY2UgYW5kIHJlc2V0XG4gICAgICAgICAgICAgKiBhbGwgb3RoZXIgc2VxdWVuY2VzIHRoYXQgd2VyZSBhY3RpdmVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV4dEFjdGlvblxuICAgICAgICAgICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfaW5jcmVhc2VTZXF1ZW5jZShuZXh0QWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gbmV4dEFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgKytfc2VxdWVuY2VMZXZlbHNbY29tYm9dO1xuICAgICAgICAgICAgICAgICAgICBfcmVzZXRTZXF1ZW5jZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB3cmFwcyB0aGUgc3BlY2lmaWVkIGNhbGxiYWNrIGluc2lkZSBvZiBhbm90aGVyIGZ1bmN0aW9uIGluIG9yZGVyXG4gICAgICAgICAgICAgKiB0byByZXNldCBhbGwgc2VxdWVuY2UgY291bnRlcnMgYXMgc29vbiBhcyB0aGlzIHNlcXVlbmNlIGlzIGRvbmVcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jYWxsYmFja0FuZFJlc2V0KGUpIHtcbiAgICAgICAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlLCBjb21ibyk7XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgaWdub3JlIHRoZSBuZXh0IGtleSB1cCBpZiB0aGUgYWN0aW9uIGlzIGtleSBkb3duXG4gICAgICAgICAgICAgICAgLy8gb3Iga2V5cHJlc3MuICB0aGlzIGlzIHNvIGlmIHlvdSBmaW5pc2ggYSBzZXF1ZW5jZSBhbmRcbiAgICAgICAgICAgICAgICAvLyByZWxlYXNlIHRoZSBrZXkgdGhlIGZpbmFsIGtleSB3aWxsIG5vdCB0cmlnZ2VyIGEga2V5dXBcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uICE9PSAna2V5dXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pZ25vcmVOZXh0S2V5dXAgPSBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlaXJkIHJhY2UgY29uZGl0aW9uIGlmIGEgc2VxdWVuY2UgZW5kcyB3aXRoIHRoZSBrZXlcbiAgICAgICAgICAgICAgICAvLyBhbm90aGVyIHNlcXVlbmNlIGJlZ2lucyB3aXRoXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGtleXMgb25lIGF0IGEgdGltZSBhbmQgYmluZCB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLiAgZm9yIGFueSBrZXkgbGVhZGluZyB1cCB0byB0aGUgZmluYWwgb25lIGl0IHNob3VsZFxuICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIHNlcXVlbmNlLiBhZnRlciB0aGUgZmluYWwsIGl0IHNob3VsZCByZXNldCBhbGwgc2VxdWVuY2VzXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaWYgYW4gYWN0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGUgb3JpZ2luYWwgYmluZCBjYWxsIHRoZW4gdGhhdCB3aWxsXG4gICAgICAgICAgICAvLyBiZSB1c2VkIHRocm91Z2hvdXQuICBvdGhlcndpc2Ugd2Ugd2lsbCBwYXNzIHRoZSBhY3Rpb24gdGhhdCB0aGVcbiAgICAgICAgICAgIC8vIG5leHQga2V5IGluIHRoZSBzZXF1ZW5jZSBzaG91bGQgbWF0Y2guICB0aGlzIGFsbG93cyBhIHNlcXVlbmNlXG4gICAgICAgICAgICAvLyB0byBtaXggYW5kIG1hdGNoIGtleXByZXNzIGFuZCBrZXlkb3duIGV2ZW50cyBkZXBlbmRpbmcgb24gd2hpY2hcbiAgICAgICAgICAgIC8vIG9uZXMgYXJlIGJldHRlciBzdWl0ZWQgdG8gdGhlIGtleSBwcm92aWRlZFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRmluYWwgPSBpICsgMSA9PT0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDYWxsYmFjayA9IGlzRmluYWwgPyBfY2FsbGJhY2tBbmRSZXNldCA6IF9pbmNyZWFzZVNlcXVlbmNlKGFjdGlvbiB8fCBfZ2V0S2V5SW5mbyhrZXlzW2kgKyAxXSkuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBfYmluZFNpbmdsZShrZXlzW2ldLCB3cmFwcGVkQ2FsbGJhY2ssIGFjdGlvbiwgY29tYm8sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJpbmRzIGEgc2luZ2xlIGtleWJvYXJkIGNvbWJpbmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21iaW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZz19IHNlcXVlbmNlTmFtZSAtIG5hbWUgb2Ygc2VxdWVuY2UgaWYgcGFydCBvZiBzZXF1ZW5jZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcj19IGxldmVsIC0gd2hhdCBwYXJ0IG9mIHRoZSBzZXF1ZW5jZSB0aGUgY29tbWFuZCBpc1xuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfYmluZFNpbmdsZShjb21iaW5hdGlvbiwgY2FsbGJhY2ssIGFjdGlvbiwgc2VxdWVuY2VOYW1lLCBsZXZlbCkge1xuXG4gICAgICAgICAgICAvLyBzdG9yZSBhIGRpcmVjdCBtYXBwZWQgcmVmZXJlbmNlIGZvciB1c2Ugd2l0aCBNb3VzZXRyYXAudHJpZ2dlclxuICAgICAgICAgICAgc2VsZi5fZGlyZWN0TWFwW2NvbWJpbmF0aW9uICsgJzonICsgYWN0aW9uXSA9IGNhbGxiYWNrO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgbXVsdGlwbGUgc3BhY2VzIGluIGEgcm93IGJlY29tZSBhIHNpbmdsZSBzcGFjZVxuICAgICAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG5cbiAgICAgICAgICAgIHZhciBzZXF1ZW5jZSA9IGNvbWJpbmF0aW9uLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgaW5mbztcblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBwYXR0ZXJuIGlzIGEgc2VxdWVuY2Ugb2Yga2V5cyB0aGVuIHJ1biB0aHJvdWdoIHRoaXMgbWV0aG9kXG4gICAgICAgICAgICAvLyB0byByZXByb2Nlc3MgZWFjaCBwYXR0ZXJuIG9uZSBrZXkgYXQgYSB0aW1lXG4gICAgICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIF9iaW5kU2VxdWVuY2UoY29tYmluYXRpb24sIHNlcXVlbmNlLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZm8gPSBfZ2V0S2V5SW5mbyhjb21iaW5hdGlvbiwgYWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGluaXRpYWxpemUgYXJyYXkgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAgLy8gYSBjYWxsYmFjayBpcyBhZGRlZCBmb3IgdGhpcyBrZXlcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gPSBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldIHx8IFtdO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgYW4gZXhpc3RpbmcgbWF0Y2ggaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICBfZ2V0TWF0Y2hlcyhpbmZvLmtleSwgaW5mby5tb2RpZmllcnMsIHt0eXBlOiBpbmZvLmFjdGlvbn0sIHNlcXVlbmNlTmFtZSwgY29tYmluYXRpb24sIGxldmVsKTtcblxuICAgICAgICAgICAgLy8gYWRkIHRoaXMgY2FsbCBiYWNrIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBzZXF1ZW5jZSBwdXQgaXQgYXQgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgLy8gaWYgbm90IHB1dCBpdCBhdCB0aGUgZW5kXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSB0aGUgd2F5IHRoZXNlIGFyZSBwcm9jZXNzZWQgZXhwZWN0c1xuICAgICAgICAgICAgLy8gdGhlIHNlcXVlbmNlIG9uZXMgdG8gY29tZSBmaXJzdFxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XVtzZXF1ZW5jZU5hbWUgPyAndW5zaGlmdCcgOiAncHVzaCddKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiBpbmZvLm1vZGlmaWVycyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IGluZm8uYWN0aW9uLFxuICAgICAgICAgICAgICAgIHNlcTogc2VxdWVuY2VOYW1lLFxuICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICAgICAgICBjb21ibzogY29tYmluYXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJpbmRzIG11bHRpcGxlIGNvbWJpbmF0aW9ucyB0byB0aGUgc2FtZSBjYWxsYmFja1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjb21iaW5hdGlvbnNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBhY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fYmluZE11bHRpcGxlID0gZnVuY3Rpb24oY29tYmluYXRpb25zLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbWJpbmF0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uc1tpXSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc3RhcnQhXG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5cHJlc3MnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleWRvd24nLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgJ2tleXVwJywgX2hhbmRsZUtleUV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBiaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIGNhbiBiZSBhIHNpbmdsZSBrZXksIGEgY29tYmluYXRpb24gb2Yga2V5cyBzZXBhcmF0ZWQgd2l0aCArLFxuICAgICAqIGFuIGFycmF5IG9mIGtleXMsIG9yIGEgc2VxdWVuY2Ugb2Yga2V5cyBzZXBhcmF0ZWQgYnkgc3BhY2VzXG4gICAgICpcbiAgICAgKiBiZSBzdXJlIHRvIGxpc3QgdGhlIG1vZGlmaWVyIGtleXMgZmlyc3QgdG8gbWFrZSBzdXJlIHRoYXQgdGhlXG4gICAgICogY29ycmVjdCBrZXkgZW5kcyB1cCBnZXR0aW5nIGJvdW5kICh0aGUgbGFzdCBrZXkgaW4gdGhlIHBhdHRlcm4pXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb24gLSAna2V5cHJlc3MnLCAna2V5ZG93bicsIG9yICdrZXl1cCdcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oa2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGtleXMgPSBrZXlzIGluc3RhbmNlb2YgQXJyYXkgPyBrZXlzIDogW2tleXNdO1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUuY2FsbChzZWxmLCBrZXlzLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHVuYmluZHMgYW4gZXZlbnQgdG8gbW91c2V0cmFwXG4gICAgICpcbiAgICAgKiB0aGUgdW5iaW5kaW5nIHNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIHRoZSBzcGVjaWZpZWQga2V5IGNvbWJvXG4gICAgICogdG8gYW4gZW1wdHkgZnVuY3Rpb24gYW5kIGRlbGV0ZXMgdGhlIGNvcnJlc3BvbmRpbmcga2V5IGluIHRoZVxuICAgICAqIF9kaXJlY3RNYXAgZGljdC5cbiAgICAgKlxuICAgICAqIFRPRE86IGFjdHVhbGx5IHJlbW92ZSB0aGlzIGZyb20gdGhlIF9jYWxsYmFja3MgZGljdGlvbmFyeSBpbnN0ZWFkXG4gICAgICogb2YgYmluZGluZyBhbiBlbXB0eSBmdW5jdGlvblxuICAgICAqXG4gICAgICogdGhlIGtleWNvbWJvK2FjdGlvbiBoYXMgdG8gYmUgZXhhY3RseSB0aGUgc2FtZSBhc1xuICAgICAqIGl0IHdhcyBkZWZpbmVkIGluIHRoZSBiaW5kIG1ldGhvZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGtleXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24oa2V5cywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuYmluZC5jYWxsKHNlbGYsIGtleXMsIGZ1bmN0aW9uKCkge30sIGFjdGlvbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRyaWdnZXJzIGFuIGV2ZW50IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBib3VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZi5fZGlyZWN0TWFwW2tleXMgKyAnOicgKyBhY3Rpb25dKSB7XG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0oe30sIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZXNldHMgdGhlIGxpYnJhcnkgYmFjayB0byBpdHMgaW5pdGlhbCBzdGF0ZS4gIHRoaXMgaXMgdXNlZnVsXG4gICAgICogaWYgeW91IHdhbnQgdG8gY2xlYXIgb3V0IHRoZSBjdXJyZW50IGtleWJvYXJkIHNob3J0Y3V0cyBhbmQgYmluZFxuICAgICAqIG5ldyBvbmVzIC0gZm9yIGV4YW1wbGUgaWYgeW91IHN3aXRjaCB0byBhbm90aGVyIHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzID0ge307XG4gICAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2hvdWxkIHdlIHN0b3AgdGhpcyBldmVudCBiZWZvcmUgZmlyaW5nIG9mZiBjYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuc3RvcENhbGxiYWNrID0gZnVuY3Rpb24oZSwgZWxlbWVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBcIm1vdXNldHJhcFwiIHRoZW4gbm8gbmVlZCB0byBzdG9wXG4gICAgICAgIGlmICgoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyBtb3VzZXRyYXAgJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9iZWxvbmdzVG8oZWxlbWVudCwgc2VsZi50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9wIGZvciBpbnB1dCwgc2VsZWN0LCBhbmQgdGV4dGFyZWFcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PSAnSU5QVVQnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnU0VMRUNUJyB8fCBlbGVtZW50LnRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCBlbGVtZW50LmlzQ29udGVudEVkaXRhYmxlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBleHBvc2VzIF9oYW5kbGVLZXkgcHVibGljbHkgc28gaXQgY2FuIGJlIG92ZXJ3cml0dGVuIGJ5IGV4dGVuc2lvbnNcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmhhbmRsZUtleSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZWxmLl9oYW5kbGVLZXkuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogYWxsb3cgY3VzdG9tIGtleSBtYXBwaW5nc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5hZGRLZXljb2RlcyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBfTUFQW2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfUkVWRVJTRV9NQVAgPSBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBnbG9iYWwgbW91c2V0cmFwIGZ1bmN0aW9uc1xuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbmVlZGVkIHRvIGFsbG93IHRoZSBnbG9iYWwgbW91c2V0cmFwIGZ1bmN0aW9ucyB0byB3b3JrXG4gICAgICogbm93IHRoYXQgbW91c2V0cmFwIGlzIGEgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgICovXG4gICAgTW91c2V0cmFwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50TW91c2V0cmFwID0gTW91c2V0cmFwKGRvY3VtZW50KTtcbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIGRvY3VtZW50TW91c2V0cmFwKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kLmNoYXJBdCgwKSAhPT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgTW91c2V0cmFwW21ldGhvZF0gPSAoZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudE1vdXNldHJhcFttZXRob2RdLmFwcGx5KGRvY3VtZW50TW91c2V0cmFwLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gKG1ldGhvZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIE1vdXNldHJhcC5pbml0KCk7XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAgd2luZG93Lk1vdXNldHJhcCA9IE1vdXNldHJhcDtcblxuICAgIC8vIGV4cG9zZSBhcyBhIGNvbW1vbiBqcyBtb2R1bGVcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBNb3VzZXRyYXA7XG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIG1vdXNldHJhcCBhcyBhbiBBTUQgbW9kdWxlXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gTW91c2V0cmFwO1xuICAgICAgICB9KTtcbiAgICB9XG59KSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBudWxsLCB0eXBlb2YgIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IG51bGwpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbW91c2V0cmFwL21vdXNldHJhcC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuXG4gICAgTnVtYmVyLnByb3RvdHlwZS5mb3JtYXRNb25leSA9IGZ1bmN0aW9uKGMsIGQsIHQpe1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgICAgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgZCA9IGQgPT0gdW5kZWZpbmVkID8gXCIuXCIgOiBkLFxuICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgaSA9IFN0cmluZyhwYXJzZUludChuID0gTWF0aC5hYnMoTnVtYmVyKG4pIHx8IDApLnRvRml4ZWQoYykpKSxcbiAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcbiAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgICB9O1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mb3JtYXRNb25leS5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmV0Y2luZy1jb250YWluZXInPlxuICAgICAgPGltZyBzcmM9eycvc3RhdGljL3ZlbmRvci9sb2FkZXJzL0VjbGlwc2UuZ2lmJ30gLz5cbiAgICAgIDxoMT5DYXJnYW5kbyBlbGVtZW50b3M8L2gxPlxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2VuZXJhbC9mZXRjaGluZy9mZXRjaGluZy5qc3giLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmZXRjaGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0ZFVENISU5HX1NUQVJURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmZXRjaGluZzogdHJ1ZVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSElOR19ET05FJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgdXVpZHYxID0gcmVxdWlyZSgndXVpZC92MScpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBnbG9iYTsgZGlzY291bnQgb2YgY29tcGxldGUgc3RvcmFnZSBvZiBpdGVtcywgYW5kIHJlZmxlY3QgaXQgb24gc3RvcmUsIHRoZW4gdXBkYXRpbmcgRE9NRVxuZXhwb3J0IGZ1bmN0aW9uIHJlY2FsY0NhcnQoaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBuZXdDYXJ0ID0gaXRlbXNJbkNhcnQubWFwKGl0ZW0gPT4ge1xuXG4gICAgY29uc3QgbmV3SXRlbSA9IGl0ZW1cblxuICAgIGNvbnN0IGRhdGEgPSBjYWNsU3VidG90YWwoaXRlbS5wcm9kdWN0LCBpdGVtLnF0eSwgaXRlbS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudClcblxuICAgIG5ld0l0ZW0uc3VidG90YWwgPSBkYXRhLnN1YnRvdGFsXG4gICAgbmV3SXRlbS50b3RhbFdpdGhJdiA9IGRhdGEudG90YWxXaXRoSXZcbiAgICBuZXdJdGVtLmRpc2NvdW50Q3VycmVuY3kgPSBkYXRhLmRpc2NvdW50Q3VycmVuY3lcbiAgICBuZXdJdGVtLnN1YlRvdGFsTm9EaXNjb3VudCA9IGRhdGEuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgbmV3SXRlbS5wcmljZVRvVXNlID0gZGF0YS5wcmljZVRvVXNlXG5cbiAgICByZXR1cm4gbmV3SXRlbVxuXG4gIH0pXG5cbiAgcmV0dXJuIHt0eXBlOiAnUkVQTEFDRV9DQVJUJywgcGF5bG9hZDogbmV3Q2FydH1cblxufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1EaXNjb3VudChpdGVtc0luQ2FydCwgY29kZSwgZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKSAvLyBjaGVja3MgaWYgcHJvZHVjdCBleGlzdHNcblxuICBjb25zdCByZXMgPSAoaW5kZXhJbkNhcnQgPT0gLTEpIC8vIGlmIG5vdCBleGlzdHMgZGlzcGF0Y2ggTm90IEZvdW5kLCBpZiBleGlzdHMgY2hlY2sgaWYgYWxyZWFkeSBpbiBjYXJ0XG4gICAgPyB7XG4gICAgICB0eXBlOiAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHksIGRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGlubGluZSBkaXNjb3VudCBvZiBhbiBpdGVtLCBhbmQgcmVmbGVjdCBpdCBvbiBzdG9yZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1Mb3RlKGl0ZW1zSW5DYXJ0LCBjb2RlLCBsb3RlKSB7XG4gIGNvbnN0IGxvdGVOdW0gPSAhbG90ZSA/ICctJyA6IGxvdGVcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT0gY29kZSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGRpc3BhdGNoIE5vdCBGb3VuZCwgaWYgZXhpc3RzIGNoZWNrIGlmIGFscmVhZHkgaW4gY2FydFxuICAgID8ge1xuICAgICAgdHlwZTogJ1BST0RVQ1RfSU5fQ0FSVF9OT1RfRk9VTkQnLFxuICAgICAgcGF5bG9hZDogLTFcbiAgICB9XG4gICAgOiB7XG4gICAgICB0eXBlOiAnVVBEQVRFX0NBUlRfSVRFTV9MT1RFJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbG90ZTogbG90ZU51bSxcbiAgICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiByZXNcblxufVxuXG4vLyBXaGVuIGl0ZW0gaXMgc2VsZWN0ZWQgaW4gY29kZSBmaWVsZFxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHByb2R1Y3RzLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgZGVmYXVsdENvbmZpZywgdXNlckNvbmZpZykge1xuXG4gIGNvbnN0IHBlckxpbmUgPSBmYWxzZVxuXG4gIGNvbnN0IHByb2R1Y3RTZWxlY3RlZCA9IHByb2R1Y3RzLmZpbmRJbmRleChwcm9kdWN0ID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdC5jb2RlID09IGNvZGUgfHwgcHJvZHVjdC5iYXJjb2RlID09IGNvZGVcbiAgfSkgLy8gY2hlY2tzIGlmIHByb2R1Y3QgZXhpc3RzXG5cbiAgY29uc3QgcmVzID0gKHByb2R1Y3RTZWxlY3RlZCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX05PVF9GT1VORCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cbiAgICA6IGNoZWNrSWZJbkNhcnQoY29kZSwgcXR5LCBwcm9kdWN0cywgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBwcm9kdWN0U2VsZWN0ZWQsIGNsaWVudCwgcGVyTGluZSlcblxuICByZXR1cm4gcmVzXG5cbn1cblxuLy8gVXBkYXRlcyBBbW91bnQgYmFzZWQgb24gcXR5IGlucHV0IGZpZWxkXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdHkgKGNvZGUsIHF0eSwgaXRlbXNJbkNhcnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpIHtcblxuICBjb25zdCBpbmRleEluQ2FydCA9IGl0ZW1zSW5DYXJ0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udXVpZCA9PSBjb2RlKVxuICBjb25zdCBxdHlOdW0gPSBwYXJzZUZsb2F0KHF0eSlcbiAgY29uc3QgcmVzID0ge1xuICAgIHR5cGU6ICdVUERBVEVfQ0FSVCcsXG4gICAgcGF5bG9hZDoge1xuICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgcXR5TnVtLCBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0uZGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQsXG4gICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS51dWlkKSxcbiAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdHlDb2RlIChjb2RlLCBxdHksIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGl0ZW0ucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXG4gIGNvbnN0IHF0eU51bSA9IHBhcnNlRmxvYXQocXR5KVxuICBjb25zdCByZXMgPSB7XG4gICAgdHlwZTogJ1VQREFURV9DQVJUJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpdGVtOiB1cGRhdGVkQ2FydEl0ZW0oaXRlbXNJbkNhcnQsIGluZGV4SW5DYXJ0LCBxdHlOdW0sIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCxcbiAgICAgICAgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgaW5kZXg6IGluZGV4SW5DYXJ0XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLy8gVXBkYXRlcyBBbW91bnQgYmFzZWQgb24gcXR5IGlucHV0IGZpZWxkXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJPbmUgKGNvZGUsIHN1Yk9yQWRkLCBpdGVtc0luQ2FydCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wcm9kdWN0LmNvZGUgPT0gY29kZSlcbiAgY29uc3QgcXR5TnVtID0gc3ViT3JBZGQgPyBwYXJzZUZsb2F0KGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5xdHkgKyAxKSA6IHBhcnNlRmxvYXQoaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSAtIDEpXG4gIGNvbnN0IHJlcyA9IHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGl0ZW06IHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXhJbkNhcnQsIHF0eU51bSwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLmRpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LFxuICAgICAgICBpdGVtc0luQ2FydFtpbmRleEluQ2FydF0udXVpZCksXG4gICAgICBpbmRleDogaW5kZXhJbkNhcnRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExPQ0FMIEFVWCBGVU5DVElPTlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBjaGVja3MgaW4gY2FydCBpZiBpdGVtIGFscmVhZHkgZXhpc3RzXG5mdW5jdGlvbiBjaGVja0lmSW5DYXJ0KGNvZGUsIHF0eSwgcHJvZHVjdHMsIGl0ZW1zSW5DYXJ0LCBnbG9iYWxEaXNjb3VudCwgcHJvZHVjdFNlbGVjdGVkLCBjbGllbnQsIHBlckxpbmUpIHtcblxuICAvLyBjaGVjayBpZiBwcm9kdWN0IGluIGNhcnRcbiAgY29uc3QgaW5kZXhJbkNhcnQgPSBpdGVtc0luQ2FydC5maW5kSW5kZXgoY2FydCA9PiBjYXJ0LnByb2R1Y3QuY29kZSA9PSBjb2RlIHx8IGNhcnQucHJvZHVjdC5iYXJjb2RlID09IGNvZGUpXG5cbiAgY29uc3QgZGF0YU5ld1Byb2QgPSBjYWNsU3VidG90YWwocHJvZHVjdHNbcHJvZHVjdFNlbGVjdGVkXSwgcXR5LCAwLCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KVxuXG4gIC8vIENIRUNLIElGIENPTkZJRyBBTExPV1MgTVVMVElQTEUgTElORVMgT1IgTk9UXG4gIGlmIChwZXJMaW5lKSB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpXG4gICAgY29uc3QgcmVzID0gKGluZGV4SW5DYXJ0ID09IC0xKSAvLyBpZiBub3QgZXhpc3RzIGluIGNhcnQgRGlzcGF0cyBBRERfVE9fVEFCTEUsIGlmIGV4aXN0cyBkaXNwYXRjaCBjYXJ0IHVwZGF0ZWRcbiAgICAgID8ge1xuICAgICAgICB0eXBlOiAnQUREX1RPX0NBUlQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0c1twcm9kdWN0U2VsZWN0ZWRdLFxuICAgICAgICAgIHF0eTogcXR5LFxuICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGFOZXdQcm9kLmRpc2NvdW50Q3VycmVuY3ksXG4gICAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXG4gICAgICAgICAgc3VidG90YWw6IGRhdGFOZXdQcm9kLnN1YnRvdGFsLFxuICAgICAgICAgIHRvdGFsV2l0aEl2OiBkYXRhTmV3UHJvZC50b3RhbFdpdGhJdixcbiAgICAgICAgICBsb3RlOiAnLScsXG4gICAgICAgICAgcHJpY2VUb1VzZTogZGF0YU5ld1Byb2QucHJpY2VUb1VzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDoge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX0NBUlQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgaXRlbTogdXBkYXRlZENhcnRJdGVtKGl0ZW1zSW5DYXJ0LCBpbmRleEluQ2FydCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnF0eSArIHF0eSxcbiAgICAgICAgICAgIGl0ZW1zSW5DYXJ0W2luZGV4SW5DYXJ0XS5kaXNjb3VudCwgZ2xvYmFsRGlzY291bnQsIGNsaWVudCwgaXRlbXNJbkNhcnRbaW5kZXhJbkNhcnRdLnV1aWQpLFxuICAgICAgICAgIGluZGV4OiBpbmRleEluQ2FydFxuICAgICAgICB9XG4gICAgICB9XG4gICAgcmV0dXJuIHJlc1xuXG4gIC8vIElHTk9SRSBJRiBBTFJFQURZIElOIENBUlQgSUYgQ09ORklHIFNBWVMgVEhBVFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjEoKVxuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHR5cGU6ICdBRERfVE9fQ0FSVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzW3Byb2R1Y3RTZWxlY3RlZF0sXG4gICAgICAgIHF0eTogcXR5LFxuICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgZGlzY291bnRDdXJyZW5jeTogZGF0YU5ld1Byb2QuZGlzY291bnRDdXJyZW5jeSxcbiAgICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBkYXRhTmV3UHJvZC5zdWJUb3RhbE5vRGlzY291bnQsXG4gICAgICAgIHN1YnRvdGFsOiBkYXRhTmV3UHJvZC5zdWJ0b3RhbCxcbiAgICAgICAgdG90YWxXaXRoSXY6IGRhdGFOZXdQcm9kLnRvdGFsV2l0aEl2LFxuICAgICAgICBsb3RlOiAnLScsXG4gICAgICAgIHByaWNlVG9Vc2U6IGRhdGFOZXdQcm9kLnByaWNlVG9Vc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbn1cblxuLy8gY2FsY3VsYXRlcyB0aGUgc3VidG90YWwgYnkgbGluZSwgYWxzbyB0aGUgdG90YWwgd2l0aCBpdiBpbmNsdWRlZCwgdGhlIGRpc2NvdW50IGluIGN1cnJlbmN5IGZvcm1hdFxuZnVuY3Rpb24gY2FjbFN1YnRvdGFsKHByb2R1Y3QsIHF0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50KSB7XG5cbiAgY29uc3QgcHJpY2UgPSBwcmljZVRvVXNlKHByb2R1Y3QsIGNsaWVudClcblxuICBjb25zdCBzdWJUb3RhbE5vRGlzY291bnQgPSBwcmljZSAqIHF0eVxuXG4gIGNvbnN0IHN1YlRvdGFsID0gcHJpY2UgKiBxdHkgKiAoMSAtIChwcm9kdWN0RGlzY291bnQgLyAxMDApKSAqICgxIC0gKGdsb2JhbERpc2NvdW50IC8gMTAwKSlcblxuICBjb25zdCBpdjEgPSAocHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzIC8gMTAwKVxuICAgIDogMFxuXG4gIGNvbnN0IGl2MiA9IChwcm9kdWN0LnVzZV90YXhlczIpXG4gICAgPyBzdWJUb3RhbCAqIChwcm9kdWN0LnRheGVzMiAvIDEwMClcbiAgICA6IDBcblxuICBjb25zdCBpdjMgPSAocHJvZHVjdC51c2VfdGF4ZXMzKVxuICAgID8gc3ViVG90YWwgKiAocHJvZHVjdC50YXhlczMgLyAxMDApXG4gICAgOiAwXG5cbiAgY29uc3QgdG90YWxXaXRoSXYgPSBzdWJUb3RhbCArIGl2MSArIGl2MiArIGl2M1xuXG4gIGNvbnN0IGRpc2NvdW50Q3VycmVuY3lJbkxpbmUgPSBwcmljZSAqIHF0eSAqIChwcm9kdWN0RGlzY291bnQgLyAxMDApXG4gIGNvbnN0IGRpc2NvdW50Q3VycmVuY3lHbG9iYWwgPSAoKHByaWNlICogcXR5KSAtIGRpc2NvdW50Q3VycmVuY3lJbkxpbmUpICogKGdsb2JhbERpc2NvdW50IC8gMTAwKVxuXG4gIGNvbnN0IGRpc2NvdW50Q3VycmVuY3kgPSBkaXNjb3VudEN1cnJlbmN5SW5MaW5lICsgZGlzY291bnRDdXJyZW5jeUdsb2JhbFxuXG4gIHJldHVybiB7XG4gICAgc3VidG90YWw6IHN1YlRvdGFsLFxuICAgIHRvdGFsV2l0aEl2OiB0b3RhbFdpdGhJdixcbiAgICBkaXNjb3VudEN1cnJlbmN5OiBkaXNjb3VudEN1cnJlbmN5LFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogc3ViVG90YWxOb0Rpc2NvdW50LFxuICAgIHByaWNlVG9Vc2U6IHByaWNlXG4gIH1cblxufVxuXG4vLyB1cGRhdGVzIGFuIGl0ZW0gaW4gdGhlIGNhcnQgd2l0aCBuZXcgaW5mb3JtYXRpb24sIHRoaXMgYXV4IGZ1bnRpb24gcmV0dXJucyBuZXcgdXBkYXRlZCBvYmplY3QgcmVhZHkgZm9yIHJlcGxhY2UgdGhlIHN0b3JlZCBvbmVcbmZ1bmN0aW9uIHVwZGF0ZWRDYXJ0SXRlbShpdGVtc0luQ2FydCwgaW5kZXgsIG5ld1F0eSwgcHJvZHVjdERpc2NvdW50LCBnbG9iYWxEaXNjb3VudCwgY2xpZW50LCB1dWlkKSB7XG5cbiAgY29uc3QgZGF0YSA9IGNhY2xTdWJ0b3RhbChpdGVtc0luQ2FydFtpbmRleF0ucHJvZHVjdCwgbmV3UXR5LCBwcm9kdWN0RGlzY291bnQsIGdsb2JhbERpc2NvdW50LCBjbGllbnQpXG5cbiAgcmV0dXJuIHtcbiAgICB1dWlkOiB1dWlkLFxuICAgIHByb2R1Y3Q6IGl0ZW1zSW5DYXJ0W2luZGV4XS5wcm9kdWN0LFxuICAgIGRpc2NvdW50Q3VycmVuY3k6IGRhdGEuZGlzY291bnRDdXJyZW5jeSxcbiAgICBxdHk6IG5ld1F0eSxcbiAgICBkaXNjb3VudDogcHJvZHVjdERpc2NvdW50LFxuICAgIHN1YlRvdGFsTm9EaXNjb3VudDogZGF0YS5zdWJUb3RhbE5vRGlzY291bnQsXG4gICAgc3VidG90YWw6IGRhdGEuc3VidG90YWwsXG4gICAgdG90YWxXaXRoSXY6IGRhdGEudG90YWxXaXRoSXYsXG4gICAgbG90ZTogaXRlbXNJbkNhcnRbaW5kZXhdLmxvdGUsXG4gICAgcHJpY2VUb1VzZTogZGF0YS5wcmljZVRvVXNlXG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZGV0ZXJtaW4gcHJpY2UgdG8gdXNlIGluIGNhbGN1bGF0aW9uXG5mdW5jdGlvbiBwcmljZVRvVXNlKHByb2R1Y3QsIGNsaWVudCkge1xuXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnR0VORVJBTCcpIHJldHVybiBwcm9kdWN0LnByaWNlXG5cbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdESVNUUklCJyAmJiBwcm9kdWN0LnVzZVByaWNlMikgcmV0dXJuIHByb2R1Y3QucHJpY2UyXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnRElTVFJJQicpIHJldHVybiBwcm9kdWN0LnByaWNlXG5cbiAgaWYgKGNsaWVudC5jbGllbnRUeXBlID09ICdXSE9MRVNBJyAmJiBwcm9kdWN0LnVzZVByaWNlMykgcmV0dXJuIHByb2R1Y3QucHJpY2UzXG4gIGlmIChjbGllbnQuY2xpZW50VHlwZSA9PSAnV0hPTEVTQScgJiYgcHJvZHVjdC51c2VQcmljZTIpIHJldHVybiBwcm9kdWN0LnByaWNlMlxuICBpZiAoY2xpZW50LmNsaWVudFR5cGUgPT0gJ1dIT0xFU0EnKSByZXR1cm4gcHJvZHVjdC5wcmljZVxuXG4gIHJldHVybiBwcm9kdWN0LnByaWNlXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXRNb25leS5qcydcblxuLy8gUkVEVVggUFJPVklERVJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluL21haW4uanN4J1xuXG4vLyBTVE9SRVxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUuanMnXG5cbndpbmRvdy5hbGVydGlmeSA9IGFsZXJ0aWZ5XG5mb3JtYXRNb25leSgpXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPE1haW4gLz5cbiAgPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJykpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2FwcC5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtmZWN0aFByb2ZpbGV9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIENPTVBPTkVOVFNcblxuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9sYXlvdXQvdG9wQmFyL3RvcEJhci5qc3gnXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi4vbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCdcbmltcG9ydCBGZXRjaGluZyBmcm9tICcuLi8uLi8uLi9nZW5lcmFsL2ZldGNoaW5nL2ZldGNoaW5nLmpzeCdcblxuLy8gaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hpbmc6IHN0b3JlLmZldGNoaW5nLmZldGNoaW5nLFxuICAgIHNpZGVNZW51VmlzaWJsZTogc3RvcmUubGF5b3V0LnNpZGVNZW51VmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmVjdGhQcm9maWxlKCkpXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBmZXRjaGluZyA9IHRoaXMucHJvcHMuZmV0Y2hpbmcgPyA8RmV0Y2hpbmcgLz4gOiAnJ1xuICAgIGNvbnN0IG1haW5Db250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuc2lkZU1lbnVWaXNpYmxlID8gJ21haW5Db250YWluZXInIDogJ21haW5Db250YWluZXIgc2lkZUhpZGRlbidcbiAgICBjb25zdCBjb250ZW50ID0gPFJvdXRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaWRlTWVudSAvPlxuICAgICAgICA8ZGl2IGlkPSdtYWluQ29udGFpbmVyJyBjbGFzc05hbWU9e21haW5Db250YWluZXJDbGFzc30+XG4gICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQ29udGFpbmVyLWNvbnRlbnQnPlxuICAgICAgICAgICAge3JvdXRlc31cbiAgICAgICAgICAgIHtmZXRjaGluZ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JvdXRlcj5cblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9tYWluL21haW4uanN4IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmVjdGhQcm9maWxlKCkge1xuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGF4aW9zLmdldCgnL3Byb2ZpbGUvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX0ZVTEZJTExFRCcsIHBheWxvYWQ6IHt1c2VyOiByZXNwb25zZS5kYXRhWzBdLmZpZWxkcywgcHJvZmlsZTogcmVzcG9uc2UuZGF0YVsxXS5maWVsZHN9fSlcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfRE9ORScsIHBheWxvYWQ6ICcnfSlcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9QUk9GSUxFX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZlY3RoSXNBZG1pbkxvY2tlZCgpIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnByZWZzL2FkbWluX19pc19hZG1pbl9sb2NrZWQvJykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSF9JU19BRE1JTl9MT0NLRURfRlVMRklMTEVEJywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YS52YWx1ZX0pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hfSVNfQURNSU5fTE9DS0VEX1JFSkVDVEVEJywgcGF5bG9hZDogZXJyb3J9KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbWFpbi9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gUm91dGVzIENvbXBvbmVudHNcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vaG9tZS9ob21lLmpzeCdcbmltcG9ydCBTYWxlIGZyb20gJy4uL3NhbGUvbWFpbi5qc3gnXG5cbmNvbnN0IHJvdXRlcyA9IDxkaXYgY2xhc3NOYW1lPSdoZWlnaDEwMCc+XG5cbiAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9zYWxlcycgY29tcG9uZW50PXtIb21lfSAvPlxuICA8Um91dGUgcGF0aD0nL3NhbGVzL3NhbGUnIGNvbXBvbmVudD17U2FsZX0gLz5cblxuPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9tYWluL3JvdXRlcy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IGNoZWNrVXNlclBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hlY2tQZXJtaXNzaW9ucydcbi8vIGltcG9ydCB7IGdldEl0ZW1EaXNwYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0hPTUVfUEFORUxfTU9VTlRFRCcsIHBheWxvYWQ6ICcnfSlcblxuICB9XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J01haW4gaGVpZ2gxMDAnPlxuICAgICAgSE9NRVxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9ob21lL2hvbWUuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgY2hlY2tVc2VyUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGVja1Blcm1pc3Npb25zJ1xuLy8gaW1wb3J0IHsgZ2V0SXRlbURpc3BhdGNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLmpzJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuanN4J1xuaW1wb3J0IEFzaWRlIGZyb20gJy4vYXNpZGUvYXNpZGUuanN4J1xuaW1wb3J0IFNlYXJjaFByb2R1Y3QgZnJvbSAnLi4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4J1xuaW1wb3J0IFNlYXJjaENsaWVudCBmcm9tICcuLi9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaFBhbmVsLmpzeCdcbmltcG9ydCBQYXlQYW5lbCBmcm9tICcuL3BheS9wYXlQYW5lbC5qc3gnXG5pbXBvcnQgSW52b2ljZVBhbmVsIGZyb20gJy4uL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0FMRV9QQU5FTF9NT1VOVEVEJywgcGF5bG9hZDogJyd9KVxuXG4gIH1cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2FsZSc+XG4gICAgICA8Q29udGVudCAvPlxuICAgICAgPEFzaWRlIC8+XG5cbiAgICAgIDxTZWFyY2hQcm9kdWN0IC8+XG4gICAgICA8U2VhcmNoQ2xpZW50IC8+XG4gICAgICA8UGF5UGFuZWwgLz5cbiAgICAgIDxJbnZvaWNlUGFuZWwgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL21haW4uanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvcHJvZHVjdC5qc3gnXG5pbXBvcnQgQ2FydCBmcm9tICcuLi8uLi9nZW5lcmFsL2NhcnQvY2FydC5qc3gnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmdWxsV2lkdGg6IHN0b3JlLnNhbGUuZnVsbFdpZHRoLFxuICAgIHRvdGFsOiBzdG9yZS5jYXJ0LmNhcnRUb3RhbFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgdG9nZ2xlV2lkdGggKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdUT0dHTEVfRlVMTF9XSURUSCcsIHBheWxvYWQ6ICcnfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50Q2xhc3MgPSB0aGlzLnByb3BzLmZ1bGxXaWR0aCA/ICdzYWxlLWNvbnRlbnQgZnVsbFdpZHRoJyA6ICdzYWxlLWNvbnRlbnQnXG4gICAgY29uc3QgY2FydENsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1jb250ZW50LWNhcnQnIDogJ3NhbGUtY29udGVudC1jYXJ0IGZ1bGxIZWlnaHQnXG4gICAgY29uc3QgdG90YWxDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtY29udGVudC10b3RhbCcgOiAnc2FsZS1jb250ZW50LXRvdGFsIGNvbGxhcHNlZCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y29udGVudENsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWNvbnRlbnQtcHJvZHVjdCcgPlxuICAgICAgICA8UHJvZHVjdCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FydENsYXNzfSA+XG4gICAgICAgIDxDYXJ0IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0b3RhbENsYXNzfSA+XG4gICAgICAgIOKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgpfVxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZXZyb24tbGVmdCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvY29udGVudC9jb250ZW50LmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHtwcm9kdWN0U2VsZWN0ZWR9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IHN0b3JlLnByb2R1Y3RzLnByb2R1Y3RzLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgaW5wdXRWYWw6IHN0b3JlLnByb2R1Y3RzLmlucHV0VmFsLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZCxcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXNcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29kZUlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLmNvZGVJbnB1dC5mb2N1cygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfUFJPRFVDVFMnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICBjb25zdCBwcm9kdWN0S3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9wcm9kdWN0cycsXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX1BST0RVQ1RTX0ZVTEZJTExFRCcsXG4gICAgICBlcnJvclR5cGU6ICdGRVRDSF9QUk9EVUNUU19SRUpFQ1RFRCdcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldEl0ZW1EaXNwYXRjaChwcm9kdWN0S3dhcmdzKSlcblxuICB9XG5cbiAgc2VhcmNoUHJvZHVjdENsaWNrKCkge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1BST0RVQ1RfU0hPV19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcblxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBpZiAoZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUuc3BsaXQoJyonKVswXSAvLyBTcGxpdCB2YWwgWzBdIGlzIGNvZGUgWzFdIGlzIHF0eVxuICAgICAgICBsZXQgcXR5ID0gZXYudGFyZ2V0LnZhbHVlLnNwbGl0KCcqJylbMV1cbiAgICAgICAgcXR5ID0gKGlzTmFOKHF0eSkpXG4gICAgICAgICAgPyAxXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KHF0eSkgLy8gaWYgbm8gcXR5IHNldHMgdG8gMVxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdFNlbGVjdGVkKGNvZGUsIHF0eSwgdGhpcy5wcm9wcy5wcm9kdWN0cywgdGhpcy5wcm9wcy5pdGVtc0luQ2FydCxcbiAgICAgICAgICB0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCB0aGlzLnByb3BzLmNsaWVudCwgdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLCB0aGlzLnByb3BzLnVzZXJDb25maWcpKVxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RTZWxlY3RlZChjb2RlLCBxdHksIHRoaXMucHJvcHMucHJvZHVjdHMsIHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsXG4gICAgICAgIC8vICAgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQsIHRoaXMucHJvcHMuZGVmYXVsdENvbmZpZywgdGhpcy5wcm9wcy51c2VyQ29uZmlnKSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnLCBwYXlsb2FkOiAwfSlcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJywgcGF5bG9hZDogY29kZX0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGV2LnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIHByb2R1Y3RcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxiPlByb2R1Y3RvOjwvYj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUnPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYmFyY29kZScgLz5cbiAgICAgICAgICA8aW5wdXQgaWQ9J3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvZGVJbnB1dCA9IGlucHV0XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0luZ3Jlc2UgZWwgQ8OzZGlnbyBkZWwgUHJvZHVjdG8nXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Byb2R1Y3QtaW5wdXRzLWNvZGUtaW5wdXQgbW91c2V0cmFwIGZvcm0tY29udHJvbCBpbnB1dC1sZycgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0LWlucHV0cy1zZWFyY2gnPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3Byb2R1Y3QuanN4IiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDYxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FydEl0ZW1zIGZyb20gJy4vY2FydEl0ZW1zLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvLyBkZWZhdWx0Q29uZmlnOiBzdG9yZS5jb25maWcuZGVmYXVsdFNhbGVzLFxuICAgIC8vIHVzZXJDb25maWc6IHN0b3JlLmNvbmZpZy51c2VyU2FsZXMsXG4gICAgLy8gcHJvZHVjdFNlYXJjaHBhbmVsVmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtiJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXG5cbiAgICAgIE1vdXNldHJhcC5iaW5kKCdlc2MnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRUFSQ0hfUFJPRFVDVF9UT0dHTEVfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgIE1vdXNldHJhcC51bmJpbmQoJ2VzYycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kK2MnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGludGVybmV0IGV4cGxvcmVyXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50LXNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcblxuICAgICAgTW91c2V0cmFwLmJpbmQoJ2VzYycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NFQVJDSF9DTElFTlRfVE9HR0xFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykudmFsdWUgPSAnJ1xuICAgICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHVzZUxvdGUgPSB0aGlzLnByb3BzLmRlZmF1bHRDb25maWdcbiAgICAvLyAgID8gdGhpcy5wcm9wcy5kZWZhdWx0Q29uZmlnLmNhcnRJdGVtVXNlTG90ZVxuICAgIC8vICAgOiBmYWxzZVxuXG4gICAgLy8gY29uc3QgbG90ZUZpZWxkID0gdXNlTG90ZVxuICAgIC8vICAgPyA8dGg+TG90ZTwvdGg+XG4gICAgLy8gICA6IDx0aCAvPlxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjYXJ0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1jb2RlJz5cbiAgICAgICAgICA8aDU+Q8OzZDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItZGVzY3JpcHRpb24nPlxuICAgICAgICAgIDxoNT5BcnQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXF0eSc+XG4gICAgICAgICAgPGg1PkNhbnQ8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtaGVhZGVyLXVuaXRQcmljZSc+XG4gICAgICAgICAgPGg1PlAgVW5pdDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItZGlzY291bnQnPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWhlYWRlci1pdmEnPlxuICAgICAgICAgIDxoNT5JVjwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1oZWFkZXItdG90YWwnPlxuICAgICAgICAgIDxoNT5Ub3RhbCBJVkk8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q2FydEl0ZW1zIC8+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnQuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7dXBkYXRlVG90YWxzLCByZW1vdmVGcm9tQ2FydH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHt1cGRhdGVJdGVtRGlzY291bnQsIHVwZGF0ZUl0ZW1Mb3RlLCB1cGRhdGVRdHksIGFkZFN1Yk9uZSwgdXBkYXRlUXR5Q29kZX0gZnJvbSAnLi4vcHJvZHVjdC9hY3Rpb25zJ1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5jb25zdCBNb3VzZXRyYXAgPSByZXF1aXJlKCdtb3VzZXRyYXAnKVxuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudCxcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkLFxuICAgIGNhcnRJdGVtQWN0aXZlOiBzdG9yZS5jYXJ0LmNhcnRJdGVtQWN0aXZlXG4gICAgLy8gZGVmYXVsdENvbmZpZzogc3RvcmUuY29uZmlnLmRlZmF1bHRTYWxlcyxcbiAgICAvLyB1c2VyQ29uZmlnOiBzdG9yZS5jb25maWcudXNlclNhbGVzXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE9uIGNvbXBvbmVudCB1cGRhdGUgKFRoZSBjYXJ0IGhhcyBiZWVuIG1vZGlmaWVkKSBjYWxscyB0aGUgdXBkYXRlIHRvdGFscyBtZXRob2QgaW4gYWN0aW9ucyBmaWxlLlxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVRvdGFscyh0aGlzLnByb3BzLmluQ2FydCkpXG5cbiAgICAvLyBBdXRvIFNjcm9sbCBUbyBlbmQgb2YgY29udGFpbmVyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJvZHknKVxuICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHRcblxuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wcykge1xuICAvLyAgIGlmICh0aGlzLnByb3BzLmNhcnRJdGVtQWN0aXZlICE9IG5leHRQcm9wcy5jYXJ0SXRlbUFjdGl2ZSkge1xuICAvLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7bmV4dFByb3BzLmNhcnRJdGVtQWN0aXZlfWApKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrcGx1cycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgdHJ1ZSwgX3RoaXMucHJvcHMuaW5DYXJ0LCBfdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgICAgX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9KVxuXG4gICAgTW91c2V0cmFwLmJpbmQoJ21vZCtmJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHF0eSR7X3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmV9YCkuZm9jdXMoKVxuICAgIH0pXG5cbiAgICBNb3VzZXRyYXAuYmluZCgnbW9kKy0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN1Yk9uZShfdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSwgZmFsc2UsIF90aGlzLnByb3BzLmluQ2FydCwgX3RoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIF90aGlzLnByb3BzLmNsaWVudCkpXG4gICAgfSlcblxuICAgIE1vdXNldHJhcC5iaW5kKCdtb2QrKicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9fdGhpcyA9IF90aGlzXG4gICAgICBhbGVydGlmeS5wcm9tcHQoYE51ZXZhIGNhbnRpZGFkIHBhcmEgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvYCwgJ0luZ3Jlc2UgbGEgbnVldmEgY2FudGlkYWQgcGFyYSBlbCBwcm9kdWN0byBzZWxlY2Npb25hZG8nLCAnJ1xuICAgICAgICAsIGZ1bmN0aW9uKGV2dCwgdmFsdWUpIHtcbiAgICAgICAgICBfX3RoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUXR5Q29kZShfX3RoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUsIHZhbHVlLCBfX3RoaXMucHJvcHMuaW5DYXJ0LFxuICAgICAgICAgICAgX190aGlzLnByb3BzLmdsb2JhbERpc2NvdW50LCBfX3RoaXMucHJvcHMuY2xpZW50KSlcbiAgICAgICAgfVxuICAgICAgICAsIGZ1bmN0aW9uKCkge30pXG4gICAgICAgIC5zZXQoJ2xhYmVscycsIHtvazogJ09rJywgY2FuY2VsOiAnQ2FuY2VsYXInfSlcbiAgICB9KVxuICB9XG5cbiAgZGlzY291bnRJbnB1dEtleVByZXNzKGNvZGUsIGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGRpc2NvdW50ID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1EaXNjb3VudCh0aGlzLnByb3BzLmluQ2FydCwgY29kZSwgZGlzY291bnQsIHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQsXG4gICAgICAgIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICAgIH1cblxuICB9XG5cbiAgZGlzY291bnRJbnB1dE9uQmx1cihjb2RlLCBldikge1xuXG4gICAgY29uc3QgZGlzY291bnQgPSAoZXYudGFyZ2V0LnZhbHVlKVxuICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgIDogMFxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlSXRlbURpc2NvdW50KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBkaXNjb3VudCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCxcbiAgICAgIHRoaXMucHJvcHMuY2xpZW50KSlcblxuICB9XG5cbiAgcXR5SW5wdXRDaGFuZ2UoY29kZSwgZXYpIHtcblxuICAgIGNvbnN0IHF0eSA9IHBhcnNlRmxvYXQoKGV2LnRhcmdldC52YWx1ZSkpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVRdHkoY29kZSwgcXR5LCB0aGlzLnByb3BzLmluQ2FydCwgdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuXG4gIH1cblxuICBxdHlJbnB1dEtleVByZXNzKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnKVxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgY29uc29sZS5sb2coJ1ByZXNzc3NzJywgZXYua2V5KVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RDb2RlSW5wdXRGaWVsZCcpLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBsb3RlSW5wdXRLZXlQcmVzcyhjb2RlLCBldikge1xuXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBldi50YXJnZXQudmFsdWVcbiAgICAgICAgOiAwXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcblxuICAgIH1cblxuICB9XG5cbiAgbG90ZUlucHV0T25CbHVyKGNvZGUsIGV2KSB7XG5cbiAgICBjb25zdCBsb3RlID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICA6IDBcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUl0ZW1Mb3RlKHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlLCBsb3RlKSlcblxuICB9XG5cbiAgc2V0Q2FydEl0ZW1BY3RpdmUoY29kZSwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfUFJPRFVDVF9BQ1RJVkVfSU5fQ0FSVCcsIHBheWxvYWQ6IGNvZGV9KVxuXG4gIH1cblxuICByZW1vdmVJdGVtKGNvZGUsIGV2KSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KHRoaXMucHJvcHMuaW5DYXJ0LCBjb2RlKSlcblxuICB9XG5cbiAgZmllbGRGb2N1cyhldikge1xuICAgIGV2LnRhcmdldC5zZWxlY3QoKVxuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBpdGVtcyBpbiBjYXJ0IHVzaW5nIHRhYmxlIHJvd3NcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGl0ZW1zMiA9IGNhcnRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gKGl0ZW0ucHJvZHVjdC5jb2RlID09IHRoaXMucHJvcHMuY2FydEl0ZW1BY3RpdmUgfHwgaXRlbS5wcm9kdWN0LmJhcmNvZGUgPT0gdGhpcy5wcm9wcy5jYXJ0SXRlbUFjdGl2ZSlcbiAgICAgICAgPyAnY2FydC1hY3RpdmVSb3cgY2FydC1ib2R5LWl0ZW0nXG4gICAgICAgIDogJ2NhcnQtYm9keS1pdGVtJ1xuXG4gICAgICBjb25zdCByZW1vdmVJY29uQ2xhc3MgPSB0aGlzLnByb3BzLmRpc2FibGVkID8gJ3JlbW92ZUl0ZW1JY29uIGRpc2FibGVkJyA6ICdyZW1vdmVJdGVtSWNvbidcblxuICAgICAgY29uc3QgdGF4ZXMxID0gKGl0ZW0ucHJvZHVjdC51c2VfdGF4ZXMpXG4gICAgICAgID8gaXRlbS5wcm9kdWN0LnRheGVzXG4gICAgICAgIDogMFxuXG4gICAgICBjb25zdCBxdHlGaWVsZCA9IDxpbnB1dFxuICAgICAgICBpZD17YHF0eSR7aXRlbS5wcm9kdWN0LmNvZGV9YH1cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnF0eUlucHV0Q2hhbmdlLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgIG9uS2V5VXA9e3RoaXMucXR5SW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICB2YWx1ZT17aXRlbS5xdHl9XG4gICAgICAvPlxuXG4gICAgICBjb25zdCBkaXNjb3VudEZpZWxkID0gdGhpcy5wcm9wcy5jbGllbnQuc2FsZUxvYWRlZFxuICAgICAgICA/IDxpbnB1dFxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuZGlzY291bnRJbnB1dEtleVByZXNzLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuZGlzY291bnRJbnB1dE9uQmx1ci5iaW5kKHRoaXMsIGl0ZW0udXVpZCl9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5maWVsZEZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhcnNlRmxvYXQoaXRlbS5kaXNjb3VudCl9XG4gICAgICAgIC8+XG4gICAgICAgIDogPGlucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5kaXNjb3VudElucHV0S2V5UHJlc3MuYmluZCh0aGlzLCBpdGVtLnV1aWQpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kaXNjb3VudElucHV0T25CbHVyLmJpbmQodGhpcywgaXRlbS51dWlkKX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZpZWxkRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAvPlxuXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzfVxuICAgICAgICBrZXk9e2l0ZW0udXVpZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zZXRDYXJ0SXRlbUFjdGl2ZS5iaW5kKHRoaXMsIGl0ZW0ucHJvZHVjdC5jb2RlKX0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLWNvZGUnPlxuICAgICAgICAgIDxoNT5Dw7NkaWdvPC9oNT5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmNvZGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tZGVzY3JpcHRpb24nPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9keS1pdGVtLXF0eSc+XG4gICAgICAgICAgPGg1PkNhbnRpZGFkPC9oNT5cbiAgICAgICAgICB7cXR5RmllbGR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdW5pdFByaWNlJz5cbiAgICAgICAgICA8aDU+UCBVbml0PC9oNT5cbiAgICAgICAgICDigqEge3BhcnNlRmxvYXQoaXRlbS5wcmljZVRvVXNlKS5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tZGlzY291bnQnPlxuICAgICAgICAgIDxoNT5EZXNjPC9oNT5cbiAgICAgICAgICB7ZGlzY291bnRGaWVsZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvZHktaXRlbS1pdmEnPlxuICAgICAgICAgIDxoNT5JVkE8L2g1PlxuICAgICAgICAgIHt0YXhlczF9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2R5LWl0ZW0tdG90YWwnPlxuICAgICAgICAgIDxoNT5Ub3RhbDwvaDU+XG4gICAgICAgICAgICDigqEge2l0ZW0udG90YWxXaXRoSXYuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlbW92ZUljb25DbGFzc30+XG4gICAgICAgICAgPGkgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbS51dWlkKX0gY2xhc3NOYW1lPSdmYSBmYS10aW1lcy1jaXJjbGUnIC8+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgPC9kaXY+XG4gICAgfSlcblxuICAgIC8vIHJldHVybiA8dGJvZHkgY2xhc3NOYW1lPSd0YWJsZS1ib2R5Jz5cbiAgICAvLyAgIHtpdGVtc31cbiAgICAvLyA8L3Rib2R5PlxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9J2NhcnQtYm9keScgY2xhc3NOYW1lPSdjYXJ0LWJvZHknPlxuICAgICAge2l0ZW1zMn1cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jYXJ0L2NhcnRJdGVtcy5qc3giLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVYUE9SVCBGVU5DVElPTlMgVVNFRCBJTiBDT01QT05FTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRvdGFscyB0aGUgY2FydCBzdG9yZSBpdGVtLCBnZW5lcmF0ZXMgbmV3IHZhbHVlcyBhY2NvcmRpbmcgY2FydCBpdGVtIG9iamVjdHMsIHRoZW4gcHVzaCB0aGUgdG8gc3RvcmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbHMoaW5DYXJ0KSB7XG5cbiAgbGV0IHN1YnRvdGFsID0gMFxuICBsZXQgc3ViVG90YWxOb0Rpc2NvdW50ID0gMFxuICBsZXQgdGF4ZXMgPSAwXG4gIGxldCB0b3RhbCA9IDBcbiAgbGV0IGRpc2NvdW50VG90YWwgPSAwXG5cbiAgLy8gZm9yIEVhY2ggZWxlbWVudCBhZGRzIHRoZSB2YWx1ZXMgdG8gZ2V0IHRvdGFsc1xuICBpbkNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50ID0gc3ViVG90YWxOb0Rpc2NvdW50ICsgaXRlbS5zdWJUb3RhbE5vRGlzY291bnRcblxuICAgIHN1YnRvdGFsID0gc3VidG90YWwgKyBpdGVtLnN1YnRvdGFsXG5cbiAgICBjb25zdCB0YXhlc0NhbGMgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMgLyAxMDApXG4gICAgICA6IDBcblxuICAgIGNvbnN0IHRheGVzQ2FsYzIgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlczIpXG4gICAgICA/IGl0ZW0uc3VidG90YWwgKiAoaXRlbS5wcm9kdWN0LnRheGVzMiAvIDEwMClcbiAgICAgIDogMFxuXG4gICAgY29uc3QgdGF4ZXNDYWxjMyA9IChpdGVtLnByb2R1Y3QudXNlX3RheGVzMylcbiAgICAgID8gaXRlbS5zdWJ0b3RhbCAqIChpdGVtLnByb2R1Y3QudGF4ZXMzIC8gMTAwKVxuICAgICAgOiAwXG5cbiAgICB0YXhlcyA9IHRheGVzICsgdGF4ZXNDYWxjICsgdGF4ZXNDYWxjMiArIHRheGVzQ2FsYzNcblxuICAgIGRpc2NvdW50VG90YWwgPSBkaXNjb3VudFRvdGFsICsgaXRlbS5kaXNjb3VudEN1cnJlbmN5IC8vIHRoaXMgaXMgdGhlIHZhbHVlIGluIGN1cnJlbmN5XG5cbiAgfSlcbiAgLy8gVE9ETyBDb25maWcgZm9yIHJvdW5kIG9yIG5vdFxuICAvLyB0b3RhbCA9IE1hdGgucm91bmQoc3VidG90YWwgKyB0YXhlcylcbiAgdG90YWwgPSBzdWJ0b3RhbCArIHRheGVzXG4gIC8vIHJldHVycyBhIGRpc3BhdGNoIHdpdGggYSBwYXlsb2FkIG9mIHRoZSBvYnRhaW5lZCB2YWx1ZXNcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVBEQVRFX0NBUlRfVE9UQUxTJyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBzdWJ0b3RhbDogc3VidG90YWwsXG4gICAgICB0YXhlczogdGF4ZXMsXG4gICAgICB0b3RhbDogdG90YWwsXG4gICAgICBkaXNjb3VudFRvdGFsOiBkaXNjb3VudFRvdGFsLFxuICAgICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdWJUb3RhbE5vRGlzY291bnRcbiAgICB9XG4gIH1cbn1cblxuLy8gRmluZHMgYSBjb2RlIGluIHRoZSBjYXJ0IGFuZCBzZW5kcyBhIGRpc3BhdGNoIHRvIHJlbW92ZSBpdCBmcm9tIGNhcnQgYmFzZWQgb24gaW5kZXhcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tQ2FydChpdGVtc0luQ2FydCwgY29kZSkge1xuXG4gIGNvbnN0IGluZGV4SW5DYXJ0ID0gaXRlbXNJbkNhcnQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51dWlkID09IGNvZGUpIC8vIGNoZWNrcyBpZiBwcm9kdWN0IGV4aXN0c1xuXG4gIGNvbnN0IHJlcyA9IChpbmRleEluQ2FydCA9PSAtMSkgLy8gaWYgbm90IGV4aXN0cyBkaXNwYXRjaCBOb3QgRm91bmQsIGlmIGV4aXN0cyBjaGVjayBpZiBhbHJlYWR5IGluIGNhcnRcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX0lOX0NBUlRfTk9UX0ZPVU5EJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ1JFTU9WRV9GUk9NX0NBUlQnLFxuICAgICAgcGF5bG9hZDogaW5kZXhJbkNhcnRcbiAgICB9XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2NhcnQvYWN0aW9ucy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9nZW5lcmFsL2NsaWVudHMvY2xpZW50cy5qc3gnXG5pbXBvcnQgVG90YWxzIGZyb20gJy4uLy4uL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3gnXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuLi9idXR0b25zL2J1dHRvbnMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnVsbFdpZHRoOiBzdG9yZS5zYWxlLmZ1bGxXaWR0aCxcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWxcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzaWRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICB0b2dnbGVXaWR0aCAoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1RPR0dMRV9GVUxMX1dJRFRIJywgcGF5bG9hZDogJyd9KVxuICB9XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBhc2lkZUNsYXNzID0gdGhpcy5wcm9wcy5mdWxsV2lkdGggPyAnc2FsZS1hc2lkZSBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUnXG4gICAgY29uc3QgYXNpZGVDb250YWluZXJDbGFzcyA9IHRoaXMucHJvcHMuZnVsbFdpZHRoID8gJ3NhbGUtYXNpZGUtY29udGVudCBjb2xsYXBzZWQnIDogJ3NhbGUtYXNpZGUtY29udGVudCdcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2FzaWRlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FzaWRlQ29udGFpbmVyQ2xhc3N9PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtYXJyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYWxlLWFzaWRlLWFycm93LWNvbnRhaW5lcicgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8Q2xpZW50IC8+XG4gICAgICAgIDxUb3RhbHMgLz5cbiAgICAgICAgPEJ1dHRvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCdXR0b25zIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NhbGUtYXNpZGUtdG90YWwnID5cbiAgICAgICAg4oKhIHt0aGlzLnByb3BzLnRvdGFsLmZvcm1hdE1vbmV5KCl9XG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1yaWdodCcgb25DbGljaz17dGhpcy50b2dnbGVXaWR0aC5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2FzaWRlL2FzaWRlLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Y2xpZW50U2VsZWN0ZWQsIHNlYXJjaENsaWVudCwgdXNlclNlbGVjdGVkfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQge2dldEl0ZW1EaXNwYXRjaH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHtnZXRDbGllbnREZWJ0fSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9nZXRDbGllbnREZWJ0J1xuaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzLFxuICAgIGNsaWVudFNlbGVjdGVkOiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIGNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2Vyczogc3RvcmUuY2xpZW50cy51c2VycyxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICAvLyBtb3ZlbWVudHM6IHN0b3JlLmNsaWVudG1vdmVtZW50cy5tb3ZlbWVudHMsXG4gICAgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnRcbiAgICAvLyBkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQgIT0gdGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZCkge1xuICAgICAgLy8gc2V0IHRoZSBkaXNjb3VudDogZGVmYXVsdCB2YWx1ZSBvciAwXG5cbiAgICAgIGlmICghbmV4dFByb3BzLmNsaWVudFNlbGVjdGVkLnNhbGVMb2FkZWQpIHtcblxuICAgICAgICBjb25zdCBrd2FyZ3MgPSB7XG4gICAgICAgICAgY2xpZW50X2lkOiBuZXh0UHJvcHMuY2xpZW50U2VsZWN0ZWQuaWQsXG4gICAgICAgICAgc3VjY2VzczogJ1NFVF9DTElFTlRfREVCVCcsXG4gICAgICAgICAgZmFpbDogJ1NFVF9DTElFTlRfREVCVF9GQUlMRUQnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXNjb3VudCA9IG5leHRQcm9wcy5jbGllbnQuZGVmYXVsdERpc2NvdW50ID8gbmV4dFByb3BzLmNsaWVudC5kZWZhdWx0RGlzY291bnQgOiAwXG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KG5leHRQcm9wcy5jYXJ0LCBkaXNjb3VudCwgbmV4dFByb3BzLmNsaWVudCkpXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0Q2xpZW50RGVidChrd2FyZ3MpKVxuXG4gICAgICAgIC8vIFNFVFMgVkFMVUUgT0YgREVGQVVMVCBESVNDT1VOVCBUTyBGSUVMRCBPUiAwXG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xpZW50LmRlZmF1bHREaXNjb3VudCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykudmFsdWUgPSBkaXNjb3VudFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudEZpZWxkJykuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfQ0xJRU5UUycsIHBheWxvYWQ6ICcnfSlcblxuICAgIGNvbnN0IGNsaWVudEt3YXJncyA9IHtcbiAgICAgIHVybDogJy9hcGkvY2xpZW50cycsXG4gICAgICBzdWNjZXNzVHlwZTogJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJyxcbiAgICAgIGVycm9yVHlwZTogJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRJdGVtRGlzcGF0Y2goY2xpZW50S3dhcmdzKSlcblxuICB9XG5cbiAgaW5wdXRLZXlQcmVzcyhldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG4gICAgaWYgKGV2LmtleSA9PSAnRW50ZXInKSB7XG5cbiAgICAgIGNvbnN0IGNvZGUgPSBldi50YXJnZXQudmFsdWUgLy8gU3BsaXQgdmFsIFswXSBpcyBjb2RlIFsxXSBpcyBxdHlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2xpZW50U2VsZWN0ZWQoY29kZSwgdGhpcy5wcm9wcy5jbGllbnRzKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgfVxuXG4gIH1cblxuICB1c2VyU2VsZWN0KGV2KSB7XG4gICAgY29uc3QgX2lkID0gZXYudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1c2VyU2VsZWN0ZWQoX2lkLCB0aGlzLnByb3BzLnVzZXJzKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gIH1cblxuICB1c2VyVW5TZWxlY3QoZXYpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVVNFUl9DTEVBUicsIHBheWxvYWQ6ICcnfSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gIH1cblxuICBzZWFyY2hDbGllbnRDbGljaygpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoQ2xpZW50KCkpXG5cbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gU0VMRUNUMiBEQVRBXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIGNvbnN0IGNsaWVudFRvU2hvdyA9ICh0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkKVxuICAgICAgPyBgJHt0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkLm5hbWV9ICR7dGhpcy5wcm9wcy5jbGllbnRTZWxlY3RlZC5sYXN0X25hbWV9YFxuICAgICAgOiAnQ2xpZW50ZSBDb250YWRvJ1xuXG4gICAgLy8gY29uc3QgY3JlZGl0SWNvbiA9ICh0aGlzLnByb3BzLmNsaWVudFNlbGVjdGVkICYmIHRoaXMucHJvcHMuY2xpZW50U2VsZWN0ZWQuaGFzX2NyZWRpdClcbiAgICAvLyAgID8gJ2ZhIGZhLWNoZWNrLXNxdWFyZSdcbiAgICAvLyAgIDogJ2ZhIGZhLXRpbWVzLWNpcmNsZSdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1pbWcnPlxuICAgICAgICA8aW1nIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3JjPScvbWVkaWEvZGVmYXVsdC9wcm9maWxlLmpwZydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50LWRhdGEnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnQtZGF0YS1yb3cnPlxuICAgICAgICAgIDxoMz5DbGllbnRlIDo8L2gzPlxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25LZXlEb3duPXt0aGlzLmlucHV0S2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudC1kYXRhLXJvdyc+XG4gICAgICAgICAgPGgzPk5vbWJyZSA6PC9oMz5cbiAgICAgICAgICA8c3Bhbj57Y2xpZW50VG9TaG93fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2xpZW50cy9jbGllbnRzLmpzeCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTU9EVUxFIElNUE9SVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhQT1JUIEZVTkNUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIENIRUNLIEZPUiBDTElFTlQgREVCVCBBTkQgRElTUEFUQ0hcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnREZWJ0KGt3YXJncykge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe2NsaWVudF9pZDoga3dhcmdzLmNsaWVudF9pZH0pXG4gICAgLy8gY2FsbHMgdGhlIGZ1bmN0aW9uIGluIGJhY2tlbmQgdG8gY2hlY2sgcGVybWlzc2lvbnNcbiAgICBheGlvcy5wb3N0KCcvYXBpL2dldGNsaWVudGRlYnQvJywgZGF0YSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZFVENISU5HX0RPTkUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBrd2FyZ3Muc3VjY2VzcywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YX0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUicsIGBFcnJvciBhbCBpbnRlbnRhciBvYnRlbmVyIGxhIGRldWRhIGRlbCB1c3VhcmlvLCBwb3IgZmF2b3IgaW50ZW50ZSBkZSBudWV2byBvIGNvbXVuw61xdWVzZSBjb24gZWxcbiAgICAgICAgYWRtaW5pc3RyYWRvciBkZWwgc2lzdGVtYSBjb24gZWwgc2lndWlldGUgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IGt3YXJncy5mYWlsLCBwYXlsb2FkOiAnJ30pXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9nZXRDbGllbnREZWJ0LmpzIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtyZWNhbGNDYXJ0fSBmcm9tICcuLi8uLi9nZW5lcmFsL3Byb2R1Y3QvYWN0aW9ucy5qcydcbmltcG9ydCBhbGVydGlmeSBmcm9tICdhbGVydGlmeWpzJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgY2xpZW50OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gICAgLy8gZGlzYWJsZWQ6IHN0b3JlLnNhbGVzLmNvbXBsZXRlZFxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG90YWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNjb3VudFZhbDogMFxuICAgIH1cbiAgfVxuXG4gIHNob3dJbnZvaWNlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcbiAgICAvLyBpZiBLZXkgcHJlc3NlZCBpZCBFbnRlclxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuXG4gICAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICAgID8gZXYudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogMFxuICAgICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcbiAgICAgIGNvbnN0IG1heERpc2NvdW50ID0gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgPyB0aGlzLnByb3BzLmNsaWVudC5tYXhEaXNjb3VudCA6IDEwMFxuICAgICAgaWYgKGRpc2NvdW50IDw9IG1heERpc2NvdW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlY2FsY0NhcnQodGhpcy5wcm9wcy5pdGVtc0luQ2FydCwgdGhpcy5zdGF0ZS5kaXNjb3VudFZhbCwgdGhpcy5wcm9wcy5jbGllbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnRGaWVsZCcpLnZhbHVlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmdsb2JhbERpc2NvdW50KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmRpc2NvdW50VmFsID0gKGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgPyBwYXJzZUZsb2F0KGV2LnRhcmdldC52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgfVxuXG4gIH1cblxuICBpbnB1dE9uQmx1cihldikge1xuICAgIC8vIGlmIEtleSBwcmVzc2VkIGlkIEVudGVyXG5cbiAgICBjb25zdCBkaXNjb3VudCA9IChldi50YXJnZXQudmFsdWUpXG4gICAgICA/IGV2LnRhcmdldC52YWx1ZVxuICAgICAgOiAwXG4gICAgLy8gQ0FMQyBUSEUgTUFYIERJU0NPVU5UIEFORCBDSEVDS1MgSVQgT04gRklFTERcbiAgICBjb25zdCBtYXhEaXNjb3VudCA9IHRoaXMucHJvcHMuY2xpZW50Lm1heERpc2NvdW50ID8gdGhpcy5wcm9wcy5jbGllbnQubWF4RGlzY291bnQgOiAxMDBcbiAgICBpZiAoZGlzY291bnQgPD0gbWF4RGlzY291bnQpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTRVRfR0xPQkFMX0RJU0NPVU5UJywgcGF5bG9hZDogZGlzY291bnR9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWNhbGNDYXJ0KHRoaXMucHJvcHMuaXRlbXNJbkNhcnQsIHRoaXMuc3RhdGUuZGlzY291bnRWYWwsIHRoaXMucHJvcHMuY2xpZW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYEVsIGRlc2N1ZW50byBwYXJhIGVsIGNsaWVudGUgc2VsZWNjaW9uYWRvIG5vIHB1ZWRlIHNlciBtYXlvciBhbCAke21heERpc2NvdW50fSVgKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc2NvdW50RmllbGQnKS52YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudClcbiAgICB9XG5cbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndG90YWxzJz5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgJ3BhZGRpbmdUb3AnOiAnMCcsXG4gICAgICAgICdtYXJnaW5Ub3AnOiAnMCdcbiAgICAgIH19IGNsYXNzTmFtZT0nYmctd2hpdGUgcmlnaHQtaXRlbSc+XG4gICAgICAgIHsvKiA8c3Bhbj5cbiAgICAgICAgICA8Yj5Ub3RhbGVzOjwvYj5cbiAgICAgICAgPC9zcGFuPjxiciAvPiAqL31cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdG90YWxzLXRhYmxlJz5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5TdWItVG90YWw6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICd3aWR0aCc6ICczNyUnXG4gICAgICAgICAgICAgIH19PkRlc2N1ZW50byAlPC90aD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCdcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD0nZGlzY291bnRGaWVsZCdcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaW5wdXRPbkJsdXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICczN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCAwIDAgMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICdmb250U2l6ZSc6ICcxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2FsZV9nbG9iYWxfZGlzY291bnRfaW5wdXQgZm9ybS1jb250cm9sJyAvPlxuICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+RGVzY3VlbnRvOjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3ByaWNlJz7igqEge3RoaXMucHJvcHMuZGlzY291bnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+SVY6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHsvKiA8dGggb25DbGljaz17dGhpcy5zaG93SW52b2ljZVBhbmVsLmJpbmQodGhpcyl9PlRvdGFsOjwvdGg+ICovfVxuICAgICAgICAgICAgICA8dGg+VG90YWw6PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHJpY2UnPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvdG90YWxzL3RvdGFscy5qc3giLCIvKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtkaXNhYmxlZDogc3RvcmUuc2FsZXMuY29tcGxldGVkfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNob3dQYXlQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd0lub2ljZVBhbmVsKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdTSE9XX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cbiAgc2hvd1NhbGVQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19TQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBzaG93UHJlc2FsZXNQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0hPV19QUkVTQUxFU19QQU5FTCcsIHBheWxvYWQ6IC0xfSlcbiAgfVxuICBuZXdTYWxlKCkge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zYWxlcy9zYWxlJ1xuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdORVdfU0FMRScsIHBheWxvYWQ6IC0xfSlcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICA/IDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dJbm9pY2VQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgICAgRmFjdHVyYVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1tb25leScgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5uZXdTYWxlLmJpbmQodGhpcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgICBOdWV2YSBWZW50YVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1yZWZyZXNoJyAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDogJydcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIGJ1dHRvbnMnPlxuXG4gICAgICB7LyogPHNwYW4+XG4gICAgICAgIDxiPlBhZ286PGJyIC8+PC9iPlxuICAgICAgPC9zcGFuPiAqL31cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17dGhpcy5zaG93UGF5UGFuZWwuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnLFxuICAgICAgICAgICd3aWR0aCc6ICc0OSUnLFxuICAgICAgICAgICdtYXJnaW5Ub3AnOiAnMTBweCdcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQgYnV0dG9ucy1wYXlCdXR0b24nPlxuICAgICAgICBDb2JyYXJcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1NhbGVQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgJ3dpZHRoJzogJzQ5JScsXG4gICAgICAgICAgJ21hcmdpblRvcCc6ICcxMHB4J1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBidXR0b25zLXBheUJ1dHRvbic+XG4gICAgICAgIFZlbnRhcyBkZWwgZMOtYVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQcmVzYWxlc1BhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAnd2lkdGgnOiAnNDklJyxcbiAgICAgICAgICAnbWFyZ2luVG9wJzogJzEwcHgnXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbnMtcGF5QnV0dG9uJz5cbiAgICAgICAgUHJlLVZlbnRhc1xuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWxpc3QnIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7YnV0dG9uc31cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL2J1dHRvbnMvYnV0dG9ucy5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMudmlzaWJsZX1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBwYW5lbENsaWNrKGV2KSB7XG5cbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2QtcGFuZWwnKSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gICAgICBNb3VzZXRyYXAudW5iaW5kKCdlc2MnKVxuICAgIH1cblxuICB9XG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHZpc2libGVPck5vdCA9ICh0aGlzLnByb3BzLnZpc2libGUpXG4gICAgICA/ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtcHJvZHVjdCBmcm9tLWxlZnQgaXMtdmlzaWJsZSdcbiAgICAgIDogJ2NkLXBhbmVsIGNkLXBhbmVsLXNlYXJjaC1wcm9kdWN0IGZyb20tbGVmdCdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dmlzaWJsZU9yTm90fSBvbkNsaWNrPXt0aGlzLnBhbmVsQ2xpY2suYmluZCh0aGlzKX0+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjZC1wYW5lbC1oZWFkZXInPlxuICAgICAgICA8aDE+QsO6c3F1ZWRhIGRlIFByb2R1Y3RvPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoUGFuZWwuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtzZWFyY2hQcm9kdWN0fSBmcm9tICcuL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdG9yZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICBzZWFyY2hWYWx1ZTogc3RvcmUuc2VhcmNoUHJvZHVjdHMuc2VhcmNoVmFsdWVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbDogJydcbiAgICB9XG4gIH1cblxuICBpbnB1dEtleVByZXNzKGV2KSB7XG5cbiAgICBpZiAoZXYua2V5ID09ICdFbnRlcicpIHtcblxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0QWN0aW9uKClcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0RVQ1RfU0VBUkNIX0ZJRUxEX1ZBTFVFJywgcGF5bG9hZDogZXYudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgfVxuXG4gIHNlYXJjaFByb2R1Y3RBY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hQcm9kdWN0KHRoaXMucHJvcHMuc2VhcmNoVmFsdWUsIHRoaXMucHJvcHMucHJvZHVjdHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHJvZHVjdC1zZWFyY2gtaW5wdXQnPkLDunNxdWVkYSBwb3IgRGVzY3JpcGNpw7NuOjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHJvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IGNvbC1zbS04Jz5cbiAgICAgICAgICAgIDxpbnB1dCBvbktleURvd249e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFZhbHVlfSB0eXBlPSd0ZXh0JyBzdHlsZT17e1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJSdcbiAgICAgICAgICAgIH19IGlkPSdwcm9kdWN0LXNlYXJjaC1pbnB1dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5wdXQtbGcgbW91c2V0cmFwJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMic+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2VhcmNoUHJvZHVjdEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdwcm9kdWN0LXNlYXJjaC1idG4nIHN0eWxlPXt7XG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCcsXG4gICAgICAgICAgICAgICd3aWR0aCc6ICc0OHB4J1xuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgZm9ybS1jb250cm9sIG1hcmdpbkJ0bkFkZDInPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvc2VhcmNoRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3Byb2R1Y3RTZWxlY3RlZFRhYmxlLCBoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7bWF0Y2hlczogc3RvcmUuc2VhcmNoUHJvZHVjdHMucHJvZHVjdHNNYXRjaGVkLCBwcm9kdWN0czogc3RvcmUucHJvZHVjdHMucHJvZHVjdHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVzdWx0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzZWxlY3RQcm9kdWN0KGNvZGUsIGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0U2VsZWN0ZWRUYWJsZShjb2RlKSkgLy8gZGlzcGF0Y2hzIGFjdGlvbiBhY2NvcmRpbmcgdG8gcmVzdWx0XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlUGFuZWwoKSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RQcm9kdWN0LmJpbmQodGhpcywgaXRlbS5jb2RlKX0ga2V5PXtpdGVtLmNvZGV9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2l0ZW0uY29kZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5zZWxscHJpY2V9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgfSlcblxuICAgIHJldHVybiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdjb2wtc20tMTIgZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMic+XG4gICAgICAgICAgPHRhYmxlIGlkPSdwcm9kdWN0ZS1zZWFyY2gtdGFibGUnIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwY2nDs248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5QcmVjaW88L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0ncHJvZHVjdC1zZWFyY2gtdGFibGUtYm9keSc+XG4gICAgICAgICAgICAgIHtwcm9kdWN0c31cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL3Byb2R1Y3RzL3Jlc3VsdHNUYWJsZS5qc3giLCIvKiBNb2R1bGUgZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2hpZGVQYW5lbH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtLmpzeCdcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSAnLi9yZXN1bHRzVGFibGUuanN4J1xuY29uc3QgTW91c2V0cmFwID0gcmVxdWlyZSgnbW91c2V0cmFwJylcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7dmlzaWJsZTogc3RvcmUuc2VhcmNoQ2xpZW50cy52aXNpYmxlfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoQ2xpZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcGFuZWxDbGljayhldikge1xuXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NkLXBhbmVsJykpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goaGlkZVBhbmVsKCkpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdENvZGVJbnB1dEZpZWxkJykuZm9jdXMoKVxuICAgICAgTW91c2V0cmFwLnVuYmluZCgnZXNjJylcbiAgICB9XG5cbiAgfVxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB2aXNpYmxlT3JOb3QgPSAodGhpcy5wcm9wcy52aXNpYmxlKVxuICAgICAgPyAnY2QtcGFuZWwgY2QtcGFuZWwtc2VhcmNoLWNsaWVudCBmcm9tLXJpZ2h0IGlzLXZpc2libGUnXG4gICAgICA6ICdjZC1wYW5lbCBjZC1wYW5lbC1zZWFyY2gtY2xpZW50IGZyb20tcmlnaHQnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Zpc2libGVPck5vdH0gb25DbGljaz17dGhpcy5wYW5lbENsaWNrLmJpbmQodGhpcyl9PlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nY2QtcGFuZWwtaGVhZGVyJz5cbiAgICAgICAgPGgxPkLDunNxdWVkYSBkZSBDbGllbnRlPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2QtcGFuZWwtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NkLXBhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblxuICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICAgIDxSZXN1bHRzVGFibGUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9zZWFyY2hQYW5lbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NlYXJjaENsaWVudH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtjbGllbnRzOiBzdG9yZS5jbGllbnRzLmNsaWVudHN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGlucHV0S2V5UHJlc3MoZXYpIHtcblxuICAgIGlmIChldi5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWFyY2hDbGllbnRBY3Rpb24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbCA9IGV2LnRhcmdldC52YWx1ZVxuICAgIH1cblxuICB9XG5cbiAgc2VhcmNoQ2xpZW50QWN0aW9uKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuc3RhdGUuc2VhcmNoVmFsXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWFyY2hDbGllbnQodmFsLCB0aGlzLnByb3BzLmNsaWVudHMpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2xpZW50LXNlYXJjaC1pbnB1dCc+QsO6c3F1ZWRhIHBvciBOb21icmU6PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgY29sLXNtLTgnPlxuICAgICAgICAgICAgPGlucHV0IG9uS2V5UHJlc3M9e3RoaXMuaW5wdXRLZXlQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEtleVByZXNzLmJpbmQodGhpcyl9IHR5cGU9J3RleHQnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJ1xuICAgICAgICAgICAgfX0gaWQ9J2NsaWVudC1zZWFyY2gtaW5wdXQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucHV0LWxnIG1vdXNldHJhcCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTInPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaENsaWVudEFjdGlvbi5iaW5kKHRoaXMpfSB0eXBlPSdidXR0b24nIGlkPSdjbGllbnQtc2VhcmNoLWJ0bicgc3R5bGU9e3tcbiAgICAgICAgICAgICAgJ2hlaWdodCc6ICc0OHB4JyxcbiAgICAgICAgICAgICAgJ3dpZHRoJzogJzQ4cHgnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBmb3JtLWNvbnRyb2wgbWFyZ2luQnRuQWRkMic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9jbGllbnRzL3NlYXJjaEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtjbGllbnRTZWxlY3RlZH0gZnJvbSAnLi4vLi4vY2xpZW50cy9hY3Rpb25zLmpzJ1xuaW1wb3J0IHtoaWRlUGFuZWx9IGZyb20gJy4vYWN0aW9ucy5qcydcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7bWF0Y2hlczogc3RvcmUuc2VhcmNoQ2xpZW50cy5jbGllbnRzTWF0Y2hlZCwgY2xpZW50czogc3RvcmUuY2xpZW50cy5jbGllbnRzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlc3VsdHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2VsZWN0Q2xpZW50KGNvZGUsIGV2KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGllbnRTZWxlY3RlZChjb2RlLCB0aGlzLnByb3BzLmNsaWVudHMpKSAvLyBkaXNwYXRjaHMgYWN0aW9uIGFjY29yZGluZyB0byByZXN1bHRcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVQYW5lbCgpKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Q29kZUlucHV0RmllbGQnKS5mb2N1cygpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjbGllbnRzID0gdGhpcy5wcm9wcy5tYXRjaGVzLm1hcCgoaXRlbSkgPT4ge1xuXG4gICAgICBjb25zdCBoYXNDcmVkaXQgPSAoaXRlbS5oYXNfY3JlZGl0KVxuICAgICAgICA/ICdTSSdcbiAgICAgICAgOiAnTk8nXG5cbiAgICAgIHJldHVybiA8dHIgb25Eb3VibGVDbGljaz17dGhpcy5zZWxlY3RDbGllbnQuYmluZCh0aGlzLCBpdGVtLmNvZGUpfSBrZXk9e2l0ZW0uY29kZX0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5jb2RlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2Ake2l0ZW0ubmFtZX0gJHtpdGVtLmxhc3RfbmFtZX1gfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge2hhc0NyZWRpdH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDBcbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxmb3JtIGFjdGlvbj0nJyBjbGFzc05hbWU9J2NvbC1zbS0xMiBmb3JtLWhvcml6b250YWwnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyJz5cbiAgICAgICAgICA8dGFibGUgaWQ9J2NsaWVudGUtc2VhcmNoLXRhYmxlJyBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Dw7NkaWdvPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Tm9tYnJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+Q3LDqWRpdG88L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5TYWxkbzwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPSdjbGllbnQtc2VhcmNoLXRhYmxlLWJvZHknPlxuICAgICAgICAgICAgICB7Y2xpZW50c31cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVzdWx0c1RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBQYXlNZXRob2QgZnJvbSAnLi9jb21wb25lbnRzL3BheU1ldGhvZC5qc3gnXG5pbXBvcnQgUGF5Q2FzaCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2Focy5qc3gnXG5pbXBvcnQgUGF5Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvcGF5Q2FyZC5qc3gnXG5pbXBvcnQgUGF5Q3JlZGl0IGZyb20gJy4vY29tcG9uZW50cy9wYXlDcmVkaXQuanN4J1xuaW1wb3J0IFBheU90aGVyIGZyb20gJy4vY29tcG9uZW50cy9wYXlPdGhlci5qc3gnXG5pbXBvcnQgUGF5U2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3gnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BhbmVsVmlzaWJsZTogc3RvcmUucGF5LmlzVmlzaWJsZSwgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheVBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBoaWRlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXG4gICAgICA/ICdwYXktcGFuZWwgaXMtdmlzaWJsZSdcbiAgICAgIDogJ3BheS1wYW5lbCdcblxuICAgIGxldCBwYXlNZXRob2QgPSAnJ1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wYXlNZXRob2QpIHtcblxuICAgICAgY2FzZSAnQ0FTSCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXNoIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgICAgY2FzZSAnQ0FSRCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDYXJkIC8+XG4gICAgICAgIGJyZWFrXG4gICAgICB9IC8vIGNhc2VcblxuICAgICAgY2FzZSAnQ1JFRCc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlDcmVkaXQgLz5cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gLy8gIGNhc2VcblxuICAgICAgY2FzZSAnT1RIRSc6XG4gICAgICB7XG4gICAgICAgIHBheU1ldGhvZCA9IDxQYXlPdGhlciAvPlxuICAgICAgICBicmVha1xuICAgICAgfSAvLyBjYXNlXG5cbiAgICB9IC8vIHN3aXRjaFxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGV9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLW1haW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXBhbmVsLWhlYWRlcic+XG4gICAgICAgICAgUmVnaXN0cmFyIFBhZ29cbiAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLmhpZGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBheU1ldGhvZCAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktYXJlYS1jb250YWluZXInPlxuXG4gICAgICAgICAge3BheU1ldGhvZH1cblxuICAgICAgICAgIDxQYXlTaWRlQmFyIC8+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L3BheVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3BheU1ldGhvZDogc3RvcmUucGF5LnBheU1ldGhvZH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXlNZXRob2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNsaWNrQ2hhbmdlUGF5TWV0aG9kKG1ldGhvZCwgZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdDSEFOR0VfUEFZX01FVEhPRCcsIHBheWxvYWQ6IG1ldGhvZH0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QnPlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ0FTSCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ0FTSCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPkVmZWN0aXZvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1vbmV5JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDQVJEJyl9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMucGF5TWV0aG9kID09ICdDQVJEJ1xuICAgICAgICA/ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtIHNlbGVjdGVkJ1xuICAgICAgICA6ICdwYXktbWV0aG9kLXNlbGVjdC1pdGVtJyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLXNlbGVjdC1pdGVtLWhlYWRlcic+XG4gICAgICAgICAgPHNwYW4+VGFyamV0YTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1jcmVkaXQtY2FyZCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogb25DbGljaz17dGhpcy5jbGlja0NoYW5nZVBheU1ldGhvZC5iaW5kKHRoaXMsICdDUkVESVQnKX0gKi99XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGFuZ2VQYXlNZXRob2QuYmluZCh0aGlzLCAnQ1JFRCcpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnQ1JFRCdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPkNyw6lkaXRvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXJzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBvbkNsaWNrPXt0aGlzLmNsaWNrQ2hhbmdlUGF5TWV0aG9kLmJpbmQodGhpcywgJ09USEVSJyl9ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnBheU1ldGhvZCA9PSAnT1RIRSdcbiAgICAgICAgPyAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbSBzZWxlY3RlZCdcbiAgICAgICAgOiAncGF5LW1ldGhvZC1zZWxlY3QtaXRlbScpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1zZWxlY3QtaXRlbS1oZWFkZXInPlxuICAgICAgICAgIDxzcGFuPk90cm88L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2hhcmUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU1ldGhvZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhc2hBbW91bnR9IGZyb20gJy4uL2FjdGlvbnMuanMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2Nhc2hBbW91bnQ6IHN0b3JlLnBheS5jYXNoQW1vdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUFtb3VudENoYW5nZWQoZXYpIHtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RvcmVDYXNoQW1vdW50KGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keSc+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+RWZlY3Rpdm88L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5FRkVDVElWTzo8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnByb3BzLmNhc2hBbW91bnR9IG9uQ2hhbmdlPXt0aGlzLnBheUFtb3VudENoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5Q2Focy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1cGRhdGVTdG9yZUNhcmRBdXRoLCB1cGRhdGVTdG9yZUNhcmREaWdpdHN9IGZyb20gJy4uL2FjdGlvbnMnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NhcmRBdXRoOiBzdG9yZS5wYXkuY2FyZEF1dGgsIGNhcmREaWdpdHM6IHN0b3JlLnBheS5jYXJkRGlnaXRzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHBheUNhcmRBdXRoQ2hhbmdlZChldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmRBdXRoKGV2LnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICBwYXlDYXJkRGlnaXRzQ2hhbmdlZChldikge1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdG9yZUNhcmREaWdpdHMoZXYudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5UYXJqZXRhPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktY29udGVudCc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+NCBESUdJVE9TOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FyZERpZ2l0c30gb25DaGFuZ2U9e3RoaXMucGF5Q2FyZERpZ2l0c0NoYW5nZWQuYmluZCh0aGlzKX0gdHlwZT0nTnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LXRhZyBsZWZ0Jz5BVVRPUklaQUNJw5NOOjwvZGl2PlxuICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMucHJvcHMuY2FyZEF1dGh9IG9uQ2hhbmdlPXt0aGlzLnBheUNhcmRBdXRoQ2hhbmdlZC5iaW5kKHRoaXMpfSB0eXBlPSdOdW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDYXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2NsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCwgZGVidDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZERlYnR9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5Q3JlZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXG4gICAgY29uc3QgY2xpZW50TGltaXQgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XG4gICAgICA/IGDigqEgJHtwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2xpZW50LmNyZWRpdF9saW1pdCkuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcbiAgICBjb25zdCBjbGllbnRBdmFpbGFibGUgPSB0aGlzLnByb3BzLmNsaWVudC5oYXNfY3JlZGl0XG4gICAgICA/IGDigqEgJHthdmFpbGFibGUuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfWBcbiAgICAgIDogJ1NJTiBDUsOJRElUTydcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5Jz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1oZWFkZXInPlxuICAgICAgICA8c3Bhbj5DcsOpZGl0bzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkzDjU1JVEU6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICB7Y2xpZW50TGltaXR9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPkRJU1BPTklCTEU6PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIHJpZ2h0Jz5cbiAgICAgICAgICB7Y2xpZW50QXZhaWxhYmxlfTwvZGl2PlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvY29tcG9uZW50cy9wYXlDcmVkaXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheU90aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHknPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWhlYWRlcic+IDxzcGFuPk90cm88L3NwYW4+IDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS1tZXRob2QtYm9keS1jb250ZW50Jz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3BheS9jb21wb25lbnRzL3BheU90aGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7c2F2ZUl0ZW0sIGxvYWRTYWxlfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgc2F2ZUl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9hcGknXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFNhdmVCdG4gZnJvbSAnLi4vLi4vc2F2ZS9zYXZlLmpzeCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxuICAgIHBheTogc3RvcmUucGF5LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxuICAgIC8vIHNhbGVzOiBzdG9yZS5zYWxlcy5zYWxlcyxcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcbiAgICAvLyBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50c1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5U2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2F2ZUJ0bigpIHtcbiAgICAvLyBjb25zdCBzYWxlcyA9IHRoaXMucHJvcHMuc2FsZXNcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG4gICAgY29uc3Qgc2FsZSA9IHtcbiAgICAgIGNhcnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2FydCksXG4gICAgICBjbGllbnQ6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2xpZW50KSxcbiAgICAgIHVzZXI6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMudXNlciksXG4gICAgICBwYXk6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucGF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcpIHtcbiAgICAgIHNhbGUucGF5LmRlYnQgPSB0aGlzLnByb3BzLmNhcnQuY2FydFRvdGFsXG4gICAgICBzYWxlLnBheS5wYXllZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3Qga3dhcmdzID0ge1xuICAgICAgdXJsOiAnL2FwaS9zYWxlcy8nLFxuICAgICAgaXRlbTogc2FsZSxcbiAgICAgIGxvZ0NvZGU6ICdTQUxFX0NSRUFURScsXG4gICAgICBsb2dEZXNjcmlwdGlvbjogJ0NyZWFjacOzbiBkZSBudWV2YSBWZW50YScsXG4gICAgICBsb2dNb2RlbDogJ1NBTEUnLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGl0ZW1PbGQ6ICcnLFxuICAgICAgc3VjZXNzTWVzc2FnZTogJ1ZlbnRhIGNyZWFkYSBDb3JyZWN0YW1lbnRlLicsXG4gICAgICBlcnJvck1lc3NhZ2U6ICdIdWJvIHVuIGVycm9yIGFsIGNyZWFyIGxhIFZlbnRhLCBpbnRlbnRlIGRlIG51ZXZvLicsXG4gICAgICBkaXNwYXRjaFR5cGU6ICdDTEVBUl9TQUxFJyxcbiAgICAgIGlzU2FsZTogdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19TVEFSVEVEJywgcGF5bG9hZDogJyd9KVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2F2ZUl0ZW0oa3dhcmdzKSlcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9QQVlfUEFORUwnLCBwYXlsb2FkOiAnJ30pXG5cbiAgICBNb3VzZXRyYXAucmVzZXQoKVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gMFxuICAgIGxldCBwYXlCdXR0b25DbGFzcyA9ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgY29uc3QgdG90YWwgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWwpXG4gICAgY29uc3QgY2FzaCA9IHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wYXkuY2FzaEFtb3VudClcblxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wYXlNZXRob2QpIHtcblxuICAgICAgY2FzZSAnQ0FTSCc6XG4gICAgICB7XG4gICAgICAgIGNoYW5nZSA9IGNhc2ggLSB0b3RhbFxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgY2hhbmdlID49IDApXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ0NBUkQnOlxuICAgICAge1xuICAgICAgICBjb25zdCBhdXRoID0gdGhpcy5wcm9wcy5wYXkuY2FyZEF1dGhcbiAgICAgICAgY29uc3QgZGlnaXRzID0gdGhpcy5wcm9wcy5wYXkuY2FyZERpZ2l0c1xuICAgICAgICBjaGFuZ2UgPSBwYXJzZUZsb2F0KHRoaXMucHJvcHMucGF5LmNhc2hBbW91bnQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnRvdGFsKVxuICAgICAgICBwYXlCdXR0b25DbGFzcyA9ICh0b3RhbCA+IDAgJiYgYXV0aCAmJiBkaWdpdHMpXG4gICAgICAgICAgPyAncGF5LXRhZyB0YWctYnV0dG9uIGVuYWJsZSdcbiAgICAgICAgICA6ICdwYXktdGFnIHRhZy1idXR0b24nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdDUkVEJzpcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmNsaWVudC5jcmVkaXRfbGltaXQpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRlYnQpXG4gICAgICAgIHBheUJ1dHRvbkNsYXNzID0gKHRvdGFsID4gMCAmJiB0b3RhbCA8PSBhdmFpbGFibGUgJiYgdGhpcy5wcm9wcy5jbGllbnQuaGFzX2NyZWRpdClcbiAgICAgICAgICA/ICdwYXktdGFnIHRhZy1idXR0b24gZW5hYmxlJ1xuICAgICAgICAgIDogJ3BheS10YWcgdGFnLWJ1dHRvbidcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncGF5LXNpZGUtYmFyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktbWV0aG9kLWJvZHktaGVhZGVyJz5cbiAgICAgICAgPHNwYW4+UGFnbzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LW1ldGhvZC1ib2R5LWNvbnRlbnQnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktdGFnIGxlZnQnPlxuICAgICAgICAgIFRPVEFMIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIOKCoSB7dGhpcy5wcm9wcy5jYXJ0LmNhcnRUb3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgbGVmdCc+VlVFTFRPIDo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheS10YWcgcmlnaHQnPlxuICAgICAgICAgIOKCoSB7Y2hhbmdlLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L2Rpdj5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8U2F2ZUJ0biBwYXlCdXR0b25DbGFzcz17cGF5QnV0dG9uQ2xhc3N9IC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL3NhbGUvcGF5L2NvbXBvbmVudHMvcGF5U2lkZUJhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge3NhdmVJdGVtLCBsb2FkU2FsZX0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCB7IHNhdmVJdGVtIH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmNvbnN0IE1vdXNldHJhcCA9IHJlcXVpcmUoJ21vdXNldHJhcCcpXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnQ6IHN0b3JlLmNhcnQsXG4gICAgcGF5TWV0aG9kOiBzdG9yZS5wYXkucGF5TWV0aG9kLFxuICAgIHBheTogc3RvcmUucGF5LFxuICAgIGNsaWVudDogc3RvcmUuY2xpZW50cy5jbGllbnRTZWxlY3RlZCxcbiAgICB1c2VyOiBzdG9yZS5jbGllbnRzLnVzZXJTZWxlY3RlZCxcbiAgICBkZWJ0OiBzdG9yZS5jbGllbnRzLmNsaWVudFNlbGVjdGVkRGVidFxuICAgIC8vIHNhbGVzOiBzdG9yZS5zYWxlcy5zYWxlcyxcbiAgICAvLyBzYWxlSWQ6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmVJZCxcbiAgICAvLyBzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlLFxuICAgIC8vIG1vdmVtZW50czogc3RvcmUuY2xpZW50bW92ZW1lbnRzLm1vdmVtZW50c1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZUJ0biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc2F2ZUJ0bigpIHtcbiAgICAvLyBjb25zdCBzYWxlcyA9IHRoaXMucHJvcHMuc2FsZXNcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG4gICAgY29uc3QgcGF5ZWQgPSAhKHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCA9PSAnQ1JFRCcpXG5cbiAgICBjb25zdCBzYWxlID0ge1xuICAgICAgY2FydDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jYXJ0KSxcbiAgICAgIGNsaWVudDogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpLFxuICAgICAgdXNlcjogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy51c2VyKSxcbiAgICAgIHBheTogSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5wYXkpLFxuICAgICAgcGF5X3R5cGU6IHRoaXMucHJvcHMucGF5LnBheU1ldGhvZCxcbiAgICAgIHBheWVkOiBwYXllZCxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5wcm9wcy5jbGllbnQuaWRcbiAgICB9XG5cbiAgICBjb25zdCBjcmVkaXRNb3ZlbWVudCA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5wcm9wcy5jbGllbnQuaWQsXG4gICAgICBtb3ZlbWVudF90eXBlOiAnQ1JFRCcsXG4gICAgICBhbW91bnQ6IHRoaXMucHJvcHMuY2FydC5jYXJ0VG90YWxcbiAgICB9XG5cbiAgICBjb25zdCBrd2FyZ3MgPSB7XG4gICAgICB1cmw6ICcvYXBpL3NhbGVzLycsXG4gICAgICBpdGVtOiBzYWxlLFxuICAgICAgbG9nQ29kZTogJ1NBTEVfQ1JFQVRFJyxcbiAgICAgIGxvZ0Rlc2NyaXB0aW9uOiAnQ3JlYWNpw7NuIGRlIG51ZXZhIFZlbnRhJyxcbiAgICAgIGxvZ01vZGVsOiAnU0FMRScsXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgaXRlbU9sZDogJycsXG4gICAgICBzdWNlc3NNZXNzYWdlOiAnVmVudGEgY3JlYWRhIENvcnJlY3RhbWVudGUuJyxcbiAgICAgIGVycm9yTWVzc2FnZTogJ0h1Ym8gdW4gZXJyb3IgYWwgY3JlYXIgbGEgVmVudGEsIGludGVudGUgZGUgbnVldm8uJyxcbiAgICAgIGNyZWRpdE1vdmVtZW50OiBjcmVkaXRNb3ZlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IF90aGlzID0gdGhpc1xuXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnRkVUQ0hJTkdfU1RBUlRFRCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKHNhdmVJdGVtKGt3YXJncywgcmVzb2x2ZSwgcmVqZWN0KSlcbiAgICB9KVxuXG4gICAgdXBkYXRlUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdISURFX1BBWV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdGRVRDSElOR19ET05FJywgcGF5bG9hZDogJyd9KVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ1NIT1dfSU5WT0lDRV9QQU5FTCcsIHBheWxvYWQ6ICcnfSlcbiAgICAgIE1vdXNldHJhcC5yZXNldCgpXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9e3RoaXMuc2F2ZUJ0bi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGF5QnV0dG9uQ2xhc3N9PlxuICAgICAgUmVnaXN0cmFyXG4gICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNyZWRpdC1jYXJkJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9zYXZlL3NhdmUuanN4IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNT0RVTEUgSU1QT1JUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgc2F2ZUxvZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2FwaSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTQVZFIEZVTkNUSU9OIChDUkVBVEUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSXRlbShrd2FyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuICBjb25zdCBpdGVtID0ga3dhcmdzLml0ZW1cbiAgZGVsZXRlIGl0ZW1bJ2lkJ11cbiAgY29uc3QgdXJsID0ga3dhcmdzLnVybFxuICBjb25zdCBsb2dDb2RlID0ga3dhcmdzLmxvZ0NvZGVcbiAgY29uc3QgaXRlbU9sZCA9IGt3YXJncy5pdGVtT2xkXG4gIGNvbnN0IGxvZ01vZGVsID0ga3dhcmdzLmxvZ01vZGVsXG4gIGNvbnN0IGxvZ0Rlc2NyaXB0aW9uID0ga3dhcmdzLmxvZ0Rlc2NyaXB0aW9uXG4gIGNvbnN0IHVzZXIgPSBrd2FyZ3MudXNlclxuXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGl0ZW1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgc2F2ZUxvZyhsb2dDb2RlLCBsb2dNb2RlbCwgaXRlbU9sZCwgaXRlbSwgbG9nRGVzY3JpcHRpb24sIHVzZXIpXG5cbiAgICAgICAgLy8gSUYgVEhFIFNBTEUgSVMgQSBDUkVESVQgT05FIFNBVkUgQ1JFRElUIE1PVkVNRU5UXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnBheV90eXBlID09ICdDUkVEJykge1xuICAgICAgICAgIGNvbnN0IGNyZWRpdE1vdmVtZW50ID0ga3dhcmdzLmNyZWRpdE1vdmVtZW50XG4gICAgICAgICAgY3JlZGl0TW92ZW1lbnQuYmlsbF9pZCA9IHJlc3BvbnNlLmRhdGEuaWRcbiAgICAgICAgICBjcmVkaXRNb3ZlbWVudC5kZXNjcmlwdGlvbiA9IGBWZW50YSBkZSBjcsOpZGl0byAjJHtyZXNwb25zZS5kYXRhLmJpbGxfbnVtYmVyfWBcbiAgICAgICAgICBzYXZlQ3JlZGl0TW92ZW1lbnQoY3JlZGl0TW92ZW1lbnQsIHJlc3BvbnNlLmRhdGEsIGt3YXJncywgZGlzcGF0Y2gsIHJlc29sdmUsIHJlamVjdClcblxuICAgICAgICAvLyBJRiBJUyBDQVNIIFRIRU4gSlVTVCBSRVNPTFZFXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdDTEVBUl9TQUxFJywgcGF5bG9hZDogJyd9KVxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1NBTEUnLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSlcbiAgICAgICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZWplY3QoKVxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgfSlcblxuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVDcmVkaXRNb3ZlbWVudChtb3ZlbWVudCwgc2FsZSwga3dhcmdzLCBkaXNwYXRjaCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2NyZWRpdG1vdmVtZW50cy8nLFxuICAgIGRhdGE6IG1vdmVtZW50XG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1NBTEUnLCBwYXlsb2FkOiAnJ30pXG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9TQUxFJywgcGF5bG9hZDogc2FsZX0pXG4gICAgICBhbGVydGlmeS5hbGVydCgnQ29tcGxldGFkbycsIGt3YXJncy5zdWNlc3NNZXNzYWdlKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKVxuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0Vycm9yJywgYCR7a3dhcmdzLmVycm9yTWVzc2FnZX0gRVJST1I6ICR7ZXJyfS5gKVxuICAgICAgcmVqZWN0KClcbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3NhdmUvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2xvYWRHbG9iYWxDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2FwaS5qcydcbmltcG9ydCBGdWxsSW52b2ljZSBmcm9tICcuLi9mdWxsSW52b2ljZS9mdWxsSW52b2ljZS5qc3gnXG5pbXBvcnQgQ29tcGFjdEludm9pY2UgZnJvbSAnLi4vY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtwYW5lbFZpc2libGU6IHN0b3JlLmludm9pY2UuaXNWaXNpYmxlLCBpc0Z1bGw6IHN0b3JlLmludm9pY2UuaXNGdWxsfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9pY2VQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvYWRHbG9iYWxDb25maWcoJ2NvbXBhbnknLCBmYWxzZSwgJ0ZFVENIX0NPTkZJR19GVUxGSUxMRUQnLCAnRkVUQ0hfQ09ORklHX1JFSkVDVEVEJykpXG4gIH1cblxuICBoaWRlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnSElERV9JTlZPSUNFX1BBTkVMJywgcGF5bG9hZDogLTF9KVxuICAgIC8vIHByaW50RGl2KCdmdWxsLWludm9pY2UtcHJpbnQnKVxuICB9XG5cbiAgdG9nZ2xlUGFuZWwoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfUEFORUwnLCBwYXlsb2FkOiAtMX0pXG5cbiAgfVxuXG4gIHRvZ2dsZUludm9pY2UoKSB7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnVE9HR0xFX0lOVk9JQ0VfREVTSU5HJywgcGF5bG9hZDogLTF9KVxuXG4gIH1cblxuICBwcmludFBhbmVsKCkge1xuICAgIHdpbmRvdy5wcmludERpdignaW52b2ljZS1wcmludCcpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSAodGhpcy5wcm9wcy5wYW5lbFZpc2libGUpXG4gICAgICA/ICdpbnZvaWNlLXBhbmVsIGlzLXZpc2libGUnXG4gICAgICA6ICdpbnZvaWNlLXBhbmVsJ1xuICAgIGNvbnN0IGlzRnVsbENsYXNzID0gKHRoaXMucHJvcHMuaXNGdWxsKVxuICAgICAgPyAnJ1xuICAgICAgOiAnIGNvbXBhY3QtaW52b2ljZS1vbidcblxuICAgIGNvbnN0IGNvbXBvbmVudFRvTW91bnQgPSAodGhpcy5wcm9wcy5pc0Z1bGwpXG4gICAgICA/IDxGdWxsSW52b2ljZSAvPlxuICAgICAgOiA8Q29tcGFjdEludm9pY2UgLz5cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlfT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9eydpbnZvaWNlLXBhbmVsLW1haW4nICsgaXNGdWxsQ2xhc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZS1wYW5lbC1oZWFkZXInPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBGYWN0dXJhIGRlIFZlbnRhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMuaGlkZVBhbmVsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZmEgZmEtdGltZXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPGkgb25DbGljaz17dGhpcy50b2dnbGVQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLWZpbGUtdGV4dC1vJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMucHJpbnRQYW5lbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2ZhIGZhLXByaW50JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIHsvKiA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUludm9pY2UuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdmYSBmYS1jb2ZmZWUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0naW52b2ljZS1wcmludCcgY2xhc3NOYW1lPXsnaW52b2ljZS1wYW5lbC1jb250YWluZXInICsgaXNGdWxsQ2xhc3N9PlxuXG4gICAgICAgICAge2NvbXBvbmVudFRvTW91bnR9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9pbnZvaWNlUGFuZWwvaW52b2ljZVBhbmVsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBEYXRhIGZyb20gJy4vY29tcG9uZW50cy9kYXRhLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsSW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvZnVsbEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gQ3JlZGl0IG9yIGNhc2hcbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuICAgIC8vIExPR09cbiAgICBjb25zdCBsb2dvID0gdGhpcy5wcm9wcy5jb21wYW55LmxvZ28gfHwgJydcbiAgICBjb25zdCBsb2dvV2lkdGggPSB0aGlzLnByb3BzLmNvbXBhbnkubG9nb1dpZHRoIHx8ICcxMzBweCdcbiAgICBjb25zdCBsb2dvVXJsID0gYC9tZWRpYS9sb2dvcy8ke2xvZ299YFxuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxfbmFtZSB8fCAnJ1xuICAgIGNvbnN0IGhlYWRlck5hbWUyID0gdGhpcy5wcm9wcy5jb21wYW55LmxlZ2FsX25hbWUgfHwgJydcblxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnUEVSU09OJ1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICcnXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXG5cbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtaW52b2ljZS1oZWFkZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWxvZ28nPlxuICAgICAgICAgIDxpbWcgc3R5bGU9e3snd2lkdGgnOiBgJHtsb2dvV2lkdGh9YH19IHNyYz17bG9nb1VybH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtaGVhZGVyLWluZm8nPlxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZS50b1VwcGVyQ2FzZSgpfTwvaDI+XG4gICAgICAgICAgPGgzPntoZWFkZXJOYW1lMn08L2gzPlxuICAgICAgICAgIDxoMz57aWRUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczEgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5hZGRyZXNzMiB8fCAnJ308L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmNvdW50cnkgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RlbHNUZXh0fTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuZW1haWwgfHwgJyd9PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXNlcGFyYXRvcic+XG4gICAgICAgIDxzcGFuIC8+XG5cbiAgICAgICAgPGgxPntoZWFkZXJ0ZXh0fTwvaDE+XG4gICAgICAgIDxzcGFuIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvaGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge3NhbGU6IHN0b3JlLnNhbGVzLnNhbGVBY3RpdmV9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3Qgc2FsZSA9IHRoaXMucHJvcHMuc2FsZVxuICAgIGNvbnN0IGRhdGUgPSBzYWxlLmNyZWF0ZWRcbiAgICAgID8gYCR7KCcwJyArIHNhbGUuY3JlYXRlZC5nZXREYXRlKCkpLnNsaWNlKC0yKX0vXG4gICAgICAkeygnMCcgKyAoc2FsZS5jcmVhdGVkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7c2FsZS5jcmVhdGVkLmdldEZ1bGxZZWFyKCl9YFxuICAgICAgOiAnMDEvMDEvMTk3MCdcbiAgICBjb25zdCBjbGllbnQgPSBzYWxlLmNsaWVudCA/IGAke3NhbGUuY2xpZW50LmNvZGV9IC0gJHtzYWxlLmNsaWVudC5uYW1lfSAke3NhbGUuY2xpZW50Lmxhc3RfbmFtZX1gIDogJzAwIC0gQ2xpZW50ZSBkZSBDb250YWRvJ1xuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xuICAgICAgPyA8dHI+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2NsaWVudEFkcmVzcyc+RElSRUNDScOTTjoge3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDogPHRyIC8+XG4gICAgY29uc3QgaWQgPSBzYWxlLmJpbGxfbnVtYmVyID8gc2FsZS5iaWxsX251bWJlciA6ICcwMDAwMSdcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLWRhdGEnPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdjbGllbnQtdGFibGUnPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNMSUVOVEU6PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntjbGllbnR9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHtjbGllbnRBZHJlc3N9XG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlbnVtLXRhYmxlJz5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPk4uIGRlIGZhY3R1cmE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GZWNoYTo8L3RoPlxuICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvZnVsbEludm9pY2UvY29tcG9uZW50cy9kYXRhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge2luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50fVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjYXJ0SXRlbXMgPSB0aGlzLnByb3BzLmluQ2FydFxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50ID0gKHRoaXMucHJvcHMuZ2xvYmFsRGlzY291bnQpXG4gICAgICA/IDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz57dGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudH08L3RkPlxuICAgICAgOiA8dGQgc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90ZD5cbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5sZW5ndGhcbiAgICAgID8gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0YXhlc1RleHQgPSAoaXRlbS5wcm9kdWN0LnVzZV90YXhlcylcbiAgICAgICAgICA/IGBHYFxuICAgICAgICAgIDogYEVgXG5cbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5jb2RlfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge2l0ZW0ucHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLnF0eX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIOKCoSB7cGFyc2VGbG9hdChpdGVtLnByaWNlVG9Vc2UpLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHtpdGVtLmRpc2NvdW50fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAge2dsb2JhbERpc2NvdW50fVxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5cbiAgICAgICAgICAgIHt0YXhlc1RleHR9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAgICDigqEge2l0ZW0uc3ViVG90YWxOb0Rpc2NvdW50LmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgfSlcbiAgICAgIDogPHRyPlxuICAgICAgICA8dGQ+LS08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgIDx0ZD4tPC90ZD5cbiAgICAgICAgPHRkPi08L3RkPlxuICAgICAgPC90cj5cblxuICAgIGNvbnN0IGdsb2JhbERpc2NvdW50Um93ID0gdGhpcy5wcm9wcy5nbG9iYWxEaXNjb3VudCA/IDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMyICU8L3RoPlxuICAgICAgOiA8dGggc3R5bGU9e3snZGlzcGxheSc6ICdub25lJ319ID4tPC90aD5cblxuICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSdmdWxsLWludm9pY2UtdGFibGUgdGFibGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXJvdyc+RGVzY3JpcGNpw7NuPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+Q2FudGlkYWQ8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5QLlU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3JpZ2h0LWluLXRhYmxlJz5EZXMlPC90aD5cbiAgICAgICAgICB7Z2xvYmFsRGlzY291bnRSb3d9XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+UHJlY2lvPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+e2l0ZW1zfTwvdGJvZHk+XG4gICAgPC90YWJsZT5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWw6IHN0b3JlLmNhcnQuY2FydFRvdGFsLFxuICAgIHRheGVzOiBzdG9yZS5jYXJ0LmNhcnRUYXhlcyxcbiAgICBkaXNjb3VudFRvdGFsOiBzdG9yZS5jYXJ0LmRpc2NvdW50VG90YWwsXG4gICAgc3ViVG90YWxOb0Rpc2NvdW50OiBzdG9yZS5jYXJ0LmNhcnRTdWJ0b3RhbE5vRGlzY291bnQsXG4gICAgaXRlbXNJbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLFxuICAgIGdsb2JhbERpc2NvdW50OiBzdG9yZS5jYXJ0Lmdsb2JhbERpc2NvdW50XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLXRvdGFscyc+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5TdWItdG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EZXNjdWVudG88L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy5kaXNjb3VudFRvdGFsLmZvcm1hdE1vbmV5KDIsICcsJywgJy4nKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPklWPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudGF4ZXMuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPSd0b3RhbC1yb3cnPlxuICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cbiAgICAgICAgICAgIDx0ZD7igqEge3RoaXMucHJvcHMudG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2Z1bGxJbnZvaWNlL2NvbXBvbmVudHMvdG90YWxzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1pbnZvaWNlLW5vdGVzJz5cbiAgICAgIDxoMT5Ob3Rhczo8L2gxPlxuXG4gICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9mdWxsSW52b2ljZS9jb21wb25lbnRzL25vdGVzLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzeCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUuanN4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9jb21wb25lbnRzL2RhdGEuanN4J1xuaW1wb3J0IFRvdGFscyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxzLmpzeCdcbmltcG9ydCBOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvbm90ZXMuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0SW52b2ljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UnPlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGF0YSAvPlxuICAgICAgPFRhYmxlIC8+XG4gICAgICA8VG90YWxzIC8+XG4gICAgICA8Tm90ZXMgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcGFjdEludm9pY2UuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2FsZTogc3RvcmUuc2FsZXMuc2FsZUFjdGl2ZSxcbiAgICBjb21wYW55OiBzdG9yZS5jb25maWcuY29tcGFueVxuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBoZWFkZXJ0ZXh0ID0gdGhpcy5wcm9wcy5zYWxlLnBheS5wYXlNZXRob2QgPT0gJ0NSRURJVCcgPyAnRmFjdHVyYSBkZSBjcsOpZGl0bycgOiAnRmFjdHVyYSBkZSBjb250YWRvJ1xuXG4gICAgLy8gQklMTCBEQVRBXG4gICAgY29uc3QgaGVhZGVyTmFtZSA9IHRoaXMucHJvcHMuY29tcGFueS5jb21lcmNpYWxOYW1lIHx8ICcnXG5cbiAgICBjb25zdCBoZWFkZXJOYW1lMiA9IHRoaXMucHJvcHMuY29tcGFueS5sZWdhbE5hbWUgfHwgJydcblxuICAgIGNvbnN0IHRlbHMgPSB0aGlzLnByb3BzLmNvbXBhbnkudGVsZXBob25lcyB8fCAnJ1xuICAgIGNvbnN0IHRlbHNUZXh0ID0gdGVscy5zcGxpdCgnLycpLmxlbmd0aCA+IDEgPyBgVGVsczogJHt0ZWxzfWAgOiBgVGVsOiAke3RlbHN9YFxuXG4gICAgY29uc3QgaWRUeXBlID0gdGhpcy5wcm9wcy5jb21wYW55LmlkVHlwZSB8fCAnJ1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5jb21wYW55LmlkIHx8ICdQRVJTT04nXG4gICAgY29uc3QgaWRUZXh0ID0gaWRUeXBlID09ICdKVVJJREknID8gYEPDqWQgSnVyaWQgTm8gJHtpZH1gIDogYEPDqWQgTm8gJHtpZH1gXG5cbiAgICByZXR1cm4gPGRpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1oZWFkZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtaGVhZGVyLWluZm8nPlxuICAgICAgICAgIDxoMj57aGVhZGVyTmFtZX08L2gyPlxuICAgICAgICAgIDxoMz57aGVhZGVyTmFtZTJ9PC9oMz5cbiAgICAgICAgICA8aDM+e2lkVGV4dH08L2gzPlxuICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb21wYW55LmFkZHJlc3MxIHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbXBhbnkuYWRkcmVzczIgfHwgJyd9PC9oMz5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29tcGFueS5jb3VudHJ5IHx8ICcnfTwvaDM+XG4gICAgICAgICAgPGgzPnt0ZWxzVGV4dH08L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utc2VwYXJhdG9yJz5cbiAgICAgICAgPHNwYW4gLz5cblxuICAgICAgICA8aDE+e2hlYWRlcnRleHR9PC9oMT5cblxuICAgICAgICA8c3BhbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvaW52b2ljZS9jb21wYWN0SW52b2ljZS9jb21wb25lbnRzL2hlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtpbkNhcnQ6IHN0b3JlLmNhcnQuY2FydEl0ZW1zLCBnbG9iYWxEaXNjb3VudDogc3RvcmUuY2FydC5nbG9iYWxEaXNjb3VudH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gTWFpbiBMYXlvdXRcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY2FydEl0ZW1zID0gdGhpcy5wcm9wcy5pbkNhcnRcbiAgICBjb25zdCBpdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgY29uc3QgdGF4ZXNUZXh0ID0gKGl0ZW0ucHJvZHVjdC51c2VUYXhlcylcbiAgICAgICAgPyBgR2BcbiAgICAgICAgOiBgRWBcblxuICAgICAgcmV0dXJuIDx0ciBrZXk9e2l0ZW0udXVpZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5xdHl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7aXRlbS5wcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+XG4gICAgICAgICAge3RheGVzVGV4dH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPlxuICAgICAgICAgIOKCoSB7aXRlbS5zdWJUb3RhbE5vRGlzY291bnQuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS10YWJsZSB0YWJsZSc+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+Q2FudDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24tcm93Jz5BcnRpY3VsbzwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncmlnaHQtaW4tdGFibGUnPklWPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdyaWdodC1pbi10YWJsZSc+VG90YWw8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBjbGFzc05hbWU9Jyc+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdGJvZHk+XG5cbiAgICA8L3RhYmxlPlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90YWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtzYWxlOiBzdG9yZS5zYWxlcy5zYWxlQWN0aXZlfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzYWxlID0gdGhpcy5wcm9wcy5zYWxlXG4gICAgY29uc3QgZGF0ZSA9IHNhbGUuY3JlYXRlZFxuICAgICAgPyBgJHsoJzAnICsgc2FsZS5jcmVhdGVkLmdldERhdGUoKSkuc2xpY2UoLTIpfS9cbiAgICAgICR7KCcwJyArIChzYWxlLmNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9L1xuICAgICAgJHtzYWxlLmNyZWF0ZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgICA6ICcwMS8wMS8xOTcwJ1xuICAgIGNvbnN0IGNsaWVudCA9IHNhbGUuY2xpZW50ID8gYCR7c2FsZS5jbGllbnQuY29kZX0gLSAke3NhbGUuY2xpZW50Lm5hbWV9ICR7c2FsZS5jbGllbnQubGFzdF9uYW1lfWAgOiAnMDAgLSBDbGllbnRlIGRlIENvbnRhZG8nXG4gICAgY29uc3QgaWQgPSBzYWxlLmJpbGxfbnVtYmVyID8gc2FsZS5iaWxsX251bWJlciA6ICcwMDAxJ1xuICAgIGNvbnN0IGNsaWVudEFkcmVzcyA9IHNhbGUuY2xpZW50LmFkcmVzc1xuICAgICAgPyA8dHI+XG4gICAgICAgIDx0aD5EaXJlYzo8L3RoPlxuICAgICAgICA8dGQ+e3NhbGUuY2xpZW50LmFkcmVzc308L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDogPHRyIC8+XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbXBhY3QtaW52b2ljZS1kYXRhJz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZW51bS10YWJsZSc+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RmVjaGE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkZhY3R1cmE6PC90aD5cbiAgICAgICAgICAgIDx0ZD57KCcwMDAwMCcgKyBpZCkuc2xpY2UoLTUpfTwvdGQ+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DbGllbnRlOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2NsaWVudH08L3RkPlxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICB7Y2xpZW50QWRyZXNzfVxuXG4gICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvZGF0YS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RvcmUuY2FydC5jYXJ0VG90YWwsXG4gICAgdGF4ZXM6IHN0b3JlLmNhcnQuY2FydFRheGVzLFxuICAgIGRpc2NvdW50VG90YWw6IHN0b3JlLmNhcnQuZGlzY291bnRUb3RhbCxcbiAgICBzdWJUb3RhbE5vRGlzY291bnQ6IHN0b3JlLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCxcbiAgICBpdGVtc0luQ2FydDogc3RvcmUuY2FydC5jYXJ0SXRlbXMsXG4gICAgZ2xvYmFsRGlzY291bnQ6IHN0b3JlLmNhcnQuZ2xvYmFsRGlzY291bnRcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2UtdG90YWxzJz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN1Yi10b3RhbDwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLnN1YlRvdGFsTm9EaXNjb3VudC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRlc2N1ZW50bzwvdGg+XG4gICAgICAgICAgICA8dGQ+4oKhIHt0aGlzLnByb3BzLmRpc2NvdW50VG90YWwuZm9ybWF0TW9uZXkoMiwgJywnLCAnLicpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SVY8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50YXhlcy5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3RvdGFsLXJvdyc+XG4gICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgPHRkPuKCoSB7dGhpcy5wcm9wcy50b3RhbC5mb3JtYXRNb25leSgyLCAnLCcsICcuJyl9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL2ludm9pY2UvY29tcGFjdEludm9pY2UvY29tcG9uZW50cy90b3RhbHMuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjb21wYWN0LWludm9pY2Utbm90ZXMnPlxuICAgICAgPGgxPk5vdGFzOjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcGFjdC1pbnZvaWNlLW5vdGVzLWNvbnRlbnQnPlxuICAgICAgICA8ZGl2PkZhY3R1cmEgYXV0b3JpemFkYSBtZWRpYW50ZSBsYSByZXNvbHVjaW9uIE4xMTk3IGRlbCAxMi8wOC8xOTk3IGRlbCBER0RULjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL2NvbXBhY3RJbnZvaWNlL2NvbXBvbmVudHMvbm90ZXMuanN4IiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5anMnXG5pbXBvcnQge3RvZ2dsZUxheW91dH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuQGNvbm5lY3QoKHN0b3JlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogc3RvcmUubGF5b3V0LnRvcEJhclRvZ2dsZVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgbWVudUNsaWNrKGV2KSB7XG5cbiAgICB0b2dnbGVMYXlvdXQoKVxuXG4gIH1cblxuICBsb2dPdXRDbGljaygpIHtcblxuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdDZXJyYXIgU2VzacOzbicsIGDCv0Rlc2VhIENlcnJhciBzdSBzZXNpw7NuIGVuIGVsIHNpc3RlbWE/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2xvZ291dCcpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdDZXJyYXInLFxuICAgICAgY2FuY2VsOiAnUGVybWFuZWNlcidcbiAgICB9KVxuICB9XG5cbiAgaG9tZUNsaWNrKCkge1xuICAgIC8vIEFMRVJUSUZZIENPTkZJUk1cbiAgICBhbGVydGlmeS5jb25maXJtKCdJciBhbCBtZW7DuiBQcmluY2lwYWwnLCBgwr9EZXNlYSBpciBhbCBtZW7DuiBwcmluY2lwYWw/YCwgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pLnNldCgnbGFiZWxzJywge1xuICAgICAgb2s6ICdJcicsXG4gICAgICBjYW5jZWw6ICdQZXJtYW5lY2VyJ1xuICAgIH0pXG4gIH1cblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnByb3BzLnRvcEJhclRvZ2dsZVZpc2libGVcbiAgICAgID8gJ3RvcEJhci1idXR0b24gdG9wQmFyLWJ1dHRvbi1jb2xsYXBzZSB2aXNpYmxlJyA6ICd0b3BCYXItYnV0dG9uIHRvcEJhci1idXR0b24tY29sbGFwc2UnXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RvcEJhcic+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1iYXJzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wQmFyLXJpZ2h0Jz5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhvbWVDbGljay5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J3RvcEJhci1pdGVtIHRvcEJhci1pdGVtLWNvbmZpZyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1ob21lJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmxvZ091dENsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0ndG9wQmFyLWJ1dHRvbiB0b3BCYXItYnV0dG9uLWxvZ291dCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS1wb3dlci1vZmYnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvdG9wQmFyLmpzeCIsIlxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheW91dCgpIHtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKVxuICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlTWVudScpXG5cbiAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwdWxsZWQnKSkge1xuXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwdWxsZWQnKVxuICAgIHNpZGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3B1bGxlZCcpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcbiAgc2lkZU1lbnUuY2xhc3NMaXN0LmFkZCgncHVsbGVkJylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ29uZmlnQmFyKCkge1xuXG4gIGNvbnN0IGNvbmZpZ0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdCYXInKVxuXG4gIGlmIChjb25maWdCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3QtdmlzaWJsZScpKSB7XG5cbiAgICBjb25maWdCYXIuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZpc2libGUnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25maWdCYXIuY2xhc3NMaXN0LmFkZCgnbm90LXZpc2libGUnKVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2xheW91dC90b3BCYXIvYWN0aW9ucy5qcyIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlci5qc3gnXG4vLyBpbXBvcnQgQ29tcG9zZWRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9pdGVtcy9jb21wb3NlZC5qc3gnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5AY29ubmVjdCgoc3RvcmUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWRlTWVudVZpc2libGU6IHN0b3JlLmxheW91dC5zaWRlTWVudVZpc2libGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJylcbiAgfVxuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIC8vIGNvbnN0IGNoaWxkUHJvZHVjdHMgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHRleHQ6ICdQcm9kdWN0b3MnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLWdpZnQnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RzJ1xuICAgIC8vICAgfSwge1xuICAgIC8vICAgICB0ZXh0OiAnRmFtaWxpYXMnLFxuICAgIC8vICAgICBjbGFzczogJ2ZhLWxpc3QnLFxuICAgIC8vICAgICBocmVmOiAnL2FkbWluL3Byb2R1Y3RkZXBhcnRtZW50cydcbiAgICAvLyAgIH0sIHtcbiAgICAvLyAgICAgdGV4dDogJ1N1Yi1GYW1pbGlhcycsXG4gICAgLy8gICAgIGNsYXNzOiAnZmEtb3V0ZGVudCcsXG4gICAgLy8gICAgIGhyZWY6ICcvYWRtaW4vcHJvZHVjdHN1YmRlcGFydG1lbnRzJ1xuICAgIC8vICAgfVxuICAgIC8vIF1cblxuICAgIC8vIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy51c2VyQ29tcGFueUNvbmZpZy5jb21lcmNpYWxOYW1lIHx8IHRoaXMucHJvcHMuZGVmYXVsdENvbXBhbnlDb25maWcuY29tZXJjaWFsTmFtZSB8fCAnQVBQJ1xuICAgIGNvbnN0IHNpZGVNZW51Q2xhc3MgPSB0aGlzLnByb3BzLnNpZGVNZW51VmlzaWJsZSA/ICdzaWRlTWVudScgOiAnc2lkZU1lbnUgaGlkZGVuQnlBcHAnXG4gICAgcmV0dXJuIDxkaXYgaWQ9J3NpZGVNZW51JyBjbGFzc05hbWU9e3NpZGVNZW51Q2xhc3N9PlxuXG4gICAgICB7LyogPGgzIGNsYXNzTmFtZT0nc2lkZU1lbnUtaGVhZGVyJz57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPiAqL31cbiAgICAgIDxVc2VyIC8+XG5cbiAgICAgIDxTZWFyY2ggLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXdyYXBwZXIgY29sLXhzLTEyJz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2lkZU1lbnUtaXRlbXMnPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZhIGZhLWFyZWEtY2hhcnQnIC8+XG4gICAgICAgICAgICAgIEluaWNpbzwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvc2FsZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtYXJlYS1jaGFydCcgLz5cbiAgICAgICAgICAgICAgTnVldmEgVmVudGE8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz0nL3NhbGVzL3Byb2Zvcm1hJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmYSBmYS11c2VyJyAvPlxuICAgICAgICAgICAgICBOdWV2YSBDb3RpemFjacOzbjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvc2FsZXMvcHJlc2FsZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtdXNlcicgLz5cbiAgICAgICAgICAgICAgTnVldmEgUHJldmVudGE8L0xpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L3NpZGVNZW51LmpzeCIsIi8qIE1vZHVsZSBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLyBNYWluIExheW91dFxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXNlYXJjaCBjb2wteHMtMTInPlxuXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0J1c2Nhci4uLicgLz5cblxuICAgIDwvZGl2PlxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvc2lkZU1lbnUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzeCIsIi8qXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbkBjb25uZWN0KChzdG9yZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0b3JlLnVzZXIudXNlcixcbiAgICBwcm9maWxlOiBzdG9yZS51c2VyLnByb2ZpbGVcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIE1haW4gTGF5b3V0XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGF2YXRhciA9IHRoaXMucHJvcHMucHJvZmlsZS5hdmF0YXIgPyBgL21lZGlhLyR7dGhpcy5wcm9wcy5wcm9maWxlLmF2YXRhcn1gIDogJy9tZWRpYS9kZWZhdWx0L3Byb2ZpbGUuanBnJ1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA/IHRoaXMucHJvcHMudXNlci5maXJzdF9uYW1lXG4gICAgICA6ICh0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWUgOiAnJylcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5wcm9wcy51c2VyLmxhc3RfbmFtZSA/IHRoaXMucHJvcHMudXNlci5sYXN0X25hbWUgOiAnJ1xuXG4gICAgbGV0IGZ1bGxOYW1lID0gYCR7bmFtZX0gJHtsYXN0TmFtZX1gXG4gICAgaWYgKGZ1bGxOYW1lLmxlbmd0aCA+IDIyKSBmdWxsTmFtZSA9IGZ1bGxOYW1lLnN1YnN0cmluZygwLCAyMilcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlciBjb2wteHMtMTIgJz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGVNZW51LXVzZXItYXZhdGFyJz5cbiAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZU1lbnUtdXNlci1uYW1lJz5cbiAgICAgICAgPHNwYW4+e2Z1bGxOYW1lfTwvc3Bhbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvbGF5b3V0L3NpZGVNZW51L2NvbXBvbmVudHMvdXNlci91c2VyLmpzeCIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUnXG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rLCBsb2dnZXIpXG5cbi8vIGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSgpLCB0aHVuaylcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUocmVkdWNlciwgbWlkZGxld2FyZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc3RvcmUuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4uLy4uL2dlbmVyYWwvZmV0Y2hpbmcvcmVkdWNlci5qcydcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQvcmVkdWNlci5qcydcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9nZW5lcmFsL2NhcnQvcmVkdWNlci5qcydcbmltcG9ydCBjbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMnXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9nZW5lcmFsL3Byb2R1Y3QvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlIGZyb20gJy4vc2FsZS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4vbWVzc2FnZXMvcmVkdWNlci5qcydcbmltcG9ydCBzZWFyY2hDbGllbnRzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvY2xpZW50cy9yZWR1Y2VyLmpzJ1xuaW1wb3J0IHNlYXJjaFByb2R1Y3RzIGZyb20gJy4vZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvcmVkdWNlci5qcydcbmltcG9ydCBwYXkgZnJvbSAnLi9zYWxlL3BheS9yZWR1Y2VyLmpzJ1xuaW1wb3J0IGludm9pY2UgZnJvbSAnLi9nZW5lcmFsL2ludm9pY2UvcmVkdWNlci5qcydcbmltcG9ydCBzYWxlcyBmcm9tICcuL2dlbmVyYWwvc2FsZXMvcmVkdWNlci5qcydcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcvcmVkdWNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZmV0Y2hpbmcsXG4gIGxheW91dCxcbiAgdXNlcixcbiAgY2FydCxcbiAgY2xpZW50cyxcbiAgcHJvZHVjdHMsXG4gIHNhbGUsXG4gIG1lc3NhZ2VzLFxuICBzZWFyY2hDbGllbnRzLFxuICBzZWFyY2hQcm9kdWN0cyxcbiAgcGF5LFxuICBpbnZvaWNlLFxuICBzYWxlcyxcbiAgY29uZmlnXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0FMRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgc2lkZU1lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSE9NRV9QQU5FTF9NT1VOVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9wQmFyVG9nZ2xlVmlzaWJsZTogZmFsc2UsXG4gICAgICAgIHNpZGVNZW51VmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9sYXlvdXQvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHVzZXI6IHt9LFxuICBwcm9maWxlOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRklMRV9GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgICBwcm9maWxlOiBhY3Rpb24ucGF5bG9hZC5wcm9maWxlXG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0ZJTEVfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgcHJvZmlsZToge31cbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy91c2VyL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBlZGl0YWJsZTogdHJ1ZSxcbiAgY3JlYXRlZDogJycsXG4gIHVwZGF0ZWQ6ICcnLFxuICBpc051bGw6IGZhbHNlLFxuICBjYXJ0SGFzSXRlbXM6IGZhbHNlLCAvLyB2YXIgdG8gY2hlY2sgaWYgY2FydCBoYXMgaXRlbXNcbiAgY2FydEl0ZW1zOiBbXSwgLy8gdGhlIGxpc3Qgb2YgaXRlbXMgaW4gY2FydFxuICBjYXJ0U3VidG90YWxOb0Rpc2NvdW50OiAwLCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICBjYXJ0U3VidG90YWw6IDAsIC8vIHRoZSBzdWJ0b3RhbCBpbmNsdWRpbmcgZGlzY291bnRzIHdpdGhvdXQgdGF4ZXNcbiAgY2FydFRheGVzOiAwLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICBjYXJ0VG90YWw6IDAsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gIGdsb2JhbERpc2NvdW50OiAwLCAvLyBkaXNjb3VudCAlXG4gIGRpc2NvdW50VG90YWw6IDAsIC8vIGRpc2NvdW50IGluIGN1cnJlbmN5XG4gIGNhcnRJdGVtQWN0aXZlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnQ0xFQVJfQUxMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6ICcnLFxuICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgaXNOdWxsOiBmYWxzZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBmYWxzZSwgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogW10sIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogMCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiAwLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogMCwgLy8gdG90YWwgYW1vdW50IG9mIHRheGVzIGluIGNhcnQgaW4gY3VycmVuY3lcbiAgICAgICAgY2FydFRvdGFsOiAwLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogMCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiAwLCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0SXRlbUFjdGl2ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdBRERfVE9fQ0FSVCc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiB0cnVlLFxuICAgICAgICBjYXJ0SXRlbXM6IFtcbiAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0SXRlbXMsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUkVNT1ZFX0ZST01fQ0FSVCc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cblxuICAgICAgbmV3Q2FydC5zcGxpY2UoYWN0aW9uLnBheWxvYWQsIDEpXG5cbiAgICAgIGNvbnN0IGl0ZW1zTGVmdEluQ2FydCA9IChuZXdDYXJ0Lmxlbmd0aCA+IDApXG4gICAgICAvLyA/IHRydWVcbiAgICAgIC8vIDogZmFsc2VcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRIYXNJdGVtczogaXRlbXNMZWZ0SW5DYXJ0LFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUJzpcbiAgICB7XG5cbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBbLi4uc3RhdGUuY2FydEl0ZW1zXVxuICAgICAgbmV3Q2FydFthY3Rpb24ucGF5bG9hZC5pbmRleF0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX0lURU1fTE9URSc6XG4gICAge1xuXG4gICAgICBjb25zdCBuZXdDYXJ0ID0gWy4uLnN0YXRlLmNhcnRJdGVtc11cbiAgICAgIG5ld0NhcnRbYWN0aW9uLnBheWxvYWQuaW5kZXhdWydsb3RlJ10gPSBhY3Rpb24ucGF5bG9hZC5sb3RlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VQREFURV9DQVJUX1RPVEFMUyc6XG4gICAge1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5zdWJ0b3RhbCxcbiAgICAgICAgY2FydFRheGVzOiBhY3Rpb24ucGF5bG9hZC50YXhlcyxcbiAgICAgICAgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgICAgZGlzY291bnRUb3RhbDogYWN0aW9uLnBheWxvYWQuZGlzY291bnRUb3RhbCxcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuc3ViVG90YWxOb0Rpc2NvdW50XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfR0xPQkFMX0RJU0NPVU5UJzpcbiAgICB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1JFUExBQ0VfQ0FSVCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfTElORV9ESVNDT1VOVCc6XG4gICAge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IFsuLi5zdGF0ZS5jYXJ0SXRlbXNdXG4gICAgICBuZXdDYXJ0W2FjdGlvbi5wYXlsb2FkLmluZGV4XS5kaXNjb3VudCA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0SXRlbXM6IG5ld0NhcnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJPRk9STUEnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjcmVhdGVkOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNyZWF0ZWQsXG4gICAgICAgIGlzTnVsbDogYWN0aW9uLnBheWxvYWQuY2FydC5pc051bGwsXG4gICAgICAgIGNhcnRIYXNJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SGFzSXRlbXMsIC8vIHZhciB0byBjaGVjayBpZiBjYXJ0IGhhcyBpdGVtc1xuICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydEl0ZW1zLCAvLyB0aGUgbGlzdCBvZiBpdGVtcyBpbiBjYXJ0XG4gICAgICAgIGNhcnRTdWJ0b3RhbE5vRGlzY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsTm9EaXNjb3VudCwgLy8gc3VidG90YWwgd2l0aG91dCBkaXNjb3VudCBhbmQgdGF4ZXNcbiAgICAgICAgY2FydFN1YnRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRTdWJ0b3RhbCwgLy8gdGhlIHN1YnRvdGFsIGluY2x1ZGluZyBkaXNjb3VudHMgd2l0aG91dCB0YXhlc1xuICAgICAgICBjYXJ0VGF4ZXM6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRheGVzLCAvLyB0b3RhbCBhbW91bnQgb2YgdGF4ZXMgaW4gY2FydCBpbiBjdXJyZW5jeVxuICAgICAgICBjYXJ0VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFRvdGFsLCAvLyBjYXJ0IHRvdGFsIGFmdGVyIGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBnbG9iYWxEaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5nbG9iYWxEaXNjb3VudCwgLy8gZGlzY291bnQgJVxuICAgICAgICBkaXNjb3VudFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmRpc2NvdW50VG90YWwgLy8gZGlzY291bnQgaW4gY3VycmVuY3lcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfUFJFU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY3JlYXRlZCxcbiAgICAgICAgaXNOdWxsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmlzTnVsbCxcbiAgICAgICAgY2FydEhhc0l0ZW1zOiBhY3Rpb24ucGF5bG9hZC5jYXJ0LmNhcnRIYXNJdGVtcywgLy8gdmFyIHRvIGNoZWNrIGlmIGNhcnQgaGFzIGl0ZW1zXG4gICAgICAgIGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0SXRlbXMsIC8vIHRoZSBsaXN0IG9mIGl0ZW1zIGluIGNhcnRcbiAgICAgICAgY2FydFN1YnRvdGFsTm9EaXNjb3VudDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0U3VidG90YWxOb0Rpc2NvdW50LCAvLyBzdWJ0b3RhbCB3aXRob3V0IGRpc2NvdW50IGFuZCB0YXhlc1xuICAgICAgICBjYXJ0U3VidG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuY2FydFN1YnRvdGFsLCAvLyB0aGUgc3VidG90YWwgaW5jbHVkaW5nIGRpc2NvdW50cyB3aXRob3V0IHRheGVzXG4gICAgICAgIGNhcnRUYXhlczogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VGF4ZXMsIC8vIHRvdGFsIGFtb3VudCBvZiB0YXhlcyBpbiBjYXJ0IGluIGN1cnJlbmN5XG4gICAgICAgIGNhcnRUb3RhbDogYWN0aW9uLnBheWxvYWQuY2FydC5jYXJ0VG90YWwsIC8vIGNhcnQgdG90YWwgYWZ0ZXIgZGlzY291bnQgYW5kIHRheGVzXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiBhY3Rpb24ucGF5bG9hZC5jYXJ0Lmdsb2JhbERpc2NvdW50LCAvLyBkaXNjb3VudCAlXG4gICAgICAgIGRpc2NvdW50VG90YWw6IGFjdGlvbi5wYXlsb2FkLmNhcnQuZGlzY291bnRUb3RhbCAvLyBkaXNjb3VudCBpbiBjdXJyZW5jeVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX0FDVElWRV9JTl9DQVJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1BY3RpdmU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvY2FydC9yZWR1Y2VyLmpzIiwiY29uc3QgY2xpZW50U2VsZWN0ZWRNb2RlbCA9IHtcbiAgY29kZTogJzAwMDAnLFxuICBjbGllbnRUeXBlOiAnR0VORVJBTCcsXG4gIGNyZWF0ZWQ6ICcnLFxuICBjcmVkaXRfZGF5czogMCxcbiAgY3JlZGl0X2xpbWl0OiAwLFxuICBkb2NUeXBlOiAnQ0xJRU5UJyxcbiAgaGFzX2NyZWRpdDogZmFsc2UsXG4gIGlkOiAnMDAwMDAwMDAwJyxcbiAgbGFzdF9uYW1lOiAnQ29udGFkbycsXG4gIG5hbWU6ICdDbGllbnRlJyxcbiAgdXBkYXRlZDogJycsXG4gIHNhbGVMb2FkZWQ6IGZhbHNlLFxuICBfaWQ6IDBcbn1cblxuY29uc3QgdXNlclNlbGVjdGVkTW9kZWwgPSB7XG4gIHVzZXI6ICcwMDAwJyxcbiAgbmFtZTogJycsXG4gIGxhc3RfbmFtZTogJycsXG4gIGlkOiAnMDAwMCcsXG4gIF9pZDogMFxufVxuXG5jb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICBjbGllbnRzRmVjdGVkOiBmYWxzZSxcbiAgY2xpZW50c0ZldGNoRXJyb3I6ICcnLFxuICBjbGllbnRzOiBbXSxcbiAgdXNlcnM6IFtdLFxuICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbCxcbiAgY2xpZW50U2VsZWN0ZWREZWJ0OiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdDTEVBUl9BTEwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRTZWxlY3RlZDogY2xpZW50U2VsZWN0ZWRNb2RlbCxcbiAgICAgICAgdXNlclNlbGVjdGVkOiB1c2VyU2VsZWN0ZWRNb2RlbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFMnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjbGllbnRzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnRzRmV0Y2hFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX0NMSUVOVFNfRlVMRklMTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50c0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2xpZW50c0ZlY3RlZDogdHJ1ZSxcbiAgICAgICAgY2xpZW50czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMSUVOVF9TRUxFQ1RFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIC8vICoqKioqKioqIFVTRVJTICoqKioqKioqXG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9VU0VSU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfU0VMRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1VTRVJfQ0xFQVInOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyU2VsZWN0ZWQ6IHVzZXJTZWxlY3RlZE1vZGVsXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICAvLyAqKioqKioqKiBVU0VSUyAqKioqKioqKlxuXG4gICAgY2FzZSAnU0VUX0NMSUVOVF9ERUJUJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWREZWJ0OiBwYXJzZUZsb2F0KGFjdGlvbi5wYXlsb2FkLmRlYnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudHMgPSBzdGF0ZS5jbGllbnRzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBjbGllbnRzOiBjbGllbnRzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnQsXG4gICAgICAgIHVzZXJTZWxlY3RlZDogYWN0aW9uLnBheWxvYWQudXNlclxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUkVTQUxFJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGFjdGlvbi5wYXlsb2FkLmNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfVFJVRSc6XG4gICAge1xuICAgICAgY29uc3QgY2xpZW50ID0gc3RhdGUuY2xpZW50U2VsZWN0ZWRcbiAgICAgIGNsaWVudC5zYWxlTG9hZGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudFNlbGVjdGVkOiBjbGllbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdMT0FERURfRkFMU0UnOlxuICAgIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHN0YXRlLmNsaWVudFNlbGVjdGVkXG4gICAgICBjbGllbnQuc2FsZUxvYWRlZCA9IGZhbHNlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50U2VsZWN0ZWQ6IGNsaWVudFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9jbGllbnRzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBwcm9kdWN0czoge30sXG4gIGlucHV0VmFsOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czoge31cbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1BST0RVQ1RTX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1BST0RVQ1RfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnB1dFZhbDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NMRUFSX1BST0RVQ1RfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnB1dFZhbDogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzXG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdHNcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9wcm9kdWN0L3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBmdWxsV2lkdGg6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdUT0dHTEVfRlVMTF9XSURUSCc6XG4gICAge1xuICAgICAgY29uc3Qgd2lkdGggPSAhc3RhdGUuZnVsbFdpZHRoXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnVsbFdpZHRoOiB3aWR0aFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9zYWxlL3JlZHVjZXIuanMiLCJpbXBvcnQgYWxlcnRpZnkgZnJvbSAnYWxlcnRpZnlqcydcblxuY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgbWVzc2FnZXM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdQUk9EVUNUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SOiBOTyBFWElTVEUgUFJPRFVDVE8hJywgJ0VsIGPDs2RpZ28gaW5ncmVzYWRvIG5vIGV4aXN0ZSBlbiBlbCBzaXN0ZW1hLCBpbmdyZXNlIHVuIGPDs2RpZ28gdsOhbGlkbycpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05PVF9GT1VORF9TQUxFJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBMQSBWRU5UQSEnLCBgTGEgdmVudGEgIyR7YWN0aW9uLnBheWxvYWR9IG5vIGV4aXN0ZSwgbyBoYXkgdW4gcHJvYmxlbWEgcGFyYSBjYXJnYXJsYSwgcG9yIGZhdm9yIGludGVudGUgZGUgbnVldm8uYClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnUFJPRFVDVF9JTl9DQVJUX05PVF9GT1VORCc6XG4gICAge1xuICAgICAgYWxlcnRpZnkuYWxlcnQoJ0VSUk9SIScsICdIdWJvIHVuIGVycm9yIGFsIGVuY29udHJhciBlbCBwcm9kdWN0byBlbiBsYSBsaXN0YSBkZSBwcm9kdWN0b3MgYWdyZWdhZG9zLHBvciBmYXZvciBpbnRlbnRlIGRlIG51ZXZvLCBzaSBlbCBlcnJvciBwZXJzaXN0ZSBjb211bsOtcXVlc2UgY29uIHNvcG9ydGUgdMOpY25pY28uJylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnRkVUQ0hfUFJPRFVDVFNfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIGFsZXJ0aWZ5LmFsZXJ0KCdFUlJPUiBBTCBDQVJHQVIgTE9TIFBST0RVQ1RPUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIHByb2R1Y3RvcywgcG9yIGZhdm9yIGludGVudGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgbnVldm8sIHNpIGVsIGVycm9yIHBlcnNpc3RlIGNvbXVuw61xdWVzZSBjb24gc29wb3J0ZSB0w6ljbmljby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICR7YWN0aW9uLnBheWxvYWR9YClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdDTElFTlRfTk9UX0ZPVU5EJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1I6IE5PIEVYSVNURSBDTElFTlRFIScsICdFbCBjbGllbnRlIGNvbiBlbCBjw7NkaWdvIGluZ3Jlc2FkbyBubyBleGlzdGUgZW4gZWwgc2lzdGVtYSwgaW5ncmVzZSB1biBjw7NkaWdvIHbDoWxpZG8nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lc3NhZ2VzOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DTElFTlRTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICBhbGVydGlmeS5hbGVydCgnRVJST1IgQUwgQ0FSR0FSIExPUyBDTElFTlRFUyEnLCBgSHVibyB1biBlcnJvciBhbCBjYXJnYXIgbG9zIGNsaWVudGVzLCBwb3IgZmF2b3IgaW50ZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZSBudWV2bywgc2kgZWwgZXJyb3IgcGVyc2lzdGUgY29tdW7DrXF1ZXNlIGNvbiBzb3BvcnRlIHTDqWNuaWNvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJHthY3Rpb24ucGF5bG9hZH1gKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL21lc3NhZ2VzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICB2aXNpYmxlOiBmYWxzZSxcbiAgY2xpZW50c01hdGNoZWQ6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBzdGF0ZUNvbnN0LCBhY3Rpb24pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlICdTRUFSQ0hfQ0xJRU5UX1RPR0dMRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xJRU5UX1NIT1dfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnQ0xJRU5UX0hJREVfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfU1VDQ0VTUyc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ0NMSUVOVF9TRUFSQ0hfRkFJTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudHNNYXRjaGVkOiBbXVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ05FV19TQUxFJzpcbiAgICB7XG4gICAgICBzdGF0ZSA9IHN0YXRlQ29uc3RcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZUNvbnN0XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgfSAvLyBzd2l0Y2hcblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cblxufSAvLyByZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIHZpc2libGU6IGZhbHNlLFxuICBwcm9kdWN0c01hdGNoZWQ6IFtdLFxuICBzZWFyY2hWYWx1ZTogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NFVF9QUk9EVUNUX1NFQVJDSF9GSUVMRF9WQUxVRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaFZhbHVlOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfRklFTERfVkFMVUUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFQVJDSF9QUk9EVUNUX1RPR0dMRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgdmlzaWJsZSA9ICFzdGF0ZS52aXNpYmxlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdQUk9EVUNUX1NIT1dfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG4gICAgY2FzZSAnUFJPRFVDVF9ISURFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcbiAgICBjYXNlICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNNYXRjaGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuICAgIGNhc2UgJ1BST0RVQ1RfU0VBUkNIX0ZBSUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c01hdGNoZWQ6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NlYXJjaC9wcm9kdWN0cy9yZWR1Y2VyLmpzIiwiY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgcGF5TWV0aG9kOiAnQ0FTSCcsXG4gIGNhc2hBbW91bnQ6IDAsXG4gIGNhcmREaWdpdHM6ICcnLFxuICBjYXJkQXV0aDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ1NIT1dfUEFZX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1BBWV9QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0NIQU5HRV9QQVlfTUVUSE9EJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBU0hfQU1PVU5UJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FzaEFtb3VudDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfQ0FSRF9BVVRIJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZEF1dGg6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFX0NBUkRfRElHSVRTJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FyZERpZ2l0czogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc3RhdGVDb25zdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTE9BREVEX1NBTEUnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLnBheS5wYXlNZXRob2QsXG4gICAgICAgIGNhc2hBbW91bnQ6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXNoQW1vdW50LFxuICAgICAgICBjYXJkRGlnaXRzOiBhY3Rpb24ucGF5bG9hZC5wYXkuY2FyZERpZ2l0cyxcbiAgICAgICAgY2FyZEF1dGg6IGFjdGlvbi5wYXlsb2FkLnBheS5jYXJkQXV0aFxuICAgICAgfVxuICAgIH1cblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvc2FsZS9wYXkvcmVkdWNlci5qcyIsImNvbnN0IHN0YXRlQ29uc3QgPSB7XG4gIGlzVmlzaWJsZTogZmFsc2UsXG4gIGlzRnVsbDogdHJ1ZSxcbiAgZGVmYXVsdERlc2luZzogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnU0hPV19JTlZPSUNFX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX0lOVk9JQ0VfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9QQU5FTCc6XG4gICAge1xuICAgICAgY29uc3QgZnVsbE9yTm90ID0gc3RhdGUuaXNGdWxsXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGdWxsOiAhZnVsbE9yTm90XG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdUT0dHTEVfSU5WT0lDRV9ERVNJTkcnOlxuICAgIHtcbiAgICAgIGNvbnN0IGRlc2luZ09yTm90ID0gc3RhdGUuZGVmYXVsdERlc2luZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlZmF1bHREZXNpbmc6ICFkZXNpbmdPck5vdFxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnTkVXX1NBTEUnOlxuICAgIHtcbiAgICAgIHN0YXRlID0gc3RhdGVDb25zdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHN0YXRlQ29uc3RcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICB9IC8vIHN3aXRjaFxuXG4gIHJldHVybiBzdGF0ZSAvLyBkZWZhdWx0IHJldHVyblxuXG59IC8vIHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9pbnZvaWNlL3JlZHVjZXIuanMiLCJjb25zdCBzYWxlQWN0aXZlTW9kZWwgPSB7XG4gIGlkOiAwLFxuICBiaWxsX251bWJlcjogJycsXG4gIGNhcnQ6IHt9LFxuICBjbGllbnQ6ICcnLFxuICB1c2VyOiAnJyxcbiAgY2xpZW50X2lkOiAnJyxcbiAgcGF5OiB7fSxcbiAgcGF5ZWQ6IGZhbHNlLFxuICBwYXlfdHlwZTogJ0NBU0gnXG5cbn1cblxuY29uc3Qgc3RhdGVDb25zdCA9IHtcbiAgc2FsZXM6IFtdLFxuICBzYWxlQWN0aXZlOiBzYWxlQWN0aXZlTW9kZWwsXG4gIGNvbXBsZXRlZDogZmFsc2UsXG4gIHNhbGVBY3RpdmVJZDogMCxcbiAgaXNTYWxlc1BhbmVsVmlzaWJsZTogZmFsc2UsXG4gIGlzUHJlc2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHN0YXRlQ29uc3QsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0NMRUFSX0FMTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IHNhbGVBY3RpdmVNb2RlbCxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgc2FsZUFjdGl2ZUlkOiAwLFxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NIT1dfU0FMRVNfUEFORUwnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NhbGVzUGFuZWxWaXNpYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTSE9XX1BSRVNBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnSElERV9TQUxFU19QQU5FTCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2FsZXNQYW5lbFZpc2libGU6IGZhbHNlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdISURFX1BSRVNBTEVTX1BBTkVMJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNQcmVzYWxlc1BhbmVsVmlzaWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ0ZFVENIX1NBTEVTX1JFSkVDVEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZXM6IFtdXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9TQUxFU19GVUxGSUxMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9TQUxFJzpcbiAgICB7XG4gICAgICBjb25zdCBjYXJ0ID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC5jYXJ0KVxuICAgICAgY29uc3QgY2xpZW50ID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC5jbGllbnQpXG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC51c2VyKVxuICAgICAgY29uc3QgcGF5ID0gSlNPTi5wYXJzZShhY3Rpb24ucGF5bG9hZC5wYXkpXG5cbiAgICAgIGNvbnN0IHNhbGUgPSB7XG4gICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZCxcbiAgICAgICAgYmlsbF9udW1iZXI6IGFjdGlvbi5wYXlsb2FkLmJpbGxfbnVtYmVyLFxuICAgICAgICBjYXJ0OiBjYXJ0LFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgcGF5OiBwYXksXG4gICAgICAgIHBheWVkOiBhY3Rpb24ucGF5bG9hZC5wYXllZCxcbiAgICAgICAgcGF5X3R5cGU6IGFjdGlvbi5wYXlsb2FkLnBheV90eXBlLFxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZShhY3Rpb24ucGF5bG9hZC5jcmVhdGVkKSxcbiAgICAgICAgdXBkYXRlZDogbmV3IERhdGUoYWN0aW9uLnBheWxvYWQudXBkYXRlZClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9TQUxFX0lEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdTRVRfUFJFU0FMRV9JRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0gLy8gY2FzZVxuXG4gICAgY2FzZSAnU0VUX1BST0ZPUk1BX0lEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdORVdfU0FMRSc6XG4gICAge1xuICAgICAgY29uc3Qgc2FsZXMgPSBzdGF0ZS5zYWxlc1xuICAgICAgc3RhdGUgPSBzdGF0ZUNvbnN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSwgc2FsZXM6IHNhbGVzXG4gICAgICB9XG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdMT0FERURfU0FMRSc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNhbGVBY3RpdmU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBzYWxlQWN0aXZlSWQ6IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTE9BREVEX1BSRVNBTEUnOlxuICAgIHtcbiAgICAgIGNvbnN0IHNhbGUgPSBzYWxlQWN0aXZlTW9kZWxcbiAgICAgIHNhbGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkLmNhcnRcbiAgICAgIHNhbGUuY2xpZW50ID0gYWN0aW9uLnBheWxvYWQuY2xpZW50XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2FsZUFjdGl2ZTogc2FsZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0xPQURFRF9QUk9GT1JNQSc6XG4gICAge1xuICAgICAgY29uc3Qgc2FsZSA9IHNhbGVBY3RpdmVNb2RlbFxuICAgICAgc2FsZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQuY2FydFxuICAgICAgc2FsZS5jbGllbnQgPSBhY3Rpb24ucGF5bG9hZC5jbGllbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzYWxlQWN0aXZlOiBzYWxlXG4gICAgICB9XG4gICAgfVxuXG4gIH0gLy8gc3dpdGNoXG5cbiAgcmV0dXJuIHN0YXRlIC8vIGRlZmF1bHQgcmV0dXJuXG5cbn0gLy8gcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwcy9zYWxlcy9nZW5lcmFsL3NhbGVzL3JlZHVjZXIuanMiLCJjb25zdCBzdGF0ZUNvbnN0ID0ge1xuICBjb21wYW55OiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gc3RhdGVDb25zdCwgYWN0aW9uKSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSAnRkVUQ0hfQ09ORklHX0ZVTEZJTExFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZC5zZWN0aW9uXTogYWN0aW9uLnBheWxvYWQuZGF0YVxuICAgICAgfVxuXG4gICAgfSAvLyBjYXNlXG5cbiAgICBjYXNlICdGRVRDSF9DT05GSUdfUkVKRUNURUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IHt9XG4gICAgICB9XG5cbiAgICB9IC8vIGNhc2VcblxuICAgIGNhc2UgJ1NFVF9DT05GSUcnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2VjdGlvbl06IGFjdGlvbi5wYXlsb2FkLmRhdGFcbiAgICAgIH1cblxuICAgIH0gLy8gY2FzZVxuXG4gIH1cblxuICByZXR1cm4gc3RhdGUgLy8gZGVmYXVsdCByZXR1cm5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvY29uZmlnL3JlZHVjZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gaGlkZVBhbmVsKCkge1xuXG4gIHJldHVybiB7dHlwZTogJ1BST0RVQ1RfSElERV9QQU5FTCcsIHBheWxvYWQ6IC0xfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdCh2YWwsIHByb2R1Y3RzKSB7XG5cbiAgY29uc3QgdGV4dCA9IHZhbC5zcGxpdCgnJScpXG4gIGNvbnN0IG1hdGNocyA9IFtdXG5cbiAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICBsZXQgY29udHJvbCA9IHRydWVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2R1Y3QuZGVzY3JpcHRpb24udG9TdHJpbmcoKVxuXG4gICAgdGV4dC5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBkZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2Yod29yZC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgY29udHJvbCA9IGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgbWF0Y2hzLnB1c2gocHJvZHVjdClcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX1NFQVJDSF9TVUNDRVNTJyxcbiAgICAgIHBheWxvYWQ6IG1hdGNoc1xuICAgIH1cbiAgICA6IHtcbiAgICAgIHR5cGU6ICdQUk9EVUNUX1NFQVJDSF9GQUlMJyxcbiAgICAgIHBheWxvYWQ6IC0xXG4gICAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3RlZFRhYmxlKGNvZGUpIHtcblxuICByZXR1cm4ge3R5cGU6ICdTRVRfUFJPRFVDVF9GSUVMRF9WQUxVRScsIHBheWxvYWQ6IGNvZGV9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcHMvc2FsZXMvZ2VuZXJhbC9zZWFyY2gvcHJvZHVjdHMvYWN0aW9ucy5qcyIsImV4cG9ydCBmdW5jdGlvbiBoaWRlUGFuZWwoKSB7XG5cbiAgcmV0dXJuIHt0eXBlOiAnQ0xJRU5UX0hJREVfUEFORUwnLCBwYXlsb2FkOiAtMX1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENsaWVudCh2YWwsIGNsaWVudHMpIHtcblxuICBjb25zdCB0ZXh0ID0gdmFsLnNwbGl0KCclJylcbiAgY29uc3QgbWF0Y2hzID0gW11cblxuICBjb25zb2xlLmxvZyhjbGllbnRzKVxuXG4gIGNsaWVudHMuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgIGxldCBjb250cm9sID0gdHJ1ZVxuICAgIGNvbnN0IG5hbWUgPSBjbGllbnQubmFtZS50b1N0cmluZygpICsgJyAnICsgY2xpZW50Lmxhc3RfbmFtZS50b1N0cmluZygpXG5cbiAgICB0ZXh0LmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQudG9Mb3dlckNhc2UoKSlcblxuICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgIGNvbnRyb2wgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIG1hdGNocy5wdXNoKGNsaWVudClcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCByZXMgPSAobWF0Y2hzLmxlbmd0aClcbiAgICA/IHtcbiAgICAgIHR5cGU6ICdDTElFTlRfU0VBUkNIX1NVQ0NFU1MnLFxuICAgICAgcGF5bG9hZDogbWF0Y2hzXG4gICAgfVxuICAgIDoge1xuICAgICAgdHlwZTogJ0NMSUVOVF9TRUFSQ0hfRkFJTCcsXG4gICAgICBwYXlsb2FkOiAtMVxuICAgIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBzL3NhbGVzL2dlbmVyYWwvc2VhcmNoL2NsaWVudHMvYWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=